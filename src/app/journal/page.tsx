import type { Metadata } from "next";
import Image from "next/image";
import { journal } from "@/data/site";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from ÉLANE on proportion, cloth, and the quiet wardrobe.",
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Journal</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.5rem)] font-normal leading-none">
        Notes from the house
      </h1>
      <div className="mt-16 space-y-20">
        {journal.map((article) => (
          <article key={article.slug} id={article.slug} className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-normal">{article.title}</h2>
              <p className="mt-4 text-muted">{article.excerpt}</p>
              <p className="mt-4 leading-relaxed">{article.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
