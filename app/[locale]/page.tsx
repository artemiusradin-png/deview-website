"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Rocket, X, Layers, ScanEye, FileText, BarChart3, Database, Sparkles } from "lucide-react";
import TimeLine_01 from "@/components/ui/release-time-line";
import { AnimatedFeatureSpotlightDemo } from "@/components/AnimatedFeatureSpotlightDemo";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { SecurityTrustSection } from "@/components/SecurityTrustSection";
import { SiteFooter } from "@/components/SiteFooter";
import { RETRO_FEATURE_CARDS_ID, RetroFeatureCards } from "@/components/RetroFeatureCards";
import { SelectedProjectsLogoMarquee } from "@/components/SelectedProjectsLogoMarquee";
import { Banner } from "@/components/ui/banner";
import { Globe } from "@/components/ui/globe";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { CtaCard } from "@/components/ui/call-to-action-cta";
import { HomeProcessTimeline } from "@/components/HomeProcessTimeline";
import { HomeInsightsPreview } from "@/components/HomeInsightsPreview";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { HomeIndustries } from "@/components/HomeIndustries";
import TeamMemberCard from "@/components/ui/team-member-card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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

const HERO_VIDEO_SRC = "/deview-hero-animation.mp4";
const HERO_VIDEO_CROSSFADE_SECONDS = 0.9;

const ENTERPRISE_MODE_IDS = ["predictive", "conversational", "generative", "analytical"] as const;
type EnterpriseModeId = (typeof ENTERPRISE_MODE_IDS)[number];


