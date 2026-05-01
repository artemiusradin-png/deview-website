import { NextResponse } from "next/server";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const email = String(data.email ?? "").trim().slice(0, 320);
  const source = String(data.source ?? "newsletter").trim().slice(0, 200);

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase
      .from("newsletter_signups")
      .upsert({ email, source, updated_at: new Date().toISOString() }, { onConflict: "email" })
      .then(({ error }) => {
        if (error) console.error("[newsletter] supabase upsert failed:", error.message);
      });
  }

  const subject = `[DeView Newsletter] ${email} — ${source}`;
  const message = `New newsletter signup\n\nEmail: ${email}\nSource: ${source}`;

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();

  if (resendApiKey && emailFrom) {
    try {
      await fetch("https://api.resend.com/emails", {
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
    } catch {
      /* fall through */
    }
  }

  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          email,
          message,
        }),
      });
    } catch {
      /* fall through */
    }
  }

  return NextResponse.json({ ok: true });
}
