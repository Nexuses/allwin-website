"use client";

import { useLayoutEffect } from "react";

function isReload() {
  const entry = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return entry?.type === "reload";
}

export function pinToHero() {
  if (location.hash) {
    history.replaceState(null, "", location.pathname + location.search);
  }
  window.scrollTo(0, 0);
}

export default function ScrollToHero() {
  useLayoutEffect(() => {
    if (!isReload()) return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    pinToHero();
    const frame = requestAnimationFrame(pinToHero);
    const timer = window.setTimeout(pinToHero, 0);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
