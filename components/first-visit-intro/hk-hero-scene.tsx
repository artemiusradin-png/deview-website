// @ts-nocheck — ported prototype scene (New-Landing-Page)
"use client";

import { useMemo, type ReactNode } from "react";
import { Easing, clamp, useTime } from "./intro-animation-stage";
import { INTRO_MASTER_TIMELINE, INTRO_WALL_DURATION } from "./intro-scene-timing";

/** Maps wall-clock playhead (0…wall duration) to the scene’s 0…8s logical timeline. */
function useSceneTime() {
  const wallTime = useTime();
  const scale = INTRO_MASTER_TIMELINE / INTRO_WALL_DURATION;
  return Math.min(wallTime * scale, INTRO_MASTER_TIMELINE);
}

// Dark violet-blue palette (replaces the original warm gold treatment)
const COLORS = {
  skyTop:      '#05040d',
  skyMid:      '#0c0a1c',
  skyHorizon:  '#1f1a44',
  skyGlowHot:  'rgba(110,90,210,0.30)',
  water:       '#05040d',
  gold:        '#6a5cd0',     // (kept name, now violet-blue accent)
  goldBright:  '#8b7ae8',
  goldHot:     '#b8a8ff',
  ivory:       '#f5f3ee',
  ivoryDim:    'rgba(245,243,238,0.55)',
  panelStroke: 'rgba(184,168,255,0.30)',
  panelStrokeHot: 'rgba(184,168,255,0.55)',
  panelFill:   'rgba(10,8,22,0.45)',
};

// ── Light-up timing (windows are dark at t=0, sweep on, then fade off) ──
const SWEEP_START = 0.4;
const SWEEP_END   = 4.6;
const FADE_OUT_START = 6.6;
const FADE_OUT_END   = 7.9;

function getGlobalFade(time) {
  if (time > FADE_OUT_START) {
    return 1 - clamp((time - FADE_OUT_START)/(FADE_OUT_END - FADE_OUT_START), 0, 1);
  }
  return 1;
}
function getRevealOp(time, revealTime, dur = 0.45) {
  return clamp((time - revealTime) / dur, 0, 1);
}

// Seeded RNG
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ── Sky + stars + horizon glow ────────────────────────────────────────────

function Sky() {
  return (
    <>
      <div style={{
        position:'absolute', inset:0,
        background: `linear-gradient(180deg, ${COLORS.skyTop} 0%, ${COLORS.skyMid} 45%, #14102e 72%, #1a1438 88%, #1f1a44 100%)`,
      }}/>
      {/* horizon glow */}
      <div style={{
        position:'absolute', left:0, right:0, bottom:'24%', height:'42%',
        background: `radial-gradient(70% 100% at 50% 100%, ${COLORS.skyGlowHot} 0%, rgba(80,60,170,0.08) 45%, rgba(0,0,0,0) 75%)`,
        mixBlendMode:'screen', pointerEvents:'none',
      }}/>
      {/* faint warm vignette top */}
      <div style={{
        position:'absolute', left:0, right:0, top:0, height:'35%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
        pointerEvents:'none',
      }}/>
    </>
  );
}

function Stars() {
  const stars = useMemo(() => {
    const rng = mulberry32(7);
    return Array.from({length: 110}, () => ({
      x: rng() * 100,
      y: rng() * 42,
      r: 0.5 + rng() * 1.3,
      opacity: 0.18 + rng() * 0.55,
      phase: rng() * 6.28,
      speed: 0.8 + rng() * 1.6,
    }));
  }, []);
  const time = useSceneTime();
  return (
    <div style={{position:'absolute', inset:0, pointerEvents:'none'}}>
      {stars.map((s,i) => {
        const op = s.opacity * (0.55 + 0.45 * Math.sin(time*s.speed + s.phase));
        return (
          <div key={i} style={{
            position:'absolute',
            left: s.x+'%', top: s.y+'%',
            width: s.r, height: s.r,
            background: COLORS.ivory,
            borderRadius:'50%',
            opacity: op,
            boxShadow: s.r > 1.2 ? `0 0 ${s.r*2}px rgba(245,243,238,0.6)` : 'none',
          }}/>
        );
      })}
    </div>
  );
}

// ── Atmospheric haze ──────────────────────────────────────────────────────

