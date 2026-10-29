import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About AllWin Finances | Trusted Financial Experts in UAE",
  description:
    "Learn about AllWin Finances, a team of experienced UAE banking professionals providing tailored mortgage, corporate lending and financial advisory solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <AboutView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
