import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export const getNavLinks = (t: (key: string) => string) => [
  { name: t("nav.home"), href: "#home" },
  { name: t("nav.services"), href: "#services" },
  { name: t("nav.about"), href: "#about" },
  { name: t("nav.projects"), href: "#projects" },
  { name: t("nav.blogs"), href: "#blogs" },
  { name: t("nav.certificates"), href: "#certificates" },
];

// Legacy export for compatibility
export const navLinks = [
  { name: "Trang chủ", href: "#home" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Giới thiệu", href: "#about" },
  { name: "Dự án", href: "#projects" },
  { name: "Bài viết", href: "#blogs" },
  { name: "Chứng chỉ", href: "#certificates" },
];
