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
    <section className="relative overflow-hidden border-t border-[var(--white-20)] bg-[var(--background)] section-gutter py-14 md:py-20">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
            {s.title}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{s.intro}</p>
        </div>

        <div className="mt-10 grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-2 bg-[var(--background)] px-6 py-8"
            >
              <p className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-none tracking-tight text-[var(--white-100)]">
                {item.metric}
              </p>
              <p className="text-sm leading-snug text-[var(--text-muted)]">{item.label}</p>
              <p className="mt-auto pt-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
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
