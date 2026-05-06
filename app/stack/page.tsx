import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SubpageNav } from "../../components/SubpageNav";

export const metadata: Metadata = {
  title: "Tech Stack & Integrations | DeView",
  description:
    "The AI models, cloud platforms, enterprise integrations, and engineering tools DeView uses to build production AI systems.",
};

const stackLayers = [
  {
    label: "AI MODELS",
    description: "We are model-agnostic — the right model depends on your use case, data sensitivity, and compliance requirements.",
    items: [
      { name: "OpenAI GPT-4o", detail: "Default for most document and conversational workflows — strong reasoning and instruction-following" },
      { name: "Anthropic Claude", detail: "Preferred for long-document analysis, contract review, and compliance-sensitive applications" },
      { name: "Google Gemini", detail: "Used for multimodal workflows requiring image and document understanding together" },
      { name: "Meta Llama 3", detail: "On-premises deployments — fully air-gapped with no external API calls" },
      { name: "Mistral", detail: "On-premises deployments where lower resource requirements are needed" },
    ],
  },
  {
    label: "CLOUD PLATFORMS",
    description: "All cloud deployments go into your own account. DeView does not operate shared cloud infrastructure for client workloads.",
    items: [
      { name: "Amazon Web Services (AWS)", detail: "Bedrock, Lambda, RDS, S3 — primary cloud for clients in finance and lending" },
      { name: "Microsoft Azure", detail: "Azure OpenAI Service, Azure AI Foundry — preferred for clients with existing Microsoft licensing" },
      { name: "Google Cloud Platform", detail: "Vertex AI, Cloud Run, BigQuery — used for clients with existing GCP relationships" },
      { name: "On-premises / private cloud", detail: "For fully air-gapped regulated deployments — Llama 3 or Mistral on client infrastructure" },
    ],
  },
  {
    label: "ENTERPRISE INTEGRATIONS",
    description: "AI that doesn't connect to your systems doesn't solve your operational problems. We build native integrations with the platforms already in use.",
    items: [
      { name: "Salesforce / HubSpot", detail: "CRM read and write — account context retrieval, ticket creation, case updates" },
      { name: "SAP / Oracle ERP", detail: "ERP data access for financial and operational data pipelines" },
      { name: "SharePoint / Google Drive", detail: "Document library ingestion for knowledge assistants and contract review" },
      { name: "Confluence / Notion", detail: "Internal wiki ingestion for knowledge assistants" },
      { name: "SQL databases", detail: "Read-only service account connections for reporting and analytics" },
      { name: "Slack / Microsoft Teams", detail: "Notification routing and team alert delivery" },
      { name: "Email (IMAP/SMTP)", detail: "Inbound document and query intake from email channels" },
      { name: "Tableau / Power BI / Looker", detail: "BI tool connections for reporting copilot data access" },
    ],
  },
  {
    label: "VECTOR & RETRIEVAL",
    description: "Retrieval-Augmented Generation (RAG) is how we give AI access to your specific documents without it hallucinating information.",
    items: [
      { name: "Pinecone", detail: "Managed vector database for knowledge assistants and document search" },
      { name: "Weaviate", detail: "Self-hosted vector database for on-premises RAG deployments" },
      { name: "pgvector (PostgreSQL)", detail: "Vector search within existing PostgreSQL databases — lower operational overhead" },
      { name: "LangChain / LlamaIndex", detail: "Document chunking, embedding pipelines, and retrieval orchestration" },
    ],
  },
  {
    label: "INFRASTRUCTURE & MLOPS",
    description: "Production AI requires monitoring, drift detection, and evaluation pipelines — not just a model and an API key.",
    items: [
      { name: "Docker / Kubernetes", detail: "Container orchestration for scalable, reliable production deployments" },
      { name: "Supabase (PostgreSQL)", detail: "Audit logging, project management, and client portal data" },
      { name: "Next.js / Node.js", detail: "Application layer for AI-powered interfaces and API routes" },
      { name: "Resend / Web3Forms", detail: "Email delivery with multi-tier fallback" },
      { name: "Netlify / Vercel", detail: "Deployment hosting for web interfaces and API endpoints" },
    ],
  },
];

const complianceFrameworks = [
  { name: "GDPR", region: "EU / EEA", coverage: "Data residency, processing agreements, audit trail, deletion rights" },
  { name: "PDPO", region: "Hong Kong", coverage: "Primary jurisdiction — data handling, retention, and security requirements" },
  { name: "MAS TRM", region: "Singapore", coverage: "Technology risk management for financial institutions" },
  { name: "HKMA", region: "Hong Kong", coverage: "On-premises deployment options for regulated banking data" },
  { name: "FCA", region: "United Kingdom", coverage: "Consumer duty alignment, explainability, human-in-the-loop requirements" },
  { name: "CCPA", region: "California / US", coverage: "Data access controls, consumer rights compliance" },
];

export default function StackPage() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] text-[var(--text)] sm:pb-16 sm:pt-24">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/" />

          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="section-label mb-3">TECH STACK & INTEGRATIONS</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h1 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                Model-agnostic. Enterprise-integrated. Deployed in your environment.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                We don&apos;t lock clients into a specific AI provider or cloud platform. We select the best option for your use case, compliance requirements, and existing infrastructure.
              </p>
            </div>
          </div>

          {/* Stack layers */}
          <div className="mb-16 space-y-12">
            {stackLayers.map((layer) => (
              <div key={layer.label}>
                <div className="mb-6">
                  <p className="mb-1 text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">
                    {layer.label}
                  </p>
                  <p className="text-[0.78rem] leading-snug text-[var(--text-muted)]">{layer.description}</p>
                </div>
                <div className="grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-3">
                  {layer.items.map((item) => (
                    <div key={item.name} className="flex flex-col gap-1 bg-[var(--background)] px-4 py-4">
                      <p className="text-[0.78rem] text-[var(--white-80)]">{item.name}</p>
                      <p className="text-[0.68rem] leading-snug text-[var(--text-muted)]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div className="mb-16">
            <p className="mb-3 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
              Regulatory frameworks we design for
            </p>
            <div className="rule mb-6" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--white-20)]">
                    <th className="pb-3 pr-6 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Framework</th>
                    <th className="pb-3 pr-6 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">Region</th>
                    <th className="pb-3 text-left text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">How we address it</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceFrameworks.map((f, i) => (
                    <tr key={f.name} className={`${i !== complianceFrameworks.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}>
                      <td className="py-4 pr-6 text-[0.78rem] text-[var(--white-80)]">{f.name}</td>
                      <td className="py-4 pr-6 text-[0.75rem] text-[var(--white-40)]">{f.region}</td>
                      <td className="py-4 text-[0.75rem] leading-snug text-[var(--text-muted)]">{f.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[0.68rem] text-[var(--text-muted)]">
              DeView does not currently hold SOC 2 or ISO 27001 certifications. Architecture documentation and completed security questionnaires are available on request for enterprise procurement.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--white-20)] pt-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <h3 className="mb-3 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]">
                  Have specific stack requirements?
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Tell us your existing systems and any compliance constraints. We&apos;ll tell you how we&apos;d approach it and whether there are any gaps.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <a href="/contact" className="btn-outline">
                  Discuss your stack →
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
