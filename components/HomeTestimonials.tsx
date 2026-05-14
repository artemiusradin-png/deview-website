"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal } from "@/lib/home-section-motion";

export function HomeTestimonials() {
  const { dict } = useLocaleContext();
  const s = dict.testimonials;
  const [active, setActive] = useState(0);
  const item = s.items[active];

  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-10" />

        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32 }}
              className="max-w-4xl"
            >
              <p className="mb-6 text-[clamp(1.15rem,3vw,1.65rem)] leading-[1.45] text-[var(--white-90)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--white-20)]" />
                <div>
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--white-80)]">
                    {item.name}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--white-40)]">
                    {item.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex gap-2">
          {s.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-[var(--white-80)]"
                  : "w-1.5 bg-[var(--white-20)] hover:bg-[var(--white-40)]"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
