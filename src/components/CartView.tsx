"use client";

import { useMemo, useState } from "react";
import { CartItem } from "@/components/CartItem";
import { Button } from "@/components/Button";
import { getProduct } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { formatPrice, shippingFor, SHIPPING_THRESHOLD } from "@/lib/utils";

export function CartView() {
  const { cart, updateQuantity, removeFromCart, clearCart, ready } = useStore();
  const [notice, setNotice] = useState("");

  const lines = useMemo(
    () =>
      cart.flatMap((line) => {
        const product = getProduct(line.productId);
        return product ? [{ line, product }] : [];
      }),
    [cart],
  );

  const subtotal = lines.reduce((sum, item) => sum + item.product.price * item.line.quantity, 0);
  const shipping = shippingFor(subtotal);
  const total = subtotal + shipping;

  if (!ready) {
    return (
      <div className="px-5 py-24 text-center text-[11px] tracking-[0.22em] uppercase text-muted">
        Loading your bag
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-12 md:px-10 md:pt-20">
      <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-normal leading-none">Your Bag</h1>

      {lines.length === 0 ? (
        <div className="py-20">
          <p className="font-serif text-3xl">Your bag is empty.</p>
          <Button href="/shop" className="mt-8">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <ul>
              {lines.map(({ line, product }) => (
                <CartItem
                  key={line.id}
                  line={line}
                  product={product}
                  onQuantity={(quantity) => updateQuantity(line.id, quantity)}
                  onRemove={() => removeFromCart(line.id)}
                />
              ))}
            </ul>
            <button
              type="button"
              onClick={clearCart}
              className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted hover:text-ink"
            >
              Clear bag
            </button>
          </div>

          <aside className="h-fit border border-ink/10 p-6 md:p-8">
            <h2 className="text-[11px] tracking-[0.24em] uppercase">Summary</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-4 text-base">
                <dt>Total</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {subtotal >= SHIPPING_THRESHOLD
                ? "Complimentary shipping is included."
                : `${formatPrice(SHIPPING_THRESHOLD - subtotal)} away from complimentary shipping.`}
            </p>
            <button
              type="button"
              onClick={() => setNotice("Checkout is currently unavailable in this demo.")}
              className="mt-8 h-12 w-full bg-ink text-[11px] tracking-[0.22em] text-ivory uppercase hover:bg-[#2a2a2a]"
            >
              Proceed to Checkout
            </button>
            {notice ? (
              <p role="status" className="mt-4 text-sm text-muted">
                {notice}
              </p>
            ) : null}
          </aside>
        </div>
      )}
    </div>
  );
}
