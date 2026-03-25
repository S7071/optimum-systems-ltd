import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface caseStudy {
  industry: string;
  title: string;
  stat: string;
  statLabel: string;
  coverSrc: string;
  href: string;
};

interface prop {
  description: string;
  caseStudies: caseStudy[];
};

export default function SiteCaseStudies(prop: prop) {
  return (
    <section className="py-16 md:py-24 w-full px-6 sm:px-30">
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full mx-auto text-center flex items-center flex-col gap-3">
          <BadgePill label="Case Studies" centered={true} />
          <h3 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-800 mb-4">
            Our <span className="text-primary-cta">Success</span> Stories
          </h3>
          <p className="text-primary-cbe-800/60 leading-relaxed max-w-2xl">
            {prop.description}
          </p>
        </div>
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {prop.caseStudies.map((study) => (
            <a
              key={study.title}
              href={study.href}
              style={{ backgroundImage: `url('${study.coverSrc}')` }}
              className="
                relative min-h-auto w-full overflow-hidden rounded-lg
                bg-cover bg-center bg-no-repeat p-5
                transition-all duration-300
                before:content-[''] before:absolute before:inset-0 before:z-10
                before:bg-primary-cbe-800/75 before:transition-all before:duration-300
                hover:before:bg-primary-cbe-800/60
                after:content-[''] after:absolute after:top-0 after:left-0
                after:z-20 after:w-1 after:h-full after:bg-[#D01F1F]
                sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]
              "
            >
              <div className="relative z-30 flex size-full flex-col justify-between gap-20 md:gap-16">
                {/* Top — industry tag + title */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-[#7AA3CC] line-clamp-1">
                    {study.industry}
                  </span>
                  <p className="text-white font-bold text-xl sm:text-2xl text-pretty leading-tight tracking-tight line-clamp-2">
                    {study.title}
                  </p>
                </div>

                {/* Bottom — stat + CTA */}
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-5xl font-bold leading-none text-white line-clamp-1">
                      {study.stat}
                    </span>
                    <span className="text-sm text-white/70 mt-1 line-clamp-1">
                      {study.statLabel}
                    </span>
                  </div>

                  <Button variant="default" size="lg" className="w-fit">
                    Read Story
                    <ArrowRight size={24} />
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button variant="default" size="lg">
            Read more success stories
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
