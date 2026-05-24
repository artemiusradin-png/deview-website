import type { Metadata } from "next";
import { cookies } from "next/headers";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";
import TeamMemberCard from "../../components/ui/team-member-card";

export const metadata: Metadata = {
  title: "About | DeView",
  description:
    "DeView is an AI consulting and engineering firm with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart — building AI systems that reduce manual work and automate workflows for operations and finance teams.",
};

const values = [
  {
    label: "WORKING SYSTEMS ONLY",
    body: "We do not do slide decks, proof-of-concepts that never go live, or tools that need a separate team to maintain. Everything we build is deployed into production — connected to real data, running real workflows.",
  },
  {
    label: "OUTCOME BEFORE ARCHITECTURE",
    body: "We size the cost of the problem before we design the solution. If the ROI isn't clear before we start building, we don't start building.",
  },
  {
    label: "YOUR DATA STAYS YOURS",
    body: "Every deployment lives in the client's environment. We do not operate shared AI platforms or store client data in DeView infrastructure. You own the system we build.",
  },
  {
    label: "HUMAN JUDGMENT STAYS IN PLACE",
    body: "AI handles volume. Humans handle exceptions and high-stakes decisions. Every DeView system includes a clear escalation path — the AI flags; your team decides.",
  },
];

const expertise = [
  { area: "LLM Integration", detail: "OpenAI, Anthropic Claude, Google Gemini, Llama 3, Mistral" },
  { area: "Retrieval-Augmented Generation", detail: "Vector stores, semantic search, document ingestion pipelines" },
  { area: "Document Processing", detail: "PDF extraction, OCR, classification, structured data output" },
  { area: "Enterprise Integrations", detail: "Salesforce, HubSpot, SAP, Oracle, SQL databases, Slack, SharePoint" },
  { area: "Data Engineering", detail: "ETL pipelines, data transformation, scheduled batch processing" },
  { area: "MLOps", detail: "Monitoring, drift detection, evaluation pipelines, retraining workflows" },
  { area: "Compliance Architecture", detail: "GDPR, PDPO, MAS TRM, HKMA — audit trails, data residency" },
  { area: "Deployment", detail: "Cloud (AWS, GCP, Azure), on-premises, hybrid for regulated environments" },
];

export default async function AboutPage() {
  const cookieStore = await cookies();
  const isHongKong = cookieStore.get("deview-country")?.value === "HK";

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-16">
            <p className="section-label mb-3">ABOUT DEVIEW</p>
            <div className="rule mb-6" />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                We build AI that does the work — not AI that answers questions about it.
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>
                  {isHongKong
                    ? "DeView is an AI consulting and engineering firm headquartered in Hong Kong, with sales offices in Vancouver, Edinburgh, and Stuttgart. We work with operations and finance teams at mid-market and enterprise companies to build AI systems that reduce manual work, cut operating costs, and automate repetitive workflows."
                    : "DeView is an AI consulting and engineering firm with teams in Hong Kong, Vancouver, Edinburgh, and Stuttgart. We work with operations and finance teams at mid-market and enterprise companies to build AI systems that reduce manual work, cut operating costs, and automate repetitive workflows."}
                </p>
                <p>
                  We focus on practical outcomes: specific processes that are currently costing time or money, automated and connected to the systems already in use. Not demos. Not roadmaps. Working systems, deployed in weeks.
                </p>
              </div>
            </div>
          </div>

          {/* What we are not */}
          <div className="mb-16 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10">
            <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              What we are not
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "A large consulting firm that subcontracts to junior developers",
                "A software vendor selling a pre-built platform",
                "An agency that builds a demo and calls it production",
                "A team that disappears after handover without documentation",
                "A firm that charges retainers before proving value",
                "An AI chatbot wrapper with a consulting label on top",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-[0.7rem] text-[var(--white-30)]">—</span>
                  <p className="text-sm text-[var(--text-muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              How we work
            </p>
            <div className="rule mb-8" />
            <div className="grid gap-0">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className={`grid gap-4 py-6 sm:gap-6 md:grid-cols-[220px_1fr] md:items-start ${i !== values.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-80)]">
                    {v.label}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership section hidden for now
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Leadership
            </p>
            <div className="rule mb-8" />
            <TeamMemberCard
              position="left"
              jobPosition="Managing Director"
              firstName="Artemis"
              lastName="Radin"
              imageUrl="/team/artemis-radin.jpg"
              href="/contact"
              description="Artemis leads DeView's engagements end to end — from scoping the workflows that cost clients the most to shipping the AI systems that fix them. He works directly with operations and finance leaders across the firm's offices, holding every build to one standard: measurable outcomes in weeks, not roadmaps in quarters."
            />
          </div>
          */}

          {/* Expertise */}
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Technical expertise
            </p>
            <div className="rule mb-8" />
            <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2">
              {expertise.map((e) => (
                <div key={e.area} className="flex flex-col gap-1 bg-[var(--background)] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--white-80)]">{e.area}</p>
                  <p className="text-[0.75rem] leading-snug text-[var(--text-muted)]">{e.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & context */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                {isHongKong ? "Headquarters" : "Based in"}
              </p>
              <p className="text-sm text-[var(--white-80)]">
                {isHongKong ? "Hong Kong" : "Hong Kong · Vancouver · Edinburgh · Stuttgart"}
              </p>
              <p className="text-[0.75rem] text-[var(--text-muted)]">
                {isHongKong
                  ? "Sales offices: Vancouver · Edinburgh · Stuttgart"
                  : "Serving clients across Asia-Pacific, North America, and Europe"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                Clients
              </p>
              <p className="text-sm text-[var(--white-80)]">Mid-market to enterprise</p>
              <p className="text-[0.75rem] text-[var(--text-muted)]">
                Operations, finance, and compliance teams
              </p>
            </div>
            <div>
              <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                Industries
              </p>
              <p className="text-sm text-[var(--white-80)]">Lending · Insurance · Legal · Financial Services</p>
              <p className="text-[0.75rem] text-[var(--text-muted)]">Professional Services · Property</p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--white-20)] pt-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
                  Have a workflow you want to automate?
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Describe the process. We reply within 1–2 business days with a specific, scoped recommendation.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <a href="/contact" className="btn-outline">
                  Start a project →
                </a>
                <a href="/case-studies" className="btn-outline">
                  See case studies →
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
