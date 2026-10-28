import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { LEGAL_ENTITY } from "@/lib/site-contact";
import {
  pagesIn,
  publishedHubs,
  solutionPath,
  type SolutionHub,
} from "@/lib/solutions";
import { coverPath } from "./covers";
import { SolutionsExplorer } from "./SolutionsExplorer";
import { SolutionEngagementTracker } from "@/components/analytics/SolutionEngagementTracker";
import styles from "./solutions.module.css";

const SITE_URL = "https://deviewai.com";

/** A vertical hub: what enterprises in the sector need, and the solution pages we have for it. */
export function SolutionHubView({ hub }: { hub: SolutionHub }) {
  const pages = pagesIn(hub.vertical);
  const others = publishedHubs().filter((h) => h.slug !== hub.slug);
  const url = `${SITE_URL}/en${solutionPath(hub.slug)}`;
  const cover = pages[0] ? coverPath(pages[0].slug) : null;
  const flagshipTitle = pages[0]?.h1 ?? hub.navLabel;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: hub.seoTitle,
        description: hub.seoDescription,
        inLanguage: "en",
        dateModified: pages.map((p) => p.updated).sort().at(-1),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          name: hub.h1,
          numberOfItems: pages.length,
          itemListElement: pages.map((p, i) => ({
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
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/en/solutions` },
          { "@type": "ListItem", position: 3, name: hub.navLabel, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: hub.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SolutionEngagementTracker
        assetId={hub.slug}
        solution={hub.slug}
        locale="en"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className={styles.page}>
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/en/solutions">Solutions</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{hub.navLabel}</span>
          </nav>

          {/* Hero Section with Live Metrics & Architecture Frame */}
          <header className={styles.heroSection}>
            <div className={styles.heroLayout}>
              <div className={styles.heroText}>
                <div className={styles.heroBadgeRow}>
                  <span className={styles.kickerBadge}>
                    {hub.kicker.replace("Enterprise solutions · ", "")}
                  </span>
                  <span className={styles.heroSystemCount}>
                    {pages.length} Production Systems
                  </span>
                </div>

                <h1 className={styles.title}>{hub.h1}</h1>
                <p className={styles.intro}>{hub.intro}</p>

                {/* Key Metrics Strip */}
                <div className={styles.heroMetricsStrip}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>{pages.length}</span>
                    <span className={styles.metricLabel}>Production Blueprints</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>100%</span>
                    <span className={styles.metricLabel}>Client IP Ownership</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>0</span>
                    <span className={styles.metricLabel}>Vendor Lock-in</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>48h</span>
                    <span className={styles.metricLabel}>Discovery Response</span>
                  </div>
                </div>

                <div className={styles.heroActions}>
                  <a href="#systems" className={styles.button}>
                    Explore {pages.length} Systems <span aria-hidden="true">↓</span>
                  </a>
                  <Link href="/en/contact" className={styles.buttonGhost}>
                    Talk to an engineer <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>

              {cover ? (
                <div className={styles.featuredDrawingFrame}>
                  <div className={styles.frameHeader}>
                    <div className={styles.frameDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className={styles.frameTitle}>FLAGSHIP BLUEPRINT // {flagshipTitle}</span>
                  </div>
                  <figure className={styles.frameFigure}>
                    <Image
                      src={cover}
                      alt={`Architecture drawing for ${hub.navLabel.toLowerCase()}`}
                      width={1360}
                      height={800}
                      priority
                      sizes="(max-width: 1000px) 100vw, 640px"
                    />
                  </figure>
                  <div className={styles.frameCaption}>
                    <span>Full data lineage, API topology, and compliance specification</span>
                    {pages[0] ? (
                      <Link href={`/en${solutionPath(pages[0].slug)}`} className={styles.frameLink}>
                        View flagship spec <span aria-hidden="true">↗</span>
                      </Link>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </header>

          {/* Systems Catalogue Section with Interactive Explorer */}
          <section id="systems" className={styles.section} aria-labelledby="systems-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>SYSTEMS CATALOGUE</span>
              <h2 id="systems-title" className={styles.sectionTitle}>
                Production-grade systems in {hub.navLabel}.
              </h2>
              <p className={styles.sectionLead}>
                Each system is engineered with clear operational boundaries, data models, and regulatory
                controls. Every blueprint includes an actionable specification template or RFP document.
              </p>
            </div>

            <SolutionsExplorer
              pages={pages}
              searchPlaceholder={`Filter ${pages.length} ${hub.navLabel.toLowerCase()} solutions, protocols, or specs...`}
            />
          </section>

          {/* What We Build: Numbered Domain Matrix */}
          <section className={styles.section} aria-labelledby="needs-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>DOMAIN ARCHITECTURE</span>
              <h2 id="needs-title" className={styles.sectionTitle}>
                What enterprises in this sector usually need.
              </h2>
              <p className={styles.sectionLead}>
                Core operational requirements and common engineering challenges we solve for leaders in {hub.navLabel.toLowerCase()}.
              </p>
            </div>
            <div className={styles.needsGrid}>
              {hub.needs.map((n, i) => (
                <div key={n.title} className={styles.needCard}>
                  <div className={styles.needNum}>0{i + 1}</div>
                  <h3 className={styles.needTitle}>{n.title}</h3>
                  <p className={styles.needBody}>{n.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Questions FAQ */}
          <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>ENGAGEMENT & SPECIFICATIONS</span>
              <h2 id="faq-title" className={styles.sectionTitle}>
                Common questions.
              </h2>
            </div>
            <dl className={styles.faqGrid}>
              {hub.faqs.map((f) => (
                <div key={f.q} className={styles.faqCard}>
                  <dt className={styles.faqQuestion}>{f.q}</dt>
                  <dd className={styles.faqAnswer}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Next Step CTA */}
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

          {/* Cross-Sector Navigation Cards */}
          <section className={styles.others} aria-labelledby="others-title">
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>CROSS-SECTOR ENGINEERING</span>
              <h2 id="others-title" className={styles.sectionTitle}>
                Explore other enterprise sectors.
              </h2>
            </div>
            <div className={styles.othersGrid}>
              {others.map((o) => {
                const oCount = pagesIn(o.vertical).length;
                return (
                  <Link key={o.slug} href={`/en${solutionPath(o.slug)}`} className={styles.otherHubCard}>
                    <div className={styles.otherHubHeader}>
                      <span className={styles.otherHubKicker}>
                        {o.kicker.replace("Enterprise solutions · ", "")}
                      </span>
                      <span className={styles.otherHubCount}>{oCount} Systems</span>
                    </div>
                    <h3 className={styles.otherHubTitle}>{o.navLabel}</h3>
                    <p className={styles.otherHubDesc}>{o.seoDescription}</p>
                    <div className={styles.otherHubLink}>
                      <span>View Sector Architecture</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={styles.allSolutionsBanner}>
              <Link href="/en/solutions" className={styles.allSolutionsLink}>
                <span>Browse all 91 enterprise solutions & specifications</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
          <div style={{ height: 48 }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
