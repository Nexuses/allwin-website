import Image from "next/image";

const PARTNER_BASE =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/Screenshot%202026-09-29%20";

const partnerLogos = [
  "142958",
  "143049",
  "143025",
  "143158",
  "143134",
  "143110",
  "143222",
  "143248",
  "143317",
  "143341",
  "143420",
  "143523",
].map((id, index) => ({
  src: `${PARTNER_BASE}${id}.png`,
  alt: `Banking Partner ${index + 1}`,
}));

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
          className="h-[46px] sm:h-[50px] w-auto object-contain mix-blend-multiply opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      ))}
    </div>
  );
}

export default function BankingPartners() {
  return (
    <section className="relative z-10 w-full py-16 lg:py-20 bg-[#F8F9FA] rounded-t-[2rem] sm:rounded-t-[2.5rem] border-t border-[#E9ECEF] shadow-[0_-24px_80px_rgba(0,0,0,0.28)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="font-manrope text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212529] tracking-tight mb-10">
          We Work With Leading Banks Across the UAE
        </h2>
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
