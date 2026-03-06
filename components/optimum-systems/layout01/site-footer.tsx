import { Button } from "@/components/ui/button";
import { BadgeCheck, Facebook, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <section className="bg-primary-cbe-700 text-primary-foreground py-8 w-full px-6 sm:px-30">
      <div className="container">
        <footer>
          <div className="mb-14 flex flex-col justify-between gap-11 md:items-start xl:flex-row xl:items-center xl:gap-6">
            <div className="flex-1">
              <h1 className="mb-4 text-2xl font-semibold">
                All-in-One ERP. Built for Kenya.
              </h1>
              <p className="mb-8 text-md text-secondary/60">
                Streamline finance, HR, inventory, and operations with a fully
                compliant, locally supported ERP solution.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="default" size="default">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  className="bg-background text-primary-cbe-800"
                >
                  Explore Solutions
                </Button>
              </div>
            </div>
            <div className="flex-2 flex flex-row justify-end">
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-background/10 p-6 shadow-lg md:flex-row">
                <div className="flex flex-col items-center justify-center p-10">
                  <div className="flex text-6xl font-semibold">
                    0<div className="h-full text-sm">KES</div>
                  </div>
                  <div className="text-sm">Free Consultation</div>
                </div>
                <div className="h-[1px] w-full bg-muted-foreground/30 md:h-auto md:w-[1px]"></div>
                <ul className="flex flex-col justify-center space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2 font-sm hover:text-secondary/90">
                    <BadgeCheck size={24} className="text-primary-foreground" />
                    <p className="text-secondary/60 text-sm">
                      1-on-1 ERP Needs Assessment
                    </p>
                  </li>
                  <li className="flex items-center gap-2 font-sm hover:text-secondary/90">
                    <BadgeCheck size={24} className="text-primary-foreground" />
                    <p className="text-secondary/60 text-sm">
                      System Demo & Workflow Mapping
                    </p>
                  </li>
                  <li className="flex items-center gap-2 font-sm hover:text-secondary/90">
                    <BadgeCheck size={24} className="text-primary-foreground" />
                    <p className="text-secondary/60 text-sm">
                      Custom Implementation Proposal
                    </p>
                  </li>
                  <li className="flex items-center gap-2 font-sm hover:text-secondary/90">
                    <BadgeCheck size={24} className="text-primary-foreground" />
                    <p className="text-secondary/60 text-sm">
                      Local Technical Support Team
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t pt-20 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-4 text-secondary/60">
                <li className="hover:text-secondary/90">
                  <a href="#">About Optimum ERP Systems Ltd</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Company Profile</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Our Vision & Mission</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Success Stories</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Products</h3>
              <ul className="space-y-4 text-secondary/60">
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate ERP</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate CBE Assessment ERP</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate Hotel ERP</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate Manufacturing ERP</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate Supply-Chain ERP</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate Conference</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Ultimate POS</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Our Solutions</h3>
              <ul className="space-y-4 text-secondary/60">
                <li className="hover:text-secondary/90">
                  <a href="#">Sectors We Serve</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Industry Solutions</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Product Ecosystems</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-4 text-secondary/60">
                <li className="hover:text-secondary/90">
                  <a href="#">Blog & Insights</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Implementation Guide</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Case Studies</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">System Documentation</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-secondary/60 lg:flex-row lg:items-center">
            <ul className="flex sm:flex-row flex-col justify-center gap-4 lg:justify-start">
              <div className="flex flex-row gap-4">
                <li className="hover:text-secondary/90">
                  <a href="#">Privacy</a>
                </li>
                <li className="hover:text-secondary/90">
                  <a href="#">Terms</a>
                </li>
              </div>
              <li>
                <p className="text-secondary/60">
                  © 2026 SSO GROUP KE. All rights reserved.
                </p>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-2 sm:gap-4 lg:justify-start">
              <li>
                <p className="text-secondary/60">Follow us:</p>
              </li>
              <li>
                <Button
                  variant="outline"
                  size="default"
                  className="text-primary-cbe-800"
                >
                  <Facebook size={4} />
                  Facebook
                </Button>
              </li>
              <li>
                <Button
                  variant="outline"
                  size="default"
                  className="text-primary-cbe-800"
                >
                  <Twitter size={4} />
                  Twitter
                </Button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
