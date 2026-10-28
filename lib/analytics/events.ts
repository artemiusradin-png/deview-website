/**
 * Client and server analytics event taxonomy and attribution utilities.
 * Implements PRD Section 20.2 Event Taxonomy, explicit consent handling,
 * and CRM qualification scoring.
 */

export interface AttributionContext {
  firstTouchSource: string;
  firstTouchLanding: string;
  lastTouchSource: string;
  referrer: string;
  utmParams: Record<string, string>;
}

export type LeadQualificationTier = "sql" | "qualified_mql" | "standard_lead" | "subscriber";

export interface LeadScoreAssessment {
  tier: LeadQualificationTier;
  score: number;
  factors: string[];
}

export type ConsentState = "granted" | "denied" | "unset";

/**
 * PRD Section 20.2 Event Taxonomy definitions
 */
export type PRDAnalyticsEvent =
  | {
      name: "seo_market_page_view";
      properties: {
        asset_id: string;
        country: string;
        region: string;
        locale: string;
        referrer?: string;
      };
    }
  | {
      name: "seo_solution_engagement";
      properties: {
        asset_id: string;
        solution: string;
        locale: string;
      };
    }
  | {
      name: "proof_open";
      properties: {
        source_asset_id: string;
        proof_id: string;
      };
    }
  | {
      name: "resource_preview";
      properties: {
        source_asset_id: string;
        resource_id: string;
      };
    }
  | {
      name: "resource_download";
      properties: {
        resource_id: string;
        version: string;
        locale: string;
        lead_id?: string;
      };
    }
  | {
      name: "assessment_complete";
      properties: {
        resource_id: string;
        score_band: "advanced" | "moderate" | "foundation";
        locale: string;
      };
    }
  | {
      name: "contact_start";
      properties: {
        source_asset_id: string;
        cta_variant: string;
      };
    }
  | {
      name: "contact_submit";
      properties: {
        source_asset_id: string;
        use_case?: string;
        market?: string;
        locale: string;
        lead_id?: string;
      };
    }
  | {
      name: "qualified_lead";
      properties: {
        first_touch_asset?: string;
        last_touch_asset?: string;
        target_market?: string;
        use_case?: string;
        lead_id?: string;
        tier?: LeadQualificationTier;
        score?: number;
      };
    };

export type LegacyAnalyticsEventName =
  | "page_view"
  | "lead_magnet_download"
  | "assessment_completed"
  | "citation_click"
  | "cta_click";

export type AllAnalyticsEventName = PRDAnalyticsEvent["name"] | LegacyAnalyticsEventName;

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "mail.com",
  "aol.com",
  "zoho.com",
  "proton.me",
  "protonmail.com",
]);

/**
 * Evaluates CRM lead qualification tier based on corporate domain, company presence, and assessment score.
 */
export function evaluateLeadQualification(
  email: string,
  company?: string,
  assessmentScore?: number
): LeadScoreAssessment {
  let score = 0;
  const factors: string[] = [];

  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  const isCorporateDomain = domain.includes(".") && !FREE_EMAIL_DOMAINS.has(domain);

  if (isCorporateDomain) {
    score += 40;
    factors.push("Corporate enterprise email domain (+40)");
  } else {
    factors.push("Generic or free webmail provider (+0)");
  }

  if (company && company.trim().length >= 3) {
    score += 20;
    factors.push("Verified company / concession name (+20)");
  }

  if (typeof assessmentScore === "number") {
    if (assessmentScore >= 75) {
      score += 40;
      factors.push(`Advanced architecture readiness (${assessmentScore}% maturity) (+40)`);
    } else if (assessmentScore >= 50) {
      score += 25;
      factors.push(`Moderate architecture readiness (${assessmentScore}% maturity) (+25)`);
    } else {
      score += 10;
      factors.push(`Foundation stage maturity (${assessmentScore}%) (+10)`);
    }
  }

  let tier: LeadQualificationTier = "standard_lead";
  if (score >= 80) {
    tier = "sql";
  } else if (score >= 50) {
    tier = "qualified_mql";
  }

  return { tier, score, factors };
}

/**
 * Initializes and retrieves first-touch and last-touch attribution parameters.
 */
export function getAttributionContext(): AttributionContext {
  if (typeof window === "undefined") {
    return {
      firstTouchSource: "direct",
      firstTouchLanding: "/",
      lastTouchSource: "direct",
      referrer: "",
      utmParams: {},
    };
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith("utm_")) {
        utmParams[key] = value;
      }
    }

    const currentPath = window.location.pathname;
    const currentRef = document.referrer;
    const currentSource = urlParams.get("utm_source") || (currentRef ? new URL(currentRef).hostname : "direct");

    // First touch
    if (!sessionStorage.getItem("deview_first_touch_source")) {
      sessionStorage.setItem("deview_first_touch_source", currentSource);
      sessionStorage.setItem("deview_first_touch_landing", currentPath);
    }

    // Last touch
    sessionStorage.setItem("deview_last_touch_source", currentSource);

    return {
      firstTouchSource: sessionStorage.getItem("deview_first_touch_source") || "direct",
      firstTouchLanding: sessionStorage.getItem("deview_first_touch_landing") || currentPath,
      lastTouchSource: currentSource,
      referrer: currentRef,
      utmParams,
    };
  } catch {
    return {
      firstTouchSource: "direct",
      firstTouchLanding: "/",
      lastTouchSource: "direct",
      referrer: "",
      utmParams: {},
    };
  }
}

/**
 * Returns the explicit analytics consent state: 'granted', 'denied', or 'unset'.
 */
export function getAnalyticsConsentState(): ConsentState {
  if (typeof window === "undefined") return "unset";
  try {
    const consent = localStorage.getItem("deview_analytics_consent");
    if (consent === "granted") return "granted";
    if (consent === "denied") return "denied";
    return "unset";
  } catch {
    return "unset";
  }
}

/**
 * Sets explicit user consent for analytics.
 */
export function setAnalyticsConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("deview_analytics_consent", granted ? "granted" : "denied");
    localStorage.setItem("deview_analytics_consent_ts", new Date().toISOString());
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Checks if user has given explicit analytics consent.
 * Defaults to explicit check (requires "granted").
 */
export function hasAnalyticsConsent(): boolean {
  return getAnalyticsConsentState() === "granted";
}

/**
 * Emits an analytics event if permitted by explicit consent.
 * Strictly adheres to PRD Section 20.2:
 * "Analytics must not receive confidential operating data, document contents, or free-text requirements by default."
 */
export function emitAnalyticsEvent(
  eventName: AllAnalyticsEventName,
  properties: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  const consentState = getAnalyticsConsentState();
  if (consentState === "denied") {
    return;
  }

  // PRD Section 20.2: lead_id where consented
  const sanitizedProperties = { ...properties };
  if (!hasAnalyticsConsent() && "lead_id" in sanitizedProperties) {
    delete sanitizedProperties.lead_id;
  }

  const attribution = getAttributionContext();
  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    consent_state: consentState,
    attribution,
    ...sanitizedProperties,
  };

  // Push to dataLayer if present (Google Tag Manager / Analytics standard)
  const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(eventPayload);
  }

  // Developer console dispatch
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Event: ${eventName}]`, eventPayload);
  }
}
