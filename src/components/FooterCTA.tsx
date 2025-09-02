import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import video7 from "@/assets/videos/video-7.mp4";

const FooterCTA = () => {
  return (
    <section 
      className="relative py-20 overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video7}
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/95 via-ai-dark/85 to-ai-dark/95" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          Ready to Transform Your Content Strategy?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join thousands of content creators who've automated their blog publishing with PostPilot AI
        </p>
        <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3 hover-scale animate-scale-in" style={{ animationDelay: '0.4s' }}>
          Start Free Trial
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default FooterCTA;
