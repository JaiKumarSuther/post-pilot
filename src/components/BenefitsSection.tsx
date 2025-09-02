import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import personImage from "@/assets/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg";

const BenefitsSection = () => {
  const benefits = [
    "Save 90% of content costs compared to freelancers & agencies",
    "Never miss a posting schedule + 100% consistency",
    "Boost SEO rankings & traffic with optimized blogs",
    "Scalable - from a single site to agency-level publishing",
    "Risk-free - cancel anytime"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,255,0.1)_0%,transparent_70%)]" />
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
          
          {/* Right side - Person image */}
          <div className="relative">
            <img 
              src={personImage} 
              alt="Person with technology" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
