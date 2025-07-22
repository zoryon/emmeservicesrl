"use client";

import { useState } from "react";
import AdvantagesList from "../AdvantagesList";
import CustomSeparator from "../CustomSeparator";
import ServicesGrid from "../ServicesGrid";
import { SERVICES } from "@/constants/services.constants";

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState(SERVICES[0]);

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
                    <p className="uppercase text-sm lg:text-base">Sicurezza, velocità, affidabilità.</p>
                </header>

                <CustomSeparator />

                {/* Service description */}
                <div className="h-32 overflow-y-auto pr-2 ">
                    <p className="text-base text-justify">
                        {selectedService.description || "Descrizione in arrivo..."}
                    </p>
                </div>

                {/* Advantages of the services */}
                <AdvantagesList />
            </div>
        </section>
    );
}

export default ServicesSection;