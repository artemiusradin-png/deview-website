# Product Requirements Document: Oil & Gas Africa and Middle East SEO Growth Programme

| Field | Value |
|---|---|
| Document status | Draft for stakeholder approval |
| Version | 1.0 |
| Date | 27 October 2026 |
| Product owner | Deview leadership / growth owner |
| Delivery horizon | Six months for the English programme; localization begins only after its validation gate |
| Primary market | B2B enterprise software and AI services for oil and gas |
| Geographic scope | 25 markets across the Middle East and Africa |
| Primary deliverable | 50 original English assets mapped to 100 candidate keyword phrases |
| Later workstream | 29 proposed Arabic, French, and Portuguese localized URLs |
| Production implementation | Out of scope for this PRD |

## 1. Executive summary

Deview will expand its existing oil-and-gas search presence into a geographically structured demand-generation programme for the Middle East and Africa. The programme will not create a separate, disconnected SEO silo. It will extend the current oil-and-gas architecture by connecting the existing commercial hub, historical proof hub, country and regional market pages, technical solution pages, authority content, and downloadable buying tools.

The initial English programme contains exactly 50 indexable assets:

- 5 regional hubs;
- 25 country market pages;
- 10 regional or cross-market solution pages;
- 6 technical authority articles; and
- 4 lead-magnet landing pages.

The programme maps 100 candidate English queries to those assets. “Candidate” is deliberate: keyword volume, difficulty, current position, click potential, and commercial value have not yet been validated in Google Search Console or a third-party keyword tool. The keyword list is an execution hypothesis, not a forecast or ranking promise.

Country pages must never be template-swapped doorway pages. Each one must contain a market-specific operating context, buyer problem, solution emphasis, procurement or local-content consideration, deployment constraint, relevant source evidence, and a truthful connection to Deview’s existing capability and project record. Any page that cannot meet that standard will not be published as a standalone URL.

The programme prioritizes ten Tier 1 markets: United Arab Emirates, Saudi Arabia, Nigeria, Oman, Qatar, Egypt, Angola, Algeria, Kuwait, and Mozambique. Eight Tier 2 markets and seven Tier 3 markets follow after evidence and keyword validation. Arabic, French, and Portuguese localization is a gated second workstream, not automatic translation of all English pages.

## 2. Background and current state

### 2.1 Existing Deview architecture

The live site already has two distinct oil-and-gas destinations with different jobs:

1. `/en/industries/oil-and-gas` is the historical proof and industry-context hub. It presents the EnerQuest pilot and six historical planning, control, engineering-data, and reporting projects from 2010–2020.
2. `/en/solutions/oil-and-gas-software` is the global commercial hub. It explains Deview’s current oil-and-gas software capabilities and links into detailed solution pages.

The historical proof hub already owns dynamic routes under `/en/industries/oil-and-gas/[slug]`. Geographic expansion must therefore use explicit route namespaces:

- regional hubs: `/en/industries/oil-and-gas/regions/<slug>`;
- country pages: `/en/industries/oil-and-gas/markets/<slug>`.

This prevents country or region slugs from colliding with current or future historical case-study slugs.

### 2.2 Existing proof boundaries

The programme may use the following evidence when relevant:

- the EnerQuest upstream production-management pilot;
- six historical oil-and-gas projects dated 2010–2020;
- demonstrated subject areas including project controls, planning, engineering data, production reporting, analytics, joint-venture context, private infrastructure, and one-way operational-data patterns;
- Deview’s current enterprise-platform, data-engineering, AI, integration, cloud, and security capabilities.

The programme must not imply a local office, local legal entity, regulator approval, current client relationship, delivery in a country, or measured project outcome unless evidence for that exact statement is available and approved. Historical project descriptions must preserve the factual limitations already documented in the repository.

### 2.3 Market signal

Official-sector sources show that the target regions are not one homogeneous market. Examples include sovereign hosting and AI-enabled drilling operations in the UAE, integrated petroleum-sector digital transformation in Egypt, local-content policy development in Namibia, and continued offshore production development in Angola. These signals justify market-specific content, but they do not by themselves prove buyer demand for Deview or keyword volume.

## 3. Problem statement

Deview has credible oil-and-gas capability and proof, but the current architecture is primarily global and capability-led. It does not yet create enough search entry points for buyers who describe their need through a combination of:

- country or region;
- operational workflow;
- deployment or sovereignty constraint;
- procurement stage; and
- system category.

A buyer searching for “sovereign industrial AI for GCC energy,” “production reporting software Nigeria,” or “OSDU readiness assessment” should reach a page written for that intent. Today, those needs are either addressed only semantically on broader pages or are not represented by a dedicated destination.

The product problem is therefore: **how can Deview build broad geographic search coverage without producing low-value doorway pages, diluting existing authority, or making claims that exceed its evidence?**

## 4. Product thesis

The programme will win through depth and connected proof rather than through country-name substitution.

The information path is:

```text
Global commercial hub
    -> regional market hub
        -> country page
            -> relevant technical solution page
                -> proof / authority article / lead magnet
                    -> qualified conversation
```

Each layer has one primary job:

| Layer | Primary job | Must not become |
|---|---|---|
| Global commercial hub | Define Deview’s complete oil-and-gas offer | A list of country links with no commercial narrative |
| Historical proof hub | Establish factual project experience | A generic services page |
| Regional hub | Explain shared operating and buying context | A duplicate of country pages |
| Country page | Connect local operating context to a relevant solution set | A doorway page with only the country name changed |
| Solution page | Demonstrate technical and delivery competence | An unsupported claim of proprietary product capability |
| Authority article | Answer a complex research-stage question | A sales page disguised as an article |
| Lead magnet | Help a buyer structure a real decision or procurement task | A thin PDF gate with no standalone value |

## 5. Objectives

### 5.1 Business objectives

1. Generate qualified organic discovery from oil-and-gas decision makers in the 25 target markets.
2. Turn informational demand into identifiable commercial intent through technically useful pages, requirements tools, and clear consultation pathways.
3. Make Deview’s oil-and-gas proof easier to discover and evaluate without overstating it.
4. Establish a repeatable market-entry content system that can be localized only where English performance or direct commercial evidence justifies the investment.
5. Produce enough query and conversion data to decide which countries, problems, and languages deserve continued investment.

### 5.2 User objectives

1. Understand whether Deview can address the buyer’s specific workflow and deployment environment.
2. See how Deview separates business analytics from operational control systems.
3. Compare build, extend, and buy options without being forced into a sales call.
4. Find relevant proof, architecture considerations, standards, and implementation questions in one journey.
5. Obtain a practical requirements or assessment tool that helps the internal buying team align.

### 5.3 SEO objectives

1. Establish distinct, non-cannibalizing URL ownership for regional, country, solution, informational, and procurement intent.
2. Earn non-brand impressions and clicks in target-country search results.
3. Increase topical authority around upstream operations, project controls, data platforms, industrial AI, and secure deployment.
4. Create a measurable internal-link graph from market demand to commercial pages and proof.
5. Build a localization-ready architecture with correct canonical and hreflang behavior.

## 6. Non-goals

The first programme does not:

- promise rankings, traffic, enquiries, revenue, or a delivery date for any ranking outcome;
- create 25 near-identical country pages;
- claim Deview is locally incorporated, locally staffed, prequalified, certified, regulator-approved, or already delivering in a market unless verified;
- replace the global commercial hub or historical proof hub;
- publish translated pages before native review and demand validation;
- build a product marketplace, partner directory, or tender database;
- target consumer energy queries, commodity prices, jobs, investor relations, or general industry news;
- create pages for countries where the team cannot produce sufficient unique and useful content;
- implement the pages, analytics, lead forms, or downloads as part of this PRD task.

## 7. Target users and buying committee

### 7.1 Primary personas

| Persona | Primary need | Search behavior | Proof required | Preferred conversion |
|---|---|---|---|---|
| Upstream operations director | Reliable production visibility, exception handling, and management reporting | Searches by production system, reporting workflow, country, or asset type | Operating workflow, integration boundary, pilot approach | Architecture or workflow workshop |
| Digital / IT director | A maintainable platform that fits enterprise architecture and security constraints | Searches for custom development, digital transformation, integration, private AI, or local hosting | Architecture, ownership, deployment, security, support model | Technical discovery call |
| Project controls manager | One governed plan, actuals, contractor reporting, and JV visibility | Searches for project controls, AFE, JV reporting, contractor portals, P6/SAP integration | Data model, approval flow, integration approach, historical controls work | Requirements review |
| Subsurface / data manager | Governed access to well, seismic, document, and interpretation data | Searches for OSDU, exploration data rooms, NDR, data catalogues, or RAG | Standards, lineage, permissions, metadata, migration approach | Data-readiness assessment |
| HSE / asset-integrity leader | Traceable inspection, incident, permit, and asset workflows | Searches for asset integrity, inspection, HSE, permit-to-work, emissions reporting | Auditability, offline field use, asset hierarchy, integration | Workflow-mapping call |
| Procurement / local-content lead | A defensible scope, compliant vendor evaluation, and supplier-development path | Searches for requirements, RFP, checklist, local-content, vendor comparison | Explicit deliverables, ownership, transfer, local partner and training model | Download then procurement scoping call |
| NOC / JV executive sponsor | Portfolio-level visibility, national data control, and partner alignment | Searches for sovereign data, NOC platforms, JV reporting, industrial AI | Governance, residency, access separation, change control, executive outcomes | Executive briefing |
| EPC / service-company leader | Contractor coordination, reporting efficiency, and customer-facing visibility | Searches for portals, reporting automation, project controls, field apps | Multi-party access, workflow, integrations, deployment speed | Use-case workshop |

