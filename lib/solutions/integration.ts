import type { SolutionPage } from "./types";

export const INTEGRATION_PAGES: SolutionPage[] = [
  {
    slug: "legacy-application-modernization",
    vertical: "cross-industry",
    serviceId: "product-engineering",
    seoTitle: "Legacy Application Modernization for Enterprises | Deview",
    seoDescription:
      "Legacy application modernization for enterprises: estate assessment, strangler migration, API enablement and data migration with reconciliation and parallel runs.",
    kicker: "Digital product engineering · Modernisation",
    h1: "Legacy application modernization for enterprises",
    intro:
      "We carry out legacy application modernization for enterprises: assessing the estate, deciding for each application whether to retire, replace, rehost or rebuild, and moving the business onto maintainable platforms step by step with the strangler pattern, API enablement, data migration with reconciliation and parallel runs. The business keeps running while the system underneath it changes, and you own the code.",
    modules: [
      {
        title: "Estate assessment",
        body: "An inventory of applications, interfaces and databases with usage, cost, risk, skills and dependencies, built from code analysis, logs and interviews.",
      },
      {
        title: "Disposition decisions",
        body: "A recommendation for each application to retire, replace, rehost, replatform, refactor or rebuild, with the reasoning and the order of work.",
      },
      {
        title: "Characterisation tests",
        body: "Automated tests that capture what the existing system actually does, so the new one can be shown to behave the same where it should.",
      },
      {
        title: "Facade and traffic routing",
        body: "A proxy or API facade in front of the legacy application, so functions can move to new services one at a time and traffic switches gradually.",
      },
      {
        title: "API enablement",
        body: "Stable APIs over legacy functions and data, so new products and partners can use them without touching the old code.",
      },
      {
        title: "New services and domain model",
        body: "Rebuilt capabilities as cohesive services around business domains, with a clean data model rather than a copy of the old schema.",
      },
      {
        title: "Database and data migration",
        body: "Schema redesign, migration scripts, change data capture during transition, and reconciliation reports that prove nothing was lost or changed.",
      },
      {
        title: "User interface modernisation",
        body: "New web and mobile front ends over existing or new back ends, with workflows improved where users have asked for it.",
      },
      {
        title: "Platform, delivery and observability",
        body: "Containers, automated build and release, monitoring and tracing, so the modernised estate is cheaper and safer to run.",
      },
    ],
    diagram: {
      title: "Legacy application modernization: reference architecture",
      desc: "Users and channels reach legacy applications and databases through a facade. A modernization platform with an estate assessment, facade and routing, new services, data migration, a characterisation test harness and observability gradually moves functions to a modern platform, data platform and integrations, while retiring legacy systems.",
      leftLabel: "Today",
      platformLabel: "Modernisation approach",
      rightLabel: "Target",
      platformTitle: "Strangler-style modernisation",
      left: [
        ["Users and channels", "Web, desktop, partners"],
        ["Legacy applications", "Mainframe, client-server"],
        ["Legacy databases", "Schemas, stored logic"],
      ],
      modules: [
        ["Assessment", "Inventory, risk, order"],
        ["Facade and routing", "Move one function at a time"],
        ["Test harness", "Characterisation tests"],
        ["New services", "Domain-based, APIs"],
        ["Data migration", "CDC, reconciliation"],
        ["Observability", "Tracing, parallel run"],
      ],
      strip: "No big-bang cut-over · rollback at each step · audit trail",
      right: [
        ["Modern platform", "Containers, CI and CD"],
        ["Data platform", "Clean model, history"],
        ["Integrations and APIs", "Partners, channels"],
        ["Retired systems", "Switched off"],
      ],
    },
    diagramCaption:
      "Reference architecture: functions move from the legacy system to new services one at a time, with tests and reconciliation at every step.",
    standards: [
      {
        name: "Strangler fig pattern",
        note: "Incremental replacement by routing functions to new components until the old system has nothing left to do.",
      },
      {
        name: "Domain-driven design",
        note: "Bounded contexts and a shared language between business and engineering, used to decide where the service boundaries go.",
      },
      {
        name: "Twelve-factor application practice",
        note: "Configuration, logging, statelessness and disposability principles for services that run well on modern platforms.",
      },
      {
        name: "OpenAPI and AsyncAPI",
        note: "Contracts for the APIs and events that replace direct database access and file drops.",
      },
      {
        name: "OWASP ASVS",
        note: "Application security verification requirements used to review rebuilt code and to close the vulnerabilities of the old system.",
      },
      {
        name: "Change data capture",
        note: "Streaming changes from legacy databases so data stays in step during a transition without dual writes.",
      },
    ],
    dataModel: [
      {
        entity: "Application and component",
        holds: "Name, technology, owner, users, cost, interfaces, risk and disposition.",
      },
      {
        entity: "Interface and dependency",
        holds: "Source, target, protocol, volume, schedule and the business process it supports.",
      },
      {
        entity: "Function and route",
        holds: "Business function, where it runs now, where it should run and the switch status.",
      },
      {
        entity: "Test case",
        holds: "Scenario, input, expected result, source of the expectation and last run.",
      },
      {
        entity: "Migration batch",
        holds: "Scope, extract time, records moved, rejects, reconciliation result and sign-off.",
      },
      {
        entity: "Cut-over plan",
        holds: "Steps, owners, checks, rollback conditions and outcome.",
      },
      {
        entity: "Decommission record",
        holds: "System, data archived, access removed and the date it was switched off.",
      },
    ],
    buildOptions: [
      {
        title: "Replace",
        body: "Replace with a packaged product when the function is a commodity and the business can adopt a standard process. It is often the cheapest and safest path for back-office applications.",
      },
      {
        title: "Modernise",
        body: "Rehost, replatform or refactor when the application still fits the business but runs on risky infrastructure. This reduces risk without changing behaviour.",
      },
      {
        title: "Rebuild",
        body: "Rebuild when the application encodes your competitive process and the old design prevents change. Do it in steps, behind a facade, so the business never waits for a big release.",
      },
    ],
    security: [
      {
        title: "Close known weaknesses",
        body: "Legacy systems carry old libraries and weak authentication. Modernisation includes replacing them and testing the result.",
      },
      {
        title: "Controlled data movement",
        body: "Migration runs under access controls with masked data in test environments and a record of every extract.",
      },
      {
        title: "Separation of duties",
        body: "Cut-over approvals, access changes and rollbacks need separate roles.",
      },
      {
        title: "Parallel-run safeguards",
        body: "When old and new run together, writes happen in one place only, to avoid divergence.",
      },
      {
        title: "Audit trail",
        body: "The migration and cut-over history is kept as evidence for auditors and regulators.",
      },
    ],
    phases: [
      {
        title: "Assess and decide",
        body: "We inventory the estate, interview owners and users and recommend a disposition and a sequence for each application.",
      },
      {
        title: "Prepare the ground",
        body: "Tests, facade, APIs and the delivery pipeline are set up before functions are moved, so every step is safe.",
      },
      {
        title: "Move one slice",
        body: "One function or domain is rebuilt or replaced, its data is migrated and reconciled, and it runs in parallel with the old one.",
      },
      {
        title: "Switch and retire",
        body: "Traffic is switched, the old function is switched off, and the next slice follows.",
      },
      {
        title: "Decommission and hand over",
        body: "Remaining legacy systems are archived and decommissioned, and the new estate is handed over with documentation.",
      },
    ],
    proof: [
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Enterprise systems integration and API engineering", href: "/solutions/enterprise-systems-integration-and-api" },
    ],
    faqs: [
      {
        q: "Should we replace the legacy system or modernise it?",
        a: "It depends on whether the function is a commodity. Commodity functions are usually best replaced by a product. Functions that encode your own process are better modernised or rebuilt in steps. We recommend per application, not for the estate as a whole.",
      },
      {
        q: "How do you avoid a risky big-bang cut-over?",
        a: "By putting a facade in front of the old system and moving one function at a time, with tests that capture current behaviour, reconciled data and a rollback at each step.",
      },
      {
        q: "Can you work with mainframe or very old systems?",
        a: "Yes. We integrate with them through messaging, files and database interfaces, expose their functions as APIs and migrate them gradually. We do not need to rewrite them before we can build around them.",
      },
      {
        q: "How do you prove the new system matches the old one?",
        a: "Through automated characterisation tests, parallel runs on live data and reconciliation reports that compare results between the two systems.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the tests and the migration scripts stay yours.",
      },
    ],
    assetId: "data-integration-reference",
    related: [
      { label: "Enterprise systems integration and API engineering", href: "/solutions/enterprise-systems-integration-and-api" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "enterprise-systems-integration-and-api",
    vertical: "cross-industry",
    serviceId: "product-engineering",
    seoTitle: "Enterprise Systems Integration and API Engineering | Deview",
    seoDescription:
      "Enterprise systems integration and API engineering: API gateway, events, orchestration, EDI, ERP, CRM and core connectors, contracts, monitoring and security.",
    kicker: "Digital product engineering · Integration",
    h1: "Enterprise systems integration and API engineering",
    intro:
      "We provide enterprise systems integration and API engineering: an API layer, event backbone, orchestration and connectors that join ERP, CRM, core, operational and partner systems into one working whole. Contracts are versioned and tested, failures are handled deliberately and every message can be traced, so integration stops being the part of the estate that nobody understands. You own the code.",
    modules: [
      {
        title: "API gateway and management",
        body: "Authentication, rate limits, versioning, analytics and a developer portal for internal teams, partners and customers.",
      },
      {
        title: "Integration services",
        body: "Services that orchestrate multi-step processes across systems, with state, compensation for failures and clear ownership of each process.",
      },
      {
        title: "Event backbone",
        body: "A message broker or log-based streaming platform that publishes business events once and delivers them to every system that needs them.",
      },
      {
        title: "Connectors and adapters",
        body: "Maintained connectors for ERP, CRM, core banking, historians, SaaS applications and databases, hiding each system's quirks behind stable interfaces.",
      },
      {
        title: "Transformation and mapping",
        body: "Mapping between formats and data models, with mapping logic in code and configuration that can be reviewed and tested rather than hidden in a tool.",
      },
      {
        title: "B2B and EDI gateway",
        body: "Exchange of orders, shipping notices and invoices with partners over EDI, APIs and secure file transfer, with acknowledgements and partner onboarding.",
      },
      {
        title: "Contracts and schema registry",
        body: "API and event contracts in version control, a registry of schemas and automated compatibility checks in the build.",
      },
      {
        title: "Error handling and replay",
        body: "Retries with backoff, dead-letter queues, an operations console to inspect and replay failed messages, and alerts when flows stall.",
      },
      {
        title: "Monitoring and tracing",
        body: "End-to-end tracing of a business transaction across systems, with metrics, dashboards and runbooks for integration support.",
      },
    ],
    diagram: {
      title: "Enterprise systems integration and API engineering: reference architecture",
      desc: "Channels, partners and applications connect through an integration platform with an API gateway, orchestration, an event backbone, connectors, mapping, an EDI gateway, a schema registry and error handling. The platform links ERP, CRM, core and operational systems.",
      leftLabel: "Consumers",
      platformLabel: "Integration platform",
      rightLabel: "Systems",
      platformTitle: "Integration platform",
      left: [
        ["Channels and apps", "Web, mobile, portals"],
        ["Partners and customers", "APIs, EDI, files"],
        ["Internal services", "Analytics, automation"],
      ],
      modules: [
        ["API gateway", "Security, limits, versions"],
        ["Orchestration", "Processes, compensation"],
        ["Event backbone", "Publish once"],
        ["Connectors", "ERP, CRM, core, SaaS"],
        ["Mapping and contracts", "Schemas, tests"],
        ["Error handling", "Retry, dead-letter, replay"],
      ],
      strip: "Tracing · idempotency · secrets management · audit trail",
      right: [
        ["ERP and finance", "Orders, ledgers"],
        ["CRM and service", "Accounts, cases"],
        ["Core and plant systems", "Banking, plant, field"],
        ["Data platform", "Events, history"],
      ],
    },
    diagramCaption:
      "Reference architecture: systems talk to each other through governed contracts and a shared backbone, not through point-to-point links.",
    standards: [
      {
        name: "OpenAPI, AsyncAPI and JSON Schema",
        note: "Machine-readable contracts for synchronous APIs and events, validated in the build.",
      },
      {
        name: "CloudEvents",
        note: "A common event envelope that lets events travel between systems and platforms with consistent metadata.",
      },
      {
        name: "Enterprise Integration Patterns",
        note: "The established vocabulary of messaging patterns such as routing, translation, idempotent receivers and dead-letter channels.",
      },
      {
        name: "OAuth 2.0, OpenID Connect and mTLS",
        note: "Authentication and authorisation for users and for service-to-service calls.",
      },
      {
        name: "EDI and e-invoicing standards",
        note: "ANSI X12, EDIFACT, UBL and Peppol for trading partner exchange.",
      },
      {
        name: "Avro and Protocol Buffers",
        note: "Compact, versioned serialisation formats for high-volume event streams.",
      },
    ],
    dataModel: [
      {
        entity: "API and version",
        holds: "Contract, owner, consumers, lifecycle state and the date it will be retired.",
      },
      {
        entity: "Event type and schema",
        holds: "Name, schema versions, producer, consumers and compatibility rules.",
      },
      {
        entity: "Message",
        holds: "Payload, correlation identifier, source, time, status and retries.",
      },
      {
        entity: "Process instance",
        holds: "Steps completed, state, compensation actions and the business key.",
      },
      {
        entity: "Mapping",
        holds: "Source field, target field, transformation, version and tests.",
      },
      {
        entity: "Partner and endpoint",
        holds: "Trading partner, protocol, credentials, schedule and acknowledgements.",
      },
      {
        entity: "Failure and replay",
        holds: "Failed message, error, owner, decision and result of replay.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Integration platforms and iPaaS products cover many connectors and are a good choice when your systems are mainstream SaaS and ERP and your team prefers configuration to code.",
      },
      {
        title: "Extend",
        body: "Extend a platform with your own connectors, contract testing, observability and the services that encode business processes, so the tool does not become a place where logic is hidden.",
      },
      {
        title: "Build",
        body: "Build on open components when you need control of cost and behaviour, run in regulated or air-gapped environments, or have many bespoke and legacy systems that products connect to poorly.",
      },
    ],
    security: [
      {
        title: "Zero trust between services",
        body: "Mutual authentication, scoped tokens and least privilege between every pair of services.",
      },
      {
        title: "Secrets and key management",
        body: "Credentials in a managed store, rotated and never in code or configuration files.",
      },
      {
        title: "Data protection in transit and at rest",
        body: "Encryption throughout, masking of sensitive fields in logs and traces and data minimisation across interfaces.",
      },
      {
        title: "Idempotency and integrity",
        body: "Message keys and de-duplication so a retry never repeats a business action.",
      },
      {
        title: "Audit and traceability",
        body: "Each transaction can be followed from origin to completion, with who and what touched it.",
      },
    ],
    phases: [
      {
        title: "Landscape and flow mapping",
        body: "We map the systems, interfaces and flows, their owners and failure history, and rank the integration problems that cost the business most.",
      },
      {
        title: "Target architecture and contracts",
        body: "The integration architecture, naming and contract standards, and security model are agreed with the system owners.",
      },
      {
        title: "Build the platform and first flows",
        body: "The gateway, backbone and first connectors go live with the highest-value flows, with tracing from day one.",
      },
      {
        title: "Migrate point-to-point links",
        body: "Existing direct integrations move onto the platform one at a time, with tests that compare old and new behaviour.",
      },
      {
        title: "Operate and govern",
        body: "Run, monitoring and support, with a contract and change process that new projects follow.",
      },
    ],
    proof: [
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "AgroPlatforma: Salesforce and AI services on one backend", href: "/case-studies/agroplatforma" },
      { label: "Custom software development", href: "/services/custom-software-development" },
    ],
    faqs: [
      {
        q: "Do we need an enterprise service bus?",
        a: "Usually not in its classic form. A mix of APIs for requests, events for notifications, and orchestration for processes, with contracts in version control, gives the benefits without a central bottleneck.",
      },
      {
        q: "How do you stop integrations breaking when systems change?",
        a: "Contracts are versioned and tested. A change that would break a consumer fails the build, and old versions are supported for an agreed period before they are retired.",
      },
      {
        q: "What happens when a message fails?",
        a: "It is retried with backoff, then moved to a dead-letter queue with the error and context. Support staff can inspect, correct and replay it from a console, and alerts tell them when a flow is stuck.",
      },
      {
        q: "Can you connect SaaS and on-premise systems together?",
        a: "Yes. Connectors and secure gateways bridge cloud and on-premise systems, with outbound-initiated connections where network policy requires.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the contracts and the configuration stay yours.",
      },
    ],
    assetId: "data-integration-reference",
    related: [
      { label: "Legacy application modernization", href: "/solutions/legacy-application-modernization" },
      { label: "Core banking integration layer", href: "/solutions/core-banking-integration-layer" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
];