function AtmosphericHaze() {
  return (
    <>
      {/* horizontal haze band over distant skyline */}
      <div style={{
        position:'absolute', left:0, right:0, top:'48%', height:'18%',
        background: 'linear-gradient(180deg, rgba(80,60,170,0) 0%, rgba(110,90,210,0.22) 40%, rgba(80,60,170,0.28) 70%, rgba(50,40,120,0.15) 100%)',
        mixBlendMode:'screen', pointerEvents:'none', filter:'blur(2px)',
      }}/>
      {/* low atmospheric mist over water */}
      <div style={{
        position:'absolute', left:0, right:0, top:'63%', height:'10%',
        background: 'linear-gradient(180deg, rgba(140,120,220,0.18) 0%, rgba(140,120,220,0) 100%)',
        mixBlendMode:'screen', pointerEvents:'none', filter:'blur(8px)',
      }}/>
    </>
  );
}

// ── Building (single silhouette with lit windows) ─────────────────────────

function Building({ x, y, width, height, depth, seed, spire }) {
  const time = useSceneTime();
  const data = useMemo(() => {
    const rng = mulberry32(seed);
    const cols = Math.max(3, Math.round(width / 11));
    const rows = Math.max(6, Math.round(height / 16));
    const windows = [];
    for (let r=0; r<rows; r++) {
      for (let c=0; c<cols; c++) {
        const v = rng();
        if (v < 0.62) {
          // absolute x within 1920 frame -> left-to-right sweep position
          const absX = x + (c + 0.5) * (width/cols);
          const sweepPos = clamp(absX / 1920, 0, 1);
          const jitter = (rng() - 0.5) * 0.7;
          const revealTime = clamp(
            SWEEP_START + sweepPos * (SWEEP_END - SWEEP_START) + jitter,
            0.05, SWEEP_END
          );
          windows.push({
            c, r,
            color: v < 0.04 ? COLORS.ivory : (v < 0.14 ? COLORS.goldBright : COLORS.gold),
            op: 0.35 + rng()*0.55,
            glow: rng() < 0.12,
            revealTime,
          });
        }
      }
    }
    const spireRevealTime = clamp(
      SWEEP_START + clamp((x + width/2)/1920, 0, 1) * (SWEEP_END - SWEEP_START) + 0.2,
      0.1, SWEEP_END + 0.3
    );
    return { cols, rows, windows, spireRevealTime };
  }, [seed, width, height, x]);

  const fillColor = depth === 0 ? '#0e0a22' : depth === 1 ? '#06051a' : '#030210';
  const opMul = depth === 0 ? 0.45 : depth === 1 ? 0.85 : 1.0;
  const winW = width / data.cols * 0.55;
  const winH = height / data.rows * 0.45;
  const padX = (width/data.cols - winW)/2;
  const padY = (height/data.rows - winH)/2;
  const globalFade = getGlobalFade(time);

  return (
    <div style={{
      position:'absolute', left:x, top:y, width, height,
      background: fillColor,
    }}>
      {data.windows.map((w,i) => {
        const reveal = getRevealOp(time, w.revealTime, 0.45);
        const finalOp = w.op * opMul * reveal * globalFade;
        if (finalOp <= 0.01) return null;
        return (
          <div key={i} style={{
            position:'absolute',
            left: w.c * (width/data.cols) + padX,
            top:  w.r * (height/data.rows) + padY,
            width: winW, height: winH,
            background: w.color,
            opacity: finalOp,
            boxShadow: (w.glow && reveal > 0.9) ? `0 0 ${winW*1.6}px ${w.color}88` : 'none',
          }}/>
        );
      })}
      {spire && (() => {
        const sReveal = getRevealOp(time, data.spireRevealTime, 0.5);
        const sOp = sReveal * globalFade;
        return (
          <div style={{
            position:'absolute',
            left: width/2 - 1, top: -height*0.18,
            width: 2, height: height*0.18,
            background: fillColor,
          }}>
            {sOp > 0.01 && (
              <div style={{
                position:'absolute', left:-2, top:-4,
                width:4, height:4, background: COLORS.goldHot,
                borderRadius:'50%',
                opacity: sOp,
                boxShadow: `0 0 8px ${COLORS.goldHot}, 0 0 16px ${COLORS.gold}aa`,
              }}/>
            )}
          </div>
        );
      })()}
    </div>
  );
}

// ── Distant (far) skyline — Kowloon side ─────────────────────────────────