### 7.2 Buying-committee reality

No page should assume one person can buy the system. Content must support at least four concurrent evaluations:

- operational fit;
- technical and security fit;
- procurement and commercial fit; and
- organizational adoption and ownership.

Every commercial page must therefore include a concise “What each team needs to validate” section covering operations, IT/security, procurement, and the executive sponsor.

## 8. Scope and release model

### 8.1 English launch scope

| Asset type | Count | Purpose |
|---|---:|---|
| Regional hubs | 5 | Organize shared market context and distribute authority |
| Country market pages | 25 | Capture country-led commercial intent with unique relevance |
| Regional solution pages | 10 | Capture workflow-led commercial intent across markets |
| Authority articles | 6 | Build technical trust and answer research-stage questions |
| Lead-magnet landing pages | 4 | Capture procurement-stage intent and qualified leads |
| **Total** | **50** | |

### 8.2 Market priority tiers

| Tier | Markets | Release principle |
|---|---|---|
| Tier 1 | UAE, Saudi Arabia, Nigeria, Oman, Qatar, Egypt, Angola, Algeria, Kuwait, Mozambique | Research and publish first; highest commercial and content depth requirement |
| Tier 2 | Iraq, Libya, Namibia, Ghana, Senegal, Côte d’Ivoire, South Africa, Tanzania | Publish after Tier 1 patterns and evidence review; prioritize clear workflow fit |
| Tier 3 | Bahrain, Mauritania, Morocco, Gabon, Republic of Congo, Equatorial Guinea, Uganda | Publish only after keyword and evidence gate; combine into regional hubs if standalone value is weak |

Tier indicates sequencing, not a claim about market size or guaranteed opportunity.

## 9. Information architecture and URL rules

### 9.1 Route ownership

| Intent | Owner route pattern | Example |
|---|---|---|
| Global commercial | `/en/solutions/oil-and-gas-software` | Existing page |
| Historical proof | `/en/industries/oil-and-gas` | Existing page |
| Historical case | `/en/industries/oil-and-gas/<case-slug>` | Existing dynamic route |
| Region | `/en/industries/oil-and-gas/regions/<region>` | `/en/industries/oil-and-gas/regions/west-central-africa` |
| Country | `/en/industries/oil-and-gas/markets/<country>` | `/en/industries/oil-and-gas/markets/nigeria` |
| Technical solution | `/en/solutions/<solution-slug>` | `/en/solutions/africa-upstream-production-reporting` |
| Authority article | `/en/insights/<article-slug>` | `/en/insights/oil-gas-it-ot-data-platform-architecture` |
| Lead magnet | `/en/resources/<resource-slug>` | `/en/resources/upstream-production-system-requirements` |

### 9.2 URL constraints

1. Routes use lowercase ASCII and hyphens.
2. Country slugs use common English country names; `united-arab-emirates`, `cote-divoire`, `republic-of-congo`, and `equatorial-guinea` are canonical.
3. No country or region may be placed directly under the existing dynamic case-study namespace.
4. A route must not include a year unless the content is inherently annual and maintained as such.
5. English is self-canonical. Localized equivalents must self-canonicalize and use reciprocal hreflang links.
6. Query parameters used for campaign or form state must never become indexable canonical variants.

## 10. Complete 50-asset inventory

### 10.1 Regional hubs — 5 assets

| ID | Route | Page objective | Primary CTA | Wave |
|---|---|---|---|---|
| RH-01 | `/en/industries/oil-and-gas/regions/middle-east` | Connect sovereignty, NOC/JV, drilling, production, and contractor-platform needs across the GCC and Iraq | Discuss a regional operating-system use case | 1 |
| RH-02 | `/en/industries/oil-and-gas/regions/north-africa` | Connect national data, mature-field, offshore, reporting, and bilingual procurement needs across Egypt, Algeria, Libya, Mauritania, and Morocco | Map a data or operations workflow | 1 |
| RH-03 | `/en/industries/oil-and-gas/regions/west-central-africa` | Address production reporting, local content, partner operations, and supplier ecosystems from Nigeria to the Gulf of Guinea | Review a field-to-management workflow | 1 |
| RH-04 | `/en/industries/oil-and-gas/regions/east-africa` | Address emerging upstream, pipeline, LNG, field mobility, and institutional data needs in Tanzania and Uganda | Assess programme requirements | 3 |
| RH-05 | `/en/industries/oil-and-gas/regions/southern-africa` | Address offshore production, LNG megaprojects, exploration data, remote operations, and asset integrity in Angola, Mozambique, Namibia, and South Africa | Plan a phased digital platform | 1 |

### 10.2 Country market pages — 25 assets

| ID | Tier | Country / route | Required unique angle | Priority solution | Language signal | Primary CTA | Wave |
|---|---:|---|---|---|---|---|---:|
| CP-01 | 1 | UAE — `/markets/united-arab-emirates` | Sovereign hosting, large-scale drilling/field operations, controlled industrial AI | Sovereign industrial AI and project controls | English + Arabic | Sovereign architecture workshop | 1 |
| CP-02 | 1 | Saudi Arabia — `/markets/saudi-arabia` | NOC-scale digital transformation, private AI, portfolio governance | Private AI and enterprise data platforms | Arabic + English | Private AI discovery | 1 |
| CP-03 | 1 | Nigeria — `/markets/nigeria` | Production visibility, local-content supplier ecosystem, brownfield operations | Production reporting and supplier portals | English | Production workflow review | 1 |
| CP-04 | 1 | Oman — `/markets/oman` | Operator/JV workflows, production operations, partner and cost visibility | JV/AFE and production management | Arabic + English | JV workflow mapping | 1 |
| CP-05 | 1 | Qatar — `/markets/qatar` | LNG-scale operations, contractor reporting, secure enterprise integration | LNG operations and contractor portals | Arabic + English | LNG reporting workshop | 1 |
| CP-06 | 1 | Egypt — `/markets/egypt` | National upstream data, brownfields, unified sector data, Arabic/English users | Upstream data platforms and production reporting | Arabic + English | Data-platform assessment | 1 |
| CP-07 | 1 | Angola — `/markets/angola` | Offshore production, partner reporting, Portuguese operating context | Production and JV reporting | Portuguese + English | Offshore reporting workshop | 1 |
| CP-08 | 1 | Algeria — `/markets/algeria` | Mature assets, asset integrity, NOC/partner data, multilingual procurement | Asset integrity and production data | Arabic + French + English | Asset-data assessment | 1 |
| CP-09 | 1 | Kuwait — `/markets/kuwait` | Capital projects, contractor controls, secure deployment | Project controls and contractor reporting | Arabic + English | Controls requirements review | 1 |
| CP-10 | 1 | Mozambique — `/markets/mozambique` | LNG programme coordination, contractor reporting, remote connectivity | LNG project controls and offline field workflows | Portuguese + English | LNG programme workshop | 1 |
| CP-11 | 2 | Iraq — `/markets/iraq` | Field production reporting, constrained connectivity, multi-party operations | Offline production reporting | Arabic + English | Field-reporting assessment | 2 |
| CP-12 | 2 | Libya — `/markets/libya` | Distributed assets, production restatement, resilient/offline operations | Production reporting and edge synchronization | Arabic + English | Resilient workflow review | 2 |
| CP-13 | 2 | Namibia — `/markets/namibia` | Exploration-stage data, local-content readiness, offshore collaboration | Exploration data rooms and OSDU readiness | English | Exploration-data assessment | 2 |
| CP-14 | 2 | Ghana — `/markets/ghana` | Offshore partner reporting, local suppliers, regulated operator ecosystem | Supplier portal and JV reporting | English | Partner/supplier workflow review | 2 |
| CP-15 | 2 | Senegal — `/markets/senegal` | New offshore production, partner governance, French/English coordination | Offshore production and JV reporting | French + English | First-production reporting review | 2 |
| CP-16 | 2 | Côte d’Ivoire — `/markets/cote-divoire` | Offshore project execution, contractor controls, bilingual delivery | Offshore project controls | French + English | Project-controls assessment | 2 |
| CP-17 | 2 | South Africa — `/markets/south-africa` | Refining/industrial asset integrity, enterprise integration, emissions | Asset integrity and emissions data | English | Integrity-data workshop | 2 |
| CP-18 | 2 | Tanzania — `/markets/tanzania` | LNG/project development, pipeline and multi-stakeholder reporting | LNG project management and data rooms | English + Swahili context; English page first | Programme requirements review | 2 |
| CP-19 | 3 | Bahrain — `/markets/bahrain` | Refining/industrial operations and compact national ecosystem | Asset integrity and industrial data | Arabic + English | Integrity workflow review | 3 |
| CP-20 | 3 | Mauritania — `/markets/mauritania` | Offshore gas, cross-border/partner reporting, multilingual teams | Offshore gas project controls | Arabic + French + English | Partner-reporting workshop | 3 |
| CP-21 | 3 | Morocco — `/markets/morocco` | Exploration/energy data and bilingual procurement | Exploration data platform | Arabic + French + English | Data-readiness review | 3 |
| CP-22 | 3 | Gabon — `/markets/gabon` | Mature production, field reporting, French-speaking operations | Production reporting | French + English | Production-data review | 3 |
| CP-23 | 3 | Republic of Congo — `/markets/republic-of-congo` | JV and partner reporting across producing assets | JV/AFE reporting | French + English | JV requirements review | 3 |
| CP-24 | 3 | Equatorial Guinea — `/markets/equatorial-guinea` | Gas/LNG operations and multi-language contractor context | LNG operations reporting | Spanish + French + English; English page first | Operations reporting review | 3 |
| CP-25 | 3 | Uganda — `/markets/uganda` | Development and pipeline programme controls, local suppliers | Project controls and supplier reporting | English | Programme-controls review | 3 |

