import type { SolutionAsset } from "./types";

/** Gated assets for the cloud, resilience and security pages. */
export const CLOUD_ASSETS: SolutionAsset[] = [
  {
    id: "cloud-resilience-checklist",
    source: "sol-cloud-resilience-checklist",
    accessKey: "deview-sol-cloud-resilience-checklist",
    title: "Cloud migration and resilience checklist for regulated firms",
    buttonLabel: "Get the cloud checklist",
    kicker: "Checklist · Cloud and resilience",
    lead: "A checklist for regulated firms planning a cloud migration, a resilience programme or a security uplift: workload assessment, landing zone, data residency, resilience, security, delivery, third-party risk and evidence.",
    inside: [
      "Eight areas that supervisors and auditors ask about, with testable checks.",
      "Resilience and recovery items that are easy to leave untested.",
      "Third-party, exit and data residency questions for the board.",
      "Seven questions to put to any vendor or engineering partner.",
    ],
    tags: ["Banks", "Financial firms", "Regulated industry"],
    primaryPage: "core-banking-cloud-migration",
    areas: [
      {
        title: "Workloads and strategy",
        checks: [
          "An inventory of workloads with criticality, data classes and dependencies",
          "A decision for each workload: retain, rehost, replatform, refactor, replace or retire",
          "Regulatory notifications or consultations needed before moving critical services",
          "Business case that includes the cost of resilience, security and exit",
        ],
      },
      {
        title: "Landing zone and governance",
        checks: [
          "Account and subscription structure with guardrails set before workloads arrive",
          "Identity, privileged access and break-glass procedures",
          "Network design with segmentation, private connectivity and controlled egress",
          "Infrastructure defined as code and changed through reviewed pipelines",
        ],
      },
      {
        title: "Data, residency and sovereignty",
        checks: [
          "Data classified, with residency, access and transfer rules by class and country",
          "Regions and providers chosen against jurisdiction and operational control",
          "Customer-managed keys with separated custody",
          "Backups, logs, metadata and AI prompts included in residency controls",
        ],
      },
      {
        title: "Resilience and recovery",
        checks: [
          "Impact tolerances for important business services",
          "Recovery time and recovery point objectives per service, with the design to meet them",
          "Failover and failback runbooks, automated where possible",
          "Scheduled failover tests with measured results and fixes",
        ],
      },
      {
        title: "Security and detection",
        checks: [
          "Central logging and detection for cloud, identity and workloads",
          "Vulnerability and configuration management with service levels",
          "Immutable, isolated backups and a tested ransomware recovery path",
          "Incident response playbooks exercised with executives and communications",
        ],
      },
      {
        title: "Delivery and change",
        checks: [
          "A standard pipeline with security testing and signed artefacts",
          "Separation of duties and change evidence collected automatically",
          "Release safety: canaries, feature flags and tested rollback",
          "Observability with service level objectives tied to business outcomes",
        ],
      },
      {
        title: "Third-party and concentration risk",
        checks: [
          "Provider due diligence, contract terms and audit rights",
          "A register of third-party arrangements and the functions they support",
          "Concentration risk assessed across providers and regions",
          "Exit strategies and portability tested, not only documented",
        ],
      },
      {
        title: "Evidence, cost and ownership",
        checks: [
          "Evidence for each control stored where auditors and supervisors can retrieve it",
          "Cost visibility by team and product, with budgets and alerts",
          "Ownership of code, configuration, runbooks and data defined in contracts",
          "Skills and operating model to run the platform after go-live",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or engineering partner",
    questions: [
      "How do you show that recovery objectives are met, and how often is that tested?",
      "Where does our data, including backups and logs, reside, and who can access it?",
      "How are keys controlled, and what can the provider or you see without them?",
      "What does exit look like in practice, and has it been tested?",
      "How do you produce evidence for a supervisor or auditor on request?",
      "Who owns the infrastructure code, runbooks and configuration, and what do we receive on exit?",
      "Which comparable regulated firms have you migrated or secured, and what would you do differently now?",
    ],
  },
  {
    id: "ot-security-cra-checklist",
    source: "sol-ot-security-cra-checklist",
    accessKey: "deview-sol-ot-security-cra-checklist",
    title: "OT security, NIS2 and Cyber Resilience Act checklist",
    buttonLabel: "Get the OT security checklist",
    kicker: "Checklist · Industrial security",
    lead: "A checklist for operators and manufacturers of industrial and connected products: asset visibility, zones and conduits, remote access, monitoring, patching, recovery, supplier security and the regulatory duties of NIS2 and the Cyber Resilience Act.",
    inside: [
      "Eight areas based on IEC 62443 practice, with testable checks.",
      "Incident detection and reporting items for NIS2 and the Cyber Resilience Act.",
      "Supplier and secure development questions for product makers.",
      "Seven questions to put to any vendor or engineering partner.",
    ],
    tags: ["Operators", "Manufacturers", "Product makers"],
    primaryPage: "ot-cybersecurity-iec-62443",
    areas: [
      {
        title: "Asset inventory and visibility",
        checks: [
          "An inventory of controllers, HMIs, servers, network devices and software versions",
          "Passive discovery where active scanning is not safe",
          "Owners, criticality and consequence recorded for each asset or system",
          "Detection of new or changed devices on the operational network",
        ],
      },
      {
        title: "Risk assessment and security levels",
        checks: [
          "Security risk assessment per system with safety, environmental and production consequences",
          "Target security levels agreed for each zone",
          "Residual risk accepted by an accountable owner",
          "Review after change and on a schedule",
        ],
      },
      {
        title: "Zones, conduits and segmentation",
        checks: [
          "Assets grouped into zones, with documented conduits between them",
          "Firewalls or data diodes enforcing the allowed flows",
          "No direct paths between business networks and control networks",
          "Wireless and temporary connections controlled",
        ],
      },
      {
        title: "Remote access and suppliers",
        checks: [
          "Remote access through jump hosts with multi-factor authentication and session recording",
          "Time-limited approval for vendor access",
          "Security requirements in supplier contracts and on-site practice",
          "Control of removable media and engineering laptops",
        ],
      },
      {
        title: "Monitoring and incident response",
        checks: [
          "Passive monitoring of operational networks integrated with the security operations centre",
          "OT-aware incident response playbooks exercised with operations",
          "Classification and reporting workflow that meets NIS2 timelines",
          "Roles for decisions that affect safety and production",
        ],
      },
      {
        title: "Patching, change and recovery",
        checks: [
          "Vulnerability matching to assets with risk-based decisions",
          "Compensating controls where patching is not possible",
          "Controller logic and configuration backed up, versioned and restorable",
          "Recovery of control systems tested, including from ransomware",
        ],
      },
      {
        title: "Product security (for device and software makers)",
        checks: [
          "Secure development lifecycle with threat modelling, testing and release evidence",
          "Software bill of materials per release and component monitoring",
          "Vulnerability handling, coordinated disclosure and a published policy",
          "Reporting capability for actively exploited vulnerabilities and severe incidents",
        ],
      },
      {
        title: "Governance, training and evidence",
        checks: [
          "Management approval and oversight of security measures",
          "Training for engineers, operators and management",
          "Evidence of controls retained for supervisors and assessors",
          "Metrics reported on a regular cycle",
        ],
      },
    ],
    questionsTitle: "Seven questions to ask any vendor or engineering partner",
    questions: [
      "How do you discover and monitor our OT assets without disturbing the process?",
      "How do you decide which zones and security levels we need, and how are they enforced?",
      "How is remote access controlled, recorded and revoked?",
      "How will incidents be detected, classified and reported within regulatory deadlines?",
      "What happens to control system recovery if our business network is lost or encrypted?",
      "Who owns the designs, automation and evidence, and what do we receive on exit?",
      "Which comparable operators or manufacturers have you worked with, and what did they find hardest?",
    ],
  },
];
