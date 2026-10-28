import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { withSocialMetadata } from "@/lib/seo";
import { getAllArticles, getArticleBySlug } from "@/lib/oil-gas/insights";

const SITE_URL = "https://deviewai.com";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonicalUrl = `${SITE_URL}/${locale}/insights/${article.slug}`;

  return withSocialMetadata({
    title: `${article.title} | Deview Insights`,
    description: article.summary,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      siteName: "Deview",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  });
}

export default async function TechnicalInsightArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${locale}/insights/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": canonicalUrl,
        url: canonicalUrl,
        headline: article.title,
        description: article.summary,
        datePublished: article.publishedAt,
        author: {
          "@type": "Organization",
          name: article.author.name,
          url: `${SITE_URL}/${locale}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "Deview",
          url: `${SITE_URL}/${locale}`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon.svg`,
          },
        },
        citation: article.citations.map((c) => `${c.title} (${c.publisher}, ${c.year})`),
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Insights",
              item: `${SITE_URL}/${locale}/insights`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: canonicalUrl,
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubpageNav backHref="/insights" />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--ds-canvas, #fbf7ee)",
          color: "var(--ds-ink, #12100e)",
          padding: "calc(5.5rem + env(safe-area-inset-top)) 0 max(4rem,env(safe-area-inset-bottom))",
        }}
      >
        <div style={{ width: "min(calc(100% - 40px), 880px)", margin: "0 auto" }}>
          {/* Breadcrumb Bar */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ds-muted, #726b5f)",
              marginBottom: "36px",
            }}
          >
            <Link href={`/${locale}`} style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link href={`/${locale}/insights`} style={{ color: "inherit", textDecoration: "none" }}>
              Insights
            </Link>
            <span>/</span>
            <span style={{ color: "var(--ds-ink, #12100e)" }}>{article.category}</span>
          </nav>

          {/* Article Header */}
          <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--ds-line, #ded5c5)", paddingBottom: "36px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ds-accent, #ff3b00)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              <span>{article.id} • {article.category}</span>
              <span style={{ color: "var(--ds-line, #ded5c5)" }}>•</span>
              <span style={{ color: "var(--ds-muted, #726b5f)" }}>{article.readingTime}</span>
              <span style={{ color: "var(--ds-line, #ded5c5)" }}>•</span>
              <span style={{ color: "var(--ds-muted, #726b5f)" }}>Published {article.publishedAt}</span>
              <span style={{ color: "var(--ds-line, #ded5c5)" }}>•</span>
              <span style={{ color: "var(--ds-muted, #726b5f)" }}>Reviewed {article.lastReviewed}</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(2.2rem, 4.8vw, 3.8rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                margin: "0 0 20px",
              }}
            >
              {article.title}
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--ds-muted, #555047)",
                margin: "0 0 24px",
              }}
            >
              {article.summary}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "13px",
                color: "var(--ds-ink, #12100e)",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--ds-ink, #12100e)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: "12px",
                }}
              >
                DV
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{article.author.name}</div>
                <div style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}>
                  {article.author.role}
                </div>
              </div>
            </div>
          </header>

          {/* Research Question Callout */}
          <div
            style={{
              padding: "24px 28px",
              background: "#fff",
              border: "1px solid var(--ds-line, #ded5c5)",
              borderLeft: "4px solid var(--ds-accent, #ff3b00)",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ds-accent, #ff3b00)",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              CENTRAL ARCHITECTURAL QUESTION
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.5,
                margin: 0,
                color: "var(--ds-ink, #12100e)",
              }}
            >
              &ldquo;{article.researchQuestion}&rdquo;
            </p>
          </div>

          {/* Table of Contents */}
          <nav
            style={{
              padding: "20px 24px",
              background: "rgba(18, 16, 14, 0.02)",
              border: "1px solid var(--ds-line, #ded5c5)",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "12px",
                color: "var(--ds-muted, #726b5f)",
              }}
            >
              Contents
            </div>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {article.sections.map((sec, i) => (
                <li key={i} style={{ fontSize: "14px" }}>
                  <a
                    href={`#section-${i}`}
                    style={{ color: "var(--ds-ink, #12100e)", textDecoration: "none" }}
                  >
                    {sec.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article Body Sections */}
          <article style={{ lineHeight: 1.75, fontSize: "16px" }}>
            {article.sections.map((sec, idx) => (
              <section key={idx} id={`section-${idx}`} style={{ marginBottom: "48px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-clash), sans-serif",
                    fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                    fontWeight: 500,
                    margin: "0 0 20px",
                    lineHeight: 1.25,
                  }}
                >
                  {sec.heading}
                </h2>
                {sec.body.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      margin: "0 0 20px",
                      color: "var(--ds-ink, #12100e)",
                      lineHeight: 1.7,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                {sec.callout && (
                  <div
                    style={{
                      marginTop: "24px",
                      padding: "20px 24px",
                      background:
                        sec.callout.type === "warning"
                          ? "#fff8f6"
                          : sec.callout.type === "tip"
                          ? "#f6faf6"
                          : "#fff",
                      border: "1px solid",
                      borderColor:
                        sec.callout.type === "warning"
                          ? "var(--ds-accent, #ff3b00)"
                          : "var(--ds-line, #ded5c5)",
                      borderLeftWidth: "4px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color:
                          sec.callout.type === "warning"
                            ? "var(--ds-accent, #ff3b00)"
                            : "var(--ds-muted, #726b5f)",
                        marginBottom: "6px",
                      }}
                    >
                      {sec.callout.type.toUpperCase()}
                    </div>
                    <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "var(--ds-ink, #12100e)" }}>
                      {sec.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </article>

          {/* Commercial Bridges */}
          <section
            style={{
              marginTop: "56px",
              padding: "36px",
              background: "#fff",
              border: "1px solid var(--ds-line, #ded5c5)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ds-accent, #ff3b00)",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              DEPLOYMENT & ARCHITECTURAL SPECIFICATIONS
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 600, margin: "0 0 16px" }}>
              Related Systems & Production Solutions
            </h3>
            <p style={{ fontSize: "14px", color: "var(--ds-muted, #555047)", margin: "0 0 24px", lineHeight: 1.6 }}>
              Review the implementation blueprints and technical topologies associated with this research:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {article.commercialBridges.map((bridge, bIdx) => (
                <Link
                  key={bIdx}
                  href={`/${locale}${bridge.href}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "var(--ds-canvas, #fbf7ee)",
                    border: "1px solid var(--ds-line, #ded5c5)",
                    textDecoration: "none",
                    color: "var(--ds-ink, #12100e)",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <span>{bridge.label}</span>
                  <span style={{ color: "var(--ds-accent, #ff3b00)", fontWeight: 700 }}>→</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Citations & References */}
          <section style={{ marginTop: "48px", borderTop: "1px solid var(--ds-line, #ded5c5)", paddingTop: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h4
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--ds-muted, #726b5f)",
                  margin: 0,
                }}
              >
                Authoritative References &amp; Statutory Citations ({article.citations.length} sources)
              </h4>
              <span style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}>
                Next scheduled review: {article.nextReviewDate}
              </span>
            </div>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {article.citations.map((cite, cIdx) => (
                <li key={cIdx} style={{ fontSize: "13px", color: "var(--ds-muted, #555047)", lineHeight: 1.55 }}>
                  <strong style={{ color: "var(--ds-ink, #12100e)" }}>{cite.title}</strong> — {cite.publisher} ({cite.year})
                  {cite.retrievedAt && (
                    <span style={{ fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}> [Retrieved: {cite.retrievedAt}]</span>
                  )}
                  {cite.url && (
                    <>
                      {" "}
                      [
                      <a
                        href={cite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--ds-accent, #ff3b00)", textDecoration: "underline", fontWeight: 500 }}
                      >
                        Official Source ↗
                      </a>
                      ]
                    </>
                  )}
                </li>
              ))}
            </ol>
            <div style={{ marginTop: "20px", padding: "12px 16px", background: "rgba(18, 16, 14, 0.03)", fontSize: "11px", color: "var(--ds-muted, #726b5f)" }}>
              Governance: {article.reviewedBy}. Technical citations are verified against published gazettes and standards bodies.
            </div>
          </section>

          {/* Direct CTA */}
          <section
            style={{
              marginTop: "56px",
              padding: "48px 36px",
              background: "var(--ds-ink, #12100e)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                fontWeight: 500,
                margin: "0 0 16px",
              }}
            >
              Review Your Field Architecture With Deview
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Engage directly with our petroleum data systems group to benchmark your current historian,
              SCADA replication, and data residency posture.
            </p>
            <Link
              href={`/${locale}/contact`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "var(--ds-accent, #ff3b00)",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Schedule Architecture Briefing →
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

