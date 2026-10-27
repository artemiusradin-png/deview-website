"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleLink } from "@/components/LocaleLink";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LENDING_PROJECTS } from "@/lib/case-studies";

/** Links to the lending resources and the bank-side lending systems under /solutions. */
const LENDING_LINKS = [
  {
    label: "Loan management system checklist",
    note: "Eight core modules a Hong Kong lending system has to cover, free.",
    href: "/resources/loan-management-system-checklist",
  },
  {
    label: "10 AI use cases for lending companies",
    note: "Ten workflows rated by impact, complexity, and operational risk.",
    href: "/resources/ai-guide-lending",
  },
  {
    label: "SME loan management system for banks",
    note: "Intake, credit, collateral, servicing, and reporting next to core banking.",
    href: "/solutions/sme-loan-management-system-for-banks",
  },
  {
    label: "Credit approval workflow software",
    note: "Authority matrix, multi-stage routing, escalation, and audit decision logs.",
    href: "/solutions/credit-approval-workflow-software",
  },
  {
    label: "Digital SME loan application portal",
    note: "Guided applications, document upload, e-signature, and live tracking.",
    href: "/solutions/digital-sme-loan-application-portal",
  },
  {
    label: "AI credit scoring for SME lending",
    note: "Cash-flow risk models with reason codes, governance, and monitoring.",
    href: "/solutions/ai-credit-scoring-for-sme-lending",
  },
];

/** Production workflow screens from the deployed system gallery. */
const PORTAL_SCREENS = [
  {
    src: "/images/cases/grand-finance.jpg",
    title: "One-Click Credit Decisioning",
    caption: "Credit evaluation pipeline with rule-based scoring, lender policy checks, and automated committee routing.",
  },
  {
    src: "/images/cases/kk-credit.jpg",
    title: "AI Document & Email Intake",
    caption: "Automatic bank statement ingestion, borrower entity matching, and OCR verification without manual data entry.",
  },
  {
    src: "/images/cases/every-success-credit.jpg",
    title: "Borrower 360 & Exposure Search",
    caption: "Real-time cross-company exposure review, overdue tracking, and anonymized risk analytics across the network.",
  },
  {
    src: "/images/cases/wah-wei-credit.jpg",
    title: "Permissioned Governance Architecture",
    caption: "Multi-tenant role-based access control (RBAC), end-to-end ledger auditing, and HKMA-aligned logging.",
  },
];

const COMPLIANCE_ITEMS = [
  {
    badge: "MAS TRM",
    title: "MAS TRM & Southeast Asia",
    desc: "Technology Risk Management guidelines for financial institutions: strict segregation of duties, multi-factor authentication, and immutable audit logs.",
  },
  {
    badge: "HKMA & CAP. 163",
    title: "HKMA SPM & Money Lenders Ordinance",
    desc: "Pre-configured for Hong Kong lending operations: interest rate cap controls, statutory note of loans, mandatory disclosure notices, and automated regulatory reporting.",
  },
  {
    badge: "FCA & GDPR",
    title: "UK & European Standards",
    desc: "Consumer credit alignment, explainable AI underwriting rules, field-level data encryption, borrower PII masking, and right-to-be-forgotten deletion workflows.",
  },
  {
    badge: "MULTI-CURRENCY",
    title: "Multi-Currency & Sovereign VPC",
    desc: "Native support for USD, HKD, SGD, EUR, and GBP loan books with localized interest accruals, SOC 2 readiness, and dedicated single-tenant or VPC hosting.",
  },
];

