import Image from "next/image";
import Link from "next/link";
import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import {
  OIL_GAS_CASE_LIST,
  OIL_GAS_HUB_PATH,
  OIL_GAS_PAGES_UPDATED,
  oilGasCasePath,
} from "@/lib/oil-gas-cases";

const SITE_URL = "https://deviewai.com";
const canonicalUrl = `${SITE_URL}${OIL_GAS_HUB_PATH}`;
const seoTitle = "Oil & Gas Software & Digital Oilfield Solutions (Deview DOF) | Deview";
const seoDescription =
  "Deview DOF (Digital Oilfield): capital project controls, technical engineering document RAG, and field data pipelines for international energy operators. Proven with Lukoil, Gazprom Neft, and Vietgazprom.";

export const metadata: Metadata = withSocialMetadata({
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: canonicalUrl,
    siteName: "Deview",
    type: "website",
  },
});

/** Disciplines in portfolio order, each with the projects that belong to it. */
const areas = OIL_GAS_CASE_LIST.reduce<Array<{ discipline: string; cases: typeof OIL_GAS_CASE_LIST }>>(
  (groups, c) => {
    const existing = groups.find((g) => g.discipline === c.discipline);
    if (existing) existing.cases.push(c);
    else groups.push({ discipline: c.discipline, cases: [c] });
    return groups;
  },
  [],
);

const ENERGY_CLIENTS = [
  { name: "Lukoil", logo: "/client-logos/oil-gas/lukoil.svg", width: 140, height: 32 },
  { name: "Gazprom Neft", logo: "/client-logos/oil-gas/gazprom-neft.png", width: 130, height: 60 },
  { name: "Gazprom International", logo: "/client-logos/oil-gas/gazprom-international.png", width: 140, height: 65 },
  { name: "Tomskneft", logo: "/client-logos/oil-gas/tomskneft.png", width: 120, height: 40 },
  { name: "EnerQuest Energy", logo: "/client-logos/enerquest.png", width: 150, height: 45 },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "en",
      dateModified: OIL_GAS_PAGES_UPDATED,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Deview", url: SITE_URL },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Deview" },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        name: "Oil & gas projects",
        numberOfItems: OIL_GAS_CASE_LIST.length,
        itemListElement: OIL_GAS_CASE_LIST.map((c, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}${oilGasCasePath(c.slug)}`,
          name: `${c.company}: ${c.project}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Deview", item: `${SITE_URL}/en` },
        { "@type": "ListItem", position: 2, name: "Oil & gas", item: canonicalUrl },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${canonicalUrl}#software-deview-dof`,
      name: "Deview DOF (Digital Oilfield)",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "IndustrialEngineeringApplication",
      operatingSystem: "Web, On-Premise, Air-Gapped Dedicated VPC",
      description:
        "Digital oilfield, capital project scheduling, and engineering document intelligence software suite for upstream operators and EPC contractors.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Custom enterprise air-gapped installation and VPC deployment",
      },
      featureList: [
        "Primavera P6 and SAP PM project scheduling integration and contractor audit",
        "Semantic engineering drawing and P&ID document intelligence (RAG)",
        "Daily Drilling Report (DDR) and field production data ingestion pipelines",
        "Air-gapped on-premise security with zero cloud telemetry for critical infrastructure",
      ],
      provider: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Deview",
        url: SITE_URL,
      },
    },
  ],
};

