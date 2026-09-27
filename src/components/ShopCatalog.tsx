"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "accessories", label: "Accessories" },
  { id: "new", label: "New Arrivals" },
];

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
];

function matches(product: Product, filter: string) {
  if (filter === "women") return product.category === "Women" || product.category === "Unisex";
  if (filter === "men") return product.category === "Men" || product.category === "Unisex";
  if (filter === "accessories") return product.category === "Accessories";
  if (filter === "new") return product.badge === "New";
  return true;
}

function sortProducts(list: Product[], sort: string) {
  const next = [...list];
  if (sort === "price-asc") next.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") next.sort((a, b) => b.price - a.price);
  else if (sort === "newest") next.sort((a, b) => b.newestRank - a.newestRank);
  else {
    next.sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.newestRank - a.newestRank,
    );
  }
  return next;
}

export function ShopCatalog() {
  const params = useSearchParams();
  const router = useRouter();
  const rawFilter = params.get("category") ?? "all";
  const rawSort = params.get("sort") ?? "featured";
  const filter = filters.some((item) => item.id === rawFilter) ? rawFilter : "all";
  const sort = sorts.some((item) => item.id === rawSort) ? rawSort : "featured";

  const visible = useMemo(
    () => sortProducts(products.filter((product) => matches(product, filter)), sort),
    [filter, sort],
  );

  function update(next: { category?: string; sort?: string }) {
    const query = new URLSearchParams(params.toString());
    if (next.category !== undefined) {
      if (next.category === "all") query.delete("category");
      else query.set("category", next.category);
    }
    if (next.sort !== undefined) {
      if (next.sort === "featured") query.delete("sort");
      else query.set("sort", next.sort);
    }
    const value = query.toString();
    router.replace(value ? `/shop?${value}` : "/shop", { scroll: false });
  }

  return (
    <div className="mx-auto max-w-[1500px] px-5 pb-24 md:px-10">
      <header className="pb-10 pt-12 md:pt-20">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">The Collection</p>
        <h1 className="mt-4 font-serif text-[clamp(3.2rem,7vw,6rem)] font-normal leading-[0.92]">
          Shop All
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
          Explore the ÉLANE collection.
        </p>
      </header>

      <div className="sticky top-20 z-30 -mx-5 border-y border-ink/10 bg-ivory/95 px-5 py-4 backdrop-blur-md md:-mx-10 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="toolbar" aria-label="Filter products">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => update({ category: item.id })}
                className={cn(
                  "shrink-0 border-b pb-1 text-[11px] tracking-[0.18em] uppercase transition-colors",
                  filter === item.id ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase text-muted">
            <span className="sr-only">Sort products</span>
            <select
              aria-label="Sort products"
              value={sort}
              onChange={(event) => update({ sort: event.target.value })}
              className="bg-transparent py-2 text-ink outline-none"
            >
              {sorts.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="py-8 text-[11px] tracking-[0.2em] uppercase text-muted">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"}
      </p>

      {visible.length === 0 ? (
        <p className="pb-16 text-muted">No pieces in this selection.</p>
      ) : (
        <ProductGrid products={visible} priorityCount={2} />
      )}
    </div>
  );
}
