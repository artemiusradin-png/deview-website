"use client";

import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const features = [
  {
    title: "AI Model Orchestration",
    description: "Deploy and manage large language models at scale with our enterprise-grade orchestration platform.",
    icon: "◇",
  },
  {
    title: "GPU Infrastructure",
    description: "Access dedicated GPU clusters optimized for training and inference workloads.",
    icon: "◆",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and access controls.",
    icon: "◈",
  },
  {
    title: "99.99% Uptime SLA",
    description: "Mission-critical reliability with redundant systems and 24/7 monitoring.",
    icon: "◎",
  },
];

const services = [
  {
    title: "AI Customer Service",
    description: "Intelligent, 24/7 customer support powered by AI. Handle tickets, resolve issues, and delight customers at scale—with human oversight when it matters.",
  },
  {
    title: "AI Agentic",
    description: "Autonomous AI agents that orchestrate workflows, make decisions, and execute tasks across your enterprise systems. Built for complex, multi-step operations.",
  },
  {
    title: "AI Document Intelligence",
    description: "Extract, classify, and analyze documents at enterprise scale. From contracts to invoices—automate your document workflows with AI.",
  },
  {
    title: "AI Analytics & Insights",
    description: "Turn your data into actionable intelligence. Natural language queries, predictive analytics, and automated reporting for your entire organization.",
  },
];

const stats = [
  { value: "10x", label: "Faster inference" },
  { value: "50%", label: "Cost reduction" },
  { value: "99.99%", label: "Uptime SLA" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-grid overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-[100px]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/50 bg-[var(--bg)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <motion.a
            href="#"
            className="text-xl font-semibold text-[var(--text)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            De<span className="text-[var(--accent)]">View</span>
          </motion.a>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">Features</a>
            <a href="#services" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">Services</a>
            <a href="#contact" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">Contact</a>
            <motion.a
              href="#contact"
              className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-[var(--accent-bright)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-36 pb-28">
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="initial" animate="animate" className="text-center">
            <motion.a
              href="#features"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-muted)] px-4 py-1.5 text-sm font-medium text-[var(--accent)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              AI Enterprise Infrastructure
            </motion.a>
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="text-[var(--text)]">AI infrastructure</span>
              <br />
              <span className="gradient-text">for the enterprise</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mb-12 max-w-2xl text-lg text-[var(--text-muted)]"
            >
              Deploy models, scale AI customer service, run agentic workflows—all with enterprise security and 99.99% uptime.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 font-semibold text-black transition-all hover:bg-[var(--accent-bright)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center rounded-xl border border-[var(--border)] px-6 py-3.5 font-medium text-[var(--text)] transition-all hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                See the platform
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero visual - floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 rounded-2xl border border-[var(--border)]/50 bg-[var(--surface)]/80 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {["Model serving", "GPU clusters", "AI agents", "Auto-scaling", "Monitoring"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm text-[var(--text-muted)]">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--border)]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "72%" }}
                  transition={{ delay: 1, duration: 1.2 }}
                />
              </div>
              <span className="text-xs text-[var(--text-muted)]">72% capacity</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-y border-[var(--border)]/50 bg-[var(--surface)]/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text sm:text-5xl">{stat.value}</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - Bento grid */}
      <section id="features" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">Platform</p>
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Everything you need to run AI at scale
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)]/30 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]"
              >
                <div className="absolute -right-4 -top-4 text-6xl text-[var(--accent)]/10 transition-colors group-hover:text-[var(--accent)]/20">
                  {feature.icon}
                </div>
                <h3 className="relative mb-3 font-semibold text-[var(--text)]">{feature.title}</h3>
                <p className="relative text-sm leading-relaxed text-[var(--text-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 border-t border-[var(--border)]/50 bg-[var(--surface)]/20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">Enterprise Solutions</p>
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              AI services built for the enterprise
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--accent)]/20"
              >
                <div className="mb-4 text-2xl font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                  {service.title}
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-b from-[var(--surface)] to-[var(--surface-elevated)] p-12 text-center glow"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-[80px]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">
                Ready to scale your AI?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-[var(--text-muted)]">
                Join enterprises that trust DeView. Start with a free trial—no credit card required.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
                />
                <motion.button
                  type="submit"
                  className="rounded-xl bg-[var(--accent)] px-6 py-3.5 font-semibold text-black transition-all hover:bg-[var(--accent-bright)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="text-lg font-semibold text-[var(--text)]">
            De<span className="text-[var(--accent)]">View</span>
          </a>
          <div className="flex gap-8 text-sm text-[var(--text-muted)]">
            <a
              href="https://ai-consulting-task-manager.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Partners
            </a>
            <a href="#" className="transition-colors hover:text-[var(--accent)]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[var(--accent)]">Terms</a>
            <a href="#" className="transition-colors hover:text-[var(--accent)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
