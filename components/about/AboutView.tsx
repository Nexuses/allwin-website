"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import Reveal from "./Reveal";

function StickyCover({ children }: { children: React.ReactNode }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const update = () => {
      const pin = pinRef.current;
      const next = pin?.nextElementSibling as HTMLElement | null;
      if (!pin || !next) return;
      const covered = Math.min(
        Math.max((pin.offsetHeight - next.getBoundingClientRect().top) / pin.offsetHeight, 0),
        1,
      );
      setProgress(covered);
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
  }, []);

  return (
    <div ref={pinRef} className="sticky top-0 z-0">
      <div
        className="will-change-transform"
        style={{
          transform: `scale(${1 - progress * 0.06})`,
          opacity: 1 - progress * 0.4,
          filter: progress > 0.05 ? `blur(${progress * 6}px)` : undefined,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtZT39uMrOzvhqQuy0mYnL_69NroPhn_MXs1uib68T_JcdMr0-9jqs-AKJrZbLr7H7ZPHkjuBaOyeya8O4zlAmqFEX8EfZ1ofVoZCJZdULGAm0uyp_W4sm8AWOauiTRqsuzce4c_LG_45VCfe3GonXld39FhTR_j8jK5JNBDdBEysTiswku9Rum_7ZJXm8QqjpeTIHfxgLtBME6qH_iFtbdyXaa5ZlLNTelF7ojSk05rulWEfGjhX";

const LEADERSHIP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB51E08sqpKpZ_DmbjQ1Kre5Tbr2ihcw7AkZexhCdDN2u9V4zEwJ_NxdPpLByOQM1qdeAnWHNgNX5IHAfMdK9BxjmdBymLr6yMbvp7oUaihX9C5oRZI7F5k-xp9PWL1U_8KsU-CHp_qJylSV85Buzas6WgjrsCdcf5WYdUtg_Sy0mzegAX1mJVGL-fupbsnh6eaIOpAbLRsRk_9oo8MZNsyODSQ5nufju0Nd3YCFhlRwcop4tWyz4oN";

const expertise = [
  { icon: "payments", label: "Consumer finance" },
  { icon: "account_tree", label: "Product structuring" },
  { icon: "trending_up", label: "Sales" },
  { icon: "verified_user", label: "Anti-money laundering (AML)" },
  { icon: "gavel", label: "Regulatory compliance" },
  { icon: "apartment", label: "Mortgage, SME and corporate finance" },
];

const approach = [
  {
    icon: "handshake",
    title: "Honest advice",
    text: "We tell you what is realistic and explain the pros and cons of each option.",
  },
  {
    icon: "chat",
    title: "Plain language",
    text: "We explain rates, fees and paperwork in simple words, so you always know where you stand.",
  },
  {
    icon: "person_check",
    title: "Solutions made for you",
    text: "We match each mortgage or finance product to your goals, budget and profile.",
  },
];

const achievements = [
  { value: 500, suffix: "+", label: "Clients Supported" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Of Combined Experience" },
  { value: 20, suffix: "+", label: "Achievements" },
];

const teamSlots = ["Director", "Director", "Management"];

export default function AboutView() {
  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      <div className="relative">
      <StickyCover>
      <section className="relative overflow-hidden bg-[#1F4F4A] text-white min-h-[calc(100svh-5rem)] flex items-center">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #20AA45, transparent 70%)" }}
        />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#55BBB0] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#20AA45] animate-pulse" />
              About us
            </p>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
              About AllWin Finances
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
              Expert finance advice built on real banking experience
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px]">
            <div className="absolute right-0 top-6 w-[72%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={PORTRAIT}
                alt="AllWin Finances advisory"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 70vw"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[48%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1F4F4A]">
              <Image
                src={LEADERSHIP}
                alt="AllWin Finances leadership"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 240px, 40vw"
              />
            </div>
          </div>
        </div>
      </section>
      </StickyCover>

      <div className="relative z-10">
      <section className="bg-[#F3EFE3] rounded-t-[2.5rem] shadow-[0_-28px_80px_rgba(0,0,0,0.28)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">
              Who we are
            </p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-5">
              Who We Are
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 space-y-5">
            <p className="font-inter text-base sm:text-lg text-[#26332F]/85 leading-relaxed">
              AllWin Finances is a mortgage and finance advisory based in
              Business Bay, Dubai. We help individuals, families, investors and
              businesses find the right finance from banks and financial
              institutions across the UAE.
            </p>
            <p className="font-manrope text-xl sm:text-2xl font-semibold text-[#1F4F4A] leading-snug">
              We don&apos;t just offer loans. We offer clarity, comfort and
              confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">
              Experience
            </p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-4">
              Decades of Banking Experience
            </h2>
            <p className="font-inter text-[#26332F]/80 leading-relaxed">
              Our team brings together decades of combined experience in
              international and local banking. Our expertise includes:
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="group h-full rounded-2xl border border-[#A9C1B8]/70 bg-[#F3EFE3] p-5 flex items-center gap-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[#55BBB0]">
                  <span className="w-12 h-12 rounded-xl bg-[#1F4F4A] text-[#55BBB0] flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-[#20AA45] group-hover:text-white">
                    <Icon name={item.icon} className="text-[24px]" />
                  </span>
                  <h3 className="font-manrope font-semibold text-[#385445]">
                    {item.label}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">
              Approach
            </p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight">
              How We Work
            </h2>
          </Reveal>
          <div className="relative max-w-3xl mx-auto">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="sticky rounded-3xl p-7 sm:p-9 border border-[#A9C1B8]/50 shadow-[0_18px_50px_rgba(31,79,74,0.12)] mb-6 min-h-[240px]"
                style={{
                  top: 108 + index * 22,
                  zIndex: index + 1,
                  background: index === 2 ? "#1F4F4A" : index === 1 ? "#F3EFE3" : "#ffffff",
                  color: index === 2 ? "#ffffff" : "#385445",
                }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: index === 2 ? "rgba(85,187,176,0.2)" : "rgba(85,187,176,0.18)",
                    color: index === 2 ? "#55BBB0" : "#1F4F4A",
                  }}
                >
                  <Icon name={item.icon} className="text-[24px]" />
                </span>
                <h3 className="font-manrope text-2xl font-bold mb-3">{item.title}</h3>
                <p
                  className="font-inter text-sm sm:text-base leading-relaxed"
                  style={{ color: index === 2 ? "rgba(255,255,255,0.82)" : "rgba(38,51,47,0.8)" }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F4F4A] text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#55BBB0] mb-3">
              Team
            </p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Meet Our Team
            </h2>
            <p className="font-inter text-white/80 leading-relaxed">
              Our directors and management team are seasoned bankers with
              extensive international experience in mortgage, SME and corporate
              finance. What sets them apart is their passion for putting that
              knowledge to work for you.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {teamSlots.map((role, index) => (
              <Reveal key={`${role}-${index}`} delay={index * 90}>
                <article className="rounded-3xl bg-white/5 border border-white/10 p-4 h-full transition-transform duration-500 hover:-translate-y-1">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#385445] to-[#0C665C] mb-4 flex items-end p-4">
                    <Icon name="person" className="text-[42px] text-white/70" />
                  </div>
                  <h3 className="font-manrope font-bold">{role}</h3>
                  <p className="font-inter text-sm text-white/60 mt-1">
                    Photo, name, title and a short bio will be added here.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <article className="h-full rounded-3xl bg-white border border-[#A9C1B8]/60 p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">
                Banks
              </p>
              <h2 className="font-manrope text-3xl font-bold text-[#385445] tracking-tight mb-4">
                Our Bank Partners
              </h2>
              <p className="font-inter text-[#26332F]/80 leading-relaxed">
                We work with leading conventional and Islamic banks across the
                UAE, so you can compare more options in one place.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="h-full rounded-3xl border border-dashed border-[#1F4F4A]/40 bg-[#F3EFE3] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">
                Trust
              </p>
              <h2 className="font-manrope text-3xl font-bold text-[#385445] tracking-tight mb-4">
                Licences &amp; Registration
              </h2>
              <p className="font-inter text-[#26332F]/80 leading-relaxed">
                Company licence number, regulator registration and industry
                memberships will be listed here.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#26332F] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight">
              Our Achievements
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((item) => (
              <div key={item.label} className="text-center">
                <CountUp
                  end={item.value}
                  suffix={item.suffix}
                  className="font-manrope text-4xl sm:text-5xl font-bold text-[#55BBB0] block"
                />
                <p className="font-inter text-sm text-white/70 mt-2 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div
              className="rounded-[2rem] px-6 py-14 sm:px-12 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)",
              }}
            >
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Let&apos;s Talk About Your Goals
              </h2>
              <p className="font-inter text-white/90 max-w-xl mx-auto mb-8">
                Call us, message us on WhatsApp or request a free quote. We are
                happy to help.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1F4F4A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get a Free Quote
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      </div>
      </div>
    </div>
  );
}
