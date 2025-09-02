import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import video3 from "@/assets/videos/video-3.mp4";

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
      source: "WordPress Developer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      className="relative py-24 overflow-hidden"
    >
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        src={video3}
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            From Idea to Published Post—On Autopilot
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-md border border-blue-500/30 hover:scale-105 animate-fade-in flex flex-col h-full min-w-[320px]">
                <CardContent className="p-10 text-center flex flex-col h-full">
                  <div className="mb-8">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:animate-pulse-glow shadow-glow"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {item.icon}
                    </motion.div>
                    <motion.div 
                      className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
