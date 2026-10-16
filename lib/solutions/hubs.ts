import type { SolutionHub } from "./types";

/**
 * The four vertical hubs. Kept apart from the page data so the footer (a client component)
 * can read the hub list without pulling every page's text into the bundle. A hub is
 * published once its vertical has a page; index.ts checks that at build time.
 */
export const SOLUTION_HUBS: SolutionHub[] = [
  {
    slug: "banking-and-payments",
    vertical: "banking",
    published: true,
    navLabel: "Banking & payments",
    seoTitle: "Banking and Payments Software Development | Deview",
    seoDescription:
      "Custom software for banks, lenders and payment companies: SME lending platforms, payment and transaction infrastructure, reconciliation, controlling and regulatory reporting.",
    kicker: "Enterprise solutions · Banking and payments",
    h1: "Software development for banks and payment companies",
    intro:
      "We build custom software for banks, lenders and payment companies: lending and credit platforms, payment and transaction infrastructure, reconciliation, controlling and regulatory reporting. It runs next to your core banking system rather than instead of it, and you own the code.",
    needs: [
      {
        title: "Lending and credit platforms",
        body: "Application intake, credit workflow, collateral, servicing and collections for SME and commercial lending.",
      },
      {
        title: "Payment and transaction infrastructure",
        body: "Payment hubs, ISO 20022 messaging, real-time payment connectivity and transaction monitoring.",
      },
      {
        title: "Reconciliation and ledgers",
        body: "Matching engines and sub-ledgers that close the gap between payment rails, core banking and finance.",
      },
      {
        title: "Controlling and management reporting",
        body: "Cost, margin and portfolio reporting built on one governed data layer instead of spreadsheets.",
      },
      {
        title: "Regulatory reporting",
        body: "Returns and disclosures generated from data with lineage, with the audit trail attached.",
      },
      {
        title: "Resilience and security",
        body: "Cloud, DevOps and security engineering for systems that must stay up and stay compliant.",
      },
    ],
    faqs: [
      {
        q: "Do you replace our core banking system?",
        a: "No. Our systems sit beside the core and post to it through APIs, message queues or files. The core stays the book of record; we build the workflows, data layers and interfaces around it.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the data and any models stay yours, and the system runs in your own cloud account or data centre.",
      },
      {
        q: "Where do I start if the scope is not clear yet?",
        a: "With a short discovery: we map the process, the systems it touches and the controls it needs, then propose a first release. The requirements template on each page helps you collect the same information before the call.",
      },
    ],
  },
  {
    slug: "oil-and-gas-software",
    vertical: "oil-gas",
    published: true,
    navLabel: "Oil & gas software",
    seoTitle: "Oil and Gas Software Development | Deview",
    seoDescription:
      "Custom software for oil and gas operators: upstream production management, allocation, exploration and subsurface data, drilling reporting, project controls and methane reporting.",
    kicker: "Enterprise solutions · Oil and gas",
    h1: "Oil and gas software development",
    intro:
      "We build custom software for oil and gas operators and service companies: production management and allocation, exploration and subsurface data, drilling and well reporting, project controls and emissions reporting. Field data flows one way into the analytics layer, so the software never touches operational control.",
    needs: [
      {
        title: "Production management and allocation",
        body: "Daily production reporting, well tests, allocation, deferment and loss accounting across fields and facilities.",
      },
      {
        title: "Exploration and subsurface data",
        body: "Data platforms and catalogues for wells, logs, seismic and reports, designed against OSDU and Energistics standards.",
      },
      {
        title: "Drilling and well operations",
        body: "Daily drilling reports, WITSML data flows and well-file management.",
      },
      {
        title: "Project controls and joint ventures",
        body: "Planning and control, cash calls, AFEs and partner reporting.",
      },
      {
        title: "Asset integrity and HSE",
        body: "Inspection, permit to work and incident management tied to the asset register.",
      },
      {
        title: "Emissions and regulatory reporting",
        body: "Methane measurement, reporting and verification data, and the regulatory returns built on it.",
      },
    ],
    faqs: [
      {
        q: "Does your software connect to SCADA and control systems?",
        a: "It reads from them through historians, OPC UA servers or gateways and keeps the connection one-way. The platform sits in the business network and does not write to operational control.",
      },
      {
        q: "Can you work with our existing data platform?",
        a: "Yes. We integrate with historians, engineering applications and cloud data platforms, and design against OSDU and Energistics standards where they apply.",
      },
      {
        q: "Where can I see the team's oil and gas background?",
        a: "The oil and gas page lists projects from 2010 to 2020 in planning, control, engineering data and reporting. The EnerQuest case study shows a recent upstream production management pilot.",
      },
    ],
  },
  {
    slug: "manufacturing-software",
    vertical: "manufacturing",
    published: true,
    navLabel: "Manufacturing software",
    seoTitle: "Manufacturing Software Development | Deview",
    seoDescription:
      "Custom software for manufacturers: manufacturing execution systems, production planning, quality management, maintenance, warehouse and shop-floor integration.",
    kicker: "Enterprise solutions · Manufacturing",
    h1: "Manufacturing software development",
    intro:
      "We build custom software for manufacturers who have outgrown spreadsheets and point tools: manufacturing execution, production planning and scheduling, quality, maintenance and warehouse systems, connected to your ERP and to machines on the shop floor.",
    needs: [
      {
        title: "Manufacturing execution",
        body: "Work orders, routings, shop-floor data collection, genealogy and electronic records.",
      },
      {
        title: "Planning and scheduling",
        body: "Finite-capacity scheduling that respects materials, tooling, shifts and changeovers.",
      },
      {
        title: "Quality management",
        body: "In-process inspection, statistical process control, non-conformance and corrective action.",
      },
      {
        title: "Maintenance",
        body: "Maintenance management driven by machine hours, counters and condition data.",
      },
      {
        title: "Warehouse and inventory",
        body: "Stock locations, lots, serials and material flow between stores and lines.",
      },
      {
        title: "Shop-floor connectivity",
        body: "Software and integration around PLCs, sensors, gateways and scanners using OPC UA, MQTT and Modbus.",
      },
    ],
    faqs: [
      {
        q: "Should we buy a packaged MES instead?",
        a: "Often, yes. A packaged system is the right call when your process is standard and your ERP or automation vendor supports it. Custom development makes sense where your process differs, you run mixed equipment across plants, or integration is the real problem.",
      },
      {
        q: "Do you design hardware?",
        a: "We build the software and integration around devices: data collection, gateways, terminals and dashboards. Electronics and firmware design stay with your equipment suppliers.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
  },
  {
    slug: "agriculture-software",
    vertical: "agriculture",
    published: true,
    navLabel: "Agriculture software",
    seoTitle: "Agriculture Software Development | Deview",
    seoDescription:
      "Custom software for agricultural enterprises: farm management, dealer and ordering platforms, grain and commodity systems, traceability, field apps and sensor networks.",
    kicker: "Enterprise solutions · Agriculture",
    h1: "Agriculture software development",
    intro:
      "We build custom software for agricultural enterprises: farm and field management, dealer and ordering platforms, grain and commodity systems, traceability for deforestation and food safety rules, field apps and sensor networks. Field work, sales and supply connect in one platform, and you own the code.",
    needs: [
      {
        title: "Farm and field management",
        body: "Plots, crops, inputs, operations and costs for agricultural enterprises, from planning through harvest and reporting.",
      },
      {
        title: "Dealer and ordering platforms",
        body: "Catalogues, quotes, orders and credit for dealers and distributors, with product and agronomy knowledge built in.",
      },
      {
        title: "Grain and commodity handling",
        body: "Contracts, weighbridge, grading, storage and settlement for grain, oilseeds and other commodities.",
      },
      {
        title: "Traceability and compliance",
        body: "Plot-level geolocation, chain of custody and records for deforestation regulation and food traceability rules.",
      },
      {
        title: "Field apps",
        body: "Offline-first apps for agronomists and crews: scouting, sampling, recommendations and photos with location.",
      },
      {
        title: "Sensors and precision agriculture",
        body: "Soil, weather and machinery data from the field, brought together for decisions and automation.",
      },
    ],
    faqs: [
      {
        q: "Do you build systems for individual farms or for agribusinesses?",
        a: "For agricultural enterprises: large farms and farming groups, input suppliers and distributors, grain handlers and processors, where several teams and systems have to work from the same data.",
      },
      {
        q: "Do the field apps work without a mobile signal?",
        a: "Yes. Field apps are built offline first: they record data in the field and synchronise when a connection returns, with conflicts shown for review.",
      },
      {
        q: "Where can I see agricultural work from the team?",
        a: "The AgroPlatforma case study shows AI field diagnostics for a national agricultural network, with a Flutter app and quotation drafting written into Salesforce for human approval.",
      },
    ],
  },
  {
    slug: "enterprise-engineering-solutions",
    vertical: "cross-industry",
    published: true,
    navLabel: "IoT, integration and AI",
    seoTitle: "IoT, Integration, Data and AI Engineering for Enterprises | Deview",
    seoDescription:
      "Cross-industry engineering for enterprises: IoT platforms, SCADA and edge integration, systems integration, legacy modernisation, data platforms, AI, cloud and security.",
    kicker: "Enterprise solutions · Cross-industry",
    h1: "IoT, integration, data and AI engineering for enterprises",
    intro:
      "Some systems are not specific to one industry. We build IoT platforms and edge software, integrate and modernise enterprise applications, engineer data platforms and AI, and harden cloud and security, for banks, energy companies, manufacturers and agricultural enterprises alike. Each page below describes one of these engineering areas in technical terms, and you own the code.",
    needs: [
      {
        title: "IoT and edge",
        body: "Device management, telemetry, gateways, tracking and digital twins, software and integration around devices.",
      },
      {
        title: "Integration and APIs",
        body: "Connecting ERP, CRM, operational and partner systems through APIs, events and files.",
      },
      {
        title: "Legacy modernisation",
        body: "Moving ageing applications and databases to maintainable platforms in steps, without stopping the business.",
      },
      {
        title: "Data platforms",
        body: "Lakehouses, pipelines, master data and analytics on governed, documented data.",
      },
      {
        title: "AI and automation",
        body: "Private language models, agents and machine learning that work on your own data and systems.",
      },
      {
        title: "Cloud and security",
        body: "Cloud migration, DevSecOps, zero trust, resilience and compliance engineering.",
      },
    ],
    faqs: [
      {
        q: "Do you design hardware?",
        a: "We build the software and integration around devices: data collection, edge gateways, terminals, dashboards and cloud back-ends. Electronics and firmware design stay with your equipment suppliers.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Yes. Most of our work connects to systems you already run, such as ERP, core banking, historians and CRM, through APIs, messages or files.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
  },
];

export const publishedHubs = () => SOLUTION_HUBS.filter((hub) => hub.published);
