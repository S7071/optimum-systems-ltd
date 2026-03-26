export default function StatsLayout01Section() {
  return (
    <section className="overflow-hidden py-32 w-full">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="mb-4 rounded-full bg-muted px-2 py-1 text-xs uppercase">
          STATS
        </p>
        <h2 className="relative py-2 text-center font-sans text-4xl font-semibold tracking-tighter lg:text-5xl">
          Stats That Show the Difference
        </h2>
        <p className="mx-auto max-w-xl px-5 text-center text-sm text-muted-foreground lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <div className="mt-18 grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-full w-full">
            <div
              data-slot="chart"
              data-chart="chart-_r2r_0_"
              className="[&amp;_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&amp;_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&amp;_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&amp;_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&amp;_.recharts-radial-bar-background-sector]:fill-muted [&amp;_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&amp;_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex justify-center text-xs [&amp;_.recharts-dot[stroke='#fff']]:stroke-transparent [&amp;_.recharts-layer]:outline-hidden [&amp;_.recharts-sector]:outline-hidden [&amp;_.recharts-sector[stroke='#fff']]:stroke-transparent [&amp;_.recharts-surface]:outline-hidden mx-auto aspect-square max-h-[300px]"
            >
              {/* <style>
 [data-chart=chart-_r2r_0_] {
  --color-chrome: #8EC5FD;
  --color-safari: #2B7FFC;
  --color-firefox: #165DFC;
  --color-edge: #1448E6;
  --color-other: #193CB9;
}


.dark [data-chart=chart-_r2r_0_] {
  --color-chrome: #8EC5FD;
  --color-safari: #2B7FFC;
  --color-firefox: #165DFC;
  --color-edge: #1448E6;
  --color-other: #193CB9;
}
</style> */}
              <div
                className="recharts-responsive-container"
                // style="width: 100%; height: 100%; min-width: 0px;"
              >
                <div
                  className="recharts-wrapper"
                  //   style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 300px; max-width: 300px;"
                >
                  <svg
                    cx="50%"
                    cy="50%"
                    className="recharts-surface"
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    // style="width: 100%; height: 100%;"
                  >
                    <title></title>
                    <desc></desc>
                    <defs>
                      <clipPath id="recharts1-clip">
                        <rect x="5" y="5" height="290" width="290"></rect>
                      </clipPath>
                    </defs>
                    <g className="recharts-layer recharts-area">
                      <g className="recharts-layer recharts-radial-bar-background">
                        <path
                          cx="150"
                          cy="150"
                          fill="#eee"
                          className="recharts-sector recharts-radial-bar-background-sector"
                          d="M 189.4,150
    A 39.4,39.4,0,
    1,0,
    189.39999999399902,150.00068765972526
  L 170.39999999689292,150.0003560471674
            A 20.4,20.4,0,
            1,1,
            170.4,150 Z"
                          role="img"
                        ></path>
                        <path
                          cx="150"
                          cy="150"
                          fill="#eee"
                          className="recharts-sector recharts-radial-bar-background-sector"
                          d="M 213.4,150
    A 63.4,63.4,0,
    1,0,
    213.39999999034362,150.00110653874572
  L 194.3999999932375,150.00077492618786
            A 44.4,44.4,0,
            1,1,
            194.4,150 Z"
                          role="img"
                        ></path>
                        <path
                          cx="150"
                          cy="150"
                          fill="#eee"
                          className="recharts-sector recharts-radial-bar-background-sector"
                          d="M 237.4,150
    A 87.4,87.4,0,
    1,0,
    237.39999998668821,150.00152541776617
  L 218.39999998958208,150.0011938052083
            A 68.4,68.4,0,
            1,1,
            218.4,150 Z"
                          role="img"
                        ></path>
                        <path
                          cx="150"
                          cy="150"
                          fill="#eee"
                          className="recharts-sector recharts-radial-bar-background-sector"
                          d="M 261.4,150
    A 111.4,111.4,0,
    1,0,
    261.3999999830328,150.00194429678663
  L 242.39999998592668,150.00161268422875
            A 92.4,92.4,0,
            1,1,
            242.4,150 Z"
                          role="img"
                        ></path>
                        <path
                          cx="150"
                          cy="150"
                          fill="#eee"
                          className="recharts-sector recharts-radial-bar-background-sector"
                          d="M 285.4,150
    A 135.4,135.4,0,
    1,0,
    285.3999999793774,150.0023631758071
  L 266.39999998227125,150.0020315632492
            A 116.4,116.4,0,
            1,1,
            266.4,150 Z"
                          role="img"
                        ></path>
                      </g>
                      <g className="recharts-layer recharts-radial-bar-sectors">
                        <g className="recharts-layer">
                          <path
                            cx="150"
                            cy="150"
                            fill="var(--color-chrome)"
                            className="recharts-sector recharts-radial-bar-sector undefined"
                            d="M 189.4,150
    A 39.4,39.4,0,
    1,0,
    189.39999999399902,150.00068765972526
  L 170.39999999689292,150.0003560471674
            A 20.4,20.4,0,
            1,1,
            170.4,150 Z"
                            role="img"
                          ></path>
                          <path
                            cx="150"
                            cy="150"
                            fill="var(--color-safari)"
                            className="recharts-sector recharts-radial-bar-sector undefined"
                            d="M 213.4,150
    A 63.4,63.4,0,
    1,0,
    140.97723925347373,212.75467941525113
  L 143.68122118066614,193.9480720195134
            A 44.4,44.4,0,
            1,1,
            194.4,150 Z"
                            role="img"
                          ></path>
                          <path
                            cx="150"
                            cy="150"
                            fill="var(--color-firefox)"
                            className="recharts-sector recharts-radial-bar-sector undefined"
                            d="M 237.4,150
    A 87.4,87.4,0,
    1,0,
    112.78688991721269,229.08188438553015
  L 120.87669645694906,211.89017038867576
            A 68.4,68.4,0,
            1,1,
            218.4,150 Z"
                            role="img"
                          ></path>
                          <path
                            cx="150"
                            cy="150"
                            fill="var(--color-edge)"
                            className="recharts-sector recharts-radial-bar-sector undefined"
                            d="M 261.4,150
    A 111.4,111.4,0,
    1,0,
    73.27884505475551,230.7701948980426
  L 86.36414078150277,216.99430887413945
            A 92.4,92.4,0,
            1,1,
            242.4,150 Z"
                            role="img"
                          ></path>
                          <path
                            cx="150"
                            cy="150"
                            fill="var(--color-other)"
                            className="recharts-sector recharts-radial-bar-sector undefined"
                            d="M 285.4,150
    A 135.4,135.4,0,
    0,0,
    86.81324443524377,30.247781142895946
  L 95.67992357653158,47.05200683185441
            A 116.4,116.4,0,
            0,1,
            266.4,150 Z"
                            role="img"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2 w-full flex-col items-center justify-center text-center text-sm">
              <div className="flex items-center justify-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
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
                  className="lucide lucide-trending-up h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M16 7h6v6"></path>
                  <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
              </div>
              <div className="mt-2 leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
              </div>
            </div>
          </div>
          <div className="mt-10 flex w-full flex-row items-center justify-between gap-4 md:mt-0 md:flex-col">
            <div className="flex w-25 flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
                100%
              </h2>
              <p className="text-sm text-muted-foreground">
                Pre-Optimised for SEO
              </p>
            </div>
            <div className="flex w-25 flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
                750+
              </h2>
              <p className="text-sm text-muted-foreground">Pre Built Blocks</p>
            </div>
            <div className="flex w-25 flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
                85k+
              </h2>
              <p className="text-sm text-muted-foreground">Developers Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
