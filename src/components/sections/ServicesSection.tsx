import AdvantagesList from "../AdvantagesList";
import CustomSeparator from "../CustomSeparator";
import ServicesGrid from "../ServicesGrid";

const ServicesSection = () => {
    return (
        <section id="services" className="mt-10 grid lg:grid-cols-2 gap-8">
            {/* Services grid */}
            <ServicesGrid />
            <div className="max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-[500px]">
                {/* Section title */}
                <h1 className="text-3xl lg:text-4xl uppercase">
                    COSA{" "}
                    <span className="font-extrabold">
                        OFFRIAMO
                    </span>
                </h1>
                <p className="uppercase text-sm lg:text-base">Sicurezza, velocità, affidabilità.</p>

                <CustomSeparator />

                {/* Offer description */}
                <p className="text-base text-justify">
                    We provide fast, courteous and inexpensive towing services in New York. We are fully insured and been in business since 1986. We are ready to respond to all your vehicle emergency needs 24 hours a day, seven days a week.
                </p>

                {/* Advantages */}
                <AdvantagesList />
            </div>
        </section>
    );
}

export default ServicesSection;