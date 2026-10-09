import type { ReactNode } from "react";
import styles from "./capability-diagram.module.css";

const YELLOW = "#ffc933";

/**
 * One line drawing per delivery phase on /how-we-work, drawn in the same hand
 * as CapabilityDiagram. Keyed by `dict.howWeWorkPage.phases[].number`.
 */
const drawings: Record<string, ReactNode> = {
  // Discovery: the workflow mapped step by step, the costliest step under the lens.
  "01": (
    <>
      <text x="24" y="52" className={styles.diagramMedium}>
        Where the time goes.
      </text>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="24" y="120" width="96" height="70" />
        <rect x="304" y="120" width="96" height="70" />
        <rect x="444" y="120" width="96" height="70" />
        <path d="M120 155h44M260 155h44M400 155h44" />
      </g>
      <rect
        x="164"
        y="120"
        width="96"
        height="70"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g stroke="currentColor">
        <circle cx="212" cy="155" r="64" strokeWidth="1.5" />
        <path d="m258 201 30 30" strokeWidth="5" />
      </g>
      <g className={styles.diagramLabel} textAnchor="middle">
        <text x="72" y="160">
          Intake
        </text>
        <text x="212" y="160">
          Check
        </text>
        <text x="352" y="160">
          Approve
        </text>
        <text x="492" y="160">
          File
        </text>
      </g>
      <text x="300" y="248" className={styles.serviceLabel}>
        The costliest step
      </text>
    </>
  ),
  // Scoping: a signed scope with every line ticked, and a fixed price.
  "02": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="150" y="20" width="260" height="270" />
        <path d="M174 118h212M174 154h212M174 190h212M174 226h212" />
        <rect x="174" y="91" width="16" height="16" />
        <rect x="174" y="127" width="16" height="16" />
        <rect x="174" y="163" width="16" height="16" />
        <rect x="174" y="199" width="16" height="16" />
        <path
          d="m177 99 4 4 8-9m-12 41 4 4 8-9m-12 41 4 4 8-9m-12 41 4 4 8-9"
          strokeWidth="2"
        />
        <path d="M174 268h120" />
        <path d="M180 260c8-12 13 5 21-4s13 9 21-1 12 6 18 0" />
      </g>
      <text x="174" y="66" className={styles.diagramMedium}>
        Scope
      </text>
      <g className={styles.diagramLabel}>
        <text x="204" y="104">
          Inputs
        </text>
        <text x="204" y="140">
          Outputs
        </text>
        <text x="204" y="176">
          Integrations
        </text>
        <text x="204" y="212">
          Success criteria
        </text>
      </g>
      <circle
        cx="414"
        cy="246"
        r="50"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className={styles.serviceLabel} textAnchor="middle">
        <text x="414" y="243">
          Fixed
        </text>
        <text x="414" y="262">
          price
        </text>
      </g>
    </>
  ),
  // Build & test: three sprints, each a working demo, all tested on real data.
  "03": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="24" y="40" width="144" height="96" />
        <rect x="208" y="40" width="144" height="96" />
        <path d="M168 88h40M352 88h40" />
        <rect x="40" y="104" width="112" height="10" />
        <rect x="224" y="104" width="112" height="10" />
        <rect x="408" y="104" width="112" height="10" />
        <rect x="24" y="226" width="512" height="52" />
        <path d="M96 226v-90M280 226v-90M464 226v-90" strokeDasharray="4 5" />
      </g>
      <rect
        x="392"
        y="40"
        width="144"
        height="96"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="408"
        y="104"
        width="112"
        height="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g fill="currentColor">
        <rect x="40" y="104" width="37" height="10" />
        <rect x="224" y="104" width="75" height="10" />
        <rect x="408" y="104" width="112" height="10" />
      </g>
      <g className={styles.diagramLabel}>
        <text x="40" y="72">
          Sprint 1
        </text>
        <text x="224" y="72">
          Sprint 2
        </text>
        <text x="408" y="72">
          Sprint 3
        </text>
      </g>
      <text
        x="280"
        y="257"
        textAnchor="middle"
        className={styles.serviceLabel}
      >
        Tested on your real data
      </text>
    </>
  ),
  // Handover: the system lives in your environment; you hold the key.
  "04": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="204" y="20" width="332" height="270" strokeDasharray="6 6" />
        <circle cx="72" cy="150" r="28" />
        <circle cx="72" cy="150" r="9" />
        <path d="M100 150h80M152 150v16M166 150v11" />
        <rect x="414" y="88" width="96" height="108" />
        <path d="M430 132h64M430 148h48M430 164h56" />
        <circle cx="244" cy="230" r="10" />
        <circle cx="284" cy="230" r="10" />
        <circle cx="324" cy="230" r="10" />
        <path d="M228 266c0-14 7-21 16-21s16 7 16 21M268 266c0-14 7-21 16-21s16 7 16 21M308 266c0-14 7-21 16-21s16 7 16 21" />
      </g>
      <rect
        x="228"
        y="88"
        width="162"
        height="108"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m248 162 12 12 26-29"
        stroke="currentColor"
        strokeWidth="3"
      />
      <g className={styles.diagramLabel}>
        <text x="228" y="56">
          Your environment
        </text>
        <text x="248" y="120">
          Your system, live
        </text>
        <text x="430" y="114">
          Docs
        </text>
        <text x="352" y="252">
          Your team, trained
        </text>
        <text x="30" y="216">
          Yours to keep
        </text>
      </g>
    </>
  ),
};

export function PhaseDiagram({ phase }: { phase: string }) {
  const drawing = drawings[phase];
  if (!drawing) return null;
  return (
    <svg
      viewBox="0 0 560 310"
      fill="none"
      aria-hidden="true"
      className={styles.drawing}
    >
      {drawing}
    </svg>
  );
}
