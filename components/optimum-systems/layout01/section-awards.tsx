/* eslint-disable @next/next/no-img-element */
export default function AwardsSection() {
  return (
    <section className="py-32 w-full">
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-8xl">
            Awards
          </h1>
          <h2 className="text-lg font-semibold tracking-tighter lg:text-3xl">
            (2015-25©)
          </h2>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-12 border-b text-left text-foreground/40">
              <th className="hidden min-w-30 font-normal lg:table-cell lg:min-w-40"></th>
              <th className="font-normal">Name</th>
              <th className="hidden font-normal md:table-cell">Nomination</th>
              <th className="text-left text-right font-normal">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (001)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                    />
                  </span>
                  CSS Design Awards Winner
                </div>
              </td>
              <td className="hidden md:table-cell">
                Recognized for excellence in web design and functionality.
              </td>
              <td className="text-right text-foreground">2024</td>
            </tr>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (002)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                    />
                  </span>
                  Awwwards Site of the Day
                </div>
              </td>
              <td className="hidden md:table-cell">
                Featured for outstanding creativity and innovation in web
                development.
              </td>
              <td className="text-right text-foreground">2023</td>
            </tr>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (003)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg"
                    />
                  </span>
                  Best UI/UX Design
                </div>
              </td>
              <td className="hidden md:table-cell">
                Awarded for exceptional user experience and interface design.
              </td>
              <td className="text-right text-foreground">2023</td>
            </tr>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (004)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg"
                    />
                  </span>
                  Web Design Excellence
                </div>
              </td>
              <td className="hidden md:table-cell">
                Honored for superior design quality and technical
                implementation.
              </td>
              <td className="text-right text-foreground">2022</td>
            </tr>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (005)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg"
                    />
                  </span>
                  Mobile App of the Year
                </div>
              </td>
              <td className="hidden md:table-cell">
                Recognized for innovative mobile design and user experience.
              </td>
              <td className="text-right text-foreground">2022</td>
            </tr>
            <tr className="h-20 border-b text-left text-foreground/40">
              <td className="hidden font-medium tracking-tight text-foreground/50 lg:table-cell">
                (006)
              </td>
              <td className="text-lg font-medium tracking-tight text-foreground lg:text-xl">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-xl bg-foreground object-cover p-1.5">
                    <img
                      className="invert"
                      alt=""
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg"
                    />
                  </span>
                  Digital Innovation Award
                </div>
              </td>
              <td className="hidden md:table-cell">
                Celebrated for breakthrough digital solutions and creative
                technology.
              </td>
              <td className="text-right text-foreground">2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
