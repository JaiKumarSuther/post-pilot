import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeroSection,
  BenefitsSection,
  HowItWorksSection,
  WhyItWinsSection,
  ZeroHumanEffortsSection,
  PricingSection,
  FAQSection
} from '@/components';
import { useUIStore } from '@/store/ui';

const SECTIONS = [
  HeroSection,
  BenefitsSection,
  HowItWorksSection,
  WhyItWinsSection,
  ZeroHumanEffortsSection,
  PricingSection,
  FAQSection
];

export function SectionHost() {
  const { activeSection, setActiveSection, setScrollProgress } = useUIStore();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Calculate active section based on scroll position
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.round(scrollY / windowHeight);
      const clampedIndex = Math.max(0, Math.min(sectionIndex, SECTIONS.length - 1));
      
      if (clampedIndex !== activeSection) {
        setActiveSection(clampedIndex);
      }

      // progress within current viewport
      const progress = (scrollY % windowHeight) / windowHeight;
      setScrollProgress(progress);
      
      // Set scrolling to false after a short delay
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection, setActiveSection]);

  return (
    <div className="relative">
      {SECTIONS.map((SectionComponent, index) => (
        <motion.div
          key={index}
          className="min-h-screen w-full"
          initial={false}
          animate={{
            opacity: activeSection === index ? 1 : 0.3,
            y: activeSection === index ? 0 : 24,
            scale: activeSection === index ? 1 : 0.98,
            pointerEvents: activeSection === index ? 'auto' : 'none',
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <SectionComponent />
        </motion.div>
      ))}
    </div>
  );
}
