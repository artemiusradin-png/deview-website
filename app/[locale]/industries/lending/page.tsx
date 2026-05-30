import type { Metadata } from "next";
import { LendingContent } from "./lending-content";

export const metadata: Metadata = {
  title: "AI for Lending & Finance Operations | DeView",
  description:
    "AI automation for lending and credit teams — borrower intelligence, loan document processing, credit analyst copilots, and regulatory reporting. Built for HKMA, PDPO, MAS TRM, and GDPR. Deployed in 3–6 weeks.",
};

export default function LendingPage() {
  return <LendingContent />;
}
