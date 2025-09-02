import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import postpilotLogo from "@/assets/postpilot-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f172a] to-[#1e293b] backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={postpilotLogo} 
              alt="POSTPILOT AI" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-200 hover:text-white font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-200 hover:text-white font-medium transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-200 hover:text-white font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-200 hover:text-white font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-100 hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-[#0f172a]/95">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-200 hover:text-white font-medium transition-colors py-2">
                Features
              </a>
              <a href="#pricing" className="text-gray-200 hover:text-white font-medium transition-colors py-2">
                Pricing
              </a>
              <a href="#about" className="text-gray-200 hover:text-white font-medium transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-gray-200 hover:text-white font-medium transition-colors py-2">
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-gray-100 hover:bg-white/10">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-md">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
