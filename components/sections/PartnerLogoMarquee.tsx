import Image from "next/image";
import { partnerLogos } from "@/components/partners";

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 sm:gap-16"
      aria-hidden={hidden || undefined}
    >
      {partnerLogos.map((logo) => (
        <Image
          key={`${hidden ? "dup-" : ""}${logo.src}`}
          src={logo.src}
          alt={logo.alt}
          width={220}
          height={56}
          loading="eager"
          className="h-[50px] w-auto object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-[56px]"
        />
      ))}
    </div>
  );
}

type PartnerLogoMarqueeProps = {
  className?: string;
};

export default function PartnerLogoMarquee({
  className = "border-y border-[#A9C1B8]/35 bg-[#F8F9FA] py-8 sm:py-10",
}: PartnerLogoMarqueeProps) {
  return (
    <section className={className}>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/marquee">
        <div className="animate-marquee-track items-center gap-12 sm:gap-16">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
