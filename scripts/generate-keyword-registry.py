import re
import csv
import json

ASSET_MAP = {
    # Country Pages
    "CP-01": {"url": "/en/industries/oil-and-gas/markets/united-arab-emirates", "name": "United Arab Emirates", "type": "Country Market"},
    "CP-02": {"url": "/en/industries/oil-and-gas/markets/saudi-arabia", "name": "Saudi Arabia", "type": "Country Market"},
    "CP-03": {"url": "/en/industries/oil-and-gas/markets/nigeria", "name": "Nigeria", "type": "Country Market"},
    "CP-04": {"url": "/en/industries/oil-and-gas/markets/oman", "name": "Oman", "type": "Country Market"},
    "CP-05": {"url": "/en/industries/oil-and-gas/markets/qatar", "name": "Qatar", "type": "Country Market"},
    "CP-06": {"url": "/en/industries/oil-and-gas/markets/egypt", "name": "Egypt", "type": "Country Market"},
    "CP-07": {"url": "/en/industries/oil-and-gas/markets/angola", "name": "Angola", "type": "Country Market"},
    "CP-08": {"url": "/en/industries/oil-and-gas/markets/algeria", "name": "Algeria", "type": "Country Market"},
    "CP-09": {"url": "/en/industries/oil-and-gas/markets/kuwait", "name": "Kuwait", "type": "Country Market"},
    "CP-10": {"url": "/en/industries/oil-and-gas/markets/mozambique", "name": "Mozambique", "type": "Country Market"},
    "CP-11": {"url": "/en/industries/oil-and-gas/markets/iraq", "name": "Iraq", "type": "Country Market"},
    "CP-12": {"url": "/en/industries/oil-and-gas/markets/libya", "name": "Libya", "type": "Country Market"},
    "CP-13": {"url": "/en/industries/oil-and-gas/markets/namibia", "name": "Namibia", "type": "Country Market"},
    "CP-14": {"url": "/en/industries/oil-and-gas/markets/ghana", "name": "Ghana", "type": "Country Market"},
    "CP-15": {"url": "/en/industries/oil-and-gas/markets/senegal", "name": "Senegal", "type": "Country Market"},
    "CP-16": {"url": "/en/industries/oil-and-gas/markets/cote-divoire", "name": "Côte d'Ivoire", "type": "Country Market"},
    "CP-17": {"url": "/en/industries/oil-and-gas/markets/south-africa", "name": "South Africa", "type": "Country Market"},
    "CP-18": {"url": "/en/industries/oil-and-gas/markets/tanzania", "name": "Tanzania", "type": "Country Market"},
    "CP-19": {"url": "/en/industries/oil-and-gas/markets/bahrain", "name": "Bahrain", "type": "Country Market"},
    "CP-20": {"url": "/en/industries/oil-and-gas/markets/mauritania", "name": "Mauritania", "type": "Country Market"},
    "CP-21": {"url": "/en/industries/oil-and-gas/markets/morocco", "name": "Morocco", "type": "Country Market"},
    "CP-22": {"url": "/en/industries/oil-and-gas/markets/gabon", "name": "Gabon", "type": "Country Market"},
    "CP-23": {"url": "/en/industries/oil-and-gas/markets/republic-of-congo", "name": "Republic of the Congo", "type": "Country Market"},
    "CP-24": {"url": "/en/industries/oil-and-gas/markets/equatorial-guinea", "name": "Equatorial Guinea", "type": "Country Market"},
    "CP-25": {"url": "/en/industries/oil-and-gas/markets/uganda", "name": "Uganda", "type": "Country Market"},

    # Regional Hubs
    "RH-01": {"url": "/en/industries/oil-and-gas/regions/middle-east", "name": "Middle East Regional Hub", "type": "Regional Hub"},
    "RH-02": {"url": "/en/industries/oil-and-gas/regions/north-africa", "name": "North Africa Regional Hub", "type": "Regional Hub"},
    "RH-03": {"url": "/en/industries/oil-and-gas/regions/west-central-africa", "name": "West & Central Africa Regional Hub", "type": "Regional Hub"},
    "RH-04": {"url": "/en/industries/oil-and-gas/regions/east-africa", "name": "East Africa Regional Hub", "type": "Regional Hub"},
    "RH-05": {"url": "/en/industries/oil-and-gas/regions/southern-africa", "name": "Southern Africa Regional Hub", "type": "Regional Hub"},

    # Solutions
    "SP-01": {"url": "/en/solutions/gcc-oil-gas-project-controls", "name": "GCC Capital Project Controls", "type": "Solution Blueprint"},
    "SP-02": {"url": "/en/solutions/middle-east-oil-gas-contractor-portals", "name": "Middle East Contractor Portals", "type": "Solution Blueprint"},
    "SP-03": {"url": "/en/solutions/sovereign-industrial-ai-gcc-energy", "name": "Sovereign Industrial AI for GCC Energy", "type": "Solution Blueprint"},
    "SP-04": {"url": "/en/solutions/africa-oil-gas-jv-afe-management", "name": "Africa Oil & Gas JV & AFE Accounting", "type": "Solution Blueprint"},
    "SP-05": {"url": "/en/solutions/africa-upstream-production-reporting", "name": "Africa Upstream Production Reporting", "type": "Solution Blueprint"},
    "SP-06": {"url": "/en/solutions/offline-oilfield-operations-software", "name": "Offline Remote Oilfield Operations Software", "type": "Solution Blueprint"},
    "SP-07": {"url": "/en/solutions/africa-exploration-data-rooms", "name": "Africa Exploration Virtual Data Rooms", "type": "Solution Blueprint"},
    "SP-08": {"url": "/en/solutions/mena-asset-integrity-hse-software", "name": "MENA Asset Integrity & HSE Software", "type": "Solution Blueprint"},
    "SP-09": {"url": "/en/solutions/osdu-data-platform-national-oil-companies", "name": "OSDU Data Platform for NOCs", "type": "Solution Blueprint"},
    "SP-10": {"url": "/en/solutions/mena-africa-methane-emissions-reporting", "name": "MENA & Africa Methane & Flare Reporting", "type": "Solution Blueprint"},

    # Technical Authority Articles
    "AR-01": {"url": "/en/insights/gcc-oil-gas-ai-data-residency", "name": "Designing Industrial AI for GCC Energy", "type": "Technical Authority Article"},
    "AR-02": {"url": "/en/insights/oil-gas-it-ot-data-platform-architecture", "name": "Oil & Gas IT/OT Data Platform Architecture", "type": "Technical Authority Article"},
    "AR-03": {"url": "/en/insights/production-reporting-intermittent-connectivity", "name": "Production Reporting Under Intermittent Connectivity", "type": "Technical Authority Article"},
    "AR-04": {"url": "/en/insights/digital-systems-operators-nocs-joint-ventures", "name": "Digital Systems for Operators, NOCs, and JVs", "type": "Technical Authority Article"},
    "AR-05": {"url": "/en/insights/africa-oil-gas-local-content-technology-procurement", "name": "Africa Local Content & Technology Procurement", "type": "Technical Authority Article"},
    "AR-06": {"url": "/en/insights/custom-vs-packaged-upstream-software", "name": "Custom vs Packaged Upstream Software Economics", "type": "Technical Authority Article"},

    # Lead Magnets
    "LM-01": {"url": "/en/resources/upstream-production-system-requirements", "name": "Upstream Production Requirements Workbook", "type": "Lead Magnet Workbook"},
    "LM-02": {"url": "/en/resources/oil-gas-project-controls-jv-reporting-checklist", "name": "Project Controls & JV Reporting Checklist", "type": "Lead Magnet Checklist"},
    "LM-03": {"url": "/en/resources/oil-gas-it-ot-architecture-checklist", "name": "IT/OT Architecture & Security Checklist", "type": "Lead Magnet Checklist"},
    "LM-04": {"url": "/en/resources/osdu-exploration-data-readiness-assessment", "name": "OSDU Migration Readiness Diagnostic", "type": "Lead Magnet Diagnostic"}
}

