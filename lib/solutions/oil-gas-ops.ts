import type { SolutionPage } from "./types";

export const OIL_GAS_OPS_PAGES: SolutionPage[] = [
  {
    slug: "hydrocarbon-production-allocation-software",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Hydrocarbon Production Allocation Software | Deview",
    seoDescription:
      "Custom hydrocarbon production allocation software: network model, well test and back-allocation methods, shrinkage and fuel, partner shares and reconciliation.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Hydrocarbon production allocation software",
    intro:
      "We build custom hydrocarbon production allocation software for operators and joint ventures: a model of the production network, allocation methods from well tests and fiscal meters, treatment of shrinkage, fuel, flare and vent, partner shares and a reconciliation that shows what was measured against what was allocated. The rules are explicit, versioned and yours, and you own the code.",
    modules: [
      {
        title: "Production network model",
        body: "A graph of wells, manifolds, facilities, pipelines and export points with the streams between them and the measurement point on each stream, effective-dated as the network changes.",
      },
      {
        title: "Measurement ingestion",
        body: "Fiscal and allocation meter volumes, test separator data, tank dips and laboratory results with quality flags, corrections and a clear record of which value was used.",
      },
      {
        title: "Well test processing",
        body: "Validation of tests, calculation of rates and phase fractions, and the selection of the test that represents each well for a period.",
      },
      {
        title: "Allocation methods",
        body: "Back-allocation from fiscal meters to wells by test-based theoretical rates, by pro-rata on potential or by direct measurement, chosen per node and recorded.",
      },
      {
        title: "Shrinkage, fuel, flare and vent",
        body: "Processing losses, shrink factors, fuel gas, flare and vent volumes taken out in a defined order so reported sales volumes and allocated volumes agree.",
      },
      {
        title: "Commingled streams and shared facilities",
        body: "Allocation across fields that share a pipeline or processing plant, including tariff and capacity use, with the rules agreed between the parties.",
      },
      {
        title: "Partner and royalty allocation",
        body: "Allocated volumes split by working interest, production sharing terms, royalty or tax rules, with statements per partner and per period.",
      },
      {
        title: "Reconciliation and allocation factors",
        body: "Allocation factors, imbalances and unallocated volumes by node and period, with thresholds that raise a review before the period closes.",
      },
      {
        title: "Restatement and period close",
        body: "Daily provisional allocation and a monthly final, with approval, locking and restatement that keeps every earlier version.",
      },
    ],
    diagram: {
      title: "Hydrocarbon production allocation software: reference architecture",
      desc: "Meters, test separators and laboratory data feed an allocation platform with a production network model, measurement ingestion, well test processing, allocation methods, shrinkage and fuel treatment, partner allocation and reconciliation. Outputs go to production reporting, partners, accounting and regulators.",
      leftLabel: "Measurement data",
      platformLabel: "Allocation platform",
      rightLabel: "Consumers",
      platformTitle: "Production allocation platform",
      boundary: "One-way from OT",
      left: [
        ["Fiscal and allocation meters", "Volumes, quality flags"],
        ["Test separators and wells", "Rates, phase fractions"],
        ["Laboratory and tank data", "Composition, dips"],
      ],
      modules: [
        ["Network model", "Wells to export, dated"],
        ["Measurement ingestion", "Corrections, versions"],
        ["Well tests", "Validate, select, rate"],
        ["Allocation methods", "Back-allocation, pro-rata"],
        ["Losses and fuel", "Shrink, flare, vent"],
        ["Partner shares", "Interests, royalty, PSC"],
      ],
      strip: "Allocation factors · restatement log · audit trail",
      right: [
        ["Production reporting", "Daily and monthly"],
        ["Partners and operators", "Statements, shares"],
        ["Hydrocarbon accounting", "Reconciled volumes"],
        ["Regulators", "Required returns"],
      ],
    },
    diagramCaption:
      "Reference architecture: measured volumes flow down the network model and out to wells, partners and accounting under explicit rules.",
    standards: [
      {
        name: "API Manual of Petroleum Measurement Standards, Chapter 20",
        note: "Allocation measurement practice for oil and gas, which the methods and uncertainty treatment follow.",
      },
      {
        name: "PRODML",
        note: "Energistics standard for production data exchange between operators, partners and systems.",
      },
      {
        name: "Production sharing and joint operating agreements",
        note: "The contractual rules for interests, cost recovery and royalty that determine how allocated volumes are split.",
      },
      {
        name: "OPC UA",
        note: "Read-only access to meter and historian values on the operational side.",
      },
      {
        name: "Regulator reporting formats",
        note: "The production returns each regulator requires, generated from the allocated and approved volumes.",
      },
      {
        name: "IEC 62443",
        note: "Zones and conduits at the boundary between control systems and the allocation platform.",
      },
    ],
    dataModel: [
      {
        entity: "Network node and stream",
        holds: "Wells, facilities, pipelines and the flows between them, with effective dates and the measurement points on each.",
      },
      {
        entity: "Measurement",
        holds: "Value, unit, time, quality flag, source and any correction, with the version used for allocation.",
      },
      {
        entity: "Well test",
        holds: "Date, duration, conditions, rates, phase fractions and the validation outcome.",
      },
      {
        entity: "Allocation method and parameters",
        holds: "Method per node, factors, order of deductions, version and approval.",
      },
      {
        entity: "Allocation result",
        holds: "Allocated volumes by well, stream and phase, the method and the provisional or final status.",
      },
      {
        entity: "Interest and agreement",
        holds: "Partners, shares, royalty and production sharing terms with effective dates.",
      },
      {
        entity: "Restatement",
        holds: "Original and revised volumes, reason, approver and the periods affected.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Established hydrocarbon allocation and accounting packages suit operators with large, complex fiscal measurement and a vendor that already covers the regulator's formats and audit expectations.",
      },
      {
        title: "Extend",
        body: "Extend when an existing package handles fiscal accounting but daily provisional allocation, test processing or partner statements live in spreadsheets. We build that layer and feed the package reconciled volumes.",
      },
      {
        title: "Build",
        body: "Build when the asset base is small or mid-sized, the network and agreements are specific, or you need transparent rules that partners and auditors can read and test.",
      },
    ],
    security: [
      {
        title: "Rule transparency",
        body: "Methods, factors and the order of deductions are data that partners and auditors can inspect, not logic buried in a script.",
      },
      {
        title: "Approval and locking",
        body: "Periods are approved and locked by named roles, and any restatement keeps the earlier figures with a reason.",
      },
      {
        title: "Separate partner views",
        body: "Each partner sees its own share and the agreed shared data, and nothing belonging to others.",
      },
      {
        title: "One-way data flow",
        body: "Measurement data is read from the operational side; the platform has no write path to control systems.",
      },
      {
        title: "Audit trail",
        body: "Every input, correction and method change is recorded with user and time, so an allocation can be reproduced.",
      },
    ],
    phases: [
      {
        title: "Network and agreement review",
        body: "We map the production network, the measurement points and the agreements that govern allocation, with the production, accounting and commercial teams.",
      },
      {
        title: "Method and data design",
        body: "Allocation methods, deductions and data sources are specified per node and agreed with partners where required.",
      },
      {
        title: "Build and back-test",
        body: "The platform is built and tested against historical periods, with results compared against the allocations actually reported.",
      },
      {
        title: "Parallel period",
        body: "One or more periods are allocated in both the old process and the platform, and differences are explained.",
      },
      {
        title: "Go live and extend",
        body: "The platform takes over daily and monthly allocation, with partner statements and regulator returns generated from it.",
      },
    ],
    proof: [
      { label: "EnerQuest: upstream production management pilot", href: "/case-studies/enerquest" },
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "Can partners trust and audit the allocation?",
        a: "That is the main design goal. The network, the methods, the factors and the order of deductions are stored as data with versions and approvals, so a partner or auditor can see how a number was reached and rerun it.",
      },
      {
        q: "Does the software replace hydrocarbon accounting?",
        a: "It covers allocation and the production side of the accounts. Fiscal accounting, custody transfer and financial postings usually stay in your accounting system of record, which we feed with reconciled volumes.",
      },
      {
        q: "How are restatements handled?",
        a: "A restatement creates a new version of the affected periods and keeps the original. The reason and approver are recorded, and downstream statements show both figures.",
      },
      {
        q: "Can it handle shared facilities and commingled streams?",
        a: "Yes. The network model represents shared pipelines and plants, and allocation across parties follows the rules agreed for each shared node.",
      },
      {
        q: "Who owns the code and the rules?",
        a: "You do. The code, the allocation rules and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
      { label: "Joint venture accounting and AFE management", href: "/solutions/joint-venture-accounting-and-afe-management" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "exploration-data-management-system",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Exploration and Subsurface Data Management System | Deview",
    seoDescription:
      "Custom exploration and subsurface data management: catalogue for seismic, wells, logs and reports, quality control, entitlements, data rooms and OSDU interfaces.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Exploration and subsurface data management system",
    intro:
      "We build custom exploration and subsurface data management systems for operators, national oil companies and regulators: a catalogue and store for seismic, well, log, core and interpretation data, with quality control, licence-based entitlements, data rooms for partners and bidders, and interfaces to OSDU and Energistics standards. It makes exploration data findable and trustworthy, and you own the code.",
    modules: [
      {
        title: "Subsurface data catalogue",
        body: "A searchable catalogue of surveys, wells, logs, cores, samples, reports, maps and interpretations, with a map view and filters by block, basin, vintage and type.",
      },
      {
        title: "Seismic data management",
        body: "Survey and line metadata, navigation, SEG-Y and SEG-D files, processing history and tape or cloud storage locations, with data held in a tiered store.",
      },
      {
        title: "Well and log data",
        body: "Well headers, deviation, formation tops and curves in LAS and DLIS, with unit and mnemonic standardisation and links to the reports that describe them.",
      },
      {
        title: "Interpretation and model links",
        body: "Registration of horizons, faults, velocity and reservoir models produced in interpretation tools, with the data and software versions they came from.",
      },
      {
        title: "Quality control and lineage",
        body: "Automated checks for completeness, units, coordinate systems and duplicates, and a recorded history of every transformation applied to a dataset.",
      },
      {
        title: "Licence, block and rights register",
        body: "Licences, blocks, partners and obligations linked to the data acquired under them, so entitlements follow the contracts.",
      },
      {
        title: "Entitlements and data rooms",
        body: "Access by licence, partner and role, and time-limited data rooms for bid rounds, farm-ins and divestments with a log of who saw what.",
      },
      {
        title: "Legacy digitisation and migration",
        body: "Workflows for scanned reports, tape transcription and migration from legacy databases, with reconciliation of what was loaded.",
      },
      {
        title: "OSDU and standards interfaces",
        body: "Ingestion and publication using OSDU Data Platform schemas, WITSML and RESQML exchange and OGC services for maps.",
      },
    ],
    diagram: {
      title: "Exploration and subsurface data management: reference architecture",
      desc: "Seismic surveys, well and log data, reports and interpretation projects, along with legacy archives, feed a subsurface data platform with a catalogue, seismic and well data management, quality control, a rights register, entitlements and data rooms. Interpretation applications, partners and regulators use the data.",
      leftLabel: "Data sources",
      platformLabel: "Subsurface platform",
      rightLabel: "Consumers",
      platformTitle: "Subsurface data platform",
      left: [
        ["Seismic and acquisition", "SEG-Y, SEG-D, navigation"],
        ["Wells and logs", "LAS, DLIS, WITSML"],
        ["Reports and archives", "Scans, tapes, legacy data"],
      ],
      modules: [
        ["Catalogue", "Search, map, metadata"],
        ["Seismic management", "Surveys, tiers"],
        ["Well and log data", "Curves, tops, units"],
        ["Quality and lineage", "Checks, history"],
        ["Rights register", "Licences, blocks"],
        ["Entitlements", "Roles, data rooms"],
      ],
      strip: "OSDU schemas · audit trail · tiered storage",
      right: [
        ["Interpretation tools", "Geoscience applications"],
        ["Partners and bidders", "Data rooms"],
        ["OSDU data platform", "Publish and read"],
        ["Regulators", "Mandatory submissions"],
      ],
    },
    diagramCaption:
      "Reference architecture: subsurface data is catalogued, quality-checked and shared under licence-based entitlements, with open standard interfaces.",
    standards: [
      {
        name: "OSDU Data Platform",
        note: "The Open Group's open standard for subsurface and well data, with schemas, services and the reference-data conventions the platform follows.",
      },
      {
        name: "Energistics WITSML, PRODML and RESQML",
        note: "Open exchange standards for well, production and reservoir model data.",
      },
      {
        name: "SEG-Y, SEG-D, LAS and DLIS",
        note: "The file formats for seismic, field and well log data that the system reads, validates and stores.",
      },
      {
        name: "PPDM data model",
        note: "The Professional Petroleum Data Management Association's model, commonly used as the logical basis for catalogues and rights registers.",
      },
      {
        name: "OGC and ISO geospatial standards",
        note: "WMS and WFS services, GeoJSON and ISO 19115 metadata for maps and spatial search.",
      },
      {
        name: "Regulator data submission rules",
        note: "National requirements to deliver and retain seismic, well and report data, which the platform tracks per licence.",
      },
    ],
    dataModel: [
      {
        entity: "Survey and line",
        holds: "Acquisition details, geometry, navigation, processing versions and file locations.",
      },
      {
        entity: "Well and wellbore",
        holds: "Header, location, trajectory, status and identifiers across systems.",
      },
      {
        entity: "Log, curve and core",
        holds: "Curve data with units and mnemonics, core and sample records and the reports describing them.",
      },
      {
        entity: "Interpretation object",
        holds: "Horizon, fault, model or map, its project, software and the data it was built from.",
      },
      {
        entity: "Licence and block",
        holds: "Area, term, partners, obligations and the datasets acquired under them.",
      },
      {
        entity: "Dataset and lineage",
        holds: "Type, owner, quality results, transformations applied and storage location.",
      },
      {
        entity: "Entitlement and access event",
        holds: "Who may see which dataset, why, until when, and each access in a data room.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial subsurface data management products and cloud OSDU services suit operators with large estates and standard workflows, especially when interpretation applications already integrate with them.",
      },
      {
        title: "Extend",
        body: "Extend when a platform holds core data but your rights register, data rooms, legacy archives or regulator submissions are handled outside it. We build those parts and integrate them with the platform.",
      },
      {
        title: "Build",
        body: "Build when you are a national oil company, regulator or licensing body with your own data model and obligations, or a smaller explorer who needs a clean catalogue without a full platform.",
      },
    ],
    security: [
      {
        title: "Licence-based entitlements",
        body: "Access follows the contract: partner, licence, period and data type, with automatic expiry.",
      },
      {
        title: "Data room controls",
        body: "Watermarked, read-only access for bidders, with every view and download logged.",
      },
      {
        title: "Classification and residency",
        body: "Data held in the country or region the licence requires, with classification that controls export.",
      },
      {
        title: "Integrity and provenance",
        body: "Hashes on stored files, and lineage that shows how a dataset was derived.",
      },
      {
        title: "Resilience",
        body: "Tiered storage with tested restore for irreplaceable data such as old acquisition tapes.",
      },
    ],
    phases: [
      {
        title: "Data inventory and priorities",
        body: "We survey what exists, where it is held and which datasets the business and regulator care about most.",
      },
      {
        title: "Model and standards design",
        body: "The catalogue model, naming and unit standards, entitlement rules and OSDU mapping are agreed with geoscience, data management and legal.",
      },
      {
        title: "Build catalogue and load priority data",
        body: "The catalogue and quality checks go first, loaded with the highest value data and reconciled to the sources.",
      },
      {
        title: "Entitlements and data rooms",
        body: "Rights register, access rules and data rooms are added, and the first partner or bid round uses them.",
      },
      {
        title: "Migrate and extend",
        body: "Legacy archives and further data types are migrated in order of value, with OSDU publication added.",
      },
    ],
    proof: [
      { label: "Oil and gas engineering data projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "EnerQuest: subsurface review views in an upstream pilot", href: "/case-studies/enerquest" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    faqs: [
      {
        q: "Do we need to adopt OSDU?",
        a: "Not necessarily. OSDU is the direction of travel for large operators, and we design the catalogue and interfaces so data can be published to or read from an OSDU platform. A smaller explorer may be better served by a clean catalogue first.",
      },
      {
        q: "Can the system hold seismic data itself?",
        a: "It manages seismic metadata and file locations in a tiered store, with the data in object storage, on-premise storage or archived media. Very large volumes stay where they are cheapest and are referenced from the catalogue.",
      },
      {
        q: "How do data rooms work for a bid round?",
        a: "A data room is a time-limited, read-only space with watermarking and per-user logs. Bidders see only the datasets released for the round, and access ends automatically.",
      },
      {
        q: "Can you migrate legacy databases and scanned archives?",
        a: "Yes. Migration is planned by data type and value, with reconciliation reports that show what was loaded, what was rejected and why.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the catalogue and the data stay yours.",
      },
    ],
    assetId: "subsurface-data-readiness",
    related: [
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
      { label: "Drilling and well operations reporting", href: "/solutions/drilling-and-well-operations-reporting" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "drilling-and-well-operations-reporting",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Drilling and Well Operations Reporting Software | Deview",
    seoDescription:
      "Custom drilling and well operations reporting software: daily drilling reports, WITSML data flows, time and NPT analysis, cost tracking, well files and lessons.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Drilling and well operations reporting software",
    intro:
      "We build custom drilling and well operations reporting software: daily drilling reports captured at the rig, WITSML data flows from service companies, time and non-productive time analysis, cost against AFE, and a well file that outlasts the rig move. Operations teams, partners and management see the same figures from one system, and you own the code.",
    modules: [
      {
        title: "Well and wellbore register",
        body: "Wells, wellbores, sidetracks and rig assignments with unique identifiers shared with engineering, production and accounting systems.",
      },
      {
        title: "Daily drilling reports",
        body: "Structured daily reports covering operations summary, time log, depth, mud, bit and BHA, casing, survey, personnel and HSE, entered on the rig or received from service companies.",
      },
      {
        title: "Time breakdown and activity codes",
        body: "Operations recorded against standard activity codes, so time can be analysed by phase, section and cause across wells and rigs.",
      },
      {
        title: "Non-productive time",
        body: "NPT events classified by cause and responsible party, linked to the equipment or service involved, with cost and trend reports.",
      },
      {
        title: "WITSML data flows",
        body: "Receipt of real-time and end-of-well data from service companies in WITSML, with validation, mapping and a store that keeps both raw and cleaned data.",
      },
      {
        title: "Well plan against actual",
        body: "Planned depth, time and cost curves compared with actual progress on each well, with variance explained and carried into the next well's plan.",
      },
      {
        title: "Cost tracking",
        body: "Daily cost by account, linked to the AFE and to contracts, with forecast to complete and alerts when a well trends over budget.",
      },
      {
        title: "Well file and handover",
        body: "A single record of the well's design, as-built, reports, logs and lessons, handed to production and abandonment teams in a consistent form.",
      },
      {
        title: "Lessons learned",
        body: "Searchable lessons captured at the time of the event, linked to the well and cause, and surfaced when similar wells are planned.",
      },
    ],
    diagram: {
      title: "Drilling and well operations reporting: reference architecture",
      desc: "Rig crews and service companies send daily reports and WITSML data into a drilling reporting platform with a well register, daily drilling reports, time and NPT analysis, plan against actual, cost tracking, a well file and lessons learned. Outputs go to operations, partners, accounting and subsurface systems.",
      leftLabel: "Rig and services",
      platformLabel: "Drilling platform",
      rightLabel: "Consumers",
      platformTitle: "Drilling and well operations platform",
      left: [
        ["Rig crews", "Daily reports, time log"],
        ["Service companies", "WITSML, mud, directional"],
        ["Engineering plans", "Well design, AFE"],
      ],
      modules: [
        ["Well register", "Wells, wellbores, rigs"],
        ["Daily reports", "Structured and approved"],
        ["Time and NPT", "Codes, causes"],
        ["Plan vs actual", "Depth, time, cost"],
        ["Cost tracking", "AFE, contracts"],
        ["Well file", "As-built, lessons"],
      ],
      strip: "WITSML store · approvals · audit trail",
      right: [
        ["Operations managers", "Dashboards, alerts"],
        ["Partners and regulators", "Reports"],
        ["Accounting", "Cost and AFE"],
        ["Subsurface platform", "Well data"],
      ],
    },
    diagramCaption:
      "Reference architecture: one record of every well from plan to handover, fed by the rig and by service companies in standard formats.",
    standards: [
      {
        name: "WITSML 2.0",
        note: "Energistics standard for well and drilling data exchange, including real-time streaming, used between service companies, operators and systems.",
      },
      {
        name: "IADC daily drilling report and activity codes",
        note: "The International Association of Drilling Contractors' report format and activity coding used by many operators and contractors.",
      },
      {
        name: "Energistics ETP",
        note: "The Energistics Transfer Protocol for real-time data exchange alongside WITSML.",
      },
      {
        name: "PPDM and OSDU well data models",
        note: "Well and wellbore identifiers and structures that let the drilling record link to the subsurface platform.",
      },
      {
        name: "Regulator drilling reporting",
        note: "National requirements for well notifications, daily and end-of-well reports, which are generated from the same data.",
      },
      {
        name: "OWASP MASVS for the rig app",
        note: "Security verification for a mobile or tablet client used at the rig site.",
      },
    ],
    dataModel: [
      {
        entity: "Well and wellbore",
        holds: "Identifiers, location, type, status, rig, operator and partners.",
      },
      {
        entity: "Daily report",
        holds: "Date, depth, operations summary, status and the approval that locked it.",
      },
      {
        entity: "Time log entry",
        holds: "Start, end, activity code, phase, section, hole depth and remarks.",
      },
      {
        entity: "NPT event",
        holds: "Cause, category, equipment or service, duration, cost and responsible party.",
      },
      {
        entity: "Daily cost line",
        holds: "Account, contract, amount, currency and AFE.",
      },
      {
        entity: "Drilling object",
        holds: "Mud, bit, BHA, casing, survey and fluid records for each section.",
      },
      {
        entity: "Lesson",
        holds: "Event, cause, recommendation, well and the planners who acknowledged it.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial drilling reporting suites are mature and the sensible choice for operators with large drilling programmes, many rigs and a vendor already embedded in their workflow.",
      },
      {
        title: "Extend",
        body: "Extend when a suite covers the daily report but cost, lessons learned or partner reporting are done elsewhere, or when service company data arrives in formats the suite does not handle well.",
      },
      {
        title: "Build",
        body: "Build when you drill a modest programme, operate for partners with their own formats, or want daily reporting, cost and lessons to be one record under your control.",
      },
    ],
    security: [
      {
        title: "Approval and locking",
        body: "Daily reports are submitted, approved and locked, with later edits recorded as amendments.",
      },
      {
        title: "Partner views",
        body: "Partners see approved reports and the cost lines they share, not draft data or other ventures.",
      },
      {
        title: "Data integrity",
        body: "WITSML data is stored raw and cleaned with the transformations recorded, so the original can always be recovered.",
      },
      {
        title: "Offline at the rig",
        body: "The rig client works through connection loss and synchronises with conflict handling.",
      },
      {
        title: "Audit trail",
        body: "Changes to reports, cost and plans carry user and time.",
      },
    ],
    phases: [
      {
        title: "Reporting walk-through",
        body: "We follow a recent well from plan to handover with the drilling, cost and data teams and list each report, spreadsheet and handoff.",
      },
      {
        title: "Data and interface design",
        body: "The report structure, activity codes and the interfaces to service companies and accounting are agreed.",
      },
      {
        title: "Build the daily report first",
        body: "The well register, daily report and time log go live on one rig, then WITSML intake and cost tracking.",
      },
      {
        title: "Run a well in parallel",
        body: "One well is reported in both processes so figures and format can be compared.",
      },
      {
        title: "Roll out across rigs",
        body: "More rigs, NPT analysis, lessons and the well file are added, with partner and regulator reports generated from the data.",
      },
    ],
    proof: [
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "AgroPlatforma: Flutter field app", href: "/case-studies/agroplatforma" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "Do you replace the service companies' own reporting?",
        a: "No. Service companies keep their systems. We receive their data in WITSML or agreed formats, validate it and bring it into the operator's well record.",
      },
      {
        q: "Can the daily report be entered at the rig with a poor connection?",
        a: "Yes. The rig client works offline and synchronises when the link returns, with conflicts shown to the user instead of overwritten.",
      },
      {
        q: "How do you analyse NPT?",
        a: "Each event is classified by cause and responsible party and linked to the equipment or service. Reports show NPT by well, rig, contractor and cause, with trends over time.",
      },
      {
        q: "Can partners and regulators receive their reports from the system?",
        a: "Yes. Partner and regulator reports are generated from approved daily data, in the formats they require.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
      { label: "Joint venture accounting and AFE management", href: "/solutions/joint-venture-accounting-and-afe-management" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "asset-integrity-management-system",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Asset Integrity and Inspection Management System | Deview",
    seoDescription:
      "Custom asset integrity and inspection management: equipment register, risk-based inspection, corrosion monitoring, anomaly tracking and safety-critical elements.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Asset integrity and inspection management system",
    intro:
      "We build custom asset integrity and inspection management systems for oil and gas operators: an equipment register, risk-based inspection planning, corrosion and thickness monitoring, anomaly and repair tracking, and management of safety-critical elements. It connects to your maintenance and engineering systems so inspection findings turn into planned work, and you own the code.",
    modules: [
      {
        title: "Equipment and tag register",
        body: "A hierarchy of facilities, systems, equipment, piping circuits and components with design data, materials and service conditions, aligned with the maintenance system.",
      },
      {
        title: "Risk-based inspection",
        body: "Likelihood and consequence of failure by damage mechanism, with risk rankings that set inspection scope and interval for each item.",
      },
      {
        title: "Inspection planning and scheduling",
        body: "Inspection tasks by method and due date, packaged into work scopes for shutdowns and routine campaigns, with status and backlog.",
      },
      {
        title: "Thickness and corrosion monitoring",
        body: "Thickness readings at monitoring locations, corrosion rates, remaining life and the next inspection date calculated from the trend.",
      },
      {
        title: "Inspection results and reports",
        body: "Findings captured in the field with photos and measurements, reviewed by an engineer and stored against the item inspected.",
      },
      {
        title: "Anomalies and repairs",
        body: "A register of defects and anomalies with assessment, disposition, repair or monitoring decision, due dates and closure.",
      },
      {
        title: "Safety-critical elements and barriers",
        body: "Performance standards for safety-critical equipment, assurance tests and verification results, with the status of barriers visible to operations.",
      },
      {
        title: "Integrity operating windows",
        body: "Limits on temperature, pressure, chemistry and flow that protect equipment, with excursions recorded and linked to inspection planning.",
      },
      {
        title: "Management of change and reporting",
        body: "Links to change management, regulator and internal reporting, and dashboards of integrity status by asset and system.",
      },
    ],
    diagram: {
      title: "Asset integrity management system: reference architecture",
      desc: "Engineering data, inspection results and process data feed an integrity platform with an equipment register, risk-based inspection, planning, corrosion monitoring, anomaly management, safety-critical elements and integrity operating windows. Outputs go to the maintenance system, inspectors, management and regulators.",
      leftLabel: "Data sources",
      platformLabel: "Integrity platform",
      rightLabel: "Consumers",
      platformTitle: "Asset integrity platform",
      boundary: "One-way from OT",
      left: [
        ["Engineering data", "Design, materials, P&IDs"],
        ["Inspectors and tools", "Readings, photos, reports"],
        ["Process data", "Temperature, pressure, flow"],
      ],
      modules: [
        ["Equipment register", "Tags, circuits, parts"],
        ["Risk-based inspection", "Damage, risk, interval"],
        ["Corrosion monitoring", "Readings, remaining life"],
        ["Anomalies", "Assess, repair, close"],
        ["Safety-critical elements", "Standards, assurance"],
        ["Operating windows", "Limits, excursions"],
      ],
      strip: "Inspection history · links to maintenance · audit trail",
      right: [
        ["Maintenance system", "Work orders"],
        ["Inspection teams", "Scopes, schedules"],
        ["Management", "Integrity status"],
        ["Regulators and auditors", "Evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: inspection findings and process data update risk and remaining life, which drive planned inspection and repair.",
    standards: [
      {
        name: "API 580 and API 581",
        note: "Risk-based inspection practice and the quantitative methodology for ranking equipment and setting inspection plans.",
      },
      {
        name: "API 510, 570 and 653",
        note: "Inspection codes for pressure vessels, piping and storage tanks, which define inspection types, intervals and repair rules.",
      },
      {
        name: "ISO 55000",
        note: "Asset management systems standard, as the framework for policy, objectives and performance review.",
      },
      {
        name: "ISO 14224",
        note: "Collection of reliability and maintenance data for equipment, used for taxonomy and failure coding.",
      },
      {
        name: "Safety case and barrier management practice",
        note: "Regulatory and industry guidance on safety-critical elements, performance standards and verification.",
      },
      {
        name: "Maintenance system interfaces",
        note: "Interfaces to the maintenance and engineering systems so inspection output becomes work.",
      },
    ],
    dataModel: [
      {
        entity: "Equipment and component",
        holds: "Tag, type, design conditions, material, installation date and position in the hierarchy.",
      },
      {
        entity: "Damage mechanism and risk",
        holds: "Mechanism, likelihood, consequence, risk rank, assessment date and assumptions.",
      },
      {
        entity: "Inspection task and result",
        holds: "Method, scope, due and done dates, inspector, findings and attachments.",
      },
      {
        entity: "Thickness reading",
        holds: "Location, date, value, instrument, corrosion rate and remaining life estimate.",
      },
      {
        entity: "Anomaly",
        holds: "Description, assessment, disposition, repair or monitoring plan, due date and closure.",
      },
      {
        entity: "Safety-critical element and test",
        holds: "Performance standard, assurance task, result and barrier status.",
      },
      {
        entity: "Operating window excursion",
        holds: "Parameter, limit, duration, assessment and the inspection actions triggered.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Specialist integrity and RBI software suits operators with large estates of pressure equipment and piping, particularly where a vendor holds the calculation methods and the regulator knows them.",
      },
      {
        title: "Extend",
        body: "Extend when your maintenance system holds the register and work orders but inspection data, anomalies and barrier assurance are in spreadsheets and reports. We build the integrity layer and link it to maintenance.",
      },
      {
        title: "Build",
        body: "Build when your asset base or regulatory regime is unusual, when inspection data must be integrated with your own engineering model, or when you need one integrity view across several systems.",
      },
    ],
    security: [
      {
        title: "Engineering review",
        body: "Risk assessments, remaining life estimates and dispositions are reviewed and approved by named engineers.",
      },
      {
        title: "Controlled change",
        body: "Changes to equipment data, inspection intervals and performance standards need an approver and a reason.",
      },
      {
        title: "One-way process data",
        body: "Process data is read from the operational side only.",
      },
      {
        title: "Evidence retention",
        body: "Inspection reports and assurance records are retained for the life of the asset and beyond, with tamper-evident storage.",
      },
      {
        title: "Offline field capture",
        body: "Inspectors record readings offline and synchronise later without losing data.",
      },
    ],
    phases: [
      {
        title: "Integrity process review",
        body: "We review the inspection process, codes in force, current registers and the data held with integrity, inspection and maintenance teams.",
      },
      {
        title: "Data and method design",
        body: "Equipment hierarchy, risk methods, monitoring locations and interfaces to maintenance are agreed.",
      },
      {
        title: "Build and load one facility",
        body: "One facility's register, inspection history and thickness data are loaded and checked against existing reports.",
      },
      {
        title: "Pilot an inspection campaign",
        body: "A campaign runs through the system, from plan through field capture to results and anomalies.",
      },
      {
        title: "Roll out and extend",
        body: "More facilities and the barrier and operating window modules are added, with dashboards for management.",
      },
    ],
    proof: [
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Permit to work and HSE management system", href: "/solutions/permit-to-work-and-hse-management-system" },
    ],
    faqs: [
      {
        q: "Does this replace our maintenance system?",
        a: "No. The maintenance system keeps work orders and the equipment master. The integrity system adds risk, inspection and anomaly management and sends work to maintenance.",
      },
      {
        q: "How is remaining life calculated?",
        a: "From thickness readings over time at each monitoring location, using the corrosion rate method your engineers specify, with the result reviewed by an engineer before it changes an inspection interval.",
      },
      {
        q: "Can inspectors work offline?",
        a: "Yes. Readings, photos and findings are captured offline on a tablet and synchronised, with conflicts shown for review.",
      },
      {
        q: "Does it support safety-critical elements?",
        a: "Yes. Performance standards, assurance tasks and results are tracked, and the status of barriers is visible to operations as well as to the integrity team.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the methods and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Permit to work and HSE management system", href: "/solutions/permit-to-work-and-hse-management-system" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "permit-to-work-and-hse-management-system",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Permit to Work and HSE Incident Management System | Deview",
    seoDescription:
      "Custom permit to work and HSE incident management: isolations, SIMOPS, gas tests, handover, investigations, action tracking and safety indicators.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Permit to work and HSE management system",
    intro:
      "We build custom permit to work and HSE management systems for oil and gas operations: electronic permits with isolations and gas tests, simultaneous operations checks, shift handover, incident and near-miss reporting, investigation and action tracking, and safety performance indicators. The system enforces the sequence a safe job requires, and you own the code.",
    modules: [
      {
        title: "Work request and job hazard analysis",
        body: "Work requests with a task description, location, equipment and hazards, and a structured job hazard analysis attached to the permit.",
      },
      {
        title: "Electronic permits",
        body: "Permit types such as hot work, confined space, working at height and electrical, each with its own steps, roles and validity rules.",
      },
      {
        title: "Isolations and lock-out",
        body: "Isolation plans and certificates linked to the equipment, with a record of every point isolated, verified and returned.",
      },
      {
        title: "Gas testing and conditions",
        body: "Gas test results and the conditions required before and during the work, with permit suspension when a reading goes out of limits.",
      },
      {
        title: "Simultaneous operations",
        body: "A matrix and map of active permits that flags conflicting work in the same area, with escalation before it starts.",
      },
      {
        title: "Competency and authority",
        body: "Checks that issuers, approvers and workers hold the training and authority the permit type needs, with expiry alerts.",
      },
      {
        title: "Shift handover",
        body: "Open permits, isolations and outstanding actions presented at handover, with acknowledgement by the incoming team.",
      },
      {
        title: "Incident and near-miss reporting",
        body: "Fast reporting from the field with photos, a classification of severity and potential, and notifications to the right people.",
      },
      {
        title: "Investigation, actions and indicators",
        body: "Root cause analysis, corrective actions with owners and due dates, and safety performance indicators reported by site and period.",
      },
    ],
    diagram: {
      title: "Permit to work and HSE management: reference architecture",
      desc: "Work requests, field crews and maintenance systems feed a safety platform with electronic permits, isolations, gas testing, simultaneous operations checks, competency, handover and incident management. Outputs go to supervisors, control room, management and regulators.",
      leftLabel: "Inputs",
      platformLabel: "Safety platform",
      rightLabel: "Consumers",
      platformTitle: "Permit to work and HSE platform",
      boundary: "One-way from OT",
      left: [
        ["Work requests", "Maintenance, projects"],
        ["Field crews", "Permits, incidents, photos"],
        ["Gas detection and plant data", "Readings, alarms"],
      ],
      modules: [
        ["Electronic permits", "Types, steps, roles"],
        ["Isolations", "Plans, certificates"],
        ["SIMOPS checks", "Conflicts by area"],
        ["Competency", "Training, authority"],
        ["Handover", "Open work, actions"],
        ["Incidents and actions", "Investigate, close"],
      ],
      strip: "Gas test limits · audit trail · offline capture",
      right: [
        ["Supervisors and control room", "Live permit status"],
        ["Maintenance system", "Work order status"],
        ["Management", "Safety indicators"],
        ["Regulators", "Incident reports"],
      ],
    },
    diagramCaption:
      "Reference architecture: a permit cannot be issued until hazards, isolations, competency and conflicts have been checked in the system.",
    standards: [
      {
        name: "UK HSE guidance on permit-to-work systems (HSG250)",
        note: "Widely used guidance on the principles and practice of permit-to-work systems, used as a benchmark in many regions.",
      },
      {
        name: "ISO 45001",
        note: "Occupational health and safety management systems, as the framework for objectives, audits and review.",
      },
      {
        name: "API RP 754 and IOGP safety performance indicators",
        note: "Process safety and personal safety indicator definitions that the reports follow.",
      },
      {
        name: "IOGP Life-Saving Rules",
        note: "A common set of rules for high-risk activities that permit types and checks can be aligned with.",
      },
      {
        name: "ATEX and IECEx",
        note: "Requirements for equipment used in hazardous areas, which apply to the tablets and devices used in the field.",
      },
      {
        name: "Regulator incident reporting",
        note: "National rules on reportable incidents, content and timing, generated from the incident record.",
      },
    ],
    dataModel: [
      {
        entity: "Work request",
        holds: "Description, location, equipment, hazards, requester and linked work order.",
      },
      {
        entity: "Permit",
        holds: "Type, status, validity, issuer, approver, workers, conditions and extensions.",
      },
      {
        entity: "Isolation",
        holds: "Plan, points, lock and tag identifiers, verification and return.",
      },
      {
        entity: "Gas test and condition",
        holds: "Reading, instrument, time, limits and the permit action taken.",
      },
      {
        entity: "Competency record",
        holds: "Person, training, authority, issue and expiry dates.",
      },
      {
        entity: "Incident and investigation",
        holds: "Event, severity, potential, causes, findings and linked actions.",
      },
      {
        entity: "Action",
        holds: "Description, owner, due date, status and the evidence of closure.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial permit to work and HSE suites are mature and suit larger operators with many sites, standard permit types and a vendor already integrated with their maintenance systems.",
      },
      {
        title: "Extend",
        body: "Extend when your maintenance system handles work orders but permits, isolations and handover run on paper, or when incident reporting and action tracking sit in separate tools.",
      },
      {
        title: "Build",
        body: "Build when your permit types, regulations or sites are specific, when you operate offshore or in remote areas with limited connectivity, or when you want one safety record that links permits, isolations, competency and incidents.",
      },
    ],
    security: [
      {
        title: "Enforced sequence",
        body: "The system will not issue a permit until the required checks are complete, and it suspends a permit when conditions fail.",
      },
      {
        title: "Role and competency enforcement",
        body: "Only people with valid authority can issue, approve or work under a permit type.",
      },
      {
        title: "Offline resilience",
        body: "Permits and isolations remain available at the site during connection loss, with a defined fallback to paper and later reconciliation.",
      },
      {
        title: "Tamper-evident record",
        body: "Every step, signature and change is recorded with user and time, and retained for the period regulations require.",
      },
      {
        title: "Hazardous-area devices",
        body: "Field clients run on rated devices managed under your device policy.",
      },
    ],
    phases: [
      {
        title: "Permit process review",
        body: "We observe how permits, isolations and handovers work at a site and list the permit types, forms and sign-offs in use.",
      },
      {
        title: "Process and rule design",
        body: "Permit flows, isolation rules, competency checks and SIMOPS logic are agreed with operations, HSE and maintenance.",
      },
      {
        title: "Build and pilot at one site",
        body: "The core permit types and isolations go live at one site, with paper as a fallback.",
      },
      {
        title: "Add handover, incidents and actions",
        body: "Handover, incident reporting and action tracking are added, with safety indicators generated from the data.",
      },
      {
        title: "Roll out across sites",
        body: "Remaining sites and permit types follow, with feedback from supervisors shaping each release.",
      },
    ],
    proof: [
      { label: "Oil and gas projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
    ],
    faqs: [
      {
        q: "Does an electronic permit system make work safer?",
        a: "It makes the checks consistent and visible. It cannot replace supervision and judgement, but it stops a permit being issued with a step missing and shows conflicts between jobs before they start.",
      },
      {
        q: "What happens if the network is down at the site?",
        a: "Permits and isolations are available offline on site devices. A defined fallback applies if devices fail, and records are reconciled when the link returns.",
      },
      {
        q: "Can the system link to our maintenance system?",
        a: "Yes. Work orders create work requests, and permit status flows back so planners and crews see the same position.",
      },
      {
        q: "How are safety indicators produced?",
        a: "From the incident and permit data with definitions agreed in design, so reports to management and regulators come from the same records.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the permit definitions and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "oil-field-operations-mobile-app",
    vertical: "oil-gas",
    serviceId: "product-engineering",
    seoTitle: "Field Operations Mobile App for Oil and Gas | Deview",
    seoDescription:
      "Field operations mobile app for oil and gas: offline operator rounds and e-logs, well tests, checklists, QR and NFC tags, incidents, handover and secure sync.",
    kicker: "Digital product engineering · Oil and gas",
    h1: "Field operations mobile app for oil and gas",
    intro:
      "We build field operations mobile apps for oil and gas: offline operator rounds and electronic logs, well tests, checklists, equipment tagging with QR and NFC, incident and near-miss capture, and shift handover, synchronised to your production and maintenance systems when a connection is available. The app is built for gloves, glare and patchy networks, and you own the code.",
    modules: [
      {
        title: "Operator rounds",
        body: "Routes of equipment and points to inspect, with readings, status and notes captured at each stop and exceptions flagged immediately.",
      },
      {
        title: "Electronic logbooks",
        body: "Shift logs and event records that replace paper logbooks, searchable and tied to equipment and wells.",
      },
      {
        title: "Well tests and manual readings",
        body: "Entry of well test data, gauge readings and tank dips with validation against expected ranges and previous values.",
      },
      {
        title: "Checklists and procedures",
        body: "Start-up, shutdown and inspection checklists with required steps, photos and sign-offs.",
      },
      {
        title: "Equipment identification",
        body: "QR codes, barcodes and NFC tags that open the right asset record, with the position recorded where the device allows.",
      },
      {
        title: "Work requests and permits",
        body: "Creation of maintenance requests from the field and a view of permits and isolations affecting the area, from the safety system.",
      },
      {
        title: "Incident and near-miss capture",
        body: "A quick report with photos and location, sent to the safety system with the right classification.",
      },
      {
        title: "Shift handover",
        body: "Structured handover notes, open items and alarms for the incoming crew, with acknowledgement.",
      },
      {
        title: "Offline sync and device management",
        body: "Local storage, resumable upload, conflict handling, and managed rollout, remote wipe and updates under your device policy.",
      },
    ],
    diagram: {
      title: "Oil and gas field operations app: reference architecture",
      desc: "Operators use a rugged mobile app with rounds, logbooks, well tests, checklists, equipment tags, incidents and handover, working offline. A sync service connects it to production, maintenance and safety systems and to the central data platform.",
      leftLabel: "In the field",
      platformLabel: "Field app",
      rightLabel: "Back-end systems",
      platformTitle: "Field operations app",
      left: [
        ["Operators and technicians", "Rounds, logs, tests"],
        ["Equipment tags", "QR, barcode, NFC"],
        ["Rugged devices", "Tablets, rated phones"],
      ],
      modules: [
        ["Rounds and readings", "Routes, ranges, flags"],
        ["Logbooks and handover", "Shift records"],
        ["Well tests", "Entry, validation"],
        ["Checklists", "Steps, photos, sign-off"],
        ["Work and incidents", "Requests, reports"],
        ["Offline sync", "Queue, conflicts"],
      ],
      strip: "Device management · encryption · audit trail",
      right: [
        ["Production platform", "Readings, tests"],
        ["Maintenance system", "Work requests"],
        ["Safety system", "Permits, incidents"],
        ["Data platform", "History, analytics"],
      ],
    },
    diagramCaption:
      "Reference architecture: an offline-first app captures data once at the source and synchronises it to the systems that need it.",
    standards: [
      {
        name: "ATEX and IECEx",
        note: "Requirements for equipment in explosive atmospheres, which determine the devices the app can run on in classified areas.",
      },
      {
        name: "OWASP MASVS",
        note: "Mobile application security verification standard for storage, authentication, network and platform use.",
      },
      {
        name: "OpenAPI and sync protocols",
        note: "Interfaces for incremental synchronisation with idempotent writes and conflict detection.",
      },
      {
        name: "Mobile device management",
        note: "Enrolment, configuration, updates and remote wipe through the company's device management service.",
      },
      {
        name: "Accessibility and field ergonomics",
        note: "Large touch targets, high-contrast modes and glove-friendly input for outdoor use.",
      },
      {
        name: "Production and maintenance system interfaces",
        note: "The interfaces of the platforms the app writes to, agreed with their owners.",
      },
    ],
    dataModel: [
      {
        entity: "Round and stop",
        holds: "Route, equipment, expected readings, tolerances and schedule.",
      },
      {
        entity: "Reading and observation",
        holds: "Value, unit, time, operator, location and any photo or note.",
      },
      {
        entity: "Log entry",
        holds: "Shift, category, text, linked equipment or well and acknowledgements.",
      },
      {
        entity: "Checklist run",
        holds: "Template, steps completed, photos, sign-off and time.",
      },
      {
        entity: "Tag and asset link",
        holds: "Tag identifier, asset, location and the code or chip it is printed on.",
      },
      {
        entity: "Sync batch",
        holds: "Items uploaded, device, time, conflicts and resolutions.",
      },
      {
        entity: "Device and user",
        holds: "Enrolment, app version, policy state and the operator signed in.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial operator rounds and e-logbook products are good when your processes are standard and the vendor integrates with your production and maintenance systems.",
      },
      {
        title: "Extend",
        body: "Extend when a product covers rounds but not your well tests, checklists or the handoff to your own systems. We build those modules and the integration.",
      },
      {
        title: "Build",
        body: "Build when your operations, assets or languages are specific, when connectivity is poor and offline behaviour matters, or when you want one app for the whole field crew.",
      },
    ],
    security: [
      {
        title: "Encrypted local storage",
        body: "Data held on the device is encrypted, with a short lifetime and remote wipe for lost devices.",
      },
      {
        title: "Strong sign-in",
        body: "Biometric or badge-based sign-in suited to gloves, with sessions that end at shift change.",
      },
      {
        title: "Server-side rules",
        body: "Entitlements and validation are enforced in the back end, never only in the app.",
      },
      {
        title: "Safe offline behaviour",
        body: "Writes are queued, idempotent and conflict-checked, so nothing is lost or duplicated on reconnection.",
      },
      {
        title: "Managed distribution",
        body: "Signed builds distributed through your device management with controlled updates.",
      },
    ],
    phases: [
      {
        title: "Ride-along and process capture",
        body: "We spend time with operators on rounds and record the routes, readings, logs and handovers they actually perform.",
      },
      {
        title: "Design with the crew",
        body: "Screens are designed for field conditions and tried with operators, with the data model agreed with production and maintenance owners.",
      },
      {
        title: "Build the core and pilot on one route",
        body: "Rounds, readings and logbook go first, tested on a single area and device type.",
      },
      {
        title: "Extend to tests, checklists and incidents",
        body: "Well tests, checklists, incidents and handover are added, with the integrations to back-end systems.",
      },
      {
        title: "Roll out and support",
        body: "More areas and crews follow, with device rollout, training and support.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: Flutter field app", href: "/case-studies/agroplatforma" },
      { label: "EnerQuest: upstream production management pilot", href: "/case-studies/enerquest" },
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
    ],
    faqs: [
      {
        q: "Can the app work completely offline?",
        a: "Yes. Rounds, logs, tests and checklists work without a connection and queue their data. When a link is available the app uploads in the background and shows any conflicts for review.",
      },
      {
        q: "Which devices does it run on?",
        a: "Standard and rugged iOS and Android devices. In classified areas it runs on devices certified for the zone, such as ATEX or IECEx rated tablets.",
      },
      {
        q: "How do operators identify equipment?",
        a: "By scanning QR codes, barcodes or NFC tags on the equipment, which open the correct asset record and route stop.",
      },
      {
        q: "Does it replace paper logbooks?",
        a: "Yes, with a defined paper fallback for device failure and a process to enter those records afterwards.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "upstream-ops-spec",
    related: [
      { label: "Upstream production management system", href: "/solutions/upstream-production-management-system" },
      { label: "Permit to work and HSE management system", href: "/solutions/permit-to-work-and-hse-management-system" },
      { label: "Contractor and supplier portal", href: "/solutions/contractor-and-supplier-portal" },
    ],
    updated: "2026-10-15",
  },
];
