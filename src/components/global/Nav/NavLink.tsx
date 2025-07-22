"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    label: string;
};

const NavLink = ({ label }: NavLinkProps) => {
    const pathname = usePathname();

    const isActive = () => {
        const slug = label.toLowerCase().replace(/\s+/g, "-");
        const href = slug === "home" ? "/" : `/${slug}`;
        return pathname === href;
    };

    return (
        <Link
            href={label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`}
            className={cn(
                "capitalize hover:text-brand duration-300 transition-all font-bold text-lg",
                isActive() && "text-brand",
            )}
        >
            {label}
        </Link>
    );
};

export default NavLink;