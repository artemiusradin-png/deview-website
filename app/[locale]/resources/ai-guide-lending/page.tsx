"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const GUIDE_URL = "/resources/ai-guide-lending/guide";

const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "icloud.com", "me.com", "mac.com",
  "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com",
  "aol.com", "proton.me", "protonmail.com", "pm.me", "mail.com",
  "gmx.com", "zoho.com", "yandex.com",
]);

function isLikelyWorkEmail(email: string) {
  // Accept any well-formed email (personal providers allowed).
  const domain = email.split("@")[1]?.toLowerCase();
  return Boolean(domain && domain.includes("."));
}

export default function LeadMagnetPage() {
  const { dict } = useLocaleContext();
  const t = dict.aiGuideLandingPage;
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
      setFeedback(t.errorInvalidEmail);
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
      } else if (data.error === "invalid_email") {
        setStatus("error");
        setFeedback(t.errorInvalidEmail);
      } else {
        setStatus("error");
        setFeedback(t.errorGeneric);
      }
    } catch {
      setStatus("error");
      setFeedback(t.errorGeneric);
    }
  }

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-5xl">

          <SubpageNav />

          <div className="grid gap-16 md:grid-cols-[1fr_380px] md:gap-20 lg:grid-cols-[1fr_420px]">

            {/* Left: offer */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-10"
            >
              <div>
                <p className="mb-5 label-xs text-[var(--white-30)]">
                  {t.tagline}
                </p>
                <h1 className="mb-5 text-[clamp(1.6rem,5vw,2.6rem)] font-semibold leading-[1.12] tracking-tight text-[var(--white-100)]">
                  {t.heading}
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">
                  {t.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {t.bullets.map((b) => (
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
                    <p className="mb-3 label-xs text-[var(--white-40)]">{t.successLabel}</p>
                    <h2 className="mb-3 text-lg font-semibold text-[var(--white-100)]">{t.successHeading}</h2>
                    <p className="mb-7 text-sm leading-relaxed text-[var(--text-muted)]">
                      {t.successBody}
                    </p>
                    <Link
                      href={GUIDE_URL}
                      className="btn-outline inline-block w-full text-center"
                    >
                      {t.readGuide}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-[var(--white-20)] bg-[var(--surface)] p-7"
                  >
                    <p className="mb-2 label-xs text-[var(--white-40)]">{t.formLabel}</p>
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
                        {t.emailLabel}
                        <input
                          type="email"
                          name="email"
                          required
                          inputMode="email"
                          autoComplete="email"
                          placeholder={t.emailPlaceholder}
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
                        {status === "sending" ? t.sending : t.sendButton}
                      </button>

                      <p className="text-[0.6rem] leading-relaxed text-[var(--white-30)]">
                        {t.disclaimer}
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
