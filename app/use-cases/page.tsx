import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { HomeSolutionsSection } from "../../components/HomeSolutionsSection";
import { SubpageNav } from "../../components/SubpageNav";
import { RETRO_FEATURE_CARDS_ID } from "../../components/RetroFeatureCards";

const homeWithRetroCards = `/#${RETRO_FEATURE_CARDS_ID}`;

export const metadata: Metadata = {
  title: "Use cases | DeView",
  description:
    "AI solutions built around concrete operational problems — customer operations, internal knowledge, operations, and data products.",
};

export default function UseCasesPage() {
  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <SubpageNav backHref={homeWithRetroCards} />
        </div>
        <HomeSolutionsSection variant="standalone" />
      </main>
      <SiteFooter />
    </>
  );
}
