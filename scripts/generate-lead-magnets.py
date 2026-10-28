import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

OUT_DIR = os.path.abspath("public/downloads/resources")
os.makedirs(OUT_DIR, exist_ok=True)

FONT_FAMILY = "Segoe UI"
header_font = Font(name=FONT_FAMILY, size=11, bold=True, color="FFFFFF")
header_fill = PatternFill(start_color="12100E", end_color="12100E", fill_type="solid")
accent_fill = PatternFill(start_color="FF3B00", end_color="FF3B00", fill_type="solid")
section_fill = PatternFill(start_color="F4EFE6", end_color="F4EFE6", fill_type="solid")
section_font = Font(name=FONT_FAMILY, size=11, bold=True, color="12100E")
regular_font = Font(name=FONT_FAMILY, size=10, color="12100E")
thin_border = Border(
    left=Side(style='thin', color="DED5C5"),
    right=Side(style='thin', color="DED5C5"),
    top=Side(style='thin', color="DED5C5"),
    bottom=Side(style='thin', color="DED5C5")
)

def create_workbook(filename, title, subtitle, sections):
    wb = openpyxl.Workbook()
    ws_info = wb.active
    ws_info.title = "Overview & Instructions"
    ws_info.views.sheetView[0].showGridLines = True

    # Title & Metadata
    ws_info["B2"] = title
    ws_info["B2"].font = Font(name=FONT_FAMILY, size=16, bold=True, color="12100E")
    ws_info["B3"] = subtitle
    ws_info["B3"].font = Font(name=FONT_FAMILY, size=11, italic=True, color="555047")
    
    ws_info["B5"] = "Publisher:"
    ws_info["C5"] = "Deview Applied Energy Systems Practice"
    ws_info["B6"] = "Release Version:"
    ws_info["C6"] = "2026.1 Enterprise Release"
    ws_info["B7"] = "Framework Document:"
    ws_info["C7"] = filename
    for row in range(5, 8):
        ws_info[f"B{row}"].font = Font(name=FONT_FAMILY, size=10, bold=True, color="726B5F")
        ws_info[f"C{row}"].font = Font(name=FONT_FAMILY, size=10, color="12100E")

    ws_info["B9"] = "How to Use This Specification & Evaluation Workbook:"
    ws_info["B9"].font = Font(name=FONT_FAMILY, size=12, bold=True, color="FF3B00")
    
    instructions = [
        "1. Open the 'Requirements & Scoring Matrix' tab to evaluate internal capability gaps or vendor RFP proposals.",
        "2. Review each requirement statement categorized by functional operational domain.",
        "3. Assign an Operator Priority level: 'Must Have' (M), 'Should Have' (S), or 'Nice to Have' (N).",
        "4. Score vendor responses: 5 = Full Out-of-the-Box, 3 = Configurable Extension, 1 = Custom Development Required, 0 = Non-Compliant.",
        "5. Document integration evidence, network diode boundaries, and sovereign residency proofs in the Notes column.",
        "6. Summary statistics and weighted scoring calculate automatically in the summary rows."
    ]
    for idx, inst in enumerate(instructions):
        ws_info[f"B{11 + idx}"] = inst
        ws_info[f"B{11 + idx}"].font = Font(name=FONT_FAMILY, size=10, color="12100E")

    ws_info.column_dimensions["A"].width = 4
    ws_info.column_dimensions["B"].width = 30
    ws_info.column_dimensions["C"].width = 65

    # Requirements Sheet
    ws = wb.create_sheet(title="Requirements & Scoring")
    ws.views.sheetView[0].showGridLines = True

    headers = [
        "Req ID",
        "Functional Domain",
        "Requirement Specification Statement",
        "Priority",
        "Internal Score (0-5)",
        "Vendor Compliance",
        "Audit & Technical Evidence Notes"
    ]
    for col_idx, h in enumerate(headers, 1):
        cell = ws.cell(row=2, column=col_idx, value=h)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    ws.row_dimensions[2].height = 28

    current_row = 3
    req_counter = 1

    for s_idx, sec in enumerate(sections, 1):
        # Section header
        ws.merge_cells(start_row=current_row, start_column=1, end_row=current_row, end_column=len(headers))
        s_cell = ws.cell(row=current_row, column=1, value=f"DOMAIN {s_idx:02d}: {sec['title'].upper()}")
        s_cell.font = section_font
        s_cell.fill = section_fill
        s_cell.alignment = Alignment(horizontal="left", vertical="center", indent=1)
        for col in range(1, len(headers) + 1):
            ws.cell(row=current_row, column=col).border = thin_border
        ws.row_dimensions[current_row].height = 22
        current_row += 1

        for item in sec['items']:
            req_id = f"REQ-{req_counter:03d}"
            ws.cell(row=current_row, column=1, value=req_id).alignment = Alignment(horizontal="center", vertical="top")
            ws.cell(row=current_row, column=2, value=sec['title']).alignment = Alignment(horizontal="left", vertical="top")
            ws.cell(row=current_row, column=3, value=item).alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
            ws.cell(row=current_row, column=4, value="Must Have").alignment = Alignment(horizontal="center", vertical="top")
            ws.cell(row=current_row, column=5, value=5).alignment = Alignment(horizontal="center", vertical="top")
            ws.cell(row=current_row, column=6, value="Compliant").alignment = Alignment(horizontal="center", vertical="top")
            ws.cell(row=current_row, column=7, value="Verified against technical architecture boundary").alignment = Alignment(horizontal="left", vertical="top")

            for col in range(1, len(headers) + 1):
                c = ws.cell(row=current_row, column=col)
                c.font = regular_font
                c.border = thin_border
            ws.row_dimensions[current_row].height = 42
            req_counter += 1
            current_row += 1

    # Column widths
    ws.column_dimensions["A"].width = 12
    ws.column_dimensions["B"].width = 24
    ws.column_dimensions["C"].width = 68
    ws.column_dimensions["D"].width = 14
    ws.column_dimensions["E"].width = 18
    ws.column_dimensions["F"].width = 18
    ws.column_dimensions["G"].width = 40

    out_path = os.path.join(OUT_DIR, filename)
    wb.save(out_path)
    print(f"Generated: {out_path} ({req_counter - 1} requirements)")

