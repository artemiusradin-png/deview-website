"use client";

import { motion } from "framer-motion";
import { homeSectionReveal, homeSectionCardMotion } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const PILLAR_ICONS = [
  /* Lock — data isolation & encryption */
  <svg key="lock" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="10" cy="13.5" r="1.25" fill="currentColor" />
  </svg>,
  /* List-check — audit trail */
  <svg key="list" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7 5h8M7 10h8M7 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M3.5 5l.75.75L5.5 4M3.5 10l.75.75L5.5 9M3.5 15l.75.75L5.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* Shield-check — compliance */
  <svg key="shield" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L4 4.5v5.3C4 13.6 6.6 16.8 10 18c3.4-1.2 6-4.4 6-8.2V4.5L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7.5 10l1.8 1.8L13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function SecurityTrustSection() {
  const { dict } = useLocaleContext();
  const s = dict.security;

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[var(--surface)] section-gutter"
    >
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-7xl flex-col gap-10 py-14 md:py-20"
      >
        {/* Eyebrow */}
        <div>
          <p className="section-label mb-3">{s.sectionLabel}</p>
          <div className="rule mb-6 max-w-[8rem]" />
          <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
            {s.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-[0.8rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
            {s.lead}
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] md:grid-cols-3">
          {s.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              {...homeSectionCardMotion}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-4 bg-[var(--background)] px-6 py-7"
            >
              <span className="text-[var(--white-60)]">{PILLAR_ICONS[i]}</span>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-80)]">
                {pillar.label}
              </p>
              <p className="text-[0.8rem] leading-relaxed text-[var(--text-muted)]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certified tools + framework badges */}
        <div className="flex flex-col gap-3 border-t border-[var(--white-20)] pt-4 md:gap-8 md:pt-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Tools — mobile: dense inline rows; md+: cards */}
          <div className="flex min-w-0 flex-col gap-1 md:gap-4">
            <p className="text-[0.5rem] uppercase leading-tight tracking-[0.14em] text-[var(--white-40)] md:text-[0.6rem] md:tracking-[0.22em]">
              {s.toolsLabel}
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3">
              {s.tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className={
                    "min-w-0 border-[var(--white-20)] max-md:border-b max-md:py-1 max-md:last:border-b-0 md:flex md:flex-col md:gap-1 md:border md:bg-[var(--background)] md:px-4 md:py-3 " +
                    (i === 0 ? "max-md:pt-0" : "")
                  }
                >
                  <p className="max-md:leading-[1.25] md:contents">
                    <span className="text-[0.54rem] uppercase leading-none tracking-[0.06em] text-[var(--white-80)] md:block md:text-[0.72rem] md:leading-snug md:tracking-[0.14em]">
                      {tool.name}
                    </span>
                    <span className="text-[0.48rem] leading-[1.25] tracking-[0.04em] text-[var(--white-40)] max-md:before:mr-0.5 max-md:before:inline max-md:before:text-[var(--white-50)] max-md:before:content-['·'] md:mt-0 md:block md:text-[0.6rem] md:tracking-[0.08em] md:before:hidden">
                      {tool.cert}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col gap-1 md:gap-4">
            <p className="text-[0.5rem] uppercase leading-tight tracking-[0.14em] text-[var(--white-40)] md:text-[0.6rem] md:tracking-[0.22em]">
              {s.frameworksLabel}
            </p>
            <div className="flex flex-wrap gap-1 md:gap-2">
              {s.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="border border-[var(--white-30)] bg-[var(--white-10)] px-1.5 py-0.5 text-[0.52rem] uppercase tracking-[0.1em] text-[var(--white-70)] md:px-3 md:py-2 md:text-[0.65rem] md:tracking-[0.18em]"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture link */}
        <div>
          <a
            href="/more-info"
            className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] transition-colors hover:text-[var(--white-100)]"
          >
            {s.architectureLink}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
