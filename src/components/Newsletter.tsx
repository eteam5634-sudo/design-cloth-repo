"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <section className="bg-ink px-5 py-24 text-ivory md:px-10 md:py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">ÉLANE</p>
        <h2 className="mt-4 font-serif text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-none">
          Stay In The Know
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-ivory/70 md:text-base">
          Receive updates on new collections, exclusive releases, and private events.
        </p>
        <form onSubmit={onSubmit} className="mt-10" noValidate={false}>
          <div className="flex flex-col gap-4 border-b border-white/30 sm:flex-row sm:items-center">
            <label htmlFor="newsletter-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setDone(false);
              }}
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-ivory/40"
            />
            <button
              type="submit"
              className="shrink-0 py-3 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-70"
            >
              Subscribe
            </button>
          </div>
        </form>
        {done ? (
          <p role="status" className="mt-5 text-sm text-ivory/80">
            Thank you for subscribing.
          </p>
        ) : null}
      </div>
    </section>
  );
}
