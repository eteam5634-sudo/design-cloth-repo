"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { formatPrice } from "@/lib/utils";

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!searchOpen) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(timer);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return products.filter((product) =>
      [product.name, product.category, product.description]
        .join(" ")
        .toLowerCase()
        .includes(term),
    );
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Search the collection"
      className="fixed inset-0 z-[60] overflow-y-auto bg-ivory text-ink"
    >
      <div className="mx-auto flex min-h-full max-w-[1100px] flex-col px-5 py-6 md:px-10">
        <div className="flex items-center justify-between">
          <p className="font-serif text-xl tracking-[0.32em]">ÉLANE</p>
          <button
            type="button"
            onClick={closeSearch}
            className="flex h-11 items-center px-2 text-[11px] tracking-[0.22em] uppercase"
          >
            Close
          </button>
        </div>
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <input
          ref={inputRef}
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the collection"
          className="mt-10 w-full border-b border-ink/20 bg-transparent py-4 font-serif text-3xl outline-none placeholder:text-ink/30 md:text-5xl"
        />

        <div className="mt-10 flex-1 pb-16">
          {!query.trim() ? (
            <p className="text-sm text-muted">Search by piece, category, or fabric.</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted">No pieces match your search.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    onClick={closeSearch}
                    className="group flex gap-4"
                  >
                    <span className="relative block h-28 w-20 shrink-0 overflow-hidden bg-beige">
                      <Image
                        src={product.image}
                        alt={`${product.name}, ${product.category}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-muted">
                        {product.category}
                      </span>
                      <span className="mt-1 block font-serif text-xl group-hover:opacity-60">
                        {product.name}
                      </span>
                      <span className="mt-2 block text-sm">{formatPrice(product.price)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
