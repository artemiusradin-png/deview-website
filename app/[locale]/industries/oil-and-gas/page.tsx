import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SilentCaseVideo } from "@/components/SilentCaseVideo";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { ProofLink } from "@/components/analytics/ProofLink";
import { withSocialMetadata } from "@/lib/seo";
import { OIL_GAS_CASE_LIST, OIL_GAS_HUB_PATH, OIL_GAS_PAGES_UPDATED, oilGasCasePath } from "@/lib/oil-gas-cases";
import { getAllRegions } from "@/lib/oil-gas/regions";
import { getAllMarkets } from "@/lib/oil-gas/markets";
import styles from "./oil-gas.module.css";

const SITE_URL = "https://deviewai.com";
const canonicalUrl = `${SITE_URL}${OIL_GAS_HUB_PATH}`;
const seoTitle = "Oil & Gas Planning, Control & Reporting Software | Deview";
const seoDescription = "Digital oilfield, planning, engineering data and reporting systems for international oil and gas operations.";

export const metadata: Metadata = withSocialMetadata({
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: { title: seoTitle, description: seoDescription, url: canonicalUrl, siteName: "Deview", type: "website" },
});

const CLIENTS = [
  { name: "Lukoil", src: "/client-logos/oil-gas/lukoil.svg", width: 157, height: 32 },
  { name: "Gazprom Neft", src: "/client-logos/oil-gas/gazprom-neft.png", width: 878, height: 433 },
  { name: "Gazprom International", src: "/client-logos/oil-gas/gazprom-international.png", width: 203, height: 100 },
  { name: "Tomskneft", src: "/client-logos/oil-gas/tomskneft.png", width: 138, height: 83 },
  { name: "EnerQuest Energy", src: "/client-logos/enerquest.png", width: 383, height: 91 },
] as const;

const PILLARS = [
  { number: "01", label: "Controls", title: "Capital Project Controls & Scheduling", body: "A governed schedule, actuals and exceptions across the capital portfolio, with Primavera P6 and SAP PM synchronisation where the environment requires it.", proof: "Planning → actuals → management action" },
  { number: "02", label: "Engineering intelligence", title: "Engineering Data & Drawing RAG", body: "Source-grounded retrieval across P&IDs, isometric drawings and technical records, with ASME and API context preserved for expert review.", proof: "Question → cited source → human review" },
  { number: "03", label: "Field operations", title: "Daily Drilling & Field Production", body: "Automated DDR parsing, production telemetry and exception handling assembled into one operating picture from field to management.", proof: "Field event → structured record → decision" },
  { number: "04", label: "Sovereignty", title: "On-Premise & Air-Gapped Security", body: "Private infrastructure, sovereign VPC or air-gapped deployment patterns designed for zero cloud leakage and controlled model access.", proof: "Your environment → your data boundary" },
] as const;

const areas = OIL_GAS_CASE_LIST.reduce<Array<{ discipline: string; cases: typeof OIL_GAS_CASE_LIST }>>((groups, item) => {
  const existing = groups.find((group) => group.discipline === item.discipline);
  if (existing) existing.cases.push(item); else groups.push({ discipline: item.discipline, cases: [item] });
  return groups;
}, []);

const projectLogoCredits = [...new Map(
  OIL_GAS_CASE_LIST.flatMap((project) => project.logo?.credit ? [[project.logo.src, project.logo.credit] as const] : []),
).values()];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: canonicalUrl,
  name: seoTitle,
  description: seoDescription,
  dateModified: OIL_GAS_PAGES_UPDATED,
  mainEntity: { "@type": "ItemList", numberOfItems: OIL_GAS_CASE_LIST.length, itemListElement: OIL_GAS_CASE_LIST.map((item, index) => ({ "@type": "ListItem", position: index + 1, url: `${SITE_URL}${oilGasCasePath(item.slug)}`, name: `${item.company}: ${item.project}` })) },
};

