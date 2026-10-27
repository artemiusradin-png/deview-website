import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/solutions/solutions.module.css";
import { LEGAL_ENTITY } from "@/lib/site-contact";
import { SOLUTION_PAGES, pagesIn, publishedHubs, solutionPath } from "@/lib/solutions";
import { SolutionsExplorer } from "@/components/solutions/SolutionsExplorer";

const SITE_URL = "https://deviewai.com";
const url = `${SITE_URL}/en/solutions`;
const seoTitle = "Enterprise Software Solutions by Industry | Deview";
const seoDescription =
  "Custom enterprise software for banking and payments, oil and gas, manufacturing and agriculture: lending platforms, production management, MES, data platforms and cloud security.";

export const metadata: Metadata = withSocialMetadata({
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: url },
  openGraph: { title: seoTitle, description: seoDescription, url, siteName: "Deview", type: "website" },
});

export default function SolutionsLibraryPage() {
  const hubs = publishedHubs();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: seoTitle,
        description: seoDescription,
        inLanguage: "en",
        dateModified: SOLUTION_PAGES.map((p) => p.updated).sort().at(-1),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          name: "Enterprise solutions",
          numberOfItems: SOLUTION_PAGES.length,
          itemListElement: SOLUTION_PAGES.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/en${solutionPath(p.slug)}`,
            name: p.h1,
          })),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Deview",
          legalName: LEGAL_ENTITY.name.toUpperCase(),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Deview", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Solutions", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className={styles.page}>
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/en">Deview</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Solutions</span>
          </nav>

          <header className={`${styles.heroSection} ${styles.heroLibrary}`}>
            <div className={styles.heroText}>
              <div className={styles.heroBadgeRow}>
                <span className={styles.kickerBadge}>ENTERPRISE ARCHITECTURE CATALOG</span>
                <span className={styles.heroSystemCount}>
                  {SOLUTION_PAGES.length} Production Systems
                </span>
              </div>
              <h1 className={styles.title}>Enterprise software solutions by industry</h1>
              <p className={styles.intro}>
                Custom platforms for banks and payment companies, oil and gas operators,
                manufacturers and agricultural enterprises. Each page describes one system in
                engineering terms: what it does, how it connects, what it must satisfy and when
                custom development is the right call. Every system includes an engineering specification
                or RFP template you can adapt for your enterprise.
              </p>

              {/* Master Catalog Stats */}
              <div className={styles.heroMetricsStrip}>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>{SOLUTION_PAGES.length}</span>
                  <span className={styles.metricLabel}>Production Architectures</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>{hubs.length}</span>
                  <span className={styles.metricLabel}>Core Industry Sectors</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>{SOLUTION_PAGES.length}</span>
                  <span className={styles.metricLabel}>Free Included Specs</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricValue}>100%</span>
                  <span className={styles.metricLabel}>Client IP Ownership</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#catalogue" className={styles.button}>
                  Browse Catalogue <span aria-hidden="true">↓</span>
                </a>
                <Link href="/en/contact" className={styles.buttonGhost}>
                  Talk to an engineer <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </header>

          {/* Industry Hubs Deep-Dive Grid */}
          <section className={styles.section} aria-labelledby="hubs-grid-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>INDUSTRY SECTOR HUBS</span>
              <h2 id="hubs-grid-title" className={styles.sectionTitle}>
                Dedicated sector portals.
              </h2>
              <p className={styles.sectionLead}>
                Dive into deep domain architectures, compliance frameworks, and common requirements for each major sector.
              </p>
            </div>

            <div className={styles.othersGrid}>
              {hubs.map((hub) => {
                const count = pagesIn(hub.vertical).length;
                return (
                  <Link
                    key={hub.slug}
                    href={`/en${solutionPath(hub.slug)}`}
                    className={styles.otherHubCard}
                  >
                    <div className={styles.otherHubHeader}>
                      <span className={styles.otherHubKicker}>
                        {hub.kicker.replace("Enterprise solutions · ", "")}
                      </span>
                      <span className={styles.otherHubCount}>{count} Systems</span>
                    </div>
                    <h3 className={styles.otherHubTitle}>{hub.navLabel}</h3>
                    <p className={styles.otherHubDesc}>{hub.seoDescription}</p>
                    <div className={styles.otherHubLink}>
                      <span>Explore Sector Hub</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Master Systems Catalogue Explorer */}
          <section id="catalogue" className={styles.section} aria-labelledby="catalogue-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>SYSTEMS CATALOGUE</span>
              <h2 id="catalogue-title" className={styles.sectionTitle}>
                All {SOLUTION_PAGES.length} enterprise software solutions.
              </h2>
              <p className={styles.sectionLead}>
                Filter by industry sector, functional area, or search by technical keyword, protocol, or regulatory standard.
              </p>
            </div>

            <SolutionsExplorer
              pages={SOLUTION_PAGES}
              showVerticalTabs={true}
              searchPlaceholder="Search 91 systems by keyword, protocol, or standard (e.g. SME, OSDU, MES, EUDR, RAG)..."
            />
          </section>

          {/* CTA Banner */}
          <section className={styles.cta} aria-labelledby="cta-title">
            <span className={styles.kicker}>Next step</span>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Tell us what you need built.
            </h2>
            <p className={styles.body}>
              Describe the system and the systems around it. An engineer replies within 1–2
              business days.
            </p>
            <Link href="/en/contact" className={styles.button}>
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </section>
          <div style={{ height: 48 }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