export default function OilAndGasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-20 pt-24 text-[var(--text)] sm:pb-28 sm:pt-28">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/case-studies" />

          {/* Header */}
          <header className="mb-14 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--white-40)]">
                Energy &amp; Heavy Industry · Industry Silo
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--white-30)]" aria-hidden="true" />
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.15em] text-[#ffc933]">
                Flagship Technology: Deview DOF
              </span>
            </div>
            <div className="rule mb-8" />
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <div>
                <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-[var(--white-100)]">
                  Capital project controls, document intelligence &amp; field telemetry.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
                  High-stakes software engineering, data pipelines, and private AI systems for upstream, offshore, and capital project operations. Proven across Fortune Global 500 energy supermajors since 2010.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-l border-[var(--white-15)] pl-6 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  From engineering data management for Lukoil to project scheduling for Gazprom Neft and offshore planning for Vietgazprom in Hanoi.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    Air-Gapped Ready
                  </span>
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    Primavera P6 &amp; SAP Sync
                  </span>
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    ASME / API Aligned
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Institutional Energy Client Trust Strip */}
          <section className="mb-20 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-8" aria-label="Energy clients">
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Trusted by International Operators &amp; Supermajors
            </p>
            <div className="flex flex-wrap items-center justify-between gap-8 pt-2">
              {ENERGY_CLIENTS.map((client) => (
                <div key={client.name} className="flex items-center justify-center grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="max-h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
              <div className="font-semibold tracking-wider text-xs uppercase text-[var(--white-60)]">
                JOC Vietgazprom
              </div>
            </div>
          </section>

          {/* Stats strip */}
          <section className="mb-20 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-4" aria-label="Energy track record">
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                15+ Yrs
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Industrial Heritage
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Energy software delivery since 2010
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                6 Sites
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Major Operator Systems
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Upstream, offshore &amp; pipeline operations
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                100%
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                On-Premise / VPC
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Air-gapped security, zero external telemetry
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                P6 &amp; SAP
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Enterprise Integration
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Direct ERP &amp; SCADA historian interfaces
              </span>
            </div>
          </section>

          {/* Flagship Technology Platform: Deview DOF */}
          <section className="mb-24 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-10" aria-labelledby="dof-heading">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[var(--white-60)]">
                Flagship Platform · Deview DOF
              </span>
            </div>
            <div className="mb-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <h2 id="dof-heading" className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-snug text-[var(--white-100)]">
                  Deview DOF: Digital Oilfield &amp; Project Controls
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                  A high-performance modular software suite purpose-built for energy supermajors, EPC contractors, and exploration operators. Tested across upstream, offshore, and capital infrastructure assets.
                </p>
              </div>
              <div className="space-y-2 text-xs text-[var(--text-muted)] border-l border-[var(--white-15)] pl-6">
                <div className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Air-gapped / Private VPC Deployments</div>
                <div className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Primavera P6 &amp; SAP PM Integration</div>
                <div className="flex items-center gap-2"><span className="text-emerald-400">✓</span> ASME / API / ISO Engineering Compliant</div>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between bg-[var(--background)] p-6">
                <div>
                  <span className="text-xs font-mono text-[#ffc933]">01 / CONTROLS</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)]">
                    Capital Project Controls &amp; Scheduling
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    Real-time Primavera P6 and SAP project integration, milestone tracking, and contractor billing verification across multi-billion-dollar field developments.
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--white-10)] pt-3 text-[0.7rem] text-[var(--white-70)]">
                  Proven at: <strong>Gazprom Neft</strong> &amp; <strong>Tomskneft</strong>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-[var(--background)] p-6">
                <div>
                  <span className="text-xs font-mono text-[#ffc933]">02 / DOC INTELLIGENCE</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)]">
                    Engineering Data &amp; Drawing RAG
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    Semantic retrieval across P&amp;IDs, isometric drawings, HAZOP studies, and vendor maintenance manuals with tag-to-drawing cross-referencing.
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--white-10)] pt-3 text-[0.7rem] text-[var(--white-70)]">
                  Proven at: <strong>Lukoil-Engineering</strong>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-[var(--background)] p-6">
                <div>
                  <span className="text-xs font-mono text-[#ffc933]">03 / FIELD PIPELINES</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)]">
                    Daily Drilling &amp; Field Production
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    Automated parsing of Daily Drilling Reports (DDR), well test records, and production historian telemetry into unified executive dashboards.
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--white-10)] pt-3 text-[0.7rem] text-[var(--white-70)]">
                  Proven at: <strong>Gazprom Int.</strong> &amp; <strong>Vietgazprom</strong>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-[var(--background)] p-6">
                <div>
                  <span className="text-xs font-mono text-[#ffc933]">04 / SOVEREIGNTY</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)]">
                    On-Premise &amp; Air-Gapped Security
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                    Zero external telemetry, self-hosted LLMs, sovereign cloud VPCs, and localized role-based access for critical national infrastructure (CNI).
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--white-10)] pt-3 text-[0.7rem] text-[var(--white-70)]">
                  Private Bare-Metal / Dedicated VPC
                </div>
              </div>
            </div>
          </section>

          {/* Visual Project Cards Grid */}
          <section className="mb-24" aria-labelledby="projects-heading">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label mb-2">Portfolio</p>
                <h2 id="projects-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Six major oil &amp; gas deployments.
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-[var(--text-muted)]">
                Each project represents a production enterprise system delivered for international operators and supermajors.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OIL_GAS_CASE_LIST.map((c) => (
                <article
                  key={c.slug}
                  className="group flex flex-col justify-between border border-[var(--white-20)] bg-[var(--surface)] overflow-hidden transition hover:border-[var(--white-40)]"
                >
                  <div>
                    {/* Visual Architectural Cover */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-[var(--white-15)]">
                      <Image
                        src={`/images/cases/covers/${c.slug}.webp`}
                        alt={`Architectural drawing of ${c.project}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 rounded bg-[var(--background)]/90 px-2 py-0.5 text-[0.65rem] font-mono text-[var(--white-80)] backdrop-blur-sm">
                        {c.year}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#ffc933]">
                          {c.company}
                        </span>
                        {c.location ? (
                          <span className="text-[0.65rem] text-[var(--text-muted)]">
                            {c.location}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="text-lg font-medium leading-snug text-[var(--white-100)] group-hover:text-white">
                        <Link href={oilGasCasePath(c.slug)} className="hover:underline underline-offset-4">
                          {c.project}
                        </Link>
                      </h3>

                      <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] line-clamp-3">
                        {c.summary}
                      </p>

                      {c.scope && c.scope.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {c.scope.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="border border-[var(--white-10)] bg-[var(--background)] px-2 py-0.5 text-[0.65rem] text-[var(--white-70)]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="border-t border-[var(--white-10)] bg-[var(--background)] p-4 px-6">
                    <Link
                      href={oilGasCasePath(c.slug)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white-80)] hover:text-[var(--white-100)]"
                    >
                      Read full case study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Areas of Experience Matrix */}
          <section className="mb-24 border-y border-[var(--white-20)] py-14 sm:py-20" aria-labelledby="areas-heading">
            <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">Disciplines</p>
                <h2 id="areas-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Turning operating and field data into management control.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:justify-self-end">
                From scheduling departmental capital projects to executive portals for production, reserves, and portfolio modelling.
              </p>
            </div>
            <ul className="grid border-l border-t border-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <li
                  key={area.discipline}
                  className="flex flex-col gap-4 border-b border-r border-[var(--white-20)] bg-[var(--surface)] p-6"
                >
                  <h3 className="text-base font-medium text-[var(--white-100)]">{area.discipline}</h3>
                  <ul className="space-y-2.5">
                    {area.cases.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={oilGasCasePath(c.slug)}
                          className="flex items-center justify-between text-xs text-[var(--white-70)] hover:text-[var(--white-100)]"
                        >
                          <span className="underline decoration-[var(--white-20)] underline-offset-4">{c.company}</span>
                          <span className="font-mono text-[var(--white-40)]">({c.year}) ↗</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Enterprise Solutions */}
          <section className="mb-24" aria-labelledby="solutions-heading">
            <p className="section-label mb-2">Technical Capabilities</p>
            <h2 id="solutions-heading" className="mb-8 text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
              Modular enterprise solutions for energy operations.
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/en/solutions/upstream-production-management-system"
                className="group flex flex-col justify-between border border-[var(--white-15)] bg-[var(--surface)] p-6 transition hover:border-[var(--white-30)] hover:bg-[var(--white-5)]"
              >
                <div>
                  <span className="font-mono text-xs text-[#ffc933]">SOLUTION · UPSTREAM</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)] group-hover:text-white">
                    Upstream Production Management System
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    Well allocations, field production logging, daily dispatch, and ERP accounting reconciliation.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--white-80)]">
                  Explore solution <span aria-hidden="true">→</span>
                </span>
              </Link>

              <Link
                href="/en/solutions/rag-assistant-for-engineering-documents"
                className="group flex flex-col justify-between border border-[var(--white-15)] bg-[var(--surface)] p-6 transition hover:border-[var(--white-30)] hover:bg-[var(--white-5)]"
              >
                <div>
                  <span className="font-mono text-xs text-[#ffc933]">SOLUTION · DOCUMENT AI</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)] group-hover:text-white">
                    Engineering Document &amp; Drawing RAG
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    Semantic search and cross-referencing across P&amp;IDs, isometric drawings, HAZOP logs, and manuals.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--white-80)]">
                  Explore solution <span aria-hidden="true">→</span>
                </span>
              </Link>

              <Link
                href="/en/solutions/production-historian-integration"
                className="group flex flex-col justify-between border border-[var(--white-15)] bg-[var(--surface)] p-6 transition hover:border-[var(--white-30)] hover:bg-[var(--white-5)]"
              >
                <div>
                  <span className="font-mono text-xs text-[#ffc933]">SOLUTION · TELEMETRY</span>
                  <h3 className="mt-2 text-base font-medium text-[var(--white-100)] group-hover:text-white">
                    Production Historian &amp; SCADA Integration
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    Direct integration with OSIsoft PI, Aspen InfoPlus.21, and OPC-UA streams with real-time variance alarms.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--white-80)]">
                  Explore solution <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </section>

          {/* Architecture Consultation CTA */}
          <section className="border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-14" aria-labelledby="cta-heading">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-2">Technical Scoping</p>
                <h2 id="cta-heading" className="text-[clamp(1.35rem,3.5vw,2.2rem)] font-medium leading-tight text-[var(--white-100)]">
                  Planning, control or document intelligence for your operations?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                  Tell us what your engineering or operations team is trying to schedule, track, or automate. We reply with a technical architecture recommendation, air-gapped deployment constraints, and cost estimates.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/en/contact" className="btn-outline">
                  Discuss a project
                </Link>
                <Link href="/en/case-studies" className="btn-outline">
                  View all case studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
