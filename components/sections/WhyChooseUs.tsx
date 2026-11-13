import Icon from "../Icon";
import Reveal from "../about/Reveal";

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
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-4 font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C665C]">
            Why AllWin Finances?
          </p>
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#26332F] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Your Trusted Mortgage Partner{" "}
            <span className="text-[#0C665C]">in the UAE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-[#26332F]/70 sm:text-base">
            We don&apos;t just arrange loans. We give you clarity, comfort and
            confidence.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 70} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[24px] bg-white p-7 text-[#26332F] shadow-[0_18px_40px_rgba(31,79,74,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-[#1F4F4A] hover:via-[#0C665C] hover:to-[#145C52] hover:text-white hover:shadow-[0_24px_50px_rgba(12,102,92,0.28)] sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#55BBB0]/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1F4F4A] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#1F4F4A]">
                    <Icon name={reason.icon} className="text-[22px]" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-manrope text-lg font-bold tracking-tight sm:text-xl">
                      {reason.title}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-[#26332F]/65 transition-colors duration-300 group-hover:text-white/80 sm:text-[15px] sm:leading-6">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 font-manrope text-sm font-semibold text-[#0C665C] transition-colors hover:text-[#20AA45]"
          >
            About Us
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
