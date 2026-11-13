import Icon from "../Icon";
import Reveal from "../about/Reveal";

export default function Contact() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24" id="contact">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[28px] px-8 py-12 sm:rounded-[32px] sm:px-12 sm:py-14 lg:px-16 lg:py-16"
            style={{
              background:
                "linear-gradient(135deg, #0C665C 0%, #1F4F4A 48%, #0C665C 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(243,239,227,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,239,227,0.55) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />

            <div className="relative max-w-2xl">
              <h2 className="font-manrope text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Ready to find a clearer path to finance?
              </h2>
              <p className="mt-4 max-w-xl font-inter text-sm leading-relaxed text-white/85 sm:text-base sm:leading-7">
                Have a question about a home loan, refinancing or business
                finance? Our team is ready to help you compare options with
                confidence.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-manrope text-sm font-semibold text-[#1F4F4A] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3EFE3]"
              >
                Get in touch
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
