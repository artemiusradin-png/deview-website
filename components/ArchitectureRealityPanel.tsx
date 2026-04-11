"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const revealViewport = { once: true, amount: 0.2 } as const;

export function ArchitectureRealityPanel() {
  const { dict } = useLocaleContext();
  const a = dict.architecture;
  const [architectureFocus, setArchitectureFocus] = useState<"public" | "enterprise">("enterprise");

  return (
    <motion.section
      variants={cardMotion}
      initial="initial"
      whileInView="whileInView"
      viewport={revealViewport}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="panel border border-[var(--white-20)] bg-[var(--background)] p-5 md:p-6"
    >
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label mb-2">{a.sectionLabel}</p>
          <h3 className="text-lg text-[var(--white-100)] md:text-2xl">{a.headline}</h3>
        </div>
        <p className="max-w-sm text-[0.8rem] text-[var(--text-muted)]">{a.sub}</p>
      </div>
      <div className="mb-4 flex flex-wrap gap-3">
        <button
          type="button"
          className={`enterprise-chip ${architectureFocus === "public" ? "enterprise-chip-active" : ""}`}
          onMouseEnter={() => setArchitectureFocus("public")}
          onFocus={() => setArchitectureFocus("public")}
          onClick={() => setArchitectureFocus("public")}
        >
          {a.publicChip}
        </button>
        <button
          type="button"
          className={`enterprise-chip ${architectureFocus === "enterprise" ? "enterprise-chip-active" : ""}`}
          onMouseEnter={() => setArchitectureFocus("enterprise")}
          onFocus={() => setArchitectureFocus("enterprise")}
          onClick={() => setArchitectureFocus("enterprise")}
        >
          {a.enterpriseChip}
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <article
          className={`enterprise-compare enterprise-compare-public ${
            architectureFocus === "public" ? "enterprise-compare-active" : "enterprise-compare-dim"
          }`}
        >
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">{a.publicLabel}</p>
          <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
            {a.publicPoints.map((point) => (
              <li key={point} className="enterprise-list-item">
                {point}
              </li>
            ))}
          </ul>
        </article>
        <div
          className={`enterprise-arrow ${
            architectureFocus === "enterprise" ? "enterprise-arrow-enterprise" : "enterprise-arrow-public"
          }`}
          aria-hidden="true"
        >
          <span>→</span>
        </div>
        <article
          className={`enterprise-compare enterprise-compare-enterprise ${
            architectureFocus === "enterprise" ? "enterprise-compare-active" : "enterprise-compare-dim"
          }`}
        >
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">{a.enterpriseLabel}</p>
          <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
            {a.enterprisePoints.map((point) => (
              <li key={point} className="enterprise-list-item">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-6 border-t border-[var(--white-20)] pt-5">
        <p className="max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-sm">{a.closing}</p>
      </div>
    </motion.section>
  );
}
