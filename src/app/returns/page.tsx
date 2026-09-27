import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns",
  description: "Returns information for ÉLANE pieces.",
};

export default function ReturnsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Help</p>
      <h1 className="mt-4 font-serif text-5xl font-normal md:text-6xl">Returns</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted">
        <p>
          Unworn pieces may be returned within 14 days, in original condition, with tags
          attached. Swim, earrings, and personalized items are final sale.
        </p>
        <p>
          To begin a return, write to hello@elane.com with your order name and the pieces
          you would like to send back. Refunds are issued to the original payment method
          once the piece is received.
        </p>
        <p>
          This is a demonstration store, so returns are not processed. Visit{" "}
          <Link href="/contact" className="text-ink underline underline-offset-4">
            Contact
          </Link>{" "}
          if you would like to reach the house.
        </p>
      </div>
    </article>
  );
}