Route prefixes in this table are shorthand for `/en/industries/oil-and-gas/markets/`.

### 10.3 Regional and cross-market solution pages — 10 assets

| ID | Route | Core buyer problem | Required proof/technical depth | Primary CTA | Wave |
|---|---|---|---|---|---:|
| SP-01 | `/en/solutions/gcc-oil-gas-project-controls` | Plans, actuals, contractors, and management reporting are fragmented across capital programmes | P6/SAP integration patterns, controls data model, approvals, portfolio reporting | Project-controls requirements review | 1 |
| SP-02 | `/en/solutions/middle-east-oil-gas-contractor-portals` | Operator and contractor records arrive through files, email, and inconsistent templates | Multi-party roles, submission/approval workflow, audit, integration, residency | Contractor workflow workshop | 1 |
| SP-03 | `/en/solutions/sovereign-industrial-ai-gcc-energy` | Sensitive operating and engineering data cannot leave an approved jurisdiction or environment | On-premise/sovereign VPC patterns, model boundary, RAG citations, human review | Sovereign AI architecture workshop | 1 |
| SP-04 | `/en/solutions/africa-oil-gas-jv-afe-management` | AFEs, cash calls, partner approvals, and venture reporting lack one governed record | Venture/asset permissions, approval chain, versioning, ERP interface | JV/AFE process review | 1 |
| SP-05 | `/en/solutions/africa-upstream-production-reporting` | Daily volumes, tests, allocation, deferment, and restatements are slow or inconsistent | Production data model, quality flags, approvals, one-way historian interface | Production workflow assessment | 1 |
| SP-06 | `/en/solutions/offline-oilfield-operations-software` | Remote teams lose continuity when field connectivity is intermittent | Offline-first state, conflict resolution, edge buffering, sync audit | Offline workflow design session | 2 |
| SP-07 | `/en/solutions/africa-exploration-data-rooms` | Exploration information is difficult to catalogue, permission, evaluate, and share | Metadata, entitlements, document/well/seismic context, OSDU/NDR interfaces | Exploration-data assessment | 2 |
| SP-08 | `/en/solutions/mena-asset-integrity-hse-software` | Inspection, incidents, permits, and asset history sit in disconnected tools | Asset hierarchy, mobile inspection, audit, risk/exception workflow | Integrity workflow workshop | 2 |
| SP-09 | `/en/solutions/osdu-data-platform-national-oil-companies` | NOCs need governed subsurface access without locking all workflows into one vendor | OSDU boundaries, ingestion, entitlements, lineage, coexistence, migration | OSDU readiness assessment | 2 |
| SP-10 | `/en/solutions/mena-africa-methane-emissions-reporting` | Measurement, evidence, calculation, review, and disclosure are disconnected | Source lineage, factor/version control, review, audit, export boundaries | Emissions-data workshop | 2 |

### 10.4 Authority articles — 6 assets

| ID | Route | Research question answered | Required format | Commercial bridge | Wave |
|---|---|---|---|---|---:|
| AR-01 | `/en/insights/gcc-oil-gas-ai-data-residency` | How should an energy company design AI when data must remain in an approved environment or jurisdiction? | Decision framework with deployment patterns and control checklist | SP-03 + private LLM service | 1 |
| AR-02 | `/en/insights/oil-gas-it-ot-data-platform-architecture` | How can business platforms consume operational data without creating a write path to control? | Reference architecture, trust boundaries, standards, failure modes | SP-05 + global hub | 1 |
| AR-03 | `/en/insights/production-reporting-intermittent-connectivity` | What must production reporting do when remote connectivity is unreliable? | Offline/sync state model, conflict examples, operational checklist | SP-06 + SP-05 | 2 |
| AR-04 | `/en/insights/digital-systems-operators-nocs-joint-ventures` | How do platform requirements differ among operators, NOCs, and JVs? | Comparative operating-model matrix | SP-04 + SP-09 | 2 |
| AR-05 | `/en/insights/africa-oil-gas-local-content-technology-procurement` | How should a software programme plan for local content, knowledge transfer, and supplier participation? | Procurement framework with country-source caveats | regional hubs + LM-02 | 2 |
| AR-06 | `/en/insights/custom-vs-packaged-upstream-software` | When should a buyer buy, extend, or build an upstream system? | Decision tree, total-cost categories, integration and ownership criteria | global hub + LM-01 | 1 |

### 10.5 Lead-magnet landing pages — 4 assets

| ID | Route | Deliverable | Intended buyer stage | Form strategy | Follow-up CTA | Wave |
|---|---|---|---|---|---|---:|
| LM-01 | `/en/resources/upstream-production-system-requirements` | Editable requirements workbook for daily reporting, well tests, allocation, deferment, surveillance, security, and integration | Problem definition / shortlist | Ungated HTML summary; email required for editable file | Review the completed requirements | 1 |
| LM-02 | `/en/resources/oil-gas-project-controls-jv-reporting-checklist` | Checklist for project controls, contractor reporting, AFE, cash calls, partner approvals, and audit | Discovery / procurement | Ungated checklist; email required for XLSX/DOCX version | Map the reporting workflow | 1 |
| LM-03 | `/en/resources/oil-gas-it-ot-architecture-checklist` | Architecture and security checklist for one-way data flow, zones, interfaces, identity, monitoring, and recovery | Technical validation | Ungated HTML; email required for printable/working version | Architecture review | 2 |
| LM-04 | `/en/resources/osdu-exploration-data-readiness-assessment` | Scored readiness assessment for metadata, entitlements, source quality, migration, operating model, and adoption | Technical discovery / business case | Interactive summary; email required to save/export result | Discuss the readiness gaps | 2 |

## 11. Complete 100-keyword candidate map

### 11.1 Validation status

All phrases below are hypotheses. Before final briefs are approved, the SEO owner must add search volume, keyword difficulty, current Deview position, SERP type, country database, and business-value score. A phrase may be edited, merged, or rejected after validation, but its destination must retain one clear primary intent.

### 11.2 Country commercial candidates — 25

| ID | Candidate phrase | Destination |
|---|---|---|
| KW-001 | oil and gas software development UAE | CP-01 |
| KW-002 | oil and gas software development Saudi Arabia | CP-02 |
| KW-003 | oil and gas software development Nigeria | CP-03 |
| KW-004 | oil and gas software development Oman | CP-04 |
| KW-005 | oil and gas software development Qatar | CP-05 |
| KW-006 | oil and gas software development Egypt | CP-06 |
| KW-007 | oil and gas software development Angola | CP-07 |
| KW-008 | oil and gas software development Algeria | CP-08 |
| KW-009 | oil and gas software development Kuwait | CP-09 |
| KW-010 | oil and gas software development Mozambique | CP-10 |
| KW-011 | oil and gas software development Iraq | CP-11 |
| KW-012 | oil and gas software development Libya | CP-12 |
| KW-013 | oil and gas software development Namibia | CP-13 |
| KW-014 | oil and gas software development Ghana | CP-14 |
| KW-015 | oil and gas software development Senegal | CP-15 |
| KW-016 | oil and gas software development Côte d’Ivoire | CP-16 |
| KW-017 | oil and gas software development South Africa | CP-17 |
| KW-018 | oil and gas software development Tanzania | CP-18 |
| KW-019 | oil and gas software development Bahrain | CP-19 |
| KW-020 | oil and gas software development Mauritania | CP-20 |
| KW-021 | oil and gas software development Morocco | CP-21 |
| KW-022 | oil and gas software development Gabon | CP-22 |
| KW-023 | oil and gas software development Republic of Congo | CP-23 |
| KW-024 | oil and gas software development Equatorial Guinea | CP-24 |
| KW-025 | oil and gas software development Uganda | CP-25 |

