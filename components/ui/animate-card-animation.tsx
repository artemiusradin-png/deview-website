"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContentType = 1 | 2 | 3 | 4;

interface Card {
  id: number;
  contentType: ContentType;
}

export interface AnimatedServiceCard {
  label: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  ctaLabel?: string;
}

const defaultCards: AnimatedServiceCard[] = [
  {
    label: "AI WORKFLOW AUDIT",
    title: "Find the best automation opportunity",
    description: "Workflow review, bottlenecks, priority use case · 1–2 weeks",
    image:
      "/images/stock/dashboard-laptop-900.webp",
    href: "/services#workflow-audit",
    ctaLabel: "Explore",
  },
  {
    label: "INTERNAL KNOWLEDGE ASSISTANT",
    title: "Search answers across documents and SOPs",
    description: "Knowledge base, retrieval, internal assistant · 2–4 weeks",
    image:
      "/images/stock/desk-notebook-900.webp",
    href: "/services#knowledge-assistant",
    ctaLabel: "Explore",
  },
  {
    label: "DOCUMENT AUTOMATION",
    title: "Extract, summarise, classify, route documents",
    description: "PDFs, forms, email intake, structured outputs · 2–5 weeks",
    image:
      "/images/stock/finance-calculator-1200.webp",
    href: "/services#document-automation",
    ctaLabel: "Explore",
  },
  {
    label: "CUSTOMER SUPPORT ASSISTANT",
    title: "Help support teams draft replies and pull context",
    description: "Ticket support, knowledge retrieval, response drafts · 2–4 weeks",
    image:
      "/images/stock/team-meeting-900.webp",
    href: "/services#support-assistant",
    ctaLabel: "Explore",
  },
];

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
];

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
];

const exitAnimation = { y: 340, scale: 1, zIndex: 10 };
const enterAnimation = { y: -16, scale: 0.9 };

function CardContent({
  contentType,
  cards,
}: {
  contentType: ContentType;
  cards: AnimatedServiceCard[];
}) {
  const data = cards[contentType - 1];

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full select-none object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="mb-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
            {data.label}
          </span>
          <span className="truncate font-medium text-foreground">{data.title}</span>
          <span className="truncate text-sm text-muted-foreground">{data.description}</span>
        </div>
        <a
          href={data.href ?? "#"}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-foreground pl-4 pr-3 text-sm font-medium text-background no-underline"
        >
          {data.ctaLabel ?? "Read"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            aria-hidden="true"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function AnimatedCard({
  card,
  index,
  isAnimating,
  cards,
}: {
  card: Card;
  index: number;
  isAnimating: boolean;
  cards: AnimatedServiceCard[];
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
      style={{ zIndex, left: "50%", x: "-50%", bottom: 0 }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-border bg-card p-1 shadow-lg will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} cards={cards} />
    </motion.div>
  );
}

export default function AnimatedCardStack({
  cards = defaultCards,
}: {
  cards?: AnimatedServiceCard[];
}) {
  const total = cards.length;
  const [stack, setStack] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  const handleAnimate = () => {
    setIsAnimating(true);
    const last = stack[2].contentType;
    const nextContentType = ((last % total) + 1) as ContentType;
    setStack([...stack.slice(1), { id: nextId, contentType: nextContentType }]);
    setNextId((prev) => prev + 1);
    setIsAnimating(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {stack.slice(0, 3).map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              isAnimating={isAnimating}
              cards={cards}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4">
        <button
          type="button"
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-border bg-background px-3 font-medium text-secondary-foreground transition-all hover:bg-secondary/80 active:scale-[0.98]"
        >
          Next service
        </button>
      </div>
    </div>
  );
}
