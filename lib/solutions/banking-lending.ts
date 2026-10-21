import type { SolutionPage } from "./types";

export const BANKING_LENDING_PAGES: SolutionPage[] = [
  {
    slug: "commercial-loan-origination-system",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Commercial Loan Origination System Development | Deview",
    seoDescription:
      "Custom commercial loan origination system: deal pipeline, facility structuring, credit memos and committee approval, with handoff to servicing and your core banking.",
    kicker: "Enterprise platforms · Banking",
    h1: "Commercial loan origination system",
    intro:
      "We build custom commercial loan origination systems for banks: the deal pipeline, facility structuring, financial spreading, credit memos, risk rating, committee approval and closing, with a clean handoff to servicing and the core ledger. Larger facilities, borrower groups and multiple guarantors are modelled as they are in the credit file, not flattened into one form. You own the code.",
    modules: [
      {
        title: "Deal pipeline and relationship view",
        body: "Opportunities by stage, owner and expected closing, with the client's existing exposure, products and open tasks on the same screen.",
      },
      {
        title: "Customer and group structure",
        body: "Borrower groups, parents, subsidiaries, guarantors and connected parties held as a structure, so exposure and approval authority are calculated on the group.",
      },
      {
        title: "Facility structuring",
        body: "Tranches, currencies, pricing grids, margin ratchets, fees, availability periods and repayment profiles captured as structured terms rather than free text.",
      },
      {
        title: "Spreading and ratio analysis",
        body: "Financial statements spread to a standard template, with ratios, projections and covenant headroom computed and compared across periods.",
      },
      {
        title: "Credit memo authoring",
        body: "A structured credit memo that pulls in data from the file, keeps versions, and shows the reviewer what changed since the last draft.",
      },
      {
        title: "Risk rating",
        body: "Obligor and facility ratings with the model inputs recorded, so each grade can be reproduced and challenged.",
      },
      {
        title: "Committee workflow",
        body: "Packs assembled for credit committee, decisions and conditions recorded in the system, and approval authority checked against the exposure on the whole group.",
      },
      {
        title: "Documentation and closing",
        body: "Document generation from the approved terms, a conditions-precedent checklist, signature tracking and a closing gate that blocks drawdown until every item is cleared.",
      },
      {
        title: "Booking and handoff",
        body: "Facilities and limits booked to the core and to the servicing system, with covenants and review dates handed over to monitoring.",
      },
    ],
    diagram: {
      title: "Commercial loan origination system: reference architecture",
      desc: "Relationship managers, client financials and internal and external data feed an origination platform with a deal pipeline, facility structuring, spreading, credit memo, committee workflow and closing modules. The platform books to the core, feeds risk and limits, hands over to servicing and monitoring, and produces management information.",
      leftLabel: "Inputs",
      platformLabel: "Origination platform",
      rightLabel: "Bank systems",
      platformTitle: "Origination on your infrastructure",
      left: [
        ["Relationship managers", "Deal pipeline", "Client requests"],
        ["Client financials", "Statements, tax, accounts", "Projections"],
        ["Internal and external data", "Ratings, credit reference", "Sanctions screening"],
      ],
      modules: [
        ["Deal pipeline", "Stages, owners, tasks"],
        ["Facility structuring", "Tranches, pricing, fees"],
        ["Spreading and ratios", "Financials, covenants"],
        ["Credit memo", "Structured and versioned"],
        ["Committee workflow", "Authority, conditions"],
        ["Closing", "Documents, CPs, booking"],
      ],
      strip: "Audit trail · group exposure · document store",
      right: [
        ["Core banking", "Loan accounts, limits"],
        ["Risk and limits", "Exposure, ratings, ECL"],
        ["Servicing and monitoring", "Covenants, reviews"],
        ["Management information", "Pipeline, approvals"],
      ],
    },
    diagramCaption:
      "Reference architecture: origination holds the deal until it is approved and booked, then hands a complete credit file to servicing.",
    standards: [
      {
        name: "BPMN 2.0 and DMN 1.3",
        note: "Workflow and decision-table notations for the approval path and for rating and authority rules, so credit and operations can read and review them.",
      },
      {
        name: "REST and OpenAPI",
        note: "Contracts for booking to the core, pulling client data and publishing events to risk, finance and reporting.",
      },
      {
        name: "ISO 20022",
        note: "Payment and statement messages for drawdown instructions and the reconciliation of fees and repayments.",
      },
      {
        name: "Basel credit risk framework",
        note: "Exposure, collateral and rating data held in the form the bank's capital and risk calculations expect.",
      },
      {
        name: "IFRS 9",
        note: "Stage, exposure and collateral inputs handed to the expected credit loss engine.",
      },
      {
        name: "Data protection law",
        note: "Consent, purpose and retention for personal data of directors, guarantors and beneficial owners.",
      },
    ],
    dataModel: [
      {
        entity: "Client and group",
        holds: "Legal entities, group links, connected parties, ownership, KYB status and relationship manager.",
      },
      {
        entity: "Deal",
        holds: "Requested facilities, stage, purpose, source, owner, documents and the full history of changes.",
      },
      {
        entity: "Facility and tranche",
        holds: "Limit, currency, tenor, pricing grid, fees, repayment profile, availability and conditions.",
      },
      {
        entity: "Spread and ratio set",
        holds: "Statement periods, adjustments, computed ratios, projections and the analyst's notes.",
      },
      {
        entity: "Credit memo and decision",
        holds: "Memo versions, ratings, recommendation, committee outcome, conditions and authority used.",
      },
      {
        entity: "Security and guarantee",
        holds: "Collateral, guarantor, valuation and charge status linked to the facility they support.",
      },
      {
        entity: "Covenant and review",
        holds: "Financial and information covenants, test dates, waivers and the next annual review.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged commercial lending suite fits when your product set is conventional, volumes are modest and your core vendor already licenses a module that your credit team is happy to adopt.",
      },
      {
        title: "Extend",
        body: "Extend when the core handles booking and servicing but the front end is spreadsheets, email and shared drives. We build the pipeline, memo and workflow layer and leave the core as the book of record.",
      },
      {
        title: "Build",
        body: "Build when your credit process, group-level authority rules or sector rating models are specific to the bank, or when you serve a niche such as trade, project or sponsor finance that packaged systems model poorly.",
      },
    ],
    security: [
      {
        title: "Information barriers",
        body: "Access by team, deal and client, with restricted deals hidden from everyone outside the deal team.",
      },
      {
        title: "Four-eyes and authority limits",
        body: "Approvals checked against the authority matrix on group exposure; changes to terms after approval send the deal back for re-approval.",
      },
      {
        title: "Audit of every version",
        body: "Memo versions, rating changes and committee decisions are kept with user and time, and cannot be overwritten.",
      },
      {
        title: "Document protection",
        body: "Encrypted storage, watermarking on exported packs and controlled sharing with external counsel.",
      },
      {
        title: "Hosting",
        body: "Your own cloud account, region or data centre, with release controls aligned to the bank's change policy.",
      },
    ],
    phases: [
      {
        title: "Credit process mapping",
        body: "We follow a recent set of deals from first meeting to closing with relationship managers, credit analysts and operations, and record each handoff and document.",
      },
      {
        title: "Architecture and data design",
        body: "The deal, group and facility model is agreed with credit and risk, along with the interfaces to the core, risk, document and CRM systems.",
      },
      {
        title: "Build in releases",
        body: "Pipeline and facility structuring ship first, then spreading and memo, then committee workflow and closing, each tested by the credit team.",
      },
      {
        title: "Pilot with one team",
        body: "A single sector or region team runs live deals on the system while the old process stays available as a fallback.",
      },
      {
        title: "Roll-out and extension",
        body: "More teams, products and rating models are added, with monitoring and support from the same engineers.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
    ],
    faqs: [
      {
        q: "How is commercial origination different from SME lending?",
        a: "SME lending is high volume and standardised, so it leans on rules and data intake. Commercial origination is lower volume with bespoke terms, borrower groups, multiple guarantors and committee approval, so the system centres on structuring, the credit memo and group-level authority.",
      },
      {
        q: "Will it replace our core banking system?",
        a: "No. Origination books the approved facility to the core or to your loan servicing system through an agreed interface. The core remains the book of record.",
      },
      {
        q: "Can the credit memo be generated automatically?",
        a: "The structure, the data and the ratios fill in automatically. The analyst writes the judgement sections. A drafting assistant can propose text from the file, but the analyst reviews and owns every word.",
      },
      {
        q: "How are group limits and connected exposure handled?",
        a: "The client structure is a first-class model. Exposure is aggregated up the group and across connected parties, and the authority check uses that total rather than the single facility.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours, and the system runs in your own environment.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "Credit approval workflow software", href: "/solutions/credit-approval-workflow-software" },
      { label: "Collateral and guarantee management", href: "/solutions/collateral-and-guarantee-management-system" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "credit-approval-workflow-software",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Credit Approval Workflow and Authority Software | Deview",
    seoDescription:
      "Custom credit approval workflow software for banks: delegated authority matrix, four-eyes review, committee routing, SLA timers and a reproducible decision log.",
    kicker: "Enterprise platforms · Banking",
    h1: "Credit approval workflow and delegated authority software",
    intro:
      "We build credit approval workflow and delegated authority software for banks and lenders: the matrix of who may approve what, routing to the right people in the right order, escalation when a step stalls, and a decision log that keeps the inputs behind every outcome. It works with your origination and servicing systems rather than replacing them, and you own the code.",
    modules: [
      {
        title: "Authority matrix",
        body: "Approval limits by amount, product, risk grade, tenor, collateral cover and customer group, held as versioned tables that credit risk owns and can change without a release.",
      },
      {
        title: "Workflow engine",
        body: "Serial, parallel and conditional routing, with the path calculated from the case itself rather than chosen by the person who submits it.",
      },
      {
        title: "Four-eyes and independence",
        body: "Rules that stop the originator approving their own case, that require a second function for certain exceptions, and that block conflicted reviewers.",
      },
      {
        title: "Committee packs and sessions",
        body: "Agenda, pack assembly, voting or sign-off, minutes and recorded conditions for each committee, whether it meets live or circulates papers.",
      },
      {
        title: "Policy exceptions",
        body: "Exceptions raised as structured items with a reason code, an approver level and an expiry, so they can be reported and reviewed as a population.",
      },
      {
        title: "Delegation and absence",
        body: "Temporary delegation with a validity window, automatic reassignment when an approver is away and a record of who acted on whose authority.",
      },
      {
        title: "Service-level timers",
        body: "Clocks per step, reminders and escalation to a line manager, with queue and turnaround reports by team and product.",
      },
      {
        title: "Conditions of approval",
        body: "Conditions attached to the decision and tracked to completion, so a drawdown cannot proceed while one is open.",
      },
      {
        title: "Decision log and evidence",
        body: "Every decision stored with the inputs, rules and model versions, the people involved and the time, so it can be reproduced for audit or a regulator.",
      },
    ],
    diagram: {
      title: "Credit approval workflow: reference architecture",
      desc: "Origination, servicing and policy owners feed a workflow platform with an authority matrix, workflow engine, four-eyes rules, committee packs, exceptions and a decision log. Decisions return to the lending systems, risk reporting and audit.",
      leftLabel: "Inputs",
      platformLabel: "Approval platform",
      rightLabel: "Consumers",
      platformTitle: "Approval workflow platform",
      left: [
        ["Origination system", "Case, terms, exposure"],
        ["Servicing system", "Amendments, restructures"],
        ["Credit policy owners", "Authority tables, rules"],
      ],
      modules: [
        ["Authority matrix", "Versioned limits and rules"],
        ["Workflow engine", "Serial, parallel, conditional"],
        ["Four-eyes rules", "Independence, conflicts"],
        ["Committee packs", "Agenda, minutes, votes"],
        ["Exceptions", "Reason codes, expiry"],
        ["Decision log", "Inputs and versions kept"],
      ],
      strip: "Timers · delegation · notifications · audit trail",
      right: [
        ["Lending systems", "Decision and conditions"],
        ["Risk reporting", "Exceptions, overrides"],
        ["Internal audit", "Decision evidence"],
        ["Management information", "Turnaround, queues"],
      ],
    },
    diagramCaption:
      "Reference architecture: the approval platform decides who must approve, records what they saw, and returns the outcome to the lending systems.",
    standards: [
      {
        name: "BPMN 2.0",
        note: "The notation for the approval paths, drawn so credit, risk and operations can read the same diagram that the engine runs.",
      },
      {
        name: "DMN 1.3",
        note: "Decision tables for authority and routing rules, owned by credit risk and testable before they go live.",
      },
      {
        name: "OpenAPI and webhooks",
        note: "How origination and servicing systems submit cases and receive decisions without polling.",
      },
      {
        name: "SSO with SAML or OpenID Connect",
        note: "Identity and role claims from the bank's directory, so authority follows the person's current position.",
      },
      {
        name: "Event streaming",
        note: "Decision and exception events published for risk reporting and audit data stores.",
      },
      {
        name: "Supervisory expectations on governance",
        note: "Clear lines of approval, independence and record-keeping that internal audit and regulators ask to see.",
      },
    ],
    dataModel: [
      {
        entity: "Case",
        holds: "The item to approve, its source system, requested terms, exposure, risk grade and documents.",
      },
      {
        entity: "Authority rule",
        holds: "Conditions, approver level, version, effective dates and the person who changed it.",
      },
      {
        entity: "Approval step",
        holds: "Assigned role, assignee, due time, outcome, comment and the authority under which they acted.",
      },
      {
        entity: "Committee session",
        holds: "Date, members present, cases heard, votes, minutes and recorded conditions.",
      },
      {
        entity: "Exception",
        holds: "Policy breached, reason code, approver, expiry and whether it has been closed or renewed.",
      },
      {
        entity: "Delegation",
        holds: "Delegator, delegate, scope, start and end, and the cases decided under it.",
      },
      {
        entity: "Decision record",
        holds: "Final outcome with the rule, model and data versions that produced the routing.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Workflow modules in packaged lending or banking suites work when your approval matrix is simple and your lending systems are all from one vendor.",
      },
      {
        title: "Extend",
        body: "Extend when several lending systems each have their own partial approval logic. We build one approval layer in front of them so authority, exceptions and committees work the same way everywhere.",
      },
      {
        title: "Build",
        body: "Build when authority depends on group exposure, collateral cover or sector limits, or when audit and the regulator ask for evidence that packaged systems do not keep.",
      },
    ],
    security: [
      {
        title: "Separation of duties",
        body: "The system enforces who cannot approve what, rather than relying on training or convention.",
      },
      {
        title: "Tamper-evident log",
        body: "Decisions and rule changes are append-only, with the previous value, the user and the time.",
      },
      {
        title: "Change control on rules",
        body: "Changes to the authority matrix need a maker and a checker, are tested against historical cases and take effect on a stated date.",
      },
      {
        title: "Role-based access",
        body: "Case content is visible only to people on the route, with restricted cases hidden from everyone else.",
      },
      {
        title: "Availability",
        body: "Queues and timers survive a restart, and a case never loses its place if a component fails.",
      },
    ],
    phases: [
      {
        title: "Authority and policy review",
        body: "We read the credit policy and delegation documents with credit risk and compare them with how approvals really move today.",
      },
      {
        title: "Rules and workflow design",
        body: "The matrix, routing and independence rules are written as decision tables and flow diagrams and signed off by the policy owners.",
      },
      {
        title: "Integration with lending systems",
        body: "Submission, decision and condition interfaces are built and tested against each lending system's test environment.",
      },
      {
        title: "Replay against history",
        body: "Last year's cases run through the new rules to show where routing would have differed, before anything goes live.",
      },
      {
        title: "Go-live and tuning",
        body: "Teams move across in turn; timers, queues and reports are tuned with the people who use them.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Commercial loan origination system", href: "/solutions/commercial-loan-origination-system" },
    ],
    faqs: [
      {
        q: "Can the authority matrix be changed without a software release?",
        a: "Yes. The matrix is data, not code. Credit risk edits it under maker-checker control, tests it against past cases and publishes it with an effective date.",
      },
      {
        q: "How does it work with several lending systems?",
        a: "Each system submits cases through an API and receives the decision and conditions back. The approval layer holds the matrix, the route and the evidence in one place.",
      },
      {
        q: "Can we replay past cases before go-live?",
        a: "Yes. Historical cases are run through the new rules and compared with what actually happened, so differences are explained before they reach a live case.",
      },
      {
        q: "Does it support committees that meet in person?",
        a: "Yes. Packs are built from the file, the committee records votes and conditions in the session, and minutes are attached to each case.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the rules and the decision history stay yours.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "collateral-and-guarantee-management-system",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Collateral and Guarantee Management System | Deview",
    seoDescription:
      "Custom collateral and guarantee management system for banks: security register, valuations, charge status, insurance, guarantor links and loan-to-value monitoring.",
    kicker: "Enterprise platforms · Banking",
    h1: "Collateral and guarantee management system",
    intro:
      "We build custom collateral and guarantee management systems for banks and lenders: a register of every security and guarantee, valuations and loan-to-value tracking, charge and registration status, insurance, and the link from each item to the facilities it supports. The register feeds credit decisions, capital and provisioning calculations and the release of security at the end of a loan. You own the code.",
    modules: [
      {
        title: "Security register",
        body: "Every collateral item, from property and deposits to receivables, vehicles, equipment and shares, held once and linked to every facility it secures.",
      },
      {
        title: "Valuation tracking",
        body: "Valuation history by item, valuer and method, with due dates, reminders and a flag when a valuation is stale or the value has fallen.",
      },
      {
        title: "Loan-to-value and cover",
        body: "Cover calculated per facility and per customer group after haircuts, prior charges and shared security, recalculated whenever a value or balance moves.",
      },
      {
        title: "Charge and perfection tracking",
        body: "A checklist per asset type for charges, registrations and filings, with status, dates and the documents that evidence each step.",
      },
      {
        title: "Insurance monitoring",
        body: "Policies, insured values, beneficiaries and expiry dates, with renewal reminders and a list of items that are uninsured.",
      },
      {
        title: "Guarantors and guarantees",
        body: "Personal, corporate and third-party guarantees, their limits, expiry and enforceability checks, and coverage under government-backed guarantee schemes where the bank takes part.",
      },
      {
        title: "Collateral eligibility",
        body: "Rules that decide whether an item qualifies as credit risk mitigation, with the reason recorded, so capital calculations use consistent inputs.",
      },
      {
        title: "Release and substitution",
        body: "Release of security once a loan is repaid, partial release and substitution, each with an approval and a record of the documents returned.",
      },
      {
        title: "Custody and documents",
        body: "Location and movement of original documents, with a log of who took what and when.",
      },
    ],
    diagram: {
      title: "Collateral and guarantee management system: reference architecture",
      desc: "Valuers, registries and insurers, together with origination and servicing systems, feed a collateral platform with a security register, valuation tracking, loan-to-value, charge tracking, insurance and guarantees. The platform returns cover and eligibility to credit, risk and finance systems.",
      leftLabel: "Sources",
      platformLabel: "Collateral platform",
      rightLabel: "Consumers",
      platformTitle: "Collateral and guarantee platform",
      left: [
        ["Valuers and price feeds", "Property, vehicles, shares"],
        ["Registries and insurers", "Charge status, policies"],
        ["Origination and servicing", "Facilities, balances"],
      ],
      modules: [
        ["Security register", "Items linked to facilities"],
        ["Valuation tracking", "History, due dates"],
        ["Loan-to-value", "Cover after haircuts"],
        ["Charge tracking", "Perfection checklists"],
        ["Insurance", "Policies and expiry"],
        ["Guarantees", "Limits, expiry, schemes"],
      ],
      strip: "Audit trail · document custody · approvals",
      right: [
        ["Credit decisions", "Cover at approval"],
        ["Capital and risk", "Eligible mitigation"],
        ["Provisioning", "Collateral for ECL"],
        ["Monitoring", "Alerts and reviews"],
      ],
    },
    diagramCaption:
      "Reference architecture: one register of security and guarantees, kept current by external feeds and read by credit, risk and finance.",
    standards: [
      {
        name: "Basel credit risk mitigation",
        note: "Eligibility, haircut and cover rules that decide how collateral reduces exposure for capital purposes.",
      },
      {
        name: "IFRS 9",
        note: "Collateral values and cover supplied to the expected credit loss model, with the valuation date recorded.",
      },
      {
        name: "Registry and filing interfaces",
        note: "Company, land and security registries, accessed through the interfaces or files each jurisdiction offers.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces for origination, servicing, valuation providers and the data warehouse.",
      },
      {
        name: "Market data feeds",
        note: "Prices for listed shares, funds and commodities, so margin and cover are calculated from current values.",
      },
      {
        name: "Data protection law",
        note: "Personal data of guarantors and asset owners kept for a defined purpose and period.",
      },
    ],
    dataModel: [
      {
        entity: "Collateral item",
        holds: "Type, description, owner, location, identifiers, current value and the valuation behind it.",
      },
      {
        entity: "Valuation",
        holds: "Date, valuer, method, basis (market or forced sale), amount and the report document.",
      },
      {
        entity: "Charge and registration",
        holds: "Ranking, prior charges, filing dates and references, status and the evidence for each step.",
      },
      {
        entity: "Security link",
        holds: "Which facilities an item secures, the share allocated and any cross-collateral conditions.",
      },
      {
        entity: "Guarantee",
        holds: "Guarantor, guaranteed obligation, limit, expiry, scheme coverage and legal opinion status.",
      },
      {
        entity: "Insurance policy",
        holds: "Insurer, insured value, beneficiary, period and renewal status.",
      },
      {
        entity: "Release event",
        holds: "Item, reason, approver, documents returned and date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged collateral module is a good fit when your security types are few, your lending runs on a single platform and valuations are mostly manual.",
      },
      {
        title: "Extend",
        body: "Extend when collateral data sits in several lending systems and spreadsheets. We build a register that sits above them, keeps the single view and publishes cover back to each system.",
      },
      {
        title: "Build",
        body: "Build when you lend against unusual assets, run shared security across group companies or participate in guarantee schemes with their own tracking and reporting rules.",
      },
    ],
    security: [
      {
        title: "Approval on value changes",
        body: "Manual valuation overrides and release of security require approval from a second person, with the reason recorded.",
      },
      {
        title: "Document custody log",
        body: "Movement of original documents is logged to a named person, with reminders for items out of the vault.",
      },
      {
        title: "Access by role and portfolio",
        body: "Credit, legal, operations and valuers see only the fields and customers their role needs.",
      },
      {
        title: "Audit trail",
        body: "Every change to an item, link or valuation keeps the earlier value, the user and the time.",
      },
      {
        title: "Resilience",
        body: "Recovery objectives agreed with the bank, with valuation feeds and registry interfaces that retry without duplicating entries.",
      },
    ],
    phases: [
      {
        title: "Inventory of security types",
        body: "We list every collateral and guarantee type the bank takes, where each is recorded today and what the credit and legal teams need to know about it.",
      },
      {
        title: "Register and rules design",
        body: "The item model, cover calculations and eligibility rules are agreed with credit, legal and risk, together with the registry and valuation interfaces.",
      },
      {
        title: "Build and migrate",
        body: "The register is built by asset type, starting with the largest portfolio, and existing items are loaded and reconciled to the lending systems.",
      },
      {
        title: "Run alongside",
        body: "Cover figures from the register are compared with the old process until the differences are explained.",
      },
      {
        title: "Switch over and extend",
        body: "Lending systems read cover from the register; new asset types, feeds and reports are added as needed.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "SME loan management system for banks", href: "/solutions/sme-loan-management-system-for-banks" },
    ],
    faqs: [
      {
        q: "Does the register replace our lending systems?",
        a: "No. Lending systems keep the loan. The register holds the security and guarantees and publishes cover and status back to them.",
      },
      {
        q: "Can one item secure several facilities?",
        a: "Yes. The link between item and facility records the allocated share and any cross-collateral terms, so cover is not counted twice.",
      },
      {
        q: "How are stale valuations handled?",
        a: "Each item has a valuation due date. Items past due appear in a worklist and are flagged on the facilities they secure, and credit decisions show the age of the value used.",
      },
      {
        q: "Can it track government-backed guarantee schemes?",
        a: "Yes, where the bank takes part. Scheme coverage, claims windows and reporting needs are modelled per scheme, using the rules the scheme publishes.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "Commercial loan origination system", href: "/solutions/commercial-loan-origination-system" },
      { label: "Credit approval workflow software", href: "/solutions/credit-approval-workflow-software" },
      { label: "Loan management system checklist", href: "/resources/loan-management-system-checklist" },
    ],
    updated: "2026-10-15",
  },
];
