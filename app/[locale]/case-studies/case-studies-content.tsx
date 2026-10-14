"use client";

import { Suspense, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ArrowUpRight, Search, X } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { en } from "@/lib/i18n/dict-en";
import { CASE_INDUSTRIES, CASE_LIBRARY, CASE_SERVICES } from "@/lib/case-studies";
import "./case-studies.css";

// Legacy industry anchors remain usable alongside the shareable query filters.
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

function CaseLibrary({ search, hash }: { search: string; hash: string }) {
  const params = new URLSearchParams(search);
  const query = params.get("q") ?? "";
  const requestedIndustry = params.get("industry") ?? legacyIndustries[hash] ?? "";
  const industry = CASE_INDUSTRIES.includes(requestedIndustry) ? requestedIndustry : "";
  const requestedService = params.get("service") ?? "";
  const service = CASE_SERVICES.includes(requestedService) ? requestedService : "";
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const filtered = CASE_LIBRARY.filter((c) => {
    const text = [c.company, c.industry, c.headline, c.searchText, ...c.services].join(" ").toLocaleLowerCase();
    return (!industry || c.industry === industry) && (!service || c.services.includes(service)) && terms.every((term) => text.includes(term));
  });
  const hasFilters = Boolean(query || industry || service);
  const d = en.caseStudiesPage;
  const credits = [...new Map(filtered.flatMap((c) => c.logo?.credit ? [[c.logo.src, c.logo.credit] as const] : [])).values()];

  function updateFilters(changes: { q?: string; industry?: string; service?: string }) {
    const next = new URL(window.location.href);
    const legacyIndustry = legacyIndustries[next.hash.slice(1)];
    if (!next.searchParams.has("industry") && legacyIndustry) {
      next.searchParams.set("industry", legacyIndustry);
    }
    for (const [key, value] of Object.entries(changes)) {
      if (value) next.searchParams.set(key, value);
      else next.searchParams.delete(key);
    }
    next.hash = "";
    window.history.replaceState(null, "", next.pathname + next.search);
  }

  function clearFilters() {
    updateFilters({ q: "", industry: "", service: "" });
  }

  return (
    <>
      <main className="case-library">
        <div className="section-gutter mx-auto max-w-6xl">
          <PageIntro label={d.sectionLabel} title={<>Good work.<br />Real impact.</>}>
            <p>Explore AI, software and data projects. The challenges, the systems, and the outcomes.</p>
            <a className="case-library-jump" href="#case-library-results">Find a project <ArrowDown size={17} aria-hidden="true" /></a>
          </PageIntro>
          <section aria-label="Browse case studies">
            <div className="case-library-filters">
              <div className="case-library-search">
                <label htmlFor="case-search">Search case studies</label>
                <div className="case-search-field">
                  <Search size={19} aria-hidden="true" />
                  <input id="case-search" type="search" placeholder="Company, project or keyword" value={query} onChange={(e) => updateFilters({ q: e.target.value })} aria-controls="case-library-results" />
                </div>
              </div>
              <div>
                <label htmlFor="case-industry">Industry</label>
                <select id="case-industry" value={industry} onChange={(e) => updateFilters({ industry: e.target.value })} aria-controls="case-library-results">
                  <option value="">All industries</option>
                  {CASE_INDUSTRIES.map((value) => <option key={value}>{value}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="case-service">Service</label>
                <select id="case-service" value={service} onChange={(e) => updateFilters({ service: e.target.value })} aria-controls="case-library-results">
                  <option value="">All services</option>
                  {CASE_SERVICES.map((value) => <option key={value}>{value}</option>)}
                </select>
              </div>
            </div>
            <div className="case-library-results-bar">
              <p role="status" aria-live="polite" aria-atomic="true"><strong>{filtered.length}</strong> {filtered.length === 1 ? "case study" : "case studies"}{hasFilters ? " found" : ` across ${CASE_INDUSTRIES.length} industries`}</p>
              {hasFilters ? <button type="button" className="case-clear" onClick={clearFilters}>Clear filters <X size={15} aria-hidden="true" /></button> : <span>Ideas put into practice.</span>}
            </div>
            <div id="case-library-results" className="case-library-grid">
              {filtered.map((c, i) => (
                <article className="case-library-card" key={c.id}>
                  <Link href={c.href} className="case-library-card-link">
                    <div className={`case-library-card-media ${c.year ? "case-library-card-media--portfolio" : ""}`}>
                      {c.image ? <Image src={c.image} alt={c.imageAlt ?? ""} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" loading={i < 3 ? "eager" : "lazy"} /> : c.logo ? <span className="case-library-logo-frame"><Image src={c.logo.src} alt={c.logo.alt} fill sizes="(max-width: 640px) 180px, 230px" /></span> : <span className="case-library-wordmark">{c.company}</span>}
                      {c.year ? <span className="case-library-year">Project archive · {c.year}</span> : null}
                      <span className="case-library-card-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
                    </div>
                    <div className="case-library-card-body">
                      <p className="case-library-company">{c.company}</p>
                      <h2>{c.headline}</h2>
                      <div className="case-library-tags"><span>{c.industry}</span><span>{service || c.services[0]}</span></div>
                      <span className="case-library-read">View case study <ArrowUpRight size={16} aria-hidden="true" /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            {filtered.length === 0 ? <div className="case-library-empty"><Search size={30} aria-hidden="true" /><h2>No matching case studies.</h2><p>Try another keyword or clear your filters to explore all projects.</p><button type="button" className="btn-outline" onClick={clearFilters}>Show all case studies</button></div> : null}
            {credits.length > 0 ? <p className="case-library-credits">{credits.map((credit) => <a key={credit.href} href={credit.href}>{credit.text}</a>)}</p> : null}
          </section>
          <section className="case-library-cta" aria-labelledby="case-cta-title">
            <div><p className="page-kicker">{d.ctaLabel}</p><h2 id="case-cta-title">Your next challenge.<br />Our next case study.</h2><p>{d.ctaBody}</p></div>
            <Link href="/en/contact" className="btn-outline">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
