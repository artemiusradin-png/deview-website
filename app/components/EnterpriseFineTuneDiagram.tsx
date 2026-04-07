import type { ReactNode } from "react";

const FOUNDATION_MODELS = ["GPT-N", "Cohere", "Bard", "Dolly"] as const;

/**
 * Enterprise fine-tuning lifecycle (foundation model → train/evaluate/monitor → deploy → query).
 * SVG flowchart aligned to the reference diagram; mobile uses a vertical equivalent.
 */
export function EnterpriseFineTuneDiagram({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`enterprise-ft-diagram ${className}`.trim()}
      aria-labelledby="enterprise-ft-diagram-title"
    >
      <figcaption id="enterprise-ft-diagram-title" className="sr-only">
        Fine-tuning lifecycle from foundation models and curated data through train, evaluate, and monitor, to
        deploy and query with a fine-tuned model.
      </figcaption>

      <div className="enterprise-ft-diagram-shell w-full overflow-x-auto rounded-sm border border-[var(--white-10)] bg-[var(--background)] px-3 py-4 sm:px-4 sm:py-5 md:py-6">
        <div className="mx-auto block max-w-[920px] md:hidden">
          <FineTuneDiagramMobile />
        </div>

        <svg
          className="enterprise-ft-svg mx-auto hidden max-h-[min(72vh,540px)] w-full max-w-[920px] md:block"
          viewBox="0 0 920 420"
          role="img"
          aria-hidden
        >
          <defs>
            <marker
              id="enterprise-ft-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0,0 L7,3.5 L0,7 Z" className="enterprise-ft-arrowhead-fill" />
            </marker>
          </defs>

          <g
            className="enterprise-ft-edges-stroke"
            fill="none"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#enterprise-ft-arrow)"
          >
            <path d="M 118 102 L 118 116" />
            <path d="M 118 154 L 118 188 L 294 188 L 294 232" />
            <path d="M 252 218 L 294 218 L 294 232" />
            <path d="M 156 218 L 168 218" />
            <path d="M 330 214 L 348 214" />
            <path d="M 393 232 L 410 232 L 410 278" />
            <path d="M 366 300 L 260 300 L 260 214 L 258 214" />
            <path d="M 410 322 L 410 362" />
            <path d="M 438 204 L 536 204 L 536 88 L 616 88" />
            <path d="M 668 114 L 668 164" />
            <path d="M 454 300 L 668 300 L 668 206" />
            <path d="M 668 264 L 668 208" />
            <path d="M 668 208 L 668 264" />
          </g>

          <g className="enterprise-ft-edge-labels" fontSize="8.5" textAnchor="middle">
            <text x="339" y="206">Prompt + Model Response</text>
            <text x="424" y="258">Model Checkpoint + Score</text>
            <text x="520" y="78">Tokenizer + Updated Parameters</text>
            <text x="558" y="286">User Prompt + Model Response</text>
            <text x="696" y="226">Prompt</text>
            <text x="696" y="246">Response</text>
          </g>

          <rect x="18" y="16" width="200" height="86" rx="7" className="enterprise-ft-panel" />
          <text x="118" y="34" textAnchor="middle" className="enterprise-ft-panel-title" fontSize="10">
            Foundation Models
          </text>
          {FOUNDATION_MODELS.map((name, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const x = 28 + col * 92;
            const y = 44 + row * 30;
            return (
              <g key={name}>
                <rect x={x} y={y} width="82" height="24" rx="3" className="enterprise-ft-nested" />
                <text x={x + 41} y={y + 15} textAnchor="middle" fontSize="9" className="enterprise-ft-nested-text">
                  {name}
                </text>
              </g>
            );
          })}

          <rect x="48" y="116" width="140" height="38" rx="4" className="enterprise-ft-panel" />
          <text x="118" y="138" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Foundation Model
          </text>

          <rect x="38" y="198" width="118" height="40" rx="4" className="enterprise-ft-panel" />
          <text x="78" y="220" fontSize="9" className="enterprise-ft-panel-text">
            Curated Dataset
          </text>
          <text x="78" y="232" fontSize="9" className="enterprise-ft-panel-muted">
            ⧉
          </text>

          <rect x="168" y="198" width="84" height="40" rx="4" className="enterprise-ft-panel" />
          <text x="210" y="222" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Tokenization
          </text>

          <rect x="258" y="180" width="72" height="52" rx="4" className="enterprise-ft-process" />
          <text x="294" y="212" textAnchor="middle" fontSize="11" className="enterprise-ft-process-label">
            Train
          </text>

          <rect x="348" y="180" width="90" height="52" rx="4" className="enterprise-ft-process" />
          <text x="393" y="212" textAnchor="middle" fontSize="11" className="enterprise-ft-process-label">
            Evaluate
          </text>

          <rect x="366" y="278" width="88" height="44" rx="4" className="enterprise-ft-process" />
          <text x="410" y="304" textAnchor="middle" fontSize="11" className="enterprise-ft-process-label">
            Monitor
          </text>

          <rect x="350" y="362" width="120" height="38" rx="4" className="enterprise-ft-panel" />
          <text x="410" y="382" textAnchor="middle" fontSize="9" className="enterprise-ft-panel-text">
            Model Monitor DB
          </text>
          <text x="410" y="394" textAnchor="middle" fontSize="8" className="enterprise-ft-panel-muted">
            ⧉
          </text>

          <rect x="616" y="68" width="104" height="46" rx="4" className="enterprise-ft-process" />
          <text x="668" y="96" textAnchor="middle" fontSize="11" className="enterprise-ft-process-label">
            Deploy
          </text>

          <rect x="606" y="164" width="124" height="44" rx="4" className="enterprise-ft-panel" />
          <text x="668" y="190" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Fine Tuned Model
          </text>

          <rect x="616" y="264" width="104" height="44" rx="4" className="enterprise-ft-panel" />
          <text x="668" y="288" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Query
          </text>
          <text x="668" y="300" textAnchor="middle" fontSize="8" className="enterprise-ft-panel-muted">
            ⌕
          </text>
        </svg>
      </div>
    </figure>
  );
}

