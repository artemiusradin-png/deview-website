import type { Metadata } from "next";

export const SITE_URL = "https://deviewai.com";
export const DEFAULT_TITLE = "Deview | Software Development Company in Hong Kong: Custom Software, AI & Cloud";
export const DEFAULT_DESCRIPTION =
  "Custom software development for financial and industrial companies: digital product engineering, AI/ML engineering, data engineering, cloud and DevOps, and enterprise platforms, from a team with 15+ years of enterprise delivery.";

/** Next merges nested metadata shallowly. Complete each page's social fields here. */
export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = metadata.title ?? DEFAULT_TITLE;
  const description = metadata.description ?? DEFAULT_DESCRIPTION;
  const canonical = metadata.alternates?.canonical;
  const url = typeof canonical === "string" || canonical instanceof URL
    ? canonical
    : canonical?.url;
  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: "website",
    siteName: "Deview",
    locale: "en",
    title,
    description,
    ...(url ? { url } : {}),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Deview — custom software, AI, data and cloud" }],
    ...metadata.openGraph,
  };

  return {
    ...metadata,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: openGraph.title ?? title,
      description: openGraph.description ?? description,
      images: openGraph.images,
      ...metadata.twitter,
    },
  };
}
