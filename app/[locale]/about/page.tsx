import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | DeView",
  description:
    "We build AI and software that automate document-heavy workflows for financial and industrial companies, with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart.",
  alternates: { canonical: "/en/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
