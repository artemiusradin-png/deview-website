import type { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies | Deview",
  description:
    "How Deview has helped operations and finance teams cut manual work, automate workflows, and reduce costs: with measurable outcomes.",
  alternates: { canonical: "/en/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
