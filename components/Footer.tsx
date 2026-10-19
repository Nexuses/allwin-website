import Image from "next/image";
import { LOGO_URL } from "./Header";
import Icon from "./Icon";
import OfficeMap, { OFFICE_MAP_URL } from "./OfficeMap";

const socialLinks = [
  { label: "Instagram", icon: "photo_camera", href: "#" },
  { label: "Facebook", icon: "thumb_up", href: "#" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mortgage Financing", href: "/mortgage-financing" },
  { label: "SME and Corporate Lending", href: "/sme-corporate-lending" },
  { label: "Consumer Finance", href: "/consumer-finance" },
  { label: "Value-Added Services", href: "/value-added-services" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2227] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <div className="mb-4 bg-transparent">
              <Image
                alt="AllWin Finances"
                className="h-11 w-auto object-contain block bg-transparent"
                style={{ height: 44, maxHeight: 48 }}
                src={LOGO_URL}
                width={220}
                height={48}
              />
            </div>
            <p className="font-inter text-gray-400 text-sm mb-2">
              Business Bay, Dubai, UAE
            </p>
            <p className="font-inter text-gray-400 text-sm mb-2">
              +971-58-5666955
            </p>
            <p className="font-inter text-gray-400 text-sm mb-6">
              contact@allwinfinances.com
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  className="icon-chip w-9 h-9 rounded-full bg-white/10 hover:bg-[#55BBB0] hover:text-[#1e2227] flex items-center justify-center transition-colors text-white"
                  href={social.href}
                >
                  <Icon name={social.icon} className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-manrope text-base font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-inter text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-[#55BBB0] transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-manrope text-base font-bold text-white mb-4">
              Directions
            </h4>
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg bg-gray-800 max-w-xs">
              <OfficeMap className="w-full h-48 border-0" />
              <div className="absolute top-3 left-3">
                <a
                  className="bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-sm shadow-md flex items-center gap-1 hover:bg-gray-100 transition-colors"
                  href={OFFICE_MAP_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Open in Maps</span>
                  <Icon name="open_in_new" className="text-[14px]" />
                </a>
              </div>
              <div className="p-3 bg-[#212529]">
                <span className="text-xs font-medium text-gray-300 block">
                  AllWin Finances • Business Bay, Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 AllWin Finances. All rights reserved.</p>
          <p>
            Authorized Financial &amp; Mortgage Advisory across the United Arab
            Emirates.
          </p>
        </div>
      </div>
    </footer>
  );
}
