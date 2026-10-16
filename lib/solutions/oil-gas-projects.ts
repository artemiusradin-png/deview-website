import type { SolutionPage } from "./types";

export const OIL_GAS_PROJECTS_PAGES: SolutionPage[] = [
  {
    slug: "oil-and-gas-project-controls-software",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Oil and Gas Project Controls and Planning Software | Deview",
    seoDescription:
      "Custom oil and gas project controls software: WBS and cost control, schedule integration, progress measurement, change management, risk and contractor reporting.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Oil and gas project planning and controls software",
    intro:
      "We build custom oil and gas project planning and controls software for operators, joint ventures and engineering companies: work breakdown and cost control, schedule integration, physical progress measurement, change management, risk and contractor reporting, all on one data model. It replaces manual assembly of progress reports from spreadsheets and exported schedules, and you own the code.",
    modules: [
      {
        title: "Project and WBS structure",
        body: "Programmes, projects, work packages and cost breakdown structures, with the mapping from engineering scopes to the accounts they are charged to.",
      },
      {
        title: "Schedule integration",
        body: "Import and comparison of contractor and owner schedules from planning tools, with baselines, critical path views and float tracking.",
      },
      {
        title: "Progress measurement",
        body: "Physical progress by discipline and work package using agreed earning rules, rolled up to project and programme with the basis visible.",
      },
      {
        title: "Cost control",
        body: "Budget, commitments, actuals, accruals and forecast to complete, reconciled to the ledger and to contractor invoices.",
      },
      {
        title: "Earned value analysis",
        body: "Planned, earned and actual values with cost and schedule performance indices and trend, at any level of the structure.",
      },
      {
        title: "Change management",
        body: "Change requests and variation orders raised, assessed for cost and time, approved by authority and reflected in the budget and schedule.",
      },
      {
        title: "Risk and uncertainty",
        body: "Risk registers, quantified cost and schedule risk, contingency drawdown and mitigation actions with owners.",
      },
      {
        title: "Stage gates and front-end loading",
        body: "Gate criteria, deliverables and approvals for each phase from concept to final investment decision and execution.",
      },
      {
        title: "Reporting and contractor input",
        body: "Progress reports, S-curves and dashboards generated from the data, and a portal where contractors submit progress and forecasts.",
      },
    ],
    diagram: {
      title: "Oil and gas project controls: reference architecture",
      desc: "Schedules, accounting data, contractor submissions and engineering deliverables feed a project controls platform with a WBS and cost structure, schedule integration, progress measurement, cost control, earned value, change management, risk and stage gates. Reports go to project teams, management, partners and the board.",
      leftLabel: "Data sources",
      platformLabel: "Project controls platform",
      rightLabel: "Consumers",
      platformTitle: "Project controls platform",
      left: [
        ["Planning tools", "Baselines, schedules"],
        ["Accounting and procurement", "Actuals, commitments"],
        ["Contractors", "Progress, forecasts"],
      ],
      modules: [
        ["WBS and cost structure", "Budgets, mapping"],
        ["Schedule integration", "Baselines, critical path"],
        ["Progress and EVM", "Earned value, indices"],
        ["Cost control", "Commitments, forecast"],
        ["Change management", "VOs, approvals"],
        ["Risk and stage gates", "Contingency, gates"],
      ],
      strip: "Baseline history · reconciliation · audit trail",
      right: [
        ["Project teams", "Controls dashboards"],
        ["Management and board", "Portfolio status"],
        ["Partners", "Venture reports"],
        ["Finance", "Forecasts, capex"],
      ],
    },
    diagramCaption:
      "Reference architecture: planning, cost and contractor data meet in one model, so progress, cost and risk can be reported consistently.",
    standards: [
      {
        name: "ANSI/EIA-748 earned value management",
        note: "The earned value management systems standard, whose guidelines shape the progress and cost performance measures.",
      },
      {
        name: "AACE International recommended practices",
        note: "Cost estimating classes, cost engineering terminology and forecasting practice used in capital projects.",
      },
      {
        name: "ISO 21500 and ISO 21502",
        note: "International guidance on project and programme management concepts and processes.",
      },
      {
        name: "Front-end loading and stage-gate practice",
        note: "Phase gates and deliverable definitions for capital project development, agreed with the owner's governance.",
      },
      {
        name: "Schedule exchange formats",
        note: "Open and tool-specific exchange formats for importing schedules from planning software.",
      },
      {
        name: "Joint venture and contract requirements",
        note: "Reporting obligations under joint operating agreements and engineering, procurement and construction contracts.",
      },
    ],
    dataModel: [
      {
        entity: "Project and work package",
        holds: "Hierarchy, scope, owner, budget, schedule links and status.",
      },
      {
        entity: "Cost line",
        holds: "Budget, commitment, actual, accrual and forecast by account, contract and period.",
      },
      {
        entity: "Schedule and activity",
        holds: "Baseline and current dates, durations, logic, float and the source of each update.",
      },
      {
        entity: "Progress record",
        holds: "Quantities or steps completed, earning rule, percent complete and the evidence.",
      },
      {
        entity: "Change request",
        holds: "Scope, cost and time impact, approvals, status and the budget lines affected.",
      },
      {
        entity: "Risk",
        holds: "Description, probability and impact, response, owner and the contingency allocated.",
      },
      {
        entity: "Gate and deliverable",
        holds: "Gate criteria, deliverables, review outcome and decision record.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Established project controls suites and planning tools cover standard capital projects, and the right choice when your contractors and partners already work in them.",
      },
      {
        title: "Extend",
        body: "Extend when planning tools hold schedules and the ledger holds costs, but progress, forecasts, change and risk are combined by hand for every report. We build the integration and the reporting layer.",
      },
      {
        title: "Build",
        body: "Build when you run a portfolio with specific governance, report to partners in joint ventures, or want contractors to report into one system with your earning rules.",
      },
    ],
    security: [
      {
        title: "Baseline control",
        body: "Budgets, schedules and scope are baselined, and changes after that go through approval with the earlier figures kept.",
      },
      {
        title: "Role-based access",
        body: "Project teams, contractors and partners see only their own projects and the shared views agreed.",
      },
      {
        title: "Contractor submissions",
        body: "Contractor input is validated, versioned and accepted by an owner before it changes the record.",
      },
      {
        title: "Audit trail",
        body: "Every change to a forecast, progress figure or approval records user and time.",
      },
      {
        title: "Confidential commercial data",
        body: "Rates, commitments and negotiating positions are restricted to the people who need them.",
      },
    ],
    phases: [
      {
        title: "Controls process review",
        body: "We review how projects are controlled today, the reports produced and the tools and spreadsheets behind them.",
      },
      {
        title: "Structure and rule design",
        body: "The WBS, earning rules, forecast methods and approval authorities are agreed with project controls, finance and project managers.",
      },
      {
        title: "Build and load one project",
        body: "One live project is loaded and its reports reproduced, then compared with the current monthly report.",
      },
      {
        title: "Add integration and contractor input",
        body: "Schedule and accounting feeds are automated and a contractor portal is added for progress and forecast submissions.",
      },
      {
        title: "Extend to the portfolio",
        body: "More projects, risk, stage gates and portfolio reports follow, with partner reporting generated from the data.",
      },
    ],
    proof: [
      { label: "Oil and gas planning, control and reporting projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Contractor and supplier portal", href: "/solutions/contractor-and-supplier-portal" },
    ],
    faqs: [
      {
        q: "Does this replace our planning software?",
        a: "No. Planning tools remain where schedules are built. The controls platform imports baselines and updates, compares them and combines them with cost, progress and risk.",
      },
      {
        q: "How is physical progress measured?",
        a: "By earning rules agreed per discipline and work package, such as quantities installed or steps completed, so the percentage complete has a visible basis rather than a judgement.",
      },
      {
        q: "Can contractors report into the system?",
        a: "Yes, through a portal where they submit progress, forecasts and change requests. An owner reviews and accepts each submission before it affects the project record.",
      },
      {
        q: "Does it support reporting to joint venture partners?",
        a: "Yes. Partner views and reports are generated from the same data, with access limited to the ventures each partner shares.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Joint venture accounting and AFE management", href: "/solutions/joint-venture-accounting-and-afe-management" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
      { label: "Contractor and supplier portal", href: "/solutions/contractor-and-supplier-portal" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "joint-venture-accounting-and-afe-management",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Joint Venture Accounting, Cash Calls and AFE Management | Deview",
    seoDescription:
      "Custom joint venture accounting software: AFE workflow and partner approval, cash calls, joint interest billing, cost recovery statements and partner portals.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Joint venture accounting, cash calls and AFE management",
    intro:
      "We build custom joint venture accounting, cash calls and AFE management software for oil and gas operators and partners: authorisation for expenditure workflow with partner approval, cash calls, joint interest billing, cost recovery statements and a partner portal. It applies the terms of your joint operating agreement consistently, takes costs from your ledger and procurement systems, and you own the code.",
    modules: [
      {
        title: "Venture and partner register",
        body: "Ventures, blocks, partners, working interests and operating committee membership, with effective dates and the agreement terms that apply.",
      },
      {
        title: "AFE lifecycle",
        body: "Requests for authorisation of expenditure with scope, budget and supporting papers, through approval, supplements, close-out and final cost comparison.",
      },
      {
        title: "Partner voting and approval",
        body: "Distribution of AFEs to partners, recorded votes and deemed-approval rules under the agreement, with timers and reminders.",
      },
      {
        title: "Cost capture and allocation",
        body: "Costs imported from the ledger and procurement, coded to the venture and AFE and split to partners by interest with the rules of the agreement.",
      },
      {
        title: "Cash calls",
        body: "Forecast and call-up of funds by partner and currency, tracking of receipts, late payment interest and carry or default mechanics.",
      },
      {
        title: "Joint interest billing",
        body: "Monthly statements of costs by partner, account and AFE, with supporting detail and credits, in the format the partners expect.",
      },
      {
        title: "Cost recovery and profit sharing",
        body: "For production sharing contracts, cost recovery pools, ring-fencing, profit oil splits and the statements submitted to the host authority.",
      },
      {
        title: "Partner portal and queries",
        body: "A portal where partners see statements, AFEs and supporting documents, raise queries and approve, with a record of every response.",
      },
      {
        title: "Audit support",
        body: "Tracking of partner audit rights, exceptions raised, responses and agreed adjustments, with the evidence attached.",
      },
    ],
    diagram: {
      title: "Joint venture accounting and AFE management: reference architecture",
      desc: "Ledger, procurement and operations systems feed a joint venture platform with a venture and partner register, AFE workflow, partner voting, cost allocation, cash calls, billing and cost recovery. Partners use a portal, and outputs go to accounting and the host authority.",
      leftLabel: "Sources",
      platformLabel: "JV platform",
      rightLabel: "Consumers",
      platformTitle: "Joint venture platform",
      left: [
        ["General ledger", "Costs, accounts"],
        ["Procurement and contracts", "Commitments, invoices"],
        ["Operations and projects", "AFE requests, budgets"],
      ],
      modules: [
        ["Venture register", "Partners, interests"],
        ["AFE workflow", "Budget, approval, close"],
        ["Cost allocation", "By interest and rule"],
        ["Cash calls", "Forecast, receipts"],
        ["Billing", "JIB statements"],
        ["Cost recovery", "PSC pools, profit split"],
      ],
      strip: "Agreement rules · partner audit support · audit trail",
      right: [
        ["Partner portal", "Statements, votes"],
        ["Accounting", "Billing and receipts"],
        ["Host authority", "Cost recovery returns"],
        ["Management", "Venture reports"],
      ],
    },
    diagramCaption:
      "Reference architecture: costs flow from the ledger through the agreement's rules to partner statements, calls and returns.",
    standards: [
      {
        name: "Joint operating agreement and accounting procedure",
        note: "Model forms such as the AIPN model JOA and the COPAS accounting procedures, as adapted in your agreements.",
      },
      {
        name: "Production sharing contract terms",
        note: "Cost recovery limits, ring-fencing, profit oil sharing and reporting duties in each contract.",
      },
      {
        name: "Authority for expenditure governance",
        note: "Delegation, thresholds and supplementary approval rules under the agreement and internal policy.",
      },
      {
        name: "Accounting and tax rules",
        note: "Treatment of costs, currencies, withholding and recoverability under local law and accounting standards.",
      },
      {
        name: "Statement formats and exchange",
        note: "The statement layouts partners and authorities require, with machine-readable exports.",
      },
      {
        name: "Data protection and confidentiality",
        note: "Partner-level segregation of data and retention for the period the agreements require.",
      },
    ],
    dataModel: [
      {
        entity: "Venture and interest",
        holds: "Block or field, partners, interest percentages, operator and effective dates.",
      },
      {
        entity: "AFE and supplement",
        holds: "Scope, budget, version, approvals by partner, status and close-out figures.",
      },
      {
        entity: "Cost record",
        holds: "Source entry, account, AFE, venture, amount, currency and recoverability.",
      },
      {
        entity: "Partner allocation",
        holds: "Share of each cost by partner under the agreement rules, with rounding and adjustment.",
      },
      {
        entity: "Cash call",
        holds: "Forecast, amount by partner, due date, receipts, interest and status.",
      },
      {
        entity: "Statement",
        holds: "Period, partner, lines billed, credits, totals and delivery record.",
      },
      {
        entity: "Query and audit finding",
        holds: "Item, partner, exception, response, agreed adjustment and date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Established joint venture accounting packages are a good fit for operators with many ventures and standard agreements, and often come with partner portals and statement formats.",
      },
      {
        title: "Extend",
        body: "Extend when the ledger and an ERP handle costs but AFE approval, cash calls or partner communication run on email and spreadsheets. We build the workflow and the partner portal on top.",
      },
      {
        title: "Build",
        body: "Build when your agreements or production sharing terms are unusual, when you are a non-operating partner who needs to check operators' statements, or when you want consistent rules across ventures.",
      },
    ],
    security: [
      {
        title: "Partner segregation",
        body: "Each partner sees its own share and the data the agreement makes common, and nothing about other ventures.",
      },
      {
        title: "Approval enforcement",
        body: "AFE approvals and thresholds follow the agreement and internal authority, with the system refusing spending beyond approval.",
      },
      {
        title: "Rule governance",
        body: "Allocation rules and interests are changed only under approval with an effective date, and past periods are kept as they were.",
      },
      {
        title: "Reconciliation to the ledger",
        body: "Billed totals reconcile to the ledger each period, with differences shown before statements are issued.",
      },
      {
        title: "Audit trail",
        body: "All approvals, allocations, calls and adjustments record user and time.",
      },
    ],
    phases: [
      {
        title: "Agreement and process review",
        body: "We read the joint operating agreements and accounting procedures with commercial, finance and joint venture teams and map how costs flow today.",
      },
      {
        title: "Rule and workflow design",
        body: "Allocation rules, approval workflows and statement formats are specified and checked against sample periods.",
      },
      {
        title: "Build and back-test",
        body: "The platform is built and used to recompute past periods for one venture, comparing results with issued statements.",
      },
      {
        title: "Parallel run",
        body: "One venture is run in both processes for a period, with differences explained.",
      },
      {
        title: "Roll out and open the partner portal",
        body: "More ventures follow, and partners are given portal access for statements, AFEs and queries.",
      },
    ],
    proof: [
      { label: "Oil and gas planning, control and reporting projects, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "Oil and gas project planning and controls software", href: "/solutions/oil-and-gas-project-controls-software" },
    ],
    faqs: [
      {
        q: "Can the software apply our joint operating agreement's rules exactly?",
        a: "Yes. Allocation, approval and interest rules are modelled as data from the agreement, checked against sample periods and approved by finance and commercial before they are used.",
      },
      {
        q: "Does it replace our ERP?",
        a: "No. The ERP or ledger remains the source of costs. The joint venture platform adds the venture rules, AFE workflow, partner billing and cash calls.",
      },
      {
        q: "How do partners interact with the system?",
        a: "Through a portal where they see statements and supporting documents, vote on AFEs, raise queries and track cash calls. Each action is recorded.",
      },
      {
        q: "Can it handle production sharing contracts?",
        a: "Yes. Cost recovery pools, limits, ring-fencing and profit oil sharing are modelled per contract and reported in the format the host authority requires.",
      },
      {
        q: "Who owns the code and the rules?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Oil and gas project planning and controls software", href: "/solutions/oil-and-gas-project-controls-software" },
      { label: "Hydrocarbon production allocation software", href: "/solutions/hydrocarbon-production-allocation-software" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "engineering-data-and-document-management",
    vertical: "oil-gas",
    serviceId: "enterprise-platforms",
    seoTitle: "Engineering Data and Document Management System | Deview",
    seoDescription:
      "Custom engineering data and document management system: tag-centric data, document control, transmittals, as-built handover and links to maintenance and 3D models.",
    kicker: "Enterprise platforms · Oil and gas",
    h1: "Engineering data and document management",
    intro:
      "We build custom engineering data and document management systems for oil and gas and process industries: tag-centric data for equipment and instruments, document control for drawings and datasheets, transmittals between owner and contractors, and as-built handover that is complete when the plant starts up. Engineering information stays consistent from design to operation, and you own the code.",
    modules: [
      {
        title: "Tag and equipment register",
        body: "A register of tags, equipment, lines, instruments and systems with their attributes, linked to the documents that describe them and to the maintenance system.",
      },
      {
        title: "Document control",
        body: "Numbering, metadata, revisions and statuses for drawings, datasheets, specifications and reports, with a clear record of the current approved version.",
      },
      {
        title: "Review and approval workflows",
        body: "Issue for review, comment resolution, approval and issue for construction, with deadlines and escalation for reviewers.",
      },
      {
        title: "Transmittals",
        body: "Formal exchange of documents with contractors and vendors, with receipts, response deadlines and a complete register of what was sent and received.",
      },
      {
        title: "Data and document links",
        body: "Links between tag data and documents, so a datasheet's values and the register agree and discrepancies are flagged.",
      },
      {
        title: "Management of change",
        body: "Engineering changes recorded against affected tags and documents, with approvals and the update of drawings and data.",
      },
      {
        title: "As-built and handover",
        body: "Handover requirements defined per discipline, with completeness tracked as contractors deliver and acceptance by the operator.",
      },
      {
        title: "Viewing, redlines and search",
        body: "Browser viewing of drawings and documents, redlining, and full-text and tag-based search across the whole estate.",
      },
      {
        title: "Integration with design and operations",
        body: "Interfaces to design tools, 3D models, the maintenance system, the integrity system and the data platform.",
      },
    ],
    diagram: {
      title: "Engineering data and document management: reference architecture",
      desc: "Design tools, contractors and vendors and legacy archives feed an engineering information platform with a tag register, document control, review workflows, transmittals, data and document links, management of change and handover. Outputs go to operations, maintenance, integrity and the data platform.",
      leftLabel: "Sources",
      platformLabel: "Engineering information platform",
      rightLabel: "Consumers",
      platformTitle: "Engineering data and documents",
      left: [
        ["Design tools and 3D", "Drawings, models, data"],
        ["Contractors and vendors", "Deliverables, transmittals"],
        ["Legacy archives", "Scans, old systems"],
      ],
      modules: [
        ["Tag register", "Equipment, lines, instruments"],
        ["Document control", "Numbers, revisions"],
        ["Review workflows", "Comments, approvals"],
        ["Transmittals", "Sent, received, due"],
        ["Management of change", "Affected tags, documents"],
        ["Handover", "Completeness by discipline"],
      ],
      strip: "Data and document consistency · search · audit trail",
      right: [
        ["Operations", "Current approved information"],
        ["Maintenance system", "Equipment data"],
        ["Integrity system", "Design and inspection data"],
        ["Data platform", "Tags and documents"],
      ],
    },
    diagramCaption:
      "Reference architecture: tags and documents are managed together, so what the register says and what the datasheet says cannot drift apart.",
    standards: [
      {
        name: "CFIHOS",
        note: "The Capital Facilities Information Handover Specification, which defines the information a project hands over to operations, by equipment class.",
      },
      {
        name: "ISO 15926",
        note: "Data integration and exchange standard for process plants across their life cycle, used for shared reference data.",
      },
      {
        name: "ISO 14224 taxonomy",
        note: "Equipment classes and failure codes for consistent maintenance and reliability data.",
      },
      {
        name: "Document numbering and status conventions",
        note: "The owner's or the project's coding, review status and revision rules, applied consistently by the system.",
      },
      {
        name: "PDF/A and open formats",
        note: "Long-term archive formats for approved documents and drawings.",
      },
      {
        name: "Data retention requirements",
        note: "Statutory and company retention periods for engineering records, which can run for the life of the asset.",
      },
    ],
    dataModel: [
      {
        entity: "Tag and equipment",
        holds: "Tag number, class, attributes, system, location and parent-child relationships.",
      },
      {
        entity: "Document and revision",
        holds: "Number, title, type, discipline, revision history, status and file.",
      },
      {
        entity: "Review and comment",
        holds: "Reviewer, comment, response, resolution and the revision it applies to.",
      },
      {
        entity: "Transmittal",
        holds: "Documents sent, sender, recipient, purpose, due response and receipt.",
      },
      {
        entity: "Tag-document link",
        holds: "Which documents describe which tags, and the data items compared between them.",
      },
      {
        entity: "Change record",
        holds: "Change description, affected tags and documents, approvals and completion.",
      },
      {
        entity: "Handover requirement",
        holds: "Required deliverables and data by class, status, acceptance and open items.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Commercial engineering information management products are mature for large projects and plants, and often integrate with the major design tools you already use.",
      },
      {
        title: "Extend",
        body: "Extend when a document management system holds files but tag data, handover completeness and the links between them are tracked separately. We build the data layer and the handover logic on top.",
      },
      {
        title: "Build",
        body: "Build when you operate a mid-sized estate, have many legacy sources to consolidate, or need handover and change processes to follow your own standards.",
      },
    ],
    security: [
      {
        title: "Controlled access",
        body: "Access by project, discipline and company, with contractors seeing only their deliverables and the references they need.",
      },
      {
        title: "Revision integrity",
        body: "Approved versions cannot be overwritten, and superseded revisions remain available for reference.",
      },
      {
        title: "Export and sharing controls",
        body: "Watermarking, controlled downloads and expiry on shared links for sensitive drawings.",
      },
      {
        title: "Retention and archive",
        body: "Retention rules by document type and archive in open formats, with legal holds respected.",
      },
      {
        title: "Audit trail",
        body: "Views, changes, approvals and transmittals recorded with user and time.",
      },
    ],
    phases: [
      {
        title: "Information inventory",
        body: "We list where drawings, datasheets and tag data live today, what must be handed over and the problems operations and maintenance report.",
      },
      {
        title: "Model and rules design",
        body: "The tag classes, document types, numbering and status rules are agreed with engineering and the information manager.",
      },
      {
        title: "Build and load a priority area",
        body: "The register and document control go first, loaded with one facility's or one project's information and checked for completeness.",
      },
      {
        title: "Add workflows and transmittals",
        body: "Review, change and transmittal processes are added and used on a live project.",
      },
      {
        title: "Handover and extend",
        body: "Handover tracking, further facilities and the integrations with maintenance and integrity systems follow.",
      },
    ],
    proof: [
      { label: "Oil and gas engineering data management work, 2010 to 2020", href: "/industries/oil-and-gas" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
    ],
    faqs: [
      {
        q: "Why manage tags and documents together?",
        a: "Because most errors arise when the register says one thing and the datasheet another. When both are in one model, a mismatch is a flagged exception instead of a surprise at commissioning.",
      },
      {
        q: "Can the system handle handover from a large capital project?",
        a: "Yes. Handover requirements are defined per equipment class and discipline, completeness is tracked as contractors deliver, and the operator accepts the data against those requirements.",
      },
      {
        q: "Does it replace our design tools?",
        a: "No. Design tools remain where engineering is done. The system holds the controlled outputs, the tag data and the history, and links to the design tools.",
      },
      {
        q: "Can you migrate our legacy archives?",
        a: "Yes. Migration is planned by value and risk, with metadata extraction and reconciliation reports that show what was loaded, what failed and why.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code and the data stay yours.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Exploration data management system", href: "/solutions/exploration-data-management-system" },
      { label: "Asset integrity management system", href: "/solutions/asset-integrity-management-system" },
      { label: "Oil and gas project planning and controls software", href: "/solutions/oil-and-gas-project-controls-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "contractor-and-supplier-portal",
    vertical: "oil-gas",
    serviceId: "product-engineering",
    seoTitle: "Contractor and Supplier Portal for Industrial Companies | Deview",
    seoDescription:
      "Custom contractor and supplier portal: prequalification, tenders, document exchange, progress and invoice submission, compliance expiry tracking and scorecards.",
    kicker: "Digital product engineering · Oil and gas",
    h1: "Contractor and supplier portal for industrial companies",
    intro:
      "We build a custom contractor and supplier portal for industrial companies, including oil and gas operators: registration and prequalification, tender invitations and bids, document exchange, progress and invoice submission, compliance document tracking and performance scorecards. One secure place replaces email chains and shared drives between the company and its contractors, and you own the code.",
    modules: [
      {
        title: "Registration and prequalification",
        body: "Supplier onboarding with company details, financial, safety, quality and insurance documents, scored against your prequalification criteria.",
      },
      {
        title: "Compliance document tracking",
        body: "Certificates, insurance, licences and competencies with expiry alerts, and automatic restrictions when a mandatory document lapses.",
      },
      {
        title: "Tender and RFQ management",
        body: "Invitations, clarifications, bid submission and comparison, with deadlines, addenda and a sealed-bid option.",
      },
      {
        title: "Contracts and purchase orders",
        body: "A view of awarded contracts, purchase orders and call-offs, with the scope, rates and documents that govern them.",
      },
      {
        title: "Document exchange and transmittals",
        body: "Controlled exchange of drawings, reports and deliverables with acknowledgement and response deadlines, linked to document control.",
      },
      {
        title: "Progress, timesheets and forecasts",
        body: "Contractors submit progress, timesheets and forecasts against the work packages they hold, for owner review and acceptance.",
      },
      {
        title: "Invoicing and payment status",
        body: "Electronic invoice submission, matching to orders and receipts, approval status and payment tracking.",
      },
      {
        title: "Site access and induction",
        body: "Registration of personnel for site access, induction and training records, and links to permits and gate systems where used.",
      },
      {
        title: "Performance and scorecards",
        body: "Scorecards from safety, quality, schedule and commercial data, used in reviews and in future tender decisions.",
      },
    ],
    diagram: {
      title: "Contractor and supplier portal: reference architecture",
      desc: "Contractors and suppliers use a portal with prequalification, compliance tracking, tenders, contracts, document exchange, progress and invoice submission, site access and scorecards. The portal connects to procurement, finance, document control, project controls and safety systems.",
      leftLabel: "External users",
      platformLabel: "Supplier portal",
      rightLabel: "Company systems",
      platformTitle: "Contractor and supplier portal",
      left: [
        ["Contractors", "Progress, documents, invoices"],
        ["Suppliers and bidders", "Registration, bids"],
        ["Company staff", "Review, award, approve"],
      ],
      modules: [
        ["Prequalification", "Criteria, scoring"],
        ["Compliance tracking", "Expiry, restrictions"],
        ["Tenders and RFQs", "Invite, bid, compare"],
        ["Document exchange", "Transmittals"],
        ["Progress and invoices", "Submit, approve, pay"],
        ["Scorecards", "Safety, quality, schedule"],
      ],
      strip: "Strong authentication · audit trail · notifications",
      right: [
        ["Procurement and ERP", "Orders, suppliers"],
        ["Finance", "Invoices, payments"],
        ["Document control", "Deliverables"],
        ["Project controls, safety", "Progress, access"],
      ],
    },
    diagramCaption:
      "Reference architecture: contractors and suppliers deal with the company through one portal that is wired to its procurement, finance and project systems.",
    standards: [
      {
        name: "Electronic invoicing standards",
        note: "UBL and Peppol BIS billing formats, or the local e-invoicing scheme, for invoices that match orders automatically.",
      },
      {
        name: "OpenAPI",
        note: "Interfaces to the ERP, procurement, document control and project controls systems.",
      },
      {
        name: "OAuth 2.0 and OpenID Connect",
        note: "Sign-in for supplier staff, including federation with supplier identity providers.",
      },
      {
        name: "Procurement and anti-corruption policy",
        note: "Tender rules, conflict-of-interest declarations and due diligence evidence that the system keeps.",
      },
      {
        name: "Supplier prequalification criteria",
        note: "Safety, quality, financial and sanctions criteria defined by the company and scored in the system.",
      },
      {
        name: "Data protection law",
        note: "Personal data of supplier staff, site access records and retention.",
      },
    ],
    dataModel: [
      {
        entity: "Supplier and contact",
        holds: "Legal entity, categories, contacts, status and prequalification score.",
      },
      {
        entity: "Compliance document",
        holds: "Type, issuer, validity, file and review result.",
      },
      {
        entity: "Tender and bid",
        holds: "Scope, deadline, invitees, clarifications, bids and evaluation.",
      },
      {
        entity: "Contract and order",
        holds: "Parties, scope, rates, value, dates and linked documents.",
      },
      {
        entity: "Progress and timesheet submission",
        holds: "Period, work package, quantities, hours, reviewer and acceptance.",
      },
      {
        entity: "Invoice",
        holds: "Reference, amounts, matched order and receipt, approvals and payment status.",
      },
      {
        entity: "Scorecard",
        holds: "Measures by period, scores, reviewer comments and actions agreed.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Supplier management and e-procurement products are well established, and the right start if your needs are standard and your ERP vendor offers one.",
      },
      {
        title: "Extend",
        body: "Extend when the ERP handles orders and payments but onboarding, compliance, progress submissions and document exchange are spread across email and tools. We build the portal and connect it to the ERP.",
      },
      {
        title: "Build",
        body: "Build when your contractor processes are specific, when many projects and ventures need different views, or when the portal should tie together procurement, project controls and safety.",
      },
    ],
    security: [
      {
        title: "External access control",
        body: "Multi-factor authentication for supplier users, access limited to their own contracts and documents, and fast removal of leavers.",
      },
      {
        title: "Sealed bids",
        body: "Bids are encrypted until the opening time, with a log of who opened what and when.",
      },
      {
        title: "Document protection",
        body: "Malware scanning on upload, watermarking and controlled download of sensitive documents.",
      },
      {
        title: "Segregation of duties",
        body: "Changes to bank details, awards and payment approvals need separate roles.",
      },
      {
        title: "Audit trail",
        body: "Every submission, approval and change is recorded with user and time.",
      },
    ],
    phases: [
      {
        title: "Contractor journey review",
        body: "We interview procurement, project teams and several contractors and map how onboarding, tenders, documents and invoices flow today.",
      },
      {
        title: "Process and integration design",
        body: "The portal's journeys, the criteria and rules and the interfaces to the ERP and document control are agreed.",
      },
      {
        title: "Build the first journeys",
        body: "Registration, compliance tracking and document exchange go first, then tenders, progress and invoices.",
      },
      {
        title: "Pilot with selected suppliers",
        body: "A small group of contractors and suppliers use the portal on live work while support and feedback are collected.",
      },
      {
        title: "Open to all and extend",
        body: "All suppliers move across, with scorecards and further integrations added.",
      },
    ],
    proof: [
      { label: "Covenant Desk: one portal across lending companies", href: "/case-studies/covenant-desk" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Oil and gas project planning and controls software", href: "/solutions/oil-and-gas-project-controls-software" },
    ],
    faqs: [
      {
        q: "Do contractors have to learn a new system?",
        a: "Portals work when they are simpler than email. We design journeys with a few contractors, keep the screens short and let them upload in bulk and sign in with their own identity provider where possible.",
      },
      {
        q: "Can the portal connect to our ERP?",
        a: "Yes. Suppliers, orders, receipts and payments sync with the ERP, and invoices are matched automatically where the data allows.",
      },
      {
        q: "How do you stop expired certificates being ignored?",
        a: "Documents have expiry dates and alerts to the supplier and the owner. For mandatory items the system can restrict new work orders or site access until a valid document is uploaded.",
      },
      {
        q: "Can it be used across several projects or ventures?",
        a: "Yes. Contractors see only the projects they hold, and venture or project teams see only their own contracts, with company-level views for procurement.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, the designs and the data stay yours.",
      },
    ],
    assetId: "project-controls-requirements",
    related: [
      { label: "Oil and gas project planning and controls software", href: "/solutions/oil-and-gas-project-controls-software" },
      { label: "Engineering data and document management", href: "/solutions/engineering-data-and-document-management" },
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
    ],
    updated: "2026-10-15",
  },
];
