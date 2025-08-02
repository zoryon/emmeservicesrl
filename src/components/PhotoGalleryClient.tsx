"use client";

import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const NUM_IMAGES = 20;

const PhotoGalleryClient = () => {
    return (
        <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
                {Array.from({ length: NUM_IMAGES }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-full md:basis-1/2 lg:basis-1/3 px-2"
                    >
                        <div className="relative w-full h-72 lg:h-96 overflow-hidden rounded-sm shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src={`/photo-gallery/photo-gallery-${index + 1}.jpg`}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index < 3}
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-4 cursor-pointer" />
            <CarouselNext className="right-2 lg:-right-2 cursor-pointer" />
        </Carousel>
    );
}

export default PhotoGalleryClient;