"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CarouselProps = {
    width: string;
    height: string;
    minWidth?: string;
    minHeight?: string;
    slides: number;
    intervalMs: number;
};

const HeroCarousel = ({
    width,
    height,
    minWidth,
    minHeight,
    slides,
    intervalMs,
}: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides);
        }, intervalMs);
        return () => clearInterval(interval);
    }, []);

    const fadeSlideVariant = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    };

    return (
        <div
            id="home"
            className={cn(
                "w-screen min-h-[500px] h-[44vw] relative overflow-hidden",
                width,
                height,
                minWidth ?? minWidth,
                minHeight ?? minHeight
            )}
        >
            {/* Slides */}
            {[...Array(slides)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
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

            {/* Text content */}
            <div className="absolute z-20 top-1/2 left-8 md:left-44 -translate-y-1/2 text-background">
                <AnimatePresence mode="wait">
                    {currentSlide % 2 === 0 ? (
                        <motion.div
                            key="text-even"
                            variants={fadeSlideVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="space-y-2"
                        >
                            <p className="text-3xl md:text-[3rem] font-semibold">
                                Soccorso Stradale / 
                            </p>
                            <p className="text-3xl md:text-[3rem] font-semibold">
                                Autotrasporto conto terzi
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="text-odd"
                            variants={fadeSlideVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="space-y-2"
                        >
                            <p className="text-3xl md:text-[3rem] font-semibold">
                                Deposito vetture, 
                            </p>
                            <p className="text-3xl md:text-[3rem] font-semibold">
                                furgoni & camper
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeroCarousel;
