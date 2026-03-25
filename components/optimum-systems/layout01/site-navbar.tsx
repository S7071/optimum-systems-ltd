"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Menu,
  Milk,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
  iconBg?: string;
  iconLabel?: string;
  badge?: {
    label: string;
    className?: string;
  };
  description: string;
}

/* -----------------------------
   DATA (Refactored Structure)
------------------------------ */

const solutions: MenuItem[] = [
  {
    title: "Ultimate CBE Assessment ERP",
    href: "/solutions/asm",
    description:
      "Quis qui eiusmod laborum nulla ipsum do ipsum duis commodo qui et excepteur.",
    iconBg: "bg-blue-600",
    iconLabel: "CBE",
  },
  {
    title: "Ultimate Hotel ERP",
    href: "/solutions/soc",
    description:
      "Non qui non deserunt mollit nisi ullamco nulla elit anim aliqua fugiat culpa ipsum.",
    iconBg: "bg-violet-600",
    iconLabel: "Htl",
  },
  {
    title: "Ultimate Manufacturing ERP",
    href: "/solutions/ti",
    description: "Nostrud officia velit eu mollit dolore.",
    iconBg: "bg-rose-600",
    iconLabel: "Man",
  },
  {
    title: "Ultimate Supply-Chain ERP",
    href: "/solutions/vm",
    description:
      "Enim Lorem anim aliquip labore incididunt deserunt aliquip sit veniam esse.",
    iconBg: "bg-amber-500",
    iconLabel: "SC",
  },
];

