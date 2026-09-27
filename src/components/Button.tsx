import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-ink text-ivory hover:bg-[#2a2a2a]",
  outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-ivory",
  ivory: "bg-ivory text-ink hover:bg-white",
  light: "border border-ivory/80 bg-transparent text-ivory hover:bg-ivory hover:text-ink",
  ghost: "px-0 py-0 text-ink underline-offset-4 hover:underline",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
