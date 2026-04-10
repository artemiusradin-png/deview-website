"use client";

import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";

/** Hash target for “back to home” from card detail pages (`/${this}#…`). */
export const RETRO_FEATURE_CARDS_ID = "retro-feature-cards";

const OUTCOMES_CARD_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";

type RetroCardProps = {
  href: string;
  imageUrl: string;
  eyebrow: string;
  title: string;
  className?: string;
  imagePosition?: string;
};

function RetroCard({
  href,
  imageUrl,
  eyebrow,
  title,
  className = "",
  imagePosition = "center",
}: RetroCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-none ${className}`}
    >
      <div
        className="absolute inset-0 z-0 origin-center scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: imagePosition }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-0% via-transparent via-[18%] to-black/80 to-100%"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <span className="mb-1.5 block text-[15px] text-white/70">{eyebrow}</span>
        <h2 className="mb-0 max-w-[350px] whitespace-pre-line text-lg leading-snug text-white">{title}</h2>
      </div>
    </Link>
  );
}

function RetroOutcomesCard({ className = "", rootPrefix = "" }: { className?: string; rootPrefix?: string }) {
  const { dict } = useLocaleContext();
  const o = dict.outcomes;

  return (
    <Link
      href={`${rootPrefix}/outcomes`}
      className={`group relative block overflow-hidden rounded-none ${className}`}
    >
      <div
        className="absolute inset-0 z-0 origin-center scale-105 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${OUTCOMES_CARD_IMAGE})`, backgroundPosition: "center 35%" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 from-0% via-black/55 via-[25%] to-black/88 to-100%"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full flex-col justify-end overflow-hidden p-4 text-left sm:p-5 md:p-5">
        <ul className="mb-2.5 flex list-none flex-col gap-1.5 overflow-hidden p-0 md:gap-2">
          {o.items.map((item) => (
            <li key={item.number} className="border-l border-white/20 pl-2">
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                <span className="text-[10px] tabular-nums text-white/45 sm:text-[11px]">{item.number}</span>
                <span className="text-[9px] uppercase tracking-[0.12em] text-white/90 sm:text-[10px]">
                  {item.label}
                </span>
              </div>
              <p className="mt-0.5 text-[9px] leading-[1.35] text-white/65 sm:text-[10px]">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="self-start overflow-hidden">
          <span className="mb-1 block text-[12px] uppercase tracking-[0.12em] text-white/72 sm:text-[13px]">{o.label}</span>
          <h2 className="mb-1 max-w-[20rem] whitespace-pre-line text-sm font-medium leading-snug text-white sm:mb-1.5 sm:text-base md:text-lg">
            {o.titleL1}
            {"\n"}
            {o.titleL2}
          </h2>
          <p className="max-w-[22rem] text-[10px] leading-snug text-white/70 sm:text-[11px] md:text-xs">{o.subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export function RetroFeatureCards({ rootPrefix = "" }: { rootPrefix?: string }) {
  const { dict } = useLocaleContext();
  const c = dict.cards;

  return (
    <section
      id={RETRO_FEATURE_CARDS_ID}
      className="scroll-margin-header relative w-full border-t border-[var(--white-20)] bg-[var(--surface)] py-10 md:py-14"
    >
      <div className="w-full pl-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))]">
        <div className="flex w-full flex-col gap-[30px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col gap-[30px] md:basis-1/3">
            <RetroCard
              href="/what-makes-it-enterprise"
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              imagePosition="center 42%"
              eyebrow={c.whatMakesEyebrow}
              title={c.whatMakesTitle}
              className="h-[240px]"
            />
            <RetroCard
              href="/architecture-reality-check"
              imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
              imagePosition="center center"
              eyebrow={c.archEyebrow}
              title={c.archTitle}
              className="h-[240px]"
            />
          </div>
          <div className="md:basis-1/3">
            <RetroOutcomesCard
              rootPrefix={rootPrefix}
              className="h-[320px] md:h-[510px]"
            />
          </div>
          <div className="md:basis-1/3">
            <RetroCard
              href="/use-cases"
              imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
              imagePosition="center 45%"
              eyebrow={c.useCasesEyebrow}
              title={c.useCasesTitle}
              className="h-[240px] md:h-[510px] md:min-h-[510px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
