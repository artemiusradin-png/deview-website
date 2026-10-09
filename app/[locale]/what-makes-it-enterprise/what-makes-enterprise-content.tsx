"use client";

import { PageIntro } from "@/components/PageIntro";
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
      <PageIntro
        label={w.label}
        title={
          <>
            Ready for the
            <br />
            real world.
          </>
        }
      >
        <p>{w.p1}</p>
        <p>{w.p2}</p>
      </PageIntro>
    </motion.section>
  );
}
