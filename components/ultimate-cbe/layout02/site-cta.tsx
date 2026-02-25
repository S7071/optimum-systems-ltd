import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function SiteCta() {
  return (
    <section className="py-32 w-full px-6 sm:px-30 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="h-[250px] sm:h-[350px] overflow-hidden rounded-xl bg-primary-cbe-500 text-white md:col-span-2">
            <div className="flex h-full flex-row p-4 sm:p-8 md:p-12">
              <div className="relative z-10 w-full self-center px-2 text-center sm:w-auto sm:flex-1 sm:px-0 md:text-left">
                <h1 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl md:text-3xl">
                  Stay connected from anywhere.
                </h1>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
                  <Button
                    variant="default"
                    className="bg-primary-cbe-700 text-primary-foreground hover:bg-primary-cbe-800"
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
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                    <span>Download for iOS</span>
                  </Button>
                  <Button variant="outline" className="text-foreground">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                    </svg>
                    <span>Download for Android</span>
                  </Button>
                </div>
              </div>
              <div className="relative z-10 hidden md:block">
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
          <div className="h-auto sm:h-[350px] items-center justify-center rounded-xl bg-card p-6 sm:flex sm:p-8 md:p-12">
            <div className="w-full">
              <h2 className="mb-2 text-xl font-semibold sm:text-2xl">
                Subscribe to our weekly newsletter
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elidolor
                mattis sit phasellus.
              </p>
              <form className="w-full">
                <div className="space-y-4">
                  <div className="data-[invalid=true]:text-destructive gap-3 group/field flex w-full flex-col">
                    <label
                      data-slot="field-label"
                      className="text-sm font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed has-data-checked:bg-primary-cbe-500/5 has-data-checked:border-primary-cbe-500/30 dark:has-data-checked:border-primary-cbe-500/20 dark:has-data-checked:bg-primary-cbe-500/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col sr-only"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                    />
                  </div>
                  <Button
                    variant="default"
                    className="w-full h-9"
                    type="submit"
                  >
                    Subscribe <ArrowRight size={24} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
