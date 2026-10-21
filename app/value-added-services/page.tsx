import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ValueAddedView from "@/components/value-added/ValueAddedView";

export const metadata: Metadata = {
  title: "Value-Added Services in the UAE | AllWin Finances",
  description:
    "Property advice, business setup, tax, wealth, insurance, relocation, visas and partner services in the UAE from AllWin Finances.",
};

export default function ValueAddedServicesPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <ValueAddedView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
