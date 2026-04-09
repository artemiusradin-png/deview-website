import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";
import { RETRO_FEATURE_CARDS_ID } from "../../components/RetroFeatureCards";
import { EnterpriseArchitectureDiagram } from "../components/EnterpriseArchitectureDiagram";
import { WhatMakesEnterpriseContent } from "./what-makes-enterprise-content";

const homeWithRetroCards = `/#${RETRO_FEATURE_CARDS_ID}`;

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
          <SubpageNav backHref={homeWithRetroCards} />
          <WhatMakesEnterpriseContent />
          <div className="rule mb-6" />
          <EnterpriseArchitectureDiagram className="my-2 md:my-4" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
