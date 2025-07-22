import Carousel from "@/components/Carousel";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div>
      <Carousel
        width="w-screen"
        height="h-[44vw]"
        minHeight="min-h-[500px]"
        slides={2}
        intervalMs={10000}
      />

      <div className="xl:container mx-auto px-3 xl:px-30 py-8">
        {/* Services */}
        <ServicesSection />
      </div>
    </div>
  );
}
