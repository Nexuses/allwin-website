import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ValueAddedHoverView from "@/components/value-added/ValueAddedHoverView";

export const metadata: Metadata = {
  title: "Financial Advisory & Value-Added Services | AllWin Finances",
  description:
    "Discover value-added financial services from AllWin Finances. Get professional guidance and tailored financial solutions to support your needs in the UAE.",
};

export default function ValueAddedServicesPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <ValueAddedHoverView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
