import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { withSocialMetadata } from "@/lib/seo";
import { getAllResources, getResourceBySlug } from "@/lib/oil-gas/resources";
import { ResourceInteractiveView } from "./resource-view";

const SITE_URL = "https://deviewai.com";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const resources = getAllResources();
  return resources.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};

  const canonicalUrl = `${SITE_URL}/${locale}/resources/${resource.slug}`;

  return withSocialMetadata({
    title: `${resource.title} | Deview Resources`,
    description: resource.subtitle,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: resource.title,
      description: resource.subtitle,
      url: canonicalUrl,
      siteName: "Deview",
      type: "website",
    },
  });
}

export default async function LeadMagnetResourcePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${locale}/resources/${resource.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: resource.title,
        description: resource.subtitle,
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
              name: "Resources",
              item: `${SITE_URL}/${locale}/resources`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: resource.title,
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
      <SubpageNav backHref="/resources" />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--ds-canvas, #fbf7ee)",
          color: "var(--ds-ink, #12100e)",
          padding: "calc(5.5rem + env(safe-area-inset-top)) 0 max(4rem,env(safe-area-inset-bottom))",
        }}
      >
        <div style={{ width: "min(calc(100% - 40px), 1000px)", margin: "0 auto" }}>
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
              marginBottom: "32px",
            }}
          >
            <Link href={`/${locale}`} style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link href={`/${locale}/resources`} style={{ color: "inherit", textDecoration: "none" }}>
              Resources
            </Link>
            <span>/</span>
            <span style={{ color: "var(--ds-ink, #12100e)" }}>{resource.id}</span>
          </nav>

          {/* Header */}
          <header style={{ paddingBottom: "36px", borderBottom: "1px solid var(--ds-line, #ded5c5)" }}>
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
              <span>{resource.id} WORKBOOK</span>
              <span style={{ color: "var(--ds-line, #ded5c5)" }}>•</span>
              <span style={{ color: "var(--ds-muted, #726b5f)" }}>{resource.buyerStage}</span>
              <span style={{ color: "var(--ds-line, #ded5c5)" }}>•</span>
              <span style={{ color: "var(--ds-muted, #726b5f)" }}>{resource.format}</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-clash), sans-serif",
                fontSize: "clamp(2.2rem, 4.6vw, 3.8rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                margin: "0 0 20px",
              }}
            >
              {resource.title}
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--ds-muted, #555047)",
                margin: "0 0 24px",
              }}
            >
              {resource.subtitle}
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--ds-ink, #12100e)",
                margin: 0,
              }}
            >
              {resource.lead}
            </p>
          </header>

          {/* Interactive Diagnostic, Ungated Specifications & Gated Download Form */}
          <ResourceInteractiveView resource={resource} locale={locale} />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

