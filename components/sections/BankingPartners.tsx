import Image from "next/image";
import Reveal from "../about/Reveal";
import { partnerLogos } from "../partners";

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex items-center gap-12 sm:gap-16 shrink-0"
      aria-hidden={hidden || undefined}
    >
      {partnerLogos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={200}
          height={50}
          loading="eager"
          className="h-[46px] sm:h-[50px] w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      ))}
    </div>
  );
}

export default function BankingPartners() {
  return (
    <section className="relative z-10 w-full bg-[#F8F9FA] pt-10 pb-12 lg:pt-12 lg:pb-14 rounded-t-[2rem] sm:rounded-t-[2.5rem] border-t border-[#E9ECEF] shadow-[0_-24px_80px_rgba(0,0,0,0.28)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <Reveal>
        <h2 className="font-manrope text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D464C] tracking-tight mb-8">
          We Work With Leading Banks Across the UAE
        </h2>
        </Reveal>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/marquee">
          <div className="animate-marquee-track items-center gap-12 sm:gap-16">
            <LogoGroup />
            <LogoGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
