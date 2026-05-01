"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SiteFooter } from "../../../../components/SiteFooter";
import { SubpageNav } from "../../../../components/SubpageNav";
import { FeatureSpotlight } from "@/components/ui/feature-spotlight";

const USE_CASE_IMAGES = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
];

const USE_CASES = [
  {
    number: "01",
    title: "AI Document Intake and Classification",
    problem:
      "Your team manually opens, reads, and sorts every incoming application, contract, and form. For a team processing 50+ documents a day, this is 2–4 staff hours of work that produces no decisions — only sorted piles.",
    useCase:
      "AI can automatically classify incoming documents by type and route them to the correct folder or workflow stage.",
    example: [
      "Passport / government ID",
      "Bank statements (1, 3, or 6 months)",
      "Proof of employment or income",
      "Signed loan application",
      "Business registration document",
      "Flag: incorrect or unreadable document",
    ],
    value: [
      "Reduces document intake from hours to minutes",
      "Frees staff to handle exceptions and borrower communication",
      "Scales without additional headcount as volume grows",
      "Fewer misfiled or lost documents",
    ],
    note: "AI handles sorting only — it does not make lending decisions.",
    impact: "High",
    complexity: "Medium",
    risk: "Low",
    recommended: true,
  },
  {
    number: "02",
    title: "Missing Document Detection",
    problem:
      "Incomplete applications create delays, back-and-forth communication, and delayed closings. Every day an application sits waiting for a missing document is a day of pipeline revenue at risk.",
    useCase:
      "AI compares a submitted document set against a configurable checklist and immediately flags what is missing, so staff can send a targeted follow-up.",
    example: [
      "Application form — ✓ received",
      "Proof of identity — ✓ received",
      "Bank statements — ✗ missing",
      "Business registration — ✓ received",
      "Signed consent form — ✗ missing",
    ],
    value: [
      "Automatically flags missing items before the file reaches underwriting",
      "Reduces application-to-complete cycle time",
      "Eliminates the manual checklist review before each handoff",
      "Better borrower experience — specific requests, not generic follow-ups",
    ],
    note: null,
    impact: "High",
    complexity: "Low",
    risk: "Low",
    recommended: true,
  },
  {
    number: "03",
    title: "AI-Assisted Customer Email Replies",
    problem:
      "Customer emails asking about application status, document requirements, and loan terms arrive constantly. Writing individual responses takes time — and inconsistent answers create compliance risk.",
    useCase:
      "AI drafts replies based on approved response templates and the customer's file status. Staff review and send with one click.",
    example: [
      "Client: \"What documents do I still need to send?\"",
      "AI draft: \"Thank you for your application. Your file is currently missing [bank statements — last 3 months] and [signed consent form]. You can submit these via [portal link] or email them directly to [address]...\"",
    ],
    value: [
      "Consistent, accurate replies drafted in seconds",
      "Agents review and send — not write from scratch",
      "Reduces per-email handling time by 60–80%",
      "Better client experience during high-volume periods",
    ],
    note: "Always human-reviewed before sending — especially for financial or legal content.",
    impact: "High",
    complexity: "Low",
    risk: "Medium",
    recommended: true,
  },
  {
    number: "04",
    title: "Internal Knowledge Assistant for Employees",
    problem:
      "When a loan officer needs to check a policy, they either search a shared drive for 10 minutes, send a Slack message, or ask their manager. Each interruption costs 15+ minutes of productive time on both sides.",
    useCase:
      "A private internal AI assistant that answers questions based exclusively on company-approved documents — no external knowledge, no hallucination risk from general AI.",
    example: [
      "\"What documents are required for a self-employed applicant?\"",
      "\"What is the escalation process for applications over $500K?\"",
      "\"Which template should I use for a payment delay request?\"",
      "\"What are the compliance steps before sending a file to legal review?\"",
    ],
    value: [
      "Instant answers from your actual policy and procedure documents",
      "New staff productive in days instead of weeks",
      "Managers stop being interrupted by questions documents already answer",
      "Institutional knowledge stays in the business, not just in people",
    ],
    note: "This is one of the highest-ROI first AI projects for most lending operations.",
    impact: "High",
    complexity: "Medium",
    risk: "Low",
    recommended: true,
  },
  {
    number: "05",
    title: "Call and Meeting Summaries",
    problem:
      "Every borrower call and team meeting produces notes that someone has to write up, file, and act on. If this gets skipped, context is lost. If it doesn't, it's 20–30 minutes of work per call.",
    useCase:
      "AI transcribes and summarizes calls or meetings into structured notes, automatically extracting the fields that matter.",
    example: [
      "Client name + contact details",
      "Reason for loan / purpose",
      "Requested amount",
      "Main concerns or questions raised",
      "Documents client promised to send",
      "Next action + responsible employee + deadline",
    ],
    value: [
      "Automatic summary and action items after every call",
      "Notes filed to CRM without manual entry",
      "Compliance documentation produced automatically",
      "Fewer missed commitments and cleaner CRM data",
    ],
    note: "Must comply with privacy regulations and call recording consent requirements in your jurisdiction.",
    impact: "High",
    complexity: "Medium",
    risk: "Medium",
  },
  {
    number: "06",
    title: "CRM Data Cleanup and Enrichment",
    problem:
      "Stale, duplicate, and incomplete CRM records make pipeline management unreliable. Sales and operations teams make decisions based on data they can't fully trust.",
    useCase:
      "AI processes unstructured CRM notes and converts them into structured, consistent fields. It can also flag duplicates and normalize contact records.",
    example: [
      "Before: \"client called, wants update, sent docs but missing bank stuff, follow up next week\"",
      "After: Status: Documents incomplete | Missing item: Bank statements | Priority: Medium | Next action: Send reminder | Follow-up date: [date]",
    ],
    value: [
      "Identifies duplicates, blanks, and inconsistencies automatically",
      "Improves reliability of pipeline reporting and forecasting",
      "Better visibility into deal stages across the team",
      "Less confusion when clients transfer between employees",
    ],
    note: null,
    impact: "Medium",
    complexity: "Medium",
    risk: "Low",
  },
  {
    number: "07",
    title: "AI-Powered Lead Qualification",
    problem:
      "Your team spends significant time on leads that will never convert — incomplete profiles, out-of-scope loan sizes, or applicants who don't meet basic criteria. That time costs money.",
    useCase:
      "AI analyzes inbound inquiries and categorizes them by urgency, fit, loan type, and completeness of information provided.",
    example: [
      "High-priority — meets criteria, complete information, urgent timeline",
      "Needs more information — incomplete submission, follow up required",
      "Not eligible — does not meet basic lending criteria",
      "Existing client — service request or account change",
      "Compliance-sensitive — flag for senior review",
    ],
    value: [
      "Score and rank inbound leads before human review",
      "Surface the highest-probability opportunities first",
      "Reduce time wasted on leads that fail basic qualification criteria",
      "Higher conversion rate from the same volume of inbound inquiries",
    ],
    note: "AI supports prioritization only — it does not make eligibility decisions.",
    impact: "High",
    complexity: "Medium",
    risk: "Medium",
  },
  {
    number: "08",
    title: "Contract and Agreement Summarization",
    problem:
      "Reviewing contracts line by line — loan agreements, vendor contracts, referral agreements — takes hours per document. The risk of missing a clause is real, especially under time pressure.",
    useCase:
      "AI reads and summarizes key terms from contracts, highlighting the sections most relevant to the review.",
    example: [
      "Parties involved",
      "Loan amount and disbursement terms",
      "Repayment schedule and fees",
      "Key deadlines and milestones",
      "Special conditions or restrictions",
      "Sections flagged for legal review",
    ],
    value: [
      "Key terms, obligations, and risk flags extracted in minutes",
      "Reduces review time by 60–80% per document",
      "Flags clauses that deviate from standard templates for human attention",
      "Better preparation before legal or compliance review",
    ],
    note: "AI summaries assist understanding — they do not replace qualified legal review.",
    impact: "Medium",
    complexity: "Low",
    risk: "Medium",
  },
  {
    number: "09",
    title: "Compliance Checklist Support",
    problem:
      "Compliance checklists are completed manually, often under time pressure, and errors create audit exposure. When a regulator asks, the documentation needs to be complete and accurate.",
    useCase:
      "AI pre-screens files against configurable compliance checklists and flags incomplete items before they reach the review stage.",
    example: [
      "All required signatures present — ✓",
      "KYC documents attached — ✓",
      "Consent forms signed — ✗ missing",
      "Third-party verification completed — ✓",
      "Approval chain documented — ✗ incomplete",
    ],
    value: [
      "Automatically checks the file against the required checklist items",
      "Flags gaps before submission — not after",
      "Creates a timestamped audit trail for every compliance check",
      "Fewer incomplete files reaching the compliance team",
    ],
    note: "AI supports preparation — final compliance approval remains with a qualified person.",
    impact: "High",
    complexity: "High",
    risk: "Higher",
  },
  {
    number: "10",
    title: "Management Reporting and Insights",
    problem:
      "Weekly and monthly management reports are assembled manually from multiple systems. Someone spends half a day pulling data, formatting it, and writing the summary — every single week.",
    useCase:
      "AI summarizes operational data into structured weekly management insights — surfacing bottlenecks, volume trends, and team workload without manual compilation.",
    example: [
      "Applications received this week: 47 (↑12% vs last week)",
      "Average processing time: 3.2 days (↑0.4 days vs target)",
      "Most common missing document: bank statements (34% of cases)",
      "Delayed cases: 8 — all awaiting client documents",
      "Top repeated customer question: payment date changes",
    ],
    value: [
      "Reports generated automatically from connected data sources",
      "Variance and anomalies highlighted without manual analysis",
      "Management briefing ready in minutes instead of half a day",
      "Clearer view of team capacity and workload distribution",
    ],
    note: null,
    impact: "High",
    complexity: "Medium",
    risk: "Low",
  },
];

