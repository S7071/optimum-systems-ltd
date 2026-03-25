"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";
import { ChevronRight, Home } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { getPathSegments, getUserIdFromPath } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const pathSegments = useMemo(() => getPathSegments(pathname), [pathname]);
  const router = useRouter();
  const userId = useMemo(() => getUserIdFromPath(pathname), [pathname]);
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium flex flex-row gap-2 items-center capitalize cursor-pointer">
          {pathSegments.map((p, idx) => {
            if (idx === 0) {
              if (idx === pathSegments.length - 1) {
                return (
                  <div
                    key={p}
                    className="flex flex-row gap-2 items-center"
                    onClick={() => {
                      router.push(`/cms/${userId}`);
                    }}
                  >
                    <Home size={16} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={p}
                    className="flex flex-row gap-2 items-center"
                    onClick={() => {
                      router.push(`/cms/${userId}`);
                    }}
                  >
                    <Home size={16} /> <ChevronRight size={16} />
                  </div>
                );
              }
            } else if (idx + 1 === pathSegments.length) {
              return <div key={p}>{p.replaceAll("-", " ")}</div>;
            } else {
              return (
                <div
                  key={p}
                  className="flex flex-row gap-2 items-center"
                  onClick={() => {
                    router.push(`/cms/${userId}/${p}`);
                  }}
                >
                  {p.replaceAll("-", " ")} <ChevronRight size={16} />
                </div>
              );
            }
          })}
        </h1>
      </div>
    </header>
  );
}
