#!/usr/bin/env node
// Zero-cost keyword miner using Google's public Suggest / Autocomplete API.
// No Ahrefs, Semrush, or DataForSEO subscriptions required.
// Usage:
//   node scripts/free-keyword-miner.mjs "loan management system"
//   node scripts/free-keyword-miner.mjs --preset=lending
//   node scripts/free-keyword-miner.mjs --preset=oil-gas
//   node scripts/free-keyword-miner.mjs --preset=banking
//   node scripts/free-keyword-miner.mjs --preset=all

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

// Pre-configured high-ticket B2B seed clusters matching our 95 solution pages
const PRESETS = {
  lending: [
    "loan management system",
    "commercial loan origination",
    "credit approval workflow",
    "collateral management software",
    "borrower portal software",
    "debt collection software",
    "loan servicing platform",
  ],
  "oil-gas": [
    "upstream production management system",
    "oil and gas project controls software",
    "drilling reporting software",
    "engineering document management system",
    "pipeline integrity management software",
    "osdu data platform",
  ],
  banking: [
    "core banking integration layer",
    "iso 20022 payment hub",
    "transaction monitoring software",
    "bank reconciliation engine",
    "corporate banking portal development",
    "real time payments integration",
  ],
  ai: [
    "rag assistant for engineering documents",
    "ai document processing for banks",
    "private llm deployment enterprise",
    "enterprise ai agent development",
  ],
};

PRESETS.all = [
  ...PRESETS.lending,
  ...PRESETS["oil-gas"],
  ...PRESETS.banking,
  ...PRESETS.ai,
];

// High-intent commercial prefixes and suffixes
const INTENT_MODIFIERS = [
  // Commercial / Buying Evaluation
  "rfp",
  "rfp template",
  "requirements document",
  "features list",
  "cost",
  "pricing",
  "build vs buy",
  "architecture",
  "specification",
  "software development",
  "custom development",
  "enterprise platform",
  "alternatives",
  "vendor comparison",
  "api integration",
  "compliance checklist",
];

const PREFIX_MODIFIERS = [
  "how to build a",
  "best",
  "custom",
  "enterprise",
];

// Mapping keywords to relevant Deview solution routes
const SOLUTION_MAPPINGS = [
  { match: ["loan management", "lending platform", "loan servicing"], url: "/en/industries/lending" },
  { match: ["loan origination", "commercial loan"], url: "/en/solutions/commercial-loan-origination-system" },
  { match: ["credit approval", "delegated authority"], url: "/en/solutions/credit-approval-workflow-software" },
  { match: ["collateral", "guarantee management"], url: "/en/solutions/collateral-and-guarantee-management-system" },
  { match: ["borrower portal", "loan application portal"], url: "/en/solutions/digital-sme-loan-application-portal" },
  { match: ["iso 20022", "payment hub"], url: "/en/solutions/iso-20022-payment-hub" },
  { match: ["real time payments", "instant payments", "fps"], url: "/en/solutions/real-time-payments-integration" },
  { match: ["transaction monitoring", "aml scenario"], url: "/en/solutions/transaction-monitoring-system-development" },
  { match: ["reconciliation engine"], url: "/en/solutions/reconciliation-engine-for-banks" },
  { match: ["core banking"], url: "/en/solutions/core-banking-integration-layer" },
  { match: ["corporate banking portal"], url: "/en/solutions/corporate-banking-portal-development" },
  { match: ["upstream production", "well production"], url: "/en/solutions/upstream-production-management-system" },
  { match: ["project controls", "oil and gas scheduling"], url: "/en/solutions/oil-and-gas-project-controls-software" },
  { match: ["drilling reporting", "ddr parsing"], url: "/en/solutions/daily-drilling-reporting-system" },
  { match: ["engineering document", "p&id", "drawing rag", "rag assistant"], url: "/en/solutions/rag-assistant-for-engineering-documents" },
  { match: ["oil", "gas", "dof", "energy"], url: "/en/industries/oil-and-gas" },
  { match: ["document processing", "idp", "ocr"], url: "/en/solutions/ai-document-processing-for-banks" },
  { match: ["private llm", "on premise llm"], url: "/en/solutions/private-llm-deployment" },
  { match: ["ai agent", "back office ai"], url: "/en/solutions/ai-agents-for-back-office-operations" },
];

function matchSolutionUrl(query) {
  const lower = query.toLowerCase();
  for (const item of SOLUTION_MAPPINGS) {
    if (item.match.some((m) => lower.includes(m))) {
      return item.url;
    }
  }
  return "/en/solutions";
}

function categorizeIntent(keyword) {
  const lower = keyword.toLowerCase();
  if (
    lower.includes("rfp") ||
    lower.includes("template") ||
    lower.includes("cost") ||
    lower.includes("pricing") ||
    lower.includes("price") ||
    lower.includes("vendor") ||
    lower.includes("build vs buy") ||
    lower.includes("requirements") ||
    lower.includes("features") ||
    lower.includes("custom") ||
    lower.includes("software development")
  ) {
    return "High Commercial Intent (Buyer / RFP)";
  }
  if (
    lower.includes("architecture") ||
    lower.includes("api") ||
    lower.includes("schema") ||
    lower.includes("database") ||
    lower.includes("integration") ||
    lower.includes("system design") ||
    lower.includes("flow")
  ) {
    return "Technical / Architecture Intent";
  }
  if (
    lower.includes("how to") ||
    lower.includes("best") ||
    lower.includes("what is") ||
    lower.includes("guide") ||
    lower.includes("vs") ||
    lower.includes("comparison")
  ) {
    return "Evaluation / Educational Intent";
  }
  return "General Product / Solution";
}

