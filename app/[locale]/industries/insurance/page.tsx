import type { Metadata } from "next";
import { InsuranceContent } from "./insurance-content";

export const metadata: Metadata = {
  title: "AI for Insurance Operations | Deview",
  description:
    "AI automation for insurance operations teams: claims processing, policy document handling, customer support, and compliance reporting.",
  alternates: { canonical: "/en/industries/insurance" },
};

export default function InsurancePage() {
  return <InsuranceContent />;
}
