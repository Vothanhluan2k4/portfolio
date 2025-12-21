import { useParams, useNavigate } from "react-router-dom";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { ArrowLeft, Calendar, Tag, Code2, Target, CheckCircle2, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { i18n } = useTranslation();
  
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const project = portfolioData.projects.find((p) => p.id === Number(id));

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    
    // Already embed URL
    if (url.includes("youtube.com/embed/")) {
      return url;
    }
    
    // Convert youtube.com/watch?v=VIDEO_ID to youtube.com/embed/VIDEO_ID
    const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }
    
    // Convert youtu.be/VIDEO_ID to youtube.com/embed/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }
    
    return url;
  };

  const handleBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Dự án không tồn tại</h1>
          <Button onClick={handleBackToProjects} variant="default">
            <ArrowLeft size={20} />
            Quay lại danh sách
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Button */}
          <Button
            onClick={handleBackToProjects}
            variant="outline"
            className="mb-8 rounded-full"
          >
            <ArrowLeft size={20} />
            Quay lại
          </Button>

          {/* Hero Section - Video, Multiple Images, or Single Image */}
          {project.videoUrl ? (
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={getEmbedUrl(project.videoUrl)}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : project.images && project.images.length > 0 ? (
            // Image Carousel
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden mb-8 shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              {/* Main Image */}
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === 0 ? project.images!.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/50 hover:bg-primary/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === project.images!.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/50 hover:bg-primary/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary/50 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "w-8 bg-primary"
                            : "w-2 bg-primary/50 hover:bg-primary/75"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            // Single Image Fallback
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden mb-8 shadow-2xl bg-gray-500 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag size={18} className="text-accent" />
              <span className="text-accent font-semibold">{project.category}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-12 leading-tight">
            {project.title}
          </h1>

          {project.details ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content - 2 columns */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-accent rounded-full" />
                    <h2 className="text-2xl font-bold text-primary">Mô tả dự án</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.details.description}
                  </p>
                </section>

                {/* Current Status */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold text-primary">Hiện trạng</h2>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 border-l-4 border-accent">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.details.currentStatus}
                    </p>
                  </div>
                </section>

                {/* Objectives */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold text-primary">Mục tiêu</h2>
                  </div>
                  <ul className="space-y-3">
                    {project.details.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Features */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-accent" size={24} />
                    <h2 className="text-2xl font-bold text-primary">Chức năng chính</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.details.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-card rounded-xl p-4 border border-border hover:border-accent transition-colors duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                          <p className="text-foreground">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Challenges */}
                {project.details.challenges && (
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-8 bg-accent rounded-full" />
                      <h2 className="text-2xl font-bold text-primary">Thử thách</h2>
                    </div>
                    <div className="bg-amber-500/10 rounded-2xl p-6 border-l-4 border-amber-500">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details.challenges}
                      </p>
                    </div>
                  </section>
                )}

                {/* Outcomes */}
                {project.details.outcomes && (
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-8 bg-accent rounded-full" />
                      <h2 className="text-2xl font-bold text-primary">Kết quả</h2>
                    </div>
                    <div className="bg-green-500/10 rounded-2xl p-6 border-l-4 border-green-500">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details.outcomes}
                      </p>
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* Technologies */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Code2 size={20} className="text-accent" />
                      Công nghệ sử dụng
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <h3 className="text-xl font-bold text-primary mb-4">Thông tin dự án</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Danh mục</p>
                        <p className="font-semibold text-foreground">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Tags</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Thông tin chi tiết đang được cập nhật...
              </p>
            </div>
          )}

          {/* Related Projects */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-8">Dự án liên quan</h3>
            {portfolioData.projects.filter((p) => p.category === project.category && p.id !== project.id).length > 0 ? (
              <div className="grid md:grid-cols-3 gap-6">
                {portfolioData.projects
                  .filter((p) => p.category === project.category && p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <div
                      key={relatedProject.id}
                      onClick={() => {
                        navigate(`/project/${relatedProject.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {relatedProject.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          {relatedProject.category}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-secondary/30 rounded-2xl">
                <p className="text-muted-foreground text-lg">
                  Không có dự án liên quan nào
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default ProjectDetail;
