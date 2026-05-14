"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Scale, Shield, Briefcase } from "lucide-react";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal, homeSectionCardMotion } from "@/lib/home-section-motion";

const icons: Record<string, typeof Building2> = {
  lending: Building2,
  insurance: Shield,
  legal: Scale,
  professional: Briefcase,
};

export function HomeIndustries() {
  const { dict } = useLocaleContext();
  const s = dict.industries;

  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-6" />
        <h2 className="mb-10 max-w-3xl text-[clamp(1.5rem,5vw,2.6rem)] leading-[1.08] text-[var(--white-100)]">
          {s.titleL1}
          <br />
          {s.titleL2}
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {s.tiles.map((tile, i) => {
            const Icon = icons[tile.id] ?? Briefcase;
            return (
              <motion.div
                key={tile.id}
                {...homeSectionCardMotion}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={tile.href}
                  className="group flex flex-col items-center gap-3 rounded-lg border border-[var(--white-10)] bg-[var(--surface)] p-6 text-center transition-all hover:border-[var(--white-20)] hover:bg-[var(--surface-elevated)] md:p-8"
                >
                  <Icon
                    className="h-7 w-7 text-[var(--white-30)] transition-colors group-hover:text-[var(--white-70)]"
                    strokeWidth={1.5}
                  />
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--white-60)] transition-colors group-hover:text-[var(--white-100)]">
                    {tile.label}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
