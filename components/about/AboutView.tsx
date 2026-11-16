"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import StackSpread, {
  type StackSpreadCard,
} from "@/components/ui/stack-spread";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop";

const expertise = [
  {
    icon: "payments",
    label: "Consumer finance",
    image:
      "https://assets.nexuses.xyz/Modern_Office_Document_Signing_1793085038867_q25x.png",
  },
  {
    icon: "account_tree",
    label: "Product structuring",
    image:
      "https://assets.nexuses.xyz/product_structuring_1793084475473_il8s.jpg",
  },
  {
    icon: "trending_up",
    label: "Sales",
    image: "https://assets.nexuses.xyz/sales_1793084475473_wle1.jpg",
  },
  {
    icon: "verified_user",
    label: "Anti-money laundering (AML)",
    image: "https://assets.nexuses.xyz/AML_1793084475473_ml4d.jpg",
  },
  {
    icon: "gavel",
    label: "Regulatory compliance",
    image: "https://assets.nexuses.xyz/Regulatory_1793084475473_n1qu.jpg",
  },
  {
    icon: "apartment",
    label: "Mortgage, SME and corporate finance",
    image: "https://assets.nexuses.xyz/Mortgage_1793084475473_tp3j.jpg",
  },
];

/** Scatter layout for the six expertise cards (desktop + touch). */
const expertiseCards: StackSpreadCard[] = [
  {
    item: {
      src: expertise[0].image,
      alt: expertise[0].label,
      title: expertise[0].label,
    },
    stackOffset: { x: -10, y: -8 },
    stackRotate: -14,
    target: { x: -30, y: -28, rotate: -4, scale: 0.92, w: 20, h: 28 },
    targetSm: { x: -22, y: -36 },
    z: 2,
  },
  {
    item: {
      src: expertise[1].image,
      alt: expertise[1].label,
      title: expertise[1].label,
    },
    stackOffset: { x: 12, y: -10 },
    stackRotate: 16,
    target: { x: 30, y: -26, rotate: 3, scale: 0.88, w: 18, h: 30 },
    targetSm: { x: 22, y: -36 },
    z: 3,
  },
  {
    item: {
      src: expertise[2].image,
      alt: expertise[2].label,
      title: expertise[2].label,
    },
    stackOffset: { x: -14, y: 2 },
    stackRotate: -6,
    target: { x: -34, y: 4, rotate: -2, scale: 0.9, w: 17, h: 28 },
    targetSm: { x: -22, y: -8 },
    z: 4,
  },
  {
    item: {
      src: expertise[3].image,
      alt: expertise[3].label,
      title: expertise[3].label,
    },
    stackOffset: { x: 16, y: 0 },
    stackRotate: 8,
    target: { x: 34, y: 6, rotate: 2, scale: 0.9, w: 18, h: 28 },
    targetSm: { x: 22, y: -8 },
    z: 5,
  },
  {
    item: {
      src: expertise[4].image,
      alt: expertise[4].label,
      title: expertise[4].label,
    },
    stackOffset: { x: -6, y: 10 },
    stackRotate: 5,
    target: { x: -22, y: 32, rotate: -3, scale: 0.88, w: 20, h: 26 },
    targetSm: { x: -22, y: 28 },
    z: 6,
  },
  {
    item: {
      src: expertise[5].image,
      alt: expertise[5].label,
      title: expertise[5].label,
    },
    stackOffset: { x: 8, y: 12 },
    stackRotate: -5,
    target: { x: 22, y: 32, rotate: 4, scale: 0.9, w: 20, h: 26 },
    targetSm: { x: 22, y: 28 },
    z: 7,
  },
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

const gridOverlay =
  "linear-gradient(to right, rgba(243,239,227,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,227,0.12) 1px, transparent 1px)";

export default function AboutView() {
  return (
    <div className="bg-white text-[#26332F]">
      <div className="relative">
        <StickyCover>
          <section className="bg-white px-3 pb-2 pt-[88px] sm:px-5 sm:pt-[96px] lg:px-8">
            <div className="relative flex min-h-[min(72svh,640px)] flex-col overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:min-h-[min(68svh,620px)] lg:rounded-[2.5rem]">
              <Image
                src={HERO_IMAGE}
                alt="Dubai skyline"
                fill
                preload
                className="object-cover object-center"
                sizes="100vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,40,38,0.55)_0%,rgba(12,40,38,0.35)_42%,rgba(12,40,38,0.72)_100%)]"
              />

              <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-7 pt-12 text-center sm:px-8 sm:pb-8 lg:px-12">
                <Reveal>
                  <h1 className="max-w-[16ch] font-manrope text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
                    About AllWin Finances
                  </h1>
                </Reveal>

                <Reveal delay={80}>
                  <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-white/85 sm:text-lg">
                    Expert finance advice built on real banking experience
                  </p>
                </Reveal>

                <Reveal delay={160} className="mt-7 sm:mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-[#1F4F4A] shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
                  >
                    Get Free Consultation
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                </Reveal>
              </div>
            </div>
          </section>
        </StickyCover>

        <section className="relative z-10 overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-24px_80px_rgba(12,40,38,0.28)] sm:rounded-t-[2.5rem]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
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
      </div>

      <StackSpread
        cards={expertiseCards}
        title="Decades of Banking Experience"
        subtitle="Our team brings together decades of combined experience in international and local banking. Our expertise includes:"
        bgColor="#ffffff"
        textColor="#1F4F4A"
        cardRadius={16}
        stackScale={0.78}
        appearOnView
        showScrollHint={false}
      />

      <section className="bg-[#F3EFE3] py-20 lg:py-28">
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
            <article className="group h-full rounded-3xl border border-[#A9C1B8]/60 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#55BBB0]/55 hover:bg-[#F3EFE3] hover:shadow-[0_24px_48px_rgba(85,187,176,0.22)] sm:p-10">
              <Image
                src="https://assets.nexuses.xyz/Frame_80_1793883303885_1s2f.png"
                alt="Banks"
                width={56}
                height={56}
                className="mb-4 h-14 w-14 object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-3"
              />
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
            <article className="group h-full rounded-3xl border border-dashed border-[#1F4F4A]/40 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-solid hover:border-[#55BBB0]/70 hover:bg-[#F3EFE3] hover:shadow-[0_24px_48px_rgba(85,187,176,0.22)] sm:p-10">
              <Image
                src="https://assets.nexuses.xyz/handshake_1_1793883303885_51en.png"
                alt="Trust"
                width={66}
                height={66}
                className="mb-4 h-[66px] w-[66px] object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3"
              />
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

      <section className="bg-white py-16 lg:py-20">
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
              <div className="relative max-w-xl">
                <h2 className="max-w-[14ch] font-manrope text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  Let&apos;s talk about your goals
                </h2>
                <p className="mt-4 font-inter text-sm leading-relaxed text-white/80 sm:text-base">
                  Call us, message us on WhatsApp or request a free quote. We
                  are happy to help.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
                >
                  Get a free quote
                  <Icon name="arrow_forward" className="text-[16px]" />
                </a>
                <p className="mt-6 font-inter text-xs leading-relaxed text-white/55">
                  Rates, eligibility and approval depend on each bank&apos;s
                  policies and your personal profile. AllWin Finances cannot
                  guarantee approval.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
