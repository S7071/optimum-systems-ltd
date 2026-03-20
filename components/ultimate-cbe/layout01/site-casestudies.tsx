import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "TechCorp's Quantum Leap in AI",
    industry: "Technology",
    stat: "30%",
    statLabel: "increase in processing speed",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    href: "#",
  },
  {
    title: "GreenTech's Path to Carbon Neutrality by 2025",
    industry: "Sustainability",
    stat: "50%",
    statLabel: "reduction in carbon emissions",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-o9F8dRoSucM-unsplash.jpg",
    href: "#",
  },
  {
    title: "FinServe's Blockchain Security Revolution",
    industry: "Finance",
    stat: "60%",
    statLabel: "decrease in fraud cases",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-K1W9OjEgacI-unsplash.jpg",
    href: "#",
  },
  {
    title: "EduWorld's VR Learning Transformation",
    industry: "Education",
    stat: "80%",
    statLabel: "increase in student engagement",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    href: "#",
  },
  {
    title: "HealthPlus's Telemedicine Innovation",
    industry: "Healthcare",
    stat: "25%",
    statLabel: "increase in patient satisfaction",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-sutfgh5DNIU-unsplash.jpg",
    href: "#",
  },
  {
    title: "Ecolands's Sustainable Land Development",
    industry: "Real Estate",
    stat: "30%",
    statLabel: "increase in land productivity",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ZXLGP2Qh3Mo-unsplash.jpg",
    href: "#",
  },
];

export default function SiteCaseStudies() {
  return (
    <section className="py-16 md:py-24 w-full px-6 sm:px-30">
      <div className="container flex flex-col gap-10">
        <div className="w-full mx-auto text-center flex items-center flex-col gap-3">
          <BadgePill label="Case Studies" centered={true} />
          <h3 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-800 mb-4">
            Our <span className="text-primary-cta">Success</span> Stories
          </h3>
          <p className="text-primary-cbe-800/60 leading-relaxed max-w-2xl">
            Incididunt sit ad incididunt ut nostrud deserunt pariatur eu.
            Cupidatat tempor pariatur laborum cillum reprehenderit veniam enim
            exercitation cupidatat laboris tempor anim mollit.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <a
              key={study.title}
              href={study.href}
              style={{ backgroundImage: `url('${study.image}')` }}
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
                  <span className="text-xs font-medium tracking-widest uppercase text-[#7AA3CC]">
                    {study.industry}
                  </span>
                  <p className="text-white font-bold text-xl sm:text-2xl text-pretty leading-tight tracking-tight">
                    {study.title}
                  </p>
                </div>

                {/* Bottom — stat + CTA */}
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-5xl font-bold leading-none text-white">
                      {study.stat}
                    </span>
                    <span className="text-sm text-white/70 mt-1">
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
      </div>
    </section>
  );
}
