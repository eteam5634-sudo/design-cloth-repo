"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { useStore } from "@/context/StoreContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { cartCount, ready, openSearch, menuOpen, setMenuOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setMenuOpen]);

  const light = pathname === "/" && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        light
          ? "text-ivory"
          : "border-b border-ink/10 bg-ivory/95 text-ink backdrop-blur-md",
      )}
    >
      <div className="relative z-50 flex h-20 items-center justify-between px-4 md:px-8">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition",
                menuOpen && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full bg-current transition",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-px w-full bg-current transition",
                menuOpen && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-60",
                pathname === link.href && "opacity-100",
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-[0.32em] md:text-2xl md:tracking-[0.42em]"
        >
          ÉLANE
        </Link>

        <div className="flex items-center">
          <button
            type="button"
            aria-label="Search"
            onClick={openSearch}
            className="flex h-11 w-11 items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16.5 20.5 21" />
            </svg>
          </button>
          <Link
            href="/cart"
            aria-label={`Shopping bag, ${ready ? cartCount : 0} items`}
            className="relative flex h-11 w-11 items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M6.5 8h11l-.8 12H7.3L6.5 8Z" />
              <path d="M9 8V7a3 3 0 0 1 6 0v1" />
            </svg>
            {ready && cartCount > 0 ? (
              <span className="absolute right-1 top-1 text-[10px] tracking-wide">{cartCount}</span>
            ) : null}
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <nav
          className="fixed inset-0 z-40 flex flex-col bg-ivory px-8 pt-28 text-ink md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-ink/10 py-4 font-serif text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <p className="mt-auto pb-10 font-serif text-lg italic text-muted">
            Timeless Style. Modern Luxury.
          </p>
        </nav>
      ) : null}
    </header>
  );
}
