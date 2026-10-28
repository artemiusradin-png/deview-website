import { MarketPageData } from "./markets";

export const TIER_2_MARKETS: Record<string, MarketPageData> = {
  "iraq": {
    slug: "iraq",
    assetId: "CP-11",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Iraq",
    tier: 2,
    regionSlug: "middle-east",
    title: "Iraq Oil & Gas Software Systems | Southern Oilfield Production & Reporting",
    metaDescription: "Enterprise production reporting, waterflood surveillance, and resilient offline field systems for Iraqi oilfields and Basra operating consortia.",
    tagline: "Field production reporting, waterflood optimization, and resilient offline data sync for Basra and southern Iraqi concessions.",
    marketOpening: "The Republic of Iraq hosts some of the world's largest proven oil reserves, concentrated across southern mega-fields including Rumaila, West Qurna, Zubair, and Majnoon. Overseen by the Ministry of Oil and operating through Basra Oil Company (BOC) and international technical service contractors, operations must navigate harsh desert conditions, constrained communications, produced water management, and multi-partner accounting under Technical Service Contracts (TSCs). Digital systems in Iraq must be resilient to power and telecommunication outages while providing transparent hydrocarbon accounting.",
    buyerProblems: [
      {
        role: "Field Operations & Production General Manager",
        problem: "Intermittent desert telecommunications delay the consolidation of daily well testing and degassing station logs across massive field areas.",
        impact: "Production engineers wait 24–48 hours for verified production numbers, impairing choke and water injection optimization."
      },
      {
        role: "TSC Commercial & Billing Controller",
        problem: "Calculating remuneration fees and capital recovery under Ministry of Oil Technical Service Contracts requires reconciling thousands of field vouchers.",
        impact: "Extended payment dispute cycles and delayed cost recovery approvals from Basra Oil Company."
      },
      {
        role: "Asset Integrity & Waterflood Superintendent",
        problem: "Corrosive aquifer injection water and sour crude accelerate pipeline scaling and wall thinning across gathering lines.",
        impact: "Frequent pipeline leaks, unplanned field shutdowns, and environmental remediation costs."
      }
    ],
    priorityWorkflows: [
      {
        title: "Resilient Offline Production Accounting",
        description: "Edge software running at degassing stations and well manifolds that captures measurements locally and syncs upon connection restoration.",
        solutionSlug: "offline-oilfield-operations-software"
      },
      {
        title: "Technical Service Contract (TSC) Cost Recovery",
        description: "Automated tracking of qualifying petroleum costs, remuneration fee formulas, and government share deductions.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Waterflood & Produced Water Surveillance",
        description: "Tracking injection pressures, water treatment throughput, and offset producer voidage replacement ratios.",
        solutionSlug: "africa-upstream-production-reporting"
      }
    ],
    operatingEnvironment: {
      assetContext: "Supergiant onshore sandstone and carbonate reservoirs (Rumaila, West Qurna 1 & 2, Zubair, Halfaya), central degassing stations (CDS), and Fao export terminal.",
      connectivity: "Variable commercial fiber; reliance on private wireless links and satellite terminals prone to weather interference.",
      dataGovernance: "Ministry of Oil directives regarding sovereign ownership of national reservoir data and petroleum extraction records.",
      partnerEcosystem: "Ministry of Oil, Basra Oil Company (BOC), Dhi Qar Oil Company, Missan Oil Company, and international consortia (bp, PetroChina, Eni, TotalEnergies, Lukoil)."
    },
    deploymentAndSovereignty: {
      legalMandate: "Hydrocarbon extraction data is considered sovereign property of the State of Iraq; cloud hosting must be vetted or hosted on-premise.",
      buyerPreference: "Air-gapped on-premise deployment in Basra or Baghdad operator headquarters with field edge nodes.",
      recommendedArchitecture: "Decentralized edge-hub deployment: ruggedized edge servers at degassing stations syncing to a central on-premise database in Basra."
    },
    localContentProcurement: {
      statutoryFramework: "Ministry of Oil requirements mandating 80%+ Iraqi workforce participation in service contracts and domestic technical capacity building.",
      technologyTransfer: "Bilingual English/Arabic operational manuals and structured training workshops for Iraqi petroleum and IT engineers in Basra.",
      citation: "Ministry of Oil Technical Service Contract Workforce Regulations (2023)."
    },
    solutions: [
      {
        title: "Offline Oilfield Operations Software",
        slug: "offline-oilfield-operations-software",
        annotation: "Resilient edge synchronization for southern Iraqi degassing stations and field camps."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Daily hydrocarbon balancing and waterflood surveillance for Basra mega-fields."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Cost recovery and remuneration fee accounting for Iraqi TSC contracts."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of field degassing station communications, metering systems, and BOC reporting templates.",
      pilot: "Deployment of production data collection across one central degassing station cluster with milestone-gated acceptance criteria.",
      integration: "Connecting with field RTUs, laboratory assay logs, and operator commercial databases.",
      rollout: "Phased rollout across all operating field sectors with comprehensive bilingual Arabic/English training.",
      ownership: "Perpetual enterprise software license with local engineering maintenance empowerment."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for complex production accounting, AFE tracking, and project controls between 2010 and 2020, reinforced by the EnerQuest digital oilfield deployment in challenging operating environments.",
      boundaries: "Deview provides software development and architecture. We do not claim local corporate incorporation in Basra or direct commercial prequalification with the Ministry of Oil without consortium representation."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain full operational capability during prolonged network outages in the desert?",
      itSecurity: "Is the system deployed within the operator's private network without foreign cloud dependencies?",
      procurement: "Does the contract comply with Iraqi national workforce training guidelines?",
      executiveSponsor: "Does the platform generate audit-ready cost recovery documentation for Basra Oil Company reviews?"
    },
    sources: [
      {
        title: "Iraq Licensing Rounds & Upstream Technical Service Contracts (TSC) Guidelines",
        publisher: "Ministry of Oil, Republic of Iraq",
        date: "2024",
        url: "https://oil.gov.iq/index.php?name=Pages&op=page&pid=122",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Basra Oil Company (BOC) Upstream Projects & Production Monitoring Portal",
        publisher: "Basra Oil Company",
        date: "2024",
        url: "https://boc.oil.gov.iq/projects/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "National Cyber Security and Data Governance Framework",
        publisher: "Communications and Media Commission (CMC), Iraq",
        date: "2023",
        url: "https://cmc.iq/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does Deview handle frequent communication dropouts in southern Iraq?",
        a: "Our offline-first architecture allows degassing station operators to input well test, pressure, and tank gauging data locally on disconnected PCs or tablets. Records sync securely to the central Basra database as soon as network connectivity is restored."
      },
      {
        q: "Does the software support Technical Service Contract (TSC) accounting rules?",
        a: "Yes. Our accounting engine models baseline production, incremental production barrels, qualifying petroleum costs, and remuneration fee calculations specified in Iraqi TSC agreements."
      },
      {
        q: "Is Arabic language supported?",
        a: "Yes. All operational screens, forms, and executive summaries support full Arabic localization with right-to-left layout rendering."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Field Reporting Assessment",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "libya": {
    slug: "libya",
    assetId: "CP-12",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Libya",
    tier: 2,
    regionSlug: "north-africa",
    title: "Libya Oil & Gas Software Solutions | Field Production & Distributed Operations",
    metaDescription: "Enterprise software for distributed field production reporting, asset restatements, and edge synchronization for Libyan oil operations.",
    tagline: "Resilient field production reporting, pipeline restatements, and edge synchronization across the Sirte and Murzuq Basins.",
    marketOpening: "The State of Libya, directed by the National Oil Corporation (NOC) and operating companies including Waha Oil, Agoco, Sirte Oil, and Mellitah Oil & Gas, is actively rehabilitating production across vast desert basins (Sirte, Murzuq, Ghadames). Operating in Libya requires systems that can function across decentralized and geographically isolated fields, accommodate frequent operational restatements due to pipeline disruptions or power outages, and integrate seamlessly with central NOC reporting in Tripoli under bilingual Arabic and English standards.",
    buyerProblems: [
      {
        role: "Production Planning Director (NOC / Operating Co)",
        problem: "Unscheduled pipeline shutdowns and security interruptions require frequent historical production restatements and inventory rebalancing.",
        impact: "Discrepancies between field estimates and coastal terminal exports leading to audit queries."
      },
      {
        role: "Field Maintenance & Logistics Superintendent",
        problem: "Extreme remoteness of Sirte and Murzuq desert concessions makes tracking spare parts, generator fuel, and pump maintenance difficult.",
        impact: "Prolonged well shut-ins due to lack of spare parts and delayed work order tracking."
      },
      {
        role: "Joint Venture Concession Accountant",
        problem: "Managing partner equity shares, exploration and production sharing agreements (EPSA IV), and foreign currency accounts.",
        impact: "Delayed financial reconciliations with international partners (TotalEnergies, Eni, ConocoPhillips)."
      }
    ],
    priorityWorkflows: [
      {
        title: "Resilient Offline Production Accounting & Restatements",
        description: "Capturing wellhead test data, tank battery dips, and flare estimates locally with audit-trailed versioned restatements.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "EPSA Concession Accounting & Partner Ledgers",
        description: "Automated calculations of production allocations, exploration expenditure amortizations, and partner cash calls.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Offline-First Mobile Field Maintenance",
        description: "Digital work order execution and spare parts tracking for remote desert pump stations and gathering centers.",
        solutionSlug: "offline-oilfield-operations-software"
      }
    ],
    operatingEnvironment: {
      assetContext: "Extensive onshore fields across the Sirte, Murzuq, and Ghadames basins; long-distance crude export pipelines to Mediterranean terminals (Es Sider, Ras Lanuf, Zawiya).",
      connectivity: "Intermittent commercial telecommunications; high reliance on VSAT and private satellite links connecting desert oil camps to Tripoli and Benghazi.",
      dataGovernance: "National Oil Corporation directives governing production reporting, crude allocation, and concession confidentiality.",
      partnerEcosystem: "National Oil Corporation (NOC), operating subsidiaries (Waha, Agoco, Sirte Oil), and international joint-venture partners (Eni, TotalEnergies, OMV, Repsol, ConocoPhillips)."
    },
    deploymentAndSovereignty: {
      legalMandate: "Hydrocarbon extraction records must remain within national jurisdiction and be accessible to NOC regulatory audits.",
      buyerPreference: "On-premise deployment in Tripoli or Benghazi headquarters with ruggedized edge servers at desert gathering stations.",
      recommendedArchitecture: "Decoupled edge-hub architecture: local databases at desert stations buffering records and syncing via encrypted satellite bursts."
    },
    localContentProcurement: {
      statutoryFramework: "Libyan labor regulations requiring domestic workforce training and development of Libyan engineering cadres.",
      technologyTransfer: "Bilingual English/Arabic system documentation and hands-on training for Libyan field operators and petroleum data engineers.",
      citation: "National Oil Corporation Workforce and Technology Transfer Guidelines (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Field production reporting, allocation, and restatement workflows for Sirte Basin assets."
      },
      {
        title: "Offline Oilfield Operations Software",
        slug: "offline-oilfield-operations-software",
        annotation: "Resilient edge synchronization for isolated desert gathering centers."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "EPSA concession accounting and partner cash-call reconciliations."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of desert field communications, existing Excel reporting sheets, and NOC reporting protocols.",
      pilot: "Deployment of production data capture across one desert field cluster (e.g., Waha or Sarir field section) with milestone-gated acceptance criteria.",
      integration: "Connecting with field tank gauging telemetry, flow computers, and corporate accounting databases in Tripoli.",
      rollout: "Phased rollout across remaining operating fields with full bilingual Arabic/English training.",
      ownership: "Perpetual enterprise software license with complete deployment self-sufficiency."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have designed robust enterprise project controls, production reporting systems, and asset tracking platforms across 2010–2020, reinforced by the EnerQuest digital oilfield deployment in challenging West African environments.",
      boundaries: "Deview is a software engineering firm. We do not claim local corporate incorporation in Tripoli or Benghazi without local partner sponsorship."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production logging during satellite or power outages?",
      itSecurity: "Is the data stored securely within the operator's private infrastructure?",
      procurement: "Does the project include comprehensive technology transfer for Libyan technical teams?",
      executiveSponsor: "Can NOC leadership view verified daily production numbers and restatements across all operating subsidiaries?"
    },
    sources: [
      {
        title: "Exploration and Production Sharing Agreements (EPSA IV) Terms",
        publisher: "National Oil Corporation (NOC), Libya",
        date: "2024",
        url: "https://noc.gov.ly/exploration-production/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Hydrocarbon Exploration and Production Legal Framework (Law No. 25 of 1955 as amended)",
        publisher: "Ministry of Oil and Gas, State of Libya",
        date: "2023",
        url: "https://oilgas.gov.ly/regulations/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Upstream Joint Venture Financial Audit & Contracting Regulations",
        publisher: "Libyan Audit Bureau",
        date: "2024",
        url: "https://audit.gov.ly/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does the system handle historical production restatements?",
        a: "Our production accounting platform includes immutable versioning. When retroactive flow adjustments or pipeline corrections are entered, the system recalculates affected balances while preserving full audit history of the original entries."
      },
      {
        q: "Does the platform support bilingual Arabic and English usage?",
        a: "Yes. Field operators can enter logs in Arabic, and the system automatically generates bilingual summary dashboards and exports for international partners."
      },
      {
        q: "Can the system be installed on isolated desert field servers?",
        a: "Yes. Our edge modules run inside lightweight Docker containers on standard industrial field servers without requiring public internet access."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Resilient Workflow Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "namibia": {
    slug: "namibia",
    assetId: "CP-13",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Namibia",
    tier: 2,
    regionSlug: "southern-africa",
    title: "Namibia Upstream Oil & Gas Software | Exploration Data Rooms & Readiness",
    metaDescription: "Enterprise software for exploration data rooms, seismic cataloguing, and local-content tracking for Namibia's Orange Basin discoveries.",
    tagline: "Orange Basin exploration data rooms, OSDU data readiness, and local content compliance for Namibia's emerging petroleum sector.",
    marketOpening: "The Republic of Namibia has rapidly transformed into one of the world's most closely watched deepwater exploration frontiers following giant light oil and gas discoveries in the offshore Orange Basin (Venus by TotalEnergies, Graff and Jonker by Shell, Mopane by Galp). Under the oversight of the Ministry of Mines and Energy and the National Petroleum Corporation of Namibia (NAMCOR), the nation is preparing for multi-billion-dollar appraisal and first-oil development phases. Software systems in Namibia must address high-volume exploration data cataloguing, virtual data room workflows for licensing, and the implementation of emerging national local content policies.",
    buyerProblems: [
      {
        role: "Exploration Data Manager / Chief Geoscientist",
        problem: "Managing massive volumes of 2D/3D seismic surveys, deepwater well logs, and core analysis across newly licensed Orange and Luderitz Basin blocks.",
        impact: "Geoscientists struggle with slow data retrieval and inconsistent metadata tagging, delaying prospect appraisal."
      },
      {
        role: "NAMCOR Commercial & Farm-In Lead",
        problem: "Coordinating multi-operator data rooms for block farm-ins and licensing rounds under strict non-disclosure and entitlement rules.",
        impact: "Prolonged farm-out negotiations and risk of inadvertent proprietary seismic data leakage."
      },
      {
        role: "Local Content Policy & Compliance Officer",
        problem: "Namibia's emerging local content policy requires operators to quantify Namibian supplier spend, training hours, and technical skills development.",
        impact: "Difficulty proving compliance during annual ministry audits and public accountability reviews."
      }
    ],
    priorityWorkflows: [
      {
        title: "Exploration Data Rooms & Subsurface Repository",
        description: "Cataloguing well, seismic, and core assets compliant with OSDU data standards with role-based virtual data room entitlements.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "OSDU Data Platform Readiness",
        description: "Assessing subsurface data hygiene, taxonomy alignment, and cloud ingestion pathways for national petroleum archives.",
        solutionSlug: "osdu-data-platform-national-oil-companies"
      },
      {
        title: "Local Content & Supplier Development Portals",
        description: "Tracking Namibian vendor prequalification, joint venture participation, and domestic technical training milestones.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Ultra-deepwater offshore exploration blocks (Orange, Luderitz, and Walvis Basins), deepwater drillships, and emerging port infrastructure at Walvis Bay and Luderitz.",
      connectivity: "Excellent fiber connectivity in Windhoek; high-speed maritime satellite (Starlink/VSAT) deployed on offshore exploration drillships.",
      dataGovernance: "Petroleum (Exploration and Production) Act of 1991 and emerging national data governance and cybersecurity policies.",
      partnerEcosystem: "Ministry of Mines and Energy, NAMCOR, international operators (TotalEnergies, Shell, Galp, Chevron, QatarEnergy), and local joint-venture concessionaires."
    },
    deploymentAndSovereignty: {
      legalMandate: "The Petroleum Act requires all exploration and appraisal data to be lodged with the Ministry of Mines and Energy and NAMCOR as national archives.",
      buyerPreference: "Hybrid cloud architecture: national archive repositories hosted securely in Windhoek with encrypted cloud mirrors for international collaboration.",
      recommendedArchitecture: "OSDU-compliant repository hosted in single-tenant cloud VPC with customer-managed cryptographic keys and sovereign Windhoek backup."
    },
    localContentProcurement: {
      statutoryFramework: "National Upstream Local Content Policy developed by the Ministry of Mines and Energy to maximize domestic employment and supplier inclusion.",
      technologyTransfer: "Structured programs to train Namibian geoscientists and software engineers in digital petroleum data management.",
      citation: "Ministry of Mines and Energy Namibia Draft National Upstream Petroleum Local Content Policy (2024)."
    },
    solutions: [
      {
        title: "Africa Exploration Data Rooms",
        slug: "africa-exploration-data-rooms",
        annotation: "Subsurface and concession data governance for Orange Basin exploration blocks."
      },
      {
        title: "OSDU Data Platform for NOCs",
        slug: "osdu-data-platform-national-oil-companies",
        annotation: "Data readiness assessment and ingestion architecture for national data banks."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Local supplier tracking and training verification for emerging Namibian content rules."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of existing subsurface data formats (SEGY, LAS, DLIS), metadata catalogs, and NAMCOR data room requirements.",
      pilot: "Deployment of an exploration data room for one offshore license block with milestone-gated acceptance criteria.",
      integration: "Connecting with subsurface interpretation suites (Petrel, Kingdom) and GIS mapping engines.",
      rollout: "Expansion across all national offshore blocks with structured training for geoscientists in Windhoek.",
      ownership: "Perpetual enterprise software license with full data and taxonomy independence."
    },
    proofContext: {
      relevantExperience: "Deview's team brings experience in enterprise data architecture, document cataloguing, and project controls from 2010 to 2020, reinforced by digital oilfield pilot implementations in Africa.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Windhoek without local partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the platform support instant previewing of large 2D/3D seismic geometries and well log curves?",
      itSecurity: "Are virtual data room access permissions enforced with watermarking and non-exportable viewing boundaries?",
      procurement: "Does the project include capacity building for Namibian petroleum data managers?",
      executiveSponsor: "Does the system accelerate international farm-in decisions for Orange Basin acreage?"
    },
    sources: [
      {
        title: "National Upstream Local Content Policy Framework for the Petroleum Sector (Draft 2025)",
        publisher: "Ministry of Mines and Energy (MME), Republic of Namibia",
        date: "2025",
        url: "https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Orange Basin Offshore Exploration & Production Sharing Agreements Register",
        publisher: "NAMCOR (National Petroleum Corporation of Namibia)",
        date: "2024",
        url: "https://www.namcor.com.na/upstream/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Petroleum (Exploration and Production) Act, 1991 (Act No. 2 of 1991)",
        publisher: "Parliament of the Republic of Namibia",
        date: "1991",
        url: "https://www.parliament.na/acts/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Can Deview's platform ingest and visualize SEGY and LAS files directly?",
        a: "Yes. Our exploration data platform includes specialized parsers for SEGY seismic headers and LAS/DLIS well log files, allowing geoscientists to view seismic navigation tracks and well curves directly in a web browser."
      },
      {
        q: "How does the system ensure data security during farm-in reviews?",
        a: "Our virtual data rooms implement dynamic watermarking (displaying user email and IP), screen-capture prevention, detailed access audit logs, and document-level permission controls."
      },
      {
        q: "Is the platform compliant with OSDU standards?",
        a: "Yes. We adhere to Open Subsurface Data Universe (OSDU) schema definitions, facilitating smooth data migration and integration with modern geoscientific cloud platforms."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Exploration Data Assessment",
        href: "/en/contact"
      },
      secondary: {
        label: "Download OSDU Readiness Assessment",
        href: "/en/resources/osdu-exploration-data-readiness-assessment"
      }
    }
  },

  "ghana": {
    slug: "ghana",
    assetId: "CP-14",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Ghana",
    tier: 2,
    regionSlug: "west-central-africa",
    title: "Ghana Offshore Oil & Gas Software | FPSO Production & Local Content",
    metaDescription: "Enterprise software for offshore FPSO production management, JV accounting, and Petroleum Commission local content compliance in Ghana.",
    tagline: "Offshore Jubilee and TEN production reporting, JV cash calls, and Petroleum Commission local content portal compliance.",
    marketOpening: "The Republic of Ghana has established a stable offshore petroleum industry centered around deepwater developments in the Tano Basin, including the Jubilee, TEN (Tweneboa-Enyenra-Ntomme), and Sankofa-Gye Nyame fields. Regulated by the Petroleum Commission Ghana and anchored by national partner GNPC alongside international operators (Tullow Oil, Eni, Kosmos Energy), Ghanaian offshore production depends on modern FPSO vessels. Operations require robust daily hydrocarbon accounting, transparent Joint Venture cash-call reconciliations, and compliance with Ghana's landmark Petroleum Commission Local Content Regulations (L.I. 2204).",
    buyerProblems: [
      {
        role: "Offshore Asset Lead / Production Manager",
        problem: "Managing daily production balancing, test separator cycles, and gas reinjection on deepwater FPSOs with multi-partner ownership.",
        impact: "Discrepancies in equity barrel entitlements and delayed reporting to the Petroleum Commission."
      },
      {
        role: "JV Finance & Commercial Controller",
        problem: "Reconciling joint venture cash calls, operating expenditure (OPEX), and capital budgets across international partners and GNPC.",
        impact: "Protracted audit queries and delayed approvals for subsea infill drilling campaigns."
      },
      {
        role: "Local Content & Compliance Director",
        problem: "Auditing contractor compliance with L.I. 2204 quotas for Ghanaian indigenous equity, local goods procurement, and workforce training.",
        impact: "Fines and delays in securing annual regulatory operating permits from the Petroleum Commission."
      }
    ],
    priorityWorkflows: [
      {
        title: "Offshore FPSO Production Accounting & Allocation",
        description: "Balancing subsea well flows, test separators, fuel gas usage, and crude export tanker offloading records.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Joint Venture Cash Call & AFE Governance",
        description: "Multi-currency partner billing, authorization for expenditure tracking, and GNPC equity reconciliation.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Local Content & Supplier Compliance Portal",
        description: "Tracking local vendor registration, indigenous equity percentages, and Ghanaian workforce capacity development.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater offshore fields in the Western Basin (Jubilee, TEN) and Offshore Cape Three Points (Sankofa), operating via FPSO Kwame Nkrumah, FPSO John Evans Atta Mills, and FPSO John Agyekum Kufuor.",
      connectivity: "Maritime VSAT and Starlink connectivity on offshore FPSO units; stable fiber and broadband in Accra and Takoradi.",
      dataGovernance: "Petroleum (Exploration and Production) Act 2016 (Act 919) and compliance with the Data Protection Act 2012 (Act 843).",
      partnerEcosystem: "Petroleum Commission Ghana, GNPC, Tullow Oil, Eni, Kosmos Energy, and domestic oilfield service providers."
    },
    deploymentAndSovereignty: {
      legalMandate: "Act 919 mandates that petroleum data must be archived within Ghana and accessible to the Petroleum Commission for fiscal auditing.",
      buyerPreference: "Hybrid deployment: edge processing aboard FPSO vessels with primary enterprise database hosted in accredited Accra data centers.",
      recommendedArchitecture: "Edge-to-hub architecture: containerized edge databases aboard vessels syncing delta changes to an Accra-hosted enterprise cluster."
    },
    localContentProcurement: {
      statutoryFramework: "Petroleum Commission (Local Content and Local Participation) Regulations, 2013 (L.I. 2204) mandating high indigenous participation.",
      technologyTransfer: "Structured programs to train Ghanaian software and petroleum engineers, with local systems integrator partnership models.",
      citation: "Petroleum Commission Ghana Local Content Implementation Framework (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "FPSO production reconciliation and Petroleum Commission daily reporting."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Multi-partner cash calls and GNPC equity reconciliation."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "L.I. 2204 local content compliance tracking and contractor onboarding."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of FPSO metering topologies, subsea well allocation models, and Petroleum Commission reporting requirements.",
      pilot: "Deployment of daily production accounting across one operating FPSO with milestone-gated acceptance criteria.",
      integration: "Connecting with vessel historians, lab assay records, and corporate SAP finance systems in Accra.",
      rollout: "Expansion across all operating assets with structured training for Takoradi and Accra engineering staff.",
      ownership: "Perpetual enterprise software license with local engineering handover."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for production reporting, AFE controls, and project governance from 2010 to 2020, reinforced by the EnerQuest digital oilfield pilot in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Accra without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production allocation records on board the FPSO during satellite outages?",
      itSecurity: "Is all production and fiscal data hosted in compliance with Ghana's Data Protection Act?",
      procurement: "Does the contract comply with Petroleum Commission L.I. 2204 technology transfer guidelines?",
      executiveSponsor: "Does the platform eliminate month-end reconciliation disputes among JV partners and GNPC?"
    },
    sources: [
      {
        title: "Petroleum (Local Content and Local Participation) Regulations, 2013 (L.I. 2204)",
        publisher: "Petroleum Commission Ghana",
        date: "2013",
        url: "https://www.petrocom.gov.gh/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "GNPC Upstream Joint Venture Operations and Offshore Data Management Guidelines",
        publisher: "Ghana National Petroleum Corporation (GNPC)",
        date: "2024",
        url: "https://www.gnpcghana.com/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Data Protection Act, 2012 (Act 843) Cross-Border Data Transfer Principles",
        publisher: "Data Protection Commission Ghana",
        date: "2023",
        url: "https://www.dataprotection.org.gh/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does the system ensure compliance with Ghana's L.I. 2204 local content rules?",
        a: "Our contractor portal module tracks vendor ownership structures, employee nationality records, and local subcontracting spend, generating audit-ready compliance filings for the Petroleum Commission."
      },
      {
        q: "Can the platform reconcile FPSO crude offloading to tankers?",
        a: "Yes. Our custody transfer module records bill of lading volumes, BSW laboratory assays, meter proving factors, and generates formal offloading certificates for partners and customs authorities."
      },
      {
        q: "What deployment models are supported in Ghana?",
        a: "We deploy high-availability edge nodes aboard offshore FPSOs that synchronize securely with local cloud or on-premise servers in Accra."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Partner & Supplier Workflow Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "senegal": {
    slug: "senegal",
    assetId: "CP-15",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Senegal",
    tier: 2,
    regionSlug: "west-central-africa",
    title: "Senegal Offshore Oil & Gas Software | Sangomar & GTA Production Systems",
    metaDescription: "Enterprise software for offshore first-oil production management, LNG joint ventures, and Petrosen governance in Senegal.",
    tagline: "First-oil production accounting, cross-border GTA gas governance, and bilingual French-English operational systems for Senegal.",
    marketOpening: "The Republic of Senegal has officially joined the ranks of global hydrocarbon producers following first oil from the deepwater Sangomar field (operated by Woodside Energy and Petrosen) and commissioning of the cross-border Greater Tortue Ahmeyim (GTA) FLNG project (operated by bp, Kosmos Energy, and Petrosen). Overseen by the Ministry of Energy, Petroleum and Mines and state enterprise Petrosen, Senegal is establishing its national upstream operating architecture. Software systems in Senegal must support new production accounting routines, cross-border gas allocation, and compliance with the national Local Content Law (Loi No. 2019-04) under bilingual French and English standards.",
    buyerProblems: [
      {
        role: "Production Accounting Manager (Petrosen / Operator)",
        problem: "Establishing first-oil production accounting, allocation formulas, and export tanker offloading reconciliations from the newly commissioned Sangomar FPSO.",
        impact: "Risk of early accounting discrepancies and delayed fiscal reporting to government authorities."
      },
      {
        role: "Cross-Border Commercial & JV Controller",
        problem: "Coordinating gas production, liquefaction yield, and revenue allocation across the Senegal-Mauritania maritime border for the GTA FLNG project.",
        impact: "Complex inter-governmental reconciliations and potential billing disputes between national oil companies."
      },
      {
        role: "Local Content Monitoring Coordinator",
        problem: "Tracking contractor compliance with Senegal's Local Content Law (Loi No. 2019-04) across Category 1, 2, and 3 service suppliers.",
        impact: "Delays in vendor approval cycles and regulatory scrutiny from the National Local Content Monitoring Committee (CNSCL)."
      }
    ],
    priorityWorkflows: [
      {
        title: "Deepwater FPSO First-Oil Production Reporting",
        description: "Establishing standardized daily allocation, well test reconciliation, and crude offloading records for Sangomar operations.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Cross-Border Joint Venture & AFE Governance",
        description: "Multi-party cash calls, capital tracking, and revenue distribution for shared offshore infrastructure.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Bilingual Local Content & Contractor Portal",
        description: "Tracking local vendor certification, subcontracting quotas, and workforce training under CNSCL regulations.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater Sangomar field operating via FPSO Léopold Sédar Senghor; cross-border Greater Tortue Ahmeyim (GTA) FLNG complex; and Yakaar-Teranga gas discoveries.",
      connectivity: "Maritime satellite (VSAT/LEO) offshore; high-speed fiber connectivity in Dakar; developing regional telecom hubs in Saint-Louis.",
      dataGovernance: "Petroleum Code (Loi No. 2019-03) and Law No. 2008-12 on personal data protection.",
      partnerEcosystem: "Petrosen, Ministry of Energy, Woodside Energy, bp, Kosmos Energy, and international offshore engineering contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Loi No. 2019-03 requires that all upstream production, geological, and financial records must be archived in Senegal and accessible to state auditors.",
      buyerPreference: "Hybrid cloud architecture: on-vessel edge logging with primary database hosting in accredited Dakar data centers (e.g., Senegal National Data Center / Datacenter de Diamniadio).",
      recommendedArchitecture: "Edge-to-hub deployment: containerized edge databases on the FPSO syncing via encrypted links to sovereign cloud hosting in Diamniadio."
    },
    localContentProcurement: {
      statutoryFramework: "Loi No. 2019-04 on Local Content Development in the Hydrocarbon Sector, supervised by the CNSCL.",
      technologyTransfer: "Bilingual French/English software interfaces, national engineer training, and collaboration with Senegalese IT providers.",
      citation: "National Local Content Monitoring Committee (CNSCL) Regulatory Guidelines (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "First-oil production allocation and Petrosen statutory reporting."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Cross-border GTA gas allocation and JV cash-call governance."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "CNSCL local content compliance and multi-tier contractor submittals."
      }
    ],
    deliveryApproach: {
      discovery: "Review of Sangomar and GTA metering architectures, JV accounting rules, and CNSCL local content guidelines.",
      pilot: "Deployment of production data reconciliation for Sangomar first-oil operations with milestone-gated acceptance criteria.",
      integration: "Connecting with FPSO historians, laboratory test logs, and corporate ERP systems in Dakar.",
      rollout: "Expansion across GTA and future offshore blocks with bilingual French/English training.",
      ownership: "Perpetual enterprise software license with local Senegalese engineering capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's team brings deep enterprise software experience (2010–2020) in production management, AFE tracking, and digital oilfield architecture demonstrated by our EnerQuest deployment in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Dakar without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production allocation records on board the FPSO during satellite outages?",
      itSecurity: "Is the data hosted in compliance with Senegalese data protection legislation?",
      procurement: "Does the contract comply with CNSCL technology transfer guidelines?",
      executiveSponsor: "Does the software provide Petrosen leadership with real-time visibility into state revenue and barrel entitlements?"
    },
    sources: [
      {
        title: "Cadre Juridique et Institutionnel du Contenu Local dans le Secteur des Hydrocarbures (Loi n° 2019-04)",
        publisher: "Comité National de Suivi du Contenu Local (CNSCL), Sénégal",
        date: "2019",
        url: "https://cnscl.sn/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Projets Pétroliers et Gaziers Amont : Sangomar et Grand Tortue Ahmeyim (GTA)",
        publisher: "PETROSEN (Société des Pétroles du Sénégal)",
        date: "2024",
        url: "https://www.petrosen.sn/projets/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Nouveau Code Pétrolier (Loi n° 2019-03 du 1er février 2019)",
        publisher: "Ministère du Pétrole et des Énergies, République du Sénégal",
        date: "2019",
        url: "https://energie.gouv.sn/code-petrolier/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the software support French language interfaces for Senegalese personnel?",
        a: "Yes. All user interfaces, forms, reports, and documentation support complete French localization, with seamless switching to English for international partners."
      },
      {
        q: "Can the platform handle cross-border joint venture accounting like GTA?",
        a: "Yes. Our JV accounting module models cross-border concession terms, allocating feed gas volumes, capital expenditure, and operating costs across multiple national entities."
      },
      {
        q: "Is hosting in the Diamniadio National Data Center supported?",
        a: "Yes. Our systems are containerized and deployable on private cloud infrastructure inside the Diamniadio National Data Center with full data sovereignty."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a First-Production Reporting Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "cote-divoire": {
    slug: "cote-divoire",
    assetId: "CP-16",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Côte d'Ivoire",
    tier: 2,
    regionSlug: "west-central-africa",
    title: "Côte d'Ivoire Offshore Oil & Gas Software | Baleine Field Project Controls",
    metaDescription: "Enterprise software for deepwater project controls, zero-carbon production tracking, and Petroci JV management in Côte d'Ivoire.",
    tagline: "Baleine deepwater project controls, zero-carbon production tracking, and bilingual French-English JV governance.",
    marketOpening: "The Republic of Côte d'Ivoire is experiencing rapid offshore expansion driven by Eni and Petroci's world-class Baleine deepwater discovery (Africa's first Scope 1 & 2 net-zero emissions upstream development) and the recent Calao discovery. Operating through national company Petroci and international consortia, Ivorian deepwater operations require industrial software that integrates capital project execution controls across FPSO and subsea installation phases, tracks greenhouse gas (GHG) and flaring abatement metrics, and adheres to Ivorian Petroleum Code and local content provisions under bilingual French and English standards.",
    buyerProblems: [
      {
        role: "Deepwater Project Controls Manager",
        problem: "Managing fast-track execution across multiple phases of deepwater subsea completions, pipeline installation, and FPSO refurbishment.",
        impact: "Risk of schedule slippage and cost overruns on fast-tracked capital expenditure packages."
      },
      {
        role: "Production & ESG Compliance Superintendent",
        problem: "Strict mandates for Scope 1 & 2 net-zero emissions require continuous tracking of fuel gas consumption, flaring, and carbon offset accounting.",
        impact: "Failure to verify carbon-neutral status for exported crude cargo."
      },
      {
        role: "JV Finance & Concession Controller",
        problem: "Managing cash calls, AFE approvals, and cost recovery ledgers between operator Eni and state partner Petroci.",
        impact: "Delayed partner billing approvals and prolonged annual audit cycles."
      }
    ],
    priorityWorkflows: [
      {
        title: "Deepwater Offshore Capital Project Controls",
        description: "Integrating Primavera P6 schedules, contractor work breakdown structures, and subsea installation progress tracking.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Net-Zero Upstream Production & Emissions Tracking",
        description: "Reconciling daily hydrocarbon production alongside fuel gas monitoring, flare minimization, and GHG emissions accounting.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Bilingual Joint Venture AFE & Cash Call Portals",
        description: "Enabling Petroci and international operating partners to review and approve AFEs and billing vouchers in French and English.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater offshore Baleine field operating via FPSO Firenze, deepwater subsea pipelines, Calao discovery area, and onshore receiving terminals in Abidjan.",
      connectivity: "Offshore maritime satellite (VSAT/LEO) to FPSO; reliable fiber optic networks across Abidjan corporate centers.",
      dataGovernance: "Petroleum Code (Loi No. 96-669) and Law No. 2013-450 on the protection of personal and commercial data.",
      partnerEcosystem: "Petroci, Ministry of Mines, Petroleum and Energy, Eni, and international subsea engineering contractors (Saipem, Subsea7)."
    },
    deploymentAndSovereignty: {
      legalMandate: "Ivorian regulations require national petroleum extraction, production accounting, and concession records to remain accessible within national jurisdiction.",
      buyerPreference: "Hybrid cloud architecture: on-vessel edge logging with primary database hosting in accredited Abidjan data centers.",
      recommendedArchitecture: "Edge-to-hub deployment: containerized edge databases on the FPSO syncing via encrypted links to sovereign cloud hosting in Abidjan."
    },
    localContentProcurement: {
      statutoryFramework: "Loi No. 2022-408 on Local Content in the Petroleum Activities Sector, promoting domestic procurement and national engineering employment.",
      technologyTransfer: "Bilingual French/English software interfaces, national engineer training, and collaboration with Ivorian IT providers.",
      citation: "Ministry of Mines, Petroleum and Energy Local Content Framework (2023)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for Baleine deepwater subsea and FPSO execution packages."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Hydrocarbon accounting combined with Scope 1 & 2 emissions tracking."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Bilingual French/English AFE workflows and Petroci equity reconciliations."
      }
    ],
    deliveryApproach: {
      discovery: "Review of Baleine project control templates, subsea telemetry links, and Petroci JV reporting standards.",
      pilot: "Deployment of project controls and production data capture across one development package with milestone-gated acceptance criteria.",
      integration: "Connecting with vessel historians, subsea flow computers, and corporate SAP finance systems in Abidjan.",
      rollout: "Expansion across all operating phases with comprehensive bilingual French/English training.",
      ownership: "Perpetual enterprise software license with local Ivorian technical capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for production reporting, AFE controls, and project governance from 2010 to 2020, reinforced by the EnerQuest digital oilfield pilot in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Abidjan without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production allocation records on board the FPSO during satellite outages?",
      itSecurity: "Is the data hosted in compliance with Ivorian data protection legislation?",
      procurement: "Does the contract comply with Ivorian local content technology transfer guidelines?",
      executiveSponsor: "Does the software provide real-time visibility into Baleine capital project milestones and emissions benchmarks?"
    },
    sources: [
      {
        title: "Code Pétrolier Ivoirien (Loi n° 96-669 modifiée) et Cadre Réglementaire Amont",
        publisher: "Ministère des Mines, du Pétrole et de l'Énergie, Côte d'Ivoire",
        date: "2023",
        url: "https://energie.gouv.ci/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Exploration et Production : Gestion des Blocs Offshore et Projet Baleine",
        publisher: "PETROCI Holding",
        date: "2024",
        url: "https://www.petroci.ci/activites/upstream/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Loi n° 2013-450 relative à la protection des données à caractère personnel",
        publisher: "Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)",
        date: "2023",
        url: "https://www.artci.ci/protection-des-donnees/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the software support French language interfaces for Ivorian technical teams?",
        a: "Yes. All operational screens, forms, reports, and documentation support complete French localization, with seamless switching to English."
      },
      {
        q: "Can the platform track carbon intensity and Scope 1 & 2 emissions for net-zero fields?",
        a: "Yes. Our production accounting module includes dedicated greenhouse gas emission factors, tracking fuel gas, flare volumes, and power consumption alongside barrel production."
      },
      {
        q: "How does the system operate on offshore vessels with intermittent connectivity?",
        a: "We deploy an offline-first architecture. Edge nodes on board the FPSO capture telemetry and manual logs locally, syncing automatically with Abidjan headquarters whenever satellite links are active."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Project Controls Assessment",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  },

  "south-africa": {
    slug: "south-africa",
    assetId: "CP-17",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "South Africa",
    tier: 2,
    regionSlug: "southern-africa",
    title: "South Africa Downstream & Offshore Software | Asset Integrity & Emissions",
    metaDescription: "Enterprise asset integrity, turnaround management, and emissions tracking software for South African refining, midstream, and gas infrastructure.",
    tagline: "Refinery asset integrity, statutory pressure vessel compliance, and greenhouse gas emissions tracking for South Africa.",
    marketOpening: "The Republic of South Africa operates substantial downstream refining, synfuels, and petrochemical infrastructure (Sasol Secunda, Natref, coastal terminals), alongside expanding offshore gas-to-power and exploration initiatives. South African energy operations are subject to stringent regulatory oversight from the Department of Mineral Resources and Energy (DMRE), the Occupational Health and Safety (OHS) Act for Major Hazard Installations (MHI), and the National Environmental Management: Air Quality Act for greenhouse gas emissions reporting. Industrial software must deliver traceable inspection audit trails, turnaround management, and compliance with the Protection of Personal Information Act (POPIA).",
    buyerProblems: [
      {
        role: "Refinery Asset Integrity & Inspection Manager",
        problem: "Managing statutory pressure equipment regulations (PER), thickness inspection logs, and corrosion under insulation across aging refining complexes.",
        impact: "Unplanned plant shutdowns, inspection backlog penalties from the Department of Employment and Labour, and safety risks."
      },
      {
        role: "Plant Turnaround & Maintenance Superintendent",
        problem: "Coordinating thousands of contractor work permits, blinding lists, and vessel inspections during major scheduled maintenance turnarounds.",
        impact: "Turnaround schedule overruns resulting in millions of dollars in deferred production."
      },
      {
        role: "Environmental & ESG Reporting Director",
        problem: "Manual calculation of Scope 1, 2, and fugitive emissions across distributed refinery units and pipeline pumping stations.",
        impact: "Fines under South Africa's Carbon Tax Act and discrepancies during independent environmental audits."
      }
    ],
    priorityWorkflows: [
      {
        title: "Refinery Asset Integrity & Risk-Based Inspection (RBI)",
        description: "Ultrasonic thickness measurement tracking, corrosion circuit monitoring, and statutory pressure vessel inspection logs.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Major Maintenance Turnaround Management",
        description: "Digital work permits, blind tracking, valve overhaul checklists, and contractor task execution for plant turnarounds.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      },
      {
        title: "Industrial Greenhouse Gas & Methane Emissions Reporting",
        description: "Automating emissions source factor calculations, flaring volume reconciliations, and Carbon Tax Act reporting.",
        solutionSlug: "mena-africa-methane-emissions-reporting"
      }
    ],
    operatingEnvironment: {
      assetContext: "Refining and synthetic fuel complexes (Sasol Secunda and Sasolburg, Natref), coastal crude terminals (Saldanha Bay, Durban), and offshore gas fields (PetroSA Block 9).",
      connectivity: "World-class industrial fiber networks across Gauteng, KwaZulu-Natal, and the Western Cape; reliable cellular backhauls.",
      dataGovernance: "Compliance with the Protection of Personal Information Act (POPIA) and Critical Infrastructure Protection Act.",
      partnerEcosystem: "Sasol, PetroSA, National Petroleum Refinery of South Africa (Natref), Strategic Fuel Fund (SFF), and industrial engineering contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "POPIA compliance mandates strict governance of data processing, with local hosting preferred for critical national infrastructure telemetry.",
      buyerPreference: "Domestic enterprise cloud VPCs hosted in AWS Africa (Cape Town) or Microsoft Azure South Africa North (Johannesburg).",
      recommendedArchitecture: "Enterprise cloud deployment inside local South African hyperscale regions with encrypted multi-zone redundancy."
    },
    localContentProcurement: {
      statutoryFramework: "Broad-Based Black Economic Empowerment (B-BBEE) legislation and Department of Mineral Resources and Energy procurement scorecards.",
      technologyTransfer: "B-BBEE partner integration, skills development training for South African software engineers, and enterprise development support.",
      citation: "Broad-Based Black Economic Empowerment Act and Mining Charter Energy Directives (2023)."
    },
    solutions: [
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Configured for South African Pressure Equipment Regulations and refinery RBI."
      },
      {
        title: "MENA & Africa Methane Emissions Reporting",
        slug: "mena-africa-methane-emissions-reporting",
        annotation: "Automated carbon tax calculation and statutory air quality compliance."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Turnaround contractor submittals and work-pack progress tracking."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of refinery asset hierarchies, SAP PM maintenance data, and emissions reporting protocols.",
      pilot: "Deployment of an asset integrity and thickness monitoring module across one refinery process unit with milestone-gated acceptance criteria.",
      integration: "Connecting with SAP S/4HANA PM/MM, OSIsoft PI historians, and lab testing databases.",
      rollout: "Expansion across all operating refinery units and terminals with comprehensive training for inspection engineers.",
      ownership: "Perpetual enterprise software license with local support handover."
    },
    proofContext: {
      relevantExperience: "Deview's team brings experience in enterprise asset management, project controls, and operational data platforms spanning 2010–2020, reinforced by industrial oilfield pilots.",
      boundaries: "Deview is a specialized software engineering firm. We do not hold a direct B-BBEE rating independently, but deliver via accredited South African partners."
    },
    buyingTeamChecklist: {
      operations: "Does the platform generate statutory inspection certificates aligned with Department of Labour regulations?",
      itSecurity: "Is all data stored within South African borders in compliance with POPIA?",
      procurement: "How does the engagement model support enterprise B-BBEE scoring?",
      executiveSponsor: "Does the executive dashboard provide real-time carbon tax liabilities and turnaround completion forecasts?"
    },
    sources: [
      {
        title: "Upstream Petroleum Resources Development Bill (B13B-2021) Legislative Framework",
        publisher: "Department of Mineral Resources and Energy (DMRE), South Africa",
        date: "2024",
        url: "https://www.dmre.gov.za/legislation/acts/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Protection of Personal Information Act (POPIA) Regulations & Cross-Border Guidelines (Section 72)",
        publisher: "Information Regulator South Africa",
        date: "2023",
        url: "https://inforegulator.org.za/popia/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Customs, Joint Venture Withholding and Transfer Pricing Framework for Extractive Industries",
        publisher: "South African Revenue Service (SARS)",
        date: "2024",
        url: "https://www.sars.gov.za/legal-counsel/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does the system handle South African statutory pressure vessel inspections?",
        a: "Our asset integrity module tracks statutory inspection intervals under the Pressure Equipment Regulations (PER), generates thickness measurement degradation curves, and produces auditable inspection reports for Approved Inspection Authorities (AIAs)."
      },
      {
        q: "Can the platform automate South African Carbon Tax calculations?",
        a: "Yes. Our emissions engine incorporates official SARS emissions factors and fuel tax formulas, computing net greenhouse gas liabilities and carbon offset deductions."
      },
      {
        q: "Where is the data hosted?",
        a: "We deploy inside local South African hyperscale regions (AWS Cape Town or Microsoft Azure South Africa North in Johannesburg), ensuring full POPIA compliance and ultra-low network latency."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Integrity Data Workshop",
        href: "/en/contact"
      },
      secondary: {
        label: "Download IT/OT Architecture Checklist",
        href: "/en/resources/oil-gas-it-ot-architecture-checklist"
      }
    }
  },

  "tanzania": {
    slug: "tanzania",
    assetId: "CP-18",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Tanzania",
    tier: 2,
    regionSlug: "east-africa",
    title: "Tanzania Energy & Gas Software | LNG Project Controls & Data Governance",
    metaDescription: "Enterprise software for offshore gas data management, LNG capital project controls, and pipeline transit monitoring in Tanzania.",
    tagline: "Rovuma basin offshore gas data governance, Lindi LNG megaproject controls, and EACOP pipeline transit systems.",
    marketOpening: "The United Republic of Tanzania is poised to unlock major natural gas reserves in deepwater offshore Blocks 1, 2, and 4 (estimated at over 57 trillion cubic feet), driving national planning for the world-scale Lindi LNG export liquefaction project. Under the guidance of the Ministry of Energy, the Tanzania Petroleum Development Corporation (TPDC), and the Petroleum Upstream Regulatory Authority (PURA), Tanzania is also a key host nation for the East African Crude Oil Pipeline (EACOP) marine export terminal at Tanga. Software systems in Tanzania must support long-cycle capital project controls, national subsurface data banking, and strict compliance with national local content guidelines.",
    buyerProblems: [
      {
        role: "LNG Megaproject Director (TPDC / Consortia)",
        problem: "Managing complex negotiations, front-end engineering design (FEED), and early civil works across international consortia (Equinor, Shell, ExxonMobil).",
        impact: "Schedule coordination delays and budget variance across multi-billion-dollar infrastructure packages."
      },
      {
        role: "National Subsurface Data Manager (PURA / TPDC)",
        problem: "Legacy seismic and well data across deepwater offshore blocks are difficult to catalogue, permission, and share securely during farm-in reviews.",
        impact: "Extended evaluation cycles for international exploration and development partners."
      },
      {
        role: "Local Content & Procurement Coordinator",
        problem: "Auditing compliance with Petroleum (Local Content) Regulations across pipeline and LNG construction packages.",
        impact: "Regulatory non-compliance penalties from PURA and local community procurement disputes."
      }
    ],
    priorityWorkflows: [
      {
        title: "LNG Megaproject Controls & Consortium Portals",
        description: "Standardized work breakdown structures, Primavera P6 baseline integration, and contractor milestone submittals for the Lindi LNG complex.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "National Exploration Data Rooms & Subsurface Archives",
        description: "Governed cataloguing of well, seismic, and core assets compliant with OSDU standards for PURA regulatory oversight.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Pipeline Transit & Marine Terminal Logistics",
        description: "Tracking linear pipeline construction milestones, pipe joint welding inspections, and storage terminal progress at Tanga.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater offshore gas discoveries (Blocks 1, 2, 4), planned onshore Lindi LNG liquefaction plant, producing Songo Songo and Mnazi Bay gas fields, and EACOP marine terminal at Tanga.",
      connectivity: "High-speed fiber connectivity in Dar es Salaam and Dodoma; developing telecommunications links along pipeline transit routes and coastal project sites.",
      dataGovernance: "Petroleum Act 2015 and compliance with the Tanzania Personal Data Protection Act (PDPA) 2022.",
      partnerEcosystem: "TPDC, PURA, Ministry of Energy, Equinor, Shell, ExxonMobil, TotalEnergies (EACOP), and domestic engineering service firms."
    },
    deploymentAndSovereignty: {
      legalMandate: "Petroleum Act 2015 requires that all upstream petroleum data, concession records, and operational logs must be retained within sovereign Tanzanian territory.",
      buyerPreference: "On-premise deployment in TPDC/PURA data centers in Dar es Salaam or hosting in the Tanzania National Data Centre (NDC).",
      recommendedArchitecture: "Private sovereign deployment inside the Tanzania National Data Centre with encrypted offsite replication."
    },
    localContentProcurement: {
      statutoryFramework: "Petroleum (Local Content) Regulations, 2017, enforced by PURA, prioritizing Tanzanian citizens, goods, and local engineering companies.",
      technologyTransfer: "Structured programs to train Tanzanian engineers in digital petroleum data systems and project controls.",
      citation: "Petroleum Upstream Regulatory Authority (PURA) Local Content Guidelines (2024)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for Lindi LNG megaproject packages and multi-consortium reporting."
      },
      {
        title: "Africa Exploration Data Rooms",
        slug: "africa-exploration-data-rooms",
        annotation: "Subsurface repository and data room workflows aligned with PURA regulations."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "PURA local content compliance tracking and contractor onboarding."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of TPDC/PURA data repositories, LNG project schedule architectures, and national data sovereignty rules.",
      pilot: "Deployment of an exploration data room and project control module for one offshore concession with milestone-gated acceptance criteria.",
      integration: "Connecting with subsurface interpretation databases, Primavera P6 schedules, and ministry financial portals.",
      rollout: "Expansion across all national energy assets with comprehensive training for Tanzanian geoscientists and engineers.",
      ownership: "Perpetual enterprise software license with complete national operational autonomy."
    },
    proofContext: {
      relevantExperience: "Deview's team brings deep enterprise software experience (2010–2020) in project controls, upstream reporting, and remote operations, reinforced by our EnerQuest digital oilfield deployment in Africa.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Dar es Salaam without local consortium representation."
    },
    buyingTeamChecklist: {
      operations: "Does the system support linear asset tracking for the EACOP pipeline transit corridor?",
      itSecurity: "Is the data platform hosted within the Tanzania National Data Centre in compliance with national laws?",
      procurement: "Does the project include verifiable technology transfer for Tanzanian technical staff?",
      executiveSponsor: "Does the platform accelerate licensing rounds and international LNG partner alignment?"
    },
    sources: [
      {
        title: "Petroleum Act, 2015 and Petroleum (Local Content) Regulations",
        publisher: "Petroleum Upstream Regulatory Authority (PURA), Tanzania",
        date: "2023",
        url: "https://www.pura.go.tz/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Upstream Natural Gas Commercialization & Production Sharing Agreements",
        publisher: "Tanzania Petroleum Development Corporation (TPDC)",
        date: "2024",
        url: "https://www.tpdc.co.tz/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Personal Data Protection Act, 2022 (Act No. 11 of 2022) Guidelines",
        publisher: "Personal Data Protection Commission (PDPC), Tanzania",
        date: "2023",
        url: "https://www.pdpc.go.tz/regulations/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does Deview satisfy Tanzanian data residency requirements?",
        a: "Our architectures support complete on-premise installation inside TPDC data centers or the certified Tanzania National Data Centre (NDC) in Dar es Salaam, designed to maintain complete data residency within sovereign national infrastructure."
      },
      {
        q: "Can the platform handle linear pipeline tracking for EACOP infrastructure?",
        a: "Yes. Our project controls architecture supports linear asset chainage, pipe joint tracking, and weld inspection logging across hundreds of kilometers of transit corridor."
      },
      {
        q: "Does the system support OSDU exploration data formats?",
        a: "Yes. Our exploration data repository adheres to OSDU data models, enabling seamless cataloguing of seismic, well, and core data for PURA and international consortia."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Programme Requirements Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  }
};

