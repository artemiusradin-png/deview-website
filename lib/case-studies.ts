import { en } from "@/lib/i18n/dict-en";
import { OIL_GAS_CASES_NEWEST_FIRST, oilGasCasePath, type OilGasLogo } from "@/lib/oil-gas-cases";

/** Presentation metadata only. Full project copy remains in the English dictionary. */
export const PRODUCTION_CASES = [
  { number: "01", slug: "agroplatforma", company: "AgroPlatforma", industry: "Agriculture", services: ["AI/ML engineering", "Digital product engineering", "Enterprise platforms"], image: "/images/cases/agroplatforma.jpg", imageAlt: "AgroPlatforma field diagnostics and quotation workflow", video: "/deview-agroplatforma-demo.mp4" },
  { number: "02", slug: "covenant-desk", company: "Covenant Desk", industry: "Finance", services: ["Digital product engineering", "AI/ML engineering"], image: "/images/cases/covenant-desk.jpg", imageAlt: "Covenant Desk AI assistant connected to live lending data", video: "/deview-unified-portal-demo.mp4" },
  { number: "03", slug: "senior-care-documentation", company: "Swiss senior-care provider", industry: "Senior care", services: ["AI/ML engineering"], image: "/images/stock/document-pen-900.webp", imageAlt: "Writing notes in a document", video: undefined },
  { number: "04", slug: "storepilot", company: "EVDEV · StorePilot", industry: "E-commerce", services: ["AI/ML engineering", "Data engineering", "Digital product engineering"], image: "/images/stock/laptop-analytics-1200.webp", imageAlt: "Analytics on a laptop", video: undefined },
] as const;

/** Loan management systems built for five Hong Kong lenders, the tenants of the Covenant Desk portal. */
export const LENDING_PROJECTS = [
  { slug: "grand-finance", name: "Grand Finance", nameZh: "高昇財務" },
  { slug: "kk-credit", name: "KK Credit", nameZh: "KK信貸" },
  { slug: "wah-wei-credit", name: "Wah Wei Credit", nameZh: "華威信貸" },
  { slug: "every-success-credit", name: "Every Success Credit", nameZh: "萬成信貸" },
  { slug: "rich-eagle-capital", name: "Rich Eagle Capital", nameZh: "" },
] as const;

export type CaseLibraryEntry = {
  id: string;
  href: string;
  company: string;
  industry: string;
  services: readonly string[];
  headline: string;
  searchText: string;
  image?: string;
  imageAlt?: string;
  logo?: OilGasLogo;
  year?: number;
};

export const CASE_LIBRARY: CaseLibraryEntry[] = [
  ...PRODUCTION_CASES.map((project) => {
    const content = en.caseStudiesPage.cases.find((c) => c.number === project.number)!;
    return {
      ...project,
      id: project.slug,
      href: `/en/case-studies/${project.slug}`,
      headline: content.headline.replace(/^[^:]+: /, "").replace(/^./, (letter) => letter.toUpperCase()),
      searchText: [content.sector, content.service, content.challenge, content.solution, ...(content.capabilities?.map((c) => `${c.name} ${c.body}`) ?? [])].join(" "),
    };
  }),
  ...LENDING_PROJECTS.map((lender) => ({
    id: `lms-${lender.slug}`,
    href: "/en/case-studies/covenant-desk",
    company: lender.name,
    industry: "Finance",
    services: ["Digital product engineering"],
    headline: "Loan management system",
    searchText: `${lender.name} ${lender.nameZh} loan management system lending software money lender Hong Kong borrower portal repayments collections`,
  })),
  ...OIL_GAS_CASES_NEWEST_FIRST.map((project) => ({
    id: project.slug,
    href: oilGasCasePath(project.slug),
    company: project.company,
    industry: "Oil & gas",
    services: project.discipline.includes("data") || project.discipline.includes("analytics")
      ? ["Data engineering"] : ["Digital product engineering"],
    headline: project.project,
    searchText: [project.discipline, project.summary, project.context, project.location, project.workType, project.scope?.join(" "), project.year].join(" "),
    logo: project.logo,
    year: project.year,
  })),
];

export const CASE_INDUSTRIES = [...new Set(CASE_LIBRARY.map((c) => c.industry))].sort();
export const CASE_SERVICES = [...new Set(CASE_LIBRARY.flatMap((c) => [...c.services]))].sort();

export function getProductionCase(slug: string) {
  const project = PRODUCTION_CASES.find((c) => c.slug === slug);
  if (!project) return undefined;
  const content = en.caseStudiesPage.cases.find((c) => c.number === project.number);
  return content ? { ...project, content } : undefined;
}
