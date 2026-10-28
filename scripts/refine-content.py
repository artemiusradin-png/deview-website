import re

def update_solutions():
    path = "lib/solutions/oil-gas-regional.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    replacements = [
        ("guaranteeing complete evidentiary integrity", "providing verifiable evidentiary integrity"),
        ("ensuring zero hallucinations in engineering workflows", "providing strict citation guardrails and uncertainty fallbacks in engineering workflows"),
        ("How does the system prevent AI hallucinations in critical engineering procedures?", "How does the system mitigate AI hallucinations in critical engineering procedures?"),
        ("guaranteeing confidentiality across non-affiliated blocks", "enforcing strict confidentiality across non-affiliated blocks"),
        ("Field SCADA and historian data are ingested across a unidirectional network diode, guaranteeing zero outbound write access into industrial control systems and complete operational safety.",
         "Field SCADA and historian data are ingested across a unidirectional network diode, physically preventing outbound write access into industrial control systems and supporting process safety compliance."),
        ("to guarantee data integrity, non-repudiation, and audit compliance before network sync.", "to verify data integrity, non-repudiation, and audit compliance before network sync."),
        ("Offline-first architectures guarantee business continuity and eliminate field downtime.", "Offline-first architectures provide continuous operational logging during telecommunication link degradation."),
        ("OSDU guarantees long-term format neutrality and analytical freedom.", "OSDU provides long-term format neutrality and analytical freedom.")
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"Replaced claim in {path}: '{old[:40]}...'")
        else:
            print(f"Warning: '{old[:40]}...' not found in {path}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def update_regions():
    path = "lib/oil-gas/regions.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Nuance claims
    content = content.replace(
        "guaranteeing that production records and proprietary data never egress national borders.",
        "designed to maintain production records and proprietary data strictly within sovereign national borders."
    )
    content = content.replace(
        "we provide production-hardened bidirectional and unidirectional connectors to SAP ECC / S/4HANA",
        "we provide standardized bidirectional and unidirectional connectors to SAP ECC / S/4HANA"
    )

    # Deep regional sources
    deep_sources = {
        "middle-east": [
            {
                "title": "ADNOC In-Country Value (ICV) Program Strategy & Supplier Portal",
                "organization": "Abu Dhabi National Oil Company (ADNOC)",
                "date": "2024",
                "url": "https://www.adnoc.ae/en/in-country-value",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "National Data Management and Personal Data Protection Standards (PDPL)",
                "organization": "Saudi Data & AI Authority (SDAIA)",
                "date": "2024",
                "url": "https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Essential Cybersecurity Controls (ECC-1:2018)",
                "organization": "National Cybersecurity Authority (NCA), Kingdom of Saudi Arabia",
                "date": "2018",
                "url": "https://nca.gov.sa/en/regulatory-documents/ecc",
                "retrievedAt": "2026-10-27"
            }
        ],
        "north-africa": [
            {
                "title": "Egypt Petroleum Sector Modernization Project: Programme 7 Digital Transformation",
                "organization": "Ministry of Petroleum and Mineral Resources, Arab Republic of Egypt",
                "date": "2023",
                "url": "https://www.petroleum.gov.eg/en/update-project/programs/Pages/program7.aspx",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Egypt Upstream Gateway (EUG) Exploration Portal",
                "organization": "Egyptian General Petroleum Corporation (EGPC)",
                "date": "2024",
                "url": "https://www.petroleum.gov.eg/en/investment/investment-chances/Pages/EUG.aspx",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "ALNAFT Hydrocarbon Exploration Regulatory Framework & Bidding Rules",
                "organization": "National Agency for the Valorization of Hydrocarbon Resources (ALNAFT), Algeria",
                "date": "2023",
                "url": "https://www.alnaft.dz/en/cadre-reglementaire",
                "retrievedAt": "2026-10-27"
            }
        ],
        "west-central-africa": [
            {
                "title": "Petroleum Industry Act (PIA) 2021 Regulatory Framework",
                "organization": "Nigeria Upstream Petroleum Regulatory Commission (NUPRC)",
                "date": "2021",
                "url": "https://www.nuprc.gov.ng/petroleum-industry-act-2021/",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Nigerian Oil and Gas Industry Content Development Act 2010 Statutory Framework",
                "organization": "Nigerian Content Development and Monitoring Board (NCDMB)",
                "date": "2010",
                "url": "https://ncdmb.gov.ng/acts/",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Petroleum Commission (Local Content and Local Participation) Regulations, 2013 (L.I. 2204)",
                "organization": "Petroleum Commission of Ghana",
                "date": "2013",
                "url": "https://www.petrocom.gov.gh/regulations/",
                "retrievedAt": "2026-10-27"
            }
        ],
        "east-africa": [
            {
                "title": "Petroleum Upstream Regulatory Authority (PURA) Local Content Guidelines",
                "organization": "Petroleum Upstream Regulatory Authority (PURA), United Republic of Tanzania",
                "date": "2023",
                "url": "https://www.pura.go.tz/",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Petroleum Authority of Uganda (PAU) Lake Albert & EACOP Regulatory Portal",
                "organization": "Petroleum Authority of Uganda (PAU)",
                "date": "2024",
                "url": "https://www.pau.go.ug/",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Tanzania Petroleum Development Corporation (TPDC) Strategic Natural Gas Projects",
                "organization": "Tanzania Petroleum Development Corporation (TPDC)",
                "date": "2024",
                "url": "https://www.tpdc.co.tz/",
                "retrievedAt": "2026-10-27"
            }
        ],
        "southern-africa": [
            {
                "title": "Presidential Decree No. 271/20 on the Legal Framework for Local Content in Petroleum Sector",
                "organization": "National Agency of Petroleum, Gas and Biofuels (ANPG), Republic of Angola",
                "date": "2020",
                "url": "https://anpg.co.ao/legislacao/",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "National Upstream Petroleum Local Content Policy (Final Draft)",
                "organization": "Ministry of Mines and Energy, Republic of Namibia",
                "date": "2025",
                "url": "https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf",
                "retrievedAt": "2026-10-27"
            },
            {
                "title": "Instituto Nacional de Petróleo (INP) Exploration and Production Licensing Framework",
                "organization": "Instituto Nacional de Petróleo (INP), Republic of Mozambique",
                "date": "2024",
                "url": "https://www.inp.gov.mz/en/Exploration-Production",
                "retrievedAt": "2026-10-27"
            }
        ]
    }

    # Format sources in regions.ts
    for reg_slug, src_list in deep_sources.items():
        src_code_entries = []
        for s in src_list:
            src_code_entries.append(f"""        {{
          title: "{s['title']}",
          organization: "{s['organization']}",
          date: "{s['date']}",
          url: "{s['url']}"
        }}""")
        new_sources_block = "sources: [\n" + ",\n".join(src_code_entries) + "\n      ]"
        
        # Replace the sources block for this region
        pattern = re.compile(rf'"{reg_slug}":\s*\{{.*?sources:\s*\[(.*?)\]', re.DOTALL)
        # Find exact position
        match = re.search(rf'"{reg_slug}":\s*\{{', content)
        if match:
            start_pos = match.start()
            src_match = re.search(r'sources:\s*\[(.*?)\]', content[start_pos:], re.DOTALL)
            if src_match:
                full_old = src_match.group(0)
                content = content[:start_pos + src_match.start()] + new_sources_block + content[start_pos + src_match.end():]
                print(f"Updated deep sources for regional hub: {reg_slug}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

update_solutions()
update_regions()

