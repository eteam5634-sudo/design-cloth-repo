import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CategoryCard({
  name,
  href,
  image,
  alt,
  className,
  priority = false,
}: {
  name: string;
  href: string;
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn("group relative block overflow-hidden bg-beige", className)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-10">
        <h3 className="font-serif text-[clamp(2.1rem,6vw,4.25rem)] font-normal uppercase leading-none tracking-[0.06em]">
          {name}
        </h3>
        <span className="mt-3 inline-block border-b border-transparent pb-0.5 text-[11px] tracking-[0.28em] uppercase transition-colors group-hover:border-ivory">
          Explore
        </span>
      </div>
    </Link>
  );
}
