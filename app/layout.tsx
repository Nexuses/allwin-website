import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
      </head>
      <body className="bg-surface text-[#26332F] antialiased selection:bg-[#55BBB0]/30 selection:text-[#26332F]">
        {children}
      </body>
    </html>
  );
}
