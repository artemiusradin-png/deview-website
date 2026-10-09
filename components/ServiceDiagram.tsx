import type { ReactNode } from "react";
import styles from "./capability-diagram.module.css";

const YELLOW = "#ffc933";
const INK = "#171207";
const PAPER = "#fffdf7";

/**
 * One line drawing per AI service on /services, drawn in the same hand as
 * CapabilityDiagram: 1.5px ink strokes, square boxes and a single yellow
 * focal shape. Keyed by `dict.services.items[].id`.
 */
const drawings: Record<string, ReactNode> = {
  "workflow-audit": (
    <>
      <text x="24" y="40" className={styles.diagramMedium}>
        Cost per step
      </text>
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M24 206h352M226 84h16" />
        <rect x="40" y="166" width="44" height="40" />
        <rect x="108" y="136" width="44" height="70" />
        <rect x="244" y="150" width="44" height="56" />
        <rect x="312" y="116" width="44" height="90" />
      </g>
      <rect
        x="176"
        y="68"
        width="44"
        height="138"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text x="248" y="89" className={styles.serviceLabel}>
        Start here
      </text>
      <g className={styles.serviceLabel} textAnchor="middle">
        <text x="62" y="232">01</text>
        <text x="130" y="232">02</text>
        <text x="198" y="232">03</text>
        <text x="266" y="232">04</text>
        <text x="334" y="232">05</text>
      </g>
    </>
  ),
  "knowledge-assistant": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M44 38V28h104v136h-10M34 48V38h104v136h-10" />
        <rect x="24" y="48" width="104" height="136" />
        <path d="M40 72h70M40 88h54M40 104h64M40 152h48M40 168h60" />
        <rect x="196" y="24" width="180" height="48" />
        <path d="M102 128c46 0 50 14 94 14" strokeDasharray="4 5" />
      </g>
      <rect x="38" y="120" width="64" height="16" fill={YELLOW} />
      <rect
        x="196"
        y="96"
        width="180"
        height="112"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M212 122h132M212 138h104M212 154h120"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className={styles.serviceLabel}>
        <text x="212" y="53">
          Holiday policy?
        </text>
        <text x="212" y="190">
          Source: HR policy
        </text>
        <text x="24" y="214">
          Your documents
        </text>
      </g>
    </>
  ),
  "document-automation": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="24" y="28" width="52" height="60" />
        <rect x="24" y="95" width="52" height="60" />
        <rect x="24" y="162" width="52" height="60" />
        <path d="M36 46h28M36 58h18M36 113h28M36 125h18M36 180h28M36 192h18" />
        <path d="M76 58c44 0 36 67 80 67M76 125h80M76 192c44 0 36-67 80-67" />
        <path d="M244 125c22 0 14-74 36-74M244 125h36M244 125c22 0 14 74 36 74" />
        <rect x="280" y="31" width="96" height="40" />
        <rect x="280" y="105" width="96" height="40" />
        <rect x="280" y="179" width="96" height="40" strokeDasharray="4 4" />
      </g>
      <circle
        cx="200"
        cy="125"
        r="44"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="137"
        textAnchor="middle"
        className={styles.diagramBig}
      >
        AI
      </text>
      <g className={styles.serviceLabel}>
        <text x="292" y="56">
          Extracted
        </text>
        <text x="292" y="130">
          Routed
        </text>
        <text x="292" y="204">
          To review
        </text>
      </g>
    </>
  ),
  "support-assistant": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="24" y="28" width="164" height="48" />
        <rect x="24" y="110" width="164" height="112" />
        <path d="M24 147h164M24 184h164" />
        <path d="M188 52c22 0 16 38 38 38M188 166c22 0 16-46 38-46M301 172v16" />
        <rect x="226" y="188" width="150" height="36" />
        <path d="m242 206 6 6 12-13" strokeWidth="2.5" />
      </g>
      <rect
        x="226"
        y="40"
        width="150"
        height="132"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M242 98h110M242 114h86M242 130h100"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className={styles.serviceLabel}>
        <text x="38" y="58">
          Order delayed?
        </text>
        <text x="38" y="134">
          Account
        </text>
        <text x="38" y="171">
          Order history
        </text>
        <text x="38" y="208">
          Policy
        </text>
        <text x="242" y="72">
          Draft reply
        </text>
        <text x="270" y="211">
          Agent sends
        </text>
      </g>
    </>
  ),
  "reporting-copilot": (
    <>
      <g stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="52" cy="38" rx="28" ry="9" />
        <path d="M24 38v36c0 5 12.5 9 28 9s28-4 28-9V38M24 56c0 5 12.5 9 28 9s28-4 28-9" />
        <rect x="24" y="104" width="56" height="52" />
        <path d="M24 121h56M24 138h56M43 104v52M61 104v52" />
        <path d="M24 178v46h56M32 214l14-14 10 7 18-21" />
        <path d="M164 60c40 0 32 66 72 66M164 130h72M164 204c40 0 32-78 72-78" />
      </g>
      <rect
        x="236"
        y="34"
        width="140"
        height="184"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g fill={INK}>
        <rect x="252" y="122" width="14" height="28" />
        <rect x="272" y="108" width="14" height="42" />
        <rect x="292" y="96" width="14" height="54" />
        <rect x="312" y="112" width="14" height="38" />
        <rect x="332" y="86" width="14" height="64" />
      </g>
      <path
        d="M250 172h104M250 188h76"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="376"
        cy="34"
        r="17"
        fill={PAPER}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M376 24v10l6 5" stroke="currentColor" strokeWidth="1.5" />
      <g className={styles.serviceLabel}>
        <text x="94" y="65">
          SQL
        </text>
        <text x="94" y="135">
          Sheets
        </text>
        <text x="94" y="209">
          BI tools
        </text>
        <text x="250" y="70">
          Weekly report
        </text>
      </g>
    </>
  ),
  "implementation-advisory": (
    <>
      <text x="24" y="44" className={styles.diagramMedium}>
        Your AI roadmap
      </text>
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M24 140h336M360 140V62" />
        <rect x="24" y="176" width="100" height="40" />
        <rect x="138" y="176" width="100" height="40" />
        <rect x="252" y="176" width="100" height="40" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="140" r="6" />
        <circle cx="147" cy="140" r="6" />
        <circle cx="254" cy="140" r="6" />
        <circle cx="360" cy="140" r="6" />
      </g>
      <path
        d="M360 62h32l-9 13 9 13h-32z"
        fill={YELLOW}
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g className={styles.serviceLabel} textAnchor="middle">
        <text x="40" y="122">
          Assess
        </text>
        <text x="147" y="122">
          Compare
        </text>
        <text x="254" y="122">
          Plan
        </text>
        <text x="348" y="122" textAnchor="end">
          Roll out
        </text>
        <text x="74" y="201">
          Timeline
        </text>
        <text x="188" y="201">
          Cost
        </text>
        <text x="302" y="201">
          Risks
        </text>
      </g>
    </>
  ),
};

export function ServiceDiagram({ id }: { id: string }) {
  const drawing = drawings[id];
  if (!drawing) return null;
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      aria-hidden="true"
      className={styles.drawing}
    >
      {drawing}
    </svg>
  );
}
