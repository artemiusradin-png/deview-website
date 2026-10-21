import type { SolutionAsset } from "./types";

/** Gated assets for the oil and gas pages that are not covered by the upstream operations spec. */
export const OIL_GAS_ASSETS: SolutionAsset[] = [
  {
    id: "subsurface-data-readiness",
    source: "sol-subsurface-data-readiness",
    accessKey: "deview-sol-subsurface-data-readiness",
    title: "Subsurface data management and OSDU readiness checklist",
    buttonLabel: "Get the readiness checklist",
    kicker: "Checklist · Exploration data",
    lead: "A checklist for exploration and subsurface data management projects: inventory, standards, quality, entitlements, data rooms, migration and the interfaces an OSDU data platform expects.",
    inside: [
      "Eight areas to assess before you choose or build a subsurface data platform.",
      "The metadata and identifiers that make wells, surveys and licences findable.",
      "Entitlement and data room items that legal and partners ask about.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Exploration", "National oil companies", "Regulators"],
    primaryPage: "exploration-data-management-system",
    areas: [
      {
        title: "Data inventory and priorities",
        checks: [
          "A list of data types: seismic, wells, logs, cores, samples, reports, interpretations, maps",
          "Where each is held today: systems, shares, tapes, paper and partners",
          "Volumes, formats and condition of each source",
          "Priorities ranked by business and regulatory value",
        ],
      },
      {
        title: "Catalogue and metadata",
        checks: [
          "A minimum metadata set per data type, with controlled vocabularies",
          "Unique identifiers for wells, wellbores, surveys and licences, shared across systems",
          "Map-based and attribute search across all data types",
          "Coordinate reference system recorded and transformed correctly",
        ],
      },
      {
        title: "Standards and formats",
        checks: [
          "SEG-Y, SEG-D, LAS and DLIS handling, including malformed files",
          "WITSML, PRODML and RESQML exchange where counterparties use them",
          "Mapping of the data model to OSDU schemas and reference data",
          "Unit and mnemonic standardisation for curves",
        ],
      },
      {
        title: "Quality control and lineage",
        checks: [
          "Automated checks for completeness, units, depth references and duplicates",
          "Quality status visible on every dataset",
          "Lineage of every transformation applied to a dataset",
          "A process to correct data at source and republish",
        ],
      },
      {
        title: "Licences, blocks and rights",
        checks: [
          "Licences, blocks, partners and obligations in one register",
          "Link from each dataset to the contract it was acquired under",
          "Obligations to deliver and retain data tracked per licence",
          "Expiry and relinquishment effects on data access",
        ],
      },
      {
        title: "Entitlements and data rooms",
        checks: [
          "Access by licence, partner, role and time, with automatic expiry",
          "Data rooms for bid rounds, farm-ins and divestments with per-user logs",
          "Watermarking and download controls",
          "Export controls and data residency by classification",
        ],
      },
      {
        title: "Migration and digitisation",
        checks: [
          "Plan for tapes, scanned reports and legacy databases by value and risk",
          "Reconciliation of what was loaded, rejected and why",
          "Retention and disposal rules for source media",
          "Storage tiers for large volumes with tested restore",
        ],
      },
      {
        title: "Platform, security and operations",
        checks: [
          "Interfaces to interpretation applications and to an OSDU platform",
          "Role-based access, audit trail and tamper-evident storage",
          "Hosting model, backup, recovery objectives and monitoring",
          "Support model and ownership of the catalogue after go-live",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "Which OSDU schemas and services do you support today, and how do you handle versions?",
      "How do you handle seismic volumes that are too large to move: referenced, tiered or streamed?",
      "How do entitlements follow licence and contract changes, including expiry?",
      "How do you show where a dataset came from and what was done to it?",
      "How do you migrate legacy databases and scanned archives, and how is completeness proven?",
      "Who owns the source code, the catalogue and the data, and what do we receive on exit?",
      "Which comparable organisations run the platform, and what did they have to customise?",
    ],
  },
  {
    id: "project-controls-requirements",
    source: "sol-project-controls-requirements",
    accessKey: "deview-sol-project-controls-requirements",
    title: "Project controls and JV reporting requirements",
    buttonLabel: "Get the requirements document",
    kicker: "Requirements · Capital projects and ventures",
    lead: "Requirements to adapt for a project controls, joint venture accounting, engineering information or contractor portal system: structure, cost, schedule, progress, change, partner reporting, handover and access.",
    inside: [
      "Eight requirement areas written as testable statements.",
      "Items for AFE approval, cash calls and partner statements.",
      "Handover, document control and contractor portal checks.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Project controls", "Joint ventures", "Engineering"],
    primaryPage: "oil-and-gas-project-controls-software",
    areas: [
      {
        title: "Structure and scope",
        checks: [
          "Programme, project and work package hierarchy with owners",
          "Work breakdown and cost breakdown structures mapped to ledger accounts",
          "Baselines for scope, budget and schedule with approval and history",
          "Venture, partner and interest register with effective dates",
        ],
      },
      {
        title: "Cost control",
        checks: [
          "Budget, commitment, actual, accrual and forecast by account, contract and period",
          "Reconciliation to the general ledger each period",
          "Forecast to complete method and who approves the forecast",
          "Contingency and management reserve tracking",
        ],
      },
      {
        title: "Schedule and progress",
        checks: [
          "Import of schedules from planning tools with baseline comparison",
          "Physical progress by discipline using agreed earning rules",
          "Earned value indices at any level of the structure",
          "Critical path and float reporting",
        ],
      },
      {
        title: "Change, risk and stage gates",
        checks: [
          "Change requests with cost and time assessment and approval by authority",
          "Risk register with quantified cost and schedule risk and contingency drawdown",
          "Gate criteria, deliverables and decision records per phase",
          "Links from change and risk to budget and schedule",
        ],
      },
      {
        title: "Joint venture accounting",
        checks: [
          "AFE request, approval by partners, supplements and close-out",
          "Cost allocation by interest under the agreement's rules",
          "Cash calls, receipts, late payment and default handling",
          "Statements, partner queries, audit findings and cost recovery returns",
        ],
      },
      {
        title: "Engineering information and handover",
        checks: [
          "Tag register linked to documents, with mismatches flagged",
          "Document numbering, revisions, review and approval workflows",
          "Transmittals with receipts and response deadlines",
          "Handover requirements by equipment class and completeness tracking",
        ],
      },
      {
        title: "Contractors and suppliers",
        checks: [
          "Prequalification and compliance document tracking with expiry",
          "Tender, bid and award workflow with sealed bids",
          "Progress, timesheet and invoice submission and acceptance",
          "Scorecards from safety, quality, schedule and commercial data",
        ],
      },
      {
        title: "Platform, access and audit",
        checks: [
          "Role-based access by project, venture, company and discipline",
          "Audit trail of every change to baselines, forecasts and approvals",
          "Interfaces to ERP, planning tools, document control and safety systems",
          "Hosting, recovery objectives, retention and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How are baselines locked, and how do approved changes update budget and schedule?",
      "How does the system apply the joint operating agreement's rules, and who maintains them?",
      "How do contractors submit progress and forecasts, and who accepts them?",
      "How do you show that tag data and documents agree, and what happens when they do not?",
      "What happens to partner and contractor access when a project or venture ends?",
      "Who owns the source code, the rules and the data, and what do we receive on exit?",
      "Which comparable owners and operators use the system, and what did they customise?",
    ],
  },
];
