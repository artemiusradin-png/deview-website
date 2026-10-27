"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleLink } from "@/components/LocaleLink";
import { InsightBreadcrumbs } from "@/components/InsightBreadcrumbs";
import { InsightByline } from "@/components/InsightByline";
import { SiteFooter } from "@/components/SiteFooter";

export function LmsCostContent() {
  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid pb-20 pt-24 text-[var(--text)] sm:pb-28 sm:pt-28">
        <article className="section-gutter mx-auto max-w-3xl">
          <InsightBreadcrumbs title="How much does a custom loan management system cost?" />

          {/* Article Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#ffc933]">
                LENDING ARCHITECTURE
              </span>
              <span className="text-xs text-[var(--white-30)]">&middot;</span>
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--white-40)]">
                2 May 2025
              </span>
              <span className="text-xs text-[var(--white-30)]">&middot;</span>
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--white-40)]">
                7 min read
              </span>
            </div>
            <h1 className="mb-6 text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.12] tracking-tight text-[var(--white-100)]">
              How much does a custom loan management system cost? Scope, architecture &amp; timelines.
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              A candid breakdown of building versus buying loan management software for commercial lenders, private debt funds, and licensed money lenders: what drives the budget, where SaaS fails, and what realistic delivery timelines look like.
            </p>
            <div className="mt-6">
              <InsightByline />
            </div>
          </header>

          {/* Cover Graphic */}
          <div className="mb-12 overflow-hidden rounded-lg border border-[var(--white-20)] bg-neutral-900 shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/insights/loan-management-system-cost-1200.webp"
                alt="Architectural schematic of loan management system cost components"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rule mb-12" />

          {/* Article Prose */}
          <div className="space-y-8 text-base leading-relaxed text-[var(--text-muted)]">
            <p>
              When a commercial lender or private debt firm hits \$50M+ in assets under management (or several thousand active borrower files), the operational cracks widen. Intake sits in email inboxes, financial statement analysis happens by copy-pasting numbers into Excel, credit committee memos circulate over messaging apps, and statutory compliance ledgers are patched together at the end of each month.
            </p>

            <p>
              The executive team eventually asks the inevitable question: <em>&ldquo;How much does it actually cost to build our own custom loan management system (LMS), and how does that compare to commercial off-the-shelf software?&rdquo;</em>
            </p>

            <p>
              Having architected and deployed <LocaleLink href="/industries/lending" className="text-[var(--white-100)] underline decoration-[#ffc933] underline-offset-4">Covenant Desk</LocaleLink> across five licensed lending firms supporting over 17,000 live borrower records, here is the honest, unvarnished breakdown of real-world development scopes, cost drivers, and delivery horizons.
            </p>

            {/* Key Comparison Card */}
            <div className="my-10 border border-[var(--white-20)] bg-[var(--surface)] p-6 sm:p-8">
              <h2 className="mb-4 text-lg font-medium text-[var(--white-100)]">
                The Core Executive Summary
              </h2>
              <ul className="space-y-3 text-sm text-[var(--white-80)]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ffc933] font-bold">1.</span>
                  <span><strong>Targeted MVP (Single-Tenant Core):</strong> \$45,000 – \$75,000 USD (Delivered in 4 to 8 weeks). Covers borrower intake, automated bank statement OCR, underwriting review, and repayment schedules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ffc933] font-bold">2.</span>
                  <span><strong>Full Enterprise Suite (Multi-Tenant / Private Debt):</strong> \$85,000 – \$160,000 USD (Delivered in 8 to 14 weeks). Adds cross-company exposure search, multi-currency ledgers, eKYC integration, and automated regulatory reporting (HKMA/Cap. 163, MAS TRM).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#ffc933] font-bold">3.</span>
                  <span><strong>Total Cost of Ownership vs SaaS:</strong> Commercial banking SaaS (e.g. nCino, Mambu, Q2) typically costs \$150k–\$400k/year in recurring user seat licenses, plus \$100k+ in implementation fees and rigid product lock-in. A bespoke platform reaches break-even in 10 to 14 months.</span>
                </li>
              </ul>
            </div>

            <h2 className="pt-4 text-2xl font-medium text-[var(--white-100)]">
              The 4 Modular Cost Blocks of a Modern Lending System
            </h2>

            <p>
              A robust loan management system is not a monolith; it consists of four distinct architectural layers. When planning development budgets, commercial lenders should evaluate each layer independently:
            </p>

            {/* Module 1 */}
            <div className="border-t border-[var(--white-15)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-medium text-[var(--white-100)]">
                  Module 1: Borrower Self-Service Intake &amp; eKYC
                </h3>
                <span className="font-mono text-xs text-[#ffc933]">\$15,000 – \$28,000</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                The customer-facing portal where applicants submit loan requests, upload identity cards (HKID, passports) and company registration certificates, and complete identity liveness verification.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-1 text-[var(--white-80)]">
                <li>Mobile-responsive applicant web app with save-and-resume sessions</li>
                <li>Biometric face matching and document anti-fraud checks</li>
                <li>Configurable application form builders for personal vs commercial loans</li>
                <li>Automated email / SMS status notifications and applicant dashboards</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="border-t border-[var(--white-15)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-medium text-[var(--white-100)]">
                  Module 2: AI Document Processing &amp; Bank Statement IDP
                </h3>
                <span className="font-mono text-xs text-[#ffc933]">\$20,000 – \$38,000</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                The intelligent ingestion engine. Rather than having credit analysts manually type transaction lines from 6 months of bank PDFs, an AI-powered Intelligent Document Processing (IDP) pipeline extracts transactions, flags anomalies, and calculates net cash flows instantly.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-1 text-[var(--white-80)]">
                <li>Multi-bank statement table parsing and transaction categorization</li>
                <li>Digital document tampering detection (font mismatch, PDF metadata forgery)</li>
                <li>Tax assessment (IR56B / notice of assessment) structured extraction</li>
                <li>Recurring revenue and debt service coverage ratio (DSCR) auto-computation</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="border-t border-[var(--white-15)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-medium text-[var(--white-100)]">
                  Module 3: Credit Decisioning Engine &amp; Exposure Search
                </h3>
                <span className="font-mono text-xs text-[#ffc933]">\$22,000 – \$42,000</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                The core analytical workbench where underwriters review dossiers, apply lender-specific scorecards, and check exposure across sister lending entities or credit bureaus.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-1 text-[var(--white-80)]">
                <li>Configurable underwriting decision matrix (DTI caps, loan-to-value rules)</li>
                <li>Cross-entity borrower deduplication and group exposure calculation</li>
                <li>Multi-tier credit committee approval workflows with cryptographic sign-off</li>
                <li>Full audit trail logging every parameter alteration and reviewer comment</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="border-t border-[var(--white-15)] pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-medium text-[var(--white-100)]">
                  Module 4: Servicing Ledger, Interest Accrual &amp; Collections
                </h3>
                <span className="font-mono text-xs text-[#ffc933]">\$28,000 – \$52,000</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                The financial backbone that governs the active loan lifecycle: generating repayment schedules, tracking inbound bank reconciliations, calculating early settlement penalties, and enforcing delinquency escalation.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-1 text-[var(--white-80)]">
                <li>Dynamic repayment schedules (Rule of 78, daily accrual, flat, reducing balance)</li>
                <li>Multi-currency support (USD, HKD, SGD, EUR, GBP) with exchange rate feeds</li>
                <li>Statutory loan ledgers complying with Cap. 163 / HKMA reporting standards</li>
                <li>Automated dunning reminders (WhatsApp / SMS / email) and collections queues</li>
              </ul>
            </div>

            <div className="rule my-8" />

            <h2 className="text-2xl font-medium text-[var(--white-100)]">
              Why Off-The-Shelf SaaS Frequently Fails Niche Lenders
            </h2>

            <p>
              Lenders often assume starting with an off-the-shelf SaaS provider will save time and money. While generic SaaS can work for standardized consumer credit cards, it routinely fails commercial lending firms and private debt operators for three reasons:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="border border-[var(--white-15)] bg-[var(--surface)] p-5">
                <span className="font-mono text-xs text-[#ffc933]">01 / LICENSING RIGIDITY</span>
                <h4 className="mt-2 text-sm font-medium text-[var(--white-100)]">Regulatory Mismatch</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  Global SaaS lacks native support for localized money lender requirements (e.g. Hong Kong Cap. 163 statutory note of loans or Singapore MAS TRM access controls).
                </p>
              </div>

              <div className="border border-[var(--white-15)] bg-[var(--surface)] p-5">
                <span className="font-mono text-xs text-[#ffc933]">02 / DATA ENCLAVES</span>
                <h4 className="mt-2 text-sm font-medium text-[var(--white-100)]">Multi-Tenant Exposure</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  Lending groups operating multiple subsidiaries need a single view of aggregate borrower risk without blending separate legal entity books.
                </p>
              </div>

              <div className="border border-[var(--white-15)] bg-[var(--surface)] p-5">
                <span className="font-mono text-xs text-[#ffc933]">03 / COMPOUNDING COST</span>
                <h4 className="mt-2 text-sm font-medium text-[var(--white-100)]">Per-Seat Tax</h4>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  SaaS pricing scales aggressively as loan volume or underwriter counts grow, creating an ongoing operational tax of hundreds of thousands of dollars.
                </p>
              </div>
            </div>

            <h2 className="pt-6 text-2xl font-medium text-[var(--white-100)]">
              Delivery Horizons: How Long Does It Take?
            </h2>

            <p>
              With an experienced engineering partner that has pre-built architectural primitives (like our battle-tested <LocaleLink href="/case-studies/covenant-desk" className="text-[var(--white-100)] underline decoration-[#ffc933] underline-offset-4">Covenant Desk</LocaleLink> core), delivery does not take 18 months.
            </p>

            <ul className="space-y-4 border-l border-[var(--white-20)] pl-6 text-sm">
              <li>
                <strong className="block text-[var(--white-100)]">Weeks 1–2: Architecture &amp; Policy Scoping</strong>
                <span>Finalizing credit underwriting rules, identity verification partners, interest calculation formulas, and regulatory disclosure formats.</span>
              </li>
              <li>
                <strong className="block text-[var(--white-100)]">Weeks 3–6: Core Workflow &amp; Portal Assembly</strong>
                <span>Standing up the applicant portal, database schemas, role-based permission boundaries, and AI document ingestion pipelines.</span>
              </li>
              <li>
                <strong className="block text-[var(--white-100)]">Weeks 7–10: Ledger, Servicing &amp; UAT</strong>
                <span>Repayment engine testing against historic loan books, bank reconciliation, and stress-testing with real credit committee staff.</span>
              </li>
              <li>
                <strong className="block text-[var(--white-100)]">Weeks 11–12: Production Cutover &amp; Sovereign Cloud Deployment</strong>
                <span>Single-tenant VPC provisioning, database migration, staff onboarding, and live regulatory audit trail verification.</span>
              </li>
            </ul>

            {/* Direct CTA Box */}
            <div className="mt-12 border border-[var(--white-20)] bg-[var(--surface)] p-8 sm:p-10">
              <h3 className="text-xl font-medium text-[var(--white-100)]">
                Planning a Lending System or Upgrading Legacy Software?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Deview designs and deploys custom loan management systems, AI credit underwriting copilots, and multi-tenant portals tailored to your specific regulatory jurisdiction.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <LocaleLink href="/contact" className="btn-outline">
                  Discuss your LMS architecture →
                </LocaleLink>
                <LocaleLink href="/resources/loan-management-system-checklist" className="btn-outline">
                  Download free 8-point LMS checklist ↗
                </LocaleLink>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

