import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export interface caseStudyProp {
  industry: string;
  title: string;
  stat: string;
  statLabel: string;
  coverSrc: string;
  href: string;
}

export default function CaseStudyCard(prop: caseStudyProp, idx?: string | number) {
  return (
    <a
      key={idx}
      href={prop.href}
      style={{ backgroundImage: `url('${prop.coverSrc}')` }}
      className="
                relative min-h-auto w-full overflow-hidden rounded-lg
                bg-cover bg-center bg-no-repeat p-3
                transition-all duration-300
                before:content-[''] before:absolute before:inset-0 before:z-10
                before:transition-all before:duration-300
                hover:before:bg-primary-cbe-800/20
                after:content-[''] after:absolute after:top-0 after:left-0
                after:z-20 after:w-1 after:h-full after:bg-[#D01F1F]
                sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]
              "
    >
      <div className="relative z-30 flex size-full flex-col justify-between gap-20 md:gap-16">
        {/* Top — industry tag + title */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium tracking-widest uppercase text-white line-clamp-1 bg-primary-cbe-500 w-fit p-2 rounded-xl">
            {prop.industry}
          </span>
        </div>

        {/* Bottom — stat + CTA */}
        <div className="flex w-full flex-col gap-5 bg-primary-cbe-500/50 backdrop-blur-sm text-primary-cbe-800 p-4 rounded-xl items-end">
          <div className="flex flex-col gap-0.5">
            <p className="text-white font-bold text-sm sm:text-xl text-pretty leading-tight tracking-tight line-clamp-1">
              {prop.title}
            </p>
            <span className="text-sm text-white/80 mt-1 line-clamp-2">
              {prop.statLabel}
            </span>
          </div>

          <Button variant="default" size="sm" className="w-fit">
            Read Story
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </a>
  );
}
