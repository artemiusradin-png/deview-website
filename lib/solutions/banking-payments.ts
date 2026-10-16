import type { SolutionPage } from "./types";

export const BANKING_PAYMENTS_PAGES: SolutionPage[] = [
  {
    slug: "iso-20022-payment-hub",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "ISO 20022 Payment Hub Development | Deview",
    seoDescription:
      "Custom ISO 20022 payment hub for banks and payment companies: message mapping, validation, routing, orchestration, exceptions and reconciliation across rails.",
    kicker: "Enterprise platforms · Banking",
    h1: "ISO 20022 payment hub development",
    intro:
      "We develop ISO 20022 payment hubs for banks and payment companies: one platform that receives payment instructions from every channel, converts them to a canonical model, validates and enriches them, routes them to the right rail and tracks each payment to its final status. The hub speaks pain, pacs and camt messages, sits next to your core banking and screening systems, and you own the code.",
    modules: [
      {
        title: "Channel connectors",
        body: "Inputs from APIs, host-to-host file transfer, corporate portals, message queues and Swift connectivity, each mapped onto the same internal payment model.",
      },
      {
        title: "Canonical payment model",
        body: "One internal representation that carries every ISO 20022 element, including structured postal addresses, remittance data and purpose codes, so nothing is lost when a message changes format.",
      },
      {
        title: "Message mapping",
        body: "Maps between pain.001, pacs.008, pacs.009, pacs.002, pacs.004 and legacy formats, versioned per market usage guideline and tested with sample files from each counterparty.",
      },
      {
        title: "Validation and enrichment",
        body: "Schema and business-rule validation, account and identifier checks, charge and FX enrichment, with clear rejection reasons returned to the originator.",
      },
      {
        title: "Screening and compliance hooks",
        body: "Calls to sanctions and transaction-screening services at the right step, with the response stored on the payment and holds released only by an authorised user.",
      },
      {
        title: "Routing and orchestration",
        body: "A rules-driven choice of rail and route by currency, amount, corridor and cut-off, with a state machine that tracks every payment from receipt to settlement.",
      },
      {
        title: "Liquidity, limits and cut-offs",
        body: "Position and limit checks, queuing for cut-off times and release when funds arrive, so payments are neither sent early nor lost in a queue.",
      },
      {
        title: "Exceptions and investigations",
        body: "A repair queue for failed and returned payments, and workflows for payment cancellation requests, investigations and returns using camt.056, camt.029 and pacs.004.",
      },
      {
        title: "Statements and reporting",
        body: "camt.052, camt.053 and camt.054 reporting to customers and to the general ledger, with reconciliation of what was sent against what settled.",
      },
    ],
    diagram: {
      title: "ISO 20022 payment hub: reference architecture",
      desc: "Channels, corporate customers and counterparties send payment instructions into a payment hub with connectors, a canonical model, mapping, validation, screening hooks, routing and orchestration. The hub posts to the core, sends to payment rails and produces statements and reporting.",
      leftLabel: "Channels",
      platformLabel: "Payment hub",
      rightLabel: "Rails and systems",
      platformTitle: "Payment hub on your infrastructure",
      left: [
        ["Corporate channels", "API, host-to-host, portal"],
        ["Branch and retail", "Core and mobile payments"],
        ["Counterparties", "Incoming pacs messages"],
      ],
      modules: [
        ["Canonical model", "One internal format"],
        ["Mapping", "pain, pacs, camt, legacy"],
        ["Validation", "Schema, rules, enrichment"],
        ["Screening hooks", "Sanctions and monitoring"],
        ["Routing", "Rail, route, cut-offs"],
        ["Orchestration", "State machine, repair queue"],
      ],
      strip: "Audit trail · idempotent posting · message archive",
      right: [
        ["Core banking", "Debit, credit, balances"],
        ["Payment rails", "Swift, RTGS, clearing"],
        ["Screening services", "Sanctions, monitoring"],
        ["Statements and finance", "camt reports, GL"],
      ],
    },
    diagramCaption:
      "Reference architecture: the hub is the single place where a payment is received, checked, routed and tracked, whatever channel it came from.",
    standards: [
      {
        name: "ISO 20022 message families",
        note: "pain for customer initiation, pacs for interbank clearing and settlement, camt for cash management and investigations.",
      },
      {
        name: "Market usage guidelines",
        note: "Swift CBPR+, domestic clearing systems and RTGS each publish their own subset and rules; the hub holds them as versioned profiles.",
      },
      {
        name: "Structured and hybrid postal addresses",
        note: "Swift's CBPR+ guidelines require structured or hybrid addresses from November 2026, so the model and mapping carry address fields separately from the start.",
      },
      {
        name: "ISO 17442 and ISO 9362",
        note: "Legal entity identifiers and business identifier codes held as validated reference data.",
      },
      {
        name: "OpenAPI and AsyncAPI",
        note: "Contracts for synchronous channel APIs and for events published to downstream systems.",
      },
      {
        name: "PCI DSS and data protection",
        note: "Controls on card-linked data and personal data in payment messages.",
      },
    ],
    dataModel: [
      {
        entity: "Payment",
        holds: "Canonical content of one instruction: parties, accounts, amount, currency, purpose, remittance and charges.",
      },
      {
        entity: "Message",
        holds: "Every inbound and outbound message in its original form, linked to the payment it carried.",
      },
      {
        entity: "Payment state",
        holds: "Status history with the step, system and reason, including every hold and release.",
      },
      {
        entity: "Route and rail profile",
        holds: "Rail, market usage guideline version, cut-offs, limits and fee rules.",
      },
      {
        entity: "Exception case",
        holds: "Reason, queue, owner, repair action, investigation messages and resolution.",
      },
      {
        entity: "Position and limit",
        holds: "Balances and limits per account, currency and rail, with reservation and release entries.",
      },
      {
        entity: "Reference data",
        holds: "Identifiers, calendars, currencies, charge codes and counterparty settings with effective dates.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged payment hub fits when your payment types are standard, your volume justifies the licence and a vendor already supports your clearing systems and Swift connectivity.",
      },
      {
        title: "Extend",
        body: "Extend when a vendor hub covers the main rails but you need a corporate channel, a canonical layer in front of several legacy engines, or a repair workflow that the vendor product does not offer.",
      },
      {
        title: "Build",
        body: "Build when you are consolidating several payment engines, offering payment services to clients, entering a new market with its own rail or want the canonical model and routing rules to be yours.",
      },
    ],
    security: [
      {
        title: "Message integrity",
        body: "Signed and sealed messages, original payloads archived unaltered, and every transformation recorded so a payment can be reconstructed.",
      },
      {
        title: "Idempotent posting",
        body: "Unique references and de-duplication so a retry never debits or credits twice.",
      },
      {
        title: "Segregation of duties",
        body: "Release of held payments, changes to routing rules and manual repairs need separate roles and a second approver where policy requires it.",
      },
      {
        title: "Network and key control",
        body: "Keys in hardware security modules, segregated network zones for rail connections and monitored endpoints.",
      },
      {
        title: "Resilience",
        body: "Active-active or tested failover, agreed recovery objectives and replay of in-flight payments after a failure.",
      },
    ],
    phases: [
      {
        title: "Payment inventory",
        body: "We list every payment type, channel, rail and format the bank handles today, with volumes, cut-offs and the system that owns each flow.",
      },
      {
        title: "Canonical model and mapping design",
        body: "The internal model and the mapping to each market usage guideline are agreed, with sample messages from every counterparty.",
      },
      {
        title: "Build by flow",
        body: "Flows go live one at a time, usually starting with outbound customer credit transfers, then inbound, then investigations and reporting.",
      },
      {
        title: "Parallel run and reconciliation",
        body: "The hub runs beside the existing engine, with every payment and statement reconciled until the results match.",
      },
      {
        title: "Migrate and operate",
        body: "Flows migrate rail by rail, with monitoring, support and the addition of new rails and formats afterwards.",
      },
    ],
    proof: [
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    faqs: [
      {
        q: "Do we need a hub, or can we adapt each payment system for ISO 20022?",
        a: "Adapting each system works for one or two flows. Once there are several engines, channels and rails, a hub with one canonical model is cheaper to maintain because each new message format is mapped once.",
      },
      {
        q: "Which payment rails can the hub connect to?",
        a: "Any rail with a documented interface: Swift, RTGS and domestic clearing systems, instant payment schemes and card or wallet networks. Each rail is a connector and a usage profile, agreed with the scheme or operator.",
      },
      {
        q: "How do structured addresses affect the design?",
        a: "Address parts are stored as separate fields in the canonical model and mapped to the structured or hybrid format each rail requires. Data that arrives unstructured is parsed and flagged for repair rather than rejected silently.",
      },
      {
        q: "Does the hub replace the core banking system?",
        a: "No. The core remains the book of record. The hub posts to it and reconciles against it.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours, and the system runs in your own environment.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "Reconciliation engine for banks", href: "/solutions/reconciliation-engine-for-banks" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "real-time-payments-integration",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Real-Time Payments Integration for Banks (FPS, QR) | Deview",
    seoDescription:
      "Real-time payments integration for banks and fintechs: connect to instant payment schemes and QR with proxy lookup, 24/7 posting, fraud checks and reconciliation.",
    kicker: "Enterprise platforms · Banking",
    h1: "Real-time payments integration (FPS, instant payments, QR)",
    intro:
      "We build real-time payments integration for banks and fintechs: connectivity to instant payment schemes such as Hong Kong's Faster Payment System, SEPA Instant, FedNow, Pix and UPI, and to QR payment standards, with proxy lookup, 24/7 posting, fraud checks inside the payment flow and clean reconciliation. The work sits beside your core and channels, and you own the code.",
    modules: [
      {
        title: "Scheme connectivity",
        body: "Secure connections to the instant payment scheme or its participant gateway, with certificate handling, heartbeats and automatic reconnection.",
      },
      {
        title: "Always-on processing",
        body: "A processing core that runs every hour of every day, with maintenance done by rolling deployment rather than downtime windows.",
      },
      {
        title: "Proxy and alias lookup",
        body: "Resolution of mobile numbers, email addresses and scheme identifiers to accounts, with registration, update and removal of the customer's own aliases.",
      },
      {
        title: "Payment lifecycle and timeouts",
        body: "Sending, receiving, accepting, rejecting and returning, with exact handling of timeouts, duplicate messages and late responses so no payment is lost or doubled.",
      },
      {
        title: "Real-time posting and limits",
        body: "Immediate debit or credit in the core or a stand-in ledger, with per-customer, per-channel and per-scheme limits checked in the flow.",
      },
      {
        title: "Fraud and name checks",
        body: "Risk scoring before release and, where the scheme or law requires it, verification of payee, with the result shown to the customer before they confirm.",
      },
      {
        title: "Request to pay",
        body: "Payer-approved collection requests and their status, for billers, merchants and marketplaces.",
      },
      {
        title: "QR payments",
        body: "Generation and scanning of static and dynamic QR codes following the market's QR specification, for in-store, bill and person-to-person payments.",
      },
      {
        title: "Liquidity and settlement",
        body: "Tracking of the settlement position with the scheme, alerts when funding runs low and reconciliation against settlement files.",
      },
    ],
    diagram: {
      title: "Real-time payments integration: reference architecture",
      desc: "Mobile, online and corporate channels, QR and proxy requests flow into a real-time payments layer with scheme connectivity, alias lookup, a payment lifecycle engine, real-time posting, fraud checks, request to pay and settlement tracking. The layer connects to the scheme, the core and screening services.",
      leftLabel: "Channels",
      platformLabel: "Real-time layer",
      rightLabel: "Schemes and systems",
      platformTitle: "Real-time payments layer",
      left: [
        ["Mobile and online banking", "Send, receive, QR"],
        ["Corporate and merchants", "API, request to pay"],
        ["Customer aliases", "Mobile, email, scheme ID"],
      ],
      modules: [
        ["Scheme gateway", "Connection, keys, retries"],
        ["Alias lookup", "Proxy to account"],
        ["Payment lifecycle", "Timeouts, duplicates"],
        ["Real-time posting", "Limits and balances"],
        ["Fraud checks", "Score, verify payee"],
        ["Settlement tracking", "Position and files"],
      ],
      strip: "24/7 operation · idempotency · audit trail",
      right: [
        ["Instant payment scheme", "FPS, SEPA Inst, FedNow"],
        ["Core banking", "Accounts and ledger"],
        ["Fraud and screening", "Scoring, sanctions"],
        ["Reconciliation", "Settlement, statements"],
      ],
    },
    diagramCaption:
      "Reference architecture: a layer that never sleeps between customer channels, the scheme and the core, with fraud checks inside the flow.",
    standards: [
      {
        name: "Scheme rulebooks and interface specifications",
        note: "Each scheme (Faster Payment System in Hong Kong, SEPA Instant Credit Transfer, FedNow, Pix, UPI and others) defines message sets, timeouts and rules that the integration implements exactly.",
      },
      {
        name: "ISO 20022",
        note: "The message basis for most instant schemes, with a scheme-specific profile on top.",
      },
      {
        name: "QR code specifications",
        note: "The local QR payment standard, such as EMVCo's merchant-presented mode and the common QR specifications issued by regulators.",
      },
      {
        name: "EU Instant Payments Regulation",
        note: "Verification of payee and availability obligations for payment service providers in the euro area, designed into the flow where they apply.",
      },
      {
        name: "Strong customer authentication",
        note: "Step-up rules and risk-based exemptions for payment initiation in mobile and online channels.",
      },
      {
        name: "OpenAPI",
        note: "Contracts between channels, the real-time layer and the core.",
      },
    ],
    dataModel: [
      {
        entity: "Instant payment",
        holds: "Parties, amount, alias or account, scheme reference, status and each message exchanged with the scheme.",
      },
      {
        entity: "Alias registration",
        holds: "Alias type and value, account link, registration state and history.",
      },
      {
        entity: "Request to pay",
        holds: "Requester, payer, amount, expiry, status and the payment it produced.",
      },
      {
        entity: "QR payload",
        holds: "Merchant or payee data, amount rules, expiry and scan outcomes.",
      },
      {
        entity: "Limit and risk decision",
        holds: "Limit applied, score, rules fired, decision and any customer step-up.",
      },
      {
        entity: "Settlement position",
        holds: "Net position with the scheme, funding movements and the files they reconcile to.",
      },
      {
        entity: "Reconciliation item",
        holds: "Payment, settlement entry, difference and resolution.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A vendor connector or a scheme-provided participant gateway is the quickest route to a single scheme, and a good choice if your core vendor already supports it.",
      },
      {
        title: "Extend",
        body: "Extend when the core can post but cannot run always-on, or when you add fraud checks, request to pay and QR on top of a basic gateway.",
      },
      {
        title: "Build",
        body: "Build when you connect to several schemes, operate a stand-in ledger for always-on posting, or sell instant payment services to other institutions and need control of the flow.",
      },
    ],
    security: [
      {
        title: "Strong authentication",
        body: "Step-up for risky payments, device binding and limits that adjust with behaviour.",
      },
      {
        title: "Secure scheme connectivity",
        body: "Mutual TLS, certificate rotation and keys held in hardware security modules.",
      },
      {
        title: "Exactly-once effects",
        body: "Unique references and de-duplication, so a timeout or retry never moves money twice.",
      },
      {
        title: "Fraud controls in the flow",
        body: "Scoring before release, velocity and mule-account signals and a path for a customer to confirm or cancel.",
      },
      {
        title: "Resilience",
        body: "Redundant gateways, health checks, replay of unacknowledged messages and tested recovery.",
      },
    ],
    phases: [
      {
        title: "Scheme and flow selection",
        body: "We confirm which schemes, payment types and customer journeys come first, and read the rulebooks and test plans with your payments team.",
      },
      {
        title: "Architecture and stand-in design",
        body: "The always-on design, the posting model and the interfaces to the core and fraud systems are agreed.",
      },
      {
        title: "Build and scheme certification",
        body: "The integration is built and run through the scheme's test and certification process.",
      },
      {
        title: "Pilot with a customer group",
        body: "A limited customer group sends and receives real payments with tight limits while monitoring is tuned.",
      },
      {
        title: "Scale and extend",
        body: "Limits are raised, QR and request to pay are added, and further schemes follow on the same layer.",
      },
    ],
    proof: [
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "Can the core keep posting when it is down for maintenance?",
        a: "If the core cannot run always-on, we add a stand-in ledger that posts payments in real time and settles to the core when it returns, with a reconciliation that proves they agree.",
      },
      {
        q: "How do you avoid duplicate payments on a timeout?",
        a: "Every payment has a unique reference and a state machine. A timeout triggers a status query to the scheme rather than a resend, and the posting step ignores a reference it has already processed.",
      },
      {
        q: "Do you support more than one scheme on the same layer?",
        a: "Yes. Each scheme is a connector and a rules profile behind the same payment lifecycle, alias and limit components.",
      },
      {
        q: "Where does fraud screening happen?",
        a: "Inside the payment flow, before the payment is released, using your fraud engine or one we build. The decision, the score and the rules that fired are stored with the payment.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Real-time payment fraud detection", href: "/solutions/real-time-payment-fraud-detection" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "Mobile banking app development", href: "/solutions/mobile-banking-app-development" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "transaction-monitoring-system-development",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Transaction Monitoring System Development for Banks | Deview",
    seoDescription:
      "Custom transaction monitoring system for banks and payment firms: AML scenarios, alert scoring, case management, STR filing and model governance.",
    kicker: "Enterprise platforms · Banking",
    h1: "Transaction monitoring system development",
    intro:
      "We develop transaction monitoring systems for banks, lenders and payment firms: the scenarios that detect suspicious activity, scoring that puts the right alerts first, case management for investigators, and reporting of suspicious transactions to the financial intelligence unit. The system works from your own data, can run in batch or in real time, and you own the rules, the models and the code.",
    modules: [
      {
        title: "Data ingestion and quality",
        body: "Transactions, accounts, customers, counterparties and risk ratings from core, payments and card systems, normalised into one model with checks for gaps and late data.",
      },
      {
        title: "Customer risk and profile",
        body: "Expected activity captured at onboarding, customer and segment risk ratings, and a baseline of normal behaviour for comparison.",
      },
      {
        title: "Scenario library",
        body: "Detection of structuring, rapid movement of funds, round-tripping, activity with high-risk jurisdictions, dormant account reactivation and deviation from peer behaviour, each with documented thresholds.",
      },
      {
        title: "Real-time and batch execution",
        body: "Scenarios run in batch overnight, intraday or on each payment, using the same definitions so results are consistent.",
      },
      {
        title: "Alert scoring and prioritisation",
        body: "Alerts scored on customer risk, scenario strength and history, grouped by customer so an investigator sees one case rather than many fragments.",
      },
      {
        title: "Case management",
        body: "Investigation workspace with transaction timelines, linked parties, documents, notes, escalation and a clear status from open to closed.",
      },
      {
        title: "Suspicious transaction reporting",
        body: "Drafting, approval and filing of suspicious transaction reports in the format the financial intelligence unit requires, with the supporting file attached.",
      },
      {
        title: "Tuning and model governance",
        body: "Below-the-line testing, threshold changes with approval, performance metrics by scenario and a log of every change to rules and models.",
      },
      {
        title: "Management and regulatory reporting",
        body: "Alert volumes, ageing, conversion to reports, investigator workload and the evidence of effectiveness that supervisors request.",
      },
    ],
    diagram: {
      title: "Transaction monitoring system: reference architecture",
      desc: "Core banking, payments and card systems, onboarding data and watchlists feed a monitoring platform with data ingestion, customer risk profiles, a scenario library, alert scoring, case management and reporting. Outputs go to investigators, the financial intelligence unit and management.",
      leftLabel: "Data sources",
      platformLabel: "Monitoring platform",
      rightLabel: "Outputs",
      platformTitle: "Monitoring platform",
      left: [
        ["Core and payments", "Accounts, transactions"],
        ["Onboarding and KYC", "Profiles, risk ratings"],
        ["Lists and reference data", "Sanctions, PEPs, countries"],
      ],
      modules: [
        ["Data ingestion", "Normalise, check quality"],
        ["Customer profile", "Expected activity, risk"],
        ["Scenario library", "Rules and models"],
        ["Alert scoring", "Priority, grouping"],
        ["Case management", "Investigate, escalate"],
        ["Reporting", "STR drafting, filing"],
      ],
      strip: "Rule governance · audit trail · data lineage",
      right: [
        ["Investigators", "Cases and workspace"],
        ["Financial intelligence unit", "Suspicious reports"],
        ["Compliance management", "Metrics, effectiveness"],
        ["Onboarding", "Risk rating updates"],
      ],
    },
    diagramCaption:
      "Reference architecture: transactions flow through scenarios and scoring into cases, and the outcome feeds reports and customer risk.",
    standards: [
      {
        name: "FATF Recommendations",
        note: "Customer due diligence, ongoing monitoring, reporting of suspicious transactions and wire transfer information, which the scenarios and the case file have to evidence.",
      },
      {
        name: "Local AML and counter-terrorist financing law",
        note: "In Hong Kong the Anti-Money Laundering and Counter-Terrorist Financing Ordinance and the HKMA guideline, with equivalents in each market the bank serves.",
      },
      {
        name: "Suspicious transaction reporting formats",
        note: "The format and channel each financial intelligence unit specifies, including the goAML platform where it is used.",
      },
      {
        name: "ISO 20022 data",
        note: "Richer party and purpose data in payment messages gives scenarios better inputs than free-text fields.",
      },
      {
        name: "Model risk management",
        note: "Documentation, validation and change control for scoring models and rules.",
      },
      {
        name: "Data protection law",
        note: "Controls on use, access and retention of personal data in cases and reports, including tipping-off safeguards.",
      },
    ],
    dataModel: [
      {
        entity: "Customer and profile",
        holds: "Identity, segment, risk rating, expected activity, beneficial owners and related parties.",
      },
      {
        entity: "Account and transaction",
        holds: "Normalised transaction records with counterparty, channel, country, amount, purpose and source system.",
      },
      {
        entity: "Scenario and threshold",
        holds: "Definition, parameters, version, owner, effective dates and the approval that put it live.",
      },
      {
        entity: "Alert",
        holds: "Scenario, triggering transactions, score, status, assignee and disposition reason.",
      },
      {
        entity: "Case",
        holds: "Linked alerts and parties, investigation notes, documents, decisions and escalations.",
      },
      {
        entity: "Suspicious transaction report",
        holds: "Draft and filed versions, approver, filing reference and supporting file.",
      },
      {
        entity: "Tuning record",
        holds: "Test period, results, proposed change, approval and the production date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged monitoring product is the standard choice for large banks with common typologies and the budget for configuration, and some regulators expect a recognised vendor.",
      },
      {
        title: "Extend",
        body: "Extend when you have a vendor engine but need better data feeds, a modern case management layer, or scenarios for products the vendor models poorly.",
      },
      {
        title: "Build",
        body: "Build when you are a payment firm, lender or digital bank with a bespoke product, when vendor pricing is out of proportion to your volume, or when you want your own scenario logic and full access to the data.",
      },
    ],
    security: [
      {
        title: "Strict need-to-know",
        body: "Access to cases limited by role and case, with controls that prevent customer-facing staff from seeing that an alert exists.",
      },
      {
        title: "Governed rule changes",
        body: "Threshold and scenario changes require a maker and a checker and are testable before release.",
      },
      {
        title: "Complete audit trail",
        body: "Every alert disposition, case action and report filing is stored with user and time.",
      },
      {
        title: "Data lineage",
        body: "The path from source record to alert is documented so a regulator can follow it.",
      },
      {
        title: "Retention and deletion",
        body: "Retention periods set by rule, with legal holds respected.",
      },
    ],
    phases: [
      {
        title: "Risk assessment and typology review",
        body: "We read the enterprise risk assessment with compliance and list the typologies, products and channels the monitoring must cover.",
      },
      {
        title: "Data and scenario design",
        body: "Source data is mapped and checked, and each scenario is specified with thresholds and the evidence it should produce.",
      },
      {
        title: "Build and back-test",
        body: "Scenarios are built and back-tested on historical data, with results reviewed with compliance and tuned.",
      },
      {
        title: "Parallel run",
        body: "The system runs beside the current process, and alerts from both are compared before cutover.",
      },
      {
        title: "Go-live and tuning",
        body: "Investigators move to the new workspace, and thresholds are reviewed on a schedule using real outcomes.",
      },
    ],
    proof: [
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Real-time payment fraud detection", href: "/solutions/real-time-payment-fraud-detection" },
    ],
    faqs: [
      {
        q: "What is the difference between transaction monitoring and fraud detection?",
        a: "Monitoring looks for money laundering and terrorist financing patterns, usually after the event, and feeds reporting duties. Fraud detection decides in real time whether to block a payment. They share data but use different rules, owners and reports.",
      },
      {
        q: "Can the system run on every payment in real time?",
        a: "Yes, for scenarios that can be evaluated at the time of the payment. Behavioural scenarios that need history run intraday or overnight, using the same definitions.",
      },
      {
        q: "How do you reduce false positives?",
        a: "By better data and segmentation, by scoring and grouping alerts per customer, and by below-the-line testing of each threshold so changes are based on evidence.",
      },
      {
        q: "Can machine learning be used?",
        a: "Yes, as a scoring layer on top of rule-based scenarios, with documented features, validation and monitoring so the model can be explained to compliance and supervisors.",
      },
      {
        q: "Who owns the code and the rules?",
        a: "You do. The code, the scenarios, the thresholds and the data stay yours.",
      },
    ],
    assetId: "aml-fraud-requirements",
    related: [
      { label: "AI document processing for banks", href: "/solutions/ai-document-processing-for-banks" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "core-banking-integration-layer",
    vertical: "banking",
    serviceId: "product-engineering",
    seoTitle: "Core Banking Integration and API Layer Development | Deview",
    seoDescription:
      "Core banking integration and API layer development: anti-corruption layer, event streaming, API gateway and batch adapters for legacy cores.",
    kicker: "Digital product engineering · Banking",
    h1: "Core banking integration and API layer",
    intro:
      "We build core banking integration and API layers that let banks launch digital products without rewriting the core: an anti-corruption layer that hides the core's formats, event streaming for changes, an API gateway for channels and partners, and adapters for batch files and legacy messages. It makes an old core look like a modern platform to everything around it, and you own the code.",
    modules: [
      {
        title: "Anti-corruption layer",
        body: "A translation layer that maps the core's data and codes into a clean domain model, so channels and new services never depend on legacy formats.",
      },
      {
        title: "Domain APIs",
        body: "Customer, account, balance, transaction, payment and product APIs with stable contracts and versioning, independent of the core's release cycle.",
      },
      {
        title: "API gateway and developer portal",
        body: "Authentication, rate limiting, quotas and analytics for internal channels and external partners, with a portal and sandbox for developers.",
      },
      {
        title: "Event streaming",
        body: "Core changes captured and published as events, so downstream systems react in near real time instead of polling or waiting for overnight files.",
      },
      {
        title: "Change data capture",
        body: "Reading changes from the core's database or journal without adding load to online transactions, with an outbox pattern where the core can be changed.",
      },
      {
        title: "Batch and file adapters",
        body: "Scheduled and on-demand exchange of files with the core, with validation, acknowledgements and re-run safety.",
      },
      {
        title: "Transaction orchestration",
        body: "Multi-step operations spanning the core and other systems, with compensating actions when one step fails, so accounts are never left half-updated.",
      },
      {
        title: "Caching and read models",
        body: "Read-optimised stores for balances and statements that protect the core from channel traffic and survive core downtime.",
      },
      {
        title: "Monitoring and traceability",
        body: "End-to-end tracing of each call across channel, layer and core, with alerts on latency, errors and reconciliation differences.",
      },
    ],
    diagram: {
      title: "Core banking integration layer: reference architecture",
      desc: "Mobile, online, corporate and partner channels call an integration layer with an API gateway, domain APIs, an anti-corruption layer, event streaming, batch adapters and orchestration. The layer connects to the core banking system, payment systems and data platforms.",
      leftLabel: "Consumers",
      platformLabel: "Integration layer",
      rightLabel: "Back-end systems",
      platformTitle: "Integration and API layer",
      left: [
        ["Mobile and online", "Customer channels"],
        ["Partners and fintechs", "Open APIs, sandboxes"],
        ["Internal services", "CRM, lending, analytics"],
      ],
      modules: [
        ["API gateway", "Security, limits, analytics"],
        ["Domain APIs", "Customer, account, payment"],
        ["Anti-corruption layer", "Maps legacy formats"],
        ["Event streaming", "Changes as events"],
        ["Orchestration", "Multi-step with rollback"],
        ["Batch adapters", "Files, queues, acks"],
      ],
      strip: "Tracing · versioning · read models · audit trail",
      right: [
        ["Core banking", "Ledger, products"],
        ["Payment systems", "Rails and hubs"],
        ["Data platform", "Events and history"],
        ["Card and other systems", "ISO 8583, files"],
      ],
    },
    diagramCaption:
      "Reference architecture: channels talk to stable domain APIs while the layer absorbs the core's formats, batches and constraints.",
    standards: [
      {
        name: "OpenAPI and AsyncAPI",
        note: "Contracts for synchronous APIs and for the events the layer publishes, kept in version control.",
      },
      {
        name: "Open banking API standards",
        note: "The HKMA Open API Framework, UK Open Banking, Berlin Group and similar standards, as the model for externally facing APIs.",
      },
      {
        name: "OAuth 2.0, OpenID Connect and FAPI",
        note: "Authentication and authorisation for customers and partners, with the financial-grade profile for high-risk APIs.",
      },
      {
        name: "ISO 20022 and ISO 8583",
        note: "Payment messages and card messages that the layer translates to and from the domain model.",
      },
      {
        name: "Messaging and streaming",
        note: "Message queues and log-based streaming platforms for events and reliable delivery.",
      },
      {
        name: "Supervisory expectations",
        note: "Technology risk, outsourcing and operational resilience guidance that shapes testing, change control and recovery.",
      },
    ],
    dataModel: [
      {
        entity: "Customer and party",
        holds: "A single customer view mapped from the core's customer records, with identifiers for each system.",
      },
      {
        entity: "Account and balance",
        holds: "Account attributes, balances and holds in the form channels expect, with the source timestamp.",
      },
      {
        entity: "Transaction",
        holds: "Normalised entries and their link to the originating payment or message.",
      },
      {
        entity: "Product and condition",
        holds: "Product definitions, rates, fees and limits exposed to channels.",
      },
      {
        entity: "Event",
        holds: "Type, payload, source, time and delivery status for each published change.",
      },
      {
        entity: "Mapping rule",
        holds: "Core field, domain field, transformation, version and owner.",
      },
      {
        entity: "Client and consent",
        holds: "Partner applications, scopes granted, customer consent and revocation.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Many core vendors and integration vendors sell API and orchestration products. They are the right choice when your estate is mainly one vendor's stack and the roadmap fits.",
      },
      {
        title: "Extend",
        body: "Extend when the vendor offers APIs for part of the core but not for the products or channels you want to launch, or when several systems need to be exposed through one gateway.",
      },
      {
        title: "Build",
        body: "Build when you run several cores after acquisitions, a core that has no useful interface, or need a domain model that outlasts the next core replacement.",
      },
    ],
    security: [
      {
        title: "Zero trust between services",
        body: "Mutual authentication, scoped tokens and least-privilege access between every component.",
      },
      {
        title: "Consent and scopes",
        body: "Third-party access only within the scopes a customer granted, with revocation honoured immediately.",
      },
      {
        title: "Protection of the core",
        body: "Rate limits, bulkheads and circuit breakers so channel traffic cannot degrade core processing.",
      },
      {
        title: "Idempotency and integrity",
        body: "Request keys and signed events, so repeated or replayed calls have no extra effect.",
      },
      {
        title: "Auditability",
        body: "Every call and event carries a trace identifier from channel to core and back.",
      },
    ],
    phases: [
      {
        title: "Landscape and interface survey",
        body: "We list the core's interfaces, batch jobs and data stores, and the channels and partners that need them.",
      },
      {
        title: "Domain model and API design",
        body: "The domain model and API contracts are agreed with channel and core teams, with the mapping to the core documented.",
      },
      {
        title: "Build the first domains",
        body: "Customer, account and balance usually come first, then payments and products, each with contract tests against the core test system.",
      },
      {
        title: "Strangler migration",
        body: "Channels move onto the layer one by one, so direct core calls shrink until they are gone.",
      },
      {
        title: "Operate and extend",
        body: "New products, partners and events are added through the layer, with versioning and a deprecation policy.",
      },
    ],
    proof: [
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "Systems integration and API engineering", href: "/services/custom-software-development" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "Do we need to replace our core banking system first?",
        a: "No. The integration layer is often the way to avoid it, or to make a later core replacement safe, because channels depend on stable APIs and not on the core.",
      },
      {
        q: "How do you read from a core that has no API?",
        a: "Through its database or journal using change data capture, through batch files and messages it already produces, or through a thin adapter. Each option is chosen to keep load off the core's online processing.",
      },
      {
        q: "What happens if the core is down?",
        a: "Read models serve balances and statements from the last known state, flagged as such, and writes queue or fail cleanly according to the product's rules, with reconciliation when the core returns.",
      },
      {
        q: "Can we expose APIs to partners and fintechs?",
        a: "Yes. The gateway handles partner onboarding, scopes, consent and rate limits, and a sandbox lets partners test before they go live.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the mappings and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Mobile banking app development", href: "/solutions/mobile-banking-app-development" },
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "reconciliation-engine-for-banks",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Reconciliation Engine for Banks and Payment Firms | Deview",
    seoDescription:
      "Custom reconciliation engine for banks and payment firms: nostro, card and payment matching, many-to-many rules, break management and an audit trail.",
    kicker: "Enterprise platforms · Banking",
    h1: "Reconciliation engine for banks and payment firms",
    intro:
      "We build reconciliation engines for banks and payment firms: matching of statements, payment messages, card files and ledger entries at volume, with rules for exact, tolerance and many-to-many matches, break management for what does not match and an audit trail that finance and auditors accept. It replaces spreadsheets and scripts with one controlled process, and you own the code.",
    modules: [
      {
        title: "Source ingestion",
        body: "Statements, payment messages, card and scheme files, ledger extracts and partner reports loaded through connectors, with checks for completeness and duplicates.",
      },
      {
        title: "Normalisation",
        body: "Every source mapped onto a common item model, with amounts, dates, references and parties in comparable form.",
      },
      {
        title: "Matching rules",
        body: "Exact, tolerance and rule-based matching on references, amounts and dates, including one-to-many and many-to-many groups and netted settlements.",
      },
      {
        title: "Rule management",
        body: "Rules ordered by priority and owned by operations, versioned and tested on historical data before they go live.",
      },
      {
        title: "Break management",
        body: "Unmatched items grouped by cause and age, assigned to owners with due dates, escalated by thresholds and linked to the evidence needed to clear them.",
      },
      {
        title: "Adjustments and postings",
        body: "Suggested and approved adjusting entries, written to the ledger with the match they explain.",
      },
      {
        title: "Nostro and settlement views",
        body: "Position by correspondent, currency and value date, so treasury sees outstanding items that affect liquidity.",
      },
      {
        title: "Reporting and sign-off",
        body: "Daily match rates, ageing, high-value breaks and period-end sign-off with evidence kept for audit.",
      },
      {
        title: "Throughput and scale",
        body: "High item volumes processed in parallel, with results reproducible from the same inputs.",
      },
    ],
    diagram: {
      title: "Reconciliation engine: reference architecture",
      desc: "Bank statements, payment messages, card files and ledger extracts feed a reconciliation platform with ingestion, normalisation, matching rules, break management and an adjustments module. Outputs go to the ledger, treasury and finance sign-off.",
      leftLabel: "Sources",
      platformLabel: "Reconciliation engine",
      rightLabel: "Consumers",
      platformTitle: "Reconciliation platform",
      left: [
        ["Bank statements", "camt.053, MT940, files"],
        ["Payments and cards", "Messages, scheme files"],
        ["Ledgers", "Core, GL, sub-ledgers"],
      ],
      modules: [
        ["Ingestion", "Connectors, completeness"],
        ["Normalisation", "Common item model"],
        ["Matching rules", "Exact, tolerance, groups"],
        ["Break management", "Owners, ageing, escalation"],
        ["Adjustments", "Proposed and approved"],
        ["Sign-off", "Evidence for audit"],
      ],
      strip: "Rule versions · audit trail · reproducible runs",
      right: [
        ["General ledger", "Adjusting entries"],
        ["Treasury", "Nostro, liquidity"],
        ["Finance control", "Sign-off, ageing"],
        ["Operations", "Break worklists"],
      ],
    },
    diagramCaption:
      "Reference architecture: sources are normalised, matched by rules and the rest become managed breaks with owners and evidence.",
    standards: [
      {
        name: "ISO 20022 camt messages",
        note: "camt.053 statements, camt.052 intraday reports and camt.054 notifications as the preferred inputs, with legacy MT formats supported where counterparties still send them.",
      },
      {
        name: "Scheme and card settlement files",
        note: "Clearing and settlement files from card schemes and payment systems, each with its own layout and cut-off.",
      },
      {
        name: "Accounting standards",
        note: "Treatment of unreconciled items, suspense accounts and ageing under the bank's accounting policies.",
      },
      {
        name: "Control frameworks",
        note: "Period-end sign-off, evidence retention and segregation of duties that internal and external audit review.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces for loading data, retrieving match status and posting adjustments.",
      },
      {
        name: "Data retention rules",
        note: "Retention of source files and match results for the period policy and regulation require.",
      },
    ],
    dataModel: [
      {
        entity: "Source item",
        holds: "One line from a statement, message, file or ledger, in its original form and in normalised form.",
      },
      {
        entity: "Match group",
        holds: "The items matched together, the rule that matched them, the tolerance used and the time.",
      },
      {
        entity: "Break",
        holds: "Unmatched item or group, cause category, age, owner, status and linked evidence.",
      },
      {
        entity: "Rule and rule set",
        holds: "Match logic, priority, scope, version and the person who approved it.",
      },
      {
        entity: "Adjustment",
        holds: "Proposed entry, reason, approver, posting reference and the break it clears.",
      },
      {
        entity: "Account and period",
        holds: "Reconciled account, period, open items and sign-off record.",
      },
      {
        entity: "Run",
        holds: "Inputs loaded, rule versions used and results, so a run can be reproduced.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged reconciliation product is the right call for standard bank and ledger reconciliations, especially when your finance function already has a preferred vendor.",
      },
      {
        title: "Extend",
        body: "Extend when a vendor covers most accounts but not a payment flow with unusual references or netting. We build the matching for that flow and feed its results to the main tool.",
      },
      {
        title: "Build",
        body: "Build when you are a payment firm with high volume and complex fees, when you reconcile client money across many partners, or when engineering control over the matching logic matters more than a packaged feature set.",
      },
    ],
    security: [
      {
        title: "Four-eyes on adjustments",
        body: "No one can propose and approve the same adjusting entry, and large items need a higher authority.",
      },
      {
        title: "Immutable evidence",
        body: "Source files and results are stored unaltered with hashes, so a figure can be traced to its origin.",
      },
      {
        title: "Rule change control",
        body: "Rule edits need approval, are tested on historical data and are dated.",
      },
      {
        title: "Role-based access",
        body: "Teams see only the accounts and items they own, with read-only views for audit.",
      },
      {
        title: "Reproducibility",
        body: "A run can be repeated from stored inputs and rule versions to give the same result.",
      },
    ],
    phases: [
      {
        title: "Reconciliation inventory",
        body: "We list every reconciliation, its sources, volumes, owners and the spreadsheets and scripts behind it today.",
      },
      {
        title: "Item model and rule design",
        body: "The common item model and the matching rules are written with operations and tested against a sample of real data.",
      },
      {
        title: "Build by account group",
        body: "Reconciliations are moved onto the engine in groups, starting with the highest volume or highest risk.",
      },
      {
        title: "Parallel run",
        body: "Each group runs beside the old process until match rates and breaks agree.",
      },
      {
        title: "Retire the old process",
        body: "Spreadsheets and scripts are switched off, with period-end sign-off now taken from the engine.",
      },
    ],
    proof: [
      { label: "Fizkultura: reporting pipeline reconciling several source systems", href: "/case-studies/fizkultura" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "Can the engine match one payment to several ledger entries?",
        a: "Yes. Matching supports one-to-many and many-to-many groups, with tolerance on the total, so batched settlements and split payments clear without manual work.",
      },
      {
        q: "How do you handle high volumes?",
        a: "Items are partitioned by account and date and matched in parallel. Rules run in priority order, and results are reproducible from stored inputs and rule versions.",
      },
      {
        q: "Can the engine post adjusting entries?",
        a: "It proposes entries from rules, routes them for approval and posts approved entries to the ledger with the match they explain, so the correction and its evidence stay together.",
      },
      {
        q: "Does it work with our existing ledger?",
        a: "Yes. Ledger extracts come in through connectors, and adjustments go back through the ledger's own interface or file load.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    updated: "2026-10-15",
  },
];