const FAR_BUILDINGS = [
  // y is from top of canvas. Horizon ~720. Far buildings sit on a higher
  // baseline (further away appears higher up the frame).
  { x: -40,  w: 38, h: 90,  s: 101 },
  { x: 10,   w: 44, h: 120, s: 102 },
  { x: 60,   w: 38, h: 100, s: 103 },
  { x: 105,  w: 50, h: 140, s: 104 },
  { x: 160,  w: 36, h: 110, s: 105 },
  { x: 200,  w: 60, h: 175, s: 106, spire: true },
  { x: 265,  w: 42, h: 130, s: 107 },
  { x: 312,  w: 56, h: 200, s: 108 },
  { x: 372,  w: 38, h: 110, s: 109 },
  { x: 415,  w: 50, h: 165, s: 110 },
  { x: 470,  w: 42, h: 130, s: 111 },
  { x: 515,  w: 60, h: 220, s: 112, spire: true },
  { x: 580,  w: 40, h: 130, s: 113 },
  { x: 625,  w: 46, h: 155, s: 114 },
  { x: 675,  w: 38, h: 110, s: 115 },
  { x: 720,  w: 52, h: 175, s: 116 },
  { x: 776,  w: 40, h: 130, s: 117 },
  { x: 820,  w: 70, h: 240, s: 118, spire: true },
  { x: 895,  w: 42, h: 140, s: 119 },
  { x: 942,  w: 48, h: 165, s: 120 },
  { x: 994,  w: 40, h: 125, s: 121 },
  { x: 1040, w: 55, h: 195, s: 122 },
  { x: 1100, w: 38, h: 115, s: 123 },
  { x: 1142, w: 50, h: 170, s: 124 },
  { x: 1196, w: 42, h: 145, s: 125 },
  { x: 1242, w: 60, h: 215, s: 126, spire: true },
  { x: 1307, w: 38, h: 120, s: 127 },
  { x: 1350, w: 52, h: 175, s: 128 },
  { x: 1406, w: 40, h: 130, s: 129 },
  { x: 1450, w: 48, h: 160, s: 130 },
  { x: 1502, w: 42, h: 140, s: 131 },
  { x: 1548, w: 56, h: 195, s: 132 },
  { x: 1608, w: 40, h: 130, s: 133 },
  { x: 1652, w: 48, h: 170, s: 134 },
  { x: 1704, w: 38, h: 115, s: 135 },
  { x: 1746, w: 60, h: 210, s: 136, spire: true },
  { x: 1810, w: 42, h: 140, s: 137 },
  { x: 1856, w: 50, h: 175, s: 138 },
  { x: 1910, w: 38, h: 110, s: 139 },
];

function FarSkyline() {
  const baseY = 600; // baseline for far layer (their bottom)
  return (
    <div style={{
      position:'absolute', inset:0,
      filter: 'blur(0.6px) brightness(0.78) saturate(0.85)',
      opacity: 0.85,
    }}>
      {FAR_BUILDINGS.map((b,i) => (
        <Building key={i}
          x={b.x} y={baseY - b.h}
          width={b.w} height={b.h}
          depth={0} seed={b.s} spire={b.spire}/>
      ))}
    </div>
  );
}

// ── Mid skyline — main Hong Kong island silhouette ────────────────────────

const MID_BUILDINGS = [
  { x: -40, w: 70,  h: 240, s: 211 },
  { x: 40,  w: 80,  h: 290, s: 212 },
  { x: 128, w: 60,  h: 220, s: 213 },
  { x: 195, w: 100, h: 380, s: 214, spire: true },
  { x: 302, w: 70,  h: 250, s: 215 },
  { x: 378, w: 85,  h: 320, s: 216 },
  { x: 470, w: 75,  h: 270, s: 217 },
  { x: 552, w: 60,  h: 220, s: 218 },
  { x: 620, w: 110, h: 460, s: 219, spire: true }, // ICC-style
  { x: 740, w: 70,  h: 250, s: 220 },
  { x: 816, w: 90,  h: 330, s: 221 },
  { x: 912, w: 65,  h: 240, s: 222 },
  { x: 984, w: 75,  h: 280, s: 223 },
  { x: 1066, w: 130, h: 560, s: 224, spire: true }, // signature centerpiece (IFC-like)
  { x: 1206, w: 70,  h: 260, s: 225 },
  { x: 1283, w: 90,  h: 350, s: 226 },
  { x: 1380, w: 70,  h: 260, s: 227 },
  { x: 1456, w: 85,  h: 320, s: 228 },
  { x: 1548, w: 60,  h: 220, s: 229 },
  { x: 1614, w: 110, h: 420, s: 230, spire: true },
  { x: 1730, w: 75,  h: 280, s: 231 },
  { x: 1812, w: 80,  h: 300, s: 232 },
  { x: 1898, w: 60,  h: 220, s: 233 },
];

function MidSkyline() {
  const baseY = 740; // their bottom sits at water line
  return (
    <div style={{position:'absolute', inset:0}}>
      {MID_BUILDINGS.map((b,i) => (
        <Building key={i}
          x={b.x} y={baseY - b.h}
          width={b.w} height={b.h}
          depth={1} seed={b.s} spire={b.spire}/>
      ))}
    </div>
  );
}

