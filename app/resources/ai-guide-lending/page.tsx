"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";

const GUIDE_URL = "/resources/ai-guide-lending/guide";

const CHALLENGES = [
  "Document review and processing",
  "Customer communication and follow-up",
  "Sales and lead qualification",
  "Compliance and reporting",
  "Internal knowledge and employee questions",
  "CRM and data management",
  "Other",
] as const;

const INDUSTRIES = [
  "Lending / Financial Services",
  "Real Estate",
  "Insurance",
  "Healthcare",
  "Manufacturing",
  "Professional Services",
  "Other",
] as const;

const WHAT_YOU_GET = [
  "10 concrete AI use cases mapped to lending operations",
  "Which workflows are safe to automate without data risk",
  "A priority matrix: impact vs. complexity vs. risk",
  "The 4 safest first AI projects for small lending teams",
  "A framework for evaluating any AI use case in 3 questions",
];

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "mail.com",
  "gmx.com",
  "zoho.com",
  "yandex.com",
]);

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function isLikelyWorkEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && domain.includes(".") && !PERSONAL_EMAIL_DOMAINS.has(domain));
}

export default function LeadMagnetPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("website") ?? "").trim()) {
      setStatus("success");
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const industry = String(fd.get("industry") ?? "").trim();
    const challenge = String(fd.get("challenge") ?? "").trim();

    if (!isLikelyWorkEmail(email)) {
      setStatus("error");
      setFeedback("Please use a work email address so we can send the lending guide to the right business contact.");
      return;
    }

    setStatus("sending");
    setFeedback(null);

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, industry, challenge }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (data.ok || res.ok) {
        sessionStorage.setItem("deview-guide-lending", "1");
        setStatus("success");
      } else if (data.error === "work_email_required") {
        setStatus("error");
        setFeedback("Please use a work email address so we can send the guide to the right business contact.");
      } else {
        setStatus("error");
        setFeedback("Something went wrong — please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Something went wrong — please try again.");
    }
  }

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">

          {/* Back nav */}
          <div className="mb-8 flex items-center justify-between border-b border-[var(--white-20)] pb-5 sm:mb-10">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.24em] text-[var(--white-80)] sm:min-h-0"
            >
              DEVIEW
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:min-h-0"
            >
              ← Back to home
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left: offer */}
            <motion.div
              initial={rise.initial}
              animate={rise.animate}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-8"
            >
              <div className="resource-landing-hero">
                <p className="resource-kicker mb-5">
                  <span>FREE GUIDE</span>
                  <span>LENDING &amp; FINANCIAL SERVICES</span>
                </p>
                <h1 className="hero-heading mb-5 text-[clamp(1.5rem,5vw,2.2rem)] leading-[1.15] text-[var(--white-100)]">
                  <span className="resource-title-accent resource-title-accent--blue">10 PRACTICAL</span> AI USE CASES FOR{" "}
                  <span className="resource-title-accent resource-title-accent--green">LENDING COMPANIES</span>
                </h1>
                <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                  A practical guide for small and mid-sized lending firms that want to reduce manual work,
                  speed up document processing, and improve operations — without putting confidential client
                  data at risk.
                </p>
                <div className="resource-chip-row">
                  <span>Document review</span>
                  <span>Client follow-up</span>
                  <span>Compliance support</span>
                </div>
              </div>

              <div className="resource-info-panel resource-info-panel--cyan panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-6">
                <p className="resource-panel-label mb-4">WHAT&apos;S INSIDE</p>
                <div className="space-y-3">
                  {WHAT_YOU_GET.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="resource-list-marker mt-[0.15rem] shrink-0 text-[0.6rem]">+</span>
                      <span className="text-sm leading-snug text-[var(--white-90)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="resource-info-panel resource-info-panel--amber panel border border-[var(--white-20)] bg-[var(--surface-elevated)] p-5 md:p-6">
                <p className="resource-panel-label mb-3">WHO THIS IS FOR</p>
                <div className="space-y-2">
                  {[
                    "Owners of small and mid-sized lending companies",
                    "Operations and sales managers",
                    "Teams handling documents, applications, and client emails",
                    "Companies where employees are already using ChatGPT without clear rules",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="resource-list-marker mt-[0.15rem] shrink-0 text-[0.6rem]">—</span>
                      <span className="text-sm leading-snug text-[var(--white-80)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: form or success */}
            <motion.div
              initial={rise.initial}
              animate={rise.animate}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              {status === "success" ? (
                <div className="panel border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-8">
                  <p className="section-label mb-3">ACCESS GRANTED</p>
                  <div className="rule mb-6" />
                  <h2 className="hero-heading mb-4 text-[clamp(1.2rem,4vw,1.6rem)] text-[var(--white-100)]">
                    YOUR GUIDE IS READY
                  </h2>
                  <p className="mb-8 text-sm leading-relaxed text-[var(--text-muted)]">
                    Read the full guide below. We have also recorded your request —
                    expect a short follow-up from the DeView team.
                  </p>
                  <Link
                    href={GUIDE_URL}
                    className="btn-outline inline-block w-full text-center sm:w-auto"
                  >
                    READ THE GUIDE →
                  </Link>
                </div>
              ) : (
                <div className="resource-form-panel panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-8">
                  <p className="resource-kicker mb-5">
                    <span>GET THE FREE GUIDE</span>
                    <span>INSTANT ACCESS</span>
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
                    Enter your work email to unlock the guide. We use it to keep access tied to
                    a business contact, not a personal inbox.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                      className="pointer-events-none absolute left-[-10000px] h-0 w-0 opacity-0"
                    />

                    <div className="resource-email-callout">
                      <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                        <span>Work Email <span className="text-red-500">*</span></span>
                        <input
                          type="email"
                          name="email"
                          required
                          inputMode="email"
                          autoComplete="email"
                          placeholder="jane@yourcompany.com"
                          className="min-h-12 w-full border border-[rgba(141,231,189,0.48)] bg-[rgba(141,231,189,0.08)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[#8de7bd] sm:text-sm"
                        />
                      </label>
                      <p className="resource-field-note">
                        Use a company domain. Personal email providers such as Gmail, Outlook, Yahoo,
                        and iCloud are not accepted for this resource.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                        <span>Full Name <span className="text-red-500">*</span></span>
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                        />
                      </label>
                      <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                        Company
                        <input
                          type="text"
                          name="company"
                          autoComplete="organization"
                          placeholder="Acme Lending Co."
                          className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                      Industry
                      <select
                        name="industry"
                        className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                      >
                        <option value="">Select your industry</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </label>

                    <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                      Main Challenge
                      <select
                        name="challenge"
                        className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                      >
                        <option value="">Where is your team losing time?</option>
                        {CHALLENGES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </label>

                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-outline w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? "SENDING..." : "GET THE FREE GUIDE →"}
                    </motion.button>

                    {feedback ? (
                      <p className="text-sm leading-snug text-red-400" role="status">
                        {feedback}
                      </p>
                    ) : null}

                    <p className="text-[0.6rem] leading-relaxed text-[var(--white-40)]">
                      No spam. No sales pressure. Prepared by Deview Consulting.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