### 11.3 Country + solution candidates — 25

| ID | Candidate phrase | Destination |
|---|---|---|
| KW-026 | sovereign AI for oil and gas UAE | CP-01 |
| KW-027 | Saudi oil and gas digital transformation software | CP-02 |
| KW-028 | Nigeria upstream production management software | CP-03 |
| KW-029 | Oman oil and gas joint venture accounting software | CP-04 |
| KW-030 | Qatar LNG operations software development | CP-05 |
| KW-031 | Egypt upstream data platform development | CP-06 |
| KW-032 | Angola oil and gas production reporting software | CP-07 |
| KW-033 | Algeria oil and gas asset integrity software | CP-08 |
| KW-034 | Kuwait oil and gas project controls software | CP-09 |
| KW-035 | Mozambique LNG project controls software | CP-10 |
| KW-036 | Iraq oilfield production reporting software | CP-11 |
| KW-037 | Libya oilfield production reporting system | CP-12 |
| KW-038 | Namibia exploration data room software | CP-13 |
| KW-039 | Ghana oil and gas local content supplier portal | CP-14 |
| KW-040 | Senegal offshore oil and gas reporting software | CP-15 |
| KW-041 | Côte d’Ivoire offshore oil project controls software | CP-16 |
| KW-042 | South Africa refinery asset integrity software | CP-17 |
| KW-043 | Tanzania LNG project management software | CP-18 |
| KW-044 | Bahrain refinery operations software development | CP-19 |
| KW-045 | Mauritania offshore gas project controls software | CP-20 |
| KW-046 | Morocco exploration data platform development | CP-21 |
| KW-047 | Gabon oilfield production reporting software | CP-22 |
| KW-048 | Republic of Congo oil and gas joint venture reporting software | CP-23 |
| KW-049 | Equatorial Guinea LNG operations software | CP-24 |
| KW-050 | Uganda oil pipeline project controls software | CP-25 |

### 11.4 Regional commercial candidates — 20

| ID | Candidate phrase | Destination |
|---|---|---|
| KW-051 | Middle East oil and gas software development | RH-01 |
| KW-052 | Middle East oil and gas digital transformation company | RH-01 |
| KW-053 | North Africa oil and gas software development | RH-02 |
| KW-054 | North Africa upstream digital solutions | RH-02 |
| KW-055 | West Africa oil and gas software development | RH-03 |
| KW-056 | West Africa upstream software company | RH-03 |
| KW-057 | East Africa oil and gas software development | RH-04 |
| KW-058 | East Africa upstream digital solutions | RH-04 |
| KW-059 | Southern Africa oil and gas software development | RH-05 |
| KW-060 | Southern Africa energy software company | RH-05 |
| KW-061 | GCC oil and gas project controls software | SP-01 |
| KW-062 | Middle East oil and gas contractor portal | SP-02 |
| KW-063 | sovereign industrial AI for GCC energy | SP-03 |
| KW-064 | Africa oil and gas joint venture accounting software | SP-04 |
| KW-065 | Africa upstream production reporting software | SP-05 |
| KW-066 | offline oilfield operations software | SP-06 |
| KW-067 | Africa oil and gas data room software | SP-07 |
| KW-068 | MENA asset integrity software | SP-08 |
| KW-069 | OSDU data platform for national oil companies | SP-09 |
| KW-070 | methane emissions reporting software MENA | SP-10 |

### 11.5 Informational and technical candidates — 20

| ID | Candidate phrase | Destination |
|---|---|---|
| KW-071 | GCC oil and gas data residency requirements | AR-01 |
| KW-072 | sovereign cloud for oil and gas UAE | AR-01 |
| KW-073 | on premise AI for Saudi oil and gas | AR-01 |
| KW-074 | private enterprise LLM for oil and gas | AR-01 |
| KW-075 | oil and gas IT OT integration architecture | AR-02 |
| KW-076 | one way SCADA data integration | AR-02 |
| KW-077 | IEC 62443 oil and gas data platform | AR-02 |
| KW-078 | how to connect oilfield data to business systems | AR-02 |
| KW-079 | offline oilfield production reporting | AR-03 |
| KW-080 | remote oilfield data synchronization | AR-03 |
| KW-081 | oil and gas field app offline mode | AR-03 |
| KW-082 | digital systems for national oil companies | AR-04 |
| KW-083 | oil and gas joint venture reporting requirements | AR-04 |
| KW-084 | operator partner data sharing oil and gas | AR-04 |
| KW-085 | oil and gas local content software requirements Africa | AR-05 |
| KW-086 | technology procurement for African oil and gas | AR-05 |
| KW-087 | oil and gas supplier portal local content | AR-05 |
| KW-088 | custom vs off the shelf oil and gas software | AR-06 |
| KW-089 | build or buy upstream production software | AR-06 |
| KW-090 | when to build custom oil and gas software | AR-06 |

### 11.6 Procurement and requirements candidates — 10

| ID | Candidate phrase | Destination |
|---|---|---|
| KW-091 | upstream production management system requirements | LM-01 |
| KW-092 | production reporting software RFP template | LM-01 |
| KW-093 | oil and gas production software requirements template | LM-01 |
| KW-094 | oil and gas project controls checklist | LM-02 |
| KW-095 | joint venture reporting requirements template | LM-02 |
| KW-096 | contractor reporting software requirements | LM-02 |
| KW-097 | oil and gas IT OT architecture checklist | LM-03 |
| KW-098 | SCADA integration security checklist | LM-03 |
| KW-099 | OSDU readiness assessment | LM-04 |
| KW-100 | exploration data platform requirements | LM-04 |

## 12. Keyword validation and prioritization method

### 12.1 Required data fields

Before a content brief receives “ready to write” status, every candidate keyword must have:

| Field | Requirement |
|---|---|
| Search market | Country-level database where available; regional proxy must be labeled |
| Language | English for the initial set; local-language equivalent recorded separately |
| Monthly search volume | Tool value and capture date; `0`, `N/A`, and unavailable must remain distinct |
| Keyword difficulty | Tool-specific value; tool name and capture date required |
| Current Deview position | Google Search Console average position where impressions exist |
| SERP type | Service pages, local vendors, directories, articles, product pages, mixed, or no clear result |
| Search intent | Commercial, commercial investigation, informational, or procurement |
| Business relevance | 1–5 score based on Deview capability and likely buyer value |
| Evidence strength | 1–5 score based on available proof and subject-matter depth |
| Destination | Exactly one primary owner URL |
| Decision | Keep, modify, merge, defer, or reject |

### 12.2 Priority score

Use this planning score after data collection:

```text
Priority score =
  (business relevance × 30%) +
  (evidence strength × 25%) +
  (intent value × 20%) +
  (attainability × 15%) +
  (localization value × 10%)
```

Each component is normalized to 1–5. Search volume informs attainability and opportunity but does not override weak business relevance or weak evidence. A high-volume term that Deview cannot answer credibly must be rejected.

### 12.3 Cannibalization rules

1. Only one URL owns a primary candidate phrase.
2. Country pages own country-modified commercial queries; solution pages own cross-market workflow queries.
3. Regional hubs summarize and route demand; they must not reproduce full solution-page sections.
4. Articles own “how,” “requirements,” architecture, and comparison questions unless a downloadable working tool is the dominant intent.
5. Lead-magnet pages own template, checklist, assessment, and RFP intent.
6. If Google consistently ranks another Deview URL for a target query after 90 days, the SEO owner must decide whether to strengthen the intended owner, remap the term, or consolidate the pages.

## 13. Page-level product requirements

### 13.1 Regional hub template

Every regional hub must contain:

1. A region-specific H1 and lede that state the operating context without claiming local presence.
2. A “What changes across this region” section covering operators, asset types, procurement, language, hosting, and connectivity.
3. Four to six prioritized workflows, each linked to a dedicated solution page.
4. A country navigation module with a unique one-sentence rationale for every listed market.
5. A deployment-pattern module covering cloud, customer cloud, regional/sovereign cloud, on-premise, and edge where relevant.
6. A proof module that distinguishes historical project evidence, the EnerQuest pilot, and current service capabilities.
7. At least three externally sourced regional facts, each dated and linked to an authoritative source.
8. A “How to start” section with discovery inputs, likely stakeholders, and a non-promissory first-step CTA.
9. Five to eight original FAQs based on validated SERP questions and sales objections.
10. Links to the global commercial hub, historical proof hub, every country page in the region, at least three solution pages, one authority article, and one lead magnet.

Recommended length is 1,800–2,800 words, but completeness and usefulness matter more than word count.

### 13.2 Country page template

Every standalone country page must contain all of the following. Missing any mandatory block fails the anti-doorway gate.

