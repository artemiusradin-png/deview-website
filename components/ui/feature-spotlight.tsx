import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureSpotlightProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  number: string;
  impact: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  note?: string | null;
  imageUrl: string;
  imageAlt?: string;
  reverse?: boolean;
  recommended?: boolean;
}

const FeatureSpotlight = React.forwardRef<HTMLElement, FeatureSpotlightProps>(
  (
    {
      className,
      number,
      impact,
      title,
      description,
      bullets,
      note,
      imageUrl,
      imageAlt = "Feature illustration",
      reverse = false,
      recommended = false,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full border-b border-[var(--white-10)] py-14 md:py-18",
          recommended && "border-l-2 border-l-[var(--white-30)] pl-5 md:pl-7",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16",
            reverse && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1",
          )}
        >
          <div className="flex flex-col space-y-5">
            <div className="animate-in fade-in slide-in-from-top-4 flex flex-wrap items-center gap-2.5 duration-700">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-30)]">
                {number}
              </span>
              <span
                className={cn(
                  "px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em]",
                  impact === "High"
                    ? "bg-[var(--white-10)] text-[var(--white-80)]"
                    : "border border-[var(--white-20)] text-[var(--white-40)]",
                )}
              >
                {impact} impact
              </span>
              {recommended && (
                <span className="border border-[var(--white-20)] px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.14em] text-[var(--white-60)]">
                  ★ Start here
                </span>
              )}
            </div>

            <h2 className="animate-in fade-in slide-in-from-top-4 text-[clamp(1.3rem,3.5vw,2rem)] font-semibold leading-snug tracking-tight text-[var(--white-100)] delay-150 duration-700">
              {title}
            </h2>

            <p className="animate-in fade-in slide-in-from-top-4 text-sm leading-relaxed text-[var(--text-muted)] delay-300 duration-700">
              {description}
            </p>

            {bullets && bullets.length > 0 && (
              <div className="animate-in fade-in slide-in-from-top-4 space-y-1.5 delay-400 duration-700">
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <span className="mt-[0.2rem] shrink-0 text-[0.6rem] text-[var(--white-30)]">+</span>
                    <span className="text-[0.78rem] leading-snug text-[var(--white-70)]">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {note && (
              <p className="animate-in fade-in slide-in-from-top-4 border-l border-[var(--white-20)] pl-3 text-[0.65rem] leading-snug text-[var(--white-30)] delay-500 duration-700">
                {note}
              </p>
            )}
          </div>

          <div className="animate-in fade-in zoom-in-95 relative flex items-center justify-center delay-200 duration-700">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="animate-float w-full max-w-md object-cover opacity-75 shadow-[0_0_48px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>
    );
  },
);
FeatureSpotlight.displayName = "FeatureSpotlight";

export { FeatureSpotlight };

// ── Original homepage resource spotlight ─────────────────────────────────────
import { Button, type ButtonProps } from "@/components/ui/button";

interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: ButtonProps;
  imageUrl: string;
  imageAlt?: string;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, AnimatedFeatureSpotlightProps>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = "Feature illustration",
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border bg-background p-8 md:p-12",
          className,
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
            <div className="animate-in fade-in slide-in-from-top-4 flex items-center space-x-2 text-sm font-medium text-muted-foreground duration-700">
              {preheaderIcon}
              <span>{preheaderText}</span>
            </div>
            <h2
              id="feature-spotlight-heading"
              className="animate-in fade-in slide-in-from-top-4 text-4xl font-bold tracking-tight text-foreground delay-150 duration-700 lg:text-5xl"
            >
              {heading}
            </h2>
            <p className="animate-in fade-in slide-in-from-top-4 text-lg leading-relaxed text-muted-foreground delay-300 duration-700">
              {description}
            </p>
            <div className="animate-in fade-in slide-in-from-top-4 delay-400 duration-700">
              <Button size="lg" {...buttonProps}>
                {buttonText}
              </Button>
            </div>
          </div>
          <div className="animate-in fade-in zoom-in-95 relative flex min-h-[250px] w-full items-center justify-center delay-200 duration-700 md:min-h-[320px]">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="animate-float w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>
    );
  },
);
AnimatedFeatureSpotlight.displayName = "AnimatedFeatureSpotlight";

export { AnimatedFeatureSpotlight };
