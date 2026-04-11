"use client";

import { motion } from "framer-motion";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const { dict } = useLocaleContext();
  const sp = dict.subpages;
  const f = dict.contactForm;

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
              >
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
                  className="btn-outline w-full sm:w-auto"
                >
                  {f.submit}
                </motion.button>
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
                    href="mailto:deview.info@gmail.com"
                    className="text-[var(--white-100)] underline underline-offset-4"
                  >
                    deview.info@gmail.com
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
