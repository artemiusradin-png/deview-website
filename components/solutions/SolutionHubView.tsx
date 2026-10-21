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
import styles from "./solutions.module.css";

const SITE_URL = "https://deviewai.com";

/** A vertical hub: what enterprises in the sector need, and the solution pages we have for it. */
export function SolutionHubView({ hub }: { hub: SolutionHub }) {
  const pages = pagesIn(hub.vertical);
  const others = publishedHubs().filter((h) => h.slug !== hub.slug);
  const url = `${SITE_URL}/en${solutionPath(hub.slug)}`;
  const cover = pages[0] ? coverPath(pages[0].slug) : null;

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
          name: "DeView",
          legalName: LEGAL_ENTITY.name.toUpperCase(),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DeView", item: `${SITE_URL}/en` },
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

          <header className={cover ? styles.hero : `${styles.hero} ${styles.heroSingle}`}>
            <div>
              <span className={styles.kicker}>{hub.kicker}</span>
              <h1 className={styles.title}>{hub.h1}</h1>
              <span className={styles.intro}>{hub.intro}</span>
              <div className={styles.heroActions}>
                <a href="#systems" className={styles.button}>
                  See the systems <span aria-hidden="true">↓</span>
                </a>
                <Link href="/en/contact" className={styles.buttonGhost}>
                  Talk to an engineer <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            {cover ? (
              <figure className={styles.cover}>
                <Image
                  src={cover}
                  alt={`Drawing for ${hub.navLabel.toLowerCase()}`}
                  width={1360}
                  height={800}
                  priority
                  sizes="(max-width: 1000px) 100vw, 640px"
                />
              </figure>
            ) : null}
          </header>

          <section id="systems" className={styles.section} aria-labelledby="systems-title">
            <span className={styles.kicker}>Systems</span>
            <h2 id="systems-title" className={styles.sectionTitle}>
              Solutions in this area.
            </h2>
            <ul className={styles.cards}>
              {pages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/en${solutionPath(p.slug)}`} className={styles.cardLink}>
                    <span className={styles.kicker}>{p.kicker}</span>
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

          <section className={styles.section} aria-labelledby="needs-title">
            <span className={styles.kicker}>What we build</span>
            <h2 id="needs-title" className={styles.sectionTitle}>
              What enterprises in this sector usually need.
            </h2>
            <ul className={styles.cards}>
              {hub.needs.map((n) => (
                <li key={n.title}>
                  <h3>{n.title}</h3>
                  <span className={styles.body}>{n.body}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
            <span className={styles.kicker}>Questions</span>
            <h2 id="faq-title" className={styles.sectionTitle}>
              Common questions.
            </h2>
            <dl>
              {hub.faqs.map((f) => (
                <div key={f.q}>
                  <dt>{f.q}</dt>
                  <dd>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

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

          <nav className={styles.others} aria-label="Other industries">
            <span className={styles.kicker}>Other industries</span>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/en${solutionPath(o.slug)}`}>
                    {o.navLabel} <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/en/solutions">
                  All enterprise solutions <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
