import type { Metadata } from "next";
import { LookbookGrid } from "@/components/Lookbook";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "The ÉLANE lookbook. Editorial portraits of the season.",
};

export default function LookbookPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Editorial</p>
      <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.92]">
        The ÉLANE Lookbook
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        A visual study of proportion, cloth, and the light of the season.
      </p>
      <div className="mt-14">
        <LookbookGrid large />
      </div>
    </div>
  );
}
