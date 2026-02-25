"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
  badge?: {
    label: string;
    className?: string;
  };
}

/* -----------------------------
   DATA (Refactored Structure)
------------------------------ */

const SOLUTIONS: MenuItem[] = [
  { title: "Ecitizen Integration", href: "#" },
  { title: "Bank Integration", href: "#" },
  { title: "Mobile Bank Integration", href: "#" },
  { title: "Level Based Academic ERP", href: "#" },
  { title: "Management Dashboard", href: "#" },
  { title: "AI & Financial Reports", href: "/index-seo" },
  { title: "CBET", href: "#" },
];

const PRODUCTS: MenuItem[] = [
  { title: "College/University ERP System", href: "#" },
  { title: "Micro-Finance Institution ERP System", href: "#" },
  { title: "Building Sacco ERP System", href: "#" },
  { title: "Sacco ERP System", href: "#" },
  { title: "Distributor/Retailer ERP System", href: "#" },
  { title: "Manufacturing ERP System", href: "#" },
  { title: "School ERP System", href: "#" },
  { title: "Construction Firm ERP System", href: "#" },
];

/* -----------------------------
   NAVBAR COMPONENT
------------------------------ */

export default function SiteNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background px-6 sm:px-30">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/ultimate-cbe" className="flex items-center space-x-2">
          <Image
            src="/ultimate-cbe.svg"
            alt="Logo"
            width={140}
            height={32}
            className="dark:hidden"
          />
          <Image
            src="/ultimate-cbe.svg"
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
                  <Link href="/ultimate-cbe" className="px-4 py-2 text-sm font-medium">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    For Teachers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium">
                    For School Leaders
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/ultimate-cbe/contact-us" className="px-4 py-2 text-sm font-medium">
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button variant="outline" className="gap-4 rounded-full">
            Sign In
          </Button>
          <Button variant="default" className="gap-4 rounded-full">
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
