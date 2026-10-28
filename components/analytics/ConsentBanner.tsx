"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import {
  getAnalyticsConsentState,
  setAnalyticsConsent,
  type ConsentState,
} from "@/lib/analytics/events";
import styles from "./ConsentBanner.module.css";

const CONSENT_CHANGE_EVENT = "deview_consent_change";

// Keep consent state synchronized across tabs and any future preferences controls.
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
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
      role="region"
      className={styles.banner}
    >
      <div className={styles.header}>
        <div className={styles.iconFrame} aria-hidden="true">
          <Cookie className={styles.cookieIcon} strokeWidth={1.65} />
        </div>

        <div>
          <p className={styles.eyebrow}>Privacy, by design</p>
          <h2 id="consent-title" className={styles.title}>
            A small cookie. No trail.
          </h2>
        </div>
      </div>

      <p id="consent-description" className={styles.description}>
        We use cookies to understand how our technical guides are read and to improve site performance.
        We never run ads or track you across the web. Review our{" "}
        <Link href="/en/privacy" className={styles.privacyLink}>
          Privacy Policy
        </Link>{" "}
        for full details.
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={handleDecline}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className={`${styles.button} ${styles.primaryButton}`}
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
