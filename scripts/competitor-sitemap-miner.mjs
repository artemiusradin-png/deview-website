#!/usr/bin/env node
// Zero-cost competitor sitemap analyzer & keyword reverse-engineer.
// Usage:
//   node scripts/competitor-sitemap-miner.mjs https://www.turnkey-lender.com/sitemap.xml
//   node scripts/competitor-sitemap-miner.mjs https://mambu.com/sitemap.xml

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

async function fetchSitemapXml(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/xml, application/xml, */*",
      },
    });
    if (!res.ok) {
      console.error(`Failed to fetch ${url} (HTTP ${res.status})`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

function parseUrlsFromXml(xml) {
  const locRegex = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  const urls = [];
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

function extractKeywordsFromSlug(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return [];
  const lastSegment = segments[segments.length - 1].replace(/\.(html|php|aspx|jsp)$/, "");
  return lastSegment
    .split(/[-_]/)
    .map((w) => w.toLowerCase())
    .filter((w) => w.length > 2 && !["the", "and", "for", "with", "from"].includes(w));
}

function categorizeUrl(urlStr) {
  const path = new URL(urlStr).pathname.toLowerCase();
  if (path.includes("solution") || path.includes("industry") || path.includes("use-case")) {
    return "Solutions / Vertical Landing Pages";
  }
  if (path.includes("product") || path.includes("feature") || path.includes("platform")) {
    return "Product & Feature Modules";
  }
  if (path.includes("rfp") || path.includes("template") || path.includes("guide") || path.includes("calculator") || path.includes("whitepaper") || path.includes("ebook")) {
    return "High-Intent Lead Magnets & Gated Assets";
  }
  if (path.includes("vs") || path.includes("compare") || path.includes("alternative")) {
    return "Competitor Comparison / Alternatives";
  }
  if (path.includes("case-stud") || path.includes("customer") || path.includes("story")) {
    return "Case Studies & Proof";
  }
  if (path.includes("blog") || path.includes("insight") || path.includes("article") || path.includes("news")) {
    return "Blog / Editorial Content";
  }
  return "General / Corporate Pages";
}

async function collectAllUrls(rootUrl, maxDepth = 2) {
  const allUrls = new Set();
  const queue = [{ url: rootUrl, depth: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    console.log(`📡 Fetching sitemap: ${url}`);
    const xml = await fetchSitemapXml(url);
    if (!xml) continue;

    const urls = parseUrlsFromXml(xml);
    console.log(`   Found ${urls.length} URLs in this sitemap.`);

    // Check if sub-sitemaps exist
    const isSitemapIndex = /<sitemapindex/i.test(xml);
    if (isSitemapIndex && depth < maxDepth) {
      for (const subUrl of urls) {
        if (subUrl.endsWith(".xml") || subUrl.includes("sitemap")) {
          queue.push({ url: subUrl, depth: depth + 1 });
        } else {
          allUrls.add(subUrl);
        }
      }
    } else {
      urls.forEach((u) => allUrls.add(u));
    }
  }

  return [...allUrls];
}

async function main() {
  const target = process.argv[2];
  if (!target) {
    console.log("Usage: node scripts/competitor-sitemap-miner.mjs <sitemap_url>");
    console.log("Example: node scripts/competitor-sitemap-miner.mjs https://www.turnkey-lender.com/sitemap.xml");
    process.exit(1);
  }

  console.log("===============================================================================");
  console.log(" DEVIEW COMPETITOR SITEMAP REVERSE-ENGINEERING TOOL");
  console.log("===============================================================================");

  const targetUrl = target.startsWith("http") ? target : `https://${target}`;
  const parsedHost = new URL(targetUrl).hostname.replace(/^www\./, "");
  const urls = await collectAllUrls(targetUrl);

  console.log(`\n✅ Total URLs discovered across sitemaps: ${urls.length}`);

  const categorized = {};
  const wordFreq = {};

  for (const url of urls) {
    const category = categorizeUrl(url);
    categorized[category] = categorized[category] || [];
    categorized[category].push(url);

    try {
      const pathname = new URL(url).pathname;
      const words = extractKeywordsFromSlug(pathname);
      for (const w of words) {
        wordFreq[w] = (wordFreq[w] || 0) + 1;
      }
    } catch {}
  }

  console.log("\nURL Category Breakdown:");
  for (const [category, list] of Object.entries(categorized)) {
    console.log(`  📁 ${category.padEnd(45, " ")}: ${list.length} pages`);
  }

  // Top slug keywords
  const sortedWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .filter(([w]) => !["page", "tag", "category", "index", "2024", "2025", "2026"].includes(w))
    .slice(0, 25);

  console.log("\nTop Keywords Targeted in URL Slugs:");
  sortedWords.forEach(([word, count], i) => {
    console.log(`  ${(i + 1).toString().padStart(2, " ")}. "${word}" (appears in ${count} URLs)`);
  });

  const leadMagnets = categorized["High-Intent Lead Magnets & Gated Assets"] || [];
  if (leadMagnets.length > 0) {
    console.log(`\nDiscovered ${leadMagnets.length} High-Intent Lead Magnets / Assets:`);
    leadMagnets.slice(0, 10).forEach((u) => console.log(`  ⭐ ${u}`));
  }

  const comparisons = categorized["Competitor Comparison / Alternatives"] || [];
  if (comparisons.length > 0) {
    console.log(`\nDiscovered ${comparisons.length} Comparison / Alternative Pages:`);
    comparisons.slice(0, 10).forEach((u) => console.log(`  ⚔️ ${u}`));
  }

  // Export report
  const dateStr = new Date().toISOString().split("T")[0];
  const outPath = resolve(process.cwd(), "docs", `competitor-${parsedHost}-${dateStr}.csv`);
  mkdirSync(dirname(outPath), { recursive: true });

  const rows = [
    ["Competitor URL", "Identified Category", "Host", "Extracted Date"].map((s) => `"${s}"`).join(","),
    ...urls.map((u) =>
      [u, categorizeUrl(u), parsedHost, dateStr].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")
    ),
  ];

  writeFileSync(outPath, rows.join("\n"), "utf-8");
  console.log(`\n✅ Saved complete competitor breakdown to:`);
  console.log(`   ${outPath}`);
  console.log("===============================================================================\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
