/* eslint-disable @next/next/no-img-element */
export default function Gallery02Section() {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Case Studies
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Discover how leading companies and developers are leveraging
              modern web technologies to build exceptional digital experiences.
              These case studies showcase real-world applications and success
              stories.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              data-slot="button"
              data-variant="ghost"
              data-size="icon"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground size-9 disabled:pointer-events-auto"
              //   disabled=""
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
                className="lucide lucide-arrow-left size-5"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button
              data-slot="button"
              data-variant="ghost"
              data-size="icon"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground size-9 disabled:pointer-events-auto"
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
                className="lucide lucide-arrow-right size-5"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          data-slot="carousel"
        >
          <div className="overflow-hidden" data-slot="carousel-content">
            <div
              className="flex ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]"
              //   style="transform: translate3d(0px, 0px, 0px);"
            >
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href="https://ui.shadcn.com" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      alt="shadcn/ui: Building a Modern Component Library"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,black_100%)] mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        shadcn/ui: Building a Modern Component Library
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        Explore how shadcn/ui revolutionized React component
                        libraries by providing a unique approach to component
                        distribution and customization, making it easier for
                        developers to build beautiful, accessible applications.
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
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
                          className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href="https://tailwindcss.com" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      alt="Tailwind CSS: The Utility-First Revolution"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,black_100%)] mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        Tailwind CSS: The Utility-First Revolution
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        Discover how Tailwind CSS transformed the way developers
                        style their applications, offering a utility-first
                        approach that speeds up development while maintaining
                        complete design flexibility.
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
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
                          className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href="https://astro.build" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      alt="Astro: The All-in-One Web Framework"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,black_100%)] mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        Astro: The All-in-One Web Framework
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        Learn how Astro&apos;s innovative &apos;Islands
                        Architecture&apos; and zero-JS-by-default approach is
                        helping developers build faster websites while
                        maintaining rich interactivity where needed.
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
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
                          className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href="https://react.dev" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      alt="React: Pioneering Component-Based UI"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,black_100%)] mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        React: Pioneering Component-Based UI
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        See how React continues to shape modern web development
                        with its component-based architecture, enabling
                        developers to build complex user interfaces with
                        reusable, maintainable code.
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
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
                          className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                role="group"
                aria-roledescription="slide"
                data-slot="carousel-item"
                className="min-w-0 shrink-0 grow-0 basis-full max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href="https://nextjs.org" className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      alt="Next.js: The React Framework for Production"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,black_100%)] mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        Next.js: The React Framework for Production
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        Explore how Next.js has become the go-to framework for
                        building full-stack React applications, offering
                        features like server components, file-based routing, and
                        automatic optimization.
                      </div>
                      <div className="flex items-center text-sm">
                        Read more{" "}
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
                          className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <button
            className="h-2 w-2 rounded-full transition-colors bg-primary"
            aria-label="Go to slide 1"
          ></button>
          <button
            className="h-2 w-2 rounded-full transition-colors bg-primary/20"
            aria-label="Go to slide 2"
          ></button>
          <button
            className="h-2 w-2 rounded-full transition-colors bg-primary/20"
            aria-label="Go to slide 3"
          ></button>
          <button
            className="h-2 w-2 rounded-full transition-colors bg-primary/20"
            aria-label="Go to slide 4"
          ></button>
          <button
            className="h-2 w-2 rounded-full transition-colors bg-primary/20"
            aria-label="Go to slide 5"
          ></button>
        </div>
      </div>
    </section>
  );
}