// ── Harbour (water + reflections + boat lights) ───────────────────────────

function Harbour() {
  const time = useSceneTime();
  const globalFade = getGlobalFade(time);
  // Sample some buildings to create vertical light reflections in water.
  // Each reflection has a revealTime tied to its x-position so it lights up
  // shortly after the building above it.
  const reflections = useMemo(() => {
    const rng = mulberry32(901);
    return MID_BUILDINGS.flatMap((b) => {
      const arr = [];
      const count = Math.max(1, Math.round(b.w / 28));
      for (let i=0; i<count; i++) {
        const rx = b.x + (i+0.5) * (b.w/count) + (rng()-0.5)*6;
        const sweepPos = clamp(rx / 1920, 0, 1);
        const jitter = (rng() - 0.5) * 0.6;
        const revealTime = clamp(
          SWEEP_START + sweepPos * (SWEEP_END - SWEEP_START) + jitter + 0.25,
          0.1, SWEEP_END + 0.4
        );
        arr.push({
          x: rx,
          width: 2 + rng()*3,
          height: 60 + rng()*120,
          color: rng() < 0.18 ? COLORS.goldHot : COLORS.gold,
          op: 0.18 + rng()*0.22,
          phase: rng()*6.28,
          revealTime,
        });
      }
      return arr;
    });
  }, []);

  const boats = useMemo(() => {
    const rng = mulberry32(555);
    return Array.from({length: 6}, (_, i) => {
      const x = 200 + i*290 + (rng()-0.5)*80;
      const sweepPos = clamp(x / 1920, 0, 1);
      const revealTime = clamp(
        SWEEP_START + sweepPos * (SWEEP_END - SWEEP_START) + (rng()-0.5)*0.5 + 0.4,
        0.4, SWEEP_END + 0.5
      );
      return {
        x, y: 800 + rng()*180,
        color: rng() < 0.3 ? COLORS.ivory : COLORS.goldBright,
        phase: rng()*6.28,
        driftAmp: 12 + rng()*18,
        driftSpeed: 0.15 + rng()*0.2,
        revealTime,
      };
    });
  }, []);

  // horizon glint pulses on with the first windows, off with the last
  const horizonOp = clamp((time - 0.2)/0.8, 0, 1) * globalFade;

  return (
    <div style={{position:'absolute', left:0, right:0, top:740, bottom:0, overflow:'hidden'}}>
      {/* water base */}
      <div style={{
        position:'absolute', inset:0,
        background: `linear-gradient(180deg, #100c28 0%, #07061a 25%, #03020b 100%)`,
      }}/>
      {/* horizon line glow */}
      <div style={{
        position:'absolute', left:0, right:0, top:0, height:3,
        background: `linear-gradient(90deg, transparent 0%, rgba(139,122,232,0.45) 30%, rgba(184,168,255,0.55) 50%, rgba(139,122,232,0.45) 70%, transparent 100%)`,
        opacity: horizonOp,
      }}/>
      {/* reflections */}
      {reflections.map((r,i) => {
        const reveal = getRevealOp(time, r.revealTime, 0.6);
        const finalOp = r.op * reveal * globalFade;
        if (finalOp <= 0.005) return null;
        const wobble = Math.sin(time*2.5 + r.phase) * 0.5 + 0.5;
        return (
          <div key={i} style={{
            position:'absolute',
            left: r.x - r.width/2, top: 0,
            width: r.width, height: r.height,
            background: `linear-gradient(180deg, ${r.color} 0%, ${r.color}00 100%)`,
            opacity: finalOp * (0.6 + 0.4 * wobble),
            filter: `blur(${1 + wobble*1.4}px)`,
            transform: `scaleY(${0.85 + wobble*0.3})`,
            transformOrigin: 'top',
          }}/>
        );
      })}
      {/* horizontal water ripple bands */}
      {[0.15, 0.35, 0.55, 0.78].map((p, i) => (
        <div key={i} style={{
          position:'absolute',
          left:0, right:0,
          top: `${p*100}%`, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(139,122,232,0.20), transparent)',
          opacity: (0.5 + 0.5 * Math.sin(time*1.2 + i*1.7)) * globalFade * clamp((time - 1.0)/1.5, 0, 1),
        }}/>
      ))}
      {/* boats / harbour lights */}
      {boats.map((b,i) => {
        const reveal = getRevealOp(time, b.revealTime, 0.5);
        if (reveal <= 0.01) return null;
        const drift = Math.sin(time*b.driftSpeed + b.phase) * b.driftAmp;
        const blink = 0.6 + 0.4 * Math.sin(time*1.8 + b.phase*2);
        return (
          <div key={i} style={{
            position:'absolute',
            left: b.x + drift, top: b.y - 740,
            width: 4, height: 4,
            background: b.color,
            borderRadius: '50%',
            opacity: blink * reveal * globalFade,
            boxShadow: `0 0 8px ${b.color}, 0 0 16px ${b.color}88`,
          }}/>
        );
      })}
    </div>
  );
}

// ── Camera dolly (sinusoidal so it loops at t=duration) ──────────────────

function CameraDolly({ duration: _duration, children }) {
  const time = useSceneTime();
  const phase = (time / INTRO_MASTER_TIMELINE) * Math.PI * 2;
  // very subtle continuous drift
  const tx = Math.sin(phase) * 14;
  const ty = Math.sin(phase + 1.2) * 6;
  const scale = 1.03 + Math.sin(phase - 0.6) * 0.018;
  return (
    <div style={{
      position:'absolute', inset:0,
      transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
      transformOrigin: 'center 65%',
      willChange:'transform',
    }}>
      {children}
    </div>
  );
}

// ── Holographic UI panels ────────────────────────────────────────────────

function HoloPanel({ x, y, width, height, children, enter, exit }: {
  x: number;
  y: number;
  width: number;
  height: number;
  children?: ReactNode;
  enter: number;
  exit: number;
}) {
  const time = useSceneTime();
  let opacity = 0;
  let translate = 0;
  if (time < enter) {
    const t = clamp((time - (enter - 0.6)) / 0.6, 0, 1);
    opacity = Easing.easeOutCubic(t);
    translate = (1 - t) * 14;
  } else if (time > exit) {
    const t = clamp((time - exit) / 0.5, 0, 1);
    opacity = 1 - Easing.easeInCubic(t);
    translate = -t * 8;
  } else {
    opacity = 1;
    translate = 0;
  }

  return (
    <div style={{
      position:'absolute', left:x, top:y, width, height,
      opacity,
      transform: `translateY(${translate}px)`,
      background: COLORS.panelFill,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: `1px solid ${COLORS.panelStroke}`,
      borderRadius: 4,
      padding: 14,
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      color: COLORS.ivory,
      fontSize: 11,
      boxShadow: `0 8px 28px rgba(0,0,0,0.4), inset 0 1px 0 rgba(232,201,138,0.18)`,
      overflow: 'hidden',
    }}>
      {/* corner accents */}
      <Corner pos="tl"/> <Corner pos="tr"/> <Corner pos="bl"/> <Corner pos="br"/>
      {children}
    </div>
  );
}

function Corner({ pos }) {
  const s = 8;
  const styles = {
    tl: { top: -1, left: -1, borderTop: `1px solid ${COLORS.goldBright}`, borderLeft: `1px solid ${COLORS.goldBright}` },
    tr: { top: -1, right: -1, borderTop: `1px solid ${COLORS.goldBright}`, borderRight: `1px solid ${COLORS.goldBright}` },
    bl: { bottom: -1, left: -1, borderBottom: `1px solid ${COLORS.goldBright}`, borderLeft: `1px solid ${COLORS.goldBright}` },
    br: { bottom: -1, right: -1, borderBottom: `1px solid ${COLORS.goldBright}`, borderRight: `1px solid ${COLORS.goldBright}` },
  };
  return <div style={{ position:'absolute', width:s, height:s, ...styles[pos] }}/>;
}

function PanelLabel({ children }) {
  return (
    <div style={{
      fontSize: 9, letterSpacing: '0.22em',
      color: COLORS.goldBright,
      textTransform: 'uppercase',
      opacity: 0.85,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      marginBottom: 10,
    }}>
      <span>{children}</span>
      <span style={{
        width:6, height:6, borderRadius:'50%',
        background: COLORS.goldHot,
        boxShadow: `0 0 6px ${COLORS.goldHot}`,
      }}/>
    </div>
  );
}

// Sparkline that draws progressively
function Sparkline({ width, height, color = COLORS.goldBright, seed = 42, time, enter }) {
  const points = useMemo(() => {
    const rng = mulberry32(seed);
    const n = 32;
    const arr = [];
    let v = 0.5;
    for (let i=0; i<n; i++) {
      v = clamp(v + (rng()-0.45)*0.18, 0.08, 0.92);
      arr.push(v);
    }
    return arr;
  }, [seed]);

  const reveal = clamp((time - enter - 0.2) / 1.2, 0, 1);
  const visN = Math.floor(reveal * points.length);
  if (visN < 2) return null;
  const visible = points.slice(0, visN);

  const path = visible.map((v, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = (1 - v) * height;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const lastX = ((visN-1) / (points.length-1)) * width;
  const lastY = (1 - visible[visN-1]) * height;

  return (
    <svg width={width} height={height} style={{display:'block'}}>
      <defs>
        <linearGradient id={'spark'+seed} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"  stopColor={color} stopOpacity="0.5"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={`${path} L${lastX.toFixed(1)},${height} L0,${height} Z`} fill={`url(#spark${seed})`} opacity={0.6}/>
      <path d={path} stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      <circle cx={lastX} cy={lastY} r="2.5" fill={COLORS.goldHot}/>
      <circle cx={lastX} cy={lastY} r="5" fill={COLORS.goldHot} opacity="0.25"/>
    </svg>
  );
}

function Bars({ width, height, seed = 9, time, enter }) {
  const bars = useMemo(() => {
    const rng = mulberry32(seed);
    return Array.from({length: 14}, () => 0.2 + rng()*0.78);
  }, [seed]);
  const reveal = clamp((time - enter - 0.2) / 1.2, 0, 1);
  const gap = 2;
  const bw = (width - gap*(bars.length-1)) / bars.length;
  return (
    <svg width={width} height={height} style={{display:'block'}}>
      {bars.map((v,i) => {
        const local = clamp((reveal - i*0.02) * 3, 0, 1);
        const eased = Easing.easeOutCubic(local);
        const h = v * height * eased;
        return (
          <rect key={i}
            x={i*(bw+gap)} y={height - h}
            width={bw} height={h}
            fill={i === bars.length-1 ? COLORS.goldHot : COLORS.gold}
            opacity={i === bars.length-1 ? 0.95 : 0.55 + v*0.3}
          />
        );
      })}
    </svg>
  );
}

function HoloOverlays() {
  const time = useSceneTime();
  return (
    <>
      {/* Top-right small metric */}
      <HoloPanel x={1560} y={120} width={260} height={130} enter={1.4} exit={6.6}>
        <PanelLabel>NEURAL · 01</PanelLabel>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:6}}>
          <span style={{fontSize:28, color:COLORS.ivory, letterSpacing:'-0.02em', fontWeight:300}}>98.42</span>
          <span style={{fontSize:10, color:COLORS.goldBright, opacity:0.8}}>%</span>
        </div>
        <Sparkline width={232} height={42} seed={31} time={time} enter={1.4}/>
      </HoloPanel>

      {/* Mid-left wider panel with bars */}
      <HoloPanel x={90} y={170} width={300} height={140} enter={2.2} exit={6.4}>
        <PanelLabel>SYSTEMS · INTEGRATED</PanelLabel>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:6, alignItems:'baseline'}}>
          <span style={{fontSize:24, color:COLORS.ivory, fontWeight:300, letterSpacing:'-0.02em'}}>1,284</span>
          <span style={{fontSize:9, color:COLORS.goldBright, letterSpacing:'0.18em'}}>+12.4%</span>
        </div>
        <Bars width={272} height={42} seed={17} time={time} enter={2.2}/>
      </HoloPanel>

      {/* Center node — appears later */}
      <HoloPanel x={1500} y={380} width={320} height={170} enter={3.4} exit={6.8}>
        <PanelLabel>INFERENCE FLOW</PanelLabel>
        <NetworkMini width={292} height={104} time={time} enter={3.4}/>
      </HoloPanel>

      {/* Tiny coord readout */}
      <CoordHud time={time} enter={0.6} exit={7.2}/>
    </>
  );
}

function NetworkMini({ width, height, time, enter }) {
  const nodes = useMemo(() => {
    const rng = mulberry32(73);
    return Array.from({length: 9}, () => ({
      x: 0.08 + rng()*0.84,
      y: 0.12 + rng()*0.76,
      r: 2 + rng()*2,
      phase: rng()*6.28,
    }));
  }, []);
  const edges = useMemo(() => {
    const rng = mulberry32(91);
    const e = [];
    for (let i=0; i<nodes.length; i++) {
      const partners = 1 + Math.floor(rng()*2);
      for (let p=0; p<partners; p++) {
        const j = (i + 1 + Math.floor(rng()*(nodes.length-2))) % nodes.length;
        if (j !== i) e.push([i,j, rng()]);
      }
    }
    return e;
  }, [nodes]);

  const reveal = clamp((time - enter - 0.2)/1.5, 0, 1);

  return (
    <svg width={width} height={height} style={{display:'block'}}>
      {edges.map(([a,b,seed], i) => {
        const x1 = nodes[a].x * width, y1 = nodes[a].y * height;
        const x2 = nodes[b].x * width, y2 = nodes[b].y * height;
        const localReveal = clamp((reveal - seed*0.4)/0.6, 0, 1);
        if (localReveal <= 0) return null;
        const mx = x1 + (x2-x1) * localReveal;
        const my = y1 + (y2-y1) * localReveal;
        return (
          <line key={i} x1={x1} y1={y1} x2={mx} y2={my}
            stroke={COLORS.gold} strokeWidth="0.6" opacity="0.55"/>
        );
      })}
      {nodes.map((n,i) => {
        const pulse = 0.7 + 0.3 * Math.sin(time*2 + n.phase);
        const op = clamp((reveal - i*0.05)*2, 0, 1);
        return (
          <g key={i} opacity={op}>
            <circle cx={n.x*width} cy={n.y*height} r={n.r * pulse * 1.8} fill={COLORS.goldHot} opacity="0.18"/>
            <circle cx={n.x*width} cy={n.y*height} r={n.r} fill={COLORS.goldHot}/>
          </g>
        );
      })}
    </svg>
  );
}

