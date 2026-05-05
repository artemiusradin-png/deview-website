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
        className="relative mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 py-4 md:gap-10 md:py-10"
      >
        <div className="flex w-full flex-col gap-4">
          <div>
            <p className="section-label mb-3">{s.sectionLabel}</p>
            <div className="rule mb-5 max-w-[8rem]" />
            <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
              {s.titleL1}
              <br />
              {s.titleL2}
            </h2>
          </div>
          <p className="max-w-xl text-[0.8rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
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
