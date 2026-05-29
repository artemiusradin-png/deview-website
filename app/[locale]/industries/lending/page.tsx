import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "AI for Lending & Finance Operations | DeView",
  description:
    "AI automation for lending and credit teams — borrower intelligence, loan document processing, credit analyst copilots, and regulatory reporting. Built for HKMA, PDPO, MAS TRM, and GDPR. Deployed in 3–6 weeks.",
};

const useCases = [
  {
    label: "BORROWER INTELLIGENCE",
    title: "Replace the spreadsheet shuffle with a 360° borrower view",
    body: "Credit teams lose hours every day reconciling borrower information across systems — loan books, application records, overdue notices, repayment histories, KYC files. DeView builds a unified borrower view that pulls every record for any borrower into one searchable case file, scoped by permission. Underwriters and credit officers see complete history at a glance — across products, across companies if you operate as a network, across years.",
    metrics: [
      "One search replaces hours of cross-system lookups",
      "Permission-scoped — staff see only what they’re authorised to see",
      "Every action recorded for audit",
    ],
  },
  {
    label: "LOAN DOCUMENT AUTOMATION",
    title: "Process applications and supporting documents in minutes, not hours",
    body: "Loan applications arrive as PDFs, scans, photos, and broker submissions in varied templates. AI reads each file, classifies document type, extracts key fields (applicant name, income, LTV ratios, employer, supporting IDs), and routes to the correct underwriting queue. Low-confidence outputs are flagged for human review. The team handles exceptions; the system handles the rest.",
    metrics: [
      "94% reduction in manual document handling time (live deployment)",
      "Average file: 11 minutes processing (was 4+ hours)",
      "Missing-document alerts sent automatically",
    ],
  },
  {
    label: "AI CREDIT ANALYST",
    title: "One-click case summaries — loan history, repayment behaviour, risk signals",
    body: "Credit officers spend 15–20 minutes reading a borrower file before every meeting or decision. DeView’s AI credit analyst generates a complete narrative summary in seconds — loan history, repayment patterns, overdue status across all products, risk flags, recent activity. Officers spend their time on judgment, not on file assembly.",
    metrics: [
      "Replaces the 20-minute manual file review",
      "Pulls from live data — never out of date",
      "Cited — every claim traces back to a record in your database",
    ],
  },
  {
    label: "REGULATORY REPORTING",
    title: "Generate HKMA, PDPO, and MAS TRM reports on schedule",
    body: "Regulatory reporting in lending requires pulling data from loan management, application, and risk systems, cross-referencing exposures, and producing structured reports on schedule. AI connects to your systems via read-only service accounts, runs the calculations, and generates the required reports automatically — ready for review and sign-off rather than manual assembly. Audit trail included by default.",
    metrics: [
      "Scheduled reports delivered before staff arrive",
      "Audit trail recorded on every figure",
      "Configurable for HKMA, MAS TRM, PDPO, GDPR — and your internal frameworks",
    ],
  },
];

const objections = [
  {
    q: "AI shouldn’t make credit decisions. How is this different?",
    a: "It isn’t — and we don’t. AI handles document intake, classification, extraction, summarisation, and report generation. Credit decisions stay with your credit officers. Every AI output is traceable to the source data, and uncertain outputs are flagged for human review before they affect any workflow.",
  },
  {
    q: "Our borrower data is regulated under HKMA, PDPO, and MAS rules. Where does AI run?",
    a: "Every deployment runs inside your cloud environment or on-premises infrastructure. No borrower data passes through DeView-operated systems. Role-based access controls, encryption in transit and at rest, full audit logging, and configurable data-residency boundaries come standard. We advise on the regulatory mapping before code is written.",
  },
  {
    q: "Our borrower data is spread across loan management, CRM, scanned documents, and spreadsheets. Can AI work with that?",
    a: "Yes — that’s the typical lending stack. We build connectors to each system via read-only service accounts, normalise records into a shared data layer, and process scanned documents through an extraction pipeline. Your existing systems remain the source of truth; the AI reads from them and writes audit records back. Nothing gets ripped and replaced.",
  },
  {
    q: "If we’re a multi-company network, how do you keep data separated between entities?",
    a: "The platform is multi-tenant from day one. Each staff member sees only the borrowers, companies, and data they’re authorised for — enforced at the database row level, not the UI. A user from Company A cannot query, summarise, or export anything from Company B unless explicitly granted. Every cross-entity query is logged.",
  },
];

export default function LendingPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">LENDING & FINANCE · INDUSTRY</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                AI for lending operations — borrower intelligence, document automation, and credit-team productivity.
              </h1>
              <div className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  Lending teams sit on years of borrower data spread across loan books, application systems, and document archives. The work that drives risk and revenue — knowing a borrower, processing files faster, reporting accurately — is exactly where AI compounds.
                </p>
                <p>
                  DeView builds lending-grade AI systems that respect regulatory boundaries and keep underwriters in control.
                </p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mb-16 grid grid-cols-3 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
            {[
              { metric: "94%", label: "reduction in manual document handling (live)" },
              { metric: "3–6 wks", label: "from scoping to live deployment" },
              { metric: "100%", label: "audit trail on every AI action" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-6">
                <span className="text-[clamp(1.3rem,4vw,1.8rem)] leading-none text-[var(--white-100)]">{s.metric}</span>
                <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Featured deployment pointer */}
          <div className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Featured deployment
            </p>
            <h3 className="mb-3 text-[clamp(1.05rem,3vw,1.35rem)] leading-snug text-[var(--white-100)]">
              DeView Unified Portal — one platform serving five lending companies, with five AI capabilities built on top.
            </h3>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              Shared backbone for portal, database, and audit trail. AI Credit Analyst, Agentic AI Assistant, AI Email Processing, AI Document Processing, and AI Prompt Management — each reading from the same borrower database and writing back to the same audit trail. No silos, no copy-paste between systems.
            </p>
            <a
              href="/#featured-deployment-finance"
              className="inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors hover:text-[var(--white-100)]"
            >
              See the build
              <span aria-hidden="true">→</span>
            </a>
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
              Common questions from lending teams
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
              Start with a workflow
            </p>
            <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
              Tell us the lending or credit-ops process that&apos;s costing the most manual time.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              We reply within 1–2 business days with a specific recommendation — what AI can do, how long deployment takes, and a cost range.
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
