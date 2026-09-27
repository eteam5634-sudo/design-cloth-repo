import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="px-6 py-28 text-center md:py-36">
      <p className="text-[11px] tracking-[0.32em] text-gold">404</p>
      <h1 className="mt-4 font-serif text-5xl font-normal md:text-6xl">Page not found.</h1>
      <p className="mx-auto mt-5 max-w-md text-muted">
        The page you are looking for has moved, or no longer exists.
      </p>
      <Button href="/" className="mt-10">
        Return Home
      </Button>
    </div>
  );
}
