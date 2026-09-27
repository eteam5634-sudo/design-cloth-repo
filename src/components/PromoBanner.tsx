import Image from "next/image";
import { Button } from "@/components/Button";

export function PromoBanner() {
  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-ink text-center text-ivory">
      <Image
        src="/images/promo.jpg"
        alt="ÉLANE fashion campaign, a model in a refined neutral look"
        fill
        sizes="100vw"
        className="object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-3xl px-6">
        <p className="text-[11px] tracking-[0.36em] uppercase">The Art of Dressing Well</p>
        <h2 className="mt-6 font-serif text-[clamp(2.2rem,5vw,4.4rem)] font-normal leading-[1.08]">
          Luxury is not about excess. It is about intention.
        </h2>
        <Button href="/about" variant="light" className="mt-10">
          Discover More
        </Button>
      </div>
    </section>
  );
}
