"use client";

import { Suspense, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ArrowUpRight, Search, X } from "lucide-react";
import { SilentCaseVideo } from "@/components/SilentCaseVideo";
import { SiteFooter } from "@/components/SiteFooter";
import { CASE_INDUSTRIES, CASE_LIBRARY, CASE_SERVICES } from "@/lib/case-studies";
import "./case-studies.css";

type FeaturedCase = {
  number: string;
  label: string;
  title: React.ReactNode;
  description: string;
  video: string;
  poster: string;
  location: string;
  company: string;
  caption: string;
  href: string;
  linkLabel: string;
  tone: "gold" | "ink" | "paper";
  pillars: ReadonlyArray<{ number: string; label: string; title: string; body: string; proof: string }>;
};

const FEATURED_CASES: ReadonlyArray<FeaturedCase> = [
  {
    number: "01",
    label: "Jetfans inquiry operations",
    title: <>Inquiries in.<br />Structured work out.</>,
    description: "Jetfans brings technical inquiries, supporting documents and follow-up into one internal operating system for its teams across Central Asia and Eastern Europe.",
    video: "/video/cases/jetfans-ocr-crm.mp4",
    poster: "/images/cases/video-posters/jetfans-ocr-crm.jpg",
    location: "Central Asia + Eastern Europe / Operations",
    company: "Jetfans",
    caption: "Technical inquiries and source documents become one traceable operational record.",
    href: "/en/case-studies/jetfans",
    linkLabel: "Read the case",
    tone: "gold",
    pillars: [
      { number: "01", label: "Intake", title: "Automated Inquiry Capture", body: "Incoming technical inquiries enter a consistent process with their source, contact and regional context intact.", proof: "Inquiry → owned record → next action" },
      { number: "02", label: "Document intelligence", title: "OCR Management Workspace", body: "Supporting files are extracted into structured fields, then held for operational review rather than lost inside inbox threads.", proof: "Document → extracted data → review" },
      { number: "03", label: "Customer operations", title: "Purpose-Built Internal CRM", body: "A custom CRM keeps account, inquiry and follow-up history together around the way Jetfans teams actually work.", proof: "Account → inquiry history → follow-up" },
      { number: "04", label: "Regional flow", title: "Market-Aware Work Routing", body: "The same governed inquiry process supports teams working across Central Asia and Eastern Europe while preserving clear ownership.", proof: "Region → responsible team → response" },
    ],
  },
  {
    number: "02",
    label: "Deview DOF",
    title: <>One operating picture.<br />No loose ends.</>,
    description: "Deview DOF connects the plan, the engineering record and daily field reality without weakening the data boundary around critical operations.",
    video: "/video/cases/enerquest-dof.mp4",
    poster: "/images/cases/video-posters/enerquest-dof.jpg",
    location: "Nigeria / Pilot",
    company: "EnerQuest Energy",
    caption: "Production, equipment and exceptions in one upstream operating view.",
    href: "/en/case-studies/enerquest",
    linkLabel: "Read the pilot",
    tone: "ink",
    pillars: [
      { number: "01", label: "Controls", title: "Capital Project Controls & Scheduling", body: "A governed schedule, actuals and exceptions across the capital portfolio, with Primavera P6 and SAP PM synchronisation where the environment requires it.", proof: "Planning → actuals → management action" },
      { number: "02", label: "Engineering intelligence", title: "Engineering Data & Drawing RAG", body: "Source-grounded retrieval across P&IDs, isometric drawings and technical records, with ASME and API context preserved for expert review.", proof: "Question → cited source → human review" },
      { number: "03", label: "Field operations", title: "Daily Drilling & Field Production", body: "Automated DDR parsing, production telemetry and exception handling assembled into one operating picture from field to management.", proof: "Field event → structured record → decision" },
      { number: "04", label: "Sovereignty", title: "On-Premise & Air-Gapped Security", body: "Private infrastructure, sovereign VPC or air-gapped deployment patterns designed for zero cloud leakage and controlled model access.", proof: "Your environment → your data boundary" },
    ],
  },
  {
    number: "03",
    label: "Grand Finance lending operations",
    title: <>Every borrower.<br />One governed record.</>,
    description: "Grand Finance connects borrower intake, document review, credit decisions and servicing in a loan management workflow designed around lender rules and human authority.",
    video: "/video/cases/grand-finance-lending.mp4",
    poster: "/images/cases/video-posters/grand-finance-lending.jpg",
    location: "Hong Kong / Live deployment",
    company: "Grand Finance 高昇財務",
    caption: "The lending lifecycle, from first application to an auditable decision and servicing record.",
    href: "/en/industries/lending#grand-finance",
    linkLabel: "See the deployment",
    tone: "paper",
    pillars: [
      { number: "01", label: "Borrower intake", title: "One Application Record", body: "Borrower details, applications and supporting context enter one structured record instead of separate hand-offs.", proof: "Application → complete borrower file" },
      { number: "02", label: "Document operations", title: "AI Document & Email Intake", body: "Inbound documents and email attachments are classified and extracted into the workflow for controlled review.", proof: "Inbox → extracted fields → verification" },
      { number: "03", label: "Credit workflow", title: "Decisioning With Human Authority", body: "Policy checks, the complete credit picture and the final human decision sit together with a clear trail.", proof: "Evidence → rules → recorded decision" },
      { number: "04", label: "Servicing", title: "Repayments, Roles & Audit", body: "Servicing activity, permissioned access and operating history remain connected after origination.", proof: "Decision → servicing → accountable history" },
    ],
  },
];

