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
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <HeroSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <BenefitsSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <HowItWorksSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <WhyItWinsSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <ZeroHumanEffortsSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <PricingSection />
      </div>
      <div className="relative mx-4 md:mx-6 my-6 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.85)]">
        <FAQSection />
      </div>
    </main>
  );
};

export default Index;