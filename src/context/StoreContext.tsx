"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products } from "@/data/products";
import type { CartLine } from "@/lib/types";

const CART_KEY = "elane-cart";
const WISH_KEY = "elane-wishlist";

type Toast = { id: number; message: string };

type StoreValue = {
  cart: CartLine[];
  wishlist: string[];
  cartCount: number;
  ready: boolean;
  addToCart: (productId: string, size: string, quantity: number) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeFromCart: (lineId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toast: Toast | null;
  showToast: (message: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

function readCart(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(data)) return [];
    const ids = new Set(products.map((product) => product.id));
    return data.filter(
      (line) =>
        line &&
        typeof line.id === "string" &&
        typeof line.productId === "string" &&
        ids.has(line.productId) &&
        typeof line.size === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0,
    );
  } catch {
    return [];
  }
}

function readWishlist(raw: string | null) {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as string[];
    if (!Array.isArray(data)) return [];
    const ids = new Set(products.map((product) => product.id));
    return data.filter((id) => typeof id === "string" && ids.has(id));
  } catch {
    return [];
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    setCart(readCart(localStorage.getItem(CART_KEY)));
    setWishlist(readWishlist(localStorage.getItem(WISH_KEY)));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, menuOpen]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const showToast = useCallback((message: string) => {
    setToast({ id: Date.now(), message });
  }, []);

  const addToCart = useCallback(
    (productId: string, size: string, quantity: number) => {
      const id = `${productId}::${size}`;
      setCart((prev) => {
        const existing = prev.find((line) => line.id === id);
        if (existing) {
          return prev.map((line) =>
            line.id === id
              ? { ...line, quantity: Math.min(9, line.quantity + quantity) }
              : line,
          );
        }
        return [...prev, { id, productId, size, quantity: Math.min(9, quantity) }];
      });
      showToast("Added to your cart.");
    },
    [showToast],
  );

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setCart((prev) =>
      quantity < 1
        ? prev.filter((line) => line.id !== lineId)
        : prev.map((line) =>
            line.id === lineId ? { ...line, quantity: Math.min(9, quantity) } : line,
          ),
    );
  }, []);

  const removeFromCart = useCallback((lineId: string) => {
    setCart((prev) => prev.filter((line) => line.id !== lineId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    showToast("Your bag has been cleared.");
  }, [showToast]);

  const toggleWishlist = useCallback(
    (productId: string) => {
      const exists = wishlist.includes(productId);
      setWishlist(
        exists ? wishlist.filter((id) => id !== productId) : [...wishlist, productId],
      );
      showToast(exists ? "Removed from your wishlist." : "Saved to your wishlist.");
    },
    [showToast, wishlist],
  );

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  const openSearch = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      cartCount,
      ready,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isWishlisted,
      searchOpen,
      openSearch,
      closeSearch,
      menuOpen,
      setMenuOpen,
      toast,
      showToast,
    }),
    [
      cart,
      wishlist,
      cartCount,
      ready,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isWishlisted,
      searchOpen,
      openSearch,
      closeSearch,
      menuOpen,
      toast,
      showToast,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
