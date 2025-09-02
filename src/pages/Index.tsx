import {
  Header,
  HeroSection,
  HowItWorksSection,
  WhyItWinsSection,
  ZeroHumanEffortsSection,
  PricingSection,
  FAQSection,
  Footer
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
      <Footer />
    </main>
  );
};

export default Index;