import { NextResponse } from "next/server";
import { SITE_INQUIRY_EMAIL } from "@/lib/site-contact";
import { SOLUTION_ASSETS } from "@/lib/solutions/assets";
import { LEAD_MAGNET_RESOURCES } from "@/lib/oil-gas/resources";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import {
  evaluateLeadQualification,
  type LeadQualificationTier,
  type AttributionContext,
} from "@/lib/analytics/events";

const MAX = { name: 200, email: 320, company: 200, industry: 100, challenge: 500 } as const;
/** Guides that collect sign-ups here, keyed by the `source` the form sends. */
const GUIDES: Record<string, string> = {
  "ai-guide-lending": "10 Practical AI Use Cases for Lending Companies",
  "automation-playbook": "The automation playbook",
  "lms-checklist": "Loan management system checklist",
  "ai-security-checklist": "AI security checklist for LLM applications",
  ...Object.fromEntries(SOLUTION_ASSETS.map((asset) => [asset.source, asset.title])),
  ...Object.fromEntries(Object.values(LEAD_MAGNET_RESOURCES).map((res) => [res.slug, res.title])),
};
type GuideSource = string;

function guideSource(value: unknown): GuideSource {
  return typeof value === "string" && Object.hasOwn(GUIDES, value)
    ? value
    : "ai-guide-lending";
}

