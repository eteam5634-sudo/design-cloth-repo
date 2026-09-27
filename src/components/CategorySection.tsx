import { categories } from "@/data/site";
import { CategoryCard } from "@/components/CategoryCard";

export function CategorySection() {
  return (
    <section className="px-3 pb-6 md:px-4" aria-labelledby="shop-by-category">
      <div className="mx-auto mb-5 flex max-w-[1600px] items-end justify-between px-2 md:mb-6">
        <h2 id="shop-by-category" className="text-[11px] tracking-[0.32em] uppercase">
          Shop by Category
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.name} {...category} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
