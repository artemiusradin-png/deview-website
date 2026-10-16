import type { SolutionPage } from "./types";

export const CLOUD_OTHERS_PAGES: SolutionPage[] = [
  {
    slug: "ot-cybersecurity-iec-62443",
    vertical: "oil-gas",
    serviceId: "cloud-devops",
    seoTitle: "OT Cybersecurity Engineering (IEC 62443) | Deview",
    seoDescription:
      "OT cybersecurity engineering to IEC 62443: asset inventory, risk assessment, zones and conduits, segmentation, remote access, monitoring and recovery.",
    kicker: "Cloud and security · Industrial",
    h1: "OT cybersecurity engineering (IEC 62443)",
    intro:
      "We provide OT cybersecurity engineering to IEC 62443 for oil and gas, energy and industrial operators: asset inventory and network visibility, security risk assessment, design of zones and conduits, segmentation and secure remote access, monitoring of operational networks, OT-aware patching and recovery of control systems. Security is engineered around the safety and availability of the process, and you own the designs and the code.",
    modules: [
      {
        title: "OT asset inventory and visibility",
        body: "A reliable inventory of controllers, HMIs, servers, network devices and software versions, built mostly by passive discovery so the process is not disturbed.",
      },
      {
        title: "Security risk assessment",
        body: "Assessment of threats, vulnerabilities and consequences for each system, with consequence defined in safety, environmental, production and financial terms.",
      },
      {
        title: "Zones and conduits design",
        body: "Grouping of assets into zones by function and risk, with conduits that define and control the communication between them, and target security levels for each.",
      },
      {
        title: "Network segmentation",
        body: "Implementation of the design with industrial firewalls, demilitarised zones and, where appropriate, data diodes, aligned with the Purdue reference model.",
      },
      {
        title: "Secure remote access",
        body: "Controlled access for vendors and engineers through jump hosts with multi-factor authentication, session recording and time-limited approval.",
      },
      {
        title: "OT network monitoring",
        body: "Passive monitoring that detects new devices, unusual commands and known attack patterns, integrated with the security operations centre with OT-aware playbooks.",
      },
      {
        title: "Patch and vulnerability management",
        body: "A risk-based process that matches vulnerabilities to your assets, plans patches around maintenance windows and applies compensating controls where patching is not possible.",
      },
      {
        title: "Backup, recovery and resilience",
        body: "Tested backups of controller logic and configuration, offline copies and recovery procedures for the control system, rehearsed with operations.",
      },
      {
        title: "Governance and supplier requirements",
        body: "An OT security programme with roles and policies, secure procurement requirements for vendors and integrators, and training of engineers and operators.",
      },
    ],
    diagram: {
      title: "OT cybersecurity to IEC 62443: reference architecture",
      desc: "Control and safety systems on the plant floor sit in zones separated by conduits with firewalls and data diodes. A demilitarised zone hosts historians and remote access, and the business network and security operations connect through controlled paths. Monitoring, patching and recovery processes surround the zones.",
      leftLabel: "Plant (OT)",
      platformLabel: "Security architecture",
      rightLabel: "Business and operations",
      platformTitle: "Zones, conduits and controls",
      boundary: "IT and OT boundary",
      left: [
        ["Control and safety systems", "PLC, DCS, SIS"],
        ["Supervisory and HMI", "SCADA, engineering"],
        ["Field networks", "Fieldbus, wireless"],
      ],
      modules: [
        ["Asset inventory", "Passive discovery"],
        ["Zones and conduits", "Security levels"],
        ["Segmentation", "Firewalls, diodes"],
        ["Remote access", "MFA, jump host"],
        ["OT monitoring", "Passive detection"],
        ["Patch and recovery", "Risk-based, tested"],
      ],
      strip: "Safety first · change control · audit trail",
      right: [
        ["Historians and data platform", "DMZ, one-way data"],
        ["Vendors and engineers", "Controlled access"],
        ["Security operations", "OT alerts"],
        ["Management and regulators", "Risk and evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: the plant is divided into zones with controlled conduits, and monitoring and recovery are designed around the process.",
    standards: [
      {
        name: "IEC 62443 series",
        note: "The standards for industrial automation and control system security: programme requirements (2-1), service providers (2-4), risk assessment and zones and conduits (3-2), system requirements and security levels (3-3), and secure product development and component requirements (4-1 and 4-2).",
      },
      {
        name: "NIST SP 800-82",
        note: "Guide to operational technology security, covering architectures, risks and controls for industrial control systems.",
      },
      {
        name: "ISO/IEC 27019",
        note: "Information security controls for the energy utility industry, extending ISO/IEC 27002 to process control systems.",
      },
      {
        name: "API 1164 and sector guidance",
        note: "Pipeline control system cybersecurity guidance and equivalent sector standards for oil, gas and electricity.",
      },
      {
        name: "MITRE ATT&CK for ICS",
        note: "A knowledge base of adversary behaviour against industrial control systems, used for detection design and exercises.",
      },
      {
        name: "Regulatory regimes",
        note: "NIS2, national critical infrastructure rules and sector regulators' requirements for operators of essential services.",
      },
    ],
    dataModel: [
      {
        entity: "Asset",
        holds: "Type, vendor, model, firmware, location, zone, criticality and owner.",
      },
      {
        entity: "Zone and conduit",
        holds: "Members, target and achieved security level, allowed flows and controls.",
      },
      {
        entity: "Risk and consequence",
        holds: "Threat scenario, likelihood, consequence categories, existing controls and residual risk.",
      },
      {
        entity: "Vulnerability and patch status",
        holds: "Advisory, affected assets, severity, decision, compensating control and date.",
      },
      {
        entity: "Remote access session",
        holds: "User, vendor, target, approval, time and recording.",
      },
      {
        entity: "Detection event",
        holds: "Source, behaviour, asset, severity and response.",
      },
      {
        entity: "Recovery asset",
        holds: "Backup of logic or configuration, version, location and last restore test.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "OT security products for visibility, monitoring and remote access are mature, and the right base for most operators. Many can be integrated with existing security operations tools.",
      },
      {
        title: "Extend",
        body: "Extend products with your own asset model, integration into maintenance and change processes, and OT-aware response playbooks, where products stop at detection.",
      },
      {
        title: "Build",
        body: "Build custom integration and automation across many sites and vendors, such as inventory reconciliation, patch tracking and recovery orchestration, which products rarely cover end to end.",
      },
    ],
    security: [
      {
        title: "Safety and availability first",
        body: "Changes are tested, scheduled with operations and reversible, and no control is applied that could affect safety functions without engineering approval.",
      },
      {
        title: "Minimal inbound access",
        body: "Access into the plant is limited, authenticated, approved and recorded, with outbound data paths preferred.",
      },
      {
        title: "Integrity of control logic",
        body: "Changes to controller programs are detected, compared with approved versions and recorded.",
      },
      {
        title: "Supplier discipline",
        body: "Vendors and integrators meet security requirements in contracts and on site, and their access is time-limited.",
      },
      {
        title: "Resilience by design",
        body: "Critical functions continue in a degraded state if connectivity or business systems are lost.",
      },
    ],
    phases: [
      {
        title: "Assessment and inventory",
        body: "We inventory assets passively, review architecture and processes with operations and automation, and assess risk against IEC 62443.",
      },
      {
        title: "Target architecture",
        body: "Zones, conduits, security levels and the roadmap are designed, with risk and cost trade-offs agreed with operations and safety.",
      },
      {
        title: "Implement foundations",
        body: "Segmentation, secure remote access, monitoring and backups are implemented site by site in planned windows.",
      },
      {
        title: "Operate and test",
        body: "Detection, response and recovery are exercised with operations, and the patching process starts.",
      },
      {
        title: "Extend and sustain",
        body: "More sites, supplier requirements and training are added, and the programme is reviewed regularly.",
      },
    ],
    proof: [
      { label: "EnerQuest: field data flowing one way into an analytics layer", href: "/case-studies/enerquest" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
    ],
    faqs: [
      {
        q: "How is OT security different from IT security?",
        a: "Availability and safety come first. Systems run for decades, cannot always be patched or scanned actively, and changes need operational approval. The controls are adapted to that: passive monitoring, segmentation, careful change and tested recovery.",
      },
      {
        q: "What are zones and conduits?",
        a: "Zones are groups of assets with similar security needs. Conduits are the controlled paths between zones. IEC 62443 uses them to design segmentation and to set a target security level for each zone.",
      },
      {
        q: "Do you need to scan our control systems?",
        a: "We prefer passive discovery that listens to network traffic without sending anything. Active scanning is used only where operations and the vendor agree it is safe.",
      },
      {
        q: "Can we certify to IEC 62443?",
        a: "Certification applies to products, processes and service providers through accredited bodies. We engineer to the standard and prepare you for assessments, and the certification itself is issued by the certification body.",
      },
      {
        q: "Who owns the designs and code?",
        a: "You do. The designs, the automation and the data stay yours.",
      },
    ],
    assetId: "ot-security-cra-checklist",
    related: [
      { label: "NIS2 compliance engineering", href: "/solutions/nis2-compliance-engineering" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Oil and gas software development", href: "/solutions/oil-and-gas-software" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "nis2-compliance-engineering",
    vertical: "manufacturing",
    serviceId: "cloud-devops",
    seoTitle: "NIS2 Compliance Engineering for Energy and Manufacturing | Deview",
    seoDescription:
      "NIS2 compliance engineering for energy and manufacturing: applicability, risk measures, incident reporting, supply chain security and management evidence.",
    kicker: "Cloud and security · Industrial",
    h1: "NIS2 compliance engineering for energy and manufacturing",
    intro:
      "We provide NIS2 compliance engineering for energy and manufacturing companies: determining whether and how the directive applies, implementing the cybersecurity risk-management measures it lists, building incident detection and reporting workflows that meet its deadlines, securing the supply chain and producing the evidence that management and supervisors expect. Obligations become engineering work with owners and dates, and you own the controls and the code.",
    modules: [
      {
        title: "Applicability and scoping",
        body: "Assessment of whether each legal entity is an essential or important entity under the sector lists and size rules, in each member state where it operates.",
      },
      {
        title: "Risk analysis and security policies",
        body: "A documented risk analysis and information system security policy, owned by management and reviewed regularly.",
      },
      {
        title: "Incident handling and reporting",
        body: "Detection, classification and workflows to submit an early warning, an incident notification and a final report to the national authority within the required times.",
      },
      {
        title: "Business continuity and crisis management",
        body: "Backup management, disaster recovery and crisis procedures for the systems that support essential services, tested on a schedule.",
      },
      {
        title: "Supply chain security",
        body: "Assessment and contractual security requirements for suppliers and service providers, with monitoring and a register of critical dependencies.",
      },
      {
        title: "Secure acquisition and development",
        body: "Security requirements in procurement and development, vulnerability handling and coordinated disclosure processes.",
      },
      {
        title: "Access control, authentication and cryptography",
        body: "Identity and access management, multi-factor authentication, privileged access control and the use of cryptography and secured communications.",
      },
      {
        title: "Effectiveness testing",
        body: "Policies and procedures to assess the effectiveness of the measures, including vulnerability scanning, penetration testing and exercises.",
      },
      {
        title: "Management accountability and training",
        body: "Management approval and oversight of measures, training for management and staff, and records that show both.",
      },
    ],
    diagram: {
      title: "NIS2 compliance engineering: reference architecture",
      desc: "IT and OT systems, suppliers and incidents feed a compliance platform with scoping, risk analysis, security measures, incident reporting, continuity, supply chain security and effectiveness testing. Outputs go to management, national authorities, auditors and suppliers.",
      leftLabel: "Estate and events",
      platformLabel: "Compliance platform",
      rightLabel: "Consumers",
      platformTitle: "NIS2 compliance platform",
      left: [
        ["IT and OT systems", "Assets, controls"],
        ["Suppliers and services", "Contracts, dependencies"],
        ["Incidents and alerts", "Detection, tickets"],
      ],
      modules: [
        ["Scoping", "Entities, sectors"],
        ["Risk analysis", "Risks, owners"],
        ["Security measures", "Controls, evidence"],
        ["Incident reporting", "Early warning, report"],
        ["Supply chain", "Register, requirements"],
        ["Testing", "Scans, tests, exercises"],
      ],
      strip: "Management approval · evidence retention · audit trail",
      right: [
        ["Management body", "Oversight, approvals"],
        ["National authorities", "Notifications"],
        ["Auditors", "Evidence"],
        ["Suppliers", "Requirements"],
      ],
    },
    diagramCaption:
      "Reference architecture: the directive's measures are tracked as controls with owners and evidence, and incidents flow into the reporting workflow.",
    standards: [
      {
        name: "Directive (EU) 2022/2555 (NIS2)",
        note: "The EU directive on measures for a high common level of cybersecurity, applying to essential and important entities in energy, transport, manufacturing of certain products and other sectors, as transposed into national law.",
      },
      {
        name: "Implementing regulations and national laws",
        note: "Technical and methodological requirements for certain entities, and the national transposition that sets the details of scope, supervision and penalties.",
      },
      {
        name: "ISO/IEC 27001 and 27002",
        note: "Information security management system and control catalogue that map closely to the directive's measures.",
      },
      {
        name: "IEC 62443",
        note: "Industrial automation security standards for the operational technology that energy and manufacturing entities depend on.",
      },
      {
        name: "ENISA guidance",
        note: "Technical guidance on implementing the security measures and on supply chain security.",
      },
      {
        name: "Incident classification and reporting rules",
        note: "National templates and channels for reporting significant incidents, with the three-stage timeline.",
      },
    ],
    dataModel: [
      {
        entity: "Entity and service",
        holds: "Legal entity, sector, size, classification, member states and essential services.",
      },
      {
        entity: "Risk and measure",
        holds: "Risk, measure, owner, status, evidence and review date.",
      },
      {
        entity: "Incident and report",
        holds: "Detection time, classification, reports submitted and their times, and lessons.",
      },
      {
        entity: "Supplier and dependency",
        holds: "Supplier, service, criticality, security assessment, contract clauses and review date.",
      },
      {
        entity: "Test and finding",
        holds: "Type, scope, results, findings and remediation.",
      },
      {
        entity: "Training and approval record",
        holds: "Management and staff training, approvals of policies and measures.",
      },
      {
        entity: "Continuity plan",
        holds: "Service, procedure, test dates and results.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Governance, risk and compliance tools and managed security services cover much of the documentation, tracking and monitoring, and are an economical route for many entities.",
      },
      {
        title: "Extend",
        body: "Extend GRC tools with automatic evidence from your IT and OT estate, incident workflows connected to your detection tools and supplier risk data.",
      },
      {
        title: "Build",
        body: "Build custom engineering where the directive meets industrial reality: segmentation and monitoring of plants, secure remote access and reporting that spans many entities and countries.",
      },
    ],
    security: [
      {
        title: "Management responsibility",
        body: "Management approves measures and oversees implementation, and the system keeps evidence of both.",
      },
      {
        title: "Rapid detection and escalation",
        body: "Incident detection and escalation paths designed so early warnings can be made within the first day.",
      },
      {
        title: "Supplier accountability",
        body: "Contracts require security measures, incident notification and audit rights from critical suppliers.",
      },
      {
        title: "Evidence integrity",
        body: "Control evidence, incident reports and test results are stored unaltered and retrievable for supervisors.",
      },
      {
        title: "Tested continuity",
        body: "Backups and recovery are tested, with attention to ransomware and loss of OT systems.",
      },
    ],
    phases: [
      {
        title: "Applicability and gap analysis",
        body: "We determine the position of each entity under national law and compare current practice with the measures, in IT and OT.",
      },
      {
        title: "Roadmap and ownership",
        body: "Gaps are turned into a prioritised roadmap with owners, budgets and dates, approved by management.",
      },
      {
        title: "Implement priority measures",
        body: "Identity, backups, monitoring, segmentation, supplier requirements and the incident workflow are implemented first.",
      },
      {
        title: "Test and evidence",
        body: "Measures are tested, exercises run and evidence is collected in one place.",
      },
      {
        title: "Operate and report",
        body: "The programme runs with regular management reporting and continuous improvement.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "OT cybersecurity engineering (IEC 62443)", href: "/solutions/ot-cybersecurity-iec-62443" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "Is our company in scope of NIS2?",
        a: "It depends on the sector, the size and the member state's law. Energy, including oil and gas, and several manufacturing sectors are covered, with different obligations for essential and important entities. We assess each legal entity.",
      },
      {
        q: "What are the reporting deadlines?",
        a: "Significant incidents require an early warning within a day of becoming aware, an incident notification shortly after, and a final report afterwards. The exact times and templates are set by the directive and national authorities, which we build into the workflow.",
      },
      {
        q: "Does NIS2 cover operational technology?",
        a: "It covers the network and information systems that support essential services, which in energy and manufacturing includes operational technology. Industrial standards such as IEC 62443 are a practical way to meet the measures for OT.",
      },
      {
        q: "Are managers personally liable?",
        a: "The directive makes management bodies responsible for approving and overseeing the measures and allows sanctions on them in some circumstances. That is why training and evidence for management are part of the work.",
      },
      {
        q: "Who owns the controls and the code?",
        a: "You do. The controls, the automation and the evidence stay yours.",
      },
    ],
    assetId: "ot-security-cra-checklist",
    related: [
      { label: "OT cybersecurity engineering (IEC 62443)", href: "/solutions/ot-cybersecurity-iec-62443" },
      { label: "Cyber Resilience Act compliance for device makers", href: "/solutions/cyber-resilience-act-for-device-makers" },
      { label: "DORA ICT risk and resilience engineering", href: "/solutions/dora-ict-risk-engineering" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "cyber-resilience-act-for-device-makers",
    vertical: "manufacturing",
    serviceId: "cloud-devops",
    seoTitle: "Cyber Resilience Act Compliance for Connected Device Makers | Deview",
    seoDescription:
      "Cyber Resilience Act compliance for connected device makers: secure development, SBOM, vulnerability handling, reporting, secure updates and technical files.",
    kicker: "Cloud and security · Industrial",
    h1: "Cyber Resilience Act compliance for connected device makers",
    intro:
      "We provide Cyber Resilience Act compliance for connected device makers and software vendors: classifying products, building the secure development lifecycle, software bills of materials, vulnerability handling and the reporting process that has applied since September 2026, secure update mechanisms and the technical documentation needed for conformity assessment. We work on the software, process and tooling around your products, and you own the processes and the code.",
    modules: [
      {
        title: "Product scoping and classification",
        body: "Determination of whether each product is a product with digital elements, its category, and the conformity route that follows from the regulation.",
      },
      {
        title: "Cybersecurity risk assessment",
        body: "A documented risk assessment for each product, covering intended use, foreseeable misuse and the essential requirements that apply.",
      },
      {
        title: "Secure development lifecycle",
        body: "Security requirements, threat modelling, secure coding, review and testing in the development process, evidenced for each release.",
      },
      {
        title: "Software bill of materials and component tracking",
        body: "Generation and maintenance of machine-readable SBOMs, and monitoring of components for known vulnerabilities across product versions.",
      },
      {
        title: "Vulnerability handling process",
        body: "Intake of reports, triage, remediation, coordinated disclosure and a published policy, with security updates provided for the support period.",
      },
      {
        title: "Reporting to authorities",
        body: "A workflow that detects actively exploited vulnerabilities and severe incidents and submits an early warning, a notification and a final report through the single reporting platform within the deadlines.",
      },
      {
        title: "Secure update mechanism",
        body: "Signed, authenticated updates with rollback, automatic security updates by default with a way to opt out, and delivery to devices in the field.",
      },
      {
        title: "Secure by default configuration",
        body: "Products delivered without default passwords, with minimal attack surface, data protection by design and a way to reset to a secure state.",
      },
      {
        title: "Technical documentation and conformity",
        body: "The technical file, user information and declaration of conformity, with evidence from testing, and support for third-party conformity assessment where the product category requires it.",
      },
    ],
    diagram: {
      title: "Cyber Resilience Act compliance for device makers: reference architecture",
      desc: "Product engineering, components, field devices and security reports feed a compliance platform with scoping, risk assessment, secure development, SBOM tracking, vulnerability handling, reporting, update management and technical documentation. Outputs go to authorities, customers, conformity assessors and market surveillance.",
      leftLabel: "Product and field",
      platformLabel: "Compliance platform",
      rightLabel: "Consumers",
      platformTitle: "CRA compliance platform",
      left: [
        ["Product engineering", "Code, builds, releases"],
        ["Components and suppliers", "Libraries, firmware"],
        ["Devices in the field", "Versions, updates"],
      ],
      modules: [
        ["Scoping and risk", "Class, assessment"],
        ["Secure development", "Threat model, tests"],
        ["SBOM tracking", "Components, advisories"],
        ["Vulnerability handling", "Triage, fix, disclose"],
        ["Reporting workflow", "24 hours, 72 hours, 14 days"],
        ["Update management", "Signed, staged"],
      ],
      strip: "Technical file · evidence per release · audit trail",
      right: [
        ["ENISA and national CSIRTs", "Reports"],
        ["Customers and users", "Advisories, updates"],
        ["Conformity assessors", "Technical file"],
        ["Market surveillance", "Documentation"],
      ],
    },
    diagramCaption:
      "Reference architecture: every release carries its evidence, every component is tracked and every exploited vulnerability can be reported on time.",
    standards: [
      {
        name: "Regulation (EU) 2024/2847 (Cyber Resilience Act)",
        note: "Cybersecurity requirements for products with digital elements placed on the EU market, with reporting obligations in application from September 2026 and the main requirements from December 2027.",
      },
      {
        name: "Harmonised standards and IEC 62443-4",
        note: "European standardisation work for the CRA, with IEC 62443-4-1 (secure development lifecycle) and 4-2 (component requirements) widely used as evidence.",
      },
      {
        name: "ETSI EN 303 645 and sector standards",
        note: "Baseline security requirements for consumer devices and sector-specific standards that may serve as evidence for particular products.",
      },
      {
        name: "SBOM formats",
        note: "CycloneDX and SPDX for machine-readable bills of materials, with VEX statements to communicate exploitability.",
      },
      {
        name: "Coordinated vulnerability disclosure",
        note: "ISO/IEC 29147 and 30111 for receiving and handling vulnerability reports.",
      },
      {
        name: "NIST SSDF and SLSA",
        note: "Secure software development and supply chain frameworks used to structure the lifecycle evidence.",
      },
    ],
    dataModel: [
      {
        entity: "Product and version",
        holds: "Product, category, versions, support period, markets and conformity status.",
      },
      {
        entity: "Component",
        holds: "Name, version, source, licence, supplier and the products it is part of.",
      },
      {
        entity: "Vulnerability",
        holds: "Identifier, affected components and versions, severity, exploitation status, fix and disclosure.",
      },
      {
        entity: "Report to authority",
        holds: "Type, awareness time, early warning, notification, final report and references.",
      },
      {
        entity: "Release evidence",
        holds: "Requirements covered, tests, reviews, scan results and approvals for each release.",
      },
      {
        entity: "Update campaign",
        holds: "Target devices, version, stages, success rate and rollback.",
      },
      {
        entity: "Technical file",
        holds: "Risk assessment, design documents, test reports, declaration and version history.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Software composition analysis, SBOM, vulnerability management and update platforms are available as products, and are the efficient base for most manufacturers.",
      },
      {
        title: "Extend",
        body: "Extend products with a single workflow that links component tracking, vulnerability triage, field versions and authority reporting, which separate tools rarely connect.",
      },
      {
        title: "Build",
        body: "Build custom tooling when you ship many product lines, firmware and software stacks, or when the update and reporting processes must be integrated into your own device platform.",
      },
    ],
    security: [
      {
        title: "Security through the lifecycle",
        body: "Requirements, design review, testing and release gates for security are part of how each product is built, not a final check.",
      },
      {
        title: "Signed and verifiable software",
        body: "Builds, updates and SBOMs are signed, and the provenance of components is recorded.",
      },
      {
        title: "Responsible disclosure",
        body: "A published contact and policy, with timelines for acknowledging and fixing reported vulnerabilities.",
      },
      {
        title: "Rapid reporting capability",
        body: "People, on-call arrangements and tooling that can meet a deadline measured in hours.",
      },
      {
        title: "Updates for the support period",
        body: "Security updates are available for each product throughout the declared support period and delivered securely.",
      },
    ],
    phases: [
      {
        title: "Portfolio scoping and gap assessment",
        body: "We classify products, review development and support practice against the regulation and agree priorities with engineering, product and legal.",
      },
      {
        title: "Process and tooling design",
        body: "The secure development process, SBOM approach, vulnerability workflow and reporting runbook are designed and tooling is chosen.",
      },
      {
        title: "Implement on pilot products",
        body: "The process and tools are implemented on one or two products, and evidence is produced for each release.",
      },
      {
        title: "Exercise reporting and updates",
        body: "A reporting exercise and an update rollout test the workflow and the on-call arrangements end to end.",
      },
      {
        title: "Roll out and prepare conformity",
        body: "The approach extends to all products, with technical files prepared for conformity assessment.",
      },
    ],
    proof: [
      { label: "Edge gateway and embedded software development", href: "/solutions/edge-gateway-and-embedded-software" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "IoT platform development", href: "/solutions/iot-platform-development" },
    ],
    faqs: [
      {
        q: "Does the Cyber Resilience Act apply to us?",
        a: "It applies to manufacturers, importers and distributors of products with digital elements, meaning hardware and software with a data connection, sold in the EU, with some exclusions for products regulated elsewhere. Check classification for each product.",
      },
      {
        q: "What has to be reported and when?",
        a: "Actively exploited vulnerabilities and severe incidents affecting product security must be reported. The process starts with an early warning within 24 hours of awareness, a notification within 72 hours and a final report within 14 days of a fix or mitigation for vulnerabilities. This has applied since September 2026.",
      },
      {
        q: "Do we need to produce an SBOM?",
        a: "Manufacturers must identify and document components and vulnerabilities, including by drawing up an SBOM in a commonly used machine-readable format covering at least top-level dependencies. We build the process to generate and maintain it per release.",
      },
      {
        q: "Does IEC 62443 satisfy the regulation?",
        a: "It provides strong, widely used evidence for secure development and component security, but it is not an automatic route to compliance. We map the standard's requirements to the regulation's essential requirements and cover the differences.",
      },
      {
        q: "Who owns the processes and code?",
        a: "You do. The processes, the tooling and the evidence stay yours.",
      },
    ],
    assetId: "ot-security-cra-checklist",
    related: [
      { label: "Edge gateway and embedded software development", href: "/solutions/edge-gateway-and-embedded-software" },
      { label: "Application security and secure SDLC", href: "/solutions/application-security-and-secure-sdlc" },
      { label: "NIS2 compliance engineering", href: "/solutions/nis2-compliance-engineering" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "edge-to-cloud-for-remote-sites",
    vertical: "oil-gas",
    serviceId: "cloud-devops",
    seoTitle: "Edge-to-Cloud Architecture for Remote and Offshore Sites | Deview",
    seoDescription:
      "Edge-to-cloud architecture for remote and offshore sites: local processing, store-and-forward over satellite and cellular, bandwidth priority and fleet operations.",
    kicker: "Cloud and security · Remote operations",
    h1: "Edge-to-cloud architecture for remote and offshore sites",
    intro:
      "We design edge-to-cloud architecture for remote and offshore sites: local processing that keeps operations running when the link drops, store-and-forward delivery over satellite, cellular and radio links, bandwidth management so the important data goes first, secure connectivity and fleet operations for dozens or hundreds of sites. Remote assets become part of the enterprise data platform without depending on perfect connectivity, and you own the architecture and the code.",
    modules: [
      {
        title: "Site architecture",
        body: "A reference design for each site type, covering power, local network, edge compute, local storage and the boundary with control systems.",
      },
      {
        title: "Connectivity strategy",
        body: "Selection and combination of links such as low-earth-orbit and geostationary satellite, cellular, microwave and fibre, with failover between them.",
      },
      {
        title: "Local processing and autonomy",
        body: "Applications at the edge that keep running without a link: local dashboards, rules, alarms, forms and data capture.",
      },
      {
        title: "Store-and-forward delivery",
        body: "Durable local queues that send data when links are available, in order, with original timestamps, compression and resumable transfers.",
      },
      {
        title: "Bandwidth and priority management",
        body: "Classification of traffic so alarms and operational data go first and bulk data, such as video and large files, goes when capacity allows.",
      },
      {
        title: "Secure connectivity",
        body: "Encrypted tunnels, device identity, segmentation from control systems and outbound-initiated connections with no open inbound ports.",
      },
      {
        title: "Edge application and configuration management",
        body: "Remote deployment, versioning and rollback of applications and configuration to many sites, with staged rollouts and health checks.",
      },
      {
        title: "Cloud ingestion and data model",
        body: "Ingestion of site data into the cloud platform with a consistent asset model, handling of late and out-of-order data and replay after outages.",
      },
      {
        title: "Fleet monitoring and support",
        body: "Visibility of site health, link quality, queue depth and data latency, with alerts, remote diagnostics and a support model that accounts for distance.",
      },
    ],
    diagram: {
      title: "Edge-to-cloud architecture for remote and offshore sites: reference architecture",
      desc: "Control systems, sensors and local users at a remote site connect to an edge platform with local applications, store-and-forward queues and priority management. Satellite, cellular and radio links carry data securely to a cloud platform with ingestion, an asset model and fleet management, and to enterprise systems.",
      leftLabel: "Remote site",
      platformLabel: "Edge platform",
      rightLabel: "Cloud and enterprise",
      platformTitle: "Edge platform at the site",
      boundary: "Intermittent link",
      left: [
        ["Control and monitoring systems", "Read-only access"],
        ["Sensors and meters", "Telemetry"],
        ["Local users and devices", "Dashboards, apps"],
      ],
      modules: [
        ["Local applications", "Run without a link"],
        ["Store and forward", "Durable queues"],
        ["Priority management", "Alarms first"],
        ["Secure tunnels", "Identity, outbound"],
        ["Remote deployment", "Staged, rollback"],
        ["Site health", "Link, queue, latency"],
      ],
      strip: "Satellite · cellular · radio failover · audit trail",
      right: [
        ["Cloud ingestion", "Replay, ordering"],
        ["Data platform", "Asset model, history"],
        ["Enterprise systems", "Operations, maintenance"],
        ["Fleet operations", "Monitoring, support"],
      ],
    },
    diagramCaption:
      "Reference architecture: each site runs autonomously, and its data reaches the cloud over whatever links are available, in priority order.",
    standards: [
      {
        name: "MQTT and Sparkplug B",
        note: "Messaging with session state and last-will handling that suits intermittent links, with defined topics for industrial data.",
      },
      {
        name: "OPC UA",
        note: "Read-only access to control systems and historians at the site.",
      },
      {
        name: "IEC 62443",
        note: "Zones and conduits between control systems, the edge platform and the wide-area link.",
      },
      {
        name: "TLS, mutual authentication and certificates",
        note: "Secure transport and device identity, with automatic certificate rotation.",
      },
      {
        name: "Container and lightweight orchestration standards",
        note: "OCI images and lightweight orchestration for deploying edge applications.",
      },
      {
        name: "Offshore and remote site regulation",
        note: "Hazardous-area equipment rules, radio licensing and data export restrictions that apply to the sites.",
      },
    ],
    dataModel: [
      {
        entity: "Site and asset",
        holds: "Site, type, location, equipment, links available and the edge nodes installed.",
      },
      {
        entity: "Link and quality",
        holds: "Link type, availability, bandwidth, latency, cost and failover order.",
      },
      {
        entity: "Message and queue entry",
        holds: "Payload, source timestamp, priority, size, state and retry count.",
      },
      {
        entity: "Edge application release",
        holds: "Version, sites targeted, stage, health result and rollback.",
      },
      {
        entity: "Telemetry point",
        holds: "Signal, value, quality, source time and arrival time.",
      },
      {
        entity: "Site health snapshot",
        holds: "Queue depth, last contact, resource use, alarms and software versions.",
      },
      {
        entity: "Support case",
        holds: "Site, issue, remote actions, on-site visit needed and resolution.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Cloud edge services and industrial IoT platforms provide edge runtimes, messaging and management, and are the starting point for most remote estates.",
      },
      {
        title: "Extend",
        body: "Extend a platform with your own priority and bandwidth logic, local applications for site crews and the integration into your asset model and operational systems.",
      },
      {
        title: "Build",
        body: "Build when links are severely constrained, when the edge applications are your own, or when the fleet spans many sites and vendors that platforms do not unify.",
      },
    ],
    security: [
      {
        title: "No inbound exposure",
        body: "Sites initiate all connections outward, with no open inbound ports to the plant network.",
      },
      {
        title: "Strong device and site identity",
        body: "Unique certificates per edge node, rotated automatically and revoked if a device is lost.",
      },
      {
        title: "Separation from control",
        body: "The edge platform reads from control systems through a controlled gateway and has no write path.",
      },
      {
        title: "Safe remote changes",
        body: "Configuration and software changes are staged, signed and reversible, with health checks before wide rollout.",
      },
      {
        title: "Physical and local protection",
        body: "Encrypted local storage and hardened devices for sites that are not staffed.",
      },
    ],
    phases: [
      {
        title: "Site and link survey",
        body: "We survey representative sites, links, power and users, and agree what must work locally and what can wait for the link.",
      },
      {
        title: "Reference design",
        body: "A site reference architecture, data priorities, security model and fleet operations approach are designed and reviewed.",
      },
      {
        title: "Build and pilot at one site",
        body: "The edge platform and cloud ingestion are built and run at one site, including link failure tests.",
      },
      {
        title: "Roll out in waves",
        body: "More sites follow in waves, with a repeatable installation and acceptance process.",
      },
      {
        title: "Operate the fleet",
        body: "Monitoring, support and updates run as a service, and the design is refined from fleet data.",
      },
    ],
    proof: [
      { label: "EnerQuest: field data flowing one way into an analytics layer", href: "/case-studies/enerquest" },
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Oil and gas field operations app", href: "/solutions/oil-field-operations-mobile-app" },
    ],
    faqs: [
      {
        q: "What happens when the satellite link is down?",
        a: "The site keeps running. Local applications and alarms work, and data waits in durable queues. When the link returns, queues drain in priority order with original timestamps, so nothing is lost and the cloud sees the right history.",
      },
      {
        q: "How do you cope with very limited bandwidth?",
        a: "By classifying traffic, compressing and aggregating data at the edge, sending alarms and key measures first and deferring bulk data. Edge analytics can send results instead of raw data.",
      },
      {
        q: "Can we manage hundreds of sites?",
        a: "Yes, with a standard site design, remote deployment with staged rollouts and health checks, and a fleet dashboard that shows which sites need attention before they report a problem.",
      },
      {
        q: "Does the edge platform connect to our control systems?",
        a: "It reads from control systems and historians through a controlled gateway, and has no write path. Any exception is designed explicitly and agreed with the automation owner.",
      },
      {
        q: "Who owns the architecture and code?",
        a: "You do. The designs, the code and the data stay yours.",
      },
    ],
    assetId: "iot-hardware-integration-checklist",
    related: [
      { label: "Edge gateway and embedded software development", href: "/solutions/edge-gateway-and-embedded-software" },
      { label: "Industrial IoT and SCADA integration", href: "/solutions/industrial-iot-and-scada-integration" },
      { label: "Production historian integration", href: "/solutions/production-historian-integration" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "sovereign-cloud-and-data-residency",
    vertical: "cross-industry",
    serviceId: "cloud-devops",
    seoTitle: "Sovereign Cloud and Data Residency Engineering | Deview",
    seoDescription:
      "Sovereign cloud and data residency engineering: data classification, region and provider choice, customer-managed keys, access controls and regulator evidence.",
    kicker: "Cloud and security · Sovereignty",
    h1: "Sovereign cloud and data residency",
    intro:
      "We provide sovereign cloud and data residency engineering for enterprises that must control where their data lives and who can reach it: classification of data and the rules that attach to each class, choice of regions and providers, encryption with keys you control, access controls that limit support staff and foreign access, transfer mechanisms where data must cross borders, and evidence for regulators. Sovereignty becomes a set of technical controls and not a claim, and you own the designs and the code.",
    modules: [
      {
        title: "Data classification and obligations",
        body: "A classification of data by sensitivity and legal regime, with the residency, access and transfer rules that apply to each class and country.",
      },
      {
        title: "Region and provider strategy",
        body: "Assessment of cloud providers and sovereign offerings against jurisdiction, ownership, operational control and legal exposure, with a placement decision per workload.",
      },
      {
        title: "Architecture for residency",
        body: "Designs that keep data, backups, logs and metadata in the permitted regions, including the services that replicate data globally by default.",
      },
      {
        title: "Key management and encryption",
        body: "Customer-managed keys held in hardware security modules under your control, bring-your-own or hold-your-own-key models and separation of key custody from the provider.",
      },
      {
        title: "Confidential computing",
        body: "Where needed, workloads that run in hardware-protected enclaves so that data is protected even from the infrastructure operator.",
      },
      {
        title: "Operational access controls",
        body: "Limits on provider support access by location and nationality where required, just-in-time approval and logging of every access to your environment.",
      },
      {
        title: "Cross-border transfer mechanisms",
        body: "Where data must move, the legal and technical mechanisms, such as standard contractual clauses, transfer impact assessments and pseudonymisation, applied as designed controls.",
      },
      {
        title: "Multi-cloud and exit",
        body: "Portability and exit planning so that a change in law, provider ownership or risk can be answered by moving workloads.",
      },
      {
        title: "Evidence and compliance reporting",
        body: "Continuous proof of where data is stored and processed and who accessed it, mapped to the regulations and audit questions.",
      },
    ],
    diagram: {
      title: "Sovereign cloud and data residency: reference architecture",
      desc: "Applications and data are classified and placed in permitted regions. Customer-managed keys, confidential computing and operational access controls protect data. Cross-border transfers pass through controlled mechanisms. Evidence of location and access is produced for regulators, auditors and customers.",
      leftLabel: "Workloads and data",
      platformLabel: "Sovereignty controls",
      rightLabel: "Placement and assurance",
      platformTitle: "Sovereign cloud design",
      boundary: "Jurisdiction boundary",
      left: [
        ["Regulated data", "Banking, health, energy"],
        ["Applications and AI", "Services, models, logs"],
        ["Backups and metadata", "Replicas, telemetry"],
      ],
      modules: [
        ["Classification", "Classes, rules"],
        ["Placement", "Region, provider"],
        ["Keys and encryption", "Customer-managed"],
        ["Confidential computing", "Enclaves"],
        ["Access controls", "Support, JIT, logging"],
        ["Transfers", "Mechanisms, assessments"],
      ],
      strip: "Policy as code · exit plan · continuous evidence",
      right: [
        ["Permitted regions", "In-country, in-region"],
        ["Sovereign and local providers", "Operational control"],
        ["Regulators and auditors", "Evidence"],
        ["Customers", "Assurance"],
      ],
    },
    diagramCaption:
      "Reference architecture: data is classified, placed where the rules allow, protected with keys you hold, and its location and access are provable.",
    standards: [
      {
        name: "GDPR and cross-border transfer rules",
        note: "EU rules on transfers of personal data, including adequacy decisions, standard contractual clauses and transfer impact assessments.",
      },
      {
        name: "National data localisation and sector rules",
        note: "Requirements in countries and sectors that require data, or copies of it, to stay in-country, such as for banking, health and critical infrastructure.",
      },
      {
        name: "Sovereign cloud schemes",
        note: "National and EU schemes and criteria such as C5 in Germany, SecNumCloud in France and the EU cybersecurity certification scheme work for cloud services.",
      },
      {
        name: "ISO/IEC 27001, 27017 and 27018",
        note: "Information security and cloud privacy controls that underpin provider and customer assurance.",
      },
      {
        name: "Confidential computing standards",
        note: "Hardware-based trusted execution environments and attestation used to prove the state of a protected workload.",
      },
      {
        name: "Foreign access laws",
        note: "Laws that may compel provider access to data, assessed as part of provider choice and key management.",
      },
    ],
    dataModel: [
      {
        entity: "Data class and rule",
        holds: "Class, legal basis, residency, access and transfer rules by country.",
      },
      {
        entity: "Workload and placement",
        holds: "Workload, data classes held, region, provider and approval.",
      },
      {
        entity: "Key and custody",
        holds: "Key, purpose, holder, location, rotation and the data it protects.",
      },
      {
        entity: "Access event",
        holds: "Actor, role, location, reason, approval, duration and actions taken.",
      },
      {
        entity: "Transfer record",
        holds: "Data, origin, destination, mechanism, assessment and approval.",
      },
      {
        entity: "Provider assessment",
        holds: "Ownership, jurisdiction, certifications, operational control and exit options.",
      },
      {
        entity: "Evidence item",
        holds: "Requirement, control, proof of state, time and reviewer.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Hyperscalers, sovereign cloud offerings and local providers now offer regional controls, customer-managed keys and operating models designed for sovereignty, and are the first thing to evaluate.",
      },
      {
        title: "Extend",
        body: "Extend a provider's controls with your own key management, policy as code, access logging and evidence, so sovereignty does not rest on the provider's word alone.",
      },
      {
        title: "Build",
        body: "Run your own private or hybrid cloud for the most sensitive workloads, or build portability layers across providers, where law, risk or contract leave no other option.",
      },
    ],
    security: [
      {
        title: "Keys under your control",
        body: "Encryption keys are generated and held where you decide, with the provider unable to read data without your participation.",
      },
      {
        title: "Restricted provider access",
        body: "Support and administrative access by the provider is limited, approved case by case and logged.",
      },
      {
        title: "Policy as code",
        body: "Region, service and configuration rules are enforced automatically, so a developer cannot place data in the wrong region.",
      },
      {
        title: "Data that travels",
        body: "Backups, logs, telemetry and AI prompts are included in the controls, not only the main database.",
      },
      {
        title: "Verifiable posture",
        body: "Attestation and continuous checks show the state of the environment to auditors and customers.",
      },
    ],
    phases: [
      {
        title: "Obligations and data review",
        body: "We map the laws, contracts and sector rules that apply and classify the data and workloads with legal, security and the business.",
      },
      {
        title: "Provider and architecture options",
        body: "Providers and designs are compared against the obligations and risk appetite, with cost and capability trade-offs.",
      },
      {
        title: "Build the controlled foundation",
        body: "Regions, keys, access controls and policy as code are built and tested, with evidence collection from the start.",
      },
      {
        title: "Migrate and verify",
        body: "Workloads are placed according to the design and verified, including backups, logs and metadata.",
      },
      {
        title: "Operate, report and review",
        body: "Evidence is produced continuously, and the design is reviewed as laws, providers and offerings change.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
    ],
    faqs: [
      {
        q: "What is the difference between data residency and data sovereignty?",
        a: "Residency is where data is stored and processed. Sovereignty is about who has legal and operational control over it, including which laws can reach it. A region in your country operated by a foreign provider gives residency but may not give full sovereignty.",
      },
      {
        q: "Does a customer-managed key make a cloud sovereign?",
        a: "It is a strong control, because the provider cannot read the data without your key. It does not by itself resolve all questions of jurisdiction, support access or metadata, so we design it together with the other controls.",
      },
      {
        q: "Can we use AI services under residency rules?",
        a: "Yes, with attention to where prompts, outputs, logs and any fine-tuning data are processed and stored. Private deployments and regional endpoints meet many requirements.",
      },
      {
        q: "How do you prove where data is?",
        a: "By enforcing region rules in code, continuously checking the configuration and storing evidence of locations and access, which can be shown to regulators, auditors and customers on request.",
      },
      {
        q: "Who owns the designs and code?",
        a: "You do. The designs, the policies and the code stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "Zero trust architecture", href: "/solutions/zero-trust-architecture" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "devsecops-for-regulated-industries",
    vertical: "cross-industry",
    serviceId: "cloud-devops",
    seoTitle: "DevSecOps for Regulated Industries | Deview",
    seoDescription:
      "DevSecOps for regulated industries: secure pipelines, code and dependency scanning, SBOM and signing, policy as code, change evidence and separation of duties.",
    kicker: "Cloud and security · Delivery",
    h1: "DevSecOps for regulated industries",
    intro:
      "We build DevSecOps for regulated industries: delivery pipelines that test security on every change, scan code, dependencies, secrets, containers and infrastructure, produce signed artefacts and software bills of materials, enforce policy as code and collect the change evidence that auditors and supervisors expect. Teams ship faster and the controls get stronger, because the pipeline does the checking, and you own the pipelines and the code.",
    modules: [
      {
        title: "Pipeline architecture",
        body: "Standard, reusable pipelines for building, testing and deploying across languages and platforms, with a paved road that teams adopt because it is easier.",
      },
      {
        title: "Static and dynamic security testing",
        body: "Static analysis, dynamic testing and, where it helps, interactive testing, with findings tuned to reduce noise and routed to the right team.",
      },
      {
        title: "Dependency and licence scanning",
        body: "Software composition analysis for known vulnerabilities and licence risk, with policies on what may be used and automatic updates where safe.",
      },
      {
        title: "Secrets management",
        body: "Detection of secrets in code and history, and replacement with managed secrets and short-lived credentials for pipelines and workloads.",
      },
      {
        title: "Infrastructure as code and container security",
        body: "Scanning of infrastructure definitions and container images, hardened base images and admission controls in the cluster.",
      },
      {
        title: "Artefact integrity and SBOM",
        body: "Signed builds, provenance records and a software bill of materials for every release, stored with the artefact.",
      },
      {
        title: "Policy as code and gates",
        body: "Rules for approvals, security thresholds and deployment conditions written as code, applied consistently and changeable under review.",
      },
      {
        title: "Change evidence and separation of duties",
        body: "Automatic collection of who changed what, what was tested, who approved and when it was deployed, with the separation of roles regulated firms require.",
      },
      {
        title: "Delivery metrics and improvement",
        body: "Measures of deployment frequency, lead time, change failure rate and recovery time, alongside security metrics, used to improve rather than to police.",
      },
    ],
    diagram: {
      title: "DevSecOps for regulated industries: reference architecture",
      desc: "Developers commit code that flows through a standard pipeline with static and dynamic testing, dependency and secrets scanning, infrastructure and container checks, artefact signing and SBOM generation, and policy gates. Approved artefacts are deployed to controlled environments, and change evidence goes to auditors and risk.",
      leftLabel: "Source",
      platformLabel: "Secure pipeline",
      rightLabel: "Environments and assurance",
      platformTitle: "DevSecOps pipeline",
      left: [
        ["Developers and code", "Commits, reviews"],
        ["Dependencies", "Libraries, base images"],
        ["Infrastructure definitions", "Terraform, manifests"],
      ],
      modules: [
        ["Static and dynamic tests", "Code, running app"],
        ["Dependency scanning", "CVEs, licences"],
        ["Secrets and IaC checks", "Code, config, images"],
        ["Signing and SBOM", "Provenance"],
        ["Policy gates", "Approvals as code"],
        ["Change evidence", "Who, what, when"],
      ],
      strip: "Paved road · separation of duties · audit trail",
      right: [
        ["Production and test", "Controlled deployment"],
        ["Security teams", "Findings, trends"],
        ["Audit and risk", "Evidence"],
        ["Supervisors", "On request"],
      ],
    },
    diagramCaption:
      "Reference architecture: every change passes the same automated checks, and the pipeline records the evidence as a by-product.",
    standards: [
      {
        name: "NIST SSDF (SP 800-218)",
        note: "The Secure Software Development Framework's practices for preparing the organisation, protecting software, producing secure software and responding to vulnerabilities.",
      },
      {
        name: "SLSA",
        note: "Supply-chain Levels for Software Artifacts: a framework of levels for build integrity and provenance.",
      },
      {
        name: "OWASP SAMM and ASVS",
        note: "Maturity model and verification standard for software assurance and application security requirements.",
      },
      {
        name: "SBOM formats and signing",
        note: "CycloneDX and SPDX for bills of materials, and signing and verification standards such as Sigstore.",
      },
      {
        name: "Regulatory expectations on change management",
        note: "Supervisory requirements for tested, approved and recorded changes, and for segregation between development and operations.",
      },
      {
        name: "DORA delivery metrics",
        note: "Deployment frequency, lead time, change failure rate and time to restore, used to measure delivery performance.",
      },
    ],
    dataModel: [
      {
        entity: "Change",
        holds: "Commit, author, reviewers, linked request, pipeline run and deployment.",
      },
      {
        entity: "Pipeline run and stage",
        holds: "Checks run, results, duration and the policy decisions made.",
      },
      {
        entity: "Finding",
        holds: "Tool, severity, location, owner, decision, fix and closure.",
      },
      {
        entity: "Artefact and provenance",
        holds: "Image or package, digest, signature, builder and SBOM reference.",
      },
      {
        entity: "Policy and exception",
        holds: "Rule, version, owner, scope, exceptions granted and expiry.",
      },
      {
        entity: "Approval",
        holds: "Approver, role, scope, time and any separation-of-duties checks.",
      },
      {
        entity: "Delivery metric",
        holds: "Metric, team, period and value.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Source hosting, CI and CD platforms and application security tools provide most of the building blocks as products, and are the right base for any pipeline.",
      },
      {
        title: "Extend",
        body: "Extend products with shared pipeline templates, policy as code, central findings management and the evidence collection that tie them together and map to your controls.",
      },
      {
        title: "Build",
        body: "Build custom pipeline automation where your regulated processes, such as change approval and release control, are particular, or where several platforms must be unified.",
      },
    ],
    security: [
      {
        title: "Protected pipeline",
        body: "The pipeline itself is hardened: least-privilege runners, isolated builds, protected branches and reviewed changes to pipeline definitions.",
      },
      {
        title: "Short-lived credentials",
        body: "Pipelines and workloads authenticate with short-lived, scoped credentials and not long-lived secrets.",
      },
      {
        title: "Trusted artefacts only",
        body: "Only signed artefacts from the trusted build are admitted to environments.",
      },
      {
        title: "Separation of duties",
        body: "No single person can write, approve and release a change, enforced by the platform.",
      },
      {
        title: "Exceptions with expiry",
        body: "Policy exceptions are approved, recorded and time-limited, and reported.",
      },
    ],
    phases: [
      {
        title: "Delivery and control review",
        body: "We review how code reaches production today, the controls required by policy and regulators and where evidence is created by hand.",
      },
      {
        title: "Paved road design",
        body: "The standard pipeline, the checks and policies and the evidence model are designed with engineering, security and risk.",
      },
      {
        title: "Build and pilot with two teams",
        body: "The pipeline is built and adopted by a few teams, and noise and friction are tuned out.",
      },
      {
        title: "Adoption and policy gates",
        body: "More teams move onto the paved road and gates are tightened progressively as findings are cleared.",
      },
      {
        title: "Measure and improve",
        body: "Delivery and security metrics are reviewed, and the pipeline evolves with new threats and requirements.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Application security and secure SDLC", href: "/solutions/application-security-and-secure-sdlc" },
    ],
    faqs: [
      {
        q: "Does DevSecOps slow delivery down?",
        a: "Done well it speeds it up. Automated checks replace manual reviews and late surprises, the paved road removes repeated setup, and findings arrive when a developer can fix them cheaply.",
      },
      {
        q: "How does this satisfy change management requirements?",
        a: "The pipeline records who changed what, what was tested, who approved and when it was deployed, and enforces the separation of roles, so the evidence regulators ask for is a by-product of normal work.",
      },
      {
        q: "How do you deal with the noise from security scanners?",
        a: "By tuning rules to your stack, gating only on findings that matter, deduplicating across tools and giving developers clear fixes. Noisy gates are ignored, so quality of signal comes first.",
      },
      {
        q: "Can this work with legacy applications?",
        a: "Yes. Legacy applications can be brought onto the pipeline gradually, starting with build, scanning and artefact integrity, and later with automated testing and deployment.",
      },
      {
        q: "Who owns the pipelines and code?",
        a: "You do. The pipelines, the policies and the code stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "Application security and secure SDLC", href: "/solutions/application-security-and-secure-sdlc" },
      { label: "Zero trust architecture", href: "/solutions/zero-trust-architecture" },
      { label: "Cyber Resilience Act compliance for device makers", href: "/solutions/cyber-resilience-act-for-device-makers" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "zero-trust-architecture",
    vertical: "cross-industry",
    serviceId: "cloud-devops",
    seoTitle: "Zero Trust Architecture for Enterprises | Deview",
    seoDescription:
      "Zero trust architecture for enterprises: identity-centric access, device posture, microsegmentation, workload identity and privileged access, delivered in stages.",
    kicker: "Cloud and security · Access",
    h1: "Zero trust architecture for enterprises",
    intro:
      "We design and implement zero trust architecture for enterprises: identity-centric access for people and workloads, device posture checks, microsegmentation, privileged access control and continuous verification, delivered in stages that reduce risk early and without stopping the business. Access depends on who and what is asking and on the context, not on where on the network the request comes from, and you own the designs and the code.",
    modules: [
      {
        title: "Identity foundation",
        body: "A consolidated directory, single sign-on and strong multi-factor authentication, with lifecycle management that removes access when people move or leave.",
      },
      {
        title: "Device trust and posture",
        body: "Registration and health checks for devices, so access decisions consider whether a device is managed, patched and protected.",
      },
      {
        title: "Policy engine and conditional access",
        body: "Central policies that decide access from user, device, location, risk and the sensitivity of the resource, with step-up where needed.",
      },
      {
        title: "Zero trust network access",
        body: "Access to private applications through identity-aware proxies in place of broad network VPN access, with per-application authorisation.",
      },
      {
        title: "Microsegmentation",
        body: "Fine-grained control of traffic between workloads in data centres and clouds, starting with the most critical applications and data.",
      },
      {
        title: "Workload identity",
        body: "Cryptographic identities for services and automation, with short-lived credentials and mutual authentication between components.",
      },
      {
        title: "Privileged access management",
        body: "Just-in-time elevation, session recording and vaulting for administrator and emergency access, with approval flows.",
      },
      {
        title: "Data-centric controls",
        body: "Classification, encryption and rights management that protect data wherever it goes, with access decisions based on the data's sensitivity.",
      },
      {
        title: "Visibility, analytics and automation",
        body: "Central telemetry from identity, devices, network and workloads, risk scoring and automated responses such as session revocation.",
      },
    ],
    diagram: {
      title: "Zero trust architecture: reference architecture",
      desc: "Users, devices and workloads request access to applications and data. A policy engine evaluates identity, device posture, context and resource sensitivity, and enforces decisions through identity-aware proxies, microsegmentation and privileged access controls. Telemetry feeds analytics and automated response.",
      leftLabel: "Requesters",
      platformLabel: "Zero trust controls",
      rightLabel: "Resources",
      platformTitle: "Zero trust architecture",
      left: [
        ["Users", "Employees, partners"],
        ["Devices", "Managed, unmanaged"],
        ["Workloads and automation", "Services, pipelines"],
      ],
      modules: [
        ["Identity and MFA", "SSO, lifecycle"],
        ["Device posture", "Health, ownership"],
        ["Policy engine", "Context-based decisions"],
        ["Access proxies", "Per-application"],
        ["Microsegmentation", "Workload to workload"],
        ["Privileged access", "JIT, recorded"],
      ],
      strip: "Continuous verification · risk scoring · automated response",
      right: [
        ["Applications", "SaaS, private, legacy"],
        ["Data stores", "Classified, encrypted"],
        ["Infrastructure", "Cloud, data centre, OT edge"],
        ["Security operations", "Signals, response"],
      ],
    },
    diagramCaption:
      "Reference architecture: every request is evaluated against identity, device and context, and trust is never granted by network location alone.",
    standards: [
      {
        name: "NIST SP 800-207",
        note: "The zero trust architecture publication that defines the model and its components, such as the policy engine and policy enforcement points.",
      },
      {
        name: "CISA Zero Trust Maturity Model",
        note: "A maturity model across identity, devices, networks, applications and data, used to plan stages.",
      },
      {
        name: "Identity standards",
        note: "OpenID Connect, SAML, OAuth 2.0, FIDO2 and SCIM for authentication, authorisation and provisioning.",
      },
      {
        name: "SPIFFE and SPIRE",
        note: "Open standards for workload identity in dynamic environments.",
      },
      {
        name: "ISO/IEC 27001 and sector requirements",
        note: "Control frameworks and supervisory requirements for access control that zero trust helps to meet.",
      },
      {
        name: "IEC 62443 for operational environments",
        note: "Zones and conduits that complement zero trust principles in industrial networks.",
      },
    ],
    dataModel: [
      {
        entity: "Identity",
        holds: "User or workload, attributes, roles, authentication methods and lifecycle state.",
      },
      {
        entity: "Device",
        holds: "Owner, management state, posture checks, risk and last seen.",
      },
      {
        entity: "Resource",
        holds: "Application, data or service, sensitivity, owner and access policy.",
      },
      {
        entity: "Policy",
        holds: "Conditions, decision, step-up requirement, version and approval.",
      },
      {
        entity: "Access decision",
        holds: "Requester, resource, context, decision, reason and time.",
      },
      {
        entity: "Privileged session",
        holds: "User, target, approval, duration and recording.",
      },
      {
        entity: "Segment and flow rule",
        holds: "Source and destination workloads, ports, justification and status.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Identity providers, access proxies, device management and microsegmentation products supply the components, and no organisation should build these from scratch.",
      },
      {
        title: "Extend",
        body: "Extend purchased components with the integration, policy design and automation that make them work as one system, and with workload identity for your own services.",
      },
      {
        title: "Build",
        body: "Build custom enforcement points for legacy and industrial systems that products do not cover, such as brokered access for applications that cannot support modern authentication.",
      },
    ],
    security: [
      {
        title: "Strong authentication everywhere",
        body: "Phishing-resistant multi-factor authentication for privileged and sensitive access, and risk-based step-up elsewhere.",
      },
      {
        title: "Least privilege",
        body: "Access is granted per application and role, for the time needed, and reviewed regularly.",
      },
      {
        title: "Assume breach",
        body: "Segmentation and monitoring limit the movement and impact of a compromised account or workload.",
      },
      {
        title: "Resilient policy infrastructure",
        body: "The policy engine and identity services are highly available, with tested break-glass procedures that are themselves controlled.",
      },
      {
        title: "Privacy-aware telemetry",
        body: "Signals used for access decisions are collected and retained within privacy rules.",
      },
    ],
    phases: [
      {
        title: "Assessment and target model",
        body: "We assess identity, devices, networks, applications and data against a maturity model and agree a target and the order of work.",
      },
      {
        title: "Identity and device foundations",
        body: "Single sign-on, strong authentication, lifecycle and device management are brought to a solid baseline.",
      },
      {
        title: "Access to applications",
        body: "Priority applications move behind identity-aware access with conditional policies, replacing broad network access.",
      },
      {
        title: "Segment and secure workloads",
        body: "Microsegmentation and workload identity are applied to the most critical applications and data.",
      },
      {
        title: "Continuous verification and automation",
        body: "Telemetry, risk scoring and automated responses are added, and policies are tuned from real decisions.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Cyber resilience engineering for banks", href: "/solutions/cyber-resilience-for-banks" },
    ],
    faqs: [
      {
        q: "Is zero trust a product we can buy?",
        a: "No. It is an approach built from several controls: identity, device trust, segmentation, privileged access and telemetry. Products provide the components, and the work lies in the design, policy and integration.",
      },
      {
        q: "Where should we start?",
        a: "With identity: single sign-on, strong authentication and clean lifecycle, because every other control depends on knowing who is asking. Then move the most important applications to identity-aware access.",
      },
      {
        q: "Will it get in users' way?",
        a: "Done well it is less intrusive than a VPN. Access is decided silently from context, and challenges appear only when risk is higher. We test with users before enforcing.",
      },
      {
        q: "How does zero trust apply to legacy and industrial systems?",
        a: "Through brokered access, segmentation and monitoring around systems that cannot support modern authentication, rather than changing the systems themselves.",
      },
      {
        q: "Who owns the designs and code?",
        a: "You do. The designs, the policies and the code stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "DevSecOps for regulated industries", href: "/solutions/devsecops-for-regulated-industries" },
      { label: "Cyber resilience engineering for banks", href: "/solutions/cyber-resilience-for-banks" },
      { label: "Sovereign cloud and data residency", href: "/solutions/sovereign-cloud-and-data-residency" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "cloud-cost-optimization-finops",
    vertical: "cross-industry",
    serviceId: "cloud-devops",
    seoTitle: "Cloud Cost Optimization and FinOps | Deview",
    seoDescription:
      "Cloud cost optimization and FinOps: cost allocation, rightsizing, commitments, storage and data transfer, unit economics and anomaly detection.",
    kicker: "Cloud and security · Cost",
    h1: "Cloud cost optimization and FinOps",
    intro:
      "We provide cloud cost optimization and FinOps for enterprises: visibility of cloud spend by team, product and customer, allocation and showback, rightsizing and elimination of waste, the right mix of commitments and on-demand capacity, optimisation of storage, data transfer and AI workloads, and unit economics that tie cost to business value. Engineers own the cost of what they run, finance can forecast it, and you own the tooling and the practice.",
    modules: [
      {
        title: "Cost visibility and allocation",
        body: "Consolidated billing data with tagging and account structure that allocate every dollar to a team, product and environment, including shared costs.",
      },
      {
        title: "Showback and chargeback",
        body: "Reports and dashboards for each team and for finance, with agreed rules for allocating shared services, and chargeback where the business wants it.",
      },
      {
        title: "Rightsizing and waste elimination",
        body: "Detection of idle, oversized and orphaned resources, with recommendations that owners can approve and automation for safe clean-up.",
      },
      {
        title: "Commitment strategy",
        body: "Analysis of steady usage and a portfolio of savings plans, reserved capacity and committed-use discounts matched to the forecast and risk appetite.",
      },
      {
        title: "Architecture efficiency",
        body: "Improvements to autoscaling, scheduling, storage tiering, data transfer patterns and managed-service choices that lower cost without hurting reliability.",
      },
      {
        title: "Data and analytics cost",
        body: "Control of the cost of data platforms, queries, retention and egress, with guardrails and chargeback to the teams that use them.",
      },
      {
        title: "AI and GPU cost management",
        body: "Visibility and control of model usage, GPU capacity and token costs by application, with caching, model routing and capacity planning.",
      },
      {
        title: "Unit economics",
        body: "Cost per transaction, per customer or per product, so that engineering and finance can see whether growth is profitable.",
      },
      {
        title: "Forecasting, budgets and anomaly detection",
        body: "Forecasts from usage drivers, budgets with alerts and detection of unexpected spend, with owners notified quickly.",
      },
    ],
    diagram: {
      title: "Cloud cost optimization and FinOps: reference architecture",
      desc: "Billing data, resource inventories, usage metrics and business drivers from several clouds feed a FinOps platform with cost allocation, showback, rightsizing, commitment planning, unit economics, forecasting and anomaly detection. Teams, finance and leadership use the results to decide and act.",
      leftLabel: "Data sources",
      platformLabel: "FinOps platform",
      rightLabel: "Consumers",
      platformTitle: "FinOps platform",
      left: [
        ["Billing and invoices", "Clouds, SaaS, AI"],
        ["Resources and usage", "Inventory, metrics"],
        ["Business drivers", "Transactions, customers"],
      ],
      modules: [
        ["Allocation and tagging", "Team, product, env"],
        ["Showback", "Reports, dashboards"],
        ["Rightsizing", "Idle, oversized"],
        ["Commitments", "Plans, coverage"],
        ["Unit economics", "Cost per unit"],
        ["Forecast and anomalies", "Budgets, alerts"],
      ],
      strip: "Policy as code · savings tracking · audit trail",
      right: [
        ["Engineering teams", "Actions, accountability"],
        ["Finance", "Forecast, budgets"],
        ["Product owners", "Unit costs"],
        ["Leadership", "Spend and value"],
      ],
    },
    diagramCaption:
      "Reference architecture: cost data meets usage and business data, so each team can see what it spends, why and what to change.",
    standards: [
      {
        name: "FinOps Framework",
        note: "The FinOps Foundation's framework of principles, personas, capabilities and maturity for managing cloud cost as a shared responsibility.",
      },
      {
        name: "FOCUS billing specification",
        note: "The FinOps Open Cost and Usage Specification, a common format for billing data across providers.",
      },
      {
        name: "Provider cost and well-architected guidance",
        note: "Cost optimisation pillars and tooling from the major cloud providers.",
      },
      {
        name: "Tagging and account governance standards",
        note: "Organisation-wide conventions for tags, accounts and resource ownership that make allocation possible.",
      },
      {
        name: "Sustainability measurement",
        note: "Emerging methods for reporting the carbon footprint of cloud workloads alongside cost.",
      },
      {
        name: "Financial controls",
        note: "Budgeting, accruals and capitalisation rules that cloud cost reporting must support.",
      },
    ],
    dataModel: [
      {
        entity: "Cost line",
        holds: "Provider, service, resource, period, amount, discount and tags.",
      },
      {
        entity: "Allocation rule",
        holds: "Cost pool, driver, targets, share and version.",
      },
      {
        entity: "Resource and owner",
        holds: "Resource, account, team, product, environment and utilisation.",
      },
      {
        entity: "Recommendation",
        holds: "Opportunity, estimated saving, risk, owner, decision and realised saving.",
      },
      {
        entity: "Commitment",
        holds: "Type, term, amount, coverage, utilisation and expiry.",
      },
      {
        entity: "Unit metric",
        holds: "Business driver, period, value and the cost it relates to.",
      },
      {
        entity: "Budget and alert",
        holds: "Scope, amount, forecast, threshold and notification.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Cloud provider cost tools and third-party FinOps platforms provide visibility, recommendations and commitment management, and are the right start for most enterprises.",
      },
      {
        title: "Extend",
        body: "Extend a platform with your own allocation rules, unit economics from business data and automation of recommendations into engineering workflows.",
      },
      {
        title: "Build",
        body: "Build custom cost data pipelines where you run several clouds and platforms with specific allocation needs, or where cost must be tied tightly to your own business metrics.",
      },
    ],
    security: [
      {
        title: "Read-only by default",
        body: "FinOps tooling reads billing and inventory data, and any automated action uses limited, reviewed permissions.",
      },
      {
        title: "Safe automation",
        body: "Clean-up and scheduling actions are tested, reversible, announced to owners and exclude protected resources.",
      },
      {
        title: "Cost data confidentiality",
        body: "Cost and contract data are restricted by role, as they reveal commercial terms.",
      },
      {
        title: "Policy guardrails",
        body: "Rules prevent costly misconfiguration, such as unapproved large instances or unlimited data egress, before deployment.",
      },
      {
        title: "Auditability",
        body: "Allocation rules, savings claims and approvals are recorded for finance and audit.",
      },
    ],
    phases: [
      {
        title: "Baseline and visibility",
        body: "We consolidate billing data, fix tagging and ownership, and produce a baseline of spend by team and product.",
      },
      {
        title: "Quick wins",
        body: "Obvious waste and mismatched commitments are addressed first, with owners approving each action.",
      },
      {
        title: "Showback and accountability",
        body: "Teams receive their costs, budgets and recommendations, and review them in a regular cycle with finance.",
      },
      {
        title: "Architecture and unit economics",
        body: "Larger efficiency improvements are planned with engineering, and unit costs are tracked against business drivers.",
      },
      {
        title: "Automation and continuous practice",
        body: "Recommendations, guardrails and alerts are automated, and FinOps becomes a regular operating rhythm.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Data engineering and analytics", href: "/services/data-engineering" },
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
    ],
    faqs: [
      {
        q: "Where does most cloud waste come from?",
        a: "Typically from oversized and idle resources, unused storage and snapshots, development environments running around the clock, poorly matched commitments and data transfer between regions and services. Each has a standard fix, and the work is ownership and process.",
      },
      {
        q: "Should we buy reserved capacity or savings plans?",
        a: "For steady, predictable usage, yes. We analyse your usage patterns and forecast, and recommend a portfolio that covers the stable base without locking in capacity you may not need.",
      },
      {
        q: "How do you manage the cost of AI workloads?",
        a: "By tracking usage per application, using caching and model routing so simple tasks use smaller models, planning GPU capacity against demand and applying budgets and alerts to model spend.",
      },
      {
        q: "Is FinOps a one-off project?",
        a: "No. It is an ongoing practice shared between engineering, finance and product. A project establishes visibility and quick wins, and the practice keeps costs aligned as usage changes.",
      },
      {
        q: "Who owns the tooling and the data?",
        a: "You do. The tooling, the rules and the data stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
      { label: "Private LLM deployment", href: "/solutions/private-llm-deployment" },
      { label: "IoT, integration and AI engineering", href: "/solutions/enterprise-engineering-solutions" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "application-security-and-secure-sdlc",
    vertical: "cross-industry",
    serviceId: "cloud-devops",
    seoTitle: "Application Security and Secure SDLC | Deview",
    seoDescription:
      "Application security and secure SDLC: security requirements, threat modelling, secure coding, testing, penetration testing and vulnerability management.",
    kicker: "Cloud and security · Application security",
    h1: "Application security and secure SDLC",
    intro:
      "We provide application security and secure SDLC for enterprises and product companies: security requirements and threat modelling at design time, secure coding standards and reviews, automated and manual testing, penetration testing, vulnerability management and the training and tools that help developers write safer code. Security becomes part of how software is designed and built, not a gate at the end, and you own the standards, the tooling and the code.",
    modules: [
      {
        title: "Security requirements and risk tiering",
        body: "Classification of applications by risk and a set of security requirements for each tier, derived from standards and tailored to your technology.",
      },
      {
        title: "Threat modelling",
        body: "Structured analysis of data flows, trust boundaries and attack paths at design time, using methods such as STRIDE, with threats turned into requirements and tests.",
      },
      {
        title: "Secure coding standards and libraries",
        body: "Language-specific guidance and vetted libraries for authentication, input handling, cryptography and secrets, embedded in templates and frameworks.",
      },
      {
        title: "Code review and security champions",
        body: "Review practices focused on security-relevant changes, and a network of trained champions in development teams.",
      },
      {
        title: "Automated security testing",
        body: "Static, dynamic and dependency testing in the pipeline, with rules tuned to the stack and findings triaged, deduplicated and routed to owners.",
      },
      {
        title: "Penetration testing and assessments",
        body: "Scoped manual testing of high-risk applications and APIs, before release and on a schedule, with retesting of fixes.",
      },
      {
        title: "API and mobile security",
        body: "Testing and design review for APIs, mobile apps and integrations, covering authorisation flaws, data exposure and abuse.",
      },
      {
        title: "Vulnerability management and disclosure",
        body: "Tracking of findings from all sources to closure with service levels by severity, and a coordinated disclosure process for external reports.",
      },
      {
        title: "Developer training and metrics",
        body: "Practical, role-based training and measures such as time to fix, recurring flaw types and coverage, used to improve and not to blame.",
      },
    ],
    diagram: {
      title: "Application security and secure SDLC: reference architecture",
      desc: "Requirements and design feed threat modelling and security requirements. Developers use secure standards and libraries, and code passes automated testing in the pipeline. Penetration testing and external reports feed a vulnerability management process. Metrics and training close the loop.",
      leftLabel: "Design and build",
      platformLabel: "Secure SDLC",
      rightLabel: "Assurance",
      platformTitle: "Secure development lifecycle",
      left: [
        ["Requirements and design", "Risk tier, data flows"],
        ["Developers and champions", "Standards, libraries"],
        ["Pipeline", "Build, test, release"],
      ],
      modules: [
        ["Security requirements", "By risk tier"],
        ["Threat modelling", "Design-time threats"],
        ["Secure coding", "Standards, libraries"],
        ["Automated testing", "SAST, DAST, SCA"],
        ["Penetration testing", "Manual, retested"],
        ["Vulnerability management", "SLAs, disclosure"],
      ],
      strip: "Developer training · metrics · audit trail",
      right: [
        ["Product and engineering", "Findings, fixes"],
        ["Security and risk", "Posture, trends"],
        ["Customers and regulators", "Assurance"],
        ["External researchers", "Disclosure channel"],
      ],
    },
    diagramCaption:
      "Reference architecture: security is considered at design, enforced in the pipeline, tested by people and measured over time.",
    standards: [
      {
        name: "OWASP ASVS and Top 10",
        note: "The Application Security Verification Standard for requirements and testing, and the Top 10 lists of common web, API and mobile risks.",
      },
      {
        name: "NIST SSDF and ISO/IEC 27034",
        note: "Frameworks for secure software development practices and application security management.",
      },
      {
        name: "OWASP SAMM",
        note: "A maturity model for measuring and improving software assurance practice.",
      },
      {
        name: "IEC 62443-4-1",
        note: "Secure product development lifecycle requirements for industrial automation products.",
      },
      {
        name: "Threat modelling methods",
        note: "STRIDE, attack trees and data flow diagrams as the basis of design-time analysis.",
      },
      {
        name: "Regulatory and customer requirements",
        note: "Secure development expectations in financial supervision, the Cyber Resilience Act and customer contracts.",
      },
    ],
    dataModel: [
      {
        entity: "Application and risk tier",
        holds: "Application, owner, data handled, exposure, tier and applicable requirements.",
      },
      {
        entity: "Threat model",
        holds: "Diagram, threats, mitigations, owner, review date and resulting requirements.",
      },
      {
        entity: "Finding",
        holds: "Source, severity, location, status, owner, due date and closure evidence.",
      },
      {
        entity: "Test and assessment",
        holds: "Type, scope, date, tester, results and retest outcome.",
      },
      {
        entity: "Disclosure report",
        holds: "Reporter, issue, acknowledgement, triage, fix and communication.",
      },
      {
        entity: "Training record",
        holds: "Developer, course, role, date and assessment result.",
      },
      {
        entity: "Metric",
        holds: "Measure, team, period and value, such as time to fix or coverage.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Application security testing tools, training platforms and penetration testing services are well established and are the starting point for most organisations.",
      },
      {
        title: "Extend",
        body: "Extend tools with secure templates, shared libraries, central findings management and champions programmes that make the tools effective in your teams.",
      },
      {
        title: "Build",
        body: "Build custom checks, internal frameworks and automation where your technology or compliance needs are specific, and keep them small and maintained.",
      },
    ],
    security: [
      {
        title: "Risk-based effort",
        body: "The deepest testing and review go to the applications that handle the most sensitive data or face the internet.",
      },
      {
        title: "Fix, do not just find",
        body: "Findings have owners and deadlines by severity, with escalation, and fixes are verified.",
      },
      {
        title: "Safe testing",
        body: "Tests run in controlled environments with agreed rules, and test data does not expose real personal data.",
      },
      {
        title: "Protected tooling",
        body: "Security tools and findings are access-controlled, because they list the weaknesses of your systems.",
      },
      {
        title: "Disclosure channel",
        body: "A clear route for external reporters, with acknowledgement, triage and fix timelines.",
      },
    ],
    phases: [
      {
        title: "Assessment and risk tiering",
        body: "We assess current practice, inventory applications by risk and agree the standards and priorities with engineering and security.",
      },
      {
        title: "Standards, templates and threat modelling",
        body: "Secure coding standards, templates and a threat modelling approach are defined and tried on a few teams.",
      },
      {
        title: "Pipeline testing and findings management",
        body: "Automated testing and central findings management are put in place, and noise is tuned out.",
      },
      {
        title: "Manual testing and champions",
        body: "Penetration testing for high-risk applications starts, and security champions are trained in teams.",
      },
      {
        title: "Measure and mature",
        body: "Metrics guide improvement, and the programme is reviewed against a maturity model.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "DevSecOps for regulated industries", href: "/solutions/devsecops-for-regulated-industries" },
    ],
    faqs: [
      {
        q: "What is a secure SDLC?",
        a: "A software development life cycle in which security activities are built into each stage: requirements, design, coding, testing, release and maintenance. The aim is to prevent vulnerabilities and to find the remainder early, when they are cheap to fix.",
      },
      {
        q: "Is threat modelling worth the time?",
        a: "For applications that matter, yes. A short session at design time finds structural problems that testing finds late, if at all. We keep it lightweight and focused on data flows and trust boundaries.",
      },
      {
        q: "How do we get developers on board?",
        a: "By making the secure way the easy way: templates, libraries and fast, accurate feedback in the pipeline, with practical training and champions inside teams. Security that slows people down is bypassed.",
      },
      {
        q: "Do automated tools replace penetration testing?",
        a: "No. Tools find known classes of flaw at scale. Skilled testers find logic and authorisation flaws, and chain issues together. Both are needed for high-risk applications.",
      },
      {
        q: "Who owns the standards and tooling?",
        a: "You do. The standards, the templates, the tooling and the code stay yours.",
      },
    ],
    assetId: "ot-security-cra-checklist",
    related: [
      { label: "DevSecOps for regulated industries", href: "/solutions/devsecops-for-regulated-industries" },
      { label: "Cyber Resilience Act compliance for device makers", href: "/solutions/cyber-resilience-act-for-device-makers" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    updated: "2026-10-15",
  },
];
