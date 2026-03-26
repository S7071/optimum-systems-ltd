/* eslint-disable @next/next/no-img-element */
export default function FeaturesLayout04Section() {
  return (
    <section className="py-12 md:py-24 lg:py-32 w-full">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <span
            data-slot="badge"
            data-variant="outline"
            className="h-5 gap-1 rounded-4xl border px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&amp;&gt;svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground mb-3"
          >
            Powerful Features
          </span>
          <h2 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Discover What Makes Us Different
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-base">
            Our platform combines powerful features with elegant design to help
            you accomplish more and achieve your goals.
          </p>
        </div>
        <div>
          <div className="mx-auto flex max-w-6xl flex-col-reverse gap-6 md:flex-row md:gap-8 lg:gap-16">
            <div className="md:w-1/2 lg:w-2/5">
              <ul className="grid grid-cols-1 gap-3 md:flex md:flex-col md:gap-2">
                <li className="group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 border-transparent hover:border-border hover:bg-accent/30">
                  <div className="flex w-full items-start gap-3 md:gap-4">
                    <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 bg-muted text-muted-foreground">
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
                        className="lucide lucide-cloud size-4 md:size-5"
                        aria-hidden="true"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg text-muted-foreground">
                        Cloud Storage
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground transition-all md:text-sm md:group-data-open:opacity-100 lg:text-sm">
                        Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                        imperdiet magna nec massa consectetur, id interdum ante
                        congue.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 border-transparent hover:border-border hover:bg-accent/30">
                  <div className="flex w-full items-start gap-3 md:gap-4">
                    <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 bg-muted text-muted-foreground">
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
                        className="lucide lucide-star size-4 md:size-5"
                        aria-hidden="true"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg text-muted-foreground">
                        Premium Support
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground transition-all md:text-sm md:group-data-open:opacity-100 lg:text-sm">
                        Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                        imperdiet magna nec massa consectetur, id interdum ante
                        congue.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 border-transparent hover:border-border hover:bg-accent/30">
                  <div className="flex w-full items-start gap-3 md:gap-4">
                    <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 bg-muted text-muted-foreground">
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
                        className="lucide lucide-bolt size-4 md:size-5"
                        aria-hidden="true"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg text-muted-foreground">
                        Fast Performance
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground transition-all md:text-sm md:group-data-open:opacity-100 lg:text-sm">
                        Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                        imperdiet magna nec massa consectetur, id interdum ante
                        congue.
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="group relative flex cursor-pointer rounded-xl border px-4 py-3 transition-all duration-300 md:px-5 md:py-4 border-border bg-accent shadow-sm"
                  data-open="true"
                >
                  <div className="flex w-full items-start gap-3 md:gap-4">
                    <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-lg transition-colors md:w-10 bg-primary text-primary-foreground">
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
                        className="lucide lucide-messages-square size-4 md:size-5"
                        aria-hidden="true"
                      >
                        <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-semibold transition-colors md:text-base lg:text-lg text-foreground">
                        Messaging Platform
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground transition-all md:text-sm md:group-data-open:opacity-100 lg:text-sm">
                        Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                        imperdiet magna nec massa consectetur, id interdum ante
                        congue.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative md:w-1/2 lg:w-3/5">
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <div
                  className="relative aspect-4/5 max-h-[500px] w-full md:aspect-3/4 lg:aspect-4/5 [&amp;&gt;div]:h-full"
                  role="region"
                  aria-roledescription="carousel"
                  data-slot="carousel"
                >
                  <div className="overflow-hidden" data-slot="carousel-content">
                    <div
                      className="flex mx-0 h-full w-full"
                      //   style="transform: translate3d(-1952px, 0px, 0px);"
                    >
                      <div
                        role="group"
                        aria-roledescription="slide"
                        data-slot="carousel-item"
                        className="min-w-0 shrink-0 grow-0 basis-full px-0"
                        // style="transform: translate3d(0px, 0px, 0px);"
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            alt="Cloud Storage"
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                          />
                          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6">
                            <div className="flex items-start gap-3">
                              <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                                  className="lucide lucide-cloud size-5"
                                  aria-hidden="true"
                                >
                                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  Cloud Storage
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                  Nam vitae molestie arcu. Quisque eu libero
                                  orci. Aliquam imperdiet magna nec massa
                                  consectetur, id interdum ante congue.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-roledescription="slide"
                        data-slot="carousel-item"
                        className="min-w-0 shrink-0 grow-0 basis-full px-0"
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            alt="Premium Support"
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                          />
                          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6">
                            <div className="flex items-start gap-3">
                              <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                                  className="lucide lucide-star size-5"
                                  aria-hidden="true"
                                >
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  Premium Support
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                  Nam vitae molestie arcu. Quisque eu libero
                                  orci. Aliquam imperdiet magna nec massa
                                  consectetur, id interdum ante congue.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-roledescription="slide"
                        data-slot="carousel-item"
                        className="min-w-0 shrink-0 grow-0 basis-full px-0"
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            alt="Fast Performance"
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                          />
                          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6">
                            <div className="flex items-start gap-3">
                              <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                                  className="lucide lucide-bolt size-5"
                                  aria-hidden="true"
                                >
                                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                  <circle cx="12" cy="12" r="4"></circle>
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  Fast Performance
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                  Nam vitae molestie arcu. Quisque eu libero
                                  orci. Aliquam imperdiet magna nec massa
                                  consectetur, id interdum ante congue.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="group"
                        aria-roledescription="slide"
                        data-slot="carousel-item"
                        className="min-w-0 shrink-0 grow-0 basis-full px-0"
                      >
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            alt="Messaging Platform"
                            className="h-full w-full object-cover object-center transition-transform duration-500"
                            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                          />
                          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6">
                            <div className="flex items-start gap-3">
                              <div className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
                                  className="lucide lucide-messages-square size-5"
                                  aria-hidden="true"
                                >
                                  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  Messaging Platform
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                  Nam vitae molestie arcu. Quisque eu libero
                                  orci. Aliquam imperdiet magna nec massa
                                  consectetur, id interdum ante congue.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-2">
                <button
                  className="size-2 rounded-full transition-all bg-muted hover:bg-muted-foreground/50"
                  aria-label="Go to slide 1"
                ></button>
                <button
                  className="size-2 rounded-full transition-all bg-muted hover:bg-muted-foreground/50"
                  aria-label="Go to slide 2"
                ></button>
                <button
                  className="size-2 rounded-full transition-all bg-muted hover:bg-muted-foreground/50"
                  aria-label="Go to slide 3"
                ></button>
                <button
                  className="size-2 rounded-full transition-all w-6 bg-primary"
                  aria-label="Go to slide 4"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
