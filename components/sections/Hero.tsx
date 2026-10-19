import Icon from "../Icon";

const HERO_BG =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/businessman-using-smartphone-calculator-with-banking-financial-holographic-icons-digital-financial-management-concept.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-5rem)] w-full flex items-center bg-[#1F4F4A] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(20, 28, 28, 0.65)" }}
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#55BBB0] text-xs font-semibold tracking-wider uppercase mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#55BBB0] animate-pulse" />
            UAE MORTGAGE &amp; FINANCIAL ADVISORY
          </div>
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] sm:leading-none mb-6">
            Seamless Finances Solutions Under One Roof.
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed sm:leading-7 mb-8 max-w-xl">
            We Work with all of the UAE Banks &amp; Financial Institutions to get
            you the best offers.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="bg-[#55BBB0] hover:bg-[#20AA45] text-[#1F4F4A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm md:text-base"
              href="#contact"
            >
              <span>Get a Free Quote</span>
              <Icon name="arrow_forward" className="text-[20px]" />
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-300 border border-white/20 flex items-center gap-2 text-sm md:text-base backdrop-blur-xs"
              href="https://wa.me/971585666955"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Chat on WhatsApp</span>
              <Icon name="chat" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
