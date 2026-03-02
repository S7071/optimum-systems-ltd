import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, Zap } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function SiteCta() {
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30 bg-background">
      <div className="container">
        <div className="relative h-96 overflow-hidden rounded-xl border border-border">
          <img
            alt="placeholder"
            className="hidden h-full w-full object-cover dark:block"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-LYZxo7oVFOI-unsplash.webp"
          />
          <img
            alt="placeholder"
            className="h-full w-full object-cover dark:hidden"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/denis96-gmsf4Zo2-rY-unsplash.webp"
          />
          <div className="absolute inset-0 bg-radial from-background to-background/50 lg:to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Experience Optimum ERP in Action
              </h2>
              <p className="text-sm text-muted-foreground">
                Discover how our fully integrated ERP system streamlines
                finance, HR, inventory, payroll, and operations — built for
                Kenyan businesses.
              </p>
            </div>
            <Button variant="default" size="lg">
              Book a Free Demo
              <ArrowUpRight size={24} />
            </Button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="#"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 rounded-xl border border-border bg-muted/50 px-8 py-8 transition-transform hover:-translate-y-0.5 h-fit"
          >
            <span className="grid w-16 h-12 place-items-center rounded-lg border border-border bg-background">
              <Zap size={20} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">Guided Implementation</h3>
              <p className="text-muted-foreground text-sm">
                Our team configures, customizes, and deploys your ERP system
                efficiently with full onboarding and staff training.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 rounded-xl border border-border bg-muted/50 px-8 py-8 transition-transform hover:-translate-y-0.5 h-fit"
          >
            <span className="grid w-16 h-12 place-items-center rounded-lg border border-border bg-background">
              <BookOpen size={20} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium">
                Ongoing Support & Training
              </h3>
              <p className="text-muted-foreground text-sm">
                Access detailed system documentation, user training, and
                dedicated local technical support whenever you need it.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
