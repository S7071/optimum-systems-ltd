/* eslint-disable @next/next/no-img-element */
export default function Timeline01LayoutSection() {
  return (
    <section className="bg-background w-full">
      <div className="container flex flex-col items-center justify-center py-32">
        <h1 className="mb-12 text-5xl font-semibold tracking-tighter lg:mb-25 lg:text-7xl">
          Just Four Phases
        </h1>
        <div
          dir="ltr"
          data-orientation="horizontal"
          data-slot="tabs"
          className="group/tabs flex gap-2 data-horizontal:flex-col w-full"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            data-slot="tabs-list"
            data-variant="default"
            className="rounded-lg group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col grid w-full grid-cols-4 bg-transparent p-0"
            // tabindex="0"
            data-orientation="horizontal"
            // style="outline: none;"
          >
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-_r2r_0_-content-phase1"
              data-state="inactive"
              id="radix-_r2r_0_-trigger-phase1"
              data-slot="tabs-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 py-1 font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 text-md rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground"
            //   tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="hidden font-mono text-foreground/40 md:inline">
                1
              </span>
              Initialize
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-_r2r_0_-content-phase2"
              data-state="inactive"
              id="radix-_r2r_0_-trigger-phase2"
              data-slot="tabs-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 py-1 font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 text-md rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground"
            //   tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="hidden font-mono text-foreground/40 md:inline">
                2
              </span>
              Build
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-_r2r_0_-content-phase3"
              data-state="inactive"
              id="radix-_r2r_0_-trigger-phase3"
              data-slot="tabs-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 py-1 font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 text-md rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground"
            //   tabindex="-1"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="hidden font-mono text-foreground/40 md:inline">
                3
              </span>
              Test
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-_r2r_0_-content-phase4"
              data-state="active"
              id="radix-_r2r_0_-trigger-phase4"
              data-slot="tabs-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-2 py-1 font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 text-md rounded-none border-b-2 pb-6 shadow-none! data-[state=active]:border-b-foreground"
            //   tabindex="0"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              <span className="hidden font-mono text-foreground/40 md:inline">
                4
              </span>
              Launch
            </button>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_r2r_0_-trigger-phase1"
            id="radix-_r2r_0_-content-phase1"
            // tabindex="0"
            data-slot="tabs-content"
            className="flex-1 text-sm outline-none mt-12 grid items-start gap-12 lg:grid-cols-2"
            // hidden=""
            // style=""
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_r2r_0_-trigger-phase2"
            id="radix-_r2r_0_-content-phase2"
            // tabindex="0"
            data-slot="tabs-content"
            className="flex-1 text-sm outline-none mt-12 grid items-start gap-12 lg:grid-cols-2"
            // hidden=""
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_r2r_0_-trigger-phase3"
            id="radix-_r2r_0_-content-phase3"
            // tabindex="0"
            data-slot="tabs-content"
            className="flex-1 text-sm outline-none mt-12 grid items-start gap-12 lg:grid-cols-2"
            // hidden=""
          ></div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-_r2r_0_-trigger-phase4"
            id="radix-_r2r_0_-content-phase4"
            // tabindex="0"
            data-slot="tabs-content"
            className="flex-1 text-sm outline-none mt-12 grid items-start gap-12 lg:grid-cols-2"
          >
            <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4">
              <p className="font-mono text-sm font-semibold tracking-tight text-muted-foreground">
                14/04/2025
              </p>
              <h2 className="text-3xl font-medium tracking-tighter text-foreground md:text-5xl">
                How to Launch
              </h2>
              <p className="text-lg font-normal tracking-tighter text-muted-foreground">
                The final phase focuses on optimization, deployment, and
                ensuring everything runs smoothly for release.The final phase
                focuses on optimization, deployment, and ensuring everything
                runs smoothly for release.
              </p>
              <button
                data-slot="button"
                data-variant="outline"
                data-size="default"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs h-9 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 mt-8 flex w-fit items-center gap-2 rounded-full border border-border px-4! py-2"
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
                  className="lucide lucide-download size-4"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <p className="text-md font-medium text-foreground">
                  Click to{" "}
                  <span className="text-foreground/80">Download the app</span>
                </p>
              </button>
            </div>
            <div
              className="relative z-20 col-span-1"
            //   style="opacity: 1; transform: none;"
            >
              <div
                data-slot="card"
                data-size="default"
                className="ring-foreground/10 text-card-foreground group/card flex flex-col gap-6 overflow-hidden text-sm ring-1 has-[&gt;img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group h-110 w-full rounded-3xl border border-border bg-background p-2 shadow-none"
              >
                <div
                  data-slot="card-content"
                  className="px-6 group-data-[size=sm]/card:px-4 size-full rounded-2xl border-2 border-background bg-muted"
                >
                  <img
                    className="size-full transition-all ease-in-out group-hover:scale-95"
                    alt="Phase 4 illustration"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
