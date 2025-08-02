"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ActiveSectionContext = createContext<string>("");

export const useActiveSection = () => useContext(ActiveSectionContext);

type Props = {
    children: React.ReactNode;
};

export const ActiveSectionProvider = ({ children }: Props) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const pathname = usePathname();

    useEffect(() => {
        setActiveSection(""); // Reset active section on path change
        if (pathname !== "/") return; // Only observe sections on the home page

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry.target.id, entry.isIntersecting, entry.intersectionRatio);
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        if (id) {
                            setActiveSection(`#${id}`);
                        }
                    }
                });
            },
            {
                rootMargin: "-30% 0px -30% 0px", 
                threshold: 0.2, 
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <ActiveSectionContext.Provider value={activeSection}>
            {children}
        </ActiveSectionContext.Provider>
    );
};
