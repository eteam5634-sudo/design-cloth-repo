import { LookbookGrid } from "@/components/Lookbook";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function LookbookSection() {
  return (
    <section id="lookbook" className="scroll-mt-24 px-3 py-24 md:px-4 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <SectionHeading index="04" title="The ÉLANE Lookbook" />
        </Reveal>
        <div className="mt-14 md:mt-16">
          <LookbookGrid />
        </div>
      </div>
    </section>
  );
}