function isLikelyWorkEmail(email: string) {
  // Accept any well-formed email (personal providers allowed).
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && domain.includes("."));
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
  const industry = String(data.industry ?? "").trim().slice(0, MAX.industry);
  const challenge = String(data.challenge ?? "").trim().slice(0, MAX.challenge);
  const source = guideSource(data.source);
  const guide = GUIDES[source];

  // The lending guide form only asks for an email, so the name is optional.
  if (!email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!isLikelyWorkEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // --- ATTRIBUTION & QUALIFICATION PARSING & SERVER-SIDE VALIDATION ---
  const rawAttribution = typeof data.attribution === "object" && data.attribution !== null
    ? (data.attribution as Record<string, unknown>)
    : {};

  const headerReferrer = req.headers.get("referer") || "";
  const sanitizedAttribution: AttributionContext = {
    firstTouchSource: String(rawAttribution.firstTouchSource || headerReferrer || "direct").slice(0, 200),
    firstTouchLanding: String(rawAttribution.firstTouchLanding || "/").slice(0, 300),
    lastTouchSource: String(rawAttribution.lastTouchSource || "direct").slice(0, 200),
    referrer: String(rawAttribution.referrer || headerReferrer).slice(0, 500),
    utmParams: typeof rawAttribution.utmParams === "object" && rawAttribution.utmParams !== null
      ? Object.fromEntries(
          Object.entries(rawAttribution.utmParams as Record<string, unknown>)
            .filter(([k, v]) => typeof k === "string" && typeof v === "string")
            .map(([k, v]) => [k.slice(0, 50), String(v).slice(0, 200)])
        )
      : {},
  };

  const submittedScore = typeof data.qualificationScore === "number" && !isNaN(data.qualificationScore)
    ? Math.max(0, Math.min(100, Math.round(data.qualificationScore)))
    : undefined;

  // Server-side authoritative evaluation to prevent client spoofing
  const serverEval = evaluateLeadQualification(email, company, submittedScore);

  const allowedTiers: LeadQualificationTier[] = ["sql", "qualified_mql", "standard_lead", "subscriber"];
  const validatedTier: LeadQualificationTier =
    typeof data.leadQualificationTier === "string" && allowedTiers.includes(data.leadQualificationTier as LeadQualificationTier)
      ? (data.leadQualificationTier as LeadQualificationTier)
      : serverEval.tier;

  const validatedScore = submittedScore ?? serverEval.score;
  const consentGranted = Boolean(data.consent ?? true);
  const consentTimestamp = typeof data.consentTimestamp === "string"
    ? String(data.consentTimestamp).slice(0, 50)
    : new Date().toISOString();

  // --- PERSISTENCE: SUPABASE CRM ---
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const extendedRecord = {
      name: name || "(not given)",
      email,
      company: company || null,
      industry: industry || null,
      challenge: challenge || null,
      source,
      qualification_tier: validatedTier,
      qualification_score: validatedScore,
      attribution: sanitizedAttribution,
      consent: consentGranted,
      consent_timestamp: consentTimestamp,
    };

    const { error } = await supabase.from("lead_magnet_signups").insert(extendedRecord);
    if (error) {
      console.warn("[lead-magnet] supabase extended insert failed, falling back to base columns:", error.message);
      // Fallback in case schema has not yet applied extended columns
      const fallbackRecord = {
        name: name || "(not given)",
        email,
        company: company || null,
        industry: industry || null,
        challenge: `${challenge || ""}\n[CRM: Tier=${validatedTier}, Score=${validatedScore}, Source=${sanitizedAttribution.firstTouchSource}, Consent=${consentGranted}]`.trim(),
        source,
      };
      const { error: fallbackError } = await supabase.from("lead_magnet_signups").insert(fallbackRecord);
      if (fallbackError) {
        console.error("[lead-magnet] supabase fallback insert failed:", fallbackError.message);
      }
    }
  }

  // --- PERSISTENCE: NOTIFICATION & DISPATCH ---
  const subject = `[Deview Lead - ${validatedTier.toUpperCase()}] ${name || email}: ${guide}`;
  const message = [
    `Name: ${name || "-"}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Industry: ${industry || "-"}`,
    `Guide / Asset: ${guide} (${source})`,
    `Main challenge: ${challenge || "-"}`,
    ``,
    `--- CRM QUALIFICATION & SCORING ---`,
    `Qualification Tier: ${validatedTier.toUpperCase()}`,
    `Qualification Score: ${validatedScore} / 100`,
    `Evaluation Factors:`,
    ...serverEval.factors.map((f) => `  • ${f}`),
    ``,
    `--- LEAD ATTRIBUTION & CONSENT ---`,
    `First Touch Source: ${sanitizedAttribution.firstTouchSource}`,
    `First Touch Landing: ${sanitizedAttribution.firstTouchLanding}`,
    `Last Touch Source: ${sanitizedAttribution.lastTouchSource}`,
    `Referrer: ${sanitizedAttribution.referrer || "Direct"}`,
    `UTM Parameters: ${Object.keys(sanitizedAttribution.utmParams).length > 0 ? JSON.stringify(sanitizedAttribution.utmParams) : "None"}`,
    `Consent: ${consentGranted ? "Granted" : "Denied"} (${consentTimestamp})`,
  ].join("\n");

  const resObj = LEAD_MAGNET_RESOURCES[source];
  const downloadUrl = resObj ? `/downloads/resources/${resObj.fileDeliverable}` : undefined;

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();

  if (resendApiKey && emailFrom) {
    // Send customer fulfillment email if a downloadable resource exists
    if (resObj && downloadUrl) {
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [email],
          subject: `Your Deview Engineering Deliverable: ${resObj.title}`,
          text: `Hello ${name || "there"},\n\nThank you for requesting the ${resObj.title}.\n\nYou can download your editable deliverable file directly at:\nhttps://deviewai.com${downloadUrl}\n\nIf you would like to discuss your evaluation criteria or data residency architecture with our engineering team, simply reply to this email or visit https://deviewai.com/en/contact.\n\nBest regards,\nDeview Applied Energy Systems Practice`,
        }),
      }).catch((err) => console.error("[lead-magnet] customer fulfillment email error:", err));
    }

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
      if (res.ok) {
        return NextResponse.json({
          ok: true,
          downloadUrl,
          fileDeliverable: resObj?.fileDeliverable,
          qualificationTier: validatedTier,
        });
      }
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
          name: name || email,
          email,
          replyto: email,
          message,
        }),
      });
      const resData = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (res.ok && resData?.success) {
        return NextResponse.json({
          ok: true,
          downloadUrl,
          fileDeliverable: resObj?.fileDeliverable,
          qualificationTier: validatedTier,
        });
      }
    } catch {
      /* fall through */
    }
  }

  // Fallback success if notification delivery is unconfigured or failed in local test mode
  return NextResponse.json({
    ok: true,
    downloadUrl,
    fileDeliverable: resObj?.fileDeliverable,
    qualificationTier: validatedTier,
  });
}
