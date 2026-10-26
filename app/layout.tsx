import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import ScrollToHero from "@/components/ScrollToHero";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AllWin Finances | Seamless Finance Solutions Under One Roof",
  description:
    "Access tailored mortgage, business finance and wealth solutions with experts who understand UAE markets, banking requirements and your long-term goals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font -- icon font must block so ligature names never render as text */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
        <Script id="scroll-to-hero-on-refresh" strategy="beforeInteractive">
          {`(function(){try{var entry=performance.getEntriesByType("navigation")[0];if(!entry||entry.type!=="reload")return;if("scrollRestoration"in history)history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search);var pin=function(){window.scrollTo(0,0)};pin();document.addEventListener("DOMContentLoaded",pin);window.addEventListener("load",function(){pin();requestAnimationFrame(pin)})}catch(e){}})();`}
        </Script>
      </head>
      <body className="bg-surface text-[#26332F] antialiased selection:bg-[#55BBB0]/30 selection:text-[#26332F]">
        <SmoothScroll />
        <ScrollToHero />
        {children}
      </body>
    </html>
  );
}
