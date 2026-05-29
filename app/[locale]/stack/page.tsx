import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { StackContent } from "./stack-content";

export const metadata: Metadata = {
  title: "Tech Stack & Integrations | DeView",
  description:
    "The AI models, cloud platforms, enterprise integrations, and engineering tools DeView uses to build production AI systems.",
};

export default function StackPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <StackContent />
      </main>
      <SiteFooter />
    </>
  );
}
