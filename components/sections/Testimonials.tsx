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

/** Stack depth from front (0) → back (2) */
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
  // Avoid animating cards from default → stack on first paint (looks like overlap)
  const [stackReady, setStackReady] = useState(false);
  const count = testimonials.length;
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.requestAnimationFrame(() => setStackReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + count) % count);
    },
    [count],
  );

  const goTo = useCallback((next: number) => {
    setIndex(next);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, count, index]);

  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, #0C665C 0%, #1F4F4A 28%, #20AA45 58%, #55BBB0 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(85,187,176,0.55), transparent 68%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(243,239,227,0.9) 0.8px, transparent 0.8px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-6 lg:px-10">
        <Reveal>
          <p className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F3EFE3]/90 backdrop-blur-sm">
            Testimonials
          </p>
          <h2 className="mx-auto max-w-3xl font-manrope text-3xl font-bold tracking-tight text-[#F3EFE3] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-[#F3EFE3]/85 sm:text-base">
            Real stories from people across the UAE who trusted AllWin Finances
            with their mortgage and finance goals.
          </p>
        </Reveal>

        {/*
          Do not wrap the stack in Reveal — parent opacity/transform on
          translucent glass cards makes them look overlapped on first appear.
          Stack animation (autoplay / arrows) is unchanged.
        */}
        <div className="mt-12 sm:mt-14">
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
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#F3EFE3] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:h-12 sm:w-12"
            >
              <Icon name="chevron_left" className="text-[26px]" />
            </button>

            <div
              className="relative h-[300px] w-full max-w-[520px] sm:h-[280px]"
              aria-live="polite"
            >
              {testimonials.map((item, i) => {
                // 0 = front, 1 = mid, 2 = back — cards physically move on index change
                const depth = (i - index + count) % count;
                const layer = STACK[depth as 0 | 1 | 2];
                const isFront = depth === 0;

                return (
                  <article
                    key={item.name}
                    aria-hidden={!isFront}
                    className={`absolute inset-x-0 top-0 mx-auto flex min-h-[240px] w-full max-w-[480px] flex-col p-6 text-left sm:min-h-[230px] sm:p-8 ${glassCard} ${
                      stackReady
                        ? "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        : ""
                    }`}
                    style={{
                      zIndex: layer.z,
                      opacity: layer.opacity,
                      transform: `translateY(${layer.y}px) rotate(${layer.rotate}deg) scale(${layer.scale})`,
                      pointerEvents: isFront ? "auto" : "none",
                    }}
                  >
                    {/* Text only on the front card — back cards stay glass shells */}
                    {isFront ? (
                      <>
                        <p className="font-inter text-[15px] leading-relaxed text-[#F3EFE3] sm:text-base sm:leading-7">
                          “{item.quote}”
                        </p>
                        <div className="mt-6 flex items-center gap-3">
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
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#F3EFE3] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:h-12 sm:w-12"
            >
              <Icon name="chevron_right" className="text-[26px]" />
            </button>
          </div>

          <div
            className="mt-6 flex items-center justify-center gap-2"
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
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-[#55BBB0]" : "w-2.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={140} className="mt-12 sm:mt-14">
          <p className="mb-5 font-inter text-sm text-[#F3EFE3]/85">
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
