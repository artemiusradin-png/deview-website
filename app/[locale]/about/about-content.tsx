"use client";

import { useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { SubpageNav } from "@/components/SubpageNav";
import { SiteFooter } from "@/components/SiteFooter";
import { TeamGrid } from "@/components/TeamGrid";
import styles from "./about.module.css";

function readCountryCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(^|;\s*)deview-country=([^;]+)/);
  return match ? decodeURIComponent(match[2]) : null;
}

const subscribeCountry = () => () => {};
const readDefaultCountry = () => null;

function Arrow() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 25 25 7M7 7h18v18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* Line pictograms for the four principles: ink strokes with one Deview-yellow element each. */
const ink = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" } as const;
const YELLOW = "#ffc933";

const PICTOGRAMS: ReactNode[] = [
  // Working systems only: a live application with a pulse and a check.
  <svg key="live" viewBox="0 0 150 104" aria-hidden="true">
    <rect x="6" y="10" width="124" height="86" {...ink} />
    <path d="M6 28h124" {...ink} />
    <circle cx="18" cy="19" r="2.5" fill="currentColor" />
    <circle cx="27" cy="19" r="2.5" fill="currentColor" />
    <circle cx="36" cy="19" r="2.5" fill="currentColor" />
    <path d="M16 70h22l8-20 12 36 10-26 6 10h40" {...ink} />
    <circle cx="128" cy="12" r="15" fill={YELLOW} />
    <path d="m121 12 5 5 9-10" {...ink} strokeWidth={2} />
  </svg>,
  // Outcome before architecture: the target first.
  <svg key="target" viewBox="0 0 150 104" aria-hidden="true">
    <circle cx="68" cy="54" r="44" {...ink} />
    <circle cx="68" cy="54" r="29" {...ink} />
    <circle cx="68" cy="54" r="14" fill={YELLOW} stroke="currentColor" strokeWidth={1.5} />
    <path d="M68 54 132 9" {...ink} />
    <path d="M80 53 68 54l5-11" {...ink} />
    <path d="M124 15l14 1M124 15l-1-14" {...ink} />
  </svg>,
  // Your data stays yours: data inside your own boundary.
  <svg key="data" viewBox="0 0 150 104" aria-hidden="true">
    <rect x="14" y="4" width="122" height="96" {...ink} strokeDasharray="5 5" />
    <ellipse cx="75" cy="30" rx="30" ry="9" fill={YELLOW} stroke="currentColor" strokeWidth={1.5} />
    <path d="M45 30v42c0 5 13.4 9 30 9s30-4 30-9V30" fill={YELLOW} stroke="currentColor" strokeWidth={1.5} />
    <path d="M45 44c0 5 13.4 9 30 9s30-4 30-9M45 58c0 5 13.4 9 30 9s30-4 30-9" {...ink} />
    <rect x="112" y="80" width="18" height="14" fill="#fffdf7" stroke="currentColor" strokeWidth={1.5} />
    <path d="M115 80v-5a6 6 0 0 1 12 0v5" {...ink} />
  </svg>,
  // Human judgment stays in place: the AI flags, a person decides.
  <svg key="human" viewBox="0 0 150 104" aria-hidden="true">
    <rect x="4" y="38" width="30" height="30" {...ink} />
    <path d="M12 53h14M19 46v14" {...ink} />
    <path d="M38 53h18" {...ink} />
    <path d="m50 47 6 6-6 6" {...ink} />
    <path d="M62 82V24" {...ink} />
    <path d="M62 24h30l-7 10 7 10H62Z" fill={YELLOW} stroke="currentColor" strokeWidth={1.5} />
    <path d="M98 53h12" {...ink} />
    <path d="m104 47 6 6-6 6" {...ink} />
    <circle cx="130" cy="40" r="10" {...ink} />
    <path d="M112 78c0-11 8-19 18-19s18 8 18 19" {...ink} />
  </svg>,
];

/** Short versions of the four values, in the same order as dict.aboutPage.values. */
const PRINCIPLES = [
  {
    title: "Working systems only",
    text: "Everything we build goes live: connected to real data, running real workflows. No slide decks, no pilots that stall.",
  },
  {
    title: "Outcome before architecture",
    text: "We size the cost of the problem first. If the ROI isn't clear, we don't start building.",
  },
  {
    title: "Your data stays yours",
    text: "Every system runs in your environment. No shared platforms, and you own what we build.",
  },
  {
    title: "Human judgment stays in place",
    text: "AI handles the volume. It flags the exceptions; your team makes the call.",
  },
];

/** One line on what each phase hands over (from the outputs on the How we work page). */
const PHASE_RESULTS: Record<string, string> = {
  "01": "A written recommendation with an ROI estimate and a cost range.",
  "02": "A signed scope and a fixed-price quote.",
  "03": "A working system, tested on your real data.",
  "04": "A live system your team owns, fully documented.",
};
/** Bar length on phones, roughly in proportion to each phase's typical duration. */
const PHASE_WIDTH: Record<string, string> = {
  "01": "40%",
  "02": "22%",
  "03": "100%",
  "04": "22%",
};

const INDUSTRY_LINKS = [
  { label: "Oil & gas", href: "/industries/oil-and-gas" },
  { label: "Lending & finance", href: "/industries/lending" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Legal", href: "/industries/legal" },
];
const OTHER_INDUSTRIES = ["Professional services", "Property"];

export function AboutContent() {
  const { dict, localePath } = useLocaleContext();
  const phases = dict.howWeWorkPage.phases;

  const country = useSyncExternalStore(
    subscribeCountry,
    readCountryCookie,
    readDefaultCountry,
  );
  const isHongKong = country === "HK";
  const cities = isHongKong
    ? [
        { name: "Hong Kong", role: "Headquarters" },
        { name: "Vancouver", role: "Sales office" },
        { name: "Edinburgh", role: "Sales office" },
        { name: "Stuttgart", role: "Sales office" },
      ]
    : [
        { name: "Hong Kong", role: "Asia-Pacific" },
        { name: "Vancouver", role: "North America" },
        { name: "Edinburgh", role: "Europe" },
        { name: "Stuttgart", role: "Europe" },
      ];

  return (
    <>
      <main className={styles.about}>
        <SubpageNav backHref="/" />

        <section
          className={`${styles.hero} ${styles.container}`}
          aria-labelledby="about-title"
        >
          <span className={styles.kicker}>About Deview</span>
          <div className={styles.heroGrid}>
            <h1 id="about-title" className={styles.heroTitle}>
              Good people.
              <br />
              Better systems.
            </h1>
            <div className={styles.heroLead}>
              <strong>An AI consulting and engineering firm.</strong> We build
              the AI, software and data systems that take manual work off
              operations and finance teams.
            </div>
          </div>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>From first conversation to a live system</dt>
              <dd>1–8 weeks</dd>
            </div>
            <div className={styles.fact}>
              <dt>Agreed in writing before any build starts</dt>
              <dd>Fixed price</dd>
            </div>
            <div className={styles.fact}>
              <dt>Code, models and data stay in your environment</dt>
              <dd>100% yours</dd>
            </div>
            <div className={styles.fact}>
              <dt>Hong Kong · Vancouver · Edinburgh · Stuttgart</dt>
              <dd>4 cities</dd>
            </div>
          </dl>
        </section>

        <section className={styles.statement} aria-label="What we deliver">
          <div className={styles.container}>
            <div className={styles.statementText}>
              Not demos. Not roadmaps.
              <br />
              <em>Working systems,</em>
              <br />
              deployed in weeks.
            </div>
            <div className={styles.statementNote}>
              Specific processes that cost time or money today, automated and
              connected to the systems you already use.
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="principles-title"
        >
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>01 / How we work</span>
              <h2 id="principles-title" className={styles.sectionTitle}>
                Four rules.
                <br />
                No exceptions.
              </h2>
            </div>
          </div>
          <ol className={styles.principles}>
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className={styles.principle}>
                <div className={styles.pictogram}>{PICTOGRAMS[index]}</div>
                <span className={styles.principleNum}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{principle.title}</h3>
                <span className={styles.principleText}>{principle.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="process-title"
        >
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>02 / The process</span>
              <h2 id="process-title" className={styles.sectionTitle}>
                From first call
                <br />
                to live system.
              </h2>
            </div>
            <span className={styles.sectionLead}>
              Four phases, one fixed price, agreed before the build starts.
            </span>
          </div>
          <ol className={styles.timeline}>
            {phases.map((phase) => (
              <li
                key={phase.number}
                className={styles.phase}
                data-accent={phase.number === "03"}
                style={{ "--w": PHASE_WIDTH[phase.number] } as CSSProperties}
              >
                <div className={styles.phaseBar} aria-hidden="true" />
                <div className={styles.phaseBody}>
                  <div className={styles.phaseTop}>
                    <span>{phase.number}</span>
                    <span>{phase.duration}</span>
                  </div>
                  <h3>
                    {phase.label.charAt(0) + phase.label.slice(1).toLowerCase()}
                  </h3>
                  <div className={styles.phaseText}>
                    {PHASE_RESULTS[phase.number]}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.processFoot}>
            <span>Each phase ends with something you can review and keep.</span>
            <Link href={localePath("/how-we-work")} className={styles.textLink}>
              See the full process <Arrow />
            </Link>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="team-title"
        >
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>03 / The team</span>
              <h2 id="team-title" className={styles.sectionTitle}>
                The people who
                <br />
                build and ship.
              </h2>
            </div>
            <span className={styles.sectionLead}>
              The people who scope your project are the people who build it.
            </span>
          </div>
          <TeamGrid variant="grid" />
        </section>

        <section className={styles.where} aria-labelledby="where-title">
          <div className={`${styles.container} ${styles.whereGrid}`}>
            <div>
              <span className={styles.kicker}>04 / Where we are</span>
              <h2 id="where-title" className={styles.sectionTitle}>
                Four cities.
                <br />
                One team.
              </h2>
              <ul className={styles.cities}>
                {cities.map((city) => (
                  <li key={city.name} className={styles.city}>
                    <span className={styles.cityName}>{city.name}</span>
                    <span className={styles.cityRole}>{city.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.who}>
              <span className={styles.kicker}>Who we work with</span>
              <div className={styles.whoValue}>Mid-market to enterprise</div>
              <div className={styles.whoSub}>
                Operations, finance and compliance teams in:
              </div>
              <ul className={styles.chips}>
                {INDUSTRY_LINKS.map((industry) => (
                  <li key={industry.href} className={styles.chip}>
                    <Link href={localePath(industry.href)}>
                      {industry.label} <Arrow />
                    </Link>
                  </li>
                ))}
                {OTHER_INDUSTRIES.map((industry) => (
                  <li key={industry} className={styles.chip}>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
