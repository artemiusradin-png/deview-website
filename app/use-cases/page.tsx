import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { HomeSolutionsSection } from "../../components/HomeSolutionsSection";
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
          <div className="mb-8 flex flex-col gap-4 border-b border-[var(--white-20)] pb-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xs uppercase tracking-[0.24em] text-[var(--white-80)]">
              DEVIEW
            </Link>
            <Link href={homeWithRetroCards} className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
              BACK TO HOME
            </Link>
          </div>
        </div>
        <HomeSolutionsSection variant="standalone" />
      </main>
      <SiteFooter />
    </>
  );
}