export default function OilAndGasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <main className={styles.page}>
        <div className={styles.shell}>
          <SubpageNav backHref="/case-studies" />
          <header className={styles.hero}>
            <div className={styles.kicker}><span>01</span> Oil, gas &amp; energy operations</div>
            <div className={styles.heroGrid}>
              <h1>Make the field legible to the whole operation.</h1>
              <div><p>Digital oilfield systems, engineering data and project controls for teams that cannot accept a disconnected record—or an uncontrolled cloud boundary.</p><Link href="/en/contact" className={styles.inlineLink}>Discuss an operating system <span>↗</span></Link></div>
            </div>
          </header>

          <section className={styles.clients} aria-label="Energy project companies">
            <p>Energy project experience</p>
            <div>
              {CLIENTS.map((client) => <span key={client.name}><Image src={client.src} alt={client.name} width={client.width} height={client.height} unoptimized /></span>)}
              <span className={styles.wordmark}>JOC Vietgazprom</span>
            </div>
          </section>

          <section className={styles.flagship} aria-labelledby="dof-heading">
            <div className={styles.sectionLead}>
              <div><p className={styles.kicker}><span>02</span> Deview DOF</p><h2 id="dof-heading">One operating picture.<br />No loose ends.</h2></div>
              <p>Deview DOF connects the plan, the engineering record and daily field reality without weakening the data boundary around critical operations.</p>
            </div>
            <div className={styles.film}>
              <SilentCaseVideo src="/video/cases/enerquest-dof.mp4" poster="/images/cases/video-posters/enerquest-dof.jpg" className={styles.filmVideo} />
              <div className={styles.filmCaption}>
                <div style={{ marginBottom: "20px" }}>
                  <Image
                    src="/client-logos/enerquest-white.png"
                    alt="EnerQuest Energy"
                    width={383}
                    height={91}
                    style={{ height: "28px", width: "auto", objectFit: "contain" }}
                    unoptimized
                  />
                </div>
                <span>Nigeria / Pilot</span><strong>EnerQuest Energy</strong><p>Production, equipment and exceptions in one upstream operating view.</p><Link href="/en/case-studies/enerquest">Read the pilot <span>↗</span></Link>
              </div>
            </div>
            <ol className={styles.pillars}>
              {PILLARS.map((pillar) => <li key={pillar.number}><div className={styles.pillarTop}><span>{pillar.number}</span><em>{pillar.label}</em></div><h3>{pillar.title}</h3><p>{pillar.body}</p><small>{pillar.proof}</small></li>)}
            </ol>
          </section>

          <section className={styles.projects} aria-labelledby="projects-heading">
            <div className={styles.sectionLead}>
              <div><p className={styles.kicker}><span>03</span> Field record</p><h2 id="projects-heading">Six systems.<br />A decade of operating context.</h2></div>
              <p>Original project facts, scope and architectural drawings—each connected to its complete case record.</p>
            </div>
            <div className={styles.projectGrid}>
              {OIL_GAS_CASE_LIST.map((project, index) => (
                <article key={project.slug} className={styles.projectCard}>
                  <ProofLink
                    href={oilGasCasePath(project.slug)}
                    sourceAssetId="oil-and-gas-industry"
                    proofId={project.slug}
                    className={styles.projectVisual}
                  >
                    <Image src={`/images/cases/covers/${project.slug}.webp`} alt={`Architectural drawing for ${project.company}: ${project.project}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
                    {project.logo ? <span className={styles.projectLogo}><Image src={project.logo.src} alt={project.logo.alt} width={project.logo.width} height={project.logo.height} unoptimized /></span> : null}
                    <span>View case ↗</span>
                  </ProofLink>
                  <div className={styles.projectMeta}><span>0{index + 1} / {project.year}</span><em>{project.discipline}</em></div>
                  <h3>
                    <ProofLink
                      href={oilGasCasePath(project.slug)}
                      sourceAssetId="oil-and-gas-industry"
                      proofId={project.slug}
                    >
                      {project.company}<br /><span>{project.project}</span>
                    </ProofLink>
                  </h3>
                  <p>{project.summary}</p>
                  {project.scope ? <ul>{project.scope.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                </article>
              ))}
            </div>
            {projectLogoCredits.length ? <p className={styles.logoCredits}>{projectLogoCredits.map((credit) => <a key={credit.href} href={credit.href}>{credit.text}</a>)}</p> : null}
          </section>

          <section className={styles.matrix} aria-labelledby="matrix-heading">
            <div><p className={styles.kicker}><span>04</span> Discipline matrix</p><h2 id="matrix-heading">Find the work by operational discipline.</h2></div>
            <ul>
              {areas.map((area, index) => <li key={area.discipline}><span>0{index + 1}</span><h3>{area.discipline}</h3><div>{area.cases.map((project) => <ProofLink key={project.slug} sourceAssetId="oil-and-gas-discipline-matrix" proofId={project.slug} href={oilGasCasePath(project.slug)}>{project.company} · {project.year}<b>↗</b></ProofLink>)}</div></li>)}
            </ul>
          </section>

          <section className={styles.matrix} id="regional-hubs" aria-labelledby="regions-heading">
            <div>
              <p className={styles.kicker}><span>05</span> Regional hubs &amp; markets</p>
              <h2 id="regions-heading">5 Regional Hubs. 25 Sovereign Energy Markets.</h2>
            </div>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
                {getAllRegions().map((region) => (
                  <Link
                    key={region.slug}
                    href={`/en/industries/oil-and-gas/regions/${region.slug}`}
                    style={{
                      padding: "24px",
                      background: "#fff",
                      border: "1px solid var(--ds-line, #ded5c5)",
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#806000", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                      Regional Hub
                    </span>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 8px" }}>{region.name}</h3>
                    <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--ds-muted, #555047)", margin: "0 0 16px", flexGrow: 1 }}>
                      {region.title}
                    </p>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--ds-ink, #12100e)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Explore Operating Hub →
                    </span>
                  </Link>
                ))}
              </div>

              <div style={{ padding: "28px", background: "rgba(18, 16, 14, 0.02)", border: "1px solid var(--ds-line, #ded5c5)" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", color: "var(--ds-ink, #12100e)" }}>
                  Sovereign Country Concessions &amp; Markets
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {getAllMarkets().map((m) => (
                    <Link
                      key={m.slug}
                      href={`/en/industries/oil-and-gas/markets/${m.slug}`}
                      style={{
                        padding: "8px 14px",
                        background: "#fff",
                        border: "1px solid var(--ds-line, #ded5c5)",
                        fontSize: "12px",
                        fontWeight: 500,
                        textDecoration: "none",
                        color: "var(--ds-ink, #12100e)",
                      }}
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.closing}><p>Start with the operating gap.</p><h2>What can&rsquo;t management see until someone rebuilds the report?</h2><Link href="/en/contact">Map the system <span>↗</span></Link></section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
