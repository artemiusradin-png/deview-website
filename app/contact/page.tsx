"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const rise = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid px-4 pb-8 pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:px-6 sm:pb-10 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-col gap-4 border-b border-[var(--white-20)] pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0"
        >
          <Link href="/" className="text-xs uppercase tracking-[0.24em] text-[var(--white-80)]">
            DEVIEW
          </Link>
          <Link href="/" className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
            BACK TO HOME
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
          <motion.section
            initial={rise.initial}
            animate={rise.animate}
            transition={{ duration: 0.55 }}
            className="panel border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-8"
          >
            <p className="section-label mb-3">CONTACT FORM</p>
            <div className="rule mb-6" />
            <h1 className="hero-heading mb-4 text-[clamp(1.5rem,5vw,2rem)] text-[var(--white-100)] md:text-4xl">
              START A PROJECT
            </h1>
            <p className="mb-8 max-w-xl text-sm text-[var(--text-muted)]">
              Share your current workflow, operational constraints, and expected outcomes. We reply with a
              scoped recommendation and next steps.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  <span>
                    Full Name <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="min-h-11 border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  <span>
                    Work Email <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="min-h-11 border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                Company
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  className="min-h-11 border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors [-webkit-appearance:none] placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:min-h-0 sm:text-sm"
                />
              </label>

              <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                <span>
                  What are you trying to solve? <span className="text-red-500">*</span>
                </span>
                <textarea
                  name="details"
                  required
                  rows={6}
                  placeholder="Describe your use case, data context, and desired business outcome."
                  className="resize-none border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--white-90)] outline-none transition-colors placeholder:text-[var(--white-40)] focus:border-[var(--white-80)] sm:text-sm"
                />
              </label>

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="btn-outline w-full sm:w-auto"
              >
                SUBMIT INQUIRY
              </motion.button>
            </motion.form>
          </motion.section>

          <motion.aside
            initial={rise.initial}
            animate={rise.animate}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="panel border border-[var(--white-20)] bg-[var(--surface-elevated)] p-6 md:p-8"
          >
            <p className="section-label mb-3">HOW WE RESPOND</p>
            <div className="rule mb-6" />
            <div className="space-y-6 text-sm">
              <div>
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  RESPONSE WINDOW
                </p>
                <p className="text-[var(--white-90)]">Within 1-2 business days</p>
              </div>
              <div>
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  INITIAL OUTPUT
                </p>
                <p className="text-[var(--white-90)]">Fit assessment + scoped engagement options</p>
              </div>
              <div>
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  DIRECT EMAIL
                </p>
                <a
                  href="mailto:hello@deview.ai"
                  className="text-[var(--white-100)] underline underline-offset-4"
                >
                  hello@deview.ai
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
