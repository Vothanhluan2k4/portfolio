import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import aboutImage from "@/assets/avatar3.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const skillTags = ["Business Analyst", "Web Development", "Application Development", "DevOps", "UI/UX Design"];

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownloadCV = (language: 'vi' | 'en') => {
    const cvPath = language === 'vi' 
      ? '/cv/CV_vi.pdf' 
      : '/cv/CV_en.pdf';
    
    // Tạo link tạm thời để download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = `CV_VO_THANH_LUAN_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDialogOpen(false);
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative" data-aos="zoom-in" data-aos-delay="100">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-card shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Võ Thành Luận"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Skill Tags */}
              {skillTags.map((skill, index) => {
                const positions = [
                  "top-0 left-0",
                  "top-10 right-0",
                  "bottom-20 left-[-20px]",
                  "bottom-0 right-10",
                  "top-1/2 right-[-30px]",
                ];
                const colors = [
                  "bg-accent text-accent-foreground",
                  "bg-primary text-primary-foreground",
                  "bg-accent text-accent-foreground",
                  "bg-primary text-primary-foreground",
                  "bg-gold text-gold-foreground",
                ];
                return (
                  <span
                    key={skill}
                    className={`absolute ${positions[index]} ${colors[index]} px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-gentle z-20`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/10 rounded-full -z-0" />
          </div>

          {/* Right - Content */}
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              {t("about.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-6"
                dangerouslySetInnerHTML={{ __html: t("about.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
            />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {portfolioData.stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold font-poppins text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <Button 
              variant="default" 
              size="xl"
              onClick={() => setIsDialogOpen(true)}
            >
              <Download size={20} />
              {t("about.downloadCV")}
            </Button>

            {/* Dialog chọn ngôn ngữ CV */}
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl font-bold">
                    {t("about.cvDialog.title", "Choose CV Language")}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-base">
                    {t("about.cvDialog.description", "Please select the language version of the CV you want to download.")}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-3">
                  <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                    {t("about.cvDialog.cancel", "Cancel")}
                  </AlertDialogCancel>
                  <Button
                    variant="outline"
                    onClick={() => handleDownloadCV('vi')}
                    className="w-full sm:w-auto"
                  >
                    <Download size={18} className="mr-2" />
                    {t("about.cvDialog.vietnamese", "Tiếng Việt")}
                  </Button>
                  <AlertDialogAction
                    onClick={() => handleDownloadCV('en')}
                    className="w-full sm:w-auto"
                  >
                    <Download size={18} className="mr-2" />
                    {t("about.cvDialog.english", "English")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
