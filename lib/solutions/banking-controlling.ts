import type { SolutionPage } from "./types";

export const BANKING_CONTROLLING_PAGES: SolutionPage[] = [
  {
    slug: "treasury-and-liquidity-management-system",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Treasury and Liquidity Management System Development | Deview",
    seoDescription:
      "Custom treasury and liquidity management system for banks: cash positioning, liquidity gap, LCR and NSFR inputs, FX exposure, transfer pricing and limits.",
    kicker: "Enterprise platforms · Banking",
    h1: "Treasury and liquidity management system",
    intro:
      "We build custom treasury and liquidity management systems for banks and financial institutions: cash positioning across currencies and correspondents, intraday liquidity monitoring, liquidity gap and regulatory ratio inputs, FX exposure, funds transfer pricing and limits. The system takes its data from your core, payment and trading systems, gives treasury one live view, and is yours to own and change.",
    modules: [
      {
        title: "Cash positioning",
        body: "A live position by currency, account and correspondent, built from payment messages, statements and ledger balances, with projected end-of-day positions.",
      },
      {
        title: "Intraday liquidity monitoring",
        body: "Intraday inflows and outflows, peak usage, available liquidity and time-specific obligations, using the monitoring tools supervisors define.",
      },
      {
        title: "Liquidity gap and maturity ladder",
        body: "Contractual and behavioural cash flows bucketed by maturity, with the net funding gap by currency and entity.",
      },
      {
        title: "Regulatory liquidity inputs",
        body: "Data for liquidity coverage and net stable funding calculations, with the classification of assets and flows documented and reproducible.",
      },
      {
        title: "Stress and scenario analysis",
        body: "Run-off assumptions, market and idiosyncratic stress scenarios and their effect on the gap and on available buffers.",
      },
      {
        title: "FX exposure and hedging",
        body: "Exposures aggregated across the bank, hedge deals captured and linked to what they hedge, with open positions against limits.",
      },
      {
        title: "Funds transfer pricing",
        body: "Curves and methods that charge business lines for funding and credit them for deposits, with the allocation stored for reporting.",
      },
      {
        title: "Limits and alerts",
        body: "Limits by currency, counterparty, tenor and liquidity measure, with early warning at agreed thresholds and a record of breaches and approvals.",
      },
      {
        title: "Deal capture and confirmation",
        body: "Money market, FX and repo deals captured, matched with confirmations and sent to settlement and accounting.",
      },
    ],
    diagram: {
      title: "Treasury and liquidity management system: reference architecture",
      desc: "Core banking, payment systems, trading and market data feed a treasury platform with cash positioning, intraday liquidity, a maturity ladder, regulatory ratio inputs, stress scenarios, FX exposure and limits. Outputs go to treasury dealers, risk and ALCO reporting, regulators and accounting.",
      leftLabel: "Data sources",
      platformLabel: "Treasury platform",
      rightLabel: "Consumers",
      platformTitle: "Treasury and liquidity platform",
      left: [
        ["Core banking and ledgers", "Balances, cash flows"],
        ["Payment systems", "Messages, statements"],
        ["Trading and market data", "Deals, rates, curves"],
      ],
      modules: [
        ["Cash positioning", "By currency, account"],
        ["Intraday liquidity", "Peaks, obligations"],
        ["Maturity ladder", "Gap by bucket"],
        ["Regulatory inputs", "LCR and NSFR data"],
        ["FX and hedging", "Exposure, hedges"],
        ["Limits and FTP", "Alerts, pricing"],
      ],
      strip: "Scenario engine · lineage · audit trail",
      right: [
        ["Treasury dealers", "Positions, deals"],
        ["ALCO and risk", "Gaps, stress results"],
        ["Regulatory reporting", "Liquidity returns"],
        ["Accounting", "Deals, hedge entries"],
      ],
    },
    diagramCaption:
      "Reference architecture: one live liquidity picture built from ledgers, payments and deals, feeding dealers, risk and regulatory reports.",
    standards: [
      {
        name: "Basel III liquidity standards",
        note: "The liquidity coverage ratio and net stable funding ratio, as implemented in the bank's jurisdiction, including local liquidity rules.",
      },
      {
        name: "BCBS intraday liquidity monitoring tools",
        note: "The Basel Committee's tools for daily maximum usage, available intraday liquidity and time-specific obligations.",
      },
      {
        name: "ISO 20022 camt messages",
        note: "Intraday reports, statements and notifications as the basis for the live position.",
      },
      {
        name: "FpML and the ISDA Common Domain Model",
        note: "Standard representations of derivative trades for capture, confirmation and downstream processing.",
      },
      {
        name: "IFRS 9 hedge accounting",
        note: "Hedge designation and effectiveness data passed to accounting.",
      },
      {
        name: "Supervisory expectations on liquidity risk",
        note: "Governance, stress testing and contingency planning that the data and reports must support.",
      },
    ],
    dataModel: [
      {
        entity: "Cash flow",
        holds: "Amount, currency, value date, source, type, certainty and the contract or message behind it.",
      },
      {
        entity: "Position",
        holds: "Balances and projected balances by account, correspondent, currency and time of day.",
      },
      {
        entity: "Deal",
        holds: "Instrument, counterparty, terms, status, confirmation and linked hedge relationship.",
      },
      {
        entity: "Liquidity bucket and classification",
        holds: "Maturity bucket, asset or flow category and the rule used to assign it.",
      },
      {
        entity: "Scenario",
        holds: "Assumptions, shocks, run-off rates, results and the person who approved the set.",
      },
      {
        entity: "Limit and breach",
        holds: "Limit definition, utilisation, thresholds, breach record and approval.",
      },
      {
        entity: "FTP rate and allocation",
        holds: "Curve, method, tenor, spread and the amount charged or credited to each unit.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "A packaged treasury or ALM suite is the right choice for large banks with complex instruments, where vendors already cover the regulatory ratios and the market data they need.",
      },
      {
        title: "Extend",
        body: "Extend when a vendor covers deals and risk but you lack a live cash and intraday view, bespoke stress scenarios or internal funds transfer pricing that fits your business lines.",
      },
      {
        title: "Build",
        body: "Build when you are a smaller bank, a payment firm or an emerging-market institution whose needs are narrower than a suite's, or you want the liquidity logic and data to be yours.",
      },
    ],
    security: [
      {
        title: "Segregation of duties",
        body: "Deal capture, confirmation, settlement and limit changes are held by different roles, with approval enforced by the system.",
      },
      {
        title: "Assumption governance",
        body: "Run-off rates, behavioural assumptions and curves are versioned and approved, so each report can be reproduced.",
      },
      {
        title: "Audit trail",
        body: "Every figure traces to its source flow, rule and time, and every change is stored with the previous value.",
      },
      {
        title: "Role-based access",
        body: "Dealers, risk, finance and audit see the views they need and no more.",
      },
      {
        title: "Resilience",
        body: "Recovery objectives matched to the intraday cycle, with tested restore and replay of intraday data.",
      },
    ],
    phases: [
      {
        title: "Liquidity process mapping",
        body: "We map how treasury builds its positions and ratios today, with the sources, spreadsheets and decisions behind each figure.",
      },
      {
        title: "Data and rules design",
        body: "Cash flow sources, classifications, scenarios and limits are agreed with treasury, risk and finance.",
      },
      {
        title: "Build the live position first",
        body: "Cash positioning and intraday monitoring go first because treasury uses them daily, followed by the ladder and ratio inputs.",
      },
      {
        title: "Reconcile against existing reports",
        body: "Figures are compared with the current reports and ratios until differences are explained.",
      },
      {
        title: "Roll out and extend",
        body: "Stress scenarios, FX exposure, funds transfer pricing and limits are added, with ALCO reporting from the same data.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Enterprise platforms service", href: "/services/enterprise-platforms" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
    ],
    faqs: [
      {
        q: "Is this a replacement for a treasury management suite?",
        a: "It can be, for institutions whose needs are narrower than a suite. For larger banks it is more often a live cash and liquidity layer that sits beside a suite and fills the gaps.",
      },
      {
        q: "Where does the live position come from?",
        a: "From payment messages, statements and ledger balances, supplemented by scheduled and forecast flows. The sources are agreed in design and reconciled to the ledger.",
      },
      {
        q: "Can the system produce regulatory liquidity ratios?",
        a: "It prepares the classified data and calculations for the ratios and keeps the rules and assumptions versioned. Submission follows the bank's regulatory reporting process.",
      },
      {
        q: "How are stress scenarios defined?",
        a: "Scenarios are data: shocks, run-off rates and assumptions held with versions and approvals, so results can be repeated and compared across dates.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the models and the data stay yours.",
      },
    ],
    assetId: "bank-reporting-requirements",
    related: [
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
      { label: "Reconciliation engine for banks", href: "/solutions/reconciliation-engine-for-banks" },
      { label: "Financial controlling and management reporting", href: "/solutions/financial-controlling-and-management-reporting" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "regulatory-reporting-system-for-banks",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Regulatory Reporting System for Banks | Deview",
    seoDescription:
      "Custom regulatory reporting system for banks: governed data, report definitions, validation, ledger reconciliation, lineage and sign-off for supervisory returns.",
    kicker: "Enterprise platforms · Banking",
    h1: "Regulatory reporting system for banks",
    intro:
      "We build regulatory reporting systems for banks: governed data feeds, report definitions held as rules, validation and reconciliation to the ledger, lineage from every figure back to its source, and a review and sign-off workflow before submission. It replaces spreadsheet assembly of returns with one controlled process that can absorb new reporting requirements, and you own the code.",
    modules: [
      {
        title: "Regulatory data layer",
        body: "A governed data store that collects balances, positions, exposures, customers and transactions from source systems with a single definition for each data element.",
      },
      {
        title: "Report definitions as rules",
        body: "Each return described as data, with its cells, mappings and calculations, so a regulatory change is an edit and a test, not a rewrite.",
      },
      {
        title: "Calculation engines",
        body: "Capital, liquidity, large exposure, credit risk and other calculations that the returns require, implemented once and reused across reports.",
      },
      {
        title: "Validation",
        body: "Regulator validation rules, cross-report consistency checks and tolerance tests run before review, with failures listed by owner.",
      },
      {
        title: "Reconciliation to the ledger",
        body: "Report totals reconciled to the general ledger and to prior submissions, with differences explained and attached.",
      },
      {
        title: "Lineage and drill-down",
        body: "From any cell to the calculation, the data elements, the source system and the original records, for the reviewer and for the regulator's questions.",
      },
      {
        title: "Review and sign-off workflow",
        body: "Preparer, reviewer and approver steps with comments, evidence and an immutable record of who approved what.",
      },
      {
        title: "Submission",
        body: "Output in the format and channel the regulator specifies, such as the supervisory portal or XBRL where required, with acknowledgements stored.",
      },
      {
        title: "Resubmissions and change management",
        body: "Handling of corrections, versioned reporting rules and a calendar of upcoming changes with the work each one needs.",
      },
    ],
    diagram: {
      title: "Regulatory reporting system: reference architecture",
      desc: "Core banking, risk, finance and customer systems feed a regulatory data layer. A reporting platform with report definitions, calculation engines, validation, ledger reconciliation, lineage and a sign-off workflow produces returns for supervisory portals, internal committees and audit.",
      leftLabel: "Source systems",
      platformLabel: "Reporting platform",
      rightLabel: "Recipients",
      platformTitle: "Regulatory reporting platform",
      left: [
        ["Core banking and ledgers", "Balances, positions"],
        ["Risk and credit systems", "Exposures, ratings"],
        ["Customer and finance data", "Parties, GL, reference"],
      ],
      modules: [
        ["Regulatory data layer", "Governed elements"],
        ["Report definitions", "Cells, rules, versions"],
        ["Calculation engines", "Capital, liquidity"],
        ["Validation", "Regulator and internal"],
        ["Reconciliation", "To GL and prior returns"],
        ["Sign-off workflow", "Review, evidence"],
      ],
      strip: "Lineage · rule versions · immutable audit trail",
      right: [
        ["Supervisory portals", "Formats, XBRL"],
        ["Finance and risk", "Review, explain"],
        ["Committees", "Pack and approvals"],
        ["Internal and external audit", "Evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: one governed data layer and one set of definitions produce every return, with lineage to the source.",
    standards: [
      {
        name: "BCBS 239",
        note: "The Basel Committee's principles for risk data aggregation and reporting: governance, data architecture, accuracy, completeness, timeliness and adaptability.",
      },
      {
        name: "Basel capital and liquidity frameworks",
        note: "The calculation rules behind capital adequacy, leverage, liquidity and large exposure returns, as implemented locally.",
      },
      {
        name: "Regulator reporting templates and rules",
        note: "The returns, definitions and validation rules published by the bank's supervisors, such as the HKMA in Hong Kong.",
      },
      {
        name: "XBRL and taxonomies",
        note: "Machine-readable reporting where regulators require it, for example the EBA reporting framework for COREP and FINREP in the European Union.",
      },
      {
        name: "IFRS and local GAAP",
        note: "Accounting bases that the figures and reconciliations must agree with.",
      },
      {
        name: "Data protection and confidentiality",
        note: "Controls on access to customer-level data used in returns and on its retention.",
      },
    ],
    dataModel: [
      {
        entity: "Data element",
        holds: "Business definition, source system and field, owner, quality rules and the reports that use it.",
      },
      {
        entity: "Report and cell",
        holds: "Return identifier, cell reference, definition, mapping and version.",
      },
      {
        entity: "Calculation",
        holds: "Inputs, formula or rule, output and the run that produced it.",
      },
      {
        entity: "Validation result",
        holds: "Rule, outcome, tolerance, owner and resolution.",
      },
      {
        entity: "Reconciliation",
        holds: "Report total, ledger total, difference and the explanation attached.",
      },
      {
        entity: "Submission",
        holds: "Version submitted, format, channel, time, acknowledgement and any resubmission.",
      },
      {
        entity: "Sign-off record",
        holds: "Preparer, reviewer and approver, time and evidence reviewed.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Packaged regulatory reporting products come with the templates, taxonomies and updates for a given regulator. For banks reporting to a major regime with standard needs this is the lowest-risk choice.",
      },
      {
        title: "Extend",
        body: "Extend when a vendor covers the main returns but you need local or supplementary reports, a better data layer, or a sign-off and evidence process that fits your controls.",
      },
      {
        title: "Build",
        body: "Build when the bank reports to a regulator with few packaged products, runs several jurisdictions, or wants a data layer that also serves risk and finance rather than another reporting silo.",
      },
    ],
    security: [
      {
        title: "Controlled change to rules",
        body: "Report definitions and calculations change only through reviewed, tested, versioned releases that take effect on a stated date.",
      },
      {
        title: "Immutable submissions",
        body: "Every submitted return is stored exactly as filed, with its inputs, so it can be reproduced and defended.",
      },
      {
        title: "Role-based access",
        body: "Preparers, reviewers and approvers are separate, and customer-level data is visible only where needed.",
      },
      {
        title: "Lineage integrity",
        body: "Data movement between systems is logged, and a break in lineage is flagged before a return is submitted.",
      },
      {
        title: "Availability at deadlines",
        body: "Capacity and recovery planning around submission dates, with tested failover.",
      },
    ],
    phases: [
      {
        title: "Return inventory and data review",
        body: "We list every return, its owner, sources and manual steps, and assess data quality for the elements most used.",
      },
      {
        title: "Data layer and definition design",
        body: "The data elements and the definition of each return are agreed with finance, risk and the report owners.",
      },
      {
        title: "Build returns in priority order",
        body: "Returns are built from highest risk or effort, with each reconciled to the ledger and to the last submission.",
      },
      {
        title: "Parallel submission preparation",
        body: "Each return is prepared in both the old and new process, and differences are explained before the first live submission.",
      },
      {
        title: "Cut over and maintain",
        body: "The new process takes over return by return, and regulatory changes become planned releases.",
      },
    ],
    proof: [
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Reporting pipeline reconciling several source systems: Fizkultura", href: "/case-studies/fizkultura" },
      { label: "Treasury and liquidity management system", href: "/solutions/treasury-and-liquidity-management-system" },
    ],
    faqs: [
      {
        q: "Does this replace our regulatory reporting product?",
        a: "It can, or it can sit beside a product and supply the data layer, local returns and the sign-off workflow. We recommend a packaged product where one fits your regulator well.",
      },
      {
        q: "How do you keep up with regulatory changes?",
        a: "Reports are defined as data, with versions and effective dates. A change becomes an edit to definitions, tested against past data and released with the change calendar.",
      },
      {
        q: "Can regulators trace a figure to its source?",
        a: "Yes. Every cell links to its calculation, its data elements and the source records, so a question can be answered from the system rather than from memory.",
      },
      {
        q: "Does it support XBRL?",
        a: "Yes, where a regulator requires it. The report definitions map to the taxonomy, and the output is validated against it before submission.",
      },
      {
        q: "Who owns the code and the rules?",
        a: "You do. The code, the report definitions and the data stay yours.",
      },
    ],
    assetId: "bank-reporting-requirements",
    related: [
      { label: "Financial controlling and management reporting", href: "/solutions/financial-controlling-and-management-reporting" },
      { label: "Treasury and liquidity management system", href: "/solutions/treasury-and-liquidity-management-system" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "financial-controlling-and-management-reporting",
    vertical: "banking",
    serviceId: "enterprise-platforms",
    seoTitle: "Financial Controlling and Management Reporting System | Deview",
    seoDescription:
      "Custom financial controlling and management reporting system: cost allocation, profitability, budgeting, close orchestration and one governed reporting layer.",
    kicker: "Enterprise platforms · Banking",
    h1: "Financial controlling and management reporting system",
    intro:
      "We build financial controlling and management reporting systems for banks and financial groups: cost allocation, product and customer profitability, budgeting and forecasting, month-end close orchestration and consolidated management reports, all drawn from one governed data layer. It replaces the spreadsheets that sit between the ledger and the board pack, and you own the code.",
    modules: [
      {
        title: "Dimensions and chart mapping",
        body: "A single mapping from ledger accounts to management dimensions such as entity, business line, product, customer segment, branch and cost centre.",
      },
      {
        title: "Ledger and sub-ledger feeds",
        body: "Daily or period loads from the general ledger, loan, deposit, card and payment systems, reconciled to the ledger total.",
      },
      {
        title: "Cost allocation",
        body: "Driver-based and activity-based allocation of shared costs, with rules that finance owns and that can be rerun when drivers change.",
      },
      {
        title: "Profitability by product and customer",
        body: "Margin after funding charges, credit cost and allocated cost for each product, customer and relationship, with drill-down to the underlying balances.",
      },
      {
        title: "Budgeting and forecasting",
        body: "Top-down and bottom-up planning, driver-based forecasts and rolling updates in one model that compares plan, forecast and actuals.",
      },
      {
        title: "Variance analysis and commentary",
        body: "Automatic variance by dimension, with a workflow for owners to enter the explanation that goes into the pack.",
      },
      {
        title: "Close orchestration",
        body: "A checklist of close tasks with owners and dependencies, accrual and intercompany matching, and a view of what is blocking sign-off.",
      },
      {
        title: "Consolidation",
        body: "Entity-level results consolidated with eliminations and currency translation for group management reporting.",
      },
      {
        title: "Reports and dashboards",
        body: "Board, committee and business-line reports from one set of KPI definitions, delivered as dashboards, PDFs and data feeds.",
      },
    ],
    diagram: {
      title: "Financial controlling and management reporting: reference architecture",
      desc: "General ledger, sub-ledgers, planning inputs and reference data feed a controlling platform with dimension mapping, cost allocation, profitability, planning, variance analysis, close orchestration and consolidation. Reports go to the board, business lines, finance and regulators.",
      leftLabel: "Data sources",
      platformLabel: "Controlling platform",
      rightLabel: "Consumers",
      platformTitle: "Controlling and reporting platform",
      left: [
        ["General ledger", "Entities, accounts"],
        ["Product sub-ledgers", "Loans, deposits, cards"],
        ["Plans and drivers", "Budget, headcount, volumes"],
      ],
      modules: [
        ["Dimension mapping", "Account to management view"],
        ["Cost allocation", "Drivers and activities"],
        ["Profitability", "Product, customer, margin"],
        ["Planning", "Budget, forecast, actuals"],
        ["Close orchestration", "Tasks, accruals, matches"],
        ["Consolidation", "Eliminations, FX"],
      ],
      strip: "One KPI dictionary · lineage · audit trail",
      right: [
        ["Board and committees", "Packs and dashboards"],
        ["Business lines", "Margin, cost, targets"],
        ["Finance", "Close and variance"],
        ["Regulatory reporting", "Shared figures"],
      ],
    },
    diagramCaption:
      "Reference architecture: every management number comes from one mapped, reconciled data layer and one KPI dictionary.",
    standards: [
      {
        name: "IFRS 8 operating segments",
        note: "Segment reporting that management reports must be able to reproduce for external disclosure.",
      },
      {
        name: "IFRS 10 consolidation",
        note: "Consolidation rules, eliminations and translation for group reporting.",
      },
      {
        name: "IFRS 9",
        note: "Expected credit loss and funding costs as components of customer and product profitability.",
      },
      {
        name: "Funds transfer pricing practice",
        note: "Methodology for charging and crediting business units for funding, agreed with treasury and risk.",
      },
      {
        name: "IBCS notation",
        note: "International Business Communication Standards for consistent charts and tables in management reports.",
      },
      {
        name: "Data governance standards",
        note: "Owners, definitions and quality rules for each KPI and data element.",
      },
    ],
    dataModel: [
      {
        entity: "Ledger entry",
        holds: "Entity, account, period, currency, amount and source batch.",
      },
      {
        entity: "Dimension and hierarchy",
        holds: "Entities, business lines, products, segments, branches and cost centres, with effective dates.",
      },
      {
        entity: "Allocation rule and run",
        holds: "Driver, basis, percentages, version and the result of each run.",
      },
      {
        entity: "Profitability record",
        holds: "Margin components by product, customer and period, with the balances they came from.",
      },
      {
        entity: "Plan version",
        holds: "Budget or forecast, assumptions, drivers, owner and approval.",
      },
      {
        entity: "Close task",
        holds: "Task, owner, dependencies, due time, status and evidence.",
      },
      {
        entity: "KPI definition",
        holds: "Name, formula, owner, data sources and the reports that use it.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Corporate performance management and banking profitability suites cover the standard needs, and are the safe choice if your finance team already knows one.",
      },
      {
        title: "Extend",
        body: "Extend when a suite covers planning and consolidation but profitability by customer, driver-based allocation or the link to product systems is manual or outside the tool.",
      },
      {
        title: "Build",
        body: "Build when your product mix, funding model or group structure is unusual, or when the governed data layer should serve controlling, risk and regulatory reporting together.",
      },
    ],
    security: [
      {
        title: "Access by entity and role",
        body: "Finance users see only the entities and views they own; sensitive compensation and customer data is restricted.",
      },
      {
        title: "Controlled rules",
        body: "Allocation rules, mappings and KPI definitions are changed under approval and dated.",
      },
      {
        title: "Audit trail",
        body: "Journals, adjustments and manual overrides carry user, time and reason.",
      },
      {
        title: "Reproducible reporting",
        body: "A closed period can be reproduced with the rules and mappings in force at the time.",
      },
      {
        title: "Resilience at close",
        body: "Capacity and recovery planning for period-end peaks.",
      },
    ],
    phases: [
      {
        title: "Reporting inventory",
        body: "We list the management reports, their audiences, the spreadsheets behind them and every manual adjustment between the ledger and the pack.",
      },
      {
        title: "Dimension, KPI and allocation design",
        body: "The mapping, the KPI dictionary and the allocation rules are agreed with finance, treasury and the business lines.",
      },
      {
        title: "Build the data layer and first reports",
        body: "The data layer and the board and business-line reports go first, reconciled to the ledger each period.",
      },
      {
        title: "Parallel close",
        body: "Two closes run side by side, and differences between the old pack and the new one are explained.",
      },
      {
        title: "Add planning and profitability",
        body: "Planning, customer profitability and close orchestration are added, and spreadsheets retired.",
      },
    ],
    proof: [
      { label: "Grand Finance: one management portal across departments and tools", href: "/case-studies#finance" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
    ],
    faqs: [
      {
        q: "Why not just use a corporate performance management tool?",
        a: "Often you should. Our work is for the cases where the product systems, the funding model or the data layer need engineering around the tool, or where a tool would be one more silo next to risk and regulatory reporting.",
      },
      {
        q: "How do you calculate profitability by customer?",
        a: "From balances and transactions by customer, with funding charges from transfer pricing, credit cost from risk systems and allocated costs from the rules finance owns, reconciled to the ledger.",
      },
      {
        q: "Can the system speed up month-end close?",
        a: "Yes. It orchestrates the task list, automates matching and accrual proposals, and shows what is blocking sign-off, so effort goes to exceptions rather than assembly.",
      },
      {
        q: "Does it replace spreadsheets completely?",
        a: "The aim is that every number in the pack comes from the system. Analysts can still use spreadsheets for analysis, but off a governed data layer rather than pasted values.",
      },
      {
        q: "Who owns the code and the data?",
        a: "You do. The code, the rules and the data stay yours.",
      },
    ],
    assetId: "bank-reporting-requirements",
    related: [
      { label: "Regulatory reporting system for banks", href: "/solutions/regulatory-reporting-system-for-banks" },
      { label: "Treasury and liquidity management system", href: "/solutions/treasury-and-liquidity-management-system" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
    ],
    updated: "2026-10-15",
  },
];
