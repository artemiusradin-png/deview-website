"use client";

/**
 * Editorial-style team member card — adapted to DeView's theme tokens.
 * Same overlapping layout at every breakpoint (portrait + large display name
 * overlapping it, circular CTA, left/right mirroring for alternating cards);
 * the portrait, name and CTA just scale down on small screens so the whole
 * composition stays intact and fits on a phone.
 */
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  position?: "left" | "right";
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  description?: string;
  href?: string;
  className?: string;
}

export default function TeamMemberCard({
  position = "left",
  jobPosition = "Managing Director",
  firstName = "Artemis",
  lastName = "Radin",
  imageUrl = "/team/artemis-radin.jpg",
  description = "Artemis leads DeView's engagements end to end — from scoping the workflows that cost clients the most to shipping the AI systems that fix them.",
  href = "/contact",
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`;
  const isPositionRight = position === "right";
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  // Name text keeps drifting with scroll (rather than settling once, like the rest of the
  // card) — a larger, quicker-feeling range than the card's own one-shot entrance motions.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const nameParallaxY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -90]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative my-10 flex flex-col justify-center md:my-16", className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            "mb-3 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[var(--white-40)] md:mb-4 md:text-[0.65rem]",
            isPositionRight && "text-right",
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex items-center justify-end">
        {/* Portrait — scales from a compact phone size up to the full editorial size on md+. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative h-[clamp(180px,46vw,500px)] w-[clamp(115px,30vw,340px)] shrink-0 overflow-hidden rounded-lg border border-[var(--white-10)]",
            isPositionRight && "order-1",
          )}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={fullName}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </motion.div>

        {/* Info block — flex-1 so it always fills the space next to the portrait (was a
            hardcoded calc(100%-300px) that collapsed to ~75px on a phone), overlapping the
            portrait via left/-left. */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative z-[2] flex min-w-0 flex-1 flex-col gap-5 md:gap-14",
            isPositionRight ? "left-3 items-end md:left-8" : "-left-3 md:-left-8",
          )}
        >
          <motion.p
            style={{ y: nameParallaxY }}
            className="text-[clamp(1.5rem,6vw,3.5rem)] leading-[1.1] font-extralight tracking-tight text-[var(--white-100)]"
          >
            {firstName}
            <br />
            <span className="font-normal">{lastName}</span>
          </motion.p>

          <div className={cn("flex gap-4 md:gap-8", isPositionRight && "justify-end")}>
            <motion.a
              href={href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Contact ${fullName}`}
              className={cn(
                "group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--white-20)] transition-colors duration-300 hover:border-[var(--white-60)] hover:bg-[var(--white-10)] md:h-20 md:w-20",
                isPositionRight && "order-1",
              )}
            >
              <ArrowRight
                size={20}
                className={cn(
                  "text-[var(--white-40)] transition-all duration-300 group-hover:-rotate-45 group-hover:text-[var(--white-100)]",
                  isPositionRight && "rotate-180 group-hover:rotate-[225deg]",
                )}
              />
            </motion.a>

            <div className="w-full max-w-xs">
              <p
                className={cn(
                  "text-xs leading-relaxed text-[var(--text-muted)] md:text-sm md:leading-[1.8]",
                  isPositionRight && "text-right",
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
