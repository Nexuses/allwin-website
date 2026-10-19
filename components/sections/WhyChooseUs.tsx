import Icon from "../Icon";

const reasons = [
  {
    icon: "account_balance",
    title: "Access to UAE Banks",
    description:
      "We work with major conventional and Islamic banks, so you can compare more options and rates in one place.",
  },
  {
    icon: "support_agent",
    title: "Clear Mortgage Advice",
    description:
      "We explain every step in plain language, from the first document to final approval.",
  },
  {
    icon: "schedule",
    title: "Saves You Time",
    description:
      "We compare lenders, negotiate for you and handle the paperwork, so you can focus on your goals.",
  },
  {
    icon: "person_check",
    title: "Solutions Made for You",
    description:
      "No two clients are the same. We match every mortgage and finance option to your needs and profile.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#212529] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight sm:leading-10">
              Why Choose AllWin Finances?
            </h2>
            <h3 className="font-manrope text-lg font-semibold text-[#55BBB0] mb-6">
              Your Trusted Mortgage Partner in the UAE
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed text-sm sm:text-base sm:leading-6 mb-8">
              We don&apos;t just arrange loans. We give you clarity, comfort and
              confidence.
            </p>
            <a
              className="group/btn bg-[#55BBB0] hover:bg-[#20AA45] text-[#1e2227] font-semibold px-7 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 text-sm shadow-md hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(85,187,176,0.45)]"
              href="/about"
            >
              <span>About Us</span>
              <Icon name="arrow_forward" className="text-[18px] transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="why-card group bg-[#1e2227] p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#55BBB0]/70 hover:shadow-[0_18px_40px_rgba(85,187,176,0.35)]"
              >
                <div className="icon-chip w-12 h-12 rounded-xl bg-[#55BBB0]/10 text-[#55BBB0] flex items-center justify-center mb-4">
                  <Icon name={reason.icon} className="text-[26px]" />
                </div>
                <h4 className="font-manrope text-lg font-bold text-white mb-2">
                  {reason.title}
                </h4>
                <p className="font-inter text-gray-400 text-xs sm:text-sm leading-relaxed sm:leading-5">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
