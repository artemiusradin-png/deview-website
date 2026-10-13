import styles from "./capability-diagram.module.css";

export function CapabilityDiagram({ mode }: { mode: number }) {
  return (
    <svg
      viewBox="0 0 560 310"
      fill="none"
      aria-hidden="true"
      className={styles.drawing}
    >
      {mode === 0 ? (
        <>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M160 75h45c40 0 0 80 60 80M160 235h45c40 0 0-80 60-80M335 155h55" />
            <rect x="22" y="29" width="138" height="94" />
            <rect x="22" y="187" width="138" height="94" />
            <rect x="390" y="99" width="148" height="112" />
          </g>
          <circle
            cx="300"
            cy="155"
            r="46"
            fill="#ffc933"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <text
            x="300"
            y="167"
            textAnchor="middle"
            className={styles.diagramBig}
          >
            AI
          </text>
          <g className={styles.diagramLabel}>
            <text x="41" y="56">
              Requests
            </text>
            <text x="41" y="214">
              Documents
            </text>
            <text x="409" y="133">
              Ready to review
            </text>
          </g>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M41 77h93M41 91h57M41 235h93M41 249h68" />
            <path d="m445 169 12 12 26-29" strokeWidth="3" />
          </g>
        </>
      ) : mode === 1 ? (
        <>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="m115 77 109 55m222-55-110 55M115 240l109-59m222 59-110-59" />
            <rect x="21" y="30" width="150" height="72" />
            <rect x="389" y="30" width="150" height="72" />
            <rect x="21" y="207" width="150" height="72" />
            <rect x="389" y="207" width="150" height="72" />
          </g>
          <rect
            x="187"
            y="99"
            width="186"
            height="112"
            fill="#ffc933"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <g className={styles.diagramLabel} textAnchor="middle">
            <text x="96" y="73">
              Sales
            </text>
            <text x="464" y="73">
              Operations
            </text>
            <text x="96" y="250">
              Finance
            </text>
            <text x="464" y="250">
              Your team
            </text>
          </g>
          <text
            x="280"
            y="165"
            textAnchor="middle"
            className={styles.diagramMedium}
          >
            One system.
          </text>
        </>
      ) : mode === 3 ? (
        /* Cloud security: apps, data and AI models inside your cloud, under one yellow shield. */
        <>
          <g stroke="currentColor" strokeWidth="1.5">
            <rect x="22" y="58" width="516" height="230" />
            <rect x="52" y="150" width="130" height="84" />
            <rect x="215" y="150" width="130" height="84" />
            <rect x="378" y="150" width="130" height="84" />
            <path d="M182 192h33M345 192h33" />
          </g>
          <path
            d="M280 14l52 18v34c0 32-22 52-52 62-30-10-52-30-52-62V32z"
            fill="#ffc933"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m264 70 12 12 26-29"
            stroke="currentColor"
            strokeWidth="3"
          />
          <g className={styles.diagramLabel}>
            <text x="42" y="88">
              Your cloud
            </text>
          </g>
          <g className={styles.diagramLabel} textAnchor="middle">
            <text x="117" y="197">
              Apps
            </text>
            <text x="280" y="197">
              Data
            </text>
            <text x="443" y="197">
              AI models
            </text>
            <text x="280" y="268">
              Access control · Encryption · Audit logs
            </text>
          </g>
        </>
      ) : mode === 4 ? (
        /* Tech consulting: options compared, one decision, a costed roadmap. */
        <>
          <g stroke="currentColor" strokeWidth="1.5">
            <rect x="22" y="30" width="140" height="60" />
            <rect x="22" y="125" width="140" height="60" />
            <rect x="22" y="220" width="140" height="60" />
            <path d="M162 60h30c30 0 28 95 58 95M162 155h88M162 250h30c30 0 28-95 58-95M350 155h40" />
            <rect x="390" y="95" width="148" height="120" />
          </g>
          <path
            d="M300 105l50 50-50 50-50-50z"
            fill="#ffc933"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <g className={styles.diagramLabel} textAnchor="middle">
            <text x="92" y="65">
              Build
            </text>
            <text x="92" y="160">
              Buy
            </text>
            <text x="92" y="255">
              Extend
            </text>
            <text x="300" y="160">
              Decide
            </text>
            <text x="464" y="245">
              Cost · Risk · Timeline
            </text>
          </g>
          <g className={styles.diagramLabel}>
            <text x="409" y="129">
              Roadmap
            </text>
          </g>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M409 150h93M409 164h57" />
            <path d="m445 185 12 12 26-29" strokeWidth="3" />
          </g>
        </>
      ) : (
        <>
          <text x="40" y="57" className={styles.diagramMedium}>
            Your data, in focus.
          </text>
          <path d="M40 91v179h480" stroke="currentColor" strokeWidth="1.5" />
          {[76, 146, 216, 286, 356, 426].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={242 - i * 22}
              width="42"
              height={28 + i * 22}
              fill={i > 3 ? "#ffc933" : "#171207"}
            />
          ))}
          <path
            d="m84 184 75-26 66 8 66-60 63 17 102-52M429 71h27v27"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      )}
    </svg>
  );
}
