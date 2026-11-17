import Icon from "@/components/Icon";
import OfficeMap, { OFFICE_MAP_URL } from "@/components/OfficeMap";
import Reveal from "@/components/about/Reveal";
import ContactPageForm from "./ContactPageForm";

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5A3.95 3.95 0 0 0 16.25 3.8zm8.85 1.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1zm0 1.8A3.1 3.1 0 1 0 15.1 12 3.1 3.1 0 0 0 12 8.9z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 22v-8.1h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.2h2.7V22z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.2 9H3.5v11.5h2.7zm-1.35-5.1a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM20.5 13.3c0-3-1.6-4.4-3.8-4.4a3.3 3.3 0 0 0-3 1.6V9H11v11.5h2.7v-5.8c0-.3 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.7v5.6H21z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971585666955",
    path: "M12.04 2.1a9.8 9.8 0 0 0-8.4 14.8L2.4 21.9l5.2-1.36a9.8 9.8 0 1 0 4.44-18.44zm5.7 14.1a8.1 8.1 0 0 1-9.1 1.35l-.45-.27-3.1.81.83-3-.28-.47a8.1 8.1 0 1 1 12.1 1.58zm-1.95-4.55c-.16-.08-.94-.46-1.08-.52s-.25-.08-.36.08-.41.52-.5.62-.19.12-.35.04a5.6 5.6 0 0 1-2.75-2.4c-.2-.35.2-.33.56-1.1.06-.12.03-.23 0-.31s-.36-.87-.49-1.19-.26-.27-.36-.28h-.3c-.1 0-.27.04-.41.2s-.54.53-.54 1.28.55 1.49.63 1.59a7.5 7.5 0 0 0 3.4 2.86c1.2.48 1.7.46 2.3.39.35-.05 1.07-.44 1.22-.86s.15-.79.1-.86-.15-.12-.31-.2z",
  },
];

export default function ContactView() {
  return (
    <div className="bg-[#F7F8F6] text-[#26332F]">
      <section className="px-3 pb-10 pt-[96px] sm:px-5 sm:pb-14 sm:pt-[112px] lg:px-8">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_rgba(12,40,38,0.14)] sm:rounded-[2rem] lg:min-h-[720px] lg:rounded-[2.5rem]">
          <div
            className="relative px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16 lg:px-14 lg:pb-28 lg:pt-20"
            style={{
              background:
                "linear-gradient(145deg, #0C665C 0%, #1F4F4A 48%, #132926 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[18%] top-0 h-64 w-64 rounded-full bg-[#55BBB0]/20 blur-3xl"
            />
            <Reveal className="relative z-[1] max-w-xl lg:max-w-[48%]">
              <h1 className="font-manrope text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                Let&apos;s find the right finance for you
              </h1>
              <p className="mt-5 font-inter text-sm leading-relaxed text-white/75 sm:text-base">
                Tell us about your mortgage, refinancing or business finance
                needs. Our advisors in Business Bay will get back to you with
                clear next steps.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={100}
            className="relative z-10 -mt-10 px-6 sm:-mt-14 sm:px-10 lg:absolute lg:right-10 lg:top-14 lg:mt-0 lg:w-[min(100%,440px)] lg:px-0 xl:right-14 xl:w-[460px]"
          >
            <div className="rounded-[1.35rem] border border-[#E8ECE9] bg-white p-5 shadow-[0_28px_70px_rgba(12,40,38,0.18)] sm:p-7 lg:p-8">
              <ContactPageForm />
            </div>
          </Reveal>

          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:max-w-[48%] lg:px-14 lg:py-12">
            <Reveal>
              <div className="space-y-5">
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-[#1F4F4A]/55">
                    Email
                  </p>
                  <a
                    href="mailto:contact@allwinfinances.com"
                    className="mt-1 inline-block font-manrope text-lg font-semibold text-[#1F4F4A] transition hover:text-[#0C665C]"
                  >
                    contact@allwinfinances.com
                  </a>
                </div>
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-[#1F4F4A]/55">
                    Phone
                  </p>
                  <a
                    href="tel:+971585666955"
                    className="mt-1 inline-block font-manrope text-lg font-semibold text-[#1F4F4A] transition hover:text-[#0C665C]"
                  >
                    +971-58-5666955
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4F4A] text-white transition hover:bg-[#0C665C]"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d={item.path} />
                      </svg>
                    </a>
                  ))}
                </div>

                <a
                  href="https://wa.me/971585666955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 pt-1 font-manrope text-base font-semibold text-[#1F4F4A] transition hover:text-[#0C665C]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d={socials[3].path} />
                    </svg>
                  </span>
                  +971-58-5666955
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-3 pb-16 sm:px-5 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <div>
              <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#1F4F4A] sm:text-4xl">
                Office
              </h2>
              <p className="mt-4 max-w-md font-inter text-sm leading-relaxed text-[#26332F]/70 sm:text-base">
                Visit our office in Business Bay, or get in touch and we will
                help you from wherever you are in the UAE.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5F2] text-[#1F4F4A]">
                    <Icon name="home" className="text-[20px]" />
                  </span>
                  <div>
                    <h3 className="font-manrope text-lg font-bold text-[#385445]">
                      Dubai
                    </h3>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-[#26332F]/70">
                      Business Bay, Dubai, United Arab Emirates
                    </p>
                    <a
                      href={OFFICE_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 font-inter text-sm font-semibold text-[#0C665C] hover:underline"
                    >
                      Open in Maps
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5F2] text-[#1F4F4A]">
                    <Icon name="schedule" className="text-[20px]" />
                  </span>
                  <div>
                    <h3 className="font-manrope text-lg font-bold text-[#385445]">
                      Business hours
                    </h3>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-[#26332F]/70">
                      Monday to Friday: 9:00 AM to 6:00 PM
                      <br />
                      Saturday to Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#E0E6E3] bg-white shadow-[0_18px_50px_rgba(12,40,38,0.08)] sm:rounded-[1.75rem]">
              <OfficeMap className="h-[280px] w-full border-0 sm:h-[360px] lg:h-[400px]" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
