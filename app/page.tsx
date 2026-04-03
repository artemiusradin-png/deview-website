"use client";

import { useEffect, useRef, useState } from "react";
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
    label: "EFFICIENCY",
    body: "Reduce manual work in repetitive internal processes and shorten the time from request to action.",
  },
  {
    label: "SERVICE QUALITY",
    body: "Improve response quality, consistency, and speed across customer-facing and internal support workflows.",
  },
  {
    label: "DECISION SUPPORT",
    body: "Give teams faster access to the right information so planning, review, and escalation decisions are made with better context.",
  },
  {
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
  const [heroVideoState, setHeroVideoState] = useState<"loading" | "playing" | "fallback">("loading");
  const [activeHeroLayer, setActiveHeroLayer] = useState(0);
  const [fadingHeroLayer, setFadingHeroLayer] = useState<number | null>(null);
  const standbyStartedRef = useRef(false);
  const crossfadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const primaryVideo = heroVideoRefs.current[0];

    if (!primaryVideo) {
      setHeroVideoState("fallback");
      return;
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

    attemptPlayback();

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

  return (
    <div className="min-h-screen bg-black bg-grid text-[var(--text)]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--white-20)] bg-gradient-to-b from-[var(--black-80)] to-transparent">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-sm tracking-[0.25em] uppercase text-[var(--white-80)]">
            DEVIEW
          </a>
          <div className="hidden gap-8 md:flex">
            <a href="#hero" className="nav-item nav-item-active">
              AI CONSULTING
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
          </div>
        </nav>
      </header>

      <section id="hero" className="section-fullscreen relative flex items-center justify-center px-6">
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
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col justify-between gap-16 md:flex-row">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="section-label mb-4">AI STRATEGY, IMPLEMENTATION, AND INTEGRATION</p>
            <h1 className="hero-heading mb-6 text-4xl text-[var(--white-100)] md:text-5xl lg:text-6xl">
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
            className="flex flex-col items-end justify-between gap-10 text-right"
          >
            <div className="space-y-2 text-xs uppercase tracking-[0.18em] text-[var(--white-60)]">
              <div>STRATEGY</div>
              <div>SOLUTION DELIVERY</div>
              <div>AI IMPLEMENTATION</div>
              <div>SYSTEM INTEGRATION</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--white-60)]">CLIENTS</span>
                <span className="text-base text-[var(--white-100)]">MID-MARKET TO ENTERPRISE</span>
              </div>
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--white-60)]">FOCUS</span>
                <span className="text-base text-[var(--white-100)]">USEFUL AI, NOT DEMO THEATER</span>
              </div>
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--white-60)]">ENGAGEMENTS</span>
                <span className="text-base text-[var(--white-100)]">DISCOVERY TO PRODUCTION</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href="#contact" className="btn-outline">
                INQUIRE
              </a>
              <div className="flex flex-col items-end gap-3">
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
        id="services"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-black px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">SERVICES</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-2xl text-[var(--white-100)] md:text-3xl">
                End-to-end services for
                <br />
                implementing AI in business operations.
              </h2>
              <p className="max-w-md text-xs text-[var(--text-muted)] md:text-sm">
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
            className="grid gap-10 md:grid-cols-2 xl:grid-cols-4"
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
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">USE CASES</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
              <h2 className="mb-4 text-2xl text-[var(--white-100)] md:text-3xl">
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
              <div className="space-y-4 text-xs text-[var(--white-80)]">
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">FRAMING</span>
                  <span className="text-right">Business workflows before model types</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">POSITIONING</span>
                  <span className="text-right">Custom systems integrated with real operations</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">DELIVERY</span>
                  <span className="text-right">Strategy, implementation, and rollout in one engagement</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="grid gap-8 md:grid-cols-2"
          >
            {solutionAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={cardMotion}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                className="panel panel-interactive border border-[var(--white-20)] bg-black px-5 py-6"
              >
                <p className="section-label mb-3 text-[0.65rem]">{area.sector}</p>
                <p className="mb-3 text-sm text-[var(--white-100)]">{area.title}</p>
                <p className="text-[0.8rem] text-[var(--text-muted)]">{area.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="outcomes"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-black px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">OUTCOMES</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
              <h2 className="mb-4 text-2xl text-[var(--white-100)] md:text-3xl">
                  Business value from
                  <br />
                  implemented AI systems.
                </h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  We focus on outcomes that matter to operators: lower manual load, faster service, stronger
                  decision support, and tighter control over operational cost.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Every implementation is scoped around measurable improvements, not generic AI activity.
                </p>
              </div>
              <div className="space-y-3 text-[0.8rem] text-[var(--white-80)]">
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">BUYER SIGNAL</span>
                  <span>Clear ROI narrative</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">TONE</span>
                  <span>Practical, not hype-driven</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">PROOF</span>
                  <span>Best paired with case studies later</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={stagger.viewport}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.label}
                variants={cardMotion}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -4, borderColor: "rgba(240, 240, 250, 0.32)" }}
                className="panel panel-interactive border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5"
              >
                <p className="section-label mb-2 text-[0.6rem]">{outcome.label}</p>
                <p className="text-[0.8rem] text-[var(--text-muted)]">{outcome.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section
        id="process"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-6"
      >
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16"
        >
          <div className="section-shell">
            <p className="section-label mb-3">PROCESS</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-2xl text-[var(--white-100)] md:text-3xl">
                A clear process for taking AI
                <br />
                from idea to live implementation.
              </h2>
              <p className="max-w-md text-xs text-[var(--text-muted)] md:text-sm">
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
                className="panel panel-interactive process-card border border-[var(--white-20)] bg-black px-5 py-6"
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

      <section id="contact" className="relative border-t border-[var(--white-20)] bg-black px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-3">INQUIRE</p>
          <div className="rule mb-8" />
          <h2 className="mb-4 text-2xl text-[var(--white-100)] md:text-3xl">
            Bring us the workflow, constraint,
            <br />
            or AI idea you want pressure-tested.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-[var(--text-muted)]">
            Share the business function, current process, available data, and desired outcome. We reply with a
            structured view of fit, scope, and the right engagement path.
          </p>
          <div className="space-y-4 text-sm">
            <p className="uppercase tracking-[0.2em] text-[var(--white-60)]">PRIMARY CONTACT</p>
            <a
              href="mailto:hello@deview.ai"
              className="text-lg text-[var(--white-100)] underline underline-offset-4 md:text-xl"
            >
              hello@deview.ai
            </a>
            <p className="text-[0.8rem] text-[var(--text-muted)]">
              Include timelines, stakeholders, and any existing internal tooling or AI initiatives we should
              design around.
            </p>
            <div className="pt-3">
              <a href="/contact" className="btn-outline">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--white-20)] bg-black px-6 py-8 text-[0.7rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--white-80)]">DEVIEW</span>
            <span className="text-[var(--white-40)]">© {new Date().getFullYear()} DeView. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-5 text-[var(--white-60)]">
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
              INTERNAL DASHBOARD
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
