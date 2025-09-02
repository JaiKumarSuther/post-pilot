import {
  Header,
  PinnedCanvas,
  SectionHost
} from "@/components";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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