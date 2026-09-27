"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { QuantitySelector } from "@/components/QuantitySelector";
import { WishlistButton } from "@/components/WishlistButton";
import { useStore } from "@/context/StoreContext";
import type { Product } from "@/lib/types";
import { cn, formatPrice, sizesFor } from "@/lib/utils";

const categoryHref: Record<string, string> = {
  Women: "/shop?category=women",
  Men: "/shop?category=men",
  Unisex: "/shop",
  Accessories: "/shop?category=accessories",
};

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const sizes = sizesFor(product.category);
  const [size, setSize] = useState(sizes.includes("M") ? "M" : sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStore();

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-10 md:py-14">
      <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.18em] uppercase text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href={categoryHref[product.category]} className="hover:text-ink">
          {product.category}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden bg-beige lg:sticky lg:top-28">
          <Image
            src={product.image}
            alt={`${product.name}, ${product.category} piece by ÉLANE`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_20%]"
          />
        </div>

        <div className="lg:py-6">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted">{product.category}</p>
          <h1 className="mt-3 font-serif text-4xl font-normal leading-tight md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg">{formatPrice(product.price)}</p>
          {product.badge ? (
            <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-gold">{product.badge}</p>
          ) : null}
          <p className="mt-6 max-w-lg leading-relaxed text-muted">{product.description}</p>

          <div className="mt-10">
            <p className="text-[11px] tracking-[0.22em] uppercase">Size</p>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Size">
              {sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={size === option}
                  onClick={() => setSize(option)}
                  className={cn(
                    "min-h-11 min-w-11 border px-3 text-[11px] tracking-[0.14em] transition-colors",
                    size === option ? "border-ink bg-ink text-ivory" : "border-ink/20 hover:border-ink",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] tracking-[0.22em] uppercase">Quantity</p>
            <div className="mt-3">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => addToCart(product.id, size, quantity)}
              className="h-12 flex-1 bg-ink text-[11px] tracking-[0.22em] text-ivory uppercase transition-colors hover:bg-[#2a2a2a]"
            >
              Add to Cart
            </button>
            <WishlistButton productId={product.id} tone="dark" className="border border-ink/20" />
          </div>

          <ul className="mt-12 space-y-2 border-t border-ink/10 pt-8 text-sm text-muted">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-24 border-t border-ink/10 pt-16">
          <h2 className="font-serif text-4xl font-normal">You May Also Like</h2>
          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
