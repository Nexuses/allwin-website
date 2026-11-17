"use client";

import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import { services } from "./content";

const HERO_IMAGE =
  "https://assets.nexuses.xyz/Sunlit_collaboration_with_laptop_and_tablet_1794830870326_sico.png";

const gridOverlay =
  "linear-gradient(to right, rgba(243,239,227,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,227,0.12) 1px, transparent 1px)";

export default function ValueAddedView() {
  return (
    <div className="bg-[#F7F8F6] text-[#26332F]">
      <section className="bg-white px-3 pb-10 pt-[88px] sm:px-5 sm:pb-12 sm:pt-[96px] lg:px-8 lg:pb-14">
        <div className="relative mx-auto flex min-h-[min(62svh,560px)] max-w-[1400px] flex-col overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:min-h-[min(58svh,540px)] lg:rounded-[2.5rem]">
          <Image
            src={HERO_IMAGE}
            alt="AllWin Finances advisors collaborating"
            fill
            preload
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,40,38,0.88)_0%,rgba(31,79,74,0.72)_48%,rgba(12,40,38,0.4)_100%)]"
          />

          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Reveal>
              <p className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-inter text-xs font-semibold text-white/90 backdrop-blur-sm">
                Value-added services
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="max-w-[14ch] font-manrope text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Distinct challenges. Dedicated expertise.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-md font-inter text-base leading-relaxed text-white/85 sm:text-lg">
                Specialized support for the property, business and lifestyle
                steps that sit alongside your finance.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-8">
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

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="max-w-[720px]">
            <h2 className="font-manrope text-2xl font-bold tracking-tight text-[#1F4F4A] sm:text-3xl">
              Our value-added services
            </h2>
            <p className="mt-5 font-inter text-base leading-relaxed text-[#26332F]/75 sm:text-lg">
              Moving to the UAE, buying property or starting a business involves
              more than a loan. We bring together trusted partners and practical
              guidance so you can handle the extra steps with confidence.
            </p>
            <p className="mt-4 font-inter text-sm leading-relaxed text-[#26332F]/55 sm:text-[15px]">
              Focused expertise. Connected partners. Clear next steps.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-[#D7DED9] sm:mt-12">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index * 40, 200)}>
              <article className="grid gap-6 border-b border-[#D7DED9] py-8 sm:py-10 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EEEA] text-[#1F4F4A]">
                  <Icon name={service.icon} className="text-[26px]" />
                </div>

                <div className="min-w-0">
                  <p className="font-inter text-xs font-medium tracking-wide text-[#26332F]/45 sm:text-sm">
                    {service.label}
                  </p>
                  <h3 className="mt-2 font-manrope text-xl font-bold tracking-tight text-[#1F4F4A] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl font-inter text-sm leading-relaxed text-[#26332F]/80 sm:text-[15px]">
                    {service.text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D0D8D3] bg-white px-3 py-1 font-inter text-xs text-[#385445]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="aspect-[4/3] w-full max-w-[180px] self-start overflow-hidden rounded-xl bg-[#E8EEEA] sm:max-w-[160px] lg:h-[112px] lg:w-[160px] lg:max-w-none lg:self-center lg:aspect-auto"
                />
              </article>
            </Reveal>
          ))}
          </div>
          <p className="mt-6 font-inter text-sm text-[#26332F]/55">
            Some services are provided through licensed third-party partners.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F8F6] py-16 lg:py-20">
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
                  Need help with more than finance?
                </h2>
                <p className="mt-4 font-inter text-sm leading-relaxed text-white/80 sm:text-base">
                  Tell us what you are planning and we will point you to the
                  right support.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-[#1F4F4A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
                >
                  Get a free quote
                  <Icon name="arrow_forward" className="text-[16px]" />
                </a>
                <p className="mt-6 font-inter text-xs leading-relaxed text-white/55">
                  Some services are provided through licensed third-party
                  partners. AllWin Finances will guide you to the right next
                  step.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