const sectorsWeServe: MenuItem[] = [
  {
    title: "Academic Institutions",
    href: "/sectors#academic-institutions",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "SACCOs & Microfinance",
    href: "/sectors#saccos-micofincance",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Enterprises & NGOs",
    href: "/sectors#enterprises-ngos",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Government & Parastatals",
    href: "/sectors#gorvenment-parastatals",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
];

interface Solution {
  title: string;
  href: string;
  description: string;
  Icon: React.ElementType;
  iconBg: string; // Tailwind bg class
  iconColor: string; // Tailwind text class
  badge?: string; // e.g. "New"
}

const company: MenuItem[] = [
  {
    title: "About Optimus System Ltd",
    href: "/company",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Careers",
    href: "/company/careers",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
];

const FEATURED_SOLUTIONS: Solution[] = [
  {
    title: "UltimateCBE",
    href: "/ultimate-cbe",
    description:
      "30+ modules for universities, TVETs & polytechnics — from admissions to alumni.",
    Icon: GraduationCap,
    iconBg: "bg-blue-50",
    iconColor: "text-[#1B3FA6]",
  },
  {
    title: "MedFlow",
    href: "/medflow",
    description:
      "End-to-end drug tracking for county health systems — KEMSA to patient.",
    Icon: HeartPulse,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    badge: "New",
  },
  {
    title: "Lend360",
    href: "/lend360",
    description:
      "Full-cycle lending ERP with MPESA integration and automated appraisals.",
    Icon: Landmark,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Ultimate Manufacturing ERP",
    href: "/ultimate-mfg",
    description:
      "Production planning, BOM, WIP costing and multi-plant scalability.",
    Icon: Factory,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Retail & Distribution Suite",
    href: "/ultimate-scm",
    description:
      "SmartPOS, van sales, ETIMS/MPESA compliance and multi-branch inventory.",
    Icon: ShoppingCart,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Dairy Management System",
    href: "/dairy",
    description:
      "Farm-to-shelf ERP for cooperatives: milk intake, processing & payments.",
    Icon: Milk,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];

interface Industry {
  label: string;
  sub: string;
  href: string;
  accent: string; // left-border color class
}

const INDUSTRIES: Industry[] = [
  {
    label: "Academic Institutions",
    sub: "Universities, TVETs & polytechnics",
    href: "/sectors#academic",
    accent: "border-[#1B3FA6]",
  },
  {
    label: "Health & County Government",
    sub: "Hospitals, clinics & public health",
    href: "/sectors#health",
    accent: "border-rose-500",
  },
  {
    label: "SACCOs & Microfinance",
    sub: "Lending, member management & KYC",
    href: "/sectors#microfinance",
    accent: "border-amber-500",
  },
  {
    label: "Enterprises & NGOs",
    sub: "Scalable ERP across all departments",
    href: "/sectors#enterprise",
    accent: "border-violet-500",
  },
  {
    label: "Government & Parastatals",
    sub: "IPSAS-compliant, auditable & secure",
    href: "/sectors#government",
    accent: "border-emerald-500",
  },
];

export function SolutionsMenuItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]">
        Ultimate Solutions
      </NavigationMenuTrigger>

      <NavigationMenuContent className="w-full">
        {/*
         * 3-column layout: promo | solutions grid | industry explorer
         * Total width 1100px for comfortable breathing room.
         */}
        <div className="grid grid-cols-[1.5fr_2fr_1fr] w-[94vw] shadow-xl rounded-xl overflow-hidden border border-gray-100">
          {/* ── COL 1 · Brand promo card ──────────────────────────── */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#1B3FA6] px-6 py-8 text-white bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
            {/* Decorative grid lines */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
            />

            <div className="relative z-10">
              {/* Logo mark */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white backdrop-blur-sm">
                <Image
                  src="/logos/approved/erp-dark-icon.svg"
                  alt="Optimum ERP"
                  width={30}
                  height={30}
                />
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-200 mb-2">
                Flagship Platform
              </p>

              <h3 className="text-xl font-bold leading-tight mb-3">
                UltimateERP
              </h3>

              <p className="text-sm leading-relaxed text-blue-100">
                Kenya&apos;s most deployed ERP for higher education — live in{" "}
                <span className="font-semibold text-white">
                  186+ institutions
                </span>{" "}
                and counting.
              </p>
            </div>

            <div className="relative z-10 mt-6 space-y-2">
              {/* Stat pills */}
              <div className="flex flex-wrap gap-2">
                {["150+ Institutions", "30+ Modules", "Category 1 ICT"].map(
                  (stat) => (
                    <span
                      key={stat}
                      className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-blue-50 backdrop-blur-sm"
                    >
                      {stat}
                    </span>
                  ),
                )}
              </div>

              <a
                href="/ultimate-erp"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary-cbe-50 transition-colors group"
              >
                Explore UltimateERP
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* ── COL 2 · Featured Solutions ──────────────────────────── */}
          <div className="bg-white px-7 py-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Featured Solutions
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {FEATURED_SOLUTIONS.map((item) => (
                <NavigationMenuLink key={item.href} asChild>
                  <a
                    href={item.href}
                    className="group flex items-start gap-3 rounded-lg p-2.5 transition-all hover:bg-gray-50 hover:shadow-sm"
                  >
                    {/* Icon container */}
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg} transition-transform group-hover:scale-105`}
                    >
                      <item.Icon
                        className={`h-4.5 w-4.5 ${item.iconColor}`}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5">
                        <span className="block truncate text-sm font-semibold text-gray-800 group-hover:text-[#1B3FA6] transition-colors">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="rounded-full bg-[#D42B2B] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white leading-none">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                        {item.description}
                      </span>
                    </span>
                  </a>
                </NavigationMenuLink>
              ))}
            </div>

            {/* Footer link */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-400">
                20 products across all sectors
              </span>
              <a
                href="/solutions"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B3FA6] hover:text-[#D42B2B] transition-colors group"
              >
                View all solutions
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* ── COL 3 · Explore by Industry ─────────────────────────── */}
          <div className="border-l border-gray-100 bg-gray-50/60 px-6 py-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Explore by Industry
            </p>

            <ul className="flex flex-col gap-2">
              {INDUSTRIES.map((item) => (
                <li key={item.href} className="h-fit">
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={`group flex items-start gap-3 rounded-lg pl-3 pr-2 border-l-2 ${item.accent} border-opacity-0 hover:border-opacity-100 hover:bg-white hover:shadow-sm transition-all`}
                    >
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-gray-700 group-hover:text-[#1B3FA6] transition-colors leading-tight">
                          {item.label}
                        </span>
                        <span className="block text-xs text-gray-400 mt-0.5 leading-snug">
                          {item.sub}
                        </span>
                      </span>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 rounded-lg border border-dashed border-gray-200 bg-white p-4 text-center">
              <p className="mb-2 text-xs font-medium text-gray-600">
                Not sure which product fits?
              </p>
              <Button
                size="sm"
                className="w-full bg-[#D42B2B] hover:bg-[#b82424] text-white text-xs font-semibold transition-colors"
              >
                Request a Free Demo
              </Button>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

/* -----------------------------
   NAVBAR COMPONENT
------------------------------ */

export default function SiteNavbar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background px-6 sm:px-30">
      <div className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={140}
            height={32}
            className="dark:hidden"
          />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={140}
            height={32}
            className="hidden dark:block"
          />
        </Link>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {SolutionsMenuItem()}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/#industries"
                    className="px-4 py-2 text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]"
                  >
                    Sectors We Serve
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company"
                    className="px-4 py-2 text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/company/careers"
                    className="px-4 py-2 text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]"
                  >
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact-us"
                    className="px-4 py-2 text-sm font-medium text-primary-cbe-800 hover:text-primary-cbe-500 transition-colors data-[state=open]:text-[#1B3FA6]"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="outline" className="gap-4" onClick={() => {
            router.push("/login");
          }}>
            Sign In
          </Button>
          <Button variant="default" className="gap-4">
            Create an Account
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent side="right" className="w-80 p-0">
              <ScrollArea className="h-full p-6">
                <MobileNavSection title="Solutions" items={solutions} />
                <MobileNavSection
                  title="Sectors We Serve"
                  items={sectorsWeServe}
                />
                <MobileNavSection title="Company" items={company} />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

/* -----------------------------
   MOBILE NAV SECTION
------------------------------ */

function MobileNavSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href ?? "#"}
              className="block rounded-md px-2 py-2 text-sm hover:bg-accent"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
