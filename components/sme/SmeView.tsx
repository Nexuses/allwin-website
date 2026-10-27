"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import FAQ from "@/components/sections/FAQ";
import { services, smeFaqs, steps } from "./content";
import WhoWeHelp from "./WhoWeHelp";

const HERO =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/midsection-colleagues-analyzing-graphs-desk.jpg";

function useScrub(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      const element = ref.current;
      if (!element) return;
      const total = element.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-element.getBoundingClientRect().top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 1);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

function ServiceStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrub(sectionRef);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduced) {
    return (
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-8">
            Our Business Finance Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4 auto-rows-fr">
            {services.map((service) => (
              <article
                key={service.title}
                className="theme-card h-full rounded-[2rem] bg-white border border-[#A9C1B8]/70 p-7 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]"
              >
                <span className="icon-chip mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#55BBB0]/15 text-[#1F4F4A]">
                  <Icon name={service.icon} className="text-[24px]" />
                </span>
                <h3 className="font-manrope text-2xl font-bold text-[#385445] mb-3">{service.title}</h3>
                <p className="font-inter text-[#26332F]/85 leading-relaxed">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const index = progress * (services.length - 1);

  return (
    <section ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1F4F4A]">Services</p>
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
              Our Business Finance Services
            </h2>
            <p className="mt-4 max-w-sm font-inter leading-relaxed text-[#26332F]/75">
              Five ways we can fund and support your business. Keep scrolling to explore each one.
            </p>
            <p className="mt-6 font-manrope text-sm font-bold tracking-widest text-[#1F4F4A]">
              0{Math.round(index) + 1} <span className="text-[#A9C1B8]">/ 0{services.length}</span>
            </p>
            <div className="mt-3 flex gap-2">
              {services.map((service, i) => (
                <span
                  key={service.title}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    Math.round(index) === i ? "w-8 bg-[#55BBB0]" : "w-3 bg-[#A9C1B8]"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative h-[min(360px,calc(100svh-13rem))] lg:col-span-8">
            {services.map((service, i) => {
              const delta = i - index;
              const behind = Math.max(delta, 0);
              const passed = Math.min(delta, 0);
              const opacity = passed < -0.4 ? Math.max(0, 1 + (passed + 0.4) * 2.2) : 1;
              const front = delta < 0.45 && delta > -0.55;
              return (
                <article
                  key={service.title}
                  className={`theme-card absolute inset-0 flex flex-col rounded-[2rem] p-5 text-white shadow-[0_24px_60px_rgba(31,79,74,0.16)] transition-shadow duration-300 sm:p-8 ${
                    i % 2 === 0 ? "bg-[#1F4F4A]" : "bg-[#385445]"
                  } ${front ? "hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]" : ""}`}
                  style={{
                    zIndex: front ? 20 : 10 - i,
                    pointerEvents: front ? "auto" : "none",
                    opacity,
                    transform: `translateY(calc(${passed * 110}% + ${behind * 16}px)) scale(${1 - behind * 0.04})`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#55BBB0] text-[#1F4F4A]">
                      <Icon name={service.icon} className="text-[24px]" />
                    </span>
                    <span aria-hidden="true" className="font-manrope text-5xl font-bold leading-none text-white/15">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-3 font-manrope text-2xl font-bold tracking-tight sm:text-3xl">{service.title}</h3>
                    <p className="max-w-2xl font-inter leading-relaxed text-white/85">{service.text}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/15 pt-5">
                    <span className="font-inter text-xs font-semibold uppercase tracking-wider text-white/60">
                      Service 0{i + 1} of 0{services.length}
                    </span>
                    <a
                      href="/contact"
                      tabIndex={front ? 0 : -1}
                      className="inline-flex shrink-0 items-center gap-1.5 font-inter text-sm font-semibold text-[#55BBB0] transition-colors hover:text-white"
                    >
                      Talk to an advisor
                      <Icon name="arrow_forward" className="text-[18px]" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = steps.length;
    if (reduced) {
      setActive(0);
      if (lineRef.current) lineRef.current.style.width = "0%";
      return;
    }

    const segment = 3000;
    const hold = 3000;
    const cycle = segment * (count - 1) + hold;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) % cycle;
      let nextActive = 0;
      let line = 0;

      if (elapsed >= segment * (count - 1)) {
        nextActive = count - 1;
        line = 1;
      } else {
        nextActive = Math.floor(elapsed / segment);
        const local = (elapsed % segment) / segment;
        line = (nextActive + local) / (count - 1);
      }

      if (lineRef.current) lineRef.current.style.width = `${line * 100}%`;
      setActive((current) => (current === nextActive ? current : nextActive));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <Reveal>
        <h2 className="mb-14 text-center font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
          How It Works
        </h2>
        </Reveal>
        <Reveal delay={80}>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[21px] hidden h-[2px] bg-[#E7E4DE] sm:block">
            <div
              ref={lineRef}
              className="h-full origin-left"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, #0C665C 0%, #20AA45 55%, #55BBB0 100%)",
              }}
            />
          </div>
          {steps.map((step, index) => {
            const current = index === active;
            return (
              <article key={step.title} className="relative z-10 text-center">
                <div
                  className={`mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 ${
                    current ? "bg-[#1F4F4A] text-white" : "border border-[#E6E6E6] bg-white text-[#C8C8C8]"
                  }`}
                >
                  {current ? <Icon name="check" className="text-[22px]" /> : <span className="font-inter text-sm">{index + 1}</span>}
                </div>
                <h3
                  className={`mb-2 font-manrope text-base leading-snug transition-colors duration-500 ${
                    current ? "font-bold text-[#1A1A1A]" : "font-medium text-[#C5C5C5]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`font-inter text-sm leading-relaxed transition-colors duration-500 ${
                    current ? "text-[#4A4A4A]" : "text-[#D0D0D0]"
                  }`}
                >
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function SmeView() {
  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      <section className="relative overflow-hidden bg-[#1F4F4A] text-white">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
        />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 pt-[144px] pb-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:pt-[176px] lg:pb-24">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#55BBB0]">
              Business finance
            </p>
            <h1 className="mb-5 font-manrope text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              SME &amp; Corporate Lending in the UAE
            </h1>
            <p className="mb-8 max-w-2xl font-inter text-lg leading-relaxed text-white/80 sm:text-xl">
              Business finance made simple, with tailored lending options and trusted bank partners.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#55BBB0] px-7 py-3.5 font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20AA45]"
            >
              Talk to a Business Finance Advisor
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div className="relative h-[320px] sm:h-[420px] lg:col-span-5">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src={HERO}
                alt="Business owners discussing SME loan options with a finance advisor in Dubai"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 460px, 90vw"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
        <Reveal className="lg:col-span-5">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
            Smart Lending for Growing Businesses
          </h2>
        </Reveal>
        <Reveal delay={80} className="space-y-4 lg:col-span-7">
          <p className="font-inter text-base leading-relaxed text-[#26332F]/85 sm:text-lg">
            SME and corporate lending is finance for businesses of all sizes, from small and medium-sized enterprises (SMEs) to large corporations. Banks and other lenders provide these loans to fund growth, working capital, equipment, inventory and day-to-day operations.
          </p>
          <p className="font-inter text-base leading-relaxed text-[#26332F]/85 sm:text-lg">
            We help you understand your options and find the right product from our bank partners.
          </p>
        </Reveal>
      </section>

      <ServiceStack />

      <WhoWeHelp />

      <ProcessLine />

      <FAQ
        eyebrow="FAQ"
        title="Business Finance FAQs"
        intro="Clear answers about business lending in the UAE."
        items={smeFaqs}
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div
            className="rounded-[2rem] px-6 py-14 text-center text-white sm:px-12"
            style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)" }}
          >
            <h2 className="mb-4 font-manrope text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-inter text-white/90">
              Tell us what you need and we will help you find the right business finance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <p className="mx-auto mt-8 max-w-2xl font-inter text-sm text-white/80">
              Rates, eligibility and approval depend on each bank’s policies and your personal profile. AllWin Finances cannot guarantee approval.
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
