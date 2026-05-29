import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { LendingContent } from "./lending-content";

export const metadata: Metadata = {
  title: "AI for Lending & Finance Operations | DeView",
  description:
    "AI automation for lending and credit teams — borrower intelligence, loan document processing, credit analyst copilots, and regulatory reporting. Built for HKMA, PDPO, MAS TRM, and GDPR. Deployed in 3–6 weeks.",
};

export default function LendingPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />
          <LendingContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
