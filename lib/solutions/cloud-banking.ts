import type { SolutionPage } from "./types";

export const CLOUD_BANKING_PAGES: SolutionPage[] = [
  {
    slug: "core-banking-cloud-migration",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "Core Banking and Payments Cloud Migration | Deview",
    seoDescription:
      "Core banking and payments cloud migration: landing zone, workload assessment, phased migration, data residency, resilience, exit planning and supervisor engagement.",
    kicker: "Cloud and security · Banking",
    h1: "Core banking and payments cloud migration",
    intro:
      "We plan and carry out core banking and payments cloud migration for banks and payment firms: assessment of workloads, a secure landing zone, phased migration with data and cutover rehearsals, resilience designed for the criticality of the services, and the exit plans and evidence that supervisors expect. Critical systems move without a leap of faith, and you own the infrastructure code and the runbooks.",
    modules: [
      {
        title: "Workload assessment and strategy",
        body: "Classification of each system by criticality, data sensitivity, latency needs and dependencies, with a recommendation to rehost, replatform, refactor, retain or retire.",
      },
      {
        title: "Landing zone and guardrails",
        body: "A secure multi-account foundation with identity, networking, logging, encryption and policy controls set before any workload arrives.",
      },
      {
        title: "Network and connectivity",
        body: "Private connectivity to data centres, payment networks and partners, segmentation between environments and controlled internet access.",
      },
      {
        title: "Data migration and residency",
        body: "Phased movement of databases and files with replication, validation and reconciliation, and placement of data in the regions that law and policy permit.",
      },
      {
        title: "Resilience architecture",
        body: "Multi-zone and, where required, multi-region designs with recovery objectives matched to each service, tested before go-live.",
      },
      {
        title: "Security and key management",
        body: "Identity and privileged access, encryption with customer-managed keys, secrets handling, vulnerability management and security monitoring integrated with the bank's operations.",
      },
      {
        title: "Platform engineering and automation",
        body: "Infrastructure defined as code, repeatable environments, automated deployment and configuration, and a platform that application teams can use safely.",
      },
      {
        title: "Cutover and parallel run",
        body: "Rehearsed cutover plans with rollback, parallel runs with reconciliation and a clear decision point for each step.",
      },
      {
        title: "Third-party risk, exit and evidence",
        body: "Exit strategies and tested portability, concentration risk analysis, and the documentation and evidence for regulators, auditors and the board.",
      },
    ],
    diagram: {
      title: "Core banking cloud migration: reference architecture",
      desc: "Data-centre applications and data move into a secure cloud landing zone with identity, networking, encryption, resilience, platform automation and monitoring. Private connectivity links the cloud to the data centre and payment networks, while governance, exit planning and supervisory evidence surround the migration.",
      leftLabel: "Today",
      platformLabel: "Cloud platform",
      rightLabel: "Connected and governed",
      platformTitle: "Cloud landing zone and platform",
      left: [
        ["Data-centre applications", "Core, payments, channels"],
        ["Databases and files", "Ledger, history, documents"],
        ["Operations and security", "Monitoring, SOC, change"],
      ],
      modules: [
        ["Identity and access", "Privileged control"],
        ["Network and segmentation", "Private links, zones"],
        ["Data and encryption", "CMK, residency"],
        ["Resilience", "Zones, regions, DR"],
        ["Platform automation", "IaC, pipelines"],
        ["Monitoring and SOC", "Logs, alerts"],
      ],
      strip: "Guardrails as code · exit plan · audit evidence",
      right: [
        ["Payment networks and partners", "Private connectivity"],
        ["Data centre (hybrid)", "Staged migration"],
        ["Supervisors and auditors", "Evidence"],
        ["Board and risk", "Reports"],
      ],
    },
    diagramCaption:
      "Reference architecture: a secure foundation first, then workloads moved in phases, with resilience, exit and evidence built in.",
    standards: [
      {
        name: "Supervisory outsourcing and cloud guidance",
        note: "For example HKMA guidance on outsourcing and technology risk management, the EBA outsourcing guidelines, DORA for EU institutions and MAS technology risk guidelines, which set expectations for due diligence, controls and exit.",
      },
      {
        name: "ISO/IEC 27001, 27017 and 27018",
        note: "Information security management and cloud-specific controls, including protection of personal data in public cloud.",
      },
      {
        name: "CSA Cloud Controls Matrix",
        note: "A cloud security control framework used to assess providers and design shared responsibilities.",
      },
      {
        name: "PCI DSS 4.0.1",
        note: "Requirements for cardholder data environments in cloud and hybrid designs.",
      },
      {
        name: "Well-architected frameworks",
        note: "Reliability, security, performance, cost and operational excellence principles from the major providers, applied as design reviews.",
      },
      {
        name: "Data protection and residency law",
        note: "Rules on where personal and banking data may be stored and accessed.",
      },
    ],
    dataModel: [
      {
        entity: "Workload",
        holds: "System, owner, criticality, data classes, dependencies and migration strategy.",
      },
      {
        entity: "Environment and account",
        holds: "Purpose, region, network, owner, guardrails applied and cost centre.",
      },
      {
        entity: "Migration wave",
        holds: "Workloads, plan, rehearsals, readiness criteria, cutover date and outcome.",
      },
      {
        entity: "Control and evidence",
        holds: "Requirement, control, test, result and the evidence file.",
      },
      {
        entity: "Recovery objective",
        holds: "Service, RTO, RPO, design, last test and result.",
      },
      {
        entity: "Provider dependency",
        holds: "Service, provider, criticality, concentration, exit plan and test.",
      },
      {
        entity: "Risk and exception",
        holds: "Description, owner, mitigation, approval and expiry.",
      },
    ],
    buildOptions: [
      {
        title: "Stay",
        body: "Some systems should stay where they are: stable, low-change, tightly coupled to a data centre or covered by a vendor roadmap. Not everything needs to move for the bank to benefit.",
      },
      {
        title: "Move",
        body: "Rehost or replatform when the system is sound but the infrastructure is costly or risky. This delivers resilience, elasticity and automation with the least change to the application.",
      },
      {
        title: "Rebuild",
        body: "Refactor or rebuild where cloud-native design will pay back: payment hubs, digital channels and data platforms that need elasticity and faster change.",
      },
    ],
    security: [
      {
        title: "Identity first",
        body: "Strong identity, least privilege and just-in-time privileged access across the cloud estate, integrated with the bank's directory.",
      },
      {
        title: "Customer-managed encryption",
        body: "Encryption at rest and in transit with keys controlled by the bank, and separation of duties for key management.",
      },
      {
        title: "Guardrails as code",
        body: "Policy that prevents insecure configuration, such as public storage or unencrypted databases, enforced automatically.",
      },
      {
        title: "Central logging and detection",
        body: "Logs from every account and service into the bank's security operations, with detections tuned to the cloud.",
      },
      {
        title: "Tested resilience and exit",
        body: "Recovery and exit procedures are exercised, and the results reported to risk and supervisors.",
      },
    ],
    phases: [
      {
        title: "Assessment and strategy",
        body: "We inventory workloads, dependencies, data and regulatory constraints with architecture, risk and operations, and agree the target model and sequence.",
      },
      {
        title: "Landing zone and controls",
        body: "The secure foundation, connectivity and monitoring are built and tested, and the control evidence is prepared for risk and supervisors.",
      },
      {
        title: "Pilot workload",
        body: "A low-risk workload moves first, proving the foundation, the migration tooling and the operations model.",
      },
      {
        title: "Migrate in waves",
        body: "Workloads move in waves with rehearsals, parallel runs and reconciliation, with the most critical services after the practice is proven.",
      },
      {
        title: "Operate, optimise and exit-test",
        body: "Operations, cost and resilience are tuned, and exit and recovery plans are tested on a schedule.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Loan management systems for five Hong Kong lenders", href: "/case-studies#finance" },
      { label: "Banking and payments software", href: "/solutions/banking-and-payments" },
    ],
    faqs: [
      {
        q: "Will our supervisor allow core banking in the cloud?",
        a: "Supervisors in most jurisdictions permit it with conditions: due diligence on the provider, strong controls, tested resilience, exit plans and notification or consultation for material arrangements. We prepare the evidence and support your discussions with the supervisor.",
      },
      {
        q: "Do we have to move everything?",
        a: "No. A hybrid estate is normal. We recommend per workload, and often start with channels, data platforms and development environments before the ledger.",
      },
      {
        q: "How do you avoid lock-in to one cloud provider?",
        a: "By using open standards where they matter, containerised workloads, infrastructure code that is portable in design, and an exit plan that is tested, including for the services that cannot be made fully portable.",
      },
      {
        q: "How do you keep a payment system running during migration?",
        a: "By running old and new in parallel, replicating and reconciling data, rehearsing cutover and having a defined rollback, so the decision to switch is based on evidence.",
      },
      {
        q: "Who owns the infrastructure code and runbooks?",
        a: "You do. The code, the runbooks and the documentation stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "DORA ICT risk and resilience engineering", href: "/solutions/dora-ict-risk-engineering" },
      { label: "Disaster recovery for financial systems", href: "/solutions/disaster-recovery-for-financial-systems" },
      { label: "Sovereign cloud and data residency", href: "/solutions/sovereign-cloud-and-data-residency" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "pci-dss-compliance-engineering",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "PCI DSS 4.0 Compliance Engineering for Payment Systems | Deview",
    seoDescription:
      "PCI DSS 4.0 compliance engineering for payment systems: scope reduction, segmentation, tokenisation, encryption, logging, MFA and evidence automation.",
    kicker: "Cloud and security · Banking",
    h1: "PCI DSS 4.0 compliance engineering for payment systems",
    intro:
      "We provide PCI DSS 4.0 compliance engineering for payment systems: reducing the scope of cardholder data, segmenting and hardening the environments that remain in scope, tokenising and encrypting data, building the logging, authentication and vulnerability management the standard requires, and automating the evidence assessors ask for. Compliance becomes a property of how the system is built and run, and you own the controls and the code.",
    modules: [
      {
        title: "Scope definition and reduction",
        body: "Mapping of where cardholder data and sensitive authentication data flow and rest, and design changes that reduce or remove systems from scope.",
      },
      {
        title: "Network segmentation",
        body: "Segmentation of the cardholder data environment with firewalls, cloud network policies and tested isolation, so scope is defensible.",
      },
      {
        title: "Tokenisation and encryption",
        body: "Replacement of card numbers with tokens, strong cryptography for stored and transmitted data and managed keys in hardware security modules.",
      },
      {
        title: "Secure configuration and hardening",
        body: "Baselines for operating systems, containers, databases and cloud services, enforced and monitored as code.",
      },
      {
        title: "Access control and authentication",
        body: "Least-privilege access, multi-factor authentication for all access into the cardholder data environment and managed privileged accounts.",
      },
      {
        title: "Logging and monitoring",
        body: "Central, tamper-resistant logs for all in-scope systems, with daily review automation, alerts and time synchronisation.",
      },
      {
        title: "Vulnerability and patch management",
        body: "Scanning, penetration testing, risk-ranked remediation, and controls for payment pages and scripts that protect against skimming.",
      },
      {
        title: "Secure development",
        body: "Secure coding, code review, dependency management and testing in the pipeline for software that touches card data.",
      },
      {
        title: "Evidence automation and assessment support",
        body: "Continuous collection of configuration and test evidence, mapped to requirements, so the assessment and the targeted risk analyses draw on live data.",
      },
    ],
    diagram: {
      title: "PCI DSS compliance engineering: reference architecture",
      desc: "Card channels send data to a tokenisation and encryption boundary that isolates the cardholder data environment. Around it, segmentation, hardening, identity and authentication, logging, vulnerability management and secure development controls produce evidence for assessors and acquirers.",
      leftLabel: "Card data flows",
      platformLabel: "Controlled environment",
      rightLabel: "Assurance",
      platformTitle: "Cardholder data environment",
      boundary: "Scope boundary",
      left: [
        ["Payment pages and apps", "Capture, hosted fields"],
        ["Payment processing", "Authorisation, clearing"],
        ["Storage and reporting", "Tokens, masked data"],
      ],
      modules: [
        ["Tokenisation", "Tokens replace PANs"],
        ["Encryption and keys", "HSM, rotation"],
        ["Segmentation", "Tested isolation"],
        ["Hardening", "Baselines as code"],
        ["Identity and MFA", "All CDE access"],
        ["Logging", "Central, tamper-resistant"],
      ],
      strip: "Vulnerability management · secure development · evidence automation",
      right: [
        ["Qualified assessors", "Evidence packs"],
        ["Acquirers and card brands", "Attestations"],
        ["Security operations", "Alerts"],
        ["Management", "Compliance status"],
      ],
    },
    diagramCaption:
      "Reference architecture: card data is confined behind a tested boundary, and controls around it produce continuous evidence.",
    standards: [
      {
        name: "PCI DSS 4.0.1",
        note: "The Payment Card Industry Data Security Standard, with its twelve requirements, defined and customised approaches and targeted risk analyses.",
      },
      {
        name: "PCI P2PE, PIN and 3DS standards",
        note: "Point-to-point encryption, PIN security and 3-D Secure requirements that apply to specific payment flows.",
      },
      {
        name: "PCI scoping and segmentation guidance",
        note: "Guidance on scoping, segmentation and cloud shared responsibility from the PCI Security Standards Council.",
      },
      {
        name: "ISO/IEC 27001",
        note: "Information security management that provides the wider framework around payment security controls.",
      },
      {
        name: "OWASP ASVS and Top 10",
        note: "Application security requirements for payment applications and pages.",
      },
      {
        name: "Acquirer and card brand programmes",
        note: "Validation and reporting requirements of acquirers and card brands.",
      },
    ],
    dataModel: [
      {
        entity: "Data flow and system",
        holds: "System, data stored or transmitted, scope status and the controls that apply.",
      },
      {
        entity: "Requirement and control",
        holds: "PCI requirement, control, owner, approach (defined or customised) and test frequency.",
      },
      {
        entity: "Evidence",
        holds: "Control, artefact, collection time, result and retention.",
      },
      {
        entity: "Targeted risk analysis",
        holds: "Control, frequency chosen, rationale, approver and review date.",
      },
      {
        entity: "Vulnerability and remediation",
        holds: "Finding, severity, system, owner, due date and closure evidence.",
      },
      {
        entity: "Key and token record",
        holds: "Key identifier, purpose, custodians, rotation and token vault references.",
      },
      {
        entity: "Assessment",
        holds: "Scope, assessor, findings, remediation and attestation date.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Hosted payment pages, payment service providers and tokenisation services remove much of the scope, and are the first option to consider for merchants and many fintechs.",
      },
      {
        title: "Extend",
        body: "Extend a provider's service with your own segmentation, logging and evidence automation for the parts that remain in scope.",
      },
      {
        title: "Build",
        body: "Build and run the environment yourself when you are an issuer, processor or large acquirer, or hold card data as part of your product, and then engineer for compliance from the start.",
      },
    ],
    security: [
      {
        title: "Scope minimisation",
        body: "The safest card data is the data you never hold. Tokens, hosted fields and short retention reduce risk and cost.",
      },
      {
        title: "Separation of duties",
        body: "Administration, key custody, monitoring and development are held by different roles.",
      },
      {
        title: "Continuous control testing",
        body: "Controls are tested automatically, and failures raise tickets and alerts before assessment time.",
      },
      {
        title: "Protection of payment pages",
        body: "Inventory and integrity checks of scripts on payment pages, and content security controls against skimming.",
      },
      {
        title: "Incident readiness",
        body: "Response plans specific to card data compromise, with forensic readiness and notification paths to acquirers and card brands.",
      },
    ],
    phases: [
      {
        title: "Scoping and gap assessment",
        body: "We map card data flows and systems, and assess the current controls against the standard with security, payments and engineering.",
      },
      {
        title: "Scope reduction design",
        body: "Changes that remove systems and data from scope are designed and prioritised, with segmentation and tokenisation architecture.",
      },
      {
        title: "Build and harden",
        body: "The remaining environment is built and hardened as code, with logging, authentication and vulnerability management in place.",
      },
      {
        title: "Evidence automation and readiness test",
        body: "Evidence collection is automated, and a pre-assessment checks readiness and closes gaps.",
      },
      {
        title: "Assessment and continuous compliance",
        body: "The assessment is supported with ready evidence, and controls keep running and being tested between assessments.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Mobile banking app development", href: "/solutions/mobile-banking-app-development" },
    ],
    faqs: [
      {
        q: "Does Deview act as a Qualified Security Assessor?",
        a: "No. We engineer the controls and the evidence. The assessment and attestation are carried out by a Qualified Security Assessor or by you, depending on your validation level, and we work with them.",
      },
      {
        q: "How can we reduce our PCI scope?",
        a: "By using hosted payment fields or a payment provider so card numbers never touch your systems, tokenising data you do store, limiting retention and segmenting what remains. The best project is often one that removes systems from scope.",
      },
      {
        q: "What changed in PCI DSS 4.0?",
        a: "Among other things: a customised approach to meet objectives, targeted risk analyses to set the frequency of some controls, stronger authentication requirements and additional controls for payment page scripts. Requirements phased in over time and are now all in effect.",
      },
      {
        q: "Can compliance be continuous rather than annual?",
        a: "Yes. Automated configuration checks, evidence collection and alerts show control status every day, so the annual assessment confirms rather than discovers.",
      },
      {
        q: "Who owns the code and the controls?",
        a: "You do. The infrastructure code, the controls and the evidence stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "DevSecOps for regulated industries", href: "/solutions/devsecops-for-regulated-industries" },
      { label: "Application security and secure SDLC", href: "/solutions/application-security-and-secure-sdlc" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "dora-ict-risk-engineering",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "DORA ICT Risk and Operational Resilience Engineering | Deview",
    seoDescription:
      "DORA ICT risk and resilience engineering: risk framework, incident reporting, resilience testing including TLPT, third-party register and supervisory evidence.",
    kicker: "Cloud and security · Banking",
    h1: "DORA ICT risk and resilience engineering",
    intro:
      "We provide DORA ICT risk and resilience engineering for financial entities and their ICT providers: an ICT risk management framework implemented in tooling, incident classification and reporting workflows, digital operational resilience testing including threat-led penetration testing, a register of ICT third-party arrangements and the evidence supervisors expect. DORA's requirements become engineering work with owners and dates, and you own the controls and the code.",
    modules: [
      {
        title: "ICT asset and dependency inventory",
        body: "An inventory of ICT assets, services, data and dependencies, mapped to critical and important functions, kept current from the configuration and cloud estate.",
      },
      {
        title: "ICT risk management framework",
        body: "Risk identification, assessment and treatment for ICT, with policies, owners, controls, metrics and reporting to the management body.",
      },
      {
        title: "Protection and prevention controls",
        body: "Access control, encryption, network security, patch and change management and secure development, implemented and evidenced as engineering controls.",
      },
      {
        title: "Detection and monitoring",
        body: "Logging and anomaly detection across the estate, with alerting thresholds and response triggers that match the incident classification scheme.",
      },
      {
        title: "Incident management and reporting",
        body: "Classification of incidents against the regulation's criteria, and workflows that produce initial, intermediate and final reports to the supervisor within the required times.",
      },
      {
        title: "Business continuity and recovery",
        body: "Continuity and recovery plans for critical functions, backup and restoration, recovery objectives and the evidence of testing.",
      },
      {
        title: "Resilience testing programme",
        body: "Vulnerability assessment, scenario and performance testing, and for significant entities, threat-led penetration testing planned and managed to the requirements.",
      },
      {
        title: "ICT third-party risk management",
        body: "A register of information on ICT service arrangements, due diligence, the contractual provisions the regulation requires, monitoring and exit strategies.",
      },
      {
        title: "Information sharing and reporting",
        body: "Participation in cyber threat information sharing, board reporting and the evidence pack for supervisory reviews.",
      },
    ],
    diagram: {
      title: "DORA ICT risk and resilience engineering: reference architecture",
      desc: "ICT assets, cloud estate, incidents and third-party arrangements feed a resilience platform with an asset and dependency inventory, risk framework, protection controls, detection, incident reporting, continuity, testing and a third-party register. Outputs go to management, supervisors, auditors and ICT providers.",
      leftLabel: "ICT estate",
      platformLabel: "Resilience platform",
      rightLabel: "Consumers",
      platformTitle: "DORA resilience platform",
      left: [
        ["Applications and infrastructure", "On-premise and cloud"],
        ["ICT third parties", "Providers, contracts"],
        ["Incidents and events", "Alerts, tickets"],
      ],
      modules: [
        ["Asset and dependency map", "Functions to ICT"],
        ["ICT risk framework", "Risks, controls, metrics"],
        ["Incident reporting", "Classify, report"],
        ["Resilience testing", "Scenarios, TLPT"],
        ["Continuity and recovery", "Plans, tests"],
        ["Third-party register", "Contracts, exit"],
      ],
      strip: "Control evidence · board reporting · audit trail",
      right: [
        ["Management body", "Risk and metrics"],
        ["Supervisors", "Incident and register data"],
        ["Internal and external audit", "Evidence"],
        ["ICT providers", "Requirements, reviews"],
      ],
    },
    diagramCaption:
      "Reference architecture: the inventory ties critical functions to the ICT that supports them, and controls, incidents and testing hang off that map.",
    standards: [
      {
        name: "Regulation (EU) 2022/2554 (DORA)",
        note: "The Digital Operational Resilience Act, in application for EU financial entities since January 2025, covering ICT risk, incident reporting, testing, third-party risk and information sharing.",
      },
      {
        name: "DORA technical standards",
        note: "Regulatory and implementing technical standards on the risk framework, incident classification and reporting, testing, and the register of information.",
      },
      {
        name: "TIBER-EU and threat-led testing frameworks",
        note: "Frameworks for threat intelligence-based ethical red teaming that threat-led penetration testing follows.",
      },
      {
        name: "ISO/IEC 27001, ISO 22301 and NIST CSF",
        note: "Security, continuity and cybersecurity frameworks that structure controls and evidence.",
      },
      {
        name: "EBA and other supervisory guidelines",
        note: "Guidelines on ICT and security risk, outsourcing and related topics that continue to inform supervisory practice.",
      },
      {
        name: "Contract clauses for ICT providers",
        note: "The required provisions on service levels, data, audit, subcontracting, security and exit.",
      },
    ],
    dataModel: [
      {
        entity: "Function and ICT service",
        holds: "Critical or important function, supporting systems, providers and recovery objectives.",
      },
      {
        entity: "ICT risk and control",
        holds: "Risk, control, owner, effectiveness, test evidence and residual risk.",
      },
      {
        entity: "Incident",
        holds: "Classification criteria, timeline, impact, reports submitted and lessons.",
      },
      {
        entity: "Test and finding",
        holds: "Test type, scope, date, results, findings and remediation.",
      },
      {
        entity: "ICT third-party arrangement",
        holds: "Provider, service, functions supported, contract terms, subcontractors and exit plan.",
      },
      {
        entity: "Continuity plan",
        holds: "Scenario, procedures, owners, last test and outcome.",
      },
      {
        entity: "Management report",
        holds: "Period, metrics, decisions and approvals by the management body.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Governance, risk and compliance products and third-party risk tools provide registers and workflows, and are a sensible foundation for most financial entities.",
      },
      {
        title: "Extend",
        body: "Extend a GRC product with automated inventory from your cloud and configuration data, incident reporting workflows tied to your detection tools and live control evidence.",
      },
      {
        title: "Build",
        body: "Build when you are an ICT provider to financial entities, when you run a complex estate across jurisdictions, or when resilience data must flow automatically between engineering and risk systems.",
      },
    ],
    security: [
      {
        title: "Management accountability",
        body: "The management body approves and reviews the framework, and the system records its decisions and reports.",
      },
      {
        title: "Evidence integrity",
        body: "Control evidence, test results and incident records are retained unaltered with timestamps for supervisory review.",
      },
      {
        title: "Segregation of functions",
        body: "Risk ownership, control operation and assurance are held by separate roles.",
      },
      {
        title: "Supplier access control",
        body: "ICT providers have limited, logged and revocable access, with their obligations enforced through contracts and monitoring.",
      },
      {
        title: "Tested response",
        body: "Incident and recovery procedures are exercised, and findings are tracked to closure.",
      },
    ],
    phases: [
      {
        title: "Applicability and gap assessment",
        body: "We confirm which parts of DORA apply to the entity, and compare practices with the requirements and technical standards.",
      },
      {
        title: "Inventory and register",
        body: "The ICT asset and dependency map and the third-party register are built from authoritative sources.",
      },
      {
        title: "Controls, incident workflow and testing plan",
        body: "Controls are implemented and evidenced, incident classification and reporting are automated and a testing programme is planned.",
      },
      {
        title: "Third-party contracts and exit",
        body: "Provider contracts are reviewed against the required provisions, and exit plans are prepared and tested.",
      },
      {
        title: "Operate and report",
        body: "The framework runs, with reporting to management and supervisors and continuous improvement from tests and incidents.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
    ],
    faqs: [
      {
        q: "Does DORA apply to us?",
        a: "It applies to most EU financial entities and, through contracts and designation, to many of their ICT providers. Entities outside the EU that serve EU clients should check how it reaches them. We help establish the position and the work involved.",
      },
      {
        q: "What does threat-led penetration testing involve?",
        a: "Realistic attack simulations based on threat intelligence against live production systems that support critical functions, carried out by accredited testers under supervisory frameworks. We plan the programme and the remediation, and the testing itself is done by qualified testers.",
      },
      {
        q: "What is the register of information?",
        a: "A structured register of all ICT third-party arrangements, with the functions they support and key contractual details, which entities must maintain and submit to supervisors.",
      },
      {
        q: "Can this be automated?",
        a: "Much of it can. Asset inventory, control evidence, incident timelines and register data can be drawn from the cloud, configuration and ticketing systems, so compliance work is reduced to review and decision.",
      },
      {
        q: "Who owns the platform and code?",
        a: "You do. The code, the controls and the data stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "Cyber resilience engineering for banks", href: "/solutions/cyber-resilience-for-banks" },
      { label: "Disaster recovery for financial systems", href: "/solutions/disaster-recovery-for-financial-systems" },
      { label: "NIS2 compliance engineering", href: "/solutions/nis2-compliance-engineering" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "cyber-resilience-for-banks",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "Cyber Resilience Engineering for Banks (C-RAF, Testing) | Deview",
    seoDescription:
      "Cyber resilience engineering for banks: C-RAF support, detection engineering, intelligence-led testing, incident response, immutable backups and ransomware recovery.",
    kicker: "Cloud and security · Banking",
    h1: "Cyber resilience engineering for banks",
    intro:
      "We provide cyber resilience engineering for banks: support for cyber resilience assessments such as HKMA's C-RAF, monitoring and detection engineering, preparation for intelligence-led attack simulation, incident response playbooks that have been exercised, and recovery capability that survives ransomware, including immutable backups and clean-room restoration. The aim is a bank that can keep serving customers through an attack, and you own the controls and the code.",
    modules: [
      {
        title: "Cyber risk and maturity assessment",
        body: "Assessment of inherent risk and maturity against a supervisory framework such as C-RAF, with a plan that ranks improvements by risk reduction.",
      },
      {
        title: "Asset, identity and attack surface management",
        body: "Continuous inventory of assets and exposed services, strong identity and privileged access controls and reduction of the attack surface.",
      },
      {
        title: "Detection engineering",
        body: "Detections mapped to attacker techniques, tuned on the bank's own telemetry, with coverage measured against a framework such as MITRE ATT&CK.",
      },
      {
        title: "Security operations and response",
        body: "Monitoring workflows, triage, escalation and automation in the security operations centre, with clear roles and decision rights for incidents.",
      },
      {
        title: "Threat intelligence",
        body: "Intelligence relevant to the bank and its sector turned into detections, hunts and defensive actions, and shared through trusted channels.",
      },
      {
        title: "Intelligence-led testing",
        body: "Preparation, scoping and remediation for intelligence-led attack simulation programmes, and purple-team exercises that improve detection.",
      },
      {
        title: "Ransomware and destructive-attack readiness",
        body: "Segmentation, privileged access limits, immutable and isolated backups, and recovery plans for the systems that carry critical services.",
      },
      {
        title: "Crisis management and exercises",
        body: "Playbooks and exercises that include executives, communications, legal and regulators, with measured outcomes and follow-up actions.",
      },
      {
        title: "Metrics and board reporting",
        body: "Cyber risk indicators, control effectiveness and testing results reported to the board and risk committee in terms they can act on.",
      },
    ],
    diagram: {
      title: "Cyber resilience engineering for banks: reference architecture",
      desc: "Endpoints, networks, cloud, applications and identity feed security telemetry into a resilience programme with attack surface management, detection engineering, security operations, threat intelligence, testing, ransomware recovery and crisis management. Outputs go to the security operations centre, executives, regulators and the board.",
      leftLabel: "Estate and telemetry",
      platformLabel: "Resilience programme",
      rightLabel: "Consumers",
      platformTitle: "Cyber resilience programme",
      left: [
        ["Endpoints, network, cloud", "Logs, sensors"],
        ["Identity and privileged access", "Authentication events"],
        ["Applications and data", "Telemetry, backups"],
      ],
      modules: [
        ["Attack surface", "Assets, exposure"],
        ["Detection engineering", "Mapped to techniques"],
        ["Security operations", "Triage, response"],
        ["Threat intelligence", "Detections, hunts"],
        ["Testing and exercises", "Purple team, TLPT"],
        ["Recovery capability", "Immutable, clean room"],
      ],
      strip: "Playbooks · metrics · lessons learned",
      right: [
        ["Security operations centre", "Alerts, cases"],
        ["Executives and crisis team", "Decisions"],
        ["Regulators", "Assessment, incidents"],
        ["Board and risk committee", "Reports"],
      ],
    },
    diagramCaption:
      "Reference architecture: detect, respond and recover are designed together, and tested against realistic attacks.",
    standards: [
      {
        name: "HKMA Cyber Resilience Assessment Framework (C-RAF 2.0)",
        note: "The HKMA's framework for assessing inherent risk and maturity, with the iCAST intelligence-led attack simulation testing, used by authorised institutions in Hong Kong.",
      },
      {
        name: "TIBER-EU, CBEST and equivalents",
        note: "Intelligence-led red-team testing frameworks used by supervisors in Europe and the UK, and the model for similar programmes elsewhere.",
      },
      {
        name: "NIST Cybersecurity Framework 2.0",
        note: "Govern, identify, protect, detect, respond and recover functions used to structure the programme and its reporting.",
      },
      {
        name: "MITRE ATT&CK",
        note: "A knowledge base of attacker techniques for mapping detections, hunts and test scenarios.",
      },
      {
        name: "ISO/IEC 27001 and 27035",
        note: "Information security management and incident management guidance.",
      },
      {
        name: "Sector information sharing",
        note: "Participation in financial sector information sharing and analysis arrangements.",
      },
    ],
    dataModel: [
      {
        entity: "Asset and exposure",
        holds: "Asset, owner, criticality, internet exposure, vulnerabilities and controls.",
      },
      {
        entity: "Detection rule and coverage",
        holds: "Rule, technique mapped, data source, tuning, false-positive rate and test result.",
      },
      {
        entity: "Alert and case",
        holds: "Source, severity, analysis, response actions, timeline and closure.",
      },
      {
        entity: "Threat intelligence item",
        holds: "Source, relevance, indicators, techniques and the detection or hunt it produced.",
      },
      {
        entity: "Test and finding",
        holds: "Scenario, techniques used, detections observed, gaps and remediation.",
      },
      {
        entity: "Recovery plan and test",
        holds: "Critical service, recovery path, backup status, last test and outcome.",
      },
      {
        entity: "Exercise and action",
        holds: "Scenario, participants, decisions, issues found and the actions assigned.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Managed detection and response, SIEM and threat intelligence services provide capability quickly, and are the right start for banks without a mature security operations centre.",
      },
      {
        title: "Extend",
        body: "Extend purchased services with detection engineering on your own data, orchestration into your processes and recovery engineering that no security vendor provides.",
      },
      {
        title: "Build",
        body: "Build in-house capabilities where the bank's scale and risk justify it, such as detection content, automation and recovery tooling, while still buying commodity tools.",
      },
    ],
    security: [
      {
        title: "Privileged access control",
        body: "Tiered administration, just-in-time access and separate credentials for the systems that attackers target first.",
      },
      {
        title: "Immutable and isolated backups",
        body: "Backups that cannot be altered or deleted by a compromised administrator, stored apart from production and tested for restoration.",
      },
      {
        title: "Segmentation",
        body: "Network and identity segmentation that limits movement and keeps critical services separate from general IT.",
      },
      {
        title: "Tested response",
        body: "Playbooks are exercised with the people who will use them, including executives and communications.",
      },
      {
        title: "Safe testing",
        body: "Attack simulations run under agreed rules with safeguards for production, and findings are fixed and retested.",
      },
    ],
    phases: [
      {
        title: "Assessment and priorities",
        body: "We assess maturity against the framework and the threats most relevant to the bank, and agree a ranked improvement plan.",
      },
      {
        title: "Foundations: identity, visibility and backups",
        body: "Privileged access, telemetry coverage and recoverable backups are brought to a baseline, because most other controls depend on them.",
      },
      {
        title: "Detection and response engineering",
        body: "Detections, playbooks and automation are built and tested with the security operations team.",
      },
      {
        title: "Testing and exercises",
        body: "Purple-team and intelligence-led tests and crisis exercises are run, with findings fixed and retested.",
      },
      {
        title: "Recovery proof and continuous improvement",
        body: "Recovery from a destructive scenario is demonstrated, and the programme runs as a cycle of testing and improvement.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "AI security checklist", href: "/resources/ai-security-checklist" },
      { label: "Zero trust architecture", href: "/solutions/zero-trust-architecture" },
    ],
    faqs: [
      {
        q: "What is C-RAF?",
        a: "The Cyber Resilience Assessment Framework issued by the Hong Kong Monetary Authority. Banks assess their inherent cyber risk and their maturity against it, and the HKMA uses the results, together with intelligence-led attack simulation testing, in its supervision.",
      },
      {
        q: "Can you run the intelligence-led penetration tests?",
        a: "Accredited testers carry out those tests. We prepare the bank, help scope them, build the detections and fix what the tests find, so the exercise improves the bank's defences.",
      },
      {
        q: "How do you protect backups from ransomware?",
        a: "With immutable storage, separation from production credentials, isolated recovery environments and regular restoration tests. Backups that have never been restored are a hope, not a control.",
      },
      {
        q: "Do you operate a security operations centre?",
        a: "We build and improve detection, automation and response capability with your team, and integrate with managed services where you use them. Ongoing 24-hour monitoring is normally provided by your own centre or a managed provider.",
      },
      {
        q: "Who owns the detections and playbooks?",
        a: "You do. The detections, the playbooks, the code and the data stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "DORA ICT risk and resilience engineering", href: "/solutions/dora-ict-risk-engineering" },
      { label: "Disaster recovery for financial systems", href: "/solutions/disaster-recovery-for-financial-systems" },
      { label: "Zero trust architecture", href: "/solutions/zero-trust-architecture" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "disaster-recovery-for-financial-systems",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "Disaster Recovery and Continuity for Financial Systems | Deview",
    seoDescription:
      "Disaster recovery and continuity for financial systems: recovery objectives, active-active and failover design, consistent replication and tested failover.",
    kicker: "Cloud and security · Banking",
    h1: "Disaster recovery and business continuity for financial systems",
    intro:
      "We design and test disaster recovery and business continuity for financial systems: recovery objectives set by business impact, architectures from backup and restore to active-active, consistent replication of ledgers and messages, payment flows that survive failover without double processing, and failover tests that prove the plan works. The bank knows how long it can be down and demonstrates it, and you own the runbooks and the code.",
    modules: [
      {
        title: "Business impact and tolerance",
        body: "Identification of important business services and the maximum tolerable disruption for each, set with the business and agreed by management.",
      },
      {
        title: "Dependency mapping",
        body: "Mapping of each service to the applications, data, networks, third parties and people it depends on, so recovery plans cover the whole chain.",
      },
      {
        title: "Recovery objectives",
        body: "Recovery time and recovery point objectives per service, with the cost of each option, so the design matches the need and not a blanket rule.",
      },
      {
        title: "Resilient architecture patterns",
        body: "Backup and restore, pilot light, warm standby and active-active designs chosen per service, across zones and regions as required.",
      },
      {
        title: "Data replication and consistency",
        body: "Synchronous and asynchronous replication of databases and queues, with decisions on data loss and consistency across systems that must agree.",
      },
      {
        title: "Payment and transaction continuity",
        body: "Idempotent processing, replay of in-flight messages and reconciliation after failover, so no payment is lost or processed twice.",
      },
      {
        title: "Failover and failback automation",
        body: "Automated, rehearsed runbooks for failover and for returning to normal, with decision points and the controls to avoid split-brain.",
      },
      {
        title: "Testing programme",
        body: "Scheduled component, application and full-service failover tests, severe but plausible scenarios, and measured results against objectives.",
      },
      {
        title: "Cyber and third-party scenarios",
        body: "Recovery from ransomware and destructive attacks, and from the failure of a critical provider, with the alternative arrangements tested.",
      },
    ],
    diagram: {
      title: "Disaster recovery for financial systems: reference architecture",
      desc: "Important business services depend on applications, data, networks and third parties in a primary site. A resilience design with replication, a secondary site or region, failover automation, backups and a testing programme keeps services within their impact tolerances. Results go to management, supervisors and auditors.",
      leftLabel: "Primary site",
      platformLabel: "Resilience design",
      rightLabel: "Secondary site and assurance",
      platformTitle: "Disaster recovery and continuity",
      left: [
        ["Important business services", "Payments, accounts, trading"],
        ["Applications and data", "Core, hub, databases, queues"],
        ["Networks and third parties", "Connectivity, providers"],
      ],
      modules: [
        ["Impact tolerances", "Per service"],
        ["Dependency map", "Chain to recover"],
        ["Replication", "Consistent copies"],
        ["Failover automation", "Runbooks, decision points"],
        ["Payment continuity", "Idempotent replay"],
        ["Testing", "Severe but plausible"],
      ],
      strip: "Immutable backups · reconciliation after failover · audit trail",
      right: [
        ["Secondary site or region", "Warm or active"],
        ["Management and board", "Test results"],
        ["Supervisors", "Evidence"],
        ["Internal audit", "Assurance"],
      ],
    },
    diagramCaption:
      "Reference architecture: recovery is designed per service from its tolerance, and proven by tests that measure real recovery times.",
    standards: [
      {
        name: "BCBS Principles for Operational Resilience",
        note: "The Basel Committee's principles on governance, mapping of critical operations, tolerance for disruption, testing and incident management.",
      },
      {
        name: "Supervisory operational resilience rules",
        note: "National and regional requirements on important business services and impact tolerances, such as those of the UK authorities, and DORA in the EU.",
      },
      {
        name: "ISO 22301",
        note: "Business continuity management systems standard for policy, planning, exercises and improvement.",
      },
      {
        name: "ISO/IEC 27031",
        note: "Guidelines for ICT readiness for business continuity.",
      },
      {
        name: "Payment system continuity requirements",
        note: "Rules of payment systems and schemes on availability, contingency and recovery for participants.",
      },
      {
        name: "Cloud provider resilience guidance",
        note: "Provider architecture guidance on zones, regions and shared responsibility for resilience.",
      },
    ],
    dataModel: [
      {
        entity: "Important business service",
        holds: "Description, owner, impact tolerance, dependencies and recovery strategy.",
      },
      {
        entity: "Dependency",
        holds: "Application, data store, network, provider or person, and the services it supports.",
      },
      {
        entity: "Recovery objective",
        holds: "RTO, RPO, tier, design pattern and the cost of the chosen option.",
      },
      {
        entity: "Runbook",
        holds: "Steps, roles, decision points, last review and last execution.",
      },
      {
        entity: "Replication status",
        holds: "Source, target, lag, consistency checks and alerts.",
      },
      {
        entity: "Test and result",
        holds: "Scenario, scope, measured recovery time and data loss, issues found and actions.",
      },
      {
        entity: "Backup and restore verification",
        holds: "Dataset, immutability status, last restore test and outcome.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Disaster-recovery services from cloud providers and specialist vendors provide replication and orchestration, and are the sensible foundation for most workloads.",
      },
      {
        title: "Extend",
        body: "Extend provider tools with consistency checks across systems, payment-flow reconciliation after failover, and a testing programme tied to your impact tolerances.",
      },
      {
        title: "Build",
        body: "Build active-active designs and custom failover logic for the few services, such as payment hubs and ledgers, where seconds matter and generic tools do not understand the application.",
      },
    ],
    security: [
      {
        title: "Isolated recovery data",
        body: "Backups are immutable and separated from production credentials, so an attacker who controls production cannot erase recovery.",
      },
      {
        title: "Access during failover",
        body: "Emergency access is controlled, logged and time-limited, and does not weaken the security of the secondary site.",
      },
      {
        title: "Consistent security at the secondary site",
        body: "The secondary environment has the same controls, patch level and monitoring as the primary.",
      },
      {
        title: "Decision authority",
        body: "Who may declare a disaster and trigger failover is defined, with the decision recorded.",
      },
      {
        title: "Evidence of testing",
        body: "Test plans, results and fixes are retained for management, audit and supervisors.",
      },
    ],
    phases: [
      {
        title: "Services, tolerances and dependencies",
        body: "We identify the important services, agree tolerances with the business and map their dependencies end to end.",
      },
      {
        title: "Gap assessment and design",
        body: "Current recovery capability is measured against the tolerances, and designs and costs are agreed per service.",
      },
      {
        title: "Build replication and automation",
        body: "Replication, secondary environments and failover automation are built, starting with the most critical services.",
      },
      {
        title: "Test and fix",
        body: "Component, application and full-service tests are run, measured against objectives, and weaknesses are fixed and retested.",
      },
      {
        title: "Operate the programme",
        body: "Tests, reviews and reporting run on a cycle, and changes to systems trigger updates to the plans.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "Core banking and payments cloud migration", href: "/solutions/core-banking-cloud-migration" },
      { label: "Observability and SRE for transaction systems", href: "/solutions/observability-and-sre-for-transaction-systems" },
    ],
    faqs: [
      {
        q: "How do you decide between active-active and backup and restore?",
        a: "By the service's impact tolerance and the cost of each option. Active-active suits the few services where minutes matter. Warm standby or restore from backup is enough for many others. We cost each choice so the decision is made on evidence.",
      },
      {
        q: "How do you avoid double payments after a failover?",
        a: "Every payment has a unique reference, and processing is idempotent. After failover, in-flight messages are replayed against that reference and reconciled with the scheme and the ledger, so none is lost or repeated.",
      },
      {
        q: "How often should we test?",
        a: "Component-level recovery tests run continuously or frequently, application failover tests regularly, and full-service tests at least annually, with extra tests after significant change. The programme is risk-based and agreed with risk and audit.",
      },
      {
        q: "Does cloud make disaster recovery easier?",
        a: "It makes building a secondary environment much easier and cheaper. It does not remove the need to design for consistency, test failover and plan for provider failure.",
      },
      {
        q: "Who owns the runbooks and automation?",
        a: "You do. The runbooks, the automation and the test records stay yours.",
      },
    ],
    assetId: "cloud-resilience-checklist",
    related: [
      { label: "DORA ICT risk and resilience engineering", href: "/solutions/dora-ict-risk-engineering" },
      { label: "Cyber resilience engineering for banks", href: "/solutions/cyber-resilience-for-banks" },
      { label: "Observability and SRE for transaction systems", href: "/solutions/observability-and-sre-for-transaction-systems" },
    ],
    updated: "2026-10-15",
  },
  {
    slug: "observability-and-sre-for-transaction-systems",
    vertical: "banking",
    serviceId: "cloud-devops",
    seoTitle: "Observability and SRE for Transaction Systems | Deview",
    seoDescription:
      "Observability and SRE for transaction systems: service level objectives, tracing, business metrics, synthetic checks, alerting and release safety.",
    kicker: "Cloud and security · Banking",
    h1: "Observability and SRE for transaction systems",
    intro:
      "We build observability and SRE for transaction systems in banks and payment firms, applying site reliability engineering practice: service level objectives tied to business outcomes, end-to-end tracing of a payment across systems, business metrics next to technical ones, synthetic transactions, alerts that point at symptoms, and incident response and release practices that protect availability. Operations see problems before customers do, and you own the tooling and the runbooks.",
    modules: [
      {
        title: "Service level indicators and objectives",
        body: "Measures of what users experience, such as payment success rate, latency and availability, with objectives and error budgets agreed between business and engineering.",
      },
      {
        title: "Distributed tracing",
        body: "A trace of each transaction across channels, hub, core and external networks, so the time and failures at each step are visible.",
      },
      {
        title: "Metrics and logs",
        body: "Consistent technical metrics and structured logs, enriched with business context such as rail, client segment and product, with controls on sensitive data.",
      },
      {
        title: "Business transaction monitoring",
        body: "Live views of volumes, values, success rates and queue depths by flow, with baselines that adapt to time of day and calendar effects.",
      },
      {
        title: "Synthetic transactions",
        body: "Automated test transactions that exercise key journeys continuously from outside, to detect failures before real customers meet them.",
      },
      {
        title: "Alerting and on-call",
        body: "Alerts based on symptoms and error budget burn rather than every cause, routed to on-call engineers with runbooks and escalation paths.",
      },
      {
        title: "Incident response and post-incident review",
        body: "Defined roles, communication, timelines and blameless reviews that produce tracked improvements, linked to the regulatory incident process.",
      },
      {
        title: "Capacity and performance engineering",
        body: "Load tests, capacity models and performance budgets for peak days, with results used in release and scaling decisions.",
      },
      {
        title: "Release safety and resilience testing",
        body: "Canary releases, feature flags, automated rollback and controlled fault injection to learn how the system fails before it does so in production.",
      },
    ],
    diagram: {
      title: "Observability and SRE for transaction systems: reference architecture",
      desc: "Channels, payment hubs, core systems and external networks emit traces, metrics and logs into an observability platform with service level objectives, tracing, business metrics, synthetic checks, alerting and incident workflows. Outputs go to on-call engineers, operations, business owners and regulators.",
      leftLabel: "Systems and signals",
      platformLabel: "Observability platform",
      rightLabel: "Consumers",
      platformTitle: "Observability and SRE platform",
      left: [
        ["Channels and APIs", "Requests, latency"],
        ["Payment hub and core", "Transactions, queues"],
        ["External networks", "Schemes, partners"],
      ],
      modules: [
        ["SLOs and error budgets", "User-centred"],
        ["Distributed tracing", "End to end"],
        ["Business metrics", "Success, volume, value"],
        ["Synthetic checks", "Key journeys"],
        ["Alerting and on-call", "Symptom-based"],
        ["Incident workflow", "Roles, reviews"],
      ],
      strip: "OpenTelemetry · data masking · audit trail",
      right: [
        ["On-call engineers", "Pages, runbooks"],
        ["Operations", "Live views"],
        ["Business owners", "Service health"],
        ["Risk and regulators", "Incident evidence"],
      ],
    },
    diagramCaption:
      "Reference architecture: every transaction can be followed, every service has an objective, and alerts point at what customers feel.",
    standards: [
      {
        name: "OpenTelemetry",
        note: "The open standard and tooling for traces, metrics and logs, avoiding lock-in to one monitoring vendor.",
      },
      {
        name: "SRE practice",
        note: "Service level objectives, error budgets, toil reduction and blameless post-incident reviews as set out in site reliability engineering practice.",
      },
      {
        name: "Incident reporting requirements",
        note: "Regulatory rules on classification and reporting of operational and ICT incidents, which the incident workflow feeds.",
      },
      {
        name: "ISO 22301 and operational resilience",
        note: "Continuity and resilience frameworks that tie service objectives to impact tolerances.",
      },
      {
        name: "Data protection and logging standards",
        note: "Rules on personal and payment data in logs and traces, including masking and retention.",
      },
      {
        name: "DORA and release metrics",
        note: "Delivery performance measures such as deployment frequency, lead time, change failure rate and recovery time.",
      },
    ],
    dataModel: [
      {
        entity: "Service and SLO",
        holds: "Service, owner, indicators, objective, window and error budget.",
      },
      {
        entity: "Trace and span",
        holds: "Transaction identifier, steps, durations, status and attributes.",
      },
      {
        entity: "Metric series",
        holds: "Name, labels, value, time and the system or flow it describes.",
      },
      {
        entity: "Synthetic check",
        holds: "Journey, schedule, location, result and latency.",
      },
      {
        entity: "Alert and page",
        holds: "Rule, severity, recipient, acknowledgement and resolution.",
      },
      {
        entity: "Incident and review",
        holds: "Timeline, impact, causes, actions, owners and closure.",
      },
      {
        entity: "Capacity model",
        holds: "Load profile, capacity measured, headroom and planned scaling.",
      },
    ],
    buildOptions: [
      {
        title: "Buy",
        body: "Observability platforms provide collection, storage, dashboards and alerting as services, and are the default choice for most teams.",
      },
      {
        title: "Extend",
        body: "Extend a platform with business transaction monitoring, payment-specific tracing and SLOs defined from your own journeys, which general tools do not provide.",
      },
      {
        title: "Build",
        body: "Build on open-source components when data volumes make vendor pricing prohibitive, when data must stay in your environment or when you need deep integration with your own incident and release processes.",
      },
    ],
    security: [
      {
        title: "No sensitive data in telemetry",
        body: "Card numbers, personal data and secrets are masked or excluded from logs and traces at the source.",
      },
      {
        title: "Access to observability data",
        body: "Telemetry is access-controlled by team and sensitivity, with audit of who looked at what.",
      },
      {
        title: "Tamper-resistant logs",
        body: "Security-relevant logs are written to protected storage and retained for the required period.",
      },
      {
        title: "Safe fault injection",
        body: "Resilience experiments run under agreed rules, with safeguards, approval and the ability to stop immediately.",
      },
      {
        title: "Change control for alerts and SLOs",
        body: "Changes to objectives and alert rules are reviewed, so signals are not silently weakened.",
      },
    ],
    phases: [
      {
        title: "Journeys and objectives",
        body: "We pick the most important customer and payment journeys with the business, and define what good looks like for each.",
      },
      {
        title: "Instrumentation and baseline",
        body: "Tracing, metrics and logs are added to the systems on those journeys, and a baseline of current performance is established.",
      },
      {
        title: "SLOs, synthetic checks and alerting",
        body: "Service objectives, synthetic transactions and symptom-based alerts replace noisy cause-based alerts.",
      },
      {
        title: "Incident and release practice",
        body: "On-call, incident roles, reviews, canary releases and rollback are introduced and practised.",
      },
      {
        title: "Capacity and resilience testing",
        body: "Load tests and controlled fault injection show how the system behaves under peak and failure, and the findings are fixed.",
      },
    ],
    proof: [
      { label: "Cloud, DevOps and cloud security", href: "/services/cloud-devops" },
      { label: "ISO 20022 payment hub development", href: "/solutions/iso-20022-payment-hub" },
      { label: "Disaster recovery for financial systems", href: "/solutions/disaster-recovery-for-financial-systems" },
    ],
    faqs: [
      {
        q: "What is the difference between monitoring and observability?",
        a: "Monitoring checks known conditions against thresholds. Observability lets you ask new questions of a running system from its traces, metrics and logs, which matters when a failure has not been seen before.",
      },
      {
        q: "How do you set a service level objective for a payment system?",
        a: "From what the customer experiences, such as the share of payments completed successfully within an agreed time, agreed between business and engineering, with an error budget that guides how much change risk is acceptable.",
      },
      {
        q: "Can we trace a payment across systems from different vendors?",
        a: "Yes, by propagating a transaction identifier through channels, hub, core and gateways and using standard tracing. Where a vendor system cannot emit traces, logs and message identifiers fill the gap.",
      },
      {
        q: "How do you keep sensitive data out of telemetry?",
        a: "By masking or excluding it at the source, validating logs for leakage in the pipeline and restricting access to what remains.",
      },
      {
        q: "Who owns the dashboards, alerts and runbooks?",
        a: "You do. The configuration, the runbooks and the data stay yours.",
      },
    ],
    assetId: "payments-iso20022-readiness",
    related: [
      { label: "Disaster recovery for financial systems", href: "/solutions/disaster-recovery-for-financial-systems" },
      { label: "Real-time payments integration", href: "/solutions/real-time-payments-integration" },
      { label: "DevSecOps for regulated industries", href: "/solutions/devsecops-for-regulated-industries" },
    ],
    updated: "2026-10-15",
  },
];
