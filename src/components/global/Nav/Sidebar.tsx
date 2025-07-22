import { NAV_ITEMS } from "@/constants";
import NavLink from "@/components/global/Nav/NavLink";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Sidebar panel */}
            <div className="w-[75%] max-w-sm bg-sidebar p-6 flex flex-col">
                <button
                    onClick={onClose}
                    className="w-full mb-6 text-white flex justify-end items-center cursor-pointer"
                >
                    <X size={30} className="text-brand" />
                </button>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
                    <div className="flex flex-col gap-6 mt-4">
                        {NAV_ITEMS.map((item) => (
                            <NavLink key={item} label={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div
                className="flex-1 bg-black/60"
                onClick={onClose}
            />
        </div>
    );
};

export default Sidebar;
