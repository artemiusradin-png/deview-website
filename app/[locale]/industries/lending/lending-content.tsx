"use client";

import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { SilentCaseVideo } from "@/components/SilentCaseVideo";
import { SiteFooter } from "@/components/SiteFooter";
import { SubpageNav } from "@/components/SubpageNav";
import { LENDING_PROJECTS } from "@/lib/case-studies";
import styles from "./lending.module.css";

const METRICS = [
  { metric: "17,000+", label: "borrower records supported" },
];

const ARCHITECTURE = [
  ["01", "One borrower record", "Intake, verification, facilities, repayment and collections remain connected."],
  ["02", "Rules with human authority", "Lender policies and AI assistance accelerate review; authorised staff make the decision."],
  ["03", "Tenant-level permissions", "Each company controls roles, fields and access while sharing the same product foundation."],
  ["04", "An auditable event trail", "Documents, changes, approvals and servicing events stay attributable and reviewable."],
] as const;

const COMPLIANCE = [
  ["HKMA SPM", "Credit and operational risk controls"],
  ["CAP. 163", "Money Lenders Ordinance workflows"],
  ["PDPO", "Purpose-bound personal data handling"],
  ["MAS TRM", "Technology risk and access governance"],
] as const;

const RESOURCES = [
  ["Loan management system checklist", "/resources/loan-management-system-checklist"],
  ["10 AI use cases for lending companies", "/resources/ai-guide-lending"],
  ["SME loan management system for banks", "/solutions/sme-loan-management-system-for-banks"],
  ["Credit approval workflow software", "/solutions/credit-approval-workflow-software"],
] as const;

export function LendingContent() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.shell}>
          <SubpageNav backHref="/" />
          <header className={styles.hero}>
            <div className={styles.heroGrid}>
              <h1>Turn lending operations into one clear record.</h1>
              <div className={styles.heroAside}>
                <p>Custom lending software for intake, document intelligence, credit review, servicing and reporting—built around the way your team already makes decisions.</p>
                <LocaleLink href="/contact" className={styles.inlineLink}>Discuss a lending system <span>↗</span></LocaleLink>
              </div>
            </div>
          </header>

          <section className={styles.metricStrip} aria-label="Lending platform outcomes">
            {METRICS.map((item) => (
              <div key={item.metric}>
                <strong>{item.metric}</strong>
                <p>{item.label}</p>
              </div>
            ))}
          </section>

          <section className={styles.showcase} aria-labelledby="covenant-heading">
            <div className={styles.sectionLeadWide}>
              <div><h2 id="covenant-heading">Covenant Desk.<br />The lending lifecycle, visible.</h2></div>
              <p>A multi-device operating system for management, staff and borrowers, sharing one permission-scoped source of truth.</p>
            </div>
            <div className={styles.productBrowser}>
              <div className={styles.browserTop} aria-hidden="true"><span><i /><i /><i /></span><b>covenantdesk.hk / operations</b><em>Live product</em></div>
              <div className={styles.productCanvas}>
                <Image src="/images/home/selected-work-covenant-desk.webp" alt="Covenant Desk interface shown across desktop, tablet and mobile" width={1360} height={907} sizes="(max-width: 760px) 100vw, 1100px" />
              </div>
            </div>
            <ol className={styles.architecture}>
              {ARCHITECTURE.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
            </ol>
          </section>

          <section className={styles.deployments} aria-labelledby="deployments-heading">
            <div className={styles.sectionLeadWide}>
              <div><h2 id="deployments-heading">One foundation.<br />Five lender operations.</h2></div>
              <p>Each tenant is treated as its own operating environment—with its own identity, workflows, permissions and portfolio view.</p>
            </div>
            <div className={styles.caseFilm}>
              <SilentCaseVideo src="/video/cases/grand-finance-lending.mp4" poster="/images/cases/video-posters/grand-finance-lending.jpg" className={styles.caseFilmVideo} />
              <div><span>Featured deployment</span><strong>Grand Finance 高昇財務</strong><p>Hong Kong lending operations, built into a governed workflow.</p></div>
            </div>
            <div className={styles.lenderGrid}>
              {LENDING_PROJECTS.map((lender, index) => (
                <article id={lender.slug} key={lender.slug} className={styles.lenderCard}>
                  <div className={styles.lenderDrawing}><Image src={lender.image} alt={lender.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                  <div className={styles.lenderMeta}><span>0{index + 1}</span><div><h3>{lender.name}</h3>{lender.nameZh ? <p>{lender.nameZh}</p> : null}</div></div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.governance} aria-labelledby="governance-heading">
            <div><h2 id="governance-heading">Controls belong inside the workflow.</h2><p>These frameworks shape access, traceability and operating controls. Final applicability is confirmed with each client&rsquo;s legal and compliance teams.</p></div>
            <ul>{COMPLIANCE.map(([badge, label]) => <li key={badge}><strong>{badge}</strong><span>{label}</span></li>)}</ul>
          </section>

          <nav className={styles.resources} aria-label="Lending resources">
            <ul>{RESOURCES.map(([label, href]) => <li key={href}><LocaleLink href={href}>{label}<span>↗</span></LocaleLink></li>)}</ul>
          </nav>

          <section className={styles.closing}><p>Start with the bottleneck.</p><h2>What still gets copied, checked or chased by hand?</h2><LocaleLink href="/contact">Map the workflow <span>↗</span></LocaleLink></section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
