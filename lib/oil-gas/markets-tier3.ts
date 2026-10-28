import { MarketPageData } from "./markets";

export const TIER_3_MARKETS: Record<string, MarketPageData> = {
  "bahrain": {
    slug: "bahrain",
    assetId: "CP-19",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Bahrain",
    tier: 3,
    regionSlug: "middle-east",
    title: "Bahrain Oil & Gas Software Systems | Bapco Refining & Field Operations",
    metaDescription: "Enterprise software for refinery asset integrity, operational turnaround management, and Tatweer field operations in Bahrain.",
    tagline: "Bapco modernization project controls, refinery asset integrity, and compact national energy supply chain governance.",
    marketOpening: "The Kingdom of Bahrain represents one of the Middle East's pioneer petroleum environments, centered on the historic Bahrain Field (Awali) and the multi-billion-dollar Bapco Modernization Programme (BMP) expanding refining capacity to 400,000 barrels per day. Governed by the Supreme Council for Oil and Gas and operated via Bapco Energies and Tatweer Petroleum, Bahrain's compact energy sector requires software that handles high-density refinery asset integrity, tight downstream-upstream supply synchronization, and compliance with the Bahrain Personal Data Protection Law (PDPL).",
    buyerProblems: [
      {
        role: "Refinery Asset Integrity Lead",
        problem: "Managing corrosion inspection, pressure relief valve recertification, and thickness gauging across expanded Sitra refinery units.",
        impact: "Safety risks and delayed turnaround approvals from the Ministry of Oil and Environment."
      },
      {
        role: "Field Production Superintendent (Tatweer)",
        problem: "Optimizing artificial lift and gas reinjection across the mature Bahrain Field with complex geological faulting.",
        impact: "Higher operating costs per barrel and production deferment due to slow well intervention tracking."
      },
      {
        role: "Procurement & In-Country Value Lead",
        problem: "Auditing contractor compliance with national supplier development programs and Bahrainization employment metrics.",
        impact: "Regulatory non-compliance during annual audit reviews."
      }
    ],
    priorityWorkflows: [
      {
        title: "Downstream Refinery Asset Integrity & RBI",
        description: "Risk-based inspection logging, ultrasonic wall thickness mapping, and statutory vessel compliance for Sitra refinery.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Mature Field Well Surveillance & Artificial Lift",
        description: "Real-time monitoring of rod pump and beam pump performance, wellhead pressure, and gas injection allocation.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Contractor Compliance & Turnaround Portals",
        description: "Permission-scoped contractor work permit submittals and progress tracking for major maintenance shutdowns.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Mature Bahrain onshore oilfield (Awali), expanded Sitra export refinery complex, and offshore exploration blocks.",
      connectivity: "Dense nationwide industrial fiber network connecting Awali, Sitra, and Manama.",
      dataGovernance: "Compliance with Bahrain Personal Data Protection Law (Law No. 30 of 2018) and National Cybersecurity Strategy.",
      partnerEcosystem: "Bapco Energies, Tatweer Petroleum, Bapco Refining, and major international engineering contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Law No. 30 of 2018 governs data protection, with national critical infrastructure records requiring secure sovereign hosting.",
      buyerPreference: "Domestic hosting in certified Bahraini data centers or AWS Middle East (Bahrain) region.",
      recommendedArchitecture: "Single-tenant cloud VPC hosted within AWS Bahrain with customer-managed cryptographic keys."
    },
    localContentProcurement: {
      statutoryFramework: "Bahrainization employment quotas and Bapco contractor development guidelines promoting local engineering participation.",
      technologyTransfer: "Structured training workshops for Bahraini petroleum engineers and software developers.",
      citation: "Kingdom of Bahrain Ministry of Oil and Environment Regulatory Framework (2023)."
    },
    solutions: [
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Refinery inspection and turnaround workflows for the Bapco Sitra complex."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Turnaround contractor submittals and Bahrainization tracking."
      },
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Mature field well surveillance and artificial lift optimization."
      }
    ],
    deliveryApproach: {
      discovery: "Review of Bapco asset hierarchies, turnaround schedule templates, and AWS Bahrain security configurations.",
      pilot: "Deployment of an asset integrity and thickness monitoring module across one refinery process unit with milestone-gated acceptance criteria.",
      integration: "Connecting with SAP S/4HANA PM and plant OSIsoft PI historians.",
      rollout: "Expansion across all operating units with comprehensive training for Bahraini engineers.",
      ownership: "Perpetual enterprise software license with local support handover."
    },
    proofContext: {
      relevantExperience: "Deview's team brings experience in enterprise asset management, project controls, and operational data platforms spanning 2010–2020, reinforced by industrial oilfield pilots.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Manama without local consortium partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain millisecond-accurate historian synchronization for critical refinery tags?",
      itSecurity: "Is the software deployed in compliance with Bahrain's Personal Data Protection Law?",
      procurement: "Does the project include verifiable technology transfer for Bahraini national engineers?",
      executiveSponsor: "Does the executive dashboard provide real-time visibility into refinery turnaround critical paths?"
    },
    sources: [
      {
        title: "Upstream Field Development & Bahrain Field Production Operations",
        publisher: "Bapco Energies Upstream",
        date: "2024",
        url: "https://www.bapcoenergies.com/our-business/upstream/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Law No. 30 of 2018 with respect to Personal Data Protection Law (PDPL)",
        publisher: "Personal Data Protection Authority (PDPA), Kingdom of Bahrain",
        date: "2018",
        url: "https://www.pdp.gov.bh/en/legislation/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Critical National Infrastructure (CNI) Cybersecurity Guidelines",
        publisher: "National Cyber Security Centre (NCSC), Bahrain",
        date: "2023",
        url: "https://www.ncsc.gov.bh/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Is hosting in AWS Middle East (Bahrain) supported?",
        a: "Yes. Our systems are fully compatible with AWS Bahrain, deploying inside customer VPCs with domestic IP routing and zero external data transit."
      },
      {
        q: "Can the platform handle turnaround planning for refinery expansions?",
        a: "Yes. Our asset integrity and contractor modules manage turnaround work packs, blinding lists, vessel entries, and contractor shift logs."
      },
      {
        q: "How does the system calculate Bahrainization compliance?",
        a: "Our contractor portal verifies submitted CPR records against Bahraini nationality rules, generating real-time percentage reports against contractual targets."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Integrity Workflow Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download IT/OT Architecture Checklist",
        href: "/en/resources/oil-gas-it-ot-architecture-checklist"
      }
    }
  },

  "mauritania": {
    slug: "mauritania",
    assetId: "CP-20",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Mauritania",
    tier: 3,
    regionSlug: "north-africa",
    title: "Mauritania Offshore Gas Software | GTA Cross-Border Project Controls",
    metaDescription: "Enterprise software for cross-border offshore gas project controls, FLNG operations, and SMH joint ventures in Mauritania.",
    tagline: "Greater Tortue Ahmeyim cross-border gas controls, BirAllah development tracking, and trilingual French-Arabic-English governance.",
    marketOpening: "The Islamic Republic of Mauritania is entering the global LNG arena through the offshore Greater Tortue Ahmeyim (GTA) FLNG project (jointly developed with Senegal) and the planned BirAllah domestic deepwater gas development. Regulated by the Ministry of Petroleum, Mines and Energy and operating through national champion Société Mauritanienne des Hydrocarbures (SMH), Mauritania requires specialized software that can handle cross-border gas accounting, offshore logistics, multi-language administration (Arabic, French, and English), and compliance with the national Local Content Strategy.",
    buyerProblems: [
      {
        role: "Cross-Border Commercial & JV Director (SMH)",
        problem: "Reconciling feed gas metering, liquefaction yields, and revenue allocation across the maritime border with Senegal.",
        impact: "Discrepancies in national royalty shares and delayed financial closing with joint venture partners."
      },
      {
        role: "Offshore Gas Operations Lead",
        problem: "Monitoring deepwater subsea manifold pressures, gas treatment skids, and FLNG loading schedules under high swell conditions.",
        impact: "Production deferment and offloading delays during adverse maritime weather."
      },
      {
        role: "Local Content & Procurement Officer",
        problem: "Tracking contractor compliance with Mauritanian national employment and local supplier inclusion quotas.",
        impact: "Regulatory non-compliance during annual ministry audits."
      }
    ],
    priorityWorkflows: [
      {
        title: "Cross-Border Gas Allocation & Concession Governance",
        description: "Reconciling shared GTA offshore gas extraction, liquefaction yields, and revenue distributions between SMH and Petrosen.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Deepwater Gas Capital Project Controls",
        description: "Tracking subsea engineering milestones, umbilical installation, and FLNG commissioning progress.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Trilingual Contractor & Supplier Portals",
        description: "Standardized contractor submittals operating simultaneously in French, Arabic, and English.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater offshore gas discoveries (GTA FLNG complex, BirAllah, Banda, Pelican), ultra-deepwater drilling rigs, and coastal receiving infrastructure at Nouakchott and N'Diago.",
      connectivity: "Maritime satellite (VSAT/Starlink) offshore; fiber connectivity in Nouakchott; developing regional links in Nouadhibou.",
      dataGovernance: "Mauritanian Petroleum Code (Law No. 2010-033) and personal data protection regulations.",
      partnerEcosystem: "SMH, Ministry of Petroleum, bp, Kosmos Energy, and international offshore engineering consortia."
    },
    deploymentAndSovereignty: {
      legalMandate: "Law No. 2010-033 requires all concession exploration, production, and financial accounting records to be archived within national custody.",
      buyerPreference: "Domestic on-premise hosting in SMH data centers in Nouakchott with secure offshore edge caching.",
      recommendedArchitecture: "Decentralized deployment: local vessel databases syncing delta records to a central SMH database cluster in Nouakchott."
    },
    localContentProcurement: {
      statutoryFramework: "National Strategy for Local Content in the Extractive Sector, administered by the Ministry of Petroleum.",
      technologyTransfer: "Bilingual French/Arabic operational training and technology transfer for Mauritanian petroleum engineers.",
      citation: "Ministry of Petroleum, Mines and Energy Local Content Strategy (2023)."
    },
    solutions: [
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Cross-border gas allocation and SMH concession accounting."
      },
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Subsea pipeline and FLNG capital package tracking."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Trilingual contractor submittals and local content compliance."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of GTA metering points, cross-border treaty accounting rules, and SMH reporting formats.",
      pilot: "Deployment of gas production and revenue allocation across the GTA development with milestone-gated acceptance criteria.",
      integration: "Connecting with FLNG process historians, subsea flow computers, and corporate accounting databases in Nouakchott.",
      rollout: "Expansion across BirAllah development planning with trilingual Arabic/French/English training.",
      ownership: "Perpetual enterprise software license with local technical empowerment."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for production reporting, AFE controls, and project governance from 2010 to 2020, reinforced by the EnerQuest digital oilfield pilot in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Nouakchott without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system support trilingual Arabic, French, and English data entry?",
      itSecurity: "Is the data platform hosted within Mauritanian jurisdiction in compliance with national law?",
      procurement: "Does the contract include verifiable capacity building for SMH technical staff?",
      executiveSponsor: "Does the platform generate verified cross-border allocation statements for inter-governmental sign-off?"
    },
    sources: [
      {
        title: "Code des Hydrocarbures Bruts (Loi n° 2010-033) et Cadre Réglementaire Amont",
        publisher: "Ministère du Pétrole, des Mines et de l'Énergie, Mauritanie",
        date: "2022",
        url: "https://petrole.gov.mr/reglementation/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Exploration Offshore & Développement Conjoint Grand Tortue Ahmeyim / BirAllah",
        publisher: "Société Mauritanienne des Hydrocarbures (SMH)",
        date: "2024",
        url: "https://smh.mr/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Loi n° 2017-020 sur la protection des données à caractère personnel",
        publisher: "Autorité de Protection des Données Personnelles (APDP), Mauritanie",
        date: "2023",
        url: "https://apdp.mr/textes-juridiques/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the platform support Arabic, French, and English interfaces?",
        a: "Yes. All operational screens, forms, reports, and documentation support dynamic switching among Arabic (with native RTL rendering), French, and English."
      },
      {
        q: "Can the system handle cross-border joint venture accounting like GTA?",
        a: "Yes. Our JV accounting module models cross-border concession terms, allocating feed gas volumes, capital expenditure, and operating costs across multiple national entities."
      },
      {
        q: "What deployment options exist for Nouakchott?",
        a: "We deploy high-availability on-premise clusters in SMH data centers in Nouakchott, with encrypted satellite links to offshore FLNG units."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Partner Reporting Workshop",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  },

  "morocco": {
    slug: "morocco",
    assetId: "CP-21",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Morocco",
    tier: 3,
    regionSlug: "north-africa",
    title: "Morocco Energy & Upstream Software | Exploration Data & Gas Infrastructure",
    metaDescription: "Enterprise software for exploration data rooms, seismic cataloguing, and gas infrastructure monitoring for ONHYM in Morocco.",
    tagline: "ONHYM exploration data management, Tendrara gas pipeline tracking, and bilingual French-Arabic-English procurement systems.",
    marketOpening: "The Kingdom of Morocco is expanding its domestic natural gas infrastructure through onshore gas developments (Tendrara by Sound Energy and ONHYM) and offshore Atlantic exploration (Anchois gas discovery in the Rharb Basin by Chariot). Overseen by the National Office of Hydrocarbons and Mines (ONHYM) and the Ministry of Energy Transition and Sustainable Development, Morocco offers highly attractive concession terms to international investors. Software systems in Morocco must deliver robust exploration data cataloguing, virtual data room governance, and linear pipeline infrastructure monitoring under bilingual French, Arabic, and English operational standards.",
    buyerProblems: [
      {
        role: "Exploration Data Manager / Geoscientist (ONHYM)",
        problem: "Managing extensive 2D/3D seismic databases and well logs across Atlantic and Mediterranean offshore blocks.",
        impact: "Slow response times to international exploration companies evaluating farm-in opportunities."
      },
      {
        role: "Midstream Gas Pipeline Superintendent",
        problem: "Monitoring linear construction progress, welding inspection logs, and pressure testing along the Tendrara gas export spur pipeline.",
        impact: "Schedule slippage and interface coordination delays with the Maghreb-Europe Gas Pipeline (GME)."
      },
      {
        role: "Concession Commercial Controller",
        problem: "Managing partner equity shares, exploration expenditure tracking, and statutory ONHYM royalty reconciliations.",
        impact: "Delayed financial closings during annual joint venture audits."
      }
    ],
    priorityWorkflows: [
      {
        title: "National Exploration Data Rooms & Seismic Governance",
        description: "Cataloguing well, seismic, and core assets compliant with OSDU standards with role-based virtual data room access for ONHYM bid rounds.",
        solutionSlug: "africa-exploration-data-rooms"
      },
      {
        title: "Gas Pipeline Construction & Asset Integrity",
        description: "Tracking linear pipeline chainage, non-destructive testing (NDT) inspection passes, and cathodic protection logs.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Trilingual Joint Venture Accounting Portals",
        description: "Standardized concession accounting and AFE approvals operating seamlessly in French, Arabic, and English.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      }
    ],
    operatingEnvironment: {
      assetContext: "Onshore gas fields (Tendrara, Gharb Basin), offshore Atlantic exploration concessions (Lixus, Mohammedia), and Maghreb-Europe Gas Pipeline (GME) infrastructure.",
      connectivity: "Modern high-speed fiber networks across Rabat, Casablanca, and Tangier; reliable cellular links along major pipeline transit corridors.",
      dataGovernance: "Law No. 09-08 on the protection of personal data and National Cybersecurity Directive (CNDIC).",
      partnerEcosystem: "ONHYM, Ministry of Energy Transition, Sound Energy, Chariot Energy, Predator Oil & Gas, and international engineering contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Hydrocarbon Law No. 21-90 mandates that all exploration archives and concession records must be deposited with ONHYM as sovereign property.",
      buyerPreference: "Domestic enterprise cloud or on-premise hosting in Rabat or Casablanca certified Tier-3 data centers.",
      recommendedArchitecture: "Private single-tenant deployment inside Moroccan data centers (e.g., inwi or Maroc Telecom cloud facilities) with encrypted backups."
    },
    localContentProcurement: {
      statutoryFramework: "Moroccan Public Procurement Decree and ONHYM partnership guidelines encouraging domestic technical service participation.",
      technologyTransfer: "Bilingual French/Arabic system documentation and training programs for Moroccan geoscientists and data managers.",
      citation: "ONHYM Upstream Petroleum Investment and Exploration Guidelines (2024)."
    },
    solutions: [
      {
        title: "Africa Exploration Data Rooms",
        slug: "africa-exploration-data-rooms",
        annotation: "Subsurface and concession data governance aligned with ONHYM licensing rounds."
      },
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Gas pipeline construction tracking and corrosion surveillance."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Concession accounting compliant with Moroccan Petroleum Law No. 21-90."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of ONHYM seismic and well archives, pipeline construction schedule models, and CNDIC cyber rules.",
      pilot: "Deployment of an exploration data room for one offshore license block with milestone-gated acceptance criteria.",
      integration: "Connecting with subsurface interpretation databases and GIS mapping systems in Rabat.",
      rollout: "Expansion across all national exploration and midstream assets with trilingual training.",
      ownership: "Perpetual enterprise software license with local Moroccan technical capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's team brings deep enterprise software experience (2010–2020) in project controls, upstream reporting, and data cataloguing, reinforced by digital oilfield implementations.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Rabat without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the platform support instant previewing of large 2D/3D seismic files directly in a web browser?",
      itSecurity: "Is the data platform hosted within Morocco in compliance with Law 09-08 and CNDIC rules?",
      procurement: "Does the project include hands-on capacity building for Moroccan petroleum geoscientists?",
      executiveSponsor: "Does the virtual data room accelerate international farm-in closures for Moroccan acreage?"
    },
    sources: [
      {
        title: "Cadre Réglementaire des Hydrocarbures : Loi n° 21-90 et Décrets d'Application",
        publisher: "Office National des Hydrocarbures et des Mines (ONHYM), Maroc",
        date: "2023",
        url: "https://www.onhym.com/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel",
        publisher: "Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)",
        date: "2023",
        url: "https://www.cndp.ma/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Stratégie Nationale de Développement Énergétique et Cadre Minier",
        publisher: "Ministère de la Transition Énergétique et du Développement Durable",
        date: "2024",
        url: "https://www.mted.gov.ma/reglementation/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the platform support French and Arabic interfaces for ONHYM personnel?",
        a: "Yes. All operational screens, forms, reports, and documentation support dynamic switching between French, Arabic (with native RTL rendering), and English."
      },
      {
        q: "Can the platform handle linear pipeline tracking for Tendrara gas infrastructure?",
        a: "Yes. Our project controls and inspection modules support linear chainage, weld inspections, and pressure testing along linear pipeline corridors."
      },
      {
        q: "Is the exploration data platform OSDU compliant?",
        a: "Yes. Our exploration repository adheres to OSDU data standards, facilitating seamless cataloguing and integration with modern geoscientific platforms."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Data Readiness Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download OSDU Readiness Assessment",
        href: "/en/resources/osdu-exploration-data-readiness-assessment"
      }
    }
  },

  "gabon": {
    slug: "gabon",
    assetId: "CP-22",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Gabon",
    tier: 3,
    regionSlug: "west-central-africa",
    title: "Gabon Mature Oilfield Software | Production Reporting & Asset Revitalization",
    metaDescription: "Enterprise software for mature oilfield production accounting, artificial lift surveillance, and Gabon Oil Company (GOC) concession management.",
    tagline: "Mature onshore and shallow-water production reporting, artificial lift optimization, and French-language operational systems for Gabon.",
    marketOpening: "The Gabonese Republic is one of Sub-Saharan Africa's historic oil-producing nations, centered on mature onshore and shallow-water basins around Port-Gentil and Gamba. Following the acquisition of mature assets by national entity Gabon Oil Company (GOC) and independent operators (Perenco, Assala Energy/GOC, BW Energy), the operating focus is firmly on mature asset revitalization, artificial lift optimization (gas lift, ESP), and production restatement management. Software systems in Gabon must operate effectively under humid equatorial conditions, support French-language operations, and comply with the Hydrocarbon Code (Loi No. 002/2019).",
    buyerProblems: [
      {
        role: "Mature Field Operations Director",
        problem: "High water-cut reservoirs require continuous wellhead test reconciliation and gas-lift allocation across hundreds of mature wells.",
        impact: "Production deferred due to slow detection of dead wells and suboptimal gas-lift compressor distribution."
      },
      {
        role: "Production Accounting Manager (GOC / Operator)",
        problem: "Daily production logs are gathered via paper tickets and disconnected spreadsheets from remote swamp and jungle gathering centers.",
        impact: "Delays in official daily production submissions to the Directorate General of Hydrocarbons (DGH)."
      },
      {
        role: "HSE & Coastal Pipeline Superintendent",
        problem: "Corrosion monitoring across aging shallow-water platforms and coastal export pipelines exposed to aggressive marine environments.",
        impact: "Risk of environmental leaks and regulatory fines from the Ministry of Petroleum."
      }
    ],
    priorityWorkflows: [
      {
        title: "Mature Field Production Accounting & Gas-Lift Allocation",
        description: "Reconciling daily gross and net production, well test results, and gas-lift distribution across mature onshore gathering stations.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Mature Asset Integrity & Corrosion Surveillance",
        description: "Ultrasonic thickness measurement tracking, cathodic protection surveys, and pipeline inspection logs for Port-Gentil assets.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "French-Language Operator Collaboration Portals",
        description: "Standardized joint venture accounting, AFE tracking, and contractor submittals localized in French.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      }
    ],
    operatingEnvironment: {
      assetContext: "Mature onshore and shallow-water fields (Rabi-Kounga, Gamba, Pelican, Dussafu), aging offshore platforms, and coastal export terminals at Cap Lopez and Gamba.",
      connectivity: "Reliable fiber in Libreville and Port-Gentil; high-latency radio links and satellite connections across equatorial swamp and jungle gathering centers.",
      dataGovernance: "Hydrocarbon Code (Loi No. 002/2019) and Law No. 001/2011 on the protection of personal data.",
      partnerEcosystem: "Gabon Oil Company (GOC), Directorate General of Hydrocarbons (DGH), Perenco, TotalEnergies EP Gabon, BW Energy, and local service providers."
    },
    deploymentAndSovereignty: {
      legalMandate: "Loi No. 002/2019 mandates that petroleum extraction records and concession accounting must remain accessible within national jurisdiction.",
      buyerPreference: "Domestic on-premise installation in operator headquarters in Port-Gentil or Libreville with field edge caching.",
      recommendedArchitecture: "Edge-to-hub deployment: ruggedized edge nodes at remote flow stations syncing via encrypted satellite bursts to a central database in Port-Gentil."
    },
    localContentProcurement: {
      statutoryFramework: "Loi No. 002/2019 provisions mandating priority for Gabonese nationals in employment and preferential procurement from local service companies.",
      technologyTransfer: "French-language software documentation, user training, and capacity building for Gabonese petroleum data technicians.",
      citation: "Ministry of Petroleum Hydrocarbon Code Regulatory Directives (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Mature field production allocation, gas-lift tracking, and DGH reporting."
      },
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Aging platform inspection and corrosion monitoring for Port-Gentil assets."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Concession accounting compliant with Gabonese Hydrocarbon Code 002/2019."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of jungle flow station communications, well testing routines, and DGH regulatory reporting templates.",
      pilot: "Deployment of production data capture across one mature field cluster with milestone-gated acceptance criteria.",
      integration: "Connecting with field RTUs, tank level transmitters, and corporate ERP systems in Port-Gentil.",
      rollout: "Expansion across all operating onshore and shallow-water concessions with full French-language training.",
      ownership: "Perpetual enterprise software license with local Gabonese engineering capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's team brings deep enterprise software experience (2010–2020) in production management, AFE tracking, and digital oilfield architecture demonstrated by our EnerQuest deployment in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Port-Gentil without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production logging at jungle flow stations during communication outages?",
      itSecurity: "Is the data stored securely within the operator's private infrastructure?",
      procurement: "Does the contract comply with Gabonese local content training guidelines?",
      executiveSponsor: "Does the platform provide GOC leadership with real-time field production trends and loss deferments?"
    },
    sources: [
      {
        title: "Loi n° 002/2019 du 16 juillet 2019 portant Code des Hydrocarbures en République Gabonaise",
        publisher: "Direction Générale des Hydrocarbures (DGH), Gabon",
        date: "2019",
        url: "https://petrole.gouv.ga/cadre-legal/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Partenariats Stratégiques et Opérations Amont dans le Bassin Sédimentaire Gabonais",
        publisher: "Gabon Oil Company (GOC)",
        date: "2024",
        url: "https://gabonoil.com/operateurs-partenaires/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Loi n° 001/2011 relative à la protection des données à caractère personnel",
        publisher: "Commission Nationale de Protection des Données à Caractère Personnel (CNPDCP), Gabon",
        date: "2023",
        url: "https://cnpdcp.ga/textes-de-loi/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the software support French language interfaces for Gabonese field staff?",
        a: "Yes. All operational forms, tables, validation messages, and reports are fully localized in French, with dynamic switching to English."
      },
      {
        q: "How does the system handle gas-lift allocation for mature wells?",
        a: "Our production accounting engine models individual well gas-lift injection rates, correlating lift gas volumes with gross liquid and net oil recovery curves."
      },
      {
        q: "Can the system operate at remote flow stations without reliable internet?",
        a: "Yes. We deploy an offline-first architecture. Field operators log measurements locally, and the system synchronizes automatically whenever satellite or microwave connections are restored."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Production Data Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "republic-of-congo": {
    slug: "republic-of-congo",
    assetId: "CP-23",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Republic of Congo",
    tier: 3,
    regionSlug: "west-central-africa",
    title: "Congo Offshore Oil & Gas Software | FLNG & Marine XII Joint Ventures",
    metaDescription: "Enterprise software for offshore production allocation, Marine XII FLNG operations, and SNPC joint venture accounting in Congo.",
    tagline: "Marine XII FLNG operations, offshore production accounting, and SNPC joint venture concession governance.",
    marketOpening: "The Republic of the Congo (Congo-Brazzaville) is expanding its energy footprint through offshore natural gas commercialization, spearheaded by Eni and the Société Nationale des Pétroles du Congo (SNPC) via the Congo LNG project on the Marine XII permit (utilizing the Tango FLNG and second FLNG units). Alongside offshore crude production from mature fields (Moho-Bilondo, Nkossa, Djeno terminal), Congolese operations require industrial software that handles complex offshore gas-to-liquefaction accounting, multi-partner cash calls, and compliance with the national Hydrocarbon Code (Loi No. 28-2016) under bilingual French and English standards.",
    buyerProblems: [
      {
        role: "FLNG Production & Gas Allocation Manager",
        problem: "Managing feed gas metering, cryogenic liquefaction yields, and condensate offloading records across shared Marine XII offshore facilities.",
        impact: "Fiscal disputes with joint venture partners and delayed royalty reconciliations with SNPC."
      },
      {
        role: "JV Finance & Concession Controller (SNPC / Operator)",
        problem: "Managing partner cash calls, AFE approvals, and cost recovery ledgers across multiple offshore permits.",
        impact: "Protracted audit queries and delayed capital expenditure approvals."
      },
      {
        role: "Local Content & Procurement Director",
        problem: "Tracking contractor compliance with statutory Congolese local content quotas and national workforce development.",
        impact: "Regulatory non-compliance during annual ministry inspections."
      }
    ],
    priorityWorkflows: [
      {
        title: "Offshore Gas Allocation & FLNG Production Accounting",
        description: "Reconciling feed gas volumes, liquefaction efficiency, condensate separation, and LNG export tanker offloading records.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Joint Venture Cash Call & AFE Governance",
        description: "Multi-party cash calls, capital tracking, and revenue distribution compliant with Congolese Hydrocarbon Code Loi 28-2016.",
        solutionSlug: "africa-oil-gas-jv-afe-management"
      },
      {
        title: "Bilingual French-English Contractor Portals",
        description: "Standardized contractor submittals, progress billings, and local content tracking in French and English.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Deepwater and shallow-water offshore fields (Marine XII, Moho-Bilondo, Nkossa), Tango FLNG vessel, and Djeno onshore crude export terminal.",
      connectivity: "Maritime satellite (VSAT/LEO) offshore; stable fiber optic networks in Pointe-Noire and Brazzaville.",
      dataGovernance: "Hydrocarbon Code (Loi No. 28-2016) and Law No. 29-2019 on the protection of personal data.",
      partnerEcosystem: "SNPC, Ministry of Hydrocarbons, Eni Congo, TotalEnergies EP Congo, Perenco, and international offshore service contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Loi No. 28-2016 mandates that all petroleum extraction records, fiscal accounts, and concession data must be archived in sovereign Congolese territory.",
      buyerPreference: "Hybrid cloud architecture: on-vessel edge logging with primary database hosting in accredited Pointe-Noire data centers.",
      recommendedArchitecture: "Edge-to-hub deployment: containerized edge databases on offshore units syncing via encrypted links to sovereign cloud hosting in Pointe-Noire."
    },
    localContentProcurement: {
      statutoryFramework: "Loi No. 28-2016 local content provisions mandating priority for Congolese companies, national goods, and workforce skills training.",
      technologyTransfer: "Bilingual French/English software interfaces, national engineer training, and collaboration with local IT providers.",
      citation: "Ministry of Hydrocarbons Local Content Regulations (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "FLNG gas allocation and SNPC statutory production reporting."
      },
      {
        title: "Africa Oil & Gas JV & AFE Management",
        slug: "africa-oil-gas-jv-afe-management",
        annotation: "Concession accounting and cash calls compliant with Loi 28-2016."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Bilingual contractor submittals and Congolese local content tracking."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of Marine XII metering topologies, FLNG process interfaces, and SNPC JV reporting formats.",
      pilot: "Deployment of production data reconciliation across one offshore development permit with milestone-gated acceptance criteria.",
      integration: "Connecting with vessel historians, lab assay logs, and corporate ERP systems in Pointe-Noire.",
      rollout: "Expansion across all operating permits with comprehensive bilingual French/English training.",
      ownership: "Perpetual enterprise software license with local Congolese engineering capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for production reporting, AFE controls, and project governance from 2010 to 2020, reinforced by the EnerQuest digital oilfield pilot in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Pointe-Noire without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system maintain continuous production allocation records on board the FLNG during satellite outages?",
      itSecurity: "Is the data hosted in compliance with Congolese data protection legislation?",
      procurement: "Does the contract comply with Congolese local content technology transfer guidelines?",
      executiveSponsor: "Does the software provide SNPC leadership with real-time visibility into state revenue and barrel entitlements?"
    },
    sources: [
      {
        title: "Loi n° 28-2016 du 12 octobre 2016 portant Code des Hydrocarbures de la République du Congo",
        publisher: "Ministère des Hydrocarbures, République du Congo",
        date: "2016",
        url: "https://hydrocarbures.gouv.cg/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Opérations Offshore et Contrats de Partage de Production (CPP) Amont",
        publisher: "Société Nationale des Pétroles du Congo (SNPC)",
        date: "2024",
        url: "https://snpc-group.com/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Cadre Réglementaire de la Cybersécurité et Protection des Données Souveraines",
        publisher: "Agence Nationale de Sécurité des Systèmes d'Information (ANSSI Congo)",
        date: "2023",
        url: "https://anssi.gouv.cg/reglementation/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the software support French language interfaces for Congolese staff?",
        a: "Yes. All operational screens, forms, reports, and documentation support complete French localization, with seamless switching to English."
      },
      {
        q: "Can the platform reconcile FLNG production and tanker offloading?",
        a: "Yes. Our marine custody transfer module records cryogenic loading temperatures, boil-off volumes, and laboratory quality assays, producing official bill of lading documentation."
      },
      {
        q: "How does the system operate on offshore vessels with intermittent connectivity?",
        a: "We deploy an offline-first architecture. Edge nodes on board the FLNG capture telemetry and manual logs locally, syncing automatically with Pointe-Noire headquarters whenever satellite links are active."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a JV Requirements Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "equatorial-guinea": {
    slug: "equatorial-guinea",
    assetId: "CP-24",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Equatorial Guinea",
    tier: 3,
    regionSlug: "west-central-africa",
    title: "Equatorial Guinea Gas & LNG Software | Gas Mega Hub Operations",
    metaDescription: "Enterprise software for regional Gas Mega Hub coordination, Punta Europa LNG operations, and GEPetrol concession accounting in Equatorial Guinea.",
    tagline: "Punta Europa LNG operations, regional Gas Mega Hub coordination, and multi-language technical compliance.",
    marketOpening: "The Republic of Equatorial Guinea is solidifying its role as a regional natural gas processing center through the Gas Mega Hub (GMH) initiative, which links domestic offshore fields (Alba, Alen) and cross-border regional gas supplies to the world-scale Punta Europa processing and LNG liquefaction complex on Bioko Island. Regulated by the Ministry of Mines and Hydrocarbons and operating through national companies GEPetrol and SONAGAS alongside international operators (Marathon Oil, Chevron), Equatorial Guinea requires software that manages multi-field gas allocation, cryogenic processing efficiency, and compliance with the national Hydrocarbon Law.",
    buyerProblems: [
      {
        role: "Gas Mega Hub Commercial Director",
        problem: "Reconciling feed gas quality, heating value, and throughput allocations from multiple offshore fields into the centralized Punta Europa terminal.",
        impact: "Complex tariff billing disputes and delays in gas settlement among concession partners."
      },
      {
        role: "LNG Operations & Offloading Superintendent",
        problem: "Tracking cryogenic storage boil-off rates, LNG tanker offloading, and custody transfer assay certifications.",
        impact: "Demurrage charges and discrepancies in delivered energy (MMBtu) calculations."
      },
      {
        role: "Concession Accounting & Local Content Lead",
        problem: "Auditing compliance with the National Content Regulation (Ministerial Order No. 1/2014) and managing partner cash calls.",
        impact: "Audit queries from the Ministry of Mines and Hydrocarbons."
      }
    ],
    priorityWorkflows: [
      {
        title: "Gas Mega Hub Feed Allocation & Energy Balancing",
        description: "Reconciling component-level gas compositions, heating values, and plant shrinkage across multiple offshore gas fields.",
        solutionSlug: "africa-upstream-production-reporting"
      },
      {
        title: "Cryogenic Asset Integrity & Maintenance Tracking",
        description: "Tracking inspection logs, valve overhauls, and corrosion monitoring for the Punta Europa LNG liquefaction train.",
        solutionSlug: "mena-asset-integrity-hse-software"
      },
      {
        title: "Multi-Language Contractor Portals",
        description: "Standardized contractor submittals, progress billings, and local content compliance in Spanish and English.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Offshore gas fields (Alba, Alen, Aseng), Punta Europa industrial complex on Bioko Island (EG LNG, AMPCO methanol, Alba LPG), and Ceiba/Okume fields.",
      connectivity: "Reliable fiber connectivity in Malabo; high-speed maritime satellite (VSAT/LEO) to offshore production platforms.",
      dataGovernance: "Hydrocarbon Law No. 8/2006 and Ministry of Mines and Hydrocarbons data retention directives.",
      partnerEcosystem: "Ministry of Mines and Hydrocarbons, GEPetrol, SONAGAS, Marathon Oil, Chevron, and international service providers."
    },
    deploymentAndSovereignty: {
      legalMandate: "Hydrocarbon Law No. 8/2006 mandates that all petroleum exploration, production, and financial accounting records must be archived in Equatorial Guinea.",
      buyerPreference: "Domestic on-premise installation in Malabo operator data centers with secure edge links to Punta Europa.",
      recommendedArchitecture: "Private single-tenant deployment in operator data centers in Malabo with encrypted backup replications."
    },
    localContentProcurement: {
      statutoryFramework: "National Content Regulation (Ministerial Order No. 1/2014) mandating priority hiring of Equatorial Guinean nationals and local subcontracting.",
      technologyTransfer: "Spanish and English software documentation, national engineer training, and local technical capacity building.",
      citation: "Ministry of Mines and Hydrocarbons National Content Regulation (2023)."
    },
    solutions: [
      {
        title: "Africa Upstream Production Reporting",
        slug: "africa-upstream-production-reporting",
        annotation: "Gas Mega Hub allocation, energy balancing, and ministry reporting."
      },
      {
        title: "MENA Asset Integrity & HSE Software",
        slug: "mena-asset-integrity-hse-software",
        annotation: "Cryogenic inspection and turnaround management for Punta Europa."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "Spanish-English contractor submittals and local content tracking."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of Gas Mega Hub metering skids, gas chromatography links, and Punta Europa reporting standards.",
      pilot: "Deployment of feed gas allocation and energy balancing across the Alba and Alen systems with milestone-gated acceptance criteria.",
      integration: "Connecting with plant historians, gas chromatographs, and corporate SAP finance systems in Malabo.",
      rollout: "Expansion across all Punta Europa operating units with bilingual Spanish/English training.",
      ownership: "Perpetual enterprise software license with local technical empowerment."
    },
    proofContext: {
      relevantExperience: "Deview's engineers have delivered enterprise software for production reporting, AFE controls, and project governance from 2010 to 2020, reinforced by the EnerQuest digital oilfield pilot in West Africa.",
      boundaries: "Deview provides software engineering services. We do not claim local corporate registration in Malabo without local joint venture partnership."
    },
    buyingTeamChecklist: {
      operations: "Does the system calculate component-level gas allocations and energy balances in real time?",
      itSecurity: "Is the data platform hosted within Malabo in compliance with national law?",
      procurement: "Does the contract comply with Ministerial Order No. 1/2014 technology transfer guidelines?",
      executiveSponsor: "Does the software provide the Ministry with real-time visibility into Gas Mega Hub throughput and revenues?"
    },
    sources: [
      {
        title: "Ley de Hidrocarburos (Decreto-Ley Núm. 8/2006) y Decretos de Contenido Nacional",
        publisher: "Ministerio de Minas e Hidrocarburos (MMH), República de Guinea Ecuatorial",
        date: "2023",
        url: "https://www.guineaecuatorialpress.com/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Registro de Contratos de Participación en la Producción (PSC) y Operaciones Offshore",
        publisher: "GEPetrol (Guinea Ecuatorial de Petróleos)",
        date: "2024",
        url: "https://gepetrol-eg.com/contratos-petroleros/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Gas Mega Hub (GMH) Infrastructure & Regional Cross-Border Feedstock Agreements",
        publisher: "Sonagas G.E.",
        date: "2024",
        url: "https://sonagas.com/megahub/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "Does the software support Spanish language interfaces for Equatorial Guinean personnel?",
        a: "Yes. All operational screens, forms, reports, and documentation support complete Spanish localization, with seamless switching to English."
      },
      {
        q: "How does the system handle multi-field gas allocation for the Gas Mega Hub?",
        a: "Our gas allocation engine ingests heating values (BTU/scf) and gas composition from online chromatographs, allocating LNG, LPG, and condensate production back to individual offshore concessions."
      },
      {
        q: "Can the platform handle LNG tanker offloading documentation?",
        a: "Yes. Our marine custody transfer module records cryogenic loading temperatures, boil-off volumes, and laboratory quality assays, producing official bill of lading documentation."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule an Operations Reporting Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Upstream Requirements Workbook",
        href: "/en/resources/upstream-production-system-requirements"
      }
    }
  },

  "uganda": {
    slug: "uganda",
    assetId: "CP-25",
    keywordOwner: "Energy Practice SEO & Architecture Team",
    reviewedBy: "Deview Energy Architecture & Technical Review Committee",
    lastReviewed: "2026-10-27",
    nextReviewDate: "2027-04-27",
    name: "Uganda",
    tier: 3,
    regionSlug: "east-africa",
    title: "Uganda Upstream & Pipeline Software | Lake Albert & EACOP Controls",
    metaDescription: "Enterprise software for Lake Albert upstream development controls, EACOP pipeline construction tracking, and PAU national supplier monitoring in Uganda.",
    tagline: "Lake Albert upstream project controls, EACOP pipeline construction tracking, and PAU national supplier monitoring.",
    marketOpening: "The Republic of Uganda is actively advancing toward first oil from the Albertine Graben (Tilenga and Kingfisher upstream developments) alongside construction of the 1,443-kilometer East African Crude Oil Pipeline (EACOP) to the Tanzanian port of Tanga. Regulated by the Petroleum Authority of Uganda (PAU) and anchored by the Uganda National Oil Company (UNOC) alongside joint-venture operators (TotalEnergies, CNOOC), Ugandan upstream development demands enterprise software that unifies upstream capital project controls, linear pipeline construction progress, environmental corridor surveillance, and rigorous compliance with National Supplier Database (NSD) procurement regulations.",
    buyerProblems: [
      {
        role: "Capital Project Controls Lead (UNOC / JV Operator)",
        problem: "Managing simultaneous construction across hundreds of upstream well pads, central processing facilities (CPF), and linear pipeline construction spreads.",
        impact: "Schedule coordination challenges and delayed visibility into contractor progress variances."
      },
      {
        role: "National Content & Procurement Manager",
        problem: "Auditing compliance with PAU local content regulations and verifying contractor spend against the National Supplier Database (NSD).",
        impact: "Delays in vendor approval cycles and statutory penalties from the Petroleum Authority of Uganda."
      },
      {
        role: "Environmental & Pipeline Corridor Lead",
        problem: "Tracking environmental permits, water-table monitoring, and linear right-of-way reinstatement along sensitive Albertine wildlife corridors.",
        impact: "Social and environmental audit queries from international project financiers and government regulators."
      }
    ],
    priorityWorkflows: [
      {
        title: "Upstream Capital Controls & Facility Construction",
        description: "Integrating Primavera P6 schedules, contractor work breakdown structures, and civil/mechanical progress tracking for CPFs.",
        solutionSlug: "gcc-oil-gas-project-controls"
      },
      {
        title: "Linear Pipeline Construction & Weld Inspection",
        description: "Tracking pipe joint delivery, chainage coordinates, non-destructive welding inspections, and trench backfilling for EACOP.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      },
      {
        title: "National Content & Supplier Monitoring",
        description: "Automated verification of contractor registrations against the PAU National Supplier Database and Ugandan workforce quotas.",
        solutionSlug: "middle-east-oil-gas-contractor-portals"
      }
    ],
    operatingEnvironment: {
      assetContext: "Albertine Graben upstream developments (Tilenga operated by TotalEnergies, Kingfisher operated by CNOOC), two Central Processing Facilities (CPFs), and 1,443 km EACOP pipeline corridor.",
      connectivity: "Stable fiber in Kampala and Entebbe; developing cellular and private microwave networks across Lake Albert camps and pipeline waypoints.",
      dataGovernance: "Petroleum (Exploration, Development and Production) Act 2013 and Data Protection and Privacy Act 2019.",
      partnerEcosystem: "Petroleum Authority of Uganda (PAU), UNOC, TotalEnergies EP Uganda, CNOOC Uganda, and international EPC pipeline contractors."
    },
    deploymentAndSovereignty: {
      legalMandate: "Petroleum Act 2013 mandates that all upstream petroleum data, concession records, and operational logs must be retained within sovereign Ugandan territory.",
      buyerPreference: "On-premise deployment in UNOC/PAU data centers in Kampala or hosting in the certified National Data Centre.",
      recommendedArchitecture: "Private sovereign deployment inside the Uganda National Data Centre with encrypted offsite replication."
    },
    localContentProcurement: {
      statutoryFramework: "Petroleum (National Content) Regulations, 2016, administered by the PAU, prioritizing Ugandan citizens and registered local businesses.",
      technologyTransfer: "Structured training programs to train Ugandan engineers in digital petroleum data systems and project controls.",
      citation: "Petroleum Authority of Uganda (PAU) National Content Directives (2024)."
    },
    solutions: [
      {
        title: "GCC Oil & Gas Project Controls",
        slug: "gcc-oil-gas-project-controls",
        annotation: "Configured for Tilenga, Kingfisher, and EACOP megaproject execution packages."
      },
      {
        title: "Middle East Contractor Portals",
        slug: "middle-east-oil-gas-contractor-portals",
        annotation: "PAU National Supplier Database compliance tracking and contractor onboarding."
      },
      {
        title: "Africa Exploration Data Rooms",
        slug: "africa-exploration-data-rooms",
        annotation: "Subsurface and concession data governance aligned with PAU regulations."
      }
    ],
    deliveryApproach: {
      discovery: "Assessment of Lake Albert construction schedule models, linear pipeline GIS assets, and PAU national content reporting rules.",
      pilot: "Deployment of project controls and contractor submittal tracking across one construction package with milestone-gated acceptance criteria.",
      integration: "Connecting with Primavera P6 schedules, GIS mapping servers, and corporate SAP finance systems in Kampala.",
      rollout: "Expansion across all operating packages with comprehensive training for Ugandan engineers.",
      ownership: "Perpetual enterprise software license with local Ugandan technical capacity building."
    },
    proofContext: {
      relevantExperience: "Deview's team brings deep enterprise software experience (2010–2020) in project controls, upstream reporting, and remote operations, reinforced by our EnerQuest digital oilfield deployment in Africa.",
      boundaries: "Deview is a specialized software engineering firm. We do not claim local corporate registration in Kampala without local consortium representation."
    },
    buyingTeamChecklist: {
      operations: "Does the system support linear asset tracking for the EACOP pipeline transit corridor?",
      itSecurity: "Is the data platform hosted within the Uganda National Data Centre in compliance with national laws?",
      procurement: "Does the project include verifiable technology transfer for Ugandan technical staff?",
      executiveSponsor: "Does the platform provide UNOC and PAU leadership with real-time construction progress and national content spend?"
    },
    sources: [
      {
        title: "Petroleum (Exploration, Development and Production) National Content Regulations",
        publisher: "Petroleum Authority of Uganda (PAU)",
        date: "2023",
        url: "https://www.pau.go.ug/national-content/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Tilenga and Kingfisher Development Projects Upstream Engineering Overview",
        publisher: "Uganda National Oil Company (UNOC)",
        date: "2024",
        url: "https://www.unoc.co.ug/",
        retrievedAt: "2026-10-27",
      },
      {
        title: "Data Protection and Privacy Act, 2019 (Act 9 of 2019) Enforcement Guidelines",
        publisher: "Personal Data Protection Office (PDPO), Uganda",
        date: "2023",
        url: "https://www.pdpo.go.ug/legal-framework/",
        retrievedAt: "2026-10-27",
      },
    ],
    faqs: [
      {
        q: "How does Deview satisfy Ugandan data residency requirements?",
        a: "Our architectures support complete on-premise installation inside UNOC/PAU data centers or the certified National Data Centre in Kampala, designed to maintain complete data residency within sovereign national infrastructure."
      },
      {
        q: "Can the platform handle linear pipeline tracking for EACOP infrastructure?",
        a: "Yes. Our project controls architecture supports linear asset chainage, pipe joint tracking, and weld inspection logging across hundreds of kilometers of transit corridor."
      },
      {
        q: "How does the system interface with the PAU National Supplier Database (NSD)?",
        a: "Our contractor portal module verifies vendor registration numbers against the official PAU NSD register, blocking uncertified contractors from billing cycles."
      }
    ],
    ctas: {
      primary: {
        label: "Schedule a Programme Controls Review",
        href: "/en/contact"
      },
      secondary: {
        label: "Download Project Controls Checklist",
        href: "/en/resources/oil-gas-project-controls-jv-reporting-checklist"
      }
    }
  }
};

