import Link from "next/link";
import { footer } from "@/data/site";

function Column({
  title,
  links,
  external = false,
}: {
  title: string;
  links: { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h2 className="text-[11px] tracking-[0.28em] uppercase">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-ivory/65 transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-ivory/65 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-[0.32em]">ÉLANE</p>
          <p className="mt-4 max-w-xs font-serif text-lg italic text-ivory/75">
            Timeless Style. Modern Luxury.
          </p>
        </div>
        <Column title="Shop" links={footer.shop} />
        <Column title="About" links={footer.about} />
        <Column title="Help" links={footer.help} />
        <Column title="Social" links={footer.social} external />
      </div>
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs tracking-[0.14em] text-ivory/50 uppercase md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 ÉLANE. All rights reserved.</p>
        <p>New York</p>
      </div>
    </footer>
  );
}
