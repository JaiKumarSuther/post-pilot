import {
  Header,
  PinnedCanvas,
  SectionHost
} from "@/components";

const Index = () => {
  return (
    <main className="relative z-10 min-h-screen">
      {/* Pinned 3D Canvas - Fixed background layer */}
      <PinnedCanvas />
      
      {/* Sticky Header overlay */}
      <Header />
      
      {/* Scroll-driven sections with 3D transitions */}
      <SectionHost />
    </main>
  );
};

export default Index;