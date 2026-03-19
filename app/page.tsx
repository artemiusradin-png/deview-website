"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "AI Model Orchestration",
    description: "Deploy and manage large language models at scale with our enterprise-grade orchestration platform.",
  },
  {
    title: "GPU Infrastructure",
    description: "Access dedicated GPU clusters optimized for training and inference workloads.",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and access controls.",
  },
  {
    title: "99.99% Uptime SLA",
    description: "Mission-critical reliability with redundant systems and 24/7 monitoring.",
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Resend style: minimal, clean */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold text-[var(--text)]">
            De<span className="text-[var(--accent)]">View</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]">
              Features
            </a>
            <a href="#services" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]">
              Services
            </a>
            <a href="#contact" className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero - Resend style: bold headline, minimal, centered */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 text-sm font-medium text-[var(--accent)]"
          >
            AI Enterprise Infrastructure
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-6 text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl"
          >
            AI infrastructure for the enterprise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-[var(--text-muted)]"
          >
            Deploy models, scale AI customer service, run agentic workflows—all with enterprise security and 99.99% uptime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-md border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust line - Resend style */}
      <section className="border-y border-[var(--border)] px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-[var(--text-muted)]">
            Companies of all sizes trust DeView for their AI infrastructure.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-3 text-2xl font-semibold text-[var(--text)]">
              Platform
            </h2>
            <p className="max-w-2xl text-[var(--text-muted)]">
              Everything you need to run AI at scale.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border)] hover:bg-[var(--surface-elevated)]"
              >
                <h3 className="mb-2 font-medium text-[var(--text)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-[var(--border)] bg-[var(--surface)]/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-3 text-2xl font-semibold text-[var(--text)]">
              Enterprise Solutions
            </h2>
            <p className="max-w-2xl text-[var(--text-muted)]">
              AI services built for the enterprise.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border)] hover:bg-[var(--surface-elevated)]"
              >
                <h3 className="mb-2 font-medium text-[var(--text)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Resend style: simple, centered */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-2xl font-semibold text-[var(--text)]">
              Ready to scale your AI?
            </h2>
            <p className="mb-8 text-[var(--text-muted)]">
              Join enterprises that trust DeView. Start with a free trial—no credit card required.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your work email"
                className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Get Started
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer - Resend style: minimal */}
      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#" className="text-sm font-medium text-[var(--text)]">
            De<span className="text-[var(--accent)]">View</span>
          </a>
          <div className="flex gap-6 text-sm text-[var(--text-muted)]">
            <a
              href="https://ai-consulting-task-manager.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--text)]"
            >
              Partners
            </a>
            <a href="#" className="transition-colors hover:text-[var(--text)]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[var(--text)]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[var(--text)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
