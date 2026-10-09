"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamGrid } from "@/components/TeamGrid";
import { HomeCapabilities } from "./home-capabilities";
import { HeroBackgroundVideo } from "./home-hero-video";
import { CountUp, useMotionOnView } from "./home-motion";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { INSIGHT_ARTICLES } from "@/lib/insights";
import { SITE_INQUIRY_EMAIL, buildInquiryMailto } from "@/lib/site-contact";
import styles from "./home.module.css";

function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M7 25 25 7M7 7h18v18" : "M4 16h23M17 6l10 10-10 10"}
        stroke="currentColor"
        strokeWidth="1.5"
        pathLength={1}
      />
    </svg>
  );
}

function ProjectLogos({ duplicate = false }: { duplicate?: boolean }) {
  const logos = [
    {
      name: "EVDEV",
      src: "/client-logos/evdev.svg",
      width: 96,
      height: 19,
      className: styles.clientEvdev,
    },
    {
      name: "Fizkultura",
      src: "/client-logos/fizkultura.png",
      width: 118,
      height: 79,
      className: styles.clientFizkultura,
    },
    {
      name: "Gazprom International",
      src: "/client-logos/oil-gas/gazprom-international.png",
      width: 203,
      height: 100,
      className: styles.clientGazprom,
    },
    {
      name: "Jetfans",
      src: "/client-logos/jetfans-eu.png",
      width: 181,
      height: 242,
      className: styles.clientJetfans,
    },
    {
      name: "Covenant Desk",
      src: "/client-logos/covenant-desk.png",
      width: 1855,
      height: 427,
      className: styles.clientCovenant,
    },
  ];

  return (
    <ul
      className={styles.clientList}
      aria-label={duplicate ? undefined : "Selected project companies"}
      aria-hidden={duplicate || undefined}
    >
      <li className={styles.clientGrand}>
        GRAND<span>FINANCE GROUP</span>
      </li>
      <li className={styles.clientNextair}>
        nextair<span aria-hidden="true">↗</span>
      </li>
      {logos.map((logo) => (
        <li key={logo.name} className={styles.clientLogo}>
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className={logo.className}
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  number,
  label,
  title,
  id,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  id: string;
  children?: ReactNode;
}) {
  return (
    <>
      <p className={styles.eyebrow}>
        {number} / {label}
      </p>
      <div className={styles.sectionIntro}>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </>
  );
}

export function HomeContent({
  heroVideoSrc,
  heroVideoPoster,
}: { heroVideoSrc?: string; heroVideoPoster?: string } = {}) {
  const { dict, localePath } = useLocaleContext();
  const [logosPaused, setLogosPaused] = useState(false);
  const portalRef = useRef<SVGSVGElement>(null);
  const processRef = useRef<HTMLOListElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  useMotionOnView(portalRef);
  useMotionOnView(processRef, 0.5);
  useMotionOnView(contactRef);
  const [inquiryStatus, setInquiryStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [emailDraft, setEmailDraft] = useState<string | null>(null);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inquiryStatus === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const inquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      details: String(data.get("details") ?? "").trim(),
      honeypot: String(data.get("company_website") ?? ""),
    };
    setInquiryStatus("sending");
    setEmailDraft(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(inquiry),
      });
      const result = await response.json().catch(() => null);
      if (response.ok && result?.ok) {
        setInquiryStatus("success");
        form.reset();
        return;
      }
    } catch {
      // Keep the completed inquiry available through the existing email fallback.
    }
    setEmailDraft(buildInquiryMailto(inquiry));
    setInquiryStatus("error");
  }

  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <SiteHeader home />

      <main id="main-content" tabIndex={-1}>
        <section id="hero" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCanvas}>
            {heroVideoSrc && (
              <HeroBackgroundVideo
                src={heroVideoSrc}
                poster={heroVideoPoster}
              />
            )}
            <div className={`${styles.heroContent} ${styles.container}`}>
              <div className={styles.heroEyebrow}>
                <p className={styles.eyebrow}>AI + software + data</p>
                <span>Built for the real world.</span>
              </div>
              <h1 id="hero-title" className={styles.heroTitle}>
                <span>Less busywork.</span>
                <span className={styles.heroSecondLine}>
                  More impact.
                  <Arrow className={styles.heroArrow} />
                </span>
              </h1>
              <div className={styles.heroBottom}>
                <div className={styles.heroIntro}>
                  <p>
                    We build AI, software, and data systems that take the
                    busywork off your plate. So your people can get back to what
                    matters.
                  </p>
                  <div className={styles.heroActions}>
                    <Link
                      href={localePath("/contact")}
                      className={`${styles.button} ${styles.buttonAccent}`}
                    >
                      Let’s build something <Arrow diagonal />
                    </Link>
                    <a href="#work" className={styles.textLink}>
                      See our work <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.clients} ${styles.container}`}
            data-paused={logosPaused}
          >
            <p>
              Good company.
              <br /> Real projects.
            </p>
            <div className={styles.clientMarquee}>
              <div className={styles.clientTrack}>
                <ProjectLogos />
                <ProjectLogos duplicate />
              </div>
            </div>
            <button
              type="button"
              className={styles.clientPause}
              aria-label={
                logosPaused
                  ? "Resume scrolling companies"
                  : "Pause scrolling companies"
              }
              onClick={() => setLogosPaused((paused) => !paused)}
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {logosPaused ? (
                  <path d="m7 4 9 6-9 6V4Z" fill="currentColor" />
                ) : (
                  <path
                    d="M7 4v12M13 4v12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </section>

        <HomeCapabilities />

        <section
          id="work"
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="work-title"
        >
          <SectionHeading
            number="02"
            label="Selected work"
            title={
              <>
                Less talk.
                <br />
                More working.
              </>
            }
            id="work-title"
          >
            <Link
              href={localePath("/case-studies")}
              className={styles.textLink}
            >
              All case studies <Arrow diagonal />
            </Link>
          </SectionHeading>
          <div className={styles.projectGrid}>
            <Link
              id="featured-deployment"
              href={localePath("/case-studies")}
              className={styles.project}
              aria-label="Read the AgroPlatforma case study"
            >
              <div className={`${styles.projectArtwork} ${styles.agroArtwork}`}>
                <div className={styles.artworkTop}>
                  <span>AgroPlatforma</span>
                  <span className={styles.projectTag}>AI in the field</span>
                </div>
                <div className={styles.timeResult}>
                  <span className={styles.oldTime}>~40 min</span>
                  <div className={styles.newTime}>
                    <span>
                      &lt;
                      <CountUp to={30} />
                    </span>
                    <span>sec.</span>
                  </div>
                </div>
                <div className={styles.artworkBottom}>
                  <span>From field diagnosis to quote.</span>
                  <Arrow diagonal />
                </div>
              </div>
              <div className={styles.projectCaption}>
                <h3>
                  A whole new pace
                  <br />
                  for agriculture.
                </h3>
                <Arrow diagonal />
              </div>
              <p>
                Three connected AI agents. One field-to-quote workflow. Built
                into the tools the team already uses.
              </p>
              <span className={styles.projectCategory}>
                AI automation / Software engineering
              </span>
            </Link>
            <Link
              id="featured-deployment-finance"
              href={localePath("/case-studies")}
              className={styles.project}
              aria-label="Read the Deview Unified Portal case study"
            >
              <div
                className={`${styles.projectArtwork} ${styles.portalArtwork}`}
              >
                <div className={styles.artworkTop}>
                  <span>Deview Unified Portal</span>
                  <span className={styles.projectTag}>Connected finance</span>
                </div>
                <div className={styles.portalTitle}>
                  Five companies.
                  <br />
                  One clear view.
                </div>
                <svg
                  ref={portalRef}
                  className={styles.portalDrawing}
                  viewBox="0 0 500 220"
                  fill="none"
                  aria-hidden="true"
                >
                  <g stroke="currentColor" strokeWidth="1.5">
                    <path
                      className={styles.portalLinks}
                      d="M80 33h64c36 0 17 77 64 77h77M80 71h42c36 0 22 39 68 39M80 110h205M80 149h42c36 0 22-39 68-39M80 187h64c36 0 17-77 64-77h77"
                      pathLength={1}
                    />
                    {[15, 53, 92, 131, 169].map((y) => (
                      <rect
                        key={y}
                        x="43"
                        y={y}
                        width="36"
                        height="36"
                        className={styles.diagramNode}
                      />
                    ))}
                    <rect
                      x="285"
                      y="48"
                      width="160"
                      height="124"
                      fill="#171207"
                    />
                  </g>
                  <path
                    className={styles.portalLines}
                    d="M310 75h39m-39 13h66m-66 15h110"
                    stroke="#f3eee2"
                    strokeWidth="2"
                    pathLength={1}
                  />
                  <path
                    className={styles.portalTick}
                    d="m332 137 19 14 46-38"
                    stroke="#ffc933"
                    strokeWidth="5"
                    pathLength={1}
                  />
                </svg>
                <div className={styles.artworkBottom}>
                  <span>Borrower intelligence, brought together.</span>
                  <Arrow diagonal />
                </div>
              </div>
              <div className={styles.projectCaption}>
                <h3>
                  The full picture.
                  <br />
                  Finally in one place.
                </h3>
                <Arrow diagonal />
              </div>
              <p>
                One portal brings borrower data, credit analysis, and document
                processing together for five lending companies.
              </p>
              <span className={styles.projectCategory}>
                Custom platform / Data engineering
              </span>
            </Link>
          </div>
        </section>

        <section
          id="approach"
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="approach-title"
        >
          <SectionHeading
            number="03"
            label={dict.process.sectionLabel}
            title={
              <>
                Small team.
                <br />
                Full follow-through.
              </>
            }
            id="approach-title"
          >
            <p>
              You work directly with the people who design and build your
              system. We scope the problem, ship in weeks, and stay for what
              comes next.
            </p>
          </SectionHeading>
          <ol ref={processRef} className={styles.processSteps}>
            {dict.process.steps.map((step) => (
              <li key={step.number}>
                <div className={styles.processStepTop}>
                  <span>{step.number}</span>
                  <Arrow />
                </div>
                <h3>
                  {step.label.charAt(0) + step.label.slice(1).toLowerCase()}
                </h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <Link href={localePath("/how-we-work")} className={styles.textLink}>
            A closer look at our process <Arrow diagonal />
          </Link>
        </section>

        <section
          id="industries"
          className={`${styles.industries} ${styles.container}`}
          aria-label="Industries we serve"
        >
          <p className={styles.eyebrow}>Experience across</p>
          <nav aria-label="Industries">
            <Link href={localePath("/industries/oil-and-gas")}>
              Oil &amp; gas <Arrow diagonal />
            </Link>
            {dict.industries.tiles.map((industry) => (
              <Link key={industry.id} href={localePath(industry.href)}>
                {industry.label.toLowerCase()} <Arrow diagonal />
              </Link>
            ))}
          </nav>
        </section>

        <section
          id="team"
          className={`${styles.section} ${styles.teamSection}`}
          aria-labelledby="team-title"
        >
          <div className={styles.container}>
            <SectionHeading
              number="04"
              label="The people"
              title={
                <>
                  Good minds.
                  <br />
                  Better together.
                </>
              }
              id="team-title"
            >
              <p>
                The people you talk to are the people who build it. Meet the
                team behind your next move.
              </p>
            </SectionHeading>
            <TeamGrid />
            <div className={styles.teamFooter}>
              <p>Hong Kong · Vancouver · Edinburgh · Stuttgart</p>
              <Link href={localePath("/about")} className={styles.textLink}>
                More about Deview <Arrow diagonal />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="insights"
          className={styles.section}
          aria-labelledby="insights-title"
        >
          <div className={styles.container}>
            <SectionHeading
              number="05"
              label={dict.insights.sectionLabel}
              title={
                <>
                  Good questions.
                  <br />
                  Useful answers.
                </>
              }
              id="insights-title"
            >
              <Link href={localePath("/insights")} className={styles.textLink}>
                All insights <Arrow diagonal />
              </Link>
            </SectionHeading>
            <div className={styles.insightGrid}>
              {dict.insights.articles.map((article, index) => {
                const meta = INSIGHT_ARTICLES[index];
                return (
                  <Link
                    key={meta.slug}
                    href={localePath(`/insights/${meta.slug}`)}
                    className={styles.insightCard}
                  >
                    <div className={styles.insightMeta}>
                      <span>{article.label}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <span className={styles.textLink}>
                      Read the story <Arrow diagonal />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={contactRef}
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <div className={styles.container}>
            <p className={styles.eyebrow}>{dict.footer.ctaLabel}</p>
            <Link href={localePath("/contact")} className={styles.contactLink}>
              <h2 id="contact-title">
                Your next
                <br />
                move.
              </h2>
              <Arrow diagonal className={styles.contactArrow} />
            </Link>
            <div className={styles.contactBottom}>
              <p>{dict.footer.ctaCopy}</p>
              <Link href={localePath("/contact")} className={styles.button}>
                Let’s talk <Arrow diagonal />
              </Link>
              <a
                href={`mailto:${SITE_INQUIRY_EMAIL}`}
                className={styles.contactEmail}
              >
                {SITE_INQUIRY_EMAIL}
              </a>
            </div>
            <details id="inquiry" className={styles.inquiryDisclosure}>
              <summary>
                <span>Prefer to write?</span>
                <span>
                  Send us a note{" "}
                  <span className={styles.practiceToggle} aria-hidden="true" />
                </span>
              </summary>
              <form
                className={styles.inquiryForm}
                onSubmit={submitInquiry}
                aria-label="Project inquiry"
                aria-busy={inquiryStatus === "sending"}
              >
                <div className={styles.formRow}>
                  <label>
                    {dict.contactForm.fullName}
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={200}
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    {dict.contactForm.workEmail}
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={320}
                      placeholder="name@company.com"
                    />
                  </label>
                  <label>
                    {dict.contactForm.company} <span>(optional)</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      maxLength={200}
                      placeholder="Company name"
                    />
                  </label>
                </div>
                <label>
                  {dict.contactForm.problem}
                  <textarea
                    name="details"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={3}
                    placeholder="Tell us about the process and what a better outcome would look like."
                  />
                </label>
                <div className={styles.honeypot} aria-hidden="true">
                  <label>
                    Leave this empty
                    <input
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className={styles.formActions}>
                  <p>
                    No commitment required. A specific recommendation within 1–2
                    business days.
                  </p>
                  <button
                    type="submit"
                    className={styles.button}
                    disabled={inquiryStatus === "sending"}
                  >
                    {inquiryStatus === "sending" ? "Sending…" : "Send inquiry"}
                    <Arrow diagonal />
                  </button>
                </div>
                <div
                  aria-live="polite"
                  role="status"
                  className={styles.formFeedback}
                >
                  {inquiryStatus === "success" && (
                    <p>{dict.contactForm.submitSuccess}</p>
                  )}
                  {inquiryStatus === "error" && (
                    <p>
                      We couldn’t send this just now. Your details are still
                      here. Try again
                      {emailDraft && (
                        <>
                          , or{" "}
                          <a href={emailDraft}>
                            send this inquiry using your email app
                          </a>
                        </>
                      )}
                      .
                    </p>
                  )}
                </div>
              </form>
            </details>
          </div>
        </section>
      </main>
      <div className={styles.footerShell}>
        <SiteFooter hideCta />
        <details className={`${styles.logoCredits} ${styles.container}`}>
          <summary>Logo credits</summary>
          <p>
            Gazprom International logo by Gazprom International, via{" "}
            <a href="https://commons.wikimedia.org/wiki/File:GInt_Blue.png">
              Wikimedia Commons
            </a>
            , displayed in monochrome and licensed under{" "}
            <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>
            .
          </p>
        </details>
      </div>
    </div>
  );
}
