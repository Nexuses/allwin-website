import Image from "next/image";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const REFINANCE_IMAGE =
  "https://assets.nexuses.xyz/Colleagues_collaborating_in_a_glass_office_1794829728071_ia1l.png";

export default function Refinance() {
  return (
    <section className="w-full py-20 bg-white" id="refinance">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden aspect-[4/4]">
              <Image
                alt="Looking to Refinance or Buy-Out"
                className="w-full h-full object-cover object-center rounded-2xl"
                src={REFINANCE_IMAGE}
                fill
                sizes="(min-width: 640px) 384px, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-3">
              Want to Refinance or Buy Out Your Mortgage?
            </h2>
            <h3 className="font-manrope text-xl font-semibold text-[#55BBB0] mb-5">
              Compare rates and find a better deal
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-sm sm:text-base sm:leading-6 mb-8">
              We compare interest and profit rates from different lenders,
              prepare your paperwork and negotiate for you, so switching is
              smooth and stress-free.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#1F4F4A] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0C665C] hover:shadow-lg"
              href="#contact"
            >
              <span>Check Your Refinance Options</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
