import { MarketPageData } from "./markets";

export const TIER_1_MARKETS: Record<string, MarketPageData> = {
  "united-arab-emirates": {
    slug: "united-arab-emirates",
    assetId: "CP-01",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "United Arab Emirates",
    tier: 1,
    regionSlug: "middle-east",
    title: "UAE Oil & Gas Software Development | Sovereign Industrial AI & Field Systems",
    metaDescription: "Sovereign AI architectures, project controls, and operational data platforms for UAE energy operators, joint ventures, and engineering contractors.",
    tagline: "Air-gapped industrial AI, capital project controls, and SCADA-to-enterprise integration engineered for UAE energy sovereignty standards.",
    marketOpening: "The United Arab Emirates represents one of the world's most technologically forward energy operating environments. Anchored by the Abu Dhabi National Oil Company (ADNOC) and its operating joint ventures (ADNOC Onshore, Offshore, Gas, and Drilling), the UAE upstream and downstream sectors are aggressively pursuing maximum recovery, carbon intensity reduction, and artificial intelligence integration. However, operating within the Emirates requires rigorous adherence to federal cybersecurity and data classification frameworks, including the UAE Information Assurance (IA) Standards and Dubai Electronic Security Center (DESC) mandates, ensuring that operational logs and subsurface assets never leave sovereign UAE infrastructure.",
    buyerProblems: [
      {
        role: "Chief Technology & Digital Officer",
        problem: "Enterprise AI tools and LLMs hosted on public hyperscale clouds violate UAE data sovereignty and industrial espionage restrictions.",
        impact: "AI initiatives stall at the pilot stage or expose sensitive reservoir and production telemetry to unapproved extraterritorial jurisdictions."
      },
      {
        role: "Upstream Operations Director",
        problem: "Real-time production, well testing, and artificial lift telemetry are trapped in fragmented historian silos across desert and offshore concessions.",
        impact: "Engineering teams face hours of latency consolidating daily field production, delaying optimization decisions and management reporting."
      },
      {
        role: "Capital Project Controls Lead",
        problem: "Multi-billion-dollar field expansion packages involve hundreds of sub-contractors submitting progress across disconnected spreadsheets.",
        impact: "Cost and schedule variances remain invisible until contractor claim submissions, leading to unbudgeted dispute settlements."
      },
      {
        role: "Procurement & ICV Compliance Manager",
        problem: "Difficulty auditing local engineering value and technology transfer across multi-tier software and service vendors.",
        impact: "Penalties during annual In-Country Value (ICV) certification and reduced competitive standing in ADNOC tenders."
      }
    ],
    priorityWorkflows: [
      {
        title: "Sovereign Industrial AI & Private Knowledge RAG",
        description: "Deploying self-contained large language models within private on-premise clusters or UAE-sovereign VPCs for drilling daily reports and operational manuals.",
        solutionSlug: "sovereign-industrial-ai-gcc-energy"
      },
      {
        title: "Capital Project Controls & Contractor Portals",
        description: "Standardizing earned value management, WBS baselining with Primavera P6, and automated subcontractor change order workflows.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "One-Way Industrial SCADA Integration",
        description: "Streaming high-frequency historian data into enterprise dashboards through unidirectional diode architectures compliant with IEC 62443.",
        solutionSlug: "industrial-iot-and-scada-integration"
      }
    ],
    operatingEnvironment: {
      assetContext: "Supergiant onshore fields (Bab, Bu Hasa, Asab) alongside extensive offshore carbonate platforms, artificial islands (Upper Zakum), and Ruwais downstream complexes.",
      connectivity: "Extensive industrial fiber backbones across central plants; private LTE networks and resilient VSAT connections across remote offshore artificial islands.",
      dataGovernance: "Strict compliance with UAE National Cybersecurity Council (NCSC) regulations, DESC requirements, and ADNOC Group Cybersecurity Policies.",
      partnerEcosystem: "ADNOC Group operating companies in partnership with international concession holders (bp, TotalEnergies, Eni, CNPC, INPEX) and major EPCs (Technip, Petrofac, NMDC Energy)."
    },
    deploymentAndSovereignty: {
      legalMandate: "UAE Federal Decree-Law No. 45 of 2021 (personal data) and national cyber security standards can restrict where critical infrastructure data is held. Confirm the position for your systems with counsel.",
      buyerPreference: "Air-gapped on-premise data centers or sovereign private cloud environments hosted within UAE-based hyperscalers (e.g., G42 Cloud, Microsoft UAE Central, AWS UAE Region).",
      recommendedArchitecture: "Hybrid sovereign deployment: compute and proprietary embeddings execute inside the operator's dedicated VPC with zero external API calls."
    },
    localContentProcurement: {
      statutoryFramework: "UAE In-Country Value (ICV) Program administered by the Ministry of Industry and Advanced Technology (MoIAT) and required across all ADNOC group tenders.",
      technologyTransfer: "Commitments to train UAE national engineers, establish local software maintenance competencies, and partner with certified local service consortiums.",
      citation: "Ministry of Industry and Advanced Technology (MoIAT) In-Country Value (ICV) Certification Guidelines (2024)."
    },
    solutions: [
      {
        title: "Sovereign Industrial AI for GCC Energy",
        slug: "sovereign-industrial-ai-gcc-energy",
        annotation: "On-premise LLMs and RAG architectures tailored for ADNOC-standard data classification."
      },
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Integrated SAP and Primavera P6 project control systems for UAE mega-projects."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Multi-party contractor reporting for offshore and onshore EPC work packages."
      }
    ],
    deliveryApproach: {
      discovery: "Scoped architectural review examining architectural review examining current historian access, IT/OT network firewalls, and data classification matrices.",
      pilot: "Targeted pilot deployment scoped to proof of concept in a single operating asset (e.g., one onshore gathering center or offshore platform). with milestone-gated acceptance criteria.",
      integration: "Bidirectional ERP connectors and unidirectional historian ingestion deployed with automated schema validation.",
      rollout: "Staged deployment across remaining operating assets accompanied by operator cyber security sign-off.",
      ownership: "Complete source code ownership or enterprise self-hosting licenses with zero per-seat vendor lock-in."
    },
    proofContext: {
      relevantExperience: "Deview's core engineering team brings experience from enterprise oil and gas software deliveries (2010–2020), including automated production reporting, capital project controls, and the EnerQuest upstream production management pilot in Nigeria.",
      boundaries: "Deview acts as a specialized software and architecture engineering partner. We do not claim local corporate incorporation in Abu Dhabi, nor do we claim current formal vendor prequalification on the ADNOC commercial register without local consortium sponsorship."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain millisecond-accurate historian synchronization without impacting field PLC cycle times?",
      itSecurity: "Does the software stack run completely within our private subnet with no outbound telemetry or external licensing call-homes?",
      procurement: "Are delivery milestones structured to facilitate verifiable ICV spend tracking and local technology transfer?",
      executiveSponsor: "Does the executive dashboard provide real-time variance detection across both daily hydrocarbon volumes and capital budgets?"
    },
    sources: [
        {
          title: "National In-Country Value (ICV) Program Overview and Certification Guidelines",
          publisher: "Ministry of Industry and Advanced Technology (MoIAT), UAE",
          date: "2024",
          url: "https://www.moiat.gov.ae/"
        },
        {
          title: "Federal Decree-Law No. 45 of 2021 on Personal Data Protection (Articles 22 & 23)",
          publisher: "UAE Government Legislation Portal",
          date: "2021",
          url: "https://www.uaelegislation.gov.ae/en/legislations/1972/download"
        },
        {
          title: "ADNOC In-Country Value (ICV) Certification Portal",
          publisher: "Abu Dhabi National Oil Company (ADNOC)",
          date: "2024",
          url: "https://www.adnoc.ae/en/in-country-value"
        }
      ],
    faqs: [
      {
        q: "Can Deview's AI platform run on-premise without connecting to external OpenAI or cloud endpoints?",
        a: "Yes. Our sovereign AI architectures utilize open-weights enterprise foundation models (such as Llama 3 or Mistral) quantized and hosted on local GPU clusters inside your UAE data center, aligning with national data sovereignty mandates and customer key custody."
      },
      {
        q: "How does the system interface with ADNOC's existing Primavera P6 schedules?",
        a: "We deploy native API integrations with Primavera P6 EPPM that synchronize activity codes, resource assignments, and progress percentages directly into your project controls environment without requiring manual XER export/import."
      },
      {
        q: "Does Deview provide local support in Abu Dhabi or Dubai?",
        a: "We deliver technical architecture and software engineering remotely and on-site for critical milestones, collaborating seamlessly with the client's internal engineering team or their designated local systems integrator."
      }
    ],
    ctas: {
      primary: {
        label: "Book a Sovereign Architecture Workshop",
        href: "/en/contact"
      },
      secondary: {
        label: "Download IT/OT Integration Checklist",
        href: "/en/resources/oil-gas-it-ot-architecture-checklist"
      }
    }
  },

  "saudi-arabia": {
    slug: "saudi-arabia",
    assetId: "CP-02",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Saudi Arabia",
    tier: 1,
    regionSlug: "middle-east",
    title: "Saudi Arabia Oil & Gas Software Engineering | Private AI & Enterprise Platforms",
    metaDescription: "Enterprise software, private industrial AI, and project controls for Saudi energy operators and major industrial joint ventures.",
    tagline: "Private industrial AI, capital project controls, and operational data platforms aligned with Saudi NDMO and IKTVA requirements.",
    marketOpening: "The Kingdom of Saudi Arabia operates the world's most formidable integrated petroleum infrastructure, led by Saudi Aramco and its vast network of industrial joint ventures (SABIC, Petro Rabigh, SATORP, YASREF). As part of Vision 2030, the Kingdom is investing unprecedented capital into digital transformation, Fourth Industrial Revolution (4IR) centers, and national AI sovereignty. Deploying enterprise systems in the Kingdom requires strict compliance with the Saudi Data & AI Authority (SDAIA) National Data Management Office (NDMO) standards and the Personal Data Protection Law (PDPL), alongside measurable commitments to the In-Kingdom Total Value Add (IKTVA) localization framework.",
    buyerProblems: [
      {
        role: "VP of Digital & Information Technology",
        problem: "Data classification rules can restrict sending upstream reservoir, production, or pipeline data to cloud infrastructure outside Saudi borders.",
        impact: "Engineering teams cannot leverage modern AI productivity or centralized analytics tools without risking major regulatory non-compliance."
      },
      {
        role: "General Manager of Capital Project Management",
        problem: "Massive scale of expansion projects (e.g., Jafurah unconventional gas, Marjan, Berri) creates fragmented contractor oversight across EPC packages.",
        impact: "Delayed visibility into schedule slippage and material delivery bottlenecks across hundreds of subcontractors."
      },
      {
        role: "Asset Integrity & Maintenance Superintendent",
        problem: "Aging gathering and pipeline infrastructure under harsh desert environments requires predictive corrosion and vibration monitoring across thousands of kilometers.",
        impact: "Unplanned downtime events and high costs associated with emergency pipeline repairs."
      },
      {
        role: "Supply Chain & IKTVA Director",
        problem: "Auditing multi-tier software suppliers for Saudi national employment, local code ownership, and domestic server hosting.",
        impact: "Lower supplier evaluation scores on Aramco tenders and exposure to statutory localization penalties."
      }
    ],
    priorityWorkflows: [
      {
        title: "Private Industrial AI & Generative Engineering Assistant",
        description: "Deploying air-gapped domain-specific LLMs for technical standard lookup, Aramco engineering standards (SAES) compliance, and daily drilling logs.",
        solutionSlug: "sovereign-industrial-ai-gcc-energy"
      },
      {
        title: "Capital Mega-Project Controls & Contractor Portals",
        description: "Unifying SAP work breakdown structures with subcontractor daily field progress, certified invoice generation, and change order tracking.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Unidirectional Historian & SCADA Analytics",
        description: "Ingesting telemetry from Yokogawa, Honeywell, and Emerson control systems across fields like Ghawar and Shaybah into analytical data warehouses.",
        solutionSlug: "industrial-iot-and-scada-integration"
      }
    ],
    operatingEnvironment: {
      assetContext: "Giant onshore fields (Ghawar, Khurais), complex offshore fields (Safaniya, Zuluf), unconventional gas basins (Jafurah), and refining hubs (Jubail, Yanbu).",
      connectivity: "Extensive Aramco private fiber network, corporate VSAT satellites, and private 5G industrial campus networks at major gas plants.",
      dataGovernance: "Compliance with SDAIA NDMO Data Management and Personal Data Protection Law (PDPL), and Saudi National Cybersecurity Authority (NCA) ECC-1:2018.",
      partnerEcosystem: "Saudi Aramco, SABIC, joint-venture refineries, and global EPC contractors (Samsung Engineering, Saipem, Larsen & Toubro, Nesma)."
    },
    deploymentAndSovereignty: {
      legalMandate: "SDAIA/NDMO data management standards, the PDPL and NCA controls can restrict transfers of sensitive and critical-sector data outside the Kingdom. Confirm the classification of your data with counsel.",
      buyerPreference: "Aramco-approved on-premise data centers or locally certified cloud providers (e.g., Oracle Cloud Riyadh, Google Cloud Dammam, Alibaba Cloud Riyadh).",
      recommendedArchitecture: "Air-gapped on-premise installation or private tenant within locally hosted sovereign cloud with customer-managed cryptographic keys."
    },
    localContentProcurement: {
      statutoryFramework: "In-Kingdom Total Value Add (IKTVA) program administered by Saudi Aramco to foster domestic supply chain resilience and technical skills.",
      technologyTransfer: "Structured programs to train Saudi software engineers, supply documentation in Arabic and English, and license source code to local entities.",
      citation: "Saudi Aramco In-Kingdom Total Value Add (IKTVA) Supplier Manual (2024)."
    },
    solutions: [
      {
        title: "Sovereign Industrial AI for GCC Energy",
        slug: "sovereign-industrial-ai-gcc-energy",
        annotation: "Air-gapped LLM and RAG deployment adhering to SDAIA and NDMO governance."
      },
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Unified mega-project controls integrating SAP S/4HANA and Primavera P6."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Standardized contractor submittals and progress tracking for EPC packages."
      }
    ],
    deliveryApproach: {
      discovery: "Technical assessment of current SAP cost structures, Primavera P6 baselines, and NCA cyber security compliance requirements.",
      pilot: "Deployment of an isolated proof of concept within a designated gas plant or drilling division cluster.",
      integration: "Configuring one-way industrial data diodes and enterprise SAP S/4HANA connectors with field-level role-based access control.",
      rollout: "Phased rollout across operating divisions with comprehensive security penetration audits by approved NCA third-party assessors.",
      ownership: "Perpetual enterprise licensing with full code escrow or direct source transfer for internal maintenance."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have designed enterprise planning, budgeting, and project control platforms for large-scale energy operators between 2010 and 2020, as well as a single production operating view in the EnerQuest upstream production management pilot.",
      boundaries: "Deview is an engineering services provider. We do not represent ourselves as an Aramco-prequalified entity independently, but partner with qualified in-kingdom prime contractors."
    },
    buyingTeamChecklist: {
      operations: "Can the system ingest thousands of wellhead tags per minute without causing network contention across remote plant WANs?",
      itSecurity: "Does the architecture satisfy National Cybersecurity Authority Essential Cybersecurity Controls (NCA ECC)?",
      procurement: "How does the engagement model support our internal IKTVA scoring targets?",
      executiveSponsor: "Will this system provide executive visibility across all active capital packages in the Kingdom?"
    },
    sources: [
        {
          title: "Essential Cybersecurity Controls (ECC-1:2018)",
          publisher: "National Cybersecurity Authority (NCA), Kingdom of Saudi Arabia",
          date: "2018",
          url: "https://nca.gov.sa/en/regulatory-documents/ecc"
        },
        {
          title: "Personal Data Protection Law (PDPL) & Cross-Border Data Transfer Regulation",
          publisher: "Saudi Data & AI Authority (SDAIA)",
          date: "2024",
          url: "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2"
        },
        {
          title: "In-Kingdom Total Value Add (IKTVA) Supplier Framework",
          publisher: "Saudi Aramco",
          date: "2024",
          url: "https://www.aramco.com/en/creating-value/products-and-services/in-kingdom-total-value-add"
        }
      ],
    faqs: [
      {
        q: "How does Deview ensure compliance with Saudi PDPL data protection laws?",
        a: "Our data layer enforces strict data residency by retaining all operational and personal data within in-Kingdom storage. Role-based access controls, automated data masking, and comprehensive immutable audit logs prevent unauthorized data exposure."
      },
      {
        q: "Can the platform be deployed inside an air-gapped Aramco facility?",
        a: "Yes. Our systems are containerized using Docker and Kubernetes and can be packaged for offline installation via secure media into completely air-gapped data centers."
      },
      {
        q: "What Arabic language capabilities are included?",
        a: "All user interfaces support full Arabic localization with right-to-left layout rendering, and our document AI search models can index and retrieve technical documentation written in Arabic."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Private AI Discovery Session",
        href: "/en/contact"
      },
      secondary: {
        label: "View Project Controls Architecture Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  },

  "nigeria": {
    slug: "nigeria",
    assetId: "CP-03",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Nigeria",
    tier: 1,
    regionSlug: "west-central-africa",
    title: "Nigeria Upstream Oil & Gas Software | Production Management & Local Content",
    metaDescription: "Upstream production management, JV partner accounting, and local-content supplier portals for Nigerian E&P operators and joint ventures.",
    tagline: "Field production visibility, JV cash calls, loss deferment reconciliation, and NOGICD local content compliance.",
    marketOpening: "Nigeria's upstream oil and gas sector is undergoing profound structural transformation following the enactment of the Petroleum Industry Act (PIA) and ongoing divestments of onshore and shallow-water assets by international majors (Shell, ExxonMobil, Eni, TotalEnergies) to indigenous Nigerian independents (Seplat, Renaissance, Oando, Aradel). Indigenous operators now carry the responsibility of rejuvenating complex brownfields, managing multi-tier Joint Ventures with NNPC Upstream Investment Management Services (NUIMS), reconciling security-related pipeline loss deferments, and complying with stringent Nigerian Oil and Gas Industry Content Development (NOGICD) Act mandates.",
    buyerProblems: [
      {
        role: "Chief Operating Officer / Upstream Director",
        problem: "Inability to accurately reconcile daily wellhead production against terminal custody transfer receipts due to pipeline sabotage, bunkering, and water-cut fluctuations.",
        impact: "Severe fiscal disputes with joint-venture partners and inaccurate hydrocarbon accounting to regulatory bodies (NUPRC)."
      },
      {
        role: "JV Accounting & Finance Manager",
        problem: "Manual preparation of Joint Venture Cash Calls and Authorization for Expenditure (AFE) tracking across multiple banking currencies (USD and NGN).",
        impact: "Cash-call defaults, delayed partner approvals for capital drilling, and prolonged annual audit reconciliations."
      },
      {
        role: "Field Production Superintendent",
        problem: "Flow stations and wellheads in the Niger Delta suffer from intermittent cellular and radio telemetry links.",
        impact: "Production logs are recorded on paper or disconnected Excel sheets, delaying daily production reports by 12 to 24 hours."
      },
      {
        role: "Local Content & Procurement Manager",
        problem: "Tracking Nigerian Content Equipment Certificate (NCEC) compliance and local spend across hundreds of service contractors manually.",
        impact: "Fines and delays in securing Nigerian Content Development and Monitoring Board (NCDMB) project approvals."
      }
    ],
    priorityWorkflows: [
      {
        title: "Upstream Production Accounting & Loss Deferment Reconciliation",
        description: "Reconciling daily flow station allocations, well test data, downtime events, and terminal export receipts with automated shrinkage calculations.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "JV Cash Call & AFE Workflow Management",
        description: "Multi-currency AFE tracking, partner approval routing, NUIMS budget alignment, and real-time variance monitoring.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Offline-First Remote Field Operations",
        description: "Edge applications for field operators in swamp and land concessions that capture daily logs locally and sync automatically upon network restoration.",
        solutionSlug: "offline-oilfield-operations-software"
      }
    ],
    operatingEnvironment: {
      assetContext: "Onshore swamp and shallow-water concessions (OMLs) across the Niger Delta, alongside deepwater FPSO hubs (Bonga, Egina, Akpo, Erha).",
      connectivity: "Challenging onshore telecom terrain; reliance on private VHF radio networks, VSAT satellite, and intermittent commercial cellular backhauls.",
      dataGovernance: "Petroleum Industry Act (PIA) 2021 regulatory standards enforced by NUPRC, and compliance with the Nigeria Data Protection Act (NDPA) 2023.",
      partnerEcosystem: "NNPC Limited, NUIMS, indigenous E&P operators, IOC joint ventures, and oilfield service companies."
    },
    deploymentAndSovereignty: {
      legalMandate: "The Nigeria Data Protection Act 2023 governs personal data, and NUPRC expects auditable hydrocarbon accounting records. Confirm hosting implications with local counsel.",
      buyerPreference: "In-country hosting at certified Tier-3 data centers in Lagos (e.g., MDXi, Rack Centre) or secure hybrid deployments with offshore edge caching.",
      recommendedArchitecture: "Dual-tier architecture: edge runtimes at remote flow stations communicating securely over TLS to an in-country enterprise database cluster in Lagos."
    },
    localContentProcurement: {
      statutoryFramework: "Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010, overseen by the NCDMB.",
      technologyTransfer: "Commitments to train Nigerian software engineers, execute engineering work within Nigeria, and partner with local technology firms.",
      citation: "Nigerian Content Development and Monitoring Board (NCDMB) Guidelines (2024)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Daily hydrocarbon accounting, loss deferment, and NUPRC regulatory compliance."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Multi-currency cash call and AFE tracking aligned with NUIMS procedures."
      },
      {
        title: "Offline Oilfield Operations Software",
        slug: "offline-oilfield-operations-software",
        annotation: "Resilient edge synchronization for swamp and remote flow station operations."
      }
    ],
    deliveryApproach: {
      discovery: "On-site assessment of flow station instrumentation, well testing frequency, and existing Excel-based production log sheets.",
      pilot: "Deployment of daily production accounting across one producing flow station and associated well strings with milestone-gated acceptance criteria.",
      integration: "Connecting tank gauging telemetry, fiscal metering skids, and corporate SAP/Sage accounting ledgers.",
      rollout: "Fleet-wide rollout across all operated OMLs with structured training for field operators and Lagos-based production engineers.",
      ownership: "Perpetual licensing with full source code access and local engineering handover."
    },
    proofContext: {
      relevantExperience: "Deview built the EnerQuest upstream production management pilot in Nigeria. It showed daily production, equipment status, downtime exceptions and management reporting in one operating view, on an illustrative model before any operational data was released.",
      boundaries: "Deview is an engineering partner. We do not claim local E&P operator status, nor do we act as an oilfield service contractor for downhole physical services."
    },
    buyingTeamChecklist: {
      operations: "Does the system allow field pumpers to enter well test results offline on ruggedized tablets?",
      itSecurity: "Is all operational data hosted within Nigerian data center facilities in compliance with the NDPA?",
      procurement: "Does the contract comply with NCDMB technology transfer guidelines?",
      executiveSponsor: "Does the platform eliminate month-end reconciliation surprises with NUIMS and joint-venture partners?"
    },
    sources: [
        {
          title: "Petroleum Industry Act (PIA) 2021 Regulatory Framework",
          publisher: "Nigeria Upstream Petroleum Regulatory Commission (NUPRC)",
          date: "2021",
          url: "https://www.nuprc.gov.ng/"
        },
        {
          title: "Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010",
          publisher: "Nigerian Content Development and Monitoring Board (NCDMB)",
          date: "2010",
          url: "https://ncdmb.gov.ng/"
        },
        {
          title: "Nigeria Data Protection Act (NDPA) 2023 Gazette",
          publisher: "Nigeria Data Protection Commission (NDPC)",
          date: "2023",
          url: "https://ndpc.gov.ng/"
        }
      ],
    faqs: [
      {
        q: "How does the software handle oil theft and pipeline transit loss calculations?",
        a: "Our production accounting engine implements multi-point reconciliation: comparing gross wellhead allocation against flow station output, trunkline injection, and terminal receipt, isolating transit losses and applying standardized shrinkage algorithms."
      },
      {
        q: "Can the system support both USD and Naira cash calls?",
        a: "Yes. Our JV accounting module maintains dual-currency ledgers with automated daily Central Bank of Nigeria (CBN) or NAFEM exchange rate calculations, tracking partner cash calls and payments in their exact billed currencies."
      },
      {
        q: "What proof does Deview have in the Nigerian oil and gas sector?",
        a: "We built the EnerQuest upstream production management pilot in Nigeria: one field-to-management operating picture for production, equipment status and exceptions, shown on an illustrative model before any operational data was released."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Production Workflow Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "oman": {
    slug: "oman",
    assetId: "CP-04",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Oman",
    tier: 1,
    regionSlug: "middle-east",
    title: "Oman Oil & Gas Software Systems | EOR Operations & Joint Venture Management",
    metaDescription: "Software systems for enhanced oil recovery (EOR) surveillance, JV concession accounting, and contractor management for Omani energy operators.",
    tagline: "EOR steam and polymer surveillance, joint venture concession accounting, and in-country value compliance for the Sultanate of Oman.",
    marketOpening: "The Sultanate of Oman's upstream sector, led by Petroleum Development Oman (PDO), Daleel Petroleum, and Occidental Oman, operates in some of the most geologically challenging recovery environments in the world. With vast reservoirs dependent on thermal (steam injection), chemical (polymer flooding), and miscible gas Enhanced Oil Recovery (EOR), Omani operators require specialized software that tightly integrates well surveillance, thermal monitoring, and artificial lift telemetry. Furthermore, operating under the Ministry of Energy and Minerals requires rigorous Joint Venture concession accounting and compliance with the Sultanate's In-Country Value (ICV) initiatives.",
    buyerProblems: [
      {
        role: "EOR Surveillance & Reservoir Engineer",
        problem: "Complex thermal and chemical EOR fields (e.g., Amal, Marmul, Qarn Alam) generate vast streams of steam injection, pressure, and temperature data trapped in vendor silos.",
        impact: "Delayed detection of steam breakthrough or polymer degradation, resulting in wasted energy and sub-optimal reservoir recovery."
      },
      {
        role: "Finance & Concession Accounting Manager",
        problem: "Managing partner cash calls, government royalties, and cost recovery across multi-partner concessions (Block 6, Block 9, Block 61).",
        impact: "Discrepancies during annual audits by the Ministry of Energy and Minerals and delayed partner approvals."
      },
      {
        role: "Contract & ICV Manager",
        problem: "Verifying local workforce development, Omani sub-contracting spend, and localized training hours across large field service contracts.",
        impact: "Failure to meet statutory Omanization and ICV targets, risking tender penalties."
      }
    ],
    priorityWorkflows: [
      {
        title: "EOR Field Surveillance & Well Optimization",
        description: "Real-time monitoring of steam-to-oil ratios (SOR), injection pressures, and ESP artificial lift parameters across mature fields.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Joint Venture Concession Accounting & AFE Management",
        description: "Tracking government share, royalty deductions, partner equity splits, and capital expenditure approvals across Omani blocks.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Contractor Compliance & In-Country Value Tracking",
        description: "Automated verification of contractor workforce Omanization metrics and local equipment sourcing.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Mature carbonate and sandstone reservoirs requiring steam, polymer, and waterflood EOR; tight gas fields (Khazzan/Ghazeer); and Duqm refining infrastructure.",
      connectivity: "Robust telecommunication networks across major PDO hubs; dedicated microwave and satellite links for remote desert clusters.",
      dataGovernance: "Compliance with Oman Data Protection Law (Royal Decree 6/2022) and Ministry of Transport, Communications and Information Technology (MTCIT) cyber policies.",
      partnerEcosystem: "PDO (Government of Oman, Shell, TotalEnergies, PTTEP), OQ Upstream, bp Oman, Daleel, and international service providers."
    },
    deploymentAndSovereignty: {
      legalMandate: "Oman's Personal Data Protection Law (Royal Decree 6/2022) governs personal data processing. Confirm how it applies to your operational and commercial data with counsel.",
      buyerPreference: "On-premise deployment in operator data centers in Muscat/Mina Al Fahal or local sovereign cloud providers (e.g., Oman Data Park).",
      recommendedArchitecture: "Private single-tenant hosting inside Oman Data Park Tier-3 infrastructure with encrypted backup replications."
    },
    localContentProcurement: {
      statutoryFramework: "In-Country Value (ICV) strategy formulated by the Ministry of Energy and Minerals and enforced across PDO and OQ tenders.",
      technologyTransfer: "Omanization workforce training quotas and knowledge transfer programs for Omani software and petroleum data engineers.",
      citation: "Ministry of Energy and Minerals Sultanate of Oman ICV Strategy (2024)."
    },
    solutions: [
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Concession accounting and cash-call governance adapted for Omani block agreements."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "EOR surveillance and well-test allocation for mature Omani reservoirs."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "In-Country Value tracking and sub-contractor billing verification."
      }
    ],
    deliveryApproach: {
      discovery: "Review of existing EOR telemetry architectures, concession accounting rules, and ICV compliance parameters.",
      pilot: "Deployment of an integrated surveillance module for a selected EOR field cluster (e.g., 50 steam/producer well pairs).",
      integration: "Interfacing with PI Historian, SAP ERP, and Ministry reporting portals.",
      rollout: "Phased deployment across remaining block assets with comprehensive end-user training in Muscat and field camps.",
      ownership: "Perpetual license with full deployment autonomy and local support handover."
    },
    proofContext: {
      relevantExperience: "Deview's team has delivered enterprise oil and gas software solutions including production management, AFE tracking, and capital project controls across international markets, reinforced by our EnerQuest upstream production management pilot.",
      boundaries: "Deview provides software development and architecture consulting. We do not claim local physical incorporation in Muscat or independent PDO prequalification status."
    },
    buyingTeamChecklist: {
      operations: "Can the system visualize steam-to-oil ratios and pressure distribution across 3D well patterns?",
      itSecurity: "Does the hosting design satisfy Oman Data Park and MTCIT cybersecurity standards?",
      procurement: "Are training programs structured to satisfy Ministry ICV knowledge transfer metrics?",
      executiveSponsor: "Does the system streamline joint-venture audit preparation with the Ministry of Energy and Minerals?"
    },
    sources: [
        {
          title: "In-Country Value (ICV) Strategy in the Energy Sector",
          publisher: "Ministry of Energy and Minerals (MEM), Sultanate of Oman",
          date: "2023",
          url: "https://www.mem.gov.om/en-us/Energy/Oil-Gas/In-Country-Value"
        },
        {
          title: "Petroleum Development Oman (PDO) ICV Contracting Blueprint",
          publisher: "Petroleum Development Oman",
          date: "2024",
          url: "https://www.pdo.co.om/"
        },
        {
          title: "Personal Data Protection Law (Royal Decree No. 6/2022)",
          publisher: "Ministry of Transport, Communications and Information Technology, Oman",
          date: "2022",
          url: "https://www.mtcit.gov.om/"
        }
      ],
    faqs: [
      {
        q: "Can Deview's platform model steam injection and polymer breakthrough for EOR wells?",
        a: "Yes. Our production surveillance engine ingests continuous steam quality, temperature, and pressure tags, correlating injection profiles with offset producer performance to highlight breakthrough risks."
      },
      {
        q: "Is hosting in Oman Data Park supported?",
        a: "Yes. Our systems are fully compatible with Oman Data Park infrastructure, deploying inside customer VPCs with domestic IP routing and zero external data transit."
      },
      {
        q: "How does the system calculate Omanization compliance for contractors?",
        a: "Our contractor management portal requires service providers to log certified staff rosters with national ID verification, automatically computing Omanization percentages against contractual thresholds."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a JV & Operations Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "qatar": {
    slug: "qatar",
    assetId: "CP-05",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Qatar",
    tier: 1,
    regionSlug: "middle-east",
    title: "Qatar Oil & Gas Software Engineering | LNG Operations & Mega-Project Controls",
    metaDescription: "Capital project controls, contractor portals, and cryogenic operations data platforms for Qatar's LNG expansion programs.",
    tagline: "World-scale LNG project controls, cryogenic asset data management, and secure multi-contractor collaboration for QatarEnergy.",
    marketOpening: "The State of Qatar is executing the world's largest liquefied natural gas expansion through the North Field East (NFE) and North Field South (NFS) megaprojects, driving national LNG production capacity toward 142 million tonnes per annum. Managed by QatarEnergy and operated via Qatargas/QatarEnergy LNG, these multi-billion-dollar investments require unparalleled standards of contractor coordination, cryogenic process safety, and capital expenditure tracking. Deploying industrial software in Qatar requires adherence to the National Cyber Security Agency (NCSA) frameworks and the Tawteen national supplier localization program.",
    buyerProblems: [
      {
        role: "Mega-Project EPC Director",
        problem: "Simultaneous execution of multiple LNG mega-trains creates extreme coordination challenges across international EPC consortia (Chiyoda, Technip, Saipem).",
        impact: "Information silos between engineering, procurement, and site construction packages leading to costly interface rework."
      },
      {
        role: "Cryogenic Operations & Maintenance Manager",
        problem: "Massive scale of LNG liquefaction trains, boil-off gas systems, and offshore gas processing platforms requires strict asset integrity traceability.",
        impact: "Difficulty correlating maintenance work orders with historical equipment vibration and temperature trends."
      },
      {
        role: "Tawteen Localization & Procurement Lead",
        problem: "Auditing multi-tier subcontractors for in-country engineering execution and compliance with QatarEnergy's Tawteen scorecard.",
        impact: "Inaccurate reporting of domestic value creation and missed supplier development opportunities."
      }
    ],
    priorityWorkflows: [
      {
        title: "LNG Mega-Project Controls & Contractor Portals",
        description: "Enterprise work breakdown structures, Primavera P6 baseline integration, and standardized digital progress submittals for EPC packages.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Cryogenic Asset Integrity & Turnaround Management",
        description: "Tracking inspection logs, ultrasonic thickness testing, and valve maintenance for critical LNG liquefaction trains.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Multi-Party Contractor & Supplier Governance",
        description: "Permission-scoped portals for hundreds of engineering vendors to submit progress billings and safety audits.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Giant offshore North Field non-associated gas reservoir, onshore mega-liquefaction trains at Ras Laffan Industrial City, and helium recovery facilities.",
      connectivity: "Redundant high-speed industrial fiber across Ras Laffan and Mesaieed; dedicated offshore microwave links to North Field gas production complexes.",
      dataGovernance: "Strict compliance with Qatar National Cyber Security Agency (NCSA) National Information Assurance (NIA) policy and Law No. 13 of 2016 on personal data privacy.",
      partnerEcosystem: "QatarEnergy, QatarEnergy LNG, international equity partners (ExxonMobil, TotalEnergies, Shell, Eni, ConocoPhillips), and global Tier-1 EPC contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Qatar's National Information Assurance standards set controls for critical infrastructure systems that often lead operators to national or on-premise hosting. Confirm requirements with counsel.",
      buyerPreference: "Air-gapped on-premise installations at operator headquarters in Doha or Ras Laffan, or locally hosted Microsoft Cloud Qatar regions.",
      recommendedArchitecture: "Private enterprise cloud deployment inside Qatar-accredited cloud regions with customer-held encryption keys and hardware security modules (HSM)."
    },
    localContentProcurement: {
      statutoryFramework: "Tawteen initiative led by QatarEnergy to localize the energy sector supply chain and develop local SMEs.",
      technologyTransfer: "Collaborative engagement with Qatari universities, local engineer training, and partnership with accredited Tawteen suppliers.",
      citation: "QatarEnergy Tawteen In-Country Value Program Framework (2024)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for North Field mega-train expansion packages and EPC contractor tracking."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Standardized contractor onboarding, progress reporting, and Tawteen audit alignment."
      },
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Cryogenic train inspection, valve maintenance, and turnaround management."
      }
    ],
    deliveryApproach: {
      discovery: "Scoped architectural review examining assessment of EPC contractor reporting templates, SAP WBS models, and NCSA compliance requirements.",
      pilot: "Deployment of contractor progress reporting on a single EPC construction package at Ras Laffan.",
      integration: "Establishing bidirectional connectors with Primavera P6 and SAP S/4HANA finance modules.",
      rollout: "Full expansion across all active North Field East/South packages and operating LNG trains.",
      ownership: "Perpetual enterprise license with full intellectual property autonomy for internal operations."
    },
    proofContext: {
      relevantExperience: "Deview's senior engineers possess a track record in capital project controls, enterprise integration, and operational reporting dating from 2010 to 2020, reinforced by digital oilfield pilot implementations.",
      boundaries: "Deview acts as a technical software engineering firm. We do not hold a direct commercial agency or standalone Tawteen prequalification certificate in Doha without local partnership."
    },
    buyingTeamChecklist: {
      operations: "Can the platform handle the concurrency of thousands of daily contractor work-pack submissions without latency?",
      itSecurity: "Is the architecture certified against Qatar National Information Assurance (NIA) standards?",
      procurement: "How does the engagement support Tawteen local supplier development scorecards?",
      executiveSponsor: "Does the executive dashboard provide consolidated North Field expansion cost and schedule variances?"
    },
    sources: [
        {
          title: "National Information Assurance (NIA) Policy Guidelines",
          publisher: "National Cyber Security Agency (NCSA), State of Qatar",
          date: "2023",
          url: "https://www.ncsa.gov.qa/en/cyber-security-framework"
        },
        {
          title: "Tawteen In-Country Value (ICV) Supplier Localization Program",
          publisher: "QatarEnergy Tawteen Secretariat",
          date: "2024",
          url: "https://www.tawteen.com.qa/"
        },
        {
          title: "North Field Expansion Mega-Project Overview",
          publisher: "QatarEnergy",
          date: "2024",
          url: "https://www.qatarenergy.qa/"
        }
      ],
    faqs: [
      {
        q: "Can Deview's project controls integrate with multiple international EPC contractors simultaneously?",
        a: "Yes. Our multi-tenant contractor portals provide strict permission boundaries, allowing contractors like Chiyoda, Technip, and Saipem to submit progress data independently into a consolidated QatarEnergy oversight database."
      },
      {
        q: "Does the system support cryogenic equipment turnaround planning?",
        a: "Yes. Our asset integrity module includes dedicated turnaround management workflows, tracking critical path blind-lists, vessel entry permits, and ultrasonic inspection records."
      },
      {
        q: "What deployment options exist for Microsoft Cloud Qatar?",
        a: "We deploy single-tenant containerized architectures inside Microsoft Cloud Qatar VPCs, encrypting all data at rest and in transit using customer-managed keys."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an LNG Controls Workshop",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  },

  "egypt": {
    slug: "egypt",
    assetId: "CP-06",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Egypt",
    tier: 1,
    regionSlug: "north-africa",
    title: "Egypt Upstream Oil & Gas Software | Upstream Data Platforms & Production",
    metaDescription: "Enterprise upstream platforms, national data repositories, and brownfield production management for Egyptian petroleum sector entities.",
    tagline: "Connecting national upstream data, Mediterranean offshore gas, and Western Desert brownfield production optimization.",
    marketOpening: "The Arab Republic of Egypt is solidifying its position as the Eastern Mediterranean energy and LNG trading hub. The Ministry of Petroleum and Mineral Resources, through its holding companies (EGPC, EGAS, GANOPE) and joint-venture operating companies (Petrobel, Bapetco, Gupco, Khalda), oversees a diverse asset portfolio: deepwater Mediterranean gas fields (such as Zohr), mature Gulf of Suez offshore platforms, and Western Desert brownfields. The national Modernization Project mandates digital transformation across exploration and production, creating demand for unified data platforms that support bilingual Arabic-English operational workflows and integrate with national initiatives like the Egypt Upstream Gateway (EUG).",
    buyerProblems: [
      {
        role: "Undersecretary for Digital Transformation / CIO",
        problem: "Hydrocarbon production and well data are scattered across dozens of operating joint ventures with inconsistent reporting formats.",
        impact: "Ministry leadership faces delays synthesizing daily national production figures and evaluating concession performance."
      },
      {
        role: "General Manager of Operations (Joint Venture)",
        problem: "Western Desert and Gulf of Suez mature fields have high water cuts and frequent electrical submersible pump (ESP) failures.",
        impact: "Production deferred due to slow detection of well downtime and manual well test allocation methods."
      },
      {
        role: "Exploration & Concession Data Manager",
        problem: "Multi-decade legacy archives of physical well logs, seismic tapes, and concession reports are difficult to search and share during licensing rounds.",
        impact: "Extended turnaround times for potential international farm-in partners evaluating bid rounds."
      }
    ],
    priorityWorkflows: [
      {
        title: "National Upstream Data Platform & Exploration Data Rooms",
        description: "Governed cataloguing of well, seismic, and core repositories with role-based access for ministerial audits and international farm-ins.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Mature Field Production Accounting & Well Testing",
        description: "Reconciling daily production across Western Desert and Gulf of Suez assets with automated water-cut and gas-lift allocation.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Asset Integrity & Pipeline Corrosion Surveillance",
        description: "Tracking wall thickness measurements, cathodic protection surveys, and pipeline inspection logs across aging gathering infrastructure.",
        solutionSlug: "mena-asset-integrity-hse-software"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater Mediterranean gas complexes (Zohr, West Nile Delta), mature offshore Gulf of Suez platforms, and Western Desert onshore concessions.",
      connectivity: "High-speed fiber connectivity at Alexandria, Port Said, and Cairo headquarters; satellite and radio links across remote Western Desert concessions.",
      dataGovernance: "Compliance with Egypt Data Protection Law No. 151 of 2020 and Supreme Council of Cybersecurity guidelines.",
      partnerEcosystem: "EGPC, EGAS, GANOPE, international majors (Eni, bp, Shell, Apache), and local operating joint ventures."
    },
    deploymentAndSovereignty: {
      legalMandate: "Egypt's Personal Data Protection Law (Law No. 151 of 2020) and sector rules can restrict cross-border transfers. Confirm the position for energy records with local counsel.",
      buyerPreference: "Domestic enterprise data centers in Cairo or Alexandria, or certified sovereign government cloud facilities.",
      recommendedArchitecture: "On-premise deployment within operator data centers with private MPLS connections to field operating offices."
    },
    localContentProcurement: {
      statutoryFramework: "Egyptian Public Procurement Law and Ministry of Petroleum contractor participation frameworks encouraging domestic engineering content.",
      technologyTransfer: "Training Egyptian petroleum engineers in advanced data engineering and delivering bilingual English/Arabic system documentation.",
      citation: "Ministry of Petroleum and Mineral Resources Modernization Project Directives (2024)."
    },
    solutions: [
      {
        title: "Africa Exploration Data Rooms",
        slug: "africa-exploration-data-rooms",
        annotation: "Subsurface and concession data governance aligned with Egyptian upstream licensing."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Daily hydrocarbon accounting and well testing for Western Desert brownfields."
      },
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Pipeline inspection and integrity management for Gulf of Suez infrastructure."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of existing joint venture reporting formats, historian architectures, and subsurface data repositories.",
      pilot: "Deployment of production reporting across one Western Desert or Gulf of Suez operating joint venture with milestone-gated acceptance criteria.",
      integration: "Connecting SCADA historians, lab fluid analysis systems, and ministry reporting databases.",
      rollout: "Phased expansion across remaining joint ventures with comprehensive bilingual training.",
      ownership: "Perpetual enterprise licensing with local engineering empowerment."
    },
    proofContext: {
      relevantExperience: "Deview's team has delivered production reporting, AFE controls, and upstream data integration solutions spanning 2010–2020, reinforced by the EnerQuest upstream production management pilot.",
      boundaries: "Deview is an international software engineering firm. We do not claim local corporate incorporation in Cairo or prequalification on the EGPC vendor registry without local consortium representation."
    },
    buyingTeamChecklist: {
      operations: "Does the system support bilingual Arabic and English data entry for field operators?",
      itSecurity: "Is the data platform hosted within Egypt in full compliance with Law 151/2020?",
      procurement: "Does the project include hands-on technology transfer for Egyptian engineers?",
      executiveSponsor: "Can the Ministry view consolidated daily production totals across all operating joint ventures?"
    },
    sources: [
        {
          title: "Petroleum Sector Modernization Project: Programme 7 Digital Transformation",
          publisher: "Ministry of Petroleum and Mineral Resources, Egypt",
          date: "2023",
          url: "https://www.petroleum.gov.eg/en/update-project/programs/Pages/program7.aspx"
        },
        {
          title: "Egypt Upstream Gateway (EUG) Digital Exploration Platform",
          publisher: "Egyptian General Petroleum Corporation (EGPC)",
          date: "2024",
          url: "https://www.petroleum.gov.eg/en/investment/investment-chances/Pages/EUG.aspx"
        },
        {
          title: "Law No. 151 of 2020 on the Protection of Personal Data",
          publisher: "Ministry of Communications and Information Technology (MCIT), Egypt",
          date: "2020",
          url: "https://www.mcit.gov.eg/en/Data_Protection"
        }
      ],
    faqs: [
      {
        q: "Does the platform support the Egypt Upstream Gateway (EUG) data format?",
        a: "Yes. Our exploration data room platform is designed according to OSDU data principles, facilitating metadata exchange and compatibility with EUG standards."
      },
      {
        q: "How does the system operate in remote Western Desert concessions with limited internet?",
        a: "We utilize an offline-capable edge architecture. Field technicians log well measurements and maintenance tasks locally; data synchronizes automatically whenever satellite or microwave connections are active."
      },
      {
        q: "Can reports be generated in both Arabic and English?",
        a: "Yes. Our reporting engine features automated bilingual report generation, producing official regulatory filings in Arabic and corporate joint-venture summaries in English."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Data Platform Assessment",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Exploration Readiness Checklist",
        href: "/en/resources/osdu-exploration-data-readiness-assessment"
      }
    }
  },

  "angola": {
    slug: "angola",
    assetId: "CP-07",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Angola",
    tier: 1,
    regionSlug: "southern-africa",
    title: "Angola Deepwater Oil & Gas Software | Offshore Production & JV Systems",
    metaDescription: "Enterprise software for deepwater FPSO production reporting, JV partner accounting, and ANPG concession compliance in Angola.",
    tagline: "Deepwater FPSO production allocation, concession accounting, and Portuguese-English workflows for the Angolan offshore sector.",
    marketOpening: "The Republic of Angola is Sub-Saharan Africa's premier deepwater offshore hydrocarbon producer. Overseen by the National Agency of Petroleum, Gas and Biofuels (ANPG) and state company Sonangol, offshore operations in Blocks 0, 14, 15, 17, and 31—operated by global majors (TotalEnergies, Chevron, ExxonMobil, Azule Energy)—produce via fleets of complex Floating Production Storage and Offloading (FPSO) units. The Angolan operating environment requires software that handles high-volume subsea well allocations, multi-partner cost recovery ledgers under production sharing agreements (PSAs), and strict adherence to presidential decrees on local content (Conteúdo Local).",
    buyerProblems: [
      {
        role: "Offshore Asset Manager / FPSO Superintendent",
        problem: "Subsea manifold allocations and crude custody transfers on FPSO vessels require complex multi-phase fiscal metering reconciliations.",
        impact: "Delays in offloading documentation and partner dispute risks regarding net equity barrel entitlements."
      },
      {
        role: "JV Finance & Concession Controller",
        problem: "Managing complex Production Sharing Agreement (PSA) cost recovery, profit oil splits, and cash calls under fluctuating FX conditions (AOA/USD).",
        impact: "Protracted audit reconciliations with ANPG and delayed capital expenditure approvals."
      },
      {
        role: "Local Content (Conteúdo Local) Director",
        problem: "Tracking compliance with Presidential Decree No. 271/20 on Angolan workforce integration and domestic vendor contracting.",
        impact: "Regulatory inquiries from ANPG and reduced competitiveness in upcoming offshore licensing rounds."
      }
    ],
    priorityWorkflows: [
      {
        title: "Offshore Deepwater Production & Hydrocarbon Allocation",
        description: "Reconciling subsea wellhead rates, test separators, fuel gas usage, flare volumes, and crude offloading to shuttle tankers.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "PSA Concession Accounting & JV Cash Calls",
        description: "Automated calculations of cost oil, profit oil, royalty barrels, and partner billing statements compliant with ANPG guidelines.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Portuguese-English Operational Portals",
        description: "Bilingual technical interfaces ensuring operational ease for local offshore technicians and international engineering teams.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater and ultra-deepwater offshore blocks (Congo and Kwanza Basins), FPSO production hubs, and Soyo LNG liquefaction plant.",
      connectivity: "Maritime VSAT and Low Earth Orbit (LEO) satellite links connecting offshore FPSO units to onshore corporate offices in Luanda.",
      dataGovernance: "ANPG statutory reporting mandates and compliance with Angolan Data Protection Law (Law No. 22/11).",
      partnerEcosystem: "ANPG, Sonangol E.P., Azule Energy (bp/Eni), TotalEnergies, Chevron (CABGOC), ExxonMobil, and international offshore contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "ANPG expects operators to maintain auditable records of hydrocarbon production and cost-recovery accounts. Confirm hosting and retention implications with local counsel.",
      buyerPreference: "Hybrid architecture: high-availability edge nodes deployed aboard FPSO vessels with central database replication in Luanda.",
      recommendedArchitecture: "Edge-to-hub deployment: containerized local database on board FPSO syncing via encrypted satellite link to Luanda private cloud."
    },
    localContentProcurement: {
      statutoryFramework: "Presidential Decree No. 271/20 establishing the Legal Regime for the Promotion of Local Content in the Oil and Gas Sector.",
      technologyTransfer: "Commitments to train Angolan national technicians and deliver full Portuguese language software manuals and training.",
      citation: "National Agency of Oil, Gas and Biofuels (ANPG) Local Content Regulations (2024)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "FPSO production reconciliation, flare accounting, and crude offloading records."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Production sharing contract accounting and ANPG audit trail generation."
      },
      {
        title: "Offline Oilfield Operations Software",
        slug: "offline-oilfield-operations-software",
        annotation: "Resilient offshore edge synchronization during satellite bandwidth constraints."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of FPSO metering topologies, subsea allocation models, and ANPG reporting obligations.",
      pilot: "Deployment of daily production accounting aboard one operating FPSO vessel with milestone-gated acceptance criteria.",
      integration: "Interfacing with vessel DCS historians, lab analysis databases, and corporate SAP systems in Luanda.",
      rollout: "Fleet-wide rollout across all operated offshore blocks with bilingual Portuguese/English support.",
      ownership: "Perpetual enterprise license with full operational independence."
    },
    proofContext: {
      relevantExperience: "Deview brings extensive historical enterprise software delivery experience (2010–2020) in production management, AFE tracking, and a digital oilfield operating view shown in our EnerQuest upstream production management pilot in Nigeria.",
      boundaries: "Deview is a software engineering company. We do not claim local corporate presence in Luanda or direct ANPG operator licensing."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production logging on board the FPSO during satellite outages?",
      itSecurity: "Is the data encrypted end-to-end between the vessel and the Luanda onshore center?",
      procurement: "Does the solution include Portuguese documentation to satisfy local content training requirements?",
      executiveSponsor: "Does the software provide real-time visibility into cost-oil recovery status?"
    },
    sources: [
        {
          title: "Presidential Decree No. 271/20 on the Legal Framework for Local Content in Petroleum Sector",
          publisher: "National Agency of Petroleum, Gas and Biofuels (ANPG), Angola",
          date: "2020",
          url: "https://anpg.co.ao/legislacao/"
        },
        {
          title: "ANPG Deepwater Block 17/06 Begónia First Oil Announcement",
          publisher: "National Agency of Petroleum, Gas and Biofuels (ANPG), Angola",
          date: "2024",
          url: "https://anpg.co.ao/noticias/anpg-totalenergies-e-parceiros-do-bloco-17-06-anunciam-primeiro-oleo-do-fpso-begonia/"
        },
        {
          title: "Law No. 22/11 on Personal Data Protection",
          publisher: "Agência de Protecção de Dados (APD), Republic of Angola",
          date: "2021",
          url: "https://apd.ao/legislacao/"
        }
      ],
    faqs: [
      {
        q: "Does the platform support Portuguese language user interfaces?",
        a: "Yes. All operational forms, tables, validation messages, and management reports are fully localized in Portuguese, with dynamic switching to English."
      },
      {
        q: "How does the system handle crude tanker offloading documentation?",
        a: "Our custody transfer module records bill of lading volumes, BSW laboratory assays, meter proving factors, and generates formal offloading certificates for partners and customs authorities."
      },
      {
        q: "Can the system calculate cost oil and profit oil automatically?",
        a: "Yes. Our PSA accounting engine models production sharing terms, amortization of capital expenditure, operating cost recovery caps, and government profit oil calculations."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Offshore Reporting Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "algeria": {
    slug: "algeria",
    assetId: "CP-08",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Algeria",
    tier: 1,
    regionSlug: "north-africa",
    title: "Algeria Oil & Gas Software Systems | Sonatrach Asset Integrity & Production",
    metaDescription: "Enterprise asset integrity, pipeline monitoring, and production reporting software for Algeria's petroleum sector and Sonatrach joint ventures.",
    tagline: "Sahara mature field optimization, trans-Mediterranean pipeline integrity, and bilingual French-Arabic-English operational systems.",
    marketOpening: "The People's Democratic Republic of Algeria, anchored by national hydrocarbons champion Sonatrach, is Africa's largest natural gas producer and a vital supplier to European markets through trans-Mediterranean pipeline networks (Medgaz, Transmed). Operating vast desert facilities such as Hassi Messaoud and Hassi R'Mel requires industrial software that can manage mature field integrity, high-pressure gas reinjection, extensive desert pipeline networks, and complex concession joint ventures (Sonatrach with Eni, TotalEnergies, Equinor, Cepsa). Systems must adhere to strict Algerian data sovereignty laws and support trilingual French, Arabic, and English workflows.",
    buyerProblems: [
      {
        role: "Director of Asset Integrity & Pipeline Transport",
        problem: "Managing corrosion, wall thinning, and cathodically protected sections across thousands of kilometers of desert pipeline infrastructure.",
        impact: "Risk of pipeline breaches, unplanned supply interruptions to export terminals, and regulatory penalties from the Hydrocarbon Regulatory Authority (ARH)."
      },
      {
        role: "Sahara Field Production Superintendent",
        problem: "Extreme desert temperatures and remote gathering centers create delays in collecting daily well test and gas reinjection records.",
        impact: "Sub-optimal gas lift allocation and delayed reporting to Sonatrach central division in Algiers."
      },
      {
        role: "Joint Venture Legal & Concession Manager",
        problem: "Hydrocarbon Law 19-13 compliance requires precise tracking of upstream royalties, taxes, and production sharing terms across multinational partners.",
        impact: "Audit delays and commercial disputes during annual joint venture reconciliations."
      }
    ],
    priorityWorkflows: [
      {
        title: "Mature Asset Integrity & Desert Pipeline Monitoring",
        description: "Intelligent pigging log analysis, ultrasonic thickness mapping, and risk-based inspection (RBI) for Sahara pipelines.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Upstream Production Accounting & Gas Reinjection Tracking",
        description: "Daily hydrocarbon balancing across desert flow lines, separation units, and high-pressure gas reinjection wells.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Trilingual Operator & Contractor Governance",
        description: "Standardized administrative workflows operating simultaneously in French, Arabic, and English.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      }
    ],
    operatingEnvironment: {
      assetContext: "Giant Sahara oil and gas fields (Hassi Messaoud, Hassi R'Mel, Berkine Basin), extensive domestic pipeline networks, and coastal LNG plants (Arzew, Skikda).",
      connectivity: "Internal Sonatrach fiber backbones at major industrial centers; satellite and private microwave links connecting isolated desert manifolds.",
      dataGovernance: "Alignment with Algerian Law No. 18-07 on personal data protection and sector rules for strategic energy records, confirmed with local counsel.",
      partnerEcosystem: "Sonatrach, ALNAFT (National Agency for Hydrocarbon Resources), ARH, and international operating partners (Eni, TotalEnergies, Repsol, Equinor)."
    },
    deploymentAndSovereignty: {
      legalMandate: "Algerian data protection law (Law No. 18-07) and hydrocarbon sector rules can restrict where strategic resource data is held. Confirm the position for your systems with local counsel.",
      buyerPreference: "Air-gapped on-premise installation within Sonatrach corporate data centers in Algiers, Hassi Messaoud, or Oran.",
      recommendedArchitecture: "Self-contained enterprise software stack deployed on Sonatrach-owned servers with zero external internet dependencies."
    },
    localContentProcurement: {
      statutoryFramework: "Hydrocarbon Law 19-13 provisions mandating maximum utilization of Algerian goods, services, and national engineering cadres.",
      technologyTransfer: "Structured technical training for Sonatrach software engineers and complete system documentation provided in French and Arabic.",
      citation: "ALNAFT Hydrocarbon Law 19-13 Regulatory Framework (2024)."
    },
    solutions: [
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Desert pipeline monitoring, intelligent pigging logs, and risk-based inspection."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Sahara field production accounting, gas lift tracking, and Sonatrach reporting."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Concession accounting compliant with Algerian Hydrocarbon Law 19-13."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of existing pipeline inspection databases, field SCADA links, and Sonatrach cybersecurity requirements.",
      pilot: "Deployment of an asset integrity module across one desert pipeline corridor (e.g., 200 km section) with milestone-gated acceptance criteria.",
      integration: "Connecting with Sonatrach GIS mapping systems, SAP PM maintenance modules, and field historians.",
      rollout: "Phased rollout across regional operating divisions (Hassi Messaoud, Rhourde Nouss, In Amenas).",
      ownership: "Perpetual source code or enterprise binary license with complete operational autonomy."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have designed robust enterprise project controls, production reporting systems, and asset tracking software between 2010 and 2020, reinforced by the EnerQuest upstream production management pilot.",
      boundaries: "Deview provides engineering services. We do not claim local corporate incorporation in Algiers or direct prequalification on the Sonatrach commercial register without local consortium sponsorship."
    },
    buyingTeamChecklist: {
      operations: "Does the platform handle trilingual French, Arabic, and English operational terminology seamlessly?",
      itSecurity: "Can the system be installed in a fully air-gapped Sonatrach data center?",
      procurement: "Does the delivery plan include verifiable training for Algerian national software teams?",
      executiveSponsor: "Does the dashboard deliver consolidated pipeline risk metrics across all transport divisions?"
    },
    sources: [
        {
          title: "Hydrocarbon Law No. 19-13 Governing Hydrocarbon Activities",
          publisher: "ALNAFT (National Agency for Hydrocarbon Valorization), Algeria",
          date: "2023",
          url: "https://www.alnaft.dz/en/cadre-reglementaire"
        },
        {
          title: "Law No. 18-07 on the Protection of Physical Persons in the Processing of Personal Data",
          publisher: "National Authority for Personal Data Protection (ANPDP), Algeria",
          date: "2023",
          url: "https://www.anpdp.dz/cadre-juridique/"
        },
        {
          title: "Sonatrach Upstream Operational Performance & Pipeline Integrity Review",
          publisher: "Sonatrach",
          date: "2024",
          url: "https://sonatrach.com/"
        }
      ],
    faqs: [
      {
        q: "Does the software support French and Arabic interfaces for Algerian field crews?",
        a: "Yes. Our interfaces support dynamic language switching between French, Arabic (with native RTL rendering), and English across all inspection screens and executive reports."
      },
      {
        q: "Can the software integrate intelligent pigging inspection files?",
        a: "Yes. Our asset integrity engine ingests MFL (magnetic flux leakage) and ultrasonic pigging logs, automatically mapping anomalies against pipeline chainage coordinates."
      },
      {
        q: "Is an air-gapped deployment possible in Algeria?",
        a: "Yes. Our systems are containerized and packaged for installation on offline bare metal or virtualized servers inside Sonatrach facilities without internet access."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Asset Data Assessment",
        href: "/en/contact"
      },
      secondary: {
        label: "Download IT/OT Architecture Checklist",
        href: "/en/resources/oil-gas-it-ot-architecture-checklist"
      }
    }
  },

  "kuwait": {
    slug: "kuwait",
    assetId: "CP-09",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Kuwait",
    tier: 1,
    regionSlug: "middle-east",
    title: "Kuwait Oil & Gas Software Systems | Capital Project Controls & Operations",
    metaDescription: "Enterprise software for capital project controls, heavy oil production monitoring, and contractor governance for Kuwait Oil Company (KOC).",
    tagline: "Capital project governance, contractor controls, and heavy oil production surveillance for Kuwait's energy sector.",
    marketOpening: "The State of Kuwait, under the stewardship of Kuwait Petroleum Corporation (KPC) and its upstream subsidiary Kuwait Oil Company (KOC), is executing major strategic initiatives to maintain production capacity toward 4 million barrels per day. The operating landscape encompasses giant conventional reservoirs (Burgan), complex heavy oil thermal developments (South Ratqa), and ultra-deep sour gas fields (Jurassic gas). Major capital initiatives require rigorous contractor project controls, strict cybersecurity compliance under the Communication and Information Technology Regulatory Authority (CITRA), and adherence to Central Agency for Public Tenders (CAPT) regulations.",
    buyerProblems: [
      {
        role: "Capital Project Management Director",
        problem: "Coordinating multi-billion-dollar EPC packages across international contractors (such as gathering centers, heavy oil facilities, and gas pipelines).",
        impact: "Claims and counter-claims regarding change orders and schedule delay responsibilities."
      },
      {
        role: "Heavy Oil Operations Superintendent",
        problem: "Thermal recovery operations generate massive streams of cyclic steam injection and progressive cavity pump (PCP) telemetry that overwhelm manual reporting.",
        impact: "Delayed identification of steam channeling and premature pump failures."
      },
      {
        role: "Contract & Procurement Audit Manager",
        problem: "Verifying contractor compliance with Kuwaitization quotas and verifying progress payments against milestones.",
        impact: "Audit queries by the State Audit Bureau of Kuwait and delayed project commissionings."
      }
    ],
    priorityWorkflows: [
      {
        title: "Capital Project Controls & Contractor Portals",
        description: "Primavera P6 baseline integration, earned value analysis, and digital submittal workflows for KOC mega-project contractors.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Heavy Oil & Artificial Lift Surveillance",
        description: "Real-time monitoring of PCP torque, steam injection rates, and wellhead temperatures across northern and western Kuwait fields.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Contractor Compliance & Kuwaitization Portals",
        description: "Automated tracking of contractor employee Kuwaitization percentages and certified invoice verification.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Supergiant Burgan field, northern heavy oil thermal developments (Ratqa), Jurassic deep sour gas fields, and Al Zour refining complex.",
      connectivity: "High-speed industrial fiber across KOC operational directorates (Ahmadi, North, West, South); private industrial wireless at desert gathering centers.",
      dataGovernance: "Compliance with CITRA Cloud Security and Data Classification policies, and KPC enterprise cybersecurity guidelines.",
      partnerEcosystem: "Kuwait Petroleum Corporation (KPC), Kuwait Oil Company (KOC), KNPC, KIPIC, and international EPC conglomerates."
    },
    deploymentAndSovereignty: {
      legalMandate: "CITRA's data classification and cloud regulations can require some government and critical-infrastructure data to stay in Kuwait. Confirm the classification of your data with counsel.",
      buyerPreference: "Air-gapped on-premise installation in KOC data centers in Ahmadi or locally accredited Tier-3 data centers.",
      recommendedArchitecture: "Private single-tenant deployment in the operator's dedicated data center with customer-controlled security keys."
    },
    localContentProcurement: {
      statutoryFramework: "Kuwaitization regulations enforced by the Public Authority for Manpower and KPC contractor workforce directives.",
      technologyTransfer: "Structured programs to train Kuwaiti software engineers and provide comprehensive bilingual English/Arabic system manuals.",
      citation: "Kuwait Petroleum Corporation (KPC) Contractor Kuwaitization Guidelines (2024)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for KOC capital project packages and SAP work breakdown structures."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Kuwaitization audit tracking and multi-tier contractor submittals."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Heavy oil thermal surveillance and well test reconciliation."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of existing Primavera P6 schedules, SAP cost accounting ledgers, and CITRA cyber compliance requirements.",
      pilot: "Deployment of contractor progress controls on a single gathering center construction package with milestone-gated acceptance criteria.",
      integration: "Connecting with KOC SAP S/4HANA finance, document management systems, and plant historians.",
      rollout: "Phased deployment across all active capital packages in Ahmadi and field directorates.",
      ownership: "Perpetual enterprise license with full operational sovereignty."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have a strong track record delivering enterprise project controls, ERP integrations, and production reporting platforms from 2010 to 2020, as well as digital oilfield pilot implementations.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Ahmadi or independent CAPT prequalification without local partnership."
    },
    buyingTeamChecklist: {
      operations: "Can the system ingest thousands of heavy oil well telemetry points without database lockups?",
      itSecurity: "Does the architecture comply with CITRA cloud security and data classification mandates?",
      procurement: "How does the engagement model support KPC contractor Kuwaitization scorecards?",
      executiveSponsor: "Does the platform provide the KOC executive committee with real-time project variance analysis?"
    },
    sources: [
        {
          title: "CITRA Cloud Computing & Data Classification Regulatory Framework",
          publisher: "Communication and Information Technology Regulatory Authority (CITRA), Kuwait",
          date: "2023",
          url: "https://citra.gov.kw/"
        },
        {
          title: "Kuwait Oil Company (KOC) Project Controls & Contracting Manual",
          publisher: "Kuwait Oil Company (KOC)",
          date: "2024",
          url: "https://www.kockw.com/"
        },
        {
          title: "State Audit Bureau Guidelines for Petroleum Concession Contracts",
          publisher: "State Audit Bureau of Kuwait",
          date: "2024",
          url: "https://www.sab.gov.kw/en/Pages/LawsAndRegulations.aspx"
        }
      ],
    faqs: [
      {
        q: "How does the system ensure compliance with CITRA data residency requirements?",
        a: "Our software architecture is engineered for private on-premise deployment within operator data center boundaries in Kuwait (such as in Ahmadi), operating without mandatory external cloud egress to comply with CITRA cloud computing regulatory framework criteria."
      },
      {
        q: "Can the project controls module integrate with KOC's SAP systems?",
        a: "Yes. We implement standardized connectors to SAP ERP, synchronizing purchase orders, cost centers, and service entry sheets directly with contractor field progress."
      },
      {
        q: "How are contractor Kuwaitization quotas calculated?",
        a: "Our contractor portal verifies submitted civil ID records against Kuwaiti nationality rules, generating real-time percentage reports against contractually required targets."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Controls Requirements Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  },

  "mozambique": {
    slug: "mozambique",
    assetId: "CP-10",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Mozambique",
    tier: 1,
    regionSlug: "southern-africa",
    title: "Mozambique LNG Software Solutions | Rovuma Basin Megaproject Controls",
    metaDescription: "Enterprise software for LNG megaproject controls, contractor management, and offshore production systems in Mozambique's Rovuma Basin.",
    tagline: "Rovuma Basin LNG project controls, Coral Sul FLNG operations, and remote logistics coordination in Cabo Delgado.",
    marketOpening: "The Republic of Mozambique is emerging as a global liquefied natural gas powerhouse through world-scale deepwater discoveries in the offshore Rovuma Basin (Area 1 and Area 4). Led by the National Hydrocarbons Company (ENH) and international operating consortia (TotalEnergies in Area 1, ExxonMobil and Eni in Area 4), these investments combine the operational Coral Sul Floating LNG (FLNG) vessel with massive planned onshore liquefaction trains at the Afungi complex. Operating in northern Cabo Delgado demands specialized software that handles remote logistics, intermittent satellite connectivity, multi-billion-dollar project finance controls, and strict compliance with national local content (Conteúdo Local) frameworks.",
    buyerProblems: [
      {
        role: "LNG Project Director (Afungi / Rovuma)",
        problem: "Managing complex civil, marine, and mechanical construction milestones across remote sites with limited physical infrastructure.",
        impact: "Severe schedule delays and budget variances across multi-billion-dollar EPC joint venture packages."
      },
      {
        role: "FLNG Production & Offloading Manager",
        problem: "Offshore FLNG operations require precise coordination between cryogenic liquefaction rates, storage tank boil-off gas, and LNG export carrier offloading.",
        impact: "Costly demurrage fees and safety risks during custody transfer offloading."
      },
      {
        role: "Local Content & Community Relations Manager",
        problem: "Auditing contractor commitments to Mozambican supplier hiring and workforce capacity development in Cabo Delgado.",
        impact: "Regulatory non-compliance with the National Petroleum Institute (INP) and community disputes."
      }
    ],
    priorityWorkflows: [
      {
        title: "LNG Megaproject Controls & Subcontractor Coordination",
        description: "Consolidated work breakdown structures, Primavera P6 baseline tracking, and digital progress billings for Afungi LNG packages.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Offshore FLNG Production & Cryogenic Accounting",
        description: "Reconciling deepwater subsea feed gas, liquefaction efficiency, condensate separation, and LNG tanker custody transfer.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Resilient Offline Field Camp Software",
        description: "Edge applications enabling construction camps and inspection teams to record progress without active satellite connectivity.",
        solutionSlug: "offline-oilfield-operations-software"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater gas fields in Area 1 and Area 4 of the Rovuma Basin, Coral Sul FLNG, and planned onshore Afungi LNG export facility.",
      connectivity: "Maritime satellite (VSAT/Starlink) offshore; developing cellular and satellite links at onshore Afungi camp sites; reliable fiber in Maputo.",
      dataGovernance: "Compliance with National Petroleum Institute (INP) regulations and Mozambique Law No. 3/2017 on electronic transactions and data privacy.",
      partnerEcosystem: "ENH, TotalEnergies, Eni, ExxonMobil, CNPC, KOGAS, Galp, and major international EPC consortia (Technip, JGC, Saipem)."
    },
    deploymentAndSovereignty: {
      legalMandate: "INP expects operators to keep exploration, production and cost-recovery records accessible to Mozambican authorities. Confirm hosting implications with local counsel.",
      buyerPreference: "Hybrid architecture: edge servers aboard FLNG and at Afungi construction sites with central replication to operator offices in Maputo.",
      recommendedArchitecture: "Edge-to-cloud topology: local edge caching nodes with automated batch synchronization over satellite to secure private cloud VPCs in Maputo or South Africa."
    },
    localContentProcurement: {
      statutoryFramework: "Mozambique Petroleum Law No. 21/2014 and associated local content decrees prioritizing Mozambican goods, services, and workforce training.",
      technologyTransfer: "Commitments to train Mozambican engineers in digital systems, provide Portuguese-language documentation, and partner with local firms.",
      citation: "National Petroleum Institute (INP) Local Content Guidelines (2024)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for Rovuma Basin LNG capital packages and multi-consortium reporting."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "FLNG cryogenic production reconciliation and tanker custody transfer."
      },
      {
        title: "Offline Oilfield Operations Software",
        slug: "offline-oilfield-operations-software",
        annotation: "Resilient edge caching for remote Afungi construction camps and inspection teams."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of Rovuma Basin construction communication links, contractor reporting formats, and INP compliance requirements.",
      pilot: "Deployment of a progress tracking and inspection module at one Afungi infrastructure package with milestone-gated acceptance criteria.",
      integration: "Connecting with Primavera P6 project schedules, SAP accounting ledgers, and FLNG process historians.",
      rollout: "Phased rollout across all active Rovuma Basin construction and operational packages with bilingual Portuguese/English support.",
      ownership: "Perpetual enterprise software license with local Mozambican engineering capacity building."
    },
    proofContext: {
      relevantExperience: "Deview brings deep enterprise software experience (2010–2020) in project controls, upstream reporting, and remote operations, reinforced by our EnerQuest upstream production management pilot.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Maputo or Pemba without local consortium partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain full functionality in Cabo Delgado when satellite links drop?",
      itSecurity: "Is the data synchronized securely over encrypted channels between field camps and Maputo?",
      procurement: "Does the project provide verifiable technology transfer and training for Mozambican staff?",
      executiveSponsor: "Can executive leadership monitor Afungi construction progress and FLNG offloading in real time?"
    },
    sources: [
        {
          title: "Petroleum Law No. 21/2014 and Concession Licensing Regulations",
          publisher: "Instituto Nacional de Petróleo (INP), Mozambique",
          date: "2023",
          url: "https://www.inp.gov.mz/"
        },
        {
          title: "Rovuma Basin LNG Area 1 and Area 4 Concession Strategic Framework",
          publisher: "Empresa Nacional de Hidrocarbonetos (ENH)",
          date: "2024",
          url: "https://www.enh.co.mz/"
        },
        {
          title: "Law No. 3/2017 on Electronic Transactions and Cybersecurity Governance",
          publisher: "Portal do Governo de Moçambique",
          date: "2022",
          url: "https://www.portaldogoverno.gov.mz/"
        }
      ],
    faqs: [
      {
        q: "Does the software support Portuguese language interfaces for Mozambican staff?",
        a: "Yes. All forms, menus, reports, and training manuals are fully localized in Portuguese, with dynamic switching to English for multinational consortia."
      },
      {
        q: "How does the system operate in remote areas like Afungi with poor connectivity?",
        a: "We deploy an offline-first architecture. Field tablets and local camp servers operate autonomously, queuing all progress entries, inspections, and photos locally, and synchronizing automatically whenever a satellite link is established."
      },
      {
        q: "Can the platform handle custody transfer for LNG tankers?",
        a: "Yes. Our marine custody transfer module records cryogenic loading temperatures, boil-off volumes, and laboratory quality assays, producing official bill of lading documentation."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an LNG Programme Workshop",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  }
};

