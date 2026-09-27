import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopCatalog } from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore the ÉLANE collection of timeless clothing and accessories.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="px-5 py-24 text-[11px] tracking-[0.22em] uppercase text-muted">
          Loading the collection
        </div>
      }
    >
      <ShopCatalog />
    </Suspense>
  );
}
