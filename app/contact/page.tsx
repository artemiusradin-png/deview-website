"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SITE_INQUIRY_EMAIL, buildInquiryMailto, buildInquiryText } from "@/lib/site-contact";

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function web3FormsMessage(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  if (typeof o.message === "string") return o.message;
  const body = o.body;
  if (body && typeof body === "object") {
    const m = (body as Record<string, unknown>).message;
    if (typeof m === "string") return m;
  }
  return null;
}

export default function ContactPage() {
  const { dict } = useLocaleContext();
  const sp = dict.subpages;
  const f = dict.contactForm;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

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
    const details = String(fd.get("details") ?? "").trim();

    setStatus("sending");
    setFeedback(null);

    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    const subject = `[DeView inquiry] ${name}`;
    const message = buildInquiryText({ email, company, details });
    let web3LastError: string | null = null;

    try {
      if (web3Key) {
        const w3res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            subject,
            name,
            email,
            replyto: email,
            message,
            company: company || undefined,
          }),
        });
        let w3data: unknown;
        try {
          w3data = await w3res.json();
        } catch {
          w3data = null;
        }
        const w3Success =
          w3res.ok &&
          typeof w3data === "object" &&
          w3data !== null &&
          (w3data as { success?: boolean }).success === true;
        if (w3Success) {
          setStatus("success");
          setFeedback(f.submitSuccess);
          form.reset();
          return;
        }
        web3LastError = web3FormsMessage(w3data) ?? (w3res.ok ? null : `HTTP ${w3res.status}`);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, company, details, honeypot }),
      });
      let data: { ok?: boolean; mailto?: boolean; error?: string } = {};
      try {
        data = (await res.json()) as { ok?: boolean; mailto?: boolean; error?: string };
      } catch {
        setStatus("error");
        setFeedback(web3LastError ? `${f.submitError} — ${web3LastError}` : f.submitError);
        return;
      }

      if (data.ok) {
        setStatus("success");
        setFeedback(f.submitSuccess);
        form.reset();
        return;
      }

      if (data.mailto) {
        window.location.href = buildInquiryMailto({ name, email, company, details });
        setStatus("success");
        setFeedback(f.submitSuccessMailto);
        return;
      }

      setStatus("error");
      setFeedback(web3LastError ? `${f.submitError} — ${web3LastError}` : f.submitError);
    } catch {
      setStatus("error");
      setFeedback(web3LastError ? `${f.submitError} — ${web3LastError}` : f.submitError);
    }
  }

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
            <motion.section
              initial={rise.initial}
              animate={rise.animate}
              transition={{ duration: 0.55 }}
              className="panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-8"
            >
              <p className="section-label mb-3">{f.label}</p>
              <div className="rule mb-6" />
              <h1 className="hero-heading mb-4 text-[clamp(1.5rem,5vw,2rem)] text-[var(--white-100)] md:text-4xl">
                {sp.contactTitle}
              </h1>
              <p className="mb-8 max-w-xl text-sm text-[var(--text-muted)]">{sp.contactLead}</p>

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
                      status === "error" ? "text-red-400" : "text-[var(--white-90)]"
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
                  <p className="text-[var(--white-90)]">{f.responseWindowValue}</p>
                </div>
                <div>
                  <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                    {f.initialOutput}
                  </p>
                  <p className="text-[var(--white-90)]">{f.initialOutputValue}</p>
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
            </motion.aside>
          </div>
        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
