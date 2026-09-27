import Image from "next/image";
import { lookbook } from "@/data/site";
import { cn } from "@/lib/utils";

const aspects = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[3/4]"];

export function LookbookGrid({ large = false }: { large?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
      {lookbook.map((item, index) => (
        <figure key={item.label} className="group relative overflow-hidden bg-beige">
          <div className={cn("relative", large ? "aspect-[3/4]" : aspects[index])}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-6 text-ivory md:p-8">
              <p className="font-serif text-2xl font-normal md:text-3xl">{item.label}</p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
