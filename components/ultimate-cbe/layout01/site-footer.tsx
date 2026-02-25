import { cn } from "@/lib/utils";
import Image from "next/image";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function SiteFooter({
  columns = [
    {
      title: "Solutions",
      links: [
        { text: "Ecitizen Integration", href: "#" },
        { text: "Bank Integration", href: "#" },
        { text: "Mobile Bank Integration", href: "#" },
        { text: "Level Based Academic ERP", href: "#" },
        { text: "Management Dashboard", href: "#" },
        { text: "AI & Financial Reports", href: "#" },
        { text: "CBET", href: "#" },
      ],
    },
    {
      title: "ERP Systems",
      links: [
        { text: "College/University", href: "#" },
        { text: "Micro-finance Intitutions", href: "#" },
        { text: "Building Sacco", href: "#" },
        { text: "Saccos", href: "#" },
        { text: "Distributors & Retailers", href: "#" },
        { text: "Manufacturing", href: "#" },
        { text: "Schools", href: "#" },
        { text: "Construction Firm", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blogs & Articles", href: "/ultimate-cbe/blogs" },
        { text: "Help Center", href: "/ultimate-cbe/help-center" },
        { text: "System Status", href: "#" },
        { text: "Release Notes", href: "/ultimate-cbe/changelog" },
      ],
    },
    {
      title: "Engage with us",
      links: [
        { text: "We're Hiring.", href: "#" },
        { text: "Contact Sales", href: "/ultimate-cbe/contact-us" },
        { text: "Contact Support", href: "/ultimate-cbe/contact-us" },
        { text: "Follow on X", href: "#" },
        { text: "Community Forums", href: "#" },
      ],
    },
  ],
  copyright = "© 2026 SSO GROUP KE All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms of Service", href: "/terms-of-service" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-primary-cbe-500 w-full sm:px-21 px-8", className)}>
      <div className="flex item-center justify-center">
        <div className="max-w-container mx-auto">
          <div
            data-slot="footer"
            className="text-primary-foreground pt-12 pb-4"
          >
            <div
              data-slot="footer-content"
              className="grid grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              <div data-slot="footer-column" className="col-span-2 sm:col-span-3 md:col-span-1 flex flex-col gap-0 sm:gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/ultimate-cbe-light.svg"
                    className="w-28 h-12"
                    alt=""
                    width={28}
                    height={12}
                  />
                </div>
              </div>
              {columns.map((column, index) => (
                <div key={index} data-slot="footer-column" className="flex flex-col gap-0 sm:gap-2 flex flex-col gap-0 sm:gap-2">
                  <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                  {column.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-muted/60 text-sm"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div
              data-slot="footer-bottom"
              className="border-border dark:border-border/15 text-muted/60 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs sm:flex-row"
            >
              <div className="text-muted/60">{copyright}</div>
              <div className="flex items-center gap-4 text-muted/60">
                {policies.map((policy, index) => (
                  <a key={index} href={policy.href}>
                    {policy.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