| Block | Requirement |
|---|---|
| Market-specific opening | Explain the exact operational or procurement context; do not start with a generic country overview |
| Buyer problem map | Three to five problems tied to named roles, not generic “digital transformation” |
| Priority workflows | Two to four workflows selected specifically for the market |
| Operating environment | Relevant asset type, connectivity, data, partner, or reporting constraints with sources |
| Deployment and sovereignty | Market-relevant options; distinguish legal fact, buyer preference, and recommended architecture |
| Procurement / local content | Cite official or primary sources where requirements exist; otherwise state that requirements must be confirmed |
| Solution map | Link to no more than five relevant Deview solution pages with unique annotations |
| Delivery approach | Discovery, pilot, integration, rollout, and ownership; no fabricated schedule |
| Proof | Only evidence genuinely relevant to the proposed workflow, with limitations visible |
| Buying-team checklist | Operations, IT/security, procurement, executive sponsor |
| FAQ | Five to eight questions unique to the market and intent |
| CTA | One primary workflow-specific CTA and one secondary lead-magnet CTA |
| Sources | Minimum three authoritative sources, including at least one official local source where available |

Additional rules:

- A country page must have at least 40% substantively unique body copy compared with any other country page, excluding global boilerplate, navigation, and legal text.
- The editorial review must compare each new page against its two most similar country pages.
- Country name replacement does not count as unique content.
- Generic country facts, reserves, production figures, or operator lists are included only when they change the buyer’s decision.
- Unstable figures require a source date and a review date.
- No map pin, address, telephone number, local schema, or “in-country team” language may appear without verified local operations.

Recommended length is 1,600–2,500 words. A shorter page may pass if it fully answers a narrow validated intent; a longer page may fail if it is padded.

### 13.3 Solution page template

Every solution page must include:

1. Problem and user outcome, stated without unsupported performance claims.
2. In-scope and explicitly out-of-scope system responsibilities.
3. Workflow from source event to decision or report.
4. Core modules and roles.
5. Reference data model or entity map.
6. Integration boundaries and systems of record.
7. Security, deployment, residency, and operational-control boundary.
8. Relevant standards, with a sentence explaining where each applies and where it does not.
9. Buy / extend / build decision guidance.
10. Phased delivery approach without a fabricated fixed duration.
11. Proof links and evidence limitations.
12. Region and country relevance links.
13. Five to eight substantive FAQs.
14. Primary consultation CTA and secondary requirements-tool CTA.

### 13.4 Authority article template

Every authority article must:

- answer the research question in the first 150 words;
- define the decision and intended reader;
- separate facts, architecture guidance, and Deview recommendations;
- include at least one original decision framework, reference architecture, state model, or comparison table;
- cite at least five authoritative sources, prioritizing regulators, ministries, standards bodies, operators, and original technical documentation;
- state jurisdictional or organizational caveats;
- avoid presenting standards compliance as certification;
- include a “questions to take into discovery/procurement” section;
- link to one commercial solution page, one market page, one proof page, and one relevant resource;
- show the author/reviewer role, first-published date, last-reviewed date, and next review date.

### 13.5 Lead-magnet landing-page and asset template

The HTML landing page must provide real standalone value before the form. It must include:

- the problem the tool solves;
- intended and non-intended users;
- a visible preview of the sections or scoring method;
- at least 25% of the checklist or framework ungated in HTML;
- format, version, update date, and estimated completion effort;
- how submitted data is used;
- a privacy link and consent treatment appropriate to the visitor’s jurisdiction;
- an accessible form with company-email optional unless sales qualification requires it;
- an immediate download or delivery state;
- a non-blocking option to discuss results.

The downloadable or interactive asset must include instructions, definitions, owner fields, priority fields, decision notes, and a version number. It must not be a reformatted blog post.

## 14. Evidence, accuracy, and editorial policy

### 14.1 Source hierarchy

Use sources in this order:

1. regulator, ministry, official legal or policy publication;
2. operator, NOC, JV, or project owner;
3. standards body or official technical documentation;
4. multilateral institution or recognized industry body;
5. reputable industry publication;
6. secondary vendor material, only for that vendor’s own product or stated viewpoint.

Search-result snippets are never acceptable final evidence. The writer or reviewer must open the source and confirm the claim in context.

### 14.2 Claim classes

| Claim class | Example | Approval requirement |
|---|---|---|
| Deview fact | “The EnerQuest pilot brings production, equipment, and exceptions into one view” | Must match approved case copy |
| Historical project fact | Project year, company, system scope | Must match repository source data exactly |
| Market fact | Policy, programme, operating context, current project | Linked primary source and retrieval date |
| Technical guidance | One-way interface, edge sync, access design | Technical reviewer approval |
| Legal / regulatory interpretation | Data residency, local content, procurement obligation | Phrase as non-legal guidance and require qualified local confirmation |
| Outcome estimate | Time saved, cost reduction, efficiency gain | Prohibited unless tied to a cited third-party statement or approved Deview measurement |
| Local-presence claim | Office, staff, partner, certification, prequalification | Prohibited unless business owner supplies verifiable evidence |

### 14.3 Freshness

- Market pages receive a factual review every six months.
- Legal, regulatory, local-content, and residency statements receive a review every three months or immediately after a known change.
- Technical evergreen pages receive an annual review.
- A page with a material outdated claim must be corrected, temporarily noindexed, or removed until it is reliable.

## 15. Anti-doorway and content-quality gate

A country page may be published only if all answers below are “yes.”

1. Does the page address a distinct combination of buyer, workflow, and market context?
2. Does it include at least three authoritative sources, including a local official source where available?
3. Are at least two solution priorities justified by market evidence rather than copied from the global hub?
4. Does it contain a unique operating, procurement, connectivity, language, or deployment consideration?
5. Is the page useful to a visitor who never contacts Deview?
6. Is the copy materially different from its nearest country-page peers?
7. Are all Deview claims supported by approved proof?
8. Does the page have a specific internal-link role and a single primary keyword owner?
9. Has an oil-and-gas subject-matter reviewer approved the workflow accuracy?
10. Has the SEO reviewer confirmed the SERP intent matches a standalone landing page?

If any answer is “no,” the default action is to strengthen the page or keep the content within a regional hub. Publication volume is never a reason to waive the gate.

## 16. Internal-linking requirements

### 16.1 Mandatory links by page type

| From | Must link to |
|---|---|
| Global oil-and-gas software hub | All 5 regional hubs, top 6 solution pages, proof hub, 2 lead magnets |
| Historical proof hub | Global commercial hub, relevant solution pages, no more than 3 regional paths where context is genuine |
| Regional hub | All countries in region, 3–6 solutions, 1–3 articles, 1–2 lead magnets, both global hubs |
| Country page | Parent regional hub, global commercial hub, proof hub, 2–5 solutions, 1 article, 1 lead magnet |
| Solution page | Global commercial hub, proof hub, 2–5 relevant countries/regions, 1 article, 1 lead magnet |
| Authority article | 1 primary solution, 1–3 market pages, proof where relevant, 1 lead magnet |
| Lead magnet | 1 primary solution, 1 article, 1–3 market pages, contact route |

### 16.2 Anchor-text rules

- Use descriptive anchors that explain the destination.
- Do not repeat an exact-match keyword unnaturally across every page.
- Country links may use the country name plus the relevant workflow.
- Proof links must describe what the visitor will see, not merely “learn more.”
- Links inserted only for PageRank distribution and unrelated to the paragraph are prohibited.

### 16.3 Orphan and depth requirements

- Every launch URL must be reachable through crawlable HTML links.
- Tier 1 country pages must be within three clicks of the English homepage.
- No programme page may be orphaned or discoverable only through a sitemap.
- Breadcrumbs must reflect the conceptual hierarchy even when routes use different top-level sections.

## 17. Technical SEO requirements

### 17.1 Indexability and rendering

1. Primary content, headings, links, and FAQs must be server-rendered or statically generated in crawlable HTML.
2. Production pages return HTTP 200 and are not blocked by `robots.txt`, `noindex`, or authentication.
3. Draft, preview, filtered, and form-state variants are not indexable.
4. Removed pages redirect only when a closely equivalent destination exists; otherwise they return 410 or 404 according to the removal decision.

### 17.2 Metadata

Every indexable asset needs:

- a unique title, normally 45–65 characters, with the primary intent readable before the brand;
- a unique description, normally 140–165 characters, written for click relevance rather than keyword repetition;
- one clear H1 aligned with title intent;
- a self-referencing canonical;
- Open Graph title, description, image, and URL;
- a meaningful social image rather than a generic logo-only asset.

Character ranges are editorial guidance, not a hard rendering guarantee.

### 17.3 Structured data

| Page type | Required or permitted schema |
|---|---|
| Regional / country page | `WebPage`, `BreadcrumbList`; `Organization` referenced to the global organization entity |
| Solution page | `Service`, `WebPage`, `BreadcrumbList`; avoid unsupported ratings or offers |
| Authority article | `Article` or `TechArticle`, `BreadcrumbList`, author/reviewer and dates |
| Lead magnet | `WebPage`, `BreadcrumbList`; `DigitalDocument` only if accurately modeled |
| FAQ content | `FAQPage` only where visible Q&A meets current search-engine eligibility guidance; no expectation of rich-result display |

