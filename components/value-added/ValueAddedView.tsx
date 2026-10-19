"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import { services } from "./content";

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

function ServiceRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrub(sectionRef);
  const active = Math.min(services.length - 1, Math.round(progress * (services.length - 1)));

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section ref={sectionRef} className="py-8 lg:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="sticky top-24 z-20 -mx-4 bg-[#F3EFE3]/95 px-4 py-3 backdrop-blur-sm lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => jumpTo(service.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    index === active ? "bg-[#1F4F4A] text-white" : "bg-white text-[#385445]"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
            <nav className="relative hidden lg:block" aria-label="Value-added services">
              <div className="absolute bottom-3 left-[14px] top-3 z-0 w-0.5 bg-[#A9C1B8]/70">
                <div className="w-full bg-[#55BBB0]" style={{ height: `${progress * 100}%` }} />
              </div>
              <ul className="relative z-10 space-y-1">
                {services.map((service, index) => {
                  const current = index === active;
                  return (
                    <li key={service.id}>
                      <button
                        type="button"
                        onClick={() => jumpTo(service.id)}
                        className={`flex w-full items-start gap-3 rounded-xl px-2 py-2 text-left transition-colors ${
                          current ? "text-[#1F4F4A]" : "text-[#26332F]/45 hover:text-[#385445]"
                        }`}
                      >
                        <span
                          className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-colors ${
                            current ? "border-[#55BBB0] bg-[#55BBB0]" : "border-[#A9C1B8] bg-[#F3EFE3]"
                          }`}
                        />
                        <span className={`font-inter text-sm leading-snug ${current ? "font-semibold" : "font-medium"}`}>
                          {service.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-8">
          {services.map((service, index) => {
            const current = index === active;
            return (
              <Reveal key={service.id} delay={index * 40}>
              <article
                id={service.id}
                className={`scroll-mt-28 rounded-[2rem] p-6 transition-all duration-500 sm:p-8 ${
                  current
                    ? "bg-[#1F4F4A] text-white shadow-[0_18px_40px_rgba(85,187,176,0.28)]"
                    : "bg-white text-[#385445] shadow-xs hover:shadow-[0_18px_40px_rgba(85,187,176,0.28)]"
                }`}
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    current ? "bg-[#55BBB0] text-[#1F4F4A]" : "bg-[#55BBB0]/15 text-[#1F4F4A]"
                  }`}
                >
                  <Icon name={service.icon} className="text-[24px]" />
                </span>
                <h2 className="font-manrope text-2xl font-bold tracking-tight sm:text-3xl">{service.title}</h2>
                <p className={`mt-3 font-inter leading-relaxed ${current ? "text-white/85" : "text-[#26332F]/85"}`}>
                  {service.text}
                </p>
                {service.detail ? (
                  <div className={`mt-5 rounded-2xl p-5 ${current ? "bg-white/10" : "bg-[#F3EFE3]"}`}>
                    <h3 className="font-manrope text-lg font-bold">{service.detail.title}</h3>
                    <p className={`mt-2 font-inter text-sm leading-relaxed ${current ? "text-white/80" : "text-[#26332F]/80"}`}>
                      {service.detail.text}
                    </p>
                  </div>
                ) : null}
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ValueAddedView() {
  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      <section className="relative overflow-hidden bg-[#1F4F4A] text-white">
        <div
          className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#55BBB0]">
            Beyond finance
          </p>
          <h1 className="max-w-4xl font-manrope text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Value-Added Services: Property, Business Setup &amp; Investment Advice in the UAE
          </h1>
          <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-white/80 sm:text-xl">
            Expert support that goes beyond finance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
        <Reveal className="lg:col-span-5">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">More Than Finance</h2>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <p className="font-inter text-base leading-relaxed text-[#26332F]/85 sm:text-lg">
            Moving to the UAE, buying property or starting a business involves more than a loan. We guide you through the extra steps and connect you with trusted partners where needed.
          </p>
        </Reveal>
      </section>

      <ServiceRail />

      <section className="pb-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <Reveal>
          <p className="font-inter text-sm leading-relaxed text-[#26332F]/70">
            Some services are provided through licensed third-party partners.
          </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div
            className="rounded-[2rem] px-6 py-14 text-center text-white sm:px-12"
            style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)" }}
          >
            <h2 className="mb-4 font-manrope text-3xl font-bold tracking-tight sm:text-4xl">
              Need Help With More Than Finance?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-inter text-white/90">
              Tell us what you are planning and we will point you to the right support.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
