"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const stagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, amount: 0.15 },
};

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const HERO_VIDEO_SRC = "/Abstract_Architectural_AI_Background_Video.mp4";
const HERO_VIDEO_CROSSFADE_SECONDS = 0.9;

const services = [
  {
    label: "AI STRATEGY",
    title: "Use-case selection and implementation roadmap",
    duration: "2-4 weeks",
    scope: "Discovery, prioritization, implementation plan",
    body: "Assess where AI can create the most operational leverage, then define the architecture, scope, and rollout path needed to implement the right solution.",
    status: "Best for teams deciding where to start",
    id: "strategy",
  },
  {
    label: "CUSTOM SOLUTIONS",
    title: "AI copilots, workflows, and internal tools",
    duration: "6-12 weeks",
    scope: "LLM apps, automation, retrieval, agents",
    body: "Design and ship AI products tailored to your workflows, from customer support assistants to internal knowledge systems and operational automation.",
    status: "Best for teams moving from pilot to product",
    id: "custom-solutions",
  },
  {
    label: "AI IMPLEMENTATION",
    title: "Production systems, integrations, and reliability",
    duration: "4-10 weeks",
    scope: "Integrations, evals, monitoring, governance",
    body: "Implement the infrastructure, integrations, evaluation, and observability required to make AI systems reliable in production.",
    status: "Best for teams scaling beyond demos",
    id: "ai-implementation",
  },
  {
    label: "SYSTEM INTEGRATION",
    title: "Deployment into your existing stack",
    duration: "3-8 weeks",
    scope: "APIs, internal tools, workflows, handoff",
    body: "Connect new AI capabilities to your current products, data systems, and operational processes so the solution works where your team already operates.",
    status: "Best for teams integrating AI into live workflows",
    id: "system-integration",
  },
];

const enterprisePillars = [
  {
    label: "SCALE",
    points: ["100s-1000s of users", "24/7 availability", "TB-PB data volumes"],
  },
  {
    label: "COMPLIANCE",
    points: ["HIPAA, SOX, GDPR", "Industry regulations", "Audit requirements"],
  },
  {
    label: "INTEGRATION",
    points: ["Legacy systems", "Existing workflows", "Data governance"],
  },
  {
    label: "ACCOUNTABILITY",
    points: ["Auditability", "Explainability", "Human oversight"],
  },
];

const enterpriseModes = [
  {
    label: "PREDICTIVE",
    position: "Top",
    body: "Demand forecasting, churn, and maintenance planning for high-value operational decisions.",
  },
  {
    label: "CONVERSATIONAL",
    position: "Left",
    body: "Customer service, support copilots, and retrieval experiences that still fit enterprise controls.",
  },
  {
    label: "GENERATIVE",
    position: "Right",
    body: "Document automation, code help, and content generation with workflows, review, and governance around them.",
  },
  {
    label: "ANALYTICAL",
    position: "Bottom",
    body: "Anomaly detection, risk analysis, and fraud workflows that turn model output into operational insight.",
  },
];

const architectureComparison = {
  public: {
    label: "PUBLIC AI SERVICE",
    points: [
      "Shared infrastructure",
      "No data control",
      "No customization",
      "Best-effort",
      "Limited compliance",
      "Pay-per-use",
    ],
  },
  enterprise: {
    label: "ENTERPRISE AI DEPLOYMENT",
    points: [
      "Dedicated/isolated infrastructure",
      "Full data sovereignty",
      "Fully customizable",
      "SLA-driven (99.9% uptime)",
      "HIPAA/SOX/GDPR certified",
      "Predictable enterprise costs",
    ],
  },
};

