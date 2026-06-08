import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Priority-list subscription endpoint.
 *
 * For now this only validates the email and echoes success — no data is
 * stored and no third-party keys are required.
 *
 * TODO: wire up a real provider here, e.g.:
 *   - Resend     → await resend.contacts.create({ email, audienceId })
 *   - Mailchimp  → POST to /lists/{id}/members
 *   - Google Sheet → append a row via the Sheets API / a webhook
 * Read credentials from environment variables (never commit keys).
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

  // TODO: persist / forward `email` to your provider of choice.

  return NextResponse.json({ ok: true });
}
