import BadgePill from "@/components/ui/badge-pill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function SiteCta() {
  return (
    <section className="py-16 md:py-24 w-full px-6 sm:px-30 bg-background">
      <div className="">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* ── Left: App Download Card ── */}
          <div className="relative h-[280px] sm:h-[380px] overflow-hidden rounded-xl bg-gradient-to-tr from-primary-cbe-800 via-primary-cbe-500 to-primary-cbe-800 text-white md:col-span-2">
            {/* Geometric ring accents */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full border-[48px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-10 -left-14 h-48 w-48 rounded-full border-[32px] border-white/[0.04]" />

            <div className="flex h-full flex-col sm:flex-row p-4 sm:p-8 md:p-12">
              <div className="relative z-10 w-full self-center px-2 text-center sm:w-auto sm:flex-1 sm:px-0 md:text-left">
                {/* Live badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  Now available on all platforms
                </div>

                <h1 className="mb-4 font-extrabold text-2xl sm:text-4xl text-pretty leading-tight tracking-tight">
                  Stay connected from anywhere.
                </h1>

                {/* Supporting subline */}
                <p className="mb-6 hidden text-sm text-white/55 sm:block md:max-w-[280px]">
                  Access your workspace, collaborate in real time, and manage
                  tasks fully synced across all your devices.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
                  {/* iOS — primary red action */}
                  <Button
                    variant="default"
                    size="lg"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <span>Download for iOS</span>
                  </Button>

                  {/* Android — secondary ghost */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-white/20 bg-white/10 text-white hover:bg-white/18 hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    <span>Download for Android</span>
                  </Button>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="relative z-10 hidden sm:flex">
                <div className="absolute top-0 left-1/2 h-[120%] w-[69%] -translate-x-1/2 overflow-hidden rounded-t-[32px]">
                  <img
                    alt=""
                    className="h-full w-full object-cover"
                    src="/images/cbe/placeholder-dark-7-tall.svg"
                  />
                </div>
                <div className="relative z-10 h-[350px] overflow-hidden">
                  <img
                    className="h-[600px] w-auto max-w-none"
                    width="340"
                    height="600"
                    alt=""
                    src="/images/cbe/phone.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Newsletter Card ── */}
          <div className="h-auto sm:h-[380px] items-center justify-center rounded-xl bg-card p-0 mt-6 sm:mt-0 sm:flex sm:p-8 md:p-12">
            <div className="w-full flex flex-col">
              {/* Red eyebrow label */}
              <BadgePill label="Weekly digest" centered={false} />

              <h2 className="mb-4 font-extrabold text-xl sm:text-2xl text-pretty leading-tight tracking-tight text-primary-cbe-500">
                Subscribe to our weekly newsletter
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Get the latest product updates, tips, and industry insights
                delivered straight to your inbox every week.
              </p>

              <form className="w-full">
                <div className="space-y-3">
                  <div className="data-[invalid=true]:text-destructive gap-3 group/field flex w-full flex-col">
                    <label data-slot="field-label" className="sr-only">
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email address"
                      type="email"
                      name="email"
                      className="h-11 rounded-xl border-border/60 bg-muted/50 transition-all focus:border-primary-cbe-500 focus:bg-background focus:ring-4 focus:ring-primary-cbe-500/10"
                    />
                  </div>

                  {/* Red subscribe CTA */}
                  <Button variant="default" className="w-full" type="submit">
                    Subscribe <ArrowRight size={16} />
                  </Button>
                </div>
              </form>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                No spam, ever.{" "}
                <a
                  href="#"
                  className="text-primary-cbe-500 underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </a>
              </p>

              {/* Trust signals */}
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {["Weekly updates", "Unsubscribe anytime", "No spam"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                        <Check
                          size={9}
                          className="text-green-600 dark:text-green-400"
                          strokeWidth={3}
                        />
                      </span>
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
