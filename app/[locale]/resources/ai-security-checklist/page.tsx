import type { Metadata } from "next";
import { LeadMagnetSignup } from "@/components/LeadMagnet";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "@/components/lead-magnet.module.css";
import { AI_SECURITY_AREAS } from "@/lib/lead-magnet-content";
import { LEAD_MAGNETS } from "@/lib/workflow-offers";

const m = LEAD_MAGNETS.aiSecurityChecklist;

export const metadata: Metadata = {
  title: "AI Security Checklist for LLM Applications (OWASP Top 10) | DeView",
  description:
    "A free AI security checklist for LLM apps and AI agents, based on the OWASP Top 10 for LLM Applications: prompt injection, data leaks, excessive agency and more, plus governance checks for PDPO, HKMA and GDPR.",
  alternates: { canonical: `/en${m.path}` },
};

export default function AiSecurityChecklistPage() {
  return (
    <>
      <main className={styles.page}>
        <LeadMagnetSignup
          source={m.source}
          accessKey={m.accessKey}
          guidePath={m.guidePath}
          kicker="Free checklist · AI security"
          title="The AI security checklist for LLM applications."
          lead="Twenty-four checks for chatbots, copilots and AI agents before they meet real users and real data, organised around the OWASP Top 10 for LLM Applications."
          inside={[
            "The ten LLM risks, each with what goes wrong in plain words.",
            "Two practical checks per risk that your team can test.",
            "Governance checks for regulated companies.",
            "A simple way to see which risks are still open.",
          ]}
          tags={["LLM apps", "AI agents", "Copilots", "RAG search"]}
        />
        <section className={`${styles.container} ${styles.covered}`} aria-labelledby="covered-title">
          <span className={styles.kicker}>What the checklist covers</span>
          <h2 id="covered-title" className={styles.sectionTitle}>
            The ten LLM security risks.
          </h2>
          <ul className={styles.coveredList}>
            {AI_SECURITY_AREAS.map((area) => (
              <li key={area.title}>
                <strong>{area.title}</strong>
                <span className={styles.body}>{area.risk}</span>
              </li>
            ))}
          </ul>
          <span className={styles.source}>
            Based on the OWASP Top 10 for Large Language Model Applications (2025).
          </span>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
