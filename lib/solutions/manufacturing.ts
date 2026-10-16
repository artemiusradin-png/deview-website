import type { SolutionPage } from "./types";

export const MANUFACTURING_PAGES: SolutionPage[] = [
  {
    slug: "manufacturing-execution-system-development",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Manufacturing Execution System (MES) Development | Deview",
    seoDescription:
      "Custom MES development for manufacturers: work orders, shop-floor data, traceability, quality, OEE and ERP integration, built on ISA-95, OPC UA and MQTT.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "Manufacturing execution system (MES) development",
    intro:
      "We develop custom manufacturing execution systems for plants that have outgrown spreadsheets and disconnected tools: work orders, shop-floor data collection, material genealogy, quality, equipment performance and ERP integration, modelled on ISA-95 and connected to machines through OPC UA, MQTT and Modbus. You own the code.",
    modules: [
      {
        title: "Work orders and routings",
        body: "Orders released from the ERP, broken into operations along a routing, with status, quantities and operator confirmations flowing back.",
      },
      {
        title: "Scheduling and dispatch",
        body: "Operations sequenced against capacity, materials, tooling and shifts, with a live dispatch list for each work centre.",
      },
      {
        title: "Shop-floor data collection",
        body: "Counts, cycle times and states read from machines through OPC UA, MQTT or Modbus, and from operator terminals and barcode scanners where no signal exists.",
      },
      {
        title: "Material genealogy and traceability",
        body: "Lot and serial tracking from raw material to finished unit, so a recall query answers which lots went into which products and where they shipped.",
      },
      {
        title: "Quality management",
        body: "In-process inspections, statistical process control, non-conformance records and corrective and preventive action, tied to the work order and lot.",
      },
      {
        title: "Equipment status and OEE",
        body: "Availability, performance and quality measured per machine and shift, with downtime reasons captured at the moment they occur.",
      },
      {
        title: "Recipes, BOMs and work instructions",
        body: "Versioned bills of materials, parameters and instructions released to the line, with approvals and electronic signatures where regulation requires them.",
      },
      {
        title: "Maintenance triggers",
        body: "Machine hours, counters and alarms raise maintenance requests in your maintenance system instead of waiting for a calendar.",
      },
      {
        title: "ERP and reporting integration",
        body: "Orders and master data down, confirmations, scrap and goods movements up, and shift, plant and enterprise reports on one data model.",
      },
    ],
    diagram: "mes",
    diagramCaption:
      "Reference architecture: the MES sits between the ERP and the shop floor, following the ISA-95 level 3 role.",
    standards: [
      {
        name: "ISA-95 (IEC 62264)",
        note: "The model for what belongs at the manufacturing operations level and how it exchanges data with business systems.",
      },
      {
        name: "B2MML",
        note: "XML schemas that carry ISA-95 messages between the ERP and the MES.",
      },
      {
        name: "OPC UA (IEC 62541)",
        note: "The standard interface for reading machine data and events in a vendor-neutral way.",
      },
      {
        name: "MQTT and Sparkplug B",
        note: "Lightweight publish and subscribe messaging for edge gateways and sensors.",
      },
      {
        name: "ISA-88 (IEC 61512)",
        note: "Batch and recipe modelling for process and hybrid manufacturing.",
      },
      {
        name: "21 CFR Part 11 and EU GMP Annex 11",
        note: "Electronic record and signature requirements for regulated products, designed in from the start where they apply.",
      },
      {
        name: "IEC 62443",
        note: "Zones, conduits and secure development practice for industrial systems.",
      },
    ],
    dataModel: [
      {
        entity: "Work order and operation",
        holds: "Product, quantity, routing step, planned and actual times, status and the work centre.",
      },
      {
        entity: "Work centre and machine",
        holds: "Capacity, calendar, current state, counters and the signals it publishes.",
      },
      {
        entity: "Material lot and serial unit",
        holds: "Identifier, supplier or parent lots, location, status and the consumption and production links that form the genealogy.",
      },
      {
        entity: "Production event",
        holds: "Start, stop, count, scrap and confirmation, with the operator and source.",
      },
      {
        entity: "Downtime event",
        holds: "Machine, duration, reason code and whether it was planned.",
      },
      {
        entity: "Inspection and non-conformance",
        holds: "Characteristic, limits, measurement, disposition and the corrective action that follows.",
      },
      {
        entity: "Recipe and BOM version",
        holds: "Components, parameters, instructions, approval record and effective dates.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged MES is the right call for standard discrete or process manufacturing, especially when your ERP or automation vendor offers one that your team already knows. Evaluate packaged systems first.",
      },
      {
        title: "Extend",
        body: "Extend when a vendor system covers most of the plant but not a process you differ on, such as a special inspection flow, a customer-specific traceability report or a work-instruction step. We build that module and integrate it.",
      },
      {
        title: "Build",
        body: "Build when your process is unusual, you run mixed equipment across several plants, or the real problem is joining the ERP, machines and quality records into one picture. A lean manufacturing operations layer often does more than a full suite.",
      },
    ],
    security: [
      {
        title: "Network segmentation",
        body: "Machines sit in their own zones; the MES reaches them through controlled conduits, and data to the cloud flows outward only.",
      },
      {
        title: "Resilience on the line",
        body: "Operator terminals keep working offline and sync afterwards, so a network fault does not stop production records.",
      },
      {
        title: "Electronic records",
        body: "Audit trail, role-based permissions and electronic signatures where your quality system requires them.",
      },
      {
        title: "Secure development",
        body: "Dependency scanning, reviewed releases and signed builds, following IEC 62443-4-1 practice.",
      },
      {
        title: "Hosting",
        body: "On-premise at the plant, in your own cloud account, or both, with an edge node at each site.",
      },
    ],
    phases: [
      {
        title: "Process walk and requirements",
        body: "We walk the line with production, quality, maintenance and IT, and write down what is recorded today, where, and by whom.",
      },
      {
        title: "Architecture and connectivity design",
        body: "ERP interfaces, machine signal lists and the network layout are agreed, with each machine's protocol and data points confirmed.",
      },
      {
        title: "Pilot on one line",
        body: "Work orders, data collection and traceability go live on a single line so the data can be compared with what the team records by hand.",
      },
      {
        title: "Roll-out by line and plant",
        body: "More lines, quality workflows and OEE reporting are added in releases, each tested by the people who use it.",
      },
      {
        title: "Operate and extend",
        body: "Release management and support, plus new reports, machines and plants as the system proves itself.",
      },
    ],
    proof: [
      { label: "Fizkultura: reporting pipeline reconciling several source systems", href: "/case-studies/fizkultura" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "Should we build an MES or buy one?",
        a: "Evaluate packaged systems first. Build or extend when your process differs from the standard, when equipment varies across plants, or when connecting the ERP, machines and quality records is the hard part.",
      },
      {
        q: "Which machines and controllers can you connect?",
        a: "Any equipment that exposes OPC UA, MQTT or Modbus, directly or through a gateway. For older machines without a signal, operators confirm counts and states at a terminal or scanner.",
      },
      {
        q: "Do you design the hardware?",
        a: "We build the software and the integration around devices: data collection, edge gateways, terminals and dashboards. Electronics and firmware design stay with your equipment suppliers.",
      },
      {
        q: "Can the MES support regulated products?",
        a: "Yes. Where 21 CFR Part 11 or EU GMP Annex 11 applies, we design the audit trail, permissions and electronic signatures in from the beginning, and validation is planned with your quality team.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
];
