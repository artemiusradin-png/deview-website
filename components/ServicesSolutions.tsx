"use client";

import { motion } from "framer-motion";
import { PageIntro } from "./PageIntro";
import { CapabilityDiagram } from "./CapabilityDiagram";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SERVICE_LINES } from "@/lib/workflow-offers";
import styles from "./services-page.module.css";

/** The line drawing for each service line (same hand as the homepage drawings). */
const DRAWING_MODE: Record<string, number> = {
  "product-engineering": 1,
  "ai-ml": 0,
  "data-engineering": 2,
  "cloud-devops": 3,
  "enterprise-platforms": 4,
};

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
} as const;

/**
 * Top of /services: the five services, product engineering first, each with a drawing, what
 * we build and where it shows up in every industry we serve. Anchors (#product-engineering, …)
 * are the header menu and homepage link targets; older anchors are kept as aliases.
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
              Five engineering services for financial and industrial
              companies, delivered by one senior team with 15+ years of
              enterprise work.
            </p>
          </PageIntro>

          <nav
            aria-label="Solutions"
            className={`${styles.index} ${styles.indexFive}`}
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
              {solution.id in DRAWING_MODE ? (
                <div className={styles.appliesDrawing}>
                  <CapabilityDiagram mode={DRAWING_MODE[solution.id]} />
                </div>
              ) : null}
              <span className={styles.appliesLabel}>Where it applies</span>
              <dl className={`${styles.appliesList} ${styles.appliesCompact}`}>
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
              {solution.offerings ? (
                <ul className={`${styles.capabilities} ${styles.offerings}`}>
                  {solution.offerings.map((item) => (
                    <li key={item.name}>
                      <span>
                        <strong>{item.name}</strong>
                        {item.line}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.capabilities}>
                  {solution.builds.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
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
