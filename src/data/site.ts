export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const categories = [
  {
    name: "Women",
    href: "/shop?category=women",
    image: "/images/cat-women.jpg",
    alt: "Woman in monochrome tailoring from the ÉLANE women collection",
    className: "min-h-[72vw] md:col-span-7 md:row-span-2 md:min-h-[760px]",
  },
  {
    name: "Men",
    href: "/shop?category=men",
    image: "/images/cat-men.jpg",
    alt: "Man in a dark tailored jacket from the ÉLANE men collection",
    className: "min-h-[72vw] md:col-span-5 md:min-h-[370px]",
  },
  {
    name: "New Arrivals",
    href: "/shop?category=new",
    image: "/images/cat-new.jpg",
    alt: "Editorial portrait introducing the new ÉLANE arrivals",
    className: "min-h-[72vw] md:col-span-5 md:min-h-[370px]",
  },
  {
    name: "Accessories",
    href: "/shop?category=accessories",
    image: "/images/cat-accessories.jpg",
    alt: "Leather accessory styled as part of the ÉLANE collection",
    className: "min-h-[72vw] md:col-span-12 md:min-h-[460px]",
  },
];

export const lookbook = [
  {
    src: "/images/look-autumn.jpg",
    label: "Autumn / Winter",
    alt: "Dark coat worn in an autumn winter fashion portrait",
  },
  {
    src: "/images/look-essential.jpg",
    label: "Essential Collection",
    alt: "Close editorial portrait in quiet neutral tones",
  },
  {
    src: "/images/look-evening.jpg",
    label: "Evening Edit",
    alt: "Evening dress captured in a refined studio light",
  },
  {
    src: "/images/look-modern.jpg",
    label: "Modern Classics",
    alt: "Tailored overcoat in a modern classic silhouette",
  },
];

export const journal = [
  {
    slug: "on-proportion",
    title: "On Proportion",
    image: "/images/journal-proportion.jpg",
    alt: "A long fashion silhouette studied for proportion",
    excerpt: "The shoulder, the hem, the space between. Proportion is the quiet decision that makes a garment feel finished.",
    body: "We begin every piece with a line on the body, not a trend on a board. A shoulder sits where it should. A hem ends where the leg still looks long. These are small decisions, repeated until a garment feels inevitable. Proportion is how ÉLANE stays modern without chasing the season.",
  },
  {
    slug: "the-quiet-wardrobe",
    title: "The Quiet Wardrobe",
    image: "/images/journal-wardrobe.jpg",
    alt: "Garments hanging in a calm, ordered wardrobe",
    excerpt: "Fewer pieces, chosen carefully, worn often. A wardrobe should feel like a language you already speak.",
    body: "Luxury is not a crowded rail. It is the coat you reach for without looking, the shirt that works beneath it, the shoe that does not ask for attention. We design for that kind of wardrobe: pieces that agree with one another, and with the person wearing them, long after the first season.",
  },
  {
    slug: "notes-on-cloth",
    title: "Notes on Cloth",
    image: "/images/journal-cloth.jpg",
    alt: "Folded cloth and tailored fabric in soft light",
    excerpt: "Silk, wool, linen, leather. Materials chosen for how they live, not only how they photograph.",
    body: "A fabric should improve with wear. Wool that holds a line. Linen that softens. Leather that darkens at the edges of the hand. We work with mills and ateliers that still treat cloth as the point of the garment. The cut can be precise. The material has to feel true.",
  },
];

export const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders are prepared within two to four business days. Standard delivery then follows. Complimentary shipping applies on orders over $250.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unworn pieces may be returned within 14 days in their original condition. Earrings and personalized items are final sale. See Returns for the full note.",
  },
  {
    question: "How do I choose a size?",
    answer:
      "Our pieces follow a standard XS to XL scale. If you are between sizes, choose the larger size for coats and blazers, and your usual size for shirts and dresses. Accessories are offered in one size.",
  },
  {
    question: "Where are the pieces made?",
    answer:
      "We work with specialist ateliers and mills chosen for cloth, cut, and finish. Each product page notes the material and the recommended care.",
  },
  {
    question: "How can I reach you?",
    answer:
      "Write to hello@elane.com or use the contact form. We read every note.",
  },
];

export const footer = {
  shop: [
    { href: "/shop?category=new", label: "New Arrivals" },
    { href: "/shop?category=women", label: "Women" },
    { href: "/shop?category=men", label: "Men" },
    { href: "/shop?category=accessories", label: "Accessories" },
  ],
  about: [
    { href: "/about", label: "Our Story" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/journal", label: "Journal" },
  ],
  help: [
    { href: "/contact", label: "Contact" },
    { href: "/shipping", label: "Shipping" },
    { href: "/returns", label: "Returns" },
    { href: "/faq", label: "FAQ" },
  ],
  social: [
    { href: "https://www.instagram.com/", label: "Instagram" },
    { href: "https://www.facebook.com/", label: "Facebook" },
    { href: "https://www.pinterest.com/", label: "Pinterest" },
  ],
};
