/* eslint-disable @next/next/no-img-element */
export default function ClientSection() {
  return (
    <section className="w-full bg-muted py-16 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_240.5px_1px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              STATIC SITE GENERATOR
            </div>
            <img
              alt="Astro"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Astro
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_308.5px_383px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              STATIC SITE GENERATOR
            </div>
            <img
              alt="Gatsby"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon-black.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Gatsby
            </h2>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_104.5px_146px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              VERSION CONTROL
            </div>
            <img
              alt="GitHub"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon-black.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              GitHub
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_0px_0px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              REACT FRAMEWORK
            </div>
            <img
              alt="Next.js"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Next.js
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_0px_0px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              UI DESIGN
            </div>
            <img
              alt="Figma"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Figma
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_0px_0px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              REACT FRAMEWORK
            </div>
            <img
              alt="Remix"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon-black.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Remix
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_0px_0px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              DEPLOYMENT
            </div>
            <img
              alt="Vercel"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Vercel
            </h2>
          </div>

          <div className="group/spotlight group relative flex h-96 flex-col items-start justify-between rounded-md border border-border bg-background p-2 transition-all duration-300 hover:bg-black hover:text-white dark:border-neutral-800 md:p-4">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-md bg-[rgb(38,38,38)] opacity-0 transition duration-300 group-hover/spotlight:opacity-100 [mask-image:radial-gradient(350px_at_0px_0px,white,transparent_80%)]" />
            <div className="z-10 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
              CSS FRAMEWORK
            </div>
            <img
              alt="Tailwind CSS"
              className="mx-auto mb-4 h-24 object-contain [filter:brightness(0)] transition-all duration-300 group-hover:[filter:brightness(1)_invert(1)] dark:invert"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon-black.svg"
            />
            <h2 className="z-10 text-xl font-normal transition-colors duration-300 lg:text-3xl">
              Tailwind CSS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
