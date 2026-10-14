import Image from "next/image";
import Icon from "../Icon";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtZT39uMrOzvhqQuy0mYnL_69NroPhn_MXs1uib68T_JcdMr0-9jqs-AKJrZbLr7H7ZPHkjuBaOyeya8O4zlAmqFEX8EfZ1ofVoZCJZdULGAm0uyp_W4sm8AWOauiTRqsuzce4c_LG_45VCfe3GonXld39FhTR_j8jK5JNBDdBEysTiswku9Rum_7ZJXm8QqjpeTIHfxgLtBME6qH_iFtbdyXaa5ZlLNTelF7ojSk05rulWEfGjhX";

const EXPERTS_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB51E08sqpKpZ_DmbjQ1Kre5Tbr2ihcw7AkZexhCdDN2u9V4zEwJ_NxdPpLByOQM1qdeAnWHNgNX5IHAfMdK9BxjmdBymLr6yMbvp7oUaihX9C5oRZI7F5k-xp9PWL1U_8KsU-CHp_qJylSV85Buzas6WgjrsCdcf5WYdUtg_Sy0mzegAX1mJVGL-fupbsnh6eaIOpAbLRsRk_9oo8MZNsyODSQ5nufju0Nd3YCFhlRwcop4tWyz4oN";

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
    <section className="w-full py-20 lg:py-28 bg-[#FFFFFF]" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <FramedImage
              src={ABOUT_IMAGE}
              alt="Expert Finance Solutions"
              tilt="-rotate-2"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Eyebrow>Our Foundation</Eyebrow>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight mb-2">
              About Us
            </h2>
            <h3 className="font-poppins text-xl font-semibold text-[#55BBB0] mb-6">
              Expert Finance Solutions Tailored for You
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-base mb-6">
              At <strong className="text-[#212529]">AllWin Finances</strong>, our
              team brings together decades of collective experience in
              International and Local banking — spanning Consumer Finance,
              Product Structuring, Sales, AML, and regulatory compliance. We
              deliver end-to-end solutions tailored to meet your financing and
              wealth management needs.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#E8F8F5] flex items-center justify-center text-[#55BBB0]">
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Executive Leadership</Eyebrow>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[#212529] tracking-tight mb-2">
              Meet the Experts Behind AllWin Finances
            </h2>
            <h3 className="font-poppins text-xl font-semibold text-[#55BBB0] mb-6">
              Driven by Passion. Backed by Experience.
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed text-base mb-6">
              Our Directors and Management Team are seasoned bankers with
              extensive experience in{" "}
              <strong className="text-[#212529]">international banking</strong>,
              especially in{" "}
              <strong className="text-[#212529]">
                Mortgage, SME, and Corporate Finance Solutions
              </strong>{" "}
              across multiple regions. What truly sets them apart is their
              passion for putting their knowledge to work for you, creating real
              value for every stakeholder involved in the process.
            </p>
            <a
              className="inline-flex items-center gap-2 bg-[#212529] hover:bg-[#1e2227] text-white font-medium px-6 py-3 rounded-full text-sm transition-all"
              href="#contact"
            >
              <span>Schedule Advisory Call</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <FramedImage
              src={EXPERTS_IMAGE}
              alt="Meet the Experts"
              tilt="rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
