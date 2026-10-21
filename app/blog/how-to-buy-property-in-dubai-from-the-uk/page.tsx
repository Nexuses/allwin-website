import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Icon from "@/components/Icon";
import { ukBuyerPost } from "@/components/blog/posts";
import Reveal from "@/components/about/Reveal";

export const metadata: Metadata = {
  title: "How to Buy Property in Dubai From the UK (2026 Guide) | AllWin Finances",
  description:
    "A 2026 guide for UK buyers on choosing Dubai property, preparing documents, and comparing non-resident mortgage options.",
};

export default function UkBuyerGuidePage() {
  return (
    <>
      <Header />
      <main className="w-full bg-[#F3EFE3] text-[#26332F]">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-[144px] pb-16 lg:pt-[176px] lg:pb-24">
          <a href="/blog" className="inline-flex items-center gap-1 font-inter text-sm font-semibold text-[#1F4F4A] mb-8">
            <Icon name="arrow_back" className="text-[18px]" />
            Back to blog
          </a>
          <p className="font-inter text-sm text-[#1F4F4A] mb-4">{ukBuyerPost.date}</p>
          <h1 className="font-manrope text-3xl sm:text-5xl font-bold text-[#385445] tracking-tight leading-tight mb-8">
            {ukBuyerPost.title}
          </h1>
          <Reveal>
          <div className="space-y-5 font-inter text-base sm:text-lg text-[#26332F]/85 leading-relaxed">
            <p>
              Buying in Dubai from the UK is possible, and many buyers do it without living in the UAE. The process is clearer when you separate the property decision from the finance decision, and when you know which documents a bank will ask for before you reserve a unit.
            </p>
            <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-[#385445] tracking-tight pt-4">
              Start with the property and your budget
            </h2>
            <p>
              Decide whether you are buying to live in later, to rent out, or to hold. That choice changes the areas, the service charges and the kind of finance that may fit. Set a budget that includes the property price, fees and a buffer, then shortlist homes you can actually complete on.
            </p>
            <p>
              A local advisor can walk you through the reservation, the sales agreement and the documents the developer or seller will ask for, so you are not guessing from the UK.
            </p>
            <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-[#385445] tracking-tight pt-4">
              What UK buyers usually prepare
            </h2>
            <p>
              Banks and developers typically want proof of identity, address and income, plus details of the property. As a non-resident you should expect a longer document list than a UAE resident. Gather payslips or accounts, bank statements and passport details early, so a reservation is not held up while papers are still in the UK.
            </p>
            <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-[#385445] tracking-tight pt-4">
              Non-resident mortgages
            </h2>
            <p>
              Getting a loan as a non-resident can be tricky, but it is possible. There are several options for non-resident buyers. UAE banks usually ask for more documents and set their own limits on how much they will lend. Rates, eligibility and approval depend on each bank’s policies and your personal profile.
            </p>
            <p>
              AllWin Finances compares Islamic and conventional offers from UAE banks, explains the terms in plain language, and helps you organise the paperwork before you apply.
            </p>
            <p>
              <a
                href="/mortgage-financing#non-resident"
                className="font-semibold text-[#1F4F4A] underline underline-offset-4"
              >
                Read about non-resident mortgage loans in the UAE
              </a>
            </p>
          </div>
          </Reveal>
        </article>

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
