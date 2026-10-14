import type { Metadata } from "next";
import { LeadMagnetSignup } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { CAP653_AREAS } from "@/lib/lead-magnet-content";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.cap653Checklist;

export const metadata: Metadata = {
  title: "Cap. 653 Checklist: Hong Kong Critical Infrastructure Cybersecurity Law | Deview",
  description:
    "A free readiness checklist for Hong Kong’s Protection of Critical Infrastructures (Computer Systems) Ordinance, Cap. 653: what operators must do after designation, deadlines, supplier requirements and incident reporting.",
  alternates: { canonical: `/en${m.path}` },
};

export default function Cap653ChecklistPage() {
  return (
    <>
      <main className={styles.page}>
        <LeadMagnetSignup
          source={m.source}
          accessKey={m.accessKey}
          guidePath={m.guidePath}
          kicker="Free checklist · Cap. 653"
          title="The Cap. 653 readiness checklist."
          lead="What Hong Kong’s critical infrastructure cybersecurity law asks of an operator and its suppliers, as eight checklists your team can test."
          inside={[
            "The obligations in plain words, with the deadlines that start at designation.",
            "Eight areas, each with checks your team can tick off.",
            "The questions operators now ask their software suppliers.",
            "A simple way to see which gaps are still open.",
          ]}
          tags={["Cap. 653", "Banking and finance", "Energy and transport", "Healthcare", "Telecoms"]}
        />
        <section className={`${styles.container} ${styles.covered}`} aria-labelledby="covered-title">
          <span className={styles.kicker}>What the checklist covers</span>
          <h2 id="covered-title" className={styles.sectionTitle}>
            Eight areas of the Ordinance.
          </h2>
          <ul className={styles.coveredList}>
            {CAP653_AREAS.map((area) => (
              <li key={area.title}>
                <strong>{area.title}</strong>
                <span className={styles.body}>{area.risk}</span>
              </li>
            ))}
          </ul>
          <span className={styles.source}>
            Based on the Protection of Critical Infrastructures (Computer Systems) Ordinance (Cap.
            653) and the Commissioner’s Code of Practice. General information, not legal advice.
          </span>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
