"use client";

import { useState, type FormEvent } from "react";
import { buildInquiryMailto } from "@/lib/site-contact";
import styles from "./home.module.css";

/**
 * Short inquiry form on the right of the landing hero. Posts to /api/contact like the full
 * form further down the page, with its own state so the two never show each other's status.
 */
export function HeroInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [emailDraft, setEmailDraft] = useState<string | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const inquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
      honeypot: String(data.get("company_website") ?? ""),
    };
    setStatus("sending");
    setEmailDraft(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(inquiry),
      });
      const result = await response.json().catch(() => null);
      if (response.ok && result?.ok) {
        setStatus("success");
        form.reset();
        return;
      }
    } catch {
      // Fall through to the email fallback below.
    }
    setEmailDraft(buildInquiryMailto(inquiry));
    setStatus("error");
  }

  return (
    <form
      className={styles.heroForm}
      onSubmit={submit}
      aria-label="Tell us about your project"
      aria-busy={status === "sending"}
    >
      <div className={styles.heroFormHead}>
        <p className={styles.eyebrow}>Start a project</p>
        <p className={styles.heroFormTitle}>Tell us what you need built.</p>
      </div>
      <div className={styles.heroFormRow}>
        <label>
          Name
          <input name="name" autoComplete="name" required maxLength={200} />
        </label>
        <label>
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={320}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className={styles.heroFormOptional}>
        Company <span>(optional)</span>
        <input name="company" autoComplete="organization" maxLength={200} />
      </label>
      <label>
        Project
        <textarea
          name="details"
          required
          minLength={10}
          maxLength={5000}
          rows={3}
          placeholder="What should the software do?"
        />
      </label>
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Leave this empty
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        type="submit"
        className={`${styles.button} ${styles.buttonAccent}`}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send"}
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M7 25 25 7M7 7h18v18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <p className={styles.heroFormNote}>
        A reply from an engineer within 1–2 business days.
      </p>
      <div aria-live="polite" role="status" className={styles.formFeedback}>
        {status === "success" && (
          <p>Thanks. We reply within 1–2 business days.</p>
        )}
        {status === "error" && (
          <p>
            We couldn’t send this just now. Try again
            {emailDraft && (
              <>
                , or <a href={emailDraft}>send it from your email app</a>
              </>
            )}
            .
          </p>
        )}
      </div>
    </form>
  );
}
