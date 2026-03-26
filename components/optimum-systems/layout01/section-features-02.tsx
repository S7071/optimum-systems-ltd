/* eslint-disable @next/next/no-img-element */
export default function FeaturesLayout02Section() {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-balance md:mb-4 md:text-5xl">
            Unify Your flow with Integrations
          </h2>
          <p className="text-center text-lg text-pretty text-muted-foreground md:text-xl">
            Streamline your processes and enhance productivity by connecting all
            your favorite apps into one unified platform.
          </p>
        </div>
        <div className="mt-12">
          <div
            dir="ltr"
            data-orientation="horizontal"
            data-slot="tabs"
            className="group/tabs data-horizontal:flex-col mx-auto flex w-full flex-col items-center gap-8"
          >
            <div
              role="tablist"
              aria-orientation="horizontal"
              data-slot="tabs-list"
              data-variant="default"
              className="rounded-lg p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col bg-muted flex !h-auto flex-wrap"
              //   tabindex="0"
              data-orientation="horizontal"
              //   style="outline: none;"
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-_r2r_0_-content-1"
                data-state="active"
                id="radix-_r2r_0_-trigger-1"
                data-slot="tabs-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 px-4 py-2 text-sm font-semibold transition border border-solid border-border shadow-sm"
                // tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Slack
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_r2r_0_-content-2"
                data-state="inactive"
                id="radix-_r2r_0_-trigger-2"
                data-slot="tabs-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border border-solid border-transparent px-4 py-2 text-sm font-semibold transition"
                // tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Google Drive
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_r2r_0_-content-3"
                data-state="inactive"
                id="radix-_r2r_0_-trigger-3"
                data-slot="tabs-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border border-solid border-transparent px-4 py-2 text-sm font-semibold transition"
                // tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Dropbox
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-_r2r_0_-content-4"
                data-state="inactive"
                id="radix-_r2r_0_-trigger-4"
                data-slot="tabs-trigger"
                className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md whitespace-nowrap group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 border border-solid border-transparent px-4 py-2 text-sm font-semibold transition"
                // tabindex="-1"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                Github
              </button>
            </div>
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_r2r_0_-trigger-1"
              id="radix-_r2r_0_-content-1"
              //   tabindex="0"
              data-slot="tabs-content"
              className="flex-1 text-sm outline-none mt-0 w-full overflow-hidden rounded-2xl bg-accent px-14 pt-6 md:px-20 md:pt-8"
              //   style="animation-duration: 0s;"
            >
              <div className="flex flex-col justify-between">
                <div className="mb-8 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <p className="text-sm">
                    Communicate with your team, share updates, project
                    discussions all in one place
                  </p>
                  <a
                    href="#"
                    className="font-sm border-b-2 border-solid border-border font-semibold whitespace-nowrap"
                  >
                    Learn more
                  </a>
                </div>
                <div className="shadow- flex w-full items-center justify-center rounded-t-2xl bg-background">
                  <img
                    alt="Slack"
                    className="order-first w-full max-w-52 object-contain px-4 py-8 md:order-last md:max-w-64"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  />
                </div>
              </div>
            </div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_r2r_0_-trigger-2"
              //   hidden=""
              id="radix-_r2r_0_-content-2"
              //   tabindex="0"
              data-slot="tabs-content"
              className="flex-1 text-sm outline-none mt-0 w-full overflow-hidden rounded-2xl bg-accent px-14 pt-6 md:px-20 md:pt-8"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_r2r_0_-trigger-3"
              //   hidden=""
              id="radix-_r2r_0_-content-3"
              //   tabindex="0"
              data-slot="tabs-content"
              className="flex-1 text-sm outline-none mt-0 w-full overflow-hidden rounded-2xl bg-accent px-14 pt-6 md:px-20 md:pt-8"
            ></div>
            <div
              data-state="inactive"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-_r2r_0_-trigger-4"
              //   hidden=""
              id="radix-_r2r_0_-content-4"
              //   tabindex="0"
              data-slot="tabs-content"
              className="flex-1 text-sm outline-none mt-0 w-full overflow-hidden rounded-2xl bg-accent px-14 pt-6 md:px-20 md:pt-8"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
