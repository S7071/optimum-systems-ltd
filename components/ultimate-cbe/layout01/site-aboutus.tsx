/* eslint-disable @next/next/no-img-element */

// ── Sub-components ─────────────────────────────────────────────────────────────

const PhotoCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-blue-50 ${className ?? ""}`}
  >
    {children}
  </div>
);

const StatItem = ({
  value,
  suffix,
  label,
  last = false,
}: {
  value: string;
  suffix?: string;
  label: string;
  last?: boolean;
}) => (
  <div className={`px-10 py-10 ${last ? "" : "border-r border-border"}`}>
    <p className="mb-1.5 text-4xl font-bold tracking-tighter text-foreground">
      {value}
      {suffix && (
        <em className="not-italic text-primary-cta">
          {suffix}
        </em>
      )}
    </p>
    <p className="text-sm leading-snug text-muted-foreground whitespace-pre-line">
      {label}
    </p>
  </div>
);

const MosaicTile = ({
  className,
  caption,
  src,
  alt,
}: {
  className?: string;
  caption?: string;
  src: string;
  alt: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-blue-50 ${className ?? ""}`}
  >
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover opacity-80"
    />
    {caption && (
      <span
        className="absolute bottom-3 left-3 rounded-sm px-2 py-1 text-[11px] font-medium uppercase tracking-wide"
        style={{ background: "rgba(255,255,255,0.85)", color: "#0B2FA6" }}
      >
        {caption}
      </span>
    )}
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────────

export default function SiteAboutUs() {
  return (
    <div className="w-full py-16 sm:py-24 px-6 sm:px-30">
      <section className="mx-auto grid max-w-full grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20 mb-16 sm:mb-24">
        {/* Copy */}
        <div>
          <div
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary-cta"
          >
            <span
              className="h-[2px] w-5 rounded-full bg-primary-cta"
            />
            About Optimum System Ltd
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.08] tracking-tighter text-foreground md:text-[52px]">
            We build software&nbsp;the world creates itself
          </h1>
          <p className="max-w-[380px] text-base leading-relaxed text-muted-foreground">
            Meet our team, discover our values, and learn how we balance work,
            life, and everything in between.
          </p>
        </div>

        {/* Photo grid — tall left + stacked right */}
        <div
          className="grid grid-cols-2 gap-2"
          style={{ gridTemplateRows: "200px 120px" }}
        >
          <PhotoCard className="row-span-2">
            <img
              alt="Team at work"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              className="h-full w-full object-cover"
            />
          </PhotoCard>
          <PhotoCard>
            <img
              alt="Office environment"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              className="h-full w-full object-cover"
            />
          </PhotoCard>
          <PhotoCard>
            <img
              alt="Product design"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              className="h-full w-full object-cover"
            />
          </PhotoCard>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
        <StatItem value="10" suffix="+" label={"Years building\nweb tools"} />
        <StatItem value="500" suffix="K" label={"Active users\nworldwide"} />
        <StatItem value="0" label={"Lines of code\nrequired to start"} />
        <StatItem
          value="98"
          suffix="%"
          label={"Customer\nsatisfaction rate"}
          last
        />
      </div>

      {/* ── Content columns ── */}
      <div className="mx-auto grid max-w-full grid-cols-1 gap-16 py-24 md:grid-cols-[280px_1fr_1fr]">
        {/* Sidebar */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary-cta">
            What we believe
          </p>
          <h2 className="mb-5 text-[32px] font-bold leading-[1.15] tracking-tighter text-foreground">
            Software built for everyone
          </h2>
          <span
            className="mb-5 block h-[2px] w-7 rounded-full"
            style={{ background: "#C8251B" }}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            We think the best tools are the ones you can shape to your own needs
            — no engineers required.
          </p>
        </div>

        {/* Vision */}
        <div>
          <p
            className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-widest text-primary-cbe-800"
          >
            Our Vision
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/80">
            <p>
              For years, the process of building custom software has remained
              challenging. Today, visual builders exist, but tailored solutions
              still require technical expertise and a lot of time. This is a
              problem for businesses and individuals alike.
            </p>
            <p>
              What if you could create custom software without writing a single
              line of code? What if you could build your own tools?
            </p>
            <p>
              With our platform, you can. Our tools let you design layouts and
              create functionality — all without needing to code. We believe
              that everyone should be able to build their own solutions,
              regardless of their technical background.
            </p>
          </div>
        </div>

        {/* Creators */}
        <div>
          <p
            className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-widest text-primary-cbe-800"
          >
            Our Creators
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/80">
            <p>
              <a
                href="#"
                className="mr-1 border-b pb-px font-medium transition-colors border-primary-cta text-primary-cta"
                // onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#0B2FA6")}
                // onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(11,47,166,0.25)")}
              >
                Optimum System Ltd
              </a>
              has been building web tools for over a decade, focusing on
              efficiency and user control in every project. We know that the
              best solutions are the ones that you can create yourself.
            </p>
            <p>
              We initially developed these solutions for our own team, and now
              everyone can benefit from them too. We are proud to offer a
              platform that is accessible to all, regardless of technical
              expertise.
            </p>
            <p>
              Our team is made up of talented individuals passionate about
              creating tools that empower users to build their own solutions
              with ease. We can&apos;t wait to see what you create.
            </p>
          </div>
        </div>
      </div>

      {/* ── Photo mosaic ── */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-full py-16">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest text-primary-cta">
            Our work &amp; culture
          </p>
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "160px 160px",
            }}
          >
            <MosaicTile
              className="col-span-2"
              caption="Engineering"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="Engineering"
            />
            <MosaicTile
              className="col-span-1"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="Design"
            />
            <MosaicTile
              className="col-span-3"
              caption="Culture &amp; Growth"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="Culture"
            />
            <MosaicTile
              className="col-span-1"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
              alt="Team"
            />
            <MosaicTile
              className="col-span-2"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg"
              alt="Office"
            />
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div className="mx-auto flex max-w-full flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-center">
        <div>
          <p className="mb-2.5 text-xs font-medium uppercase tracking-widest text-primary-cta">
            Part of our global team
          </p>
          <h3 className="text-[30px] font-bold leading-tight tracking-tight text-foreground">
            Curious who&apos;s behind the platform?
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-px"
            style={{ background: "#C8251B" }}
            // onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#A81C14")}
            // onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#C8251B")}
          >
            Meet the team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
