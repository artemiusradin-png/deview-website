import Link from "next/link";
import { oilGasCasePath, type OilGasCase } from "@/lib/oil-gas-cases";

const labelClass = "text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]";

/** White plate so every logo shows in its own colours on both the dark and light theme. */
function LogoPlate({ c }: { c: OilGasCase }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-sm border border-[var(--white-10)] bg-white p-6 sm:h-36">
      {c.logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={c.logo.src}
          alt={c.logo.alt}
          width={c.logo.width}
          height={c.logo.height}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="text-center text-lg font-semibold uppercase tracking-[0.14em] text-neutral-900">
          {c.company}
        </span>
      )}
    </div>
  );
}

/** Large case-study cards for the oil & gas portfolio; each links to the project's own page. */
export function OilGasCaseCards({ cases }: { cases: OilGasCase[] }) {
  return (
    <div>
      {cases.map((c, i) => {
        const facts = [
          { label: "Company", value: c.company },
          ...(c.companyNote ? [c.companyNote] : []),
          { label: "Year", value: String(c.year) },
          { label: "Type of work", value: c.workType },
          ...(c.location ? [{ label: "Location", value: c.location }] : []),
        ];

        return (
          <article
            key={c.slug}
            className={`border-t border-[var(--white-20)] py-12 sm:py-16 ${i === cases.length - 1 ? "border-b" : ""}`}
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-14">
              <div>
                {/* Meta row */}
                <div className="mb-8 flex flex-wrap items-start gap-3">
                  <span className="text-[2.5rem] leading-none tracking-[-0.04em] tabular-nums text-[var(--white-10)] sm:text-[3rem]">
                    {c.year}
                  </span>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--white-40)]">Oil &amp; gas</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--white-60)]">{c.discipline}</span>
                  </div>
                </div>

                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--white-60)]">{c.company}</p>
                <h3 className="mb-6 text-[clamp(1.35rem,4vw,2rem)] leading-tight text-[var(--white-100)] md:max-w-3xl">
                  <Link href={oilGasCasePath(c.slug)} className="transition hover:text-[var(--white-80)]">
                    {c.project}
                  </Link>
                </h3>
                <p className="mb-10 max-w-3xl text-base leading-relaxed text-[var(--white-80)]">{c.summary}</p>

                <div className="mb-10 max-w-3xl">
                  <p className={`mb-2 ${labelClass}`}>The system</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{c.context}</p>
                </div>

                {c.scope ? (
                  <div className="mb-10">
                    <p className={`mb-3 ${labelClass}`}>Scope</p>
                    <ul className="flex flex-wrap gap-2">
                      {c.scope.map((item) => (
                        <li
                          key={item}
                          className="border border-[var(--white-20)] px-3 py-1.5 text-xs text-[var(--white-80)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <Link
                  href={oilGasCasePath(c.slug)}
                  className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--white-80)] hover:text-[var(--white-100)]"
                >
                  Read the full project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Logo and facts: first on mobile so the company is seen before the text */}
              <aside className="order-first md:order-none">
                <LogoPlate c={c} />
                <dl className="mt-6 border-t border-[var(--white-10)]">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-[var(--white-10)] py-3">
                      <dt className={labelClass}>{f.label}</dt>
                      <dd className="text-right text-sm text-[var(--white-80)]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </article>
        );
      })}
    </div>
  );
}
