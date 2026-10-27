"use client";

import { useEffect, useRef } from "react";

type SilentCaseVideoProps = {
  src: string;
  poster: string;
  className?: string;
  playOnHover?: boolean;
};

/** A decorative case-study film that can never expose an audio track or sound UI. */
export function SilentCaseVideo({
  src,
  poster,
  className,
  playOnHover = false,
}: SilentCaseVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (playOnHover) {
      const target = video.closest("article") ?? video.parentElement ?? video;

      const handlePlay = () => {
        if (reducedMotion.matches) return;
        void video.play().catch(() => undefined);
      };

      const handlePause = () => {
        video.pause();
      };

      target.addEventListener("mouseenter", handlePlay);
      target.addEventListener("mouseleave", handlePause);
      target.addEventListener("focusin", handlePlay);
      target.addEventListener("focusout", handlePause);

      return () => {
        target.removeEventListener("mouseenter", handlePlay);
        target.removeEventListener("mouseleave", handlePause);
        target.removeEventListener("focusin", handlePlay);
        target.removeEventListener("focusout", handlePause);
        video.pause();
      };
    }

    const updatePlayback = (isVisible: boolean) => {
      if (reducedMotion.matches || !isVisible) {
        video.pause();
        return;
      }
      void video.play().catch(() => undefined);
    };

    let visible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        updatePlayback(visible);
      },
      { threshold: 0.18 },
    );
    const handleMotionChange = () => updatePlayback(visible);

    observer.observe(video);
    reducedMotion.addEventListener("change", handleMotionChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      video.pause();
    };
  }, [playOnHover]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
      aria-hidden="true"
      tabIndex={-1}
      data-silent-case-video
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