const FEATURED_IDS = new Set(["jetfans", "enerquest", "lms-grand-finance"]);
const SECONDARY_CASES = CASE_LIBRARY.filter((entry) => !FEATURED_IDS.has(entry.id));

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}
const getLocation = () => window.location.hash;
const getServerLocation = () => "";
const legacyIndustries: Record<string, string> = {
  agriculture: "Agriculture", finance: "Finance", "senior-care": "Senior care",
  "e-commerce": "E-commerce", "oil-and-gas": "Oil & gas",
};

export function CaseStudiesContent() {
  return <Suspense fallback={<CaseLibrary search="" hash="" />}><CaseStudiesBrowser /></Suspense>;
}

function CaseStudiesBrowser() {
  const searchParams = useSearchParams();
  const hash = useSyncExternalStore(subscribeToLocation, getLocation, getServerLocation);
  return <CaseLibrary search={searchParams.toString()} hash={hash.slice(1)} />;
}

function FeaturedCaseChapter({ project, index }: { project: FeaturedCase; index: number }) {
  return (
    <article className="featured-case" data-tone={project.tone} aria-labelledby={`featured-case-${project.number}`}>
      <div className="featured-case-shell">
        <header className="featured-case-lead">
          <div><p className="featured-case-kicker"><span>{project.number}</span>{project.label}</p><h2 id={`featured-case-${project.number}`}>{project.title}</h2></div>
          <p>{project.description}</p>
        </header>
        <div className="featured-case-film" data-reverse={index === 1 ? "true" : undefined}>
          <SilentCaseVideo src={project.video} poster={project.poster} className="featured-case-video" />
          <div className="featured-case-caption"><span>{project.location}</span><strong>{project.company}</strong><p>{project.caption}</p><Link href={project.href}>{project.linkLabel}<span aria-hidden="true">↗</span></Link></div>
        </div>
        <ol className="featured-case-pillars">
          {project.pillars.map((pillar) => <li key={pillar.number}><div className="featured-case-pillar-top"><span>{pillar.number}</span><em>{pillar.label}</em></div><h3>{pillar.title}</h3><p>{pillar.body}</p><small>{pillar.proof}</small></li>)}
        </ol>
      </div>
    </article>
  );
}