function CoordHud({ time, enter, exit }) {
  let opacity = 0;
  if (time > enter && time < exit) {
    const enterT = clamp((time - enter)/0.5, 0, 1);
    const exitT = clamp((time - exit + 0.5)/0.5, 0, 1);
    opacity = enterT * (1 - exitT);
  }
  // Slow drift values
  const lat = 22.296 + Math.sin(time*0.3)*0.004;
  const lon = 114.171 + Math.cos(time*0.27)*0.005;
  return (
    <div style={{
      position:'absolute', left:90, top:90, opacity,
      fontFamily:'JetBrains Mono, monospace',
      fontSize:11, color: COLORS.goldBright,
      letterSpacing:'0.16em', display:'flex', gap:18,
    }}>
      <span>{lat.toFixed(4)}°N</span>
      <span style={{color:COLORS.ivoryDim}}>{lon.toFixed(4)}°E</span>
      <span style={{color:COLORS.ivoryDim}}>VICTORIA HARBOUR · 03:42 HKT</span>
    </div>
  );
}

// ── Connection graph (gold lines linking building tops) ──────────────────

const NETWORK_TOPS = [
  // Pick spire/tall building tops in mid layer
  { x: 245,  y: 360, big: true  },   // 195+w/2=245, top y= 740-380=360
  { x: 675,  y: 280 },               // 620+55, top=280
  { x: 1131, y: 180, big: true  },   // 1066+65, top=180  (centerpiece)
  { x: 1669, y: 320 },               // 1614+55, top=320
  { x: 420,  y: 420 },               // 378+42, top=420
  { x: 956,  y: 500 },               // 912+32, top=500
  { x: 1326, y: 390 },               // 1283+45, top=390
];

function ConnectionGraph() {
  const time = useSceneTime();
  // Reveals 4.2 → 6.4
  const reveal = clamp((time - 4.2) / 1.4, 0, 1);
  const fadeOut = clamp((time - 6.6)/0.6, 0, 1);
  const overallOp = reveal * (1 - fadeOut);
  if (overallOp <= 0.01) return null;

  // Connections (pairs of indices). Star around centerpiece (2).
  const edges = [
    [2, 0], [2, 1], [2, 3], [2, 5], [2, 6],
    [0, 4], [3, 6], [1, 5], [4, 5],
  ];

  return (
    <svg width="1920" height="1080" style={{position:'absolute', inset:0, pointerEvents:'none'}}>
      <defs>
        <linearGradient id="connGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"  stopColor={COLORS.gold} stopOpacity="0"/>
          <stop offset="50%" stopColor={COLORS.goldHot} stopOpacity="1"/>
          <stop offset="100%" stopColor={COLORS.gold} stopOpacity="0"/>
        </linearGradient>
        <filter id="connGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5"/>
        </filter>
      </defs>
      {edges.map(([a,b], i) => {
        const A = NETWORK_TOPS[a], B = NETWORK_TOPS[b];
        // Curved line via Q control above midpoint
        const mx = (A.x+B.x)/2;
        const my = Math.min(A.y, B.y) - 60 - Math.abs(B.x-A.x)*0.08;
        const localReveal = clamp((reveal - i*0.06)*1.6, 0, 1);
        const eased = Easing.easeOutCubic(localReveal);
        const len = Math.hypot(B.x-A.x, B.y-A.y);
        return (
          <g key={i} opacity={overallOp * eased}>
            <path
              d={`M${A.x},${A.y} Q${mx},${my} ${B.x},${B.y}`}
              stroke={COLORS.gold} strokeWidth="1" fill="none"
              strokeDasharray={`${len}`}
              strokeDashoffset={`${(1-eased) * len}`}
              opacity="0.55"
              filter="url(#connGlow)"
            />
            <path
              d={`M${A.x},${A.y} Q${mx},${my} ${B.x},${B.y}`}
              stroke={COLORS.goldBright} strokeWidth="0.5" fill="none"
              strokeDasharray={`${len}`}
              strokeDashoffset={`${(1-eased) * len}`}
              opacity="0.9"
            />
          </g>
        );
      })}
      {NETWORK_TOPS.map((n,i) => {
        const localReveal = clamp((reveal - 0.2 - i*0.05)*2, 0, 1);
        const pulse = 0.85 + 0.15 * Math.sin(time*3 + i);
        const r = (n.big ? 5 : 3.2) * pulse;
        return (
          <g key={i} opacity={overallOp * localReveal}>
            <circle cx={n.x} cy={n.y} r={r*4} fill={COLORS.goldHot} opacity="0.10"/>
            <circle cx={n.x} cy={n.y} r={r*2.2} fill={COLORS.goldHot} opacity="0.22"/>
            <circle cx={n.x} cy={n.y} r={r} fill={COLORS.goldHot}/>
          </g>
        );
      })}
    </svg>
  );
}

