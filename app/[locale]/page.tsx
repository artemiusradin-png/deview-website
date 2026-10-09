import type { Metadata } from "next";
import {
  LEGAL_ENTITY,
  ORGANIZATION_PROFILE_URLS,
  SITE_INQUIRY_EMAIL,
  SITE_PHONE,
} from "@/lib/site-contact";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  alternates: { canonical: "/en" },
};

const SITE_URL = "https://deviewai.com";

/** Tells search engines who Deview is, so brand searches resolve to one clear entity. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Deview",
      alternateName: ["DeView", "Deview AI"],
      legalName: LEGAL_ENTITY.name.toUpperCase(),
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Hong Kong Companies Registry",
        value: LEGAL_ENTITY.registryNumber,
      },
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/deview-logo.png`,
        width: 400,
        height: 400,
      },
      email: SITE_INQUIRY_EMAIL,
      telephone: SITE_PHONE,
      description:
        "AI consulting and engineering firm building AI automation, custom software platforms, and data pipelines for operations and finance teams.",
      address: {
        "@type": "PostalAddress",
        streetAddress: LEGAL_ENTITY.streetAddress,
        addressLocality: LEGAL_ENTITY.addressLocality,
        addressRegion: LEGAL_ENTITY.addressRegion,
        addressCountry: LEGAL_ENTITY.addressCountry,
      },
      sameAs: ORGANIZATION_PROFILE_URLS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Deview",
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
