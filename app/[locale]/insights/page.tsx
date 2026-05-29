import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { InsightsContent } from "./insights-content";

export const metadata: Metadata = {
  title: "Insights | DeView",
  description:
    "Practical AI guidance for operations and finance teams — what works, what doesn't, and where to start.",
};

export default function InsightsPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <InsightsContent />
      </main>
      <SiteFooter />
    </>
  );
}
