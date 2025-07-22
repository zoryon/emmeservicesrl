"use client";

import { cn } from "@/lib/utils";

import { useActiveSection } from "@/hooks/use-active-section";

type NavLinkProps = {
    label: string;
    id: string;
    onClick?: () => void;
};

const NavLink = ({ label, id, onClick }: NavLinkProps) => {
    const href = `#${id}`;
    const activeHash = useActiveSection();
    const isActive = activeHash === href;

    return (
        <a
            onClick={onClick}
            href={href}
            className={cn(
                "capitalize hover:text-brand duration-300 transition-all font-bold text-lg",
                isActive && "text-brand"
            )}
        >
            {label}
        </a>
    );
};

export default NavLink;