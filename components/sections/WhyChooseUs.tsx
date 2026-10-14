import Icon from "../Icon";

const reasons = [
  {
    icon: "account_balance",
    title: "Access to All UAE banks",
    description:
      "We partner with all major banks and financial institutions — both conventional and Islamic — giving you more choices and better rates.",
  },
  {
    icon: "support_agent",
    title: "Expert Mortgage Advice",
    description:
      "Our experienced team ensures you understand every aspect of the financing process — from paperwork to final approvals.",
  },
  {
    icon: "schedule",
    title: "Time-Saving & Hassle-Free",
    description:
      "We do the legwork, compare lenders, negotiate on your behalf, and streamline the entire process — so you can focus on your goals.",
  },
  {
    icon: "person_check",
    title: "Personalized Solutions",
    description:
      "No two clients are the same. We tailor every mortgage and finance option to fit your unique needs and profile. Mortgage Solutions as flexible as you wish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#212529] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight sm:leading-10">
              Why Choose AllWin Finances?
            </h2>
            <h3 className="font-poppins text-lg font-semibold text-[#55BBB0] mb-6">
              Your Trusted Mortgage Partner in the UAE
            </h3>
            <p className="font-inter text-gray-300 leading-relaxed text-sm sm:text-base sm:leading-6 mb-6">
              With access to all lenders, personalized advice, and unmatched
              market expertise — we bring the{" "}
              <strong className="text-white">best financing solutions</strong>{" "}
              directly to you.
            </p>
            <p className="font-inter text-gray-300 leading-relaxed text-sm sm:text-base sm:leading-6 mb-8">
              We don&apos;t just offer loans — we offer clarity, comfort, and
              confidence.
            </p>
            <a
              className="bg-[#55BBB0] hover:bg-[#44aba0] text-[#1e2227] font-semibold px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 text-sm shadow-md"
              href="#about"
            >
              <span>About Us</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-[#1e2227] p-6 rounded-2xl border border-white/10 hover:border-[#55BBB0]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#55BBB0]/10 text-[#55BBB0] flex items-center justify-center mb-4">
                  <Icon name={reason.icon} className="text-[26px]" />
                </div>
                <h4 className="font-poppins text-lg font-bold text-white mb-2">
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
