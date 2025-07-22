import { STATS } from "@/constants/stats.constants";
import { cn } from "@/lib/utils";

const StatsSection = () => {
    return (
        <section 
            id="traguardi" 
            className="w-screen min-h-[350px] h-fit bg-fixed bg-center bg-cover bg-no-repeat relative "
            style={{
                backgroundImage: 'url(/parallax/parallax-1.png)',
            }}
        >
            <div className="w-full min-h-[350px] bg-[rgb(40,40,40,0.9)] flex flex-col md:flex-row items-center justify-center gap-8 text-white py-8">
                <StatsShowcase />
            </div>
        </section>
    );
}

const StatsShowcase = () => {
    return (
            STATS.map((stat, i) => (
                <div
                    key={stat.label + i}
                    className="w-full flex flex-col justify-between items-center"
                >
                    <i
                        className={cn(
                            stat.icon,
                            "text-brand text-4xl lg:text-[3.5rem]"
                        )}
                    />
                    <div className="mt-3 md:mt-4 text-2xl lg:text-3xl font-extrabold">{stat.value}</div>
                    <div className="mt-1 md:mt-2 text-sm lg:text-base">{stat.label}</div>
                </div>
            ))
    );
};


export default StatsSection;