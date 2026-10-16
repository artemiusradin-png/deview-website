import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { LEGAL_ENTITY } from "@/lib/site-contact";
import { SERVICE_LINES } from "@/lib/workflow-offers";
import {
  assetById,
  assetGuidePath,
  hubFor,
  pagesIn,
  solutionPath,
  type SolutionPage,
} from "@/lib/solutions";
import { SolutionDiagram } from "./diagrams";
import { SolutionAssetForm } from "./SolutionAssetForm";
import { coverPath } from "./covers";
import styles from "./solutions.module.css";

const SITE_URL = "https://deviewai.com";

/** One enterprise solution page: the keyword page, its gated asset, and the engineering detail. */
export function SolutionPageView({ page }: { page: SolutionPage }) {
  const asset = assetById(page.assetId);
  if (!asset) throw new Error(`Unknown asset ${page.assetId} on ${page.slug}`);
  const hub = hubFor(page.vertical);
  const line = SERVICE_LINES.find((l) => l.id === page.serviceId);
  const siblings = pagesIn(page.vertical).filter((p) => p.slug !== page.slug);
  const url = `${SITE_URL}/en${solutionPath(page.slug)}`;
  const hubUrl = hub ? `${SITE_URL}/en${solutionPath(hub.slug)}` : null;

  const crumbs = [
    { name: "DeView", item: `${SITE_URL}/en` },
    { name: "Solutions", item: `${SITE_URL}/en/solutions` },
    ...(hub && hubUrl ? [{ name: hub.navLabel, item: hubUrl }] : []),
    { name: page.h1, item: url },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.seoDescription,
        inLanguage: "en",
        dateModified: page.updated,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.item,
        })),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        serviceType: line?.name ?? "Enterprise platforms",
        description: page.intro,
        url,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "DeView",
          legalName: LEGAL_ENTITY.name.toUpperCase(),
        },
        areaServed: ["Hong Kong", "Asia-Pacific", "Middle East", "Europe", "North America"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: page.h1,
          itemListElement: page.modules.map((m) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: m.title },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((f) => ({
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
            {hub ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/en${solutionPath(hub.slug)}`}>{hub.navLabel}</Link>
              </>
            ) : null}
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.h1}</span>
          </nav>

          <header className={styles.hero}>
            <div>
              <span className={styles.kicker}>{page.kicker}</span>
              <h1 className={styles.title}>{page.h1}</h1>
              <span className={styles.intro}>{page.intro}</span>
              <div className={styles.heroActions}>
                <a href="#asset" className={styles.button}>
                  {asset.buttonLabel} <span aria-hidden="true">↓</span>
                </a>
                <Link href="/en/contact" className={styles.buttonGhost}>
                  Talk to an engineer <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <figure className={styles.cover}>
              <Image
                src={coverPath(page.slug)}
                alt={`Drawing for ${page.h1}`}
                width={1360}
                height={800}
                priority
                sizes="(max-width: 1000px) 100vw, 640px"
              />
            </figure>
          </header>

          <section id="asset" className={styles.assetBand} aria-labelledby="asset-title">
            <div>
              <span className={styles.kicker}>{asset.kicker}</span>
              <h2 id="asset-title" className={styles.assetTitle}>
                {asset.title}
              </h2>
              <span className={styles.assetLead}>{asset.lead}</span>
              <ul className={styles.inside}>
                {asset.inside.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <SolutionAssetForm
              source={asset.source}
              accessKey={asset.accessKey}
              guidePath={assetGuidePath(asset.id)}
            />
          </section>

          <section className={styles.section} aria-labelledby="modules-title">
            <span className={styles.kicker}>What it covers</span>
            <h2 id="modules-title" className={styles.sectionTitle}>
              What the system does, module by module.
            </h2>
            <ul className={styles.modules}>
              {page.modules.map((m, index) => (
                <li key={m.title}>
                  <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{m.title}</h3>
                  <span className={styles.body}>{m.body}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="arch-title">
            <span className={styles.kicker}>Architecture</span>
            <h2 id="arch-title" className={styles.sectionTitle}>
              Reference architecture.
            </h2>
            <figure className={styles.diagram}>
              <SolutionDiagram diagram={page.diagram} />
              <figcaption>{page.diagramCaption}</figcaption>
            </figure>
          </section>

          <section className={`${styles.section} ${styles.split}`} aria-label="Standards and data model">
            <div>
              <span className={styles.kicker}>Standards and interfaces</span>
              <h2 className={styles.sectionTitle}>What we design against.</h2>
              <dl className={styles.rows}>
                {page.standards.map((s) => (
                  <div key={s.name}>
                    <dt>{s.name}</dt>
                    <dd>{s.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <span className={styles.kicker}>Data model</span>
              <h2 className={styles.sectionTitle}>The core entities.</h2>
              <dl className={styles.rows}>
                {page.dataModel.map((d) => (
                  <div key={d.entity}>
                    <dt>{d.entity}</dt>
                    <dd>{d.holds}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="options-title">
            <span className={styles.kicker}>Build, buy or extend</span>
            <h2 id="options-title" className={styles.sectionTitle}>
              When custom development is the right call.
            </h2>
            <div className={styles.options}>
              {page.buildOptions.map((o) => (
                <div key={o.title}>
                  <h3>{o.title}</h3>
                  <span className={styles.body}>{o.body}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="security-title">
            <span className={styles.kicker}>Security and compliance</span>
            <h2 id="security-title" className={styles.sectionTitle}>
              Controls designed in, not added later.
            </h2>
            <ul className={styles.security}>
              {page.security.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <span className={styles.body}>{s.body}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="delivery-title">
            <span className={styles.kicker}>How we deliver</span>
            <h2 id="delivery-title" className={styles.sectionTitle}>
              From discovery to a system you run.
            </h2>
            <ol className={styles.phases}>
              {page.phases.map((p, index) => (
                <li key={p.title}>
                  <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <span className={styles.body}>{p.body}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className={`${styles.section} ${styles.split}`} aria-label="Related work">
            <div>
              <span className={styles.kicker}>Relevant work</span>
              <h2 className={styles.sectionTitle}>Where to see our work.</h2>
              <ul className={styles.proof}>
                {page.proof.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={`/en${item.href}`}>
                      {item.label} <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className={styles.kicker}>Related</span>
              <h2 className={styles.sectionTitle}>Keep reading.</h2>
              <ul className={styles.proof}>
                {page.related.map((item) => (
                  <li key={item.href + item.label}>
                    <Link href={`/en${item.href}`}>
                      {item.label} <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
            <span className={styles.kicker}>Questions</span>
            <h2 id="faq-title" className={styles.sectionTitle}>
              Common questions.
            </h2>
            <dl>
              {page.faqs.map((f) => (
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

          <nav className={styles.others} aria-label="More solutions">
            <span className={styles.kicker}>{hub ? hub.navLabel : "Solutions"}</span>
            <ul>
              {hub ? (
                <li>
                  <Link href={`/en${solutionPath(hub.slug)}`}>
                    All {hub.navLabel.toLowerCase()} <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ) : null}
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link href={`/en${solutionPath(s.slug)}`}>
                    {s.h1} <span aria-hidden="true">↗</span>
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
