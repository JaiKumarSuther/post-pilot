import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Leaf, Sprout, Trees, Building } from "lucide-react";
import hunterBg from "@/assets/hunter-harritt-Ype9sdOPdYc-unsplash.jpg";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$15",
      period: "/month",
      icon: <Leaf className="w-6 h-6" />,
      features: [
        "5 posts/week",
        "Basic keyword research",
        "Auto-publish on WordPress",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      name: "Growth",
      price: "$50",
      period: "/month",
      icon: <Sprout className="w-6 h-6" />,
      features: [
        "15 posts/week (~60/month)",
        "Advanced SEO optimization",
        "Priority support",
        "Analytics & reporting",
        "Custom categories & tags",
        "Advanced keyword research"
      ]
    },
    {
      name: "Agency",
      price: "$120",
      period: "/month",
      icon: <Trees className="w-6 h-6" />,
      features: [
        "40 posts/week (~160/month)",
        "White-label solution",
        "Advanced customization",
        "Priority expert consulting",
        "Custom integrations",
        "Multi-site management"
      ]
    },
    {
      name: "Enterprise",
      price: "Contact us",
      period: "",
      icon: <Building className="w-6 h-6" />,
      features: [
        "100+ posts/week (custom)",
        "Multi-site management",
        "Dedicated account manager",
        "API access & SSO",
        "24/7 phone support",
        "Custom solutions"
      ]
    }
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${hunterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Choose a Plan That Fits Your Publishing Velocity
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-blue-600/20 to-purple-700/20 border border-blue-500/30 hover:scale-105 relative flex flex-col h-full">
              <CardContent className="p-8 text-center flex flex-col h-full">
                {/* Plan icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {plan.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white leading-tight">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/80 text-lg">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-white/80 leading-relaxed">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 py-3 text-base mt-auto"
                  variant="default"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