export default function Home() {
  const { dict, locale, setLocale, localePath } = useLocaleContext();
  const enterpriseModes = ENTERPRISE_MODE_IDS.map((id) => ({
    id,
    ...dict.enterpriseModes[id],
  }));
  const axes = dict.enterpriseAxes;
  const interfaceUserMessage = dict.hero.interfaceUser;
  const interfaceAiMessage = dict.hero.interfaceAi;
  const heroVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const agroVideoRef = useRef<HTMLVideoElement | null>(null);
  const unifiedPortalVideoRef = useRef<HTMLVideoElement | null>(null);
  const enterpriseModesSectionRef = useRef<HTMLDivElement | null>(null);
  const [heroVideoState, setHeroVideoState] = useState<"loading" | "playing" | "fallback">("loading");
  const [activeHeroLayer, setActiveHeroLayer] = useState(0);
  const [fadingHeroLayer, setFadingHeroLayer] = useState<number | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeEnterpriseMode, setActiveEnterpriseMode] = useState<EnterpriseModeId>(ENTERPRISE_MODE_IDS[0]);
  const [navVisible, setNavVisible] = useState(true);
  const [typedUserMessage, setTypedUserMessage] = useState("");
  const [typedAiMessage, setTypedAiMessage] = useState("");
  const [heroVideoPreload, setHeroVideoPreload] = useState<"auto" | "metadata">("metadata");
  const [isCompactEnterpriseLayout, setIsCompactEnterpriseLayout] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [guideCtaVisible, setGuideCtaVisible] = useState(true);
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
    const videos = [agroVideoRef.current, unifiedPortalVideoRef.current].filter(
      (v): v is HTMLVideoElement => v !== null,
    );
    if (videos.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.5] },
    );
    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setHeroVideoPreload(mq.matches ? "auto" : "metadata");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsCompactEnterpriseLayout(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobileViewport(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (isMobileViewport) {
      setHeroVideoState("fallback");
      return;
    }

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
  }, [isMobileViewport]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let mounted = true;
    let userTimeout: ReturnType<typeof setTimeout> | null = null;
    let aiTimeout: ReturnType<typeof setTimeout> | null = null;

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
    };
  }, [prefersReducedMotion, interfaceUserMessage, interfaceAiMessage]);

  useMotionValueEvent(enterpriseModesProgress, "change", (latest) => {
    if (prefersReducedMotion || isCompactEnterpriseLayout) {
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
      standbyStartedRef.current = false;
    } catch {
      setHeroVideoState("fallback");
      standbyStartedRef.current = false;
      return;
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
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    if (isMobileViewport) {
      // Avoid per-scroll React state churn on iOS, which can cause visible jumpiness.
      setNavVisible(true);
      return;
    }

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

  return (
    <div className="min-h-screen bg-[var(--background)] bg-grid text-[var(--text)]">
      <a
        href="#"
        className="brand-mark fixed left-0 top-0 z-50 flex h-16 items-center px-4 pt-[env(safe-area-inset-top)] text-[12px] tracking-[0.25em] text-[var(--white-80)] sm:px-6 sm:text-[13px]"
        onClick={closeNav}
      >
        {dict.whatMakesEnterprise.backBrand}
      </a>

      <header
        className={`nav-shell fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[var(--black-80)] to-transparent pt-[env(safe-area-inset-top)] ${
          navVisible ? "nav-shell-visible" : "nav-shell-hidden"
        }`}
      >
        <nav className="section-gutter mx-auto flex h-16 max-w-6xl items-center justify-between">
          <div className="nav-shell-spacer" aria-hidden="true" />
          <div className="flex items-center gap-3 md:hidden">
            {/* Language toggle moved into the mobile dropdown menu — keeps the always-visible header lean. */}
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
          </div>
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            <a href="#hero" className="nav-item nav-item-active">
              {dict.nav.aiConsulting}
            </a>
            <a href="#services" className="nav-item">
              {dict.nav.services}
            </a>
            <a href={localePath("/case-studies")} className="nav-item">
              {dict.nav.caseStudies}
            </a>
            <a href={localePath("/insights")} className="nav-item">
              {dict.nav.insights}
            </a>
            <a href={localePath("/about")} className="nav-item">
              {dict.nav.about}
            </a>
            <a href={localePath("/contact")} className="nav-item">
              {dict.nav.inquire}
            </a>
            <div className="flex items-center gap-2 lg:gap-2.5">
              <LanguageSwitcher />
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
          <a href="#services" onClick={closeNav}>
            {dict.nav.services}
          </a>
          <a href={localePath("/case-studies")} onClick={closeNav}>
            {dict.nav.caseStudies}
          </a>
          <a href={localePath("/insights")} onClick={closeNav}>
            {dict.nav.insights}
          </a>
          <a href={localePath("/about")} onClick={closeNav}>
            {dict.nav.about}
          </a>
          <a href={localePath("/how-we-work")} onClick={closeNav}>
            {dict.nav.howWeWork}
          </a>
          <a href={localePath("/faq")} onClick={closeNav}>
            {dict.nav.faq}
          </a>
          <a href={localePath("/contact")} onClick={closeNav}>
            {dict.nav.inquire}
          </a>
          <a href={localePath("/contact")} onClick={closeNav}>
            {dict.mobileNav.contactForm}
          </a>
          <div className="mt-4 flex items-center gap-3">
            <LanguageSwitcher />
            <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={themeAria}>
              <span className={`theme-icon theme-icon-sun ${theme === "light" ? "theme-icon-active" : ""}`} aria-hidden="true">
                <span className="theme-icon-sun-core" />
              </span>
              <span className={`theme-icon theme-icon-moon ${theme === "dark" ? "theme-icon-active" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}

      {/* Free AI guide CTA removed */}
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
        {/* Globe — desktop-only decoration; hidden on mobile to remove overlap with compressed hero */}
        <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden hidden" aria-hidden="true">
          <Globe className="absolute left-1/2 top-1/2 w-[160%] max-w-none -translate-x-1/2 -translate-y-[55%] opacity-50" />
        </div>

        <div
          className={`absolute inset-0 ${heroVideoState === "fallback" ? "hero-overlay" : "hero-overlay hero-overlay-video"}`}
        />
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-start gap-6 md:-mt-16 md:flex-row md:items-start md:gap-12">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.6 }}
            className="flex max-w-2xl flex-col md:min-h-[calc(100svh-var(--header-stack-height)-2.25rem)] md:pt-2 lg:min-h-0"
          >
            <p className="section-label mb-4">{dict.hero.kicker}</p>
            <h1 className="hero-heading mb-6 text-[clamp(2rem,6.5vw,2.75rem)] leading-[1.06] text-[var(--white-100)] md:text-5xl md:leading-[1.02] lg:text-6xl">
              {dict.hero.titleL1}
              <br />
              {dict.hero.titleL2}
              {dict.hero.titleL3 ? (
                <>
                  <br />
                  {dict.hero.titleL3}
                </>
              ) : null}
            </h1>
            {/* Mobile: lead + CTA sit ~25svh below the headline — past the visual centre, still on the first scroll.
                Desktop: same wrapper, pinned to the bottom of the column via mt-auto. */}
            <div className="mt-[25svh] md:mt-auto md:pt-8 lg:mt-0 lg:pt-12">
              <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-base">{dict.hero.lead}</p>
              <div className="mt-6 md:mt-7">
                {/* Mobile-only filled CTA — bigger, bolder, full-width. */}
                <a
                  href={localePath("/contact")}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--white-100)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--background)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] transition-transform active:scale-[0.98] md:hidden"
                >
                  <span>{dict.hero.inquire}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                {/* Desktop: outline button, unchanged. Wrapped because the .btn-outline @media (max-width: 961px) rule re-applies display:inline-flex and beats Tailwind's `hidden` on the child. */}
                <span className="hidden md:inline-block">
                  <a href={localePath("/contact")} className="btn-outline inline-block">
                    {dict.hero.inquire}
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-aside flex flex-col items-start justify-between gap-8 text-left md:ml-auto md:items-end md:gap-10 md:text-right"
          >
            <div className="hidden space-y-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)] sm:text-xs md:block">
              {dict.hero.col1.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div className="hidden w-full space-y-3 text-sm md:block md:w-auto">
              <div className="flex flex-col gap-1 sm:items-end">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.clients}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.clientsValue}</span>
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.focus}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.focusValue}</span>
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                <span className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)] sm:text-xs">
                  {dict.hero.engagements}
                </span>
                <span className="text-sm text-[var(--white-100)] sm:text-base">{dict.hero.engagementsValue}</span>
              </div>
            </div>
            <div className="h-16 w-full md:hidden" aria-hidden="true" />
            <div className="flex w-full flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 md:w-auto md:justify-end md:gap-8">
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

      {false && <section
        id="enterprise-ai"
        className="enterprise-ai-section section-fullscreen relative bg-[var(--surface)] section-gutter"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full min-h-0 max-w-6xl flex-col justify-between gap-6 overflow-hidden md:gap-10"
        >
          <div className="section-shell flex min-h-0 flex-1 flex-col">
            <p className="section-label mb-3">{dict.enterpriseAi.label}</p>
            <div className="rule mb-6" />
            <div className="enterprise-difference-grid grid min-h-0 flex-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,16rem)] lg:items-stretch lg:gap-8">
              <div className="enterprise-opener">
                <div className="enterprise-statement-stack">
                  <p
                    className={`enterprise-statement-line hero-heading ${
                      dict.enterpriseAi.statement2 ? "text-[var(--white-80)]" : "text-[var(--white-100)]"
                    }`}
                  >
                    {dict.enterpriseAi.statement1}
                  </p>
                  {dict.enterpriseAi.statement2 ? (
                    <>
                      <div className="rule enterprise-statement-rule" />
                      <p className="enterprise-statement-line hero-heading text-[var(--white-100)]">
                        {dict.enterpriseAi.statement2}
                      </p>
                    </>
                  ) : null}
                </div>
                <p className="enterprise-opener-body max-w-3xl text-[0.84rem] leading-relaxed text-[var(--text-muted)] md:text-[0.9rem]">
                  {dict.enterpriseAi.opener}
                </p>

                {/* Visual: interface-only vs operational AI */}
                <motion.div
                  variants={cardMotion}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={reveal.viewport}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="enterprise-system-compare mt-6 grid gap-px border border-[var(--white-20)] bg-[var(--white-20)] md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]"
                >
                  {/* Left panel: interface only */}
                  <div className="enterprise-compare-panel enterprise-compare-panel--chat flex flex-col bg-[var(--background)]">
                    <p className="enterprise-compare-heading text-[var(--white-30)]">
                      {dict.enterpriseAi.compare.interfaceOnly}
                    </p>

                    <div className="enterprise-chat-stack">
                      <div className="flex justify-end">
                        <div className="enterprise-chat-bubble enterprise-chat-bubble--user">
                          <p className="enterprise-chat-label text-[var(--white-30)]">
                            {dict.hero.labels.user}
                          </p>
                          <p className="enterprise-chat-copy text-[var(--white-40)]">
                            {displayedUserMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="enterprise-chat-bubble enterprise-chat-bubble--ai">
                          <p className="enterprise-chat-label text-[var(--white-30)]">
                            {dict.hero.labels.ai}
                          </p>
                          <p className="enterprise-chat-copy enterprise-chat-copy--ai text-[var(--white-30)]">
                            {displayedAiMessage}
                            <span className="type-caret" aria-hidden="true" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="enterprise-compare-bullets enterprise-compare-bullets--muted mt-auto">
                      {dict.enterpriseAi.compare.interfaceBullets.map((item) => (
                        <div key={item} className="enterprise-compare-bullet">
                          <span className="shrink-0 text-[0.6rem] text-[var(--white-20)]">—</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right panel: operational AI */}
                  <div className="enterprise-compare-panel enterprise-compare-panel--system flex flex-col bg-[var(--surface)]">
                    <p className="enterprise-compare-heading text-[var(--white-80)]">
                      {dict.enterpriseAi.compare.operational}
                    </p>

                    <div className="enterprise-operational-flow">
                      <div className="min-w-0">
                        <p className="enterprise-flow-label text-[var(--white-40)]">
                          {dict.enterpriseAi.compare.inputs}
                        </p>
                        {dict.enterpriseAi.compare.sources.map((src) => (
                          <div key={src} className="enterprise-flow-tile">
                            <span>{src}</span>
                          </div>
                        ))}
                      </div>

                      <div className="enterprise-flow-ai">
                        <span>
                          {dict.hero.labels.ai}
                        </span>
                        <span aria-hidden="true">→</span>
                      </div>

                      <div className="min-w-0">
                        <p className="enterprise-flow-label text-[var(--white-40)]">
                          {dict.enterpriseAi.compare.actions}
                        </p>
                        {dict.enterpriseAi.compare.outputs.map((out) => (
                          <div key={out} className="enterprise-flow-tile enterprise-flow-tile--active">
                            <span>{out}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="enterprise-compare-bullets mt-auto">
                      {dict.enterpriseAi.compare.opBullets.map((item) => (
                        <div key={item} className="enterprise-compare-bullet enterprise-compare-bullet--active">
                          <span className="shrink-0 text-[0.6rem] text-[var(--white-60)]">+</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <aside className="enterprise-opener-aside flex flex-col justify-end pt-8 lg:border-l lg:pt-0 lg:pl-10">
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
                </div>
              </aside>
            </div>
          </div>

        </motion.div>
      </section>}

      <HomeServicesSection variant="home" />

      <HomeProcessTimeline />

      {/* Featured deployment — AgroPlatforma (after WHAT WE BUILD services) */}
      <section
        id="featured-deployment"
        className="scroll-margin-header border-t border-[var(--white-20)] bg-[var(--background)] pt-10 sm:pt-16 md:pt-28 pb-12 sm:pb-20 md:pb-28"
      >
        <div className="section-gutter mx-auto max-w-[96rem]">
          <p className="section-label mb-3">{dict.featuredAgro.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
              {dict.featuredAgro.title}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              {dict.featuredAgro.subtitle}
            </p>
          </div>

          {/* Two-column: phased build on the left, video on the right (sticky on desktop) */}
          <div className="mt-6 grid gap-6 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] md:gap-12 md:items-start">
            {/* LEFT — phased build narrative (desktop-only; mobile gets a condensed summary below) */}
            <div className="order-2 hidden md:order-1 md:block">
              <h3 className="mb-4 text-2xl font-medium tracking-tight text-[var(--white-100)] md:text-3xl">
                {dict.featuredAgro.phasedTitle}
              </h3>
              <p className="mb-10 max-w-prose text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                {dict.featuredAgro.phasedBody}
              </p>

              <ol className="space-y-8">
                {dict.featuredAgro.phases.map((phase, idx) => {
                  const PhaseIcon = [Layers, ScanEye, FileText, BarChart3][idx];
                  return (
                  <li key={phase.title} className="relative">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[var(--white-20)] bg-[var(--surface)] text-[var(--white-100)]" aria-hidden="true">
                        {PhaseIcon && <PhaseIcon className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                          {phase.subtitle}
                        </div>
                        <h4 className="mt-1 text-base font-medium leading-snug text-[var(--white-100)] md:text-lg">
                          {phase.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                          {phase.description}
                        </p>
                        {"items" in phase && phase.items ? (
                          <ul className="mt-4 space-y-2">
                            {phase.items.map((item: string) => (
                              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--white-40)]" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                    {idx < 3 ? (
                      <div className="ml-4 mt-6 h-px w-[calc(100%-1rem)] bg-[var(--white-10)]" aria-hidden="true" />
                    ) : null}
                  </li>
                  );
                })}
              </ol>

              <a
                href={localePath("/more-info")}
                className="mt-10 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-sm uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors hover:text-[var(--white-100)]"
              >
                {dict.featuredAgro.readCaseStudy}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* RIGHT — video (sticky on desktop) */}
            <div className="order-1 md:order-2 md:sticky md:top-24 md:self-start">
              <div className="overflow-hidden border border-[var(--white-20)] bg-black">
                <video
                  ref={agroVideoRef}
                  className="block h-auto w-full"
                  controls
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  poster="/deview-agroplatforma-poster.svg"
                >
                  <source src="/deview-agroplatforma-demo.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
          </div>

          {/* Mobile-only condensed summary — replaces the phased build OL on small screens */}
          <div className="mt-4 md:hidden">
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {dict.featuredAgro.mobileSummary}
            </p>
            <a
              href={localePath("/more-info")}
              className="mt-5 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)]"
            >
              {dict.featuredAgro.readCaseStudy}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured deployment — DeView Unified Portal (finance / lending) */}
      <section
        id="featured-deployment-finance"
        className="scroll-margin-header border-t border-[var(--white-20)] bg-[var(--background)] pt-10 sm:pt-16 md:pt-28 pb-12 sm:pb-20 md:pb-28"
      >
        <div className="section-gutter mx-auto max-w-[96rem]">
          <p className="section-label mb-3">{dict.featuredPortal.sectionLabel}</p>
          <div className="rule mb-6" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h2 className="text-[clamp(1.75rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
              {dict.featuredPortal.title}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              {dict.featuredPortal.subtitle}
            </p>
          </div>

          {/* Two-column: phased build on the left, video on the right (sticky on desktop) */}
          <div className="mt-6 grid gap-6 md:mt-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] md:gap-12 md:items-start">
            {/* LEFT — phased build narrative (desktop-only; mobile gets a condensed summary below) */}
            <div className="order-2 hidden md:order-1 md:block">
              <h3 className="mb-4 text-2xl font-medium tracking-tight text-[var(--white-100)] md:text-3xl">
                {dict.featuredPortal.phasedTitle}
              </h3>
              <p className="mb-10 max-w-prose text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                {dict.featuredPortal.phasedBody}
              </p>

              <ol className="space-y-8">
                {dict.featuredPortal.phases.map((phase, idx, arr) => {
                  const PortalIcon = [Database, Sparkles][idx];
                  return (
                  <li key={phase.title} className="relative">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[var(--white-20)] bg-[var(--surface)] text-[var(--white-100)]" aria-hidden="true">
                        {PortalIcon && <PortalIcon className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
                          {phase.subtitle}
                        </div>
                        <h4 className="mt-1 text-base font-medium leading-snug text-[var(--white-100)] md:text-lg">
                          {phase.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                          {phase.description}
                        </p>
                        {"capabilities" in phase && phase.capabilities ? (
                          <ol className="mt-5 space-y-4">
                            {phase.capabilities.map((cap: { name: string; body: string }, capIdx: number) => (
                              <li key={cap.name} className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-6 min-w-[1.75rem] shrink-0 items-center justify-center rounded border border-[var(--white-20)] px-1 text-[0.6rem] tabular-nums uppercase tracking-[0.18em] text-[var(--white-60)]" aria-hidden="true">
                                  {String(capIdx + 1).padStart(2, "0")}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium leading-snug text-[var(--white-100)]">
                                    {cap.name}
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                                    {cap.body}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        ) : null}
                      </div>
                    </div>
                    {idx < arr.length - 1 ? (
                      <div className="ml-4 mt-6 h-px w-[calc(100%-1rem)] bg-[var(--white-10)]" aria-hidden="true" />
                    ) : null}
                  </li>
                  );
                })}
              </ol>

              <a
                href={localePath("/case-studies")}
                className="mt-10 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-sm uppercase tracking-[0.18em] text-[var(--white-80)] transition-colors hover:text-[var(--white-100)]"
              >
                {dict.featuredPortal.readCaseStudy}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* RIGHT — video (sticky on desktop) */}
            <div className="order-1 md:order-2 md:sticky md:top-24 md:self-start">
              <div className="overflow-hidden border border-[var(--white-20)] bg-black">
                <video
                  ref={unifiedPortalVideoRef}
                  className="block h-auto w-full"
                  controls
                  preload="metadata"
                  playsInline
                  muted
                  loop
                >
                  <source src="/deview-unified-portal-demo.mp4" type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
          </div>

          {/* Mobile-only condensed summary */}
          <div className="mt-4 md:hidden">
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {dict.featuredPortal.mobileSummary}
            </p>
            <a
              href={localePath("/industries/lending")}
              className="mt-5 inline-flex items-center gap-2 border-b border-[var(--white-30)] pb-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--white-80)]"
            >
              {dict.featuredPortal.readCaseStudy}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <SelectedProjectsLogoMarquee />

      <HomeIndustries />

      <SecurityTrustSection />

      {/* Full-bleed scroll-pinned enterprise mode stage — hidden for now (globe block). Re-enable by removing the `false &&` guard. */}
      {false && <div
        id="enterprise-modes"
        ref={enterpriseModesSectionRef}
        className="enterprise-stage-scroll-wrapper"
      >
        <section
          className="enterprise-mode-stage enterprise-mode-stage--frameless bg-[var(--background)]"
        >
            {/* Globe — stays fixed with the pinned panel on desktop; flows below intro copy on mobile */}
            <div
              className="enterprise-globe-wrapper pointer-events-none absolute inset-y-0 right-0 z-[40] w-[44%] overflow-visible"
              aria-hidden="true"
            >
              <Globe className="absolute left-[-8%] top-1/2 z-[40] w-[108%] max-w-none -translate-y-[48%]" />
            </div>

            <div className="enterprise-map-shell enterprise-mode-stage-shell">
              <div className="enterprise-scroll-rail" aria-hidden="true">
                <motion.div className="enterprise-scroll-rail-fill" style={{ height: enterpriseRailFill }} />
              </div>
              <motion.div
                className="enterprise-mode-cards-motion"
                style={{ filter: "none" }}
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
      </div>}

      <RetroFeatureCards />

      <AnimatedFeatureSpotlightDemo />

      {/* <HomeTestimonials /> */}

      {/* Leadership section hidden for now
      <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">LEADERSHIP</p>
          <div className="rule mb-2" />
          <TeamMemberCard
            position="left"
            jobPosition="Managing Director"
            firstName="Artemis"
            lastName="Radin"
            imageUrl="/team/artemis-radin.jpg"
            href={localePath("/contact")}
            description="Artemis leads DeView's engagements end to end — from scoping the workflows that cost clients the most to shipping the AI systems that fix them. He works directly with operations and finance leaders across the firm's offices, holding every build to one standard: measurable outcomes in weeks, not roadmaps in quarters."
          />
        </div>
      </section>
      */}

      <HomeInsightsPreview />

      <section id="contact" className="scroll-margin-header pt-6 md:pt-8">
        <CtaCard
          title={`${dict.contact.titleL1} ${dict.contact.titleL2}`}
          description={`${dict.contact.leadL1} ${dict.contact.leadL2}`}
          buttonText={dict.contact.sendInquiry}
          inputPlaceholder="Your email address"
          onButtonClick={(email) => {
            window.location.href = `/contact?email=${encodeURIComponent(email)}`;
          }}
          className="min-h-[180px]"
        />
      </section>

      <SiteFooter />

      {/* Removed persistent mobile CTA dock — header nav, in-page CTAs, and footer cover this without crowding the viewport. */}
    </div>
  );
}