export function LendingContent() {
  const { dict } = useLocaleContext();
  const lp = dict.lendingPage;

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-20 pt-24 text-[var(--text)] sm:pb-28 sm:pt-28">
        <div className="section-gutter mx-auto max-w-6xl">
          <SubpageNav backHref="/case-studies" />

          {/* Header */}
          <header className="mb-14 sm:mb-20">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--white-40)]">
                Lending &amp; Finance · Global Platform
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--white-30)]" aria-hidden="true" />
              <span className="text-[0.65rem] font-mono uppercase tracking-[0.15em] text-[#ffc933]">
                Flagship Platform: Covenant Desk
              </span>
            </div>
            <div className="rule mb-8" />
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <div>
                <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-[var(--white-100)]">
                  Custom loan management systems &amp; AI for commercial lenders.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
                  End-to-end lending infrastructure engineered for commercial lenders, private debt funds, neo-lenders, and credit institutions worldwide. From self-service borrower onboarding and AI document extraction to multi-currency loan servicing and automated compliance.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-l border-[var(--white-15)] pl-6 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>{lp.subtitleP2}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    Multi-Currency (USD, HKD, SGD, EUR, GBP)
                  </span>
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    HKMA, MAS TRM &amp; GDPR Ready
                  </span>
                  <span className="border border-[var(--white-20)] bg-[var(--white-5)] px-2.5 py-1 text-xs text-[var(--white-90)]">
                    Single-Tenant / Private VPC
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Stats strip */}
          <section className="mb-20 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-4" aria-label="Key performance metrics">
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                17,000+
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Borrower Records
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Supported across network clients
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                94%
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Manual Doc Reduction
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Automated bank &amp; tax statement extraction
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                3–6 Wks
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Fast Live Launch
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                From requirements to operational portal
              </span>
            </div>
            <div className="flex flex-col gap-1 bg-[var(--background)] px-6 py-7">
              <span className="text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-none tracking-tight text-[var(--white-100)]">
                100%
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--white-90)]">
                Audited Actions
              </span>
              <span className="text-[0.7rem] text-[var(--text-muted)]">
                Complete traceability on all underwriting
              </span>
            </div>
          </section>

          {/* Flagship Platform Hero: Covenant Desk */}
          <section className="mb-24 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-10" aria-labelledby="covenant-title">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[var(--white-60)]">
                    Production Platform Showcase
                  </span>
                </div>
                <h2 id="covenant-title" className="text-[clamp(1.5rem,3.5vw,2.3rem)] font-medium leading-snug text-[var(--white-100)]">
                  Covenant Desk
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#ffc933]">
                  The complete lending lifecycle in one place
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {lp.featuredBody}
                </p>

                <div className="mt-8 space-y-3 border-t border-[var(--white-10)] pt-6 text-xs text-[var(--white-80)]">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    <span><strong>Unified Borrower Intelligence:</strong> 360° borrower profiles, loan history, cross-company exposure checks.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    <span><strong>AI Financial Document Processing:</strong> Bank statement cash-flow analysis, identity OCR, tamper detection.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald-400">✓</span>
                    <span><strong>Automated Repayment &amp; Ledger:</strong> Dynamic interest schedules, delinquency alerts, statutory Cap. 163 ledgers.</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/en/case-studies/covenant-desk"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    Read the Covenant Desk case study <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href="https://covenantdesk.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.14em] text-[var(--white-60)] hover:text-[var(--white-100)] hover:underline underline-offset-4"
                  >
                    Visit covenantdesk.hk ↗
                  </a>
                </div>
              </div>

              {/* Visual Browser Frame */}
              <div className="overflow-hidden rounded-lg border border-[var(--white-20)] bg-[#12100d] shadow-2xl">
                <div className="flex items-center justify-between border-b border-[var(--white-15)] bg-[var(--white-5)] px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-[0.68rem] text-[var(--white-50)]">
                    covenantdesk.hk / borrower-portal
                  </span>
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-emerald-400">
                    Live
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src="/images/home/selected-work-covenant-desk.webp"
                    alt="Covenant Desk lending portal shown across desktop, tablet, and mobile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Deployed Across 5 Lending Firms */}
          <section className="mb-24" aria-labelledby="lenders-title">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label mb-2">Proven Reference Architecture</p>
                <h2 id="lenders-title" className="text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
                  Deployed across 5 lending firms in the network + Covenant Desk.
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-[var(--text-muted)]">
                Our multi-tenant reference architecture powers five licensed commercial lenders, supporting 17,000+ borrower dossiers with complete tenant isolation, localized compliance, and auditable underwriting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {LENDING_PROJECTS.map((lender) => (
                <div
                  key={lender.slug}
                  className="group flex flex-col justify-between border border-[var(--white-15)] bg-[var(--surface)] p-5 transition hover:border-[var(--white-30)] hover:bg-[var(--white-5)]"
                >
                  <div>
                    <div className="relative mb-4 aspect-[1.6] w-full overflow-hidden rounded border border-[var(--white-10)] bg-neutral-900">
                      <Image
                        src={lender.image}
                        alt={lender.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="block text-sm font-medium text-[var(--white-100)]">
                      {lender.name}
                    </span>
                    {lender.nameZh ? (
                      <span className="block text-xs text-[var(--white-50)]" lang="zh-HK">
                        {lender.nameZh}
                      </span>
                    ) : (
                      <span className="block text-xs text-[var(--white-40)]">
                        Lending Firm
                      </span>
                    )}
                  </div>
                  <div className="mt-4 border-t border-[var(--white-10)] pt-3 text-[0.68rem] text-[var(--text-muted)]">
                    Custom Multi-Tenant LMS
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real Workflow Screenshots Gallery */}
          <section className="mb-24" aria-labelledby="screens-title">
            <p className="section-label mb-2">Interface Gallery</p>
            <h2 id="screens-title" className="mb-3 text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
              Real production workflows in daily use.
            </h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
              Screen views from live lending portals demonstrating automated triage, borrower dossier reviews, and multi-tenant management.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {PORTAL_SCREENS.map((screen) => (
                <div
                  key={screen.title}
                  className="flex flex-col border border-[var(--white-20)] bg-[var(--surface)] overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-medium text-[var(--white-100)]">
                      {screen.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                      {screen.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI adoption & integration grid */}
          <section className="mb-24" aria-labelledby="integration-title">
            <p className="section-label mb-3">{lp.adoptionGrid.sectionLabel}</p>
            <div className="rule mb-6" />
            <div className="mb-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <h2 id="integration-title" className="text-[clamp(1.25rem,4vw,1.9rem)] leading-snug text-[var(--white-100)]">
                {lp.adoptionGrid.title}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                {lp.adoptionGrid.intro}
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2 lg:grid-cols-5">
              {lp.adoptionGrid.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex flex-col gap-3 bg-[var(--background)] px-5 py-6"
                >
                  <h3 className="text-sm font-medium text-[var(--white-100)]">
                    {cat.title}
                  </h3>
                  <p className="text-[0.75rem] leading-relaxed text-[var(--text-muted)]">
                    {cat.description}
                  </p>
                  <ul className="mt-2 space-y-1.5 border-t border-[var(--white-10)] pt-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[0.72rem] leading-snug text-[var(--white-70)]"
                      >
                        <span
                          className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-[var(--white-40)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Regulatory & Security Compliance */}
          <section className="mb-24 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10" aria-labelledby="compliance-title">
            <p className="section-label mb-2">Governance &amp; Data Residency</p>
            <h2 id="compliance-title" className="mb-8 text-[clamp(1.35rem,3vw,2rem)] text-[var(--white-100)]">
              Built for strict Hong Kong and regional regulatory standards.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {COMPLIANCE_ITEMS.map((c) => (
                <div key={c.badge} className="border-t border-[var(--white-15)] pt-4">
                  <span className="font-mono text-xs font-semibold text-[#ffc933]">
                    {c.badge}
                  </span>
                  <h3 className="mt-2 text-sm font-medium text-[var(--white-100)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section className="mb-24" aria-labelledby="usecases-title">
            <p className="section-label mb-3">{lp.useCasesLabel}</p>
            <div className="rule mb-8" />
            <div className="space-y-0">
              {lp.useCases.map((uc, i) => (
                <div
                  key={uc.label}
                  className={`border-t border-[var(--white-20)] py-10 ${i === lp.useCases.length - 1 ? "border-b" : ""}`}
                >
                  <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#ffc933]">
                        {uc.label}
                      </p>
                      <h3 className="mb-4 text-[clamp(1.1rem,3vw,1.35rem)] leading-snug text-[var(--white-100)]">
                        {uc.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                        {uc.body}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center border-l border-[var(--white-10)] pl-6">
                      <p className="mb-3 text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {lp.whatChangesLabel}
                      </p>
                      <ul className="space-y-2">
                        {uc.metrics.map((m) => (
                          <li
                            key={m}
                            className="flex gap-3 text-[0.8rem] text-[var(--white-90)]"
                          >
                            <span className="shrink-0 text-[#ffc933]">✓</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Objections / FAQ */}
          <section className="mb-24" aria-labelledby="faq-title">
            <p className="section-label mb-3">{lp.objectionsLabel}</p>
            <div className="rule mb-8" />
            <div className="space-y-0">
              {lp.objections.map((o, i) => (
                <div
                  key={o.q}
                  className={`grid gap-4 py-7 md:grid-cols-[1fr_1.4fr] md:gap-8 ${i !== lp.objections.length - 1 ? "border-b border-[var(--white-20)]" : ""}`}
                >
                  <p className="text-base font-medium text-[var(--white-100)]">{o.q}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {o.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Free resources and related systems */}
          <nav aria-labelledby="lending-resources-title" className="mb-24">
            <p className="section-label mb-3">RESOURCES &amp; RELATED SYSTEMS</p>
            <div className="rule mb-6" />
            <h2
              id="lending-resources-title"
              className="mb-8 text-[clamp(1.1rem,3vw,1.4rem)] text-[var(--white-100)]"
            >
              Checklists, guides, and specialized lending modules.
            </h2>
            <ul className="grid gap-px border border-[var(--white-10)] bg-[var(--white-10)] sm:grid-cols-2 lg:grid-cols-3">
              {LENDING_LINKS.map((link) => (
                <li key={link.href} className="bg-[var(--background)]">
                  <LocaleLink
                    href={link.href}
                    className="flex h-full flex-col justify-between p-6 transition-colors hover:bg-[var(--surface)]"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[var(--white-90)]">{link.label} ↗</span>
                      <span className="mt-2 block text-xs leading-relaxed text-[var(--text-muted)]">{link.note}</span>
                    </div>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Scoping Consultation CTA */}
          <section className="border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-14" aria-labelledby="cta-title">
            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <p className="section-label mb-2">{lp.ctaLabel}</p>
                <h2 id="cta-title" className="text-[clamp(1.35rem,3.5vw,2.2rem)] font-medium leading-tight text-[var(--white-100)]">
                  {lp.ctaTitle}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                  {lp.ctaBody}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
                <LocaleLink href="/contact" className="btn-outline w-full text-center sm:w-auto">
                  {lp.ctaProject}
                </LocaleLink>
                <LocaleLink href="/case-studies" className="btn-outline w-full text-center sm:w-auto">
                  {lp.ctaCaseStudies}
                </LocaleLink>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
