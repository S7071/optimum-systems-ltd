/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function SiteChangeLog() {
  return (
    <section className="pb-32 w-full">
      <div className="bg-muted/60 py-20 lg:py-28 px-6 sm:px-30">
        <div className="container">
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <span className="flex w-[16%] items-center gap-3 pt-1 text-sm">
              <span className="size-2 shrink-0 rounded-full bg-primary"></span>
              Changelog
            </span>
            <div>
              <h2 className="text-4xl">
                Latest features and enhancements <br />{" "}
                <span className="text-muted-foreground">UltimateCBE</span>
              </h2>
              <div className="mt-10 flex items-center gap-4 text-sm">
                <a href="#" className="group flex items-center gap-1 underline">
                  Subscribe to updates
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-4 transition-all group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a href="#" className="group flex items-center gap-1 underline">
                  Follow on Twitter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right size-4 transition-all group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10 lg:mt-20 px-6 sm:px-30">
        <div className="relative flex">
          <div className="sticky top-30 hidden h-fit w-[16%] text-sm lg:block">
            <p className="mb-2">Timeline</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#section-1"
                  className="transition-colors duration-200 text-muted-foreground hover:text-primary"
                >
                  Mar 20, 2025
                </a>
              </li>
              <li>
                <a
                  href="#section-2"
                  className="transition-colors duration-200 text-muted-foreground hover:text-primary"
                >
                  Mar 15, 2025
                </a>
              </li>
              <li>
                <a
                  href="#section-3"
                  className="transition-colors duration-200 font-medium text-primary"
                >
                  Mar 10, 2025
                </a>
              </li>
            </ul>
          </div>
          <div
            data-orientation="vertical"
            role="none"
            data-slot="separator"
            className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch hidden h-auto data-[orientation=vertical]:h-auto lg:block"
          ></div>
          <div className="mx-auto flex max-w-prose flex-col gap-16 lg:gap-24">
            <div id="section-1" className="scroll-m-20">
              <img
                alt="Introducing UltimateCBE Cloud Storage"
                className="mb-8 aspect-video w-full object-cover"
                src="/placeholder-aspect-video-1.svg"
              />
              <span className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-full border border-muted-foreground"></span>
                <p className="text-sm text-muted-foreground">New feature</p>
              </span>
              <h3 className="mt-2 mb-6 text-3xl">
                Introducing UltimateCBE Cloud Storage
              </h3>
              <div className="prose dark:prose-invert">
                <p>
                  We&apos;ve launched a new unified cloud storage system for
                  managing all your creative assets (Media tab) and project
                  files (Projects tab). This centralized hub allows you to
                  access and organize all your creative resources from anywhere,
                  on any device.
                </p>
                <ul>
                  <li>
                    The <a href="#">Asset Library</a> is now integrated within
                    Cloud Storage.
                  </li>
                  <li>
                    The Media tab includes advanced filtering and tagging
                    options for better organization.
                  </li>
                  <li>
                    When working on a project, you can access cloud assets
                    <strong> by pressing</strong> ⌘+F or using the resource
                    panel
                  </li>
                  <li>
                    When creating a new project, you can choose to:
                    <ul>
                      <li>Start with templates from the Gallery</li>
                      <li>Import assets from your Cloud Storage</li>
                      <li>Collaborate on shared team projects</li>
                    </ul>
                  </li>
                </ul>
                <p>
                  At launch, we&apos;re offering 50GB free storage for all
                  users. Premium plans with expanded storage are available.
                  We&apos;re also planning more integrations soon. If
                  there&apos;s a specific feature you&apos;d like to see,
                  <a href="#">submit your idea</a> to our feedback portal.
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span
                    data-slot="avatar"
                    data-size="default"
                    className="rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten size-10 border border-border"
                  >
                    <img
                      data-slot="avatar-image"
                      className="rounded-full aspect-square size-full object-cover"
                      src="/placeholder-aspect-video-1.svg"
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Emily Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Product Manager
                    </p>
                  </div>
                </div>
                <time className="text-sm text-muted-foreground">
                  Mar 20, 2025
                </time>
              </div>
            </div>
            <div id="section-2" className="scroll-m-20">
              <img
                alt="AI-Powered Design Assistant"
                className="mb-8 aspect-video w-full object-cover"
                src="/placeholder-aspect-video-1.svg"
              />
              <span className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-full border border-muted-foreground"></span>
                <p className="text-sm text-muted-foreground">Improvement</p>
              </span>
              <h3 className="mt-2 mb-6 text-3xl">
                AI-Powered Design Assistant
              </h3>
              <div className="prose dark:prose-invert">
                <p>
                  We&apos;re thrilled to announce major enhancements to our AI
                  Design Assistant. These updates deliver smarter suggestions
                  and more intuitive creative assistance across all UltimateCBE
                  applications.
                </p>
                <ul>
                  <li>
                    40% faster rendering for AI-generated content suggestions
                  </li>
                  <li>
                    New style recognition algorithm for more consistent design
                    themes
                  </li>
                  <li>
                    Expanded creative prompt capabilities with style parameters
                  </li>
                  <li>
                    Specialized assistants for illustration, typography, and
                    layout
                  </li>
                </ul>
                <p>
                  These improvements are rolling out to all subscription tiers
                  automatically. No additional setup required to access these
                  enhanced capabilities. For in-depth tutorials on maximizing
                  the AI Assistant, visit our <a href="#">learning center</a>.
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span
                    data-slot="avatar"
                    data-size="default"
                    className="rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten size-10 border border-border"
                  >
                    <img
                      data-slot="avatar-image"
                      className="rounded-full aspect-square size-full object-cover"
                      src="/placeholder-aspect-video-1.svg"
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Alex Rivera</p>
                    <p className="text-sm text-muted-foreground">
                      AI Research Lead
                    </p>
                  </div>
                </div>
                <time className="text-sm text-muted-foreground">
                  Mar 15, 2025
                </time>
              </div>
            </div>
            <div id="section-3" className="scroll-m-20">
              <img
                alt="Creative Team Collaboration Tools"
                className="mb-8 aspect-video w-full object-cover"
                src="/placeholder-aspect-video-1.svg"
              />
              <span className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-full border border-muted-foreground"></span>
                <p className="text-sm text-muted-foreground">Update</p>
              </span>
              <h3 className="mt-2 mb-6 text-3xl">
                Creative Team Collaboration Tools
              </h3>
              <div className="prose dark:prose-invert">
                <p>
                  We&apos;ve revamped our collaboration features to streamline
                  creative teamwork within UltimateCBE. These updates focus on
                  improving feedback loops and creative approval workflows.
                </p>
                <ul>
                  <li>Live co-editing with cursor presence for team members</li>
                  <li>Contextual commenting with visual annotation tools</li>
                  <li>Version history with visual comparison and branching</li>
                  <li>Client review portals with approval tracking</li>
                </ul>
                <p>
                  To explore these new collaboration capabilities and integrate
                  them into your creative workflow, check out our
                  <a href="#">team collaboration guide</a>.
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-border pb-4">
                <div className="flex items-center gap-4">
                  <span
                    data-slot="avatar"
                    data-size="default"
                    className="rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten size-10 border border-border"
                  >
                    <img
                      data-slot="avatar-image"
                      className="rounded-full aspect-square size-full object-cover"
                      src="/placeholder-aspect-video-1.svg"
                    />
                  </span>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Sam Washington</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Product Designer
                    </p>
                  </div>
                </div>
                <time className="text-sm text-muted-foreground">
                  Mar 10, 2025
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
