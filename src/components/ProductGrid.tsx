import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  priorityCount = 0,
  variant = "catalog",
}: {
  products: Product[];
  priorityCount?: number;
  variant?: "catalog" | "featured";
}) {
  return (
    <div
      className={cn(
        "grid gap-x-4 gap-y-12 md:gap-x-6",
        variant === "featured"
          ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
      )}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < priorityCount} />
      ))}
    </div>
  );
}
