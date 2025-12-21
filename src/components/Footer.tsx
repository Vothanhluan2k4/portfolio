import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Dribbble, Github } from "lucide-react";
import { getNavLinks } from "./NavLink";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navLinks = getNavLinks(t);
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold font-poppins">
                Võ Thành Luận<span className="text-accent"></span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:luandangnhap@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://x.com/VoThanhLuan2k4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              {t("footer.quickLinks")}
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">{t("footer.contactInfo")}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/70">{t("footer.email")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/70">{t("footer.phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-primary-foreground/70">{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
