"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SERVICES } from "@/constants/services.constants";
import AdvantagesList from "@/components/AdvantagesList";
import ServicesGrid from "@/components/ServicesGrid";
import CustomSeparator from "@/components/CustomSeparator";

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(SERVICES[0]);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const isInitial = useRef(true);

    useEffect(() => {
        if (isInitial.current) {
            isInitial.current = false;
            return;
        }

        const handleScroll = () => {
            if (!descriptionRef.current) return;
            
            descriptionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        };

        // Add slight delay to ensure DOM update
        const timer = setTimeout(handleScroll, 10);
        return () => clearTimeout(timer);
    }, [selectedService]);

    return (
        <section id="servizi" className="grid lg:grid-cols-2 gap-8">
            {/* Grid */}
            <ServicesGrid
                selected={selectedService}
                onSelect={setSelectedService}
            />

            <div className="max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-[500px]">
                {/* Section header */}
                <header>
                    <h1 className="text-3xl lg:text-4xl uppercase">
                        COSA{" "}
                        <span className="font-extrabold">
                            OFFRIAMO
                        </span>
                    </h1>
                    <p className="uppercase text-sm lg:text-base">Soccorso Stradale & Autotrasporto per Conto Terzi</p>
                </header>

                <CustomSeparator />

                {/* Animated description container */}
                <div 
                    ref={descriptionRef}
                    className="h-32 overflow-y-auto pr-2 mb-4 rounded-lg bg-gray-50 p-3 shadow-inner"
                >
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={selectedService.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="text-base text-justify"
                        >
                            {selectedService.description || "..."}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Advantages of the services */}
                <AdvantagesList />
            </div>
        </section>
    );
}

export default ServicesSection;