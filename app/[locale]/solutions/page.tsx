import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/solutions/solutions.module.css";
import { LEGAL_ENTITY } from "@/lib/site-contact";
import { SOLUTION_PAGES, pagesIn, publishedHubs, solutionPath } from "@/lib/solutions";

const SITE_URL = "https://deviewai.com";
const url = `${SITE_URL}/en/solutions`;
const seoTitle = "Enterprise Software Solutions by Industry | Deview";
const seoDescription =
  "Custom enterprise software for banking and payments, oil and gas, manufacturing and agriculture: lending platforms, production management, MES, data platforms and cloud security.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: url },
  openGraph: { title: seoTitle, description: seoDescription, url, siteName: "DeView", type: "website" },
};

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
          name: "DeView",
          legalName: LEGAL_ENTITY.name.toUpperCase(),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DeView", item: `${SITE_URL}/en` },
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
            <Link href="/en">DeView</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Solutions</span>
          </nav>

          <header className={`${styles.hero} ${styles.heroSingle}`}>
            <div>
              <span className={styles.kicker}>Enterprise solutions</span>
              <h1 className={styles.title}>Enterprise software solutions by industry</h1>
              <span className={styles.intro}>
                Custom platforms for banks and payment companies, oil and gas operators,
                manufacturers and agricultural enterprises. Each page describes one system in
                engineering terms: what it does, how it connects, what it must satisfy and when
                custom development is the right call. Every page has a free requirements
                document you can adapt for your own project.
              </span>
              <div className={styles.heroActions}>
                <Link href="/en/contact" className={styles.button}>
                  Talk to an engineer <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </header>

          {hubs.map((hub) => (
            <section
              key={hub.slug}
              className={styles.section}
              aria-labelledby={`${hub.slug}-title`}
            >
              <span className={styles.kicker}>{hub.kicker.replace("Enterprise solutions · ", "")}</span>
              <h2 id={`${hub.slug}-title`} className={styles.sectionTitle}>
                <Link href={`/en${solutionPath(hub.slug)}`}>{hub.h1}</Link>
              </h2>
              <ul className={styles.cards}>
                {pagesIn(hub.vertical).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/en${solutionPath(p.slug)}`} className={styles.cardLink}>
                      <h3>{p.h1}</h3>
                      <span className={styles.body}>{p.seoDescription}</span>
                      <span className={styles.linkRow}>
                        Read the page <span aria-hidden="true">↗</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className={styles.cta} aria-labelledby="cta-title">
            <span className={styles.kicker}>Next step</span>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Tell us what you need built.
            </h2>
            <span className={styles.body}>
              Describe the system and the systems around it. An engineer replies within 1–2
              business days.
            </span>
            <Link href="/en/contact" className={styles.button}>
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </section>
          <div style={{ height: 56 }} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
