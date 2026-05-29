import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing | DeView",
  description:
    "Transparent engagement models — from a focused workflow audit to full AI system deployment. Fixed-price scoping, no retainers required to start.",
};

export default function PricingPage() {
  return <PricingContent />;
}
