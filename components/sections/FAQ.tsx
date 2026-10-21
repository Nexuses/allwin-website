"use client";

import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const faqs = [
  {
    question: "What does a mortgage broker do in Dubai?",
    answer:
      "A mortgage broker helps you find and apply for a home loan. At AllWin Finances, we compare offers from UAE banks, explain the terms in plain language, prepare your paperwork and stay in touch with the bank until your loan is approved.",
  },
  {
    question: "Why use a mortgage broker instead of going straight to a bank?",
    answer:
      "A bank can only offer its own products. A broker compares several banks at once, so you can see more options and rates in one place. This saves you time and helps you make a more informed choice.",
  },
  {
    question: "Do you offer Islamic mortgages?",
    answer:
      "Yes. We work with both Islamic and conventional finance. This lets you compare Islamic home finance, which uses a profit rate, with a conventional mortgage, which uses an interest rate.",
  },
  {
    question: "Can non-residents get a mortgage in the UAE?",
    answer:
      "In many cases, yes. Non-residents can apply for a UAE mortgage, but banks usually ask for more documents and set their own limits on how much they will lend. We explain your options, help you prepare your documents and compare banks for you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Call or WhatsApp us on +971-58-5666955, or fill in the quote form on this page. A specialist will review your needs and get back to you.",
  },
];

type FaqItem = { question: string; answer: string };

export default function FAQ({
  title = "Frequently Asked Questions",
  intro = "Clear answers to common questions about mortgages and finance in the UAE.",
  items = faqs,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-[#385445] tracking-tight mb-3">
            {title}
          </h2>
          <p className="font-inter text-gray-600 text-base sm:text-lg">{intro}</p>
        </Reveal>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 70}>
              <div
                className={`rounded-2xl border transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-[#55BBB0]/40 bg-[#A9C1B8]/50"
                    : "border-[#A9C1B8] bg-[#F3EFE3] hover:border-[#55BBB0]/25"
                }`}
              >
                <button
                  type="button"
                  className="faq-toggle w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 shadow-none"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-manrope text-base sm:text-lg font-semibold text-[#385445] pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#55BBB0] text-[#1F4F4A] rotate-180"
                        : "bg-white text-[#55BBB0] border border-[#A9C1B8]"
                    }`}
                  >
                    <Icon name="expand_more" className="text-[22px]" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed px-5 sm:px-6 pb-5 pt-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
