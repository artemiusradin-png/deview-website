export interface LeadMagnetResource {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  lead: string;
  buyerStage: string;
  format: string;
  fileDeliverable: string;
  sections: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
  assessmentQuestions?: Array<{
    category: string;
    question: string;
    options: Array<{
      label: string;
      score: number;
    }>;
  }>;
  commercialFollowUp: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const LEAD_MAGNET_RESOURCES: Record<string, LeadMagnetResource> = {
  "upstream-production-system-requirements": {
    slug: "upstream-production-system-requirements",
    id: "LM-01",
    title: "Upstream Production Management System Requirements Workbook",
    subtitle: "A comprehensive, testable requirements workbook for daily production reporting, well test allocation, loss deferments, and SCADA integration.",
    lead: "Use this ungated engineering workbook to evaluate, specify, or procure an upstream production management and hydrocarbon accounting system. It covers master data, telemetry acquisition, allocation algorithms, loss accounting, and regulatory compliance.",
    buyerStage: "Problem Definition & Shortlist Evaluation",
    format: "Interactive HTML Summary + Editable Excel/Word Spec Workbook",
    fileDeliverable: "Deview_Upstream_Production_Requirements_v2026.xlsx",
    sections: [
      {
        title: "1. Asset & Wellbore Hierarchy Master Data",
        description: "Requirements governing how fields, platforms, wells, completions, and export nodes are modeled over time.",
        items: [
          "Hierarchy must support field, platform, well, completion string, test separator, and custody transfer meter nodes.",
          "Attributes must be effective-dated so historical production calculations remain accurate when well completions or artificial lift systems change.",
          "System must maintain shared unique identifiers with plant historians, subsurface models, and ERP cost centers.",
          "All changes to well status (flowing, shut-in, suspended) must require operational supervisor sign-off.",
        ],
      },
      {
        title: "2. Data Acquisition & One-Way SCADA Link",
        description: "Standards for capturing time-series telemetry while preserving industrial control cybersecurity.",
        items: [
          "System must ingest flow computer, wellhead pressure, temperature, and tank gauge readings via a unidirectional network diode.",
          "Data acquisition must maintain native sensor resolution with automated quality flags (good, bad, estimated, manual).",
          "Automated detection of telemetry gaps with configurable interpolation, backfilling, and freeze-value detection.",
          "Zero write-path into industrial control loops or safety instrumented systems.",
        ],
      },
      {
        title: "3. Well Tests & Hydrocarbon Back-Allocation",
        description: "Mathematical requirements for testing wells and allocating custody transfer volumes back to completions.",
        items: [
          "Validation of test separator runs: duration checks, fluid rate stability, water cut verification, and GOR boundaries.",
          "Automated generation of well performance curves and decline rates based on verified historical test runs.",
          "Back-allocation of fiscal custody transfer sales volumes to individual producing wells based on agreed allocation formulas.",
          "Reconciliation views displaying theoretical production vs allocated volumes with automated shrinkage factor calculations.",
        ],
      },
      {
        title: "4. Loss Deferment & Downtime Tracking",
        description: "Standards for categorizing and accounting for deferred oil and gas volumes.",
        items: [
          "Classification of deferments by category: surface mechanical, subsurface failure, power outage, pipeline shutdown, planned turnaround.",
          "Calculated production losses measured against dynamic well potential rather than static historic averages.",
          "Direct linking of deferment entries to work orders in computerized maintenance management systems (CMMS).",
          "Audit logs tracking revisions to root-cause assignments and deferred volume calculations.",
        ],
      },
      {
        title: "5. Operational Approvals & Restatement Governance",
        description: "Workflows for locking daily reports and managing retroactive adjustments.",
        items: [
          "Multi-stage approval workflow: field operator entry, production engineer review, asset manager approval and locking.",
          "Automated locking of daily records at midnight or agreed cut-off times, preventing unauthorized modifications.",
          "Restatement protocol: retroactive adjustments require documented engineering justification and retain full prior history.",
          "Side-by-side audit view comparing originally reported volumes against restated figures for partner audits.",
        ],
      },
      {
        title: "6. Regulatory Filings & Sovereign Data Residency",
        description: "Compliance requirements for statutory reporting and national hosting.",
        items: [
          "Automated generation of daily, monthly, and annual production filings formatted for national upstream regulators.",
          "Full software deployment flexibility inside sovereign on-premise data centers or certified domestic cloud VPCs.",
          "Encrypted local edge buffering ensuring remote field stations continue recording production during satellite dropouts.",
          "Role-based access controls enforcing strict partner commercial confidentiality across shared facilities.",
        ],
      },
    ],
    commercialFollowUp: {
      title: "45-Minute Production Workflow Review",
      description: "Walk through your field allocation rules, loss deferment categories, and SCADA historian telemetry with our senior petroleum systems architects to identify operational friction points.",
      ctaLabel: "Book a 45-Minute Production Workflow Review",
      ctaHref: "/en/contact?topic=production-workflow-review",
    },
  },

  "oil-gas-project-controls-jv-reporting-checklist": {
    slug: "oil-gas-project-controls-jv-reporting-checklist",
    id: "LM-02",
    title: "Oil & Gas Project Controls and JV Reporting Checklist",
    subtitle: "A practical evaluation checklist for capital project controls, EPC contractor progress tracking, AFE workflows, and joint venture cash calls.",
    lead: "Designed for capital project managers, joint venture controllers, and procurement teams. Use this checklist to evaluate whether your current software systems or prospective vendors can handle mega-programme governance, Primavera P6 and SAP integration, and multi-partner accounting.",
    buyerStage: "Technical Discovery & Procurement Evaluation",
    format: "Interactive Online Checklist + Downloadable XLSX Matrix",
    fileDeliverable: "Deview_Project_Controls_JV_Checklist_v2026.xlsx",
    sections: [
      {
        title: "1. Work Breakdown & Enterprise Ledger Structure",
        description: "Aligning project schedules with financial accounting ledgers.",
        items: [
          "Is the Primavera P6 work breakdown structure (WBS) mapped directly to SAP cost centers and general ledger accounts?",
          "Are approved scope and cost baselines locked with cryptographic timestamps and change-order links?",
          "Can the system model joint venture concession interests with effective-dated equity percentages?",
          "Does the structure support multi-tier programmes with independent EPC execution packages?",
        ],
      },
      {
        title: "2. Contractor Submittals & Progress Verification",
        description: "Standardizing how engineering and construction vendors submit progress.",
        items: [
          "Do contractors enter daily progress, craft labor, and equipment hours through a secure, isolated digital portal?",
          "Are physical progress claims verified against pre-agreed rules of credit and engineering deliverables?",
          "Does the system generate pre-validated draft Service Entry Sheets (SES) before submission to corporate ERP?",
          "Can contractors upload inspection evidence, drone photos, and test certificates directly to work-pack records?",
        ],
      },
      {
        title: "3. Earned Value Analysis & Statistical Forecasting",
        description: "Evaluating objective cost and schedule performance indices.",
        items: [
          "Are Planned Value (PV), Earned Value (EV), and Actual Cost (AC) calculated automatically across all structure levels?",
          "Does the system calculate Cost Performance Index (CPI) and Schedule Performance Index (SPI) without manual spreadsheets?",
          "Are Estimate at Completion (EAC) projections calculated using verified historical performance trends?",
          "Can executive dashboards visualize portfolio cash burn rates and critical-path schedule float variance?",
        ],
      },
      {
        title: "4. Joint Venture AFE & Cash Call Governance",
        description: "Managing capital approvals and partner equity billings.",
        items: [
          "Does the platform manage multi-tier Authorization for Expenditure (AFE) drafting, review, and partner ballot voting?",
          "Are monthly partner cash calls generated automatically in contract currencies (USD, local currency) with FX revaluation?",
          "Can non-operating partners drill down from high-level Joint Interest Billing (JIB) lines into scanned contractor invoices?",
          "Are automated threshold alerts triggered when actual expenditures approach approved AFE budget ceilings?",
        ],
      },
      {
        title: "5. In-Country Value (ICV) & Local Content Auditing",
        description: "Verifying statutory contractor compliance with local content laws.",
        items: [
          "Does the portal track contractor workforce nationalization percentages against contractual commitments?",
          "Are domestic procurement invoices and local subcontracting spend tracked for statutory audits?",
          "Can the system produce certified reports aligned with UAE ICV, Saudi IKTVA, or Nigeria NOGICD frameworks?",
          "Are vendor trade licenses and safety accreditations monitored with automated expiration notifications?",
        ],
      },
    ],
    commercialFollowUp: {
      title: "Project-Controls & JV Reporting Assessment",
      description: "Book an architecture mapping session to evaluate Primavera P6 WBS alignment, SAP/Oracle commitment tracking, and partner billing audit trails before commencing procurement.",
      ctaLabel: "Schedule a Project-Controls & JV Assessment",
      ctaHref: "/en/contact?topic=project-controls-assessment",
    },
  },

  "oil-gas-it-ot-architecture-checklist": {
    slug: "oil-gas-it-ot-architecture-checklist",
    id: "LM-03",
    title: "Oil & Gas IT/OT Architecture & Industrial Security Checklist",
    subtitle: "A technical evaluation checklist for securely streaming SCADA and plant historian data into business analytics platforms without touching control.",
    lead: "Created for Chief Information Security Officers (CISOs), industrial cybersecurity teams, and automation engineers. Use this checklist to audit proposed architectures for one-way operational data flow, network segmentation, and IEC 62443 compliance.",
    buyerStage: "Technical Architecture Validation & Security Sign-Off",
    format: "Interactive Online Checklist + Downloadable Architecture XLSX",
    fileDeliverable: "Deview_IT_OT_Security_Architecture_Checklist_v2026.xlsx",
    sections: [
      {
        title: "1. Network Segmentation & Trust Boundaries (IEC 62443)",
        description: "Verifying physical and logical separation between industrial control and corporate IT.",
        items: [
          "Is an Industrial Demilitarized Zone (IDMZ / Level 3.5) established between Level 3 control and Level 4 corporate networks?",
          "Are all incoming network connections from Level 4 enterprise applications terminated in the DMZ without penetrating Level 2/3?",
          "Is a unidirectional physical data diode or protocol-enforced diode proxy deployed for telemetry extraction?",
          "Are dual-homed servers bridging control and enterprise networks strictly prohibited by firewall policy?",
        ],
      },
      {
        title: "2. Unidirectional Data Diode Configuration",
        description: "Ensuring zero return write-path into industrial controllers.",
        items: [
          "Does the data diode enforce optical transmission where the return electrical path is physically absent?",
          "Do broker protocols (such as MQTT Sparkplug B or Kafka) operate in pub-sub mode with no inbound listening ports on OT nodes?",
          "Are all enterprise queries executed against mirrored database replicas residing entirely on the IT side of the boundary?",
          "Is there absolute certainty that no control command or setpoint modification can traverse the interface?",
        ],
      },
      {
        title: "3. Edge Telemetry Buffering & Network Resilience",
        description: "Guaranteeing data durability across intermittent field links.",
        items: [
          "Do edge gateway appliances buffer time-series readings locally during telecommunication network dropouts?",
          "Does the buffering engine preserve native sensor timestamps, sequence numbers, and OPC quality flags?",
          "Is priority burst synchronization enforced upon reconnection, transmitting safety alarms before historical bulk data?",
          "Are edge databases encrypted at rest using AES-256 with hardware TPM key custody?",
        ],
      },
      {
        title: "4. Identity, Access & Cryptographic Provenance",
        description: "Governing user identity and data authenticity.",
        items: [
          "Is mutual TLS (mTLS) with pinned cryptographic certificates enforced across all edge-to-hub communication links?",
          "Are manual field measurements and well test entries cryptographically signed with technician private keys?",
          "Are access permissions into the analytics tier governed by enterprise role-based access control (RBAC)?",
          "Are all administrative actions and configuration changes recorded in immutable, tamper-evident audit logs?",
        ],
      },
    ],
    commercialFollowUp: {
      title: "IT/OT Integration Boundary Review & Sovereign AI Workshop",
      description: "Our industrial systems architects review your Purdue Model L2/L3 DMZ boundaries, unidirectional data diode topologies, and sovereign on-premise AI inference readiness against IEC 62443.",
      ctaLabel: "Request an IT/OT Boundary Review",
      ctaHref: "/en/contact?topic=it-ot-boundary-review",
    },
  },

  "osdu-exploration-data-readiness-assessment": {
    slug: "osdu-exploration-data-readiness-assessment",
    id: "LM-04",
    title: "OSDU & Exploration Data Platform Readiness Assessment",
    subtitle: "A scored readiness assessment evaluating subsurface metadata, geodetic parameters, tape archives, and OSDU cloud ingestion feasibility.",
    lead: "Designed for chief geoscientists, exploration data managers, and national oil company technical directors. Complete this scored assessment to determine your organisation's readiness to migrate legacy subsurface archives into a modern, vendor-neutral OSDU data platform.",
    buyerStage: "Technical Discovery & Strategic Business Case",
    format: "Interactive Online Diagnostic + Scored XLSX Readiness Report",
    fileDeliverable: "Deview_OSDU_Readiness_Diagnostic_v2026.xlsx",
    sections: [
      {
        title: "1. Subsurface Data Inventory & Taxonomy Quality",
        description: "Evaluating the condition and completeness of well and seismic archives.",
        items: [
          "Are all national wells and wellbores identified by a unique, standardized identifier (such as API or national UWI)?",
          "Are 2D and 3D seismic surveys stored with verified navigation files and documented coordinate reference systems (CRS)?",
          "Are digital well logs catalogued with standardized curve mnemonics and verified depth reference units?",
          "Is there an up-to-date registry of core samples, fluid assays, and petrophysical laboratory reports?",
        ],
      },
      {
        title: "2. Legacy Media & Tape Digitisation Status",
        description: "Assessing physical tapes, scanned logs, and migration priorities.",
        items: [
          "Are physical seismic magnetic tapes (9-track, 3480, 3590, LTO) inventoried with physical degradation assessments?",
          "Has a prioritized digitisation plan been established based on concession licensing value and data loss risk?",
          "Are scanned well logs and geological reports indexed with searchable OCR metadata?",
          "Is there a validated verification process proving that transcribed data matches the original source tapes?",
        ],
      },
      {
        title: "3. Spatial Geodesy & Coordinate Integrity",
        description: "Preventing spatial positioning errors across survey vintages.",
        items: [
          "Are all survey coordinates mapped to authoritative EPSG geodetic parameter dataset reference numbers?",
          "Are historical coordinate transformations (local datums to WGS84) codified in automated transformation pipelines?",
          "Are wellhead surface coordinates, bottom-hole coordinates, and directional surveys mathematically reconciled?",
          "Does spatial search accurately display survey bounding polygons on interactive GIS base maps?",
        ],
      },
      {
        title: "4. Entitlement Governance & Sovereign Hosting Readiness",
        description: "Ensuring regulatory compliance and multi-client access security.",
        items: [
          "Are subsurface data access rights linked directly to concession contract terms, confidentiality periods, and relinquishment dates?",
          "Does your infrastructure satisfy national data sovereignty mandates for in-country geological data storage?",
          "Is there a mechanism to apply dynamic watermarking across virtual data room documents during farm-in reviews?",
          "Can the target deployment run containerized on-premise or inside sovereign domestic cloud regions?",
        ],
      },
    ],
    assessmentQuestions: [
      {
        category: "Subsurface Master Data",
        question: "How are national well identifiers and wellbore registries managed today?",
        options: [
          { label: "Centralized master data service with enforced unique identifiers across all applications", score: 25 },
          { label: "Relational database with standard IDs, but manual synchronization across departments", score: 15 },
          { label: "Multiple department spreadsheets with frequent naming discrepancies and duplicates", score: 5 },
          { label: "No unified well naming standard; records are scattered across paper and disconnected drives", score: 0 },
        ],
      },
      {
        category: "Seismic Archive Quality",
        question: "What is the condition of your 2D and 3D seismic survey digital archives?",
        options: [
          { label: "All digital SEG-Y with verified navigation coordinates and documented EPSG datums in cloud storage", score: 25 },
          { label: "Majority digital on enterprise network storage, but some coordinate datums require manual verification", score: 15 },
          { label: "Substantial proportion stored on legacy magnetic tapes with incomplete navigation records", score: 5 },
          { label: "Physical tapes and paper sections in storage facilities with unknown readability status", score: 0 },
        ],
      },
      {
        category: "Tool & Vendor Interoperability",
        question: "How freely does subsurface data move between interpretation software tools?",
        options: [
          { label: "Data is stored in open, vendor-neutral formats accessible via standard RESTful APIs", score: 25 },
          { label: "Data is exported and imported between tools using standard LAS, DLIS, and SEG-Y files with minor friction", score: 15 },
          { label: "Data is locked inside proprietary project databases of a single commercial software vendor", score: 5 },
          { label: "Data transfer requires extensive manual conversion scripts and third-party consulting", score: 0 },
        ],
      },
      {
        category: "Data Sovereignty & Infrastructure",
        question: "What is your target infrastructure for hosting subsurface data?",
        options: [
          { label: "Certified domestic sovereign cloud or on-premise Kubernetes cluster with complete data residency", score: 25 },
          { label: "Private cloud VPC in a regionally accredited data center with customer-controlled encryption", score: 15 },
          { label: "Public cloud storage without dedicated geographic tenancy guarantees", score: 5 },
          { label: "Unmanaged on-premise servers with aging storage and no automated disaster recovery", score: 0 },
        ],
      },
    ],
    commercialFollowUp: {
      title: "OSDU Exploration Data Readiness Review",
      description: "Review your diagnostic readiness score with our exploration data architects to build a phased subsurface data migration roadmap and initial ingestion pilot.",
      ctaLabel: "Schedule an OSDU Readiness Review",
      ctaHref: "/en/contact?topic=osdu-readiness-review",
    },
  },
};

export function getAllResources(): LeadMagnetResource[] {
  return Object.values(LEAD_MAGNET_RESOURCES);
}

export function getResourceBySlug(slug: string): LeadMagnetResource | undefined {
  return LEAD_MAGNET_RESOURCES[slug];
}

