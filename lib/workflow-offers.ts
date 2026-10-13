/**
 * What we ship (four service lines) and what we build per industry. Service lines feed the
 * homepage and /services; the industry chapters feed the playbook. Deview is a custom
 * software development company that also ships cloud security, AI automation and consulting.
 * English only (the site has no translations).
 */

export const PLAYBOOK_PATH = "/resources/automation-playbook";
export const PLAYBOOK_GUIDE_PATH = "/resources/automation-playbook/guide";
/** Set in sessionStorage after a successful sign-up; the guide checks it before showing. */
export const PLAYBOOK_ACCESS_KEY = "deview-playbook";

export type ServiceLine = {
  id: string;
  name: string;
  /** One short line: used on the homepage. */
  title: string;
  body: string;
  builds: string[];
  /** Where this service line shows up, by industry name. */
  applies: { industry: string; example: string }[];
  proof: string;
  /** Older anchors (the three practices) that should still land on this section. */
  aliases?: string[];
};

/** What we ship. Software development is the specialisation; the other three support it. */
export const SERVICE_LINES: ServiceLine[] = [
  {
    id: "software-development",
    name: "Software development",
    title: "Custom platforms, portals, apps and integrations.",
    body: "Web platforms, client portals, internal systems, mobile apps and SaaS products, engineered from architecture to production. You own the code.",
    builds: [
      "Web platforms and client portals",
      "Internal business systems",
      "Mobile apps",
      "SaaS products",
      "APIs, integrations and data pipelines",
    ],
    applies: [
      { industry: "Lending & finance", example: "Loan management platforms and borrower portals" },
      { industry: "Ventilation & HVAC", example: "Product selection and quoting tools" },
      { industry: "Agriculture", example: "Field apps and dealer platforms" },
      { industry: "Construction", example: "Project control and reporting systems" },
      { industry: "Oil & gas", example: "Planning, control and reporting systems" },
    ],
    proof: "AgroPlatforma, Covenant Desk and a five-company lending portal.",
    aliases: ["software-engineering", "data-science"],
  },
  {
    id: "cloud-security",
    name: "Cloud security",
    title: "Secure cloud infrastructure, including the AI inside it.",
    body: "We build, migrate and secure infrastructure on AWS, Google Cloud and Azure, and protect the AI systems running in it.",
    builds: [
      "Cloud architecture and migration",
      "Access control, encryption and data residency",
      "Monitoring, logging and alerts",
      "AI security: private models, prompt-injection and data-leak protection",
      "Compliance with GDPR, PDPO, HKMA and MAS TRM",
    ],
    applies: [
      { industry: "Lending & finance", example: "Borrower data and regulator audits" },
      { industry: "Ventilation & HVAC", example: "Customer projects and pricing" },
      { industry: "Agriculture", example: "Grower and supplier data" },
      { industry: "Construction", example: "Tender and contract documents" },
      { industry: "Oil & gas", example: "Separation from operational technology" },
    ],
    proof: "Every system we deliver runs in the client’s own cloud.",
  },
  {
    id: "ai-automation",
    name: "AI automation",
    title: "AI agents and automation built into your systems.",
    body: "AI agents, document processing, knowledge search and automated reporting, connected to your data. Your people keep the final say.",
    builds: [
      "AI agents and assistants",
      "Document processing and data extraction",
      "Search over your own documents",
      "Automated reports and dashboards",
      "Forecasting models",
    ],
    applies: [
      { industry: "Lending & finance", example: "Credit document checks" },
      { industry: "Ventilation & HVAC", example: "RFQ specifications to draft quotes" },
      { industry: "Agriculture", example: "Field diagnostics" },
      { industry: "Construction", example: "Tender and revision analysis" },
      { industry: "Oil & gas", example: "Production reporting" },
    ],
    proof: "AgroPlatforma: field diagnosis to quote in under 30 seconds.",
    aliases: ["ai-solutions"],
  },
  {
    id: "tech-consulting",
    name: "Tech consulting",
    title: "Clear technical decisions before you spend on a build.",
    body: "Architecture, technology choices and AI plans reviewed by engineers who build systems, with costs and risks set out up front.",
    builds: [
      "Technology strategy and roadmaps",
      "Architecture and code reviews",
      "Build-or-buy and vendor selection",
      "AI readiness and use-case assessment",
    ],
    applies: [
      { industry: "Lending & finance", example: "Platform and compliance architecture" },
      { industry: "Ventilation & HVAC", example: "Digital sales and quoting roadmap" },
      { industry: "Agriculture", example: "Field and CRM system choices" },
      { industry: "Construction", example: "Project system selection" },
      { industry: "Oil & gas", example: "Reporting and data architecture" },
    ],
    proof: "Grounded in 15+ years of building enterprise systems.",
  },
];

