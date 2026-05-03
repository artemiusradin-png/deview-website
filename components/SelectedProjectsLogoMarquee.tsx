"use client";

import Image from "next/image";

const CLIENT_LOGOS = [
  {
    name: "EVDEV",
    src: "/client-logos/evdev.svg",
    width: 96,
    height: 19,
  },
  {
    name: "Fizkultura",
    src: "/client-logos/fizkultura.png",
    width: 118,
    height: 79,
  },
  {
    name: "Nextair",
    src: "/client-logos/nextair.png",
    width: 104,
    height: 100,
  },
  {
    name: "Grand Finance Group",
    src: "/client-logos/grandfg-white.png",
    width: 266,
    height: 62,
  },
];

const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export function SelectedProjectsLogoMarquee() {
  return (
    <section
      aria-labelledby="selected-project-logos-title"
      className="selected-project-logos relative overflow-hidden bg-[var(--background)] py-10 md:py-14"
    >
      <div className="section-gutter mx-auto w-full max-w-6xl">
        <p id="selected-project-logos-title" className="section-label">
          SELECTED PROJECTS
        </p>
      </div>

      <div className="selected-project-logos__stage mt-8" aria-hidden="true">
        <div className="selected-project-logos__plane">
          <div className="selected-project-logos__track">
            {MARQUEE_LOGOS.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="selected-project-logos__item"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className={[
                    "selected-project-logos__image",
                    logo.name === "Nextair" ? "selected-project-logos__image--nextair" : "",
                    logo.name === "Grand Finance Group" ? "selected-project-logos__image--grandfg" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ width: "auto", height: "auto" }}
                  sizes="(max-width: 768px) 200px, 320px"
                />
                {logo.name === "Nextair" ? (
                  <span className="selected-project-logos__wordmark">NEXTAIR</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only">
        Selected projects: {CLIENT_LOGOS.map((logo) => logo.name).join(", ")}.
      </p>
    </section>
  );
}
