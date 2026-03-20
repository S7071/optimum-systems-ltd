// ─── Brand tokens ────────────────────────────────────────────────────────────
const brand = {
  blue: "#0A2A6E",
  blueMid: "#1A4ABE",
  blueLight: "#EBF0FB",
  red: "#D02030",
  redHover: "#B01828",
  redSoft: "#FDF0F1",
  grey50: "#F7F8FC",
  grey100: "#ECEEF5",
  grey300: "#BDC2D4",
  grey500: "#7B84A0",
  grey800: "#1E2540",
} as const;

// ─── Sub-components ──────────────────────────────────────────────────────────

function PulseDot() {
  return (
    <span
      className="size-2 shrink-0 rounded-full"
      style={{
        background: brand.red,
        boxShadow: `0 0 0 4px rgba(208,32,48,.25)`,
        animation: "pulse 2s ease-in-out infinite",
      }}
    />
  );
}

/** Red-filled action button — used for all primary CTAs */
function BtnRed({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-px"
      style={{ background: brand.red }}
      // onMouseEnter={(e) =>
      //   ((e.currentTarget as HTMLAnchorElement).style.background = brand.redHover)
      // }
      // onMouseLeave={(e) =>
      //   ((e.currentTarget as HTMLAnchorElement).style.background = brand.red)
      // }
    >
      {children}
    </a>
  );
}

/** Outlined action button (hover fills red) */
function BtnOutline({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-sm font-semibold transition-all hover:text-white"
      style={{ borderColor: brand.red, color: brand.red }}
      // onMouseEnter={(e) => {
      //   const el = e.currentTarget as HTMLAnchorElement;
      //   el.style.background = brand.red;
      //   el.style.color = "#fff";
      // }}
      // onMouseLeave={(e) => {
      //   const el = e.currentTarget as HTMLAnchorElement;
      //   el.style.background = "transparent";
      //   el.style.color = brand.red;
      // }}
    >
      {children}
    </a>
  );
}

type BadgeVariant = "new" | "improvement" | "update";

const badgeStyles: Record<
  BadgeVariant,
  { bg: string; color: string; label: string }
> = {
  new: { bg: "#FDF0F1", color: brand.red, label: "New feature" },
  improvement: { bg: "#EBF0FB", color: brand.blueMid, label: "Improvement" },
  update: { bg: "#FFFBEB", color: "#92400E", label: "Update" },
};

function EntryBadge({ variant }: { variant: BadgeVariant }) {
  const s = badgeStyles[variant];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
      style={{ background: s.bg, color: s.color }}
    >
      <span className="size-1.5 rounded-full" style={{ background: s.color }} />
      {s.label}
    </span>
  );
}

