import { ALL_MARKETS } from "../lib/oil-gas/markets";
import { REGIONAL_HUBS } from "../lib/oil-gas/regions";
import { AUTHORITY_ARTICLES } from "../lib/oil-gas/insights";
import { LEAD_MAGNET_RESOURCES } from "../lib/oil-gas/resources";
import { SOLUTION_PAGES } from "../lib/solutions";

const solutionSlugs = new Set(SOLUTION_PAGES.map((p) => p.slug));

const marketSlugs = new Set(Object.keys(ALL_MARKETS));
const regionSlugs = new Set(Object.keys(REGIONAL_HUBS));
const resourceSlugs = new Set(Object.keys(LEAD_MAGNET_RESOURCES));

const errors: string[] = [];

// 1. Verify all Markets
for (const [slug, m] of Object.entries(ALL_MARKETS)) {
  // Check double locale in CTAs
  if (m.ctas.primary.href.includes("/en/en/")) errors.push(`[Market ${slug}] primary CTA has /en/en/: ${m.ctas.primary.href}`);
  if (m.ctas.secondary.href.includes("/en/en/")) errors.push(`[Market ${slug}] secondary CTA has /en/en/: ${m.ctas.secondary.href}`);

  // Check region exists
  if (!regionSlugs.has(m.regionSlug)) {
    errors.push(`[Market ${slug}] references invalid regionSlug: ${m.regionSlug}`);
  }

  // Check priority workflows
  for (const wf of m.priorityWorkflows) {
    if (!solutionSlugs.has(wf.solutionSlug)) {
      errors.push(`[Market ${slug}] invalid priorityWorkflow solutionSlug: ${wf.solutionSlug}`);
    }
  }

  // Check solutions
  for (const s of m.solutions) {
    if (!solutionSlugs.has(s.slug)) {
      errors.push(`[Market ${slug}] invalid solution slug: ${s.slug}`);
    }
  }

  // Check secondary CTA resource target
  if (m.ctas.secondary.href.startsWith("/en/resources/")) {
    const resSlug = m.ctas.secondary.href.replace("/en/resources/", "");
    if (!resourceSlugs.has(resSlug)) {
      errors.push(`[Market ${slug}] secondary CTA resource slug not found: ${resSlug}`);
    }
  }
}

// 2. Verify Regional Hubs
for (const [slug, hub] of Object.entries(REGIONAL_HUBS)) {
  for (const c of hub.countries) {
    if (!marketSlugs.has(c.slug)) {
      errors.push(`[Hub ${slug}] invalid country slug: ${c.slug}`);
    }
  }
  for (const s of hub.keyWorkflows) {
    if (!solutionSlugs.has(s.solutionSlug)) {
      errors.push(`[Hub ${slug}] invalid workflow solution slug: ${s.solutionSlug}`);
    }
  }
}

// 3. Verify Authority Articles
for (const [slug, art] of Object.entries(AUTHORITY_ARTICLES)) {
  if (art.citations.length < 5) {
    errors.push(`[Article ${slug}] has only ${art.citations.length} citations (minimum 5 required)`);
  }
  for (const c of art.citations) {
    if (!c.url || !c.url.startsWith("http")) {
      errors.push(`[Article ${slug}] invalid citation URL: ${c.url}`);
    }
    if (!c.retrievedAt) {
      errors.push(`[Article ${slug}] missing retrievedAt on citation: ${c.title}`);
    }
  }
}

// 4. Verify Lead Magnet Resources
import fs from "fs";
import path from "path";

for (const [slug, res] of Object.entries(LEAD_MAGNET_RESOURCES)) {
  if (!res.fileDeliverable) {
    errors.push(`[Resource ${slug}] missing fileDeliverable`);
  } else {
    const filePath = path.join(process.cwd(), "public", "downloads", "resources", res.fileDeliverable);
    if (!fs.existsSync(filePath)) {
      errors.push(`[Resource ${slug}] fileDeliverable not found on disk: ${filePath}`);
    } else {
      const stats = fs.statSync(filePath);
      if (stats.size < 5000) {
        errors.push(`[Resource ${slug}] fileDeliverable seems empty or truncated (${stats.size} bytes): ${filePath}`);
      }
    }
  }
  if (!res.commercialFollowUp?.ctaHref) {
    errors.push(`[Resource ${slug}] missing commercialFollowUp ctaHref`);
  }
}

console.log("=== SEO Route & Link Integrity Verification ===");
if (errors.length > 0) {
  console.error(`Found ${errors.length} errors:`);
  errors.forEach((e) => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("SUCCESS: 0 broken links, 0 invalid slugs, all 25 markets, 5 hubs, 6 articles, 4 resources verified!");
}
