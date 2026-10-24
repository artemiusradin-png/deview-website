import { withSocialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { GatedGuide } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { AI_GOVERNANCE_CHECKS, AI_SECURITY_AREAS } from "@/lib/lead-magnet-content";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.aiSecurityChecklist;

/** Behind the sign-up form, so kept out of search results. */
export const metadata: Metadata = withSocialMetadata({
  title: "The AI Security Checklist | Deview",
  robots: { index: false, follow: true },
});

export default function AiSecurityChecklistGuidePage() {
  return (
    <>
      <main className={styles.page}>
        <GatedGuide accessKey={m.accessKey} signupPath={m.path}>
          <header className={`${styles.container} ${styles.cover}`}>
            <span className={styles.kicker}>Checklist · AI security</span>
            <h1 className={styles.coverTitle}>The AI security checklist.</h1>
            <span className={styles.lead}>
              Tick each check your AI system passes today. Anything unticked is an open risk to
              fix before launch, or before the next release.
            </span>
          </header>
          <section className={`${styles.container} ${styles.section}`}>
            <div className={styles.areaGrid}>
              {AI_SECURITY_AREAS.map((area) => (
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
              Risk names follow the OWASP Top 10 for Large Language Model Applications (2025).
            </span>
          </section>
          <section className={`${styles.container} ${styles.section}`} aria-labelledby="gov-title">
            <span className={styles.kicker}>For regulated companies</span>
            <h2 id="gov-title" className={styles.sectionTitle}>
              Four governance checks.
            </h2>
            <ul className={styles.checklist}>
              {AI_GOVERNANCE_CHECKS.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </section>
          <div className={styles.container}>
            <section className={styles.cta} aria-labelledby="cta-title">
              <span className={styles.kicker}>Next step</span>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Want a second pair of eyes on your AI system?
              </h2>
              <span className={styles.body}>
                We review AI systems against these risks and fix what we find, as part of our AI
                and cloud security work.
              </span>
              <Link href="/en/services/ai-development" className={styles.button}>
                See AI and machine learning development <span aria-hidden="true">↗</span>
              </Link>
            </section>
          </div>
        </GatedGuide>
      </main>
      <SiteFooter />
    </>
  );
}
