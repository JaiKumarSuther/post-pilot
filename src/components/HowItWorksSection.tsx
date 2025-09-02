import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
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
      style={{
        backgroundImage: `url(${aiNeuralBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
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
                  <h3 className="text-2xl font-semibold mb-6 text-white leading-tight text-center">{item.title}</h3>
                  <p className="text-white/80 mb-8 leading-relaxed text-lg flex-grow text-center">{item.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="outline" className="text-base border-blue-500/30 bg-blue-600/20 backdrop-blur px-6 py-3 mt-auto mx-auto w-full text-center flex items-center justify-center">
                      {item.source}
                    </Badge>
                  </motion.div>
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
