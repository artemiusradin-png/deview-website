import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { InsuranceContent } from "./insurance-content";

export const metadata: Metadata = {
  title: "AI for Insurance Operations | DeView",
  description:
    "AI automation for insurance operations teams — claims processing, policy document handling, customer support, and compliance reporting. Deployed in 3–6 weeks.",
};

export default function InsurancePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />
          <InsuranceContent />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
