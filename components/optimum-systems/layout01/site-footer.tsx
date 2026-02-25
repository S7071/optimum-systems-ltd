export default function SiteFooter() {
  return (
    <section className="bg-muted py-8 w-full px-6 sm:px-30">
      <div className="container">
        <footer>
          <div className="mb-14 flex flex-col justify-between gap-11 md:items-start xl:flex-row xl:items-center xl:gap-6">
            <div>
              <h1 className="mb-4 text-4xl font-semibold">Get More Done.</h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="flex items-center gap-3">
                <button
                  data-slot="button"
                  data-variant="default"
                  data-size="default"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
                >
                  Start for free
                </button>
                <button
                  data-slot="button"
                  data-variant="outline"
                  data-size="default"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
                >
                  Compare plans
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-background p-6 shadow-lg md:flex-row">
              <div className="flex flex-col items-center justify-center p-10">
                <div className="flex text-6xl font-semibold">
                  0<div className="h-full text-xl">€</div>
                </div>
                <div className="text-sm">Free forever</div>
              </div>
              <div className="h-[1px] w-full bg-muted-foreground/30 md:h-auto md:w-[1px]"></div>
              <ul className="flex flex-col justify-center space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2 font-medium hover:text-primary">
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
                    className="lucide lucide-circle-check h-5 w-5 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <p className="text-gray-400">1 Team Member</p>
                </li>
                <li className="flex items-center gap-2 font-medium hover:text-primary">
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
                    className="lucide lucide-circle-check h-5 w-5 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <p className="text-gray-400">Unlimited Downloads</p>
                </li>
                <li className="flex items-center gap-2 font-medium hover:text-primary">
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
                    className="lucide lucide-circle-check h-5 w-5 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <p className="text-gray-400">100GB Space</p>
                </li>
                <li className="flex items-center gap-2 font-medium hover:text-primary">
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
                    className="lucide lucide-circle-check h-5 w-5 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <p className="text-gray-400">Basic Support</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t pt-20 lg:grid-cols-5">
            <div>
              <h3 className="mb-4 font-bold">Product</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">Features</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Tasks</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Calendar</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Conferencing</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Invoicing</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">Blog</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Pricing</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Roadmap</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Changelog</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Case Studies</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">Shadcn</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">React</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Tailwind</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Integrations</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">Hubspot</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Slack</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="#">About </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Company</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Support</a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">Book a demo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center">
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#">Privacy</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Terms</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Imprint</a>
              </li>
              <li>
                <p className="text-gray-400">
                  © 2024 Shadcnblocks.com. All rights reserved.
                </p>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-4 lg:justify-start">
              <li>
                <p className="text-black">Follow us:</p>
              </li>
              <li>
                <button
                  data-slot="button"
                  data-variant="outline"
                  data-size="default"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs h-9 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 gap-2 rounded-full"
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
                    className="lucide lucide-linkedin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  Linkedin
                </button>
              </li>
              <li>
                <button
                  data-slot="button"
                  data-variant="outline"
                  data-size="default"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs h-9 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 gap-2 rounded-full"
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
                    className="lucide lucide-life-buoy h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  Product Hunt
                </button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
