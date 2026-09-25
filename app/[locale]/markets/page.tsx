import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { MARKETS, MARKET_SLUGS } from "@/lib/markets";

const canonicalUrl = "https://deviewai.com/en/markets";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "AI Consulting Across Asia-Pacific Markets | DeView",
    description:
      "Explore DeView's AI consulting, software engineering, and data engineering services for teams in Hong Kong, Singapore, and Taiwan.",
    alternates: { canonical: canonicalUrl },
    robots: locale === "en" ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: "DeView in Asia-Pacific",
      description: "Production AI and software engineering for Hong Kong, Singapore, and Taiwan operations teams.",
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default function MarketsPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          <header className="mb-14 sm:mb-20">
            <p className="section-label mb-3">Asia-Pacific markets</p>
            <div className="rule mb-6" />
            <div className="grid gap-7 md:grid-cols-[1.35fr_1fr] md:items-end">
              <h1 className="max-w-3xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-medium leading-[1.04] tracking-tight text-[var(--white-100)]">
                Regional context. One production standard.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                DeView builds AI systems, custom software, and data pipelines around the workflows, languages, infrastructure, and governance requirements of each market.
              </p>
            </div>
          </header>

          <section aria-labelledby="market-list-heading">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="section-label mb-2">Markets we serve</p>
                <h2 id="market-list-heading" className="text-xl text-[var(--white-100)] sm:text-2xl">
                  Start with your operating environment.
                </h2>
              </div>
              <span className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-40)] sm:block">
                APAC / 03 markets
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {MARKET_SLUGS.map((slug, index) => {
                const market = MARKETS[slug];

                return (
                  <Link
                    key={market.slug}
                    href={`/en/markets/${market.slug}`}
                    className="group flex min-h-72 flex-col border border-[var(--white-20)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:border-[var(--white-50)] sm:p-6"
                  >
                    <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[var(--white-40)]">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{market.countryCode}</span>
                    </div>
                    <div className="mt-auto pt-14">
                      <h3 className="text-2xl text-[var(--white-100)]">{market.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{market.contextTitle}.</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--white-80)]">
                        Explore market
                        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-16 grid gap-8 border-t border-[var(--white-20)] pt-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="section-label mb-3">How we work across markets</p>
              <h2 className="max-w-md text-[clamp(1.3rem,3vw,2rem)] leading-tight text-[var(--white-100)]">
                Local requirements become system requirements.
              </h2>
            </div>
            <div className="grid gap-5 text-sm leading-relaxed text-[var(--text-muted)] sm:grid-cols-2">
              <p>
                We do not start with a generic AI product. Discovery maps the real inputs, decisions, exceptions, systems, and controls before the build is scoped.
              </p>
              <p>
                The finished system is deployed into the agreed environment with documentation, monitoring, and a clear handover—not left as a disconnected pilot.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-[var(--white-20)] pt-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="section-label mb-3">Discuss your market</p>
                <h2 className="text-[clamp(1.25rem,3vw,1.8rem)] text-[var(--white-100)]">
                  Show us the workflow that is slowing your team down.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                  We reply with a concrete view of what can be automated, the likely integration constraints, and the right next step.
                </p>
              </div>
              <div className="md:text-right">
                <Link href="/en/contact" className="btn-outline inline-flex">
                  Start a conversation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
