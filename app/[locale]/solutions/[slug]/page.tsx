import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionHubView } from "@/components/solutions/SolutionHubView";
import { SolutionPageView } from "@/components/solutions/SolutionPageView";
import { ogCoverPath } from "@/components/solutions/covers";
import {
  SOLUTION_PAGES,
  hubBySlug,
  pageBySlug,
  pagesIn,
  publishedHubs,
  solutionPath,
} from "@/lib/solutions";

const SITE_URL = "https://deviewai.com";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...SOLUTION_PAGES.map((p) => ({ slug: p.slug })),
    ...publishedHubs().map((h) => ({ slug: h.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(slug);
  const hub = page ? undefined : hubBySlug(slug);
  const entry = page ?? hub;
  if (!entry) return { robots: { index: false, follow: false } };
  const url = `${SITE_URL}/en${solutionPath(slug)}`;
  const coverSlug = page ? page.slug : pagesIn(hub!.vertical)[0]?.slug;
  return {
    title: entry.seoTitle,
    description: entry.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: entry.seoTitle,
      description: entry.seoDescription,
      url,
      siteName: "DeView",
      type: "website",
      ...(coverSlug
        ? { images: [{ url: ogCoverPath(coverSlug), width: 1200, height: 630 }] }
        : {}),
    },
  };
}

export default async function SolutionRoute({ params }: Props) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (page) return <SolutionPageView page={page} />;
  const hub = hubBySlug(slug);
  if (hub) return <SolutionHubView hub={hub} />;
  notFound();
}
