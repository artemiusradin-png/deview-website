import { NextResponse } from "next/server";
import { SITE_INQUIRY_EMAIL, buildInquiryText } from "@/lib/site-contact";

const MAX = { name: 200, email: 320, company: 200, details: 12_000 } as const;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (data.honeypot && String(data.honeypot).trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim().slice(0, MAX.name);
  const email = String(data.email ?? "").trim().slice(0, MAX.email);
  const company = String(data.company ?? "").trim().slice(0, MAX.company);
  const details = String(data.details ?? "").trim().slice(0, MAX.details);

  if (!name || !email || !details) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const subject = `[DeView inquiry] ${name}`;
  const message = buildInquiryText({ email, company, details });
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();

  if (resendApiKey && emailFrom) {
    try {
      const upstream = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [SITE_INQUIRY_EMAIL],
          subject,
          text: `Name: ${name}\n${message}`,
          reply_to: email,
        }),
      });

      if (upstream.ok) {
        return NextResponse.json({ ok: true });
      }
    } catch {
      /* fall through to mailto */
    }
  }

  return NextResponse.json({ ok: false, mailto: true });
}
