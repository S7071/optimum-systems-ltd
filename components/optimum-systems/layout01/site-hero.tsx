/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { JSX } from "react";

function LogoCard(key: number, product: string): JSX.Element {
  return (
    <div
      key={key}
      className="size-22 rounded-xl border border-background/20 bg-background/100 shadow-xl"
    >
      <div className="h-full w-full p-4 flex items-center justify-center">
        <img alt="Integration" className="h-10 w-30" src={product} />
      </div>
    </div>
  );
}
export default function SiteHero() {
  
  // -------------------
  // Ndakala Logos
  // -------------------
  //   "/images/cbe/logo-icon-dark.svg",
  //   "/images/365/logo-icon-dark.svg",
  //   "/images/erp/logo-icon-dark.svg",
  //   "/images/pos/logo-icon-dark.svg",
  //   "/images/hms/logo-icon-dark.svg",
  //   "/images/cbe/logo-icon-dark.svg",
  //   "/images/365/logo-icon-dark.svg",
  //   "/images/erp/logo-icon-dark.svg",
  //   "/images/pos/logo-icon-dark.svg",
  //   "/images/hms/logo-icon-dark.svg",
  //   "/images/365/logo-icon-dark.svg",
  //   "/images/erp/logo-icon-dark.svg",
  
  // -------------------
  // Abno Logos
  // -------------------
  //   "https://www.abnosoftwares.com/assets/images/product-offer7.png",
  //   "https://www.abnosoftwares.com/assets/images/product-offer8.png",
  //   "https://www.abnosoftwares.com/assets/images/product-offer1.png",
  //   "https://www.abnosoftwares.com/assets/images/Edubridge-Logo.png",
  //   "https://www.abnosoftwares.com/assets/images/nuru365.png",
  //   "https://www.abnosoftwares.com/assets/images/product-offer6.png",
  //   "https://www.abnosoftwares.com/assets/images/lango_kuu.png",
  //   "https://www.abnosoftwares.com/assets/images/CBET-Logo.png",
  //   "https://www.abnosoftwares.com/assets/images/mFaili.png",
  //   "https://www.abnosoftwares.com/assets/images/lybhub-logo.png",
  //   "https://www.abnosoftwares.com/assets/images/soma-lms-logo.png",
  //   "https://www.abnosoftwares.com/assets/images/Bespoke.svg",
  
  const products: string[] = [
    "/images/parent/products/g1.svg",
    "/images/parent/products/g2.svg",
    "/images/parent/products/g3.svg",
    "/images/parent/products/g4.svg",
    "/images/parent/products/g5.svg",
    "/images/parent/products/g6.svg",
    "/images/parent/products/g7.svg",
    "/images/parent/products/g8.svg",
    "/images/parent/products/g9.svg",
    "/images/parent/products/g10.svg",
    "/images/parent/products/g11.svg",
    "/images/parent/products/g12.svg",
  ];
  return (
    <section className="relative overflow-hidden w-full px-6 sm:px-30">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <Image
          src="/images/parent/hero.jpg"
          alt="background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-cbe-900/35 via-[rgba(0, 0, 0, 0.62)] to-primary-cbe-900/60" />
        </div>
      </div>
      <div className="relative">
        <div className="relative container flex flex-col items-center justify-between md:flex-row md:items-center md:-space-x-26">
          <div className="z-20 w-full shrink-0 bg-transparent py-16 sm:py-32 md:-mx-4 md:w-1/2 md:bg-transparent md:px-4">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-xl">
                <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl text-background">
                  Enterprise ERP Solutions Built for Africa
                </h1>
                <p className="text-background/80 mb-10">
                  Kenya&apos;s leading developer of enterprise resource planning
                  software — from academic institutions and SACCOs to
                  manufacturers and microfinance organizations. Fully
                  customizable, scalable, and backed by 15+ years of proven
                  results.
                </p>
                <Button variant="default" size="lg" className="h-12">
                  Explore Our ERP Solutions
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex -translate-x-10 flex-col gap-8 pt-12 pb-8 sm:-translate-x-0 md:gap-16 md:py-32">
              <div className="flex gap-x-6 even:translate-x-22">
                {products
                  .slice(0, products.length / 3)
                  .map((product, i) => LogoCard(i, product))}
              </div>
              <div className="flex gap-x-6 even:translate-x-22">
                {products
                  .slice(products.length / 3, products.length / 3 + 4)
                  .map((product, i) => LogoCard(i, product))}
              </div>
              <div className="flex gap-x-6 even:translate-x-22">
                {products
                  .slice(products.length / 3 + 4)
                  .map((product, i) => LogoCard(i, product))}
              </div>
              <p className="text-background/80 mb-10">
                Trusted by 160+ Organizations Across Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
