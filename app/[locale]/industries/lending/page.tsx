import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { LendingContent } from "./lending-content";

export const metadata: Metadata = withSocialMetadata({
  title: "Custom Loan Management Systems & Lending Software Development | Deview",
  description:
    "Custom loan management systems (LMS) and AI automation for commercial lenders, private debt funds, and fintechs globally. Multi-currency ledgers, borrower portals, automated underwriting, and proven multi-tenant deployments.",
  alternates: { canonical: "/en/industries/lending" },
});

const SITE_URL = "https://deviewai.com";
const canonicalUrl = `${SITE_URL}/en/industries/lending`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Custom Loan Management Systems & Lending Software Development | Deview",
      description:
        "Custom loan management systems (LMS) and AI automation for commercial lenders, private debt funds, and fintechs globally.",
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Deview", url: SITE_URL },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      mainEntity: { "@id": `${canonicalUrl}#software-covenant-desk` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#software-covenant-desk`,
      name: "Covenant Desk",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "FinanceApplication",
      operatingSystem: "Web, Cloud, Dedicated VPC",
      description:
        "Enterprise loan management system (LMS) and credit workflow automation platform deployed across commercial lenders and debt funds.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Custom enterprise deployment and private VPC installation",
      },
      featureList: [
        "Multi-tenant borrower self-service onboarding and application portal",
        "AI financial document processing, bank statement analysis and tamper detection",
        "Configurable credit risk scoring, exposure checking and committee approvals",
        "Multi-currency repayment ledger, dynamic interest accrual and collections",
        "HKMA SPM, Cap. 163, MAS TRM, and PDPO compliant audit logging",
      ],
      provider: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Deview",
        url: SITE_URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Deview", item: `${SITE_URL}/en` },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/en/#industries` },
        { "@type": "ListItem", position: 3, name: "Lending & Finance", item: canonicalUrl },
      ],
    },
  ],
};

export default function LendingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <LendingContent />
    </>
  );
}
