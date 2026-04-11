import { NextResponse } from "next/server";

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return NextResponse.json({ ok: false, mailto: true });
  }

  const params = new URLSearchParams();
  params.set("access_key", accessKey);
  params.set("subject", `[DeView inquiry] ${name}`);
  params.set("from_name", name);
  params.set("name", name);
  params.set("email", email);
  params.set("replyto", email);
  params.set("message", `Work email: ${email}\nCompany: ${company || "—"}\n\n${details}`);

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: params.toString(),
  });

  let result: { success?: boolean; message?: string } = {};
  try {
    result = (await upstream.json()) as { success?: boolean; message?: string };
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  if (!upstream.ok || !result.success) {
    return NextResponse.json(
      { ok: false, error: "send_failed", detail: result.message },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
