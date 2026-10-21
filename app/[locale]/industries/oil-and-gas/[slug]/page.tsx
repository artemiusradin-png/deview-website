import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OilGasProjectList } from "@/components/OilGasProjectList";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import {
  OIL_GAS_CASES,
  OIL_GAS_CASE_LIST,
  OIL_GAS_CASE_SLUGS,
  OIL_GAS_HUB_PATH,
  OIL_GAS_PAGES_UPDATED,
  isOilGasCaseSlug,
  oilGasCasePath,
} from "@/lib/oil-gas-cases";

const SITE_URL = "https://deviewai.com";

type CasePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return OIL_GAS_CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isOilGasCaseSlug(slug)) {
    return { robots: { index: false, follow: false } };
  }

  const c = OIL_GAS_CASES[slug];
  const canonicalUrl = `${SITE_URL}${oilGasCasePath(slug)}`;

  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: canonicalUrl,
      siteName: "Deview",
      type: "website",
    },
  };
}

export default async function OilGasCasePage({ params }: CasePageProps) {
  const { slug } = await params;

  if (!isOilGasCaseSlug(slug)) notFound();

  const c = OIL_GAS_CASES[slug];
  const canonicalUrl = `${SITE_URL}${oilGasCasePath(slug)}`;
  const hubUrl = `${SITE_URL}${OIL_GAS_HUB_PATH}`;
  const title = `${c.company}: ${c.project}`;
  const otherCases = OIL_GAS_CASE_LIST.filter((other) => other.slug !== c.slug);

  const facts: Array<{ label: string; value: string }> = [
    { label: "Company", value: c.company },
    ...(c.companyNote ? [c.companyNote] : []),
    { label: "Year", value: String(c.year) },
    ...(c.location ? [{ label: "Location", value: c.location }] : []),
    { label: "Project", value: c.project },
    { label: "Type of work", value: c.workType },
    { label: "Discipline", value: c.discipline },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: c.seoDescription,
        inLanguage: "en",
        dateModified: OIL_GAS_PAGES_UPDATED,
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Deview", url: SITE_URL },
        publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Deview" },
        about: { "@type": "Thing", name: c.project },
        ...(c.location ? { contentLocation: { "@type": "Place", name: c.location } } : {}),
        mentions: { "@type": "Organization", name: c.company },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Deview", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Oil & gas", item: hubUrl },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/industries/oil-and-gas" />

          <nav aria-label="Breadcrumb" className="mb-8 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
            <Link href={OIL_GAS_HUB_PATH} className="transition hover:text-[var(--white-80)]">
              Oil &amp; gas
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{c.company}</span>
          </nav>

          <header className="mb-14 sm:mb-16">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="section-label">Case study · Oil &amp; gas</p>
              <span className="border border-[var(--white-20)] px-2.5 py-1 text-[0.62rem] font-semibold tabular-nums tracking-[0.18em] text-[var(--white-60)]">
                {c.year}
              </span>
            </div>
            <div className="rule mb-7" />
            <div className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:items-end">
              <h1 className="max-w-4xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-medium leading-[1.04] tracking-tight text-[var(--white-100)]">
                {title}
              </h1>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{c.summary}</p>
            </div>
          </header>

          <section aria-labelledby="facts-heading">
            <h2 id="facts-heading" className="sr-only">
              Project facts
            </h2>
            <dl className="grid border-l border-t border-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-r border-[var(--white-20)] bg-[var(--background)] px-5 py-5">
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{fact.label}</dt>
                  <dd className="mt-2 text-sm leading-snug text-[var(--white-100)]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {c.scope ? (
            <section className="mt-14 sm:mt-20" aria-labelledby="scope-heading">
              <p className="section-label mb-3">Scope</p>
              <h2 id="scope-heading" className="max-w-2xl text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                What the portal covers.
              </h2>
              <ul className="mt-7 grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
                {c.scope.map((item, index) => (
                  <li key={item} className="flex min-h-24 items-start gap-4 bg-[var(--background)] p-5">
                    <span className="text-[0.62rem] tabular-nums tracking-[0.18em] text-[var(--white-40)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-[var(--white-90)]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section
            className="mt-14 grid gap-8 border-y border-[var(--white-20)] py-12 md:grid-cols-[1fr_1.3fr] md:gap-14 sm:mt-20"
            aria-labelledby="context-heading"
          >
            <div>
              <p className="section-label mb-3">{c.discipline}</p>
              <h2 id="context-heading" className="text-[clamp(1.35rem,3vw,2rem)] leading-tight text-[var(--white-100)]">
                What this kind of system does.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
              <p>{c.context}</p>
              <p>{c.today}</p>
            </div>
          </section>

          <section className="py-14 sm:py-20" aria-labelledby="more-heading">
            <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">More oil &amp; gas projects</p>
                <h2 id="more-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Other projects in this portfolio.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:justify-self-end">
                <Link
                  href={OIL_GAS_HUB_PATH}
                  className="text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]"
                >
                  See all six oil &amp; gas projects
                </Link>{" "}
                from 2010 to 2020.
              </p>
            </div>
            <OilGasProjectList cases={otherCases} variant="compact" />
          </section>

          <section className="grid gap-8 border-t border-[var(--white-20)] py-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="section-label mb-3">Start with the bottleneck</p>
              <h2 className="text-[clamp(1.35rem,3.5vw,2.2rem)] leading-tight text-[var(--white-100)]">
                Planning, control or reporting for your operations?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                Tell us what your team is trying to plan, track or report. We reply with a specific recommendation,
                likely constraints, and a cost range.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/en/contact" className="btn-outline">
                Discuss a project
              </Link>
              <Link href="/en/case-studies" className="btn-outline">
                View case studies
              </Link>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
