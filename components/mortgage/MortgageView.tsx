"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import FAQ from "@/components/sections/FAQ";
import {
  commercialOptions,
  equityUses,
  moreOptions,
  processSteps,
  refinanceBenefits,
} from "./content";

const ADVISOR =
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

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-inter text-sm leading-relaxed">
          <Icon
            name="check_circle"
            className={`text-[18px] shrink-0 mt-0.5 ${light ? "text-[#55BBB0]" : "text-[#20AA45]"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const deck = [
  {
    id: "new-purchase",
    eyebrow: "New purchase",
    title: "Home Loans for New Property Purchases",
    dark: false,
    body: (
      <>
        <h3 className="font-manrope text-lg font-semibold text-[#1F4F4A] mb-3">
          Residential and commercial mortgages (Islamic and conventional)
        </h3>
        <div className="space-y-3 font-inter text-sm sm:text-base text-[#26332F]/85 leading-relaxed">
          <p>
            At this important moment in your life you may have many questions, and you may be unsure which documents you need. We understand how that feels.
          </p>
          <p>
            Whether you are a young professional investing early or a family settling into a new community, our mortgage advisors give you honest advice and practical, proven solutions. We will guide you towards your goal of becoming a happy homeowner.
          </p>
          <p>
            Not sure where to start?{" "}
            <a href="/#contact" className="font-semibold text-[#1F4F4A] underline underline-offset-4">
              Get in touch
            </a>{" "}
            and our friendly team will help.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "refinance",
    eyebrow: "Refinance",
    title: "Mortgage Refinance & Buyout in Dubai",
    dark: false,
    body: (
      <>
        <p className="font-inter text-sm sm:text-base text-[#26332F]/85 leading-relaxed">
          A mortgage buyout (also called refinancing) means moving your current mortgage to a new lender, or renegotiating your terms. It is important to research the market and understand what you can gain. We compare interest and profit rates from different lenders and explain the paperwork you will need.
        </p>
        <h3 className="font-manrope text-lg font-semibold text-[#1F4F4A] mt-5">Benefits of refinancing</h3>
        <BulletList items={refinanceBenefits} />
        <p className="font-inter text-sm text-[#26332F]/70 mt-4">
          Benefits depend on your lender, property and personal profile.
        </p>
      </>
    ),
  },
  {
    id: "equity-release",
    eyebrow: "Equity release",
    title: "Equity Release (Cash-Out) Mortgage",
    dark: false,
    body: (
      <>
        <p className="font-inter text-sm sm:text-base text-[#26332F]/85 leading-relaxed">
          Equity release lets you access money from the value you have built in your property, as a lump sum or in installments. It can help you manage uncertain times with confidence.
        </p>
        <h3 className="font-manrope text-lg font-semibold text-[#1F4F4A] mt-5">How could equity release help you?</h3>
        <BulletList items={equityUses} />
      </>
    ),
  },
];

function SpreadStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrub(sectionRef);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduced) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        {deck.map((card) => (
          <article
            key={card.id}
            id={card.id}
            className={`rounded-[2rem] p-7 sm:p-10 shadow-xl ${card.dark ? "bg-[#1F4F4A] text-white" : "bg-white text-[#385445]"}`}
          >
            <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${card.dark ? "text-[#55BBB0]" : "text-[#1F4F4A]"}`}>
              {card.eyebrow}
            </p>
            <h2 className="font-manrope text-3xl font-bold tracking-tight mb-4">{card.title}</h2>
            {card.body}
          </article>
        ))}
      </section>
    );
  }

  const index = progress * (deck.length - 1);

  return (
    <section ref={sectionRef} className="relative h-[260vh]">
      <div className="sticky top-20 h-[calc(100svh-5rem)] flex items-center">
        <div className="relative w-full max-w-3xl mx-auto h-[min(680px,calc(100svh-8rem))] px-4 sm:px-6">
          {deck.map((card, i) => {
            const delta = i - index;
            const behind = Math.max(delta, 0);
            const passed = Math.min(delta, 0);
            const opacity = passed < -0.35 ? Math.max(0, 1 + (passed + 0.35) * 2.4) : 1;
            const front = delta < 0.45 && delta > -0.55;

            return (
              <article
                key={card.id}
                id={card.id}
                className={`absolute inset-x-4 sm:inset-x-6 top-0 h-full rounded-[2rem] p-7 sm:p-10 shadow-[0_24px_60px_rgba(31,79,74,0.18)] overflow-auto ${
                  card.dark ? "bg-[#1F4F4A] text-white" : i % 2 === 0 ? "bg-white text-[#385445]" : "bg-[#F3EFE3] text-[#385445] border border-[#A9C1B8]/70"
                }`}
                style={{
                  zIndex: front ? 20 : 10 - i,
                  pointerEvents: front ? "auto" : "none",
                  opacity,
                  transform: `translateY(calc(${passed * 108}% + ${behind * 18}px)) scale(${1 - behind * 0.045})`,
                }}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${card.dark ? "text-[#55BBB0]" : "text-[#1F4F4A]"}`}>
                  {card.eyebrow}
                </p>
                <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-4">{card.title}</h2>
                {card.body}
              </article>
            );
          })}
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
    const count = processSteps.length;
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
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight text-center mb-14">
          How Our Mortgage Process Works
        </h2>
        </Reveal>
        <Reveal delay={80}>
        <div className="relative grid grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[21px] h-[2px] bg-[#E7E4DE]">
            <div
              ref={lineRef}
              className="h-full origin-left"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, #c6a15a 0%, #8d9a62 55%, #8aa4bc 100%)",
              }}
            />
          </div>
          {processSteps.map((step, index) => {
            const current = index === active;
            return (
              <article key={step.title} className="relative z-10 px-1.5 sm:px-4 text-center">
                <div
                  className={`mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 ${
                    current
                      ? "bg-[#1B2744] text-white"
                      : "border border-[#E6E6E6] bg-white text-[#C8C8C8]"
                  }`}
                >
                  {current ? (
                    <Icon name="check" className="text-[22px]" />
                  ) : (
                    <span className="font-inter text-sm">{index + 1}</span>
                  )}
                </div>
                <h3
                  className={`font-manrope text-[13px] sm:text-[15px] leading-snug mb-2 transition-colors duration-500 ${
                    current ? "font-bold text-[#1A1A1A]" : "font-medium text-[#C5C5C5]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`font-inter text-[11px] sm:text-[13px] leading-relaxed transition-colors duration-500 ${
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

export default function MortgageView() {

  return (
    <div className="bg-[#F3EFE3] text-[#26332F]">
      <section className="relative overflow-hidden bg-[#1F4F4A] text-white">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
        />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#55BBB0] text-xs font-semibold uppercase tracking-wider mb-5">
              Mortgage financing
            </p>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
              Mortgage Financing in Dubai &amp; the UAE
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
              Islamic and conventional home loans, refinancing and more, explained simply and compared across UAE banks.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#55BBB0] hover:bg-[#20AA45] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to a Mortgage Advisor
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div className="lg:col-span-5 relative h-[320px] sm:h-[420px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={ADVISOR}
                alt="Mortgage advisor reviewing home loan options in Dubai"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 460px, 90vw"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-end">
        <Reveal className="lg:col-span-5">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight">
            Find the Right Home Loan in the UAE
          </h2>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <p className="font-inter text-base sm:text-lg text-[#26332F]/85 leading-relaxed">
            Buying property is a big step. AllWin Finances compares mortgage options from leading UAE banks and guides you from your first question to final approval. Whether you are buying, refinancing or investing, we keep the process clear and simple.
          </p>
        </Reveal>
      </section>

      <SpreadStack />

      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="mb-8">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight">
              More ways to finance property
            </h2>
          </Reveal>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4">
            {moreOptions.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="snap-start shrink-0 w-[82%] sm:w-[420px]">
              <article
                className="h-full rounded-[2rem] bg-white border border-[#A9C1B8]/60 p-7 shadow-xs"
              >
                <h2 className="font-manrope text-2xl font-bold text-[#385445] mb-3">
                  {item.title === "Tailor-Made Mortgages" ? (
                    <>
                      Tailor-Made
                      <br />
                      Mortgages
                    </>
                  ) : item.title === "Land & Plot Financing" ? (
                    <>
                      Land &amp; Plot
                      <br />
                      Financing
                    </>
                  ) : (
                    item.title
                  )}
                </h2>
                <p className="font-inter text-[#26332F]/85 leading-relaxed">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="non-resident" className="py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div className="rounded-[2rem] bg-[#385445] text-white p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#55BBB0] mb-3">Non-resident</p>
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight">
                Non-Resident Mortgage Loans in the UAE
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="font-inter text-white/85 leading-relaxed">
                Getting a loan as a non-resident can be tricky, but it is possible. There are several options for non-resident buyers.
              </p>
              <p className="font-inter text-white/85 leading-relaxed">
                Our mortgage experts explain the requirements for the property you are interested in and help you organise your documents. Together we will look at rates, loan amounts and repayment periods that could work for you.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section id="commercial" className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4F4A] mb-3">Commercial</p>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight">
              Commercial &amp; Building Finance
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 auto-rows-fr">
            {commercialOptions.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="h-full">
              <article
                className="theme-card h-full rounded-[2rem] bg-[#1F4F4A] text-white p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]"
              >
                <h2 className="font-manrope text-2xl font-bold mb-3">{item.title}</h2>
                <p className="font-inter text-white/80 leading-relaxed">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div className="rounded-[2rem] border border-[#A9C1B8]/70 bg-white p-8 sm:p-12 grid lg:grid-cols-12 gap-8">
            <h2 className="lg:col-span-5 font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight">
              Real Estate Investment Advice
            </h2>
            <div className="lg:col-span-7 space-y-4">
              <p className="font-inter text-[#26332F]/85 leading-relaxed">
                Get guidance on buying residential or commercial property in popular areas of Dubai, Abu Dhabi, Ajman, Sharjah and Ras Al Khaimah. We help you find property deals that match your needs.
              </p>
              <p className="font-inter text-[#26332F]/85 leading-relaxed">
                We can also guide you on legal steps, property management and rental agreements.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <ProcessLine />

      <FAQ />

      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div
            className="rounded-[2rem] px-6 py-14 sm:px-12 text-center text-white"
            style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)" }}
          >
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to Talk About Your Mortgage?
            </h2>
            <p className="font-inter text-white/90 max-w-xl mx-auto mb-8">
              Call, WhatsApp or request a free quote. Our friendly team is happy to help.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-[#1F4F4A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Free Quote
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <p className="font-inter text-sm text-white/80 max-w-2xl mx-auto mt-8">
              Rates, eligibility and approval depend on each bank’s policies and your personal profile. AllWin Finances cannot guarantee approval.
            </p>
          </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
