/* eslint-disable @next/next/no-img-element */
import { BadgePill } from "@/components/ui/badge-pill";
import { ArrowRight } from "lucide-react";

type CaseStudyProp = {
  id?: string | number;
  title: string;
  description?: string;
  excerpt?: string;
  summary?: string;
  image: string;
  href?: string;
  badge?: string;
  category?: string;
  institution?: string;
  location?: string;
  impact?: string;
  metric?: string;
  metricLabel?: string;
};

interface Props {
  description: string;
  caseStudies: CaseStudyProp[];
}

function getDescription(study: CaseStudyProp) {
  return study.description || study.excerpt || study.summary || "";
}

function getBadge(study: CaseStudyProp) {
  return study.badge || study.category || "Case Study";
}

function CardLink({
  href,
  children,
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <div className={className}>{children}</div>;
}

function FeaturedCaseStudyCard({ study }: { study: CaseStudyProp }) {
  return (
    <CardLink
      href={study.href}
      className="group relative block min-h-[520px] overflow-hidden rounded-[2rem] border border-white/60 bg-slate-900 shadow-sm"
    >
      <div className="absolute inset-0">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.22),rgba(15,23,42,0.78))]" />
      </div>

      <div className="absolute h-full flex flex-col justify-between p-6 sm:p-7">
        <div className="flex flex-row items-start justify-between gap-3">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-primary-cbe-500/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary-cbe-950/20 backdrop-blur">
            {getBadge(study)}
          </span>

          {(study.institution || study.location) && (
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-right text-[11px] font-medium text-white/90 backdrop-blur">
              {study.institution || study.location}
            </div>
          )}
        </div>

        <div className="max-w-2xl flex flex-col items-start justify-end h-fit">
          {(study.metric || study.impact) && (
            <div className="w-fit mb-4 inline-flex items-center rounded-full border border-primary-cta/30 bg-primary-cta/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              {study.metric || study.impact}
            </div>
          )}

          <h3 className="max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            {study.title}
          </h3>

          {getDescription(study) && (
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 sm:text-[15px]">
              {getDescription(study)}
            </p>
          )}

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary-cbe-500 transition-all duration-300 group-hover:translate-x-1">
            Read full story
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </CardLink>
  );
}

function StandardCaseStudyCard({ study }: { study: CaseStudyProp }) {
  return (
    <CardLink
      href={study.href}
      className="group relative block min-h-[248px] overflow-hidden rounded-[1.75rem] border border-white/60 bg-slate-900 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.4)]"
    >
      <div className="absolute inset-0">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
            {getBadge(study)}
          </span>

          {(study.metricLabel || study.metric) && (
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-medium text-white/90 backdrop-blur">
              {study.metricLabel || study.metric}
            </span>
          )}
        </div>

        <div>
          <h4 className="text-xl font-bold leading-snug tracking-tight text-white">
            {study.title}
          </h4>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Read story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </CardLink>
  );
}

function CompactCaseStudyCard({ study }: { study: CaseStudyProp }) {
  return (
    <CardLink
      href={study.href}
      className="group overflow-hidden rounded-[1.5rem] border border-primary-cbe-200/70 bg-white/85 shadow-[0_14px_45px_-24px_rgba(15,23,42,0.22)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-24px_rgba(15,23,42,0.28)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="inline-flex rounded-full border border-white/30 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
            {getBadge(study)}
          </span>

          {(study.institution || study.location) && (
            <span className="rounded-full border border-white/30 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-primary-cbe-500 backdrop-blur">
              {study.institution || study.location}
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        {(study.metric || study.impact) && (
          <div className="mb-3 inline-flex rounded-full bg-primary-cta/10 px-3 py-1.5 text-[11px] font-semibold text-primary-cta">
            {study.metric || study.impact}
          </div>
        )}

        <h4 className="text-lg font-bold leading-snug tracking-tight text-primary-cbe-500">
          {study.title}
        </h4>

        {getDescription(study) && (
          <p className="mt-3 text-sm leading-7 text-primary-cbe-800/65">
            {getDescription(study)}
          </p>
        )}

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-cbe-500">
          Read case study
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </CardLink>
  );
}

export default function SiteCaseStudies({ description, caseStudies }: Props) {
  const featured = caseStudies[0];
  const secondary = caseStudies.slice(1, 3);
  const remaining = caseStudies.slice(3);

  return (
    <section className="relative isolate overflow-hidden bg-background py-20 sm:py-24 lg:py-28 w-full px-6 sm:px-16 lg:px-30">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-80px] top-20 h-64 w-64 rounded-full bg-primary-cbe-300/20 blur-3xl" />
        <div className="absolute bottom-50 right-[-40px] h-72 w-72 rounded-full bg-primary-cta/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-3 items-center">
          <BadgePill label="Case Studies" centered={true} />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-pretty leading-tight tracking-tight text-primary-cbe-500 mb-4">
            Real Institutions.{" "}
            <span className="text-primary-cta">Measured Results.</span>
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>

        {/* content */}
        {featured && (
          <div className="grid gap-6 lg:grid-cols-12 mt-14">
            <div className="lg:col-span-7">
              <FeaturedCaseStudyCard study={featured} />
            </div>

            <div className="grid gap-6 lg:col-span-5">
              {secondary.map((study, idx) => (
                <StandardCaseStudyCard
                  key={study.id ?? `secondary-${idx}`}
                  study={study}
                />
              ))}
            </div>
          </div>
        )}

        {remaining.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remaining.map((study, idx) => (
              <CompactCaseStudyCard
                key={study.id ?? `compact-${idx}`}
                study={study}
              />
            ))}
          </div>
        )}

        {/* footer cta */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2 text-center">
          <div className="max-w-2xl text-sm leading-7 text-primary-cbe-800/60">
            Explore more transformation stories across universities, TVETs, and
            polytechnics adopting enterprise systems at scale.
          </div>

          <a
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-cta px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-cta-800"
          >
            View all case studies
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
