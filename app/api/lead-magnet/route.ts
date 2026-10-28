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

/** Sliding window rate limiting: maps key -> timestamp array */
interface RateLimitEntry {
  timestamps: number[];
}
const ipRateLimits = new Map<string, RateLimitEntry>();
const emailRateLimits = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_IP = 6;
const MAX_PER_EMAIL = 3;

function checkRateLimit(map: Map<string, RateLimitEntry>, key: string, max: number): boolean {
  const now = Date.now();
  const entry = map.get(key) || { timestamps: [] };
  entry.timestamps = entry.timestamps.filter((ts) => now - ts < WINDOW_MS);
  if (entry.timestamps.length >= max) {
    map.set(key, entry);
    return false;
  }
  entry.timestamps.push(now);
  map.set(key, entry);
  return true;
}

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

function isValidEmailFormat(email: string): boolean {
  if (!email || email.length > MAX.email) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain || domain.length < 3) return false;
  // Basic sanity check: domain must contain a period, no leading/trailing dot or spaces
  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".")) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
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

  // Multi-field Honeypot check: silently return success for automated bots
  if (
    (data.honeypot && String(data.honeypot).trim()) ||
    (data.hp_field && String(data.hp_field).trim()) ||
    (data.b_comment && String(data.b_comment).trim()) ||
    (data.company_website && String(data.company_website).trim())
  ) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim().slice(0, MAX.name);
  const email = String(data.email ?? "").trim().slice(0, MAX.email);
  const company = String(data.company ?? "").trim().slice(0, MAX.company);
  const industry = String(data.industry ?? "").trim().slice(0, MAX.industry);
  const challenge = String(data.challenge ?? "").trim().slice(0, MAX.challenge);
  const source = guideSource(data.source);
  const guide = GUIDES[source];

  if (!email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!isValidEmailFormat(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // Rate Limiting by IP and Email address
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown-ip";

  const supabase = getSupabaseAdmin();

  // Durable Rate Limiting via Supabase with in-memory fallback
  const tenMinutesAgo = new Date(Date.now() - WINDOW_MS).toISOString();
  if (supabase) {
    try {
      if (clientIp !== "unknown-ip") {
        const { count: ipCount, error: ipErr } = await supabase
          .from("lead_magnet_signups")
          .select("id", { count: "exact", head: true })
          .eq("ip_address", clientIp)
          .gte("created_at", tenMinutesAgo);

        if (!ipErr && typeof ipCount === "number" && ipCount >= MAX_PER_IP) {
          return NextResponse.json(
            { ok: false, error: "rate_limited", message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
      }

      const { count: emailCount, error: emailErr } = await supabase
        .from("lead_magnet_signups")
        .select("id", { count: "exact", head: true })
        .eq("email", email.toLowerCase())
        .gte("created_at", tenMinutesAgo);

      if (!emailErr && typeof emailCount === "number" && emailCount >= MAX_PER_EMAIL) {
        return NextResponse.json(
          { ok: false, error: "rate_limited", message: "Too many requests for this email. Please try again later." },
          { status: 429 }
        );
      }
    } catch (err) {
      console.warn("[lead-magnet] durable rate limiting query failed, falling back to memory:", err);
    }
  }

  // In-memory sliding window rate limiting
  if (clientIp !== "unknown-ip" && !checkRateLimit(ipRateLimits, clientIp, MAX_PER_IP)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  if (!checkRateLimit(emailRateLimits, email.toLowerCase(), MAX_PER_EMAIL)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "Too many requests for this email. Please try again later." },
      { status: 429 }
    );
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

  const assessmentScore = typeof data.assessmentScore === "number" && !isNaN(data.assessmentScore)
    ? Math.max(0, Math.min(100, Math.round(data.assessmentScore)))
    : typeof data.qualificationScore === "number" && !isNaN(data.qualificationScore)
    ? Math.max(0, Math.min(100, Math.round(data.qualificationScore)))
    : undefined;

  // Server-authoritative evaluation: client qualification tier is ignored to prevent spoofing
  const serverEval = evaluateLeadQualification(email, company, assessmentScore);
  const validatedTier: LeadQualificationTier = serverEval.tier;
  const validatedScore = serverEval.score;

  // CRITICAL CONSENT FIX: Strictly explicit opt-in. Defaults to false if omitted, null, or false.
  const consentGranted = Boolean(data.consent === true || data.marketing_consent === true);
  // Consent timestamp is strictly null when consent is not granted
  const consentTimestamp = consentGranted
    ? (typeof data.consentTimestamp === "string" && data.consentTimestamp
        ? String(data.consentTimestamp).slice(0, 50)
        : new Date().toISOString())
    : null;

  // --- PERSISTENCE: SUPABASE CRM ---
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
      ip_address: clientIp !== "unknown-ip" ? clientIp : null,
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
        challenge: `${challenge || ""}\n[CRM: Tier=${validatedTier}, Score=${validatedScore}, Source=${sanitizedAttribution.firstTouchSource}, MarketingConsent=${consentGranted}]`.trim(),
        source,
      };
      const { error: fallbackError } = await supabase.from("lead_magnet_signups").insert(fallbackRecord);
      if (fallbackError) {
        console.error("[lead-magnet] supabase fallback insert failed:", fallbackError.message);
      }
    }

    // Persist qualified lead into client inquiries queue
    if (validatedTier === "sql" || validatedTier === "qualified_mql") {
      const { error: inquiryError } = await supabase.from("client_inquiries").insert({
        name: name || "(not given)",
        email,
        company: company || null,
        details: `[CRM ${validatedTier.toUpperCase()}] Asset: ${guide} (${source}). Score: ${validatedScore}/100. Factors: ${serverEval.factors.join("; ")}. Attribution: ${sanitizedAttribution.firstTouchSource} -> ${sanitizedAttribution.lastTouchSource}. Challenge: ${challenge || "None"}. Marketing Consent: ${consentGranted ? "Granted" : "Denied"}`,
        source: `lead_magnet:${source}`,
        status: "new",
        user_agent: req.headers.get("user-agent"),
        ip_address: clientIp !== "unknown-ip" ? clientIp : null,
      });
      if (inquiryError) {
        console.warn("[lead-magnet] client_inquiries qualified lead persistence failed:", inquiryError.message);
      }
    }
  }

  // PRD 20.2: Server-side qualified lead reporting
  if (validatedTier === "sql" || validatedTier === "qualified_mql") {
    console.info(`[PRD 20.2 Event: qualified_lead]`, {
      event: "qualified_lead",
      first_touch_asset: sanitizedAttribution.firstTouchLanding,
      last_touch_asset: sanitizedAttribution.lastTouchSource,
      target_market: industry || "energy",
      use_case: source,
      lead_id: email,
      tier: validatedTier,
      score: validatedScore,
      marketing_consent: consentGranted,
      timestamp: new Date().toISOString(),
    });
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
    `Marketing Consent: ${consentGranted ? "Granted (Opted-in)" : "Not Granted (Fulfillment Only)"} (${consentTimestamp})`,
  ].join("\n");

  const resObj = LEAD_MAGNET_RESOURCES[source];
  const downloadUrl = resObj ? `/downloads/resources/${resObj.fileDeliverable}` : undefined;

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const emailFrom = process.env.EMAIL_FROM?.trim();

  if (resendApiKey && emailFrom) {
    // RELIABLE DELIVERY FIX: Await customer fulfillment email so serverless runtimes do not terminate early
    if (resObj && downloadUrl) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: emailFrom,
            to: [email],
            subject: `Your Deview Engineering Deliverable: ${resObj.title}`,
            text: `Hello ${name || "there"},\n\nThank you for requesting the ${resObj.title}.\n\nYou can download your editable deliverable file directly at:\nhttps://deviewai.com${downloadUrl}\n\n${
              consentGranted
                ? "As requested, our engineering team will also share relevant architectural benchmarks.\n\n"
                : ""
            }If you would like to discuss your evaluation criteria or data residency architecture with our engineering team, simply reply to this email or visit https://deviewai.com/en/contact.\n\nBest regards,\nDeview Applied Energy Systems Practice`,
          }),
        });
      } catch (err) {
        console.error("[lead-magnet] customer fulfillment email error:", err);
      }
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
