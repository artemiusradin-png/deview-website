"use client";

import { useSyncExternalStore } from "react";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(DARK_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const isDark = () => window.matchMedia(DARK_QUERY).matches;
const isDarkOnServer = () => false;

/**
 * The site's only favicon. Chrome renders an SVG favicon with the operating system's light/dark
 * setting, so with macOS in dark mode and Chrome in light mode a self-adapting mark turned white
 * on a light tab bar. The page sees the browser's own mode, so it serves the black or the white
 * file and follows changes live; the server HTML carries the black one.
 */
export function FaviconTheme() {
  const dark = useSyncExternalStore(subscribe, isDark, isDarkOnServer);
  return (
    <link
      rel="icon"
      type="image/svg+xml"
      sizes="any"
      href={dark ? "/icon-white.svg" : "/icon-black.svg"}
    />
  );
}
