import type { MetadataRoute } from "next";
import { MARKET_SLUGS } from "@/lib/markets";
import { PRODUCTION_CASES } from "@/lib/case-studies";
import { SERVICE_PAGES, servicePagePath } from "@/lib/service-pages";
import { SOLUTION_PAGES, publishedHubs, solutionPath } from "@/lib/solutions";
import {
  OIL_GAS_CASE_SLUGS,
  OIL_GAS_HUB_PATH,
  OIL_GAS_PAGES_UPDATED,
  oilGasCasePath,
} from "@/lib/oil-gas-cases";
import { getAllRegions } from "@/lib/oil-gas/regions";
import { getAllMarkets } from "@/lib/oil-gas/markets";
import { getAllArticles } from "@/lib/oil-gas/insights";
import { getAllResources } from "@/lib/oil-gas/resources";

const SITE_URL = "https://deviewai.com";
const SERVICE_PAGES_UPDATED = "2026-10-25";

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
  "/insights/loan-management-system-cost",
  "/insights/document-automation-where-to-start",
  "/insights/four-ai-projects-worth-doing",
  "/insights/why-most-ai-pilots-fail",
  "/outcomes",
  "/resources",
  "/resources/ai-guide-lending",
  "/resources/automation-playbook",
  "/resources/ai-security-checklist",
  "/resources/loan-management-system-checklist",
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

  const solutionsUpdated = SOLUTION_PAGES.map((p) => p.updated).sort().at(-1);
  const solutionPages = [
    { url: `${SITE_URL}/en/solutions`, lastModified: solutionsUpdated },
    ...publishedHubs().map((hub) => ({
      url: `${SITE_URL}/en${solutionPath(hub.slug)}`,
      lastModified: solutionsUpdated,
    })),
    ...SOLUTION_PAGES.map((page) => ({
      url: `${SITE_URL}/en${solutionPath(page.slug)}`,
      lastModified: page.updated,
    })),
  ];

  const productionCasePages = PRODUCTION_CASES.map(({ slug }) => ({
    url: `${SITE_URL}/en/case-studies/${slug}`,
  }));

  const oilGasRegionalPages = getAllRegions().map((r) => ({
    url: `${SITE_URL}/en/industries/oil-and-gas/regions/${r.slug}`,
    lastModified: "2026-10-27",
  }));

  const oilGasMarketPages = getAllMarkets().map((m) => ({
    url: `${SITE_URL}/en/industries/oil-and-gas/markets/${m.slug}`,
    lastModified: "2026-10-27",
  }));

  const oilGasInsightPages = getAllArticles().map((a) => ({
    url: `${SITE_URL}/en/insights/${a.slug}`,
    lastModified: a.publishedAt,
  }));

  const oilGasResourcePages = getAllResources().map((r) => ({
    url: `${SITE_URL}/en/resources/${r.slug}`,
    lastModified: "2026-10-27",
  }));

  return [
    ...existingPages,
    ...servicePages,
    ...solutionPages,
    ...productionCasePages,
    ...marketPages,
    ...oilGasPages,
    ...oilGasRegionalPages,
    ...oilGasMarketPages,
    ...oilGasInsightPages,
    ...oilGasResourcePages,
  ];
}
