/* eslint-disable @next/next/no-img-element */
export default function GallaryLayout01Section() {
  return (
    <section className="overflow-hidden py-32 w-full">
      <div className="container">
        <div
          className="relative [&amp;&gt;div[data-slot=carousel-content]]:overflow-visible"
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
        >
          <div className="flex items-center justify-between">
            <div
              dir="ltr"
              data-orientation="horizontal"
              data-slot="tabs"
              className="group/tabs gap-2 data-horizontal:flex-col mb-8 flex justify-center"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                data-slot="tabs-list"
                data-variant="default"
                className="rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col relative h-auto gap-6 bg-background"
                // tabindex="0"
                data-orientation="horizontal"
                // style="outline: none;"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-_r2r_0_-content-Features"
                  data-state="active"
                  id="radix-_r2r_0_-trigger-Features"
                  data-slot="tabs-trigger"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border-none !bg-background text-base transition-all duration-700 ease-out [&amp;[data-state=active]]:shadow-none"
                  //   tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Features
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-_r2r_0_-content-Solutions"
                  data-state="inactive"
                  id="radix-_r2r_0_-trigger-Solutions"
                  data-slot="tabs-trigger"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border-none !bg-background text-base transition-all duration-700 ease-out [&amp;[data-state=active]]:shadow-none"
                  //   tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Solutions
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-_r2r_0_-content-Roadmap"
                  data-state="inactive"
                  id="radix-_r2r_0_-trigger-Roadmap"
                  data-slot="tabs-trigger"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border-none !bg-background text-base transition-all duration-700 ease-out [&amp;[data-state=active]]:shadow-none"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Roadmap
                </button>
                <div className="absolute bottom-0 h-0.5 bg-primary transition-all duration-700 ease-out w-[82px] left-[3px]"></div>
              </div>
            </div>
            <div className="hidden items-center gap-4 sm:flex">
              <button
                data-slot="carousel-previous"
                data-variant="outline"
                data-size="icon-sm"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs in-data-[slot=button-group]:rounded-md touch-manipulation rounded-full top-1/2 -left-12 static size-10 translate-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-left"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span className="sr-only">Previous slide</span>
              </button>
              <button
                data-slot="carousel-next"
                data-variant="outline"
                data-size="icon-sm"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs in-data-[slot=button-group]:rounded-md touch-manipulation rounded-full top-1/2 -right-12 static size-10 translate-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-right"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="sr-only">Next slide</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden" data-slot="carousel-content">
            <div
              className="flex -ml-4 max-w-4xl"
              //   style="transform: translate3d(0px, 0px, 0px);"
            >
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 w-fit max-w-4xl"
              >
                <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border p-6 shadow-sm select-none sm:p-10 md:max-h-[450px] md:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-medium sm:text-4xl">
                        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
                          Explore Our
                        </span>
                        <br />
                        Core Features
                      </h2>
                      <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                        Dive deep into the robust functionalities designed to
                        streamline your workflow. Benefit from intuitive design,
                        seamless integration, and powerful customization
                        options.
                        <br />
                        <br />
                        Explore how our platform adapts to your evolving needs,
                        ensuring long-term value and efficiency.
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground sm:mt-6">
                      Comprehensive documentation and dedicated support channels
                      are available to assist you.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-2">
                    <img
                      alt="placeholder"
                      className="h-full w-full rounded-xl object-cover"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 w-fit max-w-4xl"
              >
                <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border p-6 shadow-sm select-none sm:p-10 md:max-h-[450px] md:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-medium sm:text-4xl">
                        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
                          Solutions for
                        </span>
                        <br />
                        Every Scenario
                      </h2>
                      <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                        <p>
                          Discover how our platform addresses diverse challenges
                          across various domains:
                        </p>
                        <ul className="my-4 ml-6 list-disc">
                          <li>Enhancing team collaboration efficiency.</li>
                          <li>Optimizing critical resource allocation.</li>
                          <li>Streamlining complex data analysis.</li>
                        </ul>
                        <p>
                          We provide adaptable tools for your unique context.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground sm:mt-6">
                      Leverage our expertise in integration and custom
                      development for specific needs.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-2">
                    <img
                      alt="placeholder"
                      className="h-full w-full rounded-xl object-cover"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 w-fit max-w-4xl"
              >
                <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border p-6 shadow-sm select-none sm:p-10 md:max-h-[450px] md:grid-cols-2 lg:gap-20">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-medium sm:text-4xl">
                        <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">
                          Building the
                        </span>
                        <br />
                        Future Together
                      </h2>
                      <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                        <p>
                          Get a glimpse into our ongoing commitment to
                          innovation and improvement:
                        </p>
                        <ul className="my-4 ml-6 list-disc">
                          <li>Next-generation user interface design.</li>
                          <li>Advanced analytics capabilities rollout.</li>
                          <li>Expanded third-party integration ecosystem.</li>
                        </ul>
                        <p>
                          We&apos;re constantly evolving based on user feedback
                          and industry trends.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground sm:mt-6">
                      Our dedicated R&amp;D team is focused on delivering
                      cutting-edge solutions.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-2">
                    <img
                      alt="placeholder"
                      className="h-full w-full rounded-xl object-cover"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
