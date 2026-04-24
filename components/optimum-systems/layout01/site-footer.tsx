import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook } from "lucide-react";


// X (Twitter) icon — replaces the deprecated bird
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const NAV_COMPANY = [
  {
    label: "About Optimum ERP Systems Ltd",
    href: "/company",
  },
  {
    label: "Company Profile",
    href: "/company/company-profile",
  },
  {
    label: "Our Vision & Mission",
    href: "/company",
  },
  // {
  //   label: "Our Team",
  //   href: "/company/team",
  // },
  {
    label: "Our Clients",
    href: "/company/partners",
  },
  {
    label: "Careers",
    href: "/company/careers",
  },
  ,
];

const NAV_PRODUCTS = [
  "Ultimate ERP",
  "Ultimate CBE Assessment ERP",
  "Ultimate Hotel ERP",
  "Ultimate Manufacturing ERP",
  "Ultimate Supply-Chain ERP",
  "Ultimate Conference",
];

const NAV_SOLUTIONS = [
  {
    label: "Sectors We Serve",
    href: "/sectors-we-serve",
  },
  {
    label: "Industry Solutions",
    href: "/industry-solutions",
  },
  {
    label: "Product Ecosystems",
    href: "/product-ecosystems",
  },
];

const NAV_RESOURCES = [
  {
    label: "Blog & Insights",
    href: "/resources/blogs",
  },
  {
    label: "Case Studies",
    href: "/resources/case-studies",
  },
  {
    label: "Help Center",
    href: "/help-center",
  },
  // {
  //   label: "Change Logs",
  //   href: "/changelog",
  // },
];

export default function SiteFooter() {
  return (
    <section className="bg-primary-cbe-600 text-primary-foreground py-8 w-full px-6 md:px-30">
      <div className="">
        <footer>
          {/* ── Nav columns ── */}
          <div className="grid grid-cols-2 gap-8 pt-12 lg:grid-cols-4">
            {/* Company */}
            <div>
              {/* Column header — de-emphasised, all-caps micro style */}
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 border-b border-white/[0.06] pb-2.5">
                Company
              </h3>
              <ul className="space-y-1 text-secondary/55">
                {NAV_COMPANY.map((item) => (
                  <li key={item?.label}>
                    <a
                      href={item?.href}
                      className="block py-1 text-sm transition-all duration-150 hover:text-white hover:pl-2"
                    >
                      {item?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 border-b border-white/[0.06] pb-2.5">
                Products
              </h3>
              <ul className="space-y-1 text-secondary/55">
                {NAV_PRODUCTS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-1 text-sm transition-all duration-150 hover:text-white hover:pl-2"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                {/* Explore More — styled as red action link */}
                <li className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500 transition-all duration-150 hover:gap-2.5"
                  >
                    Explore More
                    <ArrowRight size={14} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Solutions */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 border-b border-white/[0.06] pb-2.5">
                Our Solutions
              </h3>
              <ul className="space-y-1 text-secondary/55">
                {NAV_SOLUTIONS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 text-sm transition-all duration-150 hover:text-white hover:pl-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30 border-b border-white/[0.06] pb-2.5">
                Resources
              </h3>
              <ul className="space-y-1 text-secondary/55">
                {NAV_RESOURCES.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-1 text-sm transition-all duration-150 hover:text-white hover:pl-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm font-medium text-secondary/40 lg:flex-row lg:items-center">
            {/* Legal links + copyright */}
            <ul className="flex sm:flex-row flex-col items-start sm:items-center gap-4 lg:justify-start">
              <div className="flex flex-row gap-5">
                <li className="hover:text-secondary/80 transition-colors">
                  <a href="/company/privacy-policy">Privacy</a>
                </li>
                <li className="hover:text-secondary/80 transition-colors">
                  <a href="/company/terms-of-service">Terms</a>
                </li>
                {/* Cookie Policy — added for compliance */}
                <li className="hover:text-secondary/80 transition-colors">
                  <a href="/company/cookie-policy">Cookie Policy</a>
                </li>
              </div>

              {/* Divider tick */}
              <div className="hidden sm:block h-3 w-px bg-white/15" />

              <li>
                <a
                  href="https://optimumsystems.co.ke"
                  className="text-secondary/25 hover:text-secondary/50 transition-colors"
                >
                  © 2026 OPTIMUM SYSTEMS LTD KE. All rights reserved.
                </a>
              </li>
            </ul>

            {/* Social buttons */}
            <ul className="flex items-center gap-2 sm:gap-3">
              <li>
                <p className="text-secondary/35 text-xs">Follow us</p>
              </li>
              <li>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/[0.03] border-white/12 text-white/60 hover:bg-white/[0.08] hover:border-white/30 hover:text-white transition-all"
                >
                  <Facebook size={13} />
                  Facebook
                </Button>
              </li>
              <li>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/[0.03] border-white/12 text-white/60 hover:bg-white/[0.08] hover:border-white/30 hover:text-white transition-all"
                >
                  <XIcon />
                  Twitter / X
                </Button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