const solutionAreas = [
  {
    sector: "CUSTOMER OPERATIONS",
    title: "Support and service automation",
    body: "Deploy AI assistants for support triage, knowledge retrieval, response drafting, and case summarization without breaking existing support workflows.",
  },
  {
    sector: "INTERNAL KNOWLEDGE",
    title: "Enterprise search and expert copilots",
    body: "Turn fragmented documents, policies, and internal systems into trusted research, compliance, and decision-support interfaces.",
  },
  {
    sector: "OPERATIONS",
    title: "Workflow acceleration and exception handling",
    body: "Automate repetitive review, classification, routing, and escalation tasks while keeping humans in the loop for judgment-heavy cases.",
  },
  {
    sector: "DATA PRODUCTS",
    title: "Analytics and intelligence layers",
    body: "Build data-backed AI interfaces that surface business signals, summarize trends, and assist teams with better day-to-day decisions.",
  },
];

const outcomes = [
  {
    number: "01",
    label: "EFFICIENCY",
    body: "Reduce manual work in repetitive internal processes and shorten the time from request to action.",
  },
  {
    number: "02",
    label: "SERVICE QUALITY",
    body: "Improve response quality, consistency, and speed across customer-facing and internal support workflows.",
  },
  {
    number: "03",
    label: "DECISION SUPPORT",
    body: "Give teams faster access to the right information so planning, review, and escalation decisions are made with better context.",
  },
  {
    number: "04",
    label: "COST CONTROL",
    body: "Target automation where it lowers operating cost without adding brittle systems or unnecessary model spend.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Identify the business problem",
    body: "We start with workflows, stakeholders, constraints, and available data rather than forcing a model-first solution.",
  },
  {
    step: "02",
    title: "Scope the engagement",
    body: "Define the use case, expected value, implementation path, timeline, and commercial model before build work begins.",
  },
  {
    step: "03",
    title: "Design and build the solution",
    body: "Develop the application, data flows, and evaluation framework needed to make the system useful in real operations.",
  },
  {
    step: "04",
    title: "Test with real users",
    body: "Validate the system with live workflows, gather feedback, and tighten quality, safety, and usability before rollout.",
  },
  {
    step: "05",
    title: "Launch into production",
    body: "Deploy the solution into live workflows, connect it to the required systems, and make sure it performs under real operating conditions.",
  },
  {
    step: "06",
    title: "Monitor and improve",
    body: "Maintain observability, evaluate performance, and iterate based on real usage patterns and business outcomes.",
  },
];

