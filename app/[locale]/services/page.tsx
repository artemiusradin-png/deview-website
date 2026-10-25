import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { ServicesSolutions } from "@/components/ServicesSolutions";
import { ServicesAutomation } from "@/components/ServicesAutomation";
import { SubpageNav } from "@/components/SubpageNav";
import { RETRO_FEATURE_CARDS_ID } from "@/components/RetroFeatureCards";

const homeWithRetroCards = `/#${RETRO_FEATURE_CARDS_ID}`;

export const metadata: Metadata = withSocialMetadata({
  title: "Services: Product, AI/ML, Data and Cloud Engineering | Deview",
  description:
    "Digital product engineering, AI/ML engineering, data engineering, cloud and DevOps engineering, and enterprise platforms for financial and industrial companies.",
  alternates: { canonical: "/en/services" },
});

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref={homeWithRetroCards} />
        </div>
        <ServicesSolutions />
        <HomeServicesSection />
        <ServicesAutomation />
      </main>
      <SiteFooter />
    </>
  );
}
