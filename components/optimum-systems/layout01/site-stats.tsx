import { ChartLine, HeartPlus, ServerCog, ShieldCheck } from "lucide-react";

export default function SiteStats() {
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30 bg-background">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <h1 className="mb-5 text-2xl sm:text-4xl font-semibold text-pretty">
                Automate, Manage & Grow Your Institution Today
              </h1>
              <p className="text-muted-foreground">
                Leverage Optimum&apos;s purpose-built ERP platform to streamline
                operations across finance, HR, academics, and more — giving your
                team the tools to work smarter across every department.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-7 lg:justify-start">
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  160 +
                </p>
                <p className="text-muted-foreground text-sm sm:text-md">
                  Institutions Served
                </p>
              </div>
              <div
                data-orientation="vertical"
                role="none"
                data-slot="separator"
                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch h-auto"
              ></div>
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  15 +
                </p>
                <p className="text-muted-foreground text-sm sm:text-md">
                  Years of Experience
                </p>
              </div>
              <div
                data-orientation="vertical"
                role="none"
                data-slot="separator"
                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch h-auto"
              ></div>
              <div className="flex flex-col gap-1.5">
                <p className="text-2xl font-bold text-foreground sm:text-3xl">
                  47
                </p>
                <p className="text-muted-foreground text-sm sm:text-md">
                  Counties Covered
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-2.5 text-left sm:grid-cols-2 sm:text-center lg:text-left">
            <div className="flex items-start gap-5 rounded-lg border border-border/30 bg-muted/50 p-6 sm:flex-col sm:p-7">
              <div className="size-12 rounded-full sm:bg-background flex items-center justify-center">
                <ServerCog className="size-8 sm:size-6" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-foreground sm:text-base">
                  Cloud & On-Premise Deployment
                </p>
                <p className="text-muted-foreground sm:text-base">
                  Flexible hosting options — deploy on the cloud or on your own
                  servers based on your institution&apos;s needs and
                  infrastructure.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-lg border border-border/30 bg-muted/50 p-6 sm:flex-col sm:p-7">
              <div className="size-12 rounded-full sm:bg-background flex items-center justify-center">
                <HeartPlus className="size-8 sm:size-6" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-foreground sm:text-base">
                  24/7 Dedicated Support
                </p>
                <p className="text-muted-foreground sm:text-base">
                  Round-the-clock technical assistance, system monitoring, and
                  expert helpdesk support whenever you need it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-lg border border-border/30 bg-muted/50 p-6 sm:flex-col sm:p-7">
              <div className="size-12 rounded-full sm:bg-background flex items-center justify-center">
                <ChartLine className="size-8 sm:size-6" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-foreground sm:text-base">
                  Real-Time Reporting & Analytics
                </p>
                <p className="text-muted-foreground sm:text-base">
                  Generate instant financial, academic, and operational reports
                  with powerful dashboards built for decision-makers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 rounded-lg border border-border/30 bg-muted/50 p-6 sm:flex-col sm:p-7">
              <div className="size-12 rounded-full sm:bg-background flex items-center justify-center">
                <ShieldCheck className="size-8 sm:size-6" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-foreground sm:text-base">
                  Secure & Reliable Systems
                </p>
                <p className="text-muted-foreground sm:text-base">
                  Bank-grade data security with role-based access controls,
                  audit trails, and automatic backups to keep your data safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
