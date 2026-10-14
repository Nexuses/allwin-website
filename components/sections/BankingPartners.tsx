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
          height={40}
          loading="eager"
          className="h-9 sm:h-10 w-auto object-contain mix-blend-multiply opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      ))}
    </div>
  );
}

export default function BankingPartners() {
  return (
    <section className="w-full py-16 bg-[#F8F9FA] border-y border-[#E9ECEF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <p className="font-inter text-gray-500 font-medium text-sm sm:text-base mb-8">
          We collaborate with the leading banks across the United Arab Emirates.
        </p>
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
