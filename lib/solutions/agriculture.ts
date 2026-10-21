import type { SolutionPage } from "./types";

export const AGRICULTURE_PAGES: SolutionPage[] = [
  {
    slug: "farm-management-erp",
    vertical: "agriculture",
    serviceId: "enterprise-platforms",
    seoTitle: "Farm Management ERP for Agricultural Enterprises | Deview",
    seoDescription:
      "Custom farm management ERP for agricultural enterprises: field register, crop planning, operations, inputs, labour, costs, yields and compliance records.",
    kicker: "Enterprise platforms · Agriculture",
    h1: "Farm management ERP for agricultural enterprises",
    intro:
      "We build custom farm management ERP for agricultural enterprises: a register of land and fields, crop planning and rotation, operations and machinery data, inputs and storage, seasonal labour, costs and margins per field, yields and the compliance records that buyers and regulators ask for. One system replaces the farm's spreadsheets and disconnected tools, and you own the code.",
    modules: [
      {
        title: "Land and field register",
        body: "Farms, fields, boundaries and soil zones on a map, with ownership or lease, area, crop history and the documents that belong to each parcel.",
      },
      {
        title: "Crop planning and rotation",
        body: "Plans by field and season with rotation rules, varieties, planting windows, expected yield and input budgets, compared with what actually happens.",
      },
      {
        title: "Field operations",
        body: "Planting, spraying, fertilising, harvesting and tillage recorded with date, area, product, rate, operator and machine, from the cab or the office.",
      },
      {
        title: "Machinery and telematics",
        body: "Machine register, hours and maintenance, with operation and position data imported from machine telematics and task files.",
      },
      {
        title: "Input inventory and storage",
        body: "Seed, fertiliser, crop protection and fuel in stores with batch and expiry, issued to fields and operations, with the link to purchase orders.",
      },
      {
        title: "Labour and payroll data",
        body: "Seasonal and permanent workers, time and piece-rate work by field and task, and the output to payroll.",
      },
      {
        title: "Costs and margin per field",
        body: "Costs from inputs, labour, machinery and overheads allocated to fields and crops, with margin per hectare and per tonne.",
      },
      {
        title: "Harvest, yield and grain logistics",
        body: "Yield by field and zone, harvest logistics to stores and buyers, with the handover to the grain system.",
      },
      {
        title: "Compliance and records",
        body: "Records for pesticide and fertiliser use, water, subsidies and certification schemes, produced from the operations recorded.",
      },
    ],
    diagram: {
      title: "Farm management ERP: reference architecture",
      desc: "Field crews, machine telematics, satellite and weather data and the finance system feed a farm management platform with a field register, crop planning, operations, inventory, labour, costing and compliance records. Outputs go to agronomists, management, buyers and regulators.",
      leftLabel: "Data sources",
      platformLabel: "Farm platform",
      rightLabel: "Consumers",
      platformTitle: "Farm management platform",
      left: [
        ["Crews and agronomists", "Operations, scouting"],
        ["Machines and sensors", "Telematics, task files"],
        ["Satellite and weather", "Imagery, forecasts"],
      ],
      modules: [
        ["Field register", "Map, parcels, history"],
        ["Crop planning", "Rotation, budgets"],
        ["Operations", "Rates, products, machines"],
        ["Inventory and labour", "Stores, hours"],
        ["Costing", "Margin per field"],
        ["Compliance records", "Use logs, schemes"],
      ],
      strip: "Offline capture · geodata · audit trail",
      right: [
        ["Management", "Margin, plans, yield"],
        ["Accounting and payroll", "Costs, hours"],
        ["Buyers and certifiers", "Evidence, records"],
        ["Regulators and subsidies", "Declarations"],
      ],
    },
    diagramCaption:
      "Reference architecture: what happens in the field is recorded once, and the costs, compliance records and plans are produced from it.",
    standards: [
      {
        name: "ISO 11783 (ISOBUS) and ISOXML",
        note: "The standard for communication between tractors and implements, and the task-file format for exchanging jobs and results with farm software.",
      },
      {
        name: "agroXML and open agricultural data formats",
        note: "Open schemas for field operations and agricultural data exchange.",
      },
      {
        name: "OGC and GeoJSON geospatial standards",
        note: "Field boundaries and maps in standard formats that other systems can read.",
      },
      {
        name: "Certification schemes",
        note: "Records required by schemes such as GLOBALG.A.P. and by buyers' supplier standards.",
      },
      {
        name: "Agricultural subsidy and environmental rules",
        note: "Declarations and records for support schemes and for nutrient, pesticide and water rules, which differ by country.",
      },
      {
        name: "GS1 identifiers",
        note: "Location and product identifiers used to link farm records to downstream traceability.",
      },
    ],
    dataModel: [
      {
        entity: "Farm, field and boundary",
        holds: "Parcel geometry, area, tenure, soil zones and the farm that manages it.",
      },
      {
        entity: "Season and crop plan",
        holds: "Crop, variety, planting and harvest windows, budget and expected yield.",
      },
      {
        entity: "Operation",
        holds: "Type, date, area covered, products and rates, operator, machine and weather.",
      },
      {
        entity: "Input product and stock",
        holds: "Product, batch, expiry, quantity, store and issues to operations.",
      },
      {
        entity: "Worker and timesheet",
        holds: "Person, role, field and task, hours or units and pay basis.",
      },
      {
        entity: "Cost entry",
        holds: "Source, amount, allocation to field and crop and the period.",
      },
      {
        entity: "Harvest record",
        holds: "Field, crop, quantity, quality, moisture and the destination store or buyer.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Farm management software is widely available and a good fit for farms with standard crops and equipment, especially where machine makers provide their own platforms.",
      },
      {
        title: "Extend",
        body: "Extend when the accounting system, machine platform and field records exist but are not connected, so costs per field and compliance records are assembled by hand each season.",
      },
      {
        title: "Build",
        body: "Build when you run a large or diverse enterprise across several farms and countries, with processing or trading attached, and need one system that matches the way you plan, cost and report.",
      },
    ],
    security: [
      {
        title: "Role-based access",
        body: "Farm managers, agronomists, operators, finance and auditors see only what they need, by farm and field.",
      },
      {
        title: "Offline resilience",
        body: "Field apps record without a signal and synchronise later, with conflicts shown for review.",
      },
      {
        title: "Records with attribution",
        body: "Each operation and product use is recorded with who, when and where, and changes keep the earlier value.",
      },
      {
        title: "Data ownership and sharing",
        body: "Data from machines and advisers is shared under explicit permissions and can be withdrawn.",
      },
      {
        title: "Backup and continuity",
        body: "Tested restore for season-critical data, with exports in open formats.",
      },
    ],
    phases: [
      {
        title: "Season walk-through",
        body: "We follow a season's records with managers, agronomists and finance and list every spreadsheet, form and system the data passes through.",
      },
      {
        title: "Model and workflow design",
        body: "The field, crop, operation and cost models are agreed together with the compliance records and the integrations needed.",
      },
      {
        title: "Build and load the field register",
        body: "Fields, boundaries and history are loaded and checked, then operations capture goes live for one farm.",
      },
      {
        title: "Add inventory, labour and costing",
        body: "Inputs, labour and costing follow, and the first margin per field report is compared with finance's own figures.",
      },
      {
        title: "Roll out across farms",
        body: "More farms, machinery data and compliance records are added in the rhythm of the season.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: AI field diagnostics and Flutter app", href: "/case-studies/agroplatforma" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Agronomist and field scouting app", href: "/solutions/agronomist-field-app" },
    ],
    faqs: [
      {
        q: "Is this for small farms or large enterprises?",
        a: "For agricultural enterprises: large farms and farming groups with several teams, farms and systems. Single small farms are usually better served by an off-the-shelf farm management product.",
      },
      {
        q: "Can it import data from our machines?",
        a: "Yes, where the machines or their platforms export task files or offer APIs, typically through ISOXML or the manufacturer's data interface. Operations and positions are matched to fields.",
      },
      {
        q: "How do you calculate margin per field?",
        a: "From the costs of inputs, labour, machinery and allocated overheads recorded against each field, and the revenue from the harvest allocated by yield, reconciled to the accounting system.",
      },
      {
        q: "Does it help with compliance?",
        a: "Yes. Application logs, input records and field histories are the same data as the operational records, so reports for buyers, certifiers and regulators are generated rather than compiled.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Grain and commodity management system", href: "/solutions/grain-and-commodity-management-system" },
      { label: "Precision agriculture sensor network", href: "/solutions/precision-agriculture-sensor-network" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "agricultural-dealer-and-ordering-platform",
    vertical: "agriculture",
    serviceId: "enterprise-platforms",
    seoTitle: "Agricultural Dealer and Ordering Platform Development | Deview",
    seoDescription:
      "Custom agricultural dealer and ordering platform: product catalogue, crop-based recommendations, quotes, orders, seasonal credit, delivery and sales analytics.",
    kicker: "Enterprise platforms · Agriculture",
    h1: "Agricultural dealer and ordering platform",
    intro:
      "We build custom agricultural dealer and ordering platforms for input suppliers, distributors and machinery dealers: a large product catalogue, recommendations by crop and problem, quotes and orders, seasonal credit and prepayment, delivery planning and sales analytics by region and crop. Advisers, dealers and farmers use one platform connected to your ERP and CRM, and you own the code.",
    modules: [
      {
        title: "Product catalogue",
        body: "Seeds, fertilisers, crop protection, machinery and parts with specifications, registrations, label rates and documents, kept in one governed catalogue.",
      },
      {
        title: "Recommendations by crop and problem",
        body: "Product suggestions by crop, growth stage, pest or disease and local registration, so the adviser sees what is permitted and available.",
      },
      {
        title: "Quotes and proposals",
        body: "Quotes with alternatives and substitution rules, drafted from a recommendation and approved by an adviser before they are sent.",
      },
      {
        title: "Orders and availability",
        body: "Ordering by farmers, advisers and dealers with live stock and delivery dates, and order changes tracked to dispatch.",
      },
      {
        title: "Credit, prepayment and terms",
        body: "Seasonal credit limits, prepayment, payment schedules and approval, with balances visible to the farmer and to the dealer.",
      },
      {
        title: "Delivery and warehouse planning",
        body: "Routes, vehicle loads and warehouse picking linked to orders, with delivery confirmation and proof of delivery.",
      },
      {
        title: "Dealer and distributor management",
        body: "Dealer accounts, territories, targets, rebates and loyalty programmes with transparent statements.",
      },
      {
        title: "Adviser tools",
        body: "A mobile workspace for advisers to see their farmers, past orders, field notes and recommendations, and to quote on the spot.",
      },
      {
        title: "Sales and demand analytics",
        body: "Sales by crop, region, product and season, with demand signals for planning production, stock and logistics.",
      },
    ],
    diagram: {
      title: "Agricultural dealer and ordering platform: reference architecture",
      desc: "Farmers, advisers and dealers use a platform with a product catalogue, recommendations, quotes, orders, credit, delivery planning, dealer management and analytics. The platform connects to the ERP, CRM, warehouse and logistics systems and to registration and weather data.",
      leftLabel: "Users",
      platformLabel: "Dealer platform",
      rightLabel: "Back-end systems",
      platformTitle: "Dealer and ordering platform",
      left: [
        ["Farmers", "Orders, balances"],
        ["Advisers", "Recommendations, quotes"],
        ["Dealers and distributors", "Stock, targets, statements"],
      ],
      modules: [
        ["Catalogue", "Products, registrations"],
        ["Recommendations", "Crop, stage, problem"],
        ["Quotes and orders", "Draft, approve, place"],
        ["Credit and terms", "Limits, schedules"],
        ["Delivery planning", "Loads, routes, proof"],
        ["Analytics", "Region, crop, season"],
      ],
      strip: "Registration rules · audit trail · offline adviser app",
      right: [
        ["ERP", "Orders, stock, invoices"],
        ["CRM", "Accounts, quotes"],
        ["Warehouse and logistics", "Picking, dispatch"],
        ["Registers and weather data", "Permitted products"],
      ],
    },
    diagramCaption:
      "Reference architecture: advisers and farmers work from one catalogue and one set of rules, and orders reach the ERP without rekeying.",
    standards: [
      {
        name: "Product registration and label rules",
        note: "The national registers and labels that limit which crop protection products can be used on which crops, at which rates, which the recommendation logic must respect.",
      },
      {
        name: "CRM and ERP integration",
        note: "Native integration with CRM platforms such as Salesforce, and ERP interfaces for orders, stock and invoices.",
      },
      {
        name: "OpenAPI and EDI",
        note: "Interfaces for dealers and distributors that order from their own systems.",
      },
      {
        name: "GS1 product identification",
        note: "GTINs and batch identifiers for seeds and inputs, linking orders to traceability.",
      },
      {
        name: "Consumer and credit regulation",
        note: "Rules on credit, disclosure and personal data in the markets served.",
      },
      {
        name: "OWASP MASVS",
        note: "Security verification for the adviser mobile app.",
      },
    ],
    dataModel: [
      {
        entity: "Product and registration",
        holds: "Specification, active ingredients, registered crops and rates, status and documents.",
      },
      {
        entity: "Farmer and farm",
        holds: "Contact, fields, crops, adviser, credit terms and history.",
      },
      {
        entity: "Recommendation",
        holds: "Crop, stage, problem, products ranked, reasoning and the adviser who approved it.",
      },
      {
        entity: "Quote and order",
        holds: "Lines, substitutions, prices, terms, status and the ERP reference.",
      },
      {
        entity: "Credit account",
        holds: "Limit, balance, schedule, payments and approvals.",
      },
      {
        entity: "Delivery",
        holds: "Load, route, delivery time, confirmation and proof.",
      },
      {
        entity: "Dealer agreement",
        holds: "Territory, targets, rebates and statements.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "General B2B commerce and CRM platforms cover catalogue, orders and accounts, and are a sound base when your agronomy rules are simple.",
      },
      {
        title: "Extend",
        body: "Extend your CRM or commerce platform with the agronomy knowledge, such as registration checks, recommendations and substitution rules, that general products lack.",
      },
      {
        title: "Build",
        body: "Build when the adviser's workflow is your competitive advantage, when the catalogue is large and rule-heavy, or when you want recommendations, quotes and analytics on one data trail.",
      },
    ],
    security: [
      {
        title: "Human approval of advice",
        body: "Recommendations and quotes go out only after an adviser reviews them, and the approver is recorded.",
      },
      {
        title: "Regulatory guardrails",
        body: "Registration and label checks run on every recommendation, and a product that is not registered for the crop cannot be quoted.",
      },
      {
        title: "Role-based and territory access",
        body: "Dealers and advisers see their own farmers, prices and territories.",
      },
      {
        title: "Offline adviser app",
        body: "Advisers work without a signal, and everything synchronises when they are back in coverage.",
      },
      {
        title: "Audit trail",
        body: "Recommendations, quotes, orders and credit decisions are stored with the data used.",
      },
    ],
    phases: [
      {
        title: "Adviser and dealer journey review",
        body: "We ride along with advisers and sit with the order desk and record how a recommendation becomes a quote, an order and a delivery.",
      },
      {
        title: "Catalogue and rules design",
        body: "The catalogue structure, registration data, substitution rules and the interfaces to the ERP and CRM are agreed.",
      },
      {
        title: "Build the adviser workflow",
        body: "Catalogue, recommendation and quote drafting come first, tested with a group of advisers.",
      },
      {
        title: "Add orders, credit and delivery",
        body: "Ordering, credit terms and delivery planning follow, connected to the ERP and warehouse.",
      },
      {
        title: "Open to dealers and farmers",
        body: "Dealers and farmers join, with analytics built on the same data trail.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: field-to-quote workflow with Salesforce", href: "/case-studies/agroplatforma" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Agronomist and field scouting app", href: "/solutions/agronomist-field-app" },
    ],
    faqs: [
      {
        q: "Can the platform handle a catalogue of tens of thousands of products?",
        a: "Yes. The catalogue is modelled with specifications and registrations so that search, filtering and recommendations work at that scale. The AgroPlatforma case study worked with a live catalogue of more than 20,000 products.",
      },
      {
        q: "How does it avoid recommending products that are not permitted?",
        a: "Registration and label data are part of the catalogue, and recommendations are filtered by crop, rate, region and registration status before an adviser sees them.",
      },
      {
        q: "Does it work with Salesforce?",
        a: "Yes. Quotes, accounts and orders can be created and updated in Salesforce, and the platform can run as a native layer on top of it, as in the AgroPlatforma project.",
      },
      {
        q: "Can farmers order directly?",
        a: "Yes, through a portal or app with their own prices and credit terms, with orders that need advice routed to their adviser.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the catalogue and the data stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Agronomist and field scouting app", href: "/solutions/agronomist-field-app" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "grain-and-commodity-management-system",
    vertical: "agriculture",
    serviceId: "enterprise-platforms",
    seoTitle: "Grain and Commodity Management System Development | Deview",
    seoDescription:
      "Custom grain and commodity management system: weighbridge and grading, storage and blending, contracts and position, price risk, settlement and logistics.",
    kicker: "Enterprise platforms · Agriculture",
    h1: "Grain and commodity management system",
    intro:
      "We build custom grain and commodity management systems for elevators, traders, processors and cooperatives: weighbridge and sampling integration, grading and quality adjustments, storage and blending, contracts and position, price risk, settlement and payments to growers, and logistics. The numbers on the scale, in the bin and on the contract agree, and you own the code.",
    modules: [
      {
        title: "Intake and weighbridge",
        body: "Truck and rail intake with integration to weighbridges, scales and sample probes, so weights and samples are captured without keying.",
      },
      {
        title: "Grading and quality",
        body: "Moisture, protein, test weight, impurities and other grade factors recorded and compared with contract specifications, with discounts and premiums calculated by rule.",
      },
      {
        title: "Storage and bin management",
        body: "Quantity and quality by bin, silo and warehouse, with transfers, blending, drying and shrink, and a record of every movement.",
      },
      {
        title: "Purchase and sales contracts",
        body: "Spot, forward, basis and delivered contracts with quantities, prices, delivery windows, tolerances and the standard terms they follow.",
      },
      {
        title: "Position management",
        body: "Physical position by commodity, crop year, location and delivery period, comparing contracted purchases and sales with stocks.",
      },
      {
        title: "Price risk and hedging",
        body: "Exposure to flat price and basis, hedge records against futures, and mark-to-market with the link to the risk team's limits.",
      },
      {
        title: "Settlement and grower payments",
        body: "Settlement sheets with quality adjustments, deductions and advances, payments to growers and the posting to accounting.",
      },
      {
        title: "Logistics and scheduling",
        body: "Delivery scheduling, truck queues, rail and barge planning and shipment documents, linked to contracts.",
      },
      {
        title: "Warehouse receipts and compliance",
        body: "Storage receipts, quality and quantity certificates and the records that regulators and counterparties require.",
      },
    ],
    diagram: {
      title: "Grain and commodity management system: reference architecture",
      desc: "Weighbridges, sample probes, growers and customers feed a grain platform with intake, grading, storage, contracts, position management, price risk, settlement and logistics. Outputs go to accounting, risk, logistics partners and regulators.",
      leftLabel: "Sources",
      platformLabel: "Grain platform",
      rightLabel: "Consumers",
      platformTitle: "Grain and commodity platform",
      left: [
        ["Weighbridges and probes", "Weights, samples"],
        ["Growers and suppliers", "Deliveries, contracts"],
        ["Customers and traders", "Sales, shipments"],
      ],
      modules: [
        ["Intake and grading", "Weights, quality"],
        ["Storage and blending", "Bins, movements"],
        ["Contracts", "Spot, forward, basis"],
        ["Position", "Physical and contracted"],
        ["Price risk", "Flat price, basis, hedges"],
        ["Settlement", "Adjustments, payments"],
      ],
      strip: "Grade rules · quantity reconciliation · audit trail",
      right: [
        ["Accounting", "Settlements, inventory"],
        ["Risk management", "Exposure, limits"],
        ["Logistics partners", "Loads, documents"],
        ["Regulators and auditors", "Records"],
      ],
    },
    diagramCaption:
      "Reference architecture: weights and grades are captured at intake, tracked through storage and contracts, and settled without rekeying.",
    standards: [
      {
        name: "Grain grading standards",
        note: "National or contractual grade standards for each commodity, implemented as rules for factors, tolerances and adjustments.",
      },
      {
        name: "Trade contract terms",
        note: "Standard contract forms such as those published by GAFTA, and Incoterms rules for delivery, referenced in contract setup.",
      },
      {
        name: "Weighing and metrology",
        note: "Legal-for-trade scale requirements and the integration of certified weighing devices.",
      },
      {
        name: "GS1 and traceability",
        note: "Identifiers and records linking intake lots to shipments for chain of custody.",
      },
      {
        name: "EDI and e-invoicing",
        note: "Messages and invoices for traders, shipping and customers.",
      },
      {
        name: "Accounting and commodity risk rules",
        note: "Inventory valuation, hedge accounting and exposure reporting under the entity's policies.",
      },
    ],
    dataModel: [
      {
        entity: "Delivery and weigh ticket",
        holds: "Vehicle, gross and tare weights, time, grower or supplier, commodity and location.",
      },
      {
        entity: "Sample and grade",
        holds: "Sample identifier, factors measured, grade result and adjustments.",
      },
      {
        entity: "Storage location and lot",
        holds: "Bin, silo or warehouse, commodity, quantity, quality profile and movements.",
      },
      {
        entity: "Contract",
        holds: "Parties, commodity, quantity, price basis, delivery window, terms and fulfilment.",
      },
      {
        entity: "Position",
        holds: "Physical and contracted quantities by commodity, period and location.",
      },
      {
        entity: "Hedge",
        holds: "Instrument, quantity, price, expiry and the exposure it covers.",
      },
      {
        entity: "Settlement",
        holds: "Delivery, adjustments, deductions, advances, amount and payment status.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commodity trading and risk management products and grain accounting packages are mature, and suit large traders and elevators that want established methods and support.",
      },
      {
        title: "Extend",
        body: "Extend when accounting and a contract system exist, but intake, grading and settlement are done on paper and spreadsheets. We build the intake and settlement layer and connect it.",
      },
      {
        title: "Build",
        body: "Build when you are a cooperative or processor with special contract types and quality rules, a mix of commodities or a region where packaged products do not fit local grading and payment practice.",
      },
    ],
    security: [
      {
        title: "Tamper-resistant weights",
        body: "Weights come directly from certified devices, and manual corrections need approval and a reason.",
      },
      {
        title: "Segregation of duties",
        body: "Intake, grading, pricing and settlement approvals are held by different roles.",
      },
      {
        title: "Contract and price control",
        body: "Changes to contracts and settlement prices are approved and logged, with the earlier values kept.",
      },
      {
        title: "Offline intake",
        body: "Intake sites keep working through network loss and synchronise afterwards.",
      },
      {
        title: "Audit trail",
        body: "Every weight, grade, movement and payment is traceable.",
      },
    ],
    phases: [
      {
        title: "Intake to settlement review",
        body: "We follow a delivery from the scale to the grower's payment and record every document, grade rule and approval.",
      },
      {
        title: "Rules and data design",
        body: "Grade rules, contract types, storage model and the interfaces to scales and accounting are agreed.",
      },
      {
        title: "Build and pilot at one site",
        body: "Intake, grading and storage go live at one site, with the old process as a fallback.",
      },
      {
        title: "Add contracts, position and settlement",
        body: "Contracts, position management, settlement and grower payments follow, reconciled to accounting.",
      },
      {
        title: "Roll out and add risk",
        body: "More sites, price risk, logistics and reporting are added through the season cycle.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: AI field diagnostics and Flutter app", href: "/case-studies/agroplatforma" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
    ],
    faqs: [
      {
        q: "Can the system integrate with our weighbridges?",
        a: "Yes. Certified scales and sample probes connect through their interfaces or a gateway, so weights and samples enter the system without keying and corrections are controlled.",
      },
      {
        q: "How are quality discounts and premiums calculated?",
        a: "By rules for each commodity and contract, from the measured grade factors, with the calculation shown on the settlement and the rule version recorded.",
      },
      {
        q: "Does it handle basis and forward contracts?",
        a: "Yes. Contracts record price basis, delivery windows and tolerances, and the position and fulfilment views compare contracts with stocks and deliveries.",
      },
      {
        q: "Can it connect to our accounting system?",
        a: "Yes. Settlements, inventory movements and payments post to accounting through its interfaces, and the two are reconciled.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Agricultural dealer and ordering platform", href: "/solutions/agricultural-dealer-and-ordering-platform" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "agronomist-field-app",
    vertical: "agriculture",
    serviceId: "product-engineering",
    seoTitle: "Agronomist and Field Scouting App Development | Deview",
    seoDescription:
      "Agronomist and field scouting app development: offline scouting, geotagged photos, AI crop diagnosis, sampling and recommendations tied to your catalogue and CRM.",
    kicker: "Digital product engineering · Agriculture",
    h1: "Agronomist and field scouting app",
    intro:
      "We build agronomist and field scouting apps for agricultural businesses: offline field visits with maps and geotagged photos, AI-assisted crop diagnosis, soil and tissue sampling, recommendations tied to your product catalogue and a report to the grower, synchronised to your CRM and farm data. The app is designed for a phone in a field with no signal, and you own the code.",
    modules: [
      {
        title: "Farm and field list",
        body: "The adviser's farmers, fields and history on one screen, available offline, with maps showing boundaries and the visit's position.",
      },
      {
        title: "Scouting visits",
        body: "Visit templates for crop and growth stage, with observations, pest and disease counts, weed and nutrient notes and pins on the map.",
      },
      {
        title: "Geotagged photos",
        body: "Photos taken in the app with location, date and field, attached to observations and kept in the field's history.",
      },
      {
        title: "AI-assisted diagnosis",
        body: "Analysis of photos and context to suggest likely problems and severity, with the adviser confirming or correcting the result.",
      },
      {
        title: "Sampling",
        body: "Soil and tissue sampling plans with sample identifiers, sample locations and results returned from laboratories to the field record.",
      },
      {
        title: "Recommendations from the catalogue",
        body: "Treatments and products suggested from the live catalogue, checked for registration, rates and compatibility, then sent for quote or order.",
      },
      {
        title: "Weather and growth stage context",
        body: "Local weather, forecasts and crop stage on the visit screen, so advice reflects conditions on the day.",
      },
      {
        title: "Tasks and follow-ups",
        body: "Tasks for the grower and the adviser with due dates and reminders, and the status of previous recommendations.",
      },
      {
        title: "Reports and synchronisation",
        body: "A visit report to the grower in a few taps, with data synchronised to the CRM, the farm system and analytics.",
      },
    ],
    diagram: {
      title: "Agronomist and field scouting app: reference architecture",
      desc: "Advisers use a mobile app offline in the field with scouting, geotagged photos, AI diagnosis, sampling and recommendations. A sync service connects it to the product catalogue, CRM, farm management and laboratory systems, and returns reports to growers.",
      leftLabel: "In the field",
      platformLabel: "Field app",
      rightLabel: "Back-end systems",
      platformTitle: "Agronomist field app",
      left: [
        ["Advisers", "Visits, notes, tasks"],
        ["Crops and fields", "Photos, GPS, samples"],
        ["Weather and growth data", "Forecast, stage"],
      ],
      modules: [
        ["Field list and maps", "Boundaries, history"],
        ["Scouting visit", "Observations, pins"],
        ["Photos and AI", "Diagnosis, severity"],
        ["Sampling", "IDs, locations, results"],
        ["Recommendations", "From live catalogue"],
        ["Reports and tasks", "To grower, follow-ups"],
      ],
      strip: "Offline-first · conflict handling · audit trail",
      right: [
        ["Product catalogue", "Registered products"],
        ["CRM", "Accounts, quotes"],
        ["Farm management", "Field records"],
        ["Laboratories", "Sample results"],
      ],
    },
    diagramCaption:
      "Reference architecture: the adviser captures observations once in the field, and the catalogue, CRM and farm records are updated from them.",
    standards: [
      {
        name: "BBCH scale",
        note: "The standard scale for describing the growth stages of crops and weeds, used in visit templates and recommendations.",
      },
      {
        name: "OGC and GeoJSON",
        note: "Field boundaries and observation locations in open geospatial formats.",
      },
      {
        name: "Registration and label rules",
        note: "National product registers and label rates applied to every recommendation.",
      },
      {
        name: "OWASP MASVS",
        note: "Mobile application security verification for storage, authentication and communication.",
      },
      {
        name: "Accessibility and field ergonomics",
        note: "Large controls, high contrast and one-handed use in bright light.",
      },
      {
        name: "Data protection law",
        note: "Consent and purpose for farmer and field data, and rules for sharing with third parties.",
      },
    ],
    dataModel: [
      {
        entity: "Farmer, farm and field",
        holds: "Contact, boundaries, crop, soil data and adviser assignment.",
      },
      {
        entity: "Visit",
        holds: "Date, adviser, field, crop stage, weather and summary.",
      },
      {
        entity: "Observation",
        holds: "Type, severity, location, notes and linked photos.",
      },
      {
        entity: "Photo and diagnosis",
        holds: "Image, position, AI suggestion, adviser confirmation and confidence.",
      },
      {
        entity: "Sample and result",
        holds: "Sample identifier, type, location, laboratory and results.",
      },
      {
        entity: "Recommendation",
        holds: "Products, rates, timing, registration check and status.",
      },
      {
        entity: "Task and follow-up",
        holds: "Description, owner, due date and outcome.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Several scouting and crop advisory apps exist, and are a good start for advisers whose needs are standard and whose data can live in the vendor's platform.",
      },
      {
        title: "Extend",
        body: "Extend a scouting app with your catalogue, registration rules and CRM, so recommendations and quotes come out of the same visit.",
      },
      {
        title: "Build",
        body: "Build when the app is how you serve your network, when diagnosis and recommendations are part of your proposition, or when your data must feed your own analytics and farm systems.",
      },
    ],
    security: [
      {
        title: "Offline data protection",
        body: "Data on the device is encrypted, sessions expire, and lost devices can be wiped remotely.",
      },
      {
        title: "Human confirmation of AI output",
        body: "AI diagnoses are suggestions that an adviser confirms or corrects, and the final decision is recorded.",
      },
      {
        title: "Consent and sharing",
        body: "Farmer data is shared only as agreed, and consent can be withdrawn.",
      },
      {
        title: "Safe synchronisation",
        body: "Updates are idempotent and conflict-checked, so no visit is lost or duplicated.",
      },
      {
        title: "Audit trail",
        body: "Observations, recommendations and changes carry user, time and location.",
      },
    ],
    phases: [
      {
        title: "Field ride-along",
        body: "We join advisers on visits and record what they look at, how they take notes and what they send afterwards.",
      },
      {
        title: "Design and data model",
        body: "Visit templates, diagnosis flows and the connections to the catalogue and CRM are designed with advisers and tested in the field.",
      },
      {
        title: "Build the offline core",
        body: "Field list, scouting, photos and sync come first, trialled by a group of advisers on real visits.",
      },
      {
        title: "Add AI, sampling and recommendations",
        body: "Diagnosis, sampling and recommendations from the catalogue are added, with quotes drafted in the CRM.",
      },
      {
        title: "Roll out and learn",
        body: "More advisers and regions follow, and the data trail is used to improve diagnosis and recommendations.",
      },
    ],
    proof: [
      { label: "AgroPlatforma: AI field diagnostics and Flutter app", href: "/case-studies/agroplatforma" },
      { label: "AI and machine learning development", href: "/services/ai-development" },
      { label: "Agricultural dealer and ordering platform", href: "/solutions/agricultural-dealer-and-ordering-platform" },
    ],
    faqs: [
      {
        q: "Does the app work with no mobile signal?",
        a: "Yes. Fields, history, templates and the catalogue are stored on the device, and visits, photos and notes are queued for upload and synchronised when coverage returns.",
      },
      {
        q: "How accurate is the AI diagnosis?",
        a: "It is a suggestion to the adviser, who confirms or corrects it. We measure accuracy on your crops and conditions, show confidence, and improve the models from the corrections.",
      },
      {
        q: "Can recommendations be turned into quotes?",
        a: "Yes. A confirmed recommendation can create a draft quote in your CRM, for approval, with products checked against registrations and availability.",
      },
      {
        q: "Which devices does it support?",
        a: "Standard iOS and Android phones and tablets, built with a cross-platform framework such as Flutter or natively where needed.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "agri-traceability-requirements",
    related: [
      { label: "Agricultural dealer and ordering platform", href: "/solutions/agricultural-dealer-and-ordering-platform" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "precision-agriculture-sensor-network",
    vertical: "agriculture",
    serviceId: "product-engineering",
    seoTitle: "Precision Agriculture Sensor Network and Platform | Deview",
    seoDescription:
      "Precision agriculture sensor network software: LoRaWAN soil and weather sensors, gateways, data platform, alerts and decision support integrated with farm systems.",
    kicker: "Digital product engineering · Agriculture",
    h1: "Precision agriculture sensor network",
    intro:
      "We build the software and integration for precision agriculture sensor networks: LoRaWAN and cellular soil, weather and water sensors, gateways, a data platform with alerts and decision support, and links to farm management and irrigation systems. We work around your sensors and gateways, not on their electronics, and you own the code and the data.",
    modules: [
      {
        title: "Device registry and provisioning",
        body: "Sensors, gateways and weather stations with identifiers, keys, locations, installation dates and field assignments, and a process to provision and replace them.",
      },
      {
        title: "Network server integration",
        body: "Connection to LoRaWAN network servers and cellular IoT platforms, receiving uplinks and passing downlink settings in a controlled way.",
      },
      {
        title: "Data ingestion and decoding",
        body: "Payload decoders for each sensor type, validation, unit conversion and storage in a time-series database with device and field context.",
      },
      {
        title: "Calibration and data quality",
        body: "Sensor calibration records, sanity limits, drift detection and flags for suspect readings, so decisions are not made on bad data.",
      },
      {
        title: "Field maps and dashboards",
        body: "Soil moisture, temperature, conductivity and weather by field and depth on maps and charts, with history by season.",
      },
      {
        title: "Alerts and thresholds",
        body: "Rules for frost, heat, water stress and disease pressure that notify the right person, with acknowledgement and escalation.",
      },
      {
        title: "Decision support",
        body: "Irrigation and spraying advice from sensor data, weather forecasts and crop models, shown with the reasoning for the adviser or grower.",
      },
      {
        title: "Integration with irrigation and farm systems",
        body: "Recommendations and readings exchanged with irrigation controllers and farm management through their interfaces, with any commands going through approval.",
      },
      {
        title: "Fleet health and maintenance",
        body: "Battery levels, signal quality, last-seen times and maintenance tasks for the sensor estate, with firmware updates handled through the device vendor's tools.",
      },
    ],
    diagram: {
      title: "Precision agriculture sensor network: reference architecture",
      desc: "Soil and weather sensors communicate through gateways and network servers into a data platform with a device registry, ingestion and decoding, data quality, field maps, alerts and decision support. Results go to growers, advisers, farm management and irrigation controllers.",
      leftLabel: "Field devices",
      platformLabel: "Sensor data platform",
      rightLabel: "Consumers",
      platformTitle: "Sensor data platform",
      left: [
        ["Soil and water sensors", "Moisture, temperature, EC"],
        ["Weather stations", "Rain, wind, humidity"],
        ["Gateways and network", "LoRaWAN, cellular"],
      ],
      modules: [
        ["Device registry", "Keys, locations, fields"],
        ["Ingestion", "Decode, validate, store"],
        ["Data quality", "Calibration, drift"],
        ["Maps and dashboards", "By field and depth"],
        ["Alerts", "Frost, stress, disease"],
        ["Decision support", "Irrigation, spraying"],
      ],
      strip: "Time-series store · device health · audit trail",
      right: [
        ["Growers and advisers", "Dashboards, alerts"],
        ["Farm management", "Field records"],
        ["Irrigation controllers", "Advice, schedules"],
        ["Analytics", "Models, history"],
      ],
    },
    diagramCaption:
      "Reference architecture: sensor readings are decoded, checked and put in field context before they drive alerts and advice.",
    standards: [
      {
        name: "LoRaWAN",
        note: "The LoRa Alliance's low-power wide-area protocol used by many soil, weather and water sensors, with regional parameters and security keys.",
      },
      {
        name: "MQTT and CoAP",
        note: "Lightweight messaging for devices and for passing data between network servers and the platform.",
      },
      {
        name: "NB-IoT and LTE-M",
        note: "Cellular low-power connectivity for sensors outside gateway coverage.",
      },
      {
        name: "OGC SensorThings API",
        note: "An open standard for exposing sensor data and observations over APIs.",
      },
      {
        name: "ISO 11783 and farm data interfaces",
        note: "Exchange of field data and prescriptions with machines and farm management software.",
      },
      {
        name: "Radio regulation",
        note: "Frequency band, power and duty-cycle rules for the country in which the network operates.",
      },
    ],
    dataModel: [
      {
        entity: "Device and gateway",
        holds: "Identifier, type, keys, location, install date, status and field.",
      },
      {
        entity: "Uplink and reading",
        holds: "Raw payload, decoded values, units, time, signal quality and validity flag.",
      },
      {
        entity: "Sensor calibration",
        holds: "Soil type, calibration curve, date and the person who made it.",
      },
      {
        entity: "Field and zone",
        holds: "Boundary, crop, soil zone and the sensors assigned.",
      },
      {
        entity: "Alert rule and event",
        holds: "Condition, recipients, severity, trigger, acknowledgement and outcome.",
      },
      {
        entity: "Recommendation",
        holds: "Advice, data and model used, status and the adviser's response.",
      },
      {
        entity: "Maintenance task",
        holds: "Device, issue, assignee, date and resolution.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Sensor vendors and farm platforms provide dashboards for their own devices, and are the quickest route for a single sensor brand on a single farm.",
      },
      {
        title: "Extend",
        body: "Extend a vendor platform when you have several sensor brands, or when readings must feed your farm management, irrigation and analytics systems.",
      },
      {
        title: "Build",
        body: "Build when you run a large estate or serve many growers, when you combine sensors with your own models and advice, or when sensor data is part of the service you sell.",
      },
    ],
    security: [
      {
        title: "Device identity and keys",
        body: "Per-device keys, secure join procedures and revocation of lost or stolen devices.",
      },
      {
        title: "Encrypted transport",
        body: "Encryption from device to platform, with the network server and the platform authenticating each other.",
      },
      {
        title: "Controlled commands",
        body: "Any downlink or irrigation command is authorised, rate-limited and logged.",
      },
      {
        title: "Data ownership",
        body: "Each grower owns its data, and sharing with advisers or vendors is explicit and revocable.",
      },
      {
        title: "Resilience",
        body: "Buffering at gateways, replay after outages and alerts when sensors go silent.",
      },
    ],
    phases: [
      {
        title: "Use case and site survey",
        body: "We agree the decisions the data must support and survey fields, coverage and existing devices with the grower and adviser.",
      },
      {
        title: "Architecture and device selection",
        body: "The network design, sensor types and platform integration are agreed, using devices from vendors you choose.",
      },
      {
        title: "Pilot on a few fields",
        body: "A small set of sensors and gateways is installed and connected, and the first dashboards and alerts are tested against what growers observe.",
      },
      {
        title: "Calibrate and tune",
        body: "Sensors are calibrated to each soil, and thresholds and advice are tuned with growers.",
      },
      {
        title: "Scale and integrate",
        body: "More fields are added, with integration to farm management and irrigation systems.",
      },
    ],
    proof: [
      { label: "Fizkultura: pipeline bringing several sources into one report", href: "/case-studies/fizkultura" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
    ],
    faqs: [
      {
        q: "Do you supply the sensors?",
        a: "No. We build the software and integration. Sensors, gateways and their installation come from the vendors you choose, and we connect to them through their standard interfaces.",
      },
      {
        q: "Which sensors and networks can you connect?",
        a: "Devices on LoRaWAN, cellular IoT or other networks that expose their data through a network server or API. Each sensor type needs a decoder and calibration, which we build and test.",
      },
      {
        q: "Can the system control irrigation?",
        a: "It can send advice to irrigation controllers and, where you choose, commands through their interfaces, with authorisation, limits and logging. Many growers start with advice only.",
      },
      {
        q: "How do you keep bad readings from driving decisions?",
        a: "Readings are validated against limits and each sensor's calibration and history. Suspect values are flagged and excluded from alerts and advice until checked.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the data and any models stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "IoT platform development", href: "/solutions/iot-platform-development" },
      { label: "Farm management ERP", href: "/solutions/farm-management-erp" },
      { label: "Agriculture software development", href: "/solutions/agriculture-software" },
    ],
    updated: "2026-10-15",
  },
];
