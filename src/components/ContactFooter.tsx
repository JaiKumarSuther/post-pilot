import { Phone, Mail } from "lucide-react";
// Removed image logo per request
import closingVideo from "@/assets/videos/video-3.mp4";
import LazyVideo from "@/components/LazyVideo";

const ContactFooter = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,255,0.1)_0%,transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Thank you message */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fade-in">
              Thank You for Your Attention
            </h2>
            
            {/* Contact Information Box */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-white text-lg">+92 311 2968819</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-white text-lg">sameeralii7860@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Video and logo */}
          <div className="relative">
            <LazyVideo
              src={closingVideo}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
            />
            
            {/* Logo in bottom right */}
            <div className="absolute bottom-4 right-4 text-white font-semibold">POSTPILOT AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
