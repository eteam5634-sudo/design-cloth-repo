import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about ÉLANE orders, sizing, and care.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Help</p>
      <h1 className="mt-4 font-serif text-5xl font-normal md:text-6xl">Questions</h1>
      <p className="mt-5 text-muted">A few notes before you write to us.</p>
      <div className="mt-12">
        <FaqList />
      </div>
    </div>
  );
}
