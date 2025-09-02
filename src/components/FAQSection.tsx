import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import video5 from "@/assets/videos/video-5.mp4";

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
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video5}
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">Answers to the most common questions about setup, publishing, and results.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] data-[state=open]:border-blue-400/50"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
                <AccordionTrigger className="relative w-full text-left py-5 pl-6 pr-14 [&>svg]:hidden">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/20 text-blue-300 text-xs font-semibold ring-1 ring-inset ring-blue-400/30">Q</span>
                    <span className="font-semibold text-white text-lg leading-tight">{faq.question}</span>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-blue-500/15 ring-1 ring-inset ring-blue-400/30">
                    <ChevronDown className="h-4 w-4 text-blue-300 transition-transform duration-300 data-[state=open]:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <div className="rounded-xl border border-blue-500/20 bg-white/5 p-5 text-white/85 shadow-inner">
                    <p className="mb-4 leading-relaxed text-base">{faq.answer}</p>
                    {faq.sources && (
                      <Badge variant="outline" className="text-xs border-blue-500/30 bg-blue-600/20 px-3 py-1">
                        {faq.sources}
                      </Badge>
                    )}
                  </div>
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
