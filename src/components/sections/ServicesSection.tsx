import { ArrowRight, Palette, Code, Sparkles, Database, Smartphone } from "lucide-react";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useTranslation } from "react-i18next";

const iconMap: { [key: string]: React.ElementType } = {
  Palette: Palette,
  Code: Code,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Database: Database,
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("services.title").replace(/<accent>/g, '<span class="inline-block mx-4 text-accent relative">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group bg-card rounded-3xl p-8 shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-accent animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-poppins text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                >
                  {t("services.viewMore")}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-2"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
