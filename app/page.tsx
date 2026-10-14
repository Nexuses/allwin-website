import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import FeatureBar from "@/components/sections/FeatureBar";
import About from "@/components/sections/About";
import BankingPartners from "@/components/sections/BankingPartners";
import CoreExpertise from "@/components/sections/CoreExpertise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Refinance from "@/components/sections/Refinance";
import TrackRecord from "@/components/sections/TrackRecord";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 w-full">
        <Hero />
        <FeatureBar />
        <About />
        <BankingPartners />
        <CoreExpertise />
        <WhyChooseUs />
        <Testimonials />
        <Refinance />
        <TrackRecord />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
