import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "How We Work | DeView",
  description:
    "Four phases from first conversation to live deployment — how DeView scopes, builds, and hands over AI systems in 1–8 weeks.",
};

const phases = [
  {
    number: "01",
    label: "DISCOVERY",
    duration: "1–2 weeks",
    title: "We map the workflow and size the opportunity",
    body: "We start with the process — not the technology. A structured interview with your operations or finance team to understand the current workflow step by step: what comes in, what happens to it, how long each step takes, where it goes wrong, and what it costs. We calculate the time and cost of the bottleneck, identify the single highest-value automation point, and produce a written recommendation with a cost range before any code is written.",
    deliverable: "Written recommendation with ROI estimate, scope options, and a cost range",
    whoJoins: "1–2 people from your operations team. No IT required at this stage.",
    inputs: ["Current process description", "Volume numbers (daily/weekly)", "Existing tools and systems"],
    outputs: ["Bottleneck analysis", "Automation opportunity ranked by ROI", "Written recommendation — yes/no to build, and why"],
  },
  {
    number: "02",
    label: "SCOPING",
    duration: "3–5 days",
    title: "We define exactly what gets built — and what doesn't",
    body: "Once we agree to proceed, we produce a detailed scope document: the specific inputs the AI will process, the outputs it will generate, the systems it will connect to, the human review steps it will trigger, and the success criteria we will measure against. Nothing is ambiguous. You know what you're buying before we start.",
    deliverable: "Scope document: inputs, outputs, integrations, success criteria, timeline, fixed price",
    whoJoins: "Operations lead + IT contact (for system access and integration planning).",
    inputs: ["Approved recommendation from Discovery", "System access credentials", "Data samples for testing"],
    outputs: ["Scope document (signed off before build starts)", "Fixed-price quote", "Milestone timeline"],
  },
  {
    number: "03",
    label: "BUILD & TEST",
    duration: "2–6 weeks",
    title: "We build it, test it against your real data, and iterate",
    body: "Build happens in two or three milestone sprints, each with a working demo. We test against real data samples from your environment from sprint one — not synthetic test cases. You see the system working on your actual documents and queries before it goes live. We define the confidence thresholds for automated processing versus human review escalation together, so you control where the AI acts autonomously.",
    deliverable: "Working AI system tested against your real data, with human review flows configured",
    whoJoins: "Operations lead for milestone reviews (1 hour per sprint). IT for final integration sign-off.",
    inputs: ["Real data samples for testing", "Review of each milestone demo", "Feedback on output quality and edge cases"],
    outputs: ["Working system in your staging environment", "Test report with accuracy metrics", "Configured human review escalation paths"],
  },
  {
    number: "04",
    label: "HANDOVER",
    duration: "3–5 days",
    title: "Your team takes ownership — with full documentation",
    body: "Deployment into your production environment, team walkthrough, and complete documentation. The system is yours — it runs in your infrastructure, your team can operate it, and you are not locked into a DeView maintenance contract. We provide a post-launch monitoring period and a defined support path for your first 30 days live. Ongoing managed service or retainer support is available if you want it, but it's not required.",
    deliverable: "Production deployment, team training session, operational documentation, 30-day post-launch support",
    whoJoins: "Full operations team for training. IT for production deployment sign-off.",
    inputs: ["Production environment access", "Team availability for 2-hour training session"],
    outputs: ["Live system in production", "Full operational documentation", "Monitoring setup and alert configuration", "Handover checklist signed off"],
  },
];

const faqs = [
  {
    q: "Do we need to change our existing tools?",
    a: "No. We build into your existing stack. The AI connects to tools you already use — it does not require your team to adopt new platforms or change how they work.",
  },
  {
    q: "What does the engagement cost?",
    a: "Discovery is a fixed-fee engagement (1–2 weeks). Build projects are scoped and priced before we start. You receive a fixed price in writing before any work begins — no billable hours, no open-ended retainers.",
  },
  {
    q: "How long until we see results?",
    a: "Most clients see measurable output within 2–3 weeks of build starting. The full system is typically live in 4–8 weeks from the start of the engagement.",
  },
  {
    q: "What if the AI doesn't perform well enough?",
    a: "We define success criteria before we build and test against your real data throughout. If accuracy doesn't meet the agreed threshold, we iterate until it does — that's included in the scope. You don't pay for something that doesn't work.",
  },
  {
    q: "Who owns the system after handover?",
    a: "You do. The code, models, configuration, and data all live in your environment. We provide complete handover documentation so your team can operate and extend the system independently.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">HOW WE WORK</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                From first conversation to live deployment — in 1–8 weeks.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Four phases with a fixed price agreed before build starts. No retainers required. No ambiguity about what you&apos;re getting.
              </p>
            </div>
          </div>

          {/* Phase timeline overview */}
          <div className="mb-16 grid grid-cols-4 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
            {phases.map((p) => (
              <div key={p.number} className="flex flex-col gap-2 bg-[var(--background)] px-4 py-5">
                <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">{p.label}</span>
                <span className="text-sm text-[var(--white-80)]">{p.duration}</span>
              </div>
            ))}
          </div>

          {/* Detailed phases */}
          <div className="space-y-0">
            {phases.map((p, i) => (
              <div
                key={p.number}
                className={`border-t border-[var(--white-20)] py-12 sm:py-14 ${i === phases.length - 1 ? "border-b" : ""}`}
              >
                {/* Phase header */}
                <div className="mb-8 flex items-start gap-6">
                  <span className="text-[2.5rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3rem]">
                    {p.number}
                  </span>
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                      {p.label} · {p.duration}
                    </p>
                    <h2 className="mt-1 text-[clamp(1rem,3vw,1.3rem)] text-[var(--white-100)]">{p.title}</h2>
                  </div>
                </div>

                {/* Body + details grid */}
                <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
                  <div>
                    <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">{p.body}</p>
                    <div className="border border-[var(--white-20)] bg-[var(--surface)] p-4">
                      <p className="mb-1 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        Deliverable
                      </p>
                      <p className="text-[0.78rem] text-[var(--white-80)]">{p.deliverable}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        Who joins from your side
                      </p>
                      <p className="text-[0.78rem] leading-snug text-[var(--text-muted)]">{p.whoJoins}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        Inputs from you
                      </p>
                      <ul className="space-y-1">
                        {p.inputs.map((item) => (
                          <li key={item} className="flex gap-2 text-[0.75rem] text-[var(--text-muted)]">
                            <span className="text-[0.6rem] text-[var(--white-30)]">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        Outputs from us
                      </p>
                      <ul className="space-y-1">
                        {p.outputs.map((item) => (
                          <li key={item} className="flex gap-2 text-[0.75rem] text-[var(--white-80)]">
                            <span className="text-[0.6rem] text-[var(--white-60)]">+</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16 mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Common questions
            </p>
            <div className="rule mb-8" />
            <div className="space-y-0">
              {faqs.map((f, i) => (
                <div
                  key={f.q}
                  className={`grid gap-4 py-5 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== faqs.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
                >
                  <p className="text-sm text-[var(--white-80)]">{f.q}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--white-20)] pt-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
                  Ready to start with a workflow?
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Describe the process. We start with Discovery and you receive a written recommendation before any build commitment.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <LocaleLink href="/contact" className="btn-outline">
                  Book a Discovery →
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
