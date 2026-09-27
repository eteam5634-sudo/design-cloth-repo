import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ÉLANE in New York. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-[1200px] gap-16 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-24">
      <div>
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Contact</p>
        <h1 className="mt-4 font-serif text-[clamp(3.2rem,6vw,5.5rem)] font-normal leading-[0.95]">
          Let’s Connect.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          For orders, press, and private appointments, write to the house. We reply personally.
        </p>
        <dl className="mt-12 space-y-8">
          <div>
            <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">Email</dt>
            <dd className="mt-2 font-serif text-2xl">
              <a href="mailto:hello@elane.com" className="hover:opacity-60">
                hello@elane.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">Phone</dt>
            <dd className="mt-2 font-serif text-2xl">
              <a href="tel:+10000000000" className="hover:opacity-60">
                +1 000 000 0000
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] tracking-[0.22em] uppercase text-muted">Location</dt>
            <dd className="mt-2 font-serif text-2xl">New York, USA</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
