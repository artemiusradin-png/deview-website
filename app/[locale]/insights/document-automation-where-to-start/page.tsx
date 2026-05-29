import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "Document automation: where to start | DeView Insights",
  description:
    "Four questions that determine whether a document automation project will succeed — before a single line of code is written.",
};

export default function ArticlePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-3xl">
          <SubpageNav backHref="/insights" />

          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                DOCUMENT AUTOMATION
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">
                28 March 2025
              </span>
              <span className="text-[0.55rem] text-[var(--white-30)]">·</span>
              <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[var(--white-30)]">5 min read</span>
            </div>
            <h1 className="mb-5 text-[clamp(1.4rem,4vw,2rem)] leading-snug text-[var(--white-100)]">
              Document automation: the four questions to answer before you build anything
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Before automating any document workflow, four things determine whether the project will succeed or stall at the prototype stage.
            </p>
          </div>

          <div className="rule mb-10" />

          <div className="space-y-6 text-sm leading-relaxed text-[var(--text-muted)]">
            <p>
              Document automation is one of the highest-ROI AI applications in operations teams. The logic is simple: documents are structured (or semi-structured), the task is repetitive, the volume is high, and the cost of manual processing is easy to measure. When it works, it works convincingly — 60–90% reductions in manual processing time are common in real deployments.
            </p>
            <p>
              When it doesn&apos;t work, it&apos;s almost always because the team underestimated the variability of their actual documents, or picked the wrong starting point. Here are the four questions that predict which outcome you get.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              1. How consistent are your inbound documents?
            </h2>
            <p>
              There&apos;s a meaningful difference between a set of documents that follows a fixed template (a standard loan application form, a structured insurance claim) and one that comes in from multiple sources in multiple formats (emails with attachments, PDFs from twelve different brokers, scanned handwritten forms from five years ago).
            </p>
            <p>
              High consistency = straightforward automation. The AI learns to extract fields from predictable positions and formats, confidence is high, and the pipeline handles most documents automatically.
            </p>
            <p>
              Low consistency = more complex extraction logic, more edge cases, more human review. That&apos;s not a reason not to automate — but it means the scope is larger, the testing period is longer, and you should start with the most consistent document type before expanding.
            </p>
            <p>
              Before scoping any document automation project, we ask to see a random sample of 50–100 real inbound documents. If we can look at 20 and describe what they all have in common, the project will move quickly. If every 5th document is a surprise, we plan for a longer build.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              2. What decision does the document enable?
            </h2>
            <p>
              AI can extract data from a document. It can classify the document type. It can summarise content and flag missing items. What it should not do, unsupervised, is make the decision that depends on the document.
            </p>
            <p>
              This distinction matters for scoping. If the workflow is: document arrives → AI reads it → structured data goes into the CRM → human decides — that&apos;s a clean automation target. If the workflow is: document arrives → AI reads it → AI approves the loan application — that&apos;s a compliance and risk exposure that requires a very different architecture.
            </p>
            <p>
              The document automation projects that move fastest are the ones where the automated step is clearly upstream of the decision, not the decision itself. Know which one you&apos;re building before you start.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              3. What does &ldquo;wrong&rdquo; look like — and how bad is it?
            </h2>
            <p>
              Every AI system makes mistakes. The relevant question is: what happens when it does?
            </p>
            <p>
              For document routing (classifying an invoice and sending it to accounts payable), a mistake is low-cost — the invoice ends up in the wrong queue, someone spots it and moves it. For extraction of a loan-to-value ratio that goes directly into a credit decision, a mistake has real financial and compliance implications.
            </p>
            <p>
              We define the error cost for each document type and process step before we set the confidence thresholds. High-cost errors get high confidence thresholds — more documents go to human review, but the ones that don&apos;t are reliable. Low-cost errors get lower thresholds — higher automation rate, occasional manual correction.
            </p>
            <p>
              The right answer here is not &ldquo;make the AI perfect&rdquo; — that&apos;s not achievable. It&apos;s &ldquo;know the cost of a mistake and set your system up so that mistakes at that cost level don&apos;t happen automatically.&rdquo;
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              4. Where does the extracted data go?
            </h2>
            <p>
              The automation pipeline produces an output — extracted data, a classification label, a summary, a routing decision. That output needs to go somewhere: into a CRM, an ERP, a spreadsheet, a queue in an existing system. How it gets there determines a large part of the project complexity.
            </p>
            <p>
              If there&apos;s a clean API and the downstream system has straightforward write access, integration is fast. If the downstream system is a legacy platform from 2009 that was never designed for API calls, integration becomes the majority of the project timeline.
            </p>
            <p>
              Ask &ldquo;where does the output go and how does it get there&rdquo; in your first conversation with any vendor. If they don&apos;t have a clear answer about your specific system, or if integration is an afterthought in the project plan, expect delays.
            </p>

            <h2 className="text-base uppercase tracking-[0.15em] text-[var(--white-80)]">
              Where to start
            </h2>
            <p>
              If you can identify a document type that scores well on all four dimensions — consistent format, upstream of decisions, low error cost or clear escalation path, simple downstream integration — start there. Get it live, measure the time savings, and expand from that foundation.
            </p>
            <p>
              The right first document automation project is rarely the most complex one. It&apos;s the one that proves the approach quickly and builds enough internal confidence to fund the harder problems.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--white-20)] pt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  Have a document workflow to automate?
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
                  Describe the document type, volume, and where the data currently goes. We&apos;ll tell you how long it would take and what it would cost.
                </p>
                <LocaleLink href="/contact" className="btn-outline inline-block text-sm">
                  Get a scoped recommendation →
                </LocaleLink>
              </div>
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                  More articles
                </p>
                <LocaleLink href="/insights/why-most-ai-pilots-fail" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  Why most AI pilots fail →
                </LocaleLink>
                <LocaleLink href="/insights/four-ai-projects-worth-doing" className="block py-2 text-sm text-[var(--white-80)] hover:text-[var(--white-100)]">
                  The four AI projects that pay for themselves fastest →
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
