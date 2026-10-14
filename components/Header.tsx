import Image from "next/image";
import Icon from "./Icon";

export const LOGO_URL =
  "https://22527425.fs1.hubspotusercontent-na2.net/hubfs/22527425/Allwin%20Finance/ChatGPT%20Image%20Sep%2029%2c%202026%2c%2002_21_58%20PM.png";

const solutions = [
  "Real Estate Mortgage",
  "SME & Corporate Lending",
  "Consumer Finance Products",
];

const navLinks = [
  { label: "How We Help", href: "#refinance" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#212529] border-b border-white/10 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        <a className="flex items-center py-2 bg-transparent" href="#">
          <Image
            alt="AllWin Finances"
            className="h-12 w-auto object-contain block bg-transparent"
            style={{ height: 48, maxHeight: 52 }}
            src={LOGO_URL}
            width={240}
            height={52}
            preload
          />
        </a>
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-7">
            <a
              className="text-[#55BBB0] font-medium text-[15px] transition-colors"
              href="#"
            >
              Home
            </a>
            <div className="relative group py-2">
              <button className="text-white/85 group-hover:text-[#55BBB0] font-medium text-[15px] flex items-center gap-1 transition-colors">
                <span>Solutions</span>
                <Icon
                  name="expand_more"
                  className="text-[18px] transition-transform group-hover:rotate-180"
                />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-64 pt-2">
                <div className="bg-[#1e2227] border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1">
                  {solutions.map((item) => (
                    <a
                      key={item}
                      className="px-4 py-2.5 rounded-lg text-white/85 hover:bg-white/5 hover:text-[#55BBB0] text-sm transition-colors"
                      href="#products"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-white/85 hover:text-[#55BBB0] font-medium text-[15px] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              className="bg-[#55BBB0] hover:bg-[#44aba0] text-[#1e2227] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-1.5"
              href="#contact"
            >
              <span>Get Free Consultation</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
