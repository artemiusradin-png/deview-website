"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const destinations = [
  {
    label: "DATA FOUNDATIONS",
    vehicle: "Modern Data Stack",
    duration: "8–12 weeks",
    capacity: "Data platforms, warehouses, lakes",
    body: "Design and implement the data architecture your AI systems depend on—governed, observable, and production-ready.",
    availability: "Availability: Q2 / Q3 2026",
    id: "data-foundations",
  },
  {
    label: "AI SYSTEMS",
    vehicle: "LLM & Agents",
    duration: "6–10 weeks",
    capacity: "Customer, operations, and product surfaces",
    body: "Ship AI copilots, retrieval systems, and agentic workflows that plug into your existing products and tooling.",
    availability: "Availability: Rolling admissions",
    id: "ai-systems",
  },
  {
    label: "MLOPS",
    vehicle: "Inference & Training",
    duration: "4–8 weeks",
    capacity: "Model serving, evaluation, monitoring",
    body: "Stand up evaluation loops, safety guardrails, and observability pipelines so models behave reliably in production.",
    availability: "Availability: Q2 2026",
    id: "mlops",
  },
  {
    label: "AI ADOPTION",
    vehicle: "Change & Enablement",
    duration: "Ongoing",
    capacity: "Teams, playbooks, capability building",
    body: "Equip teams with patterns, playbooks, and training so AI becomes a durable capability—not a one-off pilot.",
    availability: "Availability: Limited 2026 cohorts",
    id: "ai-adoption",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-grid text-[var(--text)]">
      {/* Fixed navigation */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--white-20)] bg-gradient-to-b from-[var(--black-80)] to-transparent">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-sm tracking-[0.25em] uppercase text-[var(--white-80)]">
            DEVIEW
          </a>
          <div className="hidden gap-8 md:flex">
            <a href="#hero" className="nav-item nav-item-active">
              AI CONSULTING
            </a>
            <a href="#destinations" className="nav-item">
              SERVICES
            </a>
            <a href="#research" className="nav-item">
              RESEARCH
            </a>
            <a href="#vehicles" className="nav-item">
              PLATFORMS
            </a>
            <a href="#contact" className="nav-item">
              INQUIRE
            </a>
          </div>
        </nav>
      </header>

      {/* HERO – HUMAN SPACEFLIGHT → AI CONSULTING */}
      <section
        id="hero"
        className="section-fullscreen relative flex items-center justify-center px-6 pt-24 pb-10"
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-between gap-16 md:flex-row">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="section-label mb-4">AI CONSULTING & DATA ENGINEERING</p>
            <h1 className="hero-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-[var(--white-100)]">
              HUMAN‑CENTERED
              <br />
              AI SYSTEMS
            </h1>
            <p className="max-w-xl text-sm md:text-base text-[var(--text-muted)]">
              DeView partners with enterprises to design, build, and run AI systems—spanning data platforms,
              LLM applications, and MLOps—so your teams can move from experiments to reliable production impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-end justify-between gap-10 text-right"
          >
            <div className="space-y-2 text-xs text-[var(--white-60)] uppercase tracking-[0.18em]">
              <div>DATA</div>
              <div>AI ENGINEERING</div>
              <div>MLOPS</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--white-60)]">
                  CLIENTS
                </span>
                <span className="text-base text-[var(--white-100)]">MID‑MARKET TO ENTERPRISE</span>
              </div>
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--white-60)]">
                  MODEL STACK
                </span>
                <span className="text-base text-[var(--white-100)]">OPEN‑SOURCE & PROPRIETARY</span>
              </div>
              <div className="flex items-baseline justify-end gap-4">
                <span className="text-xs tracking-[0.2em] uppercase text-[var(--white-60)]">
                  ENGAGEMENTS
                </span>
                <span className="text-base text-[var(--white-100)]">STRATEGY → DELIVERY → RUN</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <a href="#contact" className="btn-outline">
                INQUIRE
              </a>
              <div className="flex flex-col items-end gap-3">
                <div className="scroll-cue" />
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--white-60)]">
                  SCROLL
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS – AI ENGAGEMENTS */}
      <section
        id="destinations"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-black px-6 py-16"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16">
          <div>
            <p className="section-label mb-3">WHERE DO WE START</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-2xl md:text-3xl text-[var(--white-100)]">
                Engagements across data, AI systems,
                <br />
                and long‑term reliability.
              </h2>
              <p className="max-w-md text-xs md:text-sm text-[var(--text-muted)]">
                Four primary tracks structure how we work together. Each is modular and can be combined into
                a broader transformation program.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {destinations.map((d) => (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="panel border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5"
              >
                <p className="section-label mb-3 text-[0.6rem]">{d.label}</p>
                <div className="mb-4 space-y-1 text-[0.7rem] text-[var(--white-80)]">
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">VEHICLE</span>
                    <span>{d.vehicle}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">DURATION</span>
                    <span>{d.duration}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="uppercase tracking-[0.16em] text-[var(--white-60)]">SCOPE</span>
                    <span className="text-right">{d.capacity}</span>
                  </div>
                </div>
                <p className="mb-3 text-[0.75rem] leading-relaxed text-[var(--text-muted)]">{d.body}</p>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">
                  {d.availability}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH / SCIENCE – AI RESEARCH PROGRAMS */}
      <section
        id="research"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-6 py-16"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16">
          <div>
            <p className="section-label mb-3">RESEARCH</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="mb-4 text-2xl md:text-3xl text-[var(--white-100)]">
                  Applied AI research,
                  <br />
                  grounded in your data.
                </h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  We work with product, data, and research teams to design experiments that advance your AI
                  capabilities while respecting safety, governance, and real‑world constraints.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Every engagement includes a structured experimentation plan, evaluation design, and clear
                  decision gates—so research directly informs roadmaps instead of becoming a separate track.
                </p>
              </div>
              <div className="space-y-4 text-xs text-[var(--white-80)]">
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">TRACKS</span>
                  <span>Capability, Risk, Efficiency</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">FOCUS</span>
                  <span>Retrieval, agents, evals</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.2em] text-[var(--white-60)]">OUTPUT</span>
                  <span>Roadmaps, patterns, playbooks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="panel border border-[var(--white-20)] bg-black px-5 py-6">
              <p className="section-label mb-3 text-[0.65rem]">PRODUCT & CUSTOMER EXPERIENCE</p>
              <p className="mb-3 text-sm text-[var(--white-100)]">
                Customer‑facing AI research focuses on latency, reliability, and guardrails.
              </p>
              <p className="text-[0.8rem] text-[var(--text-muted)]">
                We design experiments for AI copilots, search and retrieval, and support automation—measuring
                containment, CSAT, and quality while protecting brand and safety.
              </p>
            </div>
            <div className="panel border border-[var(--white-20)] bg-black px-5 py-6">
              <p className="section-label mb-3 text-[0.65rem]">OPERATIONS & DATA</p>
              <p className="mb-3 text-sm text-[var(--white-100)]">
                Internal‑facing research strengthens data quality and operational efficiency.
              </p>
              <p className="text-[0.8rem] text-[var(--text-muted)]">
                We evaluate how AI can accelerate analysts, engineers, and operators—building feedback loops
                into the data and tooling they already use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT – TOOLING & STACK */}
      <section
        id="equipment"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-black px-6 py-16"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16">
          <div>
            <p className="section-label mb-3">TOOLING</p>
            <div className="rule mb-6" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="mb-4 text-2xl md:text-3xl text-[var(--white-100)]">
                  The systems your teams
                  <br />
                  live and build in.
                </h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">
                  Every engagement includes recommendations—and, when needed, implementation—of the tools that
                  sit closest to your teams: evaluation harnesses, experiment trackers, feature stores, and
                  orchestration.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Rather than pushing a single vendor, we help you select and integrate components into a
                  cohesive stack that your engineers actually want to use.
                </p>
              </div>
              <div className="space-y-3 text-[0.8rem] text-[var(--white-80)]">
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">
                    EVALUATION
                  </span>
                  <span>Offline & online, human‑in‑the‑loop</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">OBSERVABILITY</span>
                  <span>Tracing, logging, drift detection</span>
                </div>
                <div className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-[var(--white-60)]">SECURITY</span>
                  <span>PII handling, access, isolation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="panel border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5">
              <p className="section-label mb-2 text-[0.6rem]">ENGINEERING</p>
              <p className="text-[0.8rem] text-[var(--text-muted)]">
                CI integrations, evaluation gates, and rollout strategies built into your existing pipelines.
              </p>
            </div>
            <div className="panel border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5">
              <p className="section-label mb-2 text-[0.6rem]">DATA</p>
              <p className="text-[0.8rem] text-[var(--text-muted)]">
                Data contracts, lineage, and quality baselines to keep models grounded in trustworthy data.
              </p>
            </div>
            <div className="panel border border-[var(--white-20)] bg-[var(--surface)] px-4 py-5">
              <p className="section-label mb-2 text-[0.6rem]">TEAMS</p>
              <p className="text-[0.8rem] text-[var(--text-muted)]">
                Training, playbooks, and pairing sessions so internal teams can independently extend the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES – PLATFORMS */}
      <section
        id="vehicles"
        className="section-fullscreen relative border-t border-[var(--white-20)] bg-[var(--surface)] px-6 py-16"
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between gap-16">
          <div>
            <p className="section-label mb-3">PLATFORMS</p>
            <div className="rule mb-6" />
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <h2 className="text-2xl md:text-3xl text-[var(--white-100)]">
                Neutral on vendors,
                <br />
                opinionated on architecture.
              </h2>
              <p className="max-w-md text-xs md:text-sm text-[var(--text-muted)]">
                We integrate with major cloud providers and model APIs while prioritizing portability,
                evaluation, and long‑term optionality.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="panel flex flex-col justify-between border border-[var(--white-20)] bg-black px-5 py-6">
              <div>
                <p className="section-label mb-3 text-[0.65rem]">APPLICATION LAYER</p>
                <h3 className="mb-3 text-sm text-[var(--white-100)]">LLM APPLICATIONS & AGENTS</h3>
                <p className="mb-4 text-[0.8rem] text-[var(--text-muted)]">
                  Design and ship retrieval, summarization, and agentic workflows that plug into your existing
                  products—fronted by interfaces your customers and teams can trust.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-80)] underline underline-offset-4"
              >
                INQUIRE ABOUT APPLICATION WORK
              </a>
            </article>
            <article className="panel flex flex-col justify-between border border-[var(--white-20)] bg-black px-5 py-6">
              <div>
                <p className="section-label mb-3 text-[0.65rem]">INFRASTRUCTURE LAYER</p>
                <h3 className="mb-3 text-sm text-[var(--white-100)]">DATA & MLOPS FOUNDATIONS</h3>
                <p className="mb-4 text-[0.8rem] text-[var(--text-muted)]">
                  From ingestion and transformation to evaluation, serving, and monitoring, we help you define
                  an opinionated reference architecture that can evolve with the ecosystem.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.2em] text-[var(--white-80)] underline underline-offset-4"
              >
                INQUIRE ABOUT PLATFORM WORK
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT / INQUIRE */}
      <section
        id="contact"
        className="relative border-t border-[var(--white-20)] bg-black px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-3">INQUIRE</p>
          <div className="rule mb-8" />
          <h2 className="mb-4 text-2xl md:text-3xl text-[var(--white-100)]">
            Ready to map your first—or next—AI mission?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-[var(--text-muted)]">
            Share a brief description of your data, existing systems, and where you believe AI can create
            leverage. We reply with a structured assessment and proposed tracks.
          </p>
          <div className="space-y-4 text-sm">
            <p className="uppercase tracking-[0.2em] text-[var(--white-60)]">PRIMARY CONTACT</p>
            <a
              href="mailto:hello@deview.ai"
              className="text-lg md:text-xl text-[var(--white-100)] underline underline-offset-4"
            >
              hello@deview.ai
            </a>
            <p className="text-[0.8rem] text-[var(--text-muted)]">
              Include timelines, stakeholders, and any existing AI initiatives you would like us to build on.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--white-20)] bg-black px-6 py-8 text-[0.7rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--white-80)]">
              DEVIEW
            </span>
            <span className="text-[var(--white-40)]">
              © {new Date().getFullYear()} DeView. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-[var(--white-60)]">
            <a href="#hero" className="uppercase tracking-[0.18em]">
              AI CONSULTING
            </a>
            <a href="#destinations" className="uppercase tracking-[0.18em]">
              SERVICES
            </a>
            <a href="#research" className="uppercase tracking-[0.18em]">
              RESEARCH
            </a>
            <a href="#vehicles" className="uppercase tracking-[0.18em]">
              PLATFORMS
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
              TASK MANAGER
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
