import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | DeView",
  description:
    "A custom software development company with 15+ years of enterprise delivery, shipping software, cloud security, AI automation and tech consulting, with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart.",
  alternates: { canonical: "/en/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
