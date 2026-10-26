import Image from "next/image";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const ABOUT_IMAGE =
  "https://assets.nexuses.xyz/849e6238fc4b9a326589fc6f212bf90f_1792734932834_e21q.jpg";

const highlights = [
  { icon: "verified", title: "100% Impartial", subtitle: "Zero broker bias" },
  {
    icon: "account_balance",
    title: "Tier-1 UAE Banks",
    subtitle: "Unmatched access",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8F5] text-[#55BBB0] text-xs font-semibold uppercase tracking-wider mb-3">
      {children}
    </div>
  );
}

function FramedImage({
  src,
  alt,
  tilt,
}: {
  src: string;
  alt: string;
  tilt: string;
}) {
  return (
    <div className="relative w-full max-w-md">
      <div className={`absolute -inset-4 bg-[#E8F8F5] rounded-3xl ${tilt}`} />
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white aspect-[4/5]">
        <Image
          alt={alt}
          className="w-full h-full object-cover"
          src={src}
          fill
          sizes="(min-width: 1024px) 448px, 100vw"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="w-full overflow-x-clip py-20 lg:py-28 bg-[#FFFFFF]" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <FramedImage
              src={ABOUT_IMAGE}
              alt="Expert Finance Solutions"
              tilt="-rotate-2"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 order-1 lg:order-2">
            <Eyebrow>Our Foundation</Eyebrow>
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight mb-2">
              About AllWin Finances
            </h2>
            <h3 className="font-manrope text-xl font-semibold text-[#55BBB0] mb-6">
              Expert Finance Advice, Made Simple
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-base mb-6">
              AllWin Finances is a mortgage and finance advisory in Business Bay,
              Dubai. Our team has decades of combined experience in local and
              international banking, including consumer finance, product
              structuring, sales, anti-money laundering (AML) and regulatory
              compliance. We use that experience to give you clear, end-to-end
              support for your financing and wealth management needs.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {highlights.map((item) => (
                <div key={item.title} className="group flex items-center gap-3">
                  <span className="icon-chip w-10 h-10 rounded-full bg-[#E8F8F5] flex items-center justify-center text-[#55BBB0]">
                    <Icon name={item.icon} className="text-[22px]" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#212529]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
