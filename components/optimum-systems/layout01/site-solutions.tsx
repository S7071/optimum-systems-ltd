import { Badge } from "@/components/ui/badge";

/* eslint-disable @next/next/no-img-element */
export default function SiteSolutions() {
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30 bg-background">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">Solutions</Badge>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Transform Your Experience
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Discover innovative solutions to elevate your journey. From basics
            to advanced features, experience excellence at each level.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <img
            alt="placeholder"
            className="aspect-square size-full rounded-2xl object-cover md:order-1 xl:order-1"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ee1-cRqJQtA-unsplash.jpg"
          />
          <div className="flex flex-col justify-between gap-20 rounded-2xl bg-muted/50 p-8 md:order-2 md:gap-32 xl:order-2">
            <h3 className="text-lg text-semibold">School & Academic ERP</h3>
            <div className="">
              <p className="mb-8 text-muted-foreground">
                Powering institutions from fee collection to timetabling and
                beyond.
              </p>
              <a href="#" className="text-sm underline">
                More Information
              </a>
            </div>
          </div>
          <img
            alt="placeholder"
            className="aspect-square size-full rounded-2xl object-cover md:order-4 xl:order-3"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-Ych4LcKFA5E-unsplash.jpg"
          />
          <div className="flex flex-col justify-between gap-20 rounded-2xl bg-primary text-background p-8 md:order-3 md:gap-32 xl:order-4">
            <h3 className="text-lg text-semibold text-white">SACCO & Microfinance Suite</h3>
            <div className="">
              <p className="mb-8 text-white/80">
                End-to-end member management, loan tracking, and financial
                reporting.
              </p>
              <a href="#" className="text-sm text-white/80 underline">
                More Information
              </a>
            </div>
          </div>
          <img
            alt="placeholder"
            className="aspect-square size-full rounded-2xl object-cover md:order-5 xl:order-6"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-8FIN2qa2vQM-unsplash.jpg"
          />
          <div className="flex flex-col justify-between gap-20 rounded-2xl bg-primary text-background p-8 md:order-6 md:gap-32 xl:order-5">
            <h3 className="text-lg text-semibold">HR & Payroll Module</h3>
            <div className="">
              <p className="mb-8 text-white/80">
                Automate payroll, leave management, and compliance with ease.
              </p>
              <a href="#" className="text-sm underline text-white/80">
                More Information
              </a>
            </div>
          </div>
          <img
            alt="placeholder"
            className="aspect-square size-full rounded-2xl object-cover md:order-8"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ZXLGP2Qh3Mo-unsplash.jpg"
          />
          <div className="flex flex-col justify-between gap-20 rounded-2xl bg-muted/50 p-8 md:order-7 md:gap-32">
            <h3 className="text-lg text-semibold">Cloud & On-Premise Deployment</h3>
            <div className="">
              <p className="mb-8 text-muted-foreground">
                Choose the infrastructure that works for you — we support both.
              </p>
              <a href="#" className="text-sm underline">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
