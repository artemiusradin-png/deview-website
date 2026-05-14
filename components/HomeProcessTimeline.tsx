"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal, homeSectionStagger, homeSectionCardMotion } from "@/lib/home-section-motion";

export function HomeProcessTimeline() {
  const { dict } = useLocaleContext();
  const s = dict.process;

  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />
        <h2 className="mb-12 max-w-3xl text-[clamp(1.5rem,5vw,2.6rem)] leading-[1.08] text-[var(--white-100)]">
          {s.titleL1}
          <br />
          {s.titleL2}
        </h2>

        <motion.div
          {...homeSectionStagger}
          className="relative grid gap-0 md:grid-cols-5"
        >
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[1.1rem] top-0 bottom-0 w-px bg-[var(--white-10)] md:left-0 md:right-0 md:top-[1.1rem] md:bottom-auto md:h-px md:w-full" aria-hidden="true" />

          {s.steps.map((step, i) => (
            <motion.div
              key={step.number}
              {...homeSectionCardMotion}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex gap-4 py-5 md:flex-col md:gap-3 md:px-4 md:py-0"
            >
              {/* Step dot */}
              <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[var(--white-20)] bg-[var(--surface)] text-[0.6rem] font-bold tracking-[0.12em] text-[var(--white-60)] transition-colors group-hover:border-[var(--white-40)] group-hover:text-[var(--white-100)]">
                {step.number}
              </div>

              <div>
                <p className="mb-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {step.label}
                </p>
                <p className="mb-1.5 text-[0.92rem] font-semibold leading-snug text-[var(--white-100)]">
                  {step.title}
                </p>
                <p className="text-[0.82rem] leading-relaxed text-[var(--text-muted)]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex">
          <Link
            href="/how-we-work"
            className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--white-60)] transition-colors hover:text-[var(--white-100)]"
          >
            {s.cta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
