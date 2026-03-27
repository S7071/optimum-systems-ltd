import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import CaseStudyCard, { caseStudyProp } from "@/components/ui/case-study-card";
import { ArrowRight } from "lucide-react";

interface prop {
  description: string;
  caseStudies: caseStudyProp[];
}

export default function SiteCaseStudies(prop: prop) {
  return (
    <section className="py-16 md:py-24 w-full px-6 sm:px-30 bg-primary-cbe-50">
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full mx-auto text-center flex items-center flex-col gap-3">
          <BadgePill label="Case Studies" centered={true} />
          <h3 className="font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            Our <span className="text-primary-cta">Success</span> Stories
          </h3>
          <p className="text-primary-cbe-800/60 leading-relaxed max-w-2xl">
            {prop.description}
          </p>
        </div>
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {prop.caseStudies.map((study, idx) => {
            return CaseStudyCard(study, idx);
          })}
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