Country pages must not use `LocalBusiness` unless Deview has a verified eligible local business presence.

### 17.4 Sitemap and discovery

- All canonical English programme URLs appear in the XML sitemap after publication.
- `lastModified` reflects a substantive content change, not every build.
- Separate sitemap files by content type are optional; the index must remain valid and monitorable.
- Submit and monitor via Google Search Console after each wave.

### 17.5 Performance and accessibility

The implementation target at the 75th percentile for field data is:

- LCP ≤ 2.5 seconds;
- INP ≤ 200 milliseconds;
- CLS ≤ 0.1.

Pages must meet WCAG 2.2 AA for semantic headings, keyboard operation, visible focus, contrast, form labels, error states, and meaningful alternative text. Decorative diagrams use empty alt text; explanatory diagrams also require an equivalent text description.

### 17.6 Images and media

- Use project imagery only where rights and attribution are documented.
- Do not use generic refinery imagery to imply a Deview project.
- Country imagery must not suggest an office, client site, or delivery footprint.
- Compress images, provide responsive sizes, reserve dimensions, and lazy-load below-fold media.
- Screenshots of interfaces must be real, clearly labeled as illustrative, or explicitly presented as a concept—not blurred into ambiguity.

## 18. Localization requirements

### 18.1 Localization is gated

Localization begins only when at least one of these conditions is true:

1. the English page earns sustained impressions or qualified traffic from the target market;
2. sales identifies a live buying motion that requires local-language material;
3. validated local-language keyword demand and SERP fit justify a native page; or
4. a regional partner or subject-matter reviewer can support accurate localization and maintenance.

Machine translation may be used as a drafting aid but never published without native or near-native review and technical terminology review.

### 18.2 Proposed 29-URL localized layer

| Language | Country pages | Regional / solution pages | Total |
|---|---:|---:|---:|
| Arabic | 12: UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, Iraq, Egypt, Algeria, Libya, Mauritania, Morocco | 3: Middle East hub, sovereign industrial AI, GCC project controls | 15 |
| French | 7: Algeria, Morocco, Mauritania, Senegal, Côte d’Ivoire, Gabon, Republic of Congo | 3: North Africa hub, West/Central Africa hub, local-content procurement article | 10 |
| Portuguese | 2: Angola, Mozambique | 2: Southern Africa hub, upstream production reporting solution | 4 |
| **Total** | **21** | **8** | **29** |

This is a proposed maximum, not an automatic translation backlog. Pages that do not pass the localization gate remain English-only.

### 18.3 Locale and hreflang behavior

1. Localized pages use `/ar/`, `/fr/`, and `/pt/` path prefixes.
2. Each localized page self-canonicalizes; it does not canonicalize to English.
3. Hreflang sets are reciprocal and include only true equivalents.
4. Use `en`, `ar`, `fr`, and `pt` for language targeting initially. Add regional subtags only if content genuinely differs by region.
5. `x-default` points to the English page or an intentional language selector, never an arbitrary locale.
6. Arabic layouts support RTL at the document and component level. Diagrams, number presentation, forms, tables, and mixed English technical terms require explicit RTL review.
7. A localized page can adapt examples, CTAs, terminology, and buyer objections; it must not be a sentence-by-sentence translation if local intent differs.

## 19. Conversion and lead-generation requirements

### 19.1 Conversion hierarchy

| Visitor state | Primary conversion | Secondary conversion |
|---|---|---|
| Early research | Read authority article or inspect relevant framework | Visit regional/country page |
| Problem definition | Download or complete requirements tool | Review solution architecture |
| Solution evaluation | Book workflow/architecture workshop | Read proof and delivery approach |
| Procurement | Submit requirements for review | Use checklist or assessment |

### 19.2 CTA rules

- CTAs describe the next useful action: “Review the production workflow,” not “Transform your business.”
- Each page has one primary CTA repeated at logical points and one secondary CTA.
- A country page CTA may mention the workflow or market but must not imply a local team.
- No countdowns, false scarcity, fabricated availability, or guaranteed reply times.
- Contact forms must preserve source page, asset ID, campaign parameters, locale, and selected use case.

### 19.3 Lead qualification

Required fields should be minimized. The preferred progressive model is:

1. email;
2. name;
3. company;
4. role or team;
5. country / operating region;
6. workflow of interest;
7. optional context.

The system must distinguish a content download from a request for contact. Marketing consent and a service enquiry are separate choices where required.

### 19.4 CRM and attribution

Each captured lead must store:

- first-touch landing page;
- last-touch conversion page;
- asset ID;
- campaign and referrer data;
- locale;
- self-reported country and use case;
- lead-magnet version;
- consent state and timestamp.

Qualified-opportunity reporting must use a defined stage and owner; raw form submissions are not equivalent to qualified leads.

## 20. Analytics and measurement plan

### 20.1 Baseline

Before Wave 1 publication, capture a 90-day baseline for:

- target-country organic users, sessions, conversions, and qualified enquiries;
- non-brand Google Search Console impressions, clicks, CTR, and average position;
- existing oil-and-gas hub and solution-page performance;
- current indexed pages and crawl issues;
- current branded vs non-branded query split;
- current referral and direct conversions that originated from organic discovery where available.

### 20.2 Event taxonomy

| Event | Trigger | Required parameters |
|---|---|---|
| `seo_market_page_view` | Meaningful view of regional/country page | asset_id, country, region, locale, referrer |
| `seo_solution_engagement` | 50% scroll or meaningful architecture interaction | asset_id, solution, locale |
| `proof_open` | Open historical case or pilot from programme page | source_asset_id, proof_id |
| `resource_preview` | Open lead-magnet preview | source_asset_id, resource_id |
| `resource_download` | Successful file delivery/export | resource_id, version, locale, lead_id where consented |
| `assessment_complete` | Complete interactive assessment | resource_id, score_band, locale; do not send sensitive free text to analytics |
| `contact_start` | First contact-form interaction | source_asset_id, CTA variant |
| `contact_submit` | Successful submission | source_asset_id, use_case, market, locale, lead_id |
| `qualified_lead` | CRM stage change, server-side | first_touch_asset, last_touch_asset, target_market, use_case |

Analytics must not receive confidential operating data, document contents, or free-text requirements by default.

### 20.3 KPI framework

| Level | KPI | Initial decision threshold |
|---|---|---|
| Delivery | Assets passing editorial/technical Definition of Done | 100% of published assets |
| Indexation | Canonical published assets indexed | ≥90% within eight weeks of each wave, investigated individually below target |
| Discovery | Tier 1 country pages receiving non-brand impressions | ≥70% within 90 days |
| Discovery | All new pages receiving non-brand impressions | ≥50% within 90 days |
| Engagement | Organic visitors who reach proof, a resource, or contact | Baseline in month 1; improve by wave, no arbitrary pre-baseline promise |
| Conversion | Target-market resource completions and contact submissions | Report by asset and market; qualified status required for business KPI |
| Business | Qualified target-market opportunities influenced by organic | Baseline and numeric target set by product owner after month-0 data review |
| Quality | Pages with unsupported claims or broken source links | 0 |
| Quality | Country pages failing uniqueness/doorway gate | 0 published |

The thresholds are operating triggers, not ranking guarantees.

### 20.4 90-day URL decision gate

At 90 days after a page is indexable, assign one action:

| State | Evidence | Action |
|---|---|---|
| Retain and expand | Relevant impressions/clicks, correct query mix, or assisted conversion | Strengthen proof, links, and conversion path |
| Retain and test | Relevant impressions but weak CTR/engagement | Test title, description, opening, CTA, and SERP fit |
| Refresh | Wrong query mix or weak ranking despite validated intent | Rework intent, structure, evidence, and internal links |
| Consolidate | No meaningful impressions and no unique intent, or material overlap with another page | Merge useful content into regional/solution hub and 301 if equivalent |
| Keep for strategic sales | Low search demand but active account-based use | Keep only with named business owner and periodic quality review; SEO success not claimed |
| Remove | Weak evidence, obsolete need, or no defensible user value | 410/404 or redirect according to replacement value |

No page is deleted solely because 90 days of rankings are weak; indexation, crawl, seasonality, competition, and link support must be reviewed first.

## 21. Six-month delivery roadmap

### Month 0: validation and operating setup

Deliverables:

- Search Console and analytics baseline;
- keyword validation sheet for all 100 candidates;
- final market tier confirmation with sales;
- evidence library and source log;
- reusable briefs and editorial checklists;
- analytics event specification;
- route and component technical design;
- named reviewers and approval SLAs.

Exit criteria:

- every Wave 1 term has a validated or explicitly accepted low-volume intent;
- every Wave 1 page has sufficient unique evidence;
- no unresolved URL ownership conflict;
- analytics and lead attribution requirements are accepted.

### Month 1: foundation and first commercial cluster

Publish or complete:

- RH-01, RH-02, RH-03, RH-05;
- CP-01 through CP-10;
- SP-01 through SP-05;
- AR-01, AR-02, AR-06;
- LM-01 and LM-02;
- upgrades to the global commercial and proof hubs for navigation and context.

