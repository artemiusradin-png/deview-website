import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { withSocialMetadata } from "@/lib/seo";
import { getAllResources } from "@/lib/oil-gas/resources";

const SITE_URL = "https://deviewai.com";

export async function generateMetadata(): Promise<Metadata> {
  return withSocialMetadata({
    title: "Engineering Resources, Workbooks & Diagnostic Tools | Deview",
    description:
      "Actionable engineering workbooks, evaluation matrices, compliance checklists, and RFP templates for energy, lending, and enterprise operations teams.",
    alternates: { canonical: `${SITE_URL}/en/resources` },
    openGraph: {
      title: "Engineering Resources, Workbooks & Diagnostic Tools | Deview",
      description:
        "Actionable engineering workbooks, evaluation matrices, compliance checklists, and RFP templates for energy, lending, and enterprise operations teams.",
      url: `${SITE_URL}/en/resources`,
      siteName: "Deview",
      type: "website",
    },
  });
}

const ORIGINAL_GUIDES = [
  {
    slug: "ai-guide-lending",
    title: "10 Practical AI Use Cases for Lending Operations",
    category: "Lending & Finance",
    format: "Executive Guide & Workflow Teardown",
    description:
      "A systematic review of 10 high-impact lending workflows AI can automate safely: underwriting intake, covenant extraction, bank statement analysis, and compliance verification.",
  },
  {
    slug: "automation-playbook",
    title: "The Automation Playbook: From Manual Operations to Governed Software",
    category: "Enterprise Systems",
    format: "Engineering Playbook",
    description:
      "How to evaluate manual back-office bottlenecks, design human-in-the-loop workflows, and establish measurable automation ROI without enterprise bloat.",
  },
  {
    slug: "loan-management-system-checklist",
    title: "Loan Management System Evaluation Checklist",
    category: "Lending & Finance",
    format: "RFP Checklist & Feature Matrix",
    description:
      "60+ testable criteria covering multi-currency accounting, waterfall calculation engines, borrower portal security, and credit committee audit logs.",
  },
  {
    slug: "ai-security-checklist",
    title: "AI Security Checklist for LLM Applications",
    category: "Cybersecurity & AI",
    format: "Security Audit Checklist",
    description:
      "A technical audit checklist covering prompt injection defense, private vector store isolation, model output validation, and RBAC data boundary controls.",
  },
];

export default async function ResourcesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ogResources = getAllResources();

  return (
    <>
      <SubpageNav backHref="/" />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--ds-canvas, #fbf7ee)",
          color: "var(--ds-ink, #12100e)",
          padding: "calc(5.5rem + env(safe-area-inset-top)) 0 max(4rem,env(safe-area-inset-bottom))",
        }}
      >
        <div style={{ width: "min(calc(100% - 40px), 1100px)", margin: "0 auto" }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              gap: "8px",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ds-muted, #726b5f)",
              marginBottom: "32px",
            }}
          >
            <Link href={`/${locale}`} style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--ds-ink, #12100e)" }}>Resources</span>
          </nav>

          {/* Header */}
          <header style={{ paddingBottom: "48px", borderBottom: "1px solid var(--ds-line, #ded5c5)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--ds-muted, #726b5f)",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "var(--ds-accent, #ff3b00)",
                  display: "inline-block",
                }}
              />
              PRACTICAL ENGINEERING ASSETS
            </div>
            <h1
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                margin: "0 0 20px",
              }}
            >
              Engineering Workbooks, Checklists & Diagnostic Tools
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--ds-muted, #555047)",
                maxWidth: "800px",
                margin: 0,
              }}
            >
              Unfiltered, ungated technical criteria to evaluate, specify, and procure enterprise software,
              industrial data pipelines, and operational AI.
            </p>
          </header>

          {/* Oil & Gas Technical Workbooks */}
          <section style={{ padding: "56px 0", borderBottom: "1px solid var(--ds-line, #ded5c5)" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ds-accent, #ff3b00)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              ENERGY & INDUSTRIAL INFRASTRUCTURE
            </div>
            <h2
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                fontWeight: 500,
                margin: "0 0 28px",
              }}
            >
              Oil & Gas System Workbooks & Diagnostics
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {ogResources.map((res) => (
                <div
                  key={res.slug}
                  style={{
                    padding: "28px",
                    background: "#fff",
                    border: "1px solid var(--ds-line, #ded5c5)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--ds-accent, #ff3b00)",
                        padding: "3px 8px",
                        background: "rgba(255, 59, 0, 0.08)",
                      }}
                    >
                      {res.id}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}>
                      {res.format.split("+")[0]}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      color: "var(--ds-ink, #12100e)",
                    }}
                  >
                    {res.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--ds-muted, #555047)",
                      marginBottom: "24px",
                      flexGrow: 1,
                    }}
                  >
                    {res.subtitle}
                  </p>

                  <Link
                    href={`/${locale}/resources/${res.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--ds-accent, #ff3b00)",
                      textDecoration: "none",
                    }}
                  >
                    Open Interactive Diagnostic & Workbook →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Lending, Automation & AI Security Resources */}
          <section style={{ padding: "56px 0" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ds-accent, #ff3b00)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              FINANCE & ENTERPRISE ENGINEERING
            </div>
            <h2
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                fontWeight: 500,
                margin: "0 0 28px",
              }}
            >
              Lending & Enterprise Systems Playbooks
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {ORIGINAL_GUIDES.map((guide) => (
                <div
                  key={guide.slug}
                  style={{
                    padding: "28px",
                    background: "#fff",
                    border: "1px solid var(--ds-line, #ded5c5)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--ds-muted, #726b5f)",
                      }}
                    >
                      {guide.category}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}>
                      {guide.format}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      color: "var(--ds-ink, #12100e)",
                    }}
                  >
                    {guide.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--ds-muted, #555047)",
                      marginBottom: "24px",
                      flexGrow: 1,
                    }}
                  >
                    {guide.description}
                  </p>

                  <Link
                    href={`/${locale}/resources/${guide.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--ds-accent, #ff3b00)",
                      textDecoration: "none",
                    }}
                  >
                    Access Guide & Checklist →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

