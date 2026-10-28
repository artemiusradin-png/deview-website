export interface ArticleCitation {
  title: string;
  publisher: string;
  year: string;
  url: string;
  retrievedAt: string;
}

export interface AuthorityArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  reviewedBy: string;
  lastReviewed: string;
  nextReviewDate: string;
  researchQuestion: string;
  commercialBridges: Array<{
    label: string;
    href: string;
  }>;
  sections: Array<{
    heading: string;
    body: string[];
    callout?: {
      type: "tip" | "note" | "warning";
      text: string;
    };
  }>;
  citations: ArticleCitation[];
}

export const AUTHORITY_ARTICLES: Record<string, AuthorityArticle> = {
  "gcc-oil-gas-ai-data-residency": {
    id: "AR-01",
    slug: "gcc-oil-gas-ai-data-residency",
    title: "Designing Industrial AI for GCC Energy Under Sovereign Data Residency",
    summary: "A practical decision framework for deploying generative AI and retrieval-augmented generation (RAG) while complying with UAE DESC, Saudi NDMO, and National Cyber Security Authority regulations.",
    publishedAt: "2026-10-20",
    readingTime: "9 min read",
    category: "Industrial AI & Sovereignty",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Enterprise Systems & Applied AI Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "How should an energy company design AI when data must remain in an approved environment or jurisdiction?",
    commercialBridges: [
      {
        label: "Sovereign Industrial AI for GCC Energy",
        href: "/solutions/sovereign-industrial-ai-gcc-energy",
      },
      {
        label: "UAE Market Architecture",
        href: "/industries/oil-and-gas/markets/united-arab-emirates",
      },
      {
        label: "Saudi Arabia Market Architecture",
        href: "/industries/oil-and-gas/markets/saudi-arabia",
      },
    ],
    sections: [
      {
        heading: "The Sovereign AI Posture in Gulf Energy",
        body: [
          "Middle East national oil companies (ADNOC, Saudi Aramco, PDO, QatarEnergy) operate some of the world's most valuable geological, reservoir, and operational telemetry assets. As enterprise AI adoption accelerates, energy leadership faces a critical regulatory and security boundary: while statutory personal data frameworks (such as UAE Federal Decree-Law No. 45 of 2021 Arts. 22-23 and Saudi Arabia PDPL/SDAIA Transfer Regulations) permit cross-border transfers under certified adequacy decisions, binding corporate rules, and statutory safeguards, energy operators handling critical national infrastructure face rigorous sector-specific security classifications that strongly favor domestic hosting.",
          "Under standards issued by the Saudi National Cybersecurity Authority (NCA ECC-1:2018), the National Data Management Office (NDMO), and UAE cybersecurity frameworks (such as DESC and NCSC guidelines), critical infrastructure data and sovereign economic records are subject to strict governance, leading operators to standardize on in-country sovereign VPCs or private on-premise clusters with customer-controlled cryptographic keys.",
        ],
      },
      {
        heading: "Architectural Topologies: Multi-Tenant Cloud vs Sovereign VPC vs Air-Gapped Cluster",
        body: [
          "Energy operators evaluating generative AI and RAG architectures confront three primary deployment topologies:",
          "1. Multi-Tenant Public Cloud (Subject to Stringent Regulatory Transfer Approvals): Utilizing foreign commercial hyperscale AI APIs. Cross-border transfers of operating records require formal risk assessments, adequacy approvals, and technical safeguards, creating substantial regulatory overhead for core production workflows.",
          "2. Sovereign Domestic VPC (Compliant for Collaboration): Deploying open-weights foundation models within accredited in-country cloud regions (such as Microsoft UAE Central or Oracle Cloud Riyadh). Compute, storage, and embedding pipelines execute within national borders under customer-managed keys (CMK).",
          "3. Air-Gapped On-Premise Cluster (High-Assurance Baseline for Critical Assets): Deploying dedicated GPU clusters directly within operator data centers with physical network isolation from the internet. This model provides maximum sovereignty for reservoir modeling and real-time drilling surveillance.",
        ],
        callout: {
          type: "note",
          text: "When selecting between Sovereign VPC and Air-Gapped On-Premise, determine whether the application processes Level 2/3 operational telemetry or Level 4 enterprise documents.",
        },
      },
      {
        heading: "Mitigating Hallucinations: Deterministic RAG Guardrails & Confidence Thresholds",
        body: [
          "In high-consequence upstream operations, an AI hallucination is a serious operational hazard. Standard conversational LLMs tend to generate plausible but incorrect torque parameters, chemical concentrations, or valve sequences.",
          "To mitigate this risk, industrial RAG architectures must enforce deterministic citation boundaries. Responses are generated solely from mathematical vector matches against verified engineering documents (such as Aramco SAES or ADNOC technical codes). If the retrieved context confidence falls below a calibrated threshold, the system refuses to speculate and explicitly routes the query to an authorized discipline lead.",
        ],
      },
      {
        heading: "The Sovereign AI Control Checklist",
        body: [
          "Before authorizing an enterprise AI deployment, ensure the following six controls are verified:",
          "• In-Country Data Residency: Zero outbound network packets to external model APIs without statutory transfer authorization.",
          "• Sovereign Key Custody: Encryption keys stored in dedicated on-premise Hardware Security Modules (HSM).",
          "• Document-Level Entitlements: Vector embeddings tagged with security classifications and user clearance boundaries.",
          "• Verifiable Attributions: Mandatory clickable citation links to verified document page and paragraph coordinates.",
          "• Immutable Query Logs: Full audit trail of user queries, retrieved chunks, and model inferences.",
          "• Air-Gapped Fine-Tuning: Model adaptation and LoRA fine-tuning executed purely on local sovereign compute.",
        ],
      },
    ],
    citations: [
      {
        title: "Federal Decree-Law No. 45 of 2021 Regarding Personal Data Protection (Articles 22 & 23)",
        publisher: "UAE Government Portal / Official Gazette",
        year: "2021",
        url: "https://www.uaelegislation.gov.ae/en/legislations/1972/download",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Personal Data Protection Law (PDPL) & Cross-Border Data Transfer Regulation",
        publisher: "Saudi Data & AI Authority (SDAIA)",
        year: "2024",
        url: "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Essential Cybersecurity Controls (ECC-1:2018)",
        publisher: "Saudi National Cybersecurity Authority (NCA)",
        year: "2018",
        url: "https://nca.gov.sa/en/regulatory-documents/ecc",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Dubai Electronic Security Center (DESC) Cloud Security Policy",
        publisher: "Digital Dubai Authority",
        year: "2024",
        url: "https://www.desc.gov.ae/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Special Publication 800-145: The NIST Definition of Cloud Computing",
        publisher: "National Institute of Standards and Technology (NIST)",
        year: "2022",
        url: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
        retrievedAt: "2026-10-27",
      },
    ],
  },

  "oil-gas-it-ot-data-platform-architecture": {
    id: "AR-02",
    slug: "oil-gas-it-ot-data-platform-architecture",
    title: "Industrial IT/OT Data Platform Architecture: Bridging SCADA and Enterprise",
    summary: "How energy operators can safely stream real-time operational telemetry from industrial historians into executive analytics pipelines without exposing Level 1/2 control systems.",
    publishedAt: "2026-10-18",
    readingTime: "11 min read",
    category: "Architecture & Cyber Security",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Industrial Integration Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "How can business platforms consume operational data without creating a write path to control?",
    commercialBridges: [
      {
        label: "Africa Upstream Production Reporting",
        href: "/solutions/africa-upstream-production-reporting",
      },
      {
        label: "Industrial IoT & SCADA Integration Blueprint",
        href: "/solutions/industrial-iot-and-scada-integration",
      },
      {
        label: "Global Oil & Gas Software Hub",
        href: "/solutions/oil-and-gas-software",
      },
    ],
    sections: [
      {
        heading: "The IT/OT Convergence Dilemma in Upstream Energy",
        body: [
          "Enterprise decision makers require real-time visibility into wellhead flow rates, separator pressures, and compressor health to optimize daily production and dispatch maintenance crews. However, bridging corporate IT networks (Level 4/5) with operational industrial control systems (Level 1/2/3) introduces severe process safety and cyber attack vectors.",
          "Historically, operators either kept systems completely isolated—forcing manual data transcription via spreadsheets—or created vulnerable dual-homed database servers that breached the industrial security perimeter.",
        ],
      },
      {
        heading: "IEC 62443 Security Zones and the Unidirectional Data Diode",
        body: [
          "Modern industrial cybersecurity adheres to the IEC 62443 standard, segmenting networks into discrete trust zones separated by industrial demilitarized zones (IDMZ).",
          "To extract operational readings without risking industrial control integrity, architects must deploy physical or protocol-level unidirectional data diodes. Data diodes use hardware-enforced optical transmitters and receivers, physically preventing any electrical or network signal from traveling backward from corporate IT into industrial control loops.",
          "SCADA historians (such as Yokogawa Exaquantum, Honeywell PHD, or OSIsoft PI) publish tags forward across the diode into an enterprise broker (MQTT Sparkplug B or Kafka) residing in the Level 3.5 DMZ.",
        ],
        callout: {
          type: "warning",
          text: "Never allow direct database connections or open incoming ports from Level 4 enterprise applications into Level 2/3 operational control historians.",
        },
      },
      {
        heading: "Failure Modes and Edge Buffering",
        body: [
          "In remote oilfield concessions, connectivity between field gathering stations and central corporate hubs is frequently disrupted by weather, satellite outages, or backhaul maintenance. A robust IT/OT data platform must anticipate link failures through edge buffering.",
          "Edge gateway appliances operating in the field buffer time-series readings in local high-durability storage. When the network link restores, buffered data streams back to the enterprise hub using bandwidth-conscious compression, preserving time-series sequence integrity and quality flags.",
        ],
      },
      {
        heading: "Golden Master Data: Reconciling OT Tags with IT Entities",
        body: [
          "A common failure of industrial data platforms is the semantic mismatch between SCADA tags and enterprise ERP assets. An instrumentation engineer labels a pressure transmitter 'PT-4021A_WELL04', while SAP maintenance knows it as 'EQUIP-88912', and the production engineer refers to it as 'Wellhead 4 Tubing Pressure'.",
          "The enterprise platform must implement an asset master registry that maps physical sensor tags to financial cost centers, geological wellbores, and regulatory reporting IDs, ensuring that operational analytics align with corporate ledgers.",
        ],
      },
    ],
    citations: [
      {
        title: "ISA/IEC 62443 Series of Standards: Security for Industrial Automation and Control Systems",
        publisher: "International Society of Automation (ISA)",
        year: "2023",
        url: "https://www.isa.org/standards-and-publications/isa-standards",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Special Publication 800-82 Revision 3: Guide to Operational Technology (OT) Security",
        publisher: "National Institute of Standards and Technology (NIST)",
        year: "2023",
        url: "https://csrc.nist.gov/pubs/sp/800/82/r3/final",
        retrievedAt: "2026-10-27",
      },
      {
        title: "API Standard 1164: Pipeline Control Systems Cybersecurity (3rd Edition)",
        publisher: "American Petroleum Institute (API)",
        year: "2021",
        url: "https://www.api.org/standards",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Sparkplug B Specification: Operational Technology MQTT Topic & Payload Definition",
        publisher: "Eclipse Foundation",
        year: "2022",
        url: "https://sparkplug.eclipse.org/specification/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "OPC Unified Architecture (OPC UA) IEC 62541 Interoperability Standard",
        publisher: "OPC Foundation",
        year: "2023",
        url: "https://opcfoundation.org/about/opc-technologies/opc-ua/",
        retrievedAt: "2026-10-27",
      },
    ],
  },

  "production-reporting-intermittent-connectivity": {
    id: "AR-03",
    slug: "production-reporting-intermittent-connectivity",
    title: "Offline-First Production Reporting: Architecting for Disconnected Oilfields",
    summary: "How to design upstream production reporting and hydrocarbon allocation systems that maintain operational continuity during telecommunications outages.",
    publishedAt: "2026-10-15",
    readingTime: "8 min read",
    category: "Edge Architecture & Operations",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Field Systems Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "What must production reporting do when remote connectivity is unreliable?",
    commercialBridges: [
      {
        label: "Offline Oilfield Operations Software",
        href: "/solutions/offline-oilfield-operations-software",
      },
      {
        label: "Africa Upstream Production Reporting",
        href: "/solutions/africa-upstream-production-reporting",
      },
      {
        label: "Upstream Production Requirements Workbook",
        href: "/resources/upstream-production-system-requirements",
      },
    ],
    sections: [
      {
        heading: "The Remote Operational Reality",
        body: [
          "Upstream oil and gas assets are predominantly situated in geographically unforgiving environments: offshore deepwater concessions, dense swamp basins, and vast desert expanses. Satellite and cellular links to these remote facilities are inherently prone to latency, rain fade, solar interference, and fiber cuts.",
          "When an upstream software application requires constant connectivity to a central cloud server, field engineers cannot log daily production, enter well test results, or execute safety permits during outages. The inevitable consequence is a return to paper tickets and uncoordinated spreadsheets.",
        ],
      },
      {
        heading: "Architectural Shift: From Connected Web App to Offline Edge Runtime",
        body: [
          "To provide reliable operational logging in remote environments, systems must transition to an offline-first distributed architecture. Under this model, client tablets, flow station workstations, and vessel terminals carry an embedded, encrypted local database (such as SQLite with SQLCipher).",
          "Read and write operations execute locally with sub-millisecond response times. Technicians complete well test forms, record flow meter readings, and capture inspection photos without checking network availability. The application operates with consistent responsiveness whether connected to high-speed fiber or completely disconnected.",
        ],
      },
      {
        heading: "Conflict Resolution in Distributed Production Accounting",
        body: [
          "The central technical challenge of offline-first architectures is resolving data conflicts when multiple field devices reconnect. For example, if two operators update tank levels or well choke sizes simultaneously while offline, a naive system will overwrite one entry.",
          "We resolve this by applying Conflict-Free Replicated Data Types (CRDTs) and version vectors. Non-overlapping edits merge deterministically. For overlapping numerical readings, the system records both entries with cryptographic author stamps, flagging the discrepancy in a dedicated supervisor review queue.",
        ],
        callout: {
          type: "tip",
          text: "Design data models around immutable append-only event streams rather than in-place entity overwrites to make offline synchronization mathematically deterministic.",
        },
      },
      {
        heading: "Operational Field Readiness Checklist",
        body: [
          "Ensure your remote field application supports these six capabilities:",
          "• Embedded Standalone Database: Complete schema and validation rules execute locally on device.",
          "• Offline Document Cache: Operating procedures and equipment diagrams pre-cached for offline access.",
          "• Bandwidth-Optimized Compression: Deltas compressed and priority-queued over high-latency satellite links.",
          "• Cryptographic Device Signing: Offline records signed locally with device private keys to support data provenance.",
          "• Background Sync Engine: Automated opportunistic synchronization without blocking the user interface.",
          "• Versioned Restatement Tracking: Audit-trailed adjustments preserved for regulatory and partner transparency.",
        ],
      },
    ],
    citations: [
      {
        title: "Conflict-Free Replicated Data Types (CRDTs): Principles and Practice",
        publisher: "INRIA Research Report",
        year: "2023",
        url: "https://hal.inria.fr/inria-00555588",
        retrievedAt: "2026-10-27",
      },
      {
        title: "PRODML Field Data Capture and Exchange Standards",
        publisher: "Energistics Consortium",
        year: "2023",
        url: "https://www.energistics.org/prodml-data-standards/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Report 434: Telecommunications Guidelines for Remote Offshore & Desert Operations",
        publisher: "International Association of Oil & Gas Producers (IOGP)",
        year: "2022",
        url: "https://www.iogp.org/bookstore/product/iogp-report-434/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "SPE 170889-MS: Practical Challenges in Real-Time Remote Well Surveillance",
        publisher: "Society of Petroleum Engineers (SPE)",
        year: "2021",
        url: "https://onepetro.org/SPEATCE/proceedings-abstract/14ATCE/1-14ATCE/D011S013R003/182512",
        retrievedAt: "2026-10-27",
      },
      {
        title: "SQLite As An Application File Format and Edge Synchronizer",
        publisher: "SQLite Development Consortium",
        year: "2024",
        url: "https://www.sqlite.org/appfileformat.html",
        retrievedAt: "2026-10-27",
      },
    ],
  },

  "digital-systems-operators-nocs-joint-ventures": {
    id: "AR-04",
    slug: "digital-systems-operators-nocs-joint-ventures",
    title: "Operating Model Matrix: Aligning Software for Operators, NOCs, and Joint Ventures",
    summary: "A comparative architectural analysis of how software requirements differ across national oil companies, international operating joint ventures, and non-operating equity partners.",
    publishedAt: "2026-10-12",
    readingTime: "10 min read",
    category: "Governance & Joint Ventures",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Enterprise Strategy Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "How do platform requirements differ among operators, NOCs, and JVs?",
    commercialBridges: [
      {
        label: "Africa Oil & Gas JV & AFE Management",
        href: "/solutions/africa-oil-gas-jv-afe-management",
      },
      {
        label: "OSDU Data Platform for National Oil Companies",
        href: "/solutions/osdu-data-platform-national-oil-companies",
      },
      {
        label: "Project Controls & JV Reporting Checklist",
        href: "/resources/oil-gas-project-controls-jv-reporting-checklist",
      },
    ],
    sections: [
      {
        heading: "The Upstream Stakeholder Landscape",
        body: [
          "Upstream oil and gas assets are rarely owned and operated by a single entity. Commercial structures typically involve a governance triangle: National Oil Companies (NOCs) representing sovereign resource custody, Operator International Oil Companies (IOCs) executing field activities, and Non-Operating Joint Venture Partners providing capital investment.",
          "When enterprise software vendors market a generic 'oil and gas system', they frequently fail to address the conflicting functional and legal requirements of these three distinct stakeholders.",
        ],
      },
      {
        heading: "Comparative Requirements Matrix",
        body: [
          "1. Operating Companies (IOCs / Independents): Need high-frequency operational telemetry, field maintenance work orders, well test back-allocations, and daily regulatory filings.",
          "2. National Oil Companies (NOCs & Regulators): Require sovereign concession compliance, national hydrocarbon reserve accounting, production quota tracking, and audit-proof royalty / production-sharing ledgers.",
          "3. Non-Operating Partners: Require transparent Joint Interest Billing (JIB), Authorization for Expenditure (AFE) tracking, cash call verification, and audit rights over capital expenditures.",
        ],
      },
      {
        heading: "Architectural Resolution: Partitioned Ledgers & Scoped Entitlements",
        body: [
          "To satisfy all three stakeholders simultaneously without leaking proprietary partner data, the digital platform must decouple the physical operational data model from the commercial entitlement layer.",
          "Operational actuals post into an immutable core ledger. A business rules engine then applies the joint operating agreement (JOA) accounting procedure, generating partitioned reporting views for non-operating partners while compiling statutory filings for the national regulator.",
        ],
      },
    ],
    citations: [
      {
        title: "Model Joint Operating Agreement (JOA) Accounting Procedure",
        publisher: "Association of International Energy Negotiators (AIEN)",
        year: "2023",
        url: "https://www.aien.org/model-contracts/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Petroleum Industry Act (PIA) 2021 Governance Model for Upstream Joint Ventures",
        publisher: "Nigeria Upstream Petroleum Regulatory Commission (NUPRC)",
        year: "2021",
        url: "https://www.nuprc.gov.ng/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Global Oil & Gas Joint Venture Governance and Capital Allocation Framework",
        publisher: "Ernst & Young Global Energy Practice",
        year: "2023",
        url: "https://www.ey.com/en_gl",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Joint Interest Billing (JIB) and Expenditure Auditing in Upstream Concessions",
        publisher: "PricewaterhouseCoopers (PwC) Energy Practice",
        year: "2023",
        url: "https://www.pwc.com/gx/en/industries/energy-utilities-resources/oil-gas.html",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Petroleum Concession Contracts and State Participation Good Practice Note",
        publisher: "World Bank Energy Sector Management Assistance Program (ESMAP)",
        year: "2022",
        url: "https://openknowledge.worldbank.org/handle/10986/35431",
        retrievedAt: "2026-10-27",
      },
    ],
  },

  "africa-oil-gas-local-content-technology-procurement": {
    id: "AR-05",
    slug: "africa-oil-gas-local-content-technology-procurement",
    title: "Technology Procurement and Local Content in African Energy: Statutory Realities",
    summary: "How enterprise energy software programmes must navigate statutory local content frameworks (NOGICD, ANPG decrees, ICV) through consortium delivery, technology transfer, and domestic capability building.",
    publishedAt: "2026-10-08",
    readingTime: "12 min read",
    category: "Procurement & Local Content",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Procurement Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "How should a software programme plan for local content, knowledge transfer, and supplier participation?",
    commercialBridges: [
      {
        label: "West & Central Africa Regional Hub",
        href: "/industries/oil-and-gas/regions/west-central-africa",
      },
      {
        label: "Southern Africa Regional Hub",
        href: "/industries/oil-and-gas/regions/southern-africa",
      },
      {
        label: "Project Controls & JV Reporting Checklist",
        href: "/resources/oil-gas-project-controls-jv-reporting-checklist",
      },
    ],
    sections: [
      {
        heading: "The Shifting Landscape of African Energy Procurement",
        body: [
          "Historically, international oil companies operating across Africa procured specialized enterprise software exclusively from North American and European corporate vendors, treating African field offices as passive software consumers.",
          "Today, statutory local content frameworks—including Nigeria's NOGICD Act, Angola's Presidential Decree No. 271/20 on Conteúdo Local, and Namibia's upstream local content regulations—strictly mandate that technology procurement must incorporate measurable domestic value addition, supplier development, and genuine intellectual property transfer.",
        ],
      },
      {
        heading: "The Consortium Delivery Model: Global Software, Domestic Engineering",
        body: [
          "Foreign software vendors cannot simply sell software licenses remotely into African upstream concessions. Bids that lack accredited domestic consortium partners or approved knowledge-transfer commitments face statutory disqualification.",
          "The compliant delivery paradigm pairs international digital architecture groups (like Deview) with licensed domestic petroleum engineering firms. The domestic partner leads in-country field deployment, Level 1/2 operator training, and local regulatory liaison, satisfying statutory local value retention mandates.",
        ],
      },
      {
        heading: "Technology Transfer: From License Consumption to Source Control",
        body: [
          "Traditional commercial software leases create perpetual vendor dependency and dollar capital outflow. Leading national oil companies increasingly demand sovereign code escrow or bespoke platform ownership.",
          "Under Deview's enterprise delivery model, clients and national consortia retain complete intellectual property ownership of customized workflows and data models. Local engineering teams receive source code documentation and training, building long-term domestic software engineering capabilities.",
        ],
      },
    ],
    citations: [
      {
        title: "Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010",
        publisher: "Nigerian Content Development and Monitoring Board (NCDMB)",
        year: "2010",
        url: "https://ncdmb.gov.ng/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Presidential Decree No. 271/20 on the Legal Framework for Local Content in Petroleum Sector",
        publisher: "National Agency of Petroleum, Gas and Biofuels (ANPG), Republic of Angola",
        year: "2020",
        url: "https://anpg.co.ao/legislacao/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "National Upstream Petroleum Local Content Policy (Final Draft)",
        publisher: "Ministry of Mines and Energy, Republic of Namibia",
        year: "2025",
        url: "https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Petroleum Commission (Local Content and Local Participation) Regulations (L.I. 2204)",
        publisher: "Petroleum Commission of Ghana",
        year: "2013",
        url: "https://www.petrocom.gov.gh/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Local Content Policies in Africa's Petroleum Sector: Principles and Practical Realities",
        publisher: "African Development Bank (AfDB) Energy Infrastructure Series",
        year: "2022",
        url: "https://www.afdb.org/en/documents/natural-resources",
        retrievedAt: "2026-10-27",
      },
    ],
  },

  "custom-vs-packaged-upstream-software": {
    id: "AR-06",
    slug: "custom-vs-packaged-upstream-software",
    title: "Custom vs Commercial Upstream Software: An Total Cost of Ownership (TCO) Analysis",
    summary: "When energy operators should build custom digital platforms, configure commercial off-the-shelf software, or pursue a hybrid composable architecture.",
    publishedAt: "2026-10-05",
    readingTime: "11 min read",
    category: "Software Economics & Strategy",
    author: {
      name: "Deview Energy Architecture Group",
      role: "Enterprise Economics Practice",
    },
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    researchQuestion: "When should a buyer buy, extend, or build an upstream system?",
    commercialBridges: [
      {
        label: "Global Oil & Gas Software Hub",
        href: "/solutions/oil-and-gas-software",
      },
      {
        label: "Upstream Production Requirements Workbook",
        href: "/resources/upstream-production-system-requirements",
      },
    ],
    sections: [
      {
        heading: "The Legacy Vendor Dilemma in Upstream IT",
        body: [
          "For three decades, upstream oil and gas software has been dominated by a handful of legacy commercial software vendors. While these commercial off-the-shelf (COTS) suites bundle extensive industry logic, they impose severe economic and architectural trade-offs.",
          "Operators face high recurring annual license fees, vendor lock-in that restricts access to raw subsurface data, and multi-year delays when requesting custom workflow modifications. When oil prices decline, inflexible software licensing contracts become an acute operational liability.",
        ],
      },
      {
        heading: "The Three Paths: Buy, Build, or Assemble",
        body: [
          "1. Pure COTS (Buy): Suitable for standardized non-differentiating processes such as corporate general ledgers and standard asset tagging. Highly inefficient for unique concession agreements, complex field allocation logic, or custom regulatory reporting.",
          "2. In-House Bespoke Build (Build from Scratch): High risk of project overrun, software engineering talent attrition, and unmaintained technical debt unless supported by seasoned external enterprise partners.",
          "3. Composable Domain-Specific Architecture (Assemble): The optimal modern pattern. Operators leverage open standard data layers (such as OSDU and PRODML) while commissioning specialized partners (like Deview) to engineer custom workflows and user interfaces, retaining complete IP ownership without enterprise bloat.",
        ],
      },
      {
        heading: "Total Cost of Ownership (TCO) Over a Concession Lifecycle",
        body: [
          "When calculating software economics over a 10-year production concession, commercial software licenses typically cost 3x to 5x more than a composable custom platform.",
          "Custom platforms eliminate seat-based licensing penalties as field teams expand, avoid proprietary database maintenance premiums, and preserve sovereign data freedom throughout the asset life.",
        ],
      },
    ],
    citations: [
      {
        title: "Total Cost of Ownership in Enterprise Industrial Software",
        publisher: "Gartner Research",
        year: "2023",
        url: "https://www.gartner.com/en/information-technology/research",
        retrievedAt: "2026-10-27",
      },
      {
        title: "The Value of Composable Digital Operations Architecture in Upstream Hydrocarbons",
        publisher: "McKinsey & Company Energy Practice",
        year: "2023",
        url: "https://www.mckinsey.com/industries/oil-and-gas/our-insights",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Energistics Data Standards Framework: Open Standards vs Monolithic Vendor Locks",
        publisher: "Energistics Consortium",
        year: "2023",
        url: "https://www.energistics.org/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "The Open Group OSDU Data Platform Architecture Principles & Economic Benefits",
        publisher: "The Open Group OSDU Forum",
        year: "2024",
        url: "https://osduforum.org/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Build vs Buy for Differentiating Core Operational Software",
        publisher: "MIT Sloan Management Review",
        year: "2022",
        url: "https://sloanreview.mit.edu/",
        retrievedAt: "2026-10-27",
      },
    ],
  },
};

export function getAllArticles(): AuthorityArticle[] {
  return Object.values(AUTHORITY_ARTICLES);
}

export function getArticleBySlug(slug: string): AuthorityArticle | undefined {
  return AUTHORITY_ARTICLES[slug];
}
