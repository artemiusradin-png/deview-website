import type { Metadata } from "next";
import Link from "next/link";
import { GatedGuide } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { LMS_AREAS, LMS_VENDOR_QUESTIONS } from "@/lib/lead-magnet-content";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.lmsChecklist;

/** Behind the sign-up form, so kept out of search results. */
export const metadata: Metadata = {
  title: "The Loan Management System Checklist | Deview",
  robots: { index: false, follow: true },
};

export default function LmsChecklistGuidePage() {
  return (
    <>
      <main className={styles.page}>
        <GatedGuide accessKey={m.accessKey} signupPath={m.path}>
          <header className={`${styles.container} ${styles.cover}`}>
            <span className={styles.kicker}>Checklist · Lending</span>
            <h1 className={styles.coverTitle}>The loan management system checklist.</h1>
            <span className={styles.lead}>
              Tick every line your current system handles without spreadsheets or manual work.
              The gaps are where time and compliance risk go.
            </span>
          </header>
          <section className={`${styles.container} ${styles.section}`}>
            <div className={styles.areaGrid}>
              {LMS_AREAS.map((area, index) => (
                <div key={area.title}>
                  <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{area.title}</h2>
                  <ul className={styles.checklist}>
                    {area.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section className={`${styles.container} ${styles.section}`} aria-labelledby="vendor-title">
            <span className={styles.kicker}>Before you buy</span>
            <h2 id="vendor-title" className={styles.sectionTitle}>
              Five questions to ask any loan software vendor.
            </h2>
            <ul className={`${styles.list} ${styles.questions}`}>
              {LMS_VENDOR_QUESTIONS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>
          <div className={styles.container}>
            <section className={styles.cta} aria-labelledby="cta-title">
              <span className={styles.kicker}>Next step</span>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Found gaps? Let’s look at them together.
              </h2>
              <span className={styles.body}>
                We built loan management systems for Grand Finance, KK Credit, Wah Wei Credit,
                Every Success Credit and Rich Eagle Capital.
              </span>
              <Link href="/en/contact" className={styles.button}>
                Talk to us about your lending system <span aria-hidden="true">↗</span>
              </Link>
            </section>
          </div>
        </GatedGuide>
      </main>
      <SiteFooter />
    </>
  );
}
