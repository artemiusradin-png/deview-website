"use client";

import { useEffect, useRef, type RefObject } from "react";
import styles from "./home-motion.module.css";

/**
 * Runs `onArm` for an element still below the fold and `onShow` once it scrolls into view.
 * Elements already on screen show straight away; elements scrolled past, visitors who prefer
 * reduced motion, and browsers without IntersectionObserver keep the server-rendered final state.
 */
function watchView(
  el: Element,
  threshold: number,
  onArm: () => void,
  onShow: () => void,
) {
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom <= 0) return;
  if (top < window.innerHeight) {
    onShow();
    return;
  }
  onArm();
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      onShow();
    },
    { threshold },
  );
  observer.observe(el);
  return () => observer.disconnect();
}

/**
 * Marks an element `data-motion="armed"` while it waits below the fold and `data-motion="in"`
 * when it scrolls into view, so its stylesheet can hold the opening frame and then play once.
 */
export function useMotionOnView(
  ref: RefObject<Element | null>,
  threshold = 0.3,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watchView(
      el,
      threshold,
      () => el.setAttribute("data-motion", "armed"),
      () => el.setAttribute("data-motion", "in"),
    );
  }, [ref, threshold]);
}

/** A number that counts up from zero the first time it scrolls into view. */
export function CountUp({
  to,
  duration = 1400,
}: {
  to: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    // Written straight to the text node: no re-render per frame.
    const set = (value: number) => {
      el.textContent = String(value);
    };
    const stop = watchView(
      el,
      0.6,
      () => set(0),
      () => {
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          set(Math.round(to * (1 - (1 - t) ** 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
    );
    return () => {
      stop?.();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  // The hidden final value holds the width, so the text after it never moves while counting.
  return (
    <span className={styles.count}>
      <span aria-hidden="true">{to}</span>
      <span ref={ref}>{to}</span>
    </span>
  );
}
