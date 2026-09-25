import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { isMarketSlug, MARKETS, MARKET_SLUGS } from "@/lib/markets";

type MarketPageProps = {
  params: Promise<{ locale: string; market: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return MARKET_SLUGS.map((market) => ({ market }));
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { locale, market: marketSlug } = await params;

  if (!isMarketSlug(marketSlug)) {
    return { robots: { index: false, follow: false } };
  }

  const market = MARKETS[marketSlug];
  const canonicalUrl = `https://deviewai.com/en/markets/${market.slug}`;

  return {
    title: market.seoTitle,
    description: market.seoDescription,
    alternates: { canonical: canonicalUrl },
    robots: locale === "en" ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: market.seoTitle,
      description: market.seoDescription,
      url: canonicalUrl,
      type: "website",
      locale: `en_${market.countryCode}`,
    },
  };
}

export default async function MarketPage({ params }: MarketPageProps) {
  const { market: marketSlug } = await params;

  if (!isMarketSlug(marketSlug)) notFound();

  const market = MARKETS[marketSlug];
  const canonicalUrl = `https://deviewai.com/en/markets/${market.slug}`;
  const relatedMarkets = MARKET_SLUGS.filter((slug) => slug !== market.slug).map((slug) => MARKETS[slug]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AI consulting and software engineering in ${market.name}`,
    description: market.seoDescription,
    url: canonicalUrl,
    serviceType: "AI consulting, custom software engineering, and data engineering",
    provider: {
      "@type": "Organization",
      name: "DeView",
      url: "https://deviewai.com",
    },
    areaServed: {
      "@type": "Country",
      name: market.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/markets" />

          <nav aria-label="Breadcrumb" className="mb-8 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
            <Link href="/en/markets" className="transition hover:text-[var(--white-80)]">
              Asia-Pacific markets
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{market.name}</span>
          </nav>

          <header className="mb-16 sm:mb-20">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="section-label">{market.eyebrow}</p>
              <span className="border border-[var(--white-20)] px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-[var(--white-60)]">
                {market.countryCode}
              </span>
            </div>
            <div className="rule mb-7" />
            <div className="grid gap-8 md:grid-cols-[1.45fr_1fr] md:items-end">
              <h1 className="max-w-4xl text-[clamp(2rem,6vw,4rem)] font-medium leading-[1.02] tracking-tight text-[var(--white-100)]">
                {market.headline}
              </h1>
              <div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{market.introduction}</p>
                <p className="mt-4 border-l border-[var(--white-30)] pl-4 text-xs leading-relaxed text-[var(--white-60)]">
                  {market.presence}
                </p>
              </div>
            </div>
          </header>

          <section className="grid gap-8 border-y border-[var(--white-20)] py-10 md:grid-cols-[1fr_1.35fr] md:gap-14">
            <div>
              <p className="section-label mb-3">Market context</p>
              <h2 className="text-[clamp(1.35rem,3.5vw,2.2rem)] leading-tight text-[var(--white-100)]">
                {market.contextTitle}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">{market.context}</p>
          </section>

          <section className="py-14 sm:py-20" aria-labelledby="workflow-heading">
            <div className="mb-7 grid gap-4 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">High-value workflows</p>
                <h2 id="workflow-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Where we typically start in {market.name}.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:justify-self-end">
                Every engagement is scoped against the client’s actual process, systems, data, and control requirements.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {market.workflows.map((workflow, index) => (
                <article key={workflow.title} className="border border-[var(--white-20)] bg-[var(--surface)] p-5 sm:p-6">
                  <span className="text-[0.62rem] tabular-nums tracking-[0.18em] text-[var(--white-40)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-lg leading-snug text-[var(--white-100)]">{workflow.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{workflow.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-y border-[var(--white-20)] py-12 md:grid-cols-[1fr_1.3fr] md:gap-14">
            <div>
              <p className="section-label mb-3">Governance and deployment</p>
              <h2 className="text-[clamp(1.35rem,3vw,2rem)] leading-tight text-[var(--white-100)]">
                Controls are part of the build, not a document added later.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">{market.regulatoryNote}</p>
              <a
                href={market.regulatoryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[var(--white-80)] underline decoration-[var(--white-30)] underline-offset-4 hover:text-[var(--white-100)]"
              >
                Official reference
                <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-2 text-[0.7rem] leading-relaxed text-[var(--white-40)]">{market.regulatoryLabel}</p>
            </div>
            <ul className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
              {market.considerations.map((item) => (
                <li key={item} className="flex min-h-28 items-start gap-3 bg-[var(--background)] p-5 text-sm leading-relaxed text-[var(--white-70)]">
                  <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--white-60)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="py-14 sm:py-20" aria-labelledby="delivery-heading">
            <p className="section-label mb-3">From workflow to production</p>
            <h2 id="delivery-heading" className="max-w-2xl text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
              A fixed-scope path to a working system.
            </h2>
            <div className="mt-8 grid gap-0 border-t border-[var(--white-20)]">
              {market.delivery.map((item) => (
                <article key={item.step} className="grid gap-3 border-b border-[var(--white-20)] py-6 md:grid-cols-[5rem_0.8fr_1.4fr] md:items-start md:gap-8">
                  <span className="text-xs tabular-nums text-[var(--white-40)]">{item.step}</span>
                  <h3 className="text-base text-[var(--white-100)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-[var(--white-20)] py-12 md:grid-cols-[0.8fr_1.4fr] md:gap-14" aria-labelledby="faq-heading">
            <div>
              <p className="section-label mb-3">{market.name} FAQ</p>
              <h2 id="faq-heading" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                Practical questions before discovery.
              </h2>
            </div>
            <div className="border-t border-[var(--white-20)]">
              {market.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[var(--white-20)] py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-sm text-[var(--white-90)] marker:hidden">
                    {faq.question}
                    <span className="text-[var(--white-40)] transition group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pt-4 text-sm leading-relaxed text-[var(--text-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="grid gap-8 border-t border-[var(--white-20)] py-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="section-label mb-3">Start with the bottleneck</p>
              <h2 className="text-[clamp(1.35rem,3.5vw,2.2rem)] leading-tight text-[var(--white-100)]">
                Tell us what your {market.name} team is trying to automate.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                We reply with a specific recommendation, likely constraints, and a cost range—before asking for a build commitment.
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

          <aside className="border-t border-[var(--white-20)] pt-10" aria-label="Related markets">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="section-label">Other Asia-Pacific markets</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {relatedMarkets.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/en/markets/${related.slug}`}
                    className="text-sm text-[var(--white-70)] underline decoration-[var(--white-20)] underline-offset-4 hover:text-[var(--white-100)]"
                  >
                    {related.name} →
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
