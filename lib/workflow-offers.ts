/**
 * What we automate, by industry and by solution. One source for the homepage industry tabs,
 * the four solutions on /services and the automation playbook, so every page tells the
 * same story. English only (the site has no translations).
 */

export const PLAYBOOK_PATH = "/resources/automation-playbook";
export const PLAYBOOK_GUIDE_PATH = "/resources/automation-playbook/guide";
/** Set in sessionStorage after a successful sign-up; the guide checks it before showing. */
export const PLAYBOOK_ACCESS_KEY = "deview-playbook";

export type IndustryOffer = {
  id: "lending" | "ventilation" | "agriculture" | "construction" | "oil-and-gas";
  /** Tab and chapter name. */
  name: string;
  /** The bottleneck, short enough for a tab. */
  problem: string;
  /** What changes once we have built it. */
  headline: string;
  summary: string;
  /** A worked example: the last step is always the human decision. */
  example: { title: string; steps: string[] };
  offers: { name: string; body: string }[];
  /** Work we have done that makes this credible. */
  experience: string;
  /** What stays with the client's people. */
  guardrail: string;
  /** Playbook only: who it is for, and questions to check their own process. */
  whoFor: string[];
  selfCheck: string[];
};

export const INDUSTRY_OFFERS: IndustryOffer[] = [
  {
    id: "lending",
    name: "Lending & finance",
    problem: "Loan files built by hand.",
    headline: "Borrower files ready before your credit officer opens them.",
    summary:
      "We automate document intake, borrower checks and credit-file preparation for lending companies, and give multi-company groups one view of every borrower.",
    example: {
      title: "A new SME loan application",
      steps: [
        "The application, bank statements and company documents arrive by email or portal.",
        "Key figures are extracted and checked against each other.",
        "Missing documents and unusual cash-flow movements are flagged.",
        "A standard borrower summary is written into your lending system.",
        "Your credit officer reviews the file and makes the decision.",
      ],
    },
    offers: [
      {
        name: "Loan processing automation",
        body: "Document intake, data extraction, completeness checks and a ready-to-review credit file.",
      },
      {
        name: "Unified borrower view",
        body: "One record per borrower across every company in your group: exposure, repayment history and source documents.",
      },
      {
        name: "Portfolio monitoring",
        body: "Daily portfolio summaries, overdue alerts and exposure reports, built from your servicing data.",
      },
    ],
    experience:
      "We built the portal that brings borrower data, credit analysis and documents together for five lending companies.",
    guardrail: "Approvals and rejections stay with your credit team.",
    whoFor: [
      "Private lenders and licensed money lenders",
      "SME and consumer finance companies",
      "Lending groups running several companies",
      "Loan servicing businesses",
    ],
    selfCheck: [
      "Which steps in loan processing are still done by hand?",
      "How long does it take to prepare one complete borrower file?",
      "How many systems hold information about the same borrower?",
    ],
  },
  {
    id: "ventilation",
    name: "Ventilation & HVAC",
    problem: "Quotes waiting on engineers.",
    headline: "Technical enquiries turned into draft quotes your engineers approve.",
    summary:
      "We automate specification analysis, product lookup and quote preparation for ventilation manufacturers and distributors, and route service requests with the full equipment history.",
    example: {
      title: "An RFQ for an underground car park",
      steps: [
        "The specification, drawings and equipment schedule arrive with the RFQ.",
        "Airflow, operating modes, noise limits and certifications are extracted.",
        "Candidate products are matched from your own catalogue data.",
        "Unclear requirements become a list of questions for the customer.",
        "A draft equipment schedule and quote go to your engineer for approval.",
      ],
    },
    offers: [
      {
        name: "Technical quotation automation",
        body: "From incoming RFQ to a draft equipment schedule, quote, assumptions and exclusions.",
      },
      {
        name: "Product knowledge assistant",
        body: "Answers from your catalogues and datasheets, with the source attached, for sales and engineering.",
      },
      {
        name: "Service request automation",
        body: "Requests matched to the unit, warranty and service history, then routed with a draft reply.",
      },
    ],
    experience:
      "We built the Jetfans site on car-park ventilation, smoke extraction and CFD modelling, so we know how this equipment is specified and sold.",
    guardrail:
      "Equipment selection, smoke control and compliance stay with qualified engineers.",
    whoFor: [
      "Ventilation equipment manufacturers",
      "Equipment distributors",
      "HVAC engineering firms",
      "Installation contractors",
    ],
    selfCheck: [
      "How does your team handle an incoming technical RFQ today?",
      "How much engineering time goes into preparing offers?",
      "Where do product-selection data and datasheets live?",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    problem: "Field visits that end in paperwork.",
    headline: "From field visit to quote before the rep leaves the farm.",
    summary:
      "We connect field notes, product information, pricing and your CRM, so agricultural suppliers turn every visit into a proposal fast.",
    example: {
      title: "A fertiliser enquiry for 120 hectares",
      steps: [
        "The rep dictates notes and attaches the soil analysis on a phone.",
        "The notes become structured data, linked to the right customer and field.",
        "Approved products and your pricing rules are applied.",
        "A draft recommendation and quote are synced to the CRM.",
        "An agronomist or manager approves wherever your rules require it.",
      ],
    },
    offers: [
      {
        name: "Field-to-quote automation",
        body: "Mobile field capture, product matching and CRM-ready quotes in one flow.",
      },
      {
        name: "Dealer portal",
        body: "Catalogue, customer pricing, ordering and order status for your dealers, in one place.",
      },
      {
        name: "Sales and demand insight",
        body: "Seasonal demand, slow-moving stock and customers who have not reordered.",
      },
    ],
    experience:
      "AgroPlatforma: three AI agents built into Salesforce and a mobile app, taking field diagnosis to a quote in under 30 seconds.",
    guardrail: "Agronomic advice stays with your agronomists.",
    whoFor: [
      "Fertiliser and crop-input distributors",
      "Seed and crop-protection suppliers",
      "Agricultural equipment dealers",
      "Agribusiness groups with regional sales teams",
    ],
    selfCheck: [
      "How do field reps record what a customer needs?",
      "How are quotes prepared and approved after a visit?",
      "Is field information connected to your CRM and stock?",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    problem: "Engineers buried in documents.",
    headline: "Tender packages and revisions turned into clear next steps.",
    summary:
      "We automate tender analysis, revision tracking and project reporting for mechanical and specialist contractors, alongside the project tools you already use.",
    example: {
      title: "A revised mechanical specification",
      steps: [
        "The new revision is imported and matched to its project.",
        "Changed requirements are compared with the previous version.",
        "Affected submittals, orders and open RFIs are identified.",
        "A change summary goes to the responsible engineer.",
        "The engineer confirms the impact, and the review is logged.",
      ],
    },
    offers: [
      {
        name: "Tender and estimation assistant",
        body: "Requirements, quantities and gaps pulled from tender packages into an estimation worksheet.",
      },
      {
        name: "Project document intelligence",
        body: "Search, revision comparison and draft RFIs across specifications, contracts and drawings.",
      },
      {
        name: "Project reporting",
        body: "Progress and cost reports assembled from the systems your teams already update.",
      },
    ],
    experience:
      "Our team built project planning, control and reporting systems for large energy projects from 2010 to 2020.",
    guardrail: "Design, calculations and code compliance stay with your engineers.",
    whoFor: [
      "Mechanical and electrical contractors",
      "Specialist subcontractors",
      "Engineering and design firms",
      "General contractors with heavy document control",
    ],
    selfCheck: [
      "How does your team prepare tenders today?",
      "How do you find out what changed between two revisions?",
      "Which systems would a new tool need to work alongside?",
    ],
  },
  {
    id: "oil-and-gas",
    name: "Oil & gas",
    problem: "Reports stitched from spreadsheets.",
    headline: "Field data and technical documents in one clear daily view.",
    summary:
      "We consolidate production, maintenance and document data into automated reports and searchable knowledge, through read-only connections that leave control systems alone.",
    example: {
      title: "The morning production report",
      steps: [
        "Production and downtime data are pulled from approved sources.",
        "Missing or inconsistent records are flagged.",
        "Each well or facility is compared with its baseline.",
        "Maintenance notes are linked to the wells that underperformed.",
        "The operations manager reads the report and decides what to investigate.",
      ],
    },
    offers: [
      {
        name: "Automated operational reporting",
        body: "Daily and weekly production, downtime and maintenance reports, checked before they are sent.",
      },
      {
        name: "Technical documentation assistant",
        body: "Procedures, manuals and inspection records searchable by equipment tag, always pointing to the approved revision.",
      },
      {
        name: "Operations intelligence",
        body: "For larger companies: production, maintenance and ERP data connected for management decisions.",
      },
    ],
    experience:
      "Planning, control and reporting systems for international oil and gas projects, from 2010 to 2020.",
    guardrail: "Read-only connections first. Operating decisions stay with your engineers.",
    whoFor: [
      "Operators and service companies with 30 to 100 staff: one costly process, automated fast",
      "Larger operators: systems connected that do not talk today",
      "Engineering consultancies",
      "Maintenance and equipment contractors",
    ],
    selfCheck: [
      "Which reports or documents take the most manual effort each week?",
      "Which systems hold the underlying data?",
      "What stops you from bringing it together today?",
    ],
  },
];

export type Solution = {
  id: string;
  name: string;
  title: string;
  body: string;
  builds: string[];
  /** Where this solution shows up, by industry name. */
  applies: { industry: string; example: string }[];
  proof: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "document-processing",
    name: "Document processing",
    title: "Documents read, checked and ready for a decision.",
    body: "Applications, specifications, reports and contracts are read, sorted and checked against each other. Your team gets a clean summary with the source of every figure.",
    builds: [
      "Extraction from PDFs, scans and email",
      "Completeness and consistency checks",
      "Search across your documents, with sources",
      "Revision comparison and change summaries",
    ],
    applies: [
      { industry: "Lending & finance", example: "Loan applications, bank statements, company documents" },
      { industry: "Ventilation & HVAC", example: "RFQ specifications, drawings, equipment schedules" },
      { industry: "Agriculture", example: "Soil analyses, field reports, product sheets" },
      { industry: "Construction", example: "Tender packages, RFIs, revised specifications" },
      { industry: "Oil & gas", example: "Procedures, inspection reports, vendor documents" },
    ],
    proof: "Running in the five-company lending portal and in AgroPlatforma.",
  },
  {
    id: "quotation-automation",
    name: "Quotation automation",
    title: "Quotes drafted from the enquiry, approved by your experts.",
    body: "Requirements are pulled from the enquiry, matched against your catalogue and pricing rules, and assembled into a draft quote. Your engineers or managers approve it.",
    builds: [
      "Requirement extraction from enquiries",
      "Matching against your catalogue and product data",
      "Pricing rules and calculations you control",
      "Approval flow and CRM sync",
    ],
    applies: [
      { industry: "Ventilation & HVAC", example: "Technical equipment quotes from RFQs" },
      { industry: "Agriculture", example: "Field visit to quote" },
      { industry: "Construction", example: "Tender analysis and estimation worksheets" },
      { industry: "Oil & gas", example: "Service proposals and equipment quotes" },
    ],
    proof: "AgroPlatforma: field diagnosis to quote in under 30 seconds.",
  },
  {
    id: "reporting",
    name: "Reporting & insight",
    title: "Reports that build themselves and flag what needs attention.",
    body: "Data from separate systems and spreadsheets is brought together, checked and turned into scheduled reports and dashboards. Exceptions are highlighted so managers deal with them first.",
    builds: [
      "Pipelines from the systems you already run",
      "Automated daily, weekly and monthly reports",
      "Dashboards with exception alerts",
      "Read-only connections where operations demand it",
    ],
    applies: [
      { industry: "Lending & finance", example: "Portfolio, overdue and exposure reports" },
      { industry: "Ventilation & HVAC", example: "Quote pipeline and service analytics" },
      { industry: "Agriculture", example: "Sales, stock and seasonal demand" },
      { industry: "Construction", example: "Project progress and cost reports" },
      { industry: "Oil & gas", example: "Production, downtime and maintenance reports" },
    ],
    proof: "Planning, control and reporting systems for oil & gas projects since 2010.",
  },
  {
    id: "request-automation",
    name: "Request automation",
    title: "Requests sorted, enriched and sent to the right person.",
    body: "Emails, forms and service requests are classified, matched to the customer, account or equipment, and routed with a draft reply. Nothing waits in a shared inbox.",
    builds: [
      "Email, form and portal intake",
      "Classification and missing-information checks",
      "Cases created in your existing tools",
      "Draft replies for your team to approve",
    ],
    applies: [
      { industry: "Lending & finance", example: "Borrower questions and servicing requests" },
      { industry: "Ventilation & HVAC", example: "After-sales service and spare-parts requests" },
      { industry: "Agriculture", example: "Dealer orders and customer requests" },
      { industry: "Construction", example: "RFIs and site issues" },
      { industry: "Oil & gas", example: "Maintenance and field service requests" },
    ],
    proof: "Works inside the email, CRM or ticketing tools your team already uses.",
  },
];

/** Why a client should pick us: the four points on the homepage. */
export const WHY_US = [
  {
    title: "We learn your process first.",
    body: "We have worked inside lending, ventilation, agriculture and oil and gas. We talk about loan files, RFQs and field visits, not models.",
  },
  {
    title: "One workflow, not a transformation.",
    body: "We start with the single process that costs you most and get it live in weeks. Then we expand from there.",
  },
  {
    title: "Prepared by AI. Approved by your people.",
    body: "Every system drafts, checks and routes the work. Decisions with consequences stay with your team, and every step is logged.",
  },
  {
    title: "Built into the tools you already use.",
    body: "We connect to your CRM, ERP, lending system or catalogue. Nothing gets replaced, and the code is yours.",
  },
];