with open('docs/product/prd/product-requirements.md', 'r') as f:
    text = f.read()

pattern = r'\|\s*(KW-\d{3})\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|'
matches = re.findall(pattern, text)

rows = []
ts_entries = []

for kw_id, kw_phrase, asset_id in matches:
    kw_phrase = kw_phrase.strip()
    asset_id = asset_id.strip()
    asset_info = ASSET_MAP.get(asset_id, {"url": "/en/industries/oil-and-gas", "name": "General Oil & Gas", "type": "General"})
    
    # Priority & Volume tier heuristic
    num = int(kw_id.split("-")[1])
    if num <= 25:
        priority = 1
        vol_tier = "High"
        intent = "Commercial Investigation"
        diff = "Medium"
    elif num <= 50:
        priority = 1 if num <= 35 else 2
        vol_tier = "Medium"
        intent = "Commercial Investigation"
        diff = "Low"
    elif num <= 75:
        priority = 1 if num <= 60 else 2
        vol_tier = "Medium"
        intent = "Commercial / Solution Fit"
        diff = "Medium"
    elif num <= 90:
        priority = 2
        vol_tier = "Long-tail / High-intent"
        intent = "Informational / Architecture"
        diff = "Low"
    else:
        priority = 1
        vol_tier = "High-intent / Procurement"
        intent = "Transactional / RFP"
        diff = "Low"

    serp = "Standard Result"
    if "checklist" in kw_phrase or "template" in kw_phrase or "matrix" in kw_phrase or "workbook" in kw_phrase:
        serp = "Featured Snippet / Download"
    elif "how" in kw_phrase or "guide" in kw_phrase or "vs" in kw_phrase:
        serp = "FAQ Accordion / People Also Ask"

    row = {
        "keyword_id": kw_id,
        "keyword_phrase": kw_phrase,
        "destination_asset_id": asset_id,
        "destination_name": asset_info["name"],
        "destination_type": asset_info["type"],
        "destination_url": asset_info["url"],
        "search_intent": intent,
        "priority": priority,
        "volume_tier": vol_tier,
        "difficulty_estimate": diff,
        "target_serp_feature": serp,
        "keyword_owner": "Energy Practice SEO & Architecture Team",
        "current_rank": "Unranked (Candidate Target)",
        "validation_status": "Unvalidated Candidate - Pending Search Console Data",
        "last_reviewed": "2026-10-27",
        "next_review_date": "2027-04-27"
    }
    rows.append(row)

    ts_entries.append(f"""  {{
    id: "{kw_id}",
    keyword: "{kw_phrase}",
    assetId: "{asset_id}",
    assetName: "{asset_info['name']}",
    assetType: "{asset_info['type']}",
    url: "{asset_info['url']}",
    searchIntent: "{intent}",
    priority: {priority},
    volumeTier: "{vol_tier}",
    difficultyEstimate: "{diff}",
    targetSERPFeature: "{serp}",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    currentRank: null,
    validationStatus: "Unvalidated Candidate - Pending Search Console Data",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27"
  }}""")

