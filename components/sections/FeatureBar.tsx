"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Icon from "../Icon";

const features: {
  id: string;
  title: ReactNode;
  description: string;
  image: string;
  /**
   * Travel is in grid steps: x -1 starts one column left, y 1 starts one row down.
   */
  from: { x: number; y: number };
  place: string;
  href: string;
}[] = [
  {
    id: "home-loans",
    title: (
      <>
        Home Loans &amp;
        <br />
        Mortgages
      </>
    ),
    description:
      "Buy a home, refinance your mortgage or release cash from your property with Islamic or conventional finance.",
    image:
      "https://assets.nexuses.xyz/home-loan-officer-gives-house-keys-client-after-signing-real-estate-contract-with-approved-mortgage-application-regarding-offer-mortgage-loans-home-insurance__1__1792995944384_9jm2.jpg",
    from: { x: 0, y: 0.75 },
    place: "lg:col-start-1 lg:row-start-1",
    href: "/mortgage-financing",
  },
  {
    id: "business-sme",
    title: (
      <>
        Business &amp;
        <br />
        SME Loans
      </>
    ),
    description:
      "Working capital, trade finance, invoice discounting and more for businesses of all sizes.",
    image:
      "https://assets.nexuses.xyz/signing-contract-client-broker-agent-lease-agreement-successful-deal-young-business-sitting-desk-office__1__1792995944384_79y5.jpg",
    from: { x: -1, y: 0 },
    place: "lg:col-start-3 lg:row-start-1",
    href: "/sme-corporate-lending",
  },
  {
    id: "property-visa",
    title: (
      <>
        Property, Visa &amp;
        <br />
        Business Setup Support
      </>
    ),
    description:
      "Extra help with property investment, business setup, insurance and Golden Visa guidance.",
    image:
      "https://assets.nexuses.xyz/business-meeting-office__1__1792995944457_xyoi.jpg",
    from: { x: 1, y: 1 },
    place: "lg:col-start-1 lg:row-start-2",
    href: "/value-added-services",
  },
  {
    id: "personal-car",
    title: (
      <>
        Personal, Car &amp;
        <br />
        Credit Card Finance
      </>
    ),
    description:
      "Simple personal loans, car finance and credit cards for salaried and self-employed people.",
    image:
      "https://assets.nexuses.xyz/credit-cards-laptop-leather-wallet-grey-table__1__1792995944457_bxmg.jpg",
    from: { x: 0, y: -0.7 },
    place: "lg:col-start-3 lg:row-start-2",
    href: "/consumer-finance",
  },
];

function FeatureCard({
  feature,
  progress,
  animate,
  wide,
  stepX,
  stepY,
}: {
  feature: (typeof features)[number];
  progress: number;
  animate: boolean;
  wide: boolean;
  stepX: number;
  stepY: number;
}) {
  const travel = animate && wide ? 1 - progress : 0;
  const scale = animate ? 0.72 + 0.28 * progress : 1;
  const opacity = animate ? 0.55 + 0.45 * progress : 1;
  const x = feature.from.x * stepX * travel;
  const y = feature.from.y * stepY * travel;

  return (
    <a
      href={feature.href}
      data-feature={feature.id}
      className={`group relative overflow-hidden rounded-2xl p-4 flex flex-col self-center h-auto min-h-[168px] text-left text-white shadow-xs will-change-transform hover:shadow-[0_16px_36px_rgba(85,187,176,0.35)] ${feature.place}`}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity,
      }}
    >
      <Image
        src={feature.image}
        alt={
          {
            "home-loans": "Home Loans & Mortgages",
            "business-sme": "Business & SME Loans",
            "property-visa": "Property, Visa & Business Setup Support",
            "personal-car": "Personal, Car & Credit Card Finance",
          }[feature.id] ?? "Finance solution"
        }
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        sizes="(min-width: 1024px) 28vw, 100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1F4F4A]/92 via-[#1F4F4A]/55 to-[#1F4F4A]/25 transition-colors duration-300 group-hover:from-[#1F4F4A]/95 group-hover:via-[#1F4F4A]/60"
      />
      <div className="relative z-10 mt-[10px] flex h-full flex-col">
        <h3 className="font-manrope text-base font-bold leading-snug text-white">
          {feature.title}
        </h3>
        <p className="mt-2 font-inter text-sm font-normal leading-snug text-white/85">
          {feature.description}
        </p>
        <div className="mt-auto flex justify-end pt-3">
          <Icon
            name="arrow_forward"
            className="text-[18px] text-[#55BBB0] transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </a>
  );
}

export default function FeatureBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [wide, setWide] = useState(false);
  const [stepX, setStepX] = useState(0);
  const [stepY, setStepY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const syncWide = () => setWide(desktop.matches);
    syncWide();
    desktop.addEventListener("change", syncWide);

    if (reduced) {
      setAnimate(false);
      setProgress(1);
      return () => desktop.removeEventListener("change", syncWide);
    }

    let frame = 0;

    const measure = () => {
      const grid = gridRef.current;
      if (!grid) return;
      const left = grid.querySelector<HTMLElement>('[data-feature="home-loans"]');
      const right = grid.querySelector<HTMLElement>(
        '[data-feature="business-sme"]',
      );
      const below = grid.querySelector<HTMLElement>(
        '[data-feature="property-visa"]',
      );
      if (!left || !right || !below) return;
      setStepX(right.offsetLeft - left.offsetLeft);
      setStepY(below.offsetTop - left.offsetTop);
    };

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.96;
      const end = window.innerHeight * 0.08;
      const next = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setProgress(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      desktop.removeEventListener("change", syncWide);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);
  const cardProgress = animate ? easeOut(Math.min(progress / 0.72, 1)) : 1;
  const headingProgress = animate
    ? easeOut(Math.min(Math.max((progress - 0.78) / 0.22, 0), 1))
    : 1;
  const headingShift = (1 - headingProgress) * 18;

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0C665C 0%, #20AA45 38%, #55BBB0 72%, #20AA5C 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)_minmax(0,1fr)] lg:grid-rows-2 lg:gap-x-8 lg:gap-y-5 items-center"
        >
          <div
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex items-center justify-center text-center px-2 z-10"
            style={{
              transform: `translate3d(0, ${headingShift}px, 0)`,
              opacity: headingProgress,
            }}
          >
            <div className="max-w-sm">
              <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3EFE3] tracking-tight leading-[1.1] mb-3">
                Finance Solutions for Every Need
              </h2>
              <p className="font-inter text-base sm:text-lg text-[#F3EFE3]/90 font-medium">
                Whatever you want to finance, we can help. Choose a service
                below to learn more.
              </p>
            </div>
          </div>

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              progress={cardProgress}
              animate={animate}
              wide={wide}
              stepX={stepX}
              stepY={stepY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
