import { en } from "@/lib/i18n/dict-en";
import { OIL_GAS_CASES_NEWEST_FIRST, oilGasCasePath, type OilGasLogo } from "@/lib/oil-gas-cases";

/** Client logos already on the site, shown on a plate over each card's work visual. */
const COVENANT_LOGO: OilGasLogo = { src: "/client-logos/covenant-desk.png", width: 1855, height: 427, alt: "Covenant Desk" };
const EVDEV_LOGO: OilGasLogo = { src: "/client-logos/evdev.svg", width: 96, height: 19, alt: "EVDEV" };
const GRAND_FINANCE_LOGO: OilGasLogo = { src: "/client-logos/grandfg-transparent.png", width: 266, height: 62, alt: "Grand Finance Group" };

/** Screens from the demo films, for the "how the work looks" gallery on project pages. */
const AGRO_GALLERY = [
  { src: "/images/cases/agroplatforma-1.jpg", alt: "One mobile app with three AI agents" },
  { src: "/images/cases/agroplatforma-2.jpg", alt: "A proposal generated and saved to Salesforce" },
  { src: "/images/cases/agroplatforma-3.jpg", alt: "Photo diagnosis of a crop disease with matching products" },
  { src: "/images/cases/agroplatforma-4.jpg", alt: "The AI agronomist answering a field question" },
];
// Borrower names, loan IDs and lender labels are blurred in the two record screens.
const PORTAL_GALLERY = [
  { src: "/images/cases/grand-finance.jpg", alt: "The credit workflow reduced to one click" },
  { src: "/images/cases/kk-credit.jpg", alt: "Inbound email parsed by AI into the portal" },
  { src: "/images/cases/every-success-credit.jpg", alt: "AI risk analysis of a borrower, with personal data blurred" },
  { src: "/images/cases/wah-wei-credit.jpg", alt: "The six AI layers of the portal" },
];

/** Presentation metadata only. Full project copy remains in the English dictionary. */
export const PRODUCTION_CASES = [
  { number: "01", slug: "agroplatforma", company: "AgroPlatforma", industry: "Agriculture", services: ["AI/ML engineering", "Digital product engineering", "Enterprise platforms"], image: "/images/cases/agroplatforma.jpg", imageAlt: "AgroPlatforma field diagnostics and quotation workflow", video: "/deview-agroplatforma-demo.mp4", logo: undefined, gallery: AGRO_GALLERY },
  { number: "02", slug: "covenant-desk", company: "Covenant Desk", industry: "Finance", services: ["Digital product engineering", "AI/ML engineering"], image: "/images/cases/covenant-desk.jpg", imageAlt: "Covenant Desk AI assistant connected to live lending data", video: "/deview-unified-portal-demo.mp4", logo: COVENANT_LOGO, gallery: PORTAL_GALLERY },
  { number: "03", slug: "senior-care-documentation", company: "Swiss senior-care provider", industry: "Senior care", services: ["AI/ML engineering"], image: "/images/stock/desk-phone-800.webp", imageAlt: "Handwritten care notes in a notebook", video: undefined, logo: undefined, gallery: undefined },
  { number: "04", slug: "storepilot", company: "EVDEV · StorePilot", industry: "E-commerce", services: ["AI/ML engineering", "Data engineering", "Digital product engineering"], image: "/images/stock/laptop-analytics-1200.webp", imageAlt: "Analytics on a laptop", video: undefined, logo: EVDEV_LOGO, gallery: undefined },
] as const;

/** Loan management systems built for five Hong Kong lenders, the tenants of the Covenant Desk portal. */
export const LENDING_PROJECTS = [
  { slug: "grand-finance", name: "Grand Finance", nameZh: "高昇財務", image: "/images/cases/grand-finance.jpg", imageAlt: "Grand Finance credit workflow in the lending portal", logo: GRAND_FINANCE_LOGO },
  { slug: "kk-credit", name: "KK Credit", nameZh: "KK信貸", image: "/images/cases/kk-credit.jpg", imageAlt: "Inbound email parsed by AI into the lending portal" },
  { slug: "wah-wei-credit", name: "Wah Wei Credit", nameZh: "華威信貸", image: "/images/cases/wah-wei-credit.jpg", imageAlt: "The AI layers of the lending portal" },
  { slug: "every-success-credit", name: "Every Success Credit", nameZh: "萬成信貸", image: "/images/cases/every-success-credit.jpg", imageAlt: "AI risk analysis in the loan management system, personal data blurred" },
  { slug: "rich-eagle-capital", name: "Rich Eagle Capital", nameZh: "", image: "/images/cases/rich-eagle-capital.jpg", imageAlt: "The AI assistant reviewing a loan file, personal data blurred" },
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
    image: lender.image,
    imageAlt: lender.imageAlt,
    logo: "logo" in lender ? lender.logo : undefined,
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
    // Projects without a company logo get a planning picture instead of a bare name.
    image: project.logo ? undefined : "/images/stock/charts-print-800.webp",
    imageAlt: project.logo ? undefined : "Planning chart drawn on paper",
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
