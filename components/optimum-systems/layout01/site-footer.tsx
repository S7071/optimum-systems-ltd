import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook } from "lucide-react";

// Custom circle-check icon matching the redesign (red tick, subtle ring)
function CircleCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="7.5" stroke="rgba(255,255,255,0.2)" />
      <path
        d="M4.5 8l2.5 2.5 4-5"
        stroke="#e5341a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    label: "About Optimum Systems Ltd",
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
  {
    label: "Our Team",
    href: "/company/team",
  },
  {
    label: "Success Stories",
    href: "/company/success-stories",
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
  "Sectors We Serve",
  "Industry Solutions",
  "Product Ecosystems",
];

const NAV_RESOURCES = [
  {
    label: "Blog & Insights",
    href: "/resources/blogs",
  },
  {
    label: "Implementation Guide",
    href: "#",
  },
  {
    label: "Case Studies",
    href: "#",
  },
  {
    label: "System Documentation",
    href: "#",
  },
  {
    label: "Support Center",
    href: "/help-center",
  },
  {
    label: "Change Logs",
    href: "/changelog",
  },
];

const FEATURES = [
  "1-on-1 ERP Needs Assessment",
  "System Demo & Workflow Mapping",
  "Custom Implementation Proposal",
  "Local Technical Support Team",
];

export default function SiteFooter() {
  return (
    <section className="bg-primary-cbe-600 text-primary-foreground py-8 w-full px-6 sm:px-30">
      <div className="container">
        <footer>
          {/* ── CTA band ── */}
          <div className="mb-14 flex flex-col justify-between gap-11 md:items-start xl:flex-row xl:items-center xl:gap-6">
            <div className="flex-1">
              {/* Eyebrow label — new */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-500">
                All-in-one ERP
              </p>

              {/* Headline with weight split — updated */}
              <h1 className="mb-4 text-3xl leading-tight">
                <span className="font-semibold">Built for Kenya.</span>
                <br />
                <span className="font-light text-white/60">
                  Designed to grow with you.
                </span>
              </h1>

              <p className="mb-8 text-md text-secondary/60 max-w-md">
                Streamline finance, HR, inventory, and operations with a fully
                compliant, locally supported ERP solution.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {/* Red primary button — unchanged, already correct */}
                <Button variant="default" size="default">
                  Request a Demo
                </Button>

                {/* Ghost outline button — updated styling */}
                <Button
                  variant="outline"
                  size="default"
                  className="bg-transparent border-white/20 text-white/75 hover:bg-white/10 hover:border-white/40 hover:text-white"
                >
                  Explore Solutions
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Feature card — updated with top accent + label */}
            <div className="flex-2 flex flex-row justify-end">
              <div className="relative flex flex-col justify-between gap-0 rounded-xl bg-gradient-to-tr from-primary-cbe-800/40 via-primary-cbe-500/40 to-primary-cbe-800/40 border border-white/10 p-6 shadow-lg overflow-hidden">
                {/* Red top-edge accent strip */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500/70" />

                {/* "What's included" label — new */}
                <p className="mb-4 text-[10.5px] font-semibold uppercase tracking-widest text-red-500/80">
                  What&apos;s included
                </p>

                <ul className="flex flex-col space-y-0 text-muted-foreground">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0 text-sm text-secondary/70"
                    >
                      <CircleCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Nav columns ── */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 lg:grid-cols-4">
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
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-1 text-sm transition-all duration-150 hover:text-white hover:pl-2"
                    >
                      {item}
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
                  <a href="#">Privacy</a>
                </li>
                <li className="hover:text-secondary/80 transition-colors">
                  <a href="#">Terms</a>
                </li>
                {/* Cookie Policy — added for compliance */}
                <li className="hover:text-secondary/80 transition-colors">
                  <a href="#">Cookie Policy</a>
                </li>
              </div>

              {/* Divider tick */}
              <div className="hidden sm:block h-3 w-px bg-white/15" />

              <li>
                <a
                  href="https://ssogroup.co.ke"
                  className="text-secondary/25 hover:text-secondary/50 transition-colors"
                >
                  © 2026 SSO GROUP KE. All rights reserved.
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
