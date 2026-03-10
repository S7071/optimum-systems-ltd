import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  BoxesIcon,
  ChartColumnStacked,
  Receipt,
  Users,
} from "lucide-react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function SiteMainFeature() {
  return (
    <section className="py-16 sm:py-32 w-full bg-background px-6 sm:px-30">
      <div className="container flex flex-col items-center gap-10 md:gap-16">
        <div className="flex flex-col gap-5 items-center">
          <Badge
            variant="secondary"
            className="bg-primary-cbe-100 text-primary-cbe-800 text-xs font-bold rounded-full h-10 px-5 py-0.5 gap-3"
          >
            <Image
              src="/ultimate-erp-dark.svg"
              alt="Logo"
              width={20}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="/ultimate-erp.svg"
              alt="Logo"
              width={32}
              height={32}
              className="hidden dark:block"
            />
            UltimateERP
          </Badge>
          <h2 className="max-w-full text-center text-2xl sm:text-4xl font-semibold text-pretty">
            One Powerful System. Every Module You Need.
          </h2>
          <p className="max-w-xl text-center text-muted-foreground">
            UltimateERP brings all your institutional operations into a single,
            fully integrated platform. See how your departments connect, track
            data flows, and manage everything from one intelligent dashboard:
          </p>
        </div>
        <ul className="mx-auto grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
          <li className="flex gap-2">
            <Receipt className="mt-1 size-4 shrink-0" size={4} />
            <h3>Finance & Accounts (Budgets, Receipts, Ledgers)</h3>
          </li>
          <li className="flex gap-2">
            <BoxesIcon className="mt-1 size-4 shrink-0" size={4} />
            <h3>Inventory & Procurement (Stores, Assets, Suppliers)</h3>
          </li>
          <li className="flex gap-2">
            <Users className="mt-1 size-4 shrink-0" size={4} />
            <h3>HR & Payroll (Staff, Leave, Statutory Deductions)</h3>
          </li>
          <li className="flex gap-2">
            <ChartColumnStacked className="mt-1 size-4 shrink-0" size={4} />
            <h3>Reports & Analytics (Dashboards, Audit Trails, Exports)</h3>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="mt-1 size-4 shrink-0" size={4} />
            <h3>Compliance & Controls (Roles, Policies, Controls)</h3>
          </li>
          <li className="flex gap-2">
            <BadgeDollarSign className="mt-1 size-4 shrink-0" size={4} />
            <h3>Fee Collection (Invoicing, Payments, Reconciliation)</h3>
          </li>
        </ul>

        <div className="mx-auto w-full max-w-5xl">
          <div className="relative inline-block w-full align-middle leading-none aspect-[1203/753]">
            <div className="pointer-events-none absolute z-0 overflow-hidden absolute left-[0.0831255%] top-[6.90571%] w-[99.7506%] h-[92.9615%] rounded-tl-none rounded-tr-none rounded-br-[11px] rounded-bl-[11px]">
              <img
                alt=""
                className="block size-full object-cover object-top"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png"
              />
            </div>
            <svg
              viewBox="0 0 1203 753"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 z-10 size-full transform-gpu"
              //   style="transform: translateZ(0px);"
            >
              <defs>
                <mask id="safariPunch" maskUnits="userSpaceOnUse">
                  <rect
                    x="0"
                    y="0"
                    width="1203"
                    height="753"
                    fill="white"
                  ></rect>
                  <path
                    d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
                    fill="black"
                  ></path>
                </mask>
                <clipPath id="path0">
                  <rect width="1203" height="753" fill="white"></rect>
                </clipPath>
                <clipPath id="roundedBottom">
                  <path
                    d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
                    fill="white"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#path0)" mask="url(#safariPunch)">
                <path
                  d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
                  className="fill-white dark:fill-[#262626]"
                ></path>
                <circle
                  cx="27"
                  cy="25"
                  r="6"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></circle>
                <circle
                  cx="47"
                  cy="25"
                  r="6"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></circle>
                <circle
                  cx="67"
                  cy="25"
                  r="6"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></circle>
                <path
                  d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
                  className="fill-[#E5E5E5] dark:fill-[#404040]"
                ></path>
                <g className="mix-blend-luminosity">
                  <path
                    d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z"
                    fill="#A3A3A3"
                  ></path>
                </g>
                <g className="mix-blend-luminosity">
                  <text
                    x="580"
                    y="30"
                    fill="#A3A3A3"
                    fontSize="12"
                    fontFamily="Arial, sans-serif"
                  >
                    https://www.ssogroup.co.ke
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="default" size="lg">
            Explore UltimateERP
            <ArrowRight />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
