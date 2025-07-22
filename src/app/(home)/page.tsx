import HeroCarousel from "@/components/HeroCarousel";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel
        width="w-screen"
        height="h-[44vw]"
        minHeight="min-h-[500px]"
        slides={2}
        intervalMs={10000}
      />

      <div className="xl:container mx-auto px-3 xl:px-30 py-8 mt-10">
        <ServicesSection />
      </div>

      <div className="mt-10">
        <StatsSection />
      </div>

      <div className="xl:container mx-auto px-3 xl:px-30 py-8 mt-10">
        <PhotoGallerySection />
      </div>
    </div>
  );
}
