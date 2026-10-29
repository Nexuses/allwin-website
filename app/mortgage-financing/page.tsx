import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MortgageView from "@/components/mortgage/MortgageView";
import { mortgageFaqs } from "@/components/mortgage/content";

export const metadata: Metadata = {
  title: "Mortgage Financing in UAE | Home Loans | AllWin Finances",
  description:
    "Explore mortgage financing solutions in the UAE with AllWin Finances. Compare home loan options, refinancing solutions and competitive rates from leading banks.",
};

export default function MortgageFinancingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mortgageFaqs.map((faq) => ({
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
        <MortgageView />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
