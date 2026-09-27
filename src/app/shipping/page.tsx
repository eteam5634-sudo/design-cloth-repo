import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Shipping information for ÉLANE orders.",
};

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Help</p>
      <h1 className="mt-4 font-serif text-5xl font-normal md:text-6xl">Shipping</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted">
        <p>
          Pieces are prepared within two to four business days. Standard delivery is $18,
          and complimentary on orders over $250.
        </p>
        <p>
          You will see shipping calculated in your bag before checkout. Delivery times vary
          by destination. This storefront is a demonstration, so no order is dispatched.
        </p>
        <p>
          Questions about an address or a delivery window can be sent through the{" "}
          <Link href="/contact" className="text-ink underline underline-offset-4">
            contact form
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
