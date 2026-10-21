import Icon from "../Icon";
import ContactForm from "./ContactForm";
import Reveal from "../about/Reveal";
import { OFFICE_MAP_URL } from "../OfficeMap";

const contactDetails = [
  {
    icon: "location_on",
    title: "Address",
    value: "Business Bay, Dubai, UAE",
    href: OFFICE_MAP_URL,
  },
  {
    icon: "mail",
    title: "Email",
    value: "contact@allwinfinances.com",
    href: "mailto:contact@allwinfinances.com",
  },
  {
    icon: "phone",
    title: "Phone",
    value: "+971-58-5666955",
    href: "tel:+971585666955",
  },
];

export default function Contact() {
  return (
    <section
      className="w-full bg-[#F8F9FA] pt-[30px] pb-20 lg:pt-[62px] lg:pb-28"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <Reveal className="lg:col-span-5 h-full">
            <div className="flex h-full flex-col">
              <p className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-[#E8F8F5] text-[#1F4F4A] text-xs font-semibold uppercase tracking-wider mb-4">
                Contact Us
              </p>
              <h3 className="font-manrope text-3xl font-bold text-[#212529] tracking-tight mb-3">
                Talk to Our Team
              </h3>
              <p className="font-inter text-base text-gray-600 leading-relaxed max-w-md">
                Have a question about a home loan, refinancing or business
                finance? Reach us directly, or send the form and we will get
                back to you as soon as we can.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    {...(detail.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-[#E9ECEF] bg-white px-5 py-4 transition-all duration-300 hover:border-[#55BBB0]/40 hover:shadow-[0_14px_30px_rgba(85,187,176,0.22)]"
                  >
                    <span className="icon-chip w-12 h-12 rounded-xl bg-[#E8F8F5] flex items-center justify-center text-[#55BBB0] shrink-0">
                      <Icon name={detail.icon} className="text-[24px]" />
                    </span>
                    <span>
                      <span className="block font-manrope text-base font-bold text-[#212529]">
                        {detail.title}
                      </span>
                      <span className="block font-inter text-sm text-gray-600">
                        {detail.value}
                      </span>
                    </span>
                    <Icon
                      name="arrow_forward"
                      className="ml-auto text-[20px] text-[#55BBB0]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="lg:col-span-7 h-full bg-white p-8 sm:p-10 rounded-3xl border border-[#E9ECEF] shadow-xs"
          >
            <h3 className="font-manrope text-2xl font-bold text-[#212529] mb-2">
              Get In Touch
            </h3>
            <p className="font-inter text-sm text-gray-600 mb-6">
              Tell us what you need and we will reply as soon as we can.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