const SCORING = [
  { useCase: "Document classification", impact: "High", complexity: "Medium", risk: "Low", recommended: true },
  { useCase: "Missing document detection", impact: "High", complexity: "Low", risk: "Low", recommended: true },
  { useCase: "Internal knowledge assistant", impact: "High", complexity: "Medium", risk: "Low", recommended: true },
  { useCase: "AI-assisted email drafts", impact: "High", complexity: "Low", risk: "Medium", recommended: true },
  { useCase: "Call and meeting summaries", impact: "High", complexity: "Medium", risk: "Medium", recommended: false },
  { useCase: "CRM data cleanup", impact: "Medium", complexity: "Medium", risk: "Low", recommended: false },
  { useCase: "Lead qualification", impact: "High", complexity: "Medium", risk: "Medium", recommended: false },
  { useCase: "Contract summarization", impact: "Medium", complexity: "Low", risk: "Medium", recommended: false },
  { useCase: "Compliance checklist", impact: "High", complexity: "High", risk: "Higher", recommended: false },
  { useCase: "Management reporting", impact: "High", complexity: "Medium", risk: "Low", recommended: false },
];

const AUDIT_ITEMS = [
  "Which specific workflows are costing the most time and money in your operation",
  "Which of the 10 use cases applies to your situation — and which order to tackle them",
  "Where borrower data risk sits and what to keep away from AI",
  "What a first implementation looks like in practice for a team your size",
  "A realistic timeline and cost range for your first project",
];

