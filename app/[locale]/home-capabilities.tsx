"use client";

import { useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import {
  INDUSTRY_OFFERS,
  PLAYBOOK_PATH,
  SOLUTIONS,
} from "@/lib/workflow-offers";
import { useMotionOnView } from "./home-motion";
import styles from "./home-capabilities.module.css";

const COUNT = INDUSTRY_OFFERS.length;

/**
 * "What we can do for you": one tab per industry. Each panel shows a worked example of the
 * workflow we automate (left) and what we build, why we are credible and what stays with the
 * client's people (right). Below, the four solutions every industry draws on.
 */
export function HomeCapabilities() {
  const { localePath } = useLocaleContext();
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  // The example steps play in when the panel scrolls into view, and again on every tab change
  // (the panel remounts, so its animation restarts).
  const panels = useRef<HTMLDivElement>(null);
  useMotionOnView(panels);
  const offer = INDUSTRY_OFFERS[active];

  return (
    <section
      id="expertise"
      className={styles.section}
      aria-labelledby="expertise-title"
    >
      <div id="retro-feature-cards" />
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>01 / What we can do for you</p>
          <h2 id="expertise-title">
            Your industry.
            <br />
            Your bottleneck.
          </h2>
        </div>
        <p>
          Pick your industry and see the work
          <br />
          we would take off your team’s plate.
        </p>
      </div>
      <div
        id="practices"
        role="tablist"
        aria-label="Choose your industry"
        className={styles.tabs}
      >
        {INDUSTRY_OFFERS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`capability-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`capability-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            ref={(el) => {
              buttons.current[index] = el;
            }}
            onClick={() => {
              setActive(index);
              // Stacked tabs (phones, small tablets) put the panel below all five tabs:
              // bring it into view so the tap visibly does something.
              if (window.matchMedia("(max-width: 960px)").matches) {
                requestAnimationFrame(() =>
                  panels.current?.scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches
                      ? "auto"
                      : "smooth",
                    block: "start",
                  }),
                );
              }
            }}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight" || event.key === "ArrowDown"
                  ? (active + 1) % COUNT
                  : event.key === "ArrowLeft" || event.key === "ArrowUp"
                    ? (active + COUNT - 1) % COUNT
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? COUNT - 1
                        : null;
              if (next !== null) {
                event.preventDefault();
                setActive(next);
                buttons.current[next]?.focus();
              }
            }}
          >
            <span className={styles.tabMeta}>
              0{index + 1}
              <span>{item.name}</span>
            </span>
            <span className={styles.problem}>{item.problem}</span>
            <span className={styles.tabArrow} aria-hidden="true">
              ↘
            </span>
          </button>
        ))}
      </div>
      <div ref={panels} className={styles.panels}>
        {INDUSTRY_OFFERS.map((item, index) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`capability-panel-${index}`}
            aria-labelledby={`capability-tab-${index}`}
            hidden={index !== active}
            tabIndex={0}
          >
            {index === active && (
              <div className={styles.panel}>
                <div className={styles.example}>
                  <p className={styles.kicker}>Example</p>
                  <p className={styles.exampleTitle}>{offer.example.title}</p>
                  <ol className={styles.flow}>
                    {offer.example.steps.map((step, stepIndex) => (
                      <li
                        key={step}
                        style={{ "--step": stepIndex } as CSSProperties}
                      >
                        <span className={styles.flowNum}>
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <p className={styles.guardrail}>{offer.guardrail}</p>
                </div>
                <div className={styles.panelCopy}>
                  <p className={styles.kicker}>{offer.name}</p>
                  <h3>{offer.headline}</h3>
                  <p>{offer.summary}</p>
                  <ul className={styles.offers}>
                    {offer.offers.map((o) => (
                      <li key={o.name}>{o.name}</li>
                    ))}
                  </ul>
                  <p className={styles.experience}>
                    <span>Why us</span>
                    {offer.experience}
                  </p>
                  <div className={styles.panelLinks}>
                    <Link href={localePath("/contact")}>
                      Show us your workflow <span aria-hidden="true">↗</span>
                    </Link>
                    <Link
                      href={localePath(PLAYBOOK_PATH)}
                      className={styles.secondaryLink}
                    >
                      Get the full playbook <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="services" className={styles.services}>
        <div>
          <p className={styles.kicker}>Under the hood</p>
          <h3>
            Four things we automate,
            <br />
            in every industry.
          </h3>
        </div>
        <div className={styles.serviceLinks}>
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.id}
              href={localePath(`/services#${solution.id}`)}
            >
              <span>
                <strong>{solution.name}</strong>
                {solution.title}
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
