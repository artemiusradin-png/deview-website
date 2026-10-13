import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About | DeView",
  description:
    "DeView is a tech strategy advisor and delivery partner with 15+ years of delivery experience across finance, insurance, energy, agriculture and e-commerce, with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart.",
  alternates: { canonical: "/en/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
