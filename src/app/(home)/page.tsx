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

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4 text-sm sm:text-base font-semibold">
        Per le emergenze chiamare il seguente numero: <span className="underline">+39 339 221 8938</span> (Giovanni)
      </div>

      <div className="main-container">
        <ServicesSection />
      </div>

      <div className="mt-10">
        <MilestoneSection />
      </div>

      <div className="main-container">
        <PhotoGallerySection />
      </div>

      <AboutUsSection />

      <div className="main-container">
        <ContactsSection />
      </div>
    </div>
  );
}
