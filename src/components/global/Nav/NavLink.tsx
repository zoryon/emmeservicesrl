"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type NavLinkProps = {
    label: string;
    id: string;
    onClick?: () => void;
};

const NavLink = ({ label, id, onClick }: NavLinkProps) => {
    const href = `#${id.toLowerCase().replace(/\s+/g, "-")}`;
    const [activeHash, setActiveHash] = useState<string>("");

    useEffect(() => {
        const updateHash = () => {
            setActiveHash(window.location.hash);
        };

        // Initial set
        updateHash();

        // Listen for hash changes
        window.addEventListener("hashchange", updateHash);
        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

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