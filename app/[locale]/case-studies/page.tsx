import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = withSocialMetadata({
  title: "Case Studies: Custom Software, AI and Loan Management Systems | Deview",
  description:
    "Deview projects across oil & gas, agriculture, lending, fintech, senior care, e-commerce, ventilation and fitness, including AI conversion improvements for EVDEV's StorePilot.",
  alternates: { canonical: "/en/case-studies" },
});

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
