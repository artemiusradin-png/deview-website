"use client";

import { useEffect } from "react";

export function ThemeSync() {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("deview-theme");
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    document.documentElement.dataset.theme = theme;
  }, []);

  return null;
}
