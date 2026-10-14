import type { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies: Custom Software, AI and Loan Management Systems | DeView",
  description:
    "DeView projects across oil & gas, agriculture, lending, senior care, e-commerce, ventilation and fitness, including AI conversion improvements for EVDEV's StorePilot.",
  alternates: { canonical: "/en/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
