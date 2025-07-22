"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CarouselProps = {
    width: string;
    height: string;
    minWidth?: string;
    minHeight?: string;
    slides: number;
    intervalMs: number;
};

const Carousel = ({ width, height, minWidth, minHeight, slides, intervalMs }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Automatically change slide after passed seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides);
        }, intervalMs);
        return () => clearInterval(interval);
    }, [slides]);

    return (
        <div id="home" className={cn(
            "w-screen min-h-[500px] h-[44vw] relative overflow-hidden",
            width,
            height,
            minWidth ?? minWidth,
            minHeight ?? minHeight,
        )}>
            {[...Array(slides)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        i === currentSlide ? "opacity-100 z-10" : "opacity-30 z-0"
                    )}
                >
                    <div
                        className="w-full h-full bg-center bg-cover bg-black"
                        style={{
                            backgroundImage: `url('/carousel/slide-${i}.jpg')`,
                        }}
                    />
                </div>
            ))}
            
        </div>
    );
}

export default Carousel;