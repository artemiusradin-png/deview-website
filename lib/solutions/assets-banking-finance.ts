import type { SolutionAsset } from "./types";

/** Gated asset for the banking finance pages (reporting, treasury, controlling). */
export const BANKING_FINANCE_ASSETS: SolutionAsset[] = [
  {
    id: "bank-reporting-requirements",
    source: "sol-bank-reporting-requirements",
    accessKey: "deview-sol-bank-reporting-requirements",
    title: "Bank reporting and controlling requirements pack",
    buttonLabel: "Get the requirements pack",
    kicker: "Requirements pack · Banking finance",
    lead: "A requirements pack for regulatory reporting, treasury and liquidity reporting, and management controlling systems in a bank: data, definitions, calculations, validation, lineage, close and governance.",
    inside: [
      "Eight requirement areas shared by regulatory, treasury and controlling reporting.",
      "What to ask for on data definitions, lineage and reconciliation.",
      "Close, sign-off and change-management items auditors check.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Finance", "Risk", "Treasury"],
    primaryPage: "regulatory-reporting-system-for-banks",
    areas: [
      {
        title: "Data sources and definitions",
        checks: [
          "A list of source systems for balances, positions, exposures, customers and transactions",
          "One business definition, owner and quality rule for each data element",
          "Reference data for entities, products, currencies and hierarchies with effective dates",
          "Handling of late, missing and corrected source data",
        ],
      },
      {
        title: "Report and return definitions",
        checks: [
          "Each return or report described as data: cells, mappings and calculations",
          "Versioning with effective dates, so past periods can be reproduced",
          "Regulatory changes handled as planned releases with a change calendar",
          "Local and supplementary returns supported alongside the standard ones",
        ],
      },
      {
        title: "Calculation logic",
        checks: [
          "Capital, liquidity, large exposure and credit risk calculations implemented once and reused",
          "Assumptions, curves and run-off rates versioned and approved",
          "Scenario and stress runs reproducible from stored inputs",
          "Documented treatment of classification, netting and exemptions",
        ],
      },
      {
        title: "Validation and reconciliation",
        checks: [
          "Regulator validation rules and internal cross-report checks run before review",
          "Reconciliation of report totals to the general ledger and to prior submissions",
          "Tolerances defined and differences explained with attached evidence",
          "Validation failures listed by owner with status",
        ],
      },
      {
        title: "Lineage and drill-down",
        checks: [
          "Drill-down from any figure to the calculation, data elements and source records",
          "A lineage map that shows where data is transformed and by what",
          "Alerts when lineage is broken or a source feed changes",
          "Answers to supervisory questions produced from the system",
        ],
      },
      {
        title: "Close, review and sign-off",
        checks: [
          "A task list with owners, dependencies and due times",
          "Preparer, reviewer and approver separated, with comments and evidence",
          "Accrual, intercompany and adjustment handling with approvals",
          "Immutable record of what was approved and when",
        ],
      },
      {
        title: "Submission and distribution",
        checks: [
          "Output in the formats, taxonomies and channels each regulator or committee requires",
          "Acknowledgements and rejections captured and tracked",
          "Resubmission process with version control",
          "Management reports and dashboards drawn from the same data as returns",
        ],
      },
      {
        title: "Platform, security and resilience",
        checks: [
          "Role-based access, with customer-level data limited to those who need it",
          "Audit trail of every change to rules, mappings and figures",
          "Capacity and recovery planning for submission and close peaks",
          "Hosting, data residency and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How are regulatory template changes delivered, tested and applied to historical periods?",
      "How do we trace a reported figure to its source records, and how long does that take?",
      "How does the system show that a submitted return can be reproduced exactly?",
      "What happens to open sign-offs and comments when a return is corrected and resubmitted?",
      "How are manual adjustments controlled, approved and reported?",
      "Who owns the source code, the report definitions and the data, and what do we receive on exit?",
      "Which comparable banks submit through the system to our regulator, and what did they customise?",
    ],
  },
];
