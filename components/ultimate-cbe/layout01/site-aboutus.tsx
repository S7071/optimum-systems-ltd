/* eslint-disable @next/next/no-img-element */
export default function SiteAboutUs() {
  return (
    <section className="py-32 w-full px-6 sm:px-30">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 pb-28 text-center">
          <h1 className="text-4xl font-semibold md:text-7xl">About Us</h1>
          <p className="text-xl font-medium text-muted-foreground">
            Meet our team, discover our values, and learn how we balance work,
            life, and everything in between.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          />
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
          />
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
          />
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
          />
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
          />
          <img
            alt="placeholder"
            className="max-h-80 w-full object-cover"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg"
          />
        </div>
        <div className="mx-auto grid max-w-5xl gap-28 py-28 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-4xl font-semibold">Our Vision</h2>
            <p className="text-xl leading-8 font-medium text-muted-foreground">
              For years, the process of building custom software has remained
              challenging. Today, visual builders exist, but tailored solutions
              still require technical expertise and a lot of time. This is a
              problem for businesses and individuals alike.
              <br />
              <br />
              What if you could create custom software without writing a single
              line of code? What if you could build your own tools.
              <br />
              <br />
              With our platform, you can! Our tools let you design layouts and
              create functionality—all without needing to code.
              <br />
              <br />
              We believe that everyone should be able to build their own
              solutions, regardless of their technical background.
            </p>
          </div>
          <div>
            <h2 className="mb-5 text-4xl font-semibold">Our Creators</h2>
            <p className="text-xl leading-8 font-medium text-muted-foreground">
              <a href="#" className="mr-1 underline">
                Our Company
              </a>
              has been building web tools for over a decade, focusing on
              efficiency and user control in every project. We know that the
              best solutions are the ones that you can create yourself.
              <br />
              <br />
              We initially developed these solutions for our own team, and now
              everyone can benefit from them too. We are proud to offer a
              platform that is accessible to all, regardless of technical
              expertise.
              <br />
              <br />
              Our team is made up of talented individuals who are passionate
              about creating tools that empower users to build their own
              solutions with ease. We are dedicated to helping you achieve your
              goals, and we can’t wait to see what you create!
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-2xl bg-muted/50 p-14 text-center md:flex-row md:text-left">
          <h3 className="text-3xl font-semibold">
            Part of
            <br />
            Our Global Team
          </h3>
          <button
            data-slot="button"
            data-variant="default"
            data-size="lg"
            className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&amp;_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none shrink-0 [&amp;_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3"
          >
            Get to know the team
          </button>
        </div>
      </div>
    </section>
  );
}
