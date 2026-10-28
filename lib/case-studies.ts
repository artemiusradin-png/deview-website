import { en } from "@/lib/i18n/dict-en";
import { OIL_GAS_CASES_NEWEST_FIRST, oilGasCasePath, type OilGasLogo } from "@/lib/oil-gas-cases";

/** Client logos already on the site, shown on a plate over each card's work visual. */
const COVENANT_LOGO: OilGasLogo = { src: "/client-logos/covenant-desk.png", width: 1855, height: 427, alt: "Covenant Desk" };
const STOREPILOT_LOGO: OilGasLogo = { src: "/client-logos/storepilot.svg", width: 168, height: 32, alt: "StorePilot AI" };
const AGRO_ARENA_LOGO: OilGasLogo = { src: "/client-logos/agro-arena.svg", width: 144, height: 48, alt: "Agro Arena" };
const GRAND_FINANCE_LOGO: OilGasLogo = { src: "/client-logos/grand-finance.png", width: 149, height: 47, alt: "Grand Finance" };
const JETFANS_LOGO: OilGasLogo = { src: "/client-logos/jetfans-eu.png", width: 181, height: 242, alt: "Jetfans" };
const NEXTAIR_LOGO: OilGasLogo = { src: "/client-logos/nextair.png", width: 50, height: 48, alt: "Nextair" };
const ENERQUEST_LOGO: OilGasLogo = { src: "/client-logos/enerquest.png", width: 383, height: 91, alt: "EnerQuest Energy" };
const FIZKULTURA_LOGO: OilGasLogo = { src: "/client-logos/fizkultura.png", width: 118, height: 79, alt: "Fizkultura" };
const SIIMPLYTRADE_LOGO: OilGasLogo = { src: "/client-logos/siimplytrade.png", width: 997, height: 187, alt: "SiimplyTrade" };

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
  { number: "01", slug: "agroplatforma", company: "AgroPlatforma", industry: "Agriculture", services: ["AI/ML engineering", "Digital product engineering", "Enterprise platforms"], image: "/images/cases/covers/agroplatforma.webp", imageAlt: "Drawing: a field photo, the AI app and a quote", video: "/deview-agroplatforma-demo.mp4", logo: AGRO_ARENA_LOGO, gallery: AGRO_GALLERY },
  { number: "02", slug: "covenant-desk", company: "Covenant Desk", industry: "Finance", services: ["Digital product engineering", "AI/ML engineering"], image: "/images/cases/covers/covenant-desk.webp", imageAlt: "Drawing: borrower operations feeding one governed portal", video: "/deview-unified-portal-demo.mp4", logo: COVENANT_LOGO, gallery: PORTAL_GALLERY },
  { number: "03", slug: "senior-care-documentation", company: "Swiss senior-care provider", industry: "Senior care", services: ["AI/ML engineering"], image: "/images/cases/covers/senior-care-documentation.webp", imageAlt: "Drawing: bilingual care notes and a compliance checklist", video: undefined, logo: undefined, gallery: undefined },
  { number: "04", slug: "storepilot", company: "EVDEV · StorePilot", industry: "E-commerce", services: ["AI/ML engineering", "Data engineering", "Digital product engineering"], image: "/images/cases/covers/storepilot.webp", imageAlt: "Drawing: an A/B test where variant B wins", video: undefined, logo: STOREPILOT_LOGO, gallery: undefined },
  { number: "05", slug: "jetfans", company: "Jetfans", industry: "Ventilation & HVAC", services: ["AI/ML engineering", "Digital product engineering", "Enterprise platforms"], image: "/images/cases/video-posters/jetfans-ocr-crm.jpg", imageAlt: "Jetfans and Deview inside an underground car park", video: "/video/cases/jetfans-ocr-crm.mp4", logo: JETFANS_LOGO, gallery: undefined },
  { number: "06", slug: "nextair", company: "Nextair", industry: "Ventilation & HVAC", services: ["Digital product engineering"], image: "/images/cases/covers/nextair.webp", imageAlt: "Drawing: an apartment building with one ventilation shaft", video: undefined, logo: NEXTAIR_LOGO, gallery: undefined },
  { number: "07", slug: "fizkultura", company: "Fizkultura", industry: "Fitness", services: ["Data engineering", "AI/ML engineering"], image: "/images/cases/covers/fizkultura.webp", imageAlt: "Drawing: four data sources feeding one weekly report", video: undefined, logo: FIZKULTURA_LOGO, gallery: undefined },
  { number: "08", slug: "enerquest", company: "EnerQuest Energy", industry: "Oil & gas", services: ["AI/ML engineering", "Data engineering", "Enterprise platforms"], image: "/images/cases/video-posters/enerquest-dof.jpg", imageAlt: "EnerQuest oil field at sunrise", video: "/video/cases/enerquest-dof.mp4", logo: ENERQUEST_LOGO, gallery: undefined },
  { number: "09", slug: "siimplytrade", company: "SiimplyTrade", industry: "Finance", services: ["Digital product engineering"], image: "/images/cases/covers/siimplytrade.webp", imageAlt: "Drawing: mobile savings, trading and investing in one fintech app", video: undefined, logo: SIIMPLYTRADE_LOGO, gallery: undefined },
] as const;

