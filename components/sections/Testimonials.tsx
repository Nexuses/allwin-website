"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const testimonials = [
  {
    quote:
      "AllWin Finances helped me navigate my first home loan with ease. Their team was knowledgeable and genuinely cared about my needs.",
    name: "Raj Mehta",
    location: "Dubai",
    role: "Home buyer",
  },
  {
    quote:
      "From comparing rates to final approval, the process was smooth and stress-free.",
    name: "Emily Chen",
    location: "Abu Dhabi",
    role: "Property investor",
  },
  {
    quote: "They found me a better rate than my own bank. Highly recommended!",
    name: "Sarah Thompson",
    location: "Sharjah",
    role: "Refinance client",
  },
];

const AUTO_MS = 4500;
const FLIP_MS = 720;

/** Resting stack depth from front (0) → back (2) */
const STACK = [
  { rotate: 0, scale: 1, y: 0, z: 30, opacity: 1 },
  { rotate: 5, scale: 0.96, y: 14, z: 20, opacity: 0.88 },
  { rotate: -6, scale: 0.92, y: 26, z: 10, opacity: 0.72 },
] as const;

const glassCard =
  "rounded-2xl border border-white/25 bg-white/15 shadow-[0_20px_50px_rgba(12,50,45,0.28)] backdrop-blur-xl";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stackReady, setStackReady] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<1 | -1>(1);
  const [exitId, setExitId] = useState<number | null>(null);
  const [suppressTransitionFor, setSuppressTransitionFor] = useState<number | null>(
    null,
  );
  const count = testimonials.length;
  const reduceMotion = useRef(false);
  const lockRef = useRef(false);
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.requestAnimationFrame(() => setStackReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const flipTo = useCallback(
    (direction: -1 | 1, nextIndex?: number) => {
      if (lockRef.current) return;

      const current = indexRef.current;
      const target =
        typeof nextIndex === "number"
          ? nextIndex
          : (current + direction + count) % count;
      if (target === current) return;

      if (reduceMotion.current) {
        setIndex(target);
        return;
      }

      lockRef.current = true;
      setFlipDir(direction);
      setExitId(current);
      setFlipping(true);

      window.setTimeout(() => {
        setSuppressTransitionFor(current);
        setIndex(target);
        setFlipping(false);
        setExitId(null);
        lockRef.current = false;
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => setSuppressTransitionFor(null));
        });
      }, FLIP_MS);
    },
    [count],
  );

  const go = useCallback(
    (direction: -1 | 1) => {
      flipTo(direction);
    },
    [flipTo],
  );

  const goTo = useCallback(
    (next: number) => {
      if (next === indexRef.current || lockRef.current) return;
      const forward = (next - indexRef.current + count) % count;
      const backward = (indexRef.current - next + count) % count;
      flipTo(forward <= backward ? 1 : -1, next);
    },
    [count, flipTo],
  );

  useEffect(() => {
    if (paused || reduceMotion.current || flipping) return;

    const id = window.setInterval(() => {
      flipTo(1);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, flipping, flipTo]);

  return (
    <section className="relative w-full overflow-hidden rounded-t-[2rem] bg-[#1F4F4A] py-12 shadow-[0_-24px_80px_rgba(12,40,38,0.35)] sm:rounded-t-[2.5rem] lg:py-16">
      <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-6 lg:px-10">
        <Reveal>
          <p className="mb-3 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F3EFE3]/90 backdrop-blur-sm">
            Testimonials
          </p>
          <h2 className="mx-auto max-w-3xl font-manrope text-3xl font-bold tracking-tight text-[#F3EFE3] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-inter text-sm leading-relaxed text-[#F3EFE3]/85 sm:text-base">
            Real stories from people across the UAE who trusted AllWin Finances
            with their mortgage and finance goals.
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-10">
          <div
            className="flex items-center justify-center gap-3 sm:gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              disabled={flipping}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#F3EFE3] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 disabled:opacity-50 sm:h-12 sm:w-12"
            >
              <Icon name="chevron_left" className="text-[26px]" />
            </button>

            <div
              className="relative h-[300px] w-full max-w-[520px] sm:h-[280px]"
              style={{ perspective: "1400px" }}
              aria-live="polite"
            >
              {testimonials.map((item, i) => {
                const depth = (i - index + count) % count;
                const layer = STACK[depth as 0 | 1 | 2];
                const isFront = depth === 0;
                const isExiting = flipping && exitId === i;
                const skipTransition = suppressTransitionFor === i;

                let pose = layer;
                if (flipping && !isExiting && flipDir === 1) {
                  // Mid and back cards step forward while the front flips away
                  pose = STACK[Math.max(0, depth - 1) as 0 | 1 | 2];
                } else if (flipping && !isExiting && flipDir === -1 && depth === count - 1) {
                  // Incoming card from the back rises to the front
                  pose = STACK[0];
                }

                let transform = `translateY(${pose.y}px) rotateZ(${pose.rotate}deg) scale(${pose.scale})`;
                let opacity = pose.opacity;
                let zIndex = pose.z;

                if (isExiting) {
                  const lift = flipDir === 1 ? -160 : 130;
                  const flipX = flipDir === 1 ? -100 : 85;
                  transform = `translateY(${lift}px) rotateX(${flipX}deg) rotateZ(${flipDir * 10}deg) scale(0.88)`;
                  opacity = 0.25;
                  zIndex = 60;
                }

                const showContent =
                  isFront ||
                  isExiting ||
                  (flipping && flipDir === -1 && depth === count - 1);

                return (
                  <article
                    key={item.name}
                    aria-hidden={!isFront && !isExiting}
                    className={`absolute inset-x-0 top-10 mx-auto flex min-h-[210px] w-full max-w-[480px] flex-col p-5 text-left sm:min-h-[200px] sm:p-6 ${glassCard} ${
                      stackReady && !skipTransition
                        ? "origin-center transition-[transform,opacity] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        : ""
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      transform,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      transitionDuration:
                        stackReady && !skipTransition ? `${FLIP_MS}ms` : "0ms",
                      pointerEvents: isFront && !flipping ? "auto" : "none",
                    }}
                  >
                    {showContent ? (
                      <>
                        <p className="font-inter text-[15px] leading-relaxed text-[#F3EFE3] sm:text-base sm:leading-7">
                          “{item.quote}”
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#55BBB0] font-manrope text-sm font-bold text-[#1F4F4A]">
                            {initials(item.name)}
                          </span>
                          <div>
                            <p className="font-manrope text-sm font-bold text-white">
                              {item.name}
                            </p>
                            <p className="font-inter text-xs text-[#F3EFE3]/75">
                              {item.role} · {item.location}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              disabled={flipping}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#F3EFE3] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 disabled:opacity-50 sm:h-12 sm:w-12"
            >
              <Icon name="chevron_right" className="text-[26px]" />
            </button>
          </div>

          <div
            className="mt-5 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => goTo(i)}
                disabled={flipping}
                className={`h-1.5 rounded-full transition-all duration-300 disabled:opacity-50 ${
                  i === index ? "w-7 bg-[#55BBB0]" : "w-2.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={140} className="mt-8 sm:mt-10">
          <p className="mb-4 font-inter text-sm text-[#F3EFE3]/85">
            Ready to find a clearer path to finance?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#55BBB0] px-8 py-3.5 font-semibold uppercase tracking-wide text-[#1F4F4A] shadow-[0_12px_32px_rgba(85,187,176,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20AA45] hover:text-white"
          >
            Get Free Consultation
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
