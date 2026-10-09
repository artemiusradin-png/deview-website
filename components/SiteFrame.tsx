"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";

export function SiteFrame({ children }: { children: ReactNode }) {
  const path = usePathname().replace(/^\/en\/?/, "");
  return (
    <div
      className={path ? "site-interior" : "site-home"}
      data-page={path || "home"}
    >
      {path && <SiteHeader />}
      {children}
    </div>
  );
}
