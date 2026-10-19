import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutView from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About AllWin Finances | Mortgage & Finance Advisory in Dubai",
  description:
    "AllWin Finances is a mortgage and finance advisory in Business Bay, Dubai. Meet the team and see how we help you compare UAE banks with clear, honest advice.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 w-full">
        <AboutView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
