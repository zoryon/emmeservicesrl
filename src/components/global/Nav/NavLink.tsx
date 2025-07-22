"use client";

import { cn } from "@/lib/utils";

type NavLinkProps = {
    label: string;
    id: string;
};

const NavLink = ({ label, id }: NavLinkProps) => {
    const href = `#${id.toLowerCase().replace(/\s+/g, "-")}`;


    return (
        <a
            href={href}
            className={cn(
                "capitalize hover:text-brand duration-300 transition-all font-bold text-lg",
            )}
        >
            {label}
        </a>
    );
};

export default NavLink;