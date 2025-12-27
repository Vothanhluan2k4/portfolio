import { Award, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CertificatesSection = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const certificates = portfolioData.certificates;
  const itemsPerView = 3;
  const maxIndex = Math.max(0, certificates.length - itemsPerView);

  const handleCertClick = (cert: any) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / certificates.length;
      container.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  // Handle next button
  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Handle previous button
  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Handle manual scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const itemWidth = container.scrollWidth / certificates.length;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [certificates.length]);

  return (
    <section id="certificates" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("certificates.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("certificates.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("certificates.description")}
          </p>
        </div>

        {/* Desktop: Grid for <= 3 items, Carousel for > 3 items */}
        {certificates.length <= 3 ? (
          // Grid Layout (when 3 or fewer certificates)
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} onCertClick={handleCertClick} />
            ))}
          </div>
        ) : (
          // Carousel Layout (when more than 3 certificates)
          <div className="relative">
            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:overflow-hidden"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-start"
                >
                  <CertificateCard cert={cert} index={index} onCertClick={handleCertClick} />
                </div>
              ))}
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    scrollToIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex flex-col items-center gap-4 mt-12">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="rounded-full"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="rounded-full"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
              <div className="text-muted-foreground text-sm">
                {currentIndex + 1} / {certificates.length - itemsPerView + 1}
              </div>
            </div>
          </div>
        )}

        {/* Certificate Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedCert && (
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-poppins text-primary">
                    {selectedCert.title}
                  </DialogTitle>
                </DialogHeader>

                {/* Full Size Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-accent/10 to-primary/10">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={20} className="text-accent" />
                    <span className="font-semibold">{t("certificates.date")}:</span>
                    <span>{selectedCert.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-accent" />
                    <span className="font-semibold text-muted-foreground">{t("certificates.issuer")}:</span>
                    <span className="text-primary font-semibold">{selectedCert.issuer}</span>
                  </div>

                  {selectedCert.credentialId && (
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-muted-foreground">{t("certificates.credentialID")}:</span>
                      <span className="text-primary break-all">{selectedCert.credentialId}</span>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">{t("certificates.skills")}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Certificate Card Component
interface CertificateCardProps {
  cert: {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialId?: string;
    skills: string[];
  };
  index: number;
  onCertClick: (cert: any) => void;
}

const CertificateCard = ({ cert, index, onCertClick }: CertificateCardProps) => {
  const { t } = useTranslation();
  
  return (
    <article
      onClick={() => onCertClick(cert)}
      className="group bg-card rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground p-3 rounded-xl shadow-lg">
          <Award size={24} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar size={16} className="text-accent" />
          <span>{cert.date}</span>
        </div>

        <h3 className="text-xl font-bold font-poppins text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {cert.title}
        </h3>

        <p className="text-muted-foreground font-semibold mb-3">
          {cert.issuer}
        </p>

        {cert.credentialId && (
          <p className="text-sm text-muted-foreground/70 mb-4">
            {t("certificates.credentialID")}: {cert.credentialId}
          </p>
        )}

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CertificatesSection;
