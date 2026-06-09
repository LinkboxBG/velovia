/**
 * Branded HTML email templates for Velovia Premium.
 * These are plain strings — no JSX — so they can be used in any server context.
 */

export function confirmationEmail(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Velovia Priority List</title>
</head>
<body style="margin:0;padding:0;background:#0E0F12;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0F12;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0E0F12;padding:36px 48px 32px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#D6336C;">
                PREMIUM CYCLING CAMPS
              </p>
              <h1 style="margin:10px 0 0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                VELOVIA
              </h1>
            </td>
          </tr>

          <!-- Hero accent line -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#D6336C,#B82A59);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 48px 40px;">
              <h2 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1A1A1A;line-height:1.25;">
                You're on the Priority List ✓
              </h2>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4A4A4A;">
                Thank you for your interest in <strong>Velovia Premium Cycling Camps</strong>.
                You'll be among the first to know when registrations open for our
                2026 camps in the Rhodope Mountains, Bulgaria.
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4A4A4A;">
                As a priority-list member you'll receive:
              </p>
              <ul style="margin:0 0 28px;padding-left:20px;font-size:15px;line-height:2;color:#4A4A4A;">
                <li>Early access to the 2026 camp calendar</li>
                <li>Exclusive founder pricing before public launch</li>
                <li>First pick of limited spots</li>
              </ul>

              <!-- CTA button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                <tr>
                  <td style="background:#D6336C;border-radius:10px;">
                    <a href="https://velovia.bg"
                       style="display:inline-block;padding:14px 32px;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
                      Learn More About Velovia
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;line-height:1.7;color:#4A4A4A;">
                We look forward to welcoming you personally to the Rhodope Mountains.<br />
                <span style="font-style:italic;color:#D6336C;">— Evgeni Gaydov, Founder of Velovia</span>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 48px;"><hr style="border:none;border-top:1px solid #e8e6e2;margin:0;" /></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 48px;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#9a9a9a;">
                Velovia Premium · Rhodope Mountains, Bulgaria
              </p>
              <p style="margin:0;font-size:11px;color:#b8b8b8;line-height:1.6;">
                You received this email because you signed up for the Velovia priority list.<br />
                If this wasn't you, you can safely ignore this message.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
