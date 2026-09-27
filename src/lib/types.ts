export type Category = "Women" | "Men" | "Unisex" | "Accessories";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  details: string[];
  badge?: "New";
  featured?: boolean;
  newestRank: number;
};

export type CartLine = {
  id: string;
  productId: string;
  size: string;
  quantity: number;
};
