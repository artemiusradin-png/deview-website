import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleLink } from "@/components/LocaleLink";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "Pricing | DeView",
  description:
    "Transparent engagement models — from a focused workflow audit to full AI system deployment. Fixed-price scoping, no retainers required to start.",
};

const tiers = [
  {
    label: "WORKFLOW AUDIT",
    price: "From $4,000",
    timeline: "1–2 weeks",
    description: "Find exactly where AI will cut the most cost in your operation.",
    includes: [
      "Process mapping and bottleneck analysis",
      "Cost-per-task calculation",
      "Automation ROI sizing",
      "Written recommendation with cost range",
      "Go / no-go decision framework",
    ],
    best: "Operations and finance leaders who want to know the ROI before committing.",
    cta: "Start with an audit",
  },
  {
    label: "SINGLE SYSTEM BUILD",
    price: "From $15,000",
    timeline: "2–6 weeks",
    featured: true,
    description: "One AI system — scoped, built, tested against your real data, and deployed.",
    includes: [
      "Everything in Workflow Audit",
      "Solution architecture and scope document",
      "AI system built and integrated into your stack",
      "Testing with real data samples",
      "Production deployment with monitoring",
      "30-day post-launch support",
      "Full operational documentation",
    ],
    best: "Teams ready to automate a specific workflow — document processing, support triage, reporting, or knowledge retrieval.",
    cta: "Scope a build",
  },
  {
    label: "ONGOING PARTNERSHIP",
    price: "Custom",
    timeline: "Monthly retainer",
    description: "Continuous AI development, monitoring, and expansion across your organisation.",
    includes: [
      "Dedicated AI engineering capacity",
      "Drift monitoring and model retraining",
      "New system builds as needs emerge",
      "Priority support and SLA",
      "Quarterly roadmap reviews",
      "Cross-department expansion planning",
    ],
    best: "Organisations with multiple automation opportunities who want a long-term AI partner.",
    cta: "Discuss a partnership",
  },
];

const faqs = [
  {
    q: "Is there a minimum engagement size?",
    a: "The smallest engagement is a Workflow Audit at $4,000. This gives you a concrete recommendation with ROI before committing to any build.",
  },
  {
    q: "Are prices fixed or do they change during the project?",
    a: "We provide a fixed-price quote after scoping. The price is agreed before any build starts and does not change unless you expand the scope.",
  },
  {
    q: "Do we need to sign a retainer?",
    a: "No. Audit and Single System Build engagements are project-based with a defined start and end. Retainers are only for Ongoing Partnership clients who want dedicated capacity.",
  },
  {
    q: "What determines the final price for a system build?",
    a: "Three factors: the complexity of the workflow, the number of system integrations required, and the volume of data the system needs to handle. We size all of this during scoping.",
  },
  {
    q: "What happens after the 30-day support period?",
    a: "The system is yours. You can operate it independently with the documentation we provide. If you want ongoing monitoring and improvements, we offer retainer options — but they are not required.",
  },
];

export default function PricingPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">PRICING</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                Transparent pricing.
                <br />
                Fixed scope. No surprises.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Every engagement starts with a defined scope and fixed price — agreed before any build begins. No retainers required to start.
              </p>
            </div>
          </div>

          {/* Tiers */}
          <div className="mb-20 grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`flex flex-col rounded-lg border p-6 md:p-8 ${
                  tier.featured
                    ? "border-[var(--white-30)] bg-[var(--surface-elevated)]"
                    : "border-[var(--white-10)] bg-[var(--surface)]"
                }`}
              >
                <p className="mb-4 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[var(--white-40)]">
                  {tier.label}
                </p>
                <p className="mb-1 text-[clamp(1.6rem,4vw,2.2rem)] font-bold leading-tight text-[var(--white-100)]">
                  {tier.price}
                </p>
                <p className="mb-5 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                  {tier.timeline}
                </p>
                <p className="mb-6 text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
                  {tier.description}
                </p>

                <div className="mb-6 flex-1">
                  <p className="mb-3 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[var(--white-40)]">
                    INCLUDES
                  </p>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.82rem] leading-snug text-[var(--white-70)]">
                        <span className="mt-1 block h-1 w-1 flex-shrink-0 rounded-full bg-[var(--white-40)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mb-6 text-[0.75rem] leading-snug text-[var(--text-muted)]">
                  <span className="font-medium text-[var(--white-60)]">Best for: </span>
                  {tier.best}
                </p>

                <LocaleLink
                  href="/contact"
                  className={`block w-full rounded-md py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all ${
                    tier.featured
                      ? "bg-[var(--white-100)] text-[var(--background)] hover:bg-[var(--white-90)]"
                      : "border border-[var(--white-20)] text-[var(--white-70)] hover:border-[var(--white-40)] hover:text-[var(--white-100)]"
                  }`}
                >
                  {tier.cta}
                </LocaleLink>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <p className="section-label mb-3">COMMON QUESTIONS</p>
            <div className="rule mb-8" />
            <div className="space-y-0 divide-y divide-[var(--white-10)]">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[0.92rem] font-medium leading-snug text-[var(--white-85)] marker:content-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="flex-shrink-0 text-[0.7rem] text-[var(--white-30)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mb-16 rounded-lg border border-[var(--white-10)] bg-[var(--surface)] p-8 text-center md:p-12">
            <h2 className="mb-3 text-[clamp(1.2rem,3vw,1.6rem)] text-[var(--white-100)]">
              Not sure which option fits?
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
              Start with a conversation. Describe the workflow you want to improve and we will recommend the right engagement — with a cost range — within 1–2 business days.
            </p>
            <LocaleLink
              href="/contact"
              className="inline-block rounded-md bg-[var(--white-100)] px-8 py-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--background)] transition-colors hover:bg-[var(--white-90)]"
            >
              GET A RECOMMENDATION
            </LocaleLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
