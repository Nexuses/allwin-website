"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

export default function StickyHero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      const pin = pinRef.current;
      if (!pin) {
        ticking = false;
        return;
      }

      const next = pin.nextElementSibling as HTMLElement | null;
      if (!next) {
        ticking = false;
        return;
      }

      const heroHeight = pin.offsetHeight;
      const nextTop = next.getBoundingClientRect().top;
      const covered = Math.min(
        Math.max((heroHeight - nextTop) / heroHeight, 0),
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
  }, []);

  const scale = 1 - progress * 0.08;
  const opacity = 1 - progress * 0.5;
  const blur = progress * 8;

  return (
    <div ref={pinRef} className="sticky top-0 z-0 w-full isolate">
      <div
        className="w-full will-change-transform"
        style={{
          transform: `scale(${scale})`,
          opacity,
          filter: blur > 0.15 ? `blur(${blur}px)` : undefined,
          transformOrigin: "center center",
        }}
      >
        <Hero />
      </div>
    </div>
  );
}
