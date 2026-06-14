import { GraduationCap, Briefcase } from "lucide-react";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useTranslation } from "react-i18next";

const JourneySection = () => {
  const { t, i18n } = useTranslation();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const education = portfolioData.experiences.filter((exp) => exp.type === "education");
  const work = portfolioData.experiences.filter((exp) => exp.type === "work");

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("journey.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("journey.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("journey.description")}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-3xl mx-auto">
          {/* Education Column */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-primary">{t("journey.education")}</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-accent/30">
              {education.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  
                  <div className="bg-card rounded-2xl p-6 shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-300">
                    <span className="text-accent font-semibold text-sm">{exp.period}</span>
                    <h4 className="text-lg font-bold font-poppins text-primary mt-2">{exp.title}</h4>
                    <p className="text-muted-foreground font-medium">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Column - Hidden temporarily */}
          {/* <div data-aos="fade-left" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Briefcase className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-primary">{t("journey.work")}</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {work.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pb-10 last:pb-0"
                >
                  <div className="absolute -left-[25px] top-1 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  
                  <div className="bg-card rounded-2xl p-6 shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-300">
                    <span className="text-accent font-semibold text-sm">{exp.period}</span>
                    <h4 className="text-lg font-bold font-poppins text-primary mt-2">{exp.title}</h4>
                    <p className="text-muted-foreground font-medium">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
