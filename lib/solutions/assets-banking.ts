import type { SolutionAsset } from "./types";

/** Gated assets for the banking and payments pages. See assets.ts for how they are used. */
export const BANKING_ASSETS: SolutionAsset[] = [
  {
    id: "payments-iso20022-readiness",
    source: "sol-payments-iso20022-readiness",
    accessKey: "deview-sol-payments-iso20022-readiness",
    title: "Payment hub and ISO 20022 readiness checklist",
    buttonLabel: "Get the readiness checklist",
    kicker: "Checklist · Payments",
    lead: "A checklist for banks and payment firms planning a payment hub, a real-time payments connection or an ISO 20022 migration: formats, mapping, validation, routing, exceptions, reconciliation and resilience.",
    inside: [
      "Eight areas to review before you choose or build a payment platform.",
      "The message and data points that cause rejections: addresses, identifiers and remittance data.",
      "Questions on cut-offs, liquidity and exception handling.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Banks", "Payment firms", "Fintechs"],
    primaryPage: "iso-20022-payment-hub",
    areas: [
      {
        title: "Scope, rails and volumes",
        checks: [
          "Every payment type in scope: credit transfers, direct debits, instant, cross-border, bulk",
          "Rails and schemes used or planned, with the market usage guideline version for each",
          "Daily volumes, peak periods, value ranges and cut-off times",
          "Systems that originate, process and receive payments today",
        ],
      },
      {
        title: "Formats and canonical model",
        checks: [
          "A canonical model that carries all ISO 20022 elements, not a lowest common denominator",
          "Mapping between pain, pacs, camt and any legacy formats, with ownership of each mapping",
          "Structured or hybrid postal addresses captured as separate fields at source",
          "Purpose codes, remittance information and legal entity identifiers retained end to end",
        ],
      },
      {
        title: "Validation and enrichment",
        checks: [
          "Schema and business rule validation before a payment is accepted",
          "Account, IBAN, BIC and identifier checks against reference data",
          "Charge, FX and holiday calendar enrichment",
          "Clear rejection reasons returned to the originator in the originator's format",
        ],
      },
      {
        title: "Screening and compliance",
        checks: [
          "Sanctions and transaction screening called at defined steps, with timeouts handled",
          "Holds visible in the payment status, with release limited to authorised roles",
          "Data needed by screening preserved from the original message",
          "Travel-rule information carried on cross-border payments",
        ],
      },
      {
        title: "Routing and orchestration",
        checks: [
          "Routing rules by currency, corridor, amount, cut-off and cost",
          "A state machine that records every status change and who or what caused it",
          "Handling of duplicates, timeouts and late responses",
          "Replay of in-flight payments after a failure without double processing",
        ],
      },
      {
        title: "Liquidity, limits and cut-offs",
        checks: [
          "Position and limit checks by account, currency and rail",
          "Queuing and release at cut-off, with a visible queue",
          "Prefunding and settlement position for instant schemes",
          "Alerts when funding or limits run low",
        ],
      },
      {
        title: "Exceptions, returns and investigations",
        checks: [
          "A repair queue with owners, ageing and reasons",
          "Payment cancellation, investigation and return flows (camt.056, camt.029, pacs.004)",
          "Customer notifications for rejected, returned and delayed payments",
          "Reporting on exception volumes by cause and counterparty",
        ],
      },
      {
        title: "Reconciliation, reporting and resilience",
        checks: [
          "Statements and notices (camt.052, camt.053, camt.054) to customers and the ledger",
          "Automated reconciliation of sent, settled and posted payments",
          "Recovery time and recovery point objectives agreed and tested",
          "Audit trail and archive of every original message",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How does the platform keep every ISO 20022 element end to end, and where could data be truncated?",
      "How are market usage guideline updates delivered and tested, and who pays for them?",
      "What happens to in-flight payments if a component fails mid-process?",
      "How are duplicates prevented when a message is retried or a connection drops?",
      "How do we investigate a payment's full history, including every message and decision?",
      "Who owns the source code, the mappings and the configuration, and what do we receive on exit?",
      "Which comparable institutions run the platform on the same rails, and what did they customise?",
    ],
  },
  {
    id: "aml-fraud-requirements",
    source: "sol-aml-fraud-requirements",
    accessKey: "deview-sol-aml-fraud-requirements",
    title: "AML, KYC and fraud system requirements checklist",
    buttonLabel: "Get the requirements checklist",
    kicker: "Checklist · Financial crime",
    lead: "A requirements checklist for transaction monitoring, fraud detection and document-based KYC systems: data, scenarios and models, alert and case handling, reporting, governance and security.",
    inside: [
      "Eight requirement areas written as testable statements.",
      "What to ask for on data quality, lineage and model governance.",
      "Where real-time and batch monitoring each fit.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Compliance", "Fraud teams", "Banks and fintechs"],
    primaryPage: "transaction-monitoring-system-development",
    areas: [
      {
        title: "Data and customer risk",
        checks: [
          "Sources for accounts, transactions, payments, cards, onboarding data and lists",
          "Customer risk rating and expected activity captured and kept current",
          "Data quality checks for gaps, late data and duplicates, with reports",
          "Data lineage from source record to alert",
        ],
      },
      {
        title: "Scenario and model coverage",
        checks: [
          "Typologies mapped to scenarios from the enterprise risk assessment",
          "Thresholds documented with the rationale and the approver",
          "Rules and machine learning models combined with a documented strategy",
          "Coverage for new products and channels before launch",
        ],
      },
      {
        title: "Real-time and batch execution",
        checks: [
          "Which scenarios must run before a payment is released and which can run after",
          "Latency budget for real-time decisions and a defined fallback",
          "Same definitions in real-time and batch, so results agree",
          "Capacity at peak volumes",
        ],
      },
      {
        title: "Alerts and case management",
        checks: [
          "Alert scoring, grouping by customer and prioritisation",
          "Investigation workspace with timeline, linked parties, notes and documents",
          "Escalation, four-eyes review and closure reasons",
          "Ageing and workload reports",
        ],
      },
      {
        title: "Reporting to authorities",
        checks: [
          "Suspicious transaction report drafting, approval and filing in the required format",
          "Link from report to case and to the supporting evidence",
          "Safeguards against tipping off",
          "Management and regulatory reporting on volumes and effectiveness",
        ],
      },
      {
        title: "Fraud decisioning and feedback",
        checks: [
          "Allow, step-up, hold and decline actions, with customer confirmation",
          "Signals for scams, mule accounts and account takeover",
          "Labelled outcomes fed back to rules and models",
          "Detection rate, false positives and customer friction measured",
        ],
      },
      {
        title: "Document-based KYC",
        checks: [
          "Extraction from identity, corporate and financial documents with confidence scores",
          "Cross-document and arithmetic checks, with failures routed to review",
          "Tamper and duplicate signals recorded",
          "Human confirmation of low-confidence fields and of every identity decision",
        ],
      },
      {
        title: "Governance, security and audit",
        checks: [
          "Model and rule inventory, validation and change approval",
          "Role-based access with need-to-know on cases",
          "Append-only audit trail of alerts, decisions and filings",
          "Retention, legal hold and deletion rules",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How do you show that a scenario's threshold is right for our customers and products?",
      "How do changes to rules and models get tested, approved and rolled back?",
      "How are false positives measured, and how do we reduce them without missing risk?",
      "What is the decision latency, and what happens when a component is slow or down?",
      "How does a regulator or auditor follow an alert back to its source data?",
      "Who owns the source code, the rules, the models and the data, and what do we receive on exit?",
      "Which comparable institutions run the system, and how did their alert volumes change?",
    ],
  },
];
