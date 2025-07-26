"use client";

import { cn, smoothScroll } from "@/lib/utils";

import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname, useRouter } from "next/navigation";

type NavLinkProps = {
    label: string;
    id: string;
    onClick?: () => void;
};

const NavLink = ({ label, id, onClick }: NavLinkProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const href = `/#${id}`;
    const activeHash = useActiveSection();
    const isActive = activeHash === `#${id}`;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) onClick();

        if (pathname === '/') {
            // If already inside home, perform a smooth scroll
            smoothScroll({ to: id});
        } else {
            // Otherwise navigate to page
            router.push(href);
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
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