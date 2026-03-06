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
import { Menu } from "lucide-react";

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

const SOLUTIONS: MenuItem[] = [
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

const SHOP_FOR = [
  {
    label: "For Academic Institutions",
    sub: "Schools, colleges & polytechnics",
    href: "/about",
  },
  {
    label: "For SACCOs & Microfinance",
    sub: "Member management & loan tracking",
    href: "/enterprise",
  },
  {
    label: "For Enterprises & NGOs",
    sub: "Scalable ERP across all departments",
    href: "/mssp",
  },
  {
    label: "For Government & Parastatals",
    sub: "Compliant, auditable, and secure",
    href: "/pricing",
  },
];

const PRODUCTS: MenuItem[] = [
  {
    title: "College/University ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Micro-Finance Institution ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Building Sacco ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Sacco ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Distributor/Retailer ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Manufacturing ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "School ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
  {
    title: "Construction Firm ERP System",
    href: "#",
    description: "Ipsum dolor et in ad fugiat proident eu commodo occaecat.",
  },
];

export function SolutionsMenuItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Ultimate Solutions</NavigationMenuTrigger>

      <NavigationMenuContent>
        {/*
         * Outer grid: 3 columns mirroring Adobe's layout.
         * Adjust `w-[860px]` to taste.
         */}
        <div className="grid grid-cols-[280px_1fr_280px] w-[1060px]">
          {/* ── Column 1 · Promotional card ─────────────────────────────── */}
          <div className="relative overflow-hidden rounded-lg bg-black px-6 py-20 text-white h-full">
            {/* Subtle gradient blob for depth */}
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, #3e3ab1 0%, transparent 70%)",
              }}
            />

            <Image
              src="/ultimate-erp.svg"
              alt="Medusa"
              width={36}
              height={36}
              className="relative z-10 mb-4"
            />

            <p className="relative z-10 text-sm font-semibold leading-snug">
              Ultimate ERP
            </p>

            <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-300">
              Et ex aliqua commodo cupidatat Lorem aliquip quis.
            </p>

            <a
              href="/get-started"
              className="relative z-10 mt-4 inline-block text-xs font-semibold underline underline-offset-4 hover:text-gray-200 transition-colors"
            >
              Get started
            </a>
          </div>

          {/* ── Column 2 · Featured Solutions ───────────────────────────── */}
          <div className="p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Featured solutions
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SOLUTIONS.map((item) => (
                <NavigationMenuLink key={item.href} asChild>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 rounded-md p-2 hover:bg-accent transition-colors group"
                  >
                    {/* Coloured icon chip */}
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white ${item.iconBg ?? "bg-primary"}`}
                    >
                      {item.iconLabel ?? item.title[0]}
                    </span>

                    <span>
                      <span className="block text-sm font-medium text-foreground group-hover:text-[var(--brand-primary,hsl(var(--primary)))]">
                        {item.title}
                      </span>
                      <span className="block text-xs text-muted-foreground leading-snug">
                        {item.description}
                      </span>
                    </span>
                  </a>
                </NavigationMenuLink>
              ))}
            </div>

            {/* "View all" link */}
            <a
              href="/solutions"
              className="mt-4 inline-block text-xs font-medium text-[var(--brand-primary,hsl(var(--primary)))] hover:underline underline-offset-4"
            >
              View all solutions →
            </a>
          </div>

          {/* ── Column 3 · EXPLORE BY INDUSTRY ─────────────────────────────────────── */}
          <div className="border-l border-border p-6 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              EXPLORE BY INDUSTRY
            </p>

            {SHOP_FOR.map((item) => (
              <NavigationMenuLink key={item.href} asChild>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-2 hover:bg-accent transition-colors group"
                >
                  <span className="block text-sm font-medium text-foreground group-hover:text-[var(--brand-primary,hsl(var(--primary)))]">
                    {item.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.sub}
                  </span>
                </a>
              </NavigationMenuLink>
            ))}

            {/* CTA button – mirrors Adobe's "View plans and pricing" */}
            <Button variant="outline" className="mt-10">View plans and pricing</Button>
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
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background px-6 sm:px-30">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {SolutionsMenuItem()}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    Sectors We Serve
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="default" className="gap-4">
            Request a Demo
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
                <MobileNavSection title="Solutions" items={SOLUTIONS} />
                <MobileNavSection title="Products" items={PRODUCTS} />
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
