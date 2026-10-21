import type { SolutionPage } from "./types";

export const BANKING_PAGES: SolutionPage[] = [
  {
    slug: "sme-loan-management-system-for-banks",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "SME Loan Management System for Banks | Deview",
    seoDescription:
      "Custom SME loan management system for banks: application intake, credit workflow, collateral, servicing and regulatory reporting, integrated with your core banking.",
    kicker: "Enterprise platforms · Banking",
    h1: "SME loan management system for banks",
    intro:
      "We build custom SME loan management systems for banks: application intake, credit assessment, approval workflow, collateral and guarantee tracking, servicing, collections and regulatory reporting. The system runs next to your core banking platform, posts to its ledger and reads from your payment, credit-reference and data-exchange sources. You own the code.",
    modules: [
      {
        title: "Application and onboarding",
        body: "A structured SME application with company, director, authorised signatory and beneficial owner capture, KYB checks and a document checklist per product.",
      },
      {
        title: "Consented data intake",
        body: "Bank statements, accounting and tax data, trade and e-commerce data and credit-reference reports pulled with the borrower's consent, including through shared data infrastructure such as the HKMA Commercial Data Interchange where the bank is connected.",
      },
      {
        title: "Credit assessment and scoring",
        body: "Financial spreading, cash-flow analysis, a rule engine and scorecards with reason codes, and policy exceptions recorded with who approved them and why.",
      },
      {
        title: "Approval workflow",
        body: "A delegated authority matrix, four-eyes review, committee routing, service-level timers and a decision log that keeps the inputs behind every outcome.",
      },
      {
        title: "Collateral and guarantees",
        body: "A security register with valuations, charge and lien status, insurance expiry, guarantor links and coverage under government-backed guarantee schemes where the bank participates.",
      },
      {
        title: "Documentation and disbursement",
        body: "Facility letters generated from the approved terms, e-signature, conditions-precedent tracking and disbursement instructions sent to the core and the payment system.",
      },
      {
        title: "Loan servicing",
        body: "Instalment, balloon and revolving facilities, interest accrual, floating-rate resets, fees, prepayment, restructuring and top-ups handled without manual recalculation.",
      },
      {
        title: "Monitoring and collections",
        body: "Covenant tests, early-warning signals, days-past-due buckets, a watchlist, restructuring workflow, write-off and recovery tracking.",
      },
      {
        title: "Provisioning and reporting",
        body: "Staging inputs for expected credit loss calculation, feeds for regulatory returns, portfolio dashboards and an audit trail that regulators and auditors can read.",
      },
    ],
    diagram: "sme-lending",
    diagramCaption:
      "Reference architecture: one lending platform between borrower channels, data sources and the bank's core, payments and finance systems.",
    standards: [
      {
        name: "ISO 20022",
        note: "pain.001 for payment initiation and camt.053 for account statements, so disbursements and repayments reconcile automatically.",
      },
      {
        name: "REST and OpenAPI, event streaming",
        note: "Contracts agreed with the core banking team; events published for downstream finance and reporting systems.",
      },
      {
        name: "HKMA Commercial Data Interchange",
        note: "Consent-based SME data requested through the interface when the bank is a participant. Participation and data-provider agreements stay with the bank.",
      },
      {
        name: "HKFRS 9 / IFRS 9",
        note: "Staging and exposure data prepared for the bank's expected credit loss engine.",
      },
      {
        name: "HKMA supervisory guidance",
        note: "Technology risk management (TM-G-1), outsourcing (SA-2) and cyber resilience (C-RAF) shape access control, logging and recovery design.",
      },
      {
        name: "PDPO",
        note: "Consent, purpose and retention rules for personal data of directors, guarantors and owners.",
      },
    ],
    dataModel: [
      {
        entity: "Customer",
        holds: "Legal entity, group links, directors, authorised signatories, beneficial owners, KYB status and risk rating.",
      },
      {
        entity: "Application",
        holds: "Product, requested terms, purpose, source channel, documents, data pulls and their consent records.",
      },
      {
        entity: "Assessment and decision",
        holds: "Spread financials, scores, rule outcomes, reason codes, exceptions, approvals and the authority that signed.",
      },
      {
        entity: "Facility and loan account",
        holds: "Limits, tranches, rate basis and margin, schedule, fees, status, and the link to the core banking account.",
      },
      {
        entity: "Collateral and guarantee",
        holds: "Asset, valuation history, charge registration, insurance, guarantor and any scheme coverage.",
      },
      {
        entity: "Covenant and event",
        holds: "Tests, results, waivers, downgrade triggers and collection actions with owners and dates.",
      },
      {
        entity: "Transaction and schedule",
        holds: "Disbursements, repayments, accruals and adjustments, each linked to a payment message or ledger entry.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A vendor loan system is the right call when your products are conventional, your core banking vendor offers a lending module you already license, and your approval process fits its workflow. Buying is faster and carries less to maintain.",
      },
      {
        title: "Extend",
        body: "Extend when the core or a vendor system handles the ledger well but your SME process around it is manual: intake, data collection, the approval path, covenant monitoring or collateral. We build the layer in front and keep the vendor system as the book of record.",
      },
      {
        title: "Build",
        body: "Build when your credit policy, data sources, authority matrix or product set is what sets you apart, when several legacy systems must be joined, or when you want to launch an SME product without waiting for a vendor roadmap.",
      },
    ],
    security: [
      {
        title: "Segregation of duties",
        body: "Role and attribute-based access, maker-checker on every change to terms and limits, and approval authority enforced by the system rather than by convention.",
      },
      {
        title: "Audit trail",
        body: "An append-only record of every decision, edit and data pull, with the user, time and previous value.",
      },
      {
        title: "Data protection",
        body: "Encryption in transit and at rest, field-level protection for personal data, and retention rules applied automatically.",
      },
      {
        title: "Data residency and hosting",
        body: "The platform runs in your own cloud account, region or data centre, with environments and release controls that match your change-management policy.",
      },
      {
        title: "Resilience",
        body: "Recovery objectives agreed up front, tested restores, and idempotent posting to the core so a retry never books a payment twice.",
      },
    ],
    phases: [
      {
        title: "Discovery and process map",
        body: "We map the SME lending process end to end with credit, operations, risk and IT: products, authority levels, data sources and the controls each step needs.",
      },
      {
        title: "Architecture and integration design",
        body: "Interfaces to the core, payments, credit reference and finance are specified and agreed with their owners before anything is built.",
      },
      {
        title: "Build in releases",
        body: "The platform ships in working releases, usually starting with intake and workflow, then servicing, then monitoring and reporting. Your credit team tests each release.",
      },
      {
        title: "Parallel run and migration",
        body: "Existing loans are migrated with reconciliation to the core, and the new system runs alongside the old process until the numbers agree.",
      },
      {
        title: "Operate and extend",
        body: "Monitoring, release management and support, plus new products and rules as your policy changes.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
    ],
    faqs: [
      {
        q: "Does the system replace our core banking platform?",
        a: "No. The core stays the book of record. The lending platform handles the workflow, data and monitoring around it and posts disbursements, repayments and accruals to the core through APIs, queues or files.",
      },
      {
        q: "Have you built loan management systems for banks before?",
        a: "Our delivered loan management systems run at five Hong Kong licensed lenders. Banks add stricter controls: delegated authority, segregation of duties, posting to a core ledger and regulatory returns. We scope those with your risk and IT teams in discovery.",
      },
      {
        q: "Can the system use the HKMA Commercial Data Interchange?",
        a: "When the bank is connected to it, yes. The intake service requests consented data through the interface and maps it into the credit workflow. Participation, consent flows and data-provider agreements are the bank's; we build the intake, mapping and storage.",
      },
      {
        q: "How do you keep credit decisions explainable?",
        a: "Rules and scorecards return reason codes, and each decision is stored with the inputs, the model or rule version and the people who approved it, so a decision can be reproduced and reviewed later.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours, and the platform runs in your own environment.",
      },
    ],
    assetId: "sme-lending-rfp",
    related: [
      { label: "Loan management system checklist", href: "/resources/loan-management-system-checklist" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    updated: "2026-10-15",
  },
];
