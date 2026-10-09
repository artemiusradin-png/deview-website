"use client";

import { PageIntro } from "@/components/PageIntro";
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
    <section className="section-fullscreen relative bg-[var(--background)] section-gutter">
      <motion.div
        {...reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
      >
        <PageIntro
          label={o.label}
          title={
            <>
              Less effort.
              <br />
              More value.
            </>
          }
        >
          <p>{o.subtitle}</p>
        </PageIntro>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={stagger.viewport}
          className=""
        >
          {o.items.map((outcome) => (
            <motion.article
              key={outcome.number}
              variants={cardMotion}
              transition={{ duration: 0.45 }}
              className="group transition-colors duration-200 hover:bg-[var(--surface)]"
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
