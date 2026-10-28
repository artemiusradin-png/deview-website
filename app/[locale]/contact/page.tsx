"use client";

import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { PageIntro } from "@/components/PageIntro";
import { SubpageNav } from "@/components/SubpageNav";
import { CalendlyInlineWidget } from "@/components/ui/calendly-inline-widget";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SITE_INQUIRY_EMAIL, buildInquiryMailto } from "@/lib/site-contact";

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const TOPIC_LABELS: Record<string, string> = {
  "production-workflow-review": "45-Minute Production Workflow Review",
  "it-ot-boundary-review": "IT/OT Integration Boundary Review",
  "project-controls-assessment": "Project-Controls & JV Reporting Assessment",
  "osdu-readiness-review": "OSDU Exploration Data Readiness Review",
  "sovereign-ai-workshop": "Sovereign AI Architecture Workshop",
};

export default function ContactPage() {
  const { dict } = useLocaleContext();
  const sp = dict.subpages;
  const f = dict.contactForm;
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const topic = params.get("topic");
      if (topic) {
        setSelectedTopic(topic);
      }
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const honeypot = String(fd.get("company_website") ?? "").trim();
    if (honeypot) {
      setStatus("success");
      setFeedback(f.submitSuccess);
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    let details = String(fd.get("details") ?? "").trim();
    if (selectedTopic) {
      const topicLabel = TOPIC_LABELS[selectedTopic] || selectedTopic;
      details = `[Session: ${topicLabel}]\n${details}`;
    }

    setStatus("sending");
    setFeedback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, company, details, honeypot }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        mailto?: boolean;
        error?: string;
      } | null;

      if (res.ok && data?.ok) {
        setStatus("success");
        setFeedback(f.submitSuccess);
        form.reset();
        return;
      }

      if (data?.mailto) {
        window.location.href = buildInquiryMailto({
          name,
          email,
          company,
          details,
        });
        setStatus("success");
        setFeedback(f.submitSuccessMailto);
        return;
      }

      setStatus("error");
      setFeedback(f.submitError ?? "Something went wrong. Please try again.");
    } catch {
      window.location.href = buildInquiryMailto({
        name,
        email,
        company,
        details,
      });
      setStatus("success");
      setFeedback(f.submitSuccessMailto);
    }
  }

  return (
    <>
      <main className="section-gutter relative isolate min-h-screen overflow-hidden bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="relative mx-auto max-w-6xl">
          <SubpageNav backHref="/" />
          <PageIntro
            label="Let’s talk"
            title={
              <>
                Your next move.
                <br />
                Let’s make it.
              </>
            }
          >
            <p>{sp.contactLead}</p>
          </PageIntro>

          <div className="contact-layout grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <motion.section
              initial={rise.initial}
              animate={rise.animate}
              transition={{ duration: 0.55 }}
              className="panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-8"
            >
              <h2 className="mb-8">
                A few details.
                <br />A good start.
              </h2>

              <motion.form
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="pointer-events-none absolute left-[-10000px] h-0 w-0 opacity-0"
                />

                {selectedTopic && (
                  <div className="flex items-center justify-between rounded border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3.5 py-2.5 text-xs text-[var(--gold)]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold uppercase tracking-wider">Requested Session:</span>
                      <span className="font-medium text-[var(--white-90)]">{TOPIC_LABELS[selectedTopic] || selectedTopic}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedTopic(null)}
                      className="text-[var(--white-60)] hover:text-white"
                      title="Clear session"
                    >
                      ✕
                    </button>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    <span>
                      {f.fullName} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={f.placeholders.name}
                      className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    <span>
                      {f.workEmail} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={f.placeholders.email}
                      className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  {f.company}
                  <input
                    type="text"
                    name="company"
                    placeholder={f.placeholders.company}
                    className="min-h-11 w-full border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                  />
                </label>

                <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  <span>
                    {f.problem} <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="details"
                    required
                    rows={6}
                    placeholder={f.placeholders.details}
                    className="w-full resize-none border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:text-sm"
                  />
                </label>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-outline w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? f.submitSending : f.submit}
                </motion.button>

                {feedback ? (
                  <p
                    className={`text-sm leading-snug ${
                      status === "error"
                        ? "text-red-400"
                        : "text-[var(--white-90)]"
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                ) : null}
              </motion.form>
            </motion.section>

            <motion.aside
              initial={rise.initial}
              animate={rise.animate}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="panel border border-[var(--white-20)] bg-[var(--surface-elevated)] p-6 md:p-8"
            >
              <p className="section-label mb-3">{f.asideTitle}</p>
              <div className="rule mb-6" />
              <div className="space-y-6 text-sm">
                <div>
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    {f.responseWindow}
                  </p>
                  <p className="text-[var(--white-90)]">
                    {f.responseWindowValue}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    {f.initialOutput}
                  </p>
                  <p className="text-[var(--white-90)]">
                    {f.initialOutputValue}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    {f.directEmail}
                  </p>
                  <a
                    href={`mailto:${SITE_INQUIRY_EMAIL}`}
                    className="text-[var(--white-100)] underline underline-offset-4"
                  >
                    {SITE_INQUIRY_EMAIL}
                  </a>
                </div>
              </div>
              <CalendlyInlineWidget />
            </motion.aside>
          </div>
        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
