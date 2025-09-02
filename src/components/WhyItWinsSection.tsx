import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import aiBrainBg from "@/assets/ai-brain-bg.jpg";

const WhyItWinsSection = () => {
  const benefits = [
    {
      title: "Consistency at scale",
      description: "Never miss a cadence; weekly posts that follow SEO structure.",
      source: "Semrush"
    },
    {
      title: "Time & cost savings",
      description: "Automate repetitive content tasks and save resources for strategic work.",
      source: "ADA Global | AIContentfy"
    },
    {
      title: "People-first + search-ready",
      description: "Built to serve users first—clear answers, helpful formatting, and intent alignment.",
      source: "Google for Developers"
    },
    {
      title: "WordPress-native publishing",
      description: "Publish directly with titles, slugs, categories, tags, and featured images.",
      source: "WordPress Developer Resources"
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${aiBrainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fade-in leading-tight">
            Scale SEO Content Without Sacrificing Quality
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          {benefits.map((item, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-md border border-blue-500/30 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full mt-3 group-hover:animate-pulse-glow shadow-glow flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white leading-tight">{item.title}</h3>
                    <p className="text-white/80 mb-4 leading-relaxed text-base">{item.description}</p>
                    <Badge variant="outline" className="text-sm border-blue-500/30 bg-blue-600/20 backdrop-blur px-3 py-1">
                      {item.source}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pro Tip */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-md border border-blue-500/30 animate-scale-in shadow-glow">
          <CardContent className="p-8 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg px-4 py-2 text-base">💡 Pro Tip</Badge>
            <p className="text-white leading-relaxed text-lg">
              Use a hybrid approach—PostPilot AI for volume SEO posts + humans for thought-leadership. 
              (Reflects current SEO climate and helpful-content emphasis.)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyItWinsSection;