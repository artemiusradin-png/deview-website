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

const HERO_DURATION = 8;

/**
 * Full-viewport looping Hong Kong harbour hero from `New-Landing-Page`
 * (no editor playback bar; playhead not persisted).
 */
export function DeviewFirstVisitHero() {
  return (
    <Stage
      width={1920}
      height={1080}
      duration={HERO_DURATION}
      background="#06050a"
      loop
      autoplay
      persistKey="deview-first-visit-hero"
      persistPlayhead={false}
      showPlaybackBar={false}
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