This is 24 new assets plus the two existing-hub upgrades. If quality review cannot sustain this volume, publish in two controlled batches within the month rather than lowering the gate.

### Month 2: technical depth and Tier 2 expansion

Publish:

- CP-11 through CP-18;
- SP-06 through SP-10;
- AR-03 through AR-05;
- LM-03 and LM-04.

This is 18 new assets. Begin Search Console inspection, crawl validation, internal-link review, and early title/CTR correction on Month 1 pages.

### Month 3: Tier 3 evidence gate and completion

Tasks:

- validate whether CP-19 through CP-25 each meet the anti-doorway threshold;
- publish qualified Tier 3 pages;
- retain failed candidates as modules within regional hubs;
- publish RH-04 when Tanzania/Uganda depth is sufficient;
- complete any deferred quality fixes;
- begin targeted digital PR and expert distribution for the strongest authority assets.

Maximum publication is 8 new assets; actual publication may be lower if standalone evidence is insufficient.

### Month 4: optimization and localization discovery

Tasks:

- review Month 1 query ownership, CTR, indexation, and engagement;
- strengthen underlinked or misaligned pages;
- interview sales and delivery teams about real objections and leads;
- validate Arabic, French, and Portuguese query sets;
- commission native terminology glossaries;
- select the first localized tranche based on evidence, not the maximum list.

### Month 5: first localization tranche and conversion tests

Subject to the localization gate:

- publish the highest-value 6–10 localized URLs;
- implement reciprocal hreflang;
- run native-language QA and RTL QA for Arabic;
- test CTA phrasing, resource preview depth, and form friction;
- update country pages with real query and sales-language findings.

### Month 6: portfolio review and next investment decision

Tasks:

- run 90-day decisions for Month 1 pages;
- evaluate early Month 2 results without premature consolidation;
- report qualified pipeline influence and resource-to-conversation paths;
- choose retain, expand, localize, consolidate, or stop for every cluster;
- approve the next six-month roadmap based on observed market/query performance.

## 22. Delivery workflow and governance

### 22.1 Required workflow per asset

```text
Keyword and SERP validation
    -> market/source research
        -> content brief
            -> SME review of brief
                -> draft
                    -> evidence and claims audit
                        -> SEO/editorial review
                            -> technical implementation
                                -> pre-publication QA
                                    -> publish and inspect
                                        -> 30/60/90-day review
```

### 22.2 RACI

| Work item | Product / growth owner | SEO lead | Oil & gas SME | Writer / editor | Engineer | Design | Sales / BD | Legal/privacy |
|---|---|---|---|---|---|---|---|---|
| Market tier and business priority | A | R | C | I | I | I | C | I |
| Keyword validation and mapping | C | A/R | C | C | I | I | C | I |
| Source research and claim log | I | C | A | R | I | I | C | C when legal |
| Content brief | C | A/R | C | R | I | C | C | I |
| Technical accuracy | I | C | A/R | C | C | I | I | C |
| Copy quality and consistency | I | C | C | A/R | I | C | I | I |
| Page implementation | I | C | C | C | A/R | R | I | I |
| Tracking and CRM attribution | A | C | I | I | R | I | C | C |
| Publication approval | A | R | R | R | C | C | C | C as needed |
| 90-day decision | A | R | C | C | C | I | C | I |

Legend: A = accountable, R = responsible, C = consulted, I = informed. One named individual may hold multiple roles, but accountability must remain explicit.

### 22.3 Approval SLA assumptions

- Keyword/brief review: three working days.
- Technical SME review: five working days.
- Legal/privacy review for relevant claims or forms: five working days.
- Final editorial and SEO review: three working days.
- Engineering QA correction: based on severity; blockers before publication.

These are planning assumptions, not external promises. If reviewer capacity cannot meet them, the wave size must be reduced.

## 23. Functional requirements

| ID | Requirement | Priority | Acceptance summary |
|---|---|---|---|
| FR-001 | Support dedicated region and market route namespaces without collision with historical case slugs | Must | All routes build and resolve uniquely; historical routes remain unchanged |
| FR-002 | Store structured page metadata for asset ID, region, country, tier, source review date, and target keyword owner | Must | Data is queryable and used in sitemap/analytics/page modules |
| FR-003 | Render crawlable navigation among hubs, countries, solutions, articles, resources, and proof | Must | No orphan programme URL; links exist in server-rendered HTML |
| FR-004 | Support structured source citations with title, publisher, URL, publication date, and retrieval date | Must | Every market claim can be traced to a source record |
| FR-005 | Support author, reviewer, first-published, last-reviewed, and next-review dates | Must | Authority and market pages display and emit appropriate metadata |
| FR-006 | Support asset-specific primary and secondary CTAs | Must | CTA clicks retain source asset and use case |
| FR-007 | Support lead-magnet preview, versioned download/export, consent, and delivery state | Must | Successful delivery is measurable and accessible |
| FR-008 | Support locale equivalents and reciprocal hreflang when localization begins | Must later | Equivalent sets validate with no missing reciprocal links |
| FR-009 | Support RTL layouts for Arabic | Must later | Page, tables, forms, breadcrumbs, and mixed technical text pass native RTL QA |
| FR-010 | Emit canonical, social metadata, sitemap entries, and permitted structured data by page type | Must | Automated metadata tests pass |
| FR-011 | Provide noindex control for drafts and intentionally withheld pages | Must | Draft/preview URLs cannot enter production index |
| FR-012 | Preserve lead attribution through resource and contact journeys | Must | CRM record contains defined first/last touch and asset identifiers |
| FR-013 | Provide a source-review queue for pages approaching freshness deadlines | Should | Owner can find pages due within 30 days |
| FR-014 | Support consolidation redirects and removal status without link/sitemap residue | Must | Old URL behavior, sitemap, canonicals, and links are consistent |

## 24. Non-functional requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-001 | Performance | Core Web Vitals targets in section 17.5 at the 75th percentile |
| NFR-002 | Accessibility | WCAG 2.2 AA for templates, forms, downloads, and interactive assessments |
| NFR-003 | Security | No confidential free text in client analytics; forms protected against spam and abuse |
| NFR-004 | Privacy | Consent, retention, and deletion behavior documented for each captured field |
| NFR-005 | Maintainability | Shared templates without forcing identical narratives; typed/validated content structure preferred |
| NFR-006 | Observability | Publication, crawl, form, download, and integration failures are detectable |
| NFR-007 | Reliability | Resource delivery and contact submission provide explicit success/failure states and retry guidance |
| NFR-008 | Content integrity | Sources, review dates, asset IDs, and keyword ownership cannot silently disappear during rendering |
| NFR-009 | Internationalization | UTF-8, locale-aware direction, punctuation, number/date display, and language metadata |

## 25. Definition of Done

### 25.1 Per-page editorial DoD

- Primary intent and destination ownership are approved.
- Required template blocks are complete.
- Claims log contains a source or internal approval for every material factual claim.
- No unsupported local presence, client, outcome, legal, or certification claim remains.
- Country-page anti-doorway checklist passes 10/10.
- SME and editor approvals are recorded.
- Copy has no placeholder text, duplicated market paragraphs, or unreviewed machine translation.
- Links to proof accurately describe the evidence and its limits.
- CTA matches the visitor’s likely stage and does not overpromise.

### 25.2 Per-page technical DoD

- Route returns 200 in production and canonical matches the production URL.
- Title, description, H1, Open Graph, and structured data are unique and valid.
- Page is present in navigation and sitemap, with no accidental noindex.
- Required internal links are crawlable.
- Images have correct dimensions, compression, rights, and alt behavior.
- Analytics events send the required nonsensitive parameters once per action.
- Forms and downloads pass success, validation, error, keyboard, and screen-reader checks.
- Desktop and mobile layouts pass visual QA without horizontal overflow.
- Performance and accessibility checks meet the agreed release threshold or have a documented blocker accepted by the product owner.

### 25.3 Wave-level DoD

- Every published asset has an owner and next review date.
- Search Console inspection is requested or observed for each canonical URL.
- No page is orphaned.
- No primary keyword has multiple destination owners.
- Baseline and release annotations are recorded.
- Sales has a short enablement note explaining the new pages, lead magnets, and claim boundaries.
- The 30/60/90-day review dates are scheduled.

## 26. Acceptance criteria

### AC-01 — Scope integrity

Given the approved English programme, when the final inventory is counted, then it contains exactly 50 new assets: 5 regional hubs, 25 country pages, 10 solution pages, 6 authority articles, and 4 lead magnets.

### AC-02 — Keyword traceability

Given the candidate keyword register, when mappings are audited, then exactly 100 candidates exist, every candidate has one destination, every destination has at least one target, and no candidate has multiple primary owners.

### AC-03 — Route safety

Given the existing historical route namespace, when new routes are generated, then all regions use `/regions/`, all countries use `/markets/`, and every existing historical case URL continues to resolve unchanged.

### AC-04 — Country-page quality

