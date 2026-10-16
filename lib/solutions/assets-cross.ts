import type { SolutionAsset } from "./types";

/** Gated assets for the IoT, agriculture, integration and data pages. */
export const CROSS_ASSETS: SolutionAsset[] = [
  {
    id: "iot-hardware-integration-checklist",
    source: "sol-iot-hardware-integration-checklist",
    accessKey: "deview-sol-iot-hardware-integration-checklist",
    title: "Industrial IoT and device integration checklist",
    buttonLabel: "Get the integration checklist",
    kicker: "Checklist · IoT and devices",
    lead: "A checklist for projects that connect devices, machines and sensors to software: use case, device inventory, protocols, gateways, data model, security, lifecycle and enterprise integration.",
    inside: [
      "Eight areas to settle before you connect a fleet of devices or a plant.",
      "The device and signal facts that integration teams always need.",
      "Security and update items that are hard to add later.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["IoT", "Industrial", "Agriculture", "Edge"],
    primaryPage: "iot-platform-development",
    areas: [
      {
        title: "Use case and decisions",
        checks: [
          "The decisions or automations the data must support, and who makes them",
          "Required data freshness, accuracy and retention for each decision",
          "Systems that must receive the data, and in what form",
          "A measure of success for the first deployment",
        ],
      },
      {
        title: "Device and signal inventory",
        checks: [
          "A list of devices with make, model, firmware, location and owner",
          "For each signal: address, data type, unit, scaling, sample rate and meaning",
          "Known faults, quirks and unsupported features of each device",
          "Who can change device configuration, and how",
        ],
      },
      {
        title: "Protocols and connectivity",
        checks: [
          "Protocols in use: OPC UA, Modbus, CAN, MQTT, LoRaWAN, cellular, others",
          "Network type, coverage, bandwidth and cost per device",
          "Behaviour when the network drops: buffering, retries and ordering",
          "Time synchronisation and timestamp source",
        ],
      },
      {
        title: "Gateways and edge",
        checks: [
          "Which logic runs at the edge and which in the cloud",
          "Local buffering capacity and what is dropped when it fills",
          "Hardware constraints: CPU, memory, storage, temperature, power",
          "How the gateway software is deployed, monitored and updated",
        ],
      },
      {
        title: "Data model and naming",
        checks: [
          "A hierarchy that places each signal in a site, area and asset",
          "Naming and unit conventions for topics, tags and properties",
          "Context to attach: product, batch, shift, work order, crop or field",
          "Versioning of schemas so old devices keep working",
        ],
      },
      {
        title: "Security and identity",
        checks: [
          "A unique identity and credential per device, with revocation",
          "Network segmentation between control, device and business networks",
          "Read-only by default, with any write path explicit and approved",
          "Signed updates, rollback and a process for vulnerabilities",
        ],
      },
      {
        title: "Lifecycle and operations",
        checks: [
          "Provisioning, replacement and decommissioning of devices",
          "Staged updates with health checks and automatic rollback",
          "Monitoring of device health: battery, signal, last seen, error rates",
          "Support model, spares and who answers when data stops",
        ],
      },
      {
        title: "Enterprise integration",
        checks: [
          "Interfaces to ERP, MES, maintenance, farm or asset systems",
          "Alerts and tickets raised with enough context to act",
          "Data platform and analytics access, with ownership of the data",
          "Hosting, cost model and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "Which of our devices and protocols are supported today, and how are the others added?",
      "What happens to data and commands when a device or gateway is offline?",
      "How are devices identified and authenticated, and how is a lost device revoked?",
      "How are updates signed, staged and rolled back, and who approves them?",
      "How do you keep integrations read-only, and how is any write path controlled?",
      "Who owns the source code, the data and the configuration, and what do we receive on exit?",
      "Which comparable fleets or plants run the system, and what did they have to customise?",
    ],
  },
  {
    id: "agri-traceability-requirements",
    source: "sol-agri-traceability-requirements",
    accessKey: "deview-sol-agri-traceability-requirements",
    title: "Agri ERP and traceability requirements checklist",
    buttonLabel: "Get the requirements checklist",
    kicker: "Checklist · Agriculture",
    lead: "A requirements checklist for farm management, dealer, grain and field systems, with the records and geolocation that deforestation and food traceability rules ask for.",
    inside: [
      "Eight requirement areas from the field register to compliance records.",
      "What plot-level geolocation and chain-of-custody records need to contain.",
      "Items for field apps that work without a mobile signal.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Agribusiness", "Dealers", "Grain handlers"],
    primaryPage: "farm-management-erp",
    areas: [
      {
        title: "Land, fields and boundaries",
        checks: [
          "A register of farms, fields and parcels with tenure and area",
          "Field boundaries as polygons in a standard format, with a coordinate system recorded",
          "Crop history by field and season",
          "Link from every field to the documents that evidence it",
        ],
      },
      {
        title: "Operations and inputs",
        checks: [
          "Operations recorded with date, area, product, rate, operator and machine",
          "Input stocks with batch and expiry, issued to fields",
          "Import of machine data through task files or interfaces",
          "Offline capture in the field with later synchronisation",
        ],
      },
      {
        title: "Costs, harvest and yield",
        checks: [
          "Costs allocated to fields and crops, reconciled to accounting",
          "Yield by field and zone, with harvest quantity and quality",
          "Margin per hectare and per tonne",
          "Link from harvest to storage, buyer and settlement",
        ],
      },
      {
        title: "Dealer and advisory",
        checks: [
          "Catalogue with registrations, label rates and documents",
          "Recommendations checked against registration and availability",
          "Quotes and orders reaching the ERP without rekeying",
          "Adviser app with offline field list, photos and visit reports",
        ],
      },
      {
        title: "Grain and commodity",
        checks: [
          "Weighbridge and sample integration with controlled corrections",
          "Grade rules, discounts and premiums by contract",
          "Storage, blending and shrink tracked by bin",
          "Contracts, position and settlement reconciled to accounting",
        ],
      },
      {
        title: "Geolocation and chain of custody",
        checks: [
          "Plot-level geolocation for each product lot where required by regulation",
          "Lot and batch identifiers that follow the product through storage and processing",
          "Segregation or mass-balance rules recorded for mixed lots",
          "Records of suppliers and farmers with the data needed for due diligence",
        ],
      },
      {
        title: "Compliance, records and reporting",
        checks: [
          "Key data elements and tracking events captured for each traceability rule that applies",
          "Application logs for pesticide, fertiliser and water use",
          "Retention of records for the period each rule or buyer requires",
          "Reports or declarations produced in the format each authority and buyer specifies",
        ],
      },
      {
        title: "Platform, data ownership and security",
        checks: [
          "Role-based access by farm, field and company",
          "Data sharing with advisers, buyers and machine vendors by explicit permission",
          "Backups, recovery objectives and open-format export",
          "Hosting, data residency and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How are field boundaries captured, validated and kept consistent with other systems?",
      "How does the system prove which plots a lot of product came from, including after mixing?",
      "What happens when the regulation or the buyer's requirements change?",
      "How do field apps behave without a signal, and how are conflicts resolved?",
      "How do recommendations stay within product registration and label rules?",
      "Who owns the source code, the data and the configuration, and what do we receive on exit?",
      "Which comparable agricultural enterprises use the system, and what did they customise?",
    ],
  },
  {
    id: "data-integration-reference",
    source: "sol-data-integration-reference",
    accessKey: "deview-sol-data-integration-reference",
    title: "Data platform and integration reference architecture",
    buttonLabel: "Get the reference architecture",
    kicker: "Reference architecture · Data and integration",
    lead: "A reference checklist for enterprise integration, modernisation and data platform projects: domains, integration patterns, contracts, platform layers, master data, quality, security and operating model.",
    inside: [
      "Eight areas to decide before you modernise, integrate or build a data platform.",
      "Contract, schema and versioning items that stop integrations breaking.",
      "Quality and ownership items that make a platform trusted.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Architects", "Data teams", "IT leaders"],
    primaryPage: "legacy-application-modernization",
    areas: [
      {
        title: "Systems, domains and ownership",
        checks: [
          "An inventory of systems, interfaces and data stores with owners",
          "Business domains and which system is the source of truth for each",
          "Dependencies and the cost of changing each system",
          "Risks from end-of-life platforms, skills and vendors",
        ],
      },
      {
        title: "Integration patterns",
        checks: [
          "When to use synchronous APIs, events and batch files, and why",
          "Idempotency, retries, dead-letter handling and ordering rules",
          "Orchestration for multi-step processes with compensating actions",
          "Partner and EDI connections handled through one gateway",
        ],
      },
      {
        title: "Contracts and schemas",
        checks: [
          "API and event contracts in version control (OpenAPI, AsyncAPI, schema registry)",
          "Backward-compatibility rules and a deprecation policy",
          "Contract tests run in the pipeline for both sides of each interface",
          "Documentation and a catalogue consumers can search",
        ],
      },
      {
        title: "Modernisation approach",
        checks: [
          "A decision for each application: retire, replace, rehost, replatform, refactor or rebuild",
          "Incremental migration with the strangler pattern instead of a single cut-over",
          "Characterisation tests that capture existing behaviour before change",
          "Data migration with reconciliation and a rollback plan",
        ],
      },
      {
        title: "Data platform layers",
        checks: [
          "Raw, curated and serving layers with clear rules for each",
          "Batch and streaming ingestion with replay",
          "Semantic layer and metric definitions with owners",
          "Storage formats, partitioning and cost controls",
        ],
      },
      {
        title: "Master and reference data",
        checks: [
          "Master data domains (customer, product, asset, supplier) with a golden record rule",
          "Matching and merge rules, with human review of uncertain matches",
          "Reference data with effective dates and ownership",
          "Propagation of changes to consuming systems",
        ],
      },
      {
        title: "Quality, lineage and observability",
        checks: [
          "Data quality rules at ingestion and in curated layers, with dashboards",
          "Lineage from source to report",
          "Tracing and metrics for integrations, with alerts and runbooks",
          "Reconciliation checks between source and target",
        ],
      },
      {
        title: "Security, governance and operating model",
        checks: [
          "Authentication and authorisation between services and for users",
          "Classification, masking and retention of sensitive data",
          "Roles for platform, domain and data owners",
          "Environments, release process and cost ownership",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How do you migrate in steps so the business keeps running throughout?",
      "How are interface contracts versioned, tested and retired?",
      "How is data quality measured, owned and escalated?",
      "How do you prove that the new system matches the old one before cut-over?",
      "How is access to sensitive data controlled and audited across the platform?",
      "Who owns the source code, the data, the schemas and the pipelines, and what do we receive on exit?",
      "Which comparable estates have you migrated or integrated, and what went wrong that you would now avoid?",
    ],
  },
];
