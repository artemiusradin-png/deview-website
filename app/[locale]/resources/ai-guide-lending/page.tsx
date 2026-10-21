import { LeadMagnetSignup } from "@/components/LeadMagnet";
import { LeadMagnetDetails } from "@/components/LeadMagnetDetails";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { en } from "@/lib/i18n/dict-en";
import { AI_GUIDE_LENDING_DETAILS } from "@/lib/lead-magnet-details";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.aiGuideLending;
const t = en.aiGuideLandingPage;
const USE_CASES = en.aiGuideFullPage.useCases;

/** Metadata lives in layout.tsx. The full guide at ./guide opens after sign-up. */
export default function AiGuideLendingPage() {
  return (
    <>
      <main className={styles.page}>
        <LeadMagnetSignup
          source={m.source}
          accessKey={m.accessKey}
          guidePath={m.guidePath}
          kicker="Free guide · AI for lending"
          title="10 lending workflows AI can automate safely."
          lead={t.description}
          inside={t.bullets}
          tags={["Money lenders", "Lending groups", "SME and consumer finance"]}
        />
        <section className={`${styles.container} ${styles.covered}`} aria-labelledby="covered-title">
          <span className={styles.kicker}>What the guide covers</span>
          <h2 id="covered-title" className={styles.sectionTitle}>
            The ten use cases.
          </h2>
          <ul className={styles.coveredList}>
            {USE_CASES.map((useCase) => (
              <li key={useCase.number}>
                <strong>
                  {useCase.number} {useCase.title}
                </strong>
                <span className={styles.body}>
                  {useCase.useCase} Risk: {useCase.risk.toLowerCase()}.
                </span>
              </li>
            ))}
          </ul>
        </section>
        <LeadMagnetDetails details={AI_GUIDE_LENDING_DETAILS} />
      </main>
      <SiteFooter />
    </>
  );
}
