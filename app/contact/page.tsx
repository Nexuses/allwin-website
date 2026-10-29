import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Icon from "@/components/Icon";
import OfficeMap, { OFFICE_MAP_URL } from "@/components/OfficeMap";
import ContactPageForm from "@/components/contact/ContactPageForm";
import Reveal from "@/components/about/Reveal";

const socials = [
  { label: "Instagram", icon: "photo_camera", href: "#" },
  { label: "Facebook", icon: "thumb_up", href: "#" },
  { label: "LinkedIn", icon: "work", href: "#" },
  { label: "Google Business Profile", icon: "location_on", href: OFFICE_MAP_URL },
];

export const metadata: Metadata = {
  title: "Contact AllWin Finances | Mortgage & Finance Experts UAE",
  description:
    "Contact AllWin Finances for expert assistance with mortgages, SME financing, corporate lending and financial solutions in Dubai and across the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full bg-[#F3EFE3] text-[#26332F]">
        <section className="relative overflow-hidden bg-[#1F4F4A] text-white">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #55BBB0, transparent 70%)" }}
          />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-[144px] pb-16 lg:pt-[176px] lg:pb-24">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#55BBB0] text-xs font-semibold uppercase tracking-wider mb-5">
              Contact
            </p>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5 max-w-3xl">
              Contact AllWin Finances
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              Talk to a mortgage and finance specialist in Business Bay, Dubai.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
          <Reveal>
          <p className="font-inter text-base sm:text-lg text-[#26332F]/85 leading-relaxed max-w-3xl">
            Have a question about a home loan, refinancing or business finance? Call us, message us on{" "}
            <a
              href="https://wa.me/971585666955"
              className="font-semibold text-[#1F4F4A] underline underline-offset-4"
            >
              WhatsApp
            </a>{" "}
            or send us a note. We will get back to you as soon as we can.
          </p>
          </Reveal>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5">
          <div>
            <h2 className="font-manrope text-3xl font-bold text-[#385445] tracking-tight mb-6">
              How to Reach Us
            </h2>
            <ul className="space-y-5">
              <li className="group flex gap-4">
                <span className="icon-chip w-12 h-12 rounded-xl bg-[#1F4F4A] text-[#55BBB0] flex items-center justify-center shrink-0">
                  <Icon name="call" className="text-[22px]" />
                </span>
                <div>
                  <p className="font-manrope font-bold text-[#385445]">Call us</p>
                  <a href="tel:+971585666955" className="font-inter text-[#26332F]/85 hover:text-[#1F4F4A]">
                    +971-58-5666955
                  </a>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="icon-chip w-12 h-12 rounded-xl bg-[#1F4F4A] text-[#55BBB0] flex items-center justify-center shrink-0">
                  <Icon name="location_on" className="text-[22px]" />
                </span>
                <div>
                  <p className="font-manrope font-bold text-[#385445]">Address</p>
                  <p className="font-inter text-[#26332F]/85">Business Bay, Dubai, UAE</p>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="icon-chip w-12 h-12 rounded-xl bg-[#1F4F4A] text-[#55BBB0] flex items-center justify-center shrink-0">
                  <Icon name="mail" className="text-[22px]" />
                </span>
                <div>
                  <p className="font-manrope font-bold text-[#385445]">Email</p>
                  <a
                    href="mailto:contact@allwinfinances.com"
                    className="font-inter text-[#26332F]/85 hover:text-[#1F4F4A]"
                  >
                    contact@allwinfinances.com
                  </a>
                </div>
              </li>
              <li className="group flex gap-4">
                <span className="icon-chip w-12 h-12 rounded-xl bg-[#1F4F4A] text-[#55BBB0] flex items-center justify-center shrink-0">
                  <Icon name="schedule" className="text-[22px]" />
                </span>
                <div>
                  <p className="font-manrope font-bold text-[#385445]">Opening hours</p>
                  <p className="font-inter text-[#26332F]/85">Call or message us to confirm today’s hours.</p>
                </div>
              </li>
            </ul>

            <h2 className="font-manrope text-2xl font-bold text-[#385445] tracking-tight mt-10 mb-4">
              Follow Us
            </h2>
            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-11 h-11 rounded-full bg-white border border-[#A9C1B8]/70 text-[#1F4F4A] flex items-center justify-center hover:bg-[#1F4F4A] hover:text-[#55BBB0] transition-colors"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon name={item.icon} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 bg-white rounded-[2rem] border border-[#A9C1B8]/60 p-6 sm:p-10">
            <h2 className="font-manrope text-3xl font-bold text-[#385445] tracking-tight mb-6">
              Send Us a Message
            </h2>
            <ContactPageForm />
          </Reveal>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
          <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden border border-[#A9C1B8]/60 bg-[#1F4F4A]">
            <OfficeMap className="w-full h-72 sm:h-96 border-0" />
            <a
              href={OFFICE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-white text-[#1F4F4A] text-sm font-semibold px-4 py-2 rounded-full shadow-md"
            >
              Open in Maps
            </a>
          </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
