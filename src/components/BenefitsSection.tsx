import { Briefcase, Headphones, Code2, Rocket } from "lucide-react";
import showcaseVideo from "@/assets/videos/video-2.mp4";
import aiNeuralBg from "@/assets/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg";

const BenefitsSection = () => {
  return (
    <section
      className="relative min-h-0 overflow-hidden"
      style={{ height: "130vh" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={showcaseVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-ai-dark/70" />
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-bold  my-12 text-center text-white animate-fade-in">
          WHY CHOOSE US?
        </h2>

        {/* 3x3 grid: features in the corners, circular image in the center */}
        <div className="grid max-w-5xl mx-auto md:grid-cols-3 md:grid-rows-3 gap-6 items-center h-3/4">
          {/* Top-left feature */}
          <div className="md:col-start-1 md:row-start-1 justify-self-end animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <Briefcase className="h-7 w-7" />
              </div>
              <div className="text-left">
                <h3 className="text-emerald-300 font-semibold text-lg md:text-xl tracking-wide">
                  500+ SITES
                </h3>
                <p className="text-white/90 max-w-xs text-base md:text-lg leading-relaxed">
                  Launch proven blog funnels fast with reusable, optimized templates.
                </p>
              </div>
            </div>
          </div>

          {/* Top-right feature */}
          <div
            className="md:col-start-3 md:row-start-1 justify-self-start animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-slate-700/90 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <Headphones className="h-7 w-7" />
              </div>
              <div className="text-left">
                <h3 className="text-slate-200 font-semibold text-lg md:text-xl tracking-wide">
                  SUPPORT
                </h3>
                <p className="text-white/90 max-w-xs text-base md:text-lg leading-relaxed">
                  Get white-glove onboarding and real human help when you need it.
                </p>
              </div>
            </div>
          </div>

          {/* Center circle image */}
          <div className="md:col-start-2 md:row-start-2 justify-self-center">
            <div className="relative h-48 w-48 md:h-80 md:w-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10">
              <img
                src={aiNeuralBg}
                alt="Center visual"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
            </div>
          </div>

          {/* Bottom-left feature */}
          <div
            className="md:col-start-1 md:row-start-3 justify-self-end animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <Code2 className="h-7 w-7" />
              </div>
              <div className="text-left">
                <h3 className="text-cyan-200 font-semibold text-lg md:text-xl tracking-wide">
                  DEVELOPMENT
                </h3>
                <p className="text-white/90 max-w-xs text-base md:text-lg leading-relaxed">
                  Robust automation and APIs so you can build on top with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom-right feature */}
          <div
            className="md:col-start-3 md:row-start-3 justify-self-start animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <Rocket className="h-7 w-7" />
              </div>
              <div className="text-left">
                <h3 className="text-rose-200 font-semibold text-lg md:text-xl tracking-wide">
                  EFFECTIVE
                </h3>
                <p className="text-white/90 max-w-xs text-base md:text-lg leading-relaxed">
                  Data-driven articles that convert readers into customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
