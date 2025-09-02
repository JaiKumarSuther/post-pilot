import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyItWinsSection from "@/components/WhyItWinsSection";
import ZeroHumanEffortsSection from "@/components/ZeroHumanEffortsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhyItWinsSection />
      <ZeroHumanEffortsSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default Index;