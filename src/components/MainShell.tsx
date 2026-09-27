"use client";

import { usePathname } from "next/navigation";

export function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <main id="main" className={home ? "flex-1" : "flex-1 pt-20"}>
      {children}
    </main>
  );
}