/** Loan management systems built for five Hong Kong lenders, the tenants of the Covenant Desk portal. */
export const LENDING_PROJECTS = [
  { slug: "grand-finance", name: "Grand Finance", nameZh: "高昇財務", image: "/images/cases/covers/lms-grand-finance.webp", imageAlt: "Drawing: a loan application, checked and approved", logo: GRAND_FINANCE_LOGO },
  { slug: "kk-credit", name: "KK Credit", nameZh: "KK信貸", image: "/images/cases/covers/lms-kk-credit.webp", imageAlt: "Drawing: a repayment schedule with the next due date" },
  { slug: "wah-wei-credit", name: "Wah Wei Credit", nameZh: "華威信貸", image: "/images/cases/covers/lms-wah-wei-credit.webp", imageAlt: "Drawing: a borrower profile with a risk score" },
  { slug: "every-success-credit", name: "Every Success Credit", nameZh: "萬成信貸", image: "/images/cases/covers/lms-every-success-credit.webp", imageAlt: "Drawing: a loan portfolio report" },
  { slug: "rich-eagle-capital", name: "Rich Eagle Capital", nameZh: "", image: "/images/cases/covers/lms-rich-eagle-capital.webp", imageAlt: "Drawing: a loan ledger with one account highlighted" },
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

/** The order the library shows first; every other project follows in its usual order. */
const LIBRARY_ORDER = [
  "storepilot",
  "jetfans",
  "nextair",
  "fizkultura",
  "enerquest",
  "lms-grand-finance",
  "gazprom-international-management-reporting-analytics-portal",
  "agroplatforma",
  "covenant-desk",
  "senior-care-documentation",
];
const libraryRank = (id: string) => {
  const rank = LIBRARY_ORDER.indexOf(id);
  return rank === -1 ? LIBRARY_ORDER.length : rank;
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
    image: `/images/cases/covers/${project.slug}.webp`,
    imageAlt: `Drawing: ${project.project.toLowerCase()}`,
    year: project.year,
  })),
].sort((a, b) => libraryRank(a.id) - libraryRank(b.id));

export const CASE_INDUSTRIES = [...new Set(CASE_LIBRARY.map((c) => c.industry))].sort();
export const CASE_SERVICES = [...new Set(CASE_LIBRARY.flatMap((c) => [...c.services]))].sort();

export function getProductionCase(slug: string) {
  const project = PRODUCTION_CASES.find((c) => c.slug === slug);
  if (!project) return undefined;
  const content = en.caseStudiesPage.cases.find((c) => c.number === project.number);
  return content ? { ...project, content } : undefined;
}
