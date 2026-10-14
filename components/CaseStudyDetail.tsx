import { en } from "@/lib/i18n/dict-en";
import type { getProductionCase } from "@/lib/case-studies";

/** Original case write-ups, now accessible through individual project URLs. */
export function CaseStudyDetail({ project }: { project: NonNullable<ReturnType<typeof getProductionCase>> }) {
  const c = project.content;
  const d = en.caseStudiesPage;
  return (
    <article>
      {c.website ? (
        <a
          href={c.website.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline mb-8 inline-block"
        >
          {c.website.label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}

      {/* Video (featured cases only) */}
      {project.video ? (
        <div className="mb-10 overflow-hidden border border-[var(--white-20)] bg-black">
          <video
            className="block h-auto w-full"
            controls
            preload="metadata"
            playsInline
            muted
            loop
            poster={project.image}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      ) : null}

      {/* Challenge / Solution */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {d.challengeLabel}
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {c.challenge}
          </p>
        </div>
        <div>
          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {c.solutionLabel ?? d.solutionLabel}
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {c.solution}
          </p>
        </div>
      </div>

      {/* AI Capabilities (featured cases only) */}
      {c.capabilities ? (
        <div className="mb-10">
          <p className="mb-4 text-[0.6rem] uppercase tracking-[0.2em] text-[var(--white-40)]">
            {c.capabilitiesLabel ?? d.capabilitiesLabel}
          </p>
          <ol className="space-y-4">
            {c.capabilities.map((cap, capIdx) => (
              <li
                key={cap.name}
                className="flex items-start gap-3 border-l-2 border-[var(--white-10)] pl-4"
              >
                <span className="mt-0.5 inline-flex h-6 min-w-[1.75rem] shrink-0 items-center justify-center rounded border border-[var(--white-20)] px-1 text-[0.6rem] tabular-nums uppercase tracking-[0.18em] text-[var(--white-60)]">
                  {String(capIdx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-[var(--white-100)]">
                    {cap.name}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {cap.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {/* Metrics */}
      {c.outcomes ? (
        <div className={`mb-10 grid grid-cols-2 gap-px border border-[var(--white-20)] bg-[var(--white-20)] ${c.outcomes.length > 2 ? "sm:grid-cols-4" : ""}`}>
          {c.outcomes.map((o) => (
            <div
              key={o.label}
              className="flex flex-col gap-1 bg-[var(--background)] px-4 py-5 sm:px-6"
            >
              <span className="text-[clamp(1.4rem,4vw,2rem)] font-medium leading-none text-[var(--white-100)]">
                {o.metric}
              </span>
              <span className="text-[0.65rem] leading-snug text-[var(--text-muted)]">
                {o.label}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      {c.outcomesNote ? (
        <p className="mb-10 text-sm leading-relaxed text-[var(--text-muted)]">
          {c.outcomesNote}
        </p>
      ) : null}

      {/* Quote */}
      {c.quote ? (
        <blockquote className="border-l-2 border-[var(--white-20)] pl-5">
          <p className="mb-2 text-sm italic leading-relaxed text-[var(--white-80)]">
            &ldquo;{c.quote}&rdquo;
          </p>
          {c.quoteRole ? (
            <cite className="text-[0.6rem] not-italic uppercase tracking-[0.2em] text-[var(--white-40)]">
              {c.quoteRole}
            </cite>
          ) : null}
        </blockquote>
      ) : null}
    </article>
  );
}
