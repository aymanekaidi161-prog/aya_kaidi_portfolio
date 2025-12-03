import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VisionSection from "../components/VisionSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { BackgroundDecorations } from "../components/DecorativeElements";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <BackgroundDecorations />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
