import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { LENDING_PROJECTS, PRODUCTION_CASES, getProductionCase } from "@/lib/case-studies";
import "../case-studies.css";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return PRODUCTION_CASES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProductionCase(slug);
  if (!project) return { robots: { index: false, follow: false } };
  return withSocialMetadata({
    title: `${project.company} Case Study | Deview`,
    description: project.content.headline,
    alternates: { canonical: `/en/case-studies/${project.slug}` },
    openGraph: { title: project.content.headline, description: project.content.solution, url: `/en/case-studies/${project.slug}`, type: "article" },
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProductionCase(slug);
  if (!project) notFound();
  return (
    <>
      <main className="min-h-screen pb-16 text-[var(--text)]">
        <div className="section-gutter mx-auto max-w-6xl">
          <Link href="/en/case-studies" className="mb-10 inline-flex min-h-11 items-center gap-3 text-sm hover:underline"><ArrowLeft size={16} aria-hidden="true" />All case studies</Link>
          <header className="mb-12 border-b border-[var(--border)] pb-10">
            <p className="page-kicker mb-6">Case study · {project.content.sector}</p>
            <h1 className="!max-w-5xl !text-[clamp(2.2rem,5vw,4.75rem)]">{project.content.headline}</h1>
            <p className="mt-6 text-[var(--text-muted)]">{project.company} · {project.content.service}</p>
          </header>
          <CaseStudyDetail project={project} />
          {project.slug === "covenant-desk" ? (
            <section className="mt-12 border-t border-[var(--border)] pt-10" aria-labelledby="lenders-title">
              <p className="page-kicker mb-4">Loan management systems</p>
              <h2 id="lenders-title" className="mb-6">Five independent lender deployments. 17,000+ borrower records supported.</h2>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
                {LENDING_PROJECTS.map((lender) => (
                  <li key={lender.slug} className="border-t border-[var(--border)] pt-3">
                    <span className="block font-medium">{lender.name}</span>
                    {lender.nameZh ? <span className="block text-sm text-[var(--text-muted)]" lang="zh-HK">{lender.nameZh}</span> : null}
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                Running a lending business? Get the free{" "}
                <Link href="/en/resources/loan-management-system-checklist" className="underline underline-offset-4">loan management system checklist</Link>.
              </p>
            </section>
          ) : null}
          <section className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-[var(--border)] pt-10">
            <div><p className="page-kicker mb-4">Have a similar challenge?</p><h2>Let’s put your ideas to work.</h2></div>
            <Link href="/en/contact" className="btn-outline inline-flex items-center gap-5">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
