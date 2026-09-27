import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of ÉLANE, a modern luxury fashion label devoted to refined design and effortless confidence.",
};

const chapters = [
  {
    title: "Our Philosophy",
    image: "/images/philosophy.jpg",
    alt: "Folded neutral garments arranged with care",
    text: "We design fewer pieces, with greater care. Every silhouette begins with proportion, fabric, and the way a garment should feel at the end of a long day. Nothing is added for effect. What remains is the line, the cloth, and the person wearing it.",
  },
  {
    title: "Craftsmanship",
    image: "/images/craft.jpg",
    alt: "Clothing hanging in an atelier, ready for finishing",
    text: "We work with mills and ateliers that respect the hand. Clean seams, considered linings, and fabrics chosen for how they wear — not how they photograph for a single season. Craft, for us, is repetition done properly.",
  },
  {
    title: "Modern Luxury",
    image: "/images/cat-women.jpg",
    alt: "A modern luxury look in black and ivory",
    text: "Luxury, for ÉLANE, is restraint. A precise shoulder. A quiet fabric. A piece you reach for without thinking, and keep for years. It is not excess. It is intention, worn close to the body.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink text-ivory">
        <Image
          src="/images/about.jpg"
          alt="ÉLANE campaign portrait introducing our story"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/25" />
        <div className="relative z-10 px-5 pb-12 md:px-16 md:pb-16">
          <p className="text-[11px] tracking-[0.32em] uppercase">The House</p>
          <h1 className="mt-4 font-serif text-[clamp(3.5rem,8vw,7rem)] font-normal leading-[0.9]">
            Our Story
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="font-serif text-2xl leading-snug md:text-3xl">
          ÉLANE was created from a belief that great fashion should feel effortless. We
          combine refined silhouettes, quality materials, and modern design to create pieces
          that remain relevant beyond the season.
        </p>
      </section>

      {chapters.map((chapter, index) => (
        <section
          key={chapter.title}
          className="grid md:grid-cols-2"
        >
          <div className={`relative min-h-[70vw] bg-beige md:min-h-[80vh] ${index % 2 ? "md:order-2" : ""}`}>
            <Image
              src={chapter.image}
              alt={chapter.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_25%]"
            />
          </div>
          <div className="flex items-center px-6 py-16 md:px-16 lg:px-20">
            <div className="max-w-md">
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">0{index + 1}</p>
              <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">{chapter.title}</h2>
              <p className="mt-6 leading-relaxed text-muted">{chapter.text}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink text-center text-ivory">
        <Image
          src="/images/vision.jpg"
          alt="A quiet clothing atelier, the setting for the ÉLANE vision"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-2xl px-6">
          <p className="text-[11px] tracking-[0.32em] uppercase">Our Vision</p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4.5vw,3.8rem)] font-normal leading-tight">
            A wardrobe language that outlasts the season — modern, intimate, and unmistakably refined.
          </h2>
          <Button href="/shop" variant="light" className="mt-10">
            Shop Collection
          </Button>
        </div>
      </section>
    </>
  );
}
