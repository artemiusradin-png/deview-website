import type { Metadata } from "next";
import { LEGAL_ENTITY, SITE_INQUIRY_EMAIL } from "@/lib/site-contact";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  alternates: { canonical: "/en" },
};

const SITE_URL = "https://deviewai.com";

/** Tells search engines who DeView is, so brand searches resolve to one clear entity. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "DeView",
      legalName: LEGAL_ENTITY.name.toUpperCase(),
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Hong Kong Companies Registry",
        value: LEGAL_ENTITY.registryNumber,
      },
      url: SITE_URL,
      email: SITE_INQUIRY_EMAIL,
      description:
        "AI consulting and engineering firm building AI automation, custom software platforms, and data pipelines for operations and finance teams.",
      /** Headcount as stated by the company (October 2026); keep in step with LinkedIn and directory listings. */
      numberOfEmployees: { "@type": "QuantitativeValue", value: 11 },
      address: {
        "@type": "PostalAddress",
        streetAddress: LEGAL_ENTITY.streetAddress,
        addressLocality: LEGAL_ENTITY.addressLocality,
        addressRegion: LEGAL_ENTITY.addressRegion,
        addressCountry: LEGAL_ENTITY.addressCountry,
      },
      sameAs: ["https://www.linkedin.com/company/115044062"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "DeView",
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomeContent
        heroVideoSrc="/video/deview-industries.mp4"
        heroVideoPoster="/video/deview-industries-poster.jpg"
      />
    </>
  );
}
