import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyHero from "@/components/sections/StickyHero";
import FeatureBar from "@/components/sections/FeatureBar";
import About from "@/components/sections/About";
import BankingPartners from "@/components/sections/BankingPartners";
import CoreExpertise from "@/components/sections/CoreExpertise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Refinance from "@/components/sections/Refinance";
import TrackRecord from "@/components/sections/TrackRecord";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <div className="relative">
          <StickyHero />
          <div className="relative z-10">
            <BankingPartners />
            <FeatureBar />
            <About />
            <CoreExpertise />
            <WhyChooseUs />
            <Testimonials />
            <Refinance />
            <TrackRecord />
            <FAQ />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
