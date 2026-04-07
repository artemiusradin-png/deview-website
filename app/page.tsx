"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

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
const INTERFACE_USER_MESSAGE = "What are our Q4 exposure risks?";
const INTERFACE_AI_MESSAGE =
  "Based on general patterns, Q4 risks typically include supply chain pressure and budget cycles...";

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
    id: "scale",
    label: "SCALE",
    summary: "We architect for enterprise load, uptime, and data volume so the system keeps performing under real operational demand.",
    points: ["100s-1000s of users", "24/7 availability", "TB-PB data volumes"],
  },
  {
    id: "compliance",
    label: "COMPLIANCE",
    summary: "We build around the compliance, audit, and regulatory requirements your workflows already operate under.",
    points: ["HIPAA, SOX, GDPR", "Industry regulations", "Audit requirements"],
  },
  {
    id: "integration",
    label: "INTEGRATION",
    summary: "We connect AI into legacy systems, existing workflows, and governance models so it works inside the real stack.",
    points: ["Legacy systems", "Existing workflows", "Data governance"],
  },
  {
    id: "accountability",
    label: "ACCOUNTABILITY",
    summary: "We make outputs reviewable, explainable, and controllable by the people responsible for outcomes.",
    points: ["Auditability", "Explainability", "Human oversight"],
  },
];

