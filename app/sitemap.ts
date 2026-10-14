import type { MetadataRoute } from "next";
import { MARKET_SLUGS } from "@/lib/markets";
import { PRODUCTION_CASES } from "@/lib/case-studies";
import { SERVICE_PAGES, servicePagePath } from "@/lib/service-pages";
import {
  OIL_GAS_CASE_SLUGS,
  OIL_GAS_HUB_PATH,
  OIL_GAS_PAGES_UPDATED,
  oilGasCasePath,
} from "@/lib/oil-gas-cases";

const SITE_URL = "https://deviewai.com";
const SERVICE_PAGES_UPDATED = "2026-10-13";

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
  "/resources/ai-guide-lending",
  "/resources/automation-playbook",
  "/resources/ai-security-checklist",
  "/resources/loan-management-system-checklist",
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

  const oilGasPages = [
    {
      url: `${SITE_URL}${OIL_GAS_HUB_PATH}`,
      lastModified: OIL_GAS_PAGES_UPDATED,
    },
    ...OIL_GAS_CASE_SLUGS.map((slug) => ({
      url: `${SITE_URL}${oilGasCasePath(slug)}`,
      lastModified: OIL_GAS_PAGES_UPDATED,
    })),
  ];

  const servicePages = SERVICE_PAGES.map((page) => ({
    url: `${SITE_URL}/en${servicePagePath(page.slug)}`,
    lastModified: SERVICE_PAGES_UPDATED,
  }));

  const productionCasePages = PRODUCTION_CASES.map(({ slug }) => ({
    url: `${SITE_URL}/en/case-studies/${slug}`,
  }));

  return [...existingPages, ...servicePages, ...productionCasePages, ...marketPages, ...oilGasPages];
}
