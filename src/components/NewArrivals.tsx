import { getProductsByIds, newArrivalIds } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function NewArrivals() {
  const products = getProductsByIds(newArrivalIds);

  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <SectionHeading
            index="02"
            title="New Arrivals"
            subtitle="Fresh silhouettes for the season ahead."
          />
        </Reveal>
        <div className="mt-14 md:mt-16">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
