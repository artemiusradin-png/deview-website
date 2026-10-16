import type { SolutionAsset } from "./types";

/** Gated asset for the methane and emissions reporting pages. */
export const METHANE_ASSETS: SolutionAsset[] = [
  {
    id: "methane-mrv-readiness",
    source: "sol-methane-mrv-readiness",
    accessKey: "deview-sol-methane-mrv-readiness",
    title: "Methane and emissions data readiness checklist",
    buttonLabel: "Get the readiness checklist",
    kicker: "Checklist · Emissions reporting",
    lead: "A checklist for operators and companies preparing methane measurement, reporting and verification and greenhouse gas reporting: inventory, activity data, measurement, reconciliation, uncertainty, verification and governance.",
    inside: [
      "Eight areas to settle before you buy or build an emissions data platform.",
      "The records that source-level reporting and verifiers expect.",
      "Items for linking emissions data to production and maintenance systems.",
      "Seven questions to put to any vendor or development partner.",
    ],
    tags: ["Operators", "Sustainability", "Finance and reporting"],
    primaryPage: "methane-emissions-monitoring-and-reporting",
    areas: [
      {
        title: "Obligations and scope",
        checks: [
          "Frameworks and regulations that apply, with their reporting dates and formats",
          "Facilities and entities in scope, with the boundary approach",
          "Customers, importers or investors who request emissions data",
          "A target reporting level and the route to it",
        ],
      },
      {
        title: "Source inventory",
        checks: [
          "A register of emission sources by facility and type",
          "Link from each source to the asset hierarchy and maintenance system",
          "Equipment counts and parameters needed for factor-based estimates",
          "Treatment of non-operated and acquired assets",
        ],
      },
      {
        title: "Activity data and factors",
        checks: [
          "Sources and owners for flaring, venting, fuel and throughput data",
          "Emission factors with source, year, region and applicability",
          "Versioning of factors and methods with approval",
          "Data quality checks and gap rules for activity data",
        ],
      },
      {
        title: "Measurement data",
        checks: [
          "Technologies in use: optical imaging, continuous monitors, aerial, satellite",
          "Standard format for detections with location, time, size and quality",
          "Survey planning and coverage records",
          "Handling of third-party data and its licence terms",
        ],
      },
      {
        title: "Leak detection and repair",
        checks: [
          "Detection, repair, re-survey and closure tracked to deadlines",
          "Link to maintenance work orders and spare parts",
          "Evidence of repair attached to each record",
          "Reporting of repair performance by facility",
        ],
      },
      {
        title: "Reconciliation and uncertainty",
        checks: [
          "Comparison of source-level estimates with site-level measurement",
          "Uncertainty calculated for each source and site",
          "Explanations recorded for differences",
          "A plan to improve data quality over time",
        ],
      },
      {
        title: "Reporting and verification",
        checks: [
          "Reports in each required structure from one data set",
          "Lineage from every reported figure to data, method and approval",
          "Evidence packs for third-party verifiers",
          "Process for restatements with reason and approval",
        ],
      },
      {
        title: "Platform, security and governance",
        checks: [
          "Role-based access by facility, function and external party",
          "Audit trail of changes to inventory, factors and estimates",
          "Interfaces to production, maintenance and finance systems",
          "Hosting, retention and exit requirements",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or development partner",
    questions: [
      "How does the platform record the method and uncertainty behind each reported figure?",
      "How are measurement results from different technologies and providers brought into one model?",
      "How does it support the route from basic to source-level and site-level reporting?",
      "How are regulatory and framework changes delivered and applied to past periods?",
      "What evidence can a verifier or an importer obtain directly from the system?",
      "Who owns the source code, the data and the methods, and what do we receive on exit?",
      "Which comparable operators use the system, and what did they have to customise?",
    ],
  },
];