export default function Home() {
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const solutionCarouselRef = useRef<HTMLDivElement | null>(null);
  const [heroVideoState, setHeroVideoState] = useState<"loading" | "playing" | "fallback">("loading");
  const [activeHeroLayer, setActiveHeroLayer] = useState(0);
  const [fadingHeroLayer, setFadingHeroLayer] = useState<number | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("deview-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const standbyStartedRef = useRef(false);
  const crossfadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("deview-theme", theme);
  }, [theme]);

  useEffect(() => {
    const primaryVideo = heroVideoRefs.current[0];

    if (!primaryVideo) {
      const fallbackTimeout = window.setTimeout(() => {
        setHeroVideoState("fallback");
      }, 0);

      return () => {
        window.clearTimeout(fallbackTimeout);
      };
    }

    const attemptPlayback = async () => {
      try {
        primaryVideo.currentTime = 0;
        await primaryVideo.play();
        setHeroVideoState("playing");
      } catch {
        setHeroVideoState("fallback");
      }
    };

    void attemptPlayback();

    return () => {
      if (crossfadeTimeoutRef.current) {
        clearTimeout(crossfadeTimeoutRef.current);
      }
    };
  }, []);

  const startStandbyLayer = async (currentLayer: number) => {
    const nextLayer = currentLayer === 0 ? 1 : 0;
    const standbyVideo = heroVideoRefs.current[nextLayer];

    if (!standbyVideo || standbyStartedRef.current) {
      return;
    }

    standbyStartedRef.current = true;

    try {
      standbyVideo.currentTime = 0;
      await standbyVideo.play();
      setHeroVideoState("playing");
      setFadingHeroLayer(currentLayer);
      setActiveHeroLayer(nextLayer);
    } catch {
      setHeroVideoState("fallback");
    }

    if (crossfadeTimeoutRef.current) {
      clearTimeout(crossfadeTimeoutRef.current);
    }

    crossfadeTimeoutRef.current = setTimeout(() => {
      const previousVideo = heroVideoRefs.current[currentLayer];
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }
      setFadingHeroLayer((layer) => (layer === currentLayer ? null : layer));
      standbyStartedRef.current = false;
    }, HERO_VIDEO_CROSSFADE_SECONDS * 1000);
  };

  const handleHeroTimeUpdate = (layerIndex: number) => {
    if (layerIndex !== activeHeroLayer) {
      return;
    }

    const activeVideo = heroVideoRefs.current[layerIndex];

    if (!activeVideo || !Number.isFinite(activeVideo.duration) || activeVideo.duration <= 0) {
      return;
    }

    const remaining = activeVideo.duration - activeVideo.currentTime;

    if (remaining <= HERO_VIDEO_CROSSFADE_SECONDS) {
      void startStandbyLayer(layerIndex);
    }
  };

  const scrollSolutions = (direction: "left" | "right") => {
    const carousel = solutionCarouselRef.current;

    if (!carousel) {
      return;
    }

    const amount = Math.max(carousel.clientWidth * 0.78, 320);

    carousel.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleContactMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--contact-x", `${x}%`);
    event.currentTarget.style.setProperty("--contact-y", `${y}%`);
  };

  const handleContactMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--contact-x", "50%");
    event.currentTarget.style.setProperty("--contact-y", "50%");
  };

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--background)] bg-grid text-[var(--text)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--white-20)] bg-gradient-to-b from-[var(--black-80)] to-transparent pt-[env(safe-area-inset-top)]">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#"
            className="text-xs tracking-[0.25em] text-[var(--white-80)] sm:text-sm"
            onClick={closeNav}
          >
            DEVIEW
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="mobile-site-nav"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <a href="#hero" className="nav-item nav-item-active">
              AI CONSULTING
            </a>
            <a href="#enterprise-ai" className="nav-item">
              ENTERPRISE AI
            </a>
            <a href="#services" className="nav-item">
              SERVICES
            </a>
            <a href="#solutions" className="nav-item">
              USE CASES
            </a>
            <a href="#outcomes" className="nav-item">
              OUTCOMES
            </a>
            <a href="#process" className="nav-item">
              PROCESS
            </a>
            <a href="#contact" className="nav-item">
              INQUIRE
            </a>
            <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle bright mode">
              {theme === "dark" ? "BRIGHT MODE" : "DARK MODE"}
            </button>
          </div>
        </nav>
      </header>

      {navOpen ? (
        <div
          id="mobile-site-nav"
          className="mobile-nav-overlay md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button type="button" className="mb-4 self-end text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]" onClick={closeNav}>
            Close
          </button>
          <a href="#hero" className="nav-item-active" onClick={closeNav}>
            AI CONSULTING
          </a>
          <a href="#enterprise-ai" onClick={closeNav}>
            ENTERPRISE AI
          </a>
          <a href="#services" onClick={closeNav}>
            SERVICES
          </a>
          <a href="#solutions" onClick={closeNav}>
            USE CASES
          </a>
          <a href="#outcomes" onClick={closeNav}>
            OUTCOMES
          </a>
          <a href="#process" onClick={closeNav}>
            PROCESS
          </a>
          <a href="#contact" onClick={closeNav}>
            INQUIRE
          </a>
          <a href="/contact" onClick={closeNav}>
            CONTACT FORM
          </a>
          <button type="button" className="theme-toggle mt-4" onClick={toggleTheme}>
            {theme === "dark" ? "BRIGHT MODE" : "DARK MODE"}
          </button>
        </div>
      ) : null}

      <section
        id="hero"
        className="section-fullscreen section-fullscreen--hero relative flex items-center justify-center px-4 sm:px-6"
      >
        <div className="hero-media absolute inset-0">
          {[0, 1].map((layerIndex) => (
            <video
              key={layerIndex}
              ref={(node) => {
                heroVideoRefs.current[layerIndex] = node;
              }}
              className={`hero-video pointer-events-none absolute inset-0 h-full w-full object-cover ${
                heroVideoState === "playing" && activeHeroLayer === layerIndex
                  ? "hero-video-visible"
                  : fadingHeroLayer === layerIndex
                    ? "hero-video-fading"
                    : "hero-video-hidden"
              }`}
              autoPlay={layerIndex === 0}
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setHeroVideoState((current) => (current === "fallback" ? current : "playing"))}
              onPlay={() => setHeroVideoState("playing")}
              onTimeUpdate={() => handleHeroTimeUpdate(layerIndex)}
              onEnded={() => void startStandbyLayer(layerIndex)}
              onError={() => setHeroVideoState("fallback")}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          ))}
          {heroVideoState === "fallback" ? (
            <div className="hero-fallback hero-fallback-visible absolute inset-0" aria-hidden="true">
              <div className="hero-fallback-grid" />
              <div className="hero-fallback-rings" />
              <div className="hero-fallback-beam hero-fallback-beam-left" />
              <div className="hero-fallback-beam hero-fallback-beam-right" />
            </div>
          ) : null}
        </div>
        <div
          className={`absolute inset-0 ${heroVideoState === "fallback" ? "hero-overlay" : "hero-overlay hero-overlay-video"}`}
        />
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col justify-between gap-12 md:flex-row md:gap-16">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="section-label mb-4">AI STRATEGY, IMPLEMENTATION, AND INTEGRATION</p>
            <h1 className="hero-heading mb-6 text-[clamp(1.75rem,6.5vw,2.75rem)] text-[var(--white-100)] md:text-5xl lg:text-6xl">
              CUSTOM AI
              <br />
              SOLUTIONS FOR
              <br />
              REAL OPERATIONS
            </h1>
            <p className="max-w-xl text-sm text-[var(--text-muted)] md:text-base">
              DeView helps companies identify high-value AI opportunities, build custom solutions, and put the
              right implementation foundations in place so those systems deliver measurable operational results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-8 text-left md:items-end md:gap-10 md:text-right"
          >
            <div className="space-y-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)] sm:text-xs">
              <div>STRATEGY</div>
              <div>SOLUTION DELIVERY</div>
              <div>AI IMPLEMENTATION</div>
              <div>SYSTEM INTEGRATION</div>
            </div>
            <div className="w-full space-y-3 text-sm md:w-auto">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  CLIENTS
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">MID-MARKET TO ENTERPRISE</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  FOCUS
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">USEFUL AI, NOT DEMO THEATER</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  ENGAGEMENTS
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">DISCOVERY TO PRODUCTION</span>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-6 md:w-auto md:justify-end md:gap-8">
              <a href="#contact" className="btn-outline">
                INQUIRE
              </a>
              <div className="ml-auto flex flex-col items-end gap-3 md:ml-0">
                <div className="scroll-cue" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  SCROLL
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="enterprise-ai"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-4 sm:px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 md:gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">ENTERPRISE AI</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <h2 className="mb-4 text-[clamp(1.25rem,4.8vw,1.9rem)] leading-snug text-[var(--white-100)] md:text-4xl">
                  Enterprise AI is not just a smarter interface.
                  <br />
                  It is AI built to operate inside real companies.
                </h2>
                <p className="max-w-2xl text-sm text-[var(--text-muted)] md:text-base">
                  DeView designs and implements enterprise AI systems that can survive scale, compliance,
                  integration complexity, and operational accountability. That is the actual line between a demo
                  and a production deployment.
                </p>
              </div>
              <div className="space-y-3 text-[0.72rem] text-[var(--white-80)] sm:text-xs">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">WE DO</span>
                  <span className="sm:text-right">Strategy, architecture, deployment, and integration</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">FOCUS</span>
                  <span className="sm:text-right">Reliable AI for enterprise workflows, not generic tools</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">BOTTOM LINE</span>
                  <span className="sm:text-right">This is why infrastructure matters</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.section
              variants={cardMotion}
              initial="initial"
              whileInView="whileInView"
              viewport={reveal.viewport}
              transition={{ duration: 0.45 }}
              className="panel border border-[var(--white-20)] bg-[var(--surface-elevated)] p-5 md:p-6"
            >
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label mb-2">WHAT MAKES IT ENTERPRISE</p>
                  <h3 className="text-lg text-[var(--white-100)] md:text-2xl">The deployment constraints are the product requirements.</h3>
                </div>
                <p className="max-w-sm text-[0.8rem] text-[var(--text-muted)]">
                  Enterprise AI has to hold up under technical, legal, and operational pressure.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {enterprisePillars.map((pillar) => (
                  <article
                    key={pillar.label}
                    className="enterprise-card border border-[var(--white-20)] bg-[var(--surface)] p-4"
                  >
                    <p className="mb-3 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
                      {pillar.label}
                    </p>
                    <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
                      {pillar.points.map((point) => (
                        <li key={point} className="enterprise-list-item">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              variants={cardMotion}
              initial="initial"
              whileInView="whileInView"
              viewport={reveal.viewport}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="panel border border-[var(--white-20)] bg-[var(--surface-elevated)] p-5 md:p-6"
            >
              <p className="section-label mb-2">WHAT IS ENTERPRISE AI</p>
              <h3 className="mb-3 text-lg text-[var(--white-100)] md:text-2xl">
                Four operating modes across interaction, automation, strategic value, and insight.
              </h3>
              <p className="mb-6 max-w-xl text-[0.82rem] text-[var(--text-muted)]">
                The useful implementations usually combine multiple modes. We scope the right mix based on the
                workflow, the decision point, and the level of control required.
              </p>
              <div className="enterprise-map">
                <div className="enterprise-axis enterprise-axis-top">HIGH STRATEGIC VALUE</div>
                <div className="enterprise-axis enterprise-axis-left">USER INTERACTION</div>
                <div className="enterprise-axis enterprise-axis-right">HIGH AUTOMATION</div>
                <div className="enterprise-axis enterprise-axis-bottom">OPERATIONAL INSIGHT</div>
                {enterpriseModes.map((mode) => (
                  <article
                    key={mode.label}
                    className={`enterprise-mode enterprise-mode-${mode.position.toLowerCase()}`}
                  >
                    <p className="mb-2 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
                      {mode.label}
                    </p>
                    <p className="text-[0.8rem] leading-relaxed text-[var(--text-muted)]">{mode.body}</p>
                  </article>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            variants={cardMotion}
            initial="initial"
            whileInView="whileInView"
            viewport={reveal.viewport}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="panel border border-[var(--white-20)] bg-[var(--background)] p-5 md:p-6"
          >
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label mb-2">ARCHITECTURE REALITY CHECK</p>
                <h3 className="text-lg text-[var(--white-100)] md:text-2xl">
                  Infrastructure determines whether the system belongs in an enterprise at all.
                </h3>
              </div>
              <p className="max-w-sm text-[0.8rem] text-[var(--text-muted)]">
                This is where DeView moves clients from public AI usage to enterprise-grade deployment.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <article className="enterprise-compare enterprise-compare-public">
                <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
                  {architectureComparison.public.label}
                </p>
                <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
                  {architectureComparison.public.points.map((point) => (
                    <li key={point} className="enterprise-list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <div className="enterprise-arrow" aria-hidden="true">
                <span>→</span>
              </div>
              <article className="enterprise-compare enterprise-compare-enterprise">
                <p className="mb-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--white-100)]">
                  {architectureComparison.enterprise.label}
                </p>
                <ul className="space-y-2 text-[0.82rem] text-[var(--text-muted)]">
                  {architectureComparison.enterprise.points.map((point) => (
                    <li key={point} className="enterprise-list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-6 border-t border-[var(--white-20)] pt-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--white-100)]">Bottom line</p>
              <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
                This is why infrastructure matters. Enterprise AI is not only about model quality. It is about
                data control, uptime, compliance posture, system integration, and accountability in the workflow.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </section>

      <section
        id="services"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] px-4 sm:px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 md:gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">SERVICES</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                End-to-end services for
                <br />
                implementing AI in business operations.
              </h2>
              <p className="max-w-md text-[0.8rem] text-[var(--text-muted)] md:text-sm">
                From selecting the right use case to building, integrating, and operating the final system, we
                work across the full implementation lifecycle.
              </p>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="grid gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-4"
          >
            {services.map((service) => (
              <motion.article
                key={service.id}
                variants={cardMotion}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                className="panel panel-interactive border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5"
              >
                <p className="section-label mb-3 text-[0.6rem]">{service.label}</p>
                <p className="mb-3 text-sm text-[var(--white-100)]">{service.title}</p>
                <div className="mb-4 space-y-1 text-[0.7rem] text-[var(--white-80)]">
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">DURATION</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">SCOPE</span>
                    <span className="text-right">{service.scope}</span>
                  </div>
                </div>
                <p className="mb-3 text-[0.75rem] leading-relaxed text-[var(--text-muted)]">{service.body}</p>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">
                  {service.status}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="solutions"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-4 sm:px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 md:gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">USE CASES</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
              <h2 className="mb-4 text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                  AI solutions built around
                  <br />
                  concrete operational problems.
                </h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  We focus on high-friction workflows where AI can reduce manual effort, improve response
                  quality, and help teams move faster with better information.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Each solution is designed to fit into existing systems and processes rather than living as an
                  isolated demo or experimental tool.
                </p>
              </div>
              <div className="space-y-4 text-[0.72rem] text-[var(--white-80)] sm:text-xs">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">FRAMING</span>
                  <span className="sm:text-right">Business workflows before model types</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">POSITIONING</span>
                  <span className="sm:text-right">Custom systems integrated with real operations</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">DELIVERY</span>
                  <span className="sm:text-right">Strategy, implementation, and rollout in one engagement</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="relative overflow-hidden"
          >
            <button
              type="button"
              aria-label="Scroll use cases left"
              className="carousel-arrow carousel-arrow-left hidden md:inline-flex"
              onClick={() => scrollSolutions("left")}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll use cases right"
              className="carousel-arrow carousel-arrow-right hidden md:inline-flex"
              onClick={() => scrollSolutions("right")}
            >
              →
            </button>
            <div className="carousel-fade-left" aria-hidden="true" />
            <div className="carousel-fade-right" aria-hidden="true" />
            <div
              ref={solutionCarouselRef}
              className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-1 pr-4 [-webkit-overflow-scrolling:touch] sm:gap-6 sm:px-6 md:px-8"
            >
              {solutionAreas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={cardMotion}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                  className="panel panel-interactive min-w-[min(88vw,320px)] snap-start border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-5 sm:min-w-[360px] sm:px-5 sm:py-6 lg:min-w-[420px]"
                >
                  <p className="section-label mb-3 text-[0.65rem]">{area.sector}</p>
                  <p className="mb-3 text-sm text-[var(--white-100)]">{area.title}</p>
                  <p className="text-[0.8rem] text-[var(--text-muted)]">{area.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="outcomes"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] px-4 sm:px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 md:gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">OUTCOMES</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <h2 className="mb-4 text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                  Business value from
                  <br />
                  implemented AI systems.
                </h2>
              </div>
              <div>
                <p className="max-w-md text-sm text-[var(--text-muted)]">
                  Four categories of measurable improvement that we scope every engagement around.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="border-t border-[var(--white-20)]"
          >
            {outcomes.map((outcome) => (
              <motion.article
                key={outcome.label}
                variants={cardMotion}
                transition={{ duration: 0.45 }}
                className="group border-b border-[var(--white-20)] transition-colors duration-200 hover:bg-[var(--surface)]"
              >
                <div className="grid gap-3 px-0 py-5 sm:gap-4 sm:py-6 md:grid-cols-[80px_220px_1fr] md:items-start md:gap-6 md:py-7">
                  <div className="text-[2.75rem] leading-none tracking-[-0.04em] text-[var(--white-10)] sm:text-[3.5rem] md:text-[4rem]">
                    {outcome.number}
                  </div>
                  <div className="pt-0 text-sm uppercase tracking-[0.2em] text-[var(--white-100)] sm:pt-1 sm:text-base md:text-lg">
                    {outcome.label}
                  </div>
                  <div className="pt-0 text-[0.85rem] leading-relaxed text-[var(--text-muted)] sm:pt-1 sm:text-sm md:max-w-2xl">
                    {outcome.body}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="process"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-4 sm:px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-10 md:gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">PROCESS</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] leading-snug text-[var(--white-100)] md:text-3xl">
                A clear process for taking AI
                <br />
                from idea to live implementation.
              </h2>
              <p className="max-w-md text-[0.8rem] text-[var(--text-muted)] md:text-sm">
                We keep the engagement model simple: identify the right problem, scope the build, implement the
                system, validate it in real workflows, then improve it in production.
              </p>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {processSteps.map((item) => (
              <motion.article
                key={item.step}
                variants={cardMotion}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                className="panel panel-interactive process-card border border-[var(--white-20)] bg-[var(--surface-elevated)] px-5 py-6"
              >
                <p className="process-step mb-3 text-[0.65rem] uppercase tracking-[0.24em] text-[var(--white-60)]">
                  Step {item.step}
                </p>
                <h3 className="mb-3 text-sm text-[var(--white-100)]">{item.title}</h3>
                <p className="text-[0.8rem] text-[var(--text-muted)]">{item.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="relative min-h-[88vh] scroll-mt-20 border-t border-[var(--white-20)] bg-[var(--background)] px-4 pb-8 pt-20 sm:px-6 md:min-h-[84vh] md:pb-3 md:pt-20"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-12">
          <div className="max-w-md pt-2">
            <p className="section-label mb-3">INQUIRE</p>
            <div className="rule mb-6 max-w-[11rem]" />
            <h2 className="mb-5 text-sm leading-relaxed text-[var(--white-100)]">
              Bring us the messy workflow, stubborn constraint,
              <br />
              or half-formed AI idea you want pressure-tested.
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Send the business function, current process,
              <br />
              available data, and the outcome you want to unlock.
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-end">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
              <a
                href="mailto:hello@deview.ai"
                className="contact-monument min-w-0 flex-1 break-words pr-0 pb-2 leading-[0.98] md:pr-8"
                onMouseMove={handleContactMouseMove}
                onMouseLeave={handleContactMouseLeave}
              >
                <span className="contact-monument-line block">hello</span>
                <span className="contact-monument-line block">@deview.ai</span>
              </a>
              <div className="shrink-0 pb-[1.2vw] md:pb-[1vw]">
                <a href="/contact" className="btn-outline">
                  SEND INQUIRY →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--white-20)] bg-[var(--background)] px-4 py-8 text-[0.65rem] sm:px-6 sm:text-[0.7rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--white-80)]">DEVIEW</span>
            <span className="text-[var(--white-40)]">© {new Date().getFullYear()} DeView. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-3 text-[var(--white-60)] sm:gap-5">
            <a href="#hero" className="uppercase tracking-[0.18em]">
              AI CONSULTING
            </a>
            <a href="#services" className="uppercase tracking-[0.18em]">
              SERVICES
            </a>
            <a href="#solutions" className="uppercase tracking-[0.18em]">
              USE CASES
            </a>
            <a href="#outcomes" className="uppercase tracking-[0.18em]">
              OUTCOMES
            </a>
            <a href="#process" className="uppercase tracking-[0.18em]">
              PROCESS
            </a>
            <a href="#contact" className="uppercase tracking-[0.18em]">
              CONTACT
            </a>
            <a
              href="https://ai-consulting-task-manager.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-[0.18em] underline underline-offset-4"
            >
              INTERNAL
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
