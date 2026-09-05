import { Eye, ExternalLink, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import aboutImage from "@/assets/avatar3.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const skillTags = ["Business Analyst", "Web Development", "Application Development", "UI/UX Design"];

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [cvLanguage, setCvLanguage] = useState<'vi' | 'en'>(i18n.language === 'en' ? 'en' : 'vi');

  const currentCvPath = cvLanguage === 'vi' 
    ? '/cv/CV_vi_VoThanhLuan.pdf' 
    : '/cv/CV_en_VoThanhLuan.pdf';

  const handleDownloadCV = (lang: 'vi' | 'en') => {
    const cvPath = lang === 'vi' 
      ? '/cv/CV_vi_VoThanhLuan.pdf' 
      : '/cv/CV_en_VoThanhLuan.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = `CV_VO_THANH_LUAN_${lang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

            {/* View CV Button */}
            <Button 
              variant="default" 
              size="xl"
              onClick={() => {
                setCvLanguage(i18n.language === 'en' ? 'en' : 'vi');
                setIsCvModalOpen(true);
              }}
              className="gap-2 font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Eye size={20} />
              {t("about.viewCV", "Xem CV")}
            </Button>

            {/* Modal Xem CV trực tiếp */}
            <Dialog open={isCvModalOpen} onOpenChange={setIsCvModalOpen}>
              <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-4 sm:p-6 gap-3">
                <DialogHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-border gap-3 text-left">
                  <div>
                    <DialogTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-primary">
                      <FileText className="text-accent" size={24} />
                      {t("about.cvViewer.title", "Curriculum Vitae")} — Võ Thành Luận
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {t("about.cvViewer.subtitle", "Xem trực tiếp bản CV cá nhân")}
                    </DialogDescription>
                  </div>

                  {/* Language switch + Open New Tab + Download buttons */}
                  <div className="flex items-center gap-2 flex-wrap pr-6 sm:pr-8">
                    <div className="inline-flex rounded-lg border border-border p-0.5 bg-muted">
                      <button
                        type="button"
                        onClick={() => setCvLanguage('vi')}
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-md transition-all",
                          cvLanguage === 'vi' 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        🇻🇳 {t("about.cvViewer.vietnamese", "Tiếng Việt")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setCvLanguage('en')}
                        className={cn(
                          "px-3 py-1.5 text-xs font-semibold rounded-md transition-all",
                          cvLanguage === 'en' 
                            ? "bg-primary text-primary-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        🇬🇧 {t("about.cvViewer.english", "English")}
                      </button>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(currentCvPath, '_blank')}
                      className="h-8 px-2.5 text-xs gap-1.5"
                    >
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">{t("about.cvViewer.openNewTab", "Mở tab mới")}</span>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadCV(cvLanguage)}
                      className="h-8 px-2.5 text-xs gap-1.5"
                    >
                      <Download size={14} />
                      <span className="hidden sm:inline">{t("about.cvViewer.download", "Tải về")}</span>
                    </Button>
                  </div>
                </DialogHeader>

                {/* PDF Viewer Container */}
                <div className="flex-1 w-full min-h-0 bg-muted/40 rounded-xl overflow-hidden border border-border relative">
                  <iframe
                    src={`${currentCvPath}#toolbar=1`}
                    title={`CV Võ Thành Luận - ${cvLanguage.toUpperCase()}`}
                    className="w-full h-full border-0 rounded-xl"
                  >
                    <p className="p-4 text-center text-sm text-muted-foreground">
                      Trình duyệt không hỗ trợ hiển thị PDF trực tiếp.{" "}
                      <a href={currentCvPath} target="_blank" rel="noreferrer" className="text-accent underline font-semibold">
                        Nhấn vào đây để xem toàn màn hình
                      </a>
                    </p>
                  </iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
