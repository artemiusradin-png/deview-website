import type { Metadata } from "next";
import Link from "next/link";
import { GatedGuide } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { CAP653_AREAS, CAP653_SUPPLIER_QUESTIONS } from "@/lib/lead-magnet-content";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.cap653Checklist;

/** Behind the sign-up form, so kept out of search results. */
export const metadata: Metadata = {
  title: "The Cap. 653 Readiness Checklist | Deview",
  robots: { index: false, follow: true },
};

export default function Cap653ChecklistGuidePage() {
  return (
    <>
      <main className={styles.page}>
        <GatedGuide accessKey={m.accessKey} signupPath={m.path}>
          <header className={`${styles.container} ${styles.cover}`}>
            <span className={styles.kicker}>Checklist · Cap. 653</span>
            <h1 className={styles.coverTitle}>The Cap. 653 readiness checklist.</h1>
            <span className={styles.lead}>
              Tick each check you can show evidence for today. Anything unticked is a gap to close
              before you are designated. Deadlines run from the date of the written designation
              notice.
            </span>
          </header>
          <section className={`${styles.container} ${styles.section}`}>
            <div className={styles.areaGrid}>
              {CAP653_AREAS.map((area) => (
                <div key={area.title}>
                  <h2>{area.title}</h2>
                  <span className={styles.risk}>{area.risk}</span>
                  <ul className={styles.checklist}>
                    {area.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <span className={styles.source}>
              Based on the Protection of Critical Infrastructures (Computer Systems) Ordinance (Cap.
              653, in force 1 January 2026), the Commissioner’s Code of Practice and the HKMA’s
              sectoral code for stored value facility licensees. General information, not legal
              advice: check the current text of the Ordinance and the code that applies to your
              sector.
            </span>
          </section>
          <section className={`${styles.container} ${styles.section}`} aria-labelledby="supplier-title">
            <span className={styles.kicker}>For operators and their suppliers</span>
            <h2 id="supplier-title" className={styles.sectionTitle}>
              Six questions to ask a software supplier.
            </h2>
            <ul className={styles.checklist}>
              {CAP653_SUPPLIER_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
          <div className={styles.container}>
            <section className={styles.cta} aria-labelledby="cta-title">
              <span className={styles.kicker}>Next step</span>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Want a second pair of eyes on your systems?
              </h2>
              <span className={styles.body}>
                We review systems against these obligations and build the fixes, as part of our
                cloud and security engineering.
              </span>
              <Link href="/en/services/cloud-devops" className={styles.button}>
                See cloud, DevOps and cloud security <span aria-hidden="true">↗</span>
              </Link>
            </section>
          </div>
        </GatedGuide>
      </main>
      <SiteFooter />
    </>
  );
}
