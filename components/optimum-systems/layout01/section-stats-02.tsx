export default function StatsLayout02Section() {
  return (
    <section className="py-32 w-full">
      <div className="container flex flex-col md:flex-row">
        <div className="z-10 md:flex-1">
          <h1 className="font-cal max-w-xl text-5xl font-medium tracking-tighter md:text-6xl">
            Numbers don&apos;t Lie
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
            distinctio eius incidunt doloribus quam velit sint sed alias,
          </p>
          <div className="my-10 flex gap-4">
            <button
              data-slot="button"
              data-variant="secondary"
              data-size="default"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground h-9 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Documentation</span>
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
                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button
              data-slot="button"
              data-variant="default"
              data-size="default"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-9 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 text-md group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
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
                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="mt-12 flex max-w-3xl flex-col items-end bg-background md:mt-32 xl:bg-transparent">
            <div className="mt-auto mb-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  {/* <number-flow-react></number-flow-react> */}
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Team Members{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  {/* <number-flow-react></number-flow-react> */}
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Company Growth{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  {/* <number-flow-react></number-flow-react> */}
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  New Customers{" "}
                </p>
              </div>
              <div className="w-full text-left">
                <h2 className="text-4xl font-medium lg:text-5xl">
                  {/* <number-flow-react></number-flow-react> */}
                </h2>
                <p className="text-sm whitespace-pre text-muted-foreground/70">
                  {" "}
                  Revenue{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-fit flex-row flex-wrap gap-2 md:mt-42 md:flex-col">
          <div className="group">
            <button className="relative rounded-full px-4 py-1 text-sm transition-all ease-out bg-primary text-primary-foreground md:-translate-x-8">
              2021 - 2022
            </button>
          </div>
          <div className="group">
            <button className="relative rounded-full px-4 py-1 text-sm transition-all ease-out bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted">
              2022 - 2023
            </button>
          </div>
          <div className="group">
            <button className="relative rounded-full px-4 py-1 text-sm transition-all ease-out bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted">
              2023 - 2024
            </button>
          </div>
          <div className="group">
            <button className="relative rounded-full px-4 py-1 text-sm transition-all ease-out bg-muted/70 group-hover:-translate-x-4 group-hover:bg-muted">
              2024 - 2025
            </button>
          </div>
          <svg
            width="280"
            height="124"
            viewBox="0 0 412 178"
            overflow="visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-9 -left-14 hidden -translate-x-full -translate-y-full text-orange-500 md:block"
          >
            <path
              d="M408.308 0H294L114.965 274H1"
              stroke="currentColor"
              stroke-width="1.5"
              pathLength="1"
              stroke-dashoffset="0"
              stroke-dasharray="1 1"
            ></path>
            <path
              d="M408.308 0H294L114.965 274H1"
              stroke="black"
              stroke-width="1.5"
              opacity="0.1"
            ></path>
            <circle cx="408.309" cy="0" r="5" fill="currentColor"></circle>
            <circle cx="2" cy="274" r="5" fill="currentColor"></circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
