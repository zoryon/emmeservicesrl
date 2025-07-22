import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const CustomSeparator = ({ className }: { className?: string }) => {
    return (
        <Separator className={cn(
            "bg-brand my-5",
            className ?? "!w-[60px] !h-[2px]",
        )} />
    );
}

export default CustomSeparator;