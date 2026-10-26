"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "../Icon";
import Reveal from "../about/Reveal";

const FAQ_IMAGE =
  "https://assets.nexuses.xyz/Confused_business_character_compressed_1792993768345_gmck.jpg";

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
  items = faqs,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F3EFE3] py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#1F4F4A] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-3 font-manrope text-2xl font-semibold tracking-tight text-[#55BBB0] sm:text-3xl lg:text-4xl lg:leading-[1.15]">
              Clear answers.
            </p>
            <div className="relative mt-8 aspect-square w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-white/60 shadow-[0_18px_40px_rgba(31,79,74,0.12)] sm:mt-10">
              <Image
                src={FAQ_IMAGE}
                alt="Confused business character asking questions"
                fill
                className="object-contain object-center p-4 sm:p-6"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:mt-[150px]">
            <div className="border-t border-[#A9C1B8]/70">
              {items.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <Reveal key={faq.question} delay={index * 60}>
                    <div className="border-b border-[#A9C1B8]/70">
                      <button
                        type="button"
                        className="faq-toggle flex w-full items-start justify-between gap-4 py-5 text-left shadow-none transition-colors duration-300 sm:py-6"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span
                          className={`font-manrope text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                            isOpen ? "text-[#1F4F4A]" : "text-[#385445]"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-[#55BBB0] text-[#1F4F4A]"
                              : "bg-transparent text-[#1F4F4A] hover:bg-[#55BBB0]/15"
                          }`}
                          aria-hidden="true"
                        >
                          <Icon
                            name={isOpen ? "close" : "add"}
                            className="text-[22px]"
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 font-inter text-sm leading-relaxed text-[#26332F]/75 sm:pb-6 sm:text-base sm:leading-7">
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
        </div>
      </div>
    </section>
  );
}
