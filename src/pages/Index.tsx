import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SlideDesignSection from "@/components/SlideDesignSection";
import InfographicSection from "@/components/InfographicSection";
import RolePromptsSection from "@/components/RolePromptsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <SlideDesignSection />
      <InfographicSection />
      <div className="section-divider" />
      <RolePromptsSection />
      <Footer />
    </div>
  );
};

export default Index;
