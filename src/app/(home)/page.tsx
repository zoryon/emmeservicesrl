import Carousel from "@/components/Carousel";

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
    </div>
  );
}
