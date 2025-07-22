import { SERVICE_ITEMS } from "@/constants/services.constants";
import { cn } from "@/lib/utils";
import { ServiceItem } from "@/types";

const ServicesGrid = () => {
    return (
        <div className="grid md:grid-cols-2 gap-2">
            {SERVICE_ITEMS.map((service, i) => {
                return (
                    <ServiceGridElement key={service.name + i} service={service} />
                );
            })}
        </div>
    );
}

const ServiceGridElement = ({ service }: { service: ServiceItem }) => {
    return (
        <div className="bg-gray-100 border-4 border-transparent hover:border-brand py-12  flex flex-col justify-center items-center gap-6 duration-300">
            {service.icon && <i className={cn(
                service.icon,
                "text-brand text-[3.5rem]"
            )} />}
            <h1 className="text-lg md:text-xl">{service.name}</h1>
        </div>
    );
}

export default ServicesGrid;