/* eslint-disable @next/next/no-img-element */
export default function FeaturesLayout01Section() {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <div
          className="relative w-full"
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
        >
          <div className="mb-6 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            <h1 className="text-4xl font-medium">Key Features</h1>
            <div className="mb-[-32px] flex items-center gap-3">
              <button
                data-slot="carousel-previous"
                data-variant="outline"
                data-size="icon-sm"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs size-8 in-data-[slot=button-group]:rounded-md touch-manipulation rounded-full top-1/2 -left-12 -translate-y-1/2 static"
                // disabled=""
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
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs size-8 in-data-[slot=button-group]:rounded-md touch-manipulation rounded-full top-1/2 -right-12 -translate-y-1/2 static"
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
          <div className="relative">
            <div className="overflow-hidden" data-slot="carousel-content">
              <div
                className="flex ml-6 pt-[5px] pb-5 transition-all duration-300"
                // style="transform: translateX(0%);"
              >
                <div
                  role="group"
                  aria-roledescription="slide"
                  data-slot="carousel-item"
                  className="min-w-0 shrink-0 grow-0 pl-4 flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-xl py-14 pr-20 pl-11 shadow-[0px_0px_0px_1px_rgba(17,26,37,0.05),0px_2px_5px_rgba(16,25,36,0.1),0px_5px_20px_rgba(16,25,36,0.1)]">
                    <div className="mb-6 flex items-center gap-2">
                      <img
                        alt="logo"
                        className="h-7"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-icon.svg"
                      />
                      <h2 className="font-semibold">Shadcn UI</h2>
                    </div>
                    <div className="text mb-4">
                      Shadcn UI is a modern component library that streamlines
                      the development of user interfaces.
                    </div>
                    <div className="mb-10 flex items-center text-sm text-indigo-400">
                      Learn More{" "}
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
                        className="lucide lucide-arrow-right h-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                      <div>
                        <h3 className="font-medium">Component Variety</h3>
                        <p className="text-xs text-muted-foreground">
                          Shadcn UI provides a diverse set of components
                          tailored for modern web applications, enhancing
                          development speed.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Customizability</h3>
                        <p className="text-xs text-muted-foreground">
                          The library allows extensive customization options,
                          enabling developers to create unique designs without
                          constraints.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Accessibility Focus</h3>
                        <p className="text-xs text-muted-foreground">
                          Shadcn UI emphasizes accessibility, ensuring that
                          components are usable for all users, including those
                          with disabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  data-slot="carousel-item"
                  className="min-w-0 shrink-0 grow-0 pl-4 flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-xl py-14 pr-20 pl-11 shadow-[0px_0px_0px_1px_rgba(17,26,37,0.05),0px_2px_5px_rgba(16,25,36,0.1),0px_5px_20px_rgba(16,25,36,0.1)]">
                    <div className="mb-6 flex items-center gap-2">
                      <img
                        alt="logo"
                        className="h-7"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg"
                      />
                      <h2 className="font-semibold">Figma</h2>
                    </div>
                    <div className="text mb-4">
                      Figma is a collaborative interface design tool that
                      empowers teams to create and prototype.
                    </div>
                    <div className="mb-10 flex items-center text-sm text-indigo-400">
                      Learn More{" "}
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
                        className="lucide lucide-arrow-right h-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                      <div>
                        <h3 className="font-medium">Real-Time Collaboration</h3>
                        <p className="text-xs text-muted-foreground">
                          Figma enables multiple users to work on designs
                          simultaneously, making it ideal for team projects.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">
                          Prototyping Capabilities
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          It offers powerful prototyping tools that allow
                          designers to create interactive mockups for user
                          testing.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Designing Components</h3>
                        <p className="text-xs text-muted-foreground">
                          Figma provides powerful tools for designing and
                          building reusable components, enhancing collaboration
                          and consistency across designs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  data-slot="carousel-item"
                  className="min-w-0 shrink-0 grow-0 pl-4 flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-xl py-14 pr-20 pl-11 shadow-[0px_0px_0px_1px_rgba(17,26,37,0.05),0px_2px_5px_rgba(16,25,36,0.1),0px_5px_20px_rgba(16,25,36,0.1)]">
                    <div className="mb-6 flex items-center gap-2">
                      <img
                        alt="logo"
                        className="h-7"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg"
                      />
                      <h2 className="font-semibold">Tailwind</h2>
                    </div>
                    <div className="text mb-4">
                      Tailwind CSS is a utility-first CSS framework that enables
                      developers to build custom designs directly in their
                      markup, promoting rapid development and design
                      flexibility.
                    </div>
                    <div className="mb-10 flex items-center text-sm text-indigo-400">
                      Learn More{" "}
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
                        className="lucide lucide-arrow-right h-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                      <div>
                        <h3 className="font-medium">Utility-First Approach</h3>
                        <p className="text-xs text-muted-foreground">
                          Tailwind CSS promotes a utility-first approach,
                          allowing developers to apply styles directly in their
                          markup for rapid development.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">
                          Responsive Design Made Easy
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          It simplifies responsive design with built-in classes
                          that adapt to different screen sizes effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="group"
                  aria-roledescription="slide"
                  data-slot="carousel-item"
                  className="min-w-0 shrink-0 grow-0 pl-4 flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-xl py-14 pr-20 pl-11 shadow-[0px_0px_0px_1px_rgba(17,26,37,0.05),0px_2px_5px_rgba(16,25,36,0.1),0px_5px_20px_rgba(16,25,36,0.1)]">
                    <div className="mb-6 flex items-center gap-2">
                      <img
                        alt="logo"
                        className="h-7"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                      />
                      <h2 className="font-semibold">Google</h2>
                    </div>
                    <div className="text mb-4">
                      Google is a leading technology company that offers a wide
                      range of services, including search.
                    </div>
                    <div className="mb-10 flex items-center text-sm text-indigo-400">
                      Learn More{" "}
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
                        className="lucide lucide-arrow-right h-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                      <div>
                        <h3 className="font-medium">Search Engine Dominance</h3>
                        <p className="text-xs text-muted-foreground">
                          Google is the leading search engine, providing users
                          with quick access to information across the web.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Cloud Services</h3>
                        <p className="text-xs text-muted-foreground">
                          Google Cloud offers a suite of cloud computing
                          services, including storage, machine learning, and
                          data analytics.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Advertising Solutions</h3>
                        <p className="text-xs text-muted-foreground">
                          Google Ads provides businesses with powerful tools for
                          online advertising, targeting specific audiences
                          effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 left-0 w-[30px] bg-linear-to-r from-background from-10% to-transparent"></div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
