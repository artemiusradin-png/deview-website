import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";
import { SubpageNav } from "../../../components/SubpageNav";

export const metadata: Metadata = {
  title: "Why most AI pilots fail | DeView Insights",
  description:
    "Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology — here's what actually goes wrong.",
};

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-3xl">
          <SubpageNav backHref="/insights" />

          {/* Article header */}
          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                AI IMPLEMENTATION
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                14 April 2025
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">6 min read</span>
            </div>
            <h1 className="mb-5 text-[clamp(1.4rem,4vw,2rem)] leading-snug text-[var(--white-100)]">
              Why most AI pilots fail — and what the ones that work have in common
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Three-quarters of enterprise AI pilots never make it to production. The cause is almost never the technology.
            </p>
          </div>

          <div className="rule mb-10" />

          {/* Article body */}
          <div className="prose-deview space-y-6 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>
              Gartner, McKinsey, and most AI vendors will tell you a large share of AI projects stall before reaching production. The specific number varies by survey — anywhere from 60% to 85% — but the directional truth is consistent: most AI pilots built inside enterprises never become working systems.
            </p>
            <p>
              The obvious explanation is that the technology failed. But that&apos;s almost never what actually happens. The technology works. What fails is everything around it.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              The three most common failure modes
            </h2>

            <p>
              <strong className="text-[var(--white-80)]">1. The pilot was built to impress, not to replace.</strong>
              {" "}Most pilots are built against synthetic data or a narrow subset of real cases specifically chosen to make the demo work. When the system meets the actual variety of production data — the unusual formats, the edge cases, the inputs no one thought to include — it falls apart. The demo never reflected reality; the pilot was designed to win internal approval, not to function in the real workflow.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">2. The problem was defined too broadly.</strong>
              {" "}&ldquo;Automate customer service&rdquo; is not a problem definition. &ldquo;Reduce the time a support agent spends retrieving account history before drafting a reply&rdquo; is. The broader the scope, the harder it is to measure success, the more integration work is required, and the more stakeholders have conflicting expectations about what the system should do. Broad-scope pilots produce impressive slide decks and complex architectures that never survive contact with real operations.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">3. There was no clear owner when the build team left.</strong>
              {" "}A pilot built by a vendor or internal innovation team often has no operational owner — someone in the business who is accountable for making it work, who will escalate when it breaks, who will retrain the team, who will push for integration with other systems. Without an owner, the system drifts. It gets bypassed when it makes a mistake. It stops being updated. Within six months, it&apos;s either turned off or ignored.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              What the deployments that actually work have in common
            </h2>

            <p>
              We&apos;ve seen enough projects on both sides — those that stall and those that deliver — to identify the consistent pattern in the ones that succeed.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">They started with a specific cost.</strong>
              {" "}Not &ldquo;improve efficiency&rdquo; — &ldquo;this team spends 4 hours per day reading and sorting inbound forms, and we want to reduce that by at least 60%.&rdquo; That precision matters. It defines success. It makes ROI measurable. It ensures the build is scoped to the right problem rather than the most interesting technical challenge.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">They tested against real data from sprint one.</strong>
              {" "}The teams that succeed insist on using real production data — even a small sample — during the first build sprint. Not cleaned data. Not test data prepared by the vendor. Real documents from real workflows, including the messy edge cases. This surfaces problems early, when fixing them is cheap.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">They kept a human in the loop by design.</strong>
              {" "}The working deployments we&apos;ve seen never try to automate 100% of a workflow from day one. They automate what they can with confidence — typically 70–85% of volume — and route everything else to a human reviewer with full context pre-loaded. This is faster to build, lower risk, and creates a feedback loop that improves the AI over time. The teams that tried to eliminate human review entirely almost always failed.
            </p>

            <p>
              <strong className="text-[var(--white-80)]">They had a named operational owner before deployment.</strong>
              {" "}Before the system went live, someone in the business — not IT, not the innovation team — took ownership. That person was responsible for user adoption, for escalating issues, for feeding anomalies back to the team maintaining the AI. Ownership was defined before deployment, not after.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              The practical implication
            </h2>

            <p>
              If you&apos;re evaluating an AI project for your operations or finance team, ask these questions before approving any budget:
            </p>

            <ul className="space-y-2 pl-4">
              {[
                "Can we measure the problem we're solving in hours or dollars per week — right now, before the build?",
                "Will this be tested against real production data during development, or against sanitised test cases?",
                "What is the human review path for low-confidence outputs — and who owns it?",
                "Who in the business will be responsible for this system six months after the vendor leaves?",
              ].map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[0.6rem] text-[var(--white-30)]">—</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <p>
              If you can&apos;t answer all four, the project isn&apos;t ready to fund. Fix those questions first. The technology is the easy part.
            </p>
          </div>

          {/* Article footer */}
          <div className="mt-12 border-t border-[var(--white-20)] pt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  Have a pilot that stalled?
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  Describe what happened. We&apos;ll tell you whether it&apos;s salvageable and what it would take to get it to production.
                </p>
                <a href="/contact" className="btn-outline inline-block text-sm">
                  Talk to us →
                </a>
              </div>
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  More articles
                </p>
                <Link href="/insights/document-automation-where-to-start" className="group block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  Document automation: four questions to answer before you build →
                </Link>
                <Link href="/insights/four-ai-projects-worth-doing" className="group block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  The four AI projects that pay for themselves fastest →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
