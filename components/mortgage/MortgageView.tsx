"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import FAQ from "@/components/sections/FAQ";
import StickyStack from "@/components/sections/StickyStack";
import PartnerLogoMarquee from "@/components/sections/PartnerLogoMarquee";
import {
  commercialOptions,
  equityUses,
  insightArticles,
  keyFeatures,
  mortgageFaqs,
  moreOptions,
  processSteps,
  refinanceBenefits,
} from "./content";

const gridOverlay =
  "linear-gradient(to right, rgba(243,239,227,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,227,0.12) 1px, transparent 1px)";

function QuoteForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = email.trim()
      ? `?email=${encodeURIComponent(email.trim())}`
      : "";
    window.location.href = `/contact${query}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-lg flex-col gap-2.5 sm:flex-row sm:items-stretch"
    >
      <label className="sr-only" htmlFor="mortgage-email">
        Email address
      </label>
      <input
        id="mortgage-email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="h-12 w-full flex-1 rounded-full border border-[#A9C1B8]/70 bg-white px-5 font-inter text-sm text-[#26332F] outline-none transition placeholder:text-[#26332F]/40 focus:border-[#55BBB0] focus:ring-2 focus:ring-[#55BBB0]/30"
      />
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#1F4F4A] px-6 font-manrope text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C665C]"
      >
        Get a free quote
      </button>
    </form>
  );
}

const HERO_IMAGE =
  "https://assets.nexuses.xyz/Collaborative_discussion_in_a_warm_wooden_interior_1794824072698_7nsi.png";

function ProcessRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [lineReady, setLineReady] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveCount(processSteps.length);
      setLineReady(true);
      return;
    }

    let timers: number[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setLineReady(true);
        processSteps.forEach((_, index) => {
          timers.push(
            window.setTimeout(() => {
              setActiveCount(index + 1);
            }, 180 + index * 280),
          );
        });
      },
      { threshold: 0.28 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F7F8F6] py-16 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
            How our mortgage process works
          </h2>
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-[2px] overflow-hidden lg:block"
          >
            <div
              className="h-full origin-left border-t border-dashed border-[#A9C1B8] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: lineReady ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const shown = index < activeCount;
              return (
                <article
                  key={step.title}
                  className={`relative flex flex-col items-center text-center transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    shown
                      ? "translate-y-0 scale-100 opacity-100 blur-0"
                      : "translate-y-8 scale-[0.96] opacity-0 blur-[2px]"
                  }`}
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8DED6] text-[#1F4F4A] shadow-[0_8px_24px_rgba(31,79,74,0.08)]">
                    <Icon name={step.icon} className="text-[26px]" />
                  </div>
                  <h3 className="mt-5 max-w-[16ch] font-manrope text-base font-bold tracking-tight text-[#26332F] sm:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[22ch] font-inter text-sm leading-relaxed text-[#26332F]/65">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticlesRow() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({
      left: dir * Math.min(340, node.clientWidth * 0.85),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <Reveal>
            <h2 className="max-w-[14ch] font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Read our next article
            </h2>
          </Reveal>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous articles"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A9C1B8]/70 text-[#1F4F4A] transition hover:bg-[#F3EFE3]"
            >
              <Icon name="arrow_back" className="text-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Next articles"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A9C1B8]/70 text-[#1F4F4A] transition hover:bg-[#F3EFE3]"
            >
              <Icon name="arrow_forward" className="text-[18px]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {insightArticles.map((article, index) => (
            <Reveal
              key={article.title}
              delay={index * 60}
              className="w-[78%] shrink-0 sm:w-[280px]"
            >
              <a href={article.href} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#A9C1B8]/40 bg-[#F3EFE3]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-manrope text-lg font-bold leading-snug text-[#385445]">
                      {article.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-[#26332F]/65">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MortgageView() {
  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-[112px] sm:pt-[128px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pb-20">
          <div>
            <h1 className="max-w-[15ch] font-manrope text-[2.5rem] font-bold leading-[1.08] tracking-tight text-[#385445] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Mortgage advice designed for{" "}
              <span className="text-[#0C665C]">modern UAE living</span>.
            </h1>
            <p className="mt-5 max-w-md font-inter text-base leading-relaxed text-[#26332F]/70 sm:text-lg">
              Islamic and conventional home loans, refinancing and equity
              release — compared across UAE banks in plain language.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={HERO_IMAGE}
              alt="Mortgage advisors in a collaborative discussion"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 536px, 90vw"
              preload
            />
          </div>
        </div>
      </section>

      <PartnerLogoMarquee />

      <StickyStack
        pin={
          <section className="bg-[#F3EFE3] py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
              <Reveal>
                <h2 className="mx-auto max-w-[18ch] text-center font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
                  Set yourself free from mortgage confusion.
                </h2>
              </Reveal>

              <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2">
                <Reveal>
                  <article className="overflow-hidden rounded-[1.5rem] border border-[#A9C1B8]/40 bg-white p-6 shadow-[0_18px_40px_rgba(31,79,74,0.08)] sm:p-8">
                    <div className="relative mb-8 flex min-h-[220px] items-end justify-center">
                      <div className="absolute left-1/2 top-4 h-36 w-[78%] -translate-x-1/2 rotate-[-6deg] rounded-2xl bg-[#1F4F4A] shadow-lg" />
                      <div className="absolute left-1/2 top-10 h-36 w-[78%] -translate-x-1/2 rotate-[4deg] rounded-2xl bg-[#0C665C] shadow-lg" />
                      <div className="relative w-[78%] rounded-2xl bg-white p-5 shadow-[0_18px_40px_rgba(31,79,74,0.14)]">
                        <p className="font-inter text-xs text-[#26332F]/50">
                          New purchase
                        </p>
                        <p className="mt-1 font-manrope text-3xl font-bold tracking-tight text-[#385445]">
                          Home loans
                        </p>
                        <p className="mt-2 font-inter text-sm text-[#26332F]/65">
                          Islamic &amp; conventional · UAE banks
                        </p>
                      </div>
                    </div>
                    <h3 className="font-manrope text-xl font-bold text-[#385445] sm:text-[1.35rem]">
                      Clear guidance for your first — or next — property purchase
                    </h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-[15px]">
                      Whether you are buying your first home or investing, we
                      compare lenders, explain documents and guide you to approval
                      with confidence.
                    </p>
                  </article>
                </Reveal>

                <Reveal delay={80}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-[#A9C1B8]/40 bg-white p-6 shadow-[0_18px_40px_rgba(31,79,74,0.08)] sm:p-8">
                    <div className="mb-8 rounded-2xl bg-[#F3EFE3] p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="font-manrope text-sm font-semibold text-[#385445]">
                          Refinance outlook
                        </p>
                        <span className="rounded-full bg-[#E8F5F2] px-2.5 py-1 font-inter text-[11px] font-medium text-[#0C665C]">
                          AED / month
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white p-3">
                          <p className="font-inter text-[11px] text-[#26332F]/50">
                            Current
                          </p>
                          <p className="mt-1 font-manrope text-lg font-bold text-[#385445]">
                            12,400
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#E8F5F2] p-3">
                          <p className="font-inter text-[11px] text-[#0C665C]">
                            After buyout
                          </p>
                          <p className="mt-1 font-manrope text-lg font-bold text-[#0C665C]">
                            10,850
                          </p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-1.5">
                        {refinanceBenefits.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 font-inter text-xs text-[#26332F]/70"
                          >
                            <Icon
                              name="check_circle"
                              className="mt-0.5 shrink-0 text-[14px] text-[#20AA45]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h3 className="font-manrope text-xl font-bold text-[#385445] sm:text-[1.35rem]">
                      Refinance when the numbers work harder for you
                    </h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-[15px]">
                      We check rates across lenders, surface fees early and help
                      you decide whether a mortgage buyout is worth it.
                    </p>
                  </article>
                </Reveal>
              </div>
            </div>
          </section>
        }
        overlay={
          <section className="relative overflow-hidden rounded-t-[2rem] bg-[#1F4F4A] py-16 shadow-[0_-24px_80px_rgba(12,40,38,0.35)] sm:rounded-t-[2.5rem] lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
                <Reveal>
                  <h2 className="max-w-[16ch] font-manrope text-3xl font-bold tracking-tight text-[#F3EFE3] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                    Key features of our mortgage advisory
                  </h2>
                </Reveal>
                <Reveal delay={60}>
                  <p className="max-w-md font-inter text-sm leading-relaxed text-[#F3EFE3]/75 sm:text-base lg:justify-self-end">
                    AllWin Finances compares options from leading UAE banks and
                    stays with you from the first question to final approval — so
                    you can focus on the property, not the paperwork.
                  </p>
                </Reveal>
              </div>

              <div className="mt-10">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  {keyFeatures.map((feature, index) => (
                    <Reveal key={feature.title} delay={index * 70} className="h-full">
                      <article className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[1.5rem] border border-transparent bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#55BBB0] hover:shadow-[0_22px_48px_rgba(85,187,176,0.28)] sm:min-h-[240px] sm:p-7">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#E8EEEA] to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#55BBB0]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        />
                        <div className="relative">
                          <h3 className="font-manrope text-xl font-bold tracking-tight text-[#1F4F4A] transition-colors duration-300 group-hover:text-[#0C665C] sm:text-[1.35rem]">
                            {feature.title}
                          </h3>
                          <p className="mt-3 max-w-[36ch] font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-[15px]">
                            {feature.text}
                          </p>
                        </div>
                        <div className="relative mt-auto flex items-end justify-between pt-8">
                          <span
                            className="font-manrope text-5xl font-bold leading-none tracking-tight text-transparent transition-transform duration-300 group-hover:scale-105 sm:text-6xl"
                            style={{ WebkitTextStroke: "1.5px #55BBB0" }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F4F4A] text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-[#0C665C] group-hover:shadow-[0_10px_24px_rgba(12,102,92,0.35)]">
                            <Icon name={feature.icon} className="text-[22px]" />
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        }
      />

      {/* More ways — with icons */}
      <section className="bg-[#F3EFE3] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-[16ch] font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
              More ways to finance property
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreOptions.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="group h-full rounded-[1.5rem] border border-[#A9C1B8]/45 bg-white p-6 shadow-[0_12px_30px_rgba(31,79,74,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(31,79,74,0.12)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F4F4A] text-white">
                    <Icon name={item.icon} className="text-[22px]" />
                  </div>
                  <h3 className="font-manrope text-lg font-bold text-[#385445]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-[#26332F]/65">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {moreOptions.slice(3).map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="group h-full rounded-[1.5rem] border border-[#A9C1B8]/45 bg-white p-6 shadow-[0_12px_30px_rgba(31,79,74,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(31,79,74,0.12)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F4F4A] text-white">
                    <Icon name={item.icon} className="text-[22px]" />
                  </div>
                  <h3 className="font-manrope text-lg font-bold text-[#385445]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-[#26332F]/65">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StickyStack
        pin={
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto grid max-w-[1200px] gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
              <Reveal>
                <article className="h-full rounded-[1.5rem] border border-[#A9C1B8]/40 bg-[#F3EFE3] p-7 sm:p-8">
                  <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0C665C]">
                    Equity release
                  </p>
                  <h3 className="mt-3 font-manrope text-3xl font-bold tracking-tight text-[#385445]">
                    Unlock value you already own
                  </h3>
                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#26332F]/65">
                    Access cash from the equity in your property as a lump sum or
                    in stages — with clear guidance on what lenders expect.
                  </p>
                  <ul className="mt-5 space-y-2">
                    {equityUses.map((use) => (
                      <li
                        key={use}
                        className="flex gap-2 font-inter text-sm text-[#26332F]/75"
                      >
                        <Icon
                          name="check_circle"
                          className="mt-0.5 shrink-0 text-[16px] text-[#20AA45]"
                        />
                        {use}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
              <Reveal delay={80}>
                <article
                  className="relative h-full overflow-hidden rounded-[1.5rem] p-7 text-white sm:p-8"
                  style={{
                    background:
                      "linear-gradient(145deg, #1F4F4A 0%, #0C665C 100%)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: gridOverlay,
                      backgroundSize: "44px 44px",
                    }}
                  />
                  <div className="relative">
                    <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55BBB0]">
                      Non-resident
                    </p>
                    <h3 className="mt-3 font-manrope text-3xl font-bold tracking-tight">
                      Mortgages for buyers abroad
                    </h3>
                    <p className="mt-3 font-inter text-sm leading-relaxed text-white/80">
                      Getting a loan as a non-resident can be tricky, but it is
                      possible. We explain requirements, organise documents and
                      compare rates, loan amounts and repayment periods that
                      could work for you.
                    </p>
                    <a
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-manrope text-sm font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
                    >
                      Talk to an advisor
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </section>
        }
        overlay={
          <section className="relative overflow-hidden rounded-t-[2rem] bg-[#EEF3F0] py-16 shadow-[0_-24px_80px_rgba(12,40,38,0.2)] sm:rounded-t-[2.5rem] lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
              <Reveal className="mx-auto max-w-2xl text-center">
                <p className="mx-auto inline-flex rounded-full border border-[#1F4F4A]/25 px-3.5 py-1 font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1F4F4A]">
                  Commercial
                </p>
                <h2 className="mt-5 font-manrope text-3xl font-bold tracking-tight text-[#26332F] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  Commercial &amp; building finance
                </h2>
                <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-base">
                  From residential builds to warehouses and commercial mortgages,
                  we source lenders and manage the process without the confusion.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:gap-5">
                {commercialOptions.map((option, index) => {
                  const tone =
                    index === 1 || index === 2
                      ? index === 1
                        ? "dark"
                        : "sage"
                      : "light";

                  return (
                    <Reveal
                      key={option.title}
                      delay={index * 70}
                      className="h-full"
                    >
                      <article
                        className={`group flex h-full flex-col rounded-[1.75rem] border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#55BBB0] sm:p-7 ${
                          tone === "dark"
                            ? "bg-[#1F4F4A] text-white hover:shadow-[0_22px_48px_rgba(85,187,176,0.25)]"
                            : tone === "sage"
                              ? "bg-[#C5D5CC] text-[#26332F] hover:shadow-[0_22px_48px_rgba(85,187,176,0.22)]"
                              : "bg-white text-[#26332F] shadow-[0_12px_32px_rgba(31,79,74,0.06)] hover:shadow-[0_22px_48px_rgba(85,187,176,0.22)]"
                        }`}
                      >
                        <div
                          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 ${
                            tone === "dark"
                              ? "bg-[#55BBB0]/25 text-[#55BBB0] group-hover:bg-[#55BBB0]/40"
                              : "bg-[#1F4F4A]/10 text-[#20AA45] group-hover:bg-[#1F4F4A] group-hover:text-white"
                          }`}
                        >
                          <Icon name={option.icon} className="text-[26px]" />
                        </div>
                        <h3
                          className={`font-manrope text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl ${
                            tone === "dark"
                              ? "text-white"
                              : "text-[#1F4F4A] group-hover:text-[#0C665C]"
                          }`}
                        >
                          {option.title}
                        </h3>
                        <p
                          className={`mt-3 flex-1 font-inter text-sm leading-relaxed ${
                            tone === "dark"
                              ? "text-white/75"
                              : "text-[#26332F]/65"
                          }`}
                        >
                          {option.text}
                        </p>
                        <a
                          href="/contact"
                          className={`mt-6 inline-flex w-fit items-center gap-1.5 border-b pb-0.5 font-manrope text-sm font-semibold transition-colors ${
                            tone === "dark"
                              ? "border-white/50 text-white group-hover:border-[#55BBB0] group-hover:text-[#55BBB0]"
                              : "border-[#1F4F4A]/40 text-[#1F4F4A] group-hover:border-[#0C665C] group-hover:text-[#0C665C]"
                          }`}
                        >
                          Talk to a specialist
                        </a>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        }
      />

      <ProcessRoadmap />

      {/* CTA */}
      <section className="bg-[#F3EFE3] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[1.75rem] px-7 py-14 sm:px-12 sm:py-16 lg:px-16"
              style={{
                background:
                  "linear-gradient(135deg, #0C665C 0%, #1F4F4A 48%, #132926 100%)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-35"
                style={{
                  backgroundImage: gridOverlay,
                  backgroundSize: "52px 52px",
                }}
              />
              <div className="relative grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="max-w-[14ch] font-manrope text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                    Ready to talk about your mortgage?
                  </h2>
                  <p className="mt-4 max-w-md font-inter text-sm leading-relaxed text-white/80 sm:text-base">
                    Call, WhatsApp or request a free quote. Our team compares
                    options and explains every step in plain language.
                  </p>
                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
                  >
                    Get a free quote
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                  <p className="mt-6 max-w-md font-inter text-xs leading-relaxed text-white/55">
                    Rates, eligibility and approval depend on each bank’s
                    policies and your personal profile. AllWin Finances cannot
                    guarantee approval.
                  </p>
                </div>

                <div className="relative mx-auto h-[240px] w-full max-w-[420px] lg:h-[280px]">
                  <div className="absolute left-0 top-8 w-[70%] rotate-[-8deg] rounded-2xl bg-white p-5 shadow-2xl">
                    <p className="font-inter text-[11px] text-[#26332F]/45">
                      AllWin · Purchase
                    </p>
                    <p className="mt-2 font-manrope text-2xl font-bold text-[#385445]">
                      AED 3.8M
                    </p>
                    <p className="mt-1 font-inter text-xs text-[#26332F]/55">
                      Indicative loan amount
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-0 w-[72%] rotate-[7deg] rounded-2xl bg-[#E8F5F2] p-5 shadow-2xl">
                    <p className="font-inter text-[11px] text-[#0C665C]">
                      AllWin · Refinance
                    </p>
                    <p className="mt-2 font-manrope text-2xl font-bold text-[#385445]">
                      From 4.49%*
                    </p>
                    <p className="mt-1 font-inter text-xs text-[#26332F]/55">
                      Sample illustration only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ArticlesRow />

      <FAQ
        title="Frequently asked questions"
        intro="Straight answers about brokers, Islamic finance and getting started in the UAE."
        items={mortgageFaqs}
      />
    </div>
  );
}
