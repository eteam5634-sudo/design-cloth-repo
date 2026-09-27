"use client";

import { SearchOverlay } from "@/components/SearchOverlay";
import { ToastNotification } from "@/components/ToastNotification";
import { StoreProvider } from "@/context/StoreContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      {children}
      <SearchOverlay />
      <ToastNotification />
    </StoreProvider>
  );
}
