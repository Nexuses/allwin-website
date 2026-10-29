import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsumerView from "@/components/consumer/ConsumerView";
import { consumerFaqs } from "@/components/consumer/content";

export const metadata: Metadata = {
  title: "Consumer Finance Solutions in UAE | AllWin Finances",
  description:
    "Explore flexible consumer finance solutions in the UAE with AllWin Finances. Get expert guidance on financing options tailored to your personal financial needs.",
};

export default function ConsumerFinancePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: consumerFaqs.map((faq) => ({
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
        <ConsumerView />
      </main>
      <Footer />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
