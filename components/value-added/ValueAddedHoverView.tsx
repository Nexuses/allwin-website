"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/about/Reveal";
import { services } from "./content";

const HERO_IMAGE =
  "https://assets.nexuses.xyz/Sunlit_collaboration_with_laptop_and_tablet_1794830870326_sico.png";

const gridOverlay =
  "linear-gradient(to right, rgba(243,239,227,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,227,0.12) 1px, transparent 1px)";

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function ValueAddedHoverView() {
  const [active, setActive] = useState<number | null>(null);

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

      <section className="bg-[#EEF2EF] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-10 max-w-[34rem] border-b border-[#D0D8D3] pb-8 sm:mb-12 sm:pb-10">
            <h2 className="font-manrope text-2xl font-bold tracking-tight text-[#1F4F4A] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
              Everything from brief to Day 1 and beyond
            </h2>
            <p className="mt-4 font-inter text-sm leading-relaxed text-[#26332F]/70 sm:text-base">
              Moving to the UAE, buying property or starting a business involves
              more than a loan. Hover a service to explore how we help.
            </p>
          </Reveal>

          <div
            className="overflow-hidden rounded-[1.5rem] border border-[#D0D8D3] bg-[#F7F8F6]"
            onMouseLeave={() => setActive(null)}
          >
            {services.map((service, index) => {
              const open = active === index;

              return (
                <article
                  key={service.id}
                  tabIndex={0}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setActive(null);
                    }
                  }}
                  onClick={() => setActive(open ? null : index)}
                  className={`group relative cursor-pointer border-b border-[#D0D8D3] last:border-b-0 ${
                    open ? "bg-[#132926] text-white" : "bg-[#F7F8F6] text-[#26332F]"
                  }`}
                  style={{
                    transition: `background-color 450ms ${ease}, color 450ms ${ease}`,
                  }}
                >
                  <div className="value-service-row relative">
                    <div
                      className={`pt-1 font-manrope text-sm font-semibold tracking-[0.14em] sm:text-base ${
                        open ? "text-white/45" : "text-[#26332F]/35"
                      }`}
                      style={{ transition: `color 450ms ${ease}` }}
                    >
                      {formatIndex(index)}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`font-manrope text-xl font-bold tracking-tight sm:text-2xl ${
                          open ? "text-white" : "text-[#1F4F4A]"
                        }`}
                        style={{ transition: `color 450ms ${ease}` }}
                      >
                        {service.shortTitle}
                      </h3>
                    </div>

                    <div className="value-service-row__arrow relative flex items-center justify-end">
                      <div
                        aria-hidden={!open}
                        className="value-service-desktop-image pointer-events-none absolute top-1/2 z-[1] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                        style={{
                          right: "4.25rem",
                          height: "9rem",
                          width: "12rem",
                          opacity: open ? 1 : 0,
                          transform: open
                            ? "translateY(-50%) translateX(0) scale(1)"
                            : "translateY(-50%) translateX(12px) scale(0.95)",
                          transition: `opacity 450ms ${ease}, transform 500ms ${ease}`,
                        }}
                      >
                        <Image
                          src={service.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="192px"
                        />
                      </div>

                      <a
                        href="/contact"
                        aria-label={`Enquire about ${service.title}`}
                        onClick={(event) => event.stopPropagation()}
                        className={`relative z-10 flex shrink-0 items-center justify-center rounded-full ${
                          open
                            ? "bg-[#55BBB0] text-[#0C2826]"
                            : "bg-[#DCE4DF] text-[#1F4F4A]"
                        }`}
                        style={{
                          height: "5.25rem",
                          width: "3rem",
                          transition: `background-color 400ms ${ease}, color 400ms ${ease}`,
                        }}
                      >
                        <Icon
                          name="arrow_forward"
                          className={`text-[20px] transition-transform duration-500 ${
                            open ? "translate-x-0.5" : ""
                          }`}
                        />
                      </a>
                    </div>

                    <ul className="value-service-row__highlights min-w-0 space-y-1.5">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className={`font-inter text-sm leading-relaxed ${
                            open ? "text-white/70" : "text-[#26332F]/55"
                          }`}
                          style={{ transition: `color 450ms ${ease}` }}
                        >
                          + {item}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="value-service-mobile-image value-service-row__mobile-image overflow-hidden"
                      style={{
                        maxHeight: open ? "12rem" : "0px",
                        opacity: open ? 1 : 0,
                        transition: `max-height 450ms ${ease}, opacity 350ms ${ease}`,
                      }}
                    >
                      <div className="relative mt-1 aspect-[16/10] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, 0px"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
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
