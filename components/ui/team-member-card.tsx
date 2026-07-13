"use client";

/**
 * Editorial-style team member card — adapted to DeView's theme tokens.
 * Overlapping portrait, large display name, circular CTA, staggered motion.
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
      className={cn("relative my-16 flex flex-col justify-center", className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            "mb-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-[var(--white-40)]",
            isPositionRight && "text-right",
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex items-center justify-end">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative h-[clamp(360px,46vw,500px)] w-[clamp(230px,30vw,340px)] shrink-0 overflow-hidden rounded-lg border border-[var(--white-10)]",
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

        {/* Info block — overlaps the portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative -left-8 z-[2] flex w-[calc(100%-300px)] flex-col gap-10 md:gap-14",
            isPositionRight && "left-8 items-end",
          )}
        >
          <motion.p
            style={{ y: nameParallaxY }}
            className="text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.1] font-extralight tracking-tight text-[var(--white-100)]"
          >
            {firstName}
            <br />
            <span className="font-normal">{lastName}</span>
          </motion.p>

          <div className={cn("flex gap-6 md:gap-8", isPositionRight && "justify-end")}>
            <motion.a
              href={href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Contact ${fullName}`}
              className={cn(
                "group flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--white-20)] transition-colors duration-300 hover:border-[var(--white-60)] hover:bg-[var(--white-10)] md:h-20 md:w-20",
                isPositionRight && "order-1",
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  "text-[var(--white-40)] transition-all duration-300 group-hover:-rotate-45 group-hover:text-[var(--white-100)]",
                  isPositionRight && "rotate-180 group-hover:rotate-[225deg]",
                )}
              />
            </motion.a>

            <div className="w-full max-w-xs">
              <p
                className={cn(
                  "text-sm leading-[1.8] text-[var(--text-muted)]",
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
