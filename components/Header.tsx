"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export const LOGO_URL =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/ChatGPT%20Image%20Sep%2029%2c%202026%2c%2002_21_58%20PM.png";

const financeServices = [
  {
    title: "Mortgages",
    text: "Home loans, refinance, equity release",
    href: "/mortgage-financing",
  },
  {
    title: "Business finance",
    text: "SME and corporate lending",
    href: "/sme-corporate-lending",
  },
  {
    title: "Consumer Finance",
    text: "Loans, car finance, credit cards",
    href: "/consumer-finance",
  },
];

const supportServices = [
  {
    title: "Value-Added Services",
    text: "Property, business setup, visas, insurance",
    href: "/value-added-services",
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuOpenRef = useRef(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (menuOpenRef.current) {
        setHidden(false);
      } else if (currentY < 80) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(updateHeader);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-6 pt-3">
        <div className="flex h-16 items-center justify-between px-3 sm:px-6 lg:px-8 rounded-2xl bg-[#1e2227]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
          <a className="flex items-center py-2 bg-transparent shrink-0" href="/">
            <Image
              alt="AllWin Finances"
              className="h-10 w-auto object-contain block bg-transparent"
              src={LOGO_URL}
              width={240}
              height={52}
              preload
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-5 lg:gap-8">
            <nav className="hidden lg:flex items-center gap-1">
              <a
                className="px-3.5 py-2 text-white/85 hover:text-[#55BBB0] font-medium text-[15px] rounded-full transition-colors hover:bg-white/5"
                href="/"
              >
                Home
              </a>

              <div className="relative group py-2">
                <button className="text-white/85 group-hover:text-[#55BBB0] font-medium text-[15px] flex items-center gap-1 px-3.5 py-2 rounded-full transition-colors hover:bg-white/5">
                  <span>Services</span>
                  <Icon
                    name="expand_more"
                    className="text-[18px] transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute top-full left-0 w-[520px] pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="bg-white border border-[#E9ECEF] rounded-2xl p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] grid grid-cols-2 gap-8">
                    <div>
                      <p className="font-inter text-sm text-[#6c757d] mb-4">Finance</p>
                      <div className="flex flex-col gap-4">
                        {financeServices.map((item) => (
                          <a key={item.title} href={item.href} className="group/item block">
                            <span className="font-manrope font-bold text-[#212529] text-[15px] leading-snug block group-hover/item:text-[#1F4F4A]">
                              {item.title}
                            </span>
                            <span className="font-inter text-sm text-[#6c757d] leading-snug block mt-0.5">
                              {item.text}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-inter text-sm text-[#6c757d] mb-4">Support</p>
                      {supportServices.map((item) => (
                        <a key={item.title} href={item.href} className="group/item block">
                          <span className="font-manrope font-bold text-[#212529] text-[15px] leading-snug block group-hover/item:text-[#1F4F4A]">
                            {item.title}
                          </span>
                          <span className="font-inter text-sm text-[#6c757d] leading-snug block mt-0.5">
                            {item.text}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="px-3.5 py-2 text-white/85 hover:text-[#55BBB0] font-medium text-[15px] rounded-full transition-colors hover:bg-white/5"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              className="hidden lg:inline-flex bg-[#55BBB0] hover:bg-[#44aba0] text-[#1e2227] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_8px_24px_rgba(85,187,176,0.35)] hover:-translate-y-0.5 items-center gap-1.5 whitespace-nowrap"
              href="/contact"
            >
              <span>Get Free Consultation</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>

            <button
              type="button"
              className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="text-[24px] sm:text-[26px]" />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="mt-2 max-h-[calc(100svh-6.5rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#1e2227]/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 font-manrope text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Home
              </a>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-manrope text-base font-semibold text-white transition-colors hover:bg-white/5"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <span>Services</span>
                <Icon
                  name="expand_more"
                  className={`text-[22px] text-[#55BBB0] transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-3 pb-1 pt-2 font-inter text-xs font-semibold uppercase tracking-wider text-[#55BBB0]">
                    Finance
                  </p>
                  {financeServices.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl py-2.5 pl-6 pr-3 transition-colors hover:bg-white/5"
                    >
                      <span className="block font-manrope text-[15px] font-semibold text-white/90">
                        {item.title}
                      </span>
                      <span className="block font-inter text-sm text-white/60">
                        {item.text}
                      </span>
                    </a>
                  ))}
                  <p className="px-3 pb-1 pt-3 font-inter text-xs font-semibold uppercase tracking-wider text-[#55BBB0]">
                    Support
                  </p>
                  {supportServices.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl py-2.5 pl-6 pr-3 transition-colors hover:bg-white/5"
                    >
                      <span className="block font-manrope text-[15px] font-semibold text-white/90">
                        {item.title}
                      </span>
                      <span className="block font-inter text-sm text-white/60">
                        {item.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 font-manrope text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#55BBB0] px-6 py-3 text-sm font-semibold text-[#1e2227] shadow-md transition-all duration-300 hover:bg-[#44aba0]"
              >
                <span>Get Free Consultation</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
