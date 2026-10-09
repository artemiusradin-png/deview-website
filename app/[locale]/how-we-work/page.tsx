import type { Metadata } from "next";
import { HowWeWorkContent } from "./how-we-work-content";

export const metadata: Metadata = {
  title: "How We Work | Deview",
  description:
    "Four phases from first conversation to live deployment: how Deview scopes, builds, and hands over AI systems in 1–8 weeks.",
  alternates: { canonical: "/en/how-we-work" },
};

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}
