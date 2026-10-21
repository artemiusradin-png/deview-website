"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import styles from "./solutions.module.css";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Short sign-up form for a solution page's gated asset. It posts to /api/lead-magnet with the
 * asset's `source`; on success it sets `accessKey` in sessionStorage and links to the guide.
 */
export function SolutionAssetForm({
  source,
  accessKey,
  guidePath,
}: {
  source: string;
  accessKey: string;
  guidePath: string;
}) {
  const { localePath } = useLocaleContext();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    if (String(fd.get("website") ?? "").trim()) {
      setStatus("done");
      return;
    }
    const email = String(fd.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name: String(fd.get("name") ?? "").trim(),
          email,
          company: String(fd.get("company") ?? "").trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok !== false) {
        try {
          sessionStorage.setItem(accessKey, "1");
        } catch {
          /* storage blocked: the success card still links to the guide */
        }
        setStatus("done");
      } else {
        setStatus("error");
        setError(
          data.error === "invalid_email"
            ? "Please enter a valid email address."
            : "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.formCard} role="status">
        <span className={styles.kicker}>You are in</span>
        <h3 className={styles.formTitle}>Your download is ready.</h3>
        <span className={styles.formNote}>
          Open it now, or bookmark this page to come back to it in this browser.
        </span>
        <div className={styles.formAction}>
          <Link href={localePath(guidePath)} className={styles.buttonDark}>
            Open the document <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <span className={styles.kicker}>Free download</span>
      <h3 className={styles.formTitle}>Get it on screen in a few seconds.</h3>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className={styles.honeypot}
        />
        <label className={styles.field}>
          Name
          <input type="text" name="name" autoComplete="name" />
        </label>
        <label className={styles.field}>
          Work email
          <input
            type="email"
            name="email"
            required
            inputMode="email"
            autoComplete="email"
            placeholder="name@company.com"
          />
        </label>
        <label className={styles.field}>
          Company
          <input type="text" name="company" autoComplete="organization" />
        </label>
        {status === "error" && error ? (
          <span className={styles.error} role="alert">
            {error}
          </span>
        ) : null}
        <button type="submit" className={styles.buttonDark} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get the document"}
          <span aria-hidden="true">↗</span>
        </button>
        <span className={styles.formNote}>
          No newsletter. We use your details to follow up once about the download, and you can
          ask us to delete them at any time.
        </span>
      </form>
    </div>
  );
}
