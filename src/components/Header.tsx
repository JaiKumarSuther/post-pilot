import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Removed image logo per request; using text logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-ai-dark/95 to-ai-dark/95 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-10 flex items-center text-white font-bold text-xl tracking-wide">
              POSTPILOT AI
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Pricing
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </motion.nav>

          {/* CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800">
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="space-y-4">
                <motion.a 
                  href="#features" 
                  className="block text-white/80 hover:text-white transition-colors py-2"
                  whileHover={{ x: 10 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#pricing" 
                  className="block text-white/80 hover:text-white transition-colors py-2"
                  whileHover={{ x: 10 }}
                >
                  Pricing
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="block text-white/80 hover:text-white transition-colors py-2"
                  whileHover={{ x: 10 }}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="block text-white/80 hover:text-white transition-colors py-2"
                  whileHover={{ x: 10 }}
                >
                  Contact
                </motion.a>
                <div className="pt-4 space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="ghost" className="w-full text-white hover:text-white">
                      Sign In
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800">
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
