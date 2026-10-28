import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { withSocialMetadata } from "@/lib/seo";
import { getAllMarkets, getMarketBySlug, getMarketsByRegion } from "@/lib/oil-gas/markets";
import { getRegionBySlug } from "@/lib/oil-gas/regions";
import styles from "../../oil-gas-subpage.module.css";

const SITE_URL = "https://deviewai.com";

interface PageProps {
  params: Promise<{
    locale: string;
    market: string;
  }>;
}

export async function generateStaticParams() {
  const markets = getAllMarkets();
  return markets.map((m) => ({
    market: m.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, market: marketSlug } = await params;
  const market = getMarketBySlug(marketSlug);
  if (!market) return {};

  const canonicalUrl = `${SITE_URL}/${locale}/industries/oil-and-gas/markets/${market.slug}`;

  return withSocialMetadata({
    title: `${market.name} Oil & Gas Software & Digital Architecture | Deview`,
    description: market.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: market.title,
      description: market.metaDescription,
      url: canonicalUrl,
      siteName: "Deview",
      type: "website",
    },
  });
}

export default async function MarketPage({ params }: PageProps) {
  const { locale, market: marketSlug } = await params;
  const market = getMarketBySlug(marketSlug);

  if (!market) {
    notFound();
  }

  const region = getRegionBySlug(market.regionSlug);
  const neighboringMarkets = getMarketsByRegion(market.regionSlug).filter((m) => m.slug !== market.slug);
  const canonicalUrl = `${SITE_URL}/${locale}/industries/oil-and-gas/markets/${market.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: market.title,
        description: market.metaDescription,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Oil & Gas",
              item: `${SITE_URL}/${locale}/industries/oil-and-gas`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: region ? region.name : "Regions",
              item: region
                ? `${SITE_URL}/${locale}/industries/oil-and-gas/regions/${region.slug}`
                : `${SITE_URL}/${locale}/industries/oil-and-gas#regional-hubs`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: market.name,
              item: canonicalUrl,
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: market.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubpageNav backHref="/industries/oil-and-gas" />

      <main className={styles.page}>
        <div className={styles.shell}>
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href={`/${locale}`}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href={`/${locale}/industries/oil-and-gas`}>Oil &amp; Gas</Link>
            {region && (
              <>
                <span className={styles.breadcrumbSep}>/</span>
                <Link href={`/${locale}/industries/oil-and-gas/regions/${region.slug}`}>
                  {region.name}
                </Link>
              </>
            )}
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{market.name}</span>
          </nav>

          {/* Hero Section */}
          <header className={styles.hero}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} />
              Energy Systems &amp; Digital Architecture · {market.name}
            </div>
            <h1>{market.title}</h1>
            <p className={styles.heroLead}>
              {market.marketOpening}
            </p>
            <div className={styles.heroCtas}>
              <Link href={`/${locale}/contact`} className={styles.primaryBtn}>
                Discuss an Operating System <span>↗</span>
              </Link>
              {region && (
                <Link
                  href={`/${locale}/industries/oil-and-gas/regions/${region.slug}`}
                  className={styles.secondaryBtn}
                >
                  View {region.name} Hub
                </Link>
              )}
            </div>
          </header>

          {/* Trust Bar / Presence Grid */}
          <section className={styles.trustBar} aria-label="Operating market posture">
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>01 · Field Delivery Team</span>
              <h2 className={styles.trustTitle}>Senior Petroleum Architects</h2>
              <p className={styles.trustText}>
                Experienced enterprise software engineers and energy systems architects collaborating directly with operating concessions, national operators, and EPC contractors in {market.name}.
              </p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>02 · Data Sovereignty</span>
              <h2 className={styles.trustTitle}>Private In-Country Hosting</h2>
              <p className={styles.trustText}>
                Fully aligned with local data residency regulations. Deployments operate in domestic data centers, sovereign VPCs, or air-gapped on-premise clusters with zero cloud egress.
              </p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>03 · Custom Architecture</span>
              <h2 className={styles.trustTitle}>100% Tailored Systems</h2>
              <p className={styles.trustText}>
                No rigid off-the-shelf software boxes. We build around your exact field telemetry, DCS historians, and JV governance matrices, delivering full intellectual property ownership.
              </p>
            </div>
          </section>

          {/* Operational Challenges Solved */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Operational Focus</span>
              <h2 className={styles.sectionTitle}>
                Operational Challenges We Solve in {market.name}
              </h2>
              <p className={styles.sectionLead}>
                Upstream concessions, processing plants, and joint-venture operations face distinct logistical and data bottlenecks. We design software that directly targets these operating friction points.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {market.buyerProblems.map((bp, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>{bp.role}</span>
                    <h3 className={styles.cardTitle}>{bp.problem}</h3>
                    <p className={styles.cardBody}>{bp.impact}</p>
                  </div>
                  <Link href={`/${locale}/contact`} className={styles.cardLink}>
                    Request Solution Blueprint <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* What We Build: Priority Systems */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Core Systems</span>
              <h2 className={styles.sectionTitle}>
                Tailored Energy Systems for {market.name}
              </h2>
              <p className={styles.sectionLead}>
                Targeted digital platforms deployed within your sovereign perimeter without disrupting live DCS control logic or safety loops.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {market.priorityWorkflows.map((wf, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>Workflow 0{idx + 1}</span>
                    <h3 className={styles.cardTitle}>{wf.title}</h3>
                    <p className={styles.cardBody}>{wf.description}</p>
                  </div>
                  <Link href={`/${locale}/contact`} className={styles.cardLink}>
                    Discuss Implementation <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* 100% Customizable Section */}
          <section className={styles.section}>
            <div className={styles.customBox}>
              <div className={styles.customHeader}>
                <span className={styles.customBadge}>100% Customizable</span>
                <h2 className={styles.sectionTitle}>
                  Software built around your field reality, not vendor limitations.
                </h2>
                <p className={styles.sectionLead}>
                  Standard off-the-shelf oilfield software forces your engineers into generic workflows, charges per-seat license fees, and resists deep integration with legacy assets. We deliver bespoke software platforms where you own the architecture, logic, and intellectual property.
                </p>
              </div>

              <div className={styles.customGrid}>
                <div className={styles.customItem}>
                  <h4>Connect to Any Historian &amp; SCADA</h4>
                  <p>
                    Bi-directional and unidirectional integration with OSIsoft PI, Honeywell Experion, Yokogawa, AspenTech, and field RTUs via OPC UA, Modbus, MQTT, and WITSML without disturbing safety loops.
                  </p>
                </div>
                <div className={styles.customItem}>
                  <h4>Tailored to Your Asset Topography</h4>
                  <p>
                    Every screen, calculation model, and alert matrix is engineered specifically for your operating reality—whether supergiant onshore fields, offshore platforms, or complex LNG processing trains.
                  </p>
                </div>
                <div className={styles.customItem}>
                  <h4>Complete IP &amp; Source Code Ownership</h4>
                  <p>
                    Your enterprise receives full source code, custom schemas, and private model weights. Zero recurring user licenses, zero vendor lock-in, and total technical independence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sovereign Hosting & Operational Context */}
          <section className={styles.section}>
            <div className={styles.splitGrid}>
              <div>
                <span className={styles.sectionKicker}>Data Residency &amp; Governance</span>
                <h2 className={styles.sectionTitle}>
                  Sovereign Architecture in {market.name}
                </h2>
                <p className={styles.sectionLead} style={{ marginBottom: "24px" }}>
                  Operating in {market.name} requires complete compliance with local cyber standards, in-country hosting frameworks, and strict data confidentiality.
                </p>
                <div className={styles.specList}>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Legal Mandate</span>
                    <h3 className={styles.specTitle}>National Regulatory Framework</h3>
                    <p className={styles.specText}>{market.deploymentAndSovereignty.legalMandate}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Hosting Architecture</span>
                    <h3 className={styles.specTitle}>Recommended Boundary</h3>
                    <p className={styles.specText}>{market.deploymentAndSovereignty.recommendedArchitecture}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Local Value Alignment</span>
                    <h3 className={styles.specTitle}>Local Content Framework</h3>
                    <p className={styles.specText}>{market.localContentProcurement.statutoryFramework}</p>
                  </div>
                </div>
              </div>

              <div>
                <span className={styles.sectionKicker}>Field Environment</span>
                <h2 className={styles.sectionTitle}>
                  Operational Topography &amp; Telemetry
                </h2>
                <p className={styles.sectionLead} style={{ marginBottom: "24px" }}>
                  {market.operatingEnvironment.assetContext}
                </p>
                <div className={styles.specList}>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Telemetry &amp; Connectivity</span>
                    <h3 className={styles.specTitle}>Field Communication Posture</h3>
                    <p className={styles.specText}>{market.operatingEnvironment.connectivity}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Data Governance</span>
                    <h3 className={styles.specTitle}>Concession Security Posture</h3>
                    <p className={styles.specText}>{market.operatingEnvironment.dataGovernance}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Partner Ecosystem</span>
                    <h3 className={styles.specTitle}>Operator &amp; EPC Alignment</h3>
                    <p className={styles.specText}>{market.operatingEnvironment.partnerEcosystem}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market FAQs */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Frequently Asked Questions</span>
              <h2 className={styles.sectionTitle}>
                Questions Regarding Systems in {market.name}
              </h2>
            </div>

            <div className={styles.faqList}>
              {market.faqs.map((faq, idx) => (
                <details key={idx} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>{faq.q}</span>
                    <span className={styles.faqPlus}>+</span>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Neighboring Markets in Region */}
          {neighboringMarkets.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionKicker}>Regional Concessions</span>
                <h2 className={styles.sectionTitle}>
                  Other Operating Markets in {region ? region.name : "This Region"}
                </h2>
                <p className={styles.sectionLead}>
                  Explore how our custom energy software and sovereign architectures are configured for adjacent operating theaters.
                </p>
              </div>

              <div className={styles.countryGrid}>
                {neighboringMarkets.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/${locale}/industries/oil-and-gas/markets/${m.slug}`}
                    className={styles.countryCard}
                  >
                    <div>
                      <div className={styles.countryHeader}>
                        <h3 className={styles.countryName}>{m.name}</h3>
                      </div>
                      <p className={styles.countryDesc}>{m.tagline}</p>
                    </div>
                    <span className={styles.countryArrow}>
                      Explore {m.name} Systems <span>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Closing CTA Box */}
          <section className={styles.closingCta}>
            <div>
              <span className={styles.closingKicker}>Next Steps</span>
              <h2 className={styles.closingTitle}>
                Deploy Custom Operating Software in {market.name}
              </h2>
              <p className={styles.closingBody}>
                Engage our specialized petroleum systems architects to review your telemetry infrastructure, regulatory compliance boundaries, and pilot scoping.
              </p>
            </div>
            <div className={styles.closingAction}>
              <Link href={`/${locale}/contact`} className={styles.closingBtn}>
                Schedule a Scoping Session <span>↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
