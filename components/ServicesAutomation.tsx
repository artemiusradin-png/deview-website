"use client";

import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { AUTOMATION_SOLUTIONS } from "@/lib/workflow-offers";
import styles from "./services-page.module.css";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Bottom of /services: the four automations behind AI automation, each with what we build and
 * where it shows up in every industry we serve. Anchors: #document-processing, #quotation-
 * automation, #reporting, #request-automation.
 */
export function ServicesAutomation() {
  const { localePath } = useLocaleContext();

  return (
    <>
      <section className={`section-gutter ${styles.catalogSection}`}>
        <div className="mx-auto max-w-6xl">
          <div className={styles.catalogHeading}>
            <div>
              <p className="section-label">AI automation in practice</p>
              <h2 className={styles.catalogTitle}>
                Four things we automate,
                <br />
                <span>in every industry.</span>
              </h2>
            </div>
          </div>

          <nav
            aria-label="Solutions"
            className={`${styles.index} ${styles.indexFour}`}
          >
            {AUTOMATION_SOLUTIONS.map((solution, index) => (
              <a key={solution.id} href={`#${solution.id}`}>
                <span className={styles.indexMeta}>
                  {String(index + 1).padStart(2, "0")}
                  <span aria-hidden="true">↘</span>
                </span>
                <span className={styles.indexName}>{solution.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {AUTOMATION_SOLUTIONS.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`section-gutter scroll-margin-header ${styles.practice} ${index % 2 ? styles.flip : ""}`}
        >
          <motion.div
            {...reveal}
            className={`mx-auto max-w-6xl ${styles.practiceGrid}`}
          >
            <div className={styles.practiceHead}>
              <p className="section-label">
                {String(index + 1).padStart(2, "0")} / {solution.name}
              </p>
              <h2 className={styles.practiceTitle}>{solution.title}</h2>
              <p className={styles.practiceBody}>{solution.body}</p>
            </div>

            <div className={`${styles.practiceDiagram} ${styles.applies}`}>
              <span className={styles.appliesLabel}>Where it applies</span>
              <dl className={styles.appliesList}>
                {solution.applies.map((row) => (
                  <div key={row.industry}>
                    <dt>{row.industry}</dt>
                    <dd>{row.example}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.practiceDetails}>
              <p className="section-label">What we build</p>
              <ul className={styles.capabilities}>
                {solution.builds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.practiceFooter}>
                <a href={localePath("/contact")}>
                  Show us your workflow
                  <span aria-hidden="true">→</span>
                </a>
                <span className={styles.proof}>{solution.proof}</span>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
}
