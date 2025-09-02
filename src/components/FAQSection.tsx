import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import fabioBg from "@/assets/fabio-oyXis2kALVg-unsplash.jpg";

const FAQSection = () => {
  const faqs = [
    {
      question: "Will AI-written posts still rank after Google's recent updates?",
      answer: "Google rewards helpful, people-first content. We focus on intent, clarity, and usefulness, not keyword stuffing. You can publish directly or review drafts before going live.",
      sources: "Google for Developers | Search Engine Land"
    },
    {
      question: "Can you publish straight to WordPress?",
      answer: "Yes—via the official WordPress REST API with secure authentication, including categories, tags, and featured images.",
      sources: "WordPress Developer Resources"
    },
    {
      question: "How fast can I start?",
      answer: "Most clients onboard in under 24 hours. Add topics, connect WordPress, choose schedule—done.",
      sources: null
    },
    {
      question: "Do I need a human editor?",
      answer: "Many customers let the bot auto-publish; others review drafts. We recommend a light editorial pass for brand voice.",
      sources: null
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${fabioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gradient-to-r from-blue-600/20 to-purple-700/20 border border-blue-500/30 rounded-lg px-8">
                <AccordionTrigger className="text-left font-semibold text-white hover:text-blue-400 transition-colors py-6 text-lg leading-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pt-4 pb-6">
                  <p className="mb-4 leading-relaxed text-base">{faq.answer}</p>
                  {faq.sources && (
                    <Badge variant="outline" className="text-sm border-blue-500/30 bg-blue-600/20 px-4 py-2">
                      {faq.sources}
                    </Badge>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
