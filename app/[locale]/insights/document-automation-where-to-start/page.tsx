import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { DocAutomationContent } from "./doc-automation-content";

export const metadata: Metadata = {
  title: "Document automation: where to start | DeView Insights",
  description:
    "Four questions that determine whether a document automation project will succeed — before a single line of code is written.",
};

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <DocAutomationContent />
      </main>
      <SiteFooter />
    </>
  );
}
