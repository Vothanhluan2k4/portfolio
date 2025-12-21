import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ToolsSection from "@/components/sections/ToolsSection";
import JourneySection from "@/components/sections/JourneySection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import BlogSection from "@/components/sections/BlogSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Võ Thành Luận - Software Engineer</title>
        <meta
          name="description"
          content="Võ Thành Luận is a passionate Product Designer with 8+ years of experience creating user-centered digital experiences. Specializing in UI/UX design, web development, and brand identity."
        />
        <meta
          name="keywords"
          content="Website Developement, UI/UX Designer, Web Designer,Application Development, Portfolio, Võ Thành Luận"
        />
        <link rel="canonical" href="https://vo-thanh-luan.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ToolsSection />
          <JourneySection />
          <PortfolioSection />
          <BlogSection />
          <CertificatesSection/>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
};

export default Index;
