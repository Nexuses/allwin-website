import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact AllWin Finances | Mortgage & Finance Experts UAE",
  description:
    "Contact AllWin Finances for expert assistance with mortgages, SME financing, corporate lending and financial solutions in Dubai and across the UAE.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <ContactView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
