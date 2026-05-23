import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";

export const metadata: Metadata = {
  title: "Case Studies | DeView",
  description:
    "How DeView has helped operations and finance teams cut manual work, automate workflows, and reduce costs — with measurable outcomes.",
};

type CaseAgent = {
  block: string;
  title: string;
  body: string;
};

type CaseStudy = {
  number: string;
  sector: string;
  service: string;
  videoSrc?: string;
  headline: string;
  challenge: string;
  solution: string;
  agents?: CaseAgent[];
  outcomes: { metric: string; label: string }[];
  techStack?: string[];
  quote?: string;
  quoteRole?: string;
};

const cases: CaseStudy[] = [
  {
    number: "01",
    sector: "AGRICULTURE · UKRAINE",
    service: "AI Field Diagnostics & Sales Automation",
    videoSrc: "/deview-agroplatforma-demo.mp4",
    headline:
      "Field-to-quote workflow cut from ~40 minutes to under 30 seconds with AI-assisted crop diagnostics.",
    challenge:
      "AgroPlatforma is a Ukrainian agricultural distributor and advisory network whose field consultants diagnose crop problems and prepare quotes for growers across the country. Each case took roughly 40 minutes — opening photos on a laptop, matching symptoms against agronomic references, picking the right SKU from a 20,000-product catalogue, checking stock and regulatory status, then drafting the quotation back in Salesforce. Slow turnarounds meant consultants spent more time on paperwork than in the field, and decisions arrived after the optimal treatment window had closed.",
    solution:
      "DeView built a three-agent AI system on top of AgroPlatforma's existing Salesforce and Flutter stack. A consultant photographs the affected crop in-field; Claude (multimodal, via Vertex AI) returns a diagnosis with ranked product recommendations sourced through RAG over the live SKU catalogue, then drafts the corresponding Salesforce quotation with alternatives and cross-sell. A nine-layer safety architecture — confidence thresholding, regulatory SQL filters, real-time inventory validation, deterministic metric queries, append-only audit logging, and consultant approval gates — keeps the human in control of every recommendation that reaches a grower.",
    agents: [
      {
        block: "A",
        title: "Agro-Vision Expert",
        body: "Photo → diagnosis → ranked SKU recommendations from a 20,000-product catalogue via pgvector RAG. Low-confidence cases drop into chatbot guidance instead of recommending a product.",
      },
      {
        block: "B",
        title: "Smart Operator & Sales",
        body: "Converts the diagnosis into a draft quotation directly inside Salesforce, layering in product alternatives, cross-sell, margin and substitution rules — pending consultant sign-off.",
      },
      {
        block: "D",
        title: "Vendor Analytics",
        body: "Aggregates anonymised diagnostic and transaction data into vendor-facing dashboards with regional and product breakdowns. Read-only, row-level secured.",
      },
    ],
    outcomes: [
      { metric: "< 30 sec", label: "field-to-quote latency (was ~40 min)" },
      { metric: "20K SKUs", label: "ranked through RAG over the live catalogue" },
      { metric: "≥ 85%", label: "blind-panel accuracy gate before production" },
      { metric: "9 layers", label: "of safety controls preventing hallucination" },
    ],
    techStack: [
      "Claude on Vertex AI (multimodal)",
      "FastAPI · Python 3.12",
      "PostgreSQL 17 + pgvector",
      "Flutter (iOS / Android / web)",
      "Salesforce",
      "GCP Cloud Run · Cloud SQL · Cloud Storage",
      "Firebase Auth",
    ],
  },
  {
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
                Five engagements across agriculture, lending, insurance, professional services, and financial operations. All outcomes are real — clients are anonymised by request, except where named.
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

                {/* Video (optional) */}
                {c.videoSrc ? (
                  <div className="mb-10 overflow-hidden border border-[var(--white-20)] bg-black">
                    <video
                      className="block h-auto w-full"
                      controls
                      preload="metadata"
                      playsInline
                      muted
                    >
                      <source src={c.videoSrc} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                ) : null}

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

                {/* Agents (optional) */}
                {c.agents ? (
                  <div className="mb-10">
                    <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                      Three AI Agents on a Shared Backend
                    </p>
                    <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] md:grid-cols-3">
                      {c.agents.map((a) => (
                        <div key={a.block} className="flex flex-col gap-3 bg-[var(--background)] p-5 sm:p-6">
                          <div className="flex items-baseline gap-3">
                            <span className="text-[1.5rem] leading-none tracking-[-0.04em] text-[var(--white-20)]">
                              {a.block}
                            </span>
                            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)]">
                              {a.title}
                            </span>
                          </div>
                          <p className="text-[0.8rem] leading-relaxed text-[var(--text-muted)]">{a.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

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

                {/* Tech stack (optional) */}
                {c.techStack ? (
                  <div className="mb-10">
                    <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                      Stack
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {c.techStack.map((t) => (
                        <li
                          key={t}
                          className="border border-[var(--white-20)] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--white-80)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Quote (optional) */}
                {c.quote ? (
                  <blockquote className="border-l-2 border-[var(--white-20)] pl-5">
                    <p className="mb-2 text-sm italic leading-relaxed text-[var(--white-80)]">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    {c.quoteRole ? (
                      <cite className="text-[0.6rem] not-italic uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {c.quoteRole}
                      </cite>
                    ) : null}
                  </blockquote>
                ) : null}
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
