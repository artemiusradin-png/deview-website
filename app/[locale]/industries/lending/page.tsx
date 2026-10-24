import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { LendingContent } from "./lending-content";

export const metadata: Metadata = withSocialMetadata({
  title: "Loan Management System & Lending Software for Hong Kong Lenders | Deview",
  description:
    "Loan management systems built for five Hong Kong lenders: borrower portals, credit workflows, repayments, collections and audit trails, plus AI document processing for money lenders and lending groups.",
  alternates: { canonical: "/en/industries/lending" },
});

export default function LendingPage() {
  return <LendingContent />;
}
