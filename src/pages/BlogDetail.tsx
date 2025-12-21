import { useParams, useNavigate } from "react-router-dom";
import { portfolioData as portfolioDataVI } from "@/data/portfolioData.vi";
import { portfolioDataEN } from "@/data/portfolioData.en";
import { ArrowLeft, Calendar, User, Tag, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import { useState } from "react";
import { BlogContent } from "@/types/portfolio";
import { useTranslation } from "react-i18next";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  const portfolioData = i18n.language === "en" ? portfolioDataEN : portfolioDataVI;
  const blog = portfolioData.blogs.find((b) => b.id === Number(id));

  const handleBackToBlogs = () => {
    navigate("/");
    setTimeout(() => {
      const blogsSection = document.getElementById("blogs");
      if (blogsSection) {
        blogsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog không tồn tại</h1>
          <Button onClick={handleBackToBlogs} variant="default">
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
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Button
            onClick={handleBackToBlogs}
            variant="outline"
            className="mb-8 rounded-full"
          >
            <ArrowLeft size={20} />
            Quay lại
          </Button>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-accent" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-accent" />
              <span className="text-accent font-semibold">{blog.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-accent" />
              <span>Võ Thành Luận</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-foreground">
              {blog.content && blog.content.length > 0 ? (
                blog.content.map((section, index) => (
                  <ContentRenderer key={index} section={section} />
                ))
              ) : (
                <p className="leading-relaxed text-muted-foreground">
                  Nội dung đang được cập nhật...
                </p>
              )}
            </div>
          </div>

          {/* Related Posts Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-8">Bài viết liên quan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.blogs
                .filter((b) => b.category === blog.category && b.id !== blog.id)
                .slice(0, 2)
                .map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    onClick={() => {
                      navigate(`/blog/${relatedBlog.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

// Content Renderer Component
interface ContentRendererProps {
  section: BlogContent;
}

const ContentRenderer = ({ section }: ContentRendererProps) => {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
          {section.content}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
          {section.content}
        </h3>
      );
    case "text":
      return <p className="leading-relaxed">{section.content}</p>;
    case "list":
      return (
        <ul className="list-disc list-inside space-y-2 my-6">
          {section.items?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    case "code":
      return <CodeBlock code={section.content} language={section.language || "javascript"} />;
    case "table":
      return <TableBlock content={section.content} columns={section.columns || []} rows={section.rows || []} />;
    default:
      return null;
  }
};

// Code Block Component with Copy Button
interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl">
      {/* IDE Header */}
      <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-[#474748]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-xs text-gray-400 ml-3">{language}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-3 text-xs hover:bg-[#474748] text-gray-300"
        >
          {copied ? (
            <>
              <Check size={14} className="mr-1" />
              Đã copy!
            </>
          ) : (
            <>
              <Copy size={14} className="mr-1" />
              Copy code
            </>
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code className={`language-${language} text-gray-300`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Table Block Component
interface TableBlockProps {
  content: string;
  columns: string[];
  rows: string[][];
}

const TableBlock = ({ content, columns, rows }: TableBlockProps) => {
  return (
    <div className="my-6">
      {content && <p className="text-sm text-muted-foreground mb-3">{content}</p>}
      <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
        <table className="w-full">
          <thead className="bg-primary/10">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-primary border-b border-border">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-card">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-border hover:bg-secondary/30 transition-colors">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-3 text-sm text-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogDetail;
