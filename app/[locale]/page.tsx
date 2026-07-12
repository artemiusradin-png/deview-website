"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, ScanEye, FileText, BarChart3, Database, Sparkles } from "lucide-react";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { HeroFlowField } from "@/components/HeroFlowField";
import { PixelField } from "@/components/PixelField";
import { CtaCard } from "@/components/ui/call-to-action-cta";
import TeamMemberCard from "@/components/ui/team-member-card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// Below-the-fold sections are loaded as separate chunks to shrink the initial JS bundle.
// Keep the RetroFeatureCards anchor id in sync with components/RetroFeatureCards.tsx.
const RETRO_FEATURE_CARDS_ID = "retro-feature-cards";
const AnimatedFeatureSpotlightDemo = dynamic(() =>
  import("@/components/AnimatedFeatureSpotlightDemo").then((m) => m.AnimatedFeatureSpotlightDemo),
);
const HomeServicesSection = dynamic(() =>
  import("@/components/HomeServicesSection").then((m) => m.HomeServicesSection),
);
const HomePracticeAreas = dynamic(() =>
  import("@/components/HomePracticeAreas").then((m) => m.HomePracticeAreas),
);
const AnimatedServiceCardStack = dynamic(
  () => import("@/components/ui/animate-card-animation"),
  { ssr: false },
);
const SecurityTrustSection = dynamic(() =>
  import("@/components/SecurityTrustSection").then((m) => m.SecurityTrustSection),
);
const SiteFooter = dynamic(() => import("@/components/SiteFooter").then((m) => m.SiteFooter));
const RetroFeatureCards = dynamic(() =>
  import("@/components/RetroFeatureCards").then((m) => m.RetroFeatureCards),
);
const SelectedProjectsLogoMarquee = dynamic(() =>
  import("@/components/SelectedProjectsLogoMarquee").then((m) => m.SelectedProjectsLogoMarquee),
);
const HomeProcessTimeline = dynamic(() =>
  import("@/components/HomeProcessTimeline").then((m) => m.HomeProcessTimeline),
);
const HomeInsightsPreview = dynamic(() =>
  import("@/components/HomeInsightsPreview").then((m) => m.HomeInsightsPreview),
);
const HomeOutcomesStrip = dynamic(() =>
  import("@/components/HomeOutcomesStrip").then((m) => m.HomeOutcomesStrip),
);
const HomeIndustries = dynamic(() =>
  import("@/components/HomeIndustries").then((m) => m.HomeIndustries),
);

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

export default function Home() {
  const { dict, locale, setLocale, localePath } = useLocaleContext();
  const agroVideoRef = useRef<HTMLVideoElement | null>(null);
  const unifiedPortalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [navVisible, setNavVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
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
  const themeAria =
    theme === "dark" ? dict.a11y.themeToLight : dict.a11y.themeToDark;

  // First four flagship AI services drive the animated card stack — copy comes from the dictionary.
  const serviceStackImages = [
    "/images/stock/dashboard-laptop-900.webp",
    "/images/stock/desk-notebook-900.webp",
    "/images/stock/finance-calculator-1200.webp",
    "/images/stock/team-meeting-900.webp",
  ];
  const serviceStackCards = dict.services.items.slice(0, 4).map((item, index) => ({
    label: item.label,
    title: item.title,
    description: `${item.scope} · ${item.duration}`,
    image: serviceStackImages[index],
    href: localePath(`/services#${item.id}`),
    ctaLabel: dict.practices.exploreCta,
  }));

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
            <a href={localePath("/services")} className="nav-item">
              {dict.nav.services}
            </a>
            <a href={localePath("/pricing")} className="nav-item">
              {dict.nav.pricing}
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
          <a href={localePath("/services")} onClick={closeNav}>
            {dict.nav.services}
          </a>
          <a href={localePath("/pricing")} onClick={closeNav}>
            {dict.nav.pricing}
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
          <HeroFlowField className="absolute inset-0" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
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


      <HomePracticeAreas />

      <HomeServicesSection variant="home" />

      <section className="border-t border-[var(--white-20)] bg-[var(--background)] px-4 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="section-label mb-3">{dict.practices.flagshipLabel}</p>
              <div className="rule mb-6" />
              <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] leading-snug text-[var(--white-100)]">
                {dict.practices.flagshipTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              {dict.practices.flagshipIntro}
            </p>
          </div>
          <AnimatedServiceCardStack cards={serviceStackCards} nextLabel={dict.practices.nextService} />
        </div>
      </section>

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
                href={localePath("/case-studies")}
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
                  preload="none"
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
              href={localePath("/case-studies")}
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
                  preload="none"
                  playsInline
                  muted
                  loop
                  poster="/deview-unified-portal-poster.svg"
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
              href={localePath("/case-studies")}
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


      <RetroFeatureCards />

      <AnimatedFeatureSpotlightDemo />

      <HomeOutcomesStrip />

      <section className="relative overflow-hidden bg-[var(--background)] section-gutter py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">{dict.leadership.sectionLabel}</p>
          <div className="rule mb-2" />
          <TeamMemberCard
            position="left"
            jobPosition={dict.leadership.jobPosition}
            firstName={dict.leadership.firstName}
            lastName={dict.leadership.lastName}
            imageUrl="/team/artemis-radin-800.webp"
            href={localePath("/contact")}
            description={dict.leadership.description}
          />
        </div>
      </section>

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

      <PixelField />

      {/* Removed persistent mobile CTA dock — header nav, in-page CTAs, and footer cover this without crowding the viewport. */}
    </div>
  );
}
