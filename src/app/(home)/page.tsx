import HeroImageSection from "@/components/sections/HeroImageSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import MilestonesSection from "@/components/sections/MilestonesSection";
import ContactsSection from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <div>
      <HeroImageSection />

      {/* Emergency Banner */}
      <div className="bg-orange-400 text-white text-center py-3 px-4 text-sm sm:text-base font-semibold">
        Per le emergenze chiamare il seguente numero: <span className="underline">+39 339 221 8938</span> (Giovanni)
      </div>

      <div className="main-container">
        <ServicesSection />
      </div>

      <div className="mt-10">
        <MilestonesSection />
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
