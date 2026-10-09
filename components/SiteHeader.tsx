"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import styles from "./site-header.module.css";

/** Set when the wordmark is clicked, so the header on the page it opens plays the sweep too. */
const FLASH_KEY = "deview-wordmark-flash";

/** Restarts the yellow sweep over the wordmark (a CSS animation keyed on a class). */
function playWordmarkFlash(element: HTMLElement | null) {
  if (!element) return;
  element.classList.remove(styles.flash);
  void element.offsetWidth;
  element.classList.add(styles.flash);
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  const { localePath } = useLocaleContext();
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);
  const wordmark = useRef<HTMLAnchorElement>(null);
  const close = () => setOpenPath(null);

  useEffect(() => {
    try {
      const clickedAt = Number(window.sessionStorage.getItem(FLASH_KEY));
      window.sessionStorage.removeItem(FLASH_KEY);
      if (Date.now() - clickedAt < 3000) playWordmarkFlash(wordmark.current);
    } catch {
      // Storage can be unavailable (private mode); the sweep then plays only on the clicked page.
    }
  }, []);
  const links = [
    { label: "What we do", href: localePath("/services") },
    { label: "Our work", href: localePath("/case-studies") },
    { label: "How we work", href: localePath("/how-we-work") },
    { label: "About us", href: localePath("/about") },
    { label: "Insights", href: localePath("/insights") },
  ];
  return (
    <header
      className={styles.header}
      data-fixed={!home}
      data-overlay={home}
      data-menu-open={menuOpen}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          close();
          menuButton.current?.focus();
        }
      }}
    >
      <div className={styles.inner}>
        <Link
          ref={wordmark}
          href={localePath("")}
          className={styles.wordmark}
          aria-label="DeView home"
          onClick={() => {
            close();
            playWordmarkFlash(wordmark.current);
            if (pathname === localePath("")) return;
            try {
              window.sessionStorage.setItem(FLASH_KEY, String(Date.now()));
            } catch {
              // See the effect above.
            }
          }}
        >
          DEVIEW
        </Link>
        <span className={styles.note}>
          AI solutions.
          <br />
          Software. Data.
        </span>
        <nav
          id="site-navigation"
          className={styles.navigation}
          data-open={menuOpen}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              aria-current={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={localePath("/contact")}
            className={styles.contact}
            onClick={close}
          >
            Let’s talk{" "}
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                d="M7 25 25 7M7 7h18v18"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </nav>
        <button
          ref={menuButton}
          type="button"
          className={styles.menu}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setOpenPath(menuOpen ? null : pathname)}
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
        </button>
      </div>
    </header>
  );
}