function FineTuneDiagramMobile() {
  const Step = ({ children, dark }: { children: ReactNode; dark?: boolean }) => (
    <div
      className={`rounded px-3 py-2 text-center text-[0.65rem] font-medium uppercase tracking-wide ${
        dark
          ? "bg-[var(--white-100)] text-[var(--background)]"
          : "border border-[var(--white-10)] bg-[var(--surface-elevated)] text-[var(--white-80)]"
      }`}
    >
      {children}
    </div>
  );

  const Edge = ({ children }: { children: ReactNode }) => (
    <p className="text-center text-[0.5rem] uppercase tracking-wider text-[var(--white-40)]">{children}</p>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded border border-[var(--white-10)] bg-[var(--surface-elevated)] p-2">
        <p className="mb-2 text-center text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
          Foundation Models
        </p>
        <div className="grid grid-cols-2 gap-1">
          {FOUNDATION_MODELS.map((m) => (
            <div
              key={m}
              className="rounded-sm border border-[var(--white-10)] bg-[var(--background)] py-1.5 text-center text-[0.6rem] text-[var(--white-70)]"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
      <Step>Foundation Model</Step>
      <div className="flex items-stretch gap-2">
        <Step>Curated Dataset ⧉</Step>
        <span className="flex items-center text-[var(--white-30)]">→</span>
        <Step>Tokenization</Step>
      </div>
      <Edge>Into training</Edge>
      <Step dark>Train</Step>
      <Edge>Prompt + Model Response</Edge>
      <Step dark>Evaluate</Step>
      <Edge>Model Checkpoint + Score</Edge>
      <Step dark>Monitor</Step>
      <p className="text-center text-[0.55rem] text-[var(--white-40)]">Iterate → Train</p>
      <Step>Model Monitor DB ⧉</Step>
      <Edge>Tokenizer + Updated Parameters</Edge>
      <Step dark>Deploy</Step>
      <Step>Fine Tuned Model</Step>
      <Edge>User Prompt + Model Response</Edge>
      <Edge>Prompt ↑ / Response ↓</Edge>
      <Step>Query ⌕</Step>
    </div>
  );
}
