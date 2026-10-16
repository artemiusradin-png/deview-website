import type { SolutionPage } from "./types";

export const DATA_BANKING_OG_PAGES: SolutionPage[] = [
  {
    slug: "banking-data-warehouse-and-lakehouse",
    vertical: "banking",
    serviceId: "data-engineering",
    seoTitle: "Banking Data Warehouse and Lakehouse Development | Deview",
    seoDescription:
      "Banking data warehouse and lakehouse: governed ingestion from core and payments, domain models, lineage, masking, real-time features and regulatory-grade quality.",
    kicker: "Data engineering · Banking",
    h1: "Banking data warehouse and lakehouse",
    intro:
      "We build banking data warehouses and lakehouses: governed ingestion from core banking, payments, cards, CRM and risk systems, domain models for customers, accounts and transactions, lineage and quality controls strong enough for regulatory reporting, and serving layers for analytics, machine learning and real-time use. The bank has one trusted source for its data, and you own the platform and the code.",
    modules: [
      {
        title: "Source ingestion",
        body: "Change data capture, files and APIs from core, payments, cards, loans, CRM and market systems, with replay and a record of exactly what was loaded and when.",
      },
      {
        title: "Raw and curated layers",
        body: "An immutable raw layer that mirrors sources, and curated layers where data is conformed, historised and documented, so each question has one answer.",
      },
      {
        title: "Banking domain model",
        body: "Customers, parties, accounts, products, transactions, collateral and exposures modelled against industry reference models, with history and effective dates.",
      },
      {
        title: "Data quality controls",
        body: "Completeness, validity, consistency and reconciliation checks at ingestion and in curated layers, with quality scores, owners and escalation.",
      },
      {
        title: "Lineage and catalogue",
        body: "A searchable catalogue with business definitions and technical lineage from source field to report, available to analysts, risk and auditors.",
      },
      {
        title: "Security, masking and entitlements",
        body: "Classification of sensitive data, column and row-level controls, masking and tokenisation, and access requests with approval and expiry.",
      },
      {
        title: "Semantic layer and data products",
        body: "Shared metric definitions and governed data products for finance, risk, marketing and operations, so the same figure is the same everywhere.",
      },
      {
        title: "Streaming and real-time features",
        body: "Event streams for fraud, limits and customer interactions, with features computed once and used in both batch and real-time models.",
      },
      {
        title: "Machine learning and analytics enablement",
        body: "Feature stores, notebooks and model training on governed data, with reproducible datasets for model validation.",
      },
    ],
    diagram: {
      title: "Banking data warehouse and lakehouse: reference architecture",
      desc: "Core banking, payments, cards, CRM and risk systems feed a data platform with ingestion, raw and curated layers, a banking domain model, quality controls, a catalogue with lineage, security and a semantic layer. Consumers include regulatory reporting, risk, finance, analytics and machine learning.",
      leftLabel: "Source systems",
      platformLabel: "Data platform",
      rightLabel: "Consumers",
      platformTitle: "Banking data platform",
      left: [
        ["Core banking and loans", "Accounts, balances"],
        ["Payments and cards", "Transactions, messages"],
        ["CRM, risk and market data", "Customers, ratings, prices"],
      ],
      modules: [
        ["Ingestion", "CDC, files, APIs"],
        ["Raw and curated layers", "Immutable, conformed"],
        ["Domain model", "Parties, accounts, history"],
        ["Quality controls", "Checks, reconciliation"],
        ["Catalogue and lineage", "Definitions, source to report"],
        ["Security and masking", "Row, column, tokens"],
      ],
      strip: "Semantic layer · feature store · audit trail",
      right: [
        ["Regulatory reporting", "Returns, disclosures"],
        ["Risk and finance", "Exposure, profitability"],
        ["Analytics and BI", "Dashboards, self-service"],
        ["Machine learning", "Models, features"],
      ],
    },
    diagramCaption:
      "Reference architecture: sources are ingested once, modelled once and governed once, then shared with every consumer through controlled products.",
    standards: [
      {
        name: "BIAN service landscape",
        note: "The Banking Industry Architecture Network's service domains, used as a reference for organising the data model and the ownership of domains.",
      },
      {
        name: "FIBO",
        note: "The Financial Industry Business Ontology, a shared vocabulary for financial concepts that helps align definitions across systems.",
      },
      {
        name: "ISO 20022 business model",
        note: "The payment and securities data dictionary, used to keep rich payment data intact in the platform.",
      },
      {
        name: "BCBS 239",
        note: "Principles for risk data aggregation and reporting that govern data quality, lineage and timeliness for risk data.",
      },
      {
        name: "Open table formats",
        note: "Delta Lake, Apache Iceberg or Apache Hudi for transactional tables, schema evolution and time travel on lake storage.",
      },
      {
        name: "Data protection and banking secrecy law",
        note: "Controls on personal and customer data, cross-border access and retention.",
      },
    ],
    dataModel: [
      {
        entity: "Party and customer",
        holds: "Identity, roles, relationships, segmentation and history of each version.",
      },
      {
        entity: "Account and product",
        holds: "Account attributes, product terms, status and the party relationships.",
      },
      {
        entity: "Transaction and payment",
        holds: "Posted entries and payment messages with their parties, amounts, purposes and references.",
      },
      {
        entity: "Exposure and collateral",
        holds: "Limits, balances, guarantees, collateral and the links between them.",
      },
      {
        entity: "Data product",
        holds: "Definition, owner, schema, quality score, consumers and service level.",
      },
      {
        entity: "Quality rule and result",
        holds: "Rule, scope, threshold, outcome, owner and remediation.",
      },
      {
        entity: "Lineage edge",
        holds: "Source and target element, transformation and run identifier.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Banking data models and cloud data platforms come as products and accelerators, and are a strong start for banks that want a ready industry model and a managed platform.",
      },
      {
        title: "Extend",
        body: "Extend a product or cloud platform with your own governance, quality, lineage and domain products, which are where the effort and the value usually are.",
      },
      {
        title: "Build",
        body: "Build on open components when you need control of cost and residency, run in several jurisdictions, or want a platform shaped around your own data products and teams.",
      },
    ],
    security: [
      {
        title: "Classification and masking",
        body: "Sensitive data is classified at ingestion, and masking, tokenisation and encryption apply by class.",
      },
      {
        title: "Fine-grained access",
        body: "Row and column-level policies by role and purpose, with access requests approved and expiring.",
      },
      {
        title: "Residency and sovereignty",
        body: "Data held in the regions that law and policy require, with controls on cross-border access.",
      },
      {
        title: "Auditability",
        body: "Every access, change and pipeline run is logged and reproducible.",
      },
      {
        title: "Resilience",
        body: "Tested recovery and replay of ingestion, with immutable raw data as the backstop.",
      },
    ],
    phases: [
      {
        title: "Data landscape and priorities",
        body: "We inventory sources, consumers and pain points with finance, risk, regulatory reporting and analytics, and rank domains by value and regulatory need.",
      },
      {
        title: "Architecture and governance design",
        body: "Layers, models, ownership, quality rules and security are agreed, together with the platform and the operating model.",
      },
      {
        title: "Build the first domain end to end",
        body: "One domain, usually customers and accounts, is built from ingestion to a governed product, with lineage and quality from the start.",
      },
      {
        title: "Add domains and consumers",
        body: "Transactions, exposures and others follow, and regulatory, risk and finance consumers move onto the platform.",
      },
      {
        title: "Operate and evolve",
        body: "Platform operations, cost control and a product-based roadmap, with new domains and real-time features added.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Grand Finance: one management portal across departments and tools", href: "/case-studies#finance" },
      { label: "Fizkultura: reporting pipeline reconciling several source systems", href: "/case-studies/fizkultura" },
    ],
    faqs: [
      {
        q: "Warehouse or lakehouse?",
        a: "A lakehouse combines warehouse-style tables and governance with cheap storage for raw and unstructured data, and is the usual choice today. What matters more than the label is the governance, the domain model and the quality controls.",
      },
      {
        q: "Can the platform serve real-time use cases?",
        a: "Yes. Event streams feed real-time features and decisions, with the same definitions used in batch, so fraud and limits logic do not drift from reporting.",
      },
      {
        q: "How do you keep data quality high?",
        a: "Quality rules run at ingestion and in curated layers with owners, thresholds and escalation, and reconciliations to the ledger prove that the numbers agree with source systems.",
      },
      {
        q: "Does it replace our regulatory reporting system?",
        a: "No. It supplies governed data to it. Many banks use the platform as the single data source for regulatory, risk and finance reporting.",
      },
      {
        q: "Who owns the platform and code?",
        a: "You do. The code, the models and the data stay yours.",
      },
    ],
    assetId: "bank-reporting-requirements",
    related: [
      { label: "Risk data aggregation and BCBS 239", href: "/solutions/risk-data-aggregation-bcbs-239" },
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "risk-data-aggregation-bcbs-239",
    vertical: "banking",
    serviceId: "data-engineering",
    seoTitle: "Risk Data Aggregation and Lineage for BCBS 239 | Deview",
    seoDescription:
      "Risk data aggregation and lineage for BCBS 239: data inventory, ownership, lineage, quality controls, reconciliation and risk reporting that supervisors can test.",
    kicker: "Data engineering · Banking",
    h1: "Risk data aggregation and lineage (BCBS 239)",
    intro:
      "We build risk data aggregation and lineage for BCBS 239: an inventory of critical risk data, clear ownership, automated lineage from source to report, quality controls and reconciliations, and risk reporting that can be produced accurately, completely and quickly, including in a crisis. The aim is data that supervisors can test and that risk managers trust, and you own the platform and the code.",
    modules: [
      {
        title: "Critical data inventory",
        body: "Identification of the data elements that drive risk reports, with business definitions, owners, sources and the reports that use them.",
      },
      {
        title: "Governance and ownership",
        body: "Named data owners and stewards, decision rights, policies and a forum to resolve conflicts, recorded in the system and not only in documents.",
      },
      {
        title: "Automated lineage",
        body: "Lineage captured from pipelines and queries, from source field through transformations to risk report cell, with impact analysis for changes.",
      },
      {
        title: "Data quality framework",
        body: "Rules for accuracy, completeness, timeliness, consistency and uniqueness on critical elements, with scores, trends, owners and escalation.",
      },
      {
        title: "Reconciliation",
        body: "Automated reconciliation of risk data to the general ledger, source systems and prior reports, with breaks explained and tracked to closure.",
      },
      {
        title: "Exposure aggregation",
        body: "Aggregation of exposures by counterparty, group, sector, country, product and other dimensions, with consistent hierarchies and identifiers.",
      },
      {
        title: "Ad hoc and stress reporting",
        body: "The ability to produce new cuts and stress scenarios quickly from the same governed data, including requests under time pressure.",
      },
      {
        title: "Risk reporting production",
        body: "Scheduled and on-demand risk reports with validation, review and sign-off, and a clear statement of the limits of the data.",
      },
      {
        title: "Self-assessment and evidence",
        body: "Mapping of controls to the BCBS 239 principles, with gaps, action plans and evidence for the board and for supervisory reviews.",
      },
    ],
    diagram: {
      title: "Risk data aggregation and lineage: reference architecture",
      desc: "Source systems for credit, market, liquidity and finance feed a risk data platform with a critical data inventory, governance, automated lineage, data quality, reconciliation and exposure aggregation. Risk reporting, ad hoc analysis and supervisory evidence are produced from the same governed data.",
      leftLabel: "Source systems",
      platformLabel: "Risk data platform",
      rightLabel: "Consumers",
      platformTitle: "Risk data aggregation platform",
      left: [
        ["Credit and counterparty", "Exposures, ratings"],
        ["Market and liquidity", "Positions, cash flows"],
        ["Finance and reference data", "Ledger, hierarchies"],
      ],
      modules: [
        ["Critical data inventory", "Elements, owners"],
        ["Lineage", "Source to report cell"],
        ["Quality framework", "Rules, scores"],
        ["Reconciliation", "To ledger and sources"],
        ["Exposure aggregation", "Group, sector, country"],
        ["Self-assessment", "Principles, evidence"],
      ],
      strip: "Governance records · impact analysis · audit trail",
      right: [
        ["Risk reports", "Board, committees"],
        ["Ad hoc and stress requests", "Fast new cuts"],
        ["Regulatory reporting", "Returns"],
        ["Supervisors and audit", "Evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: one governed chain from source to risk report, with quality, lineage and reconciliation built into each step.",
    standards: [
      {
        name: "BCBS 239",
        note: "The Basel Committee's principles for effective risk data aggregation and risk reporting: governance, data architecture, accuracy, completeness, timeliness, adaptability and supervisory review.",
      },
      {
        name: "Supervisory guidance on risk data",
        note: "Guides and assessments by supervisors, such as the ECB's guide on risk data aggregation and risk reporting, which set out expectations in detail.",
      },
      {
        name: "Data management frameworks",
        note: "DAMA-DMBOK and ISO 8000 for data quality and governance practice.",
      },
      {
        name: "Legal entity and instrument identifiers",
        note: "LEI (ISO 17442) and instrument identifiers for consistent counterparty and product aggregation.",
      },
      {
        name: "Open lineage standards",
        note: "OpenLineage and metadata standards for capturing lineage from pipelines automatically.",
      },
      {
        name: "Reporting and accounting standards",
        note: "The regulatory returns and accounting bases to which risk data has to reconcile.",
      },
    ],
    dataModel: [
      {
        entity: "Critical data element",
        holds: "Name, definition, owner, steward, sources, reports using it and criticality.",
      },
      {
        entity: "Lineage graph",
        holds: "Source and target elements, transformations, run identifiers and versions.",
      },
      {
        entity: "Quality rule and result",
        holds: "Rule, dimension, threshold, outcome, trend and owner.",
      },
      {
        entity: "Reconciliation",
        holds: "Comparison, difference, explanation, approver and date.",
      },
      {
        entity: "Exposure",
        holds: "Counterparty, group, instrument, amount, currency, sector, country and the hierarchy used.",
      },
      {
        entity: "Report and cell",
        holds: "Report, cell definition, value, data cut-off and sign-off.",
      },
      {
        entity: "Principle assessment",
        holds: "BCBS 239 principle, controls, gaps, actions, owner and evidence.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Data governance, lineage and risk data products cover the inventory, catalogue and lineage well, and are a reasonable foundation for banks with the budget and vendor relationships.",
      },
      {
        title: "Extend",
        body: "Extend a governance product with automated lineage from your own pipelines, reconciliation and quality controls that connect to the risk reports.",
      },
      {
        title: "Build",
        body: "Build when your data estate is heterogeneous, when lineage must be captured from your own pipelines, or when the aggregation and reporting logic is part of your own platform.",
      },
    ],
    security: [
      {
        title: "Controlled access",
        body: "Risk data is classified, access is role-based, and sensitive counterparty data is masked for those who do not need it.",
      },
      {
        title: "Change control",
        body: "Changes to definitions, rules and aggregation logic are approved, tested against history and dated.",
      },
      {
        title: "Immutable reports",
        body: "Issued risk reports are stored with their inputs and can be reproduced exactly.",
      },
      {
        title: "Lineage integrity",
        body: "A break in lineage or a failed quality rule on a critical element is flagged before the report is issued.",
      },
      {
        title: "Resilience in a crisis",
        body: "Capacity and procedures for fast reporting under stress, tested regularly.",
      },
    ],
    phases: [
      {
        title: "Gap assessment",
        body: "We assess current practice against the principles with risk, finance and data teams, and rank the gaps by supervisory attention and risk.",
      },
      {
        title: "Inventory and governance set-up",
        body: "Critical data elements are inventoried, owners named and the governance forum and tooling set up.",
      },
      {
        title: "Lineage and quality on the first reports",
        body: "Automated lineage, quality rules and reconciliations are built for the most important risk reports.",
      },
      {
        title: "Aggregation and ad hoc capability",
        body: "Exposure aggregation and fast ad hoc and stress reporting are added on the same governed data.",
      },
      {
        title: "Self-assessment and sustain",
        body: "Evidence is produced from the platform for self-assessment, and the process runs as business as usual.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Banking data warehouse and lakehouse", href: "/solutions/banking-data-warehouse-and-lakehouse" },
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
    ],
    faqs: [
      {
        q: "Does BCBS 239 only apply to the largest banks?",
        a: "It was written for global systemically important banks, and many supervisors apply it, or its principles, to domestic systemically important and other banks. Smaller banks use it as a benchmark for good practice.",
      },
      {
        q: "What does automated lineage give us over documentation?",
        a: "It stays accurate. Lineage captured from the pipelines is generated from what actually runs, so it changes when the pipelines change, and impact analysis tells you what a change will affect.",
      },
      {
        q: "How fast can we produce a new risk cut?",
        a: "As fast as the governed data allows. Once critical elements are modelled and reconciled, new aggregations and stress cuts are queries and not projects.",
      },
      {
        q: "Does this replace our risk systems?",
        a: "No. Risk engines remain. The platform makes the data that feeds them and the reports that follow consistent, traceable and reconciled.",
      },
      {
        q: "Who owns the platform and code?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "bank-reporting-requirements",
    related: [
      { label: "Banking data warehouse and lakehouse", href: "/solutions/banking-data-warehouse-and-lakehouse" },
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
      { label: "Treasury and liquidity management system", href: "/solutions/treasury-and-liquidity-management-system" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "payments-analytics-and-transaction-reporting",
    vertical: "banking",
    serviceId: "data-engineering",
    seoTitle: "Payments Analytics and Transaction Reporting | Deview",
    seoDescription:
      "Payments analytics and transaction reporting: live volumes and success rates, rejects analysis, fees, liquidity, client reports and data products.",
    kicker: "Data engineering · Banking",
    h1: "Payments analytics and transaction reporting",
    intro:
      "We build payments analytics and transaction reporting for banks and payment firms: real-time views of volumes, success rates and latency across rails, analysis of rejects, returns and exceptions, fee and revenue reporting, liquidity analytics, client-facing cash management reports and payment data products. ISO 20022 data is kept rich so questions that were impossible before become simple, and you own the platform and the code.",
    modules: [
      {
        title: "Payment data model",
        body: "A model that keeps the full content of payment messages, including parties, purposes, remittance and charges, linked across the lifecycle of each payment.",
      },
      {
        title: "Real-time operational dashboards",
        body: "Live volumes, values, success and rejection rates, queue depths and latency by rail, channel, corridor and client, with alerts on deviation.",
      },
      {
        title: "Rejects, returns and exceptions analysis",
        body: "Root causes of rejections and returns by counterparty, format, field and rule, with trends and the actions that reduced them.",
      },
      {
        title: "Corridor and counterparty analytics",
        body: "Performance, cost and speed by correspondent, corridor and currency, to choose routes and negotiate with partners.",
      },
      {
        title: "Fees, revenue and cost",
        body: "Fee income, pricing leakage and cost per payment by product and client, reconciled to the ledger.",
      },
      {
        title: "Liquidity and settlement analytics",
        body: "Settlement positions, intraday peaks and funding patterns by rail and currency, feeding treasury and capacity planning.",
      },
      {
        title: "Client cash management reporting",
        body: "Reports and dashboards for corporate clients on payments, collections and balances, delivered in the portal and as files and APIs.",
      },
      {
        title: "Service levels and operational risk",
        body: "Measurement of service levels against agreements and rules, with evidence for disputes and for operational risk reporting.",
      },
      {
        title: "Data products and APIs",
        body: "Governed payment datasets for fraud, compliance, product and finance teams, delivered through catalogues and APIs.",
      },
    ],
    diagram: {
      title: "Payments analytics and transaction reporting: reference architecture",
      desc: "Payment hub, core banking, rails and statements feed a payments data platform with a payment data model, real-time dashboards, rejects analysis, corridor analytics, fee reporting, liquidity analytics and client reporting. Outputs go to operations, treasury, finance, corporate clients and data consumers.",
      leftLabel: "Sources",
      platformLabel: "Payments data platform",
      rightLabel: "Consumers",
      platformTitle: "Payments analytics platform",
      left: [
        ["Payment hub and rails", "Messages, statuses"],
        ["Core banking", "Postings, balances"],
        ["Fees and reference data", "Tariffs, clients, corridors"],
      ],
      modules: [
        ["Payment data model", "Full ISO 20022 content"],
        ["Live dashboards", "Volumes, success, latency"],
        ["Rejects analysis", "Cause, field, trend"],
        ["Corridor analytics", "Cost, speed, partner"],
        ["Fees and revenue", "Leakage, margin"],
        ["Liquidity analytics", "Peaks, funding"],
      ],
      strip: "Streaming and batch · lineage · audit trail",
      right: [
        ["Payments operations", "Alerts, queues"],
        ["Treasury and finance", "Liquidity, revenue"],
        ["Corporate clients", "Cash reports"],
        ["Fraud and compliance", "Datasets"],
      ],
    },
    diagramCaption:
      "Reference architecture: payment messages and postings are joined into one model, then served as live views, reports and data products.",
    standards: [
      {
        name: "ISO 20022 data dictionary",
        note: "The rich message content that analytics can use, such as structured parties, purpose codes and remittance data.",
      },
      {
        name: "Payment statistics reporting",
        note: "Regulatory and central bank payment statistics that can be produced from the same data.",
      },
      {
        name: "CPMI and scheme performance measures",
        note: "Speed, cost and access targets for cross-border payments and scheme-specific service level measures.",
      },
      {
        name: "Streaming standards",
        note: "Event streaming and change data capture for near-real-time views.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces for client reporting and internal data products.",
      },
      {
        name: "Data protection law",
        note: "Controls on personal data in payment content and on its use in analytics.",
      },
    ],
    dataModel: [
      {
        entity: "Payment",
        holds: "Parties, amounts, currencies, purpose, remittance, charges and the channel and rail used.",
      },
      {
        entity: "Payment status event",
        holds: "Status, time, system, reason and message reference for each step.",
      },
      {
        entity: "Rejection and return",
        holds: "Reason code, field or rule, counterparty and resolution.",
      },
      {
        entity: "Corridor and counterparty",
        holds: "Currency pair, correspondent, cost, speed and quality measures by period.",
      },
      {
        entity: "Fee record",
        holds: "Charge, tariff, client, amount and the payment it relates to.",
      },
      {
        entity: "Settlement position",
        holds: "Balance, funding movements and peak usage by rail, currency and time.",
      },
      {
        entity: "Client report",
        holds: "Report definition, recipient, schedule, delivery and format.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Payment platform vendors and BI tools offer dashboards and reports on their own data, and are a good start when all payments flow through one product.",
      },
      {
        title: "Extend",
        body: "Extend vendor reporting with a model that joins several systems, richer ISO 20022 content and client-facing reporting, which single-vendor tools rarely cover.",
      },
      {
        title: "Build",
        body: "Build when payments pass through several engines and rails, when analytics is part of the service to corporate clients, or when you want the payment data as a lasting asset.",
      },
    ],
    security: [
      {
        title: "Sensitive data handling",
        body: "Payment content with personal data is classified, masked for analytics where possible and access-controlled.",
      },
      {
        title: "Client separation",
        body: "Client reports and data products show only each client's own data.",
      },
      {
        title: "Reconciled figures",
        body: "Reported volumes and fees reconcile to the ledger and to scheme settlement.",
      },
      {
        title: "Auditability",
        body: "Reports can be reproduced from stored data and the definitions in force on the date.",
      },
      {
        title: "Resilience",
        body: "Streaming pipelines are replayable, and dashboards degrade gracefully if a source is delayed.",
      },
    ],
    phases: [
      {
        title: "Questions and data review",
        body: "We list the questions operations, treasury, finance and clients want answered, and review the payment data and its quality.",
      },
      {
        title: "Model and metric design",
        body: "The payment model, metric definitions and refresh requirements are agreed, with the join to the ledger and to fees.",
      },
      {
        title: "Build live views and the core model",
        body: "The model and operational dashboards go first, giving operations value early.",
      },
      {
        title: "Add analysis and finance views",
        body: "Rejects, corridor, fee and liquidity analytics follow, reconciled to finance.",
      },
      {
        title: "Client reporting and data products",
        body: "Client reports and governed datasets are added and opened to their audiences.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Fizkultura: pipeline bringing several sources into one report", href: "/case-studies/fizkultura" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "What does ISO 20022 change for analytics?",
        a: "Payment messages carry structured party, purpose and remittance data that older formats lacked. If it is kept intact, analytics can segment by purpose, reconcile by reference and find root causes of rejections far more precisely.",
      },
      {
        q: "Can we see payment performance in real time?",
        a: "Yes. Streaming from the payment hub and rails feeds live views of volume, success rate, latency and queues, with alerts when they deviate from normal.",
      },
      {
        q: "Can corporate clients get their own analytics?",
        a: "Yes. Client reports and dashboards are delivered in the corporate portal, as files and through APIs, limited to each client's data.",
      },
      {
        q: "Does it replace the payment hub's reporting?",
        a: "It extends it. The hub's reports are operational. The analytics platform joins payments with the ledger, fees and reference data and serves other teams.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the model and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
      { label: "Reconciliation engine for banks", href: "/solutions/reconciliation-engine-for-banks" },
      { label: "Corporate banking portal development", href: "/solutions/corporate-banking-portal-development" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "osdu-data-platform-implementation",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "OSDU Data Platform Implementation | Deview",
    seoDescription:
      "OSDU data platform implementation: gap analysis, schema mapping, manifest ingestion, entitlements, application integration and migration of legacy subsurface data.",
    kicker: "Data engineering · Oil and gas",
    h1: "OSDU data platform implementation",
    intro:
      "We carry out OSDU data platform implementation for operators and national oil companies: gap analysis against your data, mapping to OSDU schemas, ingestion pipelines using manifests, entitlements and legal tagging, integration with applications and migration of legacy subsurface and well data. We work with the OSDU platform your cloud provider or vendor supplies, and you own the integration code and the mappings.",
    modules: [
      {
        title: "Readiness and gap analysis",
        body: "Assessment of your data, applications, skills and governance against OSDU, with a prioritised plan of which domains to bring first.",
      },
      {
        title: "Platform and environment design",
        body: "Choice of platform distribution, data partitions, environments, networking and operations model, in line with security and residency needs.",
      },
      {
        title: "Schema and reference data mapping",
        body: "Mapping of existing models, such as PPDM databases and interpretation project data, to OSDU schemas and reference data, with documented decisions for gaps.",
      },
      {
        title: "Manifest-based ingestion",
        body: "Pipelines that extract, transform and load data using OSDU manifests and workflows, with validation, error handling and reconciliation reports.",
      },
      {
        title: "Entitlements and legal tagging",
        body: "A design for data partitions, groups, access control lists and legal tags that reflects licences, partners and jurisdictions.",
      },
      {
        title: "Wellbore, seismic and reservoir data services",
        body: "Loading and access to wellbore, log, trajectory, seismic and reservoir model data through the domain data management services.",
      },
      {
        title: "Application integration",
        body: "Connection of interpretation, engineering and analytics applications to the platform through its APIs, with identity and permissions carried through.",
      },
      {
        title: "Search, catalogue and analytics",
        body: "Search and discovery on platform data, notebooks and pipelines for analytics and machine learning on governed subsurface data.",
      },
      {
        title: "Migration, operations and governance",
        body: "Phased migration of legacy repositories, platform monitoring and cost control, and data governance roles and processes.",
      },
    ],
    diagram: {
      title: "OSDU data platform implementation: reference architecture",
      desc: "Legacy repositories, interpretation projects and engineering systems are mapped and ingested through manifests into an OSDU data platform, with entitlements and legal tagging, domain data services, search and applications. Interpretation tools, analytics and partners use the data through platform APIs.",
      leftLabel: "Existing data",
      platformLabel: "OSDU implementation",
      rightLabel: "Consumers",
      platformTitle: "OSDU data platform and integration",
      left: [
        ["Legacy repositories", "PPDM, files, archives"],
        ["Interpretation projects", "Wells, seismic, models"],
        ["Engineering and operations", "Reports, production"],
      ],
      modules: [
        ["Gap analysis", "Data, apps, skills"],
        ["Schema mapping", "To OSDU and reference data"],
        ["Manifest ingestion", "Validate, load, reconcile"],
        ["Entitlements", "Partitions, legal tags"],
        ["Domain data services", "Wellbore, seismic, reservoir"],
        ["Search and catalogue", "Discovery"],
      ],
      strip: "Platform APIs · identity integration · audit trail",
      right: [
        ["Interpretation tools", "Via APIs"],
        ["Analytics and ML", "Notebooks, pipelines"],
        ["Partners and regulators", "Governed sharing"],
        ["Data governance", "Stewards, quality"],
      ],
    },
    diagramCaption:
      "Reference architecture: existing data is mapped and ingested into the platform under entitlements, then used by applications through open APIs.",
    standards: [
      {
        name: "OSDU Data Platform Standard",
        note: "The Open Group's standard defining the platform's services, schemas and behaviour, with the community implementations by cloud providers and vendors.",
      },
      {
        name: "OSDU schemas and reference data",
        note: "The well-known schemas and the governed reference value lists that data is mapped to.",
      },
      {
        name: "Energistics standards",
        note: "WITSML, PRODML and RESQML for exchanging data with sources and applications.",
      },
      {
        name: "PPDM data model",
        note: "A common source model for legacy databases, which mappings start from.",
      },
      {
        name: "Identity and access standards",
        note: "OpenID Connect and the cloud provider's identity services for authentication and groups.",
      },
      {
        name: "Data residency and legal requirements",
        note: "Legal tagging of data by origin, jurisdiction and contract.",
      },
    ],
    dataModel: [
      {
        entity: "Record and schema",
        holds: "OSDU kind, version, content, relationships and the source it was loaded from.",
      },
      {
        entity: "Mapping specification",
        holds: "Source field, target attribute, transformation, reference data used and decisions taken.",
      },
      {
        entity: "Manifest and ingestion run",
        holds: "Content, validation results, errors, record counts and reconciliation.",
      },
      {
        entity: "Entitlement group and ACL",
        holds: "Groups, members, access levels and the records they control.",
      },
      {
        entity: "Legal tag",
        holds: "Origin, jurisdictions, contract, expiry and export rules.",
      },
      {
        entity: "Dataset and file",
        holds: "Location, format, checksum and the record that describes it.",
      },
      {
        entity: "Application registration",
        holds: "Application, identity, scopes and integration status.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Cloud providers and vendors supply managed OSDU platforms. Using one is the default, so the platform itself does not need to be built or operated by you.",
      },
      {
        title: "Extend",
        body: "Extend the platform with your own ingestion pipelines, mappings, entitlements design and application integrations, which are specific to your data and where implementation effort concentrates.",
      },
      {
        title: "Build",
        body: "Build custom components when your data types or governance needs go beyond what the community services cover, and contribute or maintain those components deliberately.",
      },
    ],
    security: [
      {
        title: "Least-privilege entitlements",
        body: "Groups and access control lists follow roles and licences, with legal tags enforcing jurisdiction and contract limits.",
      },
      {
        title: "Identity integration",
        body: "Single sign-on and group sync with the company directory, with service identities for pipelines and applications.",
      },
      {
        title: "Data integrity and lineage",
        body: "Checksums, versioned records and a log of ingestion runs, so any record can be traced to its source and load.",
      },
      {
        title: "Network and residency controls",
        body: "Private connectivity and regional deployment aligned with law and policy.",
      },
      {
        title: "Operational monitoring",
        body: "Monitoring of platform health, ingestion errors and unusual access.",
      },
    ],
    phases: [
      {
        title: "Readiness and priorities",
        body: "We assess data, applications and governance, agree the first domains and use cases and define success measures.",
      },
      {
        title: "Platform and entitlements design",
        body: "The platform environment, partitions, groups and legal tag model are designed with IT, security, legal and data management.",
      },
      {
        title: "Map and ingest the first domain",
        body: "One domain, often wells and logs, is mapped and loaded end to end, and reconciled to the source.",
      },
      {
        title: "Integrate applications and analytics",
        body: "Key applications and analytics workflows connect to the platform and use the loaded data.",
      },
      {
        title: "Migrate further domains and run",
        body: "More domains and legacy sources follow, with governance, operations and cost management in place.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "EnerQuest: subsurface review views in an upstream pilot", href: "/case-studies/enerquest" },
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
    ],
    faqs: [
      {
        q: "Do you provide the OSDU platform itself?",
        a: "No. The platform comes from your cloud provider or a vendor. We work on what makes it useful: mapping and ingesting your data, designing entitlements, integrating applications and migrating legacy sources.",
      },
      {
        q: "Where should we start?",
        a: "With one domain and one use case that matter to the business, such as well and log data for a specific asset. A small, complete slice shows the effort, the data quality issues and the value before you commit more.",
      },
      {
        q: "How do you handle data that does not fit an OSDU schema?",
        a: "We document the gap and choose between using extension attributes, proposing a schema change through the community or keeping the data in a linked store. The decision is recorded in the mapping specification.",
      },
      {
        q: "What about licensed and partner data?",
        a: "Legal tagging and entitlements are designed from the contracts, so access follows licence terms and jurisdiction, and changes in licence status are reflected in access.",
      },
      {
        q: "Who owns the mappings and code?",
        a: "You do. The mappings, the pipelines and the integration code stay yours.",
      },
    ],
    assetId: "subsurface-data-readiness",
    related: [
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
      { label: "AI for well log and seismic interpretation", href: "/solutions/ai-well-log-and-seismic-interpretation" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "production-historian-integration",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "Production Historian and Real-Time Data Integration | Deview",
    seoDescription:
      "Production historian and real-time data integration: read-only access, tag mapping, time alignment, gap handling, aggregation and delivery to platforms and apps.",
    kicker: "Data engineering · Oil and gas",
    h1: "Production historian and real-time data integration",
    intro:
      "We build production historian and real-time data integration for oil and gas and process operations: read-only access to process historians and control systems, tag mapping to assets, time alignment, gap detection and filling, aggregation, and delivery to data platforms, production systems and analytics. Engineers get dependable time-series data in the form they need, and you own the pipelines and the code.",
    modules: [
      {
        title: "Historian connectivity",
        body: "Read access to process historians and OPC servers through their native interfaces, with connection management, authentication and backpressure.",
      },
      {
        title: "Tag inventory and mapping",
        body: "A governed list of tags with description, unit, range and owner, mapped to assets, wells and facilities in the asset model.",
      },
      {
        title: "Streaming and batch extraction",
        body: "Live subscription for current values and scheduled extraction of history, with backfill for new tags and for periods after an outage.",
      },
      {
        title: "Time alignment and resampling",
        body: "Alignment of signals with different sampling rates and clocks, interpolation rules, time-zone handling and clear treatment of daylight saving.",
      },
      {
        title: "Data quality and gap handling",
        body: "Detection of flatlines, spikes, out-of-range values and missing data, with quality flags, gap filling rules and an audit of what was changed.",
      },
      {
        title: "Aggregation and calculated tags",
        body: "Averages, totals, min and max by interval, and derived measures such as rates and balances, calculated once and shared.",
      },
      {
        title: "Delivery to platforms and applications",
        body: "Publication to data lakes, production systems, digital twins and analytics through APIs and streams, with consistent naming and units.",
      },
      {
        title: "Compression and storage strategy",
        body: "Decisions on what to keep at full resolution and what to compress, with storage formats suited to analytics.",
      },
      {
        title: "Monitoring and operations",
        body: "Health of each connection and pipeline, data latency and completeness, with alerts and runbooks.",
      },
    ],
    diagram: {
      title: "Production historian and real-time data integration: reference architecture",
      desc: "Process historians, OPC servers and control systems are read through a controlled boundary into an integration layer with tag mapping, streaming and batch extraction, time alignment, quality handling, aggregation and delivery. The data reaches data platforms, production systems, digital twins and analytics.",
      leftLabel: "Operational side",
      platformLabel: "Integration layer",
      rightLabel: "Consumers",
      platformTitle: "Historian integration layer",
      boundary: "One-way from OT",
      left: [
        ["Process historians", "Time series, events"],
        ["OPC servers", "Live values"],
        ["Control systems", "SCADA, DCS"],
      ],
      modules: [
        ["Tag mapping", "Tags to assets"],
        ["Extraction", "Stream, batch, backfill"],
        ["Time alignment", "Resample, clocks"],
        ["Quality and gaps", "Flags, fill rules"],
        ["Aggregation", "Intervals, calculated tags"],
        ["Delivery", "Streams, APIs, lake"],
      ],
      strip: "Read-only · audit of changes · pipeline monitoring",
      right: [
        ["Data platform", "History, analytics"],
        ["Production systems", "Reporting, allocation"],
        ["Twin and dashboards", "Live views"],
        ["Machine learning", "Training data"],
      ],
    },
    diagramCaption:
      "Reference architecture: signals cross a controlled boundary, are mapped, checked and aligned, then published once for every consumer.",
    standards: [
      {
        name: "OPC UA, HDA and historian APIs",
        note: "Standard and vendor interfaces for current and historical data, used read-only.",
      },
      {
        name: "IEC 62443",
        note: "Zones, conduits and secure development practice at the boundary between operational and business networks.",
      },
      {
        name: "ISA-95 hierarchy",
        note: "A model of enterprise, site, area and equipment for organising tags and assets.",
      },
      {
        name: "PRODML and OSDU time series",
        note: "Standards for exchanging production time series with partners and platforms.",
      },
      {
        name: "Columnar and time-series storage formats",
        note: "Parquet and time-series databases for efficient analytics on large histories.",
      },
      {
        name: "Time and unit conventions",
        note: "UTC storage with explicit local time handling, and consistent units with documented conversions.",
      },
    ],
    dataModel: [
      {
        entity: "Tag",
        holds: "Source, address, description, unit, range, sampling and owner.",
      },
      {
        entity: "Asset mapping",
        holds: "Tag to asset or well relationship, role and effective dates.",
      },
      {
        entity: "Measurement",
        holds: "Value, timestamp in UTC, quality flag and source.",
      },
      {
        entity: "Aggregate",
        holds: "Interval, statistic, value and completeness.",
      },
      {
        entity: "Calculated tag",
        holds: "Definition, inputs, version and the results produced.",
      },
      {
        entity: "Gap and fill record",
        holds: "Period, cause, fill method and the values changed.",
      },
      {
        entity: "Pipeline run",
        holds: "Source, window, records read and written, latency and errors.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Historian vendors provide data access products and cloud connectors. They are the easiest way to publish data to one cloud platform from one historian.",
      },
      {
        title: "Extend",
        body: "Extend vendor connectors with a governed tag model, quality handling and delivery to several consumers, where vendor tools stop at moving raw values.",
      },
      {
        title: "Build",
        body: "Build when you have several historians and sites, specific quality rules and a platform that needs consistent, context-rich data rather than raw copies.",
      },
    ],
    security: [
      {
        title: "Read-only by design",
        body: "Connections use accounts that can only read, and no component can write to control systems.",
      },
      {
        title: "Network boundary",
        body: "Extraction happens through a gateway or replica in a controlled zone, with firewall rules limited to what is needed.",
      },
      {
        title: "Integrity of history",
        body: "Raw data is preserved. Corrections and fills are stored as separate, flagged data with a log.",
      },
      {
        title: "Secrets and certificates",
        body: "Credentials and certificates are managed centrally and rotated.",
      },
      {
        title: "Monitoring",
        body: "Alerts on stopped feeds, unusual volumes and failed authentication.",
      },
    ],
    phases: [
      {
        title: "Source and consumer survey",
        body: "We list the historians, tags and sites, and the systems and teams that need the data, with operations, IT and automation engineers.",
      },
      {
        title: "Boundary and model design",
        body: "The network boundary, tag model, naming, units and quality rules are agreed and approved by OT security.",
      },
      {
        title: "Connect one site end to end",
        body: "One site is connected, mapped and delivered to a consumer, and the data is compared with operators' own views.",
      },
      {
        title: "Add quality, aggregation and consumers",
        body: "Gap handling, calculated tags and further consumers are added.",
      },
      {
        title: "Roll out and operate",
        body: "More sites follow with the same model, with monitoring and support in place.",
      },
    ],
    proof: [
      { label: "EnerQuest: field data flowing one way into an analytics layer", href: "/case-studies/enerquest" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "Can the integration ever write back to the control system?",
        a: "Not by design. Extraction uses read-only access, and the boundary does not allow inbound commands. Any exception would need explicit design, approval and agreement from the automation owner.",
      },
      {
        q: "How do you handle gaps and bad data?",
        a: "Raw data is kept as received. Quality checks flag problems, and any fill or correction is stored separately with its method and a log, so users can choose and auditors can trace.",
      },
      {
        q: "Does it work with more than one historian?",
        a: "Yes. Each historian is a connector behind the same tag model and delivery layer, so consumers see one consistent view.",
      },
      {
        q: "What about very high-frequency data?",
        a: "We decide with engineers what needs full resolution and what can be aggregated, and use storage formats suited to analytics so history stays affordable and fast to query.",
      },
      {
        q: "Who owns the pipelines and code?",
        a: "You do. The pipelines, the mappings and the code stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
      { label: "Digital twin development", href: "/solutions/digital-twin-development" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "oil-and-gas-management-reporting-portal",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "Oil and Gas Management Reporting and Analytics Portal | Deview",
    seoDescription:
      "Oil and gas management reporting and analytics portal: KPI dictionary, governed production, finance, HSE and project data, drill-down and commentary workflow.",
    kicker: "Data engineering · Oil and gas",
    h1: "Oil and gas management reporting and analytics portal",
    intro:
      "We build oil and gas management reporting and analytics portals: one place where executives, asset managers and partners see production, cost, safety, project and financial performance from governed data, with a shared KPI dictionary, drill-down to the underlying records and a workflow for the commentary that goes with the numbers. It replaces monthly assembly of slides and spreadsheets, and you own the portal and the code.",
    modules: [
      {
        title: "KPI dictionary",
        body: "Definitions, formulas, owners and sources for every indicator, so production, cost and safety measures mean the same in every report.",
      },
      {
        title: "Source integration",
        body: "Feeds from production, accounting, HSE, maintenance, project controls and joint venture systems, with reconciliation between them.",
      },
      {
        title: "Governed data layer",
        body: "A data layer that stores each figure once with its period, version and approval status, and keeps restatements and history.",
      },
      {
        title: "Role-based dashboards",
        body: "Views for executives, asset managers, discipline leads and partners, each limited to what they may see and tuned to their decisions.",
      },
      {
        title: "Drill-down and exploration",
        body: "Movement from a portfolio figure to asset, field, well and record, and from a variance to its drivers, in the same tool.",
      },
      {
        title: "Plan, forecast and actual",
        body: "Comparison of actuals with budget, forecast and previous periods, with variance explanations and trend.",
      },
      {
        title: "Commentary and approval workflow",
        body: "Owners enter explanations against the numbers, reviewers approve them and the approved text travels with the report.",
      },
      {
        title: "Report packs and distribution",
        body: "Scheduled monthly and quarterly packs, board and partner reports, with versioning and secure distribution.",
      },
      {
        title: "Mobile and offline views",
        body: "Executive and field summaries on mobile, with cached views for areas of poor connectivity.",
      },
    ],
    diagram: {
      title: "Oil and gas management reporting portal: reference architecture",
      desc: "Production, accounting, HSE, maintenance, project controls and joint venture systems feed a governed data layer with a KPI dictionary. A reporting portal with dashboards, drill-down, plan and forecast comparison, a commentary workflow and report packs serves executives, asset teams and partners.",
      leftLabel: "Source systems",
      platformLabel: "Reporting portal",
      rightLabel: "Audiences",
      platformTitle: "Management reporting portal",
      boundary: "Reconciled feeds",
      left: [
        ["Production and allocation", "Volumes, uptime"],
        ["Finance and joint ventures", "Cost, revenue, AFE"],
        ["HSE, maintenance, projects", "Incidents, work, progress"],
      ],
      modules: [
        ["KPI dictionary", "Definitions, owners"],
        ["Governed data layer", "Periods, versions"],
        ["Dashboards", "By role and decision"],
        ["Drill-down", "Asset to record"],
        ["Commentary workflow", "Explain, approve"],
        ["Report packs", "Schedules, distribution"],
      ],
      strip: "Approval status on every figure · role-based access · audit trail",
      right: [
        ["Executives and board", "Portfolio view"],
        ["Asset managers", "Performance, drivers"],
        ["Partners", "Venture reports"],
        ["Finance and planning", "Actuals, forecasts"],
      ],
    },
    diagramCaption:
      "Reference architecture: figures come from the systems of record into one governed layer, so every report and dashboard agrees.",
    standards: [
      {
        name: "KPI and metric governance",
        note: "A single dictionary of definitions with owners and change control, so the same name means the same measure in all reports.",
      },
      {
        name: "IOGP safety and environmental indicators",
        note: "Common definitions for safety and environmental performance reporting that the HSE indicators follow.",
      },
      {
        name: "PRODML and production reporting conventions",
        note: "Production figures and categories consistent with allocation and partner reporting.",
      },
      {
        name: "Accounting and joint venture reporting rules",
        note: "The treatment of costs and revenues in venture and statutory reports, which management figures must reconcile to.",
      },
      {
        name: "IBCS notation",
        note: "International Business Communication Standards for consistent charts and tables.",
      },
      {
        name: "Data protection and confidentiality",
        note: "Controls on commercially sensitive information shared with partners.",
      },
    ],
    dataModel: [
      {
        entity: "KPI",
        holds: "Name, definition, formula, owner, source, unit and the reports that use it.",
      },
      {
        entity: "Fact and period",
        holds: "Value by asset, period and version, with approval status and source batch.",
      },
      {
        entity: "Hierarchy",
        holds: "Company, region, asset, field and facility structures with effective dates.",
      },
      {
        entity: "Plan and forecast version",
        holds: "Budget and forecast values, version, owner and approval.",
      },
      {
        entity: "Commentary",
        holds: "Text, author, reviewer, status and the figure it explains.",
      },
      {
        entity: "Report pack",
        holds: "Contents, period, recipients, version and distribution log.",
      },
      {
        entity: "Access policy",
        holds: "Role, asset and partner scope, and the views each may open.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Business intelligence and corporate performance tools offer dashboards, packs and commentary features, and a good start if the data is already reconciled and governed.",
      },
      {
        title: "Extend",
        body: "Extend a BI tool with the governed data layer, KPI dictionary and approval workflow that give its dashboards trustworthy numbers.",
      },
      {
        title: "Build",
        body: "Build when the portal has to serve partners and regulators with their own views, or when it is tied into production, joint venture and project systems with bespoke rules.",
      },
    ],
    security: [
      {
        title: "Approved figures only",
        body: "Dashboards show approved figures by default, with provisional data clearly marked.",
      },
      {
        title: "Partner and role separation",
        body: "Each audience sees only its assets, ventures and commercial data, enforced on the server.",
      },
      {
        title: "Restatement history",
        body: "Changes to reported figures keep the earlier values, the reason and the approver.",
      },
      {
        title: "Distribution control",
        body: "Report packs are watermarked, time-limited and logged.",
      },
      {
        title: "Audit trail",
        body: "Views of sensitive data, changes to definitions and approvals are recorded.",
      },
    ],
    phases: [
      {
        title: "Reporting review",
        body: "We list the reports, audiences and spreadsheets, and the time spent assembling them, with executives, asset teams and finance.",
      },
      {
        title: "KPI and data design",
        body: "The KPI dictionary, the data layer and the reconciliation rules are agreed with the owners of the source systems.",
      },
      {
        title: "Build the first dashboards",
        body: "A first set of executive and asset dashboards goes live on reconciled data, and is compared with the current monthly pack.",
      },
      {
        title: "Add commentary and packs",
        body: "The commentary workflow and automated packs replace manual assembly.",
      },
      {
        title: "Open to partners and extend",
        body: "Partner views, further indicators and mobile access are added.",
      },
    ],
    proof: [
      { label: "Oil and gas reporting and analytics portal projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Grand Finance: one management portal across departments and tools", href: "/case-studies#finance" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "Why not just build dashboards in a BI tool?",
        a: "You can, and a BI tool is often part of the answer. The harder part is the governed data and the KPI dictionary behind it. Without them, dashboards in different tools disagree, and nobody trusts them.",
      },
      {
        q: "How do you reconcile figures between production, finance and HSE?",
        a: "Each source feed is reconciled to its system of record and cross-checked against related feeds, and differences are shown with explanations before figures are approved.",
      },
      {
        q: "Can partners have their own views?",
        a: "Yes. Partner views are built from the same data, filtered to the ventures they share, with their own packs and distribution.",
      },
      {
        q: "Who writes the commentary?",
        a: "Owners write it against the figures in the portal, reviewers approve it, and the approved text is attached to the report, so explanations are not lost between spreadsheets and slides.",
      },
      {
        q: "Who owns the portal and the code?",
        a: "You do. The code, the definitions and the data stay yours.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Production historian integration", href: "/solutions/production-historian-integration" },
      { label: "Joint venture accounting and AFE management", href: "/solutions/joint-venture-accounting-and-afe-management" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "methane-emissions-monitoring-and-reporting",
    vertical: "oil-gas",
    serviceId: "data-engineering",
    seoTitle: "Methane Emissions Monitoring and Reporting (OGMP 2.0, EU MRV) | Deview",
    seoDescription:
      "Methane emissions monitoring and reporting software: source-level inventory, measurement data, LDAR workflows, OGMP 2.0 and EU methane regulation reporting.",
    kicker: "Data engineering · Oil and gas",
    h1: "Methane emissions monitoring and reporting",
    intro:
      "We build methane emissions monitoring and reporting software for oil and gas operators: a source-level inventory, integration of measurement data from surveys and continuous monitors, leak detection and repair workflows, reconciliation of bottom-up and top-down data, and reports aligned with OGMP 2.0 and the EU methane regulation. It gives operators the data and evidence that verifiers and buyers ask for, and you own the platform and the code.",
    modules: [
      {
        title: "Source and equipment inventory",
        body: "A register of emission sources by facility and type, such as venting, flaring, combustion and fugitive components, linked to the asset model.",
      },
      {
        title: "Activity data and emission factors",
        body: "Activity data from production, flaring and maintenance systems, and emission factors with their sources and effective dates, for bottom-up calculation.",
      },
      {
        title: "Source-level quantification",
        body: "Calculation of emissions for each source with the method recorded, from default factors to measured and engineering estimates.",
      },
      {
        title: "Measurement data integration",
        body: "Ingestion of results from optical gas imaging surveys, continuous monitors, drones, aircraft and satellite detections, with location, time and quality.",
      },
      {
        title: "Leak detection and repair",
        body: "Survey planning, detection records, repair tasks with deadlines, re-surveys and closure evidence, linked to maintenance work orders.",
      },
      {
        title: "Reconciliation of bottom-up and top-down",
        body: "Comparison of calculated emissions with site-level measurements, with differences explained and uncertainty carried through.",
      },
      {
        title: "Uncertainty and data quality",
        body: "Quantification of uncertainty by source and site, with data quality flags and an improvement plan towards higher reporting levels.",
      },
      {
        title: "Reporting",
        body: "Reports in the OGMP 2.0 structure, the EU methane regulation format, national inventories and company disclosures, produced from the same data.",
      },
      {
        title: "Verification support",
        body: "Evidence packs and lineage for third-party verifiers, and the supplier data that importers need to demonstrate equivalence.",
      },
    ],
    diagram: {
      title: "Methane emissions monitoring and reporting: reference architecture",
      desc: "Equipment and activity data, measurement data from surveys and monitors, and maintenance records feed an emissions platform with a source inventory, emission factors, quantification, measurement integration, leak detection and repair, reconciliation and uncertainty. Reports and evidence go to regulators, verifiers, buyers and management.",
      leftLabel: "Data sources",
      platformLabel: "Emissions platform",
      rightLabel: "Consumers",
      platformTitle: "Methane monitoring and reporting platform",
      left: [
        ["Production, activity data", "Flaring, venting, fuel"],
        ["Measurement", "OGI, monitors, drones, satellite"],
        ["Maintenance and equipment", "Components, work orders"],
      ],
      modules: [
        ["Source inventory", "By facility and type"],
        ["Quantification", "Factors, methods, results"],
        ["Measurement ingestion", "Location, time, quality"],
        ["LDAR workflow", "Detect, repair, verify"],
        ["Reconciliation", "Bottom-up and top-down"],
        ["Uncertainty", "By source and site"],
      ],
      strip: "Method recorded per figure · lineage · audit trail",
      right: [
        ["Regulators", "Required reports"],
        ["Verifiers and importers", "Evidence packs"],
        ["Buyers and investors", "Disclosures"],
        ["Operations", "Repairs, reductions"],
      ],
    },
    diagramCaption:
      "Reference architecture: every reported figure carries its method and uncertainty, and links to the data and the evidence behind it.",
    standards: [
      {
        name: "OGMP 2.0",
        note: "The Oil and Gas Methane Partnership's reporting framework with five levels, where Level 5 combines source-level quantification with site-level measurement and reconciliation, and independent verification.",
      },
      {
        name: "EU Methane Regulation (EU) 2024/1787",
        note: "Requirements on measurement, reporting and verification, leak detection and repair, and for importers to demonstrate equivalent standards. Dates and details should be rechecked against the current text.",
      },
      {
        name: "Quantification methodologies",
        note: "Industry and regulator methods for estimating emissions from venting, flaring, combustion and fugitive sources.",
      },
      {
        name: "GHG Protocol and ISO 14064",
        note: "Greenhouse gas accounting and verification standards used in corporate reporting.",
      },
      {
        name: "Measurement technology protocols",
        note: "Performance and reporting protocols for optical imaging, continuous monitoring, aerial and satellite technologies.",
      },
      {
        name: "National reporting requirements",
        note: "Inventories and returns required by regulators in the countries of operation.",
      },
    ],
    dataModel: [
      {
        entity: "Facility and source",
        holds: "Facility, source type, equipment, location and the asset hierarchy link.",
      },
      {
        entity: "Activity record",
        holds: "Quantity, period, system of origin and the source it relates to.",
      },
      {
        entity: "Emission factor and method",
        holds: "Factor, unit, origin, effective dates, applicability and uncertainty.",
      },
      {
        entity: "Emission estimate",
        holds: "Source, period, value, method, uncertainty and data quality.",
      },
      {
        entity: "Detection and survey",
        holds: "Technology, date, location, finding, size estimate and the survey it belongs to.",
      },
      {
        entity: "Repair task",
        holds: "Detection, work order, deadline, completion, re-survey and closure.",
      },
      {
        entity: "Report and evidence pack",
        holds: "Reporting framework, period, figures, supporting files and verifier comments.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Emissions accounting and LDAR products exist, and are a good fit when your needs follow standard methods and you want a vendor to track regulatory changes.",
      },
      {
        title: "Extend",
        body: "Extend a product with integration to production, maintenance and measurement data, and with reconciliation and uncertainty handling that single-purpose tools treat superficially.",
      },
      {
        title: "Build",
        body: "Build when you operate many facilities with mixed measurement technologies, when data must come from your own systems, or when emissions data is needed in your production and maintenance workflows.",
      },
    ],
    security: [
      {
        title: "Method transparency",
        body: "Every figure records the method, factor and data used, and changes to methods are versioned and approved.",
      },
      {
        title: "Evidence integrity",
        body: "Survey data, calculations and reports are stored unaltered with lineage for verification.",
      },
      {
        title: "Access by role and entity",
        body: "Facility teams, corporate reporting, verifiers and regulators see appropriate parts of the data.",
      },
      {
        title: "Controlled restatement",
        body: "Corrections keep the original, the new value and the reason, and flow through to reports.",
      },
      {
        title: "Audit trail",
        body: "Changes to inventory, factors and estimates are recorded with user and time.",
      },
    ],
    phases: [
      {
        title: "Regulatory and data review",
        body: "We review the reporting commitments, current inventory and the measurement and activity data available, with environment, operations and maintenance teams.",
      },
      {
        title: "Inventory and method design",
        body: "The source inventory, quantification methods and the route to higher OGMP levels are agreed.",
      },
      {
        title: "Build the inventory and quantification",
        body: "Source-level estimates are calculated for one asset, reconciled to existing figures and reviewed.",
      },
      {
        title: "Add measurement and LDAR",
        body: "Measurement data and leak detection and repair workflows are integrated, with reconciliation and uncertainty.",
      },
      {
        title: "Reports and verification",
        body: "Reports and evidence packs are produced for the frameworks that apply, and tested with a verifier.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    faqs: [
      {
        q: "What is OGMP 2.0 Level 5?",
        a: "The highest reporting level, in which operators quantify emissions at source level, measure at site level, reconcile the two and have the result independently verified. It is the level the EU methane regulation points to for producers that want to show equivalence.",
      },
      {
        q: "Does the EU methane regulation affect operators outside the EU?",
        a: "It affects those who sell oil, gas or coal into the EU, because importers must show that supply meets equivalent measurement, reporting and verification standards. Details and dates are changing, so check the current regulation and guidance.",
      },
      {
        q: "Do you supply measurement equipment?",
        a: "No. We integrate with the measurement technologies and service providers you choose, and bring their data together with your inventory and activity data.",
      },
      {
        q: "How do you handle uncertainty?",
        a: "Uncertainty is calculated and carried with each estimate, shown in reports and used to prioritise measurement and improvement. Higher-quality data narrows it over time.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the methods and the data stay yours.",
      },
    ],
    assetId: "methane-mrv-readiness",
    related: [
      { label: "ESG and carbon accounting platform", href: "/solutions/esg-and-carbon-accounting-platform" },
      { label: "Production historian integration", href: "/solutions/production-historian-integration" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
    ],
    updated: "2026-10-15",
  },
];
