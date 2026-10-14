import Icon from "../Icon";

const features = [
  "Mortgage Financing",
  "Corporate & SME Financing",
  "Consumer Finance products",
  "Value-Add Services",
];

export default function FeatureBar() {
  return (
    <section
      className="w-full py-14 lg:py-16"
      style={{ background: "linear-gradient(135deg, #7be4d6 0%, #55BBB0 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e2227] tracking-tight mb-2">
          No matter what your financing requirements
        </h2>
        <p className="font-inter text-lg sm:text-xl text-[#1e2227]/90 font-medium mb-8">
          we&apos;ve got what you need and much more!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature) => (
            <a
              key={feature}
              className="bg-white hover:bg-white/95 text-[#1e2227] font-semibold py-3.5 px-6 rounded-full shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2"
              href="#products"
            >
              <span>{feature}</span>
              <Icon name="arrow_forward" className="text-[18px] text-[#55BBB0]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
