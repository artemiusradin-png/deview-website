import type { Metadata } from "next";
import { LegalContent } from "./legal-content";

export const metadata: Metadata = {
  title: "AI for Legal Operations | DeView",
  description:
    "AI automation for legal and professional services teams — contract review, document processing, research, and internal knowledge management. Deployed in 3–6 weeks.",
};

export default function LegalPage() {
  return <LegalContent />;
}
