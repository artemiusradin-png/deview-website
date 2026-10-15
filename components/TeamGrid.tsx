"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLocaleContext } from "@/lib/i18n/locale-context";
import styles from "./team-grid.module.css";

/**
 * Per-photo framing for the team cards, so every face sits at a similar size and height
 * even though the source photos are cropped differently (focus = object-position).
 */
const PORTRAIT_CROPS: Record<string, { focus: string; zoom: number }> = {
  "/team/artemis-radin-800.webp": { focus: "50% 36%", zoom: 1.3 },
  "/team/eden-lam-800.webp": { focus: "50% 14%", zoom: 1 },
  "/team/mikhail-shishlenin-800.webp": { focus: "48% 18%", zoom: 1 },
  "/team/yevhen-lahodiuk-800.webp": { focus: "60% 16%", zoom: 1 },
  "/team/stepan-pashchenko-800.webp": { focus: "52% 30%", zoom: 1.1 },
  "/team/stanislav-dupllyakov-800.webp": { focus: "50% 14%", zoom: 1.75 },
  "/team/alberto-castineiras-800.webp": { focus: "50% 20%", zoom: 1.05 },
  "/team/yu-fu-kuo-800.webp": { focus: "50% 10%", zoom: 1 },
};

/**
 * The team as full-bleed portrait cards with the name set on the photo, closed by a "+N more"
 * tile for the people not listed. "strip" is five cards per row (landing page); "grid" is three
 * larger cards per row (About page). Portraits share a warm monochrome grade; hovering a card
 * brings back its colour and slides the bio up. On touch screens the "grid" variant prints the
 * bio under the photo instead.
 */
export function TeamGrid({ variant = "strip" }: { variant?: "strip" | "grid" }) {
  const { dict } = useLocaleContext();
  const { team } = dict.aboutPage;
  const leadName = `${dict.leadership.firstName} ${dict.leadership.lastName}`;
  const members = team.members.filter((member) => member.name);
  const unlisted = team.size - members.length;
  return (
    <ul
      className={styles.grid}
      data-variant={variant}
      aria-label="The DeView team"
    >
      {members.map((member, index) => {
        const crop = member.photo ? PORTRAIT_CROPS[member.photo] : undefined;
        const bio =
          member.name === leadName && variant === "strip"
            ? dict.leadership.description
            : member.bio;
        return (
          <li key={member.name} className={styles.member}>
            <div className={styles.card}>
              <div
                className={styles.portrait}
                style={
                  {
                    "--focus": crop?.focus,
                    "--zoom": crop?.zoom,
                  } as CSSProperties
                }
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    unoptimized
                    sizes={
                      variant === "grid"
                        ? "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        : "(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 300px"
                    }
                  />
                ) : (
                  <span>{member.initials}</span>
                )}
              </div>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.caption}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <div
                  className={styles.bio}
                  aria-hidden={variant === "grid" || undefined}
                >
                  <span>{bio}</span>
                </div>
              </div>
            </div>
            {variant === "grid" ? (
              <div className={styles.bioBelow}>{bio}</div>
            ) : null}
          </li>
        );
      })}
      {unlisted > 0 ? (
        <li className={`${styles.member} ${styles.more}`}>
          <div className={styles.moreCard}>
            <span className={styles.moreLabel}>{team.moreLabel}</span>
            <p className={styles.moreBody}>
              <strong>+{unlisted}</strong>
              <span>{team.moreBody}</span>
            </p>
          </div>
        </li>
      ) : null}
    </ul>
  );
}
