import { Avatar, AvatarImage } from "@/components/ui/avatar";

/* eslint-disable @next/next/no-img-element */
export default function SiteTestimonials() {
  interface testimony {
    statement: string;
    avator: string;
    name: string;
    position: string;
    logo: string;
  }
  const testimonies: testimony[] = [
    {
      statement:
        "Optimum's ERP has completely transformed how we manage fees, payroll, and student records. Everything is now in one place — it&apos;s simplified our operations tenfold and the support team is always responsive.",
      avator: "/images/clients/01.jpg",
      name: "Dr. Jane Mutua",
      position: "Principal, Trukana University College",
      logo: "/images/clients/tuc.png",
    },
    {
      statement:
        "Since deploying the Optimum system, we've eliminated manual errors in our financial reporting and our audit processes are now seamless. It integrates perfectly across all our departments.",
      avator: "/images/clients/02.jpg",
      name: "Mr. Peter Omondi",
      position:
        "Finance Officer, Gatundu South Technical and Vocational College",
      logo: "/images/clients/gatundu-south-technical-and-vocational-college.png",
    },
  ];
  return (
    <section className="py-16 sm:py-32 w-full px-6 sm:px-30 bg-background">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              What Our Clients Think
            </h2>
            <div className="max-w-[100.75rem]">
              <p className="text-md text-muted-foreground md:text-lg">
                Trusted by over 160 institutions across Kenya — here&apos;s what
                they have to say about working with Optimum.
              </p>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {testimonies.map((card, idx) => {
            return (
              <div
                key={idx}
                className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-muted p-4 sm:p-6"
              >
                <div className="flex flex-col gap-6">
                  <p className="text-l leading-relaxed font-normal text-foreground">
                    {card.statement}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar size="default">
                      <AvatarImage
                        className="rounded-full aspect-square size-full object-cover"
                        alt={card.name}
                        src={card.avator}
                      />
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-sm font-medium text-foreground">
                        {card.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {card.position}
                      </div>
                    </div>
                  </div>
                  <div className="w-14 h-14">
                    <img
                      className="h-full object-contain object-center opacity-80"
                      alt={card.name}
                      src={card.logo}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="#"
            className="group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-muted p-8 transition-all duration-300 hover:bg-foreground hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg')] bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10"></div>
            <div className="relative flex flex-col gap-3">
              <div className="text-5xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-background">
                90%
              </div>
              <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
                Reduction in Manual Reporting Errors
              </p>
            </div>
            <div className="relative flex flex-col gap-6">
              <p className="text-lg leading-tight font-semibold text-foreground transition-colors duration-300 group-hover:text-background">
                How Rift Valley National Polytechnic Eliminated Paperwork
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-muted p-8 transition-all duration-300 hover:bg-foreground hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg')] bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10"></div>
            <div className="relative flex flex-col gap-3">
              <div className="text-5xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-background">
                3x
              </div>
              <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
                Faster Fee Collection & Reconciliation
              </p>
            </div>
            <div className="relative flex flex-col gap-6">
              <p className="text-lg leading-tight font-semibold text-foreground transition-colors duration-300 group-hover:text-background">
                How Baringo National Polytechnic Streamlined Finance
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex aspect-square flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-muted p-8 transition-all duration-300 hover:bg-foreground hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg')] bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10"></div>
            <div className="relative flex flex-col gap-3">
              <div className="text-5xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-background">
                100%
              </div>
              <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-background/80">
                On-Time Payroll Processing
              </p>
            </div>
            <div className="relative flex flex-col gap-6">
              <p className="text-lg leading-tight font-semibold text-foreground transition-colors duration-300 group-hover:text-background">
                How Meru Teachers College Achieved Zero Payroll Delays
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
