import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | Deview",
  description:
    "Deview is an AI consulting and engineering firm with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart: building AI systems that reduce manual work and automate workflows for operations and finance teams.",
  alternates: { canonical: "/en/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
