import type { SolutionPage } from "./types";

export const MANUFACTURING_OPS_PAGES: SolutionPage[] = [
  {
    slug: "production-planning-and-scheduling-software",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Production Planning and Scheduling Software (APS) | Deview",
    seoDescription:
      "Custom production planning and scheduling software: finite-capacity scheduling, constraints, changeovers, what-if scenarios and ERP integration for manufacturers.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "Production planning and scheduling software",
    intro:
      "We build custom production planning and scheduling software for manufacturers: finite-capacity scheduling that respects machines, tooling, labour, materials and changeovers, what-if scenarios for rush orders and breakdowns, and a live dispatch list for every work centre. It reads orders from your ERP, returns a feasible plan and takes confirmations back from the shop floor, and you own the code.",
    modules: [
      {
        title: "Demand and order intake",
        body: "Production orders, forecasts and planned orders from the ERP, with due dates, priorities, customer commitments and the material status of each.",
      },
      {
        title: "Capacity model",
        body: "Work centres, machines, shifts, calendars, planned downtime, labour skills and tooling modelled with their real limits.",
      },
      {
        title: "Finite-capacity scheduling",
        body: "Operations placed on resources in time, forward or backward from due dates, so the plan is feasible instead of a wish list.",
      },
      {
        title: "Sequence-dependent changeovers",
        body: "Setup and cleaning times that depend on the previous product, with sequencing that groups similar work to reduce changeover time.",
      },
      {
        title: "Material and tooling constraints",
        body: "Checks against material availability, lead times, tooling and fixtures, so work is only scheduled when it can start.",
      },
      {
        title: "Optimisation and rules",
        body: "Priority rules, heuristics and constraint-based optimisation tuned to goals such as on-time delivery, utilisation or changeover cost.",
      },
      {
        title: "What-if scenarios",
        body: "Copies of the plan for rush orders, machine breakdowns, shortages or overtime, compared side by side before one is released.",
      },
      {
        title: "Dispatch and re-scheduling",
        body: "A live list per work centre, updated as operations complete, with automatic re-planning when reality diverges from the plan.",
      },
      {
        title: "Performance reporting",
        body: "Schedule adherence, on-time delivery, utilisation and bottleneck analysis, with reasons for deviations captured at the source.",
      },
    ],
    diagram: {
      title: "Production planning and scheduling: reference architecture",
      desc: "The ERP, shop-floor data collection and master data feed a scheduling platform with a capacity model, finite-capacity scheduling, changeover sequencing, constraint checks, optimisation, what-if scenarios and dispatch. Schedules go to work centres, planners, the ERP and reporting.",
      leftLabel: "Inputs",
      platformLabel: "Scheduling platform",
      rightLabel: "Consumers",
      platformTitle: "Planning and scheduling platform",
      left: [
        ["ERP", "Orders, BOMs, routings"],
        ["Shop-floor data", "Progress, downtime"],
        ["Master data", "Calendars, tooling, skills"],
      ],
      modules: [
        ["Capacity model", "Resources, calendars"],
        ["Finite scheduling", "Feasible plan in time"],
        ["Changeover sequencing", "Setup-aware order"],
        ["Constraints", "Material, tooling, labour"],
        ["What-if scenarios", "Compare, release"],
        ["Dispatch", "Live list per work centre"],
      ],
      strip: "Optimisation engine · plan versions · audit trail",
      right: [
        ["Work centres", "Dispatch list"],
        ["Planners", "Gantt, scenarios"],
        ["ERP", "Dates, confirmations"],
        ["Management", "Adherence, delivery"],
      ],
    },
    diagramCaption:
      "Reference architecture: the ERP says what is needed, the scheduler decides what is possible, and the shop floor confirms what happened.",
    standards: [
      {
        name: "ISA-95 and B2MML",
        note: "The production schedule and performance exchange between business planning and manufacturing operations.",
      },
      {
        name: "ISO 22400",
        note: "Key performance indicators for manufacturing operations management, as the definitions behind the reports.",
      },
      {
        name: "MRP II and APS practice",
        note: "Separation between material requirements planning in the ERP and detailed scheduling on constrained resources.",
      },
      {
        name: "Theory of constraints",
        note: "Drum-buffer-rope scheduling around the bottleneck, where it suits the process.",
      },
      {
        name: "ERP interfaces",
        note: "APIs, IDocs, files or message queues of the ERP in use.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces for dispatch clients, shop-floor systems and reporting.",
      },
    ],
    dataModel: [
      {
        entity: "Production order and operation",
        holds: "Product, quantity, due date, routing step, resource options and status.",
      },
      {
        entity: "Resource and calendar",
        holds: "Machine, tool or crew, capacity, shifts, planned downtime and skills.",
      },
      {
        entity: "Changeover matrix",
        holds: "Setup and cleaning times between product families or attributes.",
      },
      {
        entity: "Schedule and version",
        holds: "Operation start and end by resource, plan version, release time and the user who released it.",
      },
      {
        entity: "Constraint",
        holds: "Material, tooling or labour availability and the operations they limit.",
      },
      {
        entity: "Scenario",
        holds: "Changes applied, resulting plan and the measures compared.",
      },
      {
        entity: "Deviation",
        holds: "Planned against actual, reason code and resolution.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Advanced planning and scheduling products and the planning modules of major ERPs cover many plants, and are the right start for standard discrete or process production.",
      },
      {
        title: "Extend",
        body: "Extend when the ERP plans materials well but detailed scheduling lives in spreadsheets. We build the scheduler beside the ERP and keep the ERP as the system of record.",
      },
      {
        title: "Build",
        body: "Build when your process has unusual constraints, such as sequence-dependent changeovers, shared tooling or batch and campaign rules that packaged tools model poorly.",
      },
    ],
    security: [
      {
        title: "Plan release control",
        body: "Only authorised planners release a schedule, with each version stored and a record of who approved it.",
      },
      {
        title: "Role-based access",
        body: "Planners, supervisors and operators see the views they need, and read-only access for management.",
      },
      {
        title: "Resilient dispatch",
        body: "Work centres keep the last released schedule if the network or the scheduler is unavailable.",
      },
      {
        title: "Integration integrity",
        body: "Confirmations are idempotent, so duplicate messages from the floor do not double count.",
      },
      {
        title: "Audit trail",
        body: "Changes to resources, rules and plans are recorded with user and time.",
      },
    ],
    phases: [
      {
        title: "Planning process review",
        body: "We follow a representative stretch of production with planners and supervisors and record the real constraints, rules of thumb and workarounds.",
      },
      {
        title: "Model and objective design",
        body: "The resource model, constraints and objectives are agreed, with test cases drawn from past orders.",
      },
      {
        title: "Build and replay history",
        body: "The scheduler is built and replayed on historical orders, with the result compared against what actually happened.",
      },
      {
        title: "Pilot on one area",
        body: "One production area plans and dispatches with the scheduler while the old method is kept as a fallback.",
      },
      {
        title: "Roll out and tune",
        body: "More areas follow, with rules tuned from adherence data and planners' feedback.",
      },
    ],
    proof: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "How is this different from MRP in the ERP?",
        a: "MRP calculates what material and capacity are needed over a horizon, usually with infinite capacity. The scheduler decides the order of operations on each machine given real constraints, and says whether due dates are achievable.",
      },
      {
        q: "Can it handle sequence-dependent changeovers?",
        a: "Yes. Changeover times are modelled by product family or attribute, and the sequencing groups work to reduce them, within due-date limits.",
      },
      {
        q: "What happens when a machine breaks down?",
        a: "The planner marks the downtime, and the scheduler re-plans the affected operations. A what-if view shows the effect on delivery dates before the new plan is released.",
      },
      {
        q: "Does it work with our ERP?",
        a: "Yes. Orders, routings and calendars come from the ERP through its interfaces, and dates and confirmations return to it.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the model and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "quality-management-system-for-manufacturers",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Quality Management System for Manufacturers: SPC, NCR, CAPA | Deview",
    seoDescription:
      "Custom quality management system for manufacturers: inspection plans, statistical process control, non-conformance, CAPA, supplier quality, audits and calibration.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "Quality management system for manufacturers",
    intro:
      "We build custom quality management systems for manufacturers: inspection plans and in-process checks, statistical process control, non-conformance records, corrective and preventive action, supplier quality, audits and calibration, linked to the work order, lot and machine. Quality data is captured where it arises and available where decisions are made, and you own the code.",
    modules: [
      {
        title: "Inspection plans and characteristics",
        body: "Plans per product and operation listing characteristics, limits, methods, gauges and sample sizes, versioned and linked to the control plan.",
      },
      {
        title: "In-process and final inspection",
        body: "Measurements entered at a terminal or captured directly from gauges and machines, with immediate pass, warn or fail feedback.",
      },
      {
        title: "Statistical process control",
        body: "Control charts, capability indices and run rules calculated on live data, with alerts when a process drifts before it makes bad parts.",
      },
      {
        title: "Non-conformance management",
        body: "Records of defects with containment, disposition and cost, linked to lots and operations so affected product is found quickly.",
      },
      {
        title: "Corrective and preventive action",
        body: "Root cause analysis, 8D reports, actions with owners and due dates, effectiveness checks and closure with evidence.",
      },
      {
        title: "Supplier quality",
        body: "Incoming inspection, supplier non-conformance and corrective action requests, scorecards and approved supplier lists.",
      },
      {
        title: "Audits and findings",
        body: "Internal, supplier and customer audit planning, checklists, findings and follow-up through to closure.",
      },
      {
        title: "Calibration and gauge management",
        body: "Calibration schedules, certificates, out-of-tolerance impact assessment and the list of measurements made with a gauge that later failed.",
      },
      {
        title: "Documents, FMEA and customer reporting",
        body: "Controlled procedures, FMEAs and control plans, and the customer-specific reports that quality teams build by hand today.",
      },
    ],
    diagram: {
      title: "Quality management system for manufacturers: reference architecture",
      desc: "Gauges, machines, operators and suppliers feed a quality platform with inspection plans, in-process inspection, statistical process control, non-conformance, corrective action, supplier quality, audits and calibration. Outputs go to production, customers, management and auditors.",
      leftLabel: "Data capture",
      platformLabel: "Quality platform",
      rightLabel: "Consumers",
      platformTitle: "Quality management platform",
      left: [
        ["Gauges and machines", "Measurements, results"],
        ["Operators and inspectors", "Terminals, checklists"],
        ["Suppliers and customers", "Complaints, SCARs, audits"],
      ],
      modules: [
        ["Inspection plans", "Characteristics, limits"],
        ["SPC", "Charts, capability"],
        ["Non-conformance", "Containment, disposition"],
        ["CAPA and 8D", "Cause, actions, closure"],
        ["Supplier quality", "Incoming, SCAR"],
        ["Calibration and audits", "Schedules, findings"],
      ],
      strip: "Traceability to lot and order · e-records · audit trail",
      right: [
        ["Production and MES", "Holds, alerts"],
        ["Customers", "Certificates, reports"],
        ["Management", "Cost of quality"],
        ["Auditors", "Evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: quality records are tied to the order, lot and machine, so a defect can be traced to its cause and its customers.",
    standards: [
      {
        name: "ISO 9001",
        note: "The general quality management system standard, with clauses on control of nonconforming outputs, corrective action and monitoring and measurement.",
      },
      {
        name: "IATF 16949, AS9100 and ISO 13485",
        note: "Sector standards for automotive, aerospace and medical devices, with additional traceability, control plan and validation requirements.",
      },
      {
        name: "AIAG core tools",
        note: "APQP, PPAP, FMEA and statistical process control practice used in automotive supply chains.",
      },
      {
        name: "ISO 10012 and calibration practice",
        note: "Measurement management systems and the control of monitoring and measuring equipment.",
      },
      {
        name: "21 CFR Part 11 and Annex 11",
        note: "Electronic records and signatures for regulated products.",
      },
      {
        name: "Customer-specific requirements",
        note: "Reporting and notification rules that customers require from their suppliers.",
      },
    ],
    dataModel: [
      {
        entity: "Inspection plan and characteristic",
        holds: "Product, operation, characteristic, limits, method, gauge and sample plan.",
      },
      {
        entity: "Measurement and result",
        holds: "Value, unit, time, operator or device, order, lot and pass or fail.",
      },
      {
        entity: "Control chart and capability",
        holds: "Subgroup data, limits, run-rule violations and capability indices.",
      },
      {
        entity: "Non-conformance",
        holds: "Defect, quantity, lot, containment, disposition, cost and links to the action.",
      },
      {
        entity: "Corrective action",
        holds: "Problem statement, root cause, actions, owners, due dates and effectiveness check.",
      },
      {
        entity: "Supplier issue",
        holds: "Supplier, part, defect, request, response and scorecard effect.",
      },
      {
        entity: "Gauge and calibration",
        holds: "Instrument, interval, certificate, result and affected measurements.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Packaged quality management and SPC products are widely used and mature, and the right choice for plants that need sector certification and customer templates quickly.",
      },
      {
        title: "Extend",
        body: "Extend when a quality suite covers documents and CAPA, but measurement capture, SPC on live machine data or the link to production is manual. We build the capture and integration layer.",
      },
      {
        title: "Build",
        body: "Build when your inspection process is unusual, when quality must be woven into your own MES or traceability system, or when customer reporting needs data a packaged product does not hold.",
      },
    ],
    security: [
      {
        title: "Electronic records",
        body: "Audit trail, signatures and permissions that meet the requirements of the products you make.",
      },
      {
        title: "Controlled documents",
        body: "Only approved versions of plans and procedures are visible on the line, and superseded versions are withdrawn.",
      },
      {
        title: "Role-based access",
        body: "Inspectors, engineers, supplier quality and auditors have separate roles, and approvals cannot be self-granted.",
      },
      {
        title: "Data integrity",
        body: "Measurements captured from gauges are stored as received, with edits recorded and justified.",
      },
      {
        title: "Offline capture",
        body: "Terminals continue to record during a network fault and synchronise afterwards.",
      },
    ],
    phases: [
      {
        title: "Quality process review",
        body: "We follow how defects, inspections and corrective actions are handled today, with quality, production and supplier teams.",
      },
      {
        title: "Plans and workflows design",
        body: "Inspection plans, SPC rules, non-conformance and CAPA workflows are agreed, together with the certification requirements.",
      },
      {
        title: "Build on one line",
        body: "Inspection capture, SPC and non-conformance go live on one line, linked to its orders and lots.",
      },
      {
        title: "Add CAPA, supplier quality and audits",
        body: "CAPA, supplier issues, audits and calibration are added and used by the quality team.",
      },
      {
        title: "Roll out and extend",
        body: "More lines and plants follow, and customer reports are generated from the data.",
      },
    ],
    proof: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "Can the system collect measurements straight from gauges and machines?",
        a: "Yes, through digital gauge interfaces, machine signals or connected instruments, with manual entry for what cannot be connected. Measurements are stored as received.",
      },
      {
        q: "How does it help find affected product after a defect?",
        a: "Every measurement and non-conformance is linked to the order, lot, machine and material, so a query returns the affected lots, products and customers.",
      },
      {
        q: "Does it support automotive or medical device requirements?",
        a: "Yes. Control plans, FMEA links, PPAP evidence, electronic records and audit trails are designed in where the sector standard calls for them, with validation planned with your quality team.",
      },
      {
        q: "Can it connect to our existing ERP and MES?",
        a: "Yes. Orders, lots and holds are exchanged with the ERP and MES through their interfaces.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the plans and the data stay yours.",
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
    slug: "cmms-and-maintenance-management-software",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "CMMS and Maintenance Management Software Development | Deview",
    seoDescription:
      "Custom CMMS and maintenance management software: asset register, preventive and condition-based maintenance, work orders, spare parts and technician mobile apps.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "CMMS and maintenance management software",
    intro:
      "We build custom CMMS and maintenance management software for manufacturers and process industries: an asset register, preventive and condition-based maintenance, work orders from request to closure, spare parts and MRO inventory, and a mobile app for technicians. Machine hours, counters and alarms can raise work automatically, and you own the code.",
    modules: [
      {
        title: "Asset register",
        body: "A hierarchy of sites, lines, machines and components with specifications, documents, warranties and criticality ratings.",
      },
      {
        title: "Preventive maintenance",
        body: "Calendar and meter-based plans with task lists, estimated time and required parts, generating work orders automatically.",
      },
      {
        title: "Condition-based triggers",
        body: "Work raised from machine hours, cycle counts, vibration, temperature or alarms received from the MES, SCADA or sensors.",
      },
      {
        title: "Work request and approval",
        body: "Requests from operators with photos and location, triaged by a planner, prioritised by criticality and approved by cost.",
      },
      {
        title: "Planning and scheduling",
        body: "Work orders planned against technician skills, shutdown windows and parts availability, with a schedule that supervisors can adjust.",
      },
      {
        title: "Technician mobile app",
        body: "Assigned jobs, checklists, readings, photos, time and parts used, captured offline at the machine and synchronised afterwards.",
      },
      {
        title: "Spare parts and MRO inventory",
        body: "Stores, bins, reorder points, reservations against work orders and linking of parts to the machines that use them.",
      },
      {
        title: "Failure analysis and reliability",
        body: "Failure codes, causes and remedies captured on each job, with MTBF, MTTR and Pareto analysis to find repeat failures.",
      },
      {
        title: "Contractors, safety and cost",
        body: "Contractor jobs and invoices, isolation and permit links for hazardous work, and maintenance cost by asset, line and period.",
      },
    ],
    diagram: {
      title: "CMMS and maintenance management: reference architecture",
      desc: "Operators, machines and sensors, and the MES feed a maintenance platform with an asset register, preventive and condition-based plans, work orders, spare parts, failure analysis and a technician app. Outputs go to technicians, production planning, purchasing and management.",
      leftLabel: "Triggers",
      platformLabel: "Maintenance platform",
      rightLabel: "Consumers",
      platformTitle: "Maintenance management platform",
      left: [
        ["Operators", "Requests, photos"],
        ["Machines and sensors", "Hours, counters, alarms"],
        ["MES and SCADA", "Downtime, events"],
      ],
      modules: [
        ["Asset register", "Hierarchy, criticality"],
        ["Preventive plans", "Calendar and meter"],
        ["Work orders", "Request to closure"],
        ["Spare parts", "Stores, reservations"],
        ["Failure analysis", "Codes, MTBF, MTTR"],
        ["Technician app", "Offline, checklists"],
      ],
      strip: "Permit and isolation links · cost by asset · audit trail",
      right: [
        ["Technicians", "Jobs, parts"],
        ["Production planning", "Downtime windows"],
        ["Purchasing", "Parts, contractors"],
        ["Management", "Cost, reliability"],
      ],
    },
    diagramCaption:
      "Reference architecture: machine data and operator requests become planned work, and each completed job feeds back into reliability analysis.",
    standards: [
      {
        name: "ISO 55000",
        note: "Asset management system standard, for policy, objectives, risk and performance evaluation.",
      },
      {
        name: "ISO 14224 and EN 13306",
        note: "Equipment taxonomy and failure data collection, and maintenance terminology, used to keep codes consistent.",
      },
      {
        name: "Reliability-centred maintenance",
        note: "SAE JA1011 criteria for an RCM process, used to define which tasks and intervals are worth doing.",
      },
      {
        name: "ISO 22400",
        note: "Maintenance and equipment key performance indicators used in the reports.",
      },
      {
        name: "OPC UA and MQTT",
        note: "Sources of machine counters, states and alarms that trigger maintenance work.",
      },
      {
        name: "OWASP MASVS",
        note: "Security verification for the technician mobile app.",
      },
    ],
    dataModel: [
      {
        entity: "Asset",
        holds: "Hierarchy position, specification, criticality, installation date, documents and warranty.",
      },
      {
        entity: "Maintenance plan and task",
        holds: "Trigger (calendar or meter), task list, estimated duration, skills and parts.",
      },
      {
        entity: "Work order",
        holds: "Request, priority, plan, assignee, time, parts used, readings and closure notes.",
      },
      {
        entity: "Meter and condition reading",
        holds: "Value, unit, time and the source machine or sensor.",
      },
      {
        entity: "Failure record",
        holds: "Failure mode, cause, remedy, downtime and the asset affected.",
      },
      {
        entity: "Spare part and stock",
        holds: "Part, location, quantity, reorder level, reservations and supplier.",
      },
      {
        entity: "Contractor job",
        holds: "Scope, contractor, permit, invoice and approval.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Established CMMS and enterprise asset management products are the right start for most plants, particularly when the ERP vendor offers a maintenance module.",
      },
      {
        title: "Extend",
        body: "Extend a product with machine-driven triggers, a better technician app or integration with your MES and quality systems, where the product treats these as add-ons.",
      },
      {
        title: "Build",
        body: "Build when maintenance needs to be tightly woven into your own production software, or where the processes, languages or devices are specific and packaged products do not fit.",
      },
    ],
    security: [
      {
        title: "Role-based access",
        body: "Requesters, planners, technicians, stores and contractors have distinct roles and views.",
      },
      {
        title: "Approval of cost and risk",
        body: "Work above cost or risk thresholds needs approval, and safety-critical work links to permits and isolations.",
      },
      {
        title: "Resilience on site",
        body: "The technician app works offline and the system keeps recording during outages.",
      },
      {
        title: "Integration integrity",
        body: "Triggers from machines are de-duplicated and rate-limited so an alarm storm does not create hundreds of jobs.",
      },
      {
        title: "Audit trail",
        body: "Changes to plans, assets and work orders carry user and time.",
      },
    ],
    phases: [
      {
        title: "Maintenance process review",
        body: "We follow work from request to closure with maintenance, production and stores, and record the codes, forms and spreadsheets in use.",
      },
      {
        title: "Asset and plan design",
        body: "The asset hierarchy, criticality, failure codes and plan templates are agreed, with machine triggers specified.",
      },
      {
        title: "Build and migrate one area",
        body: "One area's assets and plans are loaded and used, with the technician app on the floor.",
      },
      {
        title: "Add triggers and stores",
        body: "Condition-based triggers, spare parts and the link to production planning are added.",
      },
      {
        title: "Roll out and analyse",
        body: "More areas follow, and reliability reports guide changes to plans.",
      },
    ],
    proof: [
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Quality management system for manufacturers", href: "/solutions/quality-management-system-for-manufacturers" },
    ],
    faqs: [
      {
        q: "Can machines trigger maintenance work automatically?",
        a: "Yes. Hours, cycle counts, alarms or sensor readings received from the MES, SCADA or gateways can raise a work request or order according to rules, with de-duplication so one fault creates one job.",
      },
      {
        q: "Does the technician app work without a connection?",
        a: "Yes. Jobs, checklists, readings and photos are available offline and synchronise when the connection returns.",
      },
      {
        q: "How do you find repeat failures?",
        a: "Every job records failure mode, cause and remedy against the asset, and reports show the most frequent and most costly failures with MTBF and MTTR.",
      },
      {
        q: "Does it connect to purchasing and stores?",
        a: "Yes. Parts reserved on a work order trigger replenishment, and purchase orders and receipts flow with the ERP.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the plans and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Quality management system for manufacturers", href: "/solutions/quality-management-system-for-manufacturers" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "warehouse-and-inventory-management-system",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Warehouse and Inventory Management System (WMS) | Deview",
    seoDescription:
      "Custom warehouse and inventory management system for manufacturers: receiving, locations, lots and serials, picking, line-side supply, scanning and ERP integration.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "Warehouse and inventory management system",
    intro:
      "We build custom warehouse and inventory management systems for manufacturers: receiving and put-away, locations, lot and serial tracking, picking and packing, line-side material supply and cycle counting, with barcode and RFID scanning on every move. Stock in the system matches stock on the shelf, and the ERP gets accurate movements, and you own the code.",
    modules: [
      {
        title: "Receiving and inspection",
        body: "Receipt against purchase orders and advance shipping notices, with quantity and quality checks, labelling and quarantine where needed.",
      },
      {
        title: "Put-away and location management",
        body: "Rules that direct goods to the right location by product, size, velocity and storage conditions, with a map of every bin and rack.",
      },
      {
        title: "Lot, serial and expiry control",
        body: "Tracking of lots and serial numbers from supplier to customer, with expiry, first-expired-first-out and holds.",
      },
      {
        title: "Picking strategies",
        body: "Wave, batch, zone and cluster picking, with pick paths and task assignment to operators on handheld scanners.",
      },
      {
        title: "Line-side and kitting",
        body: "Supply of materials to production lines by kit or replenishment signal, linked to work orders and bills of material.",
      },
      {
        title: "Packing, labelling and shipping",
        body: "Packing with verification, shipping labels and documents, carrier integration and dispatch confirmation.",
      },
      {
        title: "Cycle counting and adjustments",
        body: "Continuous counting by rule, with variances investigated, approved and posted to the ERP with a reason.",
      },
      {
        title: "Warehouse control and automation",
        body: "Interfaces to conveyors, sorters, automated guided vehicles and storage systems, with task orchestration and exception handling.",
      },
      {
        title: "Inventory visibility and reporting",
        body: "Stock by location, status and owner, ageing, accuracy and warehouse productivity reports available across sites.",
      },
    ],
    diagram: {
      title: "Warehouse and inventory management: reference architecture",
      desc: "Suppliers, production lines and customers connect through handheld scanners and automation to a warehouse platform with receiving, locations, lot control, picking, line-side supply, packing and cycle counting. The platform exchanges stock, orders and movements with the ERP and carriers.",
      leftLabel: "Operations",
      platformLabel: "Warehouse platform",
      rightLabel: "Systems",
      platformTitle: "Warehouse management platform",
      left: [
        ["Handheld scanners", "Barcode, RFID, tasks"],
        ["Production lines", "Material calls, kits"],
        ["Automation", "Conveyors, AGVs, shuttles"],
      ],
      modules: [
        ["Receiving", "ASN, checks, labels"],
        ["Locations", "Put-away, bins"],
        ["Lots and serials", "Expiry, holds"],
        ["Picking", "Waves, batches, paths"],
        ["Line-side supply", "Kits, replenishment"],
        ["Cycle counting", "Variance, adjust"],
      ],
      strip: "Every move scanned · reservations · audit trail",
      right: [
        ["ERP", "Orders, stock, postings"],
        ["Carriers", "Labels, tracking"],
        ["MES", "Material to work orders"],
        ["Customers and suppliers", "ASN, EDI"],
      ],
    },
    diagramCaption:
      "Reference architecture: every movement is scanned against a task, so system stock follows physical stock.",
    standards: [
      {
        name: "GS1 standards",
        note: "GTIN, SSCC and GS1-128 identifiers and labels, and EPCIS for event-based traceability across partners.",
      },
      {
        name: "EDI messages",
        note: "ASN and order messages in ANSI X12 and EDIFACT, or API equivalents, exchanged with customers and suppliers.",
      },
      {
        name: "RFID standards",
        note: "EPC Gen2 tags and readers for item and pallet identification where RFID is used.",
      },
      {
        name: "ISA-95",
        note: "Material movement exchange between business planning, the warehouse and manufacturing operations.",
      },
      {
        name: "Hazardous and regulated goods rules",
        note: "Storage and segregation rules for chemicals, batteries or food, applied as location and compatibility rules.",
      },
      {
        name: "ERP interfaces",
        note: "APIs, IDocs, files or queues for stock postings and master data.",
      },
    ],
    dataModel: [
      {
        entity: "Item and unit of measure",
        holds: "Item, identifiers, packaging levels, dimensions, storage rules and shelf life.",
      },
      {
        entity: "Location and container",
        holds: "Bin, rack, zone, capacity, restrictions and the handling units stored.",
      },
      {
        entity: "Stock record",
        holds: "Item, lot or serial, quantity, location, status and owner.",
      },
      {
        entity: "Receipt and order line",
        holds: "Expected and received quantities, supplier, order and inspection result.",
      },
      {
        entity: "Task",
        holds: "Type (put-away, pick, move, count), source, destination, assignee, status and time.",
      },
      {
        entity: "Movement",
        holds: "From, to, quantity, reason and the user or device that scanned it.",
      },
      {
        entity: "Count and adjustment",
        holds: "Expected, counted, variance, reason, approver and posting.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Packaged warehouse management systems and ERP warehouse modules are the standard answer for large distribution centres and are a sound choice when your processes are conventional.",
      },
      {
        title: "Extend",
        body: "Extend when the ERP handles inventory but the shop-floor stores, line-side supply and lot control need scanning and tasks. We build a focused warehouse layer and post to the ERP.",
      },
      {
        title: "Build",
        body: "Build when your warehouse is part of production, with line-side supply, kitting, lot genealogy and special storage rules that standard WMS products treat as customisations.",
      },
    ],
    security: [
      {
        title: "Scanned and attributed moves",
        body: "Every movement is tied to a user, a device and a task, so stock changes cannot happen unrecorded.",
      },
      {
        title: "Adjustment approval",
        body: "Inventory adjustments above a threshold need approval and a reason, and are visible in reports.",
      },
      {
        title: "Resilience on the floor",
        body: "Handhelds work through network gaps, queue transactions and resolve conflicts on reconnection.",
      },
      {
        title: "Role-based access",
        body: "Receiving, picking, supervisors and finance see only the functions they need.",
      },
      {
        title: "Audit trail",
        body: "Stock history is append-only, so any balance can be reconstructed from its movements.",
      },
    ],
    phases: [
      {
        title: "Warehouse process walk",
        body: "We walk the flows of goods from receiving to shipping and into production, and record how stock is identified, moved and counted.",
      },
      {
        title: "Location, label and rule design",
        body: "The location model, labels, put-away and picking rules and ERP postings are designed with the warehouse and finance teams.",
      },
      {
        title: "Build and test with scanners",
        body: "Receiving, put-away and picking are built and tested on real devices in the warehouse.",
      },
      {
        title: "Go live by zone",
        body: "Zones go live one at a time, starting with a counted and labelled area, with cycle counts proving accuracy.",
      },
      {
        title: "Extend to line-side and automation",
        body: "Line-side supply, kitting and automation interfaces are added, with reports on accuracy and productivity.",
      },
    ],
    proof: [
      { label: "Fizkultura: reporting pipeline reconciling several source systems", href: "/case-studies/fizkultura" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "RFID and barcode tracking system", href: "/solutions/rfid-and-barcode-tracking-system" },
    ],
    faqs: [
      {
        q: "Do we need a WMS if our ERP tracks inventory?",
        a: "The ERP usually knows quantity by plant or store. A warehouse system adds locations, tasks, scanning and lot control, which is what makes stock accurate and picking efficient.",
      },
      {
        q: "Can it supply production lines directly?",
        a: "Yes. Line-side supply uses material calls from work orders or replenishment signals, with kits or containers delivered to the line and issued against the order.",
      },
      {
        q: "Does it support RFID?",
        a: "Yes, alongside barcodes. RFID reads for receiving and dispatch, and for assets and pallets, are handled through readers and the same task model.",
      },
      {
        q: "How do you keep system stock accurate?",
        a: "By scanning every move against a task, counting continuously by rule, and posting reviewed adjustments with reasons, so variances become investigations.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "RFID and barcode tracking system", href: "/solutions/rfid-and-barcode-tracking-system" },
      { label: "Production planning and scheduling software", href: "/solutions/production-planning-and-scheduling-software" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "product-configurator-and-cpq-for-manufacturers",
    vertical: "manufacturing",
    serviceId: "enterprise-platforms",
    seoTitle: "Product Configurator and CPQ for Manufacturers | Deview",
    seoDescription:
      "Custom product configurator and CPQ for equipment manufacturers: rules-based configuration, pricing, quotes, approvals, BOM generation and ERP and CAD handoff.",
    kicker: "Enterprise platforms · Manufacturing",
    h1: "Product configurator and CPQ for equipment manufacturers",
    intro:
      "We build custom product configurators and CPQ for equipment manufacturers: rules-based configuration of technical products, pricing and discount control, quote documents, approval workflow and generation of the bill of materials and order for production. Sales engineers and distributors get valid configurations and quotes quickly, and engineering approves what must be approved, and you own the code.",
    modules: [
      {
        title: "Product model",
        body: "Families, options, dimensions and technical attributes held in a structured model that engineering maintains, not in spreadsheets.",
      },
      {
        title: "Configuration rules",
        body: "Compatibility, dependency and dimensional rules that stop invalid combinations and explain why, tested against known good and bad cases.",
      },
      {
        title: "Selection and sizing",
        body: "Calculation of duty points, capacities and performance from customer inputs, with the candidate products ranked and the reasoning shown.",
      },
      {
        title: "Pricing and discounts",
        body: "Price lists, customer terms, volume rules, margins and approvals by discount level, applied the same way for every channel.",
      },
      {
        title: "Quote generation",
        body: "Quotation documents with technical data, drawings and terms, in the customer's language and currency, produced from the configuration.",
      },
      {
        title: "Approval workflow",
        body: "Routing of non-standard requests, special pricing and engineering review, with timers and a clear record of each decision.",
      },
      {
        title: "BOM and routing generation",
        body: "From the accepted configuration, the bill of materials, routing and order are created and sent to the ERP, with no rekeying.",
      },
      {
        title: "CAD and document outputs",
        body: "Datasheets, general arrangement drawings and models generated or selected from the configuration.",
      },
      {
        title: "Channels and CRM",
        body: "Use by sales engineers, distributors and customers through a web portal, with quotes and opportunities synchronised to the CRM.",
      },
    ],
    diagram: {
      title: "Product configurator and CPQ: reference architecture",
      desc: "Sales engineers, distributors and customers use a configurator and CPQ platform with a product model, configuration rules, selection and sizing, pricing, quote generation and approvals. It generates the bill of materials and order for the ERP, documents and drawings, and syncs with the CRM.",
      leftLabel: "Users",
      platformLabel: "Configurator and CPQ",
      rightLabel: "Systems",
      platformTitle: "Configurator and CPQ platform",
      left: [
        ["Sales engineers", "Configure, quote"],
        ["Distributors", "Portal, price lists"],
        ["Customers", "Requirements, requests"],
      ],
      modules: [
        ["Product model", "Families, options"],
        ["Configuration rules", "Validity, dependencies"],
        ["Selection and sizing", "Calculations, ranking"],
        ["Pricing", "Lists, discounts, margin"],
        ["Quotes and approvals", "Documents, routing"],
        ["BOM generation", "Bill, routing, order"],
      ],
      strip: "Rule tests · version history · audit trail",
      right: [
        ["ERP", "Sales order, BOM"],
        ["CRM", "Opportunities, quotes"],
        ["CAD and documents", "Drawings, datasheets"],
        ["Engineering", "Review of specials"],
      ],
    },
    diagramCaption:
      "Reference architecture: engineering owns the product model and rules, sales uses them, and a valid configuration becomes an order without rekeying.",
    standards: [
      {
        name: "ISO 10303 (STEP)",
        note: "Product data exchange for geometry and structure where CAD systems are connected.",
      },
      {
        name: "ERP variant configuration practice",
        note: "How configurable products and bills of material are represented in the ERP that receives the order.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces to CRM, ERP, pricing and document services.",
      },
      {
        name: "Industry calculation standards",
        note: "The performance and rating standards that apply to the products, implemented in sizing logic with a reference to the standard.",
      },
      {
        name: "Export and compliance rules",
        note: "Trade restrictions, certification and labelling requirements checked at quote time where they depend on the configuration.",
      },
      {
        name: "Accessibility guidelines",
        note: "WCAG 2.2 for the portal used by distributors and customers.",
      },
    ],
    dataModel: [
      {
        entity: "Product family and option",
        holds: "Attributes, allowed values, dimensions and the engineering owner.",
      },
      {
        entity: "Rule",
        holds: "Condition, effect, explanation, test cases, version and effective dates.",
      },
      {
        entity: "Configuration",
        holds: "Selected options, derived attributes, validity result and the user who built it.",
      },
      {
        entity: "Price and discount structure",
        holds: "Price lists, customer terms, volume breaks, margin limits and approval levels.",
      },
      {
        entity: "Quote",
        holds: "Configuration, price, terms, validity, documents and status.",
      },
      {
        entity: "Approval",
        holds: "Request, reviewer, decision, reason and time.",
      },
      {
        entity: "Generated order data",
        holds: "BOM, routing, order lines and the ERP reference.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial CPQ platforms and ERP configurators handle many products well, particularly when pricing and quoting are standard and the product rules are not deeply technical.",
      },
      {
        title: "Extend",
        body: "Extend a CRM or CPQ platform with a technical sizing and rules engine, so sales keeps its tool while engineering rules and calculations are enforced.",
      },
      {
        title: "Build",
        body: "Build when product selection depends on engineering calculations, when the rules are intricate and change often, or when distributors and customers need a portal that gives engineering-grade answers.",
      },
    ],
    security: [
      {
        title: "Protected engineering logic",
        body: "Rules, calculations and cost data are held server-side and not exposed to distributors or customers.",
      },
      {
        title: "Pricing governance",
        body: "Discounts and margins follow approval levels, and exceptions are recorded and reported.",
      },
      {
        title: "Role-based channel access",
        body: "Distributors see only their price lists and customers, and sales engineers see the views they need.",
      },
      {
        title: "Rule change control",
        body: "Changes to rules and prices are tested against example configurations, approved and dated.",
      },
      {
        title: "Audit trail",
        body: "Every quote and decision is stored with its configuration, rule version and approver.",
      },
    ],
    phases: [
      {
        title: "Product and quoting review",
        body: "We take a set of recent quotes through the current process with sales and engineering and capture the rules, calculations and exceptions applied.",
      },
      {
        title: "Model and rule design",
        body: "The product model, rules, sizing logic and price structure are written down with example cases that must pass.",
      },
      {
        title: "Build and test against history",
        body: "The configurator is built and tested on past quotes, comparing results with what was quoted and built.",
      },
      {
        title: "Pilot with sales engineers",
        body: "A group of sales engineers and one distributor use the tool on live enquiries.",
      },
      {
        title: "Extend to channels and ERP",
        body: "The portal, ERP order creation and document generation are added and more product families follow.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: quotation drafted in Salesforce for human approval", href: "/case-studies/agroplatforma" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "B2B customer and distributor portal", href: "/solutions/b2b-customer-and-distributor-portal" },
    ],
    faqs: [
      {
        q: "Why build a configurator instead of using spreadsheets?",
        a: "Spreadsheets hold the rules in people's heads and in formulas nobody can review. A configurator makes the rules explicit, tests them against known cases and applies them the same way for every quote.",
      },
      {
        q: "Can it perform engineering calculations?",
        a: "Yes. Sizing and selection logic follows the calculation methods and standards your engineers specify, with the reasoning shown and the result reviewed by qualified engineers for the cases that need it.",
      },
      {
        q: "Does it replace our CRM or ERP?",
        a: "No. It sits between them: quotes sync to the CRM, and an accepted configuration creates the order and bill of materials in the ERP.",
      },
      {
        q: "Can distributors use it?",
        a: "Yes, through a portal with their own price lists and customers, and with non-standard requests routed to your engineers.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "B2B customer and distributor portal", href: "/solutions/b2b-customer-and-distributor-portal" },
      { label: "Manufacturing execution system development", href: "/solutions/manufacturing-execution-system-development" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "b2b-customer-and-distributor-portal",
    vertical: "manufacturing",
    serviceId: "product-engineering",
    seoTitle: "B2B Customer and Distributor Portal for Manufacturers | Deview",
    seoDescription:
      "Custom B2B customer and distributor portal for manufacturers: catalogue and pricing, ordering, order tracking, spare parts, documents, returns and ERP integration.",
    kicker: "Digital product engineering · Manufacturing",
    h1: "B2B customer and distributor portal for manufacturers",
    intro:
      "We build custom B2B customer and distributor portals for manufacturers: a catalogue with each customer's prices, fast ordering and reordering, order and delivery tracking, spare parts lookup, technical documents, returns and service requests, connected to your ERP. Customers serve themselves at any hour and your staff handle exceptions instead of routine questions, and you own the code.",
    modules: [
      {
        title: "Accounts, users and roles",
        body: "Customer and distributor organisations with their own users, roles, approval limits and ship-to locations, managed by the customer's administrator.",
      },
      {
        title: "Catalogue with customer pricing",
        body: "Product data, availability and each customer's price lists, discounts and terms, with search by part number, specification or application.",
      },
      {
        title: "Fast ordering and reordering",
        body: "Quick order by part number, upload of order files, repeat orders, order templates and approval for larger orders.",
      },
      {
        title: "Order and delivery tracking",
        body: "Status from order to dispatch and delivery, with tracking links, documents and notifications on change.",
      },
      {
        title: "Spare parts lookup",
        body: "Exploded views and parts lists by product and serial number, so customers find and order the right part first time.",
      },
      {
        title: "Technical documents and downloads",
        body: "Datasheets, manuals, certificates and CAD models, filtered by product and entitlement, with the current version always shown.",
      },
      {
        title: "Invoices, statements and payments",
        body: "Invoices and statements on demand, credit limit and balance, and online payment where the business uses it.",
      },
      {
        title: "Returns, warranty and service requests",
        body: "Returns authorisation, warranty claims and service requests with photos and serial numbers, tracked to resolution.",
      },
      {
        title: "Integration and EDI",
        body: "Connection to the ERP for products, stock, prices and orders, and electronic exchange with customers who order from their own systems.",
      },
    ],
    diagram: {
      title: "B2B customer and distributor portal: reference architecture",
      desc: "Customers, distributors and the manufacturer's own staff use a portal with accounts, catalogue and pricing, ordering, tracking, spare parts, documents, finance and returns. The portal connects to the ERP, CRM, product information, document and logistics systems.",
      leftLabel: "Users",
      platformLabel: "B2B portal",
      rightLabel: "Back-end systems",
      platformTitle: "B2B customer and distributor portal",
      left: [
        ["Customers", "Orders, documents, parts"],
        ["Distributors", "Pricing, stock, claims"],
        ["Your staff", "Support, approvals"],
      ],
      modules: [
        ["Accounts and roles", "Users, limits"],
        ["Catalogue and prices", "Per-customer terms"],
        ["Ordering", "Quick, files, repeat"],
        ["Tracking", "Status, delivery"],
        ["Parts and documents", "Lookup, downloads"],
        ["Returns and service", "RMA, warranty"],
      ],
      strip: "SSO · notifications · audit trail",
      right: [
        ["ERP", "Orders, stock, invoices"],
        ["Product information", "Specs, parts, media"],
        ["CRM and service", "Accounts, cases"],
        ["Logistics", "Dispatch, tracking"],
      ],
    },
    diagramCaption:
      "Reference architecture: one portal for customers and distributors, drawing live data from the ERP, product information and logistics systems.",
    standards: [
      {
        name: "EDI and e-invoicing",
        note: "ANSI X12, EDIFACT, UBL and Peppol for customers who order and receive invoices electronically.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces to the ERP, product information, CRM and logistics systems.",
      },
      {
        name: "OAuth 2.0, OpenID Connect and SAML",
        note: "Sign-in for customer users, including single sign-on from the customer's own identity provider.",
      },
      {
        name: "Product data standards",
        note: "Classification and attribute standards such as ETIM or ECLASS where the industry uses them.",
      },
      {
        name: "WCAG 2.2",
        note: "Accessible ordering and document pages for all users.",
      },
      {
        name: "Data protection and trade rules",
        note: "Handling of contact data, price confidentiality and export restrictions.",
      },
    ],
    dataModel: [
      {
        entity: "Customer account",
        holds: "Organisation, ship-to addresses, price list, credit terms, users and roles.",
      },
      {
        entity: "Product and part",
        holds: "Specifications, classification, media, documents, availability and relationships.",
      },
      {
        entity: "Price and term",
        holds: "Price lists, discounts, validity and customer-specific agreements.",
      },
      {
        entity: "Order and line",
        holds: "Items, quantities, prices, delivery dates, status and the ERP reference.",
      },
      {
        entity: "Installed product",
        holds: "Serial number, owner, configuration and the parts list for the unit.",
      },
      {
        entity: "Return and claim",
        holds: "Item, reason, photos, authorisation, status and resolution.",
      },
      {
        entity: "Document entitlement",
        holds: "Which documents each customer may access, by product and version.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "B2B commerce platforms and ERP portals are a good fit for manufacturers with standard catalogues and ordering, and many come with the integration to common ERPs.",
      },
      {
        title: "Extend",
        body: "Extend a commerce platform with technical selection, parts lookup by serial number or document entitlements that are specific to your products.",
      },
      {
        title: "Build",
        body: "Build when your products are complex and technical, when distributors need configuration and quoting, or when the portal is the way you want to serve and differentiate in your market.",
      },
    ],
    security: [
      {
        title: "Customer separation",
        body: "Each organisation sees only its own prices, orders, invoices and documents, enforced on the server.",
      },
      {
        title: "Strong authentication",
        body: "Multi-factor sign-in and single sign-on from the customer's identity provider where wanted.",
      },
      {
        title: "Price confidentiality",
        body: "Price lists and terms are protected from enumeration and export beyond what a customer is entitled to.",
      },
      {
        title: "Delegated administration",
        body: "Customer administrators add and remove their own users, with every change logged.",
      },
      {
        title: "Resilience",
        body: "Orders are queued and idempotent, so an ERP outage does not lose or duplicate them.",
      },
    ],
    phases: [
      {
        title: "Customer and process review",
        body: "We interview customers, distributors and the order desk and trace the top tasks they carry out by email and phone.",
      },
      {
        title: "Design and integration plan",
        body: "Journeys, data sources and the ERP and product data interfaces are agreed, with the customer groups to start with.",
      },
      {
        title: "Build ordering and tracking",
        body: "Accounts, catalogue with pricing, ordering and tracking come first, then parts, documents and finance.",
      },
      {
        title: "Pilot with selected customers",
        body: "A group of customers and distributors use the portal on live orders while support is tuned.",
      },
      {
        title: "Open to all and extend",
        body: "All customers move across, with returns, service and EDI added from the roadmap.",
      },
    ],
    proof: [
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Product configurator and CPQ for manufacturers", href: "/solutions/product-configurator-and-cpq-for-manufacturers" },
    ],
    faqs: [
      {
        q: "Will customers actually use a portal?",
        a: "They will if it is faster than email. We design around the tasks customers repeat, such as reordering, finding a part and checking a delivery, test the screens with real customers and let large customers connect their own systems.",
      },
      {
        q: "How do prices stay in sync with the ERP?",
        a: "Prices and terms are read from the ERP or a pricing service, so a customer sees what the order desk would quote, and an order placed in the portal creates the same order in the ERP.",
      },
      {
        q: "Can distributors have their own customers inside the portal?",
        a: "Yes. A distributor organisation can manage its users and, where the business model needs it, its own end customers, with separate price lists.",
      },
      {
        q: "Can it support spare parts by serial number?",
        a: "Yes. Parts lists and exploded views are linked to the product's serial number and configuration, so the parts shown are those fitted to that unit.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "mfg-systems-requirements",
    related: [
      { label: "Product configurator and CPQ for manufacturers", href: "/solutions/product-configurator-and-cpq-for-manufacturers" },
      { label: "Warehouse and inventory management system", href: "/solutions/warehouse-and-inventory-management-system" },
      { label: "Manufacturing software development", href: "/solutions/manufacturing-software" },
    ],
    updated: "2026-10-15",
  },
];
