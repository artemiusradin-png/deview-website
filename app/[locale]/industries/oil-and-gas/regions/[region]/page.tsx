import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { withSocialMetadata } from "@/lib/seo";
import { getAllRegions, getRegionBySlug } from "@/lib/oil-gas/regions";
import styles from "../../oil-gas-subpage.module.css";

const SITE_URL = "https://deviewai.com";

interface PageProps {
  params: Promise<{
    locale: string;
    region: string;
  }>;
}

export async function generateStaticParams() {
  const regions = getAllRegions();
  return regions.map((r) => ({
    region: r.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, region } = await params;
  const hub = getRegionBySlug(region);
  if (!hub) return {};

  const canonicalUrl = `${SITE_URL}/${locale}/industries/oil-and-gas/regions/${hub.slug}`;

  return withSocialMetadata({
    title: `${hub.name} Oil & Gas Software & Digital Architecture | Deview`,
    description: hub.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: hub.title,
      description: hub.metaDescription,
      url: canonicalUrl,
      siteName: "Deview",
      type: "website",
    },
  });
}

export default async function RegionalHubPage({ params }: PageProps) {
  const { locale, region } = await params;
  const hub = getRegionBySlug(region);

  if (!hub) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${locale}/industries/oil-and-gas/regions/${hub.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: hub.title,
        description: hub.metaDescription,
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
              name: "Regions",
              item: `${SITE_URL}/${locale}/industries/oil-and-gas#regional-hubs`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: hub.name,
              item: canonicalUrl,
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: hub.faqs.map((faq) => ({
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
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{hub.name}</span>
          </nav>

          {/* Hero Section */}
          <header className={styles.hero}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} />
              Regional Energy Systems · {hub.name}
            </div>
            <h1>{hub.title}</h1>
            <p className={styles.heroLead}>
              {hub.executiveSummary}
            </p>
            <div className={styles.heroCtas}>
              <Link href={`/${locale}/contact`} className={styles.primaryBtn}>
                Discuss a Regional System <span>↗</span>
              </Link>
              <Link
                href={`/${locale}/industries/oil-and-gas#dof-heading`}
                className={styles.secondaryBtn}
              >
                Explore Deview DOF Platform
              </Link>
            </div>
          </header>

          {/* Trust Bar / Presence Grid */}
          <section className={styles.trustBar} aria-label="Regional capability summary">
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>01 · Engineering Team</span>
              <h2 className={styles.trustTitle}>Senior Petroleum Architects</h2>
              <p className={styles.trustText}>
                Dedicated energy software architects and senior engineers deployed to collaborate directly with operators, joint ventures, and engineering contractors in {hub.name}.
              </p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>02 · Data Sovereignty</span>
              <h2 className={styles.trustTitle}>Private &amp; Air-Gapped Hosting</h2>
              <p className={styles.trustText}>
                Deployments engineered for domestic data centers, sovereign regional cloud VPCs, or air-gapped on-premise facilities with zero cross-border telemetry egress.
              </p>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>03 · Custom Development</span>
              <h2 className={styles.trustTitle}>100% Tailored Systems</h2>
              <p className={styles.trustText}>
                No rigid off-the-shelf software boxes. We build around your existing historians, telemetry protocols, and approval workflows, with full client code ownership.
              </p>
            </div>
          </section>

          {/* What We Build: Core Capabilities */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Core Systems</span>
              <h2 className={styles.sectionTitle}>
                What We Build for Operators in {hub.name}
              </h2>
              <p className={styles.sectionLead}>
                From wellhead telemetry and automated daily drilling records to multi-contractor capital governance, our platforms eliminate operational blind spots.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {hub.keyWorkflows.map((workflow, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardBadge}>Capability 0{idx + 1}</span>
                    <h3 className={styles.cardTitle}>{workflow.title}</h3>
                    <p className={styles.cardBody}>{workflow.description}</p>
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className={styles.cardLink}
                  >
                    Discuss this workflow <span>→</span>
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

          {/* Operating Context & Sovereign Architecture */}
          <section className={styles.section}>
            <div className={styles.splitGrid}>
              <div>
                <span className={styles.sectionKicker}>Operating Context</span>
                <h2 className={styles.sectionTitle}>
                  Operating Reality &amp; Local Environment
                </h2>
                <p className={styles.sectionLead} style={{ marginBottom: "24px" }}>
                  Operating in {hub.name} requires software that understands regional commercial structures, partner joint ventures, and national content requirements.
                </p>
                <div className={styles.specList}>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Operator Ecosystem</span>
                    <h3 className={styles.specTitle}>National &amp; Concession Operators</h3>
                    <p className={styles.specText}>{hub.operatingContext.operators}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Asset Infrastructure</span>
                    <h3 className={styles.specTitle}>Hydrocarbon &amp; Processing Topography</h3>
                    <p className={styles.specText}>{hub.operatingContext.assetTypes}</p>
                  </div>
                  <div className={styles.specCard}>
                    <span className={styles.specLabel}>Local Value &amp; Compliance</span>
                    <h3 className={styles.specTitle}>Procurement &amp; Local Content Frameworks</h3>
                    <p className={styles.specText}>{hub.operatingContext.procurementRegime}</p>
                  </div>
                </div>
              </div>

              <div>
                <span className={styles.sectionKicker}>Deployment Patterns</span>
                <h2 className={styles.sectionTitle}>
                  Sovereign Hosting &amp; Security Topologies
                </h2>
                <p className={styles.sectionLead} style={{ marginBottom: "24px" }}>
                  {hub.operatingContext.hostingAndData}
                </p>
                <div className={styles.specList}>
                  {hub.deploymentPatterns.map((pat, idx) => (
                    <div key={idx} className={styles.specCard}>
                      <span className={styles.specLabel}>Topology 0{idx + 1} · {pat.suitability}</span>
                      <h3 className={styles.specTitle}>{pat.name}</h3>
                      <p className={styles.specText}>{pat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Country Operating Markets */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Regional Markets</span>
              <h2 className={styles.sectionTitle}>
                Country Operating Concessions in {hub.name}
              </h2>
              <p className={styles.sectionLead}>
                Every country market has distinct sovereign hosting mandates, joint venture operating frameworks, and field realities. Select a market to explore our tailored capabilities.
              </p>
            </div>

            <div className={styles.countryGrid}>
              {hub.countries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${locale}/industries/oil-and-gas/markets/${c.slug}`}
                  className={styles.countryCard}
                >
                  <div>
                    <div className={styles.countryHeader}>
                      <h3 className={styles.countryName}>{c.name}</h3>
                    </div>
                    <p className={styles.countryDesc}>{c.rationale}</p>
                  </div>
                  <span className={styles.countryArrow}>
                    Explore {c.name} Market <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Regional FAQs */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionKicker}>Frequently Asked Questions</span>
              <h2 className={styles.sectionTitle}>
                Technical &amp; Delivery Questions for {hub.name}
              </h2>
            </div>

            <div className={styles.faqList}>
              {hub.faqs.map((faq, idx) => (
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

          {/* Closing CTA Box */}
          <section className={styles.closingCta}>
            <div>
              <span className={styles.closingKicker}>Next Steps</span>
              <h2 className={styles.closingTitle}>
                Plan an Operating Architecture for {hub.name}
              </h2>
              <p className={styles.closingBody}>
                Schedule a technical review with our senior energy software architects to evaluate workflow fit, sovereign hosting boundaries, and seamless integration with your existing historians.
              </p>
            </div>
            <div className={styles.closingAction}>
              <Link href={`/${locale}/contact`} className={styles.closingBtn}>
                Book a Technical Scoping Session <span>↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
