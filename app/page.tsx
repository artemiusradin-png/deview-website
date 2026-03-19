"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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

const stats = [
  { value: "10x", label: "Faster inference" },
  { value: "50%", label: "Cost reduction" },
  { value: "24/7", label: "Expert support" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <motion.a
            href="#"
            className="text-xl font-bold text-[var(--text)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            De<span className="text-[var(--green)]">View</span>
          </motion.a>
          <div className="flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--green)]"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--green)]"
            >
              Contact
            </a>
            <motion.a
              href="#contact"
              className="rounded-xl bg-[var(--green)] px-5 py-2.5 text-sm font-semibold text-[#07110b] transition-all hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--green)]"
            >
              AI Enterprise Infrastructure
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl"
            >
              Scale AI with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--green)]">confidence</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[var(--green-soft)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted)]"
            >
              Enterprise-grade infrastructure for your AI workloads. Deploy models,
              manage GPU clusters, and scale inference—all with enterprise security
              and 99.99% uptime.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[#07110b] transition-all hover:brightness-110"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
                <span className="text-lg">→</span>
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] px-6 py-3.5 font-medium text-[var(--text)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[var(--surface)] to-[var(--surface-strong)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
          >
            <div className="flex flex-wrap gap-4">
              {["Model serving", "GPU clusters", "Auto-scaling", "Monitoring"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center gap-2 rounded-xl border border-[var(--line-soft)] bg-[rgba(255,255,255,0.02)] px-4 py-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--green)]" />
                    <span className="text-sm text-[var(--muted)]">{item}</span>
                  </motion.div>
                )
              )}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 flex-1 rounded-full bg-[var(--line)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--green)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </div>
              <span className="text-xs text-[var(--muted)]">65% capacity</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)]/50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-3"
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
                <div className="text-4xl font-bold text-[var(--green)] sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--green)]">
              Platform
            </p>
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Everything you need to run AI at scale
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.015)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-colors hover:border-[var(--green)]/50"
              >
                <div className="mb-4 text-2xl text-[var(--green)] opacity-80 group-hover:opacity-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold text-[var(--text)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--green)]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[var(--green)]/10 blur-3xl" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">
                Ready to scale your AI?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-[var(--muted)]">
                Join enterprises that trust DeView for their AI infrastructure.
                Start with a free trial—no credit card required.
              </p>
              <motion.form
                className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full max-w-sm rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-3.5 text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--green)]"
                />
                <motion.button
                  type="submit"
                  className="rounded-xl bg-[var(--green)] px-6 py-3.5 font-semibold text-[#07110b] transition-all hover:brightness-110"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="text-lg font-bold text-[var(--text)]">
            De<span className="text-[var(--green)]">View</span>
          </a>
          <div className="flex gap-8 text-sm text-[var(--muted)]">
            <a href="#" className="transition-colors hover:text-[var(--green)]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[var(--green)]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[var(--green)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
