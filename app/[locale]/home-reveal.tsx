import { Fragment, useEffect, type CSSProperties, type RefObject } from "react";
import reveal from "./home-reveal.module.css";

/**
 * Landing-page reveals, paired with home-reveal.module.css.
 *
 * Every reveal piece animates once as it mounts, so the server-rendered page always settles fully
 * visible, with or without JavaScript. After hydration, each `data-reveal` block still below the
 * fold is armed: its pieces hold their opening frame until the block scrolls into view, then play
 * once. Blocks already on screen or scrolled past are left alone, and nothing is armed for visitors
 * who prefer reduced motion.
 */
export function useHomeReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = root.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!page || reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      // Play once a block is a little way into the viewport, not on its first pixel.
      { rootMargin: "0px 0px -10% 0px" },
    );
    const show = (block: HTMLElement) => {
      block.dataset.revealState = "in";
      observer.unobserve(block);
    };
    const fold = window.innerHeight;
    // The very end of the page can never scroll that far up, so it is never armed.
    const lastReachable = document.documentElement.scrollHeight - fold * 0.15;
    // A block can hand its trigger down to its items (`data-reveal-items="li"`), so each card of a
    // shared component that stacks up on phones plays as it scrolls in.
    const blocks = Array.from(
      page.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).flatMap((block) =>
      block.dataset.revealItems
        ? Array.from(block.querySelectorAll<HTMLElement>(block.dataset.revealItems))
        : [block],
    );
    const waiting = blocks.filter((block) => {
      if (block.dataset.revealState) return block.dataset.revealState === "armed";
      const { top, height } = block.getBoundingClientRect();
      // Skip blocks on screen, scrolled past, or not rendered (an inactive tab panel).
      return height > 0 && top >= fold && top + window.scrollY < lastReachable;
    });
    for (const block of waiting) {
      block.dataset.revealState = "armed";
      observer.observe(block);
    }
    // Turning on reduced motion, or printing, shows everything still waiting.
    const showAll = () => waiting.forEach(show);
    reducedMotion.addEventListener("change", showAll);
    window.addEventListener("beforeprint", showAll);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", showAll);
      window.removeEventListener("beforeprint", showAll);
    };
  }, [root]);
}

/** Places a reveal piece in a staggered row (inherited by the pieces inside it). */
export function revealIndex(index: number) {
  return { "--i": index } as CSSProperties;
}

/** Holds a reveal piece back by `ms` (inherited by the pieces inside it). */
export function revealDelay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

/** A display heading set line by line, each line sliding up out of its own mask. */
export function RevealLines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && " "}
      <span className={reveal.line} style={revealIndex(index)}>
        <span>{line}</span>
      </span>
    </Fragment>
  ));
}
