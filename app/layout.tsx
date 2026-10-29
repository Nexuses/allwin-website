import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Manrope } from "next/font/google";
import ScrollToHero from "@/components/ScrollToHero";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const GTM_ID = "GTM-KZB4L3GF";
const GA_MEASUREMENT_ID = "G-QR7T529SXG";

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
  title: "AllWin Finances | Mortgage & Financial Solutions in UAE",
  description:
    "AllWin Finances offers expert mortgage, SME and corporate financing solutions in the UAE. Compare banking options and find the right financial solution.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager — early head inject via beforeInteractive */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font -- icon font must block so ligature names never render as text */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
        <Script id="scroll-to-hero-on-refresh" strategy="beforeInteractive">
          {`(function(){try{var entry=performance.getEntriesByType("navigation")[0];if(!entry||entry.type!=="reload")return;if("scrollRestoration"in history)history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search);var pin=function(){window.scrollTo(0,0)};pin();document.addEventListener("DOMContentLoaded",pin);window.addEventListener("load",function(){pin();requestAnimationFrame(pin)})}catch(e){}})();`}
        </Script>
      </head>
      {/* Google Analytics (gtag.js) — once sitewide; do not add again on individual pages */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <body className="bg-surface text-[#26332F] antialiased selection:bg-[#55BBB0]/30 selection:text-[#26332F]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SmoothScroll />
        <ScrollToHero />
        {children}
      </body>
    </html>
  );
}
