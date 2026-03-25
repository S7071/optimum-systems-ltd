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
      {suffix && <em className="not-italic text-primary-cta">{suffix}</em>}
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
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary-cta">
            <span className="h-[2px] w-5 rounded-full bg-primary-cta" />
            About Optimum System Ltd
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.08] tracking-tighter text-foreground md:text-[52px]">
            We build ERP that institutions grow into
          </h1>
          <p className="max-w-[380px] text-base leading-relaxed text-muted-foreground">
            Meet our team, explore our solutions, and discover how we&apos;re
            powering Kenya&apos;s digital transformation — one institution at a
            time.
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
        <StatItem
          value="50"
          suffix="%"
          label={"ICT professionals on our team"}
        />
        <StatItem
          value="186"
          suffix="+"
          label={"Institutions successfully served"}
        />
        <StatItem
          value="20"
          suffix="+"
          label={"Tailored ERP solutions delivered"}
        />
        <StatItem
          value="Cat"
          suffix="-1"
          label={"ICT Authority accreditation — highest level"}
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
            Technology built for African institutions
          </h2>
          <span
            className="mb-5 block h-[2px] w-7 rounded-full"
            style={{ background: "#C8251B" }}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            We think the best tools are the ones shaped around your realities —
            not generic platforms that force institutions to adapt to software.
            Deep local knowledge. No compromise on security. No per-user
            licensing fees. Just solutions that work.
          </p>
        </div>

        {/* Vision */}
        <div>
          <p className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-widest text-primary-cbe-800">
            Our Vision
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/80">
            <p>
              For too long, East African institutions have relied on fragmented
              systems, manual processes, and outdated tools that slow operations
              and drain resources — while compliance demands grow ever more
              complex.
            </p>
            <p>
              We saw an opportunity: to build ERP solutions purpose-designed for
              the realities of Kenyan institutions — from government compliance
              requirements (IPSAS, TVETA, CDACC, E-Citizen) to M-Pesa
              integrations and biometric infrastructure.
            </p>
            <p>
              Today, Optimum ERP Systems delivers modular, scalable, hybrid
              software across education, health, finance, agriculture, and
              enterprise — empowering over 186 institutions to operate with
              greater efficiency, transparency, and accountability.
            </p>
          </div>
        </div>

        {/* Creators */}
        <div>
          <p className="mb-5 border-b border-border pb-4 text-xs font-semibold uppercase tracking-widest text-primary-cbe-800">
            Our Creators
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/80">
            <p>
              <a
                href="#"
                className="mr-1 border-b pb-px font-medium transition-colors border-primary-cta text-primary-cta"
              >
                Optimum System Ltd
              </a>
              is a Nairobi-based software company founded by a passionate team
              of ICT professionals who understood that local institutions
              deserve world-class technology built for their context.
            </p>
            <p>
              With 50+ dedicated specialists in software engineering, systems
              integration, and client success, we hold Category 1 ICT Authority
              accreditations — the highest level — in both Systems &
              Applications and Information Security. We are also registered as
              both Data Controller and Data Processor under Kenya&apos;s Data
              Protection Act.
            </p>
            <p>
              Every solution we build reflects our core values: integrity,
              accountability, excellence, and an unwavering commitment to
              delivering high ROI for the institutions we serve.
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
            href="/company/team"
            className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-px"
            style={{ background: "#C8251B" }}
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
