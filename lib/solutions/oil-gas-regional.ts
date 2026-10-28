import type { SolutionPage } from "./types";

export const OIL_GAS_REGIONAL_PAGES: SolutionPage[] = [
  {
    slug: "gcc-oil-gas-project-controls",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "GCC Oil & Gas Project Controls Software Development | Deview",
    seoDescription:
      "Capital project controls software for GCC energy megaprojects: Primavera P6 and SAP integration, earned value, work breakdowns and contractor variance tracking.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "GCC oil and gas project controls software",
    intro:
      "We engineer GCC oil and gas project controls software for national energy operators, operating joint ventures and Tier-1 EPC contractors managing multi-billion capital programmes. The platform unifies Primavera P6 scheduling baselines and SAP ERP financial ledgers with contractor field progress, change order tracking and earned value management into one governed record. You own the code and host within sovereign national infrastructure.",
    modules: [
      {
        title: "Work and cost breakdown structure alignment",
        body: "A unified enterprise hierarchy mapping Primavera P6 work breakdown structures (WBS) directly to SAP cost breakdown structures (CBS) and general ledger accounts across all active capital packages. This eliminates manual reconciliations between project engineering schedules and corporate enterprise accounting ledgers.",
      },
      {
        title: "Schedule baseline import and delta tracking",
        body: "Automated ingestion of Primavera P6 schedules with automated variance analysis against approved project baselines, critical path float monitoring, logic tie verifications, and early delay detection across simultaneous construction execution packages.",
      },
      {
        title: "Contractor progress submittals and verification",
        body: "Standardized digital progress entry for engineering, procurement, fabrication, and construction contractors with evidence attachments, drone photography, inspection sign-offs, and physical milestone verification against earned value rules of credit.",
      },
      {
        title: "Earned value management and forecasting",
        body: "Automated calculation of Planned Value (PV), Earned Value (EV), and Actual Cost (AC) yielding objective Cost Performance Index (CPI) and Schedule Performance Index (SPI) metrics, with automated Estimate at Completion (EAC) statistical forecasting.",
      },
      {
        title: "Change order workflow and contingency governance",
        body: "Formal variation request workflows capturing technical scope, cost impact, and schedule delay, with tiered approval thresholds, risk register correlation, and contingency reserve drawdown tracking across concession blocks.",
      },
      {
        title: "Joint venture cash calls and partner billing",
        body: "Multi-currency partner equity expenditure allocations, Authorization for Expenditure (AFE) tracking, and automated audit statements for concession partners, supporting diverse international joint operating agreements.",
      },
      {
        title: "Document control and transmittal management",
        body: "Controlled engineering document distribution, review cycles, and vendor drawing approvals linked directly to work breakdown packages, providing a single source of truth for technical revisions and vendor submittals.",
      },
      {
        title: "Executive portfolio dashboards",
        body: "Cross-package visibility into committed expenditure, cash burn rates, physical progress curves, and risk registers across the entire capital investment portfolio, enabling executive leadership to detect macro variances before claims arise.",
      },
    ],
    diagram: {
      title: "GCC project controls architecture",
      desc: "Reference architecture: EPC contractors, Primavera P6 and SAP ERP feed the project controls platform, outputting executive dashboards, partner cash calls and audited variance reports.",
      leftLabel: "Source systems",
      platformLabel: "Project controls core",
      rightLabel: "Governance & reporting",
      platformTitle: "GCC Project Controls Platform",
      left: [
        ["Primavera P6", "Schedule baselines", "Activity WBS codes", "Resource assignments"],
        ["SAP S/4HANA", "Purchase orders", "Service entry sheets", "Actual expenditures"],
        ["Contractors", "Daily progress reports", "Change requests", "Timesheet submittals"],
      ],
      modules: [
        ["WBS/CBS Alignment", "Unified ledger mapping"],
        ["Earned Value Engine", "CPI, SPI, EAC calculations"],
        ["Contractor Portal", "Milestone verification"],
        ["Change Order Workflow", "Contingency management"],
        ["AFE / JV Allocations", "Multi-partner cash calls"],
        ["Document Transmittals", "Engineering revision control"],
      ],
      strip: "Immutable audit trail, role-based access control and sovereign data residency",
      right: [
        ["Executive Dashboards", "Cross-package variance", "Portfolio cash burn"],
        ["Partner Statements", "AFE billing statements", "Concession audit trails"],
        ["Ministry Filings", "Statutory capital reports", "In-country value audits"],
      ],
      boundary: "Enterprise Security Boundary",
    },
    diagramCaption:
      "Reference architecture: Planning and financial systems feed into a unified project controls platform, enabling objective progress measurement and joint venture accountability.",
    standards: [
      {
        name: "ANSI/EIA-748-C",
        note: "Earned Value Management System (EVMS) standard for objective progress and cost performance measurement.",
      },
      {
        name: "ISO 21500",
        note: "Guidance on project management concepts and processes across complex capital investments.",
      },
      {
        name: "PMI PMBOK",
        note: "Project Management Institute framework for work breakdown structures and change control governance.",
      },
      {
        name: "AACE International 29R-03",
        note: "Forensic schedule analysis standard for evaluating delay claims and time extension requests.",
      },
    ],
    dataModel: [
      { entity: "Programme", holds: "Top-level capital investment envelope with strategic objectives and financial authorization." },
      { entity: "WorkPackage", holds: "Discrete scope package with assigned EPC contractor, baseline budget and schedule links." },
      { entity: "WbsNode", holds: "Hierarchical work breakdown element mapped to Primavera P6 activity and SAP cost center." },
      { entity: "ProgressSubmittal", holds: "Contractor claim of physical completion with attached evidence and verification status." },
      { entity: "ChangeRequest", holds: "Proposed scope, cost or time modification with justification and tiered approval chain." },
      { entity: "AfeRecord", holds: "Authorization for Expenditure budget, partner equity allocations and committed capital." },
      { entity: "AuditEntry", holds: "Immutable record of all baseline revisions, budget transfers, and approver identity stamps." },
    ],
    buildOptions: [
      {
        title: "When to use Primavera P6 and SAP natively",
        body: "When your capital projects are executed by a single prime contractor with simple billing structures and no requirement for multi-party subcontractor portals or bespoke JV cash calls. Standard off-the-shelf tools suffice when project organizations share single internal networks and simple organizational structures.",
      },
      {
        title: "When to build a custom project controls platform",
        body: "When managing mega-programmes with dozens of international EPC consortia, where manual spreadsheet reconciliation creates delayed variance detection and partner billing friction. Custom systems deliver tailored permission boundaries, localized contractor portals, and automated compliance with regional procurement mandates.",
      },
      {
        title: "When to adopt a hybrid extend model",
        body: "When preserving core enterprise investments in SAP S/4HANA and Primavera P6 while layering a responsive digital coordination tier for external contractor submittals, variation reviews, and multi-partner joint venture equity governance.",
      },
    ],
    security: [
      {
        title: "Sovereign on-premise deployment",
        body: "Deploys entirely inside customer-owned data centers or certified sovereign cloud VPCs (such as UAE or Saudi cloud regions) with zero external network dependencies and complete data residency.",
      },
      {
        title: "Role-based contractual boundaries",
        body: "Contractors see only their assigned work packages and commercial items, preventing cross-consortium commercial exposure while giving the operator full portfolio visibility across all active packages.",
      },
      {
        title: "Cryptographic audit logging",
        body: "Every change to project baselines, budget transfers, and progress approvals is recorded in tamper-evident audit logs for regulatory and partner audits, providing verifiable evidentiary integrity.",
      },
      {
        title: "Network zone isolation",
        body: "External contractor portals operate within a secured perimeter demilitarized zone (DMZ) with reverse proxy enforcement, protecting corporate ERP networks from untrusted contractor endpoints.",
      },
    ],
    phases: [
      {
        title: "Data and WBS structure harmonization",
        body: "Reviewing existing Primavera P6 EPS and WBS hierarchies, SAP cost centers, and contractor reporting templates to establish unified data models, rules of credit, and baseline change policies.",
      },
      {
        title: "Integration and contractor portal pilot",
        body: "Deploying automated connectors to Primavera P6 and SAP ERP alongside the digital submittal portal for a designated major capital package, proving real-time progress validation.",
      },
      {
        title: "Earned value and AFE engine deployment",
        body: "Configuring automated CPI and SPI calculation rules, change order approval thresholds, and joint venture partner cash-call ledgers with automated variance notifications.",
      },
      {
        title: "Portfolio rollout and sovereign handover",
        body: "Expanding across all active capital packages with executive dashboarding, contractor onboarding, and complete technical source code handover to the internal IT engineering group.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Middle East regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "How does the system synchronize with Primavera P6 schedules?",
        a: "We integrate directly with Primavera P6 EPPM through standard APIs, importing baseline dates, current activity schedules, and resource allocations without requiring manual XER export and import routines.",
      },
      {
        q: "Can the platform handle multi-currency joint venture cash calls?",
        a: "Yes. Our AFE module manages multi-currency ledgers across international and regional contract currencies, calculating partner equity cash calls and tracking realized exchange rate variances against general ledgers.",
      },
      {
        q: "How are contractor change orders evaluated?",
        a: "Change requests capture technical justifications, direct cost estimates, schedule float impacts, and associated risks, routing automatically through tiered governance authorities for operator review and approval.",
      },
      {
        q: "Where is the platform hosted?",
        a: "The entire application and database stack can be installed on-premise in the operator's primary data center or within sovereign domestic cloud environments, satisfying UAE DESC and Saudi NDMO data residency requirements.",
      },
      {
        q: "What training and handover is provided for internal project controls teams?",
        a: "We deliver full architectural documentation, administrator training, and hands-on workshops for project controllers and schedulers, ensuring your internal team operates and maintains the software independently.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Middle East contractor portals", href: "/solutions/middle-east-oil-gas-contractor-portals" },
      { label: "Sovereign industrial AI for GCC energy", href: "/solutions/sovereign-industrial-ai-gcc-energy" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "middle-east-oil-gas-contractor-portals",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Middle East Oil & Gas Contractor Portal Development | Deview",
    seoDescription:
      "Contractor collaboration portals for Middle East oil and gas operators: digital submittals, progress billings, ICV compliance and HSE audits.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Middle East oil and gas contractor portal",
    intro:
      "We design Middle East oil and gas contractor portal solutions for national oil companies, regional operators and prime EPC contractors. The platform replaces fragmented email chains and disconnected spreadsheets with permission-scoped digital submittals, daily progress validation, safety permits and statutory In-Country Value compliance tracking. You own the platform and retain sovereign data control.",
    modules: [
      {
        title: "Vendor prequalification and onboarding",
        body: "Digital intake of trade licenses, quality certifications, commercial registrations, and cybersecurity compliance verifications with automated expiration alerts and verification status tracking.",
      },
      {
        title: "Daily progress and timesheet submittals",
        body: "Structured digital entry for contractor daily reports, certified craft labor hours, equipment utilization logs, consumable material tracking, and shift supervisory sign-offs.",
      },
      {
        title: "Milestone inspection and verification",
        body: "Workflow linking contractor completion claims to operator inspection sign-offs, non-destructive testing records, drone photographs, and physical milestone acceptance.",
      },
      {
        title: "Progress billing and service entry sheets",
        body: "Automated generation of draft Service Entry Sheets (SES) validated against contract rates and verified field progress before submission to operator enterprise ERP systems.",
      },
      {
        title: "In-Country Value (ICV) audit tracking",
        body: "Dedicated compliance tracking for local workforce employment, domestic subcontracting spend, national technical training hours, and supplier scorecard generation.",
      },
      {
        title: "Digital permit to work and HSE logging",
        body: "Standardized contractor safety submittals including tool-box talk records, incident notifications, environmental disclosures, hot-work permits, and safety observation records.",
      },
      {
        title: "Contract variance and claims management",
        body: "Formalized submission of contractor variation requests, claims notices, and supporting documentation with transparent audit status and contractual notification tracking.",
      },
      {
        title: "Multi-language user experience",
        body: "Bilingual interface supporting English and right-to-left Arabic across all contractor forms, submittal tables, validation dialogues, and generated executive documentation.",
      },
    ],
    diagram: {
      title: "Contractor collaboration architecture",
      desc: "Reference architecture: Multi-tier engineering contractors submit progress, billings and safety records into a secure portal, validating data into operator ERP and project controls.",
      leftLabel: "Contractor ecosystem",
      platformLabel: "Contractor portal platform",
      rightLabel: "Operator core systems",
      platformTitle: "Middle East Contractor Portal",
      left: [
        ["EPC Prime", "Engineering deliverables", "Milestone billings", "Variation claims"],
        ["Specialist Subs", "Daily crew timesheets", "Equipment hours", "HSE incident logs"],
        ["Suppliers", "Material delivery notes", "Quality test certs", "ICV audit proof"],
      ],
      modules: [
        ["Vendor Prequalification", "License & compliance tracking"],
        ["Daily Progress Validation", "Labor & equipment verification"],
        ["Milestone QA/QC", "Inspection sign-off workflows"],
        ["SES Billing Validation", "Contract rate reconciliation"],
        ["ICV / Local Content", "Workforce nationalization"],
        ["HSE & Permit Logging", "Safety audit management"],
      ],
      strip: "Secure perimeter, role-based sub-tenant isolation and bilingual Arabic/English engine",
      right: [
        ["SAP S/4HANA", "Purchase orders", "SES approval", "Payment release"],
        ["Project Controls", "Earned value progress", "WBS update"],
        ["Auditing & Legal", "Contractor performance", "Claims defense records"],
      ],
      boundary: "Operator DMZ Boundary",
    },
    diagramCaption:
      "Reference architecture: The portal provides a secure, permission-scoped gateway for external contractors while protecting core operator networks.",
    standards: [
      {
        name: "ISO 9001",
        note: "Quality management systems standard for supplier process verification and documentation control.",
      },
      {
        name: "IEC 62443",
        note: "Industrial cybersecurity standard ensuring secure external contractor access into enterprise networks.",
      },
      {
        name: "UAE ICV / Saudi IKTVA",
        note: "National in-country value frameworks for domestic supply chain development.",
      },
      {
        name: "FIDIC / EPC Model Contracts",
        note: "Standard contractual frameworks for variation procedures and claims notification administration.",
      },
    ],
    dataModel: [
      { entity: "ContractorEntity", holds: "Commercial profile, registration certificates, ICV rating and verified points of contact." },
      { entity: "ContractPackage", holds: "Contract scope, assigned WBS codes, approved rate schedules and commercial ceiling values." },
      { entity: "DailyReport", holds: "Contractor daily labor counts, equipment hours, installed quantities and weather conditions." },
      { entity: "ServiceEntryDraft", holds: "Calculated billing draft based on verified progress against contract rate tables." },
      { entity: "HseIncidentLog", holds: "Safety submittals, near-miss notifications and permit-to-work compliance records." },
      { entity: "VariationNotice", holds: "Contractor notice of claim or variation with cost estimate and schedule impact." },
      { entity: "VendorPrequalification", holds: "Audited trade licenses, safety certificates, and quality accreditations with expiration tracking." },
    ],
    buildOptions: [
      {
        title: "When to use standard supplier portals",
        body: "When your procurement needs are limited to basic catalog purchasing and purchase order acknowledgments without complex multi-tier construction milestone verification. Generic supplier tools work when transactions are purely commercial without engineering deliverables.",
      },
      {
        title: "When to build a bespoke contractor portal",
        body: "When operating in the Middle East where complex EPC packages, multi-contractor interface risks, and strict national value scoring demand tailored digital workflows. Custom engineering enables integration with Primavera P6, SAP, and national procurement certification frameworks.",
      },
      {
        title: "When to integrate with existing ERP frontends",
        body: "When your primary goal is reducing manual data entry for accounts payable, but field engineering teams still require specialized tools for daily site progress and safety permits.",
      },
    ],
    security: [
      {
        title: "Isolated DMZ deployment",
        body: "The contractor portal operates in an isolated network DMZ, ensuring external vendors never access internal operator corporate or SCADA networks, maintaining complete network segmentation.",
      },
      {
        title: "Multi-factor authentication & IP whitelisting",
        body: "Mandatory corporate MFA and optional contractor IP whitelisting protecting against unauthorized submittal access and credential compromise across diverse contractor organizations.",
      },
      {
        title: "Encrypted document storage",
        body: "All uploaded engineering drawings, certified payroll records, and commercial documents are encrypted at rest using customer-held encryption keys inside sovereign storage.",
      },
      {
        title: "Granular access segregation",
        body: "Contractor accounts are restricted strictly to their assigned contractual work packages, preventing lateral visibility into competitor pricing, schedules, or staffing data.",
      },
    ],
    phases: [
      {
        title: "Contractor workflow and rate harmonization",
        body: "Reviewing standard EPC contract formats, service entry processes, and ICV verification requirements to define standardized submittal structures.",
      },
      {
        title: "Portal prototype and pilot deployment",
        body: "Configuring the secure DMZ portal instance and onboarding a cohort of pilot contractors on a designated capital project to test daily progress entries.",
      },
      {
        title: "ERP integration and automated validation",
        body: "Connecting the portal to SAP S/4HANA for automated purchase order validation, service entry sheet creation, and payment milestone matching.",
      },
      {
        title: "Enterprise rollout and training",
        body: "Expanding across all operating assets with bilingual English and Arabic contractor onboarding sessions and complete administrative handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Middle East regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "How does the portal prevent contractors from viewing competitor data?",
        a: "Our multi-tenant architecture implements strict data scoping. Each contractor user is restricted to contracts and packages explicitly assigned to their organization, preventing any lateral visibility.",
      },
      {
        q: "Can the system generate Service Entry Sheets in SAP automatically?",
        a: "Yes. Once an operator field engineer approves a contractor progress claim in the portal, the system triggers an API call creating a pre-validated Service Entry Sheet in SAP.",
      },
      {
        q: "How does the portal support In-Country Value (ICV) reporting?",
        a: "The portal tracks contractor workforce nationalization percentages, local procurement invoices, and training logs, generating audit-ready reports aligned with UAE ICV and Saudi IKTVA frameworks.",
      },
      {
        q: "Is Arabic language supported for local subcontractors?",
        a: "Yes. The interface features complete bilingual support in English and Arabic with native right-to-left layout rendering.",
      },
      {
        q: "How are contractor document submittals tracked for revisions?",
        a: "The portal maintains an automated transmittal register tracking drawing revisions, review comments, and approval codes (such as Code 1 Approved, Code 2 Approved with Comments).",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "GCC oil and gas project controls", href: "/solutions/gcc-oil-gas-project-controls" },
      { label: "Sovereign industrial AI for GCC energy", href: "/solutions/sovereign-industrial-ai-gcc-energy" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "sovereign-industrial-ai-gcc-energy",
    vertical: "oil-gas",
    serviceId: "custom-ai",
    seoTitle: "Sovereign Industrial AI for GCC Energy Operators | Deview",
    seoDescription:
      "Air-gapped industrial AI and private LLMs for GCC energy operators: ADNOC and Aramco compliance, drilling RAG, procedure search and data sovereignty.",
    kicker: "Custom AI · Oil and gas",
    h1: "Sovereign industrial AI for GCC energy",
    intro:
      "We build sovereign industrial AI for GCC energy operators, national oil companies and joint ventures requiring advanced artificial intelligence without compromising data residency. Our architectures deploy enterprise foundation models and retrieval-augmented generation (RAG) completely inside private, air-gapped on-premise clusters or certified in-country sovereign clouds. Your proprietary reservoir studies, daily drilling logs, operational manuals and concession agreements remain under sovereign national control.",
    modules: [
      {
        title: "Air-gapped foundation model deployment",
        body: "Quantized deployment of high-capability open-weights models on local on-premise GPU clusters with zero outbound connections to foreign cloud APIs, ensuring zero risk of extraterritorial intellectual property exposure.",
      },
      {
        title: "Private technical knowledge retrieval (RAG)",
        body: "Vectorization and hybrid keyword retrieval across decades of proprietary drilling logs, engineering standards (SAES and DEP), equipment manuals, operating procedures, and maintenance records.",
      },
      {
        title: "Daily drilling report extraction and summarization",
        body: "Automated ingestion and entity extraction from daily drilling reports (DDR), mud logging sheets, and well intervention tickets, surfacing drilling hazards, lost circulation events, and offset well performance.",
      },
      {
        title: "Standard operating procedure conversational assistant",
        body: "Natural language query engine providing field operators with cited, step-by-step operating procedures, safety guidelines, and valve alignment sequences during critical field interventions.",
      },
      {
        title: "Subsea and equipment maintenance troubleshooting",
        body: "Correlating real-time alarm codes with historical failure analysis reports and equipment vendor service bulletins to accelerate field troubleshooting and reduce unplanned downtime.",
      },
      {
        title: "Multi-lingual Arabic-English technical translation",
        body: "Domain-specific translation models trained on petroleum energy terminology for technical engineering reports, safety directives, operating manuals, and regulatory correspondence.",
      },
      {
        title: "Strict source citation and hallucination guardrails",
        body: "Deterministic citation verification ensuring every AI-generated response links directly to specific pages, paragraphs, and engineering drawing numbers with verified mathematical confidence.",
      },
      {
        title: "Role-based data classification masking",
        body: "Automated redaction and entitlement filtering ensuring users only query technical documents matching their contractual security clearance and concession ownership.",
      },
    ],
    diagram: {
      title: "Sovereign industrial AI architecture",
      desc: "Reference architecture: Proprietary engineering documentation is ingested, vectorized and served by local LLM clusters inside an air-gapped sovereign boundary.",
      leftLabel: "Data sources",
      platformLabel: "Sovereign AI core",
      rightLabel: "Operator applications",
      platformTitle: "Sovereign Industrial AI Platform",
      left: [
        ["Drilling Archives", "Daily drilling reports", "Well history files", "Mud logs"],
        ["Engineering Standards", "Aramco SAES", "ADNOC technical codes", "P&ID diagrams"],
        ["Maintenance Records", "SAP PM work history", "Failure analysis reports", "OEM manuals"],
      ],
      modules: [
        ["Document Ingestion", "OCR & layout parsing"],
        ["Private Vector DB", "In-memory embeddings"],
        ["Local LLM Cluster", "Air-gapped inference engine"],
        ["Hallucination Filter", "Mandatory citation check"],
        ["Data Entitlement", "Security classification mask"],
        ["Domain Glossary", "Petroleum technical ontology"],
      ],
      strip: "Zero external network calls, in-country GPU execution and comprehensive query audit logs",
      right: [
        ["Drilling Engineers", "Offset well analysis", "Hazard anticipation"],
        ["Maintenance Teams", "Procedure assistance", "Failure troubleshooting"],
        ["Operations Center", "Real-time query agent", "Executive summaries"],
      ],
      boundary: "Air-Gapped Sovereign Boundary",
    },
    diagramCaption:
      "Reference architecture: All model inference and document embeddings execute within the client's sovereign data center boundary with zero external telemetry.",
    standards: [
      {
        name: "Saudi NDMO",
        note: "National Data Management Office data sovereignty and security classification framework.",
      },
      {
        name: "UAE NCSC / DESC",
        note: "Cybersecurity Council guidelines on cloud data residency and critical infrastructure protection.",
      },
      {
        name: "NIST SP 800-53",
        note: "Security and privacy controls for federal information systems and organizations.",
      },
      {
        name: "ISO/IEC 42001",
        note: "Artificial intelligence management system standard for responsible, audited enterprise deployments.",
      },
    ],
    dataModel: [
      { entity: "TechnicalDocument", holds: "Document metadata, security classification, source repository and revision history." },
      { entity: "DocumentChunk", holds: "Text fragment, vector embedding, structural hierarchy path and page reference." },
      { entity: "InferenceSession", holds: "User query, retrieved context chunks, generated output and full audit timestamps." },
      { entity: "CitationRecord", holds: "Deterministic link between generated sentence and verified source document coordinate." },
      { entity: "UserClearance", holds: "User identity, security classification level and assigned asset entitlement boundaries." },
      { entity: "ModelAuditLog", holds: "Telemetry on model latency, token counts, and hallucination guardrail rejections." },
      { entity: "KnowledgeCollection", holds: "Document domain corpus, ingestion pipeline state, and vector index version." },
    ],
    buildOptions: [
      {
        title: "When to use commercial cloud AI services",
        body: "For non-confidential public marketing materials or general administrative tasks where data sovereignty and critical energy infrastructure security regulations do not apply. Commercial APIs offer convenience for generic tasks without proprietary sensitivity.",
      },
      {
        title: "When to build private sovereign industrial AI",
        body: "When processing proprietary subsurface surveys, confidential joint venture agreements, and critical production telemetry that cannot legally or strategically leave your jurisdiction. Private models protect intellectual property while adhering to national cybersecurity mandates.",
      },
      {
        title: "When to deploy hybrid sovereign edge models",
        body: "When remote operational centers require offline conversational intelligence during telecommunications outages, synchronizing updated document indexes when high-bandwidth links are available.",
      },
    ],
    security: [
      {
        title: "Complete air-gap execution",
        body: "The model runs on dedicated local GPU servers (NVIDIA H100 or A100) with disabled outbound networking, completely eliminating data leakage risks and foreign cloud dependencies.",
      },
      {
        title: "Deterministic source attribution",
        body: "Responses that cannot be attributed with high mathematical confidence to verified internal documents are blocked by validation filters, providing strict citation guardrails and uncertainty fallbacks in engineering workflows.",
      },
      {
        title: "Immutable prompt and query logging",
        body: "Every user query and system response is recorded in secure, tamper-evident logs for security compliance audits, user accountability, and system performance evaluations.",
      },
      {
        title: "Dynamic PII and concession data redaction",
        body: "Automated privacy filters mask sensitive commercial figures, personal identifiers, and restricted concession parameters based on the querying user's security clearance.",
      },
    ],
    phases: [
      {
        title: "Use case and data classification assessment",
        body: "Reviewing proprietary document repositories, security classification guidelines, and GPU hardware availability to establish ingestion priorities and safety guardrails.",
      },
      {
        title: "Air-gapped cluster deployment",
        body: "Installing containerized local LLM inference engines and private vector databases on sovereign hardware with comprehensive security penetration verification.",
      },
      {
        title: "Document ingestion and fine-tuning",
        body: "Parsing technical archives, generating private embeddings, and validating citation accuracy across domain test sets with petroleum engineering experts.",
      },
      {
        title: "Production rollout and access control",
        body: "Connecting the assistant to enterprise identity providers with role-based access control, comprehensive user workshops, and full operational handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Middle East regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "Does the AI communicate with OpenAI, Google, or any external API?",
        a: "No. The system runs self-contained open-weights models entirely on your private hardware or sovereign cloud tenant, with zero outbound internet communication.",
      },
      {
        q: "How does the system mitigate AI hallucinations in critical engineering procedures?",
        a: "We enforce strict retrieval-augmented generation (RAG) constraints. The model is instructed to answer solely using retrieved internal documents and must provide verifiable citations for every statement.",
      },
      {
        q: "What hardware is required for on-premise deployment?",
        a: "Depending on user concurrency, deployments range from a single workstation with dual enterprise GPUs for small teams to a multi-node GPU cluster for enterprise-wide deployments.",
      },
      {
        q: "Can the system ingest scanned legacy PDF documents and engineering drawings?",
        a: "Yes. Our ingestion pipeline incorporates advanced OCR and layout parsing specifically tuned for technical blueprints, tables, and scanned historical drilling logs.",
      },
      {
        q: "How are updates to engineering standards reflected in the AI model?",
        a: "Our document indexing pipeline is continuous. When a new standard or revision is uploaded, it is parsed and indexed immediately, superceding older versions based on effective dates.",
      },
    ],
    assetId: "enterprise-ai-readiness",
    related: [
      { label: "GCC oil and gas project controls", href: "/solutions/gcc-oil-gas-project-controls" },
      { label: "Middle East contractor portals", href: "/solutions/middle-east-oil-gas-contractor-portals" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "africa-oil-gas-jv-afe-management",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Africa Oil & Gas JV & AFE Management Software | Deview",
    seoDescription:
      "Joint venture accounting, AFE workflows and cash-call software for African E&P operators: multi-currency ledgers, partner approvals and audit trails.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Africa oil and gas JV and AFE management",
    intro:
      "We develop Africa oil and gas JV and AFE management software for upstream operators, national petroleum corporations and international joint venture partners across West and Central Africa. The platform governs the complete joint venture lifecycle: Authorization for Expenditure (AFE) creation, partner voting, multi-currency cash calls, billing statements and expenditure tracking. You own the code and maintain audit transparency.",
    modules: [
      {
        title: "Joint venture concession and interest registry",
        body: "A governed register of operating agreements, participating interests, carried interests, and effective dates across all active concession blocks and joint operating ventures.",
      },
      {
        title: "Authorization for Expenditure (AFE) workflow",
        body: "Multi-tier AFE drafting, engineering budget estimation, supplemental AFE processing, and formal partner ballot voting workflows with automated audit timestamping.",
      },
      {
        title: "Multi-currency cash call management",
        body: "Automated generation and distribution of periodic cash calls in contractual currencies and domestic legal tender, with automated exchange rate revaluation.",
      },
      {
        title: "Joint interest billing (JIB) and cost allocation",
        body: "Allocating operational and capital expenditures from the general ledger to joint venture partners based on agreed equity formulas and overhead accounting procedures.",
      },
      {
        title: "Production Sharing Contract (PSC) cost recovery",
        body: "Automating cost oil, profit oil, royalty, and tax calculations compliant with national petroleum fiscal regimes (such as Nigeria PIA or Angola ANPG frameworks).",
      },
      {
        title: "Partner dispute and query resolution",
        body: "Collaborative portal for non-operating partners to submit expenditure audit queries, track voucher evidence, and resolve commercial disputes transparently.",
      },
      {
        title: "Expenditure ceiling and variance alerts",
        body: "Automated threshold alerts when actual expenditures approach approved AFE budgets, prompting required partner supplemental authorizations before overruns occur.",
      },
      {
        title: "Statutory audit trail and reporting",
        body: "Exporting auditable partner billing statements, expenditure summaries, and regulatory filings formatted for national oil authorities and revenue agencies.",
      },
    ],
    diagram: {
      title: "Joint venture accounting architecture",
      desc: "Reference architecture: Operator ERP general ledgers feed the JV engine, generating partner cash calls, AFE ballots and statutory cost-recovery statements.",
      leftLabel: "Operator ledgers",
      platformLabel: "JV & AFE core",
      rightLabel: "Partner & regulator portal",
      platformTitle: "African JV & AFE Platform",
      left: [
        ["Operator ERP", "Actual costs", "Vouchers & invoices", "General ledger accounts"],
        ["Petroleum Engineering", "Well drilling budgets", "Facility cost models", "AFE scope documents"],
        ["Central Bank FX", "Daily exchange rates", "Central bank rate feeds", "Currency valuations"],
      ],
      modules: [
        ["Concession Register", "Equity & carried interests"],
        ["AFE Ballot Engine", "Tiered voting workflows"],
        ["Cash Call Generator", "Multi-currency calls"],
        ["JIB Allocation Matrix", "Equity cost distribution"],
        ["PSC Cost Recovery", "Cost oil / profit oil splits"],
        ["Audit Query Tracker", "Voucher evidence management"],
      ],
      strip: "Multi-currency ledgers, immutable approval logs and partner access segregation",
      right: [
        ["Operating Partners", "Cash call payments", "AFE voting approvals"],
        ["National Oil Co (NOC)", "State equity tracking", "Royalty verification"],
        ["Revenue Authority", "Petroleum tax compliance", "Cost recovery audits"],
      ],
      boundary: "Commercial Governance Boundary",
    },
    diagramCaption:
      "Reference architecture: Unifying operator expenditures with contractual joint operating agreement rules for auditable multi-partner cost allocations.",
    standards: [
      {
        name: "COPAS",
        note: "Council of Petroleum Accountants Societies guidelines for joint interest billing and expenditure allocations.",
      },
      {
        name: "AIPN / AIEN",
        note: "Association of International Energy Negotiators model joint operating agreement frameworks.",
      },
      {
        name: "Nigeria PIA / Angola ANPG",
        note: "National regulatory frameworks governing petroleum fiscal terms and upstream concession accounting.",
      },
      {
        name: "IFRS 11",
        note: "International Financial Reporting Standard for joint arrangements and proportional interest accounting.",
      },
    ],
    dataModel: [
      { entity: "ConcessionVenture", holds: "Concession title, block name, operator designation and joint operating agreement terms." },
      { entity: "PartnerInterest", holds: "Partner commercial entity, equity percentage, carried interest terms and billing address." },
      { entity: "AfeDocument", holds: "AFE number, title, budget category, authorized amount, supplements and voting deadline." },
      { entity: "CashCallStatement", holds: "Billing cycle, venture reference, partner share, billed currency and settlement status." },
      { entity: "JointInterestBill", holds: "Detailed expenditure voucher lines, cost center mappings and partner entitlement." },
      { entity: "AuditQuery", holds: "Partner objection or voucher clarification request with status and resolution history." },
      { entity: "PscRecoveryLedger", holds: "Accumulated cost oil pool, amortization schedules, and profit oil split percentages." },
    ],
    buildOptions: [
      {
        title: "When to use standard ERP joint venture modules",
        body: "When operating simple onshore licenses with standard commercial terms, single-currency billing and standard SAP or Oracle configurations. Standard ERP modules work well when partner equity structures remain fixed and fiscal rules follow simple royalty models.",
      },
      {
        title: "When to build a dedicated JV and AFE platform",
        body: "When operating in African jurisdictions with complex PSC cost recovery, dual-currency cash calls, frequent audit reconciliations and carried interest structures. A dedicated platform eliminates dispute cycles and automates compliance with local petroleum authorities.",
      },
      {
        title: "When to integrate with existing corporate ledgers",
        body: "When retaining your primary general ledger in SAP or Oracle while deploying a specialized collaborative portal for non-operating partners, concession audits, and automated AFE voting.",
      },
    ],
    security: [
      {
        title: "Partner commercial isolation",
        body: "Non-operating partners have permission-scoped access to review only their venture's ledgers and supporting vouchers, enforcing strict confidentiality across non-affiliated blocks.",
      },
      {
        title: "Immutable voting and approval records",
        body: "All AFE votes, ballot submissions and approval signatures are cryptographically timestamped and archived for statutory audits, preventing retrospective disputes.",
      },
      {
        title: "Secure voucher evidence vault",
        body: "Invoices, timesheets and contractor service tickets are archived in a secure, tamper-evident document vault with full document-level encryption.",
      },
      {
        title: "Audit trail transparency",
        body: "Every adjustment to cost allocations, journal reclassifications, or exchange rate calculations generates an unalterable audit log entry.",
      },
    ],
    phases: [
      {
        title: "Joint operating agreement rules modeling",
        body: "Analyzing joint operating agreements, accounting procedures and PSC fiscal terms to codify cost allocation algorithms, voting thresholds, and currency rules.",
      },
      {
        title: "ERP connector and AFE engine deployment",
        body: "Connecting the platform to operator financial ledgers and deploying digital AFE ballot workflows for a designated pilot exploration or production block.",
      },
      {
        title: "Cash call and JIB module activation",
        body: "Automating periodic multi-currency cash call generation, foreign exchange revaluation, and partner voucher drill-downs with automated dispute tracking.",
      },
      {
        title: "Enterprise rollout and partner onboarding",
        body: "Expanding across all operating blocks with training for operator finance teams and joint venture partner representatives, followed by technical handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "West Africa regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "Can the software handle dual-currency cash calls in multiple currencies?",
        a: "Yes. Our cash call engine generates dual-currency billings across contract currencies and domestic legal tender, applying official central bank exchange rate formulas.",
      },
      {
        q: "How does the system handle supplemental AFEs?",
        a: "When actual expenditures approach an approved AFE ceiling (such as a 90% threshold), the system alerts the asset manager and drafts a supplemental AFE for partner voting.",
      },
      {
        q: "Can non-operating partners view the invoices supporting joint interest billings?",
        a: "Yes. The partner portal allows authorized non-operators to drill down from high-level JIB summary lines into scanned third-party contractor invoices and service entry sheets.",
      },
      {
        q: "How does the platform support statutory cost recovery audits?",
        a: "The system models qualifying petroleum cost rules, automatically segregating cost-recoverable operating expenditures from non-recoverable overheads for annual regulatory audits.",
      },
      {
        q: "How are carried partner interests accounted for?",
        a: "Our interest register explicitly tracks carried interest terms, calculating capital carried by operating partners and applying repayment deductions against future entitlement barrels.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
      { label: "Offline oilfield operations software", href: "/solutions/offline-oilfield-operations-software" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "africa-upstream-production-reporting",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Africa Upstream Production Reporting Software | Deview",
    seoDescription:
      "Daily upstream production reporting and hydrocarbon accounting for African E&P operators: well tests, allocation, deferments and regulatory filings.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Africa upstream production reporting software",
    intro:
      "We build Africa upstream production reporting software for exploration and production operators, national petroleum agencies and joint ventures. The platform automates daily field production capture, well test validation, hydrocarbon allocation, loss deferment accounting and official regulatory reporting. Operating across onshore swamp stations and deepwater FPSOs, the platform interfaces with field SCADA historians through a secure one-way link while supporting resilient offline data entry.",
    modules: [
      {
        title: "Asset and wellbore master hierarchy",
        body: "A governed entity hierarchy from basin and concession block to field, platform, well, completion string, test separator and custody transfer meter, ensuring complete structural continuity as field assets expand.",
      },
      {
        title: "Automated telemetry ingestion & one-way SCADA link",
        body: "Ingesting flow computer, wellhead pressure, and tank gauging readings through a secure unidirectional link that never touches operational control loops or Level 1 and 2 safety instrumented systems.",
      },
      {
        title: "Daily field production log capture",
        body: "Standardized digital capture of gross fluids, net oil, associated gas, water cut, tubing head pressure, and artificial lift parameters across remote flow stations and offshore production facilities.",
      },
      {
        title: "Well test validation and back-allocation",
        body: "Validating test separator data, calculating well test rate curves, and back-allocating terminal export volumes to individual producing wells with full reconciliation transparency.",
      },
      {
        title: "Downtime and loss deferment accounting",
        body: "Categorizing planned and unplanned deferments by root cause (mechanical failure, power outage, pipeline sabotage, third-party shutdown), linking losses directly to asset downtime events.",
      },
      {
        title: "Flaring and emissions tracking",
        body: "Accounting for fuel gas, flare volumes, gas reinjection, and vented volumes aligned with World Bank zero-routine-flaring guidelines and national environmental standards.",
      },
      {
        title: "Immutable approvals and restatement ledgers",
        body: "Multi-level operational review and sign-off workflows with version-controlled historical restatements preserving original entries for regulatory and commercial audit integrity.",
      },
      {
        title: "National regulatory filing generators",
        body: "Automated generation of daily, periodic, and annual production filings compliant with national petroleum regulators (such as NUPRC, ANPG, DGH) without manual spreadsheet reformatting.",
      },
    ],
    diagram: "upstream-production",
    diagramCaption:
      "Reference architecture: Field measurement sources flow one way into the production reporting platform; validated reports flow out to management, partners and regulators.",
    standards: [
      {
        name: "PRODML",
        note: "Energistics standard for exchanging upstream production, well test and operational telemetry.",
      },
      {
        name: "API MPMS",
        note: "Manual of Petroleum Measurement Standards for custody transfer, tank gauging and fluid sampling.",
      },
      {
        name: "IEC 62443",
        note: "Industrial cybersecurity standard ensuring secure unidirectional separation between field SCADA and corporate IT.",
      },
      {
        name: "ISO 14224",
        note: "Collection and exchange of reliability and maintenance data for equipment in petroleum industries.",
      },
    ],
    dataModel: [
      { entity: "FieldAsset", holds: "Facility name, geographic coordinates, operating entity and associated flow lines." },
      { entity: "WellCompletion", holds: "Well name, completion string, perforation intervals, reservoir layer and artificial lift type." },
      { entity: "DailyProductionRecord", holds: "Date, gross liquid, net oil, gas volume, water cut, gas-oil ratio and lock status." },
      { entity: "WellTestEvent", holds: "Test separator duration, oil rate, gas rate, water rate, choke size and quality validation." },
      { entity: "DefermentEvent", holds: "Start time, end time, deferred volume, affected wells, primary root cause and responsible discipline." },
      { entity: "CustodyTransferReceipt", holds: "Meter ticket, gross barrels, BS&W percentage, API gravity and offloaded tanker reference." },
      { entity: "ProductionRestatement", holds: "Prior reported volume, restated figure, engineering justification, and approval timestamp." },
    ],
    buildOptions: [
      {
        title: "When to use basic spreadsheet logging",
        body: "When operating a single shallow well with no joint-venture partners, no artificial lift, and manual trucked offloading. Basic spreadsheets can suffice when regulatory reporting is minimal and custody transfers are simple.",
      },
      {
        title: "When to build a dedicated production reporting platform",
        body: "When operating multi-well fields, swamp flow stations or offshore FPSO vessels where equity partner scrutiny, loss deferments and statutory filings demand governed data. Custom software ensures data integrity, automated allocation, and secure SCADA isolation.",
      },
      {
        title: "When to integrate with existing enterprise historians",
        body: "When your facility already utilizes OSIsoft PI or AspenTech IP.21 historians, layering the production reporting engine on top of historical time-series data to provide business context, well allocation, and management reporting.",
      },
    ],
    security: [
      {
        title: "Unidirectional data diode integration",
        body: "Field SCADA and historian data are ingested across a unidirectional network diode, physically preventing outbound write access into industrial control systems and supporting process safety compliance.",
      },
      {
        title: "Encrypted offline local storage",
        body: "When field operators input data offline, records are stored in encrypted local databases until authenticated network synchronization occurs with the central enterprise hub.",
      },
      {
        title: "Versioned restatement audit log",
        body: "Any retrospective alteration to historical production volumes requires documented engineering justification and preserves the prior baseline for complete regulatory transparency.",
      },
      {
        title: "Role-based sign-off governance",
        body: "Formal segregation of duties between field data entry operators, production engineers, and asset managers approving daily production volumes.",
      },
    ],
    phases: [
      {
        title: "Field instrumentation and metering audit",
        body: "Surveying wellhead instrumentation, flow computers, test separator setups, and existing reporting templates to establish baseline data quality and allocation rules.",
      },
      {
        title: "One-way historian ingestion and pilot deployment",
        body: "Deploying the production reporting database and one-way SCADA ingestion for a pilot gathering station or offshore platform, verifying automated telemetry ingestion.",
      },
      {
        title: "Allocation engine and deferment configuration",
        body: "Calibrating well test validation rules, back-allocation formulas, and loss deferment taxonomies against commercial joint venture agreements and regulatory guidelines.",
      },
      {
        title: "Fleet-wide rollout and regulatory integration",
        body: "Expanding across all operating concessions with automated regulatory export generation, comprehensive operator training, and complete system handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "West Africa regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "How does the system ensure field SCADA security?",
        a: "We implement an architectural one-way boundary compliant with IEC 62443. The production software consumes operational readings via unidirectional diodes or read-only database replicas, completely preventing any command injection into Level 1 or Level 2 control systems.",
      },
      {
        q: "What allocation methods are supported for shared gathering lines?",
        a: "The platform supports multiple standard petroleum allocation algorithms, including well-test rate proportional allocation, theoretical production back-allocation, and choke-model estimations, with side-by-side reconciliation against fiscal custody meters.",
      },
      {
        q: "Can the platform generate statutory reports for African regulators?",
        a: "Yes. Our export module generates pre-formatted regulatory submissions aligned with the requirements of the Nigerian Upstream Petroleum Regulatory Commission (NUPRC), Angola's ANPG, and Gabon's DGH.",
      },
      {
        q: "How does the system handle production loss deferments?",
        a: "Deferments are calculated against well potential and categorized by root cause (e.g., surface equipment failure, electrical tripping, pipeline outage, planned maintenance), providing management with actionable loss metrics.",
      },
      {
        q: "Can the platform reconcile marine crude tanker offloadings?",
        a: "Yes. The platform records custody transfer bill of lading volumes, BSW laboratory assays, meter proving factors, and generates formal offloading certificates for partners and customs authorities.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Africa oil and gas JV and AFE management", href: "/solutions/africa-oil-gas-jv-afe-management" },
      { label: "Offline oilfield operations software", href: "/solutions/offline-oilfield-operations-software" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "offline-oilfield-operations-software",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Offline Oilfield Operations Software Development | Deview",
    seoDescription:
      "Offline-first software for remote oilfield operations: edge database sync, conflict-free data replication, and disconnected mobile field inspections.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Offline oilfield operations software",
    intro:
      "We develop offline oilfield operations software engineered for remote upstream environments with intermittent, high-latency or non-existent telecommunications. The system provides local edge runtime databases on ruggedized tablets, flow station workstations and offshore vessels, enabling field engineers to log production, record safety inspections and execute maintenance work orders without active internet connectivity. Changes synchronize automatically and conflict-free upon network restoration.",
    modules: [
      {
        title: "Offline-first edge database runtime",
        body: "Local lightweight SQLite or embedded database engines operating independently on client workstations, tablets, and local edge gateway appliances with zero reliance on cloud availability.",
      },
      {
        title: "Conflict-free delta synchronization (CRDT)",
        body: "Mathematical conflict-free replicated data types ensuring that multiple field technicians updating asset states in the field merge cleanly without overwriting records or losing operational data.",
      },
      {
        title: "Disconnected mobile inspection checklists",
        body: "Rich mobile forms for wellhead inspections, valve greasing, wall thickness measurements, and safety audits with offline photo capture, geolocation stamping, and markup tools.",
      },
      {
        title: "Local telemetry buffering and edge analytics",
        body: "Buffering high-frequency Modbus, OPC UA, and serial sensor data locally during satellite outages, preventing data loss across remote wellheads and isolated flow stations.",
      },
      {
        title: "Bandwidth-optimized burst replication",
        body: "Compressing and prioritizing pending data sync queues over satellite (VSAT/Starlink) or cellular links, transmitting critical production alarms and safety events before routine operational logs.",
      },
      {
        title: "Cryptographic local record tamper-proofing",
        body: "Signing local inspection logs and well test records with device-level cryptographic certificates to verify data integrity, non-repudiation, and audit compliance before network sync.",
      },
      {
        title: "Edge maintenance work order execution",
        body: "Full offline access to equipment manuals, piping diagrams, spare parts catalogs, and step-by-step repair procedures at remote desert or swamp well pads.",
      },
      {
        title: "Enterprise synchronization management",
        body: "Central administrative dashboard monitoring edge node health, pending sync queues, schema versions, network link availability, and merge conflict resolution metrics across the entire field fleet.",
      },
    ],
    diagram: {
      title: "Offline edge synchronization architecture",
      desc: "Reference architecture: Field technicians and local edge gateways operate completely offline, buffering records and syncing via encrypted bursts over intermittent satellite links.",
      leftLabel: "Remote field environment",
      platformLabel: "Edge runtime & sync core",
      rightLabel: "Enterprise hub",
      platformTitle: "Offline Oilfield Edge Platform",
      left: [
        ["Ruggedized Tablets", "Field operator logs", "Equipment inspection photos", "Offline work orders"],
        ["Wellhead RTUs", "Modbus telemetry", "Serial sensor logs", "Local alarm states"],
        ["Edge Gateways", "Local SQLite database", "Pending sync queue", "CRDT merge engine"],
      ],
      modules: [
        ["Embedded Edge DB", "Local standalone storage"],
        ["CRDT Merge Engine", "Conflict-free resolution"],
        ["Data Compression", "Bandwidth-optimized payloads"],
        ["Priority Sync Queue", "Alarms before raw logs"],
        ["Offline Crypto Seal", "Tamper-evident logs"],
        ["Schema Migrator", "Zero-downtime edge updates"],
      ],
      strip: "Zero latency local operations, automated burst synchronization and full data durability",
      right: [
        ["Central Production DB", "Enterprise historical master", "Validated field records"],
        ["SAP Maintenance", "Completed work orders", "Material consumption"],
        ["Operations Center", "Fleet health dashboard", "Synchronized telemetry"],
      ],
      boundary: "Intermittent Network Boundary",
    },
    diagramCaption:
      "Reference architecture: Disconnected field devices operate with full local capabilities, reconciling changes automatically whenever connectivity is established.",
    standards: [
      {
        name: "CRDT",
        note: "Conflict-free Replicated Data Types for distributed mathematical synchronization without centralized locking.",
      },
      {
        name: "IEEE 802.11 / Private LTE",
        note: "Wireless networking standards for industrial field camp and offshore platform local connectivity.",
      },
      {
        name: "SQLite / SQLCipher",
        note: "Embedded encrypted database standard for resilient edge devices and mobile field hardware.",
      },
      {
        name: "MQTT / Sparkplug B",
        note: "Lightweight pub-sub messaging protocol optimized for intermittent, bandwidth-constrained industrial networks.",
      },
    ],
    dataModel: [
      { entity: "EdgeDeviceNode", holds: "Device serial, hardware UUID, assigned facility, cryptographic key and sync state." },
      { entity: "OfflineWorkSession", holds: "Technician ID, asset tag, session start timestamp and local record batch ID." },
      { entity: "SyncDeltaPayload", holds: "Encrypted, compressed change payload, version vector and dependency hashes." },
      { entity: "FieldInspectionEntry", holds: "Equipment tag, checklist answers, measurement values and offline photos." },
      { entity: "BufferedTelemetryBatch", holds: "Time-series sensor readings, sampling frequency and quality flags." },
      { entity: "SyncConflictEvent", holds: "Recorded merge event, applied CRDT resolution rule and post-merge state." },
      { entity: "EdgeCacheManifest", holds: "Cached document IDs, equipment manual versions, and local schema revision numbers." },
    ],
    buildOptions: [
      {
        title: "When to use standard web applications",
        body: "When operating in central processing centers or urban headquarters with redundant, continuous high-speed fiber internet connectivity. Standard web architectures are simpler when network dropouts are rare.",
      },
      {
        title: "When to build offline-first edge software",
        body: "When operating in remote desert concessions, offshore production vessels, or swamp fields where frequent satellite outages would halt field reporting. Offline-first architectures provide continuous operational logging during telecommunication link degradation.",
      },
      {
        title: "When to implement local edge appliance clusters",
        body: "When an entire production facility or offshore vessel requires a local multi-user server that continues running complex web applications locally during satellite link interruptions.",
      },
    ],
    security: [
      {
        title: "Full device encryption at rest",
        body: "All local edge databases and queued inspection photographs are encrypted using AES-256 with keys stored in hardware security chips (TPM) on ruggedized devices.",
      },
      {
        title: "Cryptographic origin signing",
        body: "Every measurement and log entry is signed with the technician's private key, ensuring audit non-repudiation when synced to the central hub.",
      },
      {
        title: "Mutual TLS sync channel",
        body: "When connections resume, synchronization occurs over mutual TLS (mTLS) with pinned server certificates, preventing man-in-the-middle attacks over untrusted public networks.",
      },
      {
        title: "Remote device wipe capability",
        body: "Central administrators can initiate cryptographic key revocation and data erasure for lost or stolen field hardware upon next network ping.",
      },
    ],
    phases: [
      {
        title: "Field connectivity and hardware audit",
        body: "Surveying mobile devices, field gateway hardware, operating system capabilities, and typical satellite/cellular bandwidth latency profiles across remote locations.",
      },
      {
        title: "Edge runtime prototype and pilot testing",
        body: "Deploying local offline databases and inspection forms on field tablets for a designated operating cluster, validating disconnected performance.",
      },
      {
        title: "Conflict resolution and priority sync tuning",
        body: "Configuring CRDT merge algorithms, payload compression, and priority sync queues for low-bandwidth satellite links under simulated network blackouts.",
      },
      {
        title: "Fleet deployment and operational handover",
        body: "Rolling out across all field teams with edge node management dashboarding, technician training workshops, and complete source code handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
    ],
    faqs: [
      {
        q: "What happens if two operators update the same equipment record while offline?",
        a: "Our synchronization engine utilizes Conflict-Free Replicated Data Types (CRDTs). Non-conflicting attribute updates merge automatically, while conflicting simultaneous field edits are preserved as versioned alternatives for supervisor review.",
      },
      {
        q: "Can the system buffer high-frequency sensor readings during long outages?",
        a: "Yes. Edge gateway nodes buffer time-series sensor data locally, downsampling older intervals if storage limits approach, and streaming full-resolution telemetry once bandwidth restores.",
      },
      {
        q: "What hardware is required for the offline edge runtime?",
        a: "The edge software runs on standard ruggedized Windows, Android, or iOS tablets, as well as compact industrial Linux edge PCs (DIN-rail mounted).",
      },
      {
        q: "How are software updates delivered to disconnected devices?",
        a: "When a field device connects to a local camp Wi-Fi or satellite link, the system checks for version differentials and applies incremental binary patches in the background.",
      },
      {
        q: "Can field operators capture inspection photos and voice memos while offline?",
        a: "Yes. Photos, voice notes, and annotations are captured locally, compressed, encrypted, and attached to the inspection record for automatic upload when connectivity resumes.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
      { label: "MENA asset integrity & HSE software", href: "/solutions/mena-asset-integrity-hse-software" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "africa-exploration-data-rooms",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "Africa Exploration Data Room Software Development | Deview",
    seoDescription:
      "Exploration data rooms and subsurface repositories for African petroleum licensing: OSDU standards, dynamic watermarking and farm-in entitlements.",
    kicker: "Data engineering · Oil and gas",
    h1: "Africa exploration data rooms",
    intro:
      "We engineer Africa exploration data rooms and subsurface repositories for national petroleum agencies, ministries of energy and operating exploration consortia. The platform catalogues massive archives of 2D/3D seismic surveys, deepwater well logs, core photographs and interpretation reports. By combining OSDU-compliant metadata standards with secure virtual data room (VDR) entitlements and dynamic watermarking, the system accelerates licensing rounds and farm-in negotiations while safeguarding national geological assets.",
    modules: [
      {
        title: "OSDU-compliant subsurface asset cataloguing",
        body: "Standardized ingestion and metadata structuring for seismic navigation, velocity models, wellbore curves, mud logs, and core sample photographs aligned with international standards.",
      },
      {
        title: "Multi-client licensing and virtual data rooms",
        body: "Dedicated virtual data rooms for offshore bid rounds and farm-out packages with customizable legal terms, click-through non-disclosure agreements, and timed access windows.",
      },
      {
        title: "Dynamic watermarking and screen protection",
        body: "Real-time user email, IP address, and timestamp watermarking applied across all viewed seismic profiles, well logs, structural maps, and interpretation decks in the browser.",
      },
      {
        title: "In-browser high-resolution seismic viewing",
        body: "Stream large 2D lines and 3D seismic horizon slices directly in web browsers using chunked rendering without requiring heavy workstation software installations.",
      },
      {
        title: "Fine-grained entitlement and access control",
        body: "Restricting viewing, export, and download permissions by concession block, data tier, company clearance, and time-limited access windows with automated revocation.",
      },
      {
        title: "Detailed audit logging and visitor telemetry",
        body: "Comprehensive tracking of every document view, time spent per page, seismic line panning, and file download, providing ministries with competitive commercial intelligence during farm-in reviews.",
      },
      {
        title: "Interactive concession and GIS mapping",
        body: "Map-based spatial search allowing prospective investors to query well locations, seismic survey polygons, open acreage, and infrastructure proximity visually.",
      },
      {
        title: "Automated data ingestion and format validation",
        body: "Validating incoming SEG-Y, DLIS, LAS, and shapefiles against international standards, flagging missing coordinates, corrupt headers, or coordinate reference system mismatches.",
      },
    ],
    diagram: {
      title: "Exploration data room architecture",
      desc: "Reference architecture: Geological archives and seismic files are parsed into OSDU repositories, served through watermarked virtual data rooms for licensing rounds.",
      leftLabel: "Geological archives",
      platformLabel: "OSDU repository & VDR core",
      rightLabel: "Data room participants",
      platformTitle: "Exploration Data Room Platform",
      left: [
        ["Seismic Surveys", "2D/3D SEG-Y files", "Navigation files", "Velocity models"],
        ["Wellbore Data", "LAS / DLIS curve logs", "Well completion reports", "Core photographs"],
        ["Concession GIS", "Block boundaries", "Licence agreements", "Relinquished acreage"],
      ],
      modules: [
        ["OSDU Ingestion Engine", "Schema validation & tagging"],
        ["Seismic Streamer", "In-browser slice rendering"],
        ["VDR Entitlement Matrix", "Block-level access rules"],
        ["Dynamic Watermark Engine", "User IP & email overlay"],
        ["Spatial GIS Search", "Map-based data discovery"],
        ["Audit Telemetry Engine", "Investor dwell-time analytics"],
      ],
      strip: "Zero unauthorized downloads, OSDU data interoperability and sovereign national data retention",
      right: [
        ["International Majors", "Acreage screening", "Seismic evaluation"],
        ["National Oil Company", "Bid round administration", "Entitlement audits"],
        ["Petroleum Ministry", "Licensing analytics", "Concession record keeping"],
      ],
      boundary: "Digital Rights Boundary",
    },
    diagramCaption:
      "Reference architecture: Secure virtual data rooms protect sovereign subsurface assets while enabling international exploration partners to evaluate acreage.",
    standards: [
      {
        name: "OSDU",
        note: "Open Subsurface Data Universe standard for energy subsurface and exploration data governance.",
      },
      {
        name: "SEG-Y / SEG-D",
        note: "Society of Exploration Geophysicists standards for digital seismic data storage.",
      },
      {
        name: "CWLS LAS / DLIS",
        note: "Canadian Well Logging Society and API standards for digital well log curve exchange.",
      },
      {
        name: "OGC WMS / WFS",
        note: "Open Geospatial Consortium standards for map tile and spatial feature streaming.",
      },
    ],
    dataModel: [
      { entity: "SeismicSurvey", holds: "Survey name, acquisition contractor, 2D/3D type, coordinate reference system and bounding box." },
      { entity: "WellboreAsset", holds: "UWI, well name, spud date, total depth, operator and available digital log suites." },
      { entity: "DataRoomPackage", holds: "Package title, target block, bidding round reference, active dates and legal NDA requirements." },
      { entity: "UserEntitlement", holds: "User identity, organization, authorized blocks, watermarking profile and download permissions." },
      { entity: "ViewingEventAudit", holds: "User ID, asset ID, duration, viewed coordinates, dynamic watermark text and client IP." },
      { entity: "ConcessionBlock", holds: "Block code, basin name, award status, current operator and statutory relinquishment dates." },
      { entity: "NdaSignature", holds: "Signatory name, corporate entity, digital certificate, timestamp, and accepted legal terms." },
    ],
    buildOptions: [
      {
        title: "When to use generic corporate virtual data rooms",
        body: "For basic financial M&A or legal due diligence involving standard PDF documents and contracts with no seismic or geoscientific data visualization requirements. Standard corporate data rooms lack petroleum data parsers.",
      },
      {
        title: "When to build an exploration data room",
        body: "When licensing upstream petroleum blocks where geoscientists require in-browser seismic line viewing, LAS curve displays, spatial GIS filtering and strict OSDU alignment. Custom exploration data rooms provide purpose-built geoscientific tools.",
      },
      {
        title: "When to deploy hybrid physical-digital data rooms",
        body: "When national security mandates require proprietary raw seismic tapes to remain inspected solely on air-gapped physical workstations, while processed interpretation summaries are shared via secure web data rooms.",
      },
    ],
    security: [
      {
        title: "Non-exportable dynamic watermarking",
        body: "Every document, seismic image, and well log viewed in the browser is dynamically stamped with the viewer's identity and timestamp, deterring screen captures.",
      },
      {
        title: "Encrypted large file object storage",
        body: "Petabyte-scale seismic volumes are stored encrypted at rest with per-file cryptographic keys managed by the national operator within sovereign storage.",
      },
      {
        title: "Granular download disabling",
        body: "The platform allows full interactive visual inspection of seismic lines while completely blocking raw SEG-Y file downloads unless explicit ministerial authorization is granted.",
      },
      {
        title: "Session time-boxing and IP binding",
        body: "User access sessions expire automatically and are cryptographically bound to authenticated IP addresses, preventing credential sharing among bidding consortia.",
      },
    ],
    phases: [
      {
        title: "Subsurface data cataloguing and inventory",
        body: "Auditing existing tape archives, SEG-Y files, well log folders, and concession boundary GIS shapefiles to structure metadata taxonomies.",
      },
      {
        title: "OSDU schema mapping and repository deployment",
        body: "Deploying the secure repository, configuring metadata taxonomies, and setting up the in-browser seismic streamer for high-performance viewing.",
      },
      {
        title: "Virtual data room configuration and watermarking",
        body: "Configuring licensing round packages, legal NDA click-through agreements, and dynamic watermarking policies for international participants.",
      },
      {
        title: "Bid round launch and operational support",
        body: "Onboarding international exploration companies, monitoring visitor analytics, and providing administrative technical support throughout the tender window.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Southern Africa regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "Can the platform handle petabyte-scale 3D seismic surveys?",
        a: "Yes. Our storage layer utilizes cloud-optimized object storage and chunked streaming, allowing geoscientists to view cross-sections and inline profiles without downloading entire multi-gigabyte files.",
      },
      {
        q: "How does the system protect against data theft during farm-in reviews?",
        a: "We implement dynamic visual watermarking, right-click and print blocking, download prevention flags, and session audit tracking that records every viewed line and document page.",
      },
      {
        q: "Is the platform compliant with OSDU standards?",
        a: "Yes. All metadata models, well identifiers, and survey geometries follow Open Subsurface Data Universe (OSDU) schema definitions, facilitating smooth data migration.",
      },
      {
        q: "Can the data room be hosted within national borders?",
        a: "Yes. The platform can be deployed on-premise in the national oil company's data center or within regional sovereign cloud infrastructure.",
      },
      {
        q: "How does spatial search assist prospective investors?",
        a: "Investors can filter acreage on an interactive map, querying existing wells, offset discoveries, seismic coverage polygons, and open block boundaries simultaneously.",
      },
    ],
    assetId: "subsurface-data-readiness",
    related: [
      { label: "OSDU data platform for national oil companies", href: "/solutions/osdu-data-platform-national-oil-companies" },
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "mena-asset-integrity-hse-software",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "MENA Asset Integrity & HSE Software Development | Deview",
    seoDescription:
      "Asset integrity and HSE software for MENA oil and gas: corrosion surveillance, risk-based inspection, turnaround management and statutory safety compliance.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "MENA asset integrity and HSE software",
    intro:
      "We design MENA asset integrity and HSE software for energy operators, pipeline transport authorities and refining complexes across the Middle East and North Africa. The platform consolidates ultrasonic thickness measurements, corrosion circuit tracking, pipeline intelligent pigging logs, digital permits to work and major turnaround planning into a single governed system. It helps engineering teams mitigate containment loss risks while ensuring compliance with international API and statutory safety standards.",
    modules: [
      {
        title: "Asset register and corrosion circuit hierarchy",
        body: "Mapping piping circuits, pressure vessels, storage tanks, and offshore structural elements with designated design limits, operating pressures, and metallurgy specifications.",
      },
      {
        title: "Thickness measurement location (TML) tracking",
        body: "Recording ultrasonic thickness readings across thousands of inspection points, calculating short-term and long-term corrosion rates, and projecting remaining service life.",
      },
      {
        title: "Risk-Based Inspection (RBI) assessment engine",
        body: "Automating Probability of Failure (POF) and Consequence of Failure (COF) calculations aligned with API 580 and API 581 to optimize statutory inspection intervals.",
      },
      {
        title: "Pipeline integrity and intelligent pigging analysis",
        body: "Ingesting MFL and ultrasonic in-line inspection (ILI) tool logs, mapping metal loss anomalies against pipeline chainage coordinates and safe operating pressure limits.",
      },
      {
        title: "Digital Permit to Work (e-PTW) and isolation tracking",
        body: "Managing hot work, confined space entry, electrical isolations, and lock-out/tag-out (LOTO) workflows with mobile verification and atmospheric gas test records.",
      },
      {
        title: "Turnaround work pack and blind list management",
        body: "Consolidating turnaround inspection scopes, critical path task sequences, blind installations, and post-overhaul pressure test certifications into governed schedules.",
      },
      {
        title: "HSE incident and near-miss investigation",
        body: "Structured logging of safety incidents, environmental spills, and root cause analysis (RCA) with corrective action tracking and regulatory notification records.",
      },
      {
        title: "Cathodic protection and chemical inhibitor surveillance",
        body: "Monitoring pipe-to-soil potentials, sacrificial anode depletion, and chemical inhibitor injection rates across desert gathering lines and transport pipeline networks.",
      },
    ],
    diagram: {
      title: "Asset integrity management architecture",
      desc: "Reference architecture: Field inspection tools, intelligent pigging logs and thickness data feed the integrity engine, updating SAP PM and regulatory filings.",
      leftLabel: "Inspection & telemetry",
      platformLabel: "Asset integrity core",
      rightLabel: "Operations & compliance",
      platformTitle: "MENA Asset Integrity Platform",
      left: [
        ["Field NDT Tools", "Ultrasonic thickness gauges", "Phased array scans", "Visual inspection photos"],
        ["Pipeline Pigging", "MFL magnetic logs", "Geometry caliper runs", "Chainage coordinate files"],
        ["Chemical Surveillance", "Inhibitor injection rates", "Cathodic protection probes", "Corrosion coupon weights"],
      ],
      modules: [
        ["Asset & Circuit Hierarchy", "Equipment metallurgy register"],
        ["TML Corrosion Engine", "Remaining life calculation"],
        ["API 581 RBI Modeler", "Risk-based inspection intervals"],
        ["Pipeline ILI Mapper", "Anomaly growth tracking"],
        ["Digital e-PTW Manager", "Lock-out tag-out tracking"],
        ["Turnaround Work Pack", "Blinding & testing checklists"],
      ],
      strip: "Audit-ready safety compliance, risk prioritization and integration with maintenance systems",
      right: [
        ["SAP PM / Maximo", "Preventive work orders", "Maintenance scheduling"],
        ["Operations Center", "Corrosion risk heatmaps", "Permit dashboard"],
        ["Statutory Authorities", "Pressure vessel certificates", "Safety regulatory audits"],
      ],
      boundary: "Operational Safety Boundary",
    },
    diagramCaption:
      "Reference architecture: Inspection data flows from field NDT gauges into an integrated RBI engine, prioritizing maintenance before failure occurs.",
    standards: [
      {
        name: "API 580 / 581",
        note: "American Petroleum Institute standards for Risk-Based Inspection methodology and calculation.",
      },
      {
        name: "API 570 / 510",
        note: "Piping and Pressure Vessel Inspection Codes for maintenance, rating, repair, and alteration.",
      },
      {
        name: "ASME B31.8S",
        note: "Managing system integrity of gas pipelines standard for threat identification and mitigation.",
      },
      {
        name: "NACE MR0175 / ISO 15156",
        note: "Materials for use in H2S-containing environments in oil and gas production.",
      },
    ],
    dataModel: [
      { entity: "CorrosionCircuit", holds: "Circuit tag, operating temperature, design pressure, fluid medium and metallurgy." },
      { entity: "ThicknessPoint", holds: "TML coordinate, nominal thickness, minimum allowable thickness and inspection history." },
      { entity: "RbiAssessment", holds: "Assessed date, POF score, COF classification, target inspection date and risk matrix quadrant." },
      { entity: "PipelineAnomaly", holds: "Pipeline ID, chainage meter, clock position, depth percentage and safe operating pressure." },
      { entity: "WorkPermit", holds: "Permit number, work scope, hazard controls, authorized gas tests, active hours and sign-offs." },
      { entity: "HseIncident", holds: "Incident date, severity level, classification, immediate cause and corrective actions." },
      { entity: "IsolationRecord", holds: "Lock-out tag-out boundary, isolation points, authorized isolation authority, and de-isolation log." },
    ],
    buildOptions: [
      {
        title: "When to use basic maintenance management modules",
        body: "When your assets are new, operating under non-corrosive conditions, and simple calendar-based maintenance schedules satisfy statutory requirements. Basic CMMS software suffices when corrosion thinning risks are negligible.",
      },
      {
        title: "When to build custom asset integrity software",
        body: "When operating aging desert gathering lines, high-pressure sour gas facilities, or complex refinery units where API 581 risk calculations and pipe pigging logs must drive maintenance budgets. Custom software unites corrosion science with operational maintenance.",
      },
      {
        title: "When to integrate with existing SAP PM",
        body: "When preserving SAP as the transactional work order execution system while adding an engineering-led integrity intelligence layer to calculate corrosion rates, schedule RBI inspections, and manage turnaround blinding.",
      },
    ],
    security: [
      {
        title: "Sovereign on-premise installation",
        body: "Deployed entirely within the client's domestic IT infrastructure to protect critical energy asset vulnerability data from unauthorized foreign access.",
      },
      {
        title: "Tamper-evident inspection records",
        body: "Inspection measurements, inspector certifications, and engineer sign-offs are cryptographically sealed to ensure legal compliance during audits.",
      },
      {
        title: "Role-based safety authorization",
        body: "Permit-to-work approvals enforce strict separation of duties between performing authorities, issuing authorities, and safety officers.",
      },
      {
        title: "Mobile field data encryption",
        body: "Inspection records and photos captured on ruggedized tablets in the field are encrypted using AES-256 before local storage and encrypted wireless synchronization.",
      },
    ],
    phases: [
      {
        title: "Asset hierarchy and corrosion circuit mapping",
        body: "Importing equipment registers, piping isometric drawings, and baseline metallurgy data into a structured hierarchy with design threshold limits.",
      },
      {
        title: "Inspection data migration and TML setup",
        body: "Loading historical ultrasonic thickness measurement records and calibrating corrosion rate calculation formulas across designated circuits.",
      },
      {
        title: "RBI engine and e-PTW configuration",
        body: "Implementing API 580 and 581 risk calculation matrices and configuring digital permit-to-work approval workflows for site safety teams.",
      },
      {
        title: "Enterprise integration and training",
        body: "Connecting with SAP S/4HANA PM and training inspection engineers and safety teams across all operating sites, followed by administrative handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "North Africa regional hub", href: "/industries/oil-and-gas" },
    ],
    faqs: [
      {
        q: "How does the system calculate equipment remaining service life?",
        a: "Our corrosion engine compares historical ultrasonic thickness measurements against nominal and minimum structural thresholds, calculating short-term and long-term corrosion rates to project remaining operational life.",
      },
      {
        q: "Can the platform ingest intelligent pigging logs directly?",
        a: "Yes. Our pipeline integrity module ingests magnetic flux leakage (MFL) and ultrasonic inspection logs, mapping identified metal loss anomalies against pipeline chainage coordinates.",
      },
      {
        q: "Does the software support API 580/581 Risk-Based Inspection?",
        a: "Yes. The platform includes an automated RBI calculation engine that models probability of failure and consequence of failure, prioritizing inspection resources toward highest-risk circuits.",
      },
      {
        q: "Can inspection engineers capture readings offline in the field?",
        a: "Yes. Our mobile inspection module runs on ruggedized tablets, allowing inspectors to record thickness measurements and safety checklists offline, synchronizing when reconnected.",
      },
      {
        q: "How does the platform assist during major plant turnarounds?",
        a: "The turnaround module manages critical path task sequences, blind installation and removal tracking, pressure test sign-offs, and contractor work permit issuance from a central console.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Middle East oil and gas contractor portals", href: "/solutions/middle-east-oil-gas-contractor-portals" },
      { label: "Offline oilfield operations software", href: "/solutions/offline-oilfield-operations-software" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "osdu-data-platform-national-oil-companies",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "OSDU Data Platform Architecture for NOCs | Deview",
    seoDescription:
      "OSDU-compliant subsurface data platform architecture for national oil companies: vendor neutrality, seismic and well ingestion, and data governance.",
    kicker: "Data engineering · Oil and gas",
    h1: "OSDU data platform for national oil companies",
    intro:
      "We design and implement OSDU data platform for national oil companies architectures for energy ministries and national hydrocarbon authorities seeking vendor neutrality across their subsurface assets. By implementing Open Subsurface Data Universe (OSDU) data standards, we help national operators ingest, govern and discover decades of well logs, seismic surveys and reservoir models without getting locked into proprietary software vendor ecosystems. You maintain full ownership of the platform and national data assets.",
    modules: [
      {
        title: "Vendor-neutral subsurface data architecture",
        body: "Decoupling proprietary subsurface data from commercial interpretation software vendors, establishing open RESTful API access for all commercial and open-source geoscientific tools.",
      },
      {
        title: "OSDU core service deployment and orchestration",
        body: "Containerized deployment of OSDU core microservices (Storage, Search, Schema, Partition, Entitlements, Legal) inside private on-premise clusters or sovereign cloud VPCs.",
      },
      {
        title: "Seismic and well data ingestion pipelines",
        body: "Automated ingestion pipelines parsing raw SEG-Y, LAS, DLIS, and WITSML files, extracting spatial coordinates, validating metadata, and loading OSDU records seamlessly.",
      },
      {
        title: "National petroleum asset registry",
        body: "A unified master data service establishing golden records and unique identifiers for all national wells, wellbores, seismic surveys, and concession blocks across basins.",
      },
      {
        title: "Entitlement and legal compliance governance",
        body: "Role-based entitlement service enforcing concession confidentiality rules, joint venture access boundaries, statutory data disclosure timelines, and licensing rights.",
      },
      {
        title: "Coexistence with legacy E&P interpretation suites",
        body: "Configuring bidirectional connectors and data sync bridges with existing interpretation tools (Petrel, Kingdom, DecisionSpace) to ensure daily engineering workflow continuity.",
      },
      {
        title: "Spatial GIS and subsurface discovery engine",
        body: "High-performance Elasticsearch and map-based spatial search allowing geoscientists to discover subsurface data by coordinate bounding box and geological stratigraphic criteria.",
      },
      {
        title: "Cloud-to-on-premise hybrid deployment",
        body: "Flexible deployment architectures supporting on-premise Kubernetes clusters, domestic government clouds, or certified private cloud VPCs with complete data residency.",
      },
    ],
    diagram: {
      title: "OSDU national data platform architecture",
      desc: "Reference architecture: Ingesting heterogeneous geological files into standardized OSDU services, serving interpretation suites and virtual data rooms.",
      leftLabel: "Subsurface raw data",
      platformLabel: "OSDU national platform",
      rightLabel: "Geoscience applications",
      platformTitle: "OSDU Data Platform Architecture",
      left: [
        ["Seismic Repositories", "Raw 2D/3D SEG-Y", "Navigation tapes", "Velocity models"],
        ["Wellbore Archives", "Digital LAS / DLIS logs", "Mud logs & core data", "Well completion tickets"],
        ["Concession Records", "Block boundaries", "Licence agreements", "Government title deeds"],
      ],
      modules: [
        ["Ingestion Framework", "Automated parsing & validation"],
        ["OSDU Schema Service", "Standardized domain models"],
        ["Search & Index Service", "Elasticsearch GIS indexing"],
        ["Entitlements Service", "Role-based access boundaries"],
        ["Storage Service", "Metadata & object references"],
        ["Interpretation Bridge", "Vendor-neutral tool sync"],
      ],
      strip: "Vendor-neutral standards, open RESTful APIs and sovereign national data governance",
      right: [
        ["Geoscientists", "Interpretation suites", "Offset well evaluation"],
        ["National Regulators", "Licensing round data rooms", "Concession compliance"],
        ["Analytics & AI", "Subsurface machine learning", "Regional basin modeling"],
      ],
      boundary: "National Subsurface Boundary",
    },
    diagramCaption:
      "Reference architecture: OSDU decoupling ensures that national subsurface data is stored in open, standardized schemas independent of any single software vendor.",
    standards: [
      {
        name: "OSDU Forum Standards",
        note: "Open Group standard for subsurface and energy data platform interoperability.",
      },
      {
        name: "WITSML / PRODML / RESQML",
        note: "Energistics data standards for drilling, production, and reservoir modeling data exchange.",
      },
      {
        name: "EPSG Geodetic Parameter Dataset",
        note: "Standard coordinate reference systems and map projections for accurate spatial alignment.",
      },
      {
        name: "PPDM",
        note: "Professional Petroleum Data Management Association relational data model for master data principles.",
      },
    ],
    dataModel: [
      { entity: "MasterRecord", holds: "Unique national well identifier, official name, country code, operator and spatial point." },
      { entity: "WorkProductComponent", holds: "Seismic trace dataset, well log curve family, or interpretation horizon reference." },
      { entity: "AclEntitlementGroup", holds: "Security group, assigned concession block, clearance level and membership list." },
      { entity: "LegalTagRecord", holds: "Contractual validity, origin country, export classification and expiration dates." },
      { entity: "IngestionJobRun", holds: "Ingestion pipeline run ID, source file hash, validated record count and error logs." },
      { entity: "SchemaDefinition", holds: "OSDU JSON schema version, domain entity type, extension fields and validation rules." },
      { entity: "SpatialIndexEntry", holds: "Geographic coordinate bounding box, projection code, and spatial centroid." },
    ],
    buildOptions: [
      {
        title: "When to buy proprietary commercial data platforms",
        body: "When your organisation already relies exclusively on a single software vendor's suite and does not need multi-vendor tool neutrality or open API access. Proprietary stacks work if sole-source vendor dependence is acceptable.",
      },
      {
        title: "When to build an OSDU-compliant national platform",
        body: "When acting as a national oil company or regulator managing multi-decade assets across multiple operators, where vendor lock-in poses strategic risk to national data sovereignty. OSDU provides long-term format neutrality and analytical freedom.",
      },
      {
        title: "When to adopt an incremental OSDU bridge",
        body: "When preserving active project databases in legacy interpretation suites while deploying an OSDU master data registry to synchronize well master data, spatial footprints, and exploration reports across departments.",
      },
    ],
    security: [
      {
        title: "Sovereign infrastructure deployment",
        body: "Deployed on dedicated on-premise Kubernetes clusters or sovereign domestic cloud facilities with zero unapproved cross-border data egress, satisfying national data residency mandates.",
      },
      {
        title: "Strict legal tag enforcement",
        body: "Every subsurface record requires an OSDU legal tag defining its data residency, confidentiality, and expiration rules, verified cryptographically at query time.",
      },
      {
        title: "Granular entitlement groups",
        body: "Access to subsurface data is governed by granular entitlement services matching user credentials against specific concession rights and commercial agreements.",
      },
      {
        title: "Immutable data lineage logging",
        body: "The platform records the complete history of every data transformation, curve recalculation, and coordinate reprojection in an auditable record.",
      },
    ],
    phases: [
      {
        title: "Subsurface data readiness assessment",
        body: "Auditing legacy tape archives, well repositories, and coordinate reference systems to evaluate OSDU migration readiness and schema mapping rules.",
      },
      {
        title: "Core OSDU platform deployment",
        body: "Deploying OSDU containerized microservices on sovereign Kubernetes clusters with initial schema validation and partition configuration.",
      },
      {
        title: "Ingestion pipeline and bridge configuration",
        body: "Configuring automated data parsing pipelines for SEG-Y and LAS files, along with connectors to existing commercial interpretation software.",
      },
      {
        title: "National data bank go-live and training",
        body: "Migrating production subsurface archives into the platform, training national geoscientists and data managers, and executing formal technical handover.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Africa exploration data rooms", href: "/solutions/africa-exploration-data-rooms" },
    ],
    faqs: [
      {
        q: "What is the primary benefit of OSDU for a national oil company?",
        a: "OSDU liberates national subsurface data from proprietary vendor file formats. Geoscientists can access well and seismic data from any interpretation software via standard APIs, avoiding vendor lock-in.",
      },
      {
        q: "Can OSDU be deployed in an on-premise data center?",
        a: "Yes. While OSDU was initially designed for hyperscale clouds, we engineer production-ready containerized deployments on local Kubernetes clusters (such as OpenShift or Tanzu) inside sovereign data centers.",
      },
      {
        q: "How does the platform handle legacy paper logs and physical tapes?",
        a: "Our ingestion framework integrates with digitisation workflows, cataloguing scanned TIFF/PDF reports, vectorized well logs, and transcribed tape data with validated OSDU metadata.",
      },
      {
        q: "Can existing interpretation tools like Petrel or Kingdom connect to the platform?",
        a: "Yes. We configure standard OSDU connectors and RESTful synchronization bridges that allow commercial interpretation applications to query and save projects directly to the national platform.",
      },
      {
        q: "How are geodetic coordinate transformations handled across legacy surveys?",
        a: "The platform integrates standard EPSG geodetic libraries, verifying map projections and automatically transforming coordinates to prevent spatial positioning errors.",
      },
    ],
    assetId: "subsurface-data-readiness",
    related: [
      { label: "Africa exploration data rooms", href: "/solutions/africa-exploration-data-rooms" },
      { label: "MENA asset integrity & HSE software", href: "/solutions/mena-asset-integrity-hse-software" },
    ],
    updated: "2026-10-27",
  },

  {
    slug: "mena-africa-methane-emissions-reporting",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "MENA & Africa Methane Emissions Reporting Platform | Deview",
    seoDescription:
      "Methane emissions monitoring and OGMP 2.0 level-5 reporting software for MENA and African oil and gas: top-down reconciliation, flares and audits.",
    kicker: "Data engineering · Oil and gas",
    h1: "MENA and Africa methane emissions reporting",
    intro:
      "We build MENA and Africa methane emissions reporting software for oil and gas operators, pipeline companies and national petroleum agencies. The platform automates source-level greenhouse gas accounting, flare combustion monitoring, pneumatic device inventories, and reconciliation between bottom-up engineering calculations and top-down measurement data (such as satellite, flyover and optical gas imaging). Designed to satisfy OGMP 2.0 Level 5 and international carbon disclosure frameworks, the system turns raw operational telemetry into auditable emission baselines.",
    modules: [
      {
        title: "Emissions source inventory and equipment registry",
        body: "Mapping emission sources across wellheads, compressor seals, storage tanks, pneumatic valves, flare stacks, and pipeline flanges with associated component counts and service hours.",
      },
      {
        title: "Bottom-up emissions factor calculation engine",
        body: "Automating Tier 1, 2, and 3 engineering emissions estimates using EPA, IPCC, and API standard emission factors with rigorous factor versioning and transparent calculation lineage.",
      },
      {
        title: "Continuous flare combustion surveillance",
        body: "Reconciling flare meter telemetry, purge gas rates, flame presence detectors, and flare combustion efficiency estimates to quantify uncombusted methane slip.",
      },
      {
        title: "Top-down satellite and drone measurement reconciliation",
        body: "Ingesting measurement data from satellites, aerial flyovers, and optical gas imaging (OGI) inspections, reconciling against bottom-up engineering logs to isolate discrepancy sources.",
      },
      {
        title: "OGMP 2.0 Level 4 & 5 compliance workflows",
        body: "Structuring emissions data to meet Oil and Gas Methane Partnership (OGMP 2.0) Gold Standard requirements, resolving site-level and source-level measurement variances.",
      },
      {
        title: "Leak Detection and Repair (LDAR) management",
        body: "Mobile logging of fugitive emissions detected by OGI cameras, assigning prioritized repair work orders, and verifying post-repair re-inspection and containment confirmation.",
      },
      {
        title: "Carbon tax and regulatory disclosure exports",
        body: "Automated generation of emissions compliance filings for national environmental regulators and international ESG disclosure frameworks without manual spreadsheet consolidation.",
      },
      {
        title: "Third-party verifier audit portal",
        body: "Permission-scoped access for accredited independent verifiers to review source calculations, calibration certificates, and measurement logs with documented factor lineage.",
      },
    ],
    diagram: {
      title: "Methane emissions monitoring architecture",
      desc: "Reference architecture: SCADA flare meters, LDAR inspections and satellite data feed the emissions engine, producing OGMP 2.0 and carbon tax reports.",
      leftLabel: "Measurement & telemetry",
      platformLabel: "Emissions data engine",
      rightLabel: "Reporting & disclosure",
      platformTitle: "Methane Emissions Platform",
      left: [
        ["Field SCADA", "Flare gas meters", "Compressor run hours", "Tank vapour recovery"],
        ["LDAR Field Inspections", "OGI camera survey logs", "Ultrasonic leak readings", "Repair work orders"],
        ["Top-Down Measurements", "Satellite detection data", "Aerial flyover surveys", "Perimeter optical sensors"],
      ],
      modules: [
        ["Source Asset Hierarchy", "Equipment emission register"],
        ["Factor Calculation Engine", "IPCC / API Tier 1-3 rules"],
        ["Reconciliation Matrix", "Top-down vs bottom-up"],
        ["OGMP 2.0 Workflow", "Level 4/5 Gold Standard"],
        ["LDAR Repair Tracker", "Work order verification"],
        ["Verifier Audit Portal", "Documented factor lineage"],
      ],
      strip: "Verifiable measurement lineage, factor version control and auditable emissions calculations",
      right: [
        ["OGMP 2.0 Submissions", "Gold Standard reporting", "UNEP IMEO filings"],
        ["National Regulators", "Statutory air permits", "Carbon tax returns"],
        ["Executive ESG Portal", "Net-zero progress tracking", "Methane intensity metrics"],
      ],
      boundary: "Environmental Compliance Boundary",
    },
    diagramCaption:
      "Reference architecture: Operational field data and top-down measurement streams reconcile in one platform, delivering verifiable methane accounting.",
    standards: [
      {
        name: "OGMP 2.0",
        note: "Oil & Gas Methane Partnership 2.0 framework for measurement-based methane reporting.",
      },
      {
        name: "GHG Protocol",
        note: "Corporate Standard for Scope 1, Scope 2, and Scope 3 greenhouse gas accounting.",
      },
      {
        name: "API Compendium",
        note: "American Petroleum Institute compendium of greenhouse gas emissions methodologies for the energy industry.",
      },
      {
        name: "ISO 14064-1",
        note: "Specification with guidance at the organization level for quantification and reporting of greenhouse gas emissions.",
      },
    ],
    dataModel: [
      { entity: "EmissionSource", holds: "Source tag, facility location, equipment class, component count and operating status." },
      { entity: "EmissionFactor", holds: "Factor ID, standard authority, numerical factor, unit basis, source and effective dates." },
      { entity: "BottomUpCalculation", holds: "Reporting period, source reference, operational throughput, factor applied and calculated CO2e." },
      { entity: "TopDownMeasurement", holds: "Detection method (satellite/flyover), observed flux rate, wind speed and uncertainty bounds." },
      { entity: "LdarSurveyEvent", holds: "Survey date, inspector ID, camera model, surveyed components, detected leaks and repair tags." },
      { entity: "OgmpReconciliation", holds: "Facility reconciliation report, site-level top-down comparison, discrepancy notes and audit sign-off." },
      { entity: "VerifierSignoff", holds: "Verifier name, accreditation registry, audit finding notes, and issuance certificate." },
    ],
    buildOptions: [
      {
        title: "When to use basic ESG reporting software",
        body: "When your organisation only needs annual high-level Scope 1 estimates based on generic fuel purchasing records without source-level methane measurements. Generic ESG platforms work for corporate office footprints without industrial field assets.",
      },
      {
        title: "When to build a dedicated methane reporting platform",
        body: "When operating upstream assets requiring OGMP 2.0 Level 4/5 compliance, reconciliation of satellite and flyover measurement data, and auditable LDAR workflows. Dedicated software bridges industrial field measurements with statutory carbon taxation.",
      },
      {
        title: "When to integrate with existing production accounting",
        body: "When leveraging fuel gas, flare meter, and crude throughput data already captured in the upstream production management system, automating greenhouse gas calculations directly from validated production records.",
      },
    ],
    security: [
      {
        title: "Auditable calculation lineage",
        body: "Every calculated emissions figure links mathematically to its source activity data, telemetry readings, and versioned emission factor formulas for complete transparency.",
      },
      {
        title: "Sovereign data hosting",
        body: "All operational emissions and flaring data can be hosted in domestic data centers, ensuring sensitive production and flaring volumes remain protected from unauthorized foreign exposure.",
      },
      {
        title: "Verifier read-only access",
        body: "External environmental auditors receive read-only, watermarked access to review calculation work papers, calibration records, and sensor certificates without accessing operational control.",
      },
      {
        title: "Tamper-evident emissions logs",
        body: "Historical emissions submissions are archived in immutable records, ensuring compliance with international carbon border adjustment mechanisms and regulatory reporting rules.",
      },
    ],
    phases: [
      {
        title: "Emissions source register and inventory audit",
        body: "Identifying all potential venting, flaring, and fugitive emission sources across operating facilities, mapping equipment hierarchies to emission factors.",
      },
      {
        title: "Factor calculation engine and SCADA integration",
        body: "Configuring automated ingestion of flare meter readings, compressor hours, tank vapors, and standard API/IPCC emission factors into the calculation engine.",
      },
      {
        title: "LDAR and top-down measurement reconciliation",
        body: "Deploying mobile LDAR inspection forms and configuring reconciliation algorithms for satellite observations and aerial flyover measurements.",
      },
      {
        title: "OGMP 2.0 reporting and verification go-live",
        body: "Activating automated disclosure export generation, onboarding third-party environmental verifiers, and training corporate sustainability teams.",
      },
    ],
    proof: [
      { label: "Oil and gas software", href: "/solutions/oil-and-gas-software" },
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
    ],
    faqs: [
      {
        q: "What is required to achieve OGMP 2.0 Level 5 compliance?",
        a: "OGMP 2.0 Level 5 requires reconciling bottom-up source-level measurements (Level 4) with site-level top-down measurements (Level 5) using satellites, aircraft, or drones to explain discrepancies.",
      },
      {
        q: "Can the platform ingest satellite measurement data?",
        a: "Yes. Our data ingestion layer imports satellite plume observations and aerial flyover measurements, mapping coordinates and flux rates against facility boundaries.",
      },
      {
        q: "How does the system track Leak Detection and Repair (LDAR)?",
        a: "Field inspectors log leaks using mobile tablets with optical gas imaging (OGI) photos. The system generates repair work orders, tracks component repair deadlines, and verifies post-repair re-inspection.",
      },
      {
        q: "Does the platform calculate statutory carbon tax obligations?",
        a: "Yes. The reporting engine applies jurisdiction-specific carbon tax rates and emissions thresholds (such as South Africa's Carbon Tax Act), computing net liabilities and tax returns.",
      },
      {
        q: "How does the system handle flare combustion efficiency variations?",
        a: "The flare module tracks flare gas velocity, purge gas composition, wind crossflow, and optical combustion indicators, adjusting destruction removal efficiency (DRE) accordingly.",
      },
    ],
    assetId: "methane-mrv-readiness",
    related: [
      { label: "Africa upstream production reporting", href: "/solutions/africa-upstream-production-reporting" },
      { label: "MENA asset integrity & HSE software", href: "/solutions/mena-asset-integrity-hse-software" },
    ],
    updated: "2026-10-27",
  },
];

