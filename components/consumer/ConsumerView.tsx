"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import FAQ from "@/components/sections/FAQ";
import { applicants, consumerFaqs, products } from "./content";

const HERO =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/businessman-using-smartphone-calculator-with-banking-financial-holographic-icons-digital-financial-management-concept.jpg";

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

function ProductStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrub(sectionRef);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduced) {
    return (
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-8 font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
            Our Consumer Finance Products
          </h2>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="theme-card h-full rounded-[2rem] border border-[#A9C1B8]/70 bg-white p-7 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]"
              >
                <span className="icon-chip mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#55BBB0]/15 text-[#1F4F4A]">
                  <Icon name={product.icon} className="text-[24px]" />
                </span>
                <h3 className="mb-3 font-manrope text-2xl font-bold text-[#385445]">{product.title}</h3>
                <p className="font-inter leading-relaxed text-[#26332F]/85">{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const index = progress * (products.length - 1);

  return (
    <section ref={sectionRef} className="relative h-[240vh]">
      <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-center">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1F4F4A]">Products</p>
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
              Our Consumer Finance Products
            </h2>
            <div className="mt-8 flex gap-2">
              {products.map((product, i) => (
                <span
                  key={product.title}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    Math.round(index) === i ? "w-8 bg-[#55BBB0]" : "w-3 bg-[#A9C1B8]"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative h-[min(420px,calc(100svh-9rem))] lg:col-span-8">
            {products.map((product, i) => {
              const delta = i - index;
              const behind = Math.max(delta, 0);
              const passed = Math.min(delta, 0);
              const opacity = passed < -0.4 ? Math.max(0, 1 + (passed + 0.4) * 2.2) : 1;
              const front = delta < 0.45 && delta > -0.55;
              return (
                <article
                  key={product.title}
                  className={`absolute inset-0 flex flex-col justify-center rounded-[2rem] p-7 text-white shadow-[0_24px_60px_rgba(31,79,74,0.16)] sm:p-10 ${
                    i % 2 === 0 ? "bg-[#1F4F4A]" : "bg-[#385445]"
                  } ${front ? "hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]" : ""}`}
                  style={{
                    zIndex: front ? 20 : 10 - i,
                    pointerEvents: front ? "auto" : "none",
                    opacity,
                    transform: `translateY(calc(${passed * 110}% + ${behind * 16}px)) scale(${1 - behind * 0.04})`,
                  }}
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#55BBB0] text-[#1F4F4A]">
                    <Icon name={product.icon} className="text-[24px]" />
                  </span>
                  <h3 className="mb-3 font-manrope text-2xl font-bold tracking-tight sm:text-3xl">{product.title}</h3>
                  <p className="max-w-2xl font-inter leading-relaxed text-white/85">{product.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ConsumerView() {
  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      <section className="relative overflow-hidden bg-[#1F4F4A] text-white">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
        />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#55BBB0]">
              Consumer finance
            </p>
            <h1 className="mb-5 font-manrope text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Personal Loans, Car Finance &amp; Credit Cards in the UAE
            </h1>
            <p className="mb-8 max-w-2xl font-inter text-lg leading-relaxed text-white/80 sm:text-xl">
              Simple personal finance with trusted support, for salaried and self-employed people.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#55BBB0] px-7 py-3.5 font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20AA45]"
            >
              Compare My Options
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div className="relative h-[320px] sm:h-[420px] lg:col-span-5">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src={HERO}
                alt="Person comparing personal loan and credit card options on a phone in the UAE"
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
            Personal Finance Made Simple
          </h2>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <p className="font-inter text-base leading-relaxed text-[#26332F]/85 sm:text-lg">
            We help salaried employees, self-employed professionals and staff of listed and non-listed companies in the UAE find the right personal finance. We compare options so you can choose clear terms that fit your budget.
          </p>
        </Reveal>
      </section>

      <ProductStack />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <Reveal className="mb-8 max-w-2xl">
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">Who Can Apply?</h2>
          </Reveal>
          <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {applicants.map((item) => (
              <article
                key={item.title}
                className="theme-card group flex h-full flex-col rounded-[2rem] bg-[#1F4F4A] p-6 text-white transition-all duration-300 hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)] sm:p-7"
              >
                <span className="icon-chip mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#55BBB0]/15 text-[#55BBB0]">
                  <Icon name={item.icon} className="text-[24px]" />
                </span>
                <h3 className="font-manrope text-xl font-bold leading-snug">{item.title}</h3>
              </article>
            ))}
          </div>
          <p className="mt-6 font-inter text-sm text-[#26332F]/70">
            Eligibility always depends on each bank’s rules.
          </p>
        </div>
      </section>

      <FAQ
        eyebrow="FAQ"
        title="Personal Finance FAQs"
        intro="A clear answer before you compare personal loans, car finance and credit cards."
        items={consumerFaqs}
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div
            className="rounded-[2rem] px-6 py-14 text-center text-white sm:px-12"
            style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)" }}
          >
            <h2 className="mb-4 font-manrope text-3xl font-bold tracking-tight sm:text-4xl">
              Find the Right Finance for You
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-inter text-white/90">
              Tell us what you need and we will help you compare your options.
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
        </div>
      </section>
    </div>
  );
}
