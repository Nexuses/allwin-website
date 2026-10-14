import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font -- icon font must block so ligature names never render as text */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
      </head>
      <body className="bg-surface text-[#333333] antialiased selection:bg-[#55BBB0]/30 selection:text-[#1e2227]">
        {children}
      </body>
    </html>
  );
}
