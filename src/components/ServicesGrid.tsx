import { cn } from "@/lib/utils";

import { SERVICES } from "@/constants/services.constants";
import { Service } from "@/types";

type ServicesGridProps = {
    selected: Service;
    onSelect: (service: Service) => void;
};

const ServicesGrid = ({ selected, onSelect }: ServicesGridProps) => {
    return (
        <div className="grid md:grid-cols-2 gap-2">
            {SERVICES.map((service, i) => {
                return (
                    <ServiceGridElement
                        key={service.name + i}
                        service={service}
                        isActive={selected.name === service.name}
                        onSelect={onSelect}
                    />
                );
            })}
        </div>
    );
}

type GridElementProps = {
    service: Service;
    isActive: boolean;
    onSelect: (service: Service) => void;
};

const ServiceGridElement = ({ service, isActive, onSelect }: GridElementProps) => {
    const isDisabled = !service.description?.trim();

    return (
        <div
            onClick={() => {
                if (!isDisabled) onSelect(service);
            }}
            className={cn(
                "relative bg-gray-100 border-3 py-12 cursor-pointer flex flex-col justify-center items-center gap-6 duration-300",
                isActive ? "border-brand" : "border-transparent",
                isDisabled ? "opacity-60 cursor-not-allowed" : "hover:border-brand"
            )}
        >
            {service.icon && <i className={cn(service.icon, "text-brand text-[3.5rem]")} />}
            <h1 className="text-lg md:text-xl">{service.name}</h1>
        </div>
    );
}

export default ServicesGrid;    