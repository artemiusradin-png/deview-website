"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { CapabilityDiagram } from "@/components/CapabilityDiagram";
import { useMotionOnView } from "./home-motion";
import styles from "./home-capabilities.module.css";

const directions = [
  {
    problem: "Too much manual work.",
    title: "Give your people their time back.",
    note: "From incoming work to a clear next step.",
    copy: "AI that reads, sorts, drafts, and routes the everyday work. Your team stays in control of the decisions that matter.",
  },
  {
    problem: "Tools that don’t connect.",
    title: "Make the whole business click.",
    note: "Separate tools. One connected way of working.",
    copy: "Purpose-built software that brings your people, processes, and existing tools together. Less switching. Fewer gaps. A system that fits.",
  },
  {
    problem: "Data without answers.",
    title: "Turn the noise into a clear view.",
    note: "Your information, ready to work with.",
    copy: "Reliable pipelines, useful dashboards, and models built around your own data. Find the signal and make your next decision with confidence.",
  },
];

export function HomeCapabilities() {
  const { dict, localePath } = useLocaleContext();
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  // The drawing traces in when the panel scrolls into view, and again on every tab change
  // (the panel remounts, so its animation restarts).
  const panels = useRef<HTMLDivElement>(null);
  useMotionOnView(panels);
  const practice = dict.practices.items[active];
  const direction = directions[active];
  return (
    <section
      id="expertise"
      className={styles.section}
      aria-labelledby="expertise-title"
    >
      <div id="retro-feature-cards" />
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>01 / A better way to work</p>
          <h2 id="expertise-title">
            Less friction.
            <br />
            More possibility.
          </h2>
        </div>
        <p>
          Start with what’s getting in the way.
          <br />
          We’ll build what moves you forward.
        </p>
      </div>
      <div
        id="practices"
        role="tablist"
        aria-label="What is slowing your business down?"
        className={styles.tabs}
      >
        {directions.map((item, index) => (
          <button
            key={item.problem}
            type="button"
            role="tab"
            id={`capability-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`capability-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            ref={(el) => {
              buttons.current[index] = el;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (active + 1) % 3
                  : event.key === "ArrowLeft"
                    ? (active + 2) % 3
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
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
              <span>{dict.practices.items[index].heading}</span>
            </span>
            <span className={styles.problem}>{item.problem}</span>
            <span className={styles.tabArrow} aria-hidden="true">
              ↘
            </span>
          </button>
        ))}
      </div>
      <div ref={panels}>
        {directions.map((item, index) => (
          <div
            key={item.problem}
            role="tabpanel"
            id={`capability-panel-${index}`}
            aria-labelledby={`capability-tab-${index}`}
            hidden={index !== active}
            tabIndex={0}
          >
            {index === active && (
              <div className={styles.panel}>
                <div className={styles.diagram}>
                  <CapabilityDiagram mode={active} />
                  <p>{direction.note}</p>
                </div>
                <div className={styles.panelCopy}>
                  <p className={styles.kicker}>{practice.heading}</p>
                  <h3>{direction.title}</h3>
                  <p>{direction.copy}</p>
                  <ul>
                    {practice.subs.slice(0, 4).map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <Link href={localePath(`/services#${practice.id}`)}>
                    Explore {practice.heading.toLowerCase()}{" "}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="services" className={styles.services}>
        <div>
          <p className={styles.kicker}>A place to start</p>
          <h3>
            One useful change
            <br />
            can change a lot.
          </h3>
        </div>
        <div className={styles.serviceLinks}>
          {dict.services.items.map((service) => (
            <Link key={service.id} href={localePath(`/services#${service.id}`)}>
              <span>{service.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
