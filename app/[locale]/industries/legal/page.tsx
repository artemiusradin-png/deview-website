import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalContent } from "./legal-content";

export const metadata: Metadata = {
  title: "AI for Legal Operations | DeView",
  description:
    "AI automation for legal and professional services teams — contract review, document processing, research, and internal knowledge management. Deployed in 3–6 weeks.",
};

export default function LegalPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <LegalContent />
      </main>
      <SiteFooter />
    </>
  );
}
