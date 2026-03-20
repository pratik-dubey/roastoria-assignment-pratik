import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NumbersBand from "@/components/NumbersBand";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <NumbersBand />
        <WhySection />
        <ProcessSection />
        <ReviewsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
