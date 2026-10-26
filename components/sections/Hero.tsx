"use client";

import { useEffect, useState } from "react";
import Icon from "../Icon";

const HERO_POSTER =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/businessman-using-smartphone-calculator-with-banking-financial-holographic-icons-digital-financial-management-concept.jpg";

/** Finance-themed stock clip: investor reviewing charts on a tablet */
const HERO_VIDEO = "https://assets.mixkit.co/videos/45706/45706-720.mp4";

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#1F4F4A]">
      {!reduceMotion ? (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${HERO_POSTER}")` }}
        />
      )}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(12,40,38,0.82) 0%, rgba(20,28,28,0.62) 48%, rgba(31,79,74,0.55) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-24 pt-32 sm:px-6 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#55BBB0] backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#55BBB0]" />
            UAE MORTGAGE &amp; FINANCIAL ADVISORY
          </div>
          <h1 className="mb-6 font-manrope text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-none lg:text-6xl">
            Seamless Finances Solutions Under One Roof.
          </h1>
          <p className="mb-8 max-w-xl font-inter text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-7">
            We Work with all of the UAE Banks &amp; Financial Institutions to get
            you the best offers.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="flex items-center gap-2 rounded-full bg-[#55BBB0] px-7 py-3.5 text-sm font-semibold text-[#1F4F4A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20AA45] hover:shadow-xl md:text-base"
              href="#contact"
            >
              <span>Get a Free Quote</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </a>
            <a
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xs transition-all duration-300 hover:bg-white/20 md:text-base"
              href="https://wa.me/971585666955"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Chat on WhatsApp</span>
              <Icon name="chat" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
