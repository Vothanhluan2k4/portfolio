import { ArrowRight, Download, Star, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/avatar1.png";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const fullName = "Võ Thành Luận";
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullName.length) {
        // Typing forward
        setDisplayedName(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === fullName.length) {
        // Pause before deleting    
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setCurrentIndex(prev => prev - 1);
        setDisplayedName(fullName.slice(0, currentIndex - 1));
      } else if (isDeleting && currentIndex === 0) {
        // Reset to start typing again
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden pt-20">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-block text-accent font-semibold text-4xl mb-4 animate-bounce-gentle">
              {t("hero.greeting")}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-primary leading-tight mb-6">
              {t("hero.iam")} <span className="inline-block text-accent min-w-[300px] md:min-w-[400px]">{displayedName}<span className="animate-pulse">|</span></span>
              <br />
              {t("hero.title")}
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                variant="default" 
                size="xl"
                onClick={() => {
                  const aboutSection = document.getElementById("services");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {t("hero.viewPortfolio")}
                <ArrowRight size={20} />
              </Button>
            </div>
            
            {/* Quick Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: Star, label: t("hero.stats.skills") },
              { icon: Briefcase, label: t("hero.stats.projects") },
              { icon: Award, label: t("hero.stats.achievement") },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <stat.icon size={20} className="text-accent" />
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          </div>
          
       <div className="order-1 lg:order-2 relative animate-slide-in-right flex justify-center">
        {/* Background Shape */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-sm bg-gradient-to-br from-accent/20 to-primary/10 rounded-[3rem] transform rotate-3 scale-95" />
        </div>

        {/* Main Image Container */}
        <div className="relative max-w-md z-10">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Võ Thành Luận - Software Engineer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;