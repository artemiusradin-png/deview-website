"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import {
  INDUSTRY_OFFERS,
  PLAYBOOK_ACCESS_KEY,
  PLAYBOOK_PATH,
  AUTOMATION_SOLUTIONS,
} from "@/lib/workflow-offers";
import styles from "../playbook.module.css";

const RULES = [
  {
    title: "Start with the costliest workflow.",
    body: "Pick one process your team repeats every day or week, where the hours and the delays are easy to see. Not a company-wide transformation.",
  },
  {
    title: "Automate the preparation, not the decision.",
    body: "Let AI read, check, match and draft. Credit decisions, engineering sign-off and agronomic advice stay with the people accountable for them.",
  },
  {
    title: "Connect, don’t replace.",
    body: "The best first project works inside the CRM, lending system, catalogue or ERP you already run. Your team keeps its tools and gets its time back.",
  },
];

const subscribe = () => () => {};
/** null on the server (unknown yet), true or false once the browser has checked. */
function readAccess(): boolean {
  try {
    return sessionStorage.getItem(PLAYBOOK_ACCESS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function AutomationPlaybookGuidePage() {
  const router = useRouter();
  const { localePath } = useLocaleContext();
  const access = useSyncExternalStore<boolean | null>(
    subscribe,
    readAccess,
    () => null,
  );

  useEffect(() => {
    if (access === false) router.replace(localePath(PLAYBOOK_PATH));
  }, [access, router, localePath]);

  if (!access) {
    return (
      <main className={styles.page}>
        <div className={styles.loading}>Opening the playbook…</div>
      </main>
    );
  }

  return (
    <>
      <main className={styles.page}>
        <header className={`${styles.container} ${styles.cover}`}>
          <span className={styles.kicker}>The automation playbook</span>
          <h1 className={styles.coverTitle}>Where automation pays off first.</h1>
          <span className={styles.lead}>
            Five industries, the workflows worth automating first in each, and a
            worked example of how they run, from the incoming request to the
            person who makes the call.
          </span>
          <nav className={styles.jump} aria-label="Chapters">
            {INDUSTRY_OFFERS.map((industry) => (
              <a key={industry.id} href={`#${industry.id}`}>
                {industry.name}
              </a>
            ))}
            <a href="#building-blocks">The four building blocks</a>
          </nav>
        </header>

        <section
          className={`${styles.container} ${styles.section}`}
          aria-labelledby="rules-title"
        >
          <span className={styles.kicker}>Before you start</span>
          <h2 id="rules-title" className={styles.sectionTitle}>
            Three rules for a first project that pays back.
          </h2>
          <ol className={styles.rules}>
            {RULES.map((rule, index) => (
              <li key={rule.title}>
                <span className={styles.num}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{rule.title}</h3>
                <span className={styles.body}>{rule.body}</span>
              </li>
            ))}
          </ol>
        </section>

        {INDUSTRY_OFFERS.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`${styles.container} ${styles.chapter}`}
            aria-labelledby={`${industry.id}-title`}
          >
            <div className={styles.chapterHead}>
              <div>
                <span className={styles.kicker}>
                  Chapter {String(index + 1).padStart(2, "0")} / {industry.name}
                </span>
                <h2 id={`${industry.id}-title`} className={styles.sectionTitle}>
                  {industry.headline}
                </h2>
              </div>
              <span className={styles.lead}>{industry.summary}</span>
            </div>

            <div className={styles.chapterGrid}>
              <div>
                <span className={styles.blockLabel}>What we build</span>
                <ul className={styles.offers}>
                  {industry.offers.map((offer) => (
                    <li key={offer.name}>
                      <h3>{offer.name}</h3>
                      <span className={styles.body}>{offer.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.example}>
                <span className={styles.blockLabel}>What a build includes</span>
                <h3 className={styles.exampleTitle}>{industry.build.title}</h3>
                <ol className={styles.steps}>
                  {industry.build.modules.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className={styles.chapterFoot}>
              <div>
                <span className={styles.blockLabel}>Who it is for</span>
                <ul className={styles.list}>
                  {industry.whoFor.map((who) => (
                    <li key={who}>{who}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className={styles.blockLabel}>Check your own process</span>
                <ul className={`${styles.list} ${styles.questions}`}>
                  {industry.selfCheck.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className={styles.blockLabel}>What stays with people</span>
                <span className={styles.stays}>{industry.control}</span>
                <span className={`${styles.blockLabel} ${styles.labelGap}`}>
                  Our experience
                </span>
                <span className={styles.stays}>{industry.experience}</span>
              </div>
            </div>
          </section>
        ))}

        <section
          id="building-blocks"
          className={`${styles.container} ${styles.section}`}
          aria-labelledby="blocks-title"
        >
          <span className={styles.kicker}>Under the hood</span>
          <h2 id="blocks-title" className={styles.sectionTitle}>
            The same four building blocks, in every industry.
          </h2>
          <div className={styles.blocks}>
            {AUTOMATION_SOLUTIONS.map((solution, index) => (
              <div key={solution.id}>
                <span className={styles.num}>
                  {String(index + 1).padStart(2, "0")} / {solution.name}
                </span>
                <h3>{solution.title}</h3>
                <span className={styles.body}>{solution.body}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.cta} aria-labelledby="cta-title">
            <span className={styles.kicker}>Next step</span>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Show us the one workflow that costs you most.
            </h2>
            <span className={styles.body}>
              We map it with your team, measure the time and volume involved,
              and come back with a scoped proposal for what to automate first,
              how it connects to your systems, and what stays with your people.
            </span>
            <Link href={localePath("/contact")} className={styles.button}>
              Talk to us about your workflow <span aria-hidden="true">↗</span>
            </Link>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
