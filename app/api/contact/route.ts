import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const LOGO_URL =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/ChatGPT%20Image%20Sep%2029%2c%202026%2c%2002_21_58%20PM.png";

type Lead = {
  source?: string;
  name?: string;
  phone?: string;
  email?: string;
  age?: string;
  type?: string;
  message?: string;
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #E3EAE6;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#1F4F4A;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #E3EAE6;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#26332F;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildHtml(lead: Required<Lead>) {
  const receivedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Dubai",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#F3EFE3;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F3EFE3;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background-color:#ffffff;border:1px solid #A9C1B8;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="height:8px;background:linear-gradient(90deg,#0C665C 0%,#20AA45 45%,#55BBB0 100%);font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" style="background-color:#1F4F4A;padding:30px 32px 26px;">
                <img src="${LOGO_URL}" alt="AllWin Finances" width="190" style="display:block;max-width:190px;width:190px;height:auto;" />
                <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:2px;color:#55BBB0;font-weight:bold;">NEW WEBSITE ENQUIRY</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 8px;">
                <h1 style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;color:#385445;">New enquiry from the website</h1>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#5f7169;">Submitted through the ${escapeHtml(lead.source)}. You can reply directly to this email to contact the customer.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 6px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E3EAE6;border-bottom:0;border-radius:16px;overflow:hidden;background-color:#ffffff;">
                  ${row("Full name", lead.name)}
                  ${row("Phone number", lead.phone)}
                  ${row("Email", lead.email)}
                  ${row("Age", lead.age)}
                  ${row("Enquiry type", lead.type)}
                  ${row("Source", lead.source)}
                  ${row("Received (Dubai time)", receivedAt)}
                </table>
              </td>
            </tr>
            ${
              lead.message
                ? `<tr>
              <td style="padding:18px 32px 6px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#1F4F4A;">WHAT DO THEY NEED HELP WITH?</p>
                <div style="background-color:#F3EFE3;border:1px solid #A9C1B8;border-radius:16px;padding:18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#26332F;">${escapeHtml(lead.message).replaceAll("\n", "<br />")}</div>
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td align="center" style="padding:24px 32px 30px;">
                <a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;background-color:#55BBB0;color:#1F4F4A;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;text-decoration:none;padding:13px 26px;border-radius:999px;">Reply to ${escapeHtml(lead.name)}</a>
                <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#7a8a84;">AllWin Finances &middot; Business Bay, Dubai, UAE &middot; +971-58-5666955</p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#26332F;padding:16px 32px;text-align:center;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#A9C1B8;">Seamless Finance Solutions Under One Roof</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildThankYouHtml(lead: Required<Lead>) {
  const firstName = escapeHtml(lead.name.split(" ")[0] || lead.name);

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#F3EFE3;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F3EFE3;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;width:100%;background-color:#ffffff;border:1px solid #A9C1B8;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="height:8px;background:linear-gradient(90deg,#0C665C 0%,#20AA45 45%,#55BBB0 100%);font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" style="background-color:#1F4F4A;padding:30px 32px 26px;">
                <img src="${LOGO_URL}" alt="AllWin Finances" width="190" style="display:block;max-width:190px;width:190px;height:auto;" />
                <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:2px;color:#55BBB0;font-weight:bold;">THANK YOU</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 8px;">
                <h1 style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.25;color:#385445;">Thank you, ${firstName}!</h1>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#5f7169;">We have received your enquiry and our team will get back to you as soon as we can. If your matter is urgent, call or WhatsApp us on <a href="tel:+971585666955" style="color:#1F4F4A;font-weight:bold;text-decoration:none;">+971-58-5666955</a>.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 6px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E3EAE6;border-bottom:0;border-radius:16px;overflow:hidden;background-color:#ffffff;">
                  ${row("Your name", lead.name)}
                  ${row("Phone number", lead.phone)}
                  ${row("Email", lead.email)}
                  ${row("Enquiry type", lead.type)}
                </table>
              </td>
            </tr>
            ${
              lead.message
                ? `<tr>
              <td style="padding:18px 32px 6px;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#1F4F4A;">YOUR MESSAGE</p>
                <div style="background-color:#F3EFE3;border:1px solid #A9C1B8;border-radius:16px;padding:18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#26332F;">${escapeHtml(lead.message).replaceAll("\n", "<br />")}</div>
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td align="center" style="padding:24px 32px 30px;">
                <a href="https://wa.me/971585666955" style="display:inline-block;background-color:#55BBB0;color:#1F4F4A;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;text-decoration:none;padding:13px 26px;border-radius:999px;">Chat on WhatsApp</a>
                <p style="margin:18px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#7a8a84;">AllWin Finances &middot; Business Bay, Dubai, UAE &middot; contact@allwinfinances.com</p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#26332F;padding:16px 32px;text-align:center;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#A9C1B8;">Seamless Finance Solutions Under One Roof</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let payload: Lead;

  try {
    payload = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const lead: Required<Lead> = {
    source: clean(payload.source, 80) || "Website form",
    name: clean(payload.name, 120),
    phone: clean(payload.phone, 40),
    email: clean(payload.email, 160),
    age: clean(payload.age, 10),
    type: clean(payload.type, 120),
    message: clean(payload.message, 4000),
  };

  if (!lead.name || !lead.phone || !lead.email) {
    return NextResponse.json(
      { error: "Please add your name, phone number and email." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.FROM_EMAIL;
  const to = process.env.TO_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    console.error("Contact form email is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
  });

  const text = [
    "New website enquiry",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    lead.age ? `Age: ${lead.age}` : "",
    lead.type ? `Enquiry type: ${lead.type}` : "",
    `Source: ${lead.source}`,
    "",
    "Message:",
    lead.message || "-",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"AllWin Finances Website" <${from}>`,
      to,
      replyTo: `"${lead.name.replaceAll('"', "")}" <${lead.email}>`,
      subject: `New Website Enquiry${lead.type ? ` — ${lead.type}` : ""} (${lead.name})`,
      text,
      html: buildHtml(lead),
    });
  } catch (error) {
    console.error("Failed to send contact form email.", error);
    return NextResponse.json(
      { error: "We could not send your message. Please call or WhatsApp us." },
      { status: 502 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"AllWin Finances" <${from}>`,
      to: lead.email,
      replyTo: "contact@allwinfinances.com",
      subject: "Thank you for contacting AllWin Finances",
      text: [
        `Hi ${lead.name},`,
        "",
        "Thank you for contacting AllWin Finances. We have received your enquiry and our team will get back to you as soon as we can.",
        lead.type ? `Enquiry type: ${lead.type}` : "",
        "",
        "If your matter is urgent, call or WhatsApp us on +971-58-5666955.",
        "",
        "AllWin Finances",
        "Business Bay, Dubai, UAE",
      ]
        .filter(Boolean)
        .join("\n"),
      html: buildThankYouHtml(lead),
    });
  } catch (error) {
    console.error("Failed to send thank-you email.", error);
  }

  return NextResponse.json({ ok: true });
}
