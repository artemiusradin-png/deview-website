import type { Metadata } from "next";
import Link from "next/link";
import { OilGasProjectList } from "@/components/OilGasProjectList";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import {
  OIL_GAS_CASE_LIST,
  OIL_GAS_HUB_PATH,
  OIL_GAS_PAGES_UPDATED,
  oilGasCasePath,
} from "@/lib/oil-gas-cases";

const SITE_URL = "https://deviewai.com";
const canonicalUrl = `${SITE_URL}${OIL_GAS_HUB_PATH}`;
const seoTitle = "Oil & Gas Planning, Control & Reporting Software | DeView";
const seoDescription =
  "Scheduling, project management, engineering data, planning and control, and reporting systems for international oil & gas companies. Six projects, 2010–2020.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: canonicalUrl,
    siteName: "DeView",
    type: "website",
  },
};

/** Disciplines in portfolio order, each with the projects that belong to it. */
const areas = OIL_GAS_CASE_LIST.reduce<Array<{ discipline: string; cases: typeof OIL_GAS_CASE_LIST }>>(
  (groups, c) => {
    const existing = groups.find((g) => g.discipline === c.discipline);
    if (existing) existing.cases.push(c);
    else groups.push({ discipline: c.discipline, cases: [c] });
    return groups;
  },
  [],
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "en",
      dateModified: OIL_GAS_PAGES_UPDATED,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "DeView", url: SITE_URL },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "DeView" },
      breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        name: "Oil & gas projects",
        numberOfItems: OIL_GAS_CASE_LIST.length,
        itemListElement: OIL_GAS_CASE_LIST.map((c, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}${oilGasCasePath(c.slug)}`,
          name: `${c.company}: ${c.project}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DeView", item: `${SITE_URL}/en` },
        { "@type": "ListItem", position: 2, name: "Oil & gas", item: canonicalUrl },
      ],
    },
  ],
};

export default function OilAndGasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/case-studies" />

          <header className="mb-14 sm:mb-20">
            <p className="section-label mb-3">Industries · Oil &amp; gas</p>
            <div className="rule mb-7" />
            <div className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:items-end">
              <h1 className="max-w-4xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-medium leading-[1.04] tracking-tight text-[var(--white-100)]">
                Planning, control and reporting systems for oil &amp; gas.
              </h1>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                Six oil &amp; gas projects between 2010 and 2020: project scheduling, project management, engineering
                data, planning and control, and management reporting systems developed for international oil &amp; gas
                companies.
              </p>
            </div>
          </header>

          <section className="pb-14 sm:pb-20" aria-labelledby="projects-heading">
            <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">Projects</p>
                <h2 id="projects-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Six oil &amp; gas projects, 2010 to 2020.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:justify-self-end">
                Each project has its own page with the company, year, type of work and scope.
              </p>
            </div>
            <OilGasProjectList cases={OIL_GAS_CASE_LIST} />
          </section>

          <section className="border-y border-[var(--white-20)] py-14 sm:py-20" aria-labelledby="areas-heading">
            <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">Areas of experience</p>
                <h2 id="areas-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  One thread: turning project and operating data into management control.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:justify-self-end">
                From scheduling a department&rsquo;s projects to a management portal for production, reserves,
                budgets and portfolio modelling.
              </p>
            </div>
            <ul className="grid border-l border-t border-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <li
                  key={area.discipline}
                  className="flex flex-col gap-4 border-b border-r border-[var(--white-20)] bg-[var(--background)] p-5 sm:p-6"
                >
                  <h3 className="text-base text-[var(--white-100)]">{area.discipline}</h3>
                  <ul className="space-y-2">
                    {area.cases.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={oilGasCasePath(c.slug)}
                          className="text-sm text-[var(--white-70)] underline decoration-[var(--white-20)] underline-offset-4 hover:text-[var(--white-100)]"
                        >
                          {c.company} ({c.year})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-8 py-14 md:grid-cols-[1fr_1.3fr] md:gap-14 sm:py-20" aria-labelledby="today-heading">
            <div>
              <p className="section-label mb-3">What we build today</p>
              <h2 id="today-heading" className="text-[clamp(1.35rem,3vw,2rem)] leading-tight text-[var(--white-100)]">
                Planning, control and reporting for operations teams.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
              <p>
                DeView builds custom software, data pipelines and AI systems for operations teams: connect the data a
                team already has, build the tools the team works in, and report from one governed record.
              </p>
              <p>
                See how that works in practice on our{" "}
                <Link href="/en/services" className="text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]">
                  services
                </Link>{" "}
                and{" "}
                <Link href="/en/how-we-work" className="text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]">
                  how we work
                </Link>{" "}
                pages, or read our{" "}
                <Link href="/en/case-studies" className="text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]">
                  other case studies
                </Link>
                .
              </p>
            </div>
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
