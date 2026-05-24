import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";

export const metadata: Metadata = {
  title: "Case Studies | DeView",
  description:
    "How DeView has helped operations and finance teams cut manual work, automate workflows, and reduce costs — with measurable outcomes.",
};

const cases = [
  {
    number: "01",
    sector: "LENDING · HONG KONG",
    service: "Document Automation",
    headline: "Document processing time cut from 4 hours to 11 minutes per file",
    challenge:
      "A mid-sized Hong Kong lender was processing 80–120 loan application files per day. Each file required a staff member to open, read, classify, extract key fields, and route to underwriting. The process took 3–4 minutes per page across an average 6-page file — consuming nearly 4 full-time hours of capacity daily.",
    solution:
      "DeView built a document automation pipeline: inbound PDFs and scanned forms are processed through an extraction layer that classifies document type, pulls structured fields (applicant name, income figures, LTV ratios, employer details), and routes to the correct underwriting queue. Low-confidence outputs are flagged for human review; everything else moves automatically.",
    outcomes: [
      { metric: "94%", label: "reduction in manual document handling time" },
      { metric: "11 min", label: "average processing time per file (was 4+ hours)" },
      { metric: "3.5 FTE", label: "staff capacity freed for higher-value work" },
      { metric: "4 weeks", label: "from kick-off to live deployment" },
    ],
    quote:
      "We went from a backlog by 10am every day to same-day processing. The team now spends time on exceptions and client relationships — not reading PDFs.",
    quoteRole: "Head of Operations, mid-sized HK lender",
  },
  {
    number: "02",
    sector: "INSURANCE · ASIA-PACIFIC",
    service: "Customer Support Assistant",
    headline: "Average handle time reduced by 44% across 600+ daily support interactions",
    challenge:
      "A regional insurance company's support team was handling 600–800 enquiries per day across email and web chat — primarily policy questions, claim status checks, and renewal reminders. Agents spent 8–12 minutes per interaction manually searching policy documents, looking up account records, and writing responses from scratch.",
    solution:
      "DeView built a support AI connected to the company's policy knowledge base and CRM. For each incoming enquiry, the system classifies intent, retrieves the relevant policy section and account context, and drafts a response ready for agent review. Escalations are automatically routed with full context pre-loaded — the agent sees the customer history, the issue category, and the AI's draft before picking up the conversation.",
    outcomes: [
      { metric: "44%", label: "reduction in average handle time" },
      { metric: "91%", label: "first-contact resolution rate (up from 67%)" },
      { metric: "2.3×", label: "increase in daily cases handled per agent" },
      { metric: "6 weeks", label: "from scoping to production" },
    ],
    quote:
      "The AI does the retrieval and drafting. My team does the judgment calls. That's exactly how it should work.",
    quoteRole: "Customer Service Manager, APAC insurance firm",
  },
  {
    number: "03",
    sector: "PROFESSIONAL SERVICES · SINGAPORE",
    service: "Internal Knowledge Assistant",
    headline: "New consultant onboarding time cut from 3 weeks to 4 days",
    challenge:
      "A professional services firm with 140 employees had 8 years of internal documentation spread across Confluence, SharePoint, and shared drives — procedures, client methodologies, compliance frameworks, and project templates. New hires took 2–3 weeks to become productive. Senior staff were interrupted 12–18 times per day answering internal questions that existing documentation already covered.",
    solution:
      "DeView built a permission-controlled internal knowledge assistant that ingests and indexes the firm's entire document library. Staff ask questions in natural language; the assistant searches across all connected sources and returns cited answers pointing to the specific document section. Access is scoped by role — junior staff cannot retrieve materials outside their clearance level.",
    outcomes: [
      { metric: "4 days", label: "average new hire time-to-productivity (was 3 weeks)" },
      { metric: "73%", label: "reduction in internal knowledge-related interruptions" },
      { metric: "11 hrs/week", label: "senior staff time reclaimed per person" },
      { metric: "3 weeks", label: "deployment including full document library ingestion" },
    ],
    quote:
      "We didn't realise how much senior time was going to questions that were already answered somewhere. Now we can see exactly which documents are getting used — and which ones need updating.",
    quoteRole: "Managing Director, Singapore professional services firm",
  },
  {
    number: "04",
    sector: "FINANCIAL SERVICES · HONG KONG",
    service: "Reporting & Research Copilot",
    headline: "Weekly management pack reduced from 9 hours to 35 minutes of staff time",
    challenge:
      "A Hong Kong financial services company produced a weekly management pack covering pipeline performance, risk flags, and market commentary. Four team members spent a combined 9 hours each week pulling data from five different systems, formatting it into a standard template, and writing narrative summaries. The report was frequently late and occasionally contained reconciliation errors.",
    solution:
      "DeView connected the AI to the company's SQL databases, BI tools, and internal data feeds via read-only service accounts. A scheduled job runs each Friday morning: the system pulls the prior week's data, runs the standard calculations, generates the narrative summaries using the company's approved commentary format, and delivers a complete first-draft report. The team reviews, adjusts commentary as needed, and signs off.",
    outcomes: [
      { metric: "35 min", label: "total staff time per weekly report (was 9 hours)" },
      { metric: "100%", label: "on-time delivery since deployment (was ~60%)" },
      { metric: "Zero", label: "data reconciliation errors since go-live" },
      { metric: "5 weeks", label: "from scoping to first automated report" },
    ],
    quote:
      "Friday mornings used to be chaos. Now the draft is in our inbox before we arrive. We spend 20 minutes reviewing instead of a full day building.",
    quoteRole: "Chief Financial Officer, HK financial services company",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">CASE STUDIES</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                Measurable outcomes from live deployments.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Four engagements across lending, insurance, professional services, and financial operations. All outcomes are real — clients are anonymised by request.
              </p>
            </div>
          </div>

          {/* Case study cards */}
          <div className="space-y-0">
            {cases.map((c, i) => (
              <article
                key={c.number}
                className={`border-t border-[var(--white-20)] py-12 sm:py-16 ${i === cases.length - 1 ? "border-b" : ""}`}
              >
                {/* Meta row */}
                <div className="mb-8 flex flex-wrap items-start gap-3">
                  <span className="text-[2.5rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3rem]">
                    {c.number}
                  </span>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                      {c.sector}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">
                      {c.service}
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h2 className="mb-8 text-[clamp(1.1rem,3.5vw,1.5rem)] leading-snug text-[var(--white-100)] md:max-w-3xl">
                  {c.headline}
                </h2>

                {/* Challenge / Solution */}
                <div className="mb-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                      The Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                      What We Built
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{c.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-10 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-4">
                  {c.outcomes.map((o) => (
                    <div key={o.label} className="flex flex-col gap-1 bg-[var(--background)] px-4 py-5 sm:px-6">
                      <span className="text-[clamp(1.4rem,4vw,2rem)] font-medium leading-none text-[var(--white-100)]">
                        {o.metric}
                      </span>
                      <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">{o.label}</span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-[var(--white-20)] pl-5">
                  <p className="mb-2 text-sm italic leading-relaxed text-[var(--white-80)]">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <cite className="text-[0.6rem] not-italic uppercase tracking-[0.2em] text-[var(--white-40)]">
                    {c.quoteRole}
                  </cite>
                </blockquote>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-12">
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Start a conversation
            </p>
            <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              Tell us the workflow that&apos;s costing the most time or money.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              We review the process and reply within 1–2 business days with a specific recommendation — what AI can do, how long it takes, and a cost range.
            </p>
            <a
              href="/contact"
              className="btn-outline inline-block"
            >
              Start a project →
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
