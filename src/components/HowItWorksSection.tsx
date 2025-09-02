import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Clock, Globe } from "lucide-react";
import aiNeuralBg from "@/assets/ai-neural-bg.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Discover topics",
      description: "We surface relevant, people-first topics in your niche. (Aligned with Google's helpful content guidance.)",
      icon: <Target className="w-8 h-8" />,
      source: "Google for Developers"
    },
    {
      step: "2",
      title: "Do keyword research",
      description: "The bot builds an SEO outline around primary/secondary terms and intent.",
      icon: <Zap className="w-8 h-8" />,
      source: "TechRadar"
    },
    {
      step: "3",
      title: "Write & optimize",
      description: "It drafts long-form, human-readable posts with headings, internal-link prompts, metadata, and images.",
      icon: <Clock className="w-8 h-8" />,
      source: "Semrush"
    },
    {
      step: "4",
      title: "Auto-publish to WordPress",
      description: "Scheduled or instant publish via official REST API. (Draft mode available.)",
      icon: <Globe className="w-8 h-8" />,
      source: "WordPress Developer Resources"
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${aiNeuralBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fade-in leading-tight">
            From Idea to Published Post—On Autopilot
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {steps.map((item, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-md border border-blue-500/30 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow shadow-glow">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-3">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white leading-tight">{item.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed text-base">{item.description}</p>
                <Badge variant="outline" className="text-sm border-blue-500/30 bg-blue-600/20 backdrop-blur px-4 py-2">
                  {item.source}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
