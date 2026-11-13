"use client";

import { useEffect, useState } from "react";
import Icon from "../Icon";

const HERO_POSTER =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/businessman-using-smartphone-calculator-with-banking-financial-holographic-icons-digital-financial-management-concept.jpg";

/** Finance-themed stock clip: investor reviewing charts on a tablet */
const HERO_VIDEO =
  "https://assets.nexuses.xyz/Business_Meeting_Handshake_compressed_1793942792266_m1d6.mp4";

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
    <section className="relative w-full bg-transparent px-3 pb-6 pt-[5.5rem] sm:px-4 sm:pb-8 sm:pt-24 lg:px-6 lg:pb-10 lg:pt-28">
      <div className="relative mx-auto min-h-[min(78svh,820px)] w-full max-w-[1400px] overflow-hidden rounded-[1.25rem] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.55),0_8px_24px_rgba(0,0,0,0.3)] sm:rounded-[1.5rem] lg:min-h-[min(82svh,860px)]">
        {!reduceMotion ? (
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
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

        {/* Dark left panel fading into the video */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(105deg, rgba(12,40,38,0.92) 0%, rgba(20,28,28,0.78) 38%, rgba(31,79,74,0.45) 62%, rgba(31,79,74,0.18) 100%)",
          }}
        />

        <div className="relative z-10 flex h-full min-h-[min(78svh,820px)] items-center px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[min(82svh,860px)] lg:px-14 lg:py-16">
          <div className="w-full max-w-xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#55BBB0] backdrop-blur-md">
              UAE MORTGAGE &amp; FINANCIAL ADVISORY
            </div>
            <h1 className="mb-5 font-manrope text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem]">
              Seamless Finances Solutions Under One Roof.
            </h1>
            <p className="mb-8 max-w-lg font-inter text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-7">
              We Work with all of the UAE Banks &amp; Financial Institutions to
              get you the best offers.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}