# Write CSV
csv_path = "docs/seo-keyword-map-2026-10-23.csv"
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    writer.writeheader()
    writer.writerows(rows)

print(f"Wrote {len(rows)} operational keywords to {csv_path}")

# Write TypeScript Registry
body = ",\n".join(ts_entries)
ts_content = f"""export interface KeywordEntry {{
  id: string;
  keyword: string;
  assetId: string;
  assetName: string;
  assetType: string;
  url: string;
  searchIntent: string;
  priority: 1 | 2 | 3;
  volumeTier: string;
  difficultyEstimate: string;
  targetSERPFeature: string;
  keywordOwner: string;
  currentRank: number | null;
  validationStatus: string;
  lastReviewed: string;
  nextReviewDate: string;
}}

export const OPERATIONAL_KEYWORD_REGISTRY: KeywordEntry[] = [
{body}
];

export function getKeywordsForAsset(assetId: string): KeywordEntry[] {{
  return OPERATIONAL_KEYWORD_REGISTRY.filter((k) => k.assetId === assetId);
}}

export function getAllKeywords(): KeywordEntry[] {{
  return OPERATIONAL_KEYWORD_REGISTRY;
}}
"""

with open("lib/oil-gas/keywords.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Generated lib/oil-gas/keywords.ts with 100 operational keyword records!")
