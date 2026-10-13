"use client";

import { motion } from "framer-motion";
import { PageIntro } from "./PageIntro";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SOLUTIONS } from "@/lib/workflow-offers";
import styles from "./services-page.module.css";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Top of /services: the four solutions we sell, each with what we build and where it shows up
 * in every industry we serve. Anchors (#document-processing, …) are the homepage link targets.
 * The three engineering practices follow lower on the page as "how we build it".
 */
export function ServicesSolutions() {
  const { localePath } = useLocaleContext();

  return (
    <>
      <section className="section-gutter">
        <div className="mx-auto max-w-6xl">
          <PageIntro
            label="What we do"
            title={
              <>
                Four things
                <br />
                we automate.
              </>
            }
          >
            <p>
              The document-heavy, manual work in lending, ventilation,
              agriculture, construction and oil and gas. Built into the tools
              you already use, with your people approving what matters.
            </p>
          </PageIntro>

          <nav
            aria-label="Solutions"
            className={`${styles.index} ${styles.indexFour}`}
          >
            {SOLUTIONS.map((solution, index) => (
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

      {SOLUTIONS.map((solution, index) => (
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
