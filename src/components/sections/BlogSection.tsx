import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;

  // Get unique categories from data (original Vietnamese keys)
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(portfolioData.blogs.map((blog) => blog.category))
    );
    return ["all", ...uniqueCategories];
  }, [portfolioData]);

  // Get translated category name
  const getCategoryName = (categoryKey: string) => {
    if (categoryKey === "all") {
      return t("blog.categories.all");
    }
    return t(`blog.categories.${categoryKey}`, categoryKey); // Fallback to key if translation missing
  };

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return portfolioData.blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, portfolioData]);

  const itemsPerView = 6;
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerView);
  const [currentPage, setCurrentPage] = useState(0);

  // Get blogs for current page
  const paginatedBlogs = useMemo(() => {
    const startIndex = currentPage * itemsPerView;
    return filteredBlogs.slice(startIndex, startIndex + itemsPerView);
  }, [filteredBlogs, currentPage]);

  // Reset currentPage when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="blogs" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t("blog.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-primary mb-4"
              dangerouslySetInnerHTML={{ __html: t("blog.title").replace(/<accent>/g, '<span class="text-accent">').replace(/<\/accent>/g, '</span>') }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("blog.description")}
          </p>
        </div>

            {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Category Filter Buttons - LEFT */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "shadow-lg shadow-accent/30"
                    : "hover:border-accent"
                }`}
              >
                {getCategoryName(category)}
              </Button>
            ))}
          </div>

          {/* Search Bar - RIGHT */}
          <div className="relative w-full lg:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 rounded-full border-2 focus:border-accent"
            />
          </div>

        </div>
      </div>


        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          {t("blog.showing")} {filteredBlogs.length} {t("blog.articles")}
        </div>

        {/* Blog Display */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              {t("blog.noResults")}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Grid Layout - Always 2 rows (6 items) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>

            {/* Pagination Controls - Show only if more than 6 blogs */}
            {filteredBlogs.length > itemsPerView && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="rounded-full"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage >= totalPages - 1}
                    className="rounded-full"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
                <div className="text-muted-foreground text-sm">
                   {currentPage + 1} / {totalPages}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

// Blog Card Component
interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
  };
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get translated category name
  const getCategoryName = (categoryKey: string) => {
    return t(`blog.categories.${categoryKey}`, categoryKey);
  };

  return (
    <article
      onClick={handleClick}
      className="group bg-card rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_hsl(200_80%_24%_/_0.1)] hover:shadow-[0_20px_40px_-10px_hsl(200_80%_24%_/_0.15)] transition-all duration-500 hover:-translate-y-2 animate-fade-up h-full cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
          {blog.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-accent font-semibold text-sm">{getCategoryName(blog.category)}</span>
        <h3 className="text-xl font-bold font-poppins text-primary mt-2 mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:text-accent transition-colors duration-300">
          {t("blog.readMore")}
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/link:translate-x-2"
          />
        </div>
      </div>
    </article>
  );
};

export default BlogSection;
