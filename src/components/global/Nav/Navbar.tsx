"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { NAV_ITEMS } from "@/constants";
import NavLink from "@/components/global/Nav/NavLink";
import Logo from "@/components/global/Logo";
import Sidebar from "@/components/global/Nav/Sidebar";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const half = Math.ceil(NAV_ITEMS.length / 2);
    const leftItems = NAV_ITEMS.slice(0, half);
    const rightItems = NAV_ITEMS.slice(half);

    return (
        <nav className="w-full h-[66px] md-h-[80px] xl:h-[95px] bg-[rgb(40,40,40,0.8)] fixed text-background z-50 px-6 lg:px-8 flex items-center">
            {/* Mobile layout (before lg) */}
            <div className="flex w-full items-center justify-between lg:hidden">
                <Logo />
                <button onClick={() => setIsSidebarOpen(true)} className="cursor-pointer">
                    <Menu size={28} />
                </button>
            </div>

            {/* Desktop layout (lg and up) */}
            <div className="hidden lg:flex w-full max-w-[1440px] mx-auto items-center justify-between">
                {/* Left group */}
                <div className="flex flex-1 justify-start gap-[clamp(3rem,4vw,5rem)] xl:gap-[8rem]">
                    {leftItems.map(({ id, label }) => (
                        <NavLink key={label} label={label} id={id} />
                    ))}
                </div>

                {/* Center logo */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Right group */}
                <div className="flex flex-1 justify-end gap-[clamp(3rem,4vw,5rem)] xl:gap-[8rem]">
                    {rightItems.map(({ id, label }) => (
                        <NavLink key={label} label={label} id={id} />
                    ))}
                </div>
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </nav>
    );
};

export default Navbar;
