import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "noir-tailored-blazer",
    name: "Noir Tailored Blazer",
    category: "Women",
    price: 180,
    image: "/images/noir-tailored-blazer.jpg",
    description:
      "A sharply cut black blazer with a clean shoulder and a quiet finish. Designed to sharpen a silhouette without effort.",
    details: [
      "Wool blend with a soft hand",
      "Single-breasted, two-button",
      "Fully lined",
      "Dry clean",
    ],
    featured: true,
    newestRank: 70,
  },
  {
    id: "ivory-silk-dress",
    name: "Ivory Silk Dress",
    category: "Women",
    price: 220,
    image: "/images/ivory-silk-dress.jpg",
    description:
      "A refined silk dress designed for effortless elegance. Fluid through the body, precise at the shoulder.",
    details: ["Silk satin", "Bias-cut drape", "Concealed back zip", "Dry clean"],
    featured: true,
    newestRank: 80,
  },
  {
    id: "classic-wool-coat",
    name: "Classic Wool Coat",
    category: "Unisex",
    price: 260,
    image: "/images/classic-wool-coat.jpg",
    description:
      "A long wool coat with a disciplined line and a generous collar. Made to be worn open, over everything.",
    details: ["Double-faced wool", "Notch collar", "Side pockets", "Dry clean"],
    featured: true,
    newestRank: 60,
  },
  {
    id: "signature-linen-shirt",
    name: "Signature Linen Shirt",
    category: "Men",
    price: 120,
    image: "/images/signature-linen-shirt.jpg",
    description:
      "A relaxed linen shirt, washed for softness and cut with an easy shoulder. The piece the rest of the wardrobe leans on.",
    details: [
      "European linen",
      "Mother-of-pearl buttons",
      "Relaxed fit",
      "Machine wash cold",
    ],
    featured: true,
    newestRank: 50,
  },
  {
    id: "satin-evening-dress",
    name: "Satin Evening Dress",
    category: "Women",
    price: 240,
    image: "/images/satin-evening-dress.jpg",
    description:
      "A column of satin with a low, considered neckline. Evening, distilled to a single clean line.",
    details: ["Silk satin", "Column silhouette", "Adjustable straps", "Dry clean"],
    badge: "New",
    newestRank: 100,
  },
  {
    id: "oversized-blazer",
    name: "Oversized Blazer",
    category: "Women",
    price: 190,
    image: "/images/oversized-blazer.jpg",
    description:
      "An elongated blazer with a softened shoulder and a deep lapel. Tailoring, worn with ease.",
    details: ["Wool-silk blend", "Oversized fit", "Patch pockets", "Dry clean"],
    badge: "New",
    newestRank: 99,
  },
  {
    id: "premium-cotton-shirt",
    name: "Premium Cotton Shirt",
    category: "Men",
    price: 110,
    image: "/images/premium-cotton-shirt.jpg",
    description:
      "A crisp cotton shirt with a precise collar and a clean placket. Understated, and exact.",
    details: [
      "Long-staple cotton",
      "Classic collar",
      "Tailored through the body",
      "Machine wash cold",
    ],
    badge: "New",
    newestRank: 98,
  },
  {
    id: "leather-shoulder-bag",
    name: "Leather Shoulder Bag",
    category: "Accessories",
    price: 210,
    image: "/images/leather-shoulder-bag.jpg",
    description:
      "A structured leather bag with a quiet profile and a strap that sits close to the body.",
    details: ["Full-grain leather", "Magnetic closure", "Interior pocket", "One size"],
    badge: "New",
    newestRank: 97,
  },
  {
    id: "wide-leg-trousers",
    name: "Wide Leg Trousers",
    category: "Women",
    price: 140,
    image: "/images/wide-leg-trousers.jpg",
    description:
      "High-waisted trousers with a long, fluid leg. Cut to move, pressed to a clean line.",
    details: ["Wool crepe", "High rise", "Pressed crease", "Dry clean"],
    badge: "New",
    newestRank: 96,
  },
  {
    id: "minimalist-sunglasses",
    name: "Minimalist Sunglasses",
    category: "Accessories",
    price: 90,
    image: "/images/minimalist-sunglasses.jpg",
    description:
      "Fine frames and dark lenses. A small, exact finishing piece for every hour of the day.",
    details: ["Slim acetate frame", "UV protective lenses", "Minimal profile", "One size"],
    badge: "New",
    newestRank: 95,
  },
  {
    id: "pleated-skirt",
    name: "Pleated Skirt",
    category: "Women",
    price: 160,
    image: "/images/pleated-skirt.jpg",
    description:
      "A midi skirt of fine pleats that catch the light. Sharp at the waist, soft in motion.",
    details: ["Fine pleating", "Midi length", "Side zip", "Dry clean"],
    newestRank: 40,
  },
  {
    id: "minimal-knit-dress",
    name: "Minimal Knit Dress",
    category: "Women",
    price: 175,
    image: "/images/minimal-knit-dress.jpg",
    description:
      "A close, quiet knit dress with a clean neckline. The simplest form of polish.",
    details: ["Fine merino knit", "Sleeveless", "Midi length", "Hand wash cold"],
    newestRank: 35,
  },
  {
    id: "relaxed-trousers",
    name: "Relaxed Trousers",
    category: "Men",
    price: 150,
    image: "/images/relaxed-trousers.jpg",
    description:
      "Easy trousers in a soft wool, cut straight and unfussy. For days that ask for ease.",
    details: ["Wool twill", "Relaxed straight leg", "Belt loops", "Dry clean"],
    newestRank: 30,
  },
  {
    id: "premium-oxford-shirt",
    name: "Premium Oxford Shirt",
    category: "Men",
    price: 130,
    image: "/images/premium-oxford-shirt.jpg",
    description:
      "A refined oxford cloth shirt with a soft collar and a precise fit. Everyday, elevated.",
    details: ["Cotton oxford", "Button cuff", "Tailored fit", "Machine wash cold"],
    newestRank: 25,
  },
  {
    id: "structured-blazer",
    name: "Structured Blazer",
    category: "Men",
    price: 210,
    image: "/images/structured-blazer.jpg",
    description:
      "A structured blazer with a firm shoulder and a narrow lapel. Formality, pared back.",
    details: ["Wool suiting", "Single-breasted", "Interior pocket", "Dry clean"],
    newestRank: 20,
  },
  {
    id: "leather-belt",
    name: "Leather Belt",
    category: "Accessories",
    price: 85,
    image: "/images/leather-belt.jpg",
    description:
      "A slim leather belt with a brushed metal buckle. The detail that finishes a line.",
    details: ["Full-grain leather", "Brushed buckle", "Adjustable holes", "One size"],
    newestRank: 15,
  },
];

export const featuredIds = [
  "noir-tailored-blazer",
  "ivory-silk-dress",
  "classic-wool-coat",
  "signature-linen-shirt",
];

export const newArrivalIds = [
  "satin-evening-dress",
  "oversized-blazer",
  "premium-cotton-shirt",
  "leather-shoulder-bag",
  "wide-leg-trousers",
  "minimalist-sunglasses",
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByIds(ids: string[]) {
  return ids
    .map((id) => getProduct(id))
    .filter((product): product is Product => Boolean(product));
}

export function relatedProducts(id: string) {
  const current = getProduct(id);
  if (!current) return [];
  const same = products.filter(
    (product) => product.category === current.category && product.id !== id,
  );
  const others = products.filter(
    (product) => product.id !== id && product.category !== current.category,
  );
  return [...same, ...others].slice(0, 4);
}
