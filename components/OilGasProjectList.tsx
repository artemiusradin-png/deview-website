import Link from "next/link";
import { oilGasCasePath, type OilGasCase } from "@/lib/oil-gas-cases";

type OilGasProjectListProps = {
  cases: OilGasCase[];
  /** `full` shows the summary and a read link; `compact` is a single line per project. */
  variant?: "full" | "compact";
};

/** Chronological list of oil & gas projects; every row links to the project's own page. */
export function OilGasProjectList({ cases, variant = "full" }: OilGasProjectListProps) {
  if (variant === "compact") {
    return (
      <ol className="border-t border-[var(--white-20)]">
        {cases.map((c) => (
          <li key={c.slug} className="border-b border-[var(--white-20)]">
            <Link
              href={oilGasCasePath(c.slug)}
              className="group grid gap-1 py-4 transition sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="text-xs tabular-nums text-[var(--white-40)]">{c.year}</span>
              <span className="text-sm text-[var(--white-90)] group-hover:text-[var(--white-100)]">
                {c.company}: {c.project}
              </span>
              <span className="text-[var(--white-40)] transition group-hover:translate-x-1 group-hover:text-[var(--white-80)]" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="border-t border-[var(--white-20)]">
      {cases.map((c) => (
        <li key={c.slug} className="border-b border-[var(--white-20)]">
          <article className="grid gap-3 py-7 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-8">
            <span className="text-xs tabular-nums tracking-[0.18em] text-[var(--white-40)]">{c.year}</span>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--white-40)]">{c.discipline}</p>
              <h3 className="mt-2 text-lg leading-snug text-[var(--white-100)]">
                <Link
                  href={oilGasCasePath(c.slug)}
                  className="underline decoration-[var(--white-20)] underline-offset-4 transition hover:decoration-[var(--white-60)]"
                >
                  {c.company}: {c.project}
                </Link>
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{c.summary}</p>
            </div>
            <Link
              href={oilGasCasePath(c.slug)}
              aria-label={`Read about ${c.company}: ${c.project}`}
              className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--white-80)] hover:text-[var(--white-100)] md:justify-self-end"
            >
              Read project
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
