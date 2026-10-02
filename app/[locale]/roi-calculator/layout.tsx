import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Automation ROI Calculator | DeView",
  description:
    "Estimate what AI automation could save your team across document processing, customer support, and reporting, using a conservative automation rate.",
  alternates: { canonical: "/en/roi-calculator" },
};

export default function RoiCalculatorLayout({ children }: { children: ReactNode }) {
  return children;
}
