import { NextResponse } from "next/server";
import { SITE_INQUIRY_EMAIL, buildInquiryText } from "@/lib/site-contact";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const MAX = { name: 200, email: 320, company: 200, details: 12_000 } as const;

type InquiryInput = {
  name: string;
  email: string;
  company: string;
  details: string;
};

async function saveInquiry(req: Request, input: InquiryInput) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return { skipped: true };

  const { error } = await supabase.from("client_inquiries").insert({
    name: input.name,
    email: input.email,
    company: input.company || null,
    details: input.details,
    source: "contact_form",
    status: "new",
    user_agent: req.headers.get("user-agent"),
    ip_address:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      null,
  });

  if (error) {
    console.error("[contact] supabase insert failed:", error.message);
    return { error };
  }

  return { saved: true };
}

async function sendNotification(input: InquiryInput) {
  const subject = `[DeView inquiry] ${input.name}`;
  const message = buildInquiryText(input);
  const text = `Name: ${input.name}\n${message}`;
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
          text,
          reply_to: input.email,
        }),
      });

      if (upstream.ok) return true;
      console.error("[contact] resend notification failed:", upstream.status);
    } catch (error) {
      console.error("[contact] resend notification error:", error);
    }
  }

  const web3Key =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ??
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    try {
      const upstream = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          name: input.name,
          email: input.email,
          replyto: input.email,
          message,
          company: input.company || undefined,
        }),
      });
      const data = (await upstream.json().catch(() => null)) as { success?: boolean } | null;
      if (upstream.ok && data?.success) return true;
      console.error("[contact] web3forms notification failed:", upstream.status);
    } catch (error) {
      console.error("[contact] web3forms notification error:", error);
    }
  }

  return false;
}

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

  const input = { name, email, company, details };
  const saveResult = await saveInquiry(req, input);
  if ("error" in saveResult) {
    return NextResponse.json({ ok: false, error: "save_failed" }, { status: 500 });
  }

  if (await sendNotification(input)) return NextResponse.json({ ok: true });

  return NextResponse.json({ ok: false, mailto: true });
}
