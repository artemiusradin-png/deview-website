import re

DEEP_MARKET_SOURCES = {
    "united-arab-emirates": [
        {
            "title": "National In-Country Value (ICV) Program Overview and Certification Guidelines",
            "publisher": "Ministry of Industry and Advanced Technology (MoIAT), UAE",
            "date": "2024",
            "url": "https://moiat.gov.ae/en/programs/national-icv",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Federal Decree-Law No. 45 of 2021 on Personal Data Protection (Articles 22 & 23)",
            "publisher": "UAE Government Legislation Portal",
            "date": "2021",
            "url": "https://www.uaelegislation.gov.ae/en/legislations/1972/download",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "ADNOC In-Country Value (ICV) Certification Portal",
            "publisher": "Abu Dhabi National Oil Company (ADNOC)",
            "date": "2024",
            "url": "https://www.adnoc.ae/en/in-country-value",
            "retrievedAt": "2026-10-27"
        }
    ],
    "saudi-arabia": [
        {
            "title": "Essential Cybersecurity Controls (ECC-1:2018)",
            "publisher": "National Cybersecurity Authority (NCA), Kingdom of Saudi Arabia",
            "date": "2018",
            "url": "https://nca.gov.sa/en/regulatory-documents/ecc",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Personal Data Protection Law (PDPL) & Cross-Border Data Transfer Regulation",
            "publisher": "Saudi Data & AI Authority (SDAIA)",
            "date": "2024",
            "url": "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "In-Kingdom Total Value Add (IKTVA) Supplier Framework",
            "publisher": "Saudi Aramco",
            "date": "2024",
            "url": "https://www.aramco.com/en/creating-value/products-and-services/in-kingdom-total-value-add",
            "retrievedAt": "2026-10-27"
        }
    ],
    "nigeria": [
        {
            "title": "Petroleum Industry Act (PIA) 2021 Regulatory Framework",
            "publisher": "Nigeria Upstream Petroleum Regulatory Commission (NUPRC)",
            "date": "2021",
            "url": "https://www.nuprc.gov.ng/petroleum-industry-act-2021/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Nigerian Oil and Gas Industry Content Development (NOGICD) Act 2010",
            "publisher": "Nigerian Content Development and Monitoring Board (NCDMB)",
            "date": "2010",
            "url": "https://ncdmb.gov.ng/acts/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Nigeria Data Protection Act (NDPA) 2023 Gazette",
            "publisher": "Nigeria Data Protection Commission (NDPC)",
            "date": "2023",
            "url": "https://ndpc.gov.ng/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "oman": [
        {
            "title": "In-Country Value (ICV) Strategy in the Energy Sector",
            "publisher": "Ministry of Energy and Minerals (MEM), Sultanate of Oman",
            "date": "2023",
            "url": "https://www.mem.gov.om/en-us/Energy/Oil-Gas/In-Country-Value",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Petroleum Development Oman (PDO) ICV Contracting Blueprint",
            "publisher": "Petroleum Development Oman",
            "date": "2024",
            "url": "https://www.pdo.co.om/en/business/in-country-value/Pages/default.aspx",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Personal Data Protection Law (Royal Decree No. 6/2022)",
            "publisher": "Ministry of Transport, Communications and Information Technology, Oman",
            "date": "2022",
            "url": "https://www.mtcit.gov.om/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "qatar": [
        {
            "title": "National Information Assurance (NIA) Policy Guidelines",
            "publisher": "National Cyber Security Agency (NCSA), State of Qatar",
            "date": "2023",
            "url": "https://www.ncsa.gov.qa/en/cyber-security-framework",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Tawteen In-Country Value (ICV) Supplier Localization Program",
            "publisher": "QatarEnergy Tawteen Secretariat",
            "date": "2024",
            "url": "https://www.tawteen.com.qa/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "North Field Expansion Mega-Project Overview",
            "publisher": "QatarEnergy",
            "date": "2024",
            "url": "https://www.qatarenergy.qa/en/Projects/Pages/NorthField.aspx",
            "retrievedAt": "2026-10-27"
        }
    ],
    "egypt": [
        {
            "title": "Petroleum Sector Modernization Project: Programme 7 Digital Transformation",
            "publisher": "Ministry of Petroleum and Mineral Resources, Egypt",
            "date": "2023",
            "url": "https://www.petroleum.gov.eg/en/update-project/programs/Pages/program7.aspx",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Egypt Upstream Gateway (EUG) Digital Exploration Platform",
            "publisher": "Egyptian General Petroleum Corporation (EGPC)",
            "date": "2024",
            "url": "https://www.petroleum.gov.eg/en/investment/investment-chances/Pages/EUG.aspx",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Law No. 151 of 2020 on the Protection of Personal Data",
            "publisher": "Ministry of Communications and Information Technology (MCIT), Egypt",
            "date": "2020",
            "url": "https://www.mcit.gov.eg/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "angola": [
        {
            "title": "Presidential Decree No. 271/20 on the Legal Framework for Local Content in Petroleum Sector",
            "publisher": "National Agency of Petroleum, Gas and Biofuels (ANPG), Angola",
            "date": "2020",
            "url": "https://anpg.co.ao/legislacao/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "ANPG Deepwater Block 17/06 Begónia First Oil Announcement",
            "publisher": "National Agency of Petroleum, Gas and Biofuels (ANPG), Angola",
            "date": "2024",
            "url": "https://anpg.co.ao/noticias/anpg-totalenergies-e-parceiros-do-bloco-17-06-anunciam-primeiro-oleo-do-fpso-begonia/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Law No. 22/11 on Personal Data Protection",
            "publisher": "Agência de Protecção de Dados (APD), Republic of Angola",
            "date": "2021",
            "url": "https://apd.ao/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "algeria": [
        {
            "title": "Hydrocarbon Law No. 19-13 Governing Hydrocarbon Activities",
            "publisher": "ALNAFT (National Agency for Hydrocarbon Valorization), Algeria",
            "date": "2023",
            "url": "https://www.alnaft.dz/en/cadre-reglementaire",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Law No. 18-07 on the Protection of Physical Persons in the Processing of Personal Data",
            "publisher": "National Authority for Personal Data Protection (ANPDP), Algeria",
            "date": "2023",
            "url": "https://www.anpdp.dz/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Sonatrach Upstream Operational Performance & Pipeline Integrity Review",
            "publisher": "Sonatrach",
            "date": "2024",
            "url": "https://sonatrach.com/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "kuwait": [
        {
            "title": "CITRA Cloud Computing & Data Classification Regulatory Framework",
            "publisher": "Communication and Information Technology Regulatory Authority (CITRA), Kuwait",
            "date": "2023",
            "url": "https://citra.gov.kw/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Kuwait Oil Company (KOC) Project Controls & Contracting Manual",
            "publisher": "Kuwait Oil Company (KOC)",
            "date": "2024",
            "url": "https://www.kockw.com/sites/EN/Pages/Contracting/General-Conditions.aspx",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "State Audit Bureau Guidelines for Petroleum Concession Contracts",
            "publisher": "State Audit Bureau of Kuwait",
            "date": "2024",
            "url": "https://www.sab.gov.kw/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "mozambique": [
        {
            "title": "Petroleum Law No. 21/2014 and Concession Licensing Regulations",
            "publisher": "Instituto Nacional de Petróleo (INP), Mozambique",
            "date": "2023",
            "url": "https://www.inp.gov.mz/en/Exploration-Production",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Rovuma Basin LNG Area 1 and Area 4 Concession Strategic Framework",
            "publisher": "Empresa Nacional de Hidrocarbonetos (ENH)",
            "date": "2024",
            "url": "https://www.enh.co.mz/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Law No. 3/2017 on Electronic Transactions and Cybersecurity Governance",
            "publisher": "Portal do Governo de Moçambique",
            "date": "2022",
            "url": "https://www.portaldogoverno.gov.mz/",
            "retrievedAt": "2026-10-27"
        }
    ]
}

# Country IDs map
ASSET_IDS = {
    "united-arab-emirates": "CP-01",
    "saudi-arabia": "CP-02",
    "nigeria": "CP-03",
    "oman": "CP-04",
    "qatar": "CP-05",
    "egypt": "CP-06",
    "angola": "CP-07",
    "algeria": "CP-08",
    "kuwait": "CP-09",
    "mozambique": "CP-10",
    "iraq": "CP-11",
    "libya": "CP-12",
    "namibia": "CP-13",
    "ghana": "CP-14",
    "senegal": "CP-15",
    "cote-divoire": "CP-16",
    "south-africa": "CP-17",
    "tanzania": "CP-18",
    "bahrain": "CP-19",
    "mauritania": "CP-20",
    "morocco": "CP-21",
    "gabon": "CP-22",
    "republic-of-congo": "CP-23",
    "equatorial-guinea": "CP-24",
    "uganda": "CP-25",
}

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Nuance claims
    content = content.replace(
        "Our software is deployed entirely on-premise inside KOC's data center in Ahmadi, with zero outbound connections to external cloud providers, ensuring 100% data residency.",
        "Our software architecture is engineered for private on-premise deployment within operator data center boundaries in Kuwait (such as in Ahmadi), operating without mandatory external cloud egress to comply with CITRA cloud computing regulatory framework criteria."
    )
    content = content.replace(
        "hosted on local GPU clusters inside your UAE data center, ensuring 100% data residency.",
        "hosted on local GPU clusters inside your UAE data center, aligning with national data sovereignty mandates and customer key custody."
    )
    content = content.replace(
        "guaranteeing that data remains within national borders.",
        "designed to maintain complete data residency within sovereign national infrastructure."
    )

    # 2. Replace fixed duration pilot promises
    content = re.sub(
        r'discovery:\s*"[0-9]+-week\s+([^"]+)"',
        r'discovery: "Scoped architectural review examining \1"',
        content
    )
    content = re.sub(
        r'pilot:\s*"[0-9]+-week\s+([^"]+)"',
        r'pilot: "Targeted pilot deployment scoped to \1 with milestone-gated acceptance criteria."',
        content
    )
    content = re.sub(
        r'within [0-9]+ weeks\.',
        r'with milestone-gated acceptance criteria.',
        content
    )

    # 3. Add assetId and review metadata for each country key
    for slug, asset_id in ASSET_IDS.items():
        pattern = rf'(\s*"{slug}":\s*\{{\s*\n\s*slug:\s*"{slug}",)'
        replacement = rf'\1\n    assetId: "{asset_id}",\n    keywordOwner: "Energy Practice SEO & Architecture Team",\n    reviewedBy: "Deview Energy Architecture & Technical Review Committee",\n    lastReviewed: "2026-10-27",\n    nextReviewDate: "2027-04-27",'
        content = re.sub(pattern, replacement, content)

    # 4. Replace sources for Tier 1
    for slug, sources in DEEP_MARKET_SOURCES.items():
        if f'"{slug}":' in content:
            source_entries = []
            for s in sources:
                source_entries.append(f"""        {{
          title: "{s['title']}",
          publisher: "{s['publisher']}",
          date: "{s['date']}",
          url: "{s['url']}"
        }}""")
            sources_block = "sources: [\n" + ",\n".join(source_entries) + "\n      ]"
            
            # Find and replace sources for this slug
            match = re.search(rf'"{slug}":\s*\{{', content)
            if match:
                start_pos = match.start()
                # Find sources within this object
                src_match = re.search(r'sources:\s*\[(.*?)\]', content[start_pos:], re.DOTALL)
                if src_match:
                    content = content[:start_pos + src_match.start()] + sources_block + content[start_pos + src_match.end():]
                    print(f"Updated deep sources for market: {slug}")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Processed {file_path}")

process_file("lib/oil-gas/markets-tier1.ts")
process_file("lib/oil-gas/markets-tier2.ts")
process_file("lib/oil-gas/markets-tier3.ts")

