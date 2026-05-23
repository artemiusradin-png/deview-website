"use client";

import { Stage } from "./intro-animation-stage";
import {
  AtmosphericHaze,
  BrandReveal,
  CameraDolly,
  FarSkyline,
  FilmGrain,
  Harbour,
  LensGlints,
  MidSkyline,
  Sky,
  Stars,
  Vignette,
} from "./hk-hero-scene";
import { INTRO_WALL_DURATION } from "./intro-scene-timing";

const HERO_DURATION = INTRO_WALL_DURATION;

type Props = {
  /** Called once when the non-looping timeline reaches the end (like a video ending). */
  onEnded?: () => void;
};

/**
 * Full-viewport Hong Kong harbour scene (HTML canvas timeline + JSON-driven sprites).
 * Used for the first-visit intro: plays once, no playback chrome.
 */
export function DeviewFirstVisitHero({ onEnded }: Props) {
  return (
    <Stage
      width={1920}
      height={1080}
      duration={HERO_DURATION}
      background="#06050a"
      loop={false}
      autoplay
      persistKey="deview-first-visit-hero"
      persistPlayhead={false}
      showPlaybackBar={false}
      onEnded={onEnded}
      disableKeyboardShortcuts
    >
      <Sky />
      <Stars />
      <CameraDolly duration={HERO_DURATION}>
        <FarSkyline />
        <AtmosphericHaze />
        <MidSkyline />
        <Harbour />
      </CameraDolly>
      <LensGlints />
      <BrandReveal />
      <Vignette />
      <FilmGrain />
    </Stage>
  );
}
