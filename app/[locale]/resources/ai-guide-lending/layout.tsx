import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Free Guide: 10 Lending Workflows AI Can Automate Safely | Deview",
  description:
    "Rank practical AI pilots for lending teams by risk, effort, and ROI, and learn how to protect borrower information from day one.",
  alternates: { canonical: "/en/resources/ai-guide-lending" },
};

export default function AiGuideLendingLayout({ children }: { children: ReactNode }) {
  return children;
}
