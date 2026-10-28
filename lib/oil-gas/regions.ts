export interface RegionalHub {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  metaDescription: string;
  executiveSummary: string;
  operatingContext: {
    operators: string;
    assetTypes: string;
    procurementRegime: string;
    hostingAndData: string;
    connectivity: string;
  };
  keyWorkflows: Array<{
    title: string;
    description: string;
    solutionSlug: string;
  }>;
  countries: Array<{
    slug: string;
    name: string;
    rationale: string;
    tier: 1 | 2 | 3;
  }>;
  deploymentPatterns: Array<{
    name: string;
    suitability: string;
    description: string;
  }>;
  sources: Array<{
    title: string;
    organization: string;
    date: string;
    url: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const REGIONAL_HUBS: Record<string, RegionalHub> = {
  "middle-east": {
    slug: "middle-east",
    name: "Middle East & GCC",
    title: "Middle East Oil & Gas Digital Systems | Sovereign AI & Operations Platform",
    tagline: "Connecting sovereignty mandates, NOC/JV coordination, capital project controls, and operational data platforms across the GCC and Iraq.",
    metaDescription: "Enterprise software and private industrial AI architecture for Middle East national oil companies, joint ventures, and major EPC contractors.",
    executiveSummary: "The Middle East energy sector operates at world-leading scale across supergiant onshore reservoirs, deep offshore fields, and mega LNG liquefaction complexes. National oil companies (ADNOC, Saudi Aramco, PDO, QatarEnergy, KOC) and their operating joint ventures require software systems that enforce strict in-country data sovereignty (such as UAE DESC and Saudi PDPL/NDMO guidelines) while orchestrating multi-billion-dollar capital projects, complex contractor ecosystems, and high-frequency SCADA/historian surveillance without risking industrial control security.",
    operatingContext: {
      operators: "National Oil Companies (NOCs), equity joint ventures with international majors (IOCs), and Tier-1 engineering, procurement, and construction (EPC) conglomerates.",
      assetTypes: "Supergiant onshore fields, automated offshore drilling rigs, gas processing trains, LNG liquefaction terminals, and integrated petrochemical complexes.",
      procurementRegime: "Formal vendor prequalification matrices, strict cybersecurity compliance verifications, and national in-country value programs (e.g., UAE ICV, Saudi IKTVA).",
      hostingAndData: "Strict data residency regulations requiring sovereign hosting in Tier-3/4 domestic data centers (local Azure/AWS sovereign regions or private air-gapped VPCs) with no unapproved cross-border telemetry egress.",
      connectivity: "Dense private fiber networks and corporate WANs across central operating centers, coupled with dedicated offshore satellite links (VSAT/Starlink) and localized edge gateways for remote desert wells."
    },
    keyWorkflows: [
      {
        title: "Capital Project Controls & Multi-Contractor Governance",
        description: "Unified work breakdown structures, Primavera P6 and SAP ERP synchronization, earned value tracking, and contractor change-order approvals for mega-projects.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Multi-Party Contractor & Vendor Portals",
        description: "Permission-scoped interfaces for hundreds of simultaneous EPC contractors and service providers to submit daily progress, certified billings, and HSE records.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      },
      {
        title: "Sovereign Industrial AI & Private Knowledge RAG",
        description: "Air-gapped LLM deployment within sovereign data boundaries for drilling reports, maintenance logs, operational procedures, and joint-venture contracts.",
        solutionSlug: "sovereign-industrial-ai-gcc-energy"
      },
      {
        title: "SCADA / Historian One-Way Integration",
        description: "Unidirectional operational data ingestion from edge historians into executive analytics pipelines without exposing Level 2/3 control loops to Level 4 corporate networks.",
        solutionSlug: "osdu-data-platform-national-oil-companies"
      }
    ],
    countries: [
      {
        slug: "united-arab-emirates",
        name: "United Arab Emirates",
        rationale: "Hub for regional headquarters, sovereign cloud adoption, AI-driven drilling surveillance, and ADNOC-scale digital operations.",
        tier: 1
      },
      {
        slug: "saudi-arabia",
        name: "Saudi Arabia",
        rationale: "World-scale upstream operations, IKTVA technology localization requirements, and private enterprise AI mandates.",
        tier: 1
      },
      {
        slug: "oman",
        name: "Oman",
        rationale: "Mature enhanced oil recovery (EOR), multi-partner concession governance (PDO), and production restatement controls.",
        tier: 1
      },
      {
        slug: "qatar",
        name: "Qatar",
        rationale: "North Field LNG expansion programmes, mega-project contractor reporting, and cryogenic operations data management.",
        tier: 1
      },
      {
        slug: "kuwait",
        name: "Kuwait",
        rationale: "Heavy oil and Jurassic deep gas developments requiring rigorous contractor compliance, capital controls, and KOC approvals.",
        tier: 1
      },
      {
        slug: "iraq",
        name: "Iraq",
        rationale: "Southern field rehabilitation, complex multi-partner technical service contracts (TSC), and intermittent telecommunications infrastructure.",
        tier: 2
      },
      {
        slug: "bahrain",
        name: "Bahrain",
        rationale: "Bapco modernization programme, refining operations optimization, and tight national energy supply chain governance.",
        tier: 3
      }
    ],
    deploymentPatterns: [
      {
        name: "Air-Gapped Sovereign On-Premise",
        suitability: "Mission-critical NOC operations, proprietary subsurface seismic assets, and national strategic reserve data.",
        description: "Full software stack deployed inside operator-owned data centers on bare metal or private OpenStack/VMware virtualization with zero external internet dependencies."
      },
      {
        name: "National In-Country Cloud (GCC Sovereign VPC)",
        suitability: "Joint-venture project controls, contractor collaboration portals, and cross-operator supply chain workflows.",
        description: "Deployed within accredited local cloud regions (e.g., UAE G42 Cloud, Oracle Cloud Riyadh, Microsoft Cloud UAE Central) under sovereign encryption key management."
      },
      {
        name: "Edge-Buffered Remote Field Gateways",
        suitability: "Isolated desert wellheads, remote manifolds, and offshore production platforms.",
        description: "Industrial IoT edge gateways buffering telemetric signals, applying preliminary data sanitation and local alert rules, with encrypted burst sync over VSAT."
      }
    ],
    sources: [
        {
          title: "ADNOC In-Country Value (ICV) Program Strategy & Supplier Portal",
          organization: "Abu Dhabi National Oil Company (ADNOC)",
          date: "2024",
          url: "https://www.adnoc.ae/en/in-country-value"
        },
        {
          title: "National Data Management and Personal Data Protection Standards (PDPL)",
          organization: "Saudi Data & AI Authority (SDAIA)",
          date: "2024",
          url: "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2"
        },
        {
          title: "Essential Cybersecurity Controls (ECC-1:2018)",
          organization: "National Cybersecurity Authority (NCA), Kingdom of Saudi Arabia",
          date: "2018",
          url: "https://nca.gov.sa/en/regulatory-documents/ecc"
        }
      ],
    faqs: [
      {
        q: "How does Deview satisfy GCC data sovereignty mandates?",
        a: "Our software architectures are engineered for deployment flexibility. We support complete air-gapped on-premise installation in your primary data center or deployment inside certified in-country cloud VPCs (such as UAE-hosted or Saudi-hosted cloud regions) with customer-controlled cryptographic keys, designed to maintain production records and proprietary data strictly within sovereign national borders."
      },
      {
        q: "Can Deview systems integrate with existing SAP and Primavera P6 installations?",
        a: "Yes. In our project controls and contractor portal implementations, we provide standardized bidirectional and unidirectional connectors to SAP ECC / S/4HANA (cost codes, purchase orders, SES) and Primavera P6 EPPM (WBS structures, activity baselines, resource allocations)."
      },
      {
        q: "How do you handle cybersecurity between IT and OT systems?",
        a: "We adhere strictly to IEC 62443 security segmentation principles. Operational telemetry from SCADA or DCS historians is ingested via unidirectional industrial data diodes or DMZ proxy brokers. Business applications never possess a return write-path into Level 1 or Level 2 control loops."
      },
      {
        q: "What is Deview's delivery model in the GCC?",
        a: "We act as specialized enterprise software and AI architects. We collaborate with national energy operators and their authorized local systems integration partners, providing solution architecture, custom software development, integration engineering, and knowledge transfer to local technical teams."
      }
    ]
  },

  "north-africa": {
    slug: "north-africa",
    name: "North Africa",
    title: "North Africa Oil & Gas Software Engineering | Upstream Data & Asset Integrity",
    tagline: "Connecting national data banks, mature-field optimization, offshore infrastructure, and bilingual French/Arabic/English procurement across Egypt, Algeria, Libya, Morocco, and Mauritania.",
    metaDescription: "Enterprise upstream platforms, asset integrity management, and concession reporting software for North African national oil companies and operating partners.",
    executiveSummary: "North Africa represents an indispensable energy corridor balancing mature onshore production basins with rapid offshore Mediterranean gas developments. National operators including Sonatrach, EGPC/EGAS, and NOC Libya navigate complex operating realities: revamping legacy brownfield assets, ensuring pipeline and processing plant integrity under demanding desert conditions, unifying multi-decade exploration archives into modern digital repositories, and coordinating multinational concession joint ventures under bilingual administrative standards.",
    operatingContext: {
      operators: "State oil and gas corporations (Sonatrach, EGPC, EGAS, NOC Libya, ONHYM), Mediterranean offshore international operators (Eni, bp, TotalEnergies), and regional oilfield service firms.",
      assetTypes: "Mature onshore oilfields with high water cut, giant deepwater gas fields (e.g., Zohr), long-distance transcontinental gas pipelines, and coastal LNG export terminals.",
      procurementRegime: "Bilingual (Arabic/French/English) tender structures, public procurement oversight, local currency settlement considerations, and engineering workforce development requirements.",
      hostingAndData: "National data sovereignty laws mandating in-country retention of upstream subsurface data and concession records, with government-approved data center hosting.",
      connectivity: "Reliable fiber at Mediterranean coastal terminals and central hubs; high latency or intermittent satellite connectivity across deep Sahara exploration and production concessions."
    },
    keyWorkflows: [
      {
        title: "National Upstream Data Platform & Exploration Data Rooms",
        description: "Centralized well, seismic, and core repository governance with fine-grained concession entitlements and virtual data room workflows for licensing rounds.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Mature Asset Integrity & Risk-Based HSE Inspection",
        description: "Digital inspection logs, corrosion tracking, thickness measurements, and statutory pressure vessel compliance across aging desert pipeline and gathering infrastructure.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Daily Upstream Production Accounting & Deferment Tracking",
        description: "Wellhead test reconciliation, field gathering allocation, flare monitoring, and automated official reporting to ministerial petroleum authorities.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Multi-Language Operator & Contractor Collaboration",
        description: "Bilingual (English/French/Arabic) administrative portals for joint venture accounting, work order submissions, and localized supplier compliance.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      }
    ],
    countries: [
      {
        slug: "egypt",
        name: "Egypt",
        rationale: "Mediterranean gas hub, Egypt Upstream Gateway (EUG) modernization, and unified petroleum sector digital transformation initiatives.",
        tier: 1
      },
      {
        slug: "algeria",
        name: "Algeria",
        rationale: "Sonatrach digital modernization, extensive trans-Mediterranean gas pipelines, and mature Sahara field asset integrity programs.",
        tier: 1
      },
      {
        slug: "libya",
        name: "Libya",
        rationale: "Field rehabilitation, decentralized concession management, production restatement controls, and resilient offline field synchronization.",
        tier: 2
      },
      {
        slug: "morocco",
        name: "Morocco",
        rationale: "Exploration data management, national energy transition infrastructure, and Atlantic/Mediterranean offshore data rooms.",
        tier: 3
      },
      {
        slug: "mauritania",
        name: "Mauritania",
        rationale: "Greater Tortue Ahmeyim (GTA) cross-border offshore gas developments and multi-operator joint venture governance.",
        tier: 3
      }
    ],
    deploymentPatterns: [
      {
        name: "In-Country Hybrid Enterprise Cloud",
        suitability: "Operator corporate headquarters, commercial accounting, and concession data governance.",
        description: "Hosted in accredited domestic Tier-3 data centers in Cairo or Algiers with private MPLS connections to field operational headquarters."
      },
      {
        name: "Resilient Offline Field Cache",
        suitability: "Remote Sahara wellhead manifolds, pipeline pumping stations, and isolated gathering centers.",
        description: "Local web application runtimes operating independently on field hardware, queuing inspection and production records until satellite link reconnection."
      }
    ],
    sources: [
        {
          title: "Egypt Petroleum Sector Modernization Project: Programme 7 Digital Transformation",
          organization: "Ministry of Petroleum and Mineral Resources, Arab Republic of Egypt",
          date: "2023",
          url: "https://www.petroleum.gov.eg/en/update-project/programs/Pages/program7.aspx"
        },
        {
          title: "Egypt Upstream Gateway (EUG) Exploration Portal",
          organization: "Egyptian General Petroleum Corporation (EGPC)",
          date: "2024",
          url: "https://www.petroleum.gov.eg/en/investment/investment-chances/Pages/EUG.aspx"
        },
        {
          title: "ALNAFT Hydrocarbon Exploration Regulatory Framework & Bidding Rules",
          organization: "National Agency for the Valorization of Hydrocarbon Resources (ALNAFT), Algeria",
          date: "2023",
          url: "https://www.alnaft.dz/en/cadre-reglementaire"
        }
      ],
    faqs: [
      {
        q: "Does your software support French, Arabic, and English interfaces?",
        a: "Yes. Our UI layer is architected with complete internationalization support, allowing bilingual or trilingual users to toggle seamlessly between English, French, and right-to-left (RTL) Arabic across forms, table headers, inspection checklists, and generated executive reports."
      },
      {
        q: "How does the system operate during Saharan communications outages?",
        a: "We employ an offline-first architecture for field reporting and asset integrity workflows. Field technicians capture well measurements, valve status, and inspection photographs locally. Records are stored in secure browser storage or local SQLite databases and synchronized automatically with conflict resolution when satellite connectivity resumes."
      },
      {
        q: "Can Deview support national exploration data room requirements?",
        a: "Yes. We design exploration data repositories and virtual data rooms compliant with OSDU principles, incorporating role-based entitlement boundaries, document previewing with dynamic watermarking, and audit logs of data room visitor interactions during bid rounds."
      }
    ]
  },

  "west-central-africa": {
    slug: "west-central-africa",
    name: "West & Central Africa",
    title: "West & Central Africa Oil & Gas Software | Upstream JV, AFE & Production Systems",
    tagline: "Addressing upstream production reporting, local-content supplier ecosystems, Joint Venture AFE governance, and deepwater operations across Nigeria, Angola, Ghana, Senegal, Côte d'Ivoire, and the Gulf of Guinea.",
    metaDescription: "Enterprise software for upstream production management, JV partner reporting, and local-content supplier compliance across West and Central Africa.",
    executiveSummary: "The West and Central African energy landscape encompasses some of the globe's most prolific deepwater basins alongside mature onshore swamp and delta concessions. Operators in Nigeria, Angola, Ghana, Senegal, and Côte d'Ivoire face a dual imperative: maintaining rigorous joint-venture and authorization-for-expenditure (AFE) governance across national and international partners, while strictly complying with local content regulations (such as NOGICD in Nigeria and ANPG decrees in Angola). Systems must withstand challenging field connectivity, diverse contractor technical maturity, and intricate hydrocarbon allocation audits.",
    operatingContext: {
      operators: "National energy bodies (NNPC, ANPG, GNPC, Petrosen, Petroci), international oil majors (Chevron, ExxonMobil, TotalEnergies, Eni), independent African E&P operators, and local service consortiums.",
      assetTypes: "Deepwater Floating Production Storage and Offloading (FPSO) vessels, complex shallow-water platforms, onshore flow stations, and LNG export facilities.",
      procurementRegime: "Strict statutory local content quotas, structured supplier capacity development metrics, and joint-venture partner cash-call audit cycles.",
      hostingAndData: "Increasing emphasis on in-country data sovereignty (e.g., Nigerian NDPR/NITDA mandates), combined with secure hybrid cloud configurations for offshore vessels.",
      connectivity: "Offshore fiber or maritime satellite (VSAT/LEO) to FPSO units; high-latency or intermittent telecom coverage across rural onshore flow stations requiring robust edge-sync protocols."
    },
    keyWorkflows: [
      {
        title: "Upstream Production Accounting & Loss Deferment Reconciliation",
        description: "Field allocation, well test reconciliation, gross vs. net production calculations, and official regulatory reporting to national upstream commissions.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Joint Venture Cash Call & AFE Workflow Management",
        description: "End-to-end authorization for expenditure approval chains, partner billing statements, overspend threshold alerts, and audit trail generation.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Local Content & Contractor Capacity Portals",
        description: "Tracking local vendor prequalification, spend compliance against statutory targets, technical training hours, and equipment certifications.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      },
      {
        title: "Offline-First Remote Operations & Field Maintenance",
        description: "Mobile and workstation applications for field engineers to record equipment logs and maintenance tasks without active satellite connections.",
        solutionSlug: "offline-oilfield-operations-software"
      }
    ],
    countries: [
      {
        slug: "nigeria",
        name: "Nigeria",
        rationale: "Largest regional producer, Petroleum Industry Act (PIA) governance implementation, deepwater FPSO hubs, and NOGICD local content compliance.",
        tier: 1
      },
      {
        slug: "ghana",
        name: "Ghana",
        rationale: "Jubilee and TEN field operations, Petroleum Commission local content monitoring, and structured operator-contractor collaboration.",
        tier: 2
      },
      {
        slug: "senegal",
        name: "Senegal",
        rationale: "Sangomar first oil and GTA gas milestones, establishing initial national upstream operating systems and bilingual governance.",
        tier: 2
      },
      {
        slug: "cote-divoire",
        name: "Côte d'Ivoire",
        rationale: "Baleine deepwater carbon-neutral field development, expanding offshore infrastructure, and French-English technical management.",
        tier: 2
      },
      {
        slug: "gabon",
        name: "Gabon",
        rationale: "Mature onshore and shallow-water fields, redevelopment economics, and French-language operational reporting.",
        tier: 3
      },
      {
        slug: "republic-of-congo",
        name: "Republic of Congo",
        rationale: "Offshore gas and Marine XII FLNG initiatives requiring partner accounting and production tracking.",
        tier: 3
      },
      {
        slug: "equatorial-guinea",
        name: "Equatorial Guinea",
        rationale: "Gas Mega Hub regional coordination, Punta Europa LNG operations, and multi-language technical compliance.",
        tier: 3
      }
    ],
    deploymentPatterns: [
      {
        name: "Offshore FPSO Edge Cluster with Satellite Synchronization",
        suitability: "Deepwater production vessels and offshore platforms operating beyond cellular coverage.",
        description: "Local Docker/Kubernetes containerized application running on vessel server hardware, maintaining full standalone functionality and syncing delta changes to onshore servers over VSAT or Starlink maritime links."
      },
      {
        name: "Tier-3 In-Country Commercial Cloud / Hybrid",
        suitability: "Onshore operator headquarters in Lagos, Port Harcourt, Luanda, or Accra.",
        description: "Primary enterprise applications hosted in compliant domestic data centers (e.g., MDXi/MainOne Lagos, Angola Telecom Luanda) with secure encrypted partner API endpoints."
      }
    ],
    sources: [
        {
          title: "Petroleum Industry Act (PIA) 2021 Regulatory Framework",
          organization: "Nigeria Upstream Petroleum Regulatory Commission (NUPRC)",
          date: "2021",
          url: "https://www.nuprc.gov.ng/"
        },
        {
          title: "Nigerian Oil and Gas Industry Content Development Act 2010 Statutory Framework",
          organization: "Nigerian Content Development and Monitoring Board (NCDMB)",
          date: "2010",
          url: "https://ncdmb.gov.ng/"
        },
        {
          title: "Petroleum Commission (Local Content and Local Participation) Regulations, 2013 (L.I. 2204)",
          organization: "Petroleum Commission of Ghana",
          date: "2013",
          url: "https://www.petrocom.gov.gh/"
        }
      ],
    faqs: [
      {
        q: "What concrete track record does Deview bring to upstream operations in this region?",
        a: "Deview delivered the EnerQuest digital oilfield pilot in Nigeria, unifying daily field production data, equipment status, downtime exceptions, and management reporting into a single operational picture. In addition, our team draws on a decade of 2010–2020 enterprise software deliveries across upstream planning, capital project controls, and operational reporting."
      },
      {
        q: "How does your JV and AFE software handle multiple partner currencies and audits?",
        a: "Our joint venture accounting modules support multi-currency ledgers (e.g., USD, NGN, AOA, EUR), automated FX rate revaluation, and granular audit logs. Each joint-venture partner receives permission-scoped access to review gross expenditure, net entitlement, supporting contractor vouchers, and historical AFE variance records."
      },
      {
        q: "Can the platform assist in complying with local content audits?",
        a: "Yes. Our contractor portals include dedicated compliance tracking for local content: capturing certified local employee hours, in-country subcontracting spend, and technology transfer milestones, generating audit-ready reports aligned with statutory frameworks such as NOGICD in Nigeria."
      }
    ]
  },

  "east-africa": {
    slug: "east-africa",
    name: "East Africa",
    title: "East Africa Energy & Upstream Software | Pipeline Controls, LNG & Capital Programme Systems",
    tagline: "Addressing emerging upstream developments, cross-border pipeline megaprojects, LNG infrastructure, field mobility, and institutional data needs across Tanzania, Uganda, and Kenya.",
    metaDescription: "Enterprise software for cross-border pipeline monitoring, LNG capital programme controls, and upstream data governance in East Africa.",
    executiveSummary: "East Africa has emerged as a high-growth energy frontier, driven by major cross-border infrastructure including the East African Crude Oil Pipeline (EACOP), Lake Albert upstream developments (Tilenga and Kingfisher in Uganda), and world-scale offshore gas-to-LNG developments in Tanzania's Rovuma Basin. These capital-intensive megaprojects involve complex multi-government treaties, international EPC consortia, and strict social and environmental monitoring mandates, demanding unified project controls, contractor coordination, and secure engineering data governance.",
    operatingContext: {
      operators: "National corporations (TPDC in Tanzania, UNOC and PAU in Uganda), international operators (TotalEnergies, CNOOC, Equinor), and international pipeline construction joint ventures.",
      assetTypes: "Cross-border heated crude oil export pipelines, lake basin upstream extraction facilities, offshore deepwater gas discoveries, and planned onshore LNG liquefaction complexes.",
      procurementRegime: "National content frameworks (Uganda PAU National Supplier Database, Tanzania TPDC guidelines), multi-lender ESG reporting mandates, and stringent environmental compliance.",
      hostingAndData: "National data residency policies requiring government data custody in sovereign or domestic certified government data centers (e.g., Tanzania National Data Centre).",
      connectivity: "Developing cellular backhauls along pipeline waypoints; remote upstream production sites dependent on private satellite or microwave links."
    },
    keyWorkflows: [
      {
        title: "Cross-Border Pipeline Capital Controls & Construction Progress",
        description: "Right-of-way status, pipe-joint tracking, welding inspection logs, contractor payment milestones, and environmental corridor monitoring.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Upstream Institutional Data Bank & Exploration Records",
        description: "National repository for core, well, and seismic assets with role-based access for regulatory bodies and licensed exploration consortiums.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Multi-Contractor Local Content & Procurement Auditing",
        description: "Integration with national supplier databases to verify local subcontractor spend, workforce nationalization quotas, and certified training hours.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      },
      {
        title: "Environmental & HSE Incident Workflow Tracking",
        description: "GPS-tagged field inspection, community water-table monitoring, spill reporting, and regulatory audit trail generation for international stakeholders.",
        solutionSlug: "mena-asset-integrity-hse-software"
      }
    ],
    countries: [
      {
        slug: "tanzania",
        name: "Tanzania",
        rationale: "Deepwater offshore gas discoveries, host government negotiations for onshore LNG liquefaction, and pipeline transit infrastructure.",
        tier: 2
      },
      {
        slug: "uganda",
        name: "Uganda",
        rationale: "Lake Albert upstream development (Tilenga & Kingfisher), EACOP construction execution, and PAU national supplier monitoring.",
        tier: 3
      }
    ],
    deploymentPatterns: [
      {
        name: "Government / Operator Sovereign Data Center",
        suitability: "National petroleum repositories, regulatory surveillance, and concession title archives.",
        description: "On-premise deployment in national sovereign data facilities in Dar es Salaam or Kampala with strict network isolation and biometric physical controls."
      },
      {
        name: "Distributed Pipeline Waypoint Edge Nodes",
        suitability: "Pump stations, block valves, and pipeline camp offices along long linear infrastructure.",
        description: "Ruggedized edge servers hosting local data capture and inspection forms, syncing with central engineering databases via redundant cellular/satellite links."
      }
    ],
    sources: [
        {
          title: "Petroleum Upstream Regulatory Authority (PURA) Local Content Guidelines",
          organization: "Petroleum Upstream Regulatory Authority (PURA), United Republic of Tanzania",
          date: "2023",
          url: "https://www.pura.go.tz/"
        },
        {
          title: "Petroleum Authority of Uganda (PAU) Lake Albert & EACOP Regulatory Portal",
          organization: "Petroleum Authority of Uganda (PAU)",
          date: "2024",
          url: "https://www.pau.go.ug/national-content/"
        },
        {
          title: "Tanzania Petroleum Development Corporation (TPDC) Strategic Natural Gas Projects",
          organization: "Tanzania Petroleum Development Corporation (TPDC)",
          date: "2024",
          url: "https://www.tpdc.co.tz/"
        }
      ],
    faqs: [
      {
        q: "Can Deview systems handle linear asset tracking such as cross-border pipelines?",
        a: "Yes. Our project controls and inspection architectures support linear asset segmentation (chainage/kilometer points, pipe spool serial numbers, weld IDs, and GPS coordinates), enabling construction managers to visualize progress, NDT inspection passes, and backfilling along hundreds of kilometers of right-of-way."
      },
      {
        q: "How does the system ensure compliance with national supplier databases?",
        a: "We configure contractor onboarding portals to ingest and validate registration certificates from authorities like Uganda's National Supplier Database (NSD) or Tanzania's TPDC vendor registries, blocking unverified subcontractors from billing cycles."
      },
      {
        q: "What deployment models are supported for government regulatory bodies?",
        a: "We deploy dedicated sovereign instances inside government data centers (such as Tanzania National Data Centre) or private operator clouds, ensuring that all regulatory data, concession agreements, and audit trails remain under national jurisdiction."
      }
    ]
  },

  "southern-africa": {
    slug: "southern-africa",
    name: "Southern Africa",
    title: "Southern Africa Offshore & LNG Software | Megaproject Controls, Remote Assets & Integrity",
    tagline: "Addressing offshore production, LNG megaprojects, frontier exploration data, remote operations, and asset integrity across Angola, Mozambique, Namibia, and South Africa.",
    metaDescription: "Enterprise software for offshore production management, LNG megaproject controls, and frontier exploration data across Southern Africa.",
    executiveSummary: "Southern Africa is one of the world's most dynamic energy theaters, combining Angola's deepwater production leadership, Mozambique's multi-train Rovuma Basin LNG developments, Namibia's Orange Basin deepwater discoveries (Venus, Graff, Mopane), and South Africa's refining and offshore energy transition infrastructure. Operating environments range from extreme ultra-deepwater maritime conditions to remote coastal liquefaction facilities, demanding industrial software that handles high-concurrency multi-partner accounting, contractor logistics, asset integrity surveillance, and exploratory subsurface data governance.",
    operatingContext: {
      operators: "National corporations (ANPG/Sonangol in Angola, ENH in Mozambique, NAMCOR in Namibia, PetroSA in South Africa), international majors (TotalEnergies, ExxonMobil, Eni, Shell, Galp), and global LNG EPC consortia.",
      assetTypes: "Ultra-deepwater drillships and FPSO vessels, onshore and floating LNG liquefaction plants (Coral Sul FLNG), subsea tiebacks, and coastal refining complexes.",
      procurementRegime: "Complex international joint venture concession contracts, multi-billion-dollar project financing covenants, and emerging local-content statutory requirements.",
      hostingAndData: "Combination of international partner cloud VPCs and in-country sovereign data retention requirements, particularly for exploration licenses and official production logs.",
      connectivity: "Advanced maritime satellite (VSAT/LEO) and fiber connections at offshore deepwater blocks; remote northern Mozambique coastal developments requiring resilient offline operational buffering."
    },
    keyWorkflows: [
      {
        title: "LNG Megaproject Controls & Subcontractor Coordination",
        description: "Integrated progress tracking across civil, mechanical, piping, and electrical EPC packages with automated cash-call and invoice reconciliations.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Offshore Deepwater Production & Hydrocarbon Allocation",
        description: "Automated daily production balancing, test separator data integration, flaring compliance, and export tanker offloading reconciliations.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Frontier Exploration Data Rooms & Seismic Governance",
        description: "Secure cataloguing, metadata structuring, and virtual data room workflows for newly discovered offshore exploration blocks and farm-in evaluations.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Asset Integrity & Marine Offshore Inspection",
        description: "Corrosion inspection logging, structural hull stress monitoring, riser integrity verification, and statutory maritime safety compliance.",
        solutionSlug: "mena-asset-integrity-hse-software"
      }
    ],
    countries: [
      {
        slug: "angola",
        name: "Angola",
        rationale: "Pillar of deepwater offshore production, mature Blocks 15/17/31, ANPG regulatory oversight, and Portuguese administrative context.",
        tier: 1
      },
      {
        slug: "mozambique",
        name: "Mozambique",
        rationale: "Rovuma Basin Area 1 and Area 4 LNG mega-investments, Coral Sul FLNG operations, and remote logistics coordination.",
        tier: 1
      },
      {
        slug: "namibia",
        name: "Namibia",
        rationale: "Orange Basin exploration boom, preparation for first-oil development infrastructure, and local-content policy formulation.",
        tier: 2
      },
      {
        slug: "south-africa",
        name: "South Africa",
        rationale: "Refinery and coastal terminal asset integrity, gas-to-power transition projects, and complex enterprise IT/OT integration.",
        tier: 2
      }
    ],
    deploymentPatterns: [
      {
        name: "Maritime Edge on FPSO / FLNG Vessels",
        suitability: "Ultra-deepwater offshore production units operating 100+ km from the coast.",
        description: "High-availability local server cluster on board vessel running independent production database, queuing telemetry, and syncing periodically over encrypted maritime satellite links."
      },
      {
        name: "Enterprise Dedicated Cloud VPC",
        suitability: "Regional headquarters in Luanda, Maputo, Windhoek, and Johannesburg.",
        description: "Single-tenant private cloud VPC (AWS Cape Town or Microsoft South Africa North) with sovereign encryption controls and private direct connections."
      }
    ],
    sources: [
        {
          title: "Presidential Decree No. 271/20 on the Legal Framework for Local Content in Petroleum Sector",
          organization: "National Agency of Petroleum, Gas and Biofuels (ANPG), Republic of Angola",
          date: "2020",
          url: "https://anpg.co.ao/legislacao/"
        },
        {
          title: "National Upstream Petroleum Local Content Policy (Final Draft)",
          organization: "Ministry of Mines and Energy, Republic of Namibia",
          date: "2025",
          url: "https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf"
        },
        {
          title: "Instituto Nacional de Petróleo (INP) Exploration and Production Licensing Framework",
          organization: "Instituto Nacional de Petróleo (INP), Republic of Mozambique",
          date: "2024",
          url: "https://www.inp.gov.mz/"
        }
      ],
    faqs: [
      {
        q: "Can your production reporting system handle offshore FPSO offloading events?",
        a: "Yes. Our upstream production accounting modules explicitly manage custody transfer offloading to crude shuttle tankers, recording fiscal meter proving, BS&W (basic sediment and water) laboratory assays, bill of lading certificates, and inventory reconciliation."
      },
      {
        q: "How does Deview support exploration data management in frontier markets like Namibia?",
        a: "We implement exploration repositories adhering to OSDU data principles, allowing geoscientists and data managers to organize well logs, seismic survey geometries, core photographs, and interpretation reports with strict role-based access control during farm-out discussions."
      },
      {
        q: "Is Portuguese language support available for Angola and Mozambique?",
        a: "Yes. Our user interfaces, data capture forms, and reporting export engines support full Portuguese localization, ensuring operational ease for local offshore technicians and administrative staff in Luanda, Maputo, and Pemba."
      }
    ]
  }
};

export function getAllRegions(): RegionalHub[] {
  return Object.values(REGIONAL_HUBS);
}

export function getRegionBySlug(slug: string): RegionalHub | undefined {
  return REGIONAL_HUBS[slug];
}