const enterpriseModes = [
  {
    id: "predictive",
    label: "PREDICTIVE",
    axis: "HIGH STRATEGIC VALUE",
    position: "Top",
    body: "Demand forecasting, churn, and maintenance planning for high-value operational decisions.",
  },
  {
    id: "conversational",
    label: "CONVERSATIONAL",
    axis: "USER INTERACTION",
    position: "Left",
    body: "Customer service, support copilots, and retrieval experiences that still fit enterprise controls.",
  },
  {
    id: "generative",
    label: "GENERATIVE",
    axis: "HIGH AUTOMATION",
    position: "Right",
    body: "Document automation, code help, and content generation with workflows, review, and governance around them.",
  },
  {
    id: "analytical",
    label: "ANALYTICAL",
    axis: "OPERATIONAL INSIGHT",
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
    id: "customer-operations",
    sector: "CUSTOMER OPERATIONS",
    title: "Support and service automation",
    body: "Deploy AI assistants for support triage, knowledge retrieval, response drafting, and case summarization without breaking existing support workflows.",
    accent: "rgba(148, 214, 255, 0.16)",
  },
  {
    id: "internal-knowledge",
    sector: "INTERNAL KNOWLEDGE",
    title: "Enterprise search and expert copilots",
    body: "Turn fragmented documents, policies, and internal systems into trusted research, compliance, and decision-support interfaces.",
    accent: "rgba(255, 214, 138, 0.16)",
  },
  {
    id: "operations",
    sector: "OPERATIONS",
    title: "Workflow acceleration and exception handling",
    body: "Automate repetitive review, classification, routing, and escalation tasks while keeping humans in the loop for judgment-heavy cases.",
    accent: "rgba(157, 247, 198, 0.14)",
  },
  {
    id: "data-products",
    sector: "DATA PRODUCTS",
    title: "Analytics and intelligence layers",
    body: "Build data-backed AI interfaces that surface business signals, summarize trends, and assist teams with better day-to-day decisions.",
    accent: "rgba(205, 177, 255, 0.16)",
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
  const solutionCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const solutionsSectionRef = useRef<HTMLElement | null>(null);
  const enterpriseModesSectionRef = useRef<HTMLDivElement | null>(null);
  const enterpriseStagePanelRef = useRef<HTMLElement | null>(null);
  const [enterprisePinState, setEnterprisePinState] = useState<"before" | "pinned" | "past">("before");
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
  const [activeEnterprisePillar, setActiveEnterprisePillar] = useState(enterprisePillars[0].id);
  const [activeEnterpriseMode, setActiveEnterpriseMode] = useState(enterpriseModes[0].id);
  const [architectureFocus, setArchitectureFocus] = useState<"public" | "enterprise">("enterprise");
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [solutionsMarqueeOffset, setSolutionsMarqueeOffset] = useState(0);
  const [isSolutionsInView, setIsSolutionsInView] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [typedUserMessage, setTypedUserMessage] = useState("");
  const [typedAiMessage, setTypedAiMessage] = useState("");
  const [heroVideoPreload, setHeroVideoPreload] = useState<"auto" | "metadata">("metadata");
  const standbyStartedRef = useRef(false);
  const crossfadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress: enterpriseModesProgress } = useScroll({
    target: enterpriseModesSectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("deview-theme", theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setHeroVideoPreload(mq.matches ? "auto" : "metadata");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

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

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let mounted = true;
    let userTimeout: ReturnType<typeof setTimeout> | null = null;
    let aiTimeout: ReturnType<typeof setTimeout> | null = null;
    let restartTimeout: ReturnType<typeof setTimeout> | null = null;

    const runTypingLoop = () => {
      let userIndex = 0;
      let aiIndex = 0;

      setTypedUserMessage("");
      setTypedAiMessage("");

      const typeUser = () => {
        if (!mounted) {
          return;
        }

        userIndex += 1;
        setTypedUserMessage(INTERFACE_USER_MESSAGE.slice(0, userIndex));

        if (userIndex < INTERFACE_USER_MESSAGE.length) {
          userTimeout = setTimeout(typeUser, 42);
          return;
        }

        aiTimeout = setTimeout(typeAi, 520);
      };

      const typeAi = () => {
        if (!mounted) {
          return;
        }

        aiIndex += 1;
        setTypedAiMessage(INTERFACE_AI_MESSAGE.slice(0, aiIndex));

        if (aiIndex < INTERFACE_AI_MESSAGE.length) {
          aiTimeout = setTimeout(typeAi, 18);
          return;
        }

        restartTimeout = setTimeout(runTypingLoop, 2600);
      };

      userTimeout = setTimeout(typeUser, 500);
    };

    runTypingLoop();

    return () => {
      mounted = false;
      if (userTimeout) {
        clearTimeout(userTimeout);
      }
      if (aiTimeout) {
        clearTimeout(aiTimeout);
      }
      if (restartTimeout) {
        clearTimeout(restartTimeout);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const carousel = solutionCarouselRef.current;

    if (!carousel) {
      return;
    }

    const updateActiveSolution = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const targetCenter = carouselRect.left + carouselRect.width / 2;
      let nextIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      solutionCardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - targetCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveSolutionIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    updateActiveSolution();
    carousel.addEventListener("scroll", updateActiveSolution, { passive: true });
    window.addEventListener("resize", updateActiveSolution);

    return () => {
      carousel.removeEventListener("scroll", updateActiveSolution);
      window.removeEventListener("resize", updateActiveSolution);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const section = solutionsSectionRef.current;

    if (!section) {
      return;
    }

    const wideMq = window.matchMedia("(min-width: 768px)");

    const updateMarqueeOffset = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const inView = rect.bottom > 0 && rect.top < viewportHeight;
      setIsSolutionsInView(inView);

      if (!wideMq.matches) {
        setSolutionsMarqueeOffset(0);
        return;
      }

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const offset = (clampedProgress - 0.5) * -220;
      setSolutionsMarqueeOffset(offset);
    };

    updateMarqueeOffset();
    window.addEventListener("scroll", updateMarqueeOffset, { passive: true });
    window.addEventListener("resize", updateMarqueeOffset);
    wideMq.addEventListener("change", updateMarqueeOffset);

    return () => {
      window.removeEventListener("scroll", updateMarqueeOffset);
      window.removeEventListener("resize", updateMarqueeOffset);
      wideMq.removeEventListener("change", updateMarqueeOffset);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const wrapper = enterpriseModesSectionRef.current;

    if (!wrapper) {
      return;
    }

    const NAV_HEIGHT = 64;

    const update = () => {
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const wrapperHeight = wrapper.offsetHeight;
      const panelHeight = window.innerHeight - NAV_HEIGHT;
      const scrollY = window.scrollY;

      if (scrollY < wrapperTop) {
        setEnterprisePinState("before");
      } else if (scrollY >= wrapperTop + wrapperHeight - panelHeight) {
        setEnterprisePinState("past");
      } else {
        setEnterprisePinState("pinned");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useMotionValueEvent(enterpriseModesProgress, "change", (latest) => {
    if (prefersReducedMotion) {
      return;
    }

    const nextModeId =
      latest < 0.25
        ? enterpriseModes[0].id
        : latest < 0.5
          ? enterpriseModes[1].id
          : latest < 0.75
            ? enterpriseModes[2].id
            : enterpriseModes[3].id;

    setActiveEnterpriseMode((current) => (current === nextModeId ? current : nextModeId));
  });

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

    const frac = carousel.clientWidth < 640 ? 0.9 : 0.78;
    const amount = Math.max(carousel.clientWidth * frac, Math.min(320, carousel.clientWidth - 32));

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateNavVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const nearTop = currentScrollY < 40;

      setNavVisible(nearTop || scrollingUp || navOpen);
      lastScrollY = currentScrollY;
    };

    updateNavVisibility();
    window.addEventListener("scroll", updateNavVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavVisibility);
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));
  const selectedPillar = enterprisePillars.find((pillar) => pillar.id === activeEnterprisePillar) ?? enterprisePillars[0];
  const selectedMode = enterpriseModes.find((mode) => mode.id === activeEnterpriseMode) ?? enterpriseModes[0];
  const activeSolution = solutionAreas[activeSolutionIndex] ?? solutionAreas[0];
  const marqueeContent = `${activeSolution.title} • `.repeat(14);
  const displayedUserMessage = prefersReducedMotion ? INTERFACE_USER_MESSAGE : typedUserMessage;
  const displayedAiMessage = prefersReducedMotion ? INTERFACE_AI_MESSAGE : typedAiMessage;
  const enterpriseMapScale = useTransform(enterpriseModesProgress, [0, 0.18, 0.52, 1], prefersReducedMotion ? [1, 1, 1, 1] : [0.74, 0.9, 1.04, 1.12]);
  const enterpriseMapRotateX = useTransform(enterpriseModesProgress, [0, 0.34], prefersReducedMotion ? [0, 0] : [24, 0]);
  const enterpriseMapY = useTransform(enterpriseModesProgress, [0, 0.22, 0.6, 1], prefersReducedMotion ? [0, 0, 0, 0] : [92, 26, -10, -28]);
  const enterpriseMapBlur = useTransform(enterpriseModesProgress, [0, 0.18], prefersReducedMotion ? [0, 0] : [18, 0]);
  const enterpriseDetailY = useTransform(enterpriseModesProgress, [0.22, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [52, 0, -10]);
  const enterpriseDetailOpacity = useTransform(enterpriseModesProgress, [0.16, 0.42], prefersReducedMotion ? [1, 1] : [0.12, 1]);
  const enterpriseRailFill = useTransform(enterpriseModesProgress, [0, 1], ["0%", "100%"]);
  const enterpriseMapFilter = useTransform(enterpriseMapBlur, (v) => `blur(${v}px)`);
  const enterpriseStageIntroOpacity = useTransform(
    enterpriseModesProgress,
    prefersReducedMotion ? [0, 0.035, 0.055] : [0, 0.055, 0.13],
    prefersReducedMotion ? [1, 1, 0] : [1, 0.92, 0],
  );
  const enterpriseStageIntroY = useTransform(
    enterpriseModesProgress,
    [0, 0.11],
    prefersReducedMotion ? [0, 0] : [0, -28],
  );

  return (
    <div className="min-h-screen bg-[var(--background)] bg-grid text-[var(--text)]">
      <a
        href="#"
        className="brand-mark fixed left-0 top-0 z-50 px-4 pt-[calc(env(safe-area-inset-top)+1.35rem)] text-xs tracking-[0.25em] text-[var(--white-80)] sm:px-6 sm:text-sm"
        onClick={closeNav}
      >
        DEVIEW
      </a>

      <header
        className={`nav-shell fixed inset-x-0 top-0 z-40 border-b border-[var(--white-20)] bg-gradient-to-b from-[var(--black-80)] to-transparent pt-[env(safe-area-inset-top)] ${
          navVisible ? "nav-shell-visible" : "nav-shell-hidden"
        }`}
      >
        <nav className="section-gutter mx-auto flex h-16 max-w-6xl items-center justify-between">
          <div className="nav-shell-spacer" aria-hidden="true" />
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
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to bright mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to bright mode" : "Switch to dark mode"}
            >
              <span className={`theme-icon theme-icon-sun ${theme === "light" ? "theme-icon-active" : ""}`} aria-hidden="true">
                <span className="theme-icon-sun-core" />
              </span>
              <span className={`theme-icon theme-icon-moon ${theme === "dark" ? "theme-icon-active" : ""}`} aria-hidden="true" />
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
          <button
            type="button"
            className="theme-toggle mt-4"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to bright mode" : "Switch to dark mode"}
          >
            <span className={`theme-icon theme-icon-sun ${theme === "light" ? "theme-icon-active" : ""}`} aria-hidden="true">
              <span className="theme-icon-sun-core" />
            </span>
            <span className={`theme-icon theme-icon-moon ${theme === "dark" ? "theme-icon-active" : ""}`} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <section
        id="hero"
        className="section-fullscreen section-fullscreen--hero relative flex items-center justify-center section-gutter py-12 md:py-0"
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
              preload={heroVideoPreload}
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
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 md:flex-row md:gap-12">
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
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] section-gutter"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
        >
          <div className="section-shell">
            <p className="section-label mb-3">ENTERPRISE AI</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-stretch lg:gap-10">
              <div className="enterprise-opener">
                <div className="enterprise-statement-stack">
                  <p className="enterprise-statement-line hero-heading text-[var(--white-80)]">
                    ENTERPRISE AI IS NOT JUST A SMARTER INTERFACE.
                  </p>
                  <div className="rule enterprise-statement-rule" />
                  <p className="enterprise-statement-line hero-heading text-[var(--white-100)]">
                    IT IS AI BUILT TO OPERATE INSIDE REAL COMPANIES.
                  </p>
                </div>
                <p className="enterprise-opener-body max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-[0.95rem]">
                  DeView designs and implements enterprise AI systems that survive scale, compliance, integration
                  complexity, and operational accountability — the real line between a demo and a production
                  deployment.
                </p>

                {/* Visual: interface-only vs operational AI */}
                <motion.div
                  variants={cardMotion}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={reveal.viewport}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="enterprise-system-compare mt-8 grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] sm:grid-cols-2"
                >
                  {/* Left panel: interface only */}
                  <div className="flex flex-col gap-5 bg-[var(--background)] p-5">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-30)]">INTERFACE ONLY</p>

                    <div className="space-y-2">
                      <div className="flex justify-end">
                        <div className="max-w-[82%] border border-[var(--white-10)] px-3 py-2">
                          <p className="mb-1 text-[0.52rem] uppercase tracking-[0.14em] text-[var(--white-30)]">USER</p>
                          <p className="type-line text-[0.7rem] leading-snug text-[var(--white-40)]">
                            {displayedUserMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[82%] border border-[var(--white-10)] bg-[var(--surface)] px-3 py-2">
                          <p className="mb-1 text-[0.52rem] uppercase tracking-[0.14em] text-[var(--white-30)]">AI</p>
                          <p className="type-line text-[0.7rem] leading-snug text-[var(--white-30)]">
                            {displayedAiMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto border-t border-[var(--white-10)] pt-4 space-y-1.5">
                      {["No access to your systems", "No action taken", "Not monitored or measured"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="shrink-0 text-[0.6rem] text-[var(--white-20)]">—</span>
                          <span className="text-[0.62rem] uppercase tracking-[0.1em] text-[var(--white-30)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel: operational AI */}
                  <div className="flex flex-col gap-5 bg-[var(--surface)] p-5">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-80)]">OPERATIONAL AI</p>

                    <div className="grid min-w-0 grid-cols-[1fr_auto_1fr] items-start gap-1.5 sm:gap-2">
                      <div className="min-w-0 space-y-1.5">
                        <p className="mb-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">INPUTS</p>
                        {["CRM", "ERP", "SLACK", "DOCS"].map((src) => (
                          <div key={src} className="border border-[var(--white-20)] px-2 py-1.5 text-center">
                            <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--white-60)]">{src}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1.5 px-1 pt-7">
                        <span className="text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-60)]">AI</span>
                        <span className="text-[0.7rem] leading-none text-[var(--white-40)]">→</span>
                      </div>

                      <div className="min-w-0 space-y-1.5">
                        <p className="mb-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">ACTIONS</p>
                        {["TICKET", "ALERT", "REPORT", "ESCALATION"].map((out) => (
                          <div key={out} className="border border-[var(--white-20)] px-2 py-1.5 text-center">
                            <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--white-60)]">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-[var(--white-20)] pt-4 space-y-1.5">
                      {["Reads from and writes to your systems", "Every action tracked and auditable", "Monitored and evaluated in production"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="shrink-0 text-[0.6rem] text-[var(--white-60)]">+</span>
                          <span className="text-[0.62rem] uppercase tracking-[0.1em] text-[var(--white-80)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <aside className="enterprise-opener-aside flex flex-col justify-end border-t border-[var(--white-20)] pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <div className="space-y-4 text-[0.72rem] text-[var(--white-80)] sm:text-xs">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 lg:flex-col lg:gap-1">
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">WE DO</span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      Strategy, architecture, deployment, and integration
                    </span>
                  </div>
                  <div className="rule opacity-60 lg:hidden" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 lg:flex-col lg:gap-1">
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">FOCUS</span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      Reliable AI for enterprise workflows, not generic tools
                    </span>
                  </div>
                  <div className="rule opacity-60 lg:hidden" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 lg:flex-col lg:gap-1">
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">BOTTOM LINE</span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      This is why infrastructure matters
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div>
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label mb-2">WHAT MAKES IT ENTERPRISE</p>
                <h3 className="text-lg text-[var(--white-100)] md:text-2xl">Enterprise AI works when the deployment is built for enterprise reality.</h3>
              </div>
              <p className="max-w-sm text-[0.8rem] text-[var(--text-muted)]">
                DeView designs for scale, compliance, integration, and accountability from the start.
              </p>
            </div>
            <div className="rule" />
            <div>
              {enterprisePillars.map((pillar, i) => (
                <div
                  key={pillar.id}
                  className={`pillar-row-outer${activeEnterprisePillar === pillar.id ? " pillar-row-outer--active" : ""}`}
                  onMouseEnter={() => setActiveEnterprisePillar(pillar.id)}
                  onFocus={() => setActiveEnterprisePillar(pillar.id)}
                >
                  {/* Content — revealed by the wipe */}
                  <div className="pillar-row">
                    <span className="pillar-row-num">0{i + 1}</span>
                    <span className="pillar-row-label">{pillar.label}</span>
                    <span className="pillar-row-summary">{pillar.summary}</span>
                    <ul className="pillar-row-points">
                      {pillar.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Wipe cover — collapses left→right on scroll into view */}
                  <motion.div
                    className="pillar-row-wipe"
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                    aria-hidden="true"
                  />
                  {/* Large background number */}
                  <span className="pillar-row-bg-num" aria-hidden="true">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

      {/* Full-bleed scroll-pinned enterprise mode stage */}
      <div
        ref={enterpriseModesSectionRef}
        className="enterprise-stage-scroll-wrapper"
      >
        <section
          ref={enterpriseStagePanelRef}
          className={`enterprise-mode-stage border-t border-[var(--white-20)] bg-[var(--surface-elevated)] enterprise-mode-stage--${enterprisePinState}`}
        >
            <motion.div
              className="enterprise-mode-stage-copy"
              style={{ opacity: enterpriseStageIntroOpacity, y: enterpriseStageIntroY }}
            >
              <p className="section-label mb-3">WHAT IS ENTERPRISE AI</p>
              <h3 className="enterprise-mode-stage-title text-[var(--white-100)]">
                Four operating modes across interaction, automation, strategic value, and insight.
              </h3>
              <p className="enterprise-mode-stage-body text-[var(--text-muted)]">
                The useful implementations usually combine multiple modes. We scope the right mix based on the
                workflow, the decision point, and the level of control required.
              </p>
            </motion.div>
            <motion.div
              style={{
                scale: enterpriseMapScale,
                rotateX: enterpriseMapRotateX,
                y: enterpriseMapY,
                filter: enterpriseMapFilter,
              }}
              className="enterprise-map-shell enterprise-mode-stage-shell"
            >
              <div className="enterprise-scroll-rail" aria-hidden="true">
                <motion.div className="enterprise-scroll-rail-fill" style={{ height: enterpriseRailFill }} />
              </div>
              <div className={`enterprise-mode-text-stage enterprise-mode-text-stage-${selectedMode.id}`}>
                <div className={`enterprise-mode-ambient enterprise-mode-ambient-${selectedMode.id}`} aria-hidden="true" />
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-top" aria-hidden="true">
                  <span>HIGH STRATEGIC VALUE</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-left" aria-hidden="true">
                  <span>USER INTERACTION</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-right" aria-hidden="true">
                  <span>HIGH AUTOMATION</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-bottom" aria-hidden="true">
                  <span>OPERATIONAL INSIGHT</span>
                </div>
                <div className="enterprise-mode-text-main">
                  <motion.p
                    key={selectedMode.id}
                    initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="enterprise-mode-text-label"
                  >
                    {selectedMode.label}
                  </motion.p>
                  <motion.p
                    key={`${selectedMode.id}-axis`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: 0.06 }}
                    className="enterprise-mode-text-axis"
                  >
                    {selectedMode.axis}
                  </motion.p>
                </div>
                <div className="enterprise-mode-sequence" aria-hidden="true">
                  <motion.p
                    key={`${selectedMode.id}-position`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.26 }}
                    className="enterprise-mode-text-position"
                  >
                    {selectedMode.position}
                  </motion.p>
                  <div className="enterprise-mode-text-list">
                    {enterpriseModes.map((mode, index) => (
                      <button
                        type="button"
                        key={mode.id}
                        className={`enterprise-mode-text-list-item ${
                          activeEnterpriseMode === mode.id ? "enterprise-mode-text-list-item-active" : ""
                        }`}
                        onClick={() => setActiveEnterpriseMode(mode.id)}
                        aria-current={activeEnterpriseMode === mode.id ? "true" : undefined}
                      >
                        <span className="enterprise-mode-text-list-index">{String(index + 1).padStart(2, "0")}</span>
                        <span>{mode.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              key={selectedMode.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{ y: enterpriseDetailY, opacity: enterpriseDetailOpacity }}
              className="enterprise-detail enterprise-mode-stage-detail"
            >
              <div>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">ACTIVE MODE</p>
                <p className="text-base uppercase tracking-[0.16em] text-[var(--white-100)]">{selectedMode.label}</p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[var(--white-40)]">{selectedMode.axis}</p>
              </div>
              <p className="enterprise-mode-stage-detail-copy text-[var(--text-muted)]">{selectedMode.body}</p>
            </motion.div>
          </section>
      </div>

      <section className="relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
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
            <div className="mb-4 flex flex-wrap gap-3">
              <button
                type="button"
                className={`enterprise-chip ${architectureFocus === "public" ? "enterprise-chip-active" : ""}`}
                onMouseEnter={() => setArchitectureFocus("public")}
                onFocus={() => setArchitectureFocus("public")}
                onClick={() => setArchitectureFocus("public")}
              >
                PUBLIC AI SERVICE
              </button>
              <button
                type="button"
                className={`enterprise-chip ${architectureFocus === "enterprise" ? "enterprise-chip-active" : ""}`}
                onMouseEnter={() => setArchitectureFocus("enterprise")}
                onFocus={() => setArchitectureFocus("enterprise")}
                onClick={() => setArchitectureFocus("enterprise")}
              >
                ENTERPRISE AI DEPLOYMENT
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <article
                className={`enterprise-compare enterprise-compare-public ${
                  architectureFocus === "public" ? "enterprise-compare-active" : "enterprise-compare-dim"
                }`}
              >
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
              <div
                className={`enterprise-arrow ${
                  architectureFocus === "enterprise" ? "enterprise-arrow-enterprise" : "enterprise-arrow-public"
                }`}
                aria-hidden="true"
              >
                <span>→</span>
              </div>
              <article
                className={`enterprise-compare enterprise-compare-enterprise ${
                  architectureFocus === "enterprise" ? "enterprise-compare-active" : "enterprise-compare-dim"
                }`}
              >
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
              <p className="section-label mb-2 text-[0.65rem]">BOTTOM LINE</p>
              <p className="max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-sm">
                This is why infrastructure matters. Enterprise AI is not only about model quality — it is about
                data control, uptime, compliance posture, system integration, and accountability in the workflow.
              </p>
            </div>
          </motion.section>
        </div>
      </section>

      <section
        id="services"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
        >
          <div className="section-shell">
            <p className="section-label mb-3">SERVICES</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        ref={solutionsSectionRef}
        className="solutions-section section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] section-gutter"
        style={
          {
            "--solutions-accent": activeSolution.accent,
            "--solutions-marquee-offset": `${solutionsMarqueeOffset}%`,
          } as CSSProperties
        }
      >
        <div
          className={`solutions-marquee-container ${isSolutionsInView ? "solutions-marquee-container-visible" : ""}`}
          aria-hidden="true"
        >
          {["top", "bottom"].map((position) => (
            <div key={`${position}-${activeSolution.id}`} className={`solutions-marquee solutions-marquee-${position}`}>
              <div className="solutions-marquee-track">
                {marqueeContent}
              </div>
            </div>
          ))}
        </div>
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="solutions-content mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
        >
          <div className="section-shell">
            <p className="section-label mb-3">USE CASES</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
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
              className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-0 ps-1 pe-[max(1rem,env(safe-area-inset-right))] [-webkit-overflow-scrolling:touch] sm:gap-6 sm:px-6 sm:pe-4 md:px-8"
            >
              {solutionAreas.map((area) => (
                <motion.div
                  key={area.title}
                  ref={(node) => {
                    solutionCardRefs.current[solutionAreas.findIndex((item) => item.id === area.id)] = node;
                  }}
                  variants={cardMotion}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                  onMouseEnter={() => setActiveSolutionIndex(solutionAreas.findIndex((item) => item.id === area.id))}
                  onFocusCapture={() => setActiveSolutionIndex(solutionAreas.findIndex((item) => item.id === area.id))}
                  className={`solutions-card panel panel-interactive min-w-[min(85vw,calc(100vw-2.5rem))] max-w-[calc(100vw-2rem)] snap-start border border-[var(--white-20)] bg-[var(--surface-elevated)] px-4 py-5 sm:min-w-[360px] sm:max-w-none sm:px-5 sm:py-6 lg:min-w-[420px] ${
                    activeSolution.id === area.id ? "solutions-card-active" : "solutions-card-inactive"
                  }`}
                >
                  <p className="section-label mb-3 text-[0.65rem]">{area.sector}</p>
                  <p className={`solutions-card-title mb-3 text-sm text-[var(--white-100)] ${
                    activeSolution.id === area.id ? "solutions-card-title-active" : ""
                  }`}>
                    {area.title}
                  </p>
                  <p className="text-[0.8rem] text-[var(--text-muted)]">{area.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="outcomes"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
        >
          <div className="section-shell">
            <p className="section-label mb-3">OUTCOMES</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
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
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] section-gutter"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-6 md:gap-10"
        >
          <div className="section-shell">
            <p className="section-label mb-3">PROCESS</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        className="relative min-h-[88vh] scroll-mt-20 border-t border-[var(--white-20)] bg-[var(--background)] section-gutter pb-[max(1rem,env(safe-area-inset-bottom))] pt-20 md:min-h-[84vh] md:pb-[max(0.5rem,env(safe-area-inset-bottom))] md:pt-20"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-8">
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

      <footer className="section-gutter border-t border-[var(--white-20)] bg-[var(--background)] pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-6 sm:pt-8">
        <div className="footer-card mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.26em] text-[var(--white-60)]">DeView</p>
              <h3 className="max-w-lg text-[clamp(1.15rem,2.2vw,1.75rem)] leading-[1.05] text-[var(--white-100)]">
                Enterprise AI work that fits the constraints of real operations.
              </h3>
              <p className="mt-4 max-w-md text-[0.86rem] leading-relaxed text-[var(--text-muted)]">
                Strategy, implementation, and system integration for teams that need useful AI in production,
                not another internal demo.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">Start with a real workflow</span>
              <a href="/contact" className="btn-outline">
                SEND INQUIRY →
              </a>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            <div>
              <p className="footer-column-title">Navigation</p>
              <ul className="footer-link-list">
                <li>
                  <a href="#hero">AI Consulting</a>
                </li>
                <li>
                  <a href="#enterprise-ai">Enterprise AI</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#solutions">Use Cases</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer-column-title">Delivery</p>
              <ul className="footer-link-list">
                <li>
                  <a href="#outcomes">Outcomes</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="mailto:hello@deview.ai">hello@deview.ai</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer-column-title">Access</p>
              <ul className="footer-link-list">
                <li>
                  <a href="/contact">Contact Form</a>
                </li>
                <li>
                  <a href="https://ai-consulting-task-manager.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Internal Workspace
                  </a>
                </li>
                <li>
                  <span>Mid-market to enterprise</span>
                </li>
                <li>
                  <span>Discovery to production</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-nav-shell">
            <a href="#hero" className="footer-pill footer-pill-active">
              <span>AI Consulting</span>
            </a>
            <a href="#services" className="footer-pill">
              <span>Services</span>
            </a>
            <a href="#solutions" className="footer-pill">
              <span>Use Cases</span>
            </a>
            <a href="#outcomes" className="footer-pill">
              <span>Outcomes</span>
            </a>
            <a href="#process" className="footer-pill">
              <span>Process</span>
            </a>
            <a href="#contact" className="footer-pill">
              <span>Contact</span>
            </a>
          </div>

          <div className="footer-divider" />

          <div className="flex flex-col gap-3 text-[0.68rem] text-[var(--white-60)] sm:flex-row sm:items-center sm:justify-between">
            <span className="uppercase tracking-[0.2em] text-[var(--white-80)]">© {new Date().getFullYear()} DeView</span>
            <span>AI consulting and data engineering for production-grade systems.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
