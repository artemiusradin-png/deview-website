import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "AI for Legal Operations | DeView",
  description:
    "AI automation for legal and professional services teams — contract review, document processing, research, and internal knowledge management. Deployed in 3–6 weeks.",
};

const useCases = [
  {
    label: "CONTRACT REVIEW",
    title: "Extract key terms, flags, and obligations in minutes — not hours",
    body: "Contract review is time-consuming and error-prone under time pressure. AI reads contracts and extracts the terms that matter: parties, effective dates, payment terms, termination clauses, renewal provisions, liability caps, and non-standard deviations from your standard template. Lawyers receive a pre-populated summary with flagged issues rather than a raw document to read from scratch. Review time per contract drops by 60–80%.",
    metrics: ["60–80% reduction in initial review time per contract", "Deviations from standard templates flagged automatically", "Extracted terms structured and ready for matter management systems"],
  },
  {
    label: "LEGAL RESEARCH",
    title: "Search across case files, precedents, and internal memos in seconds",
    body: "Research that used to take a junior associate 3–4 hours — searching precedent files, reviewing past opinions, identifying relevant clauses across prior agreements — can be reduced to minutes. AI searches your entire internal document library and surfaces the relevant sections with citations. Associates spend time analysing and applying, not searching.",
    metrics: ["Research retrieval time cut from hours to minutes", "Cited results — every answer references the source document", "Accessible to all fee earners, with permission controls by matter"],
  },
  {
    label: "DOCUMENT DRAFTING SUPPORT",
    title: "First drafts of standard documents generated from matter information",
    body: "Standard legal documents — NDAs, service agreements, engagement letters, internal memos — follow predictable templates with variable fields. AI generates first drafts from the matter information already in your system, using your firm's approved templates. Lawyers review and adapt rather than drafting from blank pages. Output goes through your normal approval workflow before anything leaves the firm.",
    metrics: ["First draft generated in minutes for standard document types", "Consistent application of approved templates", "Human review and sign-off remain in place throughout"],
  },
  {
    label: "CLIENT MATTER KNOWLEDGE",
    title: "Instant access to the full history of any client matter",
    body: "When a partner asks about a client's prior engagement history, or a junior associate needs to understand the background of an ongoing matter, searching the file takes time and depends on how consistently documents were filed. AI indexes your matter management system and document storage and answers questions in seconds: what were the key terms of the 2022 facility agreement? What issues arose in last year's due diligence? What positions did we take on X clause in comparable transactions?",
    metrics: ["Matter context retrieved in seconds", "New associates productive on matters faster", "Institutional knowledge preserved across partner transitions"],
  },
];

const objections = [
  {
    q: "Legal documents contain privileged information. How is confidentiality maintained?",
    a: "All data stays in your environment — either your own cloud account or on-premises. Nothing passes through DeView infrastructure. Access is scoped by matter and seniority level. The audit trail documents exactly who accessed what and when.",
  },
  {
    q: "Our contracts are highly variable. Can AI handle non-standard structures?",
    a: "Modern LLMs handle structural variation well — they read documents the way a human does, not by matching fixed templates. We test the system against a sample of your actual contracts before deployment to verify extraction accuracy across your specific document variety.",
  },
  {
    q: "We're concerned about liability if AI misses something in a contract review.",
    a: "AI assists the review; the lawyer remains responsible for the advice. The system flags issues and extracts terms — it doesn't make legal judgments. We configure it explicitly to surface uncertainty (\"this clause deviates from standard in this way — verify\") rather than give false confidence.",
  },
];

export default function LegalPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">LEGAL · INDUSTRY</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                AI for legal and professional services — built for document complexity, privilege, and fee-earner productivity.
              </h1>
              <div className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  Legal work is document-intensive and time-sensitive. Every hour a fee earner spends searching for information, reviewing standard contracts, or drafting first-draft documents is an hour not spent on the work that requires legal judgment.
                </p>
                <p>
                  DeView builds AI systems for legal teams that handle the mechanical work — retrieval, extraction, first-draft generation — so lawyers spend their time on the analysis and advice that only they can provide.
                </p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mb-16 grid grid-cols-3 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
            {[
              { metric: "60–80%", label: "reduction in initial contract review time" },
              { metric: "Minutes", label: "to search across your entire document library" },
              { metric: "Zero", label: "data leaves your environment" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-6">
                <span className="text-[clamp(1.3rem,4vw,1.8rem)] leading-none text-[var(--white-100)]">{s.metric}</span>
                <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Use cases */}
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Use cases</p>
            <div className="rule mb-8" />
            <div className="space-y-0">
              {useCases.map((uc, i) => (
                <div
                  key={uc.label}
                  className={`border-t border-[var(--white-20)] py-10 ${i === useCases.length - 1 ? "border-b" : ""}`}
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {uc.label}
                      </p>
                      <h2 className="mb-4 text-[clamp(1rem,3vw,1.2rem)] leading-snug text-[var(--white-100)]">
                        {uc.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{uc.body}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-3 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        What changes
                      </p>
                      <ul className="space-y-2">
                        {uc.metrics.map((m) => (
                          <li key={m} className="flex gap-3 text-[0.78rem] text-[var(--white-80)]">
                            <span className="shrink-0 text-[0.6rem] text-[var(--white-60)]">+</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objections */}
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Common questions from legal teams
            </p>
            <div className="rule mb-8" />
            <div className="space-y-0">
              {objections.map((o, i) => (
                <div
                  key={o.q}
                  className={`grid gap-4 py-6 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== objections.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
                >
                  <p className="text-sm text-[var(--white-80)]">{o.q}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{o.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-12">
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Start with one workflow
            </p>
            <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              Tell us the document task that takes the most fee-earner time.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              We review the process and reply within 1–2 business days with a specific recommendation — what AI can do, the data sensitivity approach, and a cost range.
            </p>
            <div className="flex flex-wrap gap-4">
              <LocaleLink href="/contact" className="btn-outline">
                Start a project →
              </LocaleLink>
              <LocaleLink href="/case-studies" className="btn-outline">
                See case studies →
              </LocaleLink>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
