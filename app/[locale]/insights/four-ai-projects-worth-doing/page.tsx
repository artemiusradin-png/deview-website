import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "The four AI projects that pay for themselves fastest | DeView Insights",
  description:
    "Not all AI use cases are created equal. Four specific projects that consistently deliver measurable ROI within the first 90 days in operations teams.",
};

const projects = [
  {
    rank: "01",
    title: "Document intake and classification",
    why: "High volume, low tolerance for variation, immediate measurable output.",
    body: "Every operations team processes inbound documents — applications, contracts, forms, emails with attachments. The manual workflow is usually: open, read, classify, extract key fields, route to the correct queue. An AI pipeline automates this: the document arrives, gets classified, fields are extracted, and it routes automatically. Low-confidence items go to a human reviewer with context pre-loaded.\n\nThis is the most reliable first AI project because: the input is well-defined (a document), the output is well-defined (a classification and structured data extract), the task is high-volume and repetitive, and the cost of the current process is easy to calculate in staff hours. In most cases it pays for itself within 3–6 months of deployment.",
    typical: "60–90% reduction in manual document handling time",
    timeline: "3–5 weeks to deploy",
  },
  {
    rank: "02",
    title: "Internal knowledge assistant",
    why: "Removes invisible cost that most teams don't realise they're paying.",
    body: "Senior staff interruptions from internal questions are an enormous hidden cost. When someone asks their manager how to handle a specific compliance case, or spends 20 minutes searching SharePoint for the right policy document, or emails HR a question that's already answered in the onboarding guide — all of that time is real money, but it never shows up in a cost report.\n\nAn internal knowledge assistant indexes your company's actual documents and answers questions in seconds, with citations pointing to the source. New starters get productive faster. Senior staff get their time back. Compliance and ops teams stop being interrupted by questions that existing documentation already answers.\n\nThe deployment is typically fast because it doesn't require deep system integration — it just needs read access to your document storage.",
    typical: "10–15 hours per week reclaimed per senior staff member",
    timeline: "2–4 weeks to deploy",
  },
  {
    rank: "03",
    title: "AI-assisted customer support drafting",
    why: "Biggest handle-time reduction with lowest compliance risk.",
    body: "Customer support teams spend most of their time on three things: understanding what the customer is asking, finding the relevant account context or policy, and writing the response. AI handles the first two reliably — it classifies the query, retrieves the relevant information from the CRM and knowledge base, and drafts a response ready for the agent to review and send.\n\nThe key design decision: AI drafts, human sends. This means the compliance and reputational risk stays with a trained employee, while the productivity gain from AI is fully captured. Teams typically see 30–50% reduction in average handle time, and average first-contact resolution rates improve because agents have better context before they respond.",
    typical: "30–50% reduction in average handle time",
    timeline: "3–5 weeks to deploy",
  },
  {
    rank: "04",
    title: "Recurring report automation",
    why: "The hours are visible, the savings are immediate, the scope is contained.",
    body: "Finance and operations teams produce the same reports every week or every month: pipeline summaries, management packs, compliance reports, performance reviews. Each one involves pulling data from multiple sources, formatting it into a template, and writing narrative commentary. For a report that takes 4–6 hours to produce, an AI system that reduces that to 30–45 minutes of review time pays for itself in weeks.\n\nThe reason this works reliably is that recurring reports are by definition consistent: the same structure, the same data sources, the same commentary format — every cycle. AI is well-suited to consistency. The value isn't in the AI discovering new insights; it's in automating the mechanical gathering, formatting, and first-draft writing that humans shouldn't be doing by hand.",
    typical: "70–90% reduction in report production time",
    timeline: "3–6 weeks to deploy",
  },
];

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-3xl">
          <SubpageNav backHref="/insights" />

          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                AI STRATEGY
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                10 March 2025
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">7 min read</span>
            </div>
            <h1 className="mb-5 text-[clamp(1.4rem,4vw,2rem)] leading-snug text-[var(--white-100)]">
              The four AI projects that pay for themselves fastest in operations teams
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Not all AI use cases are created equal. Some pay back in weeks; others require years of behaviour change before they show ROI. Here are four that consistently deliver within 90 days.
            </p>
          </div>

          <div className="rule mb-10" />

          <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>
              When operations teams ask &ldquo;where should we start with AI?&rdquo;, the honest answer is: start where the ROI is fastest, the scope is clearest, and the technology risk is lowest. Those three criteria — fast payback, clear scope, low risk — point consistently to the same four use cases.
            </p>
            <p>
              These are not the most sophisticated AI applications. They are not the ones that make the best keynote slides. They are the ones that reliably reduce costs, are fast to scope and deploy, and create the internal momentum to fund the harder problems later.
            </p>
          </div>

          <div className="mt-10 space-y-0">
            {projects.map((p, i) => (
              <div
                key={p.rank}
                className={`border-t border-[var(--white-20)] py-10 ${i === projects.length - 1 ? "border-b" : ""}`}
              >
                <div className="mb-6 flex items-start gap-5">
                  <span className="text-[2rem] leading-none tracking-[-0.04em] text-[var(--white-10)]">
                    {p.rank}
                  </span>
                  <h2 className="text-[clamp(1rem,3vw,1.2rem)] text-[var(--white-100)]">{p.title}</h2>
                </div>

                <div className="mb-5 border-l-2 border-[var(--white-20)] pl-5">
                  <p className="text-[0.72rem] italic text-[var(--white-60)]">{p.why}</p>
                </div>

                <div className="mb-6 space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {p.body.split("\n\n").map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>

                <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
                  <div className="bg-[var(--background)] px-4 py-3">
                    <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Typical result</p>
                    <p className="mt-1 text-[0.78rem] text-[var(--white-80)]">{p.typical}</p>
                  </div>
                  <div className="bg-[var(--background)] px-4 py-3">
                    <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Deployment timeline</p>
                    <p className="mt-1 text-[0.78rem] text-[var(--white-80)]">{p.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              The selection principle
            </h2>
            <p>
              All four of these projects share a structural characteristic: the input is well-defined (a document, a support ticket, a data query), the output is well-defined (a classification, a draft, a formatted report), the task is high-volume, and the cost of manual handling is easy to measure.
            </p>
            <p>
              That structure is what makes them fast to scope, fast to build, and easy to measure. If your candidate AI project doesn&apos;t have all four characteristics — clear input, clear output, high volume, measurable current cost — it belongs in a later stage of your AI roadmap, not the first one.
            </p>
            <p>
              Start with the project where success is obvious and measurable within 90 days. That builds the internal evidence base to justify the bigger, longer-horizon work.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--white-20)] pt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  Not sure which to start with?
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  We do a 1–2 week workflow audit that tells you exactly which of these fits your operation first — with an ROI estimate before any build commitment.
                </p>
                <LocaleLink href="/contact" className="btn-outline inline-block text-sm">
                  Book an AI Workflow Audit →
                </LocaleLink>
              </div>
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  More articles
                </p>
                <LocaleLink href="/insights/why-most-ai-pilots-fail" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  Why most AI pilots fail →
                </LocaleLink>
                <LocaleLink href="/insights/document-automation-where-to-start" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  Document automation: where to start →
                </LocaleLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