/** Decorative hero banner replacing the placeholder image */
function EntryHero({ accent = brand.red }: { accent?: string }) {
  return (
    <div className="mb-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl relative bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800">
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 80% at 75% 40%, ${accent}33 0%, transparent 60%),
                       radial-gradient(ellipse 40% 60% at 15% 80%, rgba(255,255,255,.04) 0%, transparent 50%)`,
        }}
      />
      {/* Grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Central hex logo mark */}
      <div
        className="relative z-10 flex size-14 items-center justify-center"
        style={{
          background: accent,
          clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
          boxShadow: `0 0 0 10px ${accent}33, 0 0 40px ${accent}4D`,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            fill="white"
            opacity=".9"
            rx="1"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            fill="white"
            opacity=".9"
            rx="1"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            fill="white"
            opacity=".7"
            rx="1"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            fill="white"
            opacity=".7"
            rx="1"
          />
        </svg>
      </div>
    </div>
  );
}

/** Inline checklist item with branded icon */
function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed">
      <span
        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
        style={{ background: brand.blueLight }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6l3 3 5-5"
            stroke={brand.blueMid}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </li>
  );
}

/** Highlighted callout box */
function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-lg p-4 text-sm leading-relaxed"
      style={{
        background: brand.blueLight,
        borderLeft: `3px solid ${brand.blueMid}`,
        color: brand.blue,
      }}
    >
      {children}
    </div>
  );
}

/** Thin divider with centred version label */
function VersionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1" style={{ background: brand.grey100 }} />
      <span
        className="whitespace-nowrap text-xs font-bold uppercase tracking-widest"
        style={{ color: brand.grey300 }}
      >
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: brand.grey100 }} />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SiteChangeLog() {
  return (
    <>
      {/* Pulse keyframe – injected once */}
      <style>{`
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(208,32,48,.25); }
          50%      { box-shadow: 0 0 0 8px rgba(208,32,48,.08); }
        }
        .entry-card {
          transition: box-shadow .2s, transform .2s;
        }
        .entry-card:hover {
          box-shadow: 0 8px 32px rgba(10,42,110,.12);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="w-full pb-32">
        {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden px-6 py-20 sm:px-30 lg:py-28 bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800"
        >
          {/* Decorative radial glows */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 50% 80% at 95% 50%, rgba(208,32,48,.18) 0%, transparent 55%),
                           radial-gradient(ellipse 35% 55% at 5% 85%, rgba(255,255,255,.04) 0%, transparent 50%)`,
              pointerEvents: "none",
            }}
          />
          {/* Watermark word */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-10 select-none font-black uppercase leading-none tracking-widest"
            style={{
              fontSize: "clamp(56px, 10vw, 96px)",
              color: "rgba(255,255,255,.04)",
            }}
          >
            CHANGELOG
          </span>

          <div className="container relative">
            <div className="flex flex-col items-start gap-4 lg:flex-row">
              {/* Left: live badge */}
              <div className="flex w-full items-center gap-2 pt-1 lg:w-[16%]">
                <PulseDot />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Changelog
                </span>
              </div>

              {/* Right: headline + links */}
              <div>
                <h2 className="text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                  Latest features and enhancements
                  <br />
                  <span style={{ color: brand.red }}>UltimateCBE</span>
                </h2>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <BtnRed href="#">
                    Subscribe to updates
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </BtnRed>

                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Follow on Twitter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY ─────────────────────────────────────────────────────── */}
        <div
          className="container mt-10 px-6 sm:px-30 lg:mt-20"
          style={{ background: brand.grey50 }}
        >
          <div className="relative flex">
            {/* ── SIDEBAR ── */}
            <aside className="sticky top-28 hidden h-fit w-[16%] lg:block">
              <p
                className="mb-3 pl-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: brand.grey500 }}
              >
                Timeline
              </p>

              <ul className="flex flex-col">
                {[
                  {
                    href: "#section-1",
                    date: "Mar 20, 2025",
                    tag: "Cloud Storage",
                    active: false,
                  },
                  {
                    href: "#section-2",
                    date: "Mar 15, 2025",
                    tag: "AI Assistant",
                    active: false,
                  },
                  {
                    href: "#section-3",
                    date: "Mar 10, 2025",
                    tag: "Collaboration",
                    active: true,
                  },
                ].map((item) => (
                  <li key={item.href} className="relative">
                    {/* Vertical accent bar */}
                    <span
                      className="absolute left-0 top-0 h-full w-0.5 rounded-full"
                      style={{
                        background: item.active ? brand.red : brand.grey100,
                      }}
                    />
                    <a
                      href={item.href}
                      className="flex flex-col rounded-r-md px-3 py-2 transition-colors"
                      style={
                        item.active
                          ? { background: brand.blueLight }
                          : undefined
                      }
                      // onMouseEnter={(e) =>
                      //   !item.active &&
                      //   ((e.currentTarget as HTMLAnchorElement).style.background =
                      //     brand.blueLight)
                      // }
                      // onMouseLeave={(e) =>
                      //   !item.active &&
                      //   ((e.currentTarget as HTMLAnchorElement).style.background =
                      //     "transparent")
                      // }
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{
                          color: item.active ? brand.blue : brand.grey800,
                        }}
                      >
                        {item.date}
                      </span>
                      <span
                        className="mt-0.5 text-xs"
                        style={{ color: brand.grey500 }}
                      >
                        {item.tag}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Sidebar CTA */}
              <div
                className="mt-6 rounded-xl border p-4"
                style={{
                  background: brand.blueLight,
                  borderColor: "rgba(26,74,190,.15)",
                }}
              >
                <p
                  className="mb-3 text-xs leading-relaxed"
                  style={{ color: brand.grey500 }}
                >
                  Be the first to know when new features drop.
                </p>
                <BtnRed href="#">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 4l6 5 6-5M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Get notified
                </BtnRed>
              </div>
            </aside>

            {/* Vertical separator */}
            <div
              role="none"
              className="mx-8 hidden w-px self-stretch lg:block"
              style={{ background: brand.grey100 }}
            />

            {/* ── FEED ── */}
            <div className="mx-auto flex max-w-prose flex-col gap-8">
              <VersionDivider label="v4.2 · Mar 20, 2025" />

              {/* ── ENTRY 1: Cloud Storage ── */}
              <article
                id="section-1"
                className="entry-card scroll-m-20 overflow-hidden rounded-2xl border bg-white"
                style={{ borderColor: brand.grey100 }}
              >
                <EntryHero accent={brand.red} />

                <div className="px-8 pb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <EntryBadge variant="new" />
                    <time className="text-sm" style={{ color: brand.grey500 }}>
                      Mar 20, 2025
                    </time>
                  </div>

                  <h3
                    className="mb-4 text-2xl font-bold leading-snug tracking-tight"
                    style={{ color: brand.grey800 }}
                  >
                    Introducing UltimateCBE Cloud Storage
                  </h3>

                  <p
                    className="mb-5 text-sm leading-relaxed"
                    style={{ color: brand.grey500 }}
                  >
                    A centralised hub for managing all your creative assets
                    (Media tab) and project files (Projects tab) — accessible
                    from any device.
                  </p>

                  <ul className="mb-5 flex flex-col gap-2.5">
                    <FeatureItem>
                      The Asset Library is now integrated within Cloud Storage.
                    </FeatureItem>
                    <FeatureItem>
                      Advanced filtering and tagging for better media
                      organisation.
                    </FeatureItem>
                    <FeatureItem>
                      Access cloud assets via{" "}
                      <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-semibold">
                        ⌘F
                      </kbd>{" "}
                      or the Resource Panel.
                    </FeatureItem>
                    <FeatureItem>
                      Start projects from Gallery templates, Cloud Storage, or
                      shared team projects.
                    </FeatureItem>
                  </ul>

                  <HighlightBox>
                    <strong>50 GB free storage</strong> for all users at launch.
                    Premium plans with expanded allocations are available.{" "}
                    <a
                      href="#"
                      className="font-semibold underline underline-offset-2"
                      style={{ color: brand.blueMid }}
                    >
                      Submit feedback →
                    </a>
                  </HighlightBox>

                  <div
                    className="mt-6 flex items-center justify-between border-t pt-5"
                    style={{ borderColor: brand.grey100 }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${brand.blueMid}, ${brand.red})`,
                        }}
                      >
                        EC
                      </span>
                      <div className="flex flex-col">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: brand.grey800 }}
                        >
                          Emily Chen
                        </p>
                        <p className="text-xs" style={{ color: brand.grey500 }}>
                          Product Manager
                        </p>
                      </div>
                    </div>

                    <BtnRed href="#">
                      Read full notes
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </BtnRed>
                  </div>
                </div>
              </article>

              <VersionDivider label="v4.1 · Mar 15, 2025" />

              {/* ── ENTRY 2: AI Assistant ── */}
              <article
                id="section-2"
                className="entry-card scroll-m-20 overflow-hidden rounded-2xl border bg-white"
                style={{ borderColor: brand.grey100 }}
              >
                <EntryHero accent={brand.blueMid} />

                <div className="px-8 pb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <EntryBadge variant="improvement" />
                    <time className="text-sm" style={{ color: brand.grey500 }}>
                      Mar 15, 2025
                    </time>
                  </div>

                  <h3
                    className="mb-4 text-2xl font-bold leading-snug tracking-tight"
                    style={{ color: brand.grey800 }}
                  >
                    AI-Powered Design Assistant
                  </h3>

                  <p
                    className="mb-5 text-sm leading-relaxed"
                    style={{ color: brand.grey500 }}
                  >
                    Smarter suggestions and more intuitive creative assistance —
                    rolling out automatically across all UltimateCBE
                    applications.
                  </p>

                  <ul className="mb-5 flex flex-col gap-2.5">
                    <FeatureItem>
                      40% faster rendering for AI-generated content suggestions.
                    </FeatureItem>
                    <FeatureItem>
                      New style recognition algorithm for more consistent design
                      themes.
                    </FeatureItem>
                    <FeatureItem>
                      Expanded creative prompt capabilities with style
                      parameters.
                    </FeatureItem>
                    <FeatureItem>
                      Specialised assistants for Illustration, Typography &amp;
                      Layout.
                    </FeatureItem>
                  </ul>

                  <div
                    className="mt-6 flex items-center justify-between border-t pt-5"
                    style={{ borderColor: brand.grey100 }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${brand.blue}, ${brand.blueMid})`,
                        }}
                      >
                        AR
                      </span>
                      <div className="flex flex-col">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: brand.grey800 }}
                        >
                          Alex Rivera
                        </p>
                        <p className="text-xs" style={{ color: brand.grey500 }}>
                          AI Research Lead
                        </p>
                      </div>
                    </div>

                    <BtnRed href="#">
                      Read full notes
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </BtnRed>
                  </div>
                </div>
              </article>

              <VersionDivider label="v4.0 · Mar 10, 2025" />

              {/* ── ENTRY 3: Collaboration ── */}
              <article
                id="section-3"
                className="entry-card scroll-m-20 overflow-hidden rounded-2xl border bg-white"
                style={{ borderColor: brand.grey100 }}
              >
                <EntryHero accent="#92400E" />

                <div className="px-8 pb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <EntryBadge variant="update" />
                    <time className="text-sm" style={{ color: brand.grey500 }}>
                      Mar 10, 2025
                    </time>
                  </div>

                  <h3
                    className="mb-4 text-2xl font-bold leading-snug tracking-tight"
                    style={{ color: brand.grey800 }}
                  >
                    Creative Team Collaboration Tools
                  </h3>

                  <p
                    className="mb-5 text-sm leading-relaxed"
                    style={{ color: brand.grey500 }}
                  >
                    Revamped collaboration features to streamline creative
                    teamwork, improve feedback loops, and simplify approval
                    workflows.
                  </p>

                  <ul className="mb-5 flex flex-col gap-2.5">
                    <FeatureItem>
                      Live co-editing with cursor presence for all team members.
                    </FeatureItem>
                    <FeatureItem>
                      Contextual commenting with visual annotation tools.
                    </FeatureItem>
                    <FeatureItem>
                      Version history with visual comparison and branching.
                    </FeatureItem>
                    <FeatureItem>
                      Client review portals with approval tracking.
                    </FeatureItem>
                  </ul>

                  <div
                    className="mt-6 flex items-center justify-between border-t pt-5"
                    style={{ borderColor: brand.grey100 }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${brand.blueMid}, #92400E)`,
                        }}
                      >
                        SW
                      </span>
                      <div className="flex flex-col">
                        <p
                          className="text-sm font-semibold"
                          style={{ color: brand.grey800 }}
                        >
                          Sam Washington
                        </p>
                        <p className="text-xs" style={{ color: brand.grey500 }}>
                          Lead Product Designer
                        </p>
                      </div>
                    </div>

                    <BtnRed href="#">
                      Read full notes
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </BtnRed>
                  </div>
                </div>
              </article>

              {/* ── COMING NEXT teaser ── */}
              <div
                className="rounded-2xl border-2 border-dashed p-8 text-center"
                style={{ borderColor: brand.grey300 }}
              >
                <h3
                  className="mb-2 text-base font-bold"
                  style={{ color: brand.grey800 }}
                >
                  More coming in April 2025
                </h3>
                <p className="mb-5 text-sm" style={{ color: brand.grey500 }}>
                  Smart export pipelines, enhanced collaboration tools, and a
                  refreshed component library are in active development.
                </p>
                <BtnOutline href="#">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 2v4l3 3M8 14A6 6 0 108 2a6 6 0 000 12z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Join the roadmap waitlist
                </BtnOutline>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
