import { AboutPreview } from "@/components/AboutPreview";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Hero } from "@/components/Hero";
import { LookbookSection } from "@/components/LookbookSection";
import { NewArrivals } from "@/components/NewArrivals";
import { Newsletter } from "@/components/Newsletter";
import { PromoBanner } from "@/components/PromoBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <CategorySection />
      <NewArrivals />
      <PromoBanner />
      <AboutPreview />
      <LookbookSection />
      <Newsletter />
    </>
  );
}
