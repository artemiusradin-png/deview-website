import type { Metadata } from "next";
import { LeadMagnetSignup } from "@/components/LeadMagnet";
import { LeadMagnetDetails } from "@/components/LeadMagnetDetails";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { LMS_AREAS } from "@/lib/lead-magnet-content";
import { LMS_CHECKLIST_DETAILS } from "@/lib/lead-magnet-details";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.lmsChecklist;

export const metadata: Metadata = {
  title: "Loan Management System Checklist for Hong Kong Money Lenders | Deview",
  description:
    "A free checklist for choosing or upgrading a loan management system: borrower onboarding, credit assessment, repayments, collections, reporting and audit, from the team behind five Hong Kong lending systems.",
  alternates: { canonical: `/en${m.path}` },
};

export default function LmsChecklistPage() {
  return (
    <>
      <main className={styles.page}>
        <LeadMagnetSignup
          source={m.source}
          accessKey={m.accessKey}
          guidePath={m.guidePath}
          kicker="Free checklist · Lending"
          title="The loan management system checklist."
          lead="Check whether your loan management system covers what a Hong Kong money lender needs, from the first application to the last repayment. Built from the lending systems we run for five Hong Kong lenders."
          inside={[
            "Eight areas a lending system has to cover, each as a short checklist.",
            "Where manual work and compliance risk usually hide.",
            "What groups with several lending companies need on top.",
            "Five questions to ask any loan software vendor.",
          ]}
          tags={["Money lenders", "Lending groups", "SME and consumer finance"]}
        />
        <section className={`${styles.container} ${styles.covered}`} aria-labelledby="covered-title">
          <span className={styles.kicker}>What the checklist covers</span>
          <h2 id="covered-title" className={styles.sectionTitle}>
            Eight areas of loan management software.
          </h2>
          <ul className={styles.coveredList}>
            {LMS_AREAS.map((area) => (
              <li key={area.title}>
                <strong>{area.title}</strong>
                <span className={styles.body}>{area.checks[0]}.</span>
              </li>
            ))}
          </ul>
        </section>
        <LeadMagnetDetails details={LMS_CHECKLIST_DETAILS} />
      </main>
      <SiteFooter />
    </>
  );
}
