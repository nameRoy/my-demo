"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function AppBreadcrumb() {
  const pathname = usePathname();
  const pathArr = pathname.split("/").filter((path) => path !== "");
  return (
    <Breadcrumb className="px-4 h-16 flex items-center">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home size="16" className="ml-[0.45rem]"></Home>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathArr.map(
          (p, index, thisArg) => (
            <Fragment key={p}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${thisArg.slice(0, index + 1).join("/")}`}>
                  {p}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ),
          pathArr
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
