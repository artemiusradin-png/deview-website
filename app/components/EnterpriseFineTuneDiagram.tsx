import type { ReactNode } from "react";

const FOUNDATION_MODELS = ["GPT-N", "Cohere", "Bard", "Dolly"] as const;

/** Small database stack (cylinders) — matches reference iconography */
function DbIcon({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} className="enterprise-ft-icon">
      <ellipse cx="10" cy="4" rx="9" ry="2.8" className="enterprise-ft-icon-stroke" fill="none" strokeWidth="1" />
      <path
        d="M 1 4 v 7 c 0 1.5 4 2.8 9 2.8 s 9 -1.2 9 -2.8 v -7"
        className="enterprise-ft-icon-stroke"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <ellipse cx="10" cy="11" rx="9" ry="2.8" className="enterprise-ft-icon-stroke" fill="none" strokeWidth="1" />
    </g>
  );
}

/** Magnifying glass + pulse (query) */
function QueryIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`} className="enterprise-ft-icon">
      <circle cx="9" cy="9" r="5.5" className="enterprise-ft-icon-stroke" fill="none" strokeWidth="1.15" />
      <path d="M 13 13 l 4 4" className="enterprise-ft-icon-stroke" fill="none" strokeWidth="1.15" strokeLinecap="round" />
      <path
        d="M 18 6 v 4 M 16 8 h 4"
        className="enterprise-ft-icon-stroke"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * Enterprise fine-tuning lifecycle — layout and topology aligned to the reference:
 * triangular Train / Evaluate / Monitor loop; Evaluate → Deploy; Deploy → Fine Tuned Model;
 * Fine Tuned Model → Monitor (User Prompt + Model Response); Query ↔ model (Prompt / Response).
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
        <div className="mx-auto block max-w-[960px] md:hidden">
          <FineTuneDiagramMobile />
        </div>

        <svg
          className="enterprise-ft-svg mx-auto hidden max-h-[min(76vh,560px)] w-full max-w-[960px] md:block"
          viewBox="0 0 940 392"
          role="img"
          aria-hidden
        >
          <defs>
            <marker
              id="enterprise-ft-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0,0 L10,5 L0,10 Z" className="enterprise-ft-arrowhead-fill" />
            </marker>
          </defs>

          <rect x="0" y="0" width="940" height="392" className="enterprise-ft-canvas-bg" rx="0" />

          {/* Orthogonal edges — grid-style routing */}
          <g
            className="enterprise-ft-edges-stroke"
            fill="none"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            markerEnd="url(#enterprise-ft-arrow)"
          >
            {/* Foundation Models panel → Foundation Model */}
            <path d="M 124 106 L 124 118" />
            {/* Foundation Model → merge into Train (bottom center of Train) */}
            <path d="M 124 154 L 124 174 L 320 174 L 320 160" />
            {/* Tokenization → merge into Train */}
            <path d="M 230 186 L 320 186 L 320 160" />
            {/* Curated Dataset → Tokenization */}
            <path d="M 132 186 L 142 186" />
            {/* Train → Evaluate */}
            <path d="M 364 134 L 392 134" />
            {/* Evaluate → Monitor */}
            <path d="M 436 160 L 436 190 L 386 190 L 386 220" />
            {/* Monitor → Train (loop) */}
            <path d="M 330 244 L 242 244 L 242 134 L 276 134" />
            {/* Monitor → Model Monitor DB */}
            <path d="M 386 268 L 386 282" />
            {/* Evaluate → Deploy (from right edge, elbow up) */}
            <path d="M 480 134 L 536 134 L 536 70 L 582 70" />
            {/* Deploy → Fine Tuned Model */}
            <path d="M 630 92 L 630 148" />
            {/* Fine Tuned Model → Monitor (feedback; reference direction) */}
            <path d="M 572 170 L 488 170 L 488 244 L 330 244" />
            {/* Query → Fine Tuned Model (Prompt) — slight x-offset so both directions read */}
            <path d="M 626 258 L 626 192" />
            {/* Fine Tuned Model → Query (Response) */}
            <path d="M 634 192 L 634 258" />
          </g>

          <g className="enterprise-ft-edge-labels" fontSize="8" letterSpacing="0.02em">
            <text x="378" y="126" textAnchor="middle">
              Prompt + Model Response
            </text>
            <text x="448" y="178" textAnchor="middle">
              Model Checkpoint + Score
            </text>
            <text x="532" y="58" textAnchor="middle">
              Tokenizer + Updated Parameters
            </text>
            <text x="458" y="184" textAnchor="middle">
              User Prompt + Model Response
            </text>
            <text x="646" y="218" textAnchor="start">
              Prompt
            </text>
            <text x="646" y="242" textAnchor="start">
              Response
            </text>
          </g>

          {/* —— Left column: inputs —— */}
          <rect x="20" y="14" width="208" height="92" rx="8" className="enterprise-ft-panel enterprise-ft-panel-outer" />
          <text x="124" y="32" textAnchor="middle" className="enterprise-ft-panel-title" fontSize="10.5" fontWeight="500">
            Foundation Models
          </text>
          {FOUNDATION_MODELS.map((name, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const bx = 34 + col * 94;
            const by = 42 + row * 30;
            return (
              <g key={name}>
                <rect x={bx} y={by} width="86" height="26" rx="4" className="enterprise-ft-nested" />
                <text x={bx + 43} y={by + 17} textAnchor="middle" fontSize="9" className="enterprise-ft-nested-text">
                  {name}
                </text>
              </g>
            );
          })}

          <rect x="52" y="118" width="144" height="36" rx="6" className="enterprise-ft-panel" />
          <text x="124" y="139" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Foundation Model
          </text>

          <rect x="32" y="166" width="100" height="40" rx="6" className="enterprise-ft-panel" />
          <text x="42" y="189" fontSize="9" className="enterprise-ft-panel-text">
            Curated Dataset
          </text>
          <DbIcon x={98} y={176} scale={0.85} />

          <rect x="142" y="166" width="88" height="40" rx="6" className="enterprise-ft-panel" />
          <text x="186" y="190" textAnchor="middle" fontSize="10" className="enterprise-ft-panel-text">
            Tokenization
          </text>

          {/* —— Center: process loop (black nodes) —— */}
          <rect x="276" y="108" width="88" height="52" rx="6" className="enterprise-ft-process" />
          <text x="320" y="140" textAnchor="middle" fontSize="12" fontWeight="600" className="enterprise-ft-process-label">
            Train
          </text>

          <rect x="392" y="108" width="88" height="52" rx="6" className="enterprise-ft-process" />
          <text x="436" y="140" textAnchor="middle" fontSize="12" fontWeight="600" className="enterprise-ft-process-label">
            Evaluate
          </text>

          <rect x="330" y="220" width="112" height="48" rx="6" className="enterprise-ft-process" />
          <text x="386" y="248" textAnchor="middle" fontSize="12" fontWeight="600" className="enterprise-ft-process-label">
            Monitor
          </text>

          <rect x="326" y="282" width="120" height="38" rx="6" className="enterprise-ft-panel" />
          <text x="372" y="303" fontSize="9" className="enterprise-ft-panel-text">
            Model Monitor DB
          </text>
          <DbIcon x={412} y={288} scale={0.75} />

          {/* —— Right: deploy stack —— */}
          <rect x="582" y="48" width="96" height="44" rx="6" className="enterprise-ft-process" />
          <text x="630" y="76" textAnchor="middle" fontSize="12" fontWeight="600" className="enterprise-ft-process-label">
            Deploy
          </text>

          <rect x="572" y="148" width="116" height="44" rx="6" className="enterprise-ft-panel" />
          <text x="630" y="175" textAnchor="middle" fontSize="10.5" className="enterprise-ft-panel-text">
            Fine Tuned Model
          </text>

          <rect x="582" y="258" width="96" height="44" rx="6" className="enterprise-ft-panel" />
          <text x="614" y="282" fontSize="10" className="enterprise-ft-panel-text">
            Query
          </text>
          <QueryIcon x={628} y={268} />
        </svg>
      </div>
    </figure>
  );
}

function FineTuneMobileStep({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`rounded-md px-3 py-2 text-center text-[0.65rem] font-medium uppercase tracking-wide ${
        dark
          ? "bg-[var(--white-100)] text-[var(--background)]"
          : "border border-[var(--white-10)] bg-[var(--surface-elevated)] text-[var(--white-80)]"
      }`}
    >
      {children}
    </div>
  );
}

function FineTuneMobileEdge({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-[0.5rem] uppercase tracking-wider text-[var(--white-40)]">{children}</p>
  );
}

function FineTuneDiagramMobile() {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-lg border border-[var(--white-10)] bg-[var(--surface-elevated)] p-2">
        <p className="mb-2 text-center text-[0.55rem] uppercase tracking-[0.2em] text-[var(--white-60)]">
          Foundation Models
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {FOUNDATION_MODELS.map((m) => (
            <div
              key={m}
              className="enterprise-ft-nested rounded-md border border-[var(--white-10)] bg-[var(--background)] py-1.5 text-center text-[0.6rem] text-[var(--white-70)]"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
      <FineTuneMobileStep>Foundation Model</FineTuneMobileStep>
      <div className="flex items-stretch gap-2">
        <FineTuneMobileStep>Curated Dataset ⧉</FineTuneMobileStep>
        <span className="flex items-center text-[var(--white-40)]" aria-hidden>
          →
        </span>
        <FineTuneMobileStep>Tokenization</FineTuneMobileStep>
      </div>
      <FineTuneMobileEdge>Into training</FineTuneMobileEdge>
      <FineTuneMobileStep dark>Train</FineTuneMobileStep>
      <FineTuneMobileEdge>Prompt + Model Response</FineTuneMobileEdge>
      <FineTuneMobileStep dark>Evaluate</FineTuneMobileStep>
      <FineTuneMobileEdge>Model Checkpoint + Score</FineTuneMobileEdge>
      <FineTuneMobileStep dark>Monitor</FineTuneMobileStep>
      <p className="text-center text-[0.55rem] text-[var(--white-40)]">Loop back → Train</p>
      <FineTuneMobileStep>Model Monitor DB ⧉</FineTuneMobileStep>
      <FineTuneMobileEdge>Tokenizer + Updated Parameters</FineTuneMobileEdge>
      <FineTuneMobileStep dark>Deploy</FineTuneMobileStep>
      <FineTuneMobileStep>Fine Tuned Model</FineTuneMobileStep>
      <FineTuneMobileEdge>User Prompt + Model Response (to Monitor)</FineTuneMobileEdge>
      <FineTuneMobileEdge>Prompt ↑ / Response ↓</FineTuneMobileEdge>
      <FineTuneMobileStep>Query ⌕</FineTuneMobileStep>
    </div>
  );
}
