import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmeView from "@/components/sme/SmeView";
import { smeFaqs } from "@/components/sme/content";

export const metadata: Metadata = {
  title: "SME & Corporate Financing in UAE | AllWin Finances",
  description:
    "AllWin Finances helps UAE businesses access SME loans, working capital, trade finance and corporate lending solutions through leading financial institutions.",
};

export default function SmeCorporateLendingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: smeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <main className="w-full">
        <SmeView />
      </main>
      <Footer />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