export default function AiGuideLendingPage() {
  const router = useRouter();
  const [ready] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem("deview-guide-lending") === "1";
  });

  useEffect(() => {
    if (!ready) {
      router.replace("/resources/ai-guide-lending");
    }
  }, [ready, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--white-20)] border-t-[var(--white-80)]" />
      </div>
    );
  }

  return (
    <>
      <main className="section-gutter min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-10 sm:pt-24">
        <div className="mx-auto max-w-4xl">

          <SubpageNav backHref="/resources/ai-guide-lending" />

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-10"
          >
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[var(--white-60)]">
              PREPARED BY DEVIEW — AI AUTOMATION FOR LENDING &amp; FINANCIAL OPERATIONS
            </p>
            <div className="rule mb-6 max-w-[6rem]" />
            <h1 className="hero-heading mb-4 text-[clamp(1.5rem,5vw,2.4rem)] leading-[1.15] text-[var(--white-100)]">
              10 AI USE CASES FOR LENDING COMPANIES: WHERE TO START, WHAT TO AUTOMATE, AND HOW TO DO IT SAFELY
            </h1>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
              A practical guide to reducing manual processing costs in your lending operation — with a scoring table
              that tells you which use cases are worth piloting first.
            </p>
            <div className="flex flex-wrap gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--white-40)]">
              <span>For: Lending &amp; financial services operations teams</span>
              <span>·</span>
              <span>Practical first projects</span>
              <span>·</span>
              <span>Data-safe implementation</span>
            </div>
          </motion.div>

          {/* Introduction */}
          <section className="mb-16">
            <p className="section-label mb-4">WHY MOST LENDING TEAMS START AI WRONG</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
              <p>
                Most lending teams start with a tool — a chatbot, an AI writing assistant, a general-purpose platform —
                before identifying the specific workflow they need to fix. That&apos;s why most AI pilots in lending fail
                to show ROI. The tool is real; the problem it solves is vague.
              </p>
              <p>
                The lending workflows worth automating are specific and measurable: document intake that takes three
                staff-hours a day, missing-item follow-up that delays closings, internal policy questions that interrupt
                your senior staff, compliance checklists that are manually completed every time. AI solves these.
                Quantify the cost first, automate second.
              </p>
              <p>
                This guide maps 10 specific lending workflows where AI delivers measurable time and cost savings.
                Each use case includes the business problem, what the AI does, and what changes after deployment.
                The final section includes a scored priority table so you can identify your best first project.
              </p>
            </div>
          </section>

          {/* Framework */}
          <section className="mb-16">
            <p className="section-label mb-4">THREE QUESTIONS BEFORE YOU AUTOMATE ANYTHING</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
              Before spending on any AI tool or build, run every candidate workflow through these three tests:
            </p>
            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-3">
              {[
                {
                  q: "Is the task repetitive and high-volume?",
                  body: "The same steps, the same inputs, the same outputs — dozens or hundreds of times per week. If yes, every hour spent on it is a cost AI can eliminate.",
                },
                {
                  q: "Does it involve text, documents, or emails?",
                  body: "Applications, contracts, emails, forms, PDFs, notes. If the input is text, AI can read, classify, extract, and route it.",
                },
                {
                  q: "Does the outcome carry legal or compliance weight?",
                  body: "If a decision affects a borrower's application, a regulatory filing, or a credit outcome — AI assists and flags; a human decides and signs off.",
                },
              ].map((item) => (
                <div key={item.q} className="flex flex-col gap-3 bg-[var(--surface)] p-5">
                  <p className="label-xs text-[var(--white-40)]">SIGNAL</p>
                  <p className="text-sm font-medium text-[var(--white-90)]">{item.q}</p>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.72rem] leading-relaxed text-[var(--white-40)]">
              The best first AI projects score high on conditions one and two, and low on condition three. That&apos;s
              where you get fast ROI with minimal compliance risk. The 10 use cases in this guide are ranked on
              exactly this basis.
            </p>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <p className="section-label mb-4">THE 10 USE CASES — RANKED BY ROI AND RISK</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <div>
              {USE_CASES.map((uc, i) => (
                <FeatureSpotlight
                  key={uc.number}
                  number={uc.number}
                  impact={uc.impact}
                  title={uc.title}
                  description={`${uc.problem} ${uc.useCase}`}
                  bullets={uc.value}
                  note={uc.note}
                  imageUrl={USE_CASE_IMAGES[i]}
                  imageAlt={uc.title}
                  reverse={i % 2 !== 0}
                  recommended={uc.recommended}
                  className={i === USE_CASES.length - 1 ? "border-b-0" : ""}
                />
              ))}
            </div>
          </section>

          {/* Scoring matrix */}
          <section className="mb-16">
            <p className="section-label mb-4">WHICH USE CASE TO PILOT FIRST</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
              For most small and mid-sized lending companies, the safest first AI projects combine high impact
              with low complexity and low risk. Here is how the 10 use cases compare:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[0.7rem]">
                <thead>
                  <tr className="border-b border-[var(--white-20)]">
                    <th className="py-3 pr-4 text-left text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Use Case</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Impact</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Complexity</th>
                    <th className="px-3 py-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Risk</th>
                    <th className="py-3 pl-3 text-center text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Start Here</th>
                  </tr>
                </thead>
                <tbody>
                  {SCORING.map((row) => (
                    <tr
                      key={row.useCase}
                      className={`border-b border-[var(--white-10)] ${row.recommended ? "bg-[var(--surface)]" : ""}`}
                    >
                      <td className={`py-3 pr-4 text-left leading-snug ${row.recommended ? "text-[var(--white-90)]" : "text-[var(--white-60)]"}`}>
                        {row.useCase}
                        {row.recommended ? <span className="ml-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">★ recommended</span> : null}
                      </td>
                      <td className={`px-3 py-3 text-center ${row.impact === "High" ? "text-[var(--white-80)]" : "text-[var(--white-40)]"}`}>{row.impact}</td>
                      <td className={`px-3 py-3 text-center ${row.complexity === "Low" ? "text-[var(--white-80)]" : row.complexity === "High" ? "text-[var(--white-30)]" : "text-[var(--white-50)]"}`}>{row.complexity}</td>
                      <td className={`px-3 py-3 text-center ${row.risk === "Low" ? "text-[var(--white-80)]" : row.risk === "Higher" ? "text-[var(--white-30)]" : "text-[var(--white-50)]"}`}>{row.risk}</td>
                      <td className="py-3 pl-3 text-center">
                        {row.recommended
                          ? <span className="text-[0.6rem] uppercase tracking-[0.14em] text-[var(--white-80)]">✓</span>
                          : <span className="text-[0.6rem] text-[var(--white-20)]">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 border border-[var(--white-20)] bg-[var(--surface)] p-5">
              <p className="mb-3 label-xs text-[var(--white-60)]">RECOMMENDED FIRST PROJECTS</p>
              <div className="space-y-2">
                {[
                  "Document intake and classification — highest volume, clearest ROI, lowest compliance risk",
                  "Missing document detection — directly shortens your application-to-close cycle",
                  "Internal knowledge assistant — immediate productivity gain with no borrower data involved",
                  "AI-assisted email drafts with human approval — fast to implement, measurable response-time improvement",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[0.15rem] shrink-0 text-[0.6rem] text-[var(--white-40)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm leading-snug text-[var(--white-80)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Free AI Operations Audit CTA */}
          <section className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-10"
            >
              <p className="section-label mb-4">FREE 30-MINUTE AI AUDIT FOR YOUR LENDING OPERATION</p>
              <div className="rule mb-6 max-w-[5rem]" />

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
                <div>
                  <h2 className="hero-heading mb-4 text-[clamp(1.2rem,4vw,1.8rem)] leading-[1.2] text-[var(--white-100)]">
                    FIND OUT EXACTLY WHERE AI WILL REDUCE YOUR COSTS
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
                    In 30 minutes, we review your current workflows and tell you: which of the 10 use cases fits
                    your operation, what the time savings would realistically be, and what a first project would cost.
                    No pitch, no obligation.
                  </p>
                  <div className="space-y-2">
                    {AUDIT_ITEMS.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[0.18rem] shrink-0 text-[0.6rem] text-[var(--white-40)]">→</span>
                        <span className="text-sm leading-snug text-[var(--white-80)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">FORMAT</p>
                      <p className="text-sm text-[var(--white-90)]">30-minute video or phone call</p>
                    </div>
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">COST</p>
                      <p className="text-sm text-[var(--white-90)]">Free — no obligation</p>
                    </div>
                    <div className="border border-[var(--white-20)] bg-[var(--surface-elevated)] p-4">
                      <p className="mb-1 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">OUTPUT</p>
                      <p className="text-sm text-[var(--white-90)]">Written use case recommendations with ROI estimate for your top priority</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="btn-outline w-full text-center"
                    >
                      BOOK YOUR FREE AUDIT →
                    </Link>
                    <p className="text-center text-[0.6rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                      We respond within 24 hours to confirm a time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5">
                <p className="text-[0.6rem] leading-relaxed text-[var(--white-30)]">
                  Prepared by DeView — AI automation and workflow consulting for lending and financial services operations.
                  Recommendations in this guide are for planning purposes. All AI implementations should be validated
                  against your specific compliance, data, and regulatory requirements before deployment.
                </p>
              </div>
            </motion.div>
          </section>

        </div>
      </main>
      <SiteFooter rootPrefix="/" />
    </>
  );
}
