import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import postpilotLogo from "@/assets/postpilot-logo.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${aiHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ai-dark via-transparent to-transparent" />
      
      {/* Logo in top right corner */}
      <div className="absolute top-8 right-8 z-20">
        <img 
          src={postpilotLogo} 
          alt="POSTPILOT AI" 
          className="h-12 w-auto"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white animate-slide-up leading-tight">
            AI Blog Writer that Researches, Writes & Publishes for You
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            PostPilot AI automates topic research, keyword strategy, SEO-optimized writing, and auto-publishes to WordPress—so you post consistently and rank faster.
          </p>
          
          {/* URL Input */}
          <div className="max-w-lg mx-auto mb-10 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your blog or website URL"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 shadow-lg text-lg py-4"
              />
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 hover:shadow-glow px-6 py-4">
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          {/* Trust Badge */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Badge variant="secondary" className="text-base bg-white/10 backdrop-blur-md border-white/20 shadow-lg text-white px-6 py-3">
              ⚡ Join 20M+ AI Users
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-600 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-700 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
