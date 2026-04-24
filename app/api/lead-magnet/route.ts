import { NextResponse } from "next/server";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const MAX = { name: 200, email: 320, company: 200, industry: 100, challenge: 200 } as const;
const LEAD_SOURCE = "ai-guide-lending" as const;

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
  const industry = String(data.industry ?? "").trim().slice(0, MAX.industry);
  const challenge = String(data.challenge ?? "").trim().slice(0, MAX.challenge);

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("lead_magnet_signups").insert({
      name,
      email,
      company: company || null,
      industry: industry || null,
      challenge: challenge || null,
      source: LEAD_SOURCE,
    });
    if (error) {
      console.error("[lead-magnet] supabase insert failed:", error.message);
      // fall through to email notification rather than failing the request
    }
  }

  const subject = `[DeView Lead] ${name} — AI Guide for Lending`;
  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Industry: ${industry || "—"}`,
    `Main challenge: ${challenge || "—"}`,
    ``,
    `Guide: 10 Practical AI Use Cases for Lending Companies`,
  ].join("\n");

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();

  if (resendApiKey && emailFrom) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [SITE_INQUIRY_EMAIL],
          subject,
          text: message,
          reply_to: email,
        }),
      });
      if (res.ok) return NextResponse.json({ ok: true });
    } catch {
      /* fall through */
    }
  }

  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          name,
          email,
          replyto: email,
          message,
        }),
      });
      const resData = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (res.ok && resData?.success) return NextResponse.json({ ok: true });
    } catch {
      /* fall through */
    }
  }

  return NextResponse.json({ ok: true });
}
