"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal } from "@/lib/home-section-motion";

/**
 * Social-proof strip built from published case-study metrics — real, verifiable
 * numbers instead of quotes. Each figure links back to /case-studies.
 */
export function HomeOutcomesStrip() {
  const { dict, localePath } = useLocaleContext();
  const s = dict.outcomesStrip;

  return (
    <section className="relative overflow-hidden border-t border-[var(--white-20)] bg-[var(--background)] section-gutter py-10 md:py-20">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {s.title}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{s.intro}</p>
        </div>

        {/* Mobile: compact 2×2 grid of small tiles (was a tall single-column stack). lg: one row of 4. */}
        <div className="mt-6 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:mt-10 lg:grid-cols-4">
          {s.items.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-1 bg-[var(--background)] px-3 py-4 sm:gap-2 sm:px-6 sm:py-8"
            >
              <p className="text-base font-medium leading-tight tracking-tight text-[var(--white-100)] sm:text-[clamp(1.5rem,3vw,2rem)] sm:leading-none">
                {item.metric}
              </p>
              <p className="text-[0.7rem] leading-snug text-[var(--text-muted)] sm:text-sm">{item.label}</p>
              <p className="mt-auto pt-1.5 text-[0.5rem] uppercase tracking-[0.2em] text-[var(--white-40)] sm:pt-3 sm:text-[0.6rem]">
                {item.client}
              </p>
            </motion.div>
          ))}
        </div>

        <a
          href={localePath("/case-studies")}
          className="mt-8 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors hover:text-[var(--white-100)]"
        >
          {s.cta}
          <span aria-hidden="true">→</span>
        </a>
      </motion.div>
    </section>
  );
}
