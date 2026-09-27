import { getProductsByIds, featuredIds } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedCollection() {
  const products = getProductsByIds(featuredIds);

  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <SectionHeading
            index="01"
            title="Curated For You"
            subtitle="Essential pieces crafted for modern elegance."
          />
        </Reveal>
        <div className="mt-14 md:mt-16">
          <ProductGrid products={products} variant="featured" priorityCount={2} />
        </div>
      </div>
    </section>
  );
}
