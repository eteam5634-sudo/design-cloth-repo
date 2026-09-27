import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "center",
}: {
  index?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {index ? (
        <p className="text-[11px] tracking-[0.32em] text-gold">{index}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.02]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
