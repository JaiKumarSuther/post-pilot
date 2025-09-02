import {
  Header,
  HeroSection,
  HowItWorksSection,
  WhyItWinsSection,
  ZeroHumanEffortsSection,
  PricingSection,
  FAQSection
} from "@/components";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyItWinsSection />
      <ZeroHumanEffortsSection />
      <PricingSection />
      <FAQSection />
    </main>
  );
};

export default Index;