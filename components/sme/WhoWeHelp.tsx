"use client";

import Reveal from "@/components/about/Reveal";
import CardDeckCarousel, { type Slide } from "@/components/ui/card-deck-carousel";
import { audiences } from "./content";

/** Images matched to each audience title. */
const AUDIENCE_IMAGES: Record<string, { image: string; caption: string }> = {
  "Small and medium-sized businesses (SMEs)": {
    image:
      "https://assets.nexuses.xyz/7e6de693c128a3c3f5eaa9548cdbcfaf_1793083052869_xhrr.jpg",
    caption: "Growing SMEs across the UAE.",
  },
  "Large corporations": {
    image:
      "https://assets.nexuses.xyz/f598969842aaa87a62844e9fb6ca10d5_1793083052869_f1xx.jpg",
    caption: "Corporate finance for established groups.",
  },
  "Traders and businesses with import or export needs": {
    image:
      "https://assets.nexuses.xyz/7a37cffdd0609b7fe19934a3a3b7bfba_1793083052869_oz1d.jpg",
    caption: "Trade and import–export finance needs.",
  },
  "Companies planning projects or expansion": {
    image:
      "https://assets.nexuses.xyz/f89d0937813030418d2e4a9f5b7ff141_1793083052869_ayou.jpg",
    caption: "Project financing and expansion plans.",
  },
};

const slides: Slide[] = audiences.map((item) => {
  const media = AUDIENCE_IMAGES[item.title];
  return {
    title: item.title,
    caption: media?.caption,
    image: media?.image,
    alt: item.title,
  };
});

export default function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #20AA45, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 pt-20 sm:px-6 lg:px-10 lg:pt-28">
        <div className="mb-8 grid items-end gap-6 lg:mb-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1F4F4A]">
              Audience
            </p>
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Who We Help
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6">
            <p className="max-w-xl font-inter text-base leading-relaxed text-[#26332F]/80 sm:text-lg">
              Business finance for companies of all sizes — from growing SMEs to
              large corporations across the UAE.
            </p>
          </Reveal>
        </div>
      </div>

      <CardDeckCarousel
        slides={slides}
        aspect="3 / 4"
        scatter={9}
        height="min(88svh, 820px)"
        cardWidth="min(88vw, 560px)"
        autoplay={4200}
        background="transparent"
        ink="#1F4F4A"
        ariaLabel="Who we help"
        className="!px-4 !pb-20 sm:!px-6 lg:!px-10 lg:!pb-28"
      />
    </section>
  );
}
