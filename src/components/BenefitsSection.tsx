import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import showcaseVideo from "@/assets/videos/video-2.mp4";
import aiNeuralBg from "@/assets/ai-neural-bg.jpg";

const BenefitsSection = () => {
  const benefits = [
    "Save 90% of content costs compared to freelancers & agencies",
    "Never miss a posting schedule + 100% consistency",
    "Boost SEO rankings & traffic with optimized blogs",
    "Scalable - from a single site to agency-level publishing",
    "Risk-free - cancel anytime"
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={showcaseVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-ai-dark/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Benefits */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fade-in">
              Why choose us?
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - illustrative image */}
          <div className="relative">
            <img 
              src={aiNeuralBg}
              alt="Neural network visualization"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