# 1. Upstream Production Requirements
create_workbook(
    "Deview_Upstream_Production_Requirements_v2026.xlsx",
    "Upstream Production Management System Requirements Workbook",
    "Technical RFP specification and verification framework for daily production reporting, back-allocation, well testing, and SCADA historians.",
    [
        {
            "title": "Asset & Wellbore Master Data",
            "items": [
                "Hierarchy must model concessions, fields, platforms, wells, completion strings, test separators, and custody transfer points.",
                "Attributes must be effective-dated to preserve historical calculation integrity across completion and lift mechanism changes.",
                "System must maintain synchronized external identifiers with plant historians, subsurface OSDU models, and ERP financial cost centers.",
                "Changes to well operational status (flowing, shut-in, testing, suspended) require multi-role supervisor sign-off.",
                "Master data service must support multi-zone completions with independent choke and artificial lift configurations."
            ]
        },
        {
            "title": "Data Acquisition & Unidirectional Telemetry",
            "items": [
                "Ingestion of flow computers, wellhead pressure, temperature, and tank levels through optical unidirectional network diodes.",
                "Native sensor timestamp and OPC quality flag preservation without lossy downsampling.",
                "Automated gap detection with configurable backfilling, forward fill, or physical freeze-value identification.",
                "Strict zero-return write-path guarantee ensuring isolation of Level 1/2 safety instrumented systems.",
                "Local edge store-and-forward buffering preserving telemetry during VSAT or field link outages."
            ]
        },
        {
            "title": "Well Testing & Hydrocarbon Back-Allocation",
            "items": [
                "Automated validation of test separator runs: duration stability, fluid rate limits, water cut bounds, and GOR stability.",
                "Generation of well inflow performance curves and decline trends based on verified separator test records.",
                "Back-allocation of custody transfer fiscal volumes to individual producing completions using validated allocation algorithms.",
                "Reconciliation views showing theoretical vs allocated volumes with shrinkage factor adjustments.",
                "Support for component back-allocation of gas, condensate, natural gas liquids, and water cuts."
            ]
        },
        {
            "title": "Loss Accounting & Deferment Tracking",
            "items": [
                "Categorization of deferments: surface mechanical, subsurface failure, power loss, pipeline shutdown, planned turnaround.",
                "Calculated production losses measured against dynamic well potential rather than static historic averages.",
                "Direct bidirectional linking of deferment entries to computerized maintenance management system (CMMS) work orders.",
                "Immutable audit trail capturing modifications to root-cause assignments, downtime events, and lost volume calculations.",
                "Automated Pareto analysis of deferment root causes for operational review meetings."
            ]
        },
        {
            "title": "Approval Workflows & Restatement Governance",
            "items": [
                "Multi-tier approval workflow: field operator entry, production engineer review, asset manager locking.",
                "Automated cutoff and locking of daily records at midnight local time with permission-scoped unlocking.",
                "Retroactive restatements require documented engineering change justification and retain full historical prior version.",
                "Side-by-side audit view comparing original production reports against partner-audited restatements.",
                "Cryptographic signature stamps affixed to authorized daily and monthly production logs."
            ]
        },
        {
            "title": "Regulatory Filings & Sovereign Data Residency",
            "items": [
                "Automated compilation of statutory daily, monthly, and annual production filings formatted for national regulators.",
                "Deployment capability within certified domestic sovereign cloud VPCs or on-premise private Kubernetes environments.",
                "Encrypted local database storage adhering to national cybersecurity standards (e.g. UAE DESC, Saudi NCA ECC-1).",
                "Role-based access controls enforcing strict partner commercial confidentiality across shared facilities and JVs.",
                "Export control tagging ensuring geological and reservoir models remain within sovereign jurisdiction."
            ]
        }
    ]
)

# 2. Project Controls & JV Reporting
create_workbook(
    "Deview_Project_Controls_JV_Checklist_v2026.xlsx",
    "Oil & Gas Capital Project Controls and JV Reporting Checklist",
    "Comprehensive evaluation matrix for mega-project scheduling, contractor progress verification, AFE tracking, and Joint Interest Billing (JIB).",
    [
        {
            "title": "Work Breakdown Structure & Enterprise Ledgers",
            "items": [
                "Primavera P6 WBS mapped directly to SAP/Oracle ERP cost centers and general ledger accounts.",
                "Approved baseline budgets and schedules locked with cryptographic timestamps and change-order tracking.",
                "Concession equity share modeling supporting multi-tier participating interest percentages and effective-dated partner shares.",
                "Hierarchical portfolio rollup across offshore facilities, subsea tiebacks, export pipelines, and onshore terminals.",
                "Multi-currency budget tracking supporting statutory national currency and international contract currencies with FX revaluation."
            ]
        },
        {
            "title": "Contractor Submittals & Progress Verification",
            "items": [
                "Isolated contractor web portal for daily reporting of physical craft labor, equipment hours, and material delivery.",
                "Progress claims validated against pre-agreed rules of credit and engineering deliverable verification.",
                "Automated generation of draft Service Entry Sheets (SES) reconciled with physical progress before ERP posting.",
                "Secure upload of inspection records, NDT test certificates, and drone survey imagery directly to work packages.",
                "Automated dispute flagging when contractor invoice percentages deviate from verified field milestone completion."
            ]
        },
        {
            "title": "Earned Value Management & Predictive Analytics",
            "items": [
                "Automated computation of Planned Value (PV), Earned Value (EV), and Actual Cost (AC) across all WBS levels.",
                "Real-time tracking of Cost Performance Index (CPI) and Schedule Performance Index (SPI) without manual spreadsheet calculation.",
                "Estimate at Completion (EAC) forecasting using historical productivity index trends and risk-weighted simulations.",
                "Executive milestone variance dashboards tracking critical-path schedule float and portfolio cash burn rates.",
                "Early warning alerts triggered by negative productivity variances or critical path slippage."
            ]
        },
        {
            "title": "AFE Governance & JV Cash Call Reconciliation",
            "items": [
                "Multi-tier Authorization for Expenditure (AFE) drafting, internal approval routing, and partner ballot governance.",
                "Automated monthly joint venture cash call generation with multi-currency reconciliation and advances management.",
                "Joint Interest Billing (JIB) drilldown enabling non-operating partners to inspect underlying contractor submittals.",
                "Real-time budget exhaustion alerts triggered when commitments plus actuals exceed 80% and 100% of approved AFE ceilings.",
                "Comprehensive audit trail for joint venture audit defense and partner exception resolution."
            ]
        },
        {
            "title": "In-Country Value (ICV) & Local Content Auditing",
            "items": [
                "Tracking contractor workforce nationalization percentages against contractually agreed quotas.",
                "Auditing domestic procurement invoices and local subcontracting spend against statutory thresholds.",
                "Automated generation of statutory local content compliance reports (UAE ICV, Saudi IKTVA, Nigeria NOGICD, Angola Angolanização).",
                "Vendor qualification registry monitoring safety accreditations, commercial trade licenses, and statutory tax certificates.",
                "Subcontractor tier-2 spend traceability to ensure true local economic retention."
            ]
        }
    ]
)

