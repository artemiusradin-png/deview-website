import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { ServicesPracticeSections } from "@/components/ServicesPracticeSections";
import { ServicesSolutions } from "@/components/ServicesSolutions";
import { SubpageNav } from "@/components/SubpageNav";
import { RETRO_FEATURE_CARDS_ID } from "@/components/RetroFeatureCards";

const homeWithRetroCards = `/#${RETRO_FEATURE_CARDS_ID}`;

export const metadata: Metadata = {
  title: "Services: Document, Quote, Reporting & Request Automation | DeView",
  description:
    "Four solutions for document-heavy work in lending, ventilation, agriculture, construction and oil and gas: document processing, quotation automation, reporting and request automation.",
  alternates: { canonical: "/en/services" },
};

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref={homeWithRetroCards} />
        </div>
        <ServicesSolutions />
        <ServicesPracticeSections supporting />
        <HomeServicesSection />
      </main>
      <SiteFooter />
    </>
  );
}