Given a country page proposed for publication, when the anti-doorway checklist and nearest-page comparison are completed, then all ten checks pass and at least 40% of substantive body copy is unique.

### AC-05 — Claim integrity

Given any material factual statement, when an editor opens the claim log, then the statement has an accessible source or internal approval and does not exceed that evidence.

### AC-06 — Market and workflow usefulness

Given a target buyer, when they read a country page without contacting Deview, then they can identify relevant workflows, deployment considerations, buying-team questions, evidence, and a practical next step.

### AC-07 — Technical indexability

Given a published canonical URL, when tested as a crawler and in rendered HTML, then it returns 200, exposes the primary content and crawlable links, self-canonicalizes, appears in the sitemap, and is not blocked from indexing.

### AC-08 — Lead attribution

Given a visitor who downloads a resource and later submits a contact form, when the lead reaches CRM, then first-touch asset, last-touch asset, resource ID/version, market, use case, locale, and consent state are available.

### AC-09 — Localization safety

Given a localized page, when language QA is complete, then content has native review, canonical is local, hreflang is reciprocal, terminology is approved, and Arabic pages pass RTL checks.

### AC-10 — Measurement readiness

Given publication of a wave, when the measurement checklist is reviewed, then a pre-release baseline, release annotation, event QA, Search Console monitoring, and 30/60/90-day review schedule exist.

### AC-11 — Consolidation behavior

Given a page selected for consolidation, when the change ships, then useful content is merged, equivalent old URLs 301 to the selected owner, internal links and sitemap are updated, and no redirect chain is introduced.

### AC-12 — Evidence freshness

Given a page reaches its review date, when the freshness queue runs, then the owner either verifies sources and updates the review date, corrects the page, noindexes it temporarily, or removes it according to policy.

## 27. Dependencies

1. Access to Google Search Console, analytics, and CRM attribution data.
2. A keyword-research tool with country-level databases, with known limitations documented.
3. Named oil-and-gas subject-matter reviewers.
4. Sales input on priority accounts, current objections, and qualified-lead definition.
5. Legal/privacy guidance for forms, consent, and country-specific statements.
6. Native Arabic, French, and Portuguese reviewers for the localization phase.
7. Engineering capacity for routes, templates, content models, analytics, forms, sitemap, and hreflang.
8. A maintained evidence library for Deview proof and external market sources.
9. Rights-cleared project, diagram, and editorial imagery.

## 28. Assumptions

- English remains the initial production language for all 50 assets.
- Existing oil-and-gas proof and solution pages remain live and retain their current intent.
- The site can add nested static route namespaces alongside the current dynamic historical route.
- Deview can provide technical review for production reporting, project controls, data platforms, private AI, integration, and secure deployment.
- Keyword and Search Console validation may reduce or reword the candidate list without changing the programme’s intent architecture.
- Tier 3 pages may remain unpublished if evidence does not justify a standalone URL.
- The business will define a qualified lead and assign follow-up ownership before lead magnets launch.

## 29. Risks and mitigations

| Risk | Probability | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Country pages become doorway content | Medium | Critical | Mandatory 10-point gate, uniqueness comparison, regional consolidation fallback | SEO lead + editor |
| Market facts become outdated | High | High | Source log, review dates, freshness queue, rapid correction/noindex policy | Research owner |
| Unsupported local-presence or client implication | Medium | Critical | Claim classes, prohibited language, business-owner approval for any presence claim | Product owner |
| Keyword demand is lower than assumed | High | Medium | Validate before briefs; use authority/sales value; consolidate after evidence review | SEO lead |
| Pages cannibalize global or solution hubs | Medium | High | One-owner map, explicit page jobs, 90-day query review | SEO lead |
| Publishing volume reduces quality | High | High | Wave exit gates; reduce volume rather than waive standards | Product owner |
| Localization creates inaccurate technical language | Medium | High | Native technical review, glossary, smaller first tranche, RTL QA | Localization owner |
| Regulatory/local-content guidance is interpreted as legal advice | Medium | High | Primary sources, caveats, local-qualified confirmation, legal review | Legal/privacy |
| Historical proof is overstated | Medium | Critical | Repository evidence is the controlling source; limitations shown in copy | SME + editor |
| Lead magnets attract students/vendors rather than buyers | Medium | Medium | Procurement-level depth, role/use-case fields, qualified-lead reporting | Growth owner |
| Forms create privacy or security exposure | Low/Medium | High | Data minimization, consent separation, retention rules, no sensitive analytics | Engineering + privacy |
| Search engines do not index the full set | Medium | Medium | Crawlable architecture, sitemap, quality gate, inspection, consolidation | SEO + engineering |
| Geographic scope distracts from account-based sales | Medium | Medium | Share assets with sales, track influenced opportunities, keep strategic pages only with owner | Product + sales |

## 30. Decision log and unresolved decisions

### 30.1 Decisions already made

1. The programme is a geographic expansion of the existing oil-and-gas silo.
2. The scale is 25 markets, 50 English assets, and 100 candidate English keywords.
3. English pages launch before localization.
4. Regional and country URLs use explicit `/regions/` and `/markets/` namespaces.
5. Private enterprise LLM and sovereign industrial AI are in scope where they connect to real energy workflows and evidence.
6. Country pages that cannot prove unique value are consolidated rather than published.
7. Each URL receives a 90-day retain/refresh/consolidate decision.

### 30.2 Decisions required before implementation

| Decision | Deadline | Default if unanswered |
|---|---|---|
| Named product/growth owner | Before Month 0 begins | Programme does not begin |
| Qualified lead definition and CRM owner | Before lead-magnet build | Lead magnets do not launch |
| Keyword tool and target-country databases | Week 1 | Use Search Console plus one approved tool; record missing data |
| SME review capacity and named reviewers | Week 1 | Reduce Wave 1 size |
| Whether strategic sales pages may remain with low search demand | Before 90-day gate | Consolidate unless a business owner accepts ownership |
| Localized first tranche | End of Month 4 | No localization in Month 5 |
| Privacy/consent implementation for target regions | Before any form ships | Use contact-only conversion until approved |
| Download formats and CRM delivery method | Before LM implementation | Ungated HTML only |

## 31. Research and evidence starter set

The following sources support the initial strategic framing. They are a starting set, not a substitute for per-page country research.

### Deview sources

- [Deview oil-and-gas historical proof hub](https://deviewai.com/en/industries/oil-and-gas)
- [Deview oil-and-gas software commercial hub](https://deviewai.com/en/solutions/oil-and-gas-software)

### Official and primary external sources

- [ADNOC and SLB: AI platform across more than 120 drilling rigs](https://www.adnoc.ae/en/news-and-media/press-releases/2026/adnoc-and-slb-deploy-ai-platform-across-over-120-drilling-rigs-to-strengthen-upstream-performance/)
- [Saudi Aramco: AI and big data](https://www.aramco.com/en/what-we-do/energy-innovation/digitalization/ai-and-big-data)
- [Saudi Aramco and Microsoft industrial AI memorandum](https://www.aramco.com/en/news-media/news/2026/aramco-signs-mou-with-microsoft-to-help-advance-industrial-ai-and-digital-talent-transformation)
- [Egypt Ministry of Petroleum: Digital Transformation Programme 7](https://www.petroleum.gov.eg/en/update-project/programs/Pages/program7.aspx)
- [Egypt Ministry of Petroleum: Egypt Upstream Gateway](https://www.petroleum.gov.eg/en/investment/investment-chances/Pages/EUG.aspx)
- [Nigeria Upstream Petroleum Regulatory Commission](https://www.nuprc.gov.ng/)
- [Nigerian Content Development and Monitoring Board: software-solutions collaboration](https://ncdmb.gov.ng/ncdmb-slb-partner-universities-to-unveil-software-solutions-for-oil-and-gas-industry/)
- [Namibia National Upstream Petroleum Local Content Policy, final draft March 2025](https://www.mme.gov.na/files/publications/5e4_Local%20Content%20Policy%20final%20draft%20March%202025.pdf)
- [Angola ANPG: Begónia first oil announcement](https://anpg.co.ao/noticias/anpg-totalenergies-e-parceiros-do-bloco-17-06-anunciam-primeiro-oleo-do-fpso-begonia/)

Every content brief must add market- and topic-specific sources and record publication/retrieval dates.

## 32. Final product acceptance

The programme is ready for implementation planning only when:

1. the product owner approves the scope, tiers, route architecture, and governance;
2. SEO validates or explicitly dispositions all 100 keyword candidates;
3. sales approves priority markets and the qualified-lead definition;
4. SME capacity is assigned for the first wave;
5. engineering confirms route feasibility, content model, analytics, form, sitemap, and localization approach;
6. legal/privacy approves the data-capture approach;
7. every Wave 1 page has a source-backed brief and passes the pre-write anti-doorway test;
8. the six-month schedule is reconciled with actual writing, review, engineering, and design capacity.

Approval of this PRD authorizes detailed content briefs and implementation estimation. It does not authorize publishing unreviewed pages, making local-presence claims, or translating the entire programme automatically.

