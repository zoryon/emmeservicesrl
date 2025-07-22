import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ADVANTAGES } from "@/constants/advantages.constants";

const AdvantagesList = () => {
    return (
        <div className="mt-6">
            <Separator />
            <ul className="mt-2">
                {ADVANTAGES.map(({ text, bold, tail }, i) => (
                    <div key={i}>
                        <li className="flex items-center gap-3 text-base my-2">
                            <Check className="text-brand" aria-hidden="true" />
                            <span>
                                {text}{" "}
                                {bold && <strong>{bold}</strong>}{" "}
                                {tail}
                            </span>
                        </li>
                        {i < ADVANTAGES.length - 1 && <Separator />}
                    </div>
                ))}
            </ul>
            <Separator />
        </div>
    );
}

export default AdvantagesList;