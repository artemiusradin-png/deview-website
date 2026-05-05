"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";
import { SubpageNav } from "../../../components/SubpageNav";

const GUIDE_URL = "/resources/ai-guide-lending/guide";

const BULLETS = [
  "A risk-scored priority list for the 10 lending workflows most likely to justify automation",
  "Where document review, borrower follow-up, and CRM handoffs usually hide the most manual work",
  "How to test AI with borrower data controls, access permissions, approval paths, and auditability in place",
];

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "icloud.com", "me.com", "mac.com",
  "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com",
  "aol.com", "proton.me", "protonmail.com", "pm.me", "mail.com",
  "gmx.com", "zoho.com", "yandex.com",
]);

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

    const email = String(fd.get("email") ?? "").trim();

    if (!isLikelyWorkEmail(email)) {
      setStatus("error");
      setFeedback("Please use a work email address — personal providers like Gmail or Outlook aren't accepted.");
      return;
    }

    setStatus("sending");
    setFeedback(null);

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (data.ok || res.ok) {
        sessionStorage.setItem("deview-guide-lending", "1");
        setStatus("success");
      } else if (data.error === "work_email_required") {
        setStatus("error");
        setFeedback("Please use a work email address — personal providers like Gmail or Outlook aren't accepted.");
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
        <div className="mx-auto max-w-5xl">

          <SubpageNav />

          <div className="grid gap-10 md:grid-cols-[1fr_380px] md:gap-20 lg:grid-cols-[1fr_420px]">

            {/* Left: offer */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-10"
            >
              <div>
                <p className="mb-5 label-xs text-[var(--white-30)]">
                  Free guide · AI automation for lending teams · 10 practical use cases
                </p>
                <h1 className="mb-5 text-[clamp(1.6rem,5vw,2.6rem)] font-semibold leading-[1.12] tracking-tight text-[var(--white-100)]">
                  Prioritize the 10 lending workflows AI can automate safely
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">
                  Manual review, follow-up, and CRM cleanup slow lending teams long before core systems need to change. This guide helps you rank practical AI pilots by risk, effort, and ROI so you know what to automate first and how to protect borrower information from day one.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {BULLETS.map((b) => (
                  <div key={b} className="flex items-start gap-4">
                    <span className="mt-[0.3rem] h-px w-4 shrink-0 bg-[var(--white-30)]" />
                    <span className="text-sm leading-snug text-[var(--white-80)]">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-[var(--white-20)] bg-[var(--surface)] p-7"
                  >
                    <p className="mb-3 label-xs text-[var(--white-40)]">Your guide is ready</p>
                    <h2 className="mb-3 text-lg font-semibold text-[var(--white-100)]">Read it below — or bookmark this page to return to it.</h2>
                    <p className="mb-7 text-sm leading-relaxed text-[var(--text-muted)]">
                      The full guide is below. If your situation matches one of the use cases closely, expect a short, specific follow-up from us within 1–2 days.
                    </p>
                    <Link
                      href={GUIDE_URL}
                      className="btn-outline inline-block w-full text-center"
                    >
                      Read the guide →
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-[var(--white-20)] bg-[var(--surface)] p-7"
                  >
                    <p className="mb-2 label-xs text-[var(--white-40)]">Get the guide by email</p>
                    <div className="mb-6 h-px bg-[var(--white-10)]" />

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden
                        className="pointer-events-none absolute left-[-10000px] h-0 w-0 opacity-0"
                      />

                      <label className="flex flex-col gap-2 label-sm text-[var(--white-50)]">
                        Work email
                        <input
                          type="email"
                          name="email"
                          required
                          inputMode="email"
                          autoComplete="email"
                          placeholder="name@company.com"
                          className="min-h-12 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 font-sans text-base normal-case tracking-normal text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-30)] focus:border-[var(--white-70)] sm:text-sm"
                        />
                      </label>

                      <AnimatePresence>
                        {status === "error" && feedback && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-sm leading-snug text-red-400"
                            role="status"
                          >
                            {feedback}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-outline w-full disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "sending" ? "Sending…" : "Send me the guide →"}
                      </button>

                      <p className="text-[0.6rem] leading-relaxed text-[var(--white-30)]">
                        No newsletter subscription. We send the guide — and, only if useful, one practical next-step option for your lending workflow.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
