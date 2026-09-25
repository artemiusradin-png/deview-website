import type { MetadataRoute } from "next";
import { MARKET_SLUGS } from "@/lib/markets";

const SITE_URL = "https://deviewai.com";

const publicEnglishPaths = [
  "",
  "/about",
  "/architecture-reality-check",
  "/case-studies",
  "/contact",
  "/faq",
  "/how-we-work",
  "/industries/insurance",
  "/industries/legal",
  "/industries/lending",
  "/insights",
  "/insights/document-automation-where-to-start",
  "/insights/four-ai-projects-worth-doing",
  "/insights/why-most-ai-pilots-fail",
  "/outcomes",
  "/pricing",
  "/resources/ai-guide-lending",
  "/resources/ai-guide-lending/guide",
  "/roi-calculator",
  "/services",
  "/stack",
  "/use-cases",
  "/what-makes-it-enterprise",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const existingPages = publicEnglishPaths.map((path) => ({
    url: `${SITE_URL}/en${path}`,
  }));
  const marketPages = [
    {
      url: `${SITE_URL}/en/markets`,
      lastModified: "2026-09-24",
    },
    ...MARKET_SLUGS.map((market) => ({
      url: `${SITE_URL}/en/markets/${market}`,
      lastModified: "2026-09-24",
    })),
  ];

  return [...existingPages, ...marketPages];
}
