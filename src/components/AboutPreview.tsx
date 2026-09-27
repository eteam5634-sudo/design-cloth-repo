import Image from "next/image";
import { Button } from "@/components/Button";

export function AboutPreview() {
  return (
    <section className="grid min-h-[80vh] md:grid-cols-2">
      <div className="relative min-h-[68vw] bg-beige md:min-h-full">
        <Image
          src="/images/about.jpg"
          alt="ÉLANE portrait in ivory tailoring"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_20%]"
        />
      </div>
      <div className="flex items-center bg-cream px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-md">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">03</p>
          <h2 className="mt-4 font-serif text-[clamp(2.6rem,4vw,4.2rem)] font-normal leading-[1.02]">
            Designed With Intention.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            ÉLANE is a modern fashion label created for those who appreciate refined
            design, timeless silhouettes, and effortless confidence.
          </p>
          <Button href="/about" variant="outline" className="mt-10">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
