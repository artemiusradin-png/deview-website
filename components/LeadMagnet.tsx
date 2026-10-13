"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import styles from "./lead-magnet.module.css";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Sign-up page for a gated guide: what is inside on the left, a short form on the right.
 * On success it sets `accessKey` in sessionStorage and links to `guidePath`.
 * The `source` must be listed in GUIDES in app/api/lead-magnet/route.ts.
 */
export function LeadMagnetSignup({
  source,
  accessKey,
  guidePath,
  kicker,
  title,
  lead,
  inside,
  tags,
  industryOptions,
}: {
  source: string;
  accessKey: string;
  guidePath: string;
  kicker: string;
  title: string;
  lead: string;
  inside: string[];
  tags?: string[];
  industryOptions?: string[];
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
          industry: String(fd.get("industry") ?? "").trim(),
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

  return (
    <section className={`${styles.container} ${styles.signup}`}>
      <div>
        <span className={styles.kicker}>{kicker}</span>
        <h1 className={styles.signupTitle}>{title}</h1>
        <span className={styles.lead}>{lead}</span>
        <ul className={styles.inside}>
          {inside.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {tags?.length ? (
          <ul className={styles.industries} aria-label="Covers">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className={styles.formCard}>
        {status === "done" ? (
          <div role="status">
            <span className={styles.kicker}>You are in</span>
            <h2 className={styles.formTitle}>Your guide is ready.</h2>
            <span className={styles.formNote}>
              Open it now, or bookmark the page to come back to it in this browser.
            </span>
            <div className={styles.successAction}>
              <Link href={localePath(guidePath)} className={styles.button}>
                Open the guide <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <span className={styles.kicker}>Get the guide</span>
            <h2 className={styles.formTitle}>Free, and on screen in a few seconds.</h2>
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
              {industryOptions?.length ? (
                <label className={styles.field}>
                  Your industry
                  <select name="industry" defaultValue="">
                    <option value="">Choose one</option>
                    {industryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}
              {status === "error" && error ? (
                <span className={styles.error} role="alert">
                  {error}
                </span>
              ) : null}
              <button type="submit" className={styles.button} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Get the guide"}
                <span aria-hidden="true">↗</span>
              </button>
              <span className={styles.formNote}>
                No newsletter. We use your details to follow up once about the guide, and you can
                ask us to delete them at any time.
              </span>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

const subscribe = () => () => {};

/**
 * Shows the guide only after a sign-up in this browser session; otherwise sends the visitor
 * back to the sign-up page. Crawlers see the loading line, so guides stay out of the sitemap.
 */
export function GatedGuide({
  accessKey,
  signupPath,
  children,
}: {
  accessKey: string;
  signupPath: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const { localePath } = useLocaleContext();
  const access = useSyncExternalStore<boolean | null>(
    subscribe,
    () => {
      try {
        return sessionStorage.getItem(accessKey) === "1";
      } catch {
        return false;
      }
    },
    () => null,
  );

  useEffect(() => {
    if (access === false) router.replace(localePath(signupPath));
  }, [access, router, localePath, signupPath]);

  if (!access) {
    return <div className={styles.loading}>Opening the guide…</div>;
  }
  return <>{children}</>;
}
