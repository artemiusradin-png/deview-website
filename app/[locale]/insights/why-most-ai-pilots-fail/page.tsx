import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { PilotsFailContent } from "./pilots-fail-content";

export const metadata: Metadata = {
  title: "Why most AI pilots fail | DeView Insights",
  description:
    "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology — here's what actually goes wrong.",
};

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <PilotsFailContent />
      </main>
      <SiteFooter />
    </>
  );
}
