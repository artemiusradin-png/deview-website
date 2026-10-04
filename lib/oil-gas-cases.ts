/**
 * Oil & gas project portfolio: one entry per project page.
 *
 * Every fact here (company, year, type of work, scope) comes from the portfolio the user
 * supplied. `context` and `today` are general explanations of the kind of system, not
 * claims about results. Do not add outcomes, metrics, locations or technology that the
 * portfolio does not state, and do not state that DeView worked with these companies:
 * describe the projects, not a relationship.
 */
export const OIL_GAS_CASE_SLUGS = [
  "gazprom-neft-project-scheduling-control-system",
  "tomskneft-project-management-system",
  "lukoil-engineering-engineering-data-management-system",
  "joc-vietgazprom-planning-control-system",
  "gazprom-international-planning-control-system",
  "gazprom-international-management-reporting-analytics-portal",
] as const;

export type OilGasCaseSlug = (typeof OIL_GAS_CASE_SLUGS)[number];

export type OilGasLogo = {
  src: string;
  /** Intrinsic size of the file, so the browser reserves the right space before it loads. */
  width: number;
  height: number;
  alt: string;
  /** Attribution the file's licence requires (CC BY); shown under the case cards. */
  credit?: { text: string; href: string };
};

/** Company logos from Wikimedia Commons. Lukoil-Engineering uses its parent group's Lukoil mark. */
const LOGOS = {
  gazpromNeft: { src: "/client-logos/oil-gas/gazprom-neft.png", width: 878, height: 433, alt: "Gazprom Neft logo" },
  tomskneft: { src: "/client-logos/oil-gas/tomskneft.png", width: 138, height: 83, alt: "Tomskneft logo" },
  lukoil: { src: "/client-logos/oil-gas/lukoil.svg", width: 157, height: 32, alt: "Lukoil logo" },
  gazpromInternational: {
    src: "/client-logos/oil-gas/gazprom-international.png",
    width: 203,
    height: 100,
    alt: "Gazprom International logo",
    credit: {
      text: "Gazprom International logo: Wikimedia Commons, CC BY 3.0",
      href: "https://commons.wikimedia.org/wiki/File:GInt_Blue.png",
    },
  },
} satisfies Record<string, OilGasLogo>;

export type OilGasCase = {
  slug: OilGasCaseSlug;
  year: number;
  company: string;
  /** Company logo; when absent, cards show the company name in its place. */
  logo?: OilGasLogo;
  /**
   * Where the project was delivered, only when the portfolio gives a non-Russian place.
   * Russian projects deliberately carry no location line; never label them "Worldwide".
   */
  location?: string;
  /** Company department or entity type, when the portfolio names one (shown as an extra fact). */
  companyNote?: { label: string; value: string };
  /** Project name as it appears in headings and links. */
  project: string;
  workType: string;
  discipline: string;
  /** One-sentence description of the project; used as the page lede and hub summary. */
  summary: string;
  /** Modules or areas the portfolio lists for the project. */
  scope?: string[];
  /** General explanation of this kind of system (not a claim about this company's results). */
  context: string;
  /** What DeView builds in this discipline today (a statement about current services, not about the project). */
  today: string;
  seoTitle: string;
  seoDescription: string;
};

