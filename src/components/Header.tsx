import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNavLinks } from "./NavLink";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const navLinks = getNavLinks(t);

  const toggleLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const sectionId = href.replace("#", "");
    
    // Nếu đang ở trang chủ, scroll đến section
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Nếu đang ở trang khác, navigate về trang chủ trước
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
    
    // Đóng mobile menu nếu đang mở
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Sparkles className="w-8 h-8 text-accent transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-2xl font-bold font-poppins text-primary-foreground">
              Võ Thành Luận<span className="text-accent"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-primary-foreground/80 hover:text-accent font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Language Toggle Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="lg"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages size={20} />
              {i18n.language === "vi" ? "EN" : "VI"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-primary-foreground/80 hover:text-accent font-medium transition-colors duration-300 py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Mobile Language Toggle */}
            <li className="pt-2">
              <Button
                variant="hero"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                onClick={toggleLanguage}
              >
                <Languages size={20} />
                {i18n.language === "vi" ? "EN" : "VI"}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
