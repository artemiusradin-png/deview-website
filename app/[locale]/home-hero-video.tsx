"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";

/** Mounted only after the finished hero video is supplied to HomeContent. */
export function HeroBackgroundVideo({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    // Plays only while on screen and in a visible tab; reduced-motion visitors see the poster.
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [src]);

  return (
    <div
      className={styles.heroMedia}
      aria-hidden="true"
      data-ready={(ready || Boolean(poster)) && !failed}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        disablePictureInPicture
        onLoadedData={() => setReady(true)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
