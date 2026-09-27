export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export const SHIPPING_THRESHOLD = 250;
export const SHIPPING_RATE = 18;

export function shippingFor(subtotal: number) {
  if (subtotal <= 0 || subtotal >= SHIPPING_THRESHOLD) return 0;
  return SHIPPING_RATE;
}

export function sizesFor(category: string) {
  return category === "Accessories"
    ? ["One Size"]
    : ["XS", "S", "M", "L", "XL"];
}