# 3. IT/OT Architecture & Industrial Security
create_workbook(
    "Deview_IT_OT_Security_Architecture_Checklist_v2026.xlsx",
    "Oil & Gas IT/OT Architecture & Industrial Security Checklist",
    "Architectural evaluation matrix for IEC 62443 network segmentation, unidirectional data diodes, and secure historian streaming.",
    [
        {
            "title": "IEC 62443 Network Segmentation & IDMZ",
            "items": [
                "Industrial Demilitarized Zone (IDMZ / Level 3.5) established between Level 3 OT supervisory control and Level 4 Enterprise IT.",
                "Enterprise applications cannot initiate inbound connections that penetrate Level 2/3 control systems.",
                "Unidirectional data diode or protocol-enforced gateway proxy deployed for all telemetry extraction.",
                "Prohibition of dual-homed server nodes bridging OT and IT networks in firewall policy and network topology.",
                "Independent multi-factor authentication (MFA) required for jump hosts accessing the OT management boundary."
            ]
        },
        {
            "title": "Unidirectional Data Diode Governance",
            "items": [
                "Physical hardware diode enforces optical transmission where return electrical path is physically absent.",
                "Message brokers (MQTT Sparkplug B, Apache Kafka) operate in publish-only mode with zero inbound listening ports on OT controllers.",
                "Enterprise queries execute solely against mirrored read-replicas residing within enterprise security boundaries.",
                "Hardware and firmware guarantees that control commands or setpoint adjustments cannot traverse from enterprise to control loops.",
                "Automated health and heartbeat monitoring on the diode receiving proxy to detect link saturation or dropped packets."
            ]
        },
        {
            "title": "Edge Buffering & Communication Resilience",
            "items": [
                "Industrial edge gateways buffer time-series sensor data locally during telecommunications or VSAT link outages.",
                "Edge storage engine preserves native sensor microsecond timestamps, sequence numbers, and OPC DA/UA quality flags.",
                "Priority-queued burst synchronization upon reconnection: emergency alarms transmit before historical bulk telemetry.",
                "Edge appliance storage encrypted at rest using AES-256 with hardware TPM 2.0 cryptographic key management.",
                "Automated edge firmware lifecycle management with rollback protection and cryptographic integrity verification."
            ]
        },
        {
            "title": "Identity, Access & Cryptographic Provenance",
            "items": [
                "Mutual TLS (mTLS) with pinned X.509 certificates enforced across all edge-to-hub and cloud communication channels.",
                "Manual field measurements and lab assays cryptographically signed with operator smart cards or private keys.",
                "Role-based access control (RBAC) synchronized with corporate identity providers via SAML 2.0 / OIDC.",
                "Immutable, tamper-evident audit logs capturing administrative actions, configuration changes, and report unlocking.",
                "Continuous security telemetry export to enterprise Security Operations Center (SOC) via Syslog / SIEM integration."
            ]
        }
    ]
)

# 4. OSDU Readiness Assessment
create_workbook(
    "Deview_OSDU_Readiness_Diagnostic_v2026.xlsx",
    "OSDU Exploration & Subsurface Data Platform Migration Diagnostic",
    "Technical readiness evaluation matrix for subsurface master data, seismic archives, spatial geodesy, and sovereign OSDU cloud ingestion.",
    [
        {
            "title": "Subsurface Master Data & Taxonomy",
            "items": [
                "Unique national well identifiers and wellbore registries standardized across all exploration and production systems.",
                "Digital well log curves catalogued with standard mnemonics, verified depth units, and run headers.",
                "Core sample registries, fluid PVT assays, and petrophysical laboratory measurements digitized with source metadata.",
                "Concession boundary and block polygon master data maintained with legal gazette coordinate decrees.",
                "Automated deduplication and entity resolution identifying redundant well names across legacy databases."
            ]
        },
        {
            "title": "Seismic Tape Archives & Digitization Quality",
            "items": [
                "Physical seismic magnetic tape archives (9-track, 3480, 3590, LTO) catalogued with physical degradation condition scores.",
                "Prioritized transcription schedule aligned with concession bid rounds and exploration acreage valuation.",
                "Transcription verification verifying that digital SEG-Y data matches original physical tape headers bit-for-bit.",
                "Scanned paper seismic sections and observer logs indexed with OCR and embedded coordinate metadata.",
                "Trace header verification confirming source/receiver coordinates and elevation datum consistency."
            ]
        },
        {
            "title": "Spatial Geodesy & Coordinate Integrity",
            "items": [
                "All survey coordinates mapped to authoritative EPSG geodetic parameter dataset reference numbers.",
                "Historical datum shifts and coordinate conversion algorithms codified in reproducible transformation pipelines.",
                "Mathematical reconciliation of surface wellheads, directional survey trajectories, and bottom-hole targets.",
                "Spatial polygon validation preventing self-intersecting survey boundaries on GIS base mapping platforms.",
                "Audit logs tracking coordinate system adjustments and geodetic parameter overrides."
            ]
        },
        {
            "title": "Entitlements & Sovereign Data Hosting",
            "items": [
                "Data access rights tied to concession contracts, partner equity shares, confidentiality periods, and relinquishment dates.",
                "Dynamic watermarking applied to virtual data room (VDR) documents during farm-in licensing rounds.",
                "Deployment architecture aligned with national data sovereignty laws requiring domestic storage of raw subsurface assets.",
                "Role-based entitlement service enforcing OSDU data access controls down to seismic trace and log curve levels.",
                "Air-gapped and hybrid deployment capabilities supporting sovereign private data centers alongside certified domestic cloud VPCs."
            ]
        }
    ]
)

print("All 4 workbooks successfully generated!")

