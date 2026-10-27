import type { SolutionVertical } from "@/lib/solutions";

export function getSolutionCategory(slug: string, vertical: SolutionVertical): string {
  if (vertical === "banking") {
    if (/loan|origination|credit|collateral/.test(slug)) return "Lending & Credit";
    if (/payment|iso-20022|reconciliation|treasury|core-banking|transaction-monitoring/.test(slug))
      return "Payments & Core";
    if (/portal|mobile/.test(slug)) return "Digital Banking";
    if (/ai|fraud|copilot|scoring|document-processing/.test(slug)) return "AI & Document Intelligence";
    if (/reporting|controlling|warehouse|risk-data|analytics|model-risk/.test(slug))
      return "Data & Controlling";
    if (/cloud|pci|dora|cyber|disaster|observability/.test(slug)) return "Cloud & Resilience";
    return "Lending & Credit";
  }
  if (vertical === "oil-gas") {
    if (/production|allocation|drilling|well|integrity|permit|field/.test(slug))
      return "Production & Field Ops";
    if (/project|joint-venture|engineering-data|supplier/.test(slug)) return "Projects & Commercial";
    if (/twin|forecasting|predictive|optimization|interpretation|rag/.test(slug))
      return "AI & Digital Twins";
    if (/osdu|historian|reporting|methane|exploration/.test(slug)) return "Subsurface & Data";
    if (/cybersecurity|edge-to-cloud/.test(slug)) return "OT Security & Cloud";
    return "Production & Field Ops";
  }
  if (vertical === "manufacturing") {
    if (/execution|planning|quality|cmms|warehouse/.test(slug)) return "MES & Plant Ops";
    if (/configurator|portal|supply-chain/.test(slug)) return "Supply Chain & B2B";
    if (/iot|tracking/.test(slug)) return "Industrial IoT & Tracking";
    if (/vision|forecasting|oee/.test(slug)) return "AI & Analytics";
    if (/compliance|resilience|nis2/.test(slug)) return "Compliance & Security";
    return "MES & Plant Ops";
  }
  if (vertical === "agriculture") {
    if (/farm-management|dealer|grain/.test(slug)) return "Farm ERP & Trading";
    if (/app|sensor/.test(slug)) return "Field Apps & Sensors";
    if (/disease|yield/.test(slug)) return "AI & Crop Intelligence";
    if (/eudr|fsma|platform/.test(slug)) return "Traceability & Data";
    return "Farm ERP & Trading";
  }
  if (vertical === "cross-industry") {
    if (/iot|edge/.test(slug)) return "IoT & Edge Systems";
    if (/modernization|integration/.test(slug)) return "Integration & Modernisation";
    if (/agent|llm|rag/.test(slug)) return "Enterprise AI & RAG";
    if (/esg|migration|master-data/.test(slug)) return "Data Platforms";
    if (/sovereign|devsecops|zero-trust|cost|security/.test(slug)) return "Cloud & Security";
    return "Enterprise Engineering";
  }
  return "Enterprise Platform";
}

export const VERTICAL_LABELS: Record<SolutionVertical, string> = {
  banking: "Banking & Payments",
  "oil-gas": "Oil & Gas Software",
  manufacturing: "Manufacturing Software",
  agriculture: "Agriculture Software",
  "cross-industry": "IoT, Integration & AI",
};
