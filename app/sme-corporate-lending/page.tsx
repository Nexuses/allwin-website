import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmeView from "@/components/sme/SmeView";
import { smeFaqs } from "@/components/sme/content";

export const metadata: Metadata = {
  title: "SME & Corporate Lending in the UAE | AllWin Finances",
  description:
    "Business finance for SMEs and corporations in the UAE, including working capital, trade finance, invoice discounting and project finance.",
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
