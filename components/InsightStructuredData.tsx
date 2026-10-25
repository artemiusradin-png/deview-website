import { en } from "@/lib/i18n/dict-en";
import { getInsightArticle } from "@/lib/insights";
import { SITE_URL } from "@/lib/seo";

export function InsightStructuredData({ slug }: { slug: string }) {
  const article = getInsightArticle(slug);
  const copy = en.insightsPage.articles.find((entry) => entry.slug === slug);
  if (!article || !copy) return null;
  const url = `${SITE_URL}/en/insights/${slug}`;
  const organization = { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Deview", url: `${SITE_URL}/en/about` };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: copy.title,
        description: copy.lead,
        image: `${SITE_URL}${article.cover}`,
        datePublished: article.date,
        author: organization,
        publisher: organization,
        inLanguage: "en",
        articleSection: copy.label,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/en/insights` },
          { "@type": "ListItem", position: 3, name: copy.title, item: url },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
