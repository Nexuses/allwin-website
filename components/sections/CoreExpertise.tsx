"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const products = [
  {
    title: "Real Estate Mortgages in the UAE",
    image:
      "https://assets.nexuses.xyz/38d6060c7f961f35de4fe86ab256cfc3_1792732637106_rfaz.jpg",
    description:
      "First-time buyer, investor or looking to refinance? We help you find the right residential or commercial mortgage from UAE banks and guide you at every step.",
    cta: "Get Started",
    href: "/mortgage-financing",
  },
  {
    title: "SME & Corporate Lending",
    image:
      "https://assets.nexuses.xyz/53d019de559409815fdc8513398573e3_1792732637106_ln36.jpg",
    description:
      "We match businesses of all sizes with flexible lending options, from trade finance and working capital to funding for growth.",
    cta: "Explore Corporate",
    href: "/sme-corporate-lending",
  },
  {
    title: "Consumer Finance Products",
    image:
      "https://assets.nexuses.xyz/8e90ac7259fb2ac2b9d3c1823e9aff59_1792732637106_6ddz.jpg",
    description:
      "Personal loans, car finance, credit cards and finance for everyday purchases, with clear terms that fit your budget.",
    cta: "View Options",
    href: "/consumer-finance",
  },
];

const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function CoreExpertise() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-[#FFFFFF] pt-[30px] pb-20 lg:pt-[62px] lg:pb-28"
      id="products"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-3 font-manrope text-3xl font-bold tracking-tight text-[#385445] sm:text-4xl">
            Our Core Expertise
          </h2>
          <p className="font-inter text-base text-gray-600 sm:text-lg">
            Finance solutions designed around your needs
          </p>
        </Reveal>

        <div
          className="flex flex-col items-stretch gap-5 md:flex-row md:gap-4"
          onMouseLeave={() => setActive(null)}
        >
          {products.map((product, index) => {
            const open = active === index;

            return (
              <div
                key={product.title}
                className="flex min-w-0"
                style={{
                  flexGrow: open ? 2.45 : 1,
                  flexShrink: 1,
                  flexBasis: 0,
                  transition: `flex-grow 800ms ${ease}`,
                }}
              >
                <Reveal delay={index * 70} className="h-full w-full min-w-0">
                  <article
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(open ? null : index)}
                    className={`group flex h-full w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white ${
                      open
                        ? "border-[#55BBB0]/45 shadow-[0_22px_48px_rgba(85,187,176,0.22)]"
                        : "border-[#A9C1B8] hover:border-[#55BBB0]/30 hover:shadow-[0_14px_32px_rgba(85,187,176,0.16)]"
                    }`}
                    style={{
                      transition: `border-color 600ms ${ease}, box-shadow 600ms ${ease}, transform 600ms ${ease}`,
                      transform: open ? "translateY(-3px)" : "translateY(0)",
                    }}
                  >
                    <div className="relative h-52 shrink-0 overflow-hidden md:h-56">
                      <Image
                        alt={product.title}
                        className="h-full w-full object-cover will-change-transform"
                        src={product.image}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        style={{
                          transform: open ? "scale(1.08)" : "scale(1)",
                          transition: `transform 850ms ${ease}`,
                        }}
                      />
                      <div
                        className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#55BBB0] text-white shadow-md"
                        style={{
                          transform: open ? "scale(1.06)" : "scale(1)",
                          transition: `transform 600ms ${ease}`,
                        }}
                      >
                        <Icon name="check" className="text-[20px]" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-3 font-manrope text-lg font-bold text-[#385445] md:text-xl">
                        {product.title}
                      </h3>

                      <p
                        className="font-inter text-sm leading-relaxed text-gray-600"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical" as const,
                          WebkitLineClamp: open ? 8 : 2,
                          overflow: "hidden",
                        }}
                      >
                        {product.description}
                      </p>

                      <div
                        className="grid"
                        style={{
                          gridTemplateRows: open ? "1fr" : "0fr",
                          opacity: open ? 1 : 0,
                          marginTop: open ? 24 : 0,
                          transition: `grid-template-rows 650ms ${ease}, opacity 450ms ${ease}, margin-top 650ms ${ease}`,
                        }}
                      >
                        <div className="overflow-hidden">
                          <a
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#55BBB0] transition-colors duration-300 hover:text-[#20AA45]"
                            href={product.href}
                            onClick={(event) => event.stopPropagation()}
                          >
                            <span>{product.cta}</span>
                            <Icon
                              name="arrow_forward"
                              className="text-[18px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
