import Image from "next/image";
import Link from "next/link";
import { WishlistButton } from "@/components/WishlistButton";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const href = `/product/${product.id}`;

  return (
    <article className="group">
      <div className="relative">
        <Link href={href} className="relative block aspect-[3/4] overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={`${product.name}, ${product.category} piece by ÉLANE`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase text-ink">
            {product.badge}
          </span>
        ) : null}
        <WishlistButton
          productId={product.id}
          className="absolute right-3 top-3 bg-black/30 backdrop-blur-sm"
        />
      </div>
      <div className="mt-4">
        <p className="text-[10px] tracking-[0.22em] uppercase text-muted">{product.category}</p>
        <div className="mt-1 flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg font-normal leading-tight md:text-2xl">
            <Link href={href} className="transition-opacity hover:opacity-60">
              {product.name}
            </Link>
          </h3>
          <p className="shrink-0 text-sm">{formatPrice(product.price)}</p>
        </div>
      </div>
      <Link
        href={href}
        className="mt-3 inline-block text-[11px] tracking-[0.2em] uppercase"
      >
        <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-ink">
          View Product
        </span>
      </Link>
    </article>
  );
}
