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

const OPEN_BORDER =
  "linear-gradient(120deg, #0C665C 0%, #20AA45 42%, #55BBB0 78%, #A9C1B8 100%)";

export default function FAQ({
  title = "Frequently Asked Questions",
  intro,
  items = faqs,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: FaqItem[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lockedIndex, setLockedIndex] = useState<number | null>(null);
  const [hoverPaused, setHoverPaused] = useState(false);

  const openIndex = hoverPaused ? lockedIndex : hoveredIndex;

  const onItemEnter = (index: number) => {
    if (hoverPaused) return;
    setHoveredIndex(index);
  };

  const onItemLeave = () => {
    if (hoverPaused) return;
    setHoveredIndex(null);
  };

  const onItemClick = (index: number) => {
    if (hoverPaused && lockedIndex === index) {
      setHoverPaused(false);
      setLockedIndex(null);
      setHoveredIndex(index);
      return;
    }

    setLockedIndex(index);
    setHoverPaused(true);
    setHoveredIndex(index);
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-10 text-center sm:mb-12">
          <h2 className="font-manrope text-3xl font-bold tracking-tight text-[#26332F] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            {title}
          </h2>
          {intro ? (
            <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-[#26332F]/65 sm:text-base">
              {intro}
            </p>
          ) : (
            <p className="mx-auto mt-3 font-inter text-base text-[#26332F]/60">
              Clear answers.
            </p>
          )}
        </Reveal>

        <div className="flex flex-col gap-3.5 sm:gap-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={faq.question} delay={index * 50}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onMouseEnter={() => onItemEnter(index)}
                  onMouseLeave={onItemLeave}
                  onFocus={() => onItemEnter(index)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      onItemLeave();
                    }
                  }}
                  onClick={() => onItemClick(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onItemClick(index);
                    }
                  }}
                  className={`rounded-[28px] p-[1.5px] transition-all duration-300 ${
                    isOpen
                      ? "shadow-[0_18px_40px_rgba(31,79,74,0.12)]"
                      : "shadow-[0_10px_28px_rgba(31,79,74,0.06)]"
                  }`}
                  style={{
                    background: isOpen ? OPEN_BORDER : "transparent",
                  }}
                >
                  <div
                    className={`rounded-[26.5px] px-4 py-4 transition-colors duration-300 sm:px-5 sm:py-5 ${
                      isOpen ? "bg-white" : "bg-white/75"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-manrope text-xs font-semibold transition-colors duration-300 sm:h-10 sm:w-10 sm:text-sm ${
                          isOpen
                            ? "bg-[#E9EFEE] text-[#1F4F4A]"
                            : "bg-[#E9EFEE]/90 text-[#26332F]/70"
                        }`}
                      >
                        {number}
                      </span>

                      <span
                        className={`min-w-0 flex-1 font-manrope text-[15px] leading-snug tracking-tight transition-all duration-300 sm:text-base ${
                          isOpen
                            ? "font-bold text-[#26332F]"
                            : "font-medium text-[#26332F]/85"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                          isOpen
                            ? "border border-[#55BBB0] bg-white text-[#1F4F4A]"
                            : "bg-[#1F4F4A] text-white"
                        }`}
                        aria-hidden="true"
                      >
                        <Icon
                          name={isOpen ? "close" : "add"}
                          className="text-[20px]"
                        />
                      </span>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-1 pl-12 pr-12 pt-3 font-inter text-sm leading-relaxed text-[#26332F]/65 sm:pl-[3.25rem] sm:pr-14 sm:text-[15px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
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
