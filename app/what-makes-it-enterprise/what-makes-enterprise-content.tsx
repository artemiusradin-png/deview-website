"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const rise = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function WhatMakesEnterpriseContent() {
  const { dict } = useLocaleContext();
  const w = dict.whatMakesEnterprise;

  return (
    <motion.section
      initial={rise.initial}
      animate={rise.animate}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14"
    >
      <p className="section-label mb-2">{w.label}</p>
      <h1 className="hero-heading mb-4 max-w-3xl text-[clamp(1.5rem,5vw,2.25rem)] text-[var(--white-100)] md:text-4xl">
        {w.h1}
      </h1>
      <p className="mb-6 max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-sm">{w.p1}</p>
      <p className="mb-8 max-w-3xl text-[0.8rem] leading-relaxed text-[var(--text-muted)] md:mb-10 md:text-[0.88rem]">
        {w.p2}
      </p>
    </motion.section>
  );
}