function CaseLibrary({ search, hash }: { search: string; hash: string }) {
  const params = new URLSearchParams(search);
  const query = params.get("q") ?? "";
  const requestedIndustry = params.get("industry") ?? legacyIndustries[hash] ?? "";
  const industry = CASE_INDUSTRIES.includes(requestedIndustry) ? requestedIndustry : "";
  const requestedService = params.get("service") ?? "";
  const service = CASE_SERVICES.includes(requestedService) ? requestedService : "";
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const filtered = SECONDARY_CASES.filter((c) => {
    const text = [c.company, c.industry, c.headline, c.searchText, ...c.services].join(" ").toLocaleLowerCase();
    return (!industry || c.industry === industry) && (!service || c.services.includes(service)) && terms.every((term) => text.includes(term));
  });
  const hasFilters = Boolean(query || industry || service);
  const credits = [...new Map(filtered.flatMap((c) => c.logo?.credit ? [[c.logo.src, c.logo.credit] as const] : [])).values()];

  function updateFilters(changes: { q?: string; industry?: string; service?: string }) {
    const next = new URL(window.location.href);
    const legacyIndustry = legacyIndustries[next.hash.slice(1)];
    if (!next.searchParams.has("industry") && legacyIndustry) next.searchParams.set("industry", legacyIndustry);
    for (const [key, value] of Object.entries(changes)) {
      if (value) next.searchParams.set(key, value); else next.searchParams.delete(key);
    }
    next.hash = "";
    window.history.replaceState(null, "", next.pathname + next.search);
  }

  function clearFilters() { updateFilters({ q: "", industry: "", service: "" }); }

  return (
    <>
      <main className="case-library">
        <header className="case-library-hero">
          <div className="case-library-hero-shell">
            <p className="featured-case-kicker"><span>Selected work</span>Systems in the real world</p>
            <div className="case-library-hero-grid"><h1>Built work.<br />Not theatre.</h1><div><p>Three operating systems, seen up close. Then the wider record of what we have delivered across industries.</p><a href="#featured-work">Watch the work <ArrowDown size={17} aria-hidden="true" /></a></div></div>
          </div>
        </header>

        <section id="featured-work" className="case-library-featured" aria-label="Featured case studies">
          {FEATURED_CASES.map((project, index) => <FeaturedCaseChapter key={project.number} project={project} index={index} />)}
        </section>

        <section className="case-library-archive" aria-labelledby="case-library-archive-title">
          <div className="case-library-archive-shell">
            <header className="case-library-archive-heading"><p className="featured-case-kicker"><span>04</span>More work</p><div><h2 id="case-library-archive-title">The wider project record.</h2><p>Filter the archive by industry, capability or the problem you are trying to solve.</p></div></header>
            <div className="case-library-filters">
              <div className="case-library-search"><label htmlFor="case-search">Search case studies</label><div className="case-search-field"><Search size={19} aria-hidden="true" /><input id="case-search" type="search" placeholder="Company, project or keyword" value={query} onChange={(e) => updateFilters({ q: e.target.value })} aria-controls="case-library-results" /></div></div>
              <div><label htmlFor="case-industry">Industry</label><select id="case-industry" value={industry} onChange={(e) => updateFilters({ industry: e.target.value })} aria-controls="case-library-results"><option value="">All industries</option>{CASE_INDUSTRIES.map((value) => <option key={value}>{value}</option>)}</select></div>
              <div><label htmlFor="case-service">Service</label><select id="case-service" value={service} onChange={(e) => updateFilters({ service: e.target.value })} aria-controls="case-library-results"><option value="">All services</option>{CASE_SERVICES.map((value) => <option key={value}>{value}</option>)}</select></div>
            </div>
            <div className="case-library-results-bar"><p role="status" aria-live="polite" aria-atomic="true"><strong>{filtered.length}</strong> {filtered.length === 1 ? "case study" : "case studies"}{hasFilters ? " found" : " beyond the featured work"}</p>{hasFilters ? <button type="button" className="case-clear" onClick={clearFilters}>Clear filters <X size={15} aria-hidden="true" /></button> : <span>Ideas put into practice.</span>}</div>
            <div id="case-library-results" className="case-library-grid">
              {filtered.map((c, i) => <article className="case-library-card" key={c.id}><Link href={c.href} className="case-library-card-link"><div className="case-library-card-media case-split"><span className="case-split-logo">{c.logo ? <><Image src={c.logo.src} alt={c.logo.alt} width={c.logo.width} height={c.logo.height} unoptimized style={c.logo.width < 80 ? { maxWidth: c.logo.width * 1.4, maxHeight: c.logo.height * 1.4 } : undefined} />{c.logo.width < 80 ? <span className="case-split-name" aria-hidden="true">{c.company}</span> : null}</> : <span className="case-split-name">{c.company}</span>}{c.year ? <span className="case-library-year">Project archive · {c.year}</span> : null}</span>{c.image ? <span className="case-split-art"><Image src={c.image.replace("/covers/", "/covers/half/")} alt={c.imageAlt ?? ""} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 25vw, 17vw" loading={i < 3 ? "eager" : "lazy"} /></span> : null}<span className="case-library-card-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span></div><div className="case-library-card-body"><p className="case-library-company">{c.company}</p><h3>{c.headline}</h3><div className="case-library-tags"><span>{c.industry}</span><span>{service || c.services[0]}</span></div><span className="case-library-read">View case study <ArrowUpRight size={16} aria-hidden="true" /></span></div></Link></article>)}
            </div>
            {filtered.length === 0 ? <div className="case-library-empty"><Search size={30} aria-hidden="true" /><h2>No matching case studies.</h2><p>Try another keyword or clear your filters to explore the project archive.</p><button type="button" className="btn-outline" onClick={clearFilters}>Show all case studies</button></div> : null}
            {credits.length > 0 ? <p className="case-library-credits">{credits.map((credit) => <a key={credit.href} href={credit.href}>{credit.text}</a>)}</p> : null}
            <section className="case-library-cta" aria-labelledby="case-cta-title"><div><p className="featured-case-kicker"><span>Next</span>Your operating gap</p><h2 id="case-cta-title">Your next challenge.<br />Our next case study.</h2><p>Bring us the process that is still held together by spreadsheets, inboxes and manual reporting.</p></div><Link href="/en/contact" className="btn-outline">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link></section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
