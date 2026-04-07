import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { EnterpriseArchitectureDiagram } from "../components/EnterpriseArchitectureDiagram";

export const metadata: Metadata = {
  title: "What makes it enterprise | DeView",
  description:
    "Enterprise AI architecture across business systems, data foundation, infrastructure, and AI/ML operations.",
};

export default function WhatMakesItEnterprisePage() {
  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 border-b border-[var(--white-20)] pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xs uppercase tracking-[0.24em] text-[var(--white-80)]">
              DEVIEW
            </Link>
            <Link href="/" className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
              BACK TO HOME
            </Link>
          </div>

          <section className="mb-10 md:mb-14">
            <p className="section-label mb-2">WHAT MAKES IT ENTERPRISE</p>
            <h1 className="hero-heading mb-4 max-w-3xl text-[clamp(1.5rem,5vw,2.25rem)] text-[var(--white-100)] md:text-4xl">
              Architecture across business systems, data foundation, infrastructure, and AI/ML operations.
            </h1>
            <p className="mb-6 max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
              The deployment has to connect strategy, enterprise applications, data pipelines, infrastructure, and
              model operations in one controlled system.
            </p>
            <p className="mb-8 max-w-3xl text-[0.8rem] leading-relaxed text-[var(--text-muted)] md:mb-10 md:text-[0.88rem]">
              Enterprise AI Architecture: Business Layer and Application Layer feed data into a central Data
              Foundation pipeline, which drives an AI/ML Core. Infrastructure spans and governs the AI layer.
            </p>
            <div className="rule mb-6" />
            <EnterpriseArchitectureDiagram className="my-2 md:my-4" />
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
