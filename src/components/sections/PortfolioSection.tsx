import { ArrowUpRight } from "lucide-react";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("portfolio.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => {
                navigate(`/project/${project.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-500 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary-foreground">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {project.category}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-accent">
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
