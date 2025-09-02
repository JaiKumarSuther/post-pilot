import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aiHeroBg from "@/assets/ai-hero-bg.jpg";
import postpilotLogo from "@/assets/postpilot-logo.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

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
      <motion.div 
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={postpilotLogo} 
          alt="POSTPILOT AI" 
          className="h-12 w-auto"
        />
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
            variants={itemVariants}
          >
            AI Blog Writer that Researches, Writes & Publishes for You
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            PostPilot AI automates topic research, keyword strategy, SEO-optimized writing, and auto-publishes to WordPress—so you post consistently and rank faster.
          </motion.p>
          
          {/* URL Input */}
          <motion.div 
            className="max-w-lg mx-auto mb-10"
            variants={itemVariants}
          >
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your blog or website URL"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 shadow-lg text-lg py-4"
              />
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 hover:shadow-glow px-6 py-4">
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
          
          {/* Trust Badge */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <Badge variant="secondary" className="text-base bg-white/10 backdrop-blur-md border-white/20 shadow-lg text-white px-6 py-3">
              ⚡ Join 20M+ AI Users
            </Badge>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600 rounded-full"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-600 rounded-full"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-700 rounded-full"
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
