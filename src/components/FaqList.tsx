"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-serif text-2xl">{item.question}</span>
              <span aria-hidden="true" className="text-xl text-muted">
                {expanded ? "–" : "+"}
              </span>
            </button>
            <div className={cn("grid transition-all", expanded ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}>
              <p className="overflow-hidden leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
