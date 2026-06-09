import { NextResponse } from "next/server";
import { Resend } from "resend";
import { confirmationEmail } from "@/lib/email-templates";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Priority-list subscription endpoint.
 *
 * Requires these environment variables in production (.env.local for dev):
 *   RESEND_API_KEY      — API key from resend.com (Sending access)
 *   RESEND_AUDIENCE_ID  — Audience ID from resend.com → Audiences
 *   RESEND_FROM_EMAIL   — Verified sender address, e.g. hello@velovia.bg
 *
 * Graceful degradation: if RESEND_API_KEY is absent (local dev without .env.local),
 * the Resend calls are skipped and the form still works.
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

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "hello@velovia.bg";

  if (apiKey) {
    const resend = new Resend(apiKey);

    // 1. Add to audience (stores the contact)
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

    // 2. Send confirmation email to the subscriber
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
    // Dev mode without credentials — log and continue
    console.log(`[subscribe] Dev mode — would have subscribed: ${email}`);
  }

  // Always return ok:true so the UX success state is shown.
  // Errors are logged server-side but not surfaced to the user.
  return NextResponse.json({ ok: true });
}
