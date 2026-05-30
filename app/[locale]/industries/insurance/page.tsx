import type { Metadata } from "next";
import { InsuranceContent } from "./insurance-content";

export const metadata: Metadata = {
  title: "AI for Insurance Operations | DeView",
  description:
    "AI automation for insurance operations teams — claims processing, policy document handling, customer support, and compliance reporting. Deployed in 3–6 weeks.",
};

export default function InsurancePage() {
  return <InsuranceContent />;
}
