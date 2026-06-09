import { NextResponse } from "next/server";
import { Resend } from "resend";
import { confirmationEmail } from "@/lib/email-templates";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Priority-list subscription endpoint.
 *
 * Requires these environment variables in production (.env.local for dev):
 *   RESEND_API_KEY            — API key from resend.com (Sending access)
 *   RESEND_AUDIENCE_ID        — Audience ID from resend.com → Audiences
 *   RESEND_FROM_EMAIL         — Verified sender address, e.g. hello@velovia.eu
 *   GOOGLE_SHEETS_WEBHOOK_URL — Apps Script Web App URL for the waitlist sheet
 *
 * Graceful degradation: each integration is skipped independently if its
 * env var is absent — the form always returns { ok: true } to the user.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 422 },
    );
  }

  // ── 1. Resend: add to Audience + send confirmation email ─────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "hello@velovia.eu";

  if (apiKey) {
    const resend = new Resend(apiKey);

    if (audienceId) {
      const { error: contactError } = await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });
      if (contactError) {
        console.error("[subscribe] Resend contact error:", contactError);
      }
    }

    const { error: emailError } = await resend.emails.send({
      from: `Velovia Premium <${fromEmail}>`,
      to: email,
      subject: "You're on the Velovia Priority List ✓",
      html: confirmationEmail(),
    });
    if (emailError) {
      console.error("[subscribe] Resend email error:", emailError);
    }
  } else {
    console.log(`[subscribe] Resend not configured — skipping for: ${email}`);
  }

  // ── 2. Google Sheets: append row (ID · Timestamp · Email) ─────────────────
  const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (sheetsWebhookUrl) {
    try {
      const id = crypto.randomUUID().slice(0, 8);
      const timestamp = new Date().toISOString();
      const payload = JSON.stringify({ id, timestamp, email });

      console.log("[subscribe] Calling Sheets webhook for:", email);

      // Google Apps Script Web Apps redirect POST → GET, losing the body.
      // Work around by sending as URL-encoded form data which survives redirects,
      // OR by using a manual redirect-following approach with POST preserved.
      // Simplest reliable fix: send as a GET request with query params.
      const url = new URL(sheetsWebhookUrl);
      url.searchParams.set("id", id);
      url.searchParams.set("timestamp", timestamp);
      url.searchParams.set("email", email);

      const res = await fetch(url.toString(), { method: "GET" });
      const text = await res.text();
      console.log("[subscribe] Sheets response:", res.status, text.slice(0, 100));
    } catch (err) {
      console.error("[subscribe] Sheets webhook error:", err);
    }
  } else {
    console.log("[subscribe] GOOGLE_SHEETS_WEBHOOK_URL not set — skipping.");
  }

  // Always return ok:true — errors are logged server-side only.
  return NextResponse.json({ ok: true });
}
