import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Bag",
  description: "Review the pieces in your ÉLANE bag.",
};

export default function CartPage() {
  return <CartView />;
}
