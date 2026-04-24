"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteFooter } from "../../../../components/SiteFooter";

const USE_CASES = [
  {
    number: "01",
    title: "AI Document Intake and Classification",
    problem:
      "Lending companies receive a constant stream of documents — IDs, bank statements, contracts, applications, invoices, proof of income, and company registrations. Staff spend significant time manually sorting these into the right folders or workflows.",
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
      "Less manual sorting time",
      "Faster application processing",
      "Fewer misfiled or lost documents",
      "Cleaner internal workflow",
    ],
    note: "AI handles sorting only — it does not make lending decisions.",
    impact: "High",
    complexity: "Medium",
    risk: "Low",
  },
  {
    number: "02",
    title: "Missing Document Detection",
    problem:
      "Employees manually cross-check each application to verify all required documents are present. This creates bottlenecks and delays, especially under volume.",
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
      "Instant identification of gaps",
      "Fewer delays in the approval pipeline",
      "Better customer experience (specific requests)",
      "Reduced back-and-forth communication",
    ],
    note: null,
    impact: "High",
    complexity: "Low",
    risk: "Low",
  },
  {
    number: "03",
    title: "AI-Assisted Customer Email Replies",
    problem:
      "Customer-facing teams answer the same questions repeatedly: required documents, application status, approval timelines, payment change requests. This consumes hours of staff time weekly.",
    useCase:
      "AI drafts replies based on approved response templates and the customer's file status. Staff review and send with one click.",
    example: [
      "Client: \"What documents do I still need to send?\"",
      "AI draft: \"Thank you for your application. Your file is currently missing [bank statements — last 3 months] and [signed consent form]. You can submit these via [portal link] or email them directly to [address]...\"",
    ],
    value: [
      "Faster first response time",
      "More consistent communication across the team",
      "Reduced staff pressure during high-volume periods",
      "Better client experience",
    ],
    note: "Always human-reviewed before sending — especially for financial or legal content.",
    impact: "High",
    complexity: "Low",
    risk: "Medium",
  },
  {
    number: "04",
    title: "Internal Knowledge Assistant for Employees",
    problem:
      "Employees waste time searching through policy PDFs, procedure manuals, old email threads, and shared drives. New hires take weeks to become self-sufficient. Institutional knowledge lives in the heads of a few experienced people.",
    useCase:
      "A private internal AI assistant that answers questions based exclusively on company-approved documents — no external knowledge, no hallucination risk from general AI.",
    example: [
      "\"What documents are required for a self-employed applicant?\"",
      "\"What is the escalation process for applications over $500K?\"",
      "\"Which template should I use for a payment delay request?\"",
      "\"What are the compliance steps before sending a file to legal review?\"",
    ],
    value: [
      "Faster onboarding for new employees",
      "Fewer internal questions to senior staff",
      "Consistent application of company processes",
      "Institutional knowledge stays in the business, not just in people",
    ],
    note: "This is one of the highest-ROI first AI projects for most lending operations.",
    impact: "High",
    complexity: "Medium",
    risk: "Low",
  },
  {
    number: "05",
    title: "Call and Meeting Summaries",
    problem:
      "Sales and customer service teams gather important information on calls, but follow-up notes are either not taken, typed manually hours later, or inconsistent between team members. CRM data stays incomplete.",
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
      "Better follow-up and accountability",
      "Less time spent on manual note-taking",
      "Cleaner, more complete CRM data",
      "Fewer missed commitments",
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
      "Most lending CRMs accumulate messy, incomplete, or inconsistent data over time — duplicate contacts, free-text notes, missing status fields, and unclear pipeline stages.",
    useCase:
      "AI processes unstructured CRM notes and converts them into structured, consistent fields. It can also flag duplicates and normalize contact records.",
    example: [
      "Before: \"client called, wants update, sent docs but missing bank stuff, follow up next week\"",
      "After: Status: Documents incomplete | Missing item: Bank statements | Priority: Medium | Next action: Send reminder | Follow-up date: [date]",
    ],
    value: [
      "Cleaner sales pipeline and reporting",
      "Better visibility into deal stages",
      "More effective follow-up by the entire team",
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
      "Not every inbound inquiry is equally worth pursuing. Sales teams spend time on low-quality leads, incomplete inquiries, or clients who do not fit basic criteria — time that could go to high-priority opportunities.",
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
      "Sales team focuses on the strongest leads first",
      "Faster initial response to urgent inquiries",
      "Higher conversion rate from the same volume of leads",
      "Less time lost on unqualified inquiries",
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
      "Reviewing long contracts, loan agreements, or policy documents takes significant time and is prone to missing important clauses.",
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
      "Faster document review before meetings or approval steps",
      "Easier understanding for non-legal staff",
      "Better preparation before legal or compliance review",
      "Less time spent re-reading the same documents",
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
      "Compliance tasks involve repetitive checking, documentation, and evidence collection. Missing one item before a file is submitted can cause significant delays or penalties.",
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
      "Fewer incomplete files reaching the compliance team",
      "More consistent process across all employees",
      "Easier audit trails",
      "Less manual checklist work for compliance staff",
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
      "Managers often lack real-time visibility into operational bottlenecks. Reports are manually compiled, arrive late, and do not reflect what is actually slowing the team down.",
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
      "Faster identification of operational bottlenecks",
      "More informed decisions without manual report compilation",
      "Clearer view of team capacity and workload distribution",
      "More professional reporting for stakeholders",
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
  "Which of your workflows are losing the most time right now",
  "Which AI use cases are the right first projects for your specific operation",
  "Where confidential data risks are and how to avoid them",
  "What your first AI implementation could look like in practice",
  "A realistic timeline and what it would cost to get started",
];

export default function AiGuideLendingPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("deview-guide-lending");
    if (!unlocked) {
      router.replace("/resources/ai-guide-lending");
    } else {
      setReady(true);
    }
  }, [router]);

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

          {/* Back nav */}
          <div className="mb-8 flex items-center justify-between border-b border-[var(--white-20)] pb-5 sm:mb-10">
            <Link href="/" className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.24em] text-[var(--white-80)] sm:min-h-0">
              DEVIEW
            </Link>
            <Link href="/resources/ai-guide-lending" className="inline-flex min-h-11 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:min-h-0">
              ← Back
            </Link>
          </div>

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-6 md:p-10"
          >
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-[var(--white-60)]">
              PREPARED BY DEVIEW CONSULTING — AI AUTOMATION &amp; WORKFLOW CONSULTING
            </p>
            <div className="rule mb-6 max-w-[6rem]" />
            <h1 className="hero-heading mb-4 text-[clamp(1.5rem,5vw,2.4rem)] leading-[1.15] text-[var(--white-100)]">
              10 PRACTICAL AI USE CASES FOR LENDING COMPANIES
            </h1>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
              How AI can help your team save time, reduce repetitive manual work, and operate more efficiently —
              while keeping sensitive customer and financial data protected.
            </p>
            <div className="flex flex-wrap gap-4 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--white-40)]">
              <span>For: Small &amp; Mid-Sized Lending Firms</span>
              <span>·</span>
              <span>10–100 Employees</span>
              <span>·</span>
              <span>Focus: Safe, Practical First AI Projects</span>
            </div>
          </motion.div>

          {/* Introduction */}
          <section className="mb-16">
            <p className="section-label mb-4">INTRODUCTION</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
              <p>
                Many lending companies are interested in AI, but they are not sure where to start.
                The most common mistake is starting with tools instead of business processes.
              </p>
              <p>
                AI should not be introduced just because it is popular. It should be used where it
                clearly saves time, improves accuracy, or reduces repetitive manual work — without
                creating new risks around data privacy or compliance.
              </p>
              <p>
                This guide maps 10 practical areas where lending companies can apply AI in day-to-day
                operations: from document intake and missing-item detection to customer communication
                and internal knowledge management.
              </p>
            </div>
          </section>

          {/* Framework */}
          <section className="mb-16">
            <p className="section-label mb-4">HOW TO EVALUATE AN AI USE CASE</p>
            <div className="rule mb-6 max-w-[5rem]" />
            <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
              Before introducing AI to any workflow, ask three questions:
            </p>
            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-3">
              {[
                { q: "Is the task repetitive?", body: "The same steps, the same inputs, the same outputs — every time." },
                { q: "Does it use text or documents?", body: "Emails, applications, contracts, forms, notes, PDFs." },
                { q: "Does it require high-level judgment?", body: "If yes, AI supports — it does not decide." },
              ].map((item) => (
                <div key={item.q} className="flex flex-col gap-3 bg-[var(--surface)] p-5">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">SIGNAL</p>
                  <p className="text-sm font-medium text-[var(--white-90)]">{item.q}</p>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.72rem] leading-relaxed text-[var(--white-40)]">
              Good AI use cases satisfy the first two conditions. For the third — where decisions carry legal,
              financial, or compliance weight — AI should always support human judgment, never replace it.
            </p>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <p className="section-label mb-4">THE 10 USE CASES</p>
            <div className="rule mb-10 max-w-[5rem]" />
            <div className="space-y-8">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.number}
                  className="border border-[var(--white-20)] bg-[var(--surface)] p-5 md:p-6"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-30)] sm:text-xs">
                        {uc.number}
                      </span>
                      <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--white-100)] sm:text-base">
                        {uc.title}
                      </h2>
                    </div>
                    <span className={`shrink-0 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em] ${
                      uc.impact === "High"
                        ? "bg-[var(--white-10)] text-[var(--white-80)]"
                        : "border border-[var(--white-20)] text-[var(--white-40)]"
                    }`}>
                      {uc.impact} impact
                    </span>
                  </div>

                  <div className="rule mb-4 opacity-40" />

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">PROBLEM</p>
                      <p className="text-[0.8rem] leading-relaxed text-[var(--text-muted)]">{uc.problem}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">AI USE CASE</p>
                      <p className="text-[0.8rem] leading-relaxed text-[var(--text-muted)]">{uc.useCase}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">EXAMPLE OUTPUT</p>
                      <div className="space-y-1 border border-[var(--white-10)] bg-[var(--surface-elevated)] p-3">
                        {uc.example.map((line) => (
                          <p key={line} className="text-[0.72rem] leading-snug text-[var(--white-60)]">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.58rem] uppercase tracking-[0.2em] text-[var(--white-40)]">BUSINESS VALUE</p>
                      <div className="space-y-1.5">
                        {uc.value.map((v) => (
                          <div key={v} className="flex items-start gap-2">
                            <span className="mt-[0.15rem] shrink-0 text-[0.6rem] text-[var(--white-30)]">+</span>
                            <span className="text-[0.72rem] leading-snug text-[var(--white-70)]">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {uc.note ? (
                    <div className="mt-4 border-t border-[var(--white-10)] pt-3">
                      <p className="text-[0.65rem] leading-snug text-[var(--white-30)]">
                        <span className="uppercase tracking-[0.14em]">Note: </span>{uc.note}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* Scoring matrix */}
          <section className="mb-16">
            <p className="section-label mb-4">WHERE TO START</p>
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
              <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-60)]">RECOMMENDED FIRST PROJECTS</p>
              <div className="space-y-2">
                {[
                  "Document classification — safe, visible, immediate ROI",
                  "Missing document detection — directly reduces application delays",
                  "Internal knowledge assistant — high value, no sensitive decisions",
                  "AI-assisted email drafts with human approval — fast wins without automation risk",
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
              <p className="section-label mb-4">FREE OFFER — LIMITED SPOTS</p>
              <div className="rule mb-6 max-w-[5rem]" />

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
                <div>
                  <h2 className="hero-heading mb-4 text-[clamp(1.2rem,4vw,1.8rem)] leading-[1.2] text-[var(--white-100)]">
                    FREE AI OPERATIONS AUDIT FOR YOUR LENDING BUSINESS
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--text-muted)]">
                    In a focused 30-minute session, we review your current workflows and tell you
                    exactly where AI can reduce manual work — with no obligation to proceed.
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
                      <p className="text-sm text-[var(--white-90)]">Specific use case recommendations for your operation</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="btn-outline w-full text-center"
                    >
                      BOOK YOUR FREE AUDIT
                    </Link>
                    <p className="text-center text-[0.6rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--white-10)] pt-5">
                <p className="text-[0.6rem] leading-relaxed text-[var(--white-30)]">
                  Prepared by Deview Consulting — AI automation and workflow consulting for growing businesses.
                  This guide is for informational purposes. AI recommendations should be validated against your
                  specific compliance and data requirements before implementation.
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