export type IndustryOffer = {
  id: "lending" | "ventilation" | "agriculture" | "construction" | "oil-and-gas";
  /** Tab and chapter name. */
  name: string;
  /** The problem, short enough for a tab. */
  problem: string;
  /** What we build, in one line. */
  headline: string;
  summary: string;
  /** What a typical build includes: the last module is always about control and security. */
  build: { title: string; modules: string[] };
  offers: { name: string; body: string }[];
  /** Work we have done that makes this credible. */
  experience: string;
  /** What stays with the client's people, and how the system stays safe. */
  control: string;
  /** Playbook only: who it is for, and questions to check their own situation. */
  whoFor: string[];
  selfCheck: string[];
};

export const INDUSTRY_OFFERS: IndustryOffer[] = [
  {
    id: "lending",
    name: "Lending & finance",
    problem: "Lending run on spreadsheets.",
    headline: "Lending platforms built for how your team lends.",
    summary:
      "We build loan management platforms, borrower portals, and the AI and security around them, so every loan runs from enquiry to final repayment in one system.",
    build: {
      title: "A typical lending platform",
      modules: [
        "Borrower portal for applications and documents",
        "Credit workflow with document AI and automatic checks",
        "Loan servicing, repayments and collections",
        "One borrower view across every company in the group",
        "Access control, audit trails and regulatory exports",
      ],
    },
    offers: [
      {
        name: "Loan management platforms",
        body: "Enquiry, credit review, agreements, repayments and collections in one system.",
      },
      {
        name: "Borrower and client portals",
        body: "Applications, documents and repayment status online for your borrowers.",
      },
      {
        name: "AI and security for lending data",
        body: "Document AI and risk flags with audit-ready security. Credit decisions stay with your team.",
      },
    ],
    experience:
      "We built the lending platform behind Covenant Desk and a portal that gives five lending companies one view of every borrower.",
    control:
      "Credit decisions stay with your team. Borrower data stays in your cloud, and every action is logged.",
    whoFor: [
      "Private lenders and licensed money lenders",
      "SME and consumer finance companies",
      "Lending groups running several companies",
      "Loan servicing businesses",
    ],
    selfCheck: [
      "Which parts of lending still run on spreadsheets or email?",
      "How many systems hold information about the same borrower?",
      "Could you show an auditor who changed what, and when?",
    ],
  },
  {
    id: "ventilation",
    name: "Ventilation & HVAC",
    problem: "Selection and quotes in spreadsheets.",
    headline: "Software that selects, quotes and sells technical equipment.",
    summary:
      "We build product selection and quoting software, customer and distributor portals, and technical websites for ventilation manufacturers and distributors.",
    build: {
      title: "A typical selection and quoting platform",
      modules: [
        "Product catalogue with technical data and datasheets",
        "Selection tool built on your own calculation rules",
        "RFQ intake, with AI reading the specification",
        "Quotes generated and synced to your CRM",
        "Engineer approval before any quote goes out",
      ],
    },
    offers: [
      {
        name: "Selection and quoting software",
        body: "Your catalogue, calculation rules and pricing in one tool that drafts quotes for engineers to approve.",
      },
      {
        name: "Customer and distributor portals",
        body: "Orders, documents, project status and spare parts online for your partners.",
      },
      {
        name: "Technical websites",
        body: "Sites that explain your engineering to designers and developers and bring in project enquiries.",
      },
    ],
    experience:
      "We built the Jetfans site on car-park ventilation, smoke extraction and CFD modelling, so we know how this equipment is specified and sold.",
    control: "Equipment selection, smoke control and compliance stay with qualified engineers.",
    whoFor: [
      "Ventilation equipment manufacturers",
      "Equipment distributors",
      "HVAC engineering firms",
      "Installation contractors",
    ],
    selfCheck: [
      "Where do your product data, calculation rules and datasheets live today?",
      "How long does it take to turn an RFQ into a quote?",
      "What do your distributors still have to email or phone you for?",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    problem: "Field work disconnected from sales.",
    headline: "Field, sales and supply connected in one platform.",
    summary:
      "We build mobile field apps, dealer and ordering platforms and the AI behind them, so agricultural suppliers run field visits, quotes and orders in one place.",
    build: {
      title: "AgroPlatforma, as built",
      modules: [
        "Mobile app for field consultants",
        "AI agents for field diagnostics and product choice",
        "Live catalogue of more than 20,000 products",
        "Quote drafts created inside Salesforce",
        "Consultant review before a quote reaches the farmer",
      ],
    },
    offers: [
      {
        name: "Field apps",
        body: "Mobile apps for agronomists and sales reps that work at the farm and sync to your CRM.",
      },
      {
        name: "Dealer and ordering platforms",
        body: "Catalogue, customer pricing, orders and delivery status for your dealers.",
      },
      {
        name: "Sales and demand analytics",
        body: "Seasonal demand, stock and reorder patterns from your own data.",
      },
    ],
    experience:
      "AgroPlatforma: three AI agents built into Salesforce and a mobile app, taking field diagnosis to a quote in under 30 seconds.",
    control: "Agronomic advice stays with your agronomists.",
    whoFor: [
      "Fertiliser and crop-input distributors",
      "Seed and crop-protection suppliers",
      "Agricultural equipment dealers",
      "Agribusiness groups with regional sales teams",
    ],
    selfCheck: [
      "How do field reps record what a customer needs?",
      "Is field information connected to your CRM and stock?",
      "How do your dealers place orders and check delivery today?",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    problem: "Projects tracked in spreadsheets.",
    headline: "Project control software built for contractors.",
    summary:
      "We build project planning, control and reporting systems, tender and document platforms, and site apps for mechanical and specialist contractors.",
    build: {
      title: "A typical project control system",
      modules: [
        "Plans, budgets and schedules in one place",
        "Site reports and timesheets from a mobile app",
        "Tender and document management with revision tracking",
        "Cost and schedule dashboards with early warnings",
        "Role-based access for staff, subcontractors and clients",
      ],
    },
    offers: [
      {
        name: "Project control and reporting",
        body: "Plans, budgets, progress and cost in one system, with reports that assemble themselves.",
      },
      {
        name: "Tender and document platforms",
        body: "Tender packages, specifications and revisions in one searchable place, with AI to compare versions.",
      },
      {
        name: "Site and field apps",
        body: "Daily reports, timesheets and issues captured on site and synced to the office.",
      },
    ],
    experience:
      "Our team built project planning, control and reporting systems for large energy projects from 2010 to 2020.",
    control: "Design, calculations and code compliance stay with your engineers.",
    whoFor: [
      "Mechanical and electrical contractors",
      "Specialist subcontractors",
      "Engineering and design firms",
      "General contractors with heavy document control",
    ],
    selfCheck: [
      "Where do budgets, schedules and progress live today?",
      "How do you find out what changed between two revisions?",
      "How long does the weekly project report take to assemble?",
    ],
  },
  {
    id: "oil-and-gas",
    name: "Oil & gas",
    problem: "Operations data in silos.",
    headline: "Planning, control and reporting systems for oil and gas.",
    summary:
      "We build planning, control and reporting systems, engineering document platforms and operations data platforms, connected to the systems you already run.",
    build: {
      title: "A typical operations reporting platform",
      modules: [
        "Read-only connections to production and maintenance systems",
        "Data checks before anything reaches a report",
        "Daily production and downtime reporting",
        "Technical documents searchable by equipment tag",
        "Access control and audit trails across every site",
      ],
    },
    offers: [
      {
        name: "Planning, control and reporting systems",
        body: "The kind of system our team built for international oil and gas projects from 2010 to 2020.",
      },
      {
        name: "Engineering document platforms",
        body: "Procedures, manuals and vendor documents, versioned and searchable.",
      },
      {
        name: "Operations data platforms",
        body: "Production, maintenance and ERP data connected for management decisions, without replacing existing systems.",
      },
    ],
    experience:
      "Planning, control and reporting systems for international oil and gas projects, from 2010 to 2020.",
    control: "Read-only connections first. Operating decisions stay with your engineers.",
    whoFor: [
      "Operators and service companies with 30 to 100 staff",
      "Larger operators whose systems do not talk to each other",
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

/** The four automations behind AI automation, shown at the bottom of /services as they first shipped. */
export type AutomationSolution = {
  id: string;
  name: string;
  title: string;
  body: string;
  builds: string[];
  /** Where this solution shows up, by industry name. */
  applies: { industry: string; example: string }[];
  proof: string;
};

export const AUTOMATION_SOLUTIONS: AutomationSolution[] = [
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
