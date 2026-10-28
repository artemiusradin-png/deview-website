"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  getAnalyticsConsentState,
  setAnalyticsConsent,
  type ConsentState,
} from "@/lib/analytics/events";

const CONSENT_CHANGE_EVENT = "deview_consent_change";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  };
}

function getConsentSnapshot(): ConsentState {
  return getAnalyticsConsentState();
}

function getServerSnapshot(): ConsentState {
  return "granted";
}

export function ConsentBanner() {
  const consentState = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    getServerSnapshot
  );

  if (consentState !== "unset") {
    return null;
  }

  const handleAccept = () => {
    setAnalyticsConsent(true);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    }
  };

  const handleDecline = () => {
    setAnalyticsConsent(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    }
  };

  return (
    <aside
      aria-label="Privacy & Analytics Preferences"
      role="region"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "var(--ds-surface, #ffffff)",
        borderTop: "1px solid var(--ds-line, rgba(0, 0, 0, 0.1))",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.08)",
        padding: "16px 24px calc(16px + env(safe-area-inset-bottom, 0px))",
        color: "var(--ds-ink, #12100e)",
        fontSize: "13px",
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ flex: "1 1 500px", minWidth: "260px" }}>
          <p style={{ margin: 0, color: "var(--ds-muted, #555047)" }}>
            We use cookies to understand how our technical guides are read and to improve site performance.
            We never run ads or track you across the web. Review our{" "}
            <Link
              href="/en/privacy"
              style={{
                color: "var(--ds-ink, #12100e)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontWeight: 500,
              }}
            >
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={handleDecline}
            style={{
              padding: "7px 14px",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              borderRadius: "4px",
              border: "1px solid var(--ds-line, #ded5c5)",
              backgroundColor: "transparent",
              color: "var(--ds-ink, #12100e)",
              cursor: "pointer",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            style={{
              padding: "7px 16px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              borderRadius: "4px",
              border: "1px solid var(--ds-ink, #12100e)",
              backgroundColor: "var(--ds-ink, #12100e)",
              color: "var(--ds-canvas, #ffffff)",
              cursor: "pointer",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}
