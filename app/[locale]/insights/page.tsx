import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "Insights | DeView",
  description:
    "Practical AI guidance for operations and finance teams — what works, what doesn't, and where to start.",
};

export const articles = [
  {
    slug: "why-most-ai-pilots-fail",
    date: "2025-04-14",
    readTime: "6 min read",
    label: "AI IMPLEMENTATION",
    title: "Why most AI pilots fail — and what the ones that work have in common",
    lead: "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology.",
  },
  {
    slug: "document-automation-where-to-start",
    date: "2025-03-28",
    readTime: "5 min read",
    label: "DOCUMENT AUTOMATION",
    title: "Document automation: the four questions to answer before you build anything",
    lead: "Before automating any document workflow, four things determine whether the project will succeed or stall at the prototype stage.",
  },
  {
    slug: "four-ai-projects-worth-doing",
    date: "2025-03-10",
    readTime: "7 min read",
    label: "AI STRATEGY",
    title: "The four AI projects that pay for themselves fastest in operations teams",
    lead: "Not all AI use cases are created equal. Some pay back in weeks; others require years of behaviour change before they show ROI.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function InsightsPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">INSIGHTS</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                Practical AI guidance — no hype, no vendor pitches.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Written for operations and finance teams who need to make real decisions about AI — not read about what&apos;s theoretically possible.
              </p>
            </div>
          </div>

          {/* Article list */}
          <div className="space-y-0">
            {articles.map((a, i) => (
              <LocaleLink
                key={a.slug}
                href={`/insights/${a.slug}`}
                className={`group block border-t border-[var(--white-20)] py-10 transition-colors hover:bg-[var(--surface)] sm:py-12 ${i === articles.length - 1 ? "border-b" : ""}`}
              >
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                    {a.label}
                  </span>
                  <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
                  <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                    {formatDate(a.date)}
                  </span>
                  <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
                  <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                    {a.readTime}
                  </span>
                </div>
                <h2 className="mb-3 text-[clamp(1rem,3vw,1.35rem)] leading-snug text-[var(--white-100)] transition-colors group-hover:text-[var(--white-80)] md:max-w-3xl">
                  {a.title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{a.lead}</p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-40)] transition-colors group-hover:text-[var(--white-60)]">
                  Read article →
                </p>
              </LocaleLink>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10">
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Get new articles
            </p>
            <h3 className="mb-3 text-[clamp(1rem,3vw,1.3rem)] text-[var(--white-100)]">
              Practical AI content for operations and finance teams.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              We publish one article per month — specific, useful, and written from direct project experience. No newsletter filler.
            </p>
            <LocaleLink href="/contact" className="btn-outline inline-block">
              Contact us to stay in touch →
            </LocaleLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
