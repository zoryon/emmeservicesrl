import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CustomSeparator from "@/components/CustomSeparator";

const NUM_IMAGES = 20;

const PhotoGallerySection = () => {
    return (
        <section id="photogallery" className="w-full max-w-6xl mx-auto py-16 px-4 text-center">
            <header className="mb-2 uppercase">
                <h1 className="text-3xl lg:text-5xl uppercase tracking-tight">
                    Photo{" "}
                    <span className="font-extrabold">Gallery</span>
                </h1>
                <p>Alcuni nostri lavori</p>
            </header>

            <div className="w-full flex justify-center mb-8">
                <CustomSeparator />
            </div>

            <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {Array.from({ length: NUM_IMAGES }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/3 px-2"
                        >
                            <div className="relative w-full h-72 lg:h-96 overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                                <Image
                                    src={`/photo-gallery/photo-gallery-${index + 1}.jpg`}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index < 3}
                                    quality={100}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 lg:-left-4 cursor-pointer" />
                <CarouselNext className="right-2 lg:-right-2 cursor-pointer" />
            </Carousel>
        </section>
    );
};

export default PhotoGallerySection;
