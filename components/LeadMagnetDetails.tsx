import Link from "next/link";
import type { LeadMagnetDetails as Details } from "@/lib/lead-magnet-details";
import styles from "./lead-magnet.module.css";

const SITE_URL = "https://deviewai.com";

/**
 * The open part of a resource page, below the sign-up block: short explanatory sections, an FAQ
 * and related pages, plus WebPage, BreadcrumbList and FAQPage structured data. No hooks, so it
 * renders inside both server pages and the client-side playbook page.
 */
export function LeadMagnetDetails({ details }: { details: Details }) {
  const url = `${SITE_URL}/en${details.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: details.name,
        description: details.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Deview", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: details.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: details.faqs.map((f) => ({
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
      {details.sections.map((section, index) => (
        <section
          key={section.title}
          className={`${styles.container} ${styles.details}`}
          aria-labelledby={`details-${index}`}
        >
          <span className={styles.kicker}>{section.kicker}</span>
          <h2 id={`details-${index}`} className={styles.sectionTitle}>
            {section.title}
          </h2>
          <ul className={styles.detailList}>
            {section.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <span className={styles.body}>{item.body}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className={`${styles.container} ${styles.faq}`} aria-labelledby="faq-title">
        <span className={styles.kicker}>Questions</span>
        <h2 id="faq-title" className={styles.sectionTitle}>
          {details.faqTitle}
        </h2>
        <dl>
          {details.faqs.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav className={`${styles.container} ${styles.related}`} aria-label="Related pages">
        <span className={styles.kicker}>Related</span>
        <ul>
          {details.related.map((link) => (
            <li key={link.href}>
              <Link href={`/en${link.href}`}>
                {link.label} <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
