"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { LOGO_URL } from "./Header";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Mortgage Financing", href: "/mortgage-financing" },
  { label: "SME & Corporate", href: "/sme-corporate-lending" },
  { label: "Consumer Finance", href: "/consumer-finance" },
  { label: "Value-Added Services", href: "/value-added-services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
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

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = email.trim() ? `?email=${encodeURIComponent(email.trim())}` : "";
    window.location.href = `/contact${query}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
    >
      <label className="sr-only" htmlFor="footer-email">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email address"
        className="h-12 w-full flex-1 rounded-2xl border-0 bg-white px-4 font-inter text-sm text-[#26332F] shadow-[0_8px_24px_rgba(15,40,35,0.08)] placeholder:text-[#26332F]/45 focus:outline-none focus:ring-2 focus:ring-[#55BBB0]/60"
      />
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-2xl bg-[#1F4F4A] px-5 font-manrope text-sm font-semibold text-white transition-colors hover:bg-[#0C665C]"
      >
        Subscribe
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#E8EEEA] pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-manrope text-[18vw] font-extrabold leading-none tracking-tight text-[#1F4F4A]/[0.05]"
      >
        AllWin
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-5">
          {/* Brand panel */}
          <div
            className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] p-7 sm:min-h-[360px] sm:p-8 lg:rounded-[32px]"
            style={{
              background:
                "linear-gradient(165deg, #55BBB0 0%, #20AA45 42%, #0C665C 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
            />
            <a href="/" className="relative inline-flex w-fit">
              <Image
                alt="AllWin Finances"
                className="h-10 w-auto object-contain sm:h-11"
                src={LOGO_URL}
                width={220}
                height={48}
                style={{ height: 44, maxHeight: 48 }}
              />
            </a>

            <div className="relative mt-16 sm:mt-20">
              <p className="max-w-[16ch] font-manrope text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.65rem]">
                Seamless finance solutions under one roof.
              </p>

              <div className="mt-8">
                <p className="mb-3 font-manrope text-sm font-semibold uppercase tracking-wide text-white/85">
                  Stay in touch
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      aria-label={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3531]/85 text-white transition-transform hover:-translate-y-0.5 hover:bg-[#132926]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px] fill-current"
                        aria-hidden="true"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links + newsletter panel */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#F7F8F6] p-7 sm:p-8 lg:rounded-[32px] lg:p-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <h4 className="mb-4 font-manrope text-base font-bold text-[#26332F]">
                  Navigation
                </h4>
                <ul className="space-y-2.5 font-inter text-sm text-[#26332F]/70">
                  {navigationLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-[#0C665C]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-manrope text-base font-bold text-[#26332F]">
                  Company
                </h4>
                <ul className="space-y-2.5 font-inter text-sm text-[#26332F]/70">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-[#0C665C]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-8 border-t border-[#1F4F4A]/10 pt-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
              <p className="order-2 font-inter text-xs text-[#26332F]/50 lg:order-1">
                © 2026 AllWin Finances. All rights reserved.
              </p>

              <div className="order-1 w-full max-w-md lg:order-2">
                <p className="mb-3 font-inter text-sm leading-snug text-[#26332F]/55">
                  Finance moves fast.{" "}
                  <span className="font-manrope font-semibold text-[#26332F]">
                    Stay ahead with AllWin.
                  </span>
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 px-1 font-inter text-[11px] leading-relaxed text-[#26332F]/45 sm:text-xs">
          Authorized Financial &amp; Mortgage Advisory across the United Arab
          Emirates · Business Bay, Dubai ·{" "}
          <a href="tel:+971585666955" className="hover:text-[#0C665C]">
            +971-58-5666955
          </a>{" "}
          ·{" "}
          <a
            href="mailto:contact@allwinfinances.com"
            className="hover:text-[#0C665C]"
          >
            contact@allwinfinances.com
          </a>
        </p>
      </div>
    </footer>
  );
}
