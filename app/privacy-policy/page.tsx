import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Privacy Policy | AllWin Finances",
  description: "How AllWin Finances uses the details you send through the contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20 w-full bg-[#F3EFE3] text-[#26332F]">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-manrope text-4xl sm:text-5xl font-bold text-[#385445] tracking-tight mb-6">
            Privacy Policy
          </h1>
          <div className="space-y-4 font-inter text-base sm:text-lg text-[#26332F]/85 leading-relaxed">
            <p>
              AllWin Finances uses the name, phone number, email and message you send through our forms so we can reply to your enquiry.
            </p>
            <p>We do not sell your information. We share it only where needed to respond to you or where the law requires it.</p>
            <p>
              For a privacy question, email{" "}
              <a href="mailto:contact@allwinfinances.com" className="font-semibold text-[#1F4F4A] underline underline-offset-4">
                contact@allwinfinances.com
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
