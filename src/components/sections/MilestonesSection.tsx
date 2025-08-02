import { cn } from "@/lib/utils";

import { MILESTONES } from "@/constants";

const MilestonesSection = () => {
    return (
        <section 
            id="traguardi" 
            className="w-screen min-h-[350px] h-fit bg-fixed bg-center bg-cover bg-no-repeat relative "
            style={{
                backgroundImage: 'url(/parallax/parallax-1.png)',
            }}
        >
            <div className="w-full min-h-[350px] bg-[rgb(40,40,40,0.9)] flex flex-col md:flex-row items-center justify-center gap-8 text-white py-8">
                <MilestonesShowcase />
            </div>
        </section>
    );
}

const MilestonesShowcase = () => {
    return (
            MILESTONES.map((milestone, i) => (
                <div
                    key={milestone.label + i}
                    className="w-full flex flex-col justify-between items-center"
                >
                    <i
                        className={cn(
                            milestone.icon,
                            "text-brand text-4xl lg:text-[3.5rem]"
                        )}
                    />
                    <div className="mt-3 md:mt-4 text-2xl lg:text-3xl font-extrabold">{milestone.value}</div>
                    <div className="mt-1 md:mt-2 text-sm lg:text-base">{milestone.label}</div>
                </div>
            ))
    );
};


export default MilestonesSection;