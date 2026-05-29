import type { Metadata } from "next";
import { CaseStudiesContent } from "./case-studies-content";

export const metadata: Metadata = {
  title: "Case Studies | DeView",
  description:
    "How DeView has helped operations and finance teams cut manual work, automate workflows, and reduce costs — with measurable outcomes.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
