import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Icon from "@/components/Icon";
import { ukBuyerPost } from "@/components/blog/posts";
import Reveal from "@/components/about/Reveal";

export const metadata: Metadata = {
  title: "Dubai Mortgage & Finance Blog | AllWin Finances",
  description:
    "Simple guides, tips and market insights for property buyers, investors and business owners in the UAE.",
};

export default function BlogPage() {
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
              Blog
            </p>
            <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5 max-w-3xl">
              Dubai Mortgage &amp; Finance Blog
            </h1>
            <p className="font-inter text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              Simple guides, tips and market insights for property buyers, investors and business owners in the UAE.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <Reveal>
          <a
            href={ukBuyerPost.href}
            className="group grid lg:grid-cols-12 gap-8 rounded-[2rem] bg-white border border-[#A9C1B8]/60 p-6 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="lg:col-span-4 flex flex-col justify-between">
              <p className="font-inter text-sm text-[#1F4F4A]">{ukBuyerPost.date}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1F4F4A]">
                Read the guide
                <Icon name="arrow_forward" className="text-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-[#385445] tracking-tight mb-4">
                {ukBuyerPost.title}
              </h2>
              <p className="font-inter text-[#26332F]/85 leading-relaxed">{ukBuyerPost.excerpt}</p>
            </div>
          </a>
          </Reveal>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <Reveal>
            <div
              className="rounded-[2rem] px-6 py-14 sm:px-12 text-center text-white"
              style={{ background: "linear-gradient(135deg, #0C665C 0%, #20AA45 42%, #55BBB0 100%)" }}
            >
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold tracking-tight mb-8">
                Have a Question About Your Mortgage?
              </h2>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1F4F4A] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ask an Advisor
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
