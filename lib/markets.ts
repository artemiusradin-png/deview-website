export const MARKET_SLUGS = ["hong-kong", "singapore", "taiwan"] as const;

export type MarketSlug = (typeof MARKET_SLUGS)[number];

type Market = {
  slug: MarketSlug;
  name: string;
  countryCode: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  presence: string;
  contextTitle: string;
  context: string;
  workflows: Array<{
    title: string;
    description: string;
  }>;
  considerations: string[];
  regulatoryNote: string;
  regulatoryLabel: string;
  regulatoryUrl: string;
  delivery: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const MARKETS: Record<MarketSlug, Market> = {
  "hong-kong": {
    slug: "hong-kong",
    name: "Hong Kong",
    countryCode: "HK",
    seoTitle: "AI Consulting & Software Engineering in Hong Kong | DeView",
    seoDescription:
      "Hong Kong-headquartered AI consulting, software engineering, and data engineering for operations and finance teams. Fixed-scope systems shipped in weeks.",
    eyebrow: "Hong Kong AI consulting",
    headline: "Production AI and software for Hong Kong operations teams.",
    introduction:
      "DeView is headquartered in Hong Kong. We help operations and finance teams replace document-heavy, repetitive work with secure AI systems, custom platforms, and reliable data pipelines.",
    presence: "Hong Kong headquarters and local client coordination.",
    contextTitle: "Built for bilingual, regulated, high-volume operations",
    context:
      "Hong Kong projects often sit at the intersection of English and Traditional Chinese documents, regional systems, and demanding governance requirements. We scope the workflow first, then build the smallest production system that removes the bottleneck without forcing teams into a separate tool.",
    workflows: [
      {
        title: "Financial operations and onboarding",
        description:
          "KYC and document review, credit and risk workflows, exception routing, audit logs, and controlled human approvals.",
      },
      {
        title: "Bilingual document automation",
        description:
          "Extract, classify, compare, and route English and Traditional Chinese documents while preserving source references for review.",
      },
      {
        title: "Internal platforms and data flows",
        description:
          "Connect CRM, ERP, spreadsheets, email, and internal databases so work moves through one governed operational flow.",
      },
    ],
    considerations: [
      "Hong Kong PDPO-aware data handling, retention, and access controls",
      "HKMA-oriented auditability and human oversight for banking workflows",
      "Private-cloud, client-cloud, or on-premises deployment options",
      "English and Traditional Chinese document processing",
    ],
    regulatoryNote:
      "For regulated financial workflows, architecture and controls are mapped to the client’s obligations and reviewed with its compliance team. The HKMA’s AI material is a useful starting point; final requirements always depend on the institution and use case.",
    regulatoryLabel: "HKMA: Reshaping Banking with Artificial Intelligence",
    regulatoryUrl: "https://www.hkma.gov.hk/media/chi/doc/key-functions/financial-infrastructure/Whitepaper_on_AI.pdf",
    delivery: [
      {
        step: "01",
        title: "Map the workflow",
        description: "Document inputs, decisions, exceptions, systems, controls, and the measurable cost of the current process.",
      },
      {
        step: "02",
        title: "Build against real examples",
        description: "Test the system on representative documents and edge cases, with agreed accuracy and review thresholds.",
      },
      {
        step: "03",
        title: "Deploy and hand over",
        description: "Ship into the agreed environment with monitoring, audit trails, documentation, and an operating runbook.",
      },
    ],
    faqs: [
      {
        question: "Does DeView have a Hong Kong presence?",
        answer:
          "Yes. DeView is headquartered in Hong Kong, and Eden Lam is the main point of contact for Hong Kong client coordination.",
      },
      {
        question: "Can the system process Traditional Chinese and English?",
        answer:
          "Yes. We design bilingual document pipelines around the actual formats, terminology, and review rules used by your team, then test them against representative samples before deployment.",
      },
      {
        question: "Can deployment stay inside our environment?",
        answer:
          "Yes. Depending on the use case, systems can run in your cloud account or on premises, with client-controlled access, retention, and model-provider choices.",
      },
    ],
  },
  singapore: {
    slug: "singapore",
    name: "Singapore",
    countryCode: "SG",
    seoTitle: "AI Consulting & Software Engineering in Singapore | DeView",
    seoDescription:
      "AI consulting, custom software, and data engineering for Singapore operations and finance teams. Secure, auditable systems deployed into your existing stack.",
    eyebrow: "Singapore AI consulting",
    headline: "AI systems that fit Singapore’s regional operations.",
    introduction:
      "DeView helps Singapore operations and finance teams automate high-volume work without creating another disconnected tool. We build, integrate, and hand over production systems with clear controls and measurable operating outcomes.",
    presence: "Serving Singapore through DeView’s Asia-Pacific delivery team.",
    contextTitle: "Designed for regional teams and accountable AI adoption",
    context:
      "Singapore teams often coordinate processes across entities, markets, and data sources. Our projects focus on the operational layer: making the workflow faster while preserving traceability, permissions, review steps, and the client’s control over infrastructure.",
    workflows: [
      {
        title: "Regional shared-service automation",
        description:
          "Triage requests, extract documents, reconcile records, and route exceptions across finance and operations teams.",
      },
      {
        title: "Risk and compliance workflows",
        description:
          "Create review queues, evidence trails, approval controls, and reporting flows around KYC, AML, and regulated decisions.",
      },
      {
        title: "Management data and reporting",
        description:
          "Unify operational data from fragmented systems into governed pipelines, dashboards, forecasts, and scheduled reports.",
      },
    ],
    considerations: [
      "MAS technology-risk and responsible-AI expectations for financial use cases",
      "Role-based access, approval gates, and exportable audit histories",
      "Deployment into the client’s existing cloud and security controls",
      "Integration across regional business units and data sources",
    ],
    regulatoryNote:
      "For Singapore financial institutions, the project control set can be mapped to relevant MAS technology-risk and responsible-AI expectations. Compliance decisions remain with the client and its advisers; our role is to make the implementation inspectable and controllable.",
    regulatoryLabel: "MAS: Artificial Intelligence in the financial sector",
    regulatoryUrl: "https://www.mas.gov.sg/development/fintech/artificial-intelligence",
    delivery: [
      {
        step: "01",
        title: "Prioritise by operating value",
        description: "Size the manual cost, identify the highest-value automation point, and agree on measurable success criteria.",
      },
      {
        step: "02",
        title: "Integrate, do not isolate",
        description: "Connect the workflow to the tools your team already uses and preserve the right human decision points.",
      },
      {
        step: "03",
        title: "Transfer operational control",
        description: "Deploy with monitoring, documentation, source code, and a clear path for your team to operate and extend it.",
      },
    ],
    faqs: [
      {
        question: "Do you work with Singapore companies remotely?",
        answer:
          "Yes. Projects are run through our Asia-Pacific delivery model with structured discovery, regular working sessions, and clearly defined acceptance and handover points.",
      },
      {
        question: "How do you approach MAS-regulated workflows?",
        answer:
          "We translate the client’s risk and compliance requirements into technical controls such as permissions, audit logs, approval gates, monitoring, and model or vendor documentation. The client’s compliance team signs off on the final control set.",
      },
      {
        question: "Will we be locked into a model or cloud provider?",
        answer:
          "No. We choose models and infrastructure around the use case, data sensitivity, and your existing environment, and we document the architecture for handover.",
      },
    ],
  },
  taiwan: {
    slug: "taiwan",
    name: "Taiwan",
    countryCode: "TW",
    seoTitle: "AI Consulting & Software Engineering in Taiwan | DeView",
    seoDescription:
      "AI consulting, software engineering, and data automation for Taiwan operations and finance teams, including bilingual documents and system integration.",
    eyebrow: "Taiwan AI consulting",
    headline: "Practical AI automation for Taiwan’s document and data workflows.",
    introduction:
      "DeView helps Taiwan teams turn repetitive document, reporting, and coordination work into production software. We connect AI to existing systems, keep review points explicit, and hand over a system your team can operate.",
    presence: "Serving Taiwan through DeView’s Asia-Pacific delivery team.",
    contextTitle: "Built around bilingual data and existing systems",
    context:
      "Many Taiwan workflows combine Traditional Chinese and English material with spreadsheets, email, ERP, and supplier or customer portals. We design around those real inputs and exceptions, rather than asking the team to move its work into a generic AI interface.",
    workflows: [
      {
        title: "Bilingual document processing",
        description:
          "Classify, extract, compare, and validate Traditional Chinese and English forms, contracts, invoices, and technical records.",
      },
      {
        title: "Supply-chain and vendor operations",
        description:
          "Automate intake, reconciliation, exception detection, status updates, and reporting across suppliers and internal systems.",
      },
      {
        title: "Finance and regulated operations",
        description:
          "Build traceable review workflows for onboarding, risk, compliance, lending, insurance, and management reporting.",
      },
    ],
    considerations: [
      "Traditional Chinese and English source documents and interfaces",
      "Data lineage, permissions, human review, and explainable outputs",
      "Client-controlled cloud or on-premises deployment",
      "Integration with ERP, CRM, databases, spreadsheets, and email",
    ],
    regulatoryNote:
      "Taiwan’s Financial Supervisory Commission has published guidance for AI applications in the financial industry covering governance, fairness, privacy and data governance, security, transparency, and sustainable development. We turn the applicable client requirements into concrete system controls and evidence.",
    regulatoryLabel: "Taiwan FSC: Guidelines for AI Applications in the Financial Industry",
    regulatoryUrl:
      "https://www.fsc.gov.tw/uploaddowndoc?file=News%2F202408281422060.pdf&filedisplay=Annex_Guidelines+for+Artificial+Intelligence+%28AI%29+Applications+in+the+Financial+Industry.pdf&flag=doc",
    delivery: [
      {
        step: "01",
        title: "Start with samples and exceptions",
        description: "Review real bilingual inputs, edge cases, current handoffs, and the systems that hold the source of truth.",
      },
      {
        step: "02",
        title: "Prove the full workflow",
        description: "Test extraction and decisions together with integrations, review queues, permissions, and failure handling.",
      },
      {
        step: "03",
        title: "Deploy with a runbook",
        description: "Ship the production system with monitoring, documentation, ownership boundaries, and team training.",
      },
    ],
    faqs: [
      {
        question: "Can you process Taiwan Traditional Chinese documents?",
        answer:
          "Yes. We test against the client’s actual documents and terminology rather than assuming that one generic language model or OCR setup will handle every format correctly.",
      },
      {
        question: "Can you integrate with our ERP or internal database?",
        answer:
          "Usually, yes. Discovery confirms the available APIs, exports, database access, and security constraints, then the scope defines exactly how data moves and which system remains the source of truth.",
      },
      {
        question: "How do you manage sensitive business data?",
        answer:
          "Architecture is selected around data sensitivity. Options include deployment in your cloud or on premises, restricted model access, configurable retention, role-based permissions, and exportable audit logs.",
      },
    ],
  },
};

export function isMarketSlug(value: string): value is MarketSlug {
  return MARKET_SLUGS.includes(value as MarketSlug);
}
