import { BANKING_ASSETS } from "./assets-banking";
import { BANKING_FINANCE_ASSETS } from "./assets-banking-finance";
import { OIL_GAS_ASSETS } from "./assets-oil-gas";
import { CROSS_ASSETS } from "./assets-cross";
import { AI_ASSETS } from "./assets-ai";
import { METHANE_ASSETS } from "./assets-methane";
import { CLOUD_ASSETS } from "./assets-cloud";
import type { SolutionAsset } from "./types";

/**
 * Gated assets offered on the solution pages. One asset serves a group of pages (see the plan
 * file). The signup form posts `source` to /api/lead-magnet, which must accept it: the route
 * builds its list from this file.
 */
export const SOLUTION_ASSETS: SolutionAsset[] = [
  ...BANKING_ASSETS,
  ...BANKING_FINANCE_ASSETS,
  ...OIL_GAS_ASSETS,
  ...CROSS_ASSETS,
  ...AI_ASSETS,
  ...METHANE_ASSETS,
  ...CLOUD_ASSETS,
  {
    id: "sme-lending-rfp",
    source: "sol-sme-lending-rfp",
    accessKey: "deview-sol-sme-lending-rfp",
    title: "SME lending platform RFP template",
    buttonLabel: "Get the RFP template",
    kicker: "RFP template · Banking",
    lead: "Requirements to put in an RFP for an SME loan management system, from application intake to regulatory reporting, plus the questions to ask every vendor.",
    inside: [
      "Eight requirement areas, each as a checklist you can paste into an RFP.",
      "Integration and data points your core banking and IT teams need to answer.",
      "Security, resilience and regulatory items that are easy to miss.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Banks", "Digital banks", "SME lenders"],
    primaryPage: "sme-loan-management-system-for-banks",
    areas: [
      {
        title: "Scope, products and volumes",
        checks: [
          "Products in scope (term loans, revolving facilities, overdrafts, trade finance, scheme-guaranteed loans) with their parameters",
          "Customer segments and ticket sizes",
          "Expected volumes: applications per month, live accounts, peak days",
          "Entities, branches and currencies, and the systems that stay or retire",
        ],
      },
      {
        title: "Application and onboarding",
        checks: [
          "Company, director, signatory and beneficial owner capture in one structured application",
          "KYB and sanctions screening hooks, with results kept on the file",
          "Document checklist per product, with expiry and completeness checks",
          "Channels: relationship manager, branch, online portal, partner or API",
        ],
      },
      {
        title: "Credit assessment and decisioning",
        checks: [
          "Financial spreading and cash-flow analysis, including from bank statement and accounting data",
          "Rule engine and scorecards with reason codes and versioning",
          "Policy exceptions recorded with the approver and the reason",
          "Reproducible decisions: the inputs and rule version behind every outcome are stored",
        ],
      },
      {
        title: "Approval workflow and authority",
        checks: [
          "Delegated authority matrix by amount, risk grade and product",
          "Four-eyes review, committee routing and escalation timers",
          "Conditions of approval tracked to completion before disbursement",
          "Full decision log available to audit",
        ],
      },
      {
        title: "Collateral, guarantees and covenants",
        checks: [
          "Security register with valuations, charge status and insurance expiry",
          "Guarantor links and government-backed scheme coverage where applicable",
          "Covenant definitions, tests and waivers",
          "Early-warning signals and watchlist rules",
        ],
      },
      {
        title: "Servicing, collections and restructuring",
        checks: [
          "Instalment, balloon and revolving schedules; floating-rate resets; fees",
          "Prepayment, top-up, restructuring and refinancing without manual recalculation",
          "Days-past-due buckets, collection tasks and notes",
          "Write-off and recovery tracked separately",
        ],
      },
      {
        title: "Integration and data",
        checks: [
          "Posting to the core banking ledger: method, frequency and idempotency",
          "Payment initiation and statement reconciliation (ISO 20022 messages)",
          "Credit-reference, data-exchange and open-data connections",
          "Data warehouse feed, regulatory return feeds and expected credit loss inputs",
        ],
      },
      {
        title: "Security, resilience and regulation",
        checks: [
          "Role and attribute-based access, maker-checker, and segregation of duties",
          "Append-only audit trail; encryption in transit and at rest",
          "Recovery time and recovery point objectives, tested restores",
          "Hosting, data residency, outsourcing and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "Who owns the source code, the data and the configuration, and what do we receive on exit?",
      "Where is our data stored and who can access it, including your support staff?",
      "How are releases tested, approved and rolled back in our environment?",
      "How do you produce audit evidence for a regulator or an internal audit request?",
      "What happens to our changes when you ship a new version?",
      "Which reference customers run something comparable in scale and regulation, and what did they need to adapt?",
      "What do you need from our core banking, risk and IT teams, and when?",
    ],
  },
  {
    id: "upstream-ops-spec",
    source: "sol-upstream-ops-spec",
    accessKey: "deview-sol-upstream-ops-spec",
    title: "Upstream operations system requirements",
    buttonLabel: "Get the requirements spec",
    kicker: "Requirements spec · Oil and gas",
    lead: "A requirements specification you can adapt for an upstream production management or surveillance system: master data, acquisition, allocation, deferment, exceptions, reporting and the IT and OT boundary.",
    inside: [
      "Eight requirement areas written as testable statements.",
      "Questions on data sources, quality flags and restatement rules.",
      "The IT and OT boundary items security teams ask about.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Operators", "Asset teams", "Joint ventures"],
    primaryPage: "upstream-production-management-system",
    areas: [
      {
        title: "Asset and well master data",
        checks: [
          "Hierarchy from field and reservoir to well, completion, facility and export point",
          "Effective-dated attributes so history stays correct when equipment changes",
          "Identifiers shared with the historian, engineering and accounting systems",
          "Controlled change to master data with an approver",
        ],
      },
      {
        title: "Data acquisition and quality",
        checks: [
          "Sources: historian, OPC UA, manual entry, field e-logs, lab and test data",
          "Quality flags and validity rules on every value",
          "Gap detection and a defined policy for backfilling and estimation",
          "Buffering at the edge when the site link is lost",
        ],
      },
      {
        title: "Daily production reporting",
        checks: [
          "Oil, gas and water volumes by well and facility and by day",
          "Review, approval and lock steps with named roles",
          "Restatement keeps the original value, the new value, the reason and the approver",
          "Reports available by the morning the operations team needs them",
        ],
      },
      {
        title: "Well tests and allocation",
        checks: [
          "Test scheduling, validation and rate estimation",
          "Allocation method per field, from fiscal meters back to wells",
          "A reconciliation view of allocated against measured volumes",
          "Documented handling of shrinkage, fuel, flare and vent",
        ],
      },
      {
        title: "Deferment and loss accounting",
        checks: [
          "Planned and unplanned deferment with category and root cause",
          "Link from deferment to the downtime event and equipment",
          "Potential defined per well and how it is updated",
          "Loss and deferment reports by cause, asset and period",
        ],
      },
      {
        title: "Surveillance and exceptions",
        checks: [
          "Rules on rates, pressures, temperature, water cut and gas-oil ratio",
          "Exception queue with owner, severity, comments and closure",
          "Escalation when an exception is not acted on",
          "Trend views that put an exception in context",
        ],
      },
      {
        title: "Reporting and exchange",
        checks: [
          "Management dashboards for operations, asset and executive levels",
          "Partner, regulator and accounting formats, including PRODML or other required schemas",
          "Publish and read interfaces for an OSDU data platform where one exists",
          "Report package log: what was sent, to whom and when",
        ],
      },
      {
        title: "Platform, security and operations",
        checks: [
          "One-way connection from the operational network, with no write path to control systems",
          "IEC 62443 zones and conduits at the boundary",
          "Roles limited by field, asset and function; partner views separated",
          "Hosting, recovery objectives, monitoring and support model",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How does the platform read from our historian and control systems, and can it ever write back?",
      "How are allocation methods configured and changed, and who approves a change?",
      "What happens to reported figures when a source value is corrected later?",
      "Which standards do you support for exchange with partners and with subsurface platforms?",
      "How does the system behave when a remote site loses its connection for a day?",
      "Who owns the source code, the data and the configuration, and what do we receive on exit?",
      "Which comparable assets or pilots can you show, and what did they change?",
    ],
  },
  {
    id: "mfg-systems-requirements",
    source: "sol-mfg-systems-requirements",
    accessKey: "deview-sol-mfg-systems-requirements",
    title: "Manufacturing systems requirements template",
    buttonLabel: "Get the requirements template",
    kicker: "Requirements template · Manufacturing",
    lead: "A requirements template for a manufacturing execution system or manufacturing operations layer, organised around ISA-95: orders, scheduling, shop-floor data, traceability, quality, equipment and integration.",
    inside: [
      "Eight requirement areas written as testable statements.",
      "The fields a machine signal list needs before you connect equipment.",
      "Integration points with the ERP and the plant network.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Plant managers", "Operations", "Quality and IT"],
    primaryPage: "manufacturing-execution-system-development",
    areas: [
      {
        title: "Work orders and routings",
        checks: [
          "Release of orders from the ERP with routing, quantities and due dates",
          "Operation status and confirmation by operator and machine",
          "Handling of splits, rework and scrap",
          "Order history that survives a change to the routing",
        ],
      },
      {
        title: "Scheduling and dispatch",
        checks: [
          "Finite capacity by work centre, shift and calendar",
          "Material, tooling and changeover constraints",
          "Dispatch list per work centre, updated as the line changes",
          "Rescheduling when a machine fails or a rush order arrives",
        ],
      },
      {
        title: "Shop-floor data collection",
        checks: [
          "Machine signal list with protocol, address, type and sample rate",
          "OPC UA, MQTT or Modbus connectivity, direct or through a gateway",
          "Operator terminals and barcode scanning where no signal exists",
          "Offline operation and later synchronisation",
        ],
      },
      {
        title: "Material genealogy and traceability",
        checks: [
          "Lot and serial identifiers from receiving to shipping",
          "Consumption and production links forming the genealogy",
          "A recall query that returns affected lots, products and customers",
          "Retention period for traceability records",
        ],
      },
      {
        title: "Quality management",
        checks: [
          "Inspection plans, characteristics and limits by product and operation",
          "Statistical process control charts and alert rules",
          "Non-conformance records, disposition and corrective and preventive action",
          "Links from every record to the order, lot and equipment",
        ],
      },
      {
        title: "Equipment status and OEE",
        checks: [
          "Machine states and downtime reason codes captured at the moment",
          "Availability, performance and quality calculated per machine and shift",
          "Planned and unplanned stops separated",
          "Maintenance requests raised from hours, counters and alarms",
        ],
      },
      {
        title: "Integration and data",
        checks: [
          "ISA-95 object models and message format (for example B2MML) agreed with the ERP team",
          "Master data ownership: materials, BOMs, routings, work centres",
          "Goods movements, confirmations and scrap posted to the ERP",
          "Reporting feed to a data platform or BI tool",
        ],
      },
      {
        title: "Platform, security and validation",
        checks: [
          "Network zones and conduits between machines, MES and business network",
          "Role-based access, audit trail and electronic signatures where required",
          "Validation approach for regulated products (21 CFR Part 11, EU GMP Annex 11)",
          "Hosting, backups, recovery objectives and support model",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "Which of our machines and controllers are already supported, and how are the others connected?",
      "What do operators do when the network or a machine signal is unavailable?",
      "How are routings, BOMs and instructions versioned, approved and released to the line?",
      "How does a recall query work across suppliers, lots and customers?",
      "How is the system validated and re-validated after a change, for regulated products?",
      "Who owns the source code, the data and the configuration, and what do we receive on exit?",
      "Which comparable plants run the system, and what did they customise?",
    ],
  },
];

export const assetById = (id: string) => SOLUTION_ASSETS.find((a) => a.id === id);
