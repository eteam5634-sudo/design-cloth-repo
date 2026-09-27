"use client";

import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components/QuantitySelector";
import type { CartLine, Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export function CartItem({
  line,
  product,
  onQuantity,
  onRemove,
}: {
  line: CartLine;
  product: Product;
  onQuantity: (quantity: number) => void;
  onRemove: () => void;
}) {
  return (
    <li className="grid grid-cols-[96px_1fr] gap-4 border-b border-ink/10 py-6 sm:grid-cols-[120px_1fr_auto] sm:gap-6">
      <Link href={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="120px"
          className="object-cover object-[center_20%]"
        />
      </Link>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">{product.category}</p>
        <h2 className="mt-1 font-serif text-2xl font-normal">
          <Link href={`/product/${product.id}`} className="hover:opacity-60">
            {product.name}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-muted">Size {line.size}</p>
        <p className="mt-2 text-sm">{formatPrice(product.price)}</p>
        <div className="mt-4 sm:hidden">
          <QuantitySelector value={line.quantity} onChange={onQuantity} />
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted hover:text-ink"
        >
          Remove
        </button>
      </div>
      <div className="hidden sm:block">
        <QuantitySelector value={line.quantity} onChange={onQuantity} />
      </div>
    </li>
  );
}
