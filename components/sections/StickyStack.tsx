"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type StickyStackProps = {
  pin: ReactNode;
  overlay: ReactNode;
  className?: string;
  overlayClassName?: string;
  /** Extra scroll space under the pin before the overlay covers it (include bg class). */
  dwellClassName?: string;
};

export default function StickyStack({
  pin,
  overlay,
  className = "",
  overlayClassName = "",
  dwellClassName = "",
}: StickyStackProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      const pinEl = pinRef.current;
      const overlayEl = overlayRef.current;
      if (!pinEl || !overlayEl) {
        ticking = false;
        return;
      }

      const pinHeight = pinEl.offsetHeight;
      const overlayTop = overlayEl.getBoundingClientRect().top;
      const covered = Math.min(
        Math.max((pinHeight - overlayTop) / pinHeight, 0),
        1,
      );

      setProgress(covered);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  const pinScale = reduceMotion ? 1 : 1 - progress * 0.06;
  const pinOpacity = reduceMotion ? 1 : 1 - progress * 0.45;
  const pinBlur = reduceMotion ? 0 : progress * 7;

  const enter = reduceMotion ? 1 : Math.min(Math.max(progress / 0.28, 0), 1);
  const easeEnter = 1 - Math.pow(1 - enter, 3);
  const overlayY = reduceMotion ? 0 : (1 - easeEnter) * 56;
  const overlayOpacity = reduceMotion ? 1 : 0.35 + easeEnter * 0.65;

  return (
    <div className={`relative ${className}`.trim()}>
      <div ref={pinRef} className="sticky top-0 z-0 w-full isolate">
        <div
          className="w-full will-change-transform"
          style={{
            transform: `scale(${pinScale})`,
            opacity: pinOpacity,
            filter: pinBlur > 0.15 ? `blur(${pinBlur}px)` : undefined,
            transformOrigin: "center center",
          }}
        >
          {pin}
          {dwellClassName ? (
            <div aria-hidden="true" className={dwellClassName} />
          ) : null}
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`relative z-10 will-change-transform ${overlayClassName}`.trim()}
        style={{
          transform: `translate3d(0, ${overlayY}px, 0)`,
          opacity: overlayOpacity,
        }}
      >
        {overlay}
      </div>
    </div>
  );
}
