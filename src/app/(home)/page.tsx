import HeroCarousel from "@/components/HeroCarousel";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import MilestoneSection from "@/components/sections/MilestonesSection";
import ContactsSection from "@/components/sections/ContactsSection";

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
        <MilestoneSection />
      </div>

      <div className="xl:container mx-auto px-3 xl:px-30 py-8 mt-10">
        <PhotoGallerySection />
      </div>

      <AboutUsSection />

      <div className="xl:container mx-auto px-3 xl:px-30 py-8 mt-10">
        <ContactsSection />
      </div>
    </div>
  );
}
