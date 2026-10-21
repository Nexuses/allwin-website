"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const products = [
  {
    title: "Real Estate Mortgages in the UAE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_4qsdVQUzIoqlk8p4KsjK1dpqd2ARg-LPcQvDLX2-sfeoJn_y1L6Mo7gie2WjOe4uLCL9ilSOwHkTiaqi7SurNZ9vKSwKsHpSqvXPuPHq0to7PKbhrr3sijUhJqJ26E1Y4dymyuPn7RyW9nHFbOVSLNAGn1akrzTQZwmr4O6T6pAvR9h9z6iCCG-UT2m4VRM-GifAdZJkcOggHDQACv3_K0hmR4Fsfms9AfZC0_GSPNYhN-ooTCa-",
    description:
      "First-time buyer, investor or looking to refinance? We help you find the right residential or commercial mortgage from UAE banks and guide you at every step.",
    cta: "Get Started",
    href: "/mortgage-financing",
  },
  {
    title: "SME & Corporate Lending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAey97j8TFmrC6pb3hFhWYjiUbz-QBuGqOBoyzTYZyl3_z90zwZZS26ACxv5ruUSAExHorozwOoLb-F8weyE3nb8VGRVsJYppURZNQxIiu-SLtF68G5NCwbNQPy7KQYjIWn6YPNAJR44rlmu9KlCAbvtAAtLnCfE0KhULNgPM1ueUGcP2aPUxEhiAzdtU4jFcq0G5Li2A6bpMa0qO_b-EbnPaYuMkjBcMYzyPafr20ILOzMo7wQoKB",
    description:
      "We match businesses of all sizes with flexible lending options, from trade finance and working capital to funding for growth.",
    cta: "Explore Corporate",
    href: "/sme-corporate-lending",
  },
  {
    title: "Consumer Finance Products",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzIS047m5ZDSA0WTbAtDGGGsvFJZuJlKapIsbQL2Pb13K2LRLblw5igdkY09_SEVYwotvMQI-WTp1ySNjv-gUbC1fxDVjl7QE8xh68Q8xJVbiF0fiW5pqQHltfRV2rhA6D4mPSv5RmA7FoqHaat7AFmRABvSQ8ORiBqXGMPVDzEVUzU8J3W42Jj-pTvIGuyg_hmrSbsc3nAESQ0T9DoaEVZcCParzQf_DvVEllHtErx-iS4tkydJp",
    description:
      "Personal loans, car finance, credit cards and finance for everyday purchases, with clear terms that fit your budget.",
    cta: "View Options",
    href: "/consumer-finance",
  },
];

export default function CoreExpertise() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FFFFFF]" id="products">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-3">
            Our Core Expertise
          </h2>
          <p className="font-inter text-gray-600 text-base sm:text-lg">
            Finance solutions designed around your needs
          </p>
        </Reveal>

        <div
          className="flex flex-col md:flex-row gap-5 md:gap-4 items-stretch"
          onMouseLeave={() => setActive(null)}
        >
          {products.map((product, index) => {
            const open = active === index;

            return (
              <Reveal
                key={product.title}
                delay={index * 70}
                className={`flex min-w-0 ${open ? "md:flex-[2.4]" : "md:flex-1"}`}
              >
              <article
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(open ? null : index)}
                className={`group h-full w-full bg-white rounded-3xl overflow-hidden border shadow-xs flex flex-col min-w-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open
                    ? "border-[#55BBB0]/40 shadow-xl"
                    : "border-[#A9C1B8] hover:shadow-md"
                }`}
              >
                <div className="relative h-52 md:h-56 overflow-hidden shrink-0">
                  <Image
                    alt={product.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open ? "scale-110" : "scale-100"
                    }`}
                    src={product.image}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-[#55BBB0] text-white flex items-center justify-center shadow-md">
                    <Icon name="check" className="text-[20px]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-manrope text-lg md:text-xl font-bold text-[#385445] mb-3">
                    {product.title}
                  </h3>

                  <p
                    className={`font-inter text-gray-600 text-sm leading-relaxed transition-all duration-500 ${
                      open ? "line-clamp-none" : "line-clamp-2"
                    }`}
                  >
                    {product.description}
                  </p>

                  <div
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <a
                        className="inline-flex items-center gap-1.5 text-[#55BBB0] font-semibold text-sm hover:text-[#20AA45]"
                        href={product.href}
                      >
                        <span>{product.cta}</span>
                        <Icon
                          name="arrow_forward"
                          className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
