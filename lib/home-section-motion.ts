/** Shared Framer Motion presets for homepage-style sections. */

export const homeSectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export const homeSectionStagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, amount: 0.15 },
};

export const homeSectionCardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};
