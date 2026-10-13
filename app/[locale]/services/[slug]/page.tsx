import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CapabilityDiagram } from "@/components/CapabilityDiagram";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { SERVICE_PAGES, servicePagePath } from "@/lib/service-pages";
import { LEGAL_ENTITY } from "@/lib/site-contact";
import { SERVICE_LINES } from "@/lib/workflow-offers";
import styles from "./service-page.module.css";

const SITE_URL = "https://deviewai.com";

/** Same drawing per service as on /services. */
const DRAWING_MODE: Record<string, number> = {
  "product-engineering": 1,
  "ai-ml": 0,
  "data-engineering": 2,
  "cloud-devops": 3,
  "enterprise-platforms": 4,
};

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

function pageFor(slug: string) {
  const page = SERVICE_PAGES.find((p) => p.slug === slug);
  const line = page && SERVICE_LINES.find((l) => l.id === page.serviceId);
  return page && line ? { page, line } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = pageFor(slug);
  if (!found) return { robots: { index: false, follow: false } };
  const { page } = found;
  const url = `${SITE_URL}/en${servicePagePath(page.slug)}`;
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url,
      siteName: "DeView",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const found = pageFor(slug);
  if (!found) notFound();
  const { page, line } = found;

  const url = `${SITE_URL}/en${servicePagePath(page.slug)}`;
  const others = SERVICE_PAGES.filter((p) => p.slug !== page.slug);

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
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "DeView", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/en/services` },
          { "@type": "ListItem", position: 3, name: page.h1, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        serviceType: line.name,
        description: page.intro,
        url,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "DeView",
          legalName: LEGAL_ENTITY.name.toUpperCase(),
        },
        areaServed: ["Hong Kong", "Asia-Pacific", "Europe", "North America"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: line.name,
          itemListElement: (line.offerings?.map((o) => o.name) ?? line.builds).map(
            (name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }),
          ),
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
        <SubpageNav backHref="/services" />
        <div className={styles.container}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/en/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{line.name}</span>
          </nav>

          <header className={styles.hero}>
            <div>
              <span className={styles.kicker}>{page.kicker}</span>
              <h1 className={styles.title}>{page.h1}</h1>
              <span className={styles.intro}>{page.intro}</span>
              <Link href="/en/contact" className={styles.button}>
                Tell us what you need built <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className={styles.drawing}>
              <CapabilityDiagram mode={DRAWING_MODE[line.id] ?? 1} />
            </div>
          </header>

          <section className={styles.points} aria-label="Why it matters">
            {page.points.map((point, index) => (
              <div key={point.title}>
                <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                <h2>{point.title}</h2>
                <span className={styles.body}>{point.body}</span>
              </div>
            ))}
          </section>

          <section className={styles.split} aria-labelledby="offer-title">
            <div>
              <span className={styles.kicker}>What we build</span>
              <h2 id="offer-title" className={styles.sectionTitle}>
                {line.title}
              </h2>
              <ul className={styles.offerings}>
                {line.offerings
                  ? line.offerings.map((o) => (
                      <li key={o.name}>
                        <h3>{o.name}</h3>
                        <span className={styles.body}>{o.line}</span>
                      </li>
                    ))
                  : line.builds.map((b) => (
                      <li key={b}>
                        <h3>{b}</h3>
                      </li>
                    ))}
              </ul>
            </div>
            <div className={styles.panel}>
              <span className={styles.kicker}>Where it applies</span>
              <dl className={styles.applies}>
                {line.applies.map((row) => (
                  <div key={row.industry}>
                    <dt>{row.industry}</dt>
                    <dd>{row.example}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className={styles.split} aria-labelledby="proof-title">
            <div>
              <span className={styles.kicker}>Relevant work</span>
              <h2 id="proof-title" className={styles.sectionTitle}>
                Built by the team you will work with.
              </h2>
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
              <span className={styles.kicker}>Technologies</span>
              <ul className={styles.stack}>
                {page.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </section>

          {page.leadMagnet ? (
            <Link href={`/en${page.leadMagnet.href}`} className={styles.magnet}>
              <span>
                <span className={styles.kicker}>{page.leadMagnet.label}</span>
                <span className={styles.magnetLine}>{page.leadMagnet.line}</span>
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ) : null}

          <section className={styles.faq} aria-labelledby="faq-title">
            <span className={styles.kicker}>Questions</span>
            <h2 id="faq-title" className={styles.sectionTitle}>
              {line.name}: common questions
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
              A reply from an engineer within 1–2 business days.
            </span>
            <Link href="/en/contact" className={styles.button}>
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </section>

          <nav className={styles.others} aria-label="Other services">
            <span className={styles.kicker}>Other services</span>
            <ul>
              {others.map((other) => {
                const otherLine = SERVICE_LINES.find((l) => l.id === other.serviceId);
                return (
                  <li key={other.slug}>
                    <Link href={`/en${servicePagePath(other.slug)}`}>
                      {otherLine?.name ?? other.h1} <span aria-hidden="true">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
