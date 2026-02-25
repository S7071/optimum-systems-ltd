"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

export default function SiteApp(): JSX.Element {
  return (
    <section className="relative py-16 md:py-24 px-6 sm:px-58">
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-10">
          {/* Illustration */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center">
            <Image
              src="/images/illustrator/envelope.svg"
              alt="Mobile app illustration"
              width={500}
              height={500}
              className="mx-auto h-auto w-full max-w-md"
              priority
            />
          </div>

          {/* Content */}
          <div className="md:col-span-6 lg:col-span-7">
            <Badge
              variant="secondary"
              className="bg-primary/5 text-primary text-xs font-bold rounded h-5 px-2.5 py-0.5"
            >
              Mobile Apps
            </Badge>

            <h4 className="my-4 text-2xl font-medium leading-normal md:text-3xl lg:leading-normal">
              Available for your <br className="hidden sm:block" /> Smartphones
            </h4>

            <p className="mb-0 max-w-xl text-slate-400">
              Manage your entire enterprise on the go with Optimum ERP. Access
              real-time data, approve workflows, monitor operations, and stay
              connected to your business from anywhere. Designed for
              institutions, SACCOs, manufacturers, and businesses across Kenya.
            </p>

            {/* App Store Buttons */}
            <div className="my-5 flex flex-wrap items-center gap-3">
              <Link href="#" aria-label="Download on the App Store">
                <Image
                  src="/images/app/app.png"
                  alt="App Store"
                  width={160}
                  height={48}
                  className="h-auto w-auto"
                />
              </Link>

              <Link href="#" aria-label="Get it on Google Play">
                <Image
                  src="/images/app/playstore.png"
                  alt="Google Play"
                  width={160}
                  height={48}
                  className="h-auto w-auto"
                />
              </Link>
            </div>

            {/* CTA Block */}
            <div className="inline-block pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-3">
                <Smartphone className="h-12 w-12 text-primary flex-shrink-0" />

                <div>
                  <h6 className="text-base font-medium">
                    Install app now on your cellphones
                  </h6>

                  <Button
                    variant="link"
                    asChild
                    className="p-0 mt-1 text-primary font-semibold tracking-wide"
                  >
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-1"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
