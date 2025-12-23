import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useTranslation } from "react-i18next";

const ToolsSection = () => {
  const { t, i18n } = useTranslation();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("tools.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("tools.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("tools.description")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={skill.id}
              className="group bg-secondary rounded-full px-6 py-4 flex items-center gap-4 hover:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="flip-up"
              data-aos-delay={index * 40}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-primary">{skill.name}</span>
              <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">
                {skill.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