// ── Brand reveal — DEVIEW ────────────────────────────────────────────────

function BrandReveal() {
  const time = useSceneTime();
  // appear 5.4, hold to 7.6, gentle fade at end for loop seam
  const enterLinear = clamp((time - 5.4) / 0.72, 0, 1);
  const exit = clamp((time - 7.5) / 0.48, 0, 1);
  const enterMotion = Easing.easeInOutCubic(enterLinear);
  const op = enterMotion * (1 - Easing.easeInCubic(exit));
  const slide = (1 - enterMotion) * 11;
  const lineGrow = Easing.easeInOutSine(enterLinear);

  if (op <= 0.001) return null;

  return (
    <div style={{
      position:'absolute',
      left:'50%', top:'58%',
      transform:`translate(-50%, calc(-50% + ${slide}px))`,
      textAlign:'center',
      opacity: op,
    }}>
      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 200,
        fontSize: 88,
        letterSpacing: '0.48em',
        color: COLORS.ivory,
        textShadow: '0 2px 18px rgba(184,168,255,0.30)',
        paddingLeft: '0.48em', // optical centering with tracking
      }}>
        DEVIEW
      </div>
      <div style={{
        margin: '18px auto 0',
        width: `${lineGrow * 280}px`,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${COLORS.goldBright}, transparent)`,
      }}/>
    </div>
  );
}

// ── Vignette + film grain ────────────────────────────────────────────────

function Vignette() {
  return (
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      background: 'radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)',
    }}/>
  );
}

function FilmGrain() {
  const time = useSceneTime();
  // shift the noise texture each frame for a 'film grain' feel
  const tx = Math.floor(Math.sin(time*40)*30);
  const ty = Math.floor(Math.cos(time*37)*30);
  return (
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.78  0 0 0 0 0.72  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
      backgroundSize: '240px 240px',
      backgroundPosition: `${tx}px ${ty}px`,
      opacity: 0.07,
      mixBlendMode: 'overlay',
    }}/>
  );
}

// ── Light leaks / lens glints (gentle warm highlights) ───────────────────

function LensGlints() {
  const time = useSceneTime();
  const globalFade = getGlobalFade(time);
  // Glints fade in around the time the city is mostly lit, fade out with the city
  const ramp = clamp((time - 2.0) / 1.6, 0, 1) * globalFade;
  // Two slowly drifting violet-blue bokeh-ish glows
  const x1 = 1200 + Math.sin(time*0.4) * 80;
  const y1 = 240 + Math.cos(time*0.35) * 40;
  const x2 = 400 + Math.cos(time*0.5 + 1) * 100;
  const y2 = 760 + Math.sin(time*0.45 + 1) * 50;
  return (
    <>
      <div style={{
        position:'absolute', left:x1-160, top:y1-160, width:320, height:320,
        background:'radial-gradient(circle, rgba(184,168,255,0.10) 0%, rgba(184,168,255,0) 70%)',
        pointerEvents:'none', mixBlendMode:'screen',
        opacity: ramp,
      }}/>
      <div style={{
        position:'absolute', left:x2-200, top:y2-200, width:400, height:400,
        background:'radial-gradient(circle, rgba(110,90,210,0.12) 0%, rgba(110,90,210,0) 70%)',
        pointerEvents:'none', mixBlendMode:'screen',
        opacity: ramp,
      }}/>
    </>
  );
}

export {
  Sky,
  Stars,
  AtmosphericHaze,
  FarSkyline,
  MidSkyline,
  Harbour,
  CameraDolly,
  BrandReveal,
  Vignette,
  FilmGrain,
  LensGlints,
};