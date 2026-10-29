"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Landmark, Flame, Factory } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamGrid } from "@/components/TeamGrid";
import { HomeCapabilities } from "./home-capabilities";
import { HeroBackgroundVideo } from "./home-hero-video";
import { HeroInquiryForm } from "./home-hero-form";
import { useMotionOnView } from "./home-motion";
import { EditorialReveal, IndustryMark, ProcessVisual, TeamLocations, TeamNetwork } from "./home-editorial-visuals";
import { SiteFooter } from "@/components/SiteFooter";
import GlassFolder, { type ArtRecipe } from "@/components/ui/glass-folder-cards";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { INSIGHT_ARTICLES } from "@/lib/insights";
import { SERVICE_LINES } from "@/lib/workflow-offers";
import { servicePageFor, servicePagePath } from "@/lib/service-pages";
import { SITE_INQUIRY_EMAIL, buildInquiryMailto } from "@/lib/site-contact";
import { getAttributionContext } from "@/lib/analytics/events";
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
      name: "EnerQuest Energy",
      src: "/client-logos/enerquest.png",
      width: 383,
      height: 91,
      className: styles.clientEnerquest,
    },
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
      name: "Grand Finance",
      src: "/client-logos/grand-finance.png",
      width: 149,
      height: 47,
      className: styles.clientGrand,
    },
  ];

  return (
    <ul
      className={styles.clientList}
      aria-label={duplicate ? undefined : "Selected project companies"}
      aria-hidden={duplicate || undefined}
    >
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

/**
 * Directory ratings under the hero buttons: each site's own logo (copied from its header,
 * public/review-logos) and five stars, no frame. Review counts are left out on purpose until
 * there are more reviews.
 */
function ReviewBadges() {
  return (
    <ul className={styles.reviewBadges} aria-label="Reviews">
      <li>
        <a
          href="https://clutch.co/profile/deview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            unoptimized
            src="/review-logos/clutch.svg"
            alt="Clutch"
            width={64}
            height={18}
            className={styles.badgeLogo}
          />
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          <span className="sr-only">
            Rated 5 out of 5 on Clutch (opens in a new tab)
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://www.goodfirms.co/company/deview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            unoptimized
            src="/review-logos/goodfirms.svg"
            alt="GoodFirms"
            width={98}
            height={19}
            className={styles.badgeLogo}
          />
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          <span className="sr-only">
            Rated 5 out of 5 on GoodFirms (opens in a new tab)
          </span>
        </a>
      </li>
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
  number?: string;
  label?: string;
  title: ReactNode;
  id: string;
  children?: ReactNode;
}) {
  return (
    <>
      {number && label ? (
        <p className={styles.eyebrow}>
          {number} / {label}
        </p>
      ) : null}
      <div className={styles.sectionIntro}>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </>
  );
}

// Brand-colored procedural liquid recipes for GlassFolder cards
const FOLDER_ART_RECIPES = {
  // Folder 1: Finance & Lending
  financeFolder: {
    style: "marble",
    colors: ["#0b1220", "#14284b", "#1c65b7", "#5caaff", "#ffc933", "#f3eee2"],
    scale: 0.68,
    warp: 3.4,
    angle: 0.65,
    gloss: 0.5,
    veins: 0.4,
  } satisfies ArtRecipe,
  covenantDesk: {
    style: "marble",
    colors: ["#081226", "#0f2b5c", "#1c65b7", "#5caaff", "#ffc933", "#fef3c7"],
    scale: 0.65,
    warp: 3.5,
    angle: 0.7,
    gloss: 0.55,
    veins: 0.45,
  } satisfies ArtRecipe,
  grandFinance: {
    style: "streak",
    colors: ["#120e06", "#3b2608", "#8a5800", "#d97706", "#ffc933", "#ffedd5"],
    scale: 0.72,
    warp: 2.4,
    angle: -0.45,
    gloss: 0.45,
    veins: 0.25,
  } satisfies ArtRecipe,
  everySuccess: {
    style: "marble",
    colors: ["#0b1021", "#1e295d", "#314cb6", "#60a5fa", "#ffc933", "#ffffff"],
    scale: 0.66,
    warp: 3.6,
    angle: 1.2,
    gloss: 0.5,
    veins: 0.5,
  } satisfies ArtRecipe,
  financeOthers: {
    style: "marble",
    colors: ["#0a192f", "#134e4a", "#0d9488", "#5eead4", "#ffc933", "#f0fdf4"],
    scale: 0.7,
    warp: 3.2,
    angle: -0.8,
    gloss: 0.48,
    veins: 0.4,
  } satisfies ArtRecipe,

  // Folder 2: Oil & Gas / Energy
  energyFolder: {
    style: "marble",
    colors: ["#090a0d", "#1c1007", "#7c2d12", "#c2410c", "#ea580c", "#ffc933"],
    scale: 0.65,
    warp: 3.5,
    angle: -0.5,
    gloss: 0.55,
    veins: 0.6,
  } satisfies ArtRecipe,
  enerquest: {
    style: "marble",
    colors: ["#09090b", "#1a120b", "#7c2d12", "#c2410c", "#f97316", "#ffc933"],
    scale: 0.65,
    warp: 3.5,
    angle: -0.6,
    gloss: 0.6,
    veins: 0.6,
  } satisfies ArtRecipe,
  gazpromNeft: {
    style: "streak",
    colors: ["#060d1a", "#0c2854", "#1d4ed8", "#38bdf8", "#ffc933", "#fef9c3"],
    scale: 0.7,
    warp: 2.1,
    angle: 0.45,
    gloss: 0.42,
    veins: 0.2,
  } satisfies ArtRecipe,
  lukoil: {
    style: "marble",
    colors: ["#060c08", "#122a1c", "#1e5e3a", "#34d399", "#d97706", "#ffc933"],
    scale: 0.68,
    warp: 3.3,
    angle: 1.8,
    gloss: 0.52,
    veins: 0.5,
  } satisfies ArtRecipe,
  energyOthers: {
    style: "marble",
    colors: ["#0f0505", "#3f100a", "#9a1e12", "#ea580c", "#ffc933", "#fffbeb"],
    scale: 0.72,
    warp: 3.4,
    angle: -0.9,
    gloss: 0.55,
    veins: 0.55,
  } satisfies ArtRecipe,

  // Folder 3: Operations & Industrial
  opsFolder: {
    style: "marble",
    colors: ["#080e0a", "#12281c", "#087a55", "#8de7bd", "#d97706", "#ffc933"],
    scale: 0.7,
    warp: 3.3,
    angle: 2.1,
    gloss: 0.5,
    veins: 0.45,
  } satisfies ArtRecipe,
  jetfans: {
    style: "marble",
    colors: ["#0a120e", "#153324", "#059669", "#34d399", "#ffc933", "#f3eee2"],
    scale: 0.66,
    warp: 3.4,
    angle: 2.0,
    gloss: 0.52,
    veins: 0.45,
  } satisfies ArtRecipe,
  nextair: {
    style: "streak",
    colors: ["#081726", "#0f3a5a", "#0284c7", "#38bdf8", "#8de7bd", "#ffc933"],
    scale: 0.72,
    warp: 2.4,
    angle: -0.55,
    gloss: 0.38,
    veins: 0.2,
  } satisfies ArtRecipe,
  storepilot: {
    style: "marble",
    colors: ["#140a26", "#371b6b", "#7c3aed", "#c084fc", "#ffc933", "#ffffff"],
    scale: 0.68,
    warp: 3.5,
    angle: 0.95,
    gloss: 0.5,
    veins: 0.4,
  } satisfies ArtRecipe,
  opsOthers: {
    style: "marble",
    colors: ["#0c140a", "#1b3314", "#4d7c0f", "#a3e635", "#ffc933", "#fefce8"],
    scale: 0.7,
    warp: 3.2,
    angle: -1.3,
    gloss: 0.5,
    veins: 0.45,
  } satisfies ArtRecipe,
} as const;

export function HomeContent({
  heroVideoSrc,
  heroVideoPoster,
}: { heroVideoSrc?: string; heroVideoPoster?: string } = {}) {
  const { dict, localePath } = useLocaleContext();
  const processRef = useRef<HTMLOListElement>(null);
  const contactRef = useRef<HTMLElement>(null);
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
        body: JSON.stringify({ ...inquiry, attribution: getAttributionContext() }),
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
                <p className={styles.eyebrow}>Custom software development</p>
                <span>Product · AI/ML · Data · Cloud · Platforms</span>
              </div>
              <div className={styles.heroGrid}>
                <div>
                  <h1 id="hero-title" className={styles.heroTitle}>
                    <span>Custom software.</span>
                    <span className={styles.heroSecondLine}>Real impact.</span>
                  </h1>
                  <div className={styles.heroBottom}>
                    <div className={styles.heroIntro}>
                      <p>
                        Product engineering, AI/ML, data, cloud and DevOps, and
                        enterprise platforms for financial and industrial
                        companies. Our team has built enterprise systems since
                        2010.
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
                      <ReviewBadges />
                    </div>
                  </div>
                </div>
                <HeroInquiryForm />
              </div>
            </div>
          </div>
          <div className={`${styles.clients} ${styles.container}`}>
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
          </div>
        </section>

        <HomeCapabilities />

        <section
          id="what-we-ship"
          className={styles.whySection}
          aria-labelledby="ship-title"
        >
          <div className={styles.shipBackdrop} aria-hidden="true">
            <Image
              src="/images/home/services-architecture.webp"
              alt=""
              fill
              sizes="100vw"
              className={styles.shipImage}
              unoptimized
            />
          </div>
          <div className={styles.container}>
            <SectionHeading
              title="Our services"
              id="ship-title"
            >
              <p>From first design to running in production, with security built in.</p>
            </SectionHeading>
            <ol className={styles.whyList}>
              {SERVICE_LINES.map((line, index) => (
                <li key={line.id}>
                  <span className={styles.whyNum}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{line.name}</h3>
                  <p>{line.title}</p>
                  <Link
                    href={localePath(
                      servicePageFor(line.id)
                        ? servicePagePath(servicePageFor(line.id)!.slug)
                        : `/services#${line.id}`,
                    )}
                    className={styles.shipLink}
                  >
                    More <Arrow diagonal />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="work"
          className={`${styles.section} ${styles.container} ${styles.workSection}`}
          aria-labelledby="work-title"
        >
          <SectionHeading
            title="Selected Work"
            id="work-title"
          >
            <div className={styles.workHeadingControls}>
              <Link
                href={localePath("/case-studies")}
                className={styles.textLink}
              >
                All case studies <Arrow diagonal />
              </Link>
            </div>
          </SectionHeading>

          <div
            className={styles.folderGrid}
            role="region"
            aria-label="Selected work by industry"
          >
            <GlassFolder
              label="Finance & Lending"
              icon={<Landmark size={17} aria-hidden="true" />}
              meta="Hong Kong & Global · Credit operations"
              art={FOLDER_ART_RECIPES.financeFolder}
              tone="light"
              action="none"
              labelPlacement="bottom-left"
              width={320}
              appearDelay={0}
              files={[
                {
                  name: "Covenant Desk",
                  meta: "17,000+ borrower records",
                  art: FOLDER_ART_RECIPES.covenantDesk,
                  href: localePath("/case-studies/covenant-desk"),
                },
                {
                  name: "Grand Finance 高昇財務",
                  meta: "Governed lending deployment",
                  art: FOLDER_ART_RECIPES.grandFinance,
                  href: localePath("/industries/lending#grand-finance"),
                },
                {
                  name: "Every Success Credit",
                  meta: "Credit approval & risk checks",
                  art: FOLDER_ART_RECIPES.everySuccess,
                  href: localePath("/industries/lending"),
                },
                {
                  name: "+ Others",
                  meta: "Wah Wei, KK Credit, Rich Eagle",
                  art: FOLDER_ART_RECIPES.financeOthers,
                  href: localePath("/industries/lending"),
                },
              ]}
            />

            <GlassFolder
              label="Oil & Gas / Energy"
              icon={<Flame size={17} aria-hidden="true" />}
              meta="Digital oilfield & capital systems"
              art={FOLDER_ART_RECIPES.energyFolder}
              tone="dark"
              action="none"
              labelPlacement="bottom-left"
              width={320}
              appearDelay={140}
              files={[
                {
                  name: "EnerQuest Energy",
                  meta: "DOF pilot · Nigeria",
                  art: FOLDER_ART_RECIPES.enerquest,
                  href: localePath("/case-studies/enerquest"),
                },
                {
                  name: "Gazprom Neft",
                  meta: "Project scheduling & controls",
                  art: FOLDER_ART_RECIPES.gazpromNeft,
                  href: localePath("/industries/oil-and-gas/gazprom-neft-project-scheduling-control-system"),
                },
                {
                  name: "Lukoil Engineering",
                  meta: "Drawing RAG & EDM",
                  art: FOLDER_ART_RECIPES.lukoil,
                  href: localePath("/industries/oil-and-gas/lukoil-engineering-engineering-data-management-system"),
                },
                {
                  name: "+ Others",
                  meta: "Tomskneft & Vietgazprom",
                  art: FOLDER_ART_RECIPES.energyOthers,
                  href: localePath("/industries/oil-and-gas"),
                },
              ]}
            />

            <GlassFolder
              label="Operations & Industrial"
              icon={<Factory size={17} aria-hidden="true" />}
              meta="Inquiry capture, OCR & workflows"
              art={FOLDER_ART_RECIPES.opsFolder}
              tone="light"
              action="none"
              labelPlacement="bottom-left"
              width={320}
              appearDelay={280}
              files={[
                {
                  name: "Jetfans",
                  meta: "Inquiries in · Structured out",
                  art: FOLDER_ART_RECIPES.jetfans,
                  href: localePath("/case-studies/jetfans"),
                },
                {
                  name: "Nextair",
                  meta: "Ventilation systems engineering",
                  art: FOLDER_ART_RECIPES.nextair,
                  href: localePath("/case-studies/nextair"),
                },
                {
                  name: "StorePilot (EVDEV)",
                  meta: "E-commerce AI conversion",
                  art: FOLDER_ART_RECIPES.storepilot,
                  href: localePath("/case-studies/storepilot"),
                },
                {
                  name: "+ Others",
                  meta: "Agroplatforma & logistics",
                  art: FOLDER_ART_RECIPES.opsOthers,
                  href: localePath("/case-studies"),
                },
              ]}
            />
          </div>
          <p className={styles.folderHint} aria-hidden="true">
            Hover to lean · Click to open · Click a project to read case study
          </p>
        </section>

        <section
          id="approach"
          className={`${styles.section} ${styles.container}`}
          aria-labelledby="approach-title"
        >
          <SectionHeading
            title={
              <>
                Dedicated team.
                <br />
                Full follow-through.
              </>
            }
            id="approach-title"
          >
            <p>
              You work directly with the people who design and build your
              system. We scope the problem, build the system, and stay for what
              comes next.
            </p>
          </SectionHeading>
          <ol ref={processRef} className={styles.processSteps}>
            {dict.process.steps.map((step, index) => (
              <li key={step.number}>
                <div className={styles.processStepTop}>
                  <span>{step.number}</span>
                  <Arrow />
                </div>
                <ProcessVisual step={index} className={styles.processVisualSlot} />
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
              <IndustryMark industry="oil-and-gas" />
              <span>Oil &amp; gas</span> <Arrow diagonal />
            </Link>
            {dict.industries.tiles.map((industry) => (
              <Link key={industry.id} href={localePath(industry.href)}>
                <IndustryMark industry={industry.id} />
                <span>{industry.label.toLowerCase()}</span> <Arrow diagonal />
              </Link>
            ))}
          </nav>
        </section>

        <section
          id="team"
          className={`${styles.section} ${styles.teamSection}`}
          aria-labelledby="team-title"
        >
          <TeamNetwork />
          <div className={styles.container}>
            <SectionHeading
              title="Our team"
              id="team-title"
            >
              <p>
                A team of {dict.aboutPage.team.size} across four offices. The
                people you talk to are the people who build it.
              </p>
            </SectionHeading>
            <EditorialReveal kind="portraits">
              <TeamGrid />
            </EditorialReveal>
            <div className={styles.teamFooter}>
              <TeamLocations />
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
              title="Insights"
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
                    <EditorialReveal kind="artwork" className={styles.insightArtwork}>
                      <Image
                        src={meta.coverSmall}
                        alt=""
                        width={600}
                        height={338}
                        sizes="(max-width: 760px) 100vw, 33vw"
                        unoptimized
                      />
                    </EditorialReveal>
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
      </div>
    </div>
  );
}