export const OIL_GAS_CASES: Record<OilGasCaseSlug, OilGasCase> = {
  "gazprom-neft-project-scheduling-control-system": {
    slug: "gazprom-neft-project-scheduling-control-system",
    year: 2010,
    company: "Gazprom Neft",
    logo: LOGOS.gazpromNeft,
    companyNote: { label: "Unit", value: "Exploration and Production department" },
    project: "Project Scheduling and Control System",
    workType: "Development and implementation",
    discipline: "Project scheduling and control",
    summary:
      "Development and implementation of a system for scheduling and control of projects for the Exploration and Production department of Gazprom Neft.",
    context:
      "Exploration and production work runs as a portfolio of projects with long lead times and many dependencies. A scheduling and control system holds the plan for each project in one managed structure, so progress can be compared with plan in the same way across projects and reviewed at department level.",
    today:
      "For operations teams today, DeView builds this as custom software and data engineering: bring project data from separate files into one governed record, and give managers a plan to compare progress against.",
    seoTitle: "Gazprom Neft Project Scheduling & Control System | DeView",
    seoDescription:
      "Project scheduling and control system for Gazprom Neft's Exploration and Production department, developed and implemented in 2010.",
  },
  "tomskneft-project-management-system": {
    slug: "tomskneft-project-management-system",
    year: 2013,
    company: "Tomskneft",
    logo: LOGOS.tomskneft,
    project: "Project Management System",
    workType: "Development",
    discipline: "Project management",
    summary: "Development of a project management system for Tomskneft.",
    context:
      "A project management system gives a company a common method for initiating, planning, tracking and reporting its projects. Teams work in the same structure, which makes the status of one project comparable with the next.",
    today:
      "At DeView we build this kind of internal platform as custom software: a tool shaped around the way a team already runs its projects, connected to the systems it already uses.",
    seoTitle: "Tomskneft Project Management System | DeView",
    seoDescription:
      "Development of a project management system for Tomskneft (2013): an oil & gas project case study.",
  },
  "lukoil-engineering-engineering-data-management-system": {
    slug: "lukoil-engineering-engineering-data-management-system",
    year: 2013,
    company: "Lukoil-Engineering",
    logo: LOGOS.lukoil,
    project: "Engineering Data Management System (Pilot)",
    workType: "Pilot implementation",
    discipline: "Engineering data management",
    summary:
      "Pilot implementation of a system for managing engineering data for Lukoil-Engineering.",
    context:
      "Engineering projects produce large volumes of technical documents and data: drawings, specifications, calculations and their revisions. An engineering data management system keeps them organised and versioned in one place so project teams work from the same, current information. A pilot implementation applies the approach to a limited scope first.",
    today:
      "DeView's data engineering practice covers this today: organising documents and records so that teams, and AI assistants working on those records, can find what they need with the source attached.",
    seoTitle: "Lukoil-Engineering Engineering Data Management Pilot | DeView",
    seoDescription:
      "Pilot implementation of an engineering data management system for Lukoil-Engineering (2013): an oil & gas project case study.",
  },
  "joc-vietgazprom-planning-control-system": {
    slug: "joc-vietgazprom-planning-control-system",
    year: 2016,
    company: "JOC Vietgazprom",
    companyNote: { label: "Company type", value: "Joint operating company" },
    project: "Planning and Control System",
    workType: "Development and implementation",
    discipline: "Planning and control",
    location: "Hanoi, Vietnam",
    summary:
      "Development and implementation of a system of planning and control for JOC Vietgazprom in Hanoi, Vietnam.",
    context:
      "A planning and control system connects an organisation's plans with the progress actually made, so management can see where work is on plan and where it is not.",
    today:
      "DeView builds planning and control tools for operations teams: define the plan once, collect actuals from the systems that already hold them, and show the gap.",
    seoTitle: "JOC Vietgazprom Planning & Control System | DeView",
    seoDescription:
      "Development and implementation of a planning and control system for JOC Vietgazprom (Hanoi, Vietnam, 2016): an oil & gas project case study.",
  },
  "gazprom-international-planning-control-system": {
    slug: "gazprom-international-planning-control-system",
    year: 2018,
    company: "Gazprom International",
    logo: LOGOS.gazpromInternational,
    project: "Planning and Control System for All Assets",
    workType: "Development and implementation",
    discipline: "Planning and control",
    summary:
      "Development and implementation of the planning and control system for all of Gazprom International's assets.",
    context:
      "A planning and control system that covers all of a company's assets applies one planning method across the portfolio. Assets can then be compared on the same basis, and management sees the whole portfolio rather than one asset at a time.",
    today:
      "In data engineering, DeView applies this principle: standardise how information is captured at each site or system, then consolidate it so decisions rest on the whole picture.",
    seoTitle: "Gazprom International Planning & Control System | DeView",
    seoDescription:
      "Planning and control system for all assets, developed and implemented for Gazprom International (2018): an oil & gas project case study.",
  },
  "gazprom-international-management-reporting-analytics-portal": {
    slug: "gazprom-international-management-reporting-analytics-portal",
    year: 2020,
    company: "Gazprom International",
    logo: LOGOS.gazpromInternational,
    project: "Management Reporting and Analytics Portal",
    workType: "Development",
    discipline: "Management reporting and analytics",
    summary:
      "Development of an interactive reporting and analytics portal for the management of Gazprom International.",
    scope: [
      "Production and reserves",
      "Budgets",
      "Projects and portfolio financial modelling",
      "Project scheduling",
    ],
    context:
      "A management reporting and analytics portal brings figures from several functions into one interactive view. Here that meant production and reserves, budgets, project and portfolio financial modelling, and project scheduling in a single portal for management.",
    today:
      "Reporting and BI are a core part of DeView's data engineering work: connect the underlying systems, model the figures once, and give managers interactive views they can explore themselves.",
    seoTitle: "Gazprom International Reporting & Analytics Portal | DeView",
    seoDescription:
      "Interactive management reporting and analytics portal for Gazprom International (2020): production and reserves, budgets, portfolio modelling and scheduling.",
  },
};

export const OIL_GAS_CASE_LIST: OilGasCase[] = OIL_GAS_CASE_SLUGS.map((slug) => OIL_GAS_CASES[slug]);

/** Same projects, most recent first (projects from the same year keep their list order). */
export const OIL_GAS_CASES_NEWEST_FIRST: OilGasCase[] = [...OIL_GAS_CASE_LIST].sort((a, b) => b.year - a.year);

export function isOilGasCaseSlug(value: string): value is OilGasCaseSlug {
  return (OIL_GAS_CASE_SLUGS as readonly string[]).includes(value);
}

export const OIL_GAS_HUB_PATH = "/en/industries/oil-and-gas";

export function oilGasCasePath(slug: OilGasCaseSlug): string {
  return `${OIL_GAS_HUB_PATH}/${slug}`;
}


/** Date the oil & gas pages were added; used for sitemap lastModified. */
export const OIL_GAS_PAGES_UPDATED = "2026-10-02";
