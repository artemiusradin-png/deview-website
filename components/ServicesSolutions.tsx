"use client";

import { motion } from "framer-motion";
import { PageIntro } from "./PageIntro";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SERVICE_LINES } from "@/lib/workflow-offers";
import styles from "./services-page.module.css";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Top of /services: the four service lines, software development first, each with what we
 * build and where it shows up in every industry we serve. Anchors (#software-development, …)
 * are the homepage link targets; the old practice anchors are kept as aliases.
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
                Custom software,
                <br />
                end to end.
              </>
            }
          >
            <p>
              We ship four things for financial and industrial companies:
              software development, cloud security, AI automation and tech
              consulting.
            </p>
          </PageIntro>

          <nav
            aria-label="Solutions"
            className={`${styles.index} ${styles.indexFour}`}
          >
            {SERVICE_LINES.map((solution, index) => (
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

      {SERVICE_LINES.map((solution, index) => (
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
              {solution.aliases?.map((alias) => (
                <span
                  key={alias}
                  id={alias}
                  className="scroll-margin-header"
                  aria-hidden="true"
                />
              ))}
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
                  Tell us what you need built
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
