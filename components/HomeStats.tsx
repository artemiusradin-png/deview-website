"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import { homeSectionReveal, homeSectionCardMotion } from "@/lib/home-section-motion";

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const parsed = useMemo(() => {
    const m = value.match(/^(\d+)/);
    if (!m) return null;
    return { target: parseInt(m[1], 10), suffix: value.slice(m[1].length) };
  }, [value]);

  const [display, setDisplay] = useState(parsed ? "0" : value);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!inView || !parsed) {
      if (!parsed) setDisplay(value);
      return;
    }
    const { target, suffix } = parsed;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased) + suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, value, parsed]);

  return <>{display}</>;
}

export function HomeStats() {
  const { dict } = useLocaleContext();
  const s = dict.stats;
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--background)] section-gutter py-20 md:py-28">
      <motion.div {...homeSectionReveal} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl">
        <p className="section-label mb-3">{s.sectionLabel}</p>
        <div className="rule mb-10" />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--white-10)] bg-[var(--white-10)] md:grid-cols-4">
          {s.items.map((stat, i) => (
            <motion.div
              key={i}
              {...homeSectionCardMotion}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-2 bg-[var(--background)] px-4 py-8 text-center md:py-12"
            >
              <p className="text-[clamp(1.8rem,5vw,3rem)] font-bold leading-none tracking-tight text-[var(--white-100)]">
                <AnimatedValue value={stat.value} inView={inView} />
              </p>
              <p className="max-w-[14rem] text-[0.65rem] uppercase leading-snug tracking-[0.14em] text-[var(--white-40)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
