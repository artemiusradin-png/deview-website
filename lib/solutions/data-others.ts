import type { SolutionPage } from "./types";

export const DATA_OTHERS_PAGES: SolutionPage[] = [
  {
    slug: "esg-and-carbon-accounting-platform",
    vertical: "cross-industry",
    serviceId: "data-engineering",
    seoTitle: "ESG and Carbon Accounting Data Platform | Deview",
    seoDescription:
      "ESG and carbon accounting data platform: scope 1, 2 and 3 emissions, activity data, factors, evidence and assurance support for CSRD, ISSB and HKEX reporting.",
    kicker: "Data engineering · Sustainability",
    h1: "ESG and carbon accounting data platform",
    intro:
      "We build ESG and carbon accounting data platforms for companies and financial institutions: collection of activity data from operational and finance systems, scope 1, 2 and 3 emissions calculation with documented factors, evidence and approvals for every figure, and reports aligned with the frameworks that apply. Sustainability numbers get the same controls as financial numbers, and you own the platform and the code.",
    modules: [
      {
        title: "Organisational and operational boundary",
        body: "The legal entities, facilities and activities in scope under the chosen consolidation approach, with changes through the year handled and recorded.",
      },
      {
        title: "Activity data collection",
        body: "Automated feeds from energy, fuel, travel, procurement, logistics and facility systems, and structured forms for what cannot be automated, with owners and deadlines.",
      },
      {
        title: "Emission factor library",
        body: "Versioned factors from recognised databases and supplier data, with source, region, year and applicability, applied by rule.",
      },
      {
        title: "Scope 1 and 2 calculation",
        body: "Direct emissions from fuels and processes, and purchased energy with location-based and market-based methods, with the method shown for each figure.",
      },
      {
        title: "Scope 3 calculation",
        body: "Category-level calculation from spend, activity and supplier data, with a plan to move from estimates to primary data and data quality scores.",
      },
      {
        title: "Financed emissions for financial institutions",
        body: "Attribution of client and investee emissions to loans and investments using the industry methodology, with data quality scoring per holding.",
      },
      {
        title: "Evidence and approval workflow",
        body: "Source documents attached to data points, review and approval by owners and a reviewer, and a locked record when a period is closed.",
      },
      {
        title: "Targets, scenarios and reduction tracking",
        body: "Targets by scope and entity, progress against them, and the effect of reduction projects and scenarios on the figures.",
      },
      {
        title: "Framework reporting",
        body: "Outputs mapped to the reporting standards that apply, with the underlying data, methodology notes and an assurance pack.",
      },
    ],
    diagram: {
      title: "ESG and carbon accounting data platform: reference architecture",
      desc: "Energy, fuel, travel, procurement, logistics and finance systems, supplier data and manual submissions feed a carbon accounting platform with a boundary model, activity data collection, emission factors, scope 1, 2 and 3 calculation, evidence and approval. Reports go to disclosure frameworks, management, auditors and investors.",
      leftLabel: "Data sources",
      platformLabel: "Carbon platform",
      rightLabel: "Consumers",
      platformTitle: "ESG and carbon accounting platform",
      left: [
        ["Operations and facilities", "Energy, fuel, waste"],
        ["Finance and procurement", "Spend, suppliers, travel"],
        ["Suppliers and clients", "Primary data, estimates"],
      ],
      modules: [
        ["Boundary model", "Entities, facilities"],
        ["Activity collection", "Feeds, forms, owners"],
        ["Emission factors", "Versioned library"],
        ["Scope 1, 2 and 3", "Methods and quality"],
        ["Evidence workflow", "Review, approve, lock"],
        ["Targets", "Progress, scenarios"],
      ],
      strip: "Method and source per figure · lineage · audit trail",
      right: [
        ["Disclosure reports", "CSRD, ISSB, local rules"],
        ["Management", "Targets, reductions"],
        ["Assurance providers", "Evidence packs"],
        ["Investors and customers", "Data requests"],
      ],
    },
    diagramCaption:
      "Reference architecture: each reported number is traceable to activity data, a factor, a method and an approval.",
    standards: [
      {
        name: "GHG Protocol and ISO 14064-1",
        note: "The standards for corporate greenhouse gas inventories: boundaries, scopes, calculation approaches and reporting.",
      },
      {
        name: "ISSB IFRS S1 and S2",
        note: "International sustainability disclosure standards on general requirements and climate-related disclosures, which many jurisdictions adopt.",
      },
      {
        name: "EU CSRD and ESRS",
        note: "The European Union's corporate sustainability reporting directive and standards, including double materiality and the climate standard ESRS E1.",
      },
      {
        name: "HKEX ESG reporting guide",
        note: "Hong Kong listing rules on environmental, social and governance reporting, including climate-related disclosure.",
      },
      {
        name: "PCAF",
        note: "The Partnership for Carbon Accounting Financials methodology for financed emissions.",
      },
      {
        name: "Assurance standards",
        note: "ISAE 3000 and ISAE 3410 for assurance on sustainability and greenhouse gas information.",
      },
    ],
    dataModel: [
      {
        entity: "Entity and facility",
        holds: "Legal entity, facility, ownership share, control approach and period in scope.",
      },
      {
        entity: "Activity data point",
        holds: "Quantity, unit, period, source system or form, owner and the evidence attached.",
      },
      {
        entity: "Emission factor",
        holds: "Factor, gas, unit, source, region, year and applicability rules.",
      },
      {
        entity: "Emission result",
        holds: "Scope, category, value, method, factor version and data quality score.",
      },
      {
        entity: "Supplier or client record",
        holds: "Primary data supplied, estimate used, quality score and the engagement status.",
      },
      {
        entity: "Review and approval",
        holds: "Reviewer, decision, comments, time and period lock.",
      },
      {
        entity: "Disclosure datapoint",
        holds: "Framework requirement, value, narrative, source figures and approval.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Carbon accounting and ESG reporting products are mature and quick to start, and the sensible choice for most companies whose sources and methods are standard.",
      },
      {
        title: "Extend",
        body: "Extend a product with automated feeds from your systems, supplier data collection and your own approval workflow, which products often leave manual.",
      },
      {
        title: "Build",
        body: "Build when you have complex operations, several frameworks, financed emissions or industry-specific methods, or when sustainability data must live in the same governed platform as financial and operational data.",
      },
    ],
    security: [
      {
        title: "Controls like financial reporting",
        body: "Approvals, segregation of duties and period locks apply to sustainability data as to financial data.",
      },
      {
        title: "Evidence retention",
        body: "Source documents and calculations are retained unaltered, with lineage to every reported figure.",
      },
      {
        title: "Methodology governance",
        body: "Changes to factors, boundaries and methods are versioned, approved and applied to restated periods consistently.",
      },
      {
        title: "Access by role and entity",
        body: "Data owners, reviewers, auditors and external parties see only their scope.",
      },
      {
        title: "Audit trail",
        body: "All changes and approvals carry user and time, ready for assurance.",
      },
    ],
    phases: [
      {
        title: "Reporting obligations and boundary review",
        body: "We review the frameworks and commitments that apply, the boundary and the existing data, with sustainability, finance and operations.",
      },
      {
        title: "Data and method design",
        body: "Data sources, factors and methods are agreed, with owners and the evidence required for each data point.",
      },
      {
        title: "Build scope 1 and 2 first",
        body: "Direct emissions and energy are automated first, producing an auditable inventory.",
      },
      {
        title: "Add scope 3 and financed emissions",
        body: "Scope 3 categories and, for financial institutions, financed emissions follow, with data quality improvement plans.",
      },
      {
        title: "Reporting and assurance",
        body: "Framework reports and assurance packs are produced from the platform, and the process runs on the reporting calendar.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Fizkultura: pipeline bringing several sources into one report", href: "/case-studies/fizkultura" },
      { label: "Methane emissions monitoring and reporting", href: "/solutions/methane-emissions-monitoring-and-reporting" },
    ],
    faqs: [
      {
        q: "Do we need to build this, or use an ESG product?",
        a: "Most companies should start with a product. Building makes sense when your sources and methods are complex, when you need financed emissions or industry-specific calculation, or when sustainability data must sit in your own governed data platform.",
      },
      {
        q: "How do you deal with scope 3, where data is poor?",
        a: "By starting with spend- and activity-based estimates, scoring data quality per category, and engaging the suppliers and clients that matter most to replace estimates with primary data over time.",
      },
      {
        q: "Can the platform support several reporting frameworks at once?",
        a: "Yes. The data and methods are held once, and each framework is a mapping from the same datapoints, so figures are consistent across disclosures.",
      },
      {
        q: "Is the data ready for assurance?",
        a: "That is the design goal. Every figure links to its source data, factor, method and approval, and the system produces the evidence pack an assurance provider asks for.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the methods and the data stay yours.",
      },
    ],
    assetId: "methane-mrv-readiness",
    related: [
      { label: "Methane emissions monitoring and reporting", href: "/solutions/methane-emissions-monitoring-and-reporting" },
      { label: "Banking data warehouse and lakehouse", href: "/solutions/banking-data-warehouse-and-lakehouse" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "oee-and-production-analytics",
    vertical: "manufacturing",
    serviceId: "data-engineering",
    seoTitle: "OEE and Production Analytics Dashboards for Manufacturers | Deview",
    seoDescription:
      "OEE and production analytics for manufacturers: availability, performance and quality by machine and shift, loss trees, downtime reasons and live line boards.",
    kicker: "Data engineering · Manufacturing",
    h1: "OEE and production analytics dashboards",
    intro:
      "We build OEE and production analytics dashboards for manufacturers: availability, performance and quality measured per machine, line and shift from machine data, a loss tree that shows where time and output go, downtime reasons captured at the moment, and live boards on the line. Operators and managers see the same numbers, defined once, and you own the platform and the code.",
    modules: [
      {
        title: "Machine data capture",
        body: "States, counts, cycle times and rejects from PLCs, sensors and the MES, with a model that turns raw signals into running, stopped, starved and blocked states.",
      },
      {
        title: "OEE calculation",
        body: "Availability, performance and quality combined per machine, line and shift, with definitions that follow the standard and with planned and unplanned stops separated.",
      },
      {
        title: "Loss tree and six big losses",
        body: "A structured breakdown of lost time and output into categories such as breakdowns, changeovers, minor stops, reduced speed, scrap and start-up losses.",
      },
      {
        title: "Downtime reason capture",
        body: "Prompts at the machine or on a tablet for the cause of each stop, with short lists, defaults and a time limit so data is captured when it is fresh.",
      },
      {
        title: "Pareto and trend analysis",
        body: "Top causes of loss by machine, product and period, trends and comparison between shifts, lines and plants.",
      },
      {
        title: "Live line boards",
        body: "Andon-style displays of current output against target, state and open issues, readable from the floor.",
      },
      {
        title: "Shift and production reports",
        body: "Automatic shift reports, handover notes and daily and weekly summaries, replacing manual spreadsheets.",
      },
      {
        title: "Product and order context",
        body: "Performance by product, order and operator, so differences caused by what is made are separated from differences caused by how.",
      },
      {
        title: "Alerts and improvement tracking",
        body: "Alerts on stops and slow cycles, and tracking of improvement actions with their effect on OEE.",
      },
    ],
    diagram: {
      title: "OEE and production analytics: reference architecture",
      desc: "Machines, PLCs, sensors and the MES feed an analytics platform with state modelling, OEE calculation, a loss tree, downtime reason capture, Pareto analysis and reports. Outputs go to live line boards, operators, supervisors, managers and improvement teams.",
      leftLabel: "Data sources",
      platformLabel: "Analytics platform",
      rightLabel: "Consumers",
      platformTitle: "OEE and production analytics platform",
      boundary: "One-way from OT",
      left: [
        ["Machines and PLCs", "States, counts, cycles"],
        ["Sensors and counters", "Rejects, energy"],
        ["MES and ERP", "Orders, products, shifts"],
      ],
      modules: [
        ["State modelling", "Run, stop, starved"],
        ["OEE calculation", "A, P and Q"],
        ["Loss tree", "Six big losses"],
        ["Reason capture", "Tablet, machine HMI"],
        ["Pareto and trends", "Cause, shift, product"],
        ["Reports", "Shift, daily, weekly"],
      ],
      strip: "ISO 22400 definitions · audit trail · offline terminals",
      right: [
        ["Live line boards", "Output, state"],
        ["Operators", "Reasons, alerts"],
        ["Supervisors and managers", "Reports, Pareto"],
        ["Improvement teams", "Actions, results"],
      ],
    },
    diagramCaption:
      "Reference architecture: machine signals become states, states become OEE and losses, and losses become improvement actions.",
    standards: [
      {
        name: "ISO 22400",
        note: "Key performance indicators for manufacturing operations management, including the definitions of OEE and its components.",
      },
      {
        name: "OPC UA and MQTT",
        note: "Interfaces for machine signals, with a unified namespace where one exists.",
      },
      {
        name: "ISA-95",
        note: "Equipment hierarchy and production performance exchange between operations and business systems.",
      },
      {
        name: "Lean and TPM practice",
        note: "The six big losses and loss tree structure used in total productive maintenance.",
      },
      {
        name: "OpenAPI and BI interfaces",
        note: "Interfaces to reports, boards and the data platform.",
      },
      {
        name: "Ergonomics for shop-floor displays",
        note: "Readability, colour and contrast guidelines for boards seen from a distance.",
      },
    ],
    dataModel: [
      {
        entity: "Machine and line",
        holds: "Identifier, type, hierarchy position, ideal cycle time and the signals used.",
      },
      {
        entity: "State interval",
        holds: "State, start and end, duration, reason and the order running.",
      },
      {
        entity: "Production count",
        holds: "Good and rejected quantities by interval, machine and order.",
      },
      {
        entity: "Downtime reason",
        holds: "Reason code, category, whether planned and the operator who entered it.",
      },
      {
        entity: "OEE record",
        holds: "Availability, performance, quality and OEE by machine, line, shift and period.",
      },
      {
        entity: "Improvement action",
        holds: "Description, loss addressed, owner, due date and measured effect.",
      },
      {
        entity: "Shift",
        holds: "Calendar, crews, breaks, targets and handover notes.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "OEE and production monitoring products are widely available, quick to deploy and the right start for plants with standard machines and reasons.",
      },
      {
        title: "Extend",
        body: "Extend a product with your own state logic for unusual machines, integration with your MES and maintenance system and analysis that ties losses to products and orders.",
      },
      {
        title: "Build",
        body: "Build when you have mixed equipment across plants, want one consistent definition of OEE everywhere, or need analytics woven into your own MES and planning.",
      },
    ],
    security: [
      {
        title: "One-way data flow",
        body: "Machine data is read from the operational side only, and the system sends no commands.",
      },
      {
        title: "Consistent definitions",
        body: "OEE definitions are versioned and applied the same way in every report, with changes dated and approved.",
      },
      {
        title: "Offline terminals",
        body: "Reason capture works through network faults and synchronises afterwards.",
      },
      {
        title: "Role-based access",
        body: "Operators, supervisors and managers see the views they need.",
      },
      {
        title: "Audit trail",
        body: "Edits to reasons and states are recorded with user and time.",
      },
    ],
    phases: [
      {
        title: "Definitions and loss review",
        body: "We agree how OEE and losses are defined with operations, maintenance and quality, and review what data is available.",
      },
      {
        title: "Connect one line",
        body: "One line's signals are connected and modelled into states, and the first OEE figures are compared with the team's own.",
      },
      {
        title: "Add reason capture and boards",
        body: "Downtime reason capture and live boards go live on the line, with operator feedback shaping the screens.",
      },
      {
        title: "Analysis and reports",
        body: "Pareto, trends and automatic shift reports replace manual spreadsheets.",
      },
      {
        title: "Scale across lines and plants",
        body: "More lines and plants follow, with improvement tracking tied to the numbers.",
      },
    ],
    proof: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
    ],
    faqs: [
      {
        q: "How do you define OEE so that everyone trusts it?",
        a: "By agreeing the definition once with operations, maintenance and quality, based on the standard, writing it down and applying it in every report. Planned and unplanned stops, ideal cycle times and what counts as good output are decided explicitly.",
      },
      {
        q: "Can we get OEE without connecting every machine?",
        a: "Yes. Machines without signals can be tracked with counters, a simple sensor or tablet entry, and then upgraded. Start where the losses are largest.",
      },
      {
        q: "How do you get operators to enter downtime reasons?",
        a: "By making it quick, with short lists by machine, prompts at the moment of the stop and visible use of the data. Reasons that nobody uses stop being entered.",
      },
      {
        q: "Does it connect to our MES?",
        a: "Yes. Orders, products and shifts come from the MES, and OEE and loss data can feed back into it and into maintenance and quality systems.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the definitions and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "CMMS and maintenance management software", href: "/solutions/cmms-and-maintenance-management-software" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "supply-chain-visibility-platform",
    vertical: "manufacturing",
    serviceId: "data-engineering",
    seoTitle: "Supply Chain Visibility Platform and Control Tower | Deview",
    seoDescription:
      "Supply chain visibility platform: orders, shipments and stock in transit across suppliers and carriers, event tracking, predictive ETAs and exception management.",
    kicker: "Data engineering · Manufacturing",
    h1: "Supply chain visibility platform",
    intro:
      "We build supply chain visibility platforms for manufacturers: a control tower that joins orders, shipments and inventory in transit across suppliers, carriers, warehouses and plants, tracks events, predicts arrival times, raises exceptions early and gives suppliers a place to confirm and update. Planners see what is coming and what is at risk, and you own the platform and the code.",
    modules: [
      {
        title: "Order and shipment data model",
        body: "A common model of purchase orders, sales orders, shipments, containers, packages and their lines, linking the ERP's view with what is physically moving.",
      },
      {
        title: "Carrier and logistics feeds",
        body: "Connections to carriers, freight forwarders, ocean and air tracking providers, parcel services and warehouses through APIs, EDI and files.",
      },
      {
        title: "Event tracking",
        body: "A normalised stream of milestones, such as booking, departure, arrival, customs and delivery, from many sources into one timeline per shipment.",
      },
      {
        title: "Predictive ETA",
        body: "Estimated arrival times from route, port and carrier performance and past delays, updated as events arrive, with a confidence range.",
      },
      {
        title: "Exception management",
        body: "Detection of delays, shortages, quality holds and missing documents, ranked by impact on production and customers, with owners and actions.",
      },
      {
        title: "Inventory in transit and projected",
        body: "Visibility of stock by location, in transit and projected, so planners see future shortages and can reroute or expedite.",
      },
      {
        title: "Supplier collaboration",
        body: "A supplier portal to confirm orders, share ship dates and documents and respond to exceptions, with scorecards for performance.",
      },
      {
        title: "Tier-two and risk visibility",
        body: "Mapping of critical sub-suppliers and sites, with alerts from external risk sources such as weather, port disruption and supplier events.",
      },
      {
        title: "KPIs and analytics",
        body: "On-time in full, lead time variability, transit time, cost to serve and carbon intensity by lane, supplier and mode.",
      },
    ],
    diagram: {
      title: "Supply chain visibility platform: reference architecture",
      desc: "ERP, suppliers, carriers, forwarders and warehouses feed a visibility platform with a shipment data model, carrier feeds, event tracking, predictive ETA, exception management, inventory projection and a supplier portal. Planners, procurement, logistics and customer service use it, and it updates the ERP.",
      leftLabel: "Data sources",
      platformLabel: "Control tower",
      rightLabel: "Consumers",
      platformTitle: "Supply chain visibility platform",
      left: [
        ["ERP and planning", "Orders, forecasts, stock"],
        ["Suppliers and portal", "Confirmations, documents"],
        ["Carriers and forwarders", "Events, tracking"],
      ],
      modules: [
        ["Shipment model", "Orders to packages"],
        ["Event tracking", "One timeline"],
        ["Predictive ETA", "Range, updates"],
        ["Exceptions", "Impact, owner, action"],
        ["Inventory projection", "Transit and future"],
        ["Supplier collaboration", "Confirm, share, score"],
      ],
      strip: "EDI and APIs · data standards · audit trail",
      right: [
        ["Planners", "Risks, reroutes"],
        ["Procurement and logistics", "Expedite, escalate"],
        ["Customer service", "Delivery promises"],
        ["ERP", "Updated dates"],
      ],
    },
    diagramCaption:
      "Reference architecture: events from many parties become one timeline per shipment, with exceptions ranked by their effect on production.",
    standards: [
      {
        name: "GS1 EPCIS and identification keys",
        note: "Standard events and identifiers for tracking items, cases and pallets across partners.",
      },
      {
        name: "DCSA standards",
        note: "The Digital Container Shipping Association's standards for container shipping events and data.",
      },
      {
        name: "EDI and API messages",
        note: "ANSI X12 and EDIFACT status, shipment and order messages, and carrier APIs.",
      },
      {
        name: "Incoterms",
        note: "The terms that define who is responsible for goods at each stage and which event matters for each party.",
      },
      {
        name: "UN/LOCODE and location standards",
        note: "Codes for ports and places that make locations consistent across sources.",
      },
      {
        name: "Supplier data sharing agreements",
        note: "Contracts and permissions governing what suppliers and carriers share and with whom.",
      },
    ],
    dataModel: [
      {
        entity: "Order and line",
        holds: "Parties, items, quantities, dates, status and the ERP reference.",
      },
      {
        entity: "Shipment and leg",
        holds: "Carrier, mode, origin, destination, route, containers and packages.",
      },
      {
        entity: "Tracking event",
        holds: "Type, time, location, source and the shipment or package it relates to.",
      },
      {
        entity: "ETA estimate",
        holds: "Estimated arrival, range, model version and the events used.",
      },
      {
        entity: "Exception",
        holds: "Type, cause, impact on orders and production, owner and resolution.",
      },
      {
        entity: "Inventory position",
        holds: "Item, location, on hand, in transit and projected, with dates.",
      },
      {
        entity: "Supplier and scorecard",
        holds: "Supplier, sites, performance measures and agreed actions.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Supply chain visibility products and logistics network platforms provide carrier connections and tracking out of the box, and are the right start for most shippers.",
      },
      {
        title: "Extend",
        body: "Extend a product with your own exception logic, link to production schedules and supplier collaboration, so visibility turns into decisions.",
      },
      {
        title: "Build",
        body: "Build when your supply network is unusual, when visibility must be tied tightly to your planning and MES, or when you want your own data model across many carriers and suppliers.",
      },
    ],
    security: [
      {
        title: "Partner separation",
        body: "Suppliers and carriers see only their own orders and shipments.",
      },
      {
        title: "Commercial confidentiality",
        body: "Prices, volumes and plans are restricted by role, and sharing with partners is explicit.",
      },
      {
        title: "Integration integrity",
        body: "Events are de-duplicated and ordered by source time, with conflicts between sources shown.",
      },
      {
        title: "Identity and access",
        body: "Strong authentication for external users and prompt removal of leavers.",
      },
      {
        title: "Audit trail",
        body: "Changes to dates, confirmations and exceptions record user and time.",
      },
    ],
    phases: [
      {
        title: "Flow and pain-point review",
        body: "We map the main inbound and outbound flows and the cost of surprises, with procurement, logistics and planning.",
      },
      {
        title: "Data and partner design",
        body: "The data model, the carrier and supplier connections and the exception rules are agreed, starting with the lanes that matter most.",
      },
      {
        title: "Build for the first lanes",
        body: "Tracking, ETA and exceptions go live for a first set of suppliers and lanes, with planners using them daily.",
      },
      {
        title: "Add supplier collaboration",
        body: "Supplier confirmations, documents and scorecards are added, and more suppliers are onboarded.",
      },
      {
        title: "Extend to risk and analytics",
        body: "Tier-two visibility, risk alerts and analytics are added, with integration into planning.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "RFID and barcode tracking system", href: "/solutions/rfid-and-barcode-tracking-system" },
    ],
    faqs: [
      {
        q: "Is this a transport management system?",
        a: "No. A transport management system plans and executes transport. A visibility platform joins data from many parties to show where things are, what is at risk and what to do, regardless of who runs the transport.",
      },
      {
        q: "How accurate are predicted arrival times?",
        a: "It depends on the lane and the data. Predictions come with ranges and improve as events arrive. We measure their accuracy against actual arrivals and show it.",
      },
      {
        q: "How do suppliers join?",
        a: "Through a simple portal, an API or EDI, depending on their capability. Large suppliers connect systems, smaller ones use the portal, and the platform treats both the same way.",
      },
      {
        q: "Does it work with our ERP and planning tools?",
        a: "Yes. Orders and stock come from the ERP, and updated dates and exceptions go back to it and to planning tools.",
      },
      {
        q: "Who owns the platform and code?",
        a: "You do. The code, the data model and the data stay yours.",
      },
    ],
    assetId: "data-integration-reference",
    related: [
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "Enterprise systems integration and API engineering", href: "/solutions/enterprise-systems-integration-and-api" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "eudr-compliance-and-traceability-software",
    vertical: "agriculture",
    serviceId: "data-engineering",
    seoTitle: "EUDR Compliance and Plot-Level Traceability Software | Deview",
    seoDescription:
      "EUDR compliance and traceability software: plot geolocation, supplier onboarding, deforestation screening, chain of custody, risk assessment and statements.",
    kicker: "Data engineering · Agriculture",
    h1: "EUDR compliance and plot-level traceability software",
    intro:
      "We build EUDR compliance and plot-level traceability software for producers, traders and processors of in-scope commodities: collection and validation of plot geolocation, supplier onboarding and documents, deforestation and legality checks, chain of custody from plot to product, risk assessment and the preparation of due diligence statements. The software works with your existing ERP and supply chain data, and you own the code.",
    modules: [
      {
        title: "Product and commodity scope mapping",
        body: "Classification of products and components against the regulation's commodities and derived products, to show which shipments need due diligence.",
      },
      {
        title: "Supplier and producer registry",
        body: "Onboarding of suppliers, cooperatives and farmers with identity, location, documents and their place in the chain.",
      },
      {
        title: "Plot geolocation capture",
        body: "Collection of plot coordinates or polygons through a field app, file upload or supplier portal, with the format and precision the regulation requires.",
      },
      {
        title: "Geodata validation",
        body: "Checks for valid geometry, overlaps, implausible areas and coordinates in the wrong country, with feedback to the supplier to fix errors.",
      },
      {
        title: "Deforestation and protected-area screening",
        body: "Comparison of plots with forest cover and change data and protected area boundaries, using the reference dates the regulation sets, with evidence recorded.",
      },
      {
        title: "Legality and documentation checks",
        body: "Collection and review of land tenure, permits, labour and tax documents against the relevant laws of the country of production.",
      },
      {
        title: "Chain of custody",
        body: "Linking of lots from plot through collection, storage, processing and shipment, with segregation or mass-balance rules applied and recorded.",
      },
      {
        title: "Risk assessment and mitigation",
        body: "A risk score by country, supplier and plot, mitigation actions where risk is not negligible and a record of the reasoning.",
      },
      {
        title: "Due diligence statements",
        body: "Preparation of statements with the required data, submission through the EU system interface and storage of references and supporting records.",
      },
    ],
    diagram: {
      title: "EUDR compliance and traceability: reference architecture",
      desc: "Producers, cooperatives, suppliers and field apps provide plot geolocation and documents to a compliance platform with a supplier registry, geodata validation, deforestation screening, legality checks, chain of custody, risk assessment and due diligence statements. The platform connects to the ERP and the EU information system, with evidence for authorities and customers.",
      leftLabel: "Supply base",
      platformLabel: "Compliance platform",
      rightLabel: "Consumers",
      platformTitle: "EUDR compliance platform",
      left: [
        ["Producers and cooperatives", "Plots, documents"],
        ["Suppliers and traders", "Lots, shipments"],
        ["Field apps and portals", "Geolocation capture"],
      ],
      modules: [
        ["Supplier registry", "Identity, chain position"],
        ["Geodata validation", "Geometry, overlaps"],
        ["Deforestation screening", "Cover change, protected areas"],
        ["Legality checks", "Documents, laws"],
        ["Chain of custody", "Plot to shipment"],
        ["Risk and mitigation", "Score, actions"],
      ],
      strip: "Evidence retention · lineage from plot · audit trail",
      right: [
        ["Due diligence statements", "EU system submission"],
        ["ERP and logistics", "Lots, shipments"],
        ["Customers and buyers", "Evidence on request"],
        ["Competent authorities", "Checks, audits"],
      ],
    },
    diagramCaption:
      "Reference architecture: each shipment is traced to its plots, each plot is checked, and the result becomes a documented due diligence statement.",
    standards: [
      {
        name: "Regulation (EU) 2023/1115 (EUDR)",
        note: "The EU regulation on deforestation-free products, covering commodities such as cattle, cocoa, coffee, oil palm, rubber, soya and wood, as amended, with application dates to be confirmed against the current text.",
      },
      {
        name: "Geolocation requirements",
        note: "Coordinates or polygons of plots of land in the specified format and precision, with polygons for larger plots.",
      },
      {
        name: "EU information system for due diligence statements",
        note: "The interface through which operators submit statements and receive reference numbers, with API and file options.",
      },
      {
        name: "Open forest and land data",
        note: "Public datasets on forest cover and change, and protected area databases, used for screening with documented limits.",
      },
      {
        name: "GeoJSON and OGC standards",
        note: "Open formats for plot geometry and exchange with suppliers and systems.",
      },
      {
        name: "Certification and chain of custody schemes",
        note: "Voluntary schemes whose records can support, but do not replace, the operator's own due diligence.",
      },
    ],
    dataModel: [
      {
        entity: "Supplier and producer",
        holds: "Identity, role, country, documents, risk rating and relationships in the chain.",
      },
      {
        entity: "Plot",
        holds: "Geometry, area, commodity, country, tenure documents and validation status.",
      },
      {
        entity: "Screening result",
        holds: "Plot, datasets used, reference date, finding, evidence and reviewer.",
      },
      {
        entity: "Lot and movement",
        holds: "Quantity, commodity, origin plots, location and the transformation or transfer.",
      },
      {
        entity: "Shipment and product",
        holds: "Product code, quantity, lots included, customer and destination.",
      },
      {
        entity: "Risk assessment",
        holds: "Criteria, score, mitigation measures, decision and date.",
      },
      {
        entity: "Due diligence statement",
        holds: "Content, submission time, reference, status and linked evidence.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Compliance and traceability products for the regulation are emerging and are a fast start for operators with a simple supply base and standard ERP data.",
      },
      {
        title: "Extend",
        body: "Extend a product or your ERP with plot collection from your own supply base, your own chain of custody rules and integration to logistics, where products assume cleaner data than you have.",
      },
      {
        title: "Build",
        body: "Build when you have thousands of smallholder suppliers, mixed lots across processing stages, or a supply chain that products do not model, and when the data must remain yours.",
      },
    ],
    security: [
      {
        title: "Supplier data protection",
        body: "Farmer identities and locations are personal and sensitive, so access is role-based, data is minimised and sharing is controlled.",
      },
      {
        title: "Evidence integrity",
        body: "Geodata, screening results and documents are stored unaltered with versions and hashes for later inspection.",
      },
      {
        title: "Controlled submission",
        body: "Statements are reviewed and approved before submission, and every submission is logged with its reference.",
      },
      {
        title: "Retention",
        body: "Records are retained for the period the regulation requires and then handled according to policy.",
      },
      {
        title: "Audit trail",
        body: "Decisions on risk, screening and mitigation record who decided and why.",
      },
    ],
    phases: [
      {
        title: "Scope and supply-base review",
        body: "We map which products and shipments are in scope and how the supply base is organised, with compliance, procurement and sourcing teams.",
      },
      {
        title: "Data and process design",
        body: "Data to collect, validation rules, screening datasets, chain of custody approach and the interfaces to the ERP and the EU system are agreed.",
      },
      {
        title: "Build supplier onboarding and geolocation",
        body: "Registry, plot capture and validation are built first and tried with a group of suppliers.",
      },
      {
        title: "Screening, custody and risk",
        body: "Screening, chain of custody and risk assessment follow, tested on live shipments.",
      },
      {
        title: "Statements and scale",
        body: "Statement preparation and submission go live, and more suppliers and products are onboarded.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: field app and agricultural data", href: "/case-studies/agroplatforma" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Farm data platform and analytics", href: "/solutions/farm-data-platform-and-analytics" },
    ],
    faqs: [
      {
        q: "Who does the regulation apply to?",
        a: "To operators and traders who place relevant commodities and products on the EU market or export them, with different duties for large, medium and small companies. Check the current text and your legal advisers for your position and the application dates.",
      },
      {
        q: "What geolocation data is needed?",
        a: "The geolocation of the plots of land where the commodity was produced, as coordinates for small plots and as polygons for larger ones, in the format the regulation specifies. We build collection and validation to those rules.",
      },
      {
        q: "Can software prove a product is deforestation-free?",
        a: "Software cannot give the legal conclusion, but it assembles the evidence: plot data, screening against forest and land data, documents, chain of custody and the risk assessment, so that the operator's due diligence is documented and defensible.",
      },
      {
        q: "How do you handle mixed lots and processing?",
        a: "By recording each transformation and applying the segregation or mass-balance rules you use, so a shipment can be traced back to the plots it came from.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the geodata and the records stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "FSMA 204 food traceability system", href: "/solutions/fsma-204-food-traceability-system" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "fsma-204-food-traceability-system",
    vertical: "agriculture",
    serviceId: "data-engineering",
    seoTitle: "FSMA 204 Food Traceability System: KDEs, CTEs and TLCs | Deview",
    seoDescription:
      "FSMA 204 food traceability system: traceability lot codes, key data elements at critical tracking events, supplier data exchange and rapid FDA record requests.",
    kicker: "Data engineering · Agriculture",
    h1: "FSMA 204 food traceability system",
    intro:
      "We build FSMA 204 food traceability systems for growers, packers, processors, distributors and retailers of foods on the FDA's Food Traceability List: assignment of traceability lot codes, capture of key data elements at each critical tracking event, exchange of that data with trading partners, and the ability to produce records for the FDA quickly in a sortable form. The system works from your ERP, warehouse and supplier data, and you own the code.",
    modules: [
      {
        title: "Food Traceability List scoping",
        body: "Classification of products against the list, and of the exemptions that apply, so the system captures data only where the rule requires it.",
      },
      {
        title: "Traceability lot code management",
        body: "Assignment and tracking of lot codes at the points where the rule requires them, such as initial packing, transformation or first receiving.",
      },
      {
        title: "Critical tracking event capture",
        body: "Recording of events such as harvesting, cooling, initial packing, first land-based receiving, shipping, receiving and transformation, from scanners, ERP and forms.",
      },
      {
        title: "Key data element validation",
        body: "Checks that each event has the data the rule requires, such as lot code, product description, quantity, location and date, with exceptions raised before records are needed.",
      },
      {
        title: "Linking inputs to outputs",
        body: "For transformation, the recording of which input lots went into which output lots, so a trace can run forward and backward through processing.",
      },
      {
        title: "Trading partner data exchange",
        body: "Receipt and sending of traceability data with suppliers and customers using EDI, APIs and standard event messages.",
      },
      {
        title: "Location and product identification",
        body: "Use of GS1 location and product identifiers, and a directory of the farms, packhouses, plants and warehouses in the network.",
      },
      {
        title: "Traceability plan and records",
        body: "The plan the rule requires, with a description of procedures, point of contact and the list of foods, kept with versions.",
      },
      {
        title: "Rapid response and recall support",
        body: "Production of an electronic sortable spreadsheet of relevant records on request, trace queries, mock recalls and a measure of how fast each can be done.",
      },
    ],
    diagram: {
      title: "FSMA 204 food traceability system: reference architecture",
      desc: "Farms, packhouses, plants, warehouses and trading partners send events and data to a traceability platform with scoping, lot code management, event capture, key data element validation, input to output linking and partner data exchange. The platform produces records for regulators, recalls and customers, and connects to the ERP.",
      leftLabel: "Supply chain events",
      platformLabel: "Traceability platform",
      rightLabel: "Consumers",
      platformTitle: "Food traceability platform",
      left: [
        ["Farms and packhouses", "Harvest, cooling, packing"],
        ["Plants and warehouses", "Receiving, transform, ship"],
        ["Trading partners", "EDI, API, events"],
      ],
      modules: [
        ["List scoping", "Foods and exemptions"],
        ["Lot code management", "TLC assignment"],
        ["Event capture", "CTEs and KDEs"],
        ["Validation", "Missing data flagged"],
        ["Input to output links", "Forward and back"],
        ["Partner exchange", "Send and receive"],
      ],
      strip: "Records retained · sortable export · audit trail",
      right: [
        ["Regulators", "Records on request"],
        ["Recall teams", "Trace queries"],
        ["Customers", "Traceability data"],
        ["ERP and warehouse", "Lot and event data"],
      ],
    },
    diagramCaption:
      "Reference architecture: every event that the rule covers is captured with its key data, so a trace can be answered in hours rather than days.",
    standards: [
      {
        name: "FDA Food Traceability Rule (FSMA Section 204)",
        note: "The rule's requirements for traceability lot codes, key data elements for critical tracking events and records for foods on the Food Traceability List. The compliance date has been extended and should be confirmed in the current rule.",
      },
      {
        name: "GS1 standards",
        note: "GTIN, GLN and lot identifiers, and the EPCIS event standard for exchanging traceability data between partners.",
      },
      {
        name: "EDI and API exchange",
        note: "ANSI X12 and API formats for advance shipping notices and other traceability data.",
      },
      {
        name: "Industry traceability guidelines",
        note: "Produce and food industry guidance that many customers already require from suppliers.",
      },
      {
        name: "Record retention requirements",
        note: "The period for which traceability records must be kept and made available.",
      },
      {
        name: "Other jurisdictions' rules",
        note: "EU general food law and national rules that overlap with FSMA 204 for exporters and importers.",
      },
    ],
    dataModel: [
      {
        entity: "Food and product",
        holds: "Item, list category, exemption status, GTIN and description.",
      },
      {
        entity: "Traceability lot",
        holds: "Lot code, assigning party and location, date and the product it covers.",
      },
      {
        entity: "Tracking event",
        holds: "Event type, date, location, parties, quantity, unit and the lots involved.",
      },
      {
        entity: "Key data element",
        holds: "Required element by event type, value, source and validation status.",
      },
      {
        entity: "Transformation link",
        holds: "Input lots, output lots, quantities and the process.",
      },
      {
        entity: "Location",
        holds: "GLN or identifier, type, owner and address.",
      },
      {
        entity: "Records request",
        holds: "Request, scope, records produced, time taken and the export delivered.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Traceability and food safety software, and the modules of food ERPs, are available and are often the most economical route for companies with standard processes.",
      },
      {
        title: "Extend",
        body: "Extend your ERP and warehouse systems with event capture at the farm and packhouse, partner exchange and a records export that meets the rule's format.",
      },
      {
        title: "Build",
        body: "Build when you operate a mixed network of farms, packers and processors, handle many products with different lot practices or need your own data model across partners.",
      },
    ],
    security: [
      {
        title: "Data integrity",
        body: "Traceability records are append-only, with corrections as new records and the original retained.",
      },
      {
        title: "Partner data separation",
        body: "Partners see only the data they send or are entitled to receive.",
      },
      {
        title: "Retention and availability",
        body: "Records are retained for the required period and available at short notice.",
      },
      {
        title: "Offline capture",
        body: "Field and packhouse capture works without connectivity and synchronises afterwards.",
      },
      {
        title: "Audit trail",
        body: "Every capture, edit and export carries user and time.",
      },
    ],
    phases: [
      {
        title: "Scope and gap assessment",
        body: "We review which products and processes are covered and compare current records against the key data elements the rule requires.",
      },
      {
        title: "Data and event design",
        body: "Lot code practices, events, data capture points and partner exchange are designed with operations and quality teams.",
      },
      {
        title: "Build capture at one network",
        body: "Capture and validation go live for one product line or network, including the farms and packhouses.",
      },
      {
        title: "Exercise the trace",
        body: "Mock recalls and records requests measure how fast a complete answer can be produced, and gaps are closed.",
      },
      {
        title: "Roll out and exchange with partners",
        body: "More products and sites are added, with data exchange agreed with suppliers and customers.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: field app and agricultural data", href: "/case-studies/agroplatforma" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "RFID and barcode tracking system", href: "/solutions/rfid-and-barcode-tracking-system" },
    ],
    faqs: [
      {
        q: "When do we have to comply?",
        a: "The FDA has extended the compliance date, and the extension should be confirmed in the current rule and guidance. Companies that supply large customers are often asked to meet it earlier.",
      },
      {
        q: "What is a traceability lot code?",
        a: "A descriptor, usually a number or alphanumeric code, that identifies a lot of food that has been initially packed, received for the first time or transformed. The code travels with the food and links records from one partner to the next.",
      },
      {
        q: "How fast do we have to produce records?",
        a: "The rule expects records for a request to be provided within a short time and in an electronic sortable spreadsheet, so the system is designed to produce that export directly and to be tested with mock requests.",
      },
      {
        q: "Does this cover foods that are not on the list?",
        a: "The rule applies to foods on the Food Traceability List. Many companies capture the same data for all products, because it is simpler and meets customer and recall needs.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the records and the data stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "EUDR compliance and traceability software", href: "/solutions/eudr-compliance-and-traceability-software" },
      { label: "Grain and commodity management system", href: "/solutions/grain-and-commodity-management-system" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "farm-data-platform-and-analytics",
    vertical: "agriculture",
    serviceId: "data-engineering",
    seoTitle: "Farm Data Platform: Satellite, Yield and Input Analytics | Deview",
    seoDescription:
      "Farm data platform and analytics: machine, satellite, weather and soil data at field level, yield map cleaning, zone management, benchmarking and data sharing.",
    kicker: "Data engineering · Agriculture",
    h1: "Farm data platform and analytics",
    intro:
      "We build a farm data platform and analytics for agricultural enterprises: field-level data from machines, satellites, weather, soil labs and sensors brought into one governed platform, with yield map cleaning, zone management, benchmarking and analytics on the combination. Agronomists and managers get questions answered across seasons, fields and farms, data sharing is controlled by permission, and you own the platform and the code.",
    modules: [
      {
        title: "Field and boundary master data",
        body: "A single set of fields and boundaries used by every data source, with history of changes and mapping to external identifiers.",
      },
      {
        title: "Machine data ingestion",
        body: "Import of yield, application and as-planted data from machines through task files and manufacturer interfaces, matched to fields and operations.",
      },
      {
        title: "Satellite and aerial imagery",
        body: "Retrieval and processing of satellite imagery into field-level vegetation indices over time, with cloud masking and consistent geometry.",
      },
      {
        title: "Weather and climate data",
        body: "Station, gridded and forecast weather data attached to fields, with derived measures such as growing degree days and rainfall totals.",
      },
      {
        title: "Soil and laboratory data",
        body: "Soil and tissue sample results, with sampling locations, laboratory methods and the mapping of results to zones.",
      },
      {
        title: "Yield map cleaning and processing",
        body: "Filtering of errors in yield data, correction for delays and calibration, and production of reliable yield maps and statistics.",
      },
      {
        title: "Management zones and prescriptions",
        body: "Zones from yield, imagery and soil data, and variable-rate prescriptions exported in the formats machines read.",
      },
      {
        title: "Benchmarking and analytics",
        body: "Comparison of fields, varieties, practices and years, with models of yield drivers and the effect of inputs.",
      },
      {
        title: "Data sharing and APIs",
        body: "Permission-based sharing with advisers, buyers and software vendors, and APIs for analytics and applications.",
      },
    ],
    diagram: {
      title: "Farm data platform and analytics: reference architecture",
      desc: "Machines, satellites, weather services, soil laboratories and sensors feed a farm data platform with field master data, machine ingestion, imagery processing, weather, soil data, yield cleaning, management zones and benchmarking. Agronomists, managers, advisers and applications use the data through dashboards, exports and APIs.",
      leftLabel: "Data sources",
      platformLabel: "Farm data platform",
      rightLabel: "Consumers",
      platformTitle: "Farm data platform",
      left: [
        ["Machines and sensors", "Yield, application, soil"],
        ["Satellites and aerial", "Imagery, indices"],
        ["Weather and laboratories", "Forecast, samples"],
      ],
      modules: [
        ["Field master data", "Boundaries, IDs"],
        ["Machine ingestion", "Task files, APIs"],
        ["Imagery processing", "Indices per field"],
        ["Yield cleaning", "Filter, calibrate, map"],
        ["Zones and prescriptions", "Variable rate"],
        ["Benchmarking", "Fields, years, practices"],
      ],
      strip: "Geospatial store · permissions · audit trail",
      right: [
        ["Agronomists and managers", "Dashboards, maps"],
        ["Machines", "Prescription files"],
        ["Advisers and buyers", "Shared data"],
        ["Applications and models", "APIs"],
      ],
    },
    diagramCaption:
      "Reference architecture: every source is tied to the same fields, so yield, imagery, weather and inputs can be analysed together.",
    standards: [
      {
        name: "ISO 11783 and ISOXML",
        note: "The task-file format for exchanging field operations, prescriptions and results with machines.",
      },
      {
        name: "ADAPT framework and agroXML",
        note: "Open frameworks and schemas for converting between agricultural data formats.",
      },
      {
        name: "STAC and cloud-optimised formats",
        note: "The SpatioTemporal Asset Catalog, cloud-optimised GeoTIFF and GeoParquet for efficient access to large imagery and vector data.",
      },
      {
        name: "OGC services and GeoJSON",
        note: "Web map and feature services and simple geometry exchange for field boundaries and maps.",
      },
      {
        name: "Open satellite programmes",
        note: "Freely available imagery such as Sentinel-2 and Landsat, with documented processing levels and limitations.",
      },
      {
        name: "Data ownership and sharing principles",
        note: "Codes of conduct on agricultural data that set rules on ownership, consent and transparency.",
      },
    ],
    dataModel: [
      {
        entity: "Field and boundary",
        holds: "Geometry, area, farm, identifiers in other systems and the history of boundary changes.",
      },
      {
        entity: "Operation and observation",
        holds: "Type, time, area, product, rate and the source machine or person.",
      },
      {
        entity: "Yield point and map",
        holds: "Raw and cleaned yield values, location, time and processing parameters.",
      },
      {
        entity: "Image and index",
        holds: "Scene, date, quality mask, index values and the field statistics derived.",
      },
      {
        entity: "Weather series",
        holds: "Source, variable, time and location or grid cell, with derived measures.",
      },
      {
        entity: "Sample and result",
        holds: "Location, depth, method, laboratory and measured values.",
      },
      {
        entity: "Data share",
        holds: "Dataset, recipient, purpose, permission, start and end.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Farm management and agronomy platforms bring machine, satellite and weather data together, and are a quick start for common crops and machines.",
      },
      {
        title: "Extend",
        body: "Extend a platform with your own data sources, benchmarking and models, and with exports to the systems and machines that platform does not reach.",
      },
      {
        title: "Build",
        body: "Build when you farm at scale across several countries and platforms, when data is part of your service to growers, or when you need ownership and control of how data is shared.",
      },
    ],
    security: [
      {
        title: "Data ownership",
        body: "Each farm or grower owns its data, and sharing happens only by explicit, revocable permission.",
      },
      {
        title: "Role-based access",
        body: "Farm managers, advisers, analysts and partners see only the fields and data they are entitled to.",
      },
      {
        title: "Lineage and versions",
        body: "Processing steps and parameters are recorded, so a map or statistic can be reproduced.",
      },
      {
        title: "Secure ingestion",
        body: "Connections to machine platforms use scoped tokens with expiry, and credentials are managed centrally.",
      },
      {
        title: "Backup and export",
        body: "Tested backups and export of all data in open formats.",
      },
    ],
    phases: [
      {
        title: "Data and questions review",
        body: "We list the data sources, formats and the questions agronomists and managers want answered, with farms and advisers.",
      },
      {
        title: "Field master data and architecture",
        body: "The field register, identifiers, storage and processing architecture and sharing model are designed.",
      },
      {
        title: "Ingest the first sources",
        body: "Machine, imagery and weather feeds are connected for a first group of farms, and results are checked with agronomists.",
      },
      {
        title: "Add cleaning, zones and benchmarking",
        body: "Yield cleaning, zones and benchmarking are added, and used in the next season's planning.",
      },
      {
        title: "Share and extend",
        body: "Sharing, APIs and further sources, farms and models are added over the seasons.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: field app and agricultural data", href: "/case-studies/agroplatforma" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
    ],
    faqs: [
      {
        q: "Do we need all of this, or just a farm management product?",
        a: "A farm management product is often enough. A farm data platform is for enterprises that need to combine many sources across farms and countries, run their own analytics and control how data is shared.",
      },
      {
        q: "How do you deal with errors in yield data?",
        a: "Yield data is filtered and corrected for known issues such as machine delays, start and stop effects, calibration and speed changes. The raw data is kept, and the processing parameters are recorded.",
      },
      {
        q: "Which satellite data do you use?",
        a: "Open programmes such as Sentinel-2 and Landsat are the default, with commercial imagery where higher resolution or frequency is needed. Imagery is processed into field-level indices with cloud masking.",
      },
      {
        q: "Can machines receive prescriptions from the platform?",
        a: "Yes, through task files in the formats the machines read, such as ISOXML, with the manufacturers' interfaces where available.",
      },
      {
        q: "Who owns the data and code?",
        a: "You do. The code and the data stay yours, and growers retain ownership of theirs.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Precision agriculture sensor network", href: "/solutions/precision-agriculture-sensor-network" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "erp-data-migration",
    vertical: "cross-industry",
    serviceId: "data-engineering",
    seoTitle: "ERP Data Migration and Data Quality | Deview",
    seoDescription:
      "ERP data migration and data quality: profiling, cleansing, mapping, transformation, mock loads, reconciliation, cut-over rehearsals and legacy archiving.",
    kicker: "Data engineering · Migration",
    h1: "ERP data migration and data quality",
    intro:
      "We carry out ERP data migration and data quality work for enterprises moving to a new ERP or consolidating several: profiling and cleansing of master and transactional data, mapping and transformation to the target model, repeated mock loads, reconciliation of balances and open items, cut-over rehearsals and archiving of what stays behind. Migration becomes a repeatable, measured process, and you own the migration code and rules.",
    modules: [
      {
        title: "Scope and data inventory",
        body: "A list of objects to migrate, from customers and materials to open orders and balances, with volumes, owners, quality and what can be archived instead.",
      },
      {
        title: "Data profiling",
        body: "Analysis of each source for completeness, duplicates, invalid values, inconsistent codes and rules that the data breaks, with quantified findings.",
      },
      {
        title: "Cleansing and harmonisation",
        body: "Correction, de-duplication and standardisation of master data, with business owners deciding on conflicts and a record of every change.",
      },
      {
        title: "Mapping and transformation",
        body: "Mapping of source fields, codes and structures to the target, written as testable rules, including defaults, derivations and value conversions.",
      },
      {
        title: "Load automation",
        body: "Automated extraction, transformation and loading using the target ERP's migration tools and APIs, rerunnable and with error handling.",
      },
      {
        title: "Mock loads and testing",
        body: "Repeated full-volume trial migrations with business testing of the loaded data, tracking of defects and improvement of each cycle.",
      },
      {
        title: "Reconciliation",
        body: "Automated comparison of counts, balances, stock and open items between source and target, with differences explained and signed off.",
      },
      {
        title: "Cut-over planning and rehearsal",
        body: "Detailed cut-over plans with timings, dependencies and rollback, rehearsed so the final weekend holds no surprises.",
      },
      {
        title: "Archiving and decommissioning",
        body: "Archive of historical data that is not migrated, in a searchable form, and safe retirement of source systems.",
      },
    ],
    diagram: {
      title: "ERP data migration and data quality: reference architecture",
      desc: "Legacy ERPs and other systems feed a migration platform with scope and inventory, profiling, cleansing, mapping and transformation, load automation, mock loads and reconciliation. The target ERP receives the data, while an archive holds historical data and reports show migration quality to the business.",
      leftLabel: "Source systems",
      platformLabel: "Migration platform",
      rightLabel: "Targets",
      platformTitle: "ERP migration platform",
      left: [
        ["Legacy ERPs", "Finance, supply, HR"],
        ["Other systems", "CRM, MES, spreadsheets"],
        ["Reference data", "Codes, hierarchies"],
      ],
      modules: [
        ["Profiling", "Quality findings"],
        ["Cleansing", "Merge, standardise"],
        ["Mapping rules", "Testable, versioned"],
        ["Load automation", "Rerunnable, logged"],
        ["Mock loads", "Full volume, test"],
        ["Reconciliation", "Counts, balances, stock"],
      ],
      strip: "Rule versions · defect tracking · audit trail",
      right: [
        ["Target ERP", "Loaded data"],
        ["Business testers", "Cycle results"],
        ["Archive", "Historical data"],
        ["Programme reports", "Quality, readiness"],
      ],
    },
    diagramCaption:
      "Reference architecture: migration is repeated until the data is right, and every cycle shows what improved and what is still wrong.",
    standards: [
      {
        name: "ISO 8000 and ISO/IEC 25012",
        note: "Data quality standards, including the quality of master data, that define the dimensions measured.",
      },
      {
        name: "DAMA-DMBOK",
        note: "Data management body of knowledge, used for roles, governance and data quality practice.",
      },
      {
        name: "Target ERP migration tools",
        note: "The vendor's migration objects, templates and interfaces, with extensions where they fall short.",
      },
      {
        name: "Accounting and statutory requirements",
        note: "Rules on balances, open items, retention and audit access that the migration must respect.",
      },
      {
        name: "Data protection law",
        note: "Treatment of personal data in migration, test environments and archives.",
      },
      {
        name: "Test and release practice",
        note: "Defect management, entry and exit criteria and sign-off for each test cycle.",
      },
    ],
    dataModel: [
      {
        entity: "Migration object",
        holds: "Object type, source, target, volume, owner, rules and status.",
      },
      {
        entity: "Profiling finding",
        holds: "Rule broken, field, count, examples and decision.",
      },
      {
        entity: "Mapping rule",
        holds: "Source field or code, target, transformation, version and tests.",
      },
      {
        entity: "Cleansing decision",
        holds: "Record or group, action, approver and rationale.",
      },
      {
        entity: "Load run",
        holds: "Cycle, object, records read, loaded and rejected, and errors.",
      },
      {
        entity: "Reconciliation result",
        holds: "Check, source value, target value, difference, explanation and sign-off.",
      },
      {
        entity: "Cut-over step",
        holds: "Task, owner, duration, dependencies, outcome and rollback condition.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Migration tools from ERP vendors and specialist data migration products provide templates, staging and monitoring, and should be used where they fit.",
      },
      {
        title: "Extend",
        body: "Extend vendor tools with our profiling, cleansing logic, automated reconciliation and cut-over management, which usually decide whether a migration succeeds.",
      },
      {
        title: "Build",
        body: "Build custom pipelines when sources are unusual or numerous, when volumes are large or when several systems are consolidated into one target.",
      },
    ],
    security: [
      {
        title: "Protected test data",
        body: "Personal and financial data is masked in non-production environments, with controlled access to full copies.",
      },
      {
        title: "Controlled access to staging",
        body: "The staging area is restricted, logged and cleared after cut-over.",
      },
      {
        title: "Approval of cleansing",
        body: "Business owners approve merges and deletions of master data, with the decision recorded.",
      },
      {
        title: "Reconciliation evidence",
        body: "Signed reconciliation results are kept as evidence for finance and auditors.",
      },
      {
        title: "Rollback readiness",
        body: "Rollback conditions and steps are defined, tested and agreed before cut-over.",
      },
    ],
    phases: [
      {
        title: "Inventory and profiling",
        body: "We inventory the data to migrate and profile it, so the programme knows the true state of quality before design is fixed.",
      },
      {
        title: "Rules and tooling",
        body: "Mapping rules, cleansing approach, tools and reconciliation checks are designed with the business and the ERP team.",
      },
      {
        title: "First mock load",
        body: "A full-volume trial migration is run, tested by the business and the results used to improve rules and data.",
      },
      {
        title: "Further mock loads",
        body: "Mock loads repeat until quality and timing meet the agreed standard, with a report for each cycle.",
      },
      {
        title: "Cut-over and archive",
        body: "Rehearsed cut-over, final reconciliation and sign-off, followed by archiving and decommissioning of the old systems.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Legacy application modernization", href: "/solutions/legacy-application-modernization" },
    ],
    faqs: [
      {
        q: "Why do ERP migrations run late?",
        a: "Often because data quality is discovered late. Profiling before design, repeated full-volume mock loads and business testing of loaded data find the problems early, when they are cheap to fix.",
      },
      {
        q: "How many mock loads do we need?",
        a: "As many as it takes to reach the agreed quality and timing. Each one should be better than the last, and the reports show whether that is happening.",
      },
      {
        q: "Who decides which duplicates to merge?",
        a: "Business owners do. We propose matches and rules, and owners approve merges and deletions, so the data reflects business decisions with a record of each one.",
      },
      {
        q: "What happens to old data that is not migrated?",
        a: "It is archived in a searchable form with the same access controls and retention, so auditors and users can still find it after the old system is retired.",
      },
      {
        q: "Who owns the migration code and rules?",
        a: "You do. The code, the mappings and the rules stay yours.",
      },
    ],
    assetId: "data-integration-reference",
    related: [
      { label: "Master data management", href: "/solutions/master-data-management" },
      { label: "Legacy application modernization", href: "/solutions/legacy-application-modernization" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "master-data-management",
    vertical: "cross-industry",
    serviceId: "data-engineering",
    seoTitle: "Master Data Management for Customers, Materials and Assets | Deview",
    seoDescription:
      "Master data management for customers, products, suppliers and assets: golden records, matching, survivorship, stewardship workflows and distribution to systems.",
    kicker: "Data engineering · Master data",
    h1: "Master data management for customers, materials and assets",
    intro:
      "We build master data management for customers, materials and assets, and for suppliers and locations: golden records assembled from several systems, matching and survivorship rules, stewardship workflows where people resolve what rules cannot, and distribution of clean data to the systems that use it. The same customer, part or asset means the same thing everywhere, and you own the platform, the rules and the code.",
    modules: [
      {
        title: "Domain and ownership model",
        body: "The master data domains in scope, such as customer, product, supplier, asset and location, with business owners, definitions and the attributes each must hold.",
      },
      {
        title: "Source integration",
        body: "Ingestion of records from ERP, CRM, MES, maintenance and other systems, with identifiers retained so every source record links to its master.",
      },
      {
        title: "Matching and merge rules",
        body: "Deterministic and probabilistic matching to find the same entity across sources, with thresholds and a queue for uncertain matches.",
      },
      {
        title: "Survivorship",
        body: "Rules that decide which source supplies each attribute of the golden record, by source reliability, recency or completeness, and explained for each value.",
      },
      {
        title: "Data quality rules",
        body: "Validation, standardisation and enrichment, including address, tax and identifier checks, with quality scores by domain and source.",
      },
      {
        title: "Stewardship workflow",
        body: "Queues, tasks and approvals for stewards to resolve matches, fix errors and approve new or changed records, with service levels.",
      },
      {
        title: "Hierarchies and relationships",
        body: "Corporate hierarchies, product classifications, asset structures and relationships, managed with history and effective dates.",
      },
      {
        title: "Distribution and synchronisation",
        body: "Publication of golden records and changes to consuming systems through events and APIs, and feedback of source changes.",
      },
      {
        title: "Reference data and governance",
        body: "Managed code lists and a governance process for definitions, change requests and metrics on the health of master data.",
      },
    ],
    diagram: {
      title: "Master data management: reference architecture",
      desc: "ERP, CRM, MES, maintenance and external data sources feed a master data platform with source integration, matching and merge, survivorship, data quality rules, stewardship workflow, hierarchies and reference data. Golden records are distributed to consuming systems, analytics and partners.",
      leftLabel: "Sources",
      platformLabel: "MDM platform",
      rightLabel: "Consumers",
      platformTitle: "Master data platform",
      left: [
        ["ERP and finance", "Customers, suppliers, items"],
        ["CRM and commerce", "Accounts, products"],
        ["Operations and maintenance", "Assets, locations"],
      ],
      modules: [
        ["Matching and merge", "Rules and scores"],
        ["Survivorship", "Best value per field"],
        ["Quality rules", "Validate, standardise"],
        ["Stewardship", "Queues, approvals"],
        ["Hierarchies", "Structures, history"],
        ["Reference data", "Code lists"],
      ],
      strip: "Source cross-reference · change history · audit trail",
      right: [
        ["Operational systems", "Golden records"],
        ["Analytics and data platform", "Consistent keys"],
        ["Partners and exchanges", "Product and party data"],
        ["Governance", "Quality metrics"],
      ],
    },
    diagramCaption:
      "Reference architecture: records from many systems become one governed version of each entity, which flows back to the systems that need it.",
    standards: [
      {
        name: "ISO 8000-110 and master data quality",
        note: "Requirements for the quality of master data in exchange, including identifiers, provenance and syntax.",
      },
      {
        name: "GS1 standards",
        note: "GTINs and the Global Data Synchronisation Network for sharing product master data with trading partners.",
      },
      {
        name: "Legal entity identifiers",
        note: "LEI under ISO 17442 for identifying legal entities consistently across systems and regulators.",
      },
      {
        name: "ISO 15926 and CFIHOS",
        note: "Reference data and handover specifications for asset and equipment master data in process industries.",
      },
      {
        name: "DAMA-DMBOK",
        note: "Practices for governance, stewardship and data quality management.",
      },
      {
        name: "Data protection law",
        note: "Lawful processing, accuracy and retention of personal data held in customer and supplier masters.",
      },
    ],
    dataModel: [
      {
        entity: "Golden record",
        holds: "Master identifier, attributes with source and survivorship rule, status and version.",
      },
      {
        entity: "Source record and cross-reference",
        holds: "Source system, local identifier, link to the golden record and the match score.",
      },
      {
        entity: "Match candidate",
        holds: "Record pair, score, rule, decision and the steward who decided.",
      },
      {
        entity: "Hierarchy and relationship",
        holds: "Parent, child, type, effective dates and source.",
      },
      {
        entity: "Quality score",
        holds: "Rule, record or domain, result, trend and owner.",
      },
      {
        entity: "Change request",
        holds: "Proposed change, requester, approvals, status and effective date.",
      },
      {
        entity: "Reference value",
        holds: "Code list, value, meaning, mappings to other systems and validity.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Master data management products and the master data modules of major ERPs are mature, and the right choice when one or two domains and a standard approach will do.",
      },
      {
        title: "Extend",
        body: "Extend a product with domain-specific matching, your own stewardship workflows and integration to the systems it does not connect to.",
      },
      {
        title: "Build",
        body: "Build when your domains are unusual, such as assets and engineering data, when you need lightweight master data that sits in your own platform, or when the product cost would exceed the problem.",
      },
    ],
    security: [
      {
        title: "Controlled change to masters",
        body: "Creation and change of master records follow approval rules, with a complete history.",
      },
      {
        title: "Access by domain and role",
        body: "Stewards, owners and consumers see only the domains and attributes they need, and sensitive data is protected.",
      },
      {
        title: "Merge safety",
        body: "Merges can be undone, with the original records kept and linked.",
      },
      {
        title: "Integration integrity",
        body: "Distribution is idempotent, and consumers acknowledge changes so no system is left behind.",
      },
      {
        title: "Audit trail",
        body: "Every match decision, change and publication records user and time.",
      },
    ],
    phases: [
      {
        title: "Domain and pain-point review",
        body: "We pick the first domain by cost of poor data and breadth of use, and measure duplicates, gaps and conflicts across the systems that hold it.",
      },
      {
        title: "Model, rules and ownership",
        body: "The golden record model, matching and survivorship rules, stewardship roles and distribution approach are designed with the owners.",
      },
      {
        title: "Build and load the first domain",
        body: "Records from source systems are loaded, matched and merged, and the results are reviewed by stewards.",
      },
      {
        title: "Distribute and operate",
        body: "Golden records flow to consuming systems, the stewardship process runs and quality metrics are published.",
      },
      {
        title: "Add domains",
        body: "Further domains follow on the same platform and governance, with hierarchies and reference data.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "ERP data migration and data quality", href: "/solutions/erp-data-migration" },
    ],
    faqs: [
      {
        q: "Do we need master data management software?",
        a: "Not always. For a single domain in a single ERP, good data governance and the ERP's own tools may do. MDM pays off when the same entities live in several systems and conflict, or when decisions depend on a consistent view.",
      },
      {
        q: "How do you match records across systems without common keys?",
        a: "With rules and statistical scores on names, addresses, identifiers and other attributes, tuned on your data, with uncertain matches sent to a steward. Matching improves as decisions are fed back.",
      },
      {
        q: "Does MDM replace our ERP's master data?",
        a: "It sits beside the ERP and other systems. Depending on the style chosen, it either consolidates and publishes golden records, or becomes the place where masters are created and then distributed.",
      },
      {
        q: "Who should own master data?",
        a: "The business. Each domain has an owner and stewards who decide definitions and resolve conflicts. The platform makes their decisions visible and enforceable.",
      },
      {
        q: "Who owns the platform and code?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "data-integration-reference",
    related: [
      { label: "ERP data migration and data quality", href: "/solutions/erp-data-migration" },
      { label: "Enterprise systems integration and API engineering", href: "/solutions/enterprise-systems-integration-and-api" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
    ],
    updated: "2026-10-15",
  },
];
