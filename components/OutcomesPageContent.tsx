"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, amount: 0.15 },
};

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export function OutcomesPageContent() {
  const { dict } = useLocaleContext();
  const o = dict.outcomes;

  return (
    <section className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter">
      <motion.div
        {...reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
      >
        <div className="section-shell">
          <p className="section-label mb-3">{o.label}</p>
          <div className="rule mb-6" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h1 className="mb-4 text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                {o.titleL1}
                <br />
                {o.titleL2}
              </h1>
            </div>
            <div>
              <p className="max-w-md text-sm text-[var(--text-muted)]">{o.subtitle}</p>
            </div>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={stagger.viewport}
          className="border-t border-[var(--white-20)]"
        >
          {o.items.map((outcome) => (
            <motion.article
              key={outcome.number}
              variants={cardMotion}
              transition={{ duration: 0.45 }}
              className="group border-b border-[var(--white-20)] transition-colors duration-200 hover:bg-[var(--surface)]"
            >
              <div className="grid gap-3 px-0 py-5 sm:gap-4 sm:py-6 md:grid-cols-[80px_220px_1fr] md:items-start md:gap-6 md:py-7">
                <div className="text-[2.75rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3.5rem] md:text-[4rem]">
                  {outcome.number}
                </div>
                <div className="pt-0 text-sm uppercase tracking-[0.2em] text-[var(--white-100)] sm:pt-1 sm:text-base md:text-lg">
                  {outcome.label}
                </div>
                <div className="pt-0 text-[0.85rem] leading-relaxed text-[var(--text-muted)] sm:pt-1 sm:text-sm md:max-w-2xl">
                  {outcome.body}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
