import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { FourProjectsContent } from "./four-projects-content";

export const metadata: Metadata = {
  title: "The four AI projects that pay for themselves fastest | DeView Insights",
  description:
    "Not all AI use cases are created equal. Four specific projects that consistently deliver measurable ROI within the first 90 days in operations teams.",
};

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <FourProjectsContent />
      </main>
      <SiteFooter />
    </>
  );
}
