"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Field id="name" label="Name" autoComplete="name" />
      <Field id="email" label="Email" type="email" autoComplete="email" />
      <Field id="subject" label="Subject" autoComplete="off" />
      <div>
        <label htmlFor="message" className="text-[11px] tracking-[0.22em] uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-3 w-full resize-y border-b border-ink/20 bg-transparent py-3 outline-none"
        />
      </div>
      <button
        type="submit"
        className="h-12 bg-ink px-10 text-[11px] tracking-[0.22em] text-ivory uppercase hover:bg-[#2a2a2a]"
      >
        Send Message
      </button>
      {sent ? (
        <p role="status" className="text-sm text-muted">
          Thank you. Your message has been received.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] tracking-[0.22em] uppercase">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 outline-none"
      />
    </div>
  );
}
