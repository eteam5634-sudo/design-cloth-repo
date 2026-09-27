import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <Image
        src="/images/hero.jpg"
        alt="ÉLANE campaign portrait, a model in dark tailored clothing"
        fill
        priority
        sizes="100vw"
        className="hero-settle object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-24 md:px-16 md:pb-28">
        <p className="fade-up text-[11px] tracking-[0.36em] uppercase text-ivory/80">
          The New Collection
        </p>
        <h1
          className="fade-up mt-5 max-w-4xl font-serif text-[clamp(3.4rem,8.2vw,7.2rem)] font-normal leading-[0.9]"
          style={{ animationDelay: "0.15s" }}
        >
          Elegance
          <br />
          <span className="italic">That Speaks.</span>
        </h1>
        <p
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: "0.3s" }}
        >
          Discover refined pieces designed for confidence, individuality, and timeless style.
        </p>
        <div
          className="fade-up mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "0.45s" }}
        >
          <Button href="/shop" variant="ivory">
            Shop Collection
          </Button>
          <Button href="/lookbook" variant="light">
            Explore Lookbook
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.32em] uppercase text-ivory/80">Scroll</span>
        <span className="scroll-line block h-12 w-px bg-ivory/80" />
      </div>
    </section>
  );
}
