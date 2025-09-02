import growtikaBg from "@/assets/growtika-nGoCBxiaRO0-unsplash.jpg";

const ZeroHumanEffortsSection = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${growtikaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ai-dark/90 via-ai-dark/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent animate-pulse-glow leading-tight">
          0% human efforts
        </h2>
        <p className="text-xl text-white/80 mt-6 leading-relaxed">
          While you focus on strategy, we handle the execution
        </p>
      </div>
    </section>
  );
};

export default ZeroHumanEffortsSection;
