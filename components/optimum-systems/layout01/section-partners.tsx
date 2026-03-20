/* eslint-disable @next/next/no-img-element */
export default function PartnersSection() {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 py-8 lg:sticky">
            <span className="size-3 bg-orange-500"></span>
            <p className="text-xl text-foreground/30 uppercase lg:text-2xl">
              Our partners
            </p>
          </div>
          <ul className="col-span-4 grid w-full grid-cols-2 gap-2 lg:grid-cols-3">
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2021"
                  className="h-7 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2021
              </p>
            </li>
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2022"
                  className="h-7 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2022
              </p>
            </li>
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2023"
                  className="h-7 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2023
              </p>
            </li>
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2024"
                  className="h-7 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2024
              </p>
            </li>
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2025"
                  className="h-7 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2025
              </p>
            </li>
            <li className="relative flex h-72 items-center justify-center rounded-2xl bg-muted">
              <div className="">
                <img
                  alt="/2026"
                  className="h-5 w-auto dark:invert"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
                />
              </div>
              <p className="absolute right-4 bottom-4 font-mono text-sm tracking-tight text-foreground/40">
                /2026
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
