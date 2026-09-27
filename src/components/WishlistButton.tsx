"use client";

import { useStore } from "@/context/StoreContext";
import { cn } from "@/lib/utils";

export function WishlistButton({
  productId,
  tone = "light",
  className,
}: {
  productId: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const { toggleWishlist, isWishlisted } = useStore();
  const active = isWishlisted(productId);

  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      onClick={() => toggleWishlist(productId)}
      className={cn(
        "flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
      </svg>
    </button>
  );
}
