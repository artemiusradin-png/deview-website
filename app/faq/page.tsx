"use client";

import { useState } from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";
import { ChevronDown } from "lucide-react";

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Engagement & Process",
    items: [
      {
        q: "What happens after I fill in the contact form?",
        a: "We review your submission and reply within 1–2 business days with a specific response — what AI can realistically do for the process you described, a rough timeline, and a cost range. No sales call required before we give you useful information.",
      },
      {
        q: "Do I need to commit to a full build to get started?",
        a: "No. Our AI Workflow Audit (1–2 weeks) is a standalone engagement with its own fixed fee. It produces a written recommendation and cost estimate. You decide whether to proceed to build afterwards. There is no obligation to continue.",
      },
      {
        q: "How long does a typical project take?",
        a: "Discovery takes 1–2 weeks. Build projects typically run 2–6 weeks depending on complexity and system access timelines. Most clients have a working system in production within 4–8 weeks of the engagement starting.",
      },
      {
        q: "How is the work priced?",
        a: "All projects are fixed-price. You receive a written scope document with a single price before any build starts. There are no hourly billing surprises, no scope creep charges for agreed functionality, and no retainers required before we start work.",
      },
      {
        q: "Do we need to change our existing tools or workflows?",
        a: "No. We build into your existing stack. The AI connects to the systems you already use — CRM, ERP, document storage, email, databases. Your team does not need to adopt a new platform or change how they work.",
      },
    ],
  },
  {
    category: "Data & Security",
    items: [
      {
        q: "Where is our data stored?",
        a: "Your data stays in your environment. For cloud deployments, we deploy into your existing AWS, GCP, or Azure account. For on-premises deployments, everything runs inside your physical network. DeView does not store client data in DeView-operated infrastructure.",
      },
      {
        q: "Who has access to our data during the project?",
        a: "Access is scoped to the minimum required for each integration. Any deployment access by DeView staff is time-limited, uses service accounts, and is fully logged. We do not hold standing access to production client data after handover.",
      },
      {
        q: "Does the AI learn from our data and share it with other clients?",
        a: "No. Each client deployment is fully isolated. Your data is never used to train shared models, and outputs from your deployment never influence another client's system.",
      },
      {
        q: "Can we run this on-premises with no external API calls?",
        a: "Yes. For regulated environments, we deploy fully air-gapped systems using open-source models (Llama 3, Mistral). All inference runs locally — no data leaves your network.",
      },
      {
        q: "Is this GDPR / PDPO compliant?",
        a: "Our architecture is designed to support GDPR and Hong Kong PDPO requirements: data stays in client-controlled environments, audit trails are fully exportable, retention is configurable, and data processing agreements are available on request. We recommend your DPO review our architecture documentation as part of procurement.",
      },
    ],
  },
  {
    category: "AI Performance & Reliability",
    items: [
      {
        q: "What if the AI gives a wrong answer or makes a mistake?",
        a: "Every DeView deployment includes a human-in-the-loop escalation path. When the AI's confidence falls below the agreed threshold, it flags the item for human review rather than acting automatically. All outputs are logged so any errors can be traced, corrected, and used to improve accuracy.",
      },
      {
        q: "How do we know it keeps working correctly after launch?",
        a: "Every production deployment includes monitoring for accuracy, latency, and drift. We configure alert thresholds specific to your use case — your team is notified before performance degrades to a problem level, not after.",
      },
      {
        q: "What's the difference between this and us just using ChatGPT ourselves?",
        a: "ChatGPT has no access to your internal data, no integration with your systems, no audit trail, and no reliability guarantees. A DeView deployment is purpose-built: it knows your company's specific documents and data, connects to your CRM and workflows, enforces your access controls, and includes production monitoring. The gap is between a consumer tool and an enterprise system.",
      },
      {
        q: "Which AI models do you use?",
        a: "We are model-agnostic and select the best option for your use case and compliance requirements. Options include OpenAI GPT-4o, Anthropic Claude, Google Gemini, or open-source models (Llama 3, Mistral) for fully on-premises deployments.",
      },
    ],
  },
  {
    category: "After Deployment",
    items: [
      {
        q: "Who owns the system after handover?",
        a: "You do. The code, models, configuration, and data all live in your environment. We provide complete handover documentation so your team can operate and extend the system independently. You are not locked into a DeView-controlled platform.",
      },
      {
        q: "What support is available after go-live?",
        a: "Every handover includes a 30-day post-launch support period for bug fixes and configuration adjustments. Beyond that, we offer a managed service model (DeView monitors and maintains) or a retainer for periodic updates. Both are optional.",
      },
      {
        q: "What happens if our data or workflows change after deployment?",
        a: "We build monitoring that detects when the AI's inputs start looking significantly different from what it was trained on. If your workflows change materially, we discuss a retraining or adjustment scope — which is typically much smaller than the original build.",
      },
      {
        q: "Can we extend the system ourselves?",
        a: "Yes. Handover documentation includes technical architecture, integration specifications, and prompt configurations. Your internal team or another vendor can extend the system. We are happy to advise if needed, but there is no lock-in.",
      },
    ],
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-[var(--white-20)] ${isOpen ? "bg-[var(--surface)]" : ""}`}>
      <button
        type="button"
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm text-[var(--white-80)]">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-4 w-4 shrink-0 text-[var(--white-40)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">FAQ</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                Questions we answer before every engagement.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                If something isn&apos;t here, ask us directly. We reply within 1–2 business days.
              </p>
            </div>
          </div>

          {/* FAQ categories */}
          <div className="space-y-14">
            {faqs.map((cat, ci) => (
              <div key={cat.category}>
                <p className="mb-4 text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                  {cat.category}
                </p>
                <div className="border-t border-[var(--white-20)]">
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    return (
                      <FaqItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border-t border-[var(--white-20)] pt-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
                  Still have a question?
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Describe your situation and what you&apos;re trying to solve. We reply with a specific answer, not a sales pitch.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <a href="/contact" className="btn-outline">
                  Ask a question →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
