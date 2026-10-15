"use client";

import { useRef, type ReactNode } from "react";
import { BriefcaseBusiness, Fuel, Landmark, Scale, ShieldCheck } from "lucide-react";
import { useMotionOnView } from "./home-motion";
import styles from "./home-editorial-visuals.module.css";

/** Small, explanatory drawings. Their final state also works without JavaScript. */
export function ProcessVisual({ step, className }: { step: number; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionOnView(ref, 0.4);

  return (
    <div ref={ref} className={`${styles.processVisual} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 220 136" fill="none" focusable="false">
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {step === 0 && <>
            <path className={styles.guide} d="M18 68h184M56 26v84M110 26v84M164 26v84" />
            <rect x="24" y="50" width="36" height="36" fill="var(--paper)" />
            <rect x="148" y="50" width="36" height="36" fill="var(--paper)" />
            <g className={styles.accent}>
              <circle cx="106" cy="63" r="32" fill="var(--accent)" />
              <path d="m130 87 27 27" strokeWidth="3" />
            </g>
            <path className={styles.detail} d="M91 63h30m-15-15v30" />
          </>}
          {step === 1 && <>
            <path d="M110 49v20H48v20m62-20h62v20" />
            <g className={styles.accent}>
              <rect x="81" y="18" width="58" height="31" fill="var(--accent)" />
              <path d="M94 29h32m-32 9h19" />
            </g>
            <g className={styles.detail}>
              <rect x="19" y="89" width="58" height="30" fill="var(--paper)" />
              <rect x="143" y="89" width="58" height="30" fill="var(--paper)" />
              <path d="M32 100h32m-32 9h19m92-9h32m-32 9h19" />
            </g>
            <circle cx="110" cy="69" r="3" fill="currentColor" />
          </>}
          {step === 2 && <>
            <path className={styles.guide} d="M48 27h140v76M38 37h140v76" />
            <rect x="28" y="47" width="140" height="76" fill="var(--paper)" />
            <path d="M28 64h140m-128-8h2m6 0h2m6 0h2" />
            <g className={styles.accent}>
              <rect x="144" y="20" width="46" height="46" fill="var(--accent)" />
              <path d="m156 43 8 8 15-17" strokeWidth="2" />
            </g>
            <path className={styles.detail} d="m74 80-14 13 14 13m47-26 14 13-14 13m-17-29-12 33" strokeWidth="2" />
          </>}
          {step === 3 && <>
            <rect x="27" y="54" width="85" height="24" fill="var(--paper)" />
            <rect x="27" y="86" width="85" height="24" fill="var(--paper)" />
            <path d="M39 66h3m7 0h3m-13 32h3m7 0h3m32-32h16m-16 32h16" />
            <g className={styles.accent}>
              <path d="M112 97h52V48" />
              <circle cx="164" cy="40" r="25" fill="var(--accent)" />
            </g>
            <path className={styles.detail} d="M164 53V27m-10 10 10-10 10 10" strokeWidth="2" />
          </>}
          {step === 4 && <>
            <rect x="25" y="33" width="144" height="77" fill="var(--paper)" />
            <path d="M25 48h144m-90 62v13m-19 0h38" />
            <g className={styles.accent}>
              <circle cx="170" cy="38" r="24" fill="var(--accent)" />
              <path d="M160 41a11 11 0 1 0 2-12m-2-5v8h8" />
            </g>
            <path className={styles.detail} d="M39 81h20l10-17 16 31 13-22 10 8h46" strokeWidth="2" />
          </>}
        </g>
      </svg>
    </div>
  );
}

const industryIcons = {
  "oil-and-gas": Fuel,
  lending: Landmark,
  insurance: ShieldCheck,
  legal: Scale,
  professional: BriefcaseBusiness,
};

export function IndustryMark({ industry }: { industry: string }) {
  const Icon = industryIcons[industry as keyof typeof industryIcons] ?? BriefcaseBusiness;
  return <span className={styles.industryMark} aria-hidden="true"><Icon strokeWidth={1.4} /></span>;
}

/** The wrapper owns motion so shared portrait cards and article content stay unchanged. */
export function EditorialReveal({ children, kind, className = "" }: {
  children: ReactNode;
  kind: "portraits" | "artwork";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useMotionOnView(ref, 0.15);
  return <div ref={ref} className={`${styles.reveal} ${className}`} data-reveal={kind}>{children}</div>;
}

export function TeamNetwork() {
  return (
    <svg className={styles.teamNetwork} viewBox="0 0 640 360" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1">
        <ellipse cx="330" cy="180" rx="260" ry="128" />
        <ellipse cx="330" cy="180" rx="170" ry="128" />
        <ellipse cx="330" cy="180" rx="72" ry="128" />
        <path d="M70 180h520M106 116h448M106 244h448" strokeDasharray="3 7" />
        <path d="M124 204Q250 36 357 117T551 213" strokeWidth="1.5" />
      </g>
      {[ [124,204], [265,105], [357,117], [551,213] ].map(([cx,cy]) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r="12" stroke="currentColor" />
          <circle cx={cx} cy={cy} r="4" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function TeamLocations() {
  return <ul className={styles.locations} aria-label="Team locations">
    {["Hong Kong", "Vancouver", "Edinburgh", "Stuttgart"].map(city => (
      <li key={city}><span aria-hidden="true" />{city}</li>
    ))}
  </ul>;
}
