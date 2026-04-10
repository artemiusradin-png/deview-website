"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HomeServicesSection } from "../components/HomeServicesSection";
import { SiteFooter } from "../components/SiteFooter";
import { RETRO_FEATURE_CARDS_ID, RetroFeatureCards } from "../components/RetroFeatureCards";
import { useLocaleContext } from "@/lib/i18n/locale-context";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const HERO_VIDEO_SRC = "/Abstract_Architectural_AI_Background_Video.mp4";
const HERO_VIDEO_CROSSFADE_SECONDS = 0.9;

const ENTERPRISE_MODE_IDS = ["predictive", "conversational", "generative", "analytical"] as const;
type EnterpriseModeId = (typeof ENTERPRISE_MODE_IDS)[number];

export default function Home() {
  const { dict, locale, setLocale } = useLocaleContext();
  const enterpriseModes = ENTERPRISE_MODE_IDS.map((id) => ({
    id,
    ...dict.enterpriseModes[id],
  }));
  const axes = dict.enterpriseAxes;
  const interfaceUserMessage = dict.hero.interfaceUser;
  const interfaceAiMessage = dict.hero.interfaceAi;
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
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
  const [activeEnterpriseMode, setActiveEnterpriseMode] = useState<EnterpriseModeId>(ENTERPRISE_MODE_IDS[0]);
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
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const scrollToRetroCards = () => {
      if (window.location.hash !== `#${RETRO_FEATURE_CARDS_ID}`) return;
      document.getElementById(RETRO_FEATURE_CARDS_ID)?.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };
    scrollToRetroCards();
    const t0 = window.setTimeout(scrollToRetroCards, 0);
    const t1 = window.setTimeout(scrollToRetroCards, 100);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [pathname, prefersReducedMotion]);

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
        setTypedUserMessage(interfaceUserMessage.slice(0, userIndex));

        if (userIndex < interfaceUserMessage.length) {
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
        setTypedAiMessage(interfaceAiMessage.slice(0, aiIndex));

        if (aiIndex < interfaceAiMessage.length) {
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
  }, [prefersReducedMotion, interfaceUserMessage, interfaceAiMessage]);

  useEffect(() => {
    const wrapper = enterpriseModesSectionRef.current;

    if (!wrapper) {
      return;
    }

    const getNavHeight = () => {
      const header = document.querySelector("header.nav-shell");
      return header ? Math.round(header.getBoundingClientRect().height) : 64;
    };

    const update = () => {
      const navHeight = getNavHeight();
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const wrapperHeight = wrapper.offsetHeight;
      const panelHeight = window.innerHeight - navHeight;
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
  const selectedMode = enterpriseModes.find((mode) => mode.id === activeEnterpriseMode) ?? enterpriseModes[0];
  const displayedUserMessage = prefersReducedMotion ? interfaceUserMessage : typedUserMessage;
  const displayedAiMessage = prefersReducedMotion ? interfaceAiMessage : typedAiMessage;
  const themeAria =
    theme === "dark" ? dict.a11y.themeToLight : dict.a11y.themeToDark;
  const langSwitchLabel = locale === "en" ? "Language" : "語言";
  /** Keep shell transform-free — scale/rotateX on an ancestor rasterizes type and looks blurry while scrolling. */
  const enterpriseRailFill = useTransform(enterpriseModesProgress, [0, 1], ["0%", "100%"]);
  /** Intro copy: stay solid longer, then a tight scroll band with brief blur-out (readable, fast handoff to cards). */
  const enterpriseStageIntroOpacity = useTransform(
    enterpriseModesProgress,
    prefersReducedMotion ? [0, 0.028, 0.032] : [0, 0.028, 0.038],
    prefersReducedMotion ? [1, 1, 0] : [1, 1, 0],
  );
  const enterpriseStageIntroBlur = useTransform(
    enterpriseModesProgress,
    prefersReducedMotion ? [0, 1] : [0, 0.024, 0.03, 0.036, 0.042],
    prefersReducedMotion ? [0, 0] : [0, 0, 5, 14, 18],
  );
  const enterpriseStageIntroFilter = useTransform(enterpriseStageIntroBlur, (px) => `blur(${px}px)`);
  /** While intro is prominent, soften mode labels beneath so lines don’t read as stacked */
  const enterpriseCardsBlurPx = useTransform(
    enterpriseModesProgress,
    prefersReducedMotion ? [0, 1] : [0, 0.012, 0.028, 0.05],
    prefersReducedMotion ? [0, 0] : [11, 8, 2, 0],
  );
  const enterpriseCardsFilter = useTransform(enterpriseCardsBlurPx, (px) => `blur(${px}px)`);
  const enterpriseStageIntroY = useTransform(
    enterpriseModesProgress,
    [0, 0.045],
    prefersReducedMotion ? [0, 0] : [0, -22],
  );

  return (
    <div className="min-h-screen bg-[var(--background)] bg-grid text-[var(--text)]">
      <a
        href="#"
        className="brand-mark fixed left-0 top-0 z-50 px-4 pt-[calc(env(safe-area-inset-top)+1.35rem)] text-xs tracking-[0.25em] text-[var(--white-80)] sm:px-6 sm:text-sm"
        onClick={closeNav}
      >
        {dict.whatMakesEnterprise.backBrand}
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
            aria-label={navOpen ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            <a href="#hero" className="nav-item nav-item-active">
              {dict.nav.aiConsulting}
            </a>
            <a href="#enterprise-ai" className="nav-item">
              {dict.nav.enterpriseAi}
            </a>
            <a href="#services" className="nav-item">
              {dict.nav.services}
            </a>
            <a href="/outcomes" className="nav-item">
              {dict.nav.outcomes}
            </a>
            <a href="#contact" className="nav-item">
              {dict.nav.inquire}
            </a>
            <div className="flex items-center gap-2 lg:gap-2.5">
              <div className="lang-toggle" role="group" aria-label={langSwitchLabel}>
                <button
                  type="button"
                  className={`lang-toggle__opt${locale === "en" ? " is-active" : ""}`}
                  onClick={() => setLocale("en")}
                  aria-pressed={locale === "en"}
                >
                  {dict.lang.shortEn}
                </button>
                <button
                  type="button"
                  className={`lang-toggle__opt${locale === "zh-HK" ? " is-active" : ""}`}
                  onClick={() => setLocale("zh-HK")}
                  aria-pressed={locale === "zh-HK"}
                >
                  {dict.lang.shortZh}
                </button>
              </div>
              <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={themeAria} title={themeAria}>
                <span className={`theme-icon theme-icon-sun ${theme === "light" ? "theme-icon-active" : ""}`} aria-hidden="true">
                  <span className="theme-icon-sun-core" />
                </span>
                <span className={`theme-icon theme-icon-moon ${theme === "dark" ? "theme-icon-active" : ""}`} aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {navOpen ? (
        <div
          id="mobile-site-nav"
          className="mobile-nav-overlay md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={dict.a11y.siteNav}
        >
          <button type="button" className="mb-4 self-end text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]" onClick={closeNav}>
            {dict.mobileNav.close}
          </button>
          <a href="#hero" className="nav-item-active" onClick={closeNav}>
            {dict.nav.aiConsulting}
          </a>
          <a href="#enterprise-ai" onClick={closeNav}>
            {dict.nav.enterpriseAi}
          </a>
          <a href="#services" onClick={closeNav}>
            {dict.nav.services}
          </a>
          <a href="/outcomes" onClick={closeNav}>
            {dict.nav.outcomes}
          </a>
          <a href="#contact" onClick={closeNav}>
            {dict.nav.inquire}
          </a>
          <a href="/contact" onClick={closeNav}>
            {dict.mobileNav.contactForm}
          </a>
          <div className="mt-4 flex items-center gap-3">
            <div className="lang-toggle" role="group" aria-label={langSwitchLabel}>
              <button
                type="button"
                className={`lang-toggle__opt${locale === "en" ? " is-active" : ""}`}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
              >
                {dict.lang.shortEn}
              </button>
              <button
                type="button"
                className={`lang-toggle__opt${locale === "zh-HK" ? " is-active" : ""}`}
                onClick={() => setLocale("zh-HK")}
                aria-pressed={locale === "zh-HK"}
              >
                {dict.lang.shortZh}
              </button>
            </div>
            <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={themeAria}>
              <span className={`theme-icon theme-icon-sun ${theme === "light" ? "theme-icon-active" : ""}`} aria-hidden="true">
                <span className="theme-icon-sun-core" />
              </span>
              <span className={`theme-icon theme-icon-moon ${theme === "dark" ? "theme-icon-active" : ""}`} aria-hidden="true" />
            </button>
          </div>
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
            <p className="section-label mb-4">{dict.hero.kicker}</p>
            <h1 className="hero-heading mb-6 text-[clamp(1.75rem,6.5vw,2.75rem)] text-[var(--white-100)] md:text-5xl lg:text-6xl">
              {dict.hero.titleL1}
              <br />
              {dict.hero.titleL2}
              <br />
              {dict.hero.titleL3}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-base">{dict.hero.lead}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-8 text-left md:items-end md:gap-10 md:text-right"
          >
            <div className="space-y-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)] sm:text-xs">
              {dict.hero.col1.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div className="w-full space-y-3 text-sm md:w-auto">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.clients}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.clientsValue}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.focus}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.focusValue}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-end sm:gap-4">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.engagements}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.engagementsValue}</span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:w-auto md:justify-end md:gap-8">
              <a href="#contact" className="btn-outline w-full text-center sm:w-auto">
                {dict.hero.inquire}
              </a>
              <div className="flex flex-col items-center gap-3 sm:ml-auto sm:items-end md:ml-0">
                <div className="scroll-cue" />
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                  {dict.hero.scroll}
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
            <p className="section-label mb-3">{dict.enterpriseAi.label}</p>
            <div className="rule mb-6" />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_auto] lg:items-stretch lg:gap-10">
              <div className="enterprise-opener">
                <div className="enterprise-statement-stack">
                  <p className="enterprise-statement-line hero-heading text-[var(--white-80)]">
                    {dict.enterpriseAi.statement1}
                  </p>
                  <div className="rule enterprise-statement-rule" />
                  <p className="enterprise-statement-line hero-heading text-[var(--white-100)]">
                    {dict.enterpriseAi.statement2}
                  </p>
                </div>
                <p className="enterprise-opener-body max-w-2xl text-[0.88rem] leading-relaxed text-[var(--text-muted)] md:text-[0.95rem]">
                  {dict.enterpriseAi.opener}
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
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-30)]">
                      {dict.enterpriseAi.compare.interfaceOnly}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-end">
                        <div className="max-w-[82%] border border-[var(--white-10)] px-3 py-2">
                          <p className="mb-1 text-[0.52rem] uppercase tracking-[0.14em] text-[var(--white-30)]">
                            {dict.hero.labels.user}
                          </p>
                          <p className="type-line text-[0.7rem] leading-snug text-[var(--white-40)]">
                            {displayedUserMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[82%] border border-[var(--white-10)] bg-[var(--surface)] px-3 py-2">
                          <p className="mb-1 text-[0.52rem] uppercase tracking-[0.14em] text-[var(--white-30)]">
                            {dict.hero.labels.ai}
                          </p>
                          <p className="type-line text-[0.7rem] leading-snug text-[var(--white-30)]">
                            {displayedAiMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto border-t border-[var(--white-10)] pt-4 space-y-1.5">
                      {dict.enterpriseAi.compare.interfaceBullets.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="shrink-0 text-[0.6rem] text-[var(--white-20)]">—</span>
                          <span className="text-[0.62rem] uppercase tracking-[0.1em] text-[var(--white-30)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel: operational AI */}
                  <div className="flex flex-col gap-5 bg-[var(--surface)] p-5">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-80)]">
                      {dict.enterpriseAi.compare.operational}
                    </p>

                    <div className="grid min-w-0 grid-cols-[1fr_auto_1fr] items-start gap-1.5 sm:gap-2">
                      <div className="min-w-0 space-y-1.5">
                        <p className="mb-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                          {dict.enterpriseAi.compare.inputs}
                        </p>
                        {dict.enterpriseAi.compare.sources.map((src) => (
                          <div key={src} className="border border-[var(--white-20)] px-2 py-1.5 text-center">
                            <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--white-60)]">{src}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1.5 px-1 pt-7">
                        <span className="text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-60)]">
                          {dict.hero.labels.ai}
                        </span>
                        <span className="text-[0.7rem] leading-none text-[var(--white-40)]">→</span>
                      </div>

                      <div className="min-w-0 space-y-1.5">
                        <p className="mb-2 text-[0.5rem] uppercase tracking-[0.14em] text-[var(--white-40)]">
                          {dict.enterpriseAi.compare.actions}
                        </p>
                        {dict.enterpriseAi.compare.outputs.map((out) => (
                          <div key={out} className="border border-[var(--white-20)] px-2 py-1.5 text-center">
                            <span className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--white-60)]">{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto border-t border-[var(--white-20)] pt-4 space-y-1.5">
                      {dict.enterpriseAi.compare.opBullets.map((item) => (
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
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">
                      {dict.enterpriseAi.aside.weDo}
                    </span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      {dict.enterpriseAi.aside.weDoBody}
                    </span>
                  </div>
                  <div className="rule opacity-60 lg:hidden" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 lg:flex-col lg:gap-1">
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">
                      {dict.enterpriseAi.aside.focus}
                    </span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      {dict.enterpriseAi.aside.focusBody}
                    </span>
                  </div>
                  <div className="rule opacity-60 lg:hidden" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6 lg:flex-col lg:gap-1">
                    <span className="shrink-0 uppercase tracking-[0.2em] text-[var(--white-60)]">
                      {dict.enterpriseAi.aside.bottomLine}
                    </span>
                    <span className="lg:text-[0.78rem] lg:leading-snug lg:text-[var(--white-80)]">
                      {dict.enterpriseAi.aside.bottomLineBody}
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Full-bleed scroll-pinned enterprise mode stage */}
      <div
        id="enterprise-modes"
        ref={enterpriseModesSectionRef}
        className="enterprise-stage-scroll-wrapper"
      >
        <section
          ref={enterpriseStagePanelRef}
          className={`enterprise-mode-stage enterprise-mode-stage--frameless bg-[var(--background)] enterprise-mode-stage--${enterprisePinState}`}
        >
            <motion.div
              className="enterprise-mode-stage-copy"
              style={{
                opacity: enterpriseStageIntroOpacity,
                y: enterpriseStageIntroY,
                filter: enterpriseStageIntroFilter,
              }}
            >
              <p className="section-label mb-3">{dict.enterpriseModesIntro.label}</p>
              <h3 className="enterprise-mode-stage-title text-[var(--white-100)]">{dict.enterpriseModesIntro.title}</h3>
              <p className="enterprise-mode-stage-body text-[var(--text-muted)]">{dict.enterpriseModesIntro.body}</p>
            </motion.div>
            <div className="enterprise-map-shell enterprise-mode-stage-shell">
              <div className="enterprise-scroll-rail" aria-hidden="true">
                <motion.div className="enterprise-scroll-rail-fill" style={{ height: enterpriseRailFill }} />
              </div>
              <motion.div
                className="enterprise-mode-cards-motion"
                style={{ filter: enterpriseCardsFilter }}
              >
              <div className={`enterprise-mode-text-stage enterprise-mode-text-stage-${selectedMode.id}`}>
                <div className={`enterprise-mode-ambient enterprise-mode-ambient-${selectedMode.id}`} aria-hidden="true" />
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-top" aria-hidden="true">
                  <span>{axes.top}</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-left" aria-hidden="true">
                  <span>{axes.left}</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-right" aria-hidden="true">
                  <span>{axes.right}</span>
                </div>
                <div className="enterprise-mode-text-axes enterprise-mode-text-axes-bottom" aria-hidden="true">
                  <span>{axes.bottom}</span>
                </div>
                <div className="enterprise-mode-text-main">
                  <motion.p
                    key={selectedMode.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                <div className="enterprise-mode-card-footer">
                  <div className="enterprise-mode-sequence">
                    <motion.p
                      key={`${selectedMode.id}-position`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.26 }}
                      className="enterprise-mode-text-position"
                      aria-hidden="true"
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
                  <div
                    key={selectedMode.id}
                    className="enterprise-mode-stage-detail enterprise-mode-stage-detail--in-card"
                  >
                    <div className="enterprise-mode-stage-detail-meta">
                      <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
                        {dict.modeDetail.activeMode}
                      </p>
                      <p className="text-base uppercase tracking-[0.16em] text-[var(--white-100)]">{selectedMode.label}</p>
                      <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[var(--white-40)]">
                        {selectedMode.axis}
                      </p>
                    </div>
                    <p className="enterprise-mode-stage-detail-copy text-[var(--text-muted)]">{selectedMode.body}</p>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </section>
      </div>

      <RetroFeatureCards />

      <HomeServicesSection variant="home" />

      <section
        id="contact"
        className="contact-inquire-section scroll-margin-header relative border-t border-[var(--white-20)] bg-[var(--background)] section-gutter pb-[max(4rem,env(safe-area-inset-bottom))] pt-14 md:pb-[max(5.5rem,env(safe-area-inset-bottom))] md:pt-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-14 md:gap-[4.5rem]">
          <div className="max-w-md">
            <p className="section-label mb-4">{dict.contact.label}</p>
            <div className="rule mb-8 max-w-[11rem]" />
            <h2 className="mb-6 text-sm leading-snug text-[var(--white-100)]">
              {dict.contact.titleL1}
              <br />
              {dict.contact.titleL2}
            </h2>
            <p className="text-sm leading-snug text-[var(--text-muted)]">
              {dict.contact.leadL1}
              <br />
              {dict.contact.leadL2}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-full py-1">
              <a
                href="mailto:hello@deview.ai"
                className="contact-monument-anchor"
                onMouseMove={handleContactMouseMove}
                onMouseLeave={handleContactMouseLeave}
              >
                <span className="contact-monument-line">{dict.contact.monumentL1}</span>
                <span className="contact-monument-line">{dict.contact.monumentL2}</span>
              </a>
            </div>
            <div className="flex justify-start md:justify-end">
              <a href="/contact" className="btn-outline">
                {dict.contact.sendInquiry}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
