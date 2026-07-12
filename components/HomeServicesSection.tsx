"use client";

import { motion } from "framer-motion";
import { ServicesVoyageSlider } from "@/components/ServicesVoyageSlider";
import { homeSectionReveal } from "@/lib/home-section-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

type HomeServicesSectionProps = {
  /** `home`: in-page `#services` anchor. `standalone`: dedicated route (no id). */
  variant?: "home" | "standalone";
};


export function HomeServicesSection({ variant = "home" }: HomeServicesSectionProps) {
  const { dict } = useLocaleContext();
  const s = dict.services;

  return (
    <>
    <section
      id={variant === "home" ? "services" : undefined}
      className="relative overflow-hidden bg-[var(--background)] section-gutter"
    >
      <motion.div
        {...homeSectionReveal}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 py-10 md:gap-14 md:py-16"
      >
        <div className="flex w-full flex-col gap-6 md:max-w-4xl">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--white-40)]">
            {s.sectionLabel}
          </p>
          <h2 className="text-[clamp(1.9rem,5.5vw,3.25rem)] font-medium leading-[1.08] tracking-tight">
            <span className="text-[var(--white-100)]">{s.titleL1} </span>
            <span className="text-[var(--white-50)]">{s.titleL2}</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            {s.intro}
          </p>
        </div>

        <div className="w-full" aria-live="polite">
          <ServicesVoyageSlider services={s} />
        </div>
      </motion.div>
    </section>

    </>
  );
}
