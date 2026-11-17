"use client";

import { useEffect, useState } from "react";
import Icon from "../Icon";

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
    <section className="relative w-full bg-transparent px-3 pb-5 pt-[5rem] sm:px-4 sm:pb-6 sm:pt-[5.25rem] lg:px-6 lg:pb-8 lg:pt-24">
      <div className="relative mx-auto min-h-[480px] w-full max-w-[1400px] overflow-hidden rounded-[1.25rem] border border-[#1F4F4A]/10 shadow-[0_24px_64px_rgba(31,79,74,0.12),0_8px_24px_rgba(31,79,74,0.06)] sm:min-h-[520px] sm:rounded-[1.5rem] lg:min-h-[560px]">
        {!reduceMotion ? (
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 z-0 bg-[#D8E4DE]" />
        )}

        {/* Soft light wash fading into the video */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(105deg, rgba(247,248,246,0.94) 0%, rgba(232,238,234,0.88) 34%, rgba(232,238,234,0.55) 58%, rgba(232,238,234,0.18) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[480px] items-center px-6 py-20 sm:min-h-[520px] sm:px-10 sm:py-24 lg:min-h-[560px] lg:px-14 lg:py-28">
          <div className="w-full max-w-xl pt-2 pb-2 sm:pt-4 sm:pb-4">
            <h1 className="mb-5 font-manrope text-4xl font-bold leading-[1.1] tracking-tight text-[#1F4F4A] sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem]">
              Seamless Finance Solutions
              <br />
              Under One Roof.
            </h1>
            <p className="mb-8 max-w-lg font-inter text-base leading-relaxed text-[#26332F]/75 sm:text-lg sm:leading-7">
              We Work with all of the UAE Banks &amp; Financial Institutions to
              get you the best offers.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                className="flex items-center gap-2 rounded-full bg-[#1F4F4A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C665C] hover:shadow-xl md:text-base"
                href="#contact"
              >
                <span>Get a Free Quote</span>
                <Icon name="arrow_forward" className="text-[20px]" />
              </a>
              <a
                className="flex items-center gap-2 rounded-full border border-[#1F4F4A]/20 bg-white/80 px-6 py-3.5 text-sm font-medium text-[#1F4F4A] backdrop-blur-xs transition-all duration-300 hover:bg-white md:text-base"
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
