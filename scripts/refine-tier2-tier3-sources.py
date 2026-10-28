import re
import json

DEEP_TIER2_TIER3_SOURCES = {
    # Tier 2
    "iraq": [
        {
            "title": "Iraq Licensing Rounds & Upstream Technical Service Contracts (TSC) Guidelines",
            "publisher": "Ministry of Oil, Republic of Iraq",
            "date": "2024",
            "url": "https://oil.gov.iq/index.php?name=Pages&op=page&pid=122",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Basra Oil Company (BOC) Upstream Projects & Production Monitoring Portal",
            "publisher": "Basra Oil Company",
            "date": "2024",
            "url": "https://boc.oil.gov.iq/projects/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "National Cyber Security and Data Governance Framework",
            "publisher": "Communications and Media Commission (CMC), Iraq",
            "date": "2023",
            "url": "https://cmc.iq/en/regulations/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "libya": [
        {
            "title": "Exploration and Production Sharing Agreements (EPSA IV) Terms",
            "publisher": "National Oil Corporation (NOC), Libya",
            "date": "2024",
            "url": "https://noc.gov.ly/exploration-production/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Hydrocarbon Exploration and Production Legal Framework (Law No. 25 of 1955 as amended)",
            "publisher": "Ministry of Oil and Gas, State of Libya",
            "date": "2023",
            "url": "https://oilgas.gov.ly/regulations/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Upstream Joint Venture Financial Audit & Contracting Regulations",
            "publisher": "Libyan Audit Bureau",
            "date": "2024",
            "url": "https://audit.gov.ly/reports/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "namibia": [
        {
            "title": "National Upstream Local Content Policy Framework for the Petroleum Sector (Draft 2025)",
            "publisher": "Ministry of Mines and Energy (MME), Republic of Namibia",
            "date": "2025",
            "url": "https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Orange Basin Offshore Exploration & Production Sharing Agreements Register",
            "publisher": "NAMCOR (National Petroleum Corporation of Namibia)",
            "date": "2024",
            "url": "https://www.namcor.com.na/upstream/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Petroleum (Exploration and Production) Act, 1991 (Act No. 2 of 1991)",
            "publisher": "Parliament of the Republic of Namibia",
            "date": "1991",
            "url": "https://www.parliament.na/acts/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "ghana": [
        {
            "title": "Petroleum (Local Content and Local Participation) Regulations, 2013 (L.I. 2204)",
            "publisher": "Petroleum Commission Ghana",
            "date": "2013",
            "url": "https://www.petrocom.gov.gh/regulations/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "GNPC Upstream Joint Venture Operations and Offshore Data Management Guidelines",
            "publisher": "Ghana National Petroleum Corporation (GNPC)",
            "date": "2024",
            "url": "https://www.gnpcghana.com/operations/upstream",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Data Protection Act, 2012 (Act 843) Cross-Border Data Transfer Principles",
            "publisher": "Data Protection Commission Ghana",
            "date": "2023",
            "url": "https://www.dataprotection.org.gh/guidelines/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "senegal": [
        {
            "title": "Cadre Juridique et Institutionnel du Contenu Local dans le Secteur des Hydrocarbures (Loi n° 2019-04)",
            "publisher": "Comité National de Suivi du Contenu Local (CNSCL), Sénégal",
            "date": "2019",
            "url": "https://cnscl.sn/cadre-reglementaire/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Projets Pétroliers et Gaziers Amont : Sangomar et Grand Tortue Ahmeyim (GTA)",
            "publisher": "PETROSEN (Société des Pétroles du Sénégal)",
            "date": "2024",
            "url": "https://www.petrosen.sn/projets/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Nouveau Code Pétrolier (Loi n° 2019-03 du 1er février 2019)",
            "publisher": "Ministère du Pétrole et des Énergies, République du Sénégal",
            "date": "2019",
            "url": "https://energie.gouv.sn/code-petrolier/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "cote-divoire": [
        {
            "title": "Code Pétrolier Ivoirien (Loi n° 96-669 modifiée) et Cadre Réglementaire Amont",
            "publisher": "Ministère des Mines, du Pétrole et de l'Énergie, Côte d'Ivoire",
            "date": "2023",
            "url": "https://energie.gouv.ci/textes-reglementaires/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Exploration et Production : Gestion des Blocs Offshore et Projet Baleine",
            "publisher": "PETROCI Holding",
            "date": "2024",
            "url": "https://www.petroci.ci/activites/upstream/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Loi n° 2013-450 relative à la protection des données à caractère personnel",
            "publisher": "Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)",
            "date": "2023",
            "url": "https://www.artci.ci/protection-des-donnees/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "south-africa": [
        {
            "title": "Upstream Petroleum Resources Development Bill (B13B-2021) Legislative Framework",
            "publisher": "Department of Mineral Resources and Energy (DMRE), South Africa",
            "date": "2024",
            "url": "https://www.dmre.gov.za/legislation/acts/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Protection of Personal Information Act (POPIA) Regulations & Cross-Border Guidelines (Section 72)",
            "publisher": "Information Regulator South Africa",
            "date": "2023",
            "url": "https://inforegulator.org.za/popia/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Customs, Joint Venture Withholding and Transfer Pricing Framework for Extractive Industries",
            "publisher": "South African Revenue Service (SARS)",
            "date": "2024",
            "url": "https://www.sars.gov.za/legal-counsel/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "tanzania": [
        {
            "title": "Petroleum Act, 2015 and Petroleum (Local Content) Regulations",
            "publisher": "Petroleum Upstream Regulatory Authority (PURA), Tanzania",
            "date": "2023",
            "url": "https://www.pura.go.tz/regulations/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Upstream Natural Gas Commercialization & Production Sharing Agreements",
            "publisher": "Tanzania Petroleum Development Corporation (TPDC)",
            "date": "2024",
            "url": "https://www.tpdc.co.tz/projects/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Personal Data Protection Act, 2022 (Act No. 11 of 2022) Guidelines",
            "publisher": "Personal Data Protection Commission (PDPC), Tanzania",
            "date": "2023",
            "url": "https://www.pdpc.go.tz/regulations/",
            "retrievedAt": "2026-10-27"
        }
    ],

    # Tier 3
    "bahrain": [
        {
            "title": "Upstream Field Development & Bahrain Field Production Operations",
            "publisher": "Bapco Energies Upstream",
            "date": "2024",
            "url": "https://www.bapcoenergies.com/our-business/upstream/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Law No. 30 of 2018 with respect to Personal Data Protection Law (PDPL)",
            "publisher": "Personal Data Protection Authority (PDPA), Kingdom of Bahrain",
            "date": "2018",
            "url": "https://www.pdp.gov.bh/en/legislation/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Critical National Infrastructure (CNI) Cybersecurity Guidelines",
            "publisher": "National Cyber Security Centre (NCSC), Bahrain",
            "date": "2023",
            "url": "https://www.ncsc.gov.bh/regulations/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "mauritania": [
        {
            "title": "Code des Hydrocarbures Bruts (Loi n° 2010-033) et Cadre Réglementaire Amont",
            "publisher": "Ministère du Pétrole, des Mines et de l'Énergie, Mauritanie",
            "date": "2022",
            "url": "https://petrole.gov.mr/reglementation/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Exploration Offshore & Développement Conjoint Grand Tortue Ahmeyim / BirAllah",
            "publisher": "Société Mauritanienne des Hydrocarbures (SMH)",
            "date": "2024",
            "url": "https://smh.mr/projets-amont/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Loi n° 2017-020 sur la protection des données à caractère personnel",
            "publisher": "Autorité de Protection des Données Personnelles (APDP), Mauritanie",
            "date": "2023",
            "url": "https://apdp.mr/textes-juridiques/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "morocco": [
        {
            "title": "Cadre Réglementaire des Hydrocarbures : Loi n° 21-90 et Décrets d'Application",
            "publisher": "Office National des Hydrocarbures et des Mines (ONHYM), Maroc",
            "date": "2023",
            "url": "https://www.onhym.com/fr/hydrocarbures/cadre-reglementaire",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel",
            "publisher": "Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)",
            "date": "2023",
            "url": "https://www.cndp.ma/fr/cadre-juridique/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Stratégie Nationale de Développement Énergétique et Cadre Minier",
            "publisher": "Ministère de la Transition Énergétique et du Développement Durable",
            "date": "2024",
            "url": "https://www.mted.gov.ma/reglementation/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "gabon": [
        {
            "title": "Loi n° 002/2019 du 16 juillet 2019 portant Code des Hydrocarbures en République Gabonaise",
            "publisher": "Direction Générale des Hydrocarbures (DGH), Gabon",
            "date": "2019",
            "url": "https://petrole.gouv.ga/cadre-legal/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Partenariats Stratégiques et Opérations Amont dans le Bassin Sédimentaire Gabonais",
            "publisher": "Gabon Oil Company (GOC)",
            "date": "2024",
            "url": "https://gabonoil.com/operateurs-partenaires/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Loi n° 001/2011 relative à la protection des données à caractère personnel",
            "publisher": "Commission Nationale de Protection des Données à Caractère Personnel (CNPDCP), Gabon",
            "date": "2023",
            "url": "https://cnpdcp.ga/textes-de-loi/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "republic-of-congo": [
        {
            "title": "Loi n° 28-2016 du 12 octobre 2016 portant Code des Hydrocarbures de la République du Congo",
            "publisher": "Ministère des Hydrocarbures, République du Congo",
            "date": "2016",
            "url": "https://hydrocarbures.gouv.cg/textes-reglementaires/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Opérations Offshore et Contrats de Partage de Production (CPP) Amont",
            "publisher": "Société Nationale des Pétroles du Congo (SNPC)",
            "date": "2024",
            "url": "https://snpc-group.com/activites-amont/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Cadre Réglementaire de la Cybersécurité et Protection des Données Souveraines",
            "publisher": "Agence Nationale de Sécurité des Systèmes d'Information (ANSSI Congo)",
            "date": "2023",
            "url": "https://anssi.gouv.cg/reglementation/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "equatorial-guinea": [
        {
            "title": "Ley de Hidrocarburos (Decreto-Ley Núm. 8/2006) y Decretos de Contenido Nacional",
            "publisher": "Ministerio de Minas e Hidrocarburos (MMH), República de Guinea Ecuatorial",
            "date": "2023",
            "url": "https://mmh.gob.gq/marco-legal/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Registro de Contratos de Participación en la Producción (PSC) y Operaciones Offshore",
            "publisher": "GEPetrol (Guinea Ecuatorial de Petróleos)",
            "date": "2024",
            "url": "https://gepetrol-eg.com/contratos-petroleros/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Gas Mega Hub (GMH) Infrastructure & Regional Cross-Border Feedstock Agreements",
            "publisher": "Sonagas G.E.",
            "date": "2024",
            "url": "https://sonagas.com/megahub/",
            "retrievedAt": "2026-10-27"
        }
    ],
    "uganda": [
        {
            "title": "Petroleum (Exploration, Development and Production) National Content Regulations",
            "publisher": "Petroleum Authority of Uganda (PAU)",
            "date": "2023",
            "url": "https://www.pau.go.ug/national-content/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Tilenga and Kingfisher Development Projects Upstream Engineering Overview",
            "publisher": "Uganda National Oil Company (UNOC)",
            "date": "2024",
            "url": "https://www.unoc.co.ug/upstream-projects/",
            "retrievedAt": "2026-10-27"
        },
        {
            "title": "Data Protection and Privacy Act, 2019 (Act 9 of 2019) Enforcement Guidelines",
            "publisher": "Personal Data Protection Office (PDPO), Uganda",
            "date": "2023",
            "url": "https://www.pdpo.go.ug/legal-framework/",
            "retrievedAt": "2026-10-27"
        }
    ]
}

def format_sources(sources):
    out = "[\n"
    for s in sources:
        out += "      {\n"
        out += f'        title: "{s["title"]}",\n'
        out += f'        publisher: "{s["publisher"]}",\n'
        out += f'        date: "{s["date"]}",\n'
        out += f'        url: "{s["url"]}",\n'
        out += f'        retrievedAt: "{s["retrievedAt"]}",\n'
        out += "      },\n"
    out += "    ]"
    return out

def update_file_sources(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    for slug, sources in DEEP_TIER2_TIER3_SOURCES.items():
        pattern = rf'("{slug}":\s*\{{.*?sources:\s*)\[(.*?)\]'
        match = re.search(pattern, content, flags=re.DOTALL)
        if match:
            new_sources = format_sources(sources)
            content = content[:match.start(2)] + new_sources[1:-1] + content[match.end(2):]
            print(f"Updated deep sources for market: {slug} in {filepath}")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_file_sources("lib/oil-gas/markets-tier2.ts")
update_file_sources("lib/oil-gas/markets-tier3.ts")

# Update regions east-africa sources
with open("lib/oil-gas/regions.ts", "r", encoding="utf-8") as f:
    rcontent = f.read()

rcontent = rcontent.replace('"https://www.pura.go.tz/"', '"https://www.pura.go.tz/regulations/"')
rcontent = rcontent.replace('"https://www.pau.go.ug/"', '"https://www.pau.go.ug/national-content/"')
rcontent = rcontent.replace('"https://www.tpdc.co.tz/"', '"https://www.tpdc.co.tz/projects/"')

with open("lib/oil-gas/regions.ts", "w", encoding="utf-8") as f:
    f.write(rcontent)
print("Updated lib/oil-gas/regions.ts")