async function queryGoogleSuggest(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(q)}`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) return [];
    const data = await res.json();
    // data format: [query, [suggestion1, suggestion2, ...], ...]
    if (Array.isArray(data) && Array.isArray(data[1])) {
      return data[1].map((s) => String(s).trim());
    }
    return [];
  } catch {
    return [];
  }
}

// Sleep helper to be polite to the endpoint
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function mineSeed(seed, includeAlphabet = true) {
  const results = new Set();

  console.log(`\n🔍 Mining queries for seed: "${seed}"`);

  // 1. Root query
  const rootHits = await queryGoogleSuggest(seed);
  rootHits.forEach((h) => results.add(h));
  await sleep(120);

  // 2. High-intent suffixes
  for (const mod of INTENT_MODIFIERS) {
    const hits = await queryGoogleSuggest(`${seed} ${mod}`);
    hits.forEach((h) => results.add(h));
    await sleep(80);
  }

  // 3. High-intent prefixes
  for (const pref of PREFIX_MODIFIERS) {
    const hits = await queryGoogleSuggest(`${pref} ${seed}`);
    hits.forEach((h) => results.add(h));
    await sleep(80);
  }

  // 4. Wildcard / Alphabetical sweep (a-z)
  if (includeAlphabet) {
    process.stdout.write("   Alphabetical expansion: ");
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    for (const letter of letters) {
      process.stdout.write(`${letter}`);
      const hits = await queryGoogleSuggest(`${seed} ${letter}`);
      hits.forEach((h) => results.add(h));
      await sleep(70);
    }
    console.log(" (done)");
  }

  return [...results];
}

async function main() {
  const args = process.argv.slice(2);
  let seeds = [];
  let includeAlphabet = true;
  let customOut = null;

  for (const arg of args) {
    if (arg.startsWith("--preset=")) {
      const presetKey = arg.replace("--preset=", "").trim();
      if (PRESETS[presetKey]) {
        seeds.push(...PRESETS[presetKey]);
      } else {
        console.error(`Unknown preset "${presetKey}". Available: ${Object.keys(PRESETS).join(", ")}`);
        process.exit(1);
      }
    } else if (arg === "--quick") {
      includeAlphabet = false;
    } else if (arg.startsWith("--out=")) {
      customOut = arg.replace("--out=", "").trim();
    } else if (!arg.startsWith("--")) {
      seeds.push(arg);
    }
  }

  if (seeds.length === 0) {
    console.log("No seeds or preset provided. Defaulting to: --preset=lending");
    seeds = PRESETS.lending;
  }

  console.log("===============================================================================");
  console.log(" DEVIEW ZERO-COST KEYWORD MINER (Google Suggest Direct API)");
  console.log("===============================================================================");
  console.log(`Active seeds: ${seeds.length}`);
  console.log(`Alphabet sweep: ${includeAlphabet ? "ON (deep mode)" : "OFF (quick mode)"}`);

  const allRecords = [];
  const seenKeywords = new Set();

  for (const seed of seeds) {
    const suggestions = await mineSeed(seed, includeAlphabet);
    for (const kw of suggestions) {
      if (!seenKeywords.has(kw.toLowerCase())) {
        seenKeywords.add(kw.toLowerCase());
        const intent = categorizeIntent(kw);
        const targetUrl = matchSolutionUrl(kw);
        allRecords.push({
          seed,
          keyword: kw,
          intent,
          targetUrl,
        });
      }
    }
  }

  // Group by intent for summary
  const commercial = allRecords.filter((r) => r.intent.startsWith("High Commercial"));
  const technical = allRecords.filter((r) => r.intent.startsWith("Technical"));
  const educational = allRecords.filter((r) => r.intent.startsWith("Evaluation"));
  const general = allRecords.filter((r) => r.intent.startsWith("General"));

  console.log("\n===============================================================================");
  console.log(" MINING SUMMARY");
  console.log("===============================================================================");
  console.log(`Total unique keywords extracted: ${allRecords.length}`);
  console.log(`  🎯 High Commercial / RFP Intent:  ${commercial.length}`);
  console.log(`  🏗️ Technical & Architecture:       ${technical.length}`);
  console.log(`  💡 Evaluation & How-to:           ${educational.length}`);
  console.log(`  📄 General Product / System:       ${general.length}`);

  console.log("\nTop Commercial / RFP Keywords Discovered:");
  commercial.slice(0, 15).forEach((item, idx) => {
    console.log(`  ${(idx + 1).toString().padStart(2, " ")}. "${item.keyword}" → targets ${item.targetUrl}`);
  });

  // Export to CSV
  const dateStr = new Date().toISOString().split("T")[0];
  const outPath = customOut
    ? resolve(process.cwd(), customOut)
    : resolve(process.cwd(), "docs", `keyword-miner-report-${dateStr}.csv`);

  mkdirSync(dirname(outPath), { recursive: true });

  const csvRows = [
    ["Keyword", "Intent Tier", "Target Deview Route", "Seed Topic", "Extracted Date"].map((s) => `"${s}"`).join(","),
    ...allRecords.map((r) =>
      [r.keyword, r.intent, `https://deviewai.com${r.targetUrl}`, r.seed, dateStr]
        .map((val) => `"${String(val).replace(/"/g, '""')}"`)
        .join(",")
    ),
  ];

  writeFileSync(outPath, csvRows.join("\n"), "utf-8");
  console.log(`\n✅ Saved complete report (${allRecords.length} rows) to:`);
  console.log(`   ${outPath}`);
  console.log("===============================================================================\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
