import type { Metadata } from "next";
import { SiteFooter } from "../../../components/SiteFooter";
import { SubpageNav } from "../../../components/SubpageNav";

export const metadata: Metadata = {
  title: "AI for Insurance Operations | DeView",
  description:
    "AI automation for insurance operations teams — claims processing, policy document handling, customer support, and compliance reporting. Deployed in 3–6 weeks.",
};

const useCases = [
  {
    label: "CLAIMS INTAKE",
    title: "Automate claims document reading and classification",
    body: "Claims arrive in multiple formats — PDFs, photos, emails with attachments, broker-submitted forms. Staff read each one to classify claim type, extract policyholder details, identify required supporting documents, and route to the appropriate adjuster queue. AI automates this: the claim is read, classified, and routed in seconds. Missing documents are flagged automatically. Adjusters receive pre-populated claim summaries rather than raw documents.",
    metrics: ["60–85% reduction in manual intake time", "Same-day routing for all inbound claims", "Missing-document alerts sent automatically"],
  },
  {
    label: "POLICY Q&A",
    title: "Give customers and staff instant, accurate policy answers",
    body: "Policy enquiries — coverage limits, exclusions, renewal terms, claims procedures — are high-volume and repetitive. AI reads your policy library and answers these questions in seconds, with citations to the specific policy section. Customer-facing: reduces call centre volume and email queue. Internal-facing: gives underwriters and adjusters instant answers without interrupting senior colleagues.",
    metrics: ["70% reduction in routine policy enquiries to staff", "Cited answers — every response references the source clause", "Permission-controlled — staff and customers see different scopes"],
  },
  {
    label: "COMPLIANCE REPORTING",
    title: "Generate compliance reports automatically from connected data",
    body: "Regulatory reporting in insurance requires pulling data from multiple systems, cross-referencing policy records, and producing structured reports on schedule. AI connects to your policy management system, claims database, and compliance tracking tools and generates the required reports automatically — ready for review and sign-off rather than manual assembly.",
    metrics: ["Recurring reports generated on schedule without manual data gathering", "Audit trail included by default", "Configurable for MAS, HKIA, FCA, and other regulatory frameworks"],
  },
  {
    label: "CUSTOMER SUPPORT",
    title: "Handle routine customer enquiries without growing your team",
    body: "Renewal reminders, payment status questions, coverage queries, claim status checks — AI handles these automatically or assists your support team with drafted responses and pre-loaded account context. Escalations go to an agent with the full conversation history and account summary already prepared.",
    metrics: ["30–50% reduction in average support handle time", "First-contact resolution rate improvement", "Seamless handover to human agents for complex cases"],
  },
];

const objections = [
  {
    q: "Insurance data is highly sensitive. How do you protect it?",
    a: "Every deployment lives in your own cloud environment or on-premises infrastructure. No policyholder data passes through DeView-operated systems. We implement role-based access controls, full audit logging, and can configure the deployment to meet PDPO, GDPR, and regulatory requirements specific to your jurisdiction.",
  },
  {
    q: "Our claims processes vary significantly by product line. Can AI handle that?",
    a: "Yes. We configure separate processing pipelines per product type and train each on the specific document formats, field structures, and routing rules for that line. The configuration is documented so your team can update it when products change.",
  },
  {
    q: "We're concerned about AI making incorrect decisions on claims.",
    a: "AI doesn't make claims decisions — your adjusters do. AI handles intake, classification, extraction, and routing. Any document or field the AI is uncertain about is flagged for human review. The system is designed to increase adjuster efficiency, not to replace adjuster judgment.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">INSURANCE · INDUSTRY</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                AI for insurance operations — built for claims volume, compliance requirements, and data sensitivity.
              </h1>
              <div className="space-y-3 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  Insurance operations are document-intensive, compliance-sensitive, and high-volume. All three characteristics make them well-suited to AI automation — when it&apos;s built correctly.
                </p>
                <p>
                  DeView builds AI systems for insurance teams that reduce manual processing, handle routine customer enquiries, and generate compliance documentation automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mb-16 grid grid-cols-3 gap-px border border-[var(--white-20)] bg-[var(--white-20)]">
            {[
              { metric: "60–85%", label: "reduction in manual claims intake time" },
              { metric: "3–6 wks", label: "from scoping to live deployment" },
              { metric: "100%", label: "audit trail on every AI action" },
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
              Common questions from insurance teams
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
              Tell us the claims or operations process that&apos;s costing the most manual time.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
              We reply within 1–2 business days with a specific recommendation — what AI can do, how long deployment takes, and a cost range.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-outline">
                Start a project →
              </a>
              <a href="/case-studies" className="btn-outline">
                See case studies →
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
