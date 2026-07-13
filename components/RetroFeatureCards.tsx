"use client";

import { useLocaleContext } from "@/lib/i18n/locale-context";
import { LocaleLink } from "./LocaleLink";

/** Hash target for “back to home” from card detail pages (`/${this}#…`). */
export const RETRO_FEATURE_CARDS_ID = "retro-feature-cards";

const OUTCOMES_CARD_IMAGE =
  "/images/stock/laptop-analytics-1200.webp";

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
    <LocaleLink
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
      <div className="relative z-10 flex h-full flex-col justify-end p-3 sm:p-5">
        <span className="mb-1 block text-[11px] uppercase tracking-[0.12em] text-white/65 sm:mb-1.5 sm:text-[15px] sm:tracking-normal sm:normal-case sm:text-white/70">{eyebrow}</span>
        <h2 className="mb-0 max-w-[350px] whitespace-pre-line text-[0.82rem] leading-snug text-white sm:text-lg">{title}</h2>
      </div>
    </LocaleLink>
  );
}

function RetroOutcomesCard({ className = "", rootPrefix = "" }: { className?: string; rootPrefix?: string }) {
  const { dict } = useLocaleContext();
  const o = dict.outcomes;

  return (
    <LocaleLink
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
      <div className="relative z-10 flex h-full flex-col justify-end overflow-hidden p-3 text-left sm:p-5 md:p-5">
        {/* 2×2 metric grid — stat is the dominant element */}
        <div className="mb-2 grid grid-cols-2 gap-1 sm:mb-3 sm:gap-1.5">
          {o.items.map((item) => (
            <div key={item.number} className="border border-white/12 bg-black/50 p-1.5 backdrop-blur-[2px] sm:p-2.5">
              <p className="mb-0.5 text-[0.45rem] uppercase tracking-[0.14em] text-white/40 sm:mb-1 sm:text-[0.5rem] sm:tracking-[0.18em]">{item.label}</p>
              <p className="font-mono text-[0.78rem] font-semibold leading-none tracking-[-0.02em] text-white/90 sm:text-[1.1rem] md:text-[1.25rem]">
                {(item as { stat?: string }).stat ?? item.number}
              </p>
            </div>
          ))}
        </div>
        {/* Card title */}
        <div className="self-start">
          <span className="mb-0.5 block text-[9px] uppercase tracking-[0.14em] text-white/50 sm:mb-1 sm:text-[10px] sm:tracking-[0.16em]">{o.label}</span>
          <h2 className="max-w-[20rem] whitespace-pre-line text-[0.78rem] font-medium leading-snug text-white sm:text-base md:text-lg">
            {o.titleL1}
            {"\n"}
            {o.titleL2}
          </h2>
        </div>
      </div>
    </LocaleLink>
  );
}

export function RetroFeatureCards({ rootPrefix = "" }: { rootPrefix?: string }) {
  const { dict } = useLocaleContext();
  const c = dict.cards;

  return (
    <section
      id={RETRO_FEATURE_CARDS_ID}
      className="hidden scroll-margin-header relative w-full bg-[var(--surface)] py-10 md:block md:py-14"
    >
      <div className="section-gutter w-full">
        {/* Mobile: 2×2 square grid of all four cards. Desktop unchanged (3-column with col 1 stacked). */}
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:hidden">
          <RetroCard
            href="/what-makes-it-enterprise"
            imageUrl="/images/stock/earth-network-1200.webp"
            imagePosition="center 42%"
            eyebrow={c.whatMakesEyebrow}
            title={c.whatMakesTitle}
            className="aspect-square"
          />
          <RetroCard
            href="/architecture-reality-check"
            imageUrl="/images/stock/circuit-board-1200.webp"
            imagePosition="center center"
            eyebrow={c.archEyebrow}
            title={c.archTitle}
            className="aspect-square"
          />
          <RetroOutcomesCard rootPrefix={rootPrefix} className="aspect-square" />
          <RetroCard
            href="/use-cases"
            imageUrl="/images/stock/finance-calculator-1200.webp"
            imagePosition="center 45%"
            eyebrow={c.useCasesEyebrow}
            title={c.useCasesTitle}
            className="aspect-square"
          />
        </div>
        <div className="hidden w-full flex-col gap-[30px] md:flex md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col gap-[30px] md:basis-1/3">
            <RetroCard
              href="/what-makes-it-enterprise"
              imageUrl="/images/stock/earth-network-1200.webp"
              imagePosition="center 42%"
              eyebrow={c.whatMakesEyebrow}
              title={c.whatMakesTitle}
              className="h-[240px]"
            />
            <RetroCard
              href="/architecture-reality-check"
              imageUrl="/images/stock/circuit-board-1200.webp"
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
              imageUrl="/images/stock/finance-calculator-1200.webp"
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
