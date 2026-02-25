export default function SiteHero() {
  return (
    <section className="flex min-h-screen items-center justify-between bg-background w-full">
      <div className="flex flex-col gap-5 px-[10%] lg:w-[50%] lg:pr-0">
        <p className="font-light text-foreground uppercase">
          Virtual Engagement Maximized &amp; AI-Powered Content Transformation
        </p>
        <h1 className="text-5xl font-medium text-foreground md:text-6xl lg:text-7xl">
          Presentation Platform for Marketing Professionals
        </h1>
        <p className="my-8 text-foreground md:text-xl">
          Effortlessly Create, Deliver, and Reimagine All-Hands Corporate
          Meetings
        </p>
        <div className="flex flex-col gap-4 font-medium md:flex-row">
          <button
            data-slot="button"
            data-variant="default"
            data-size="default"
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-fit items-center gap-1 rounded-full px-6 py-3"
          >
            Try it firsthand →
          </button>
          <button
            data-slot="button"
            data-variant="secondary"
            data-size="default"
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground gap-1.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-fit rounded-full px-6 py-3"
          >
            Schedule a demo
          </button>
        </div>
      </div>
      <div className="relative top-0 hidden h-[720px] w-[45%] overflow-hidden rounded-l-full bg-black lg:block">
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          data-wf-ignore="true"
          data-object-fit="cover"
          className="h-full w-full rounded-tl-xl object-cover"
        >
          <source src="/images/manufacturing/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
