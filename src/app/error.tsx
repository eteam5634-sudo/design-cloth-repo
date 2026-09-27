"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="px-6 py-28 text-center md:py-36">
      <h1 className="font-serif text-5xl font-normal">Something went wrong.</h1>
      <p className="mx-auto mt-5 max-w-md text-muted">
        Please try again. If the page still does not open, return home.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 border border-ink px-8 py-3.5 text-[11px] tracking-[0.22em] uppercase"
      >
        Try again
      </button>
    </div>
  );
}
