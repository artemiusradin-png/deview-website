"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import {
  INDUSTRY_OFFERS,
  PLAYBOOK_ACCESS_KEY,
  PLAYBOOK_GUIDE_PATH,
} from "@/lib/workflow-offers";
import styles from "./playbook.module.css";

const INSIDE = [
  "The three workflows worth automating first in each of five industries.",
  "What a typical build includes, module by module.",
  "Where AI does the preparation, and where your experts stay in charge.",
  "Three questions to check whether your own process is ready.",
];

type Status = "idle" | "sending" | "done" | "error";

export default function AutomationPlaybookPage() {
  const { localePath } = useLocaleContext();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);

    // Bots fill the hidden field; pretend it worked and send nothing.
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
          source: "automation-playbook",
          name: String(fd.get("name") ?? "").trim(),
          email,
          company: String(fd.get("company") ?? "").trim(),
          industry: String(fd.get("industry") ?? "").trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && data.ok !== false) {
        try {
          sessionStorage.setItem(PLAYBOOK_ACCESS_KEY, "1");
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
    <>
      <main className={styles.page}>
        <section className={`${styles.container} ${styles.signup}`}>
          <div>
            <span className={styles.kicker}>Free playbook</span>
            <h1 className={styles.signupTitle}>
              Where automation pays off first.
            </h1>
            <span className={styles.lead}>
              A practical playbook for lending, ventilation, agriculture,
              construction and oil and gas companies: the workflows worth
              automating first, how they work step by step, and what stays with
              your people.
            </span>
            <ul className={styles.inside}>
              {INSIDE.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.industries} aria-label="Industries covered">
              {INDUSTRY_OFFERS.map((industry) => (
                <li key={industry.id}>{industry.name}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formCard}>
            {status === "done" ? (
              <div role="status">
                <span className={styles.kicker}>You are in</span>
                <h2 className={styles.formTitle}>Your playbook is ready.</h2>
                <span className={styles.formNote}>
                  Open it now, or bookmark the page to come back to it in this
                  browser.
                </span>
                <div className={styles.successAction}>
                  <Link
                    href={localePath(PLAYBOOK_GUIDE_PATH)}
                    className={styles.button}
                  >
                    Open the playbook <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <span className={styles.kicker}>Get the playbook</span>
                <h2 className={styles.formTitle}>
                  Free, and on screen in a few seconds.
                </h2>
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
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                    />
                  </label>
                  <label className={styles.field}>
                    Your industry
                    <select name="industry" defaultValue="">
                      <option value="">Choose one</option>
                      {INDUSTRY_OFFERS.map((industry) => (
                        <option key={industry.id} value={industry.name}>
                          {industry.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  {status === "error" && error ? (
                    <span className={styles.error} role="alert">
                      {error}
                    </span>
                  ) : null}
                  <button
                    type="submit"
                    className={styles.button}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Get the playbook"}
                    <span aria-hidden="true">↗</span>
                  </button>
                  <span className={styles.formNote}>
                    No newsletter. We use your details to follow up once about
                    the playbook, and you can ask us to delete them at any time.
                  </span>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
