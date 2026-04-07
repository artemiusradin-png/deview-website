"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { architectureComparison } from "@/lib/architecture-comparison";

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const revealViewport = { once: true, amount: 0.2 } as const;

export function ArchitectureRealityPanel() {
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
          <p className="section-label mb-2">ARCHITECTURE REALITY CHECK</p>
          <h3 className="text-lg text-[var(--white-100)] md:text-2xl">
            Infrastructure determines whether the system belongs in an enterprise at all.
          </h3>
        </div>
        <p className="max-w-sm text-[0.8rem] text-[var(--text-muted)]">
          This is where DeView moves clients from public AI usage to enterprise-grade deployment.
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-3">
        <button
          type="button"
          className={`enterprise-chip ${architectureFocus === "public" ? "enterprise-chip-active" : ""}`}
          onMouseEnter={() => setArchitectureFocus("public")}
          onFocus={() => setArchitectureFocus("public")}
          onClick={() => setArchitectureFocus("public")}
        >
          PUBLIC AI SERVICE
        </button>
        <button
          type="button"
          className={`enterprise-chip ${architectureFocus === "enterprise" ? "enterprise-chip-active" : ""}`}
          onMouseEnter={() => setArchitectureFocus("enterprise")}
          onFocus={() => setArchitectureFocus("enterprise")}
          onClick={() => setArchitectureFocus("enterprise")}
        >
          ENTERPRISE AI DEPLOYMENT
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <article
          className={`enterprise-compare enterprise-compare-public ${
            architectureFocus === "public" ? "enterprise-compare-active" : "enterprise-compare-dim"
          }`}
        >
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
            {architectureComparison.public.label}
          </p>
          <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
            {architectureComparison.public.points.map((point) => (
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
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
            {architectureComparison.enterprise.label}
          </p>
          <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
            {architectureComparison.enterprise.points.map((point) => (
              <li key={point} className="enterprise-list-item">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-6 border-t border-[var(--white-20)] pt-5">
        <p className="section-label mb-2 text-[0.65rem]">BOTTOM LINE</p>
        <p className="max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
          This is why infrastructure matters. Enterprise AI is not only about model quality — it is about data
          control, uptime, compliance posture, system integration, and accountability in the workflow.
        </p>
      </div>
    </motion.section>
  );
}
