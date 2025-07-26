"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext<string>("");

export const useActiveSection = () => useContext(ActiveSectionContext);

type Props = {
    children: React.ReactNode;
};

export const ActiveSectionProvider = ({ children }: Props) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
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
    }, []);

    return (
        <ActiveSectionContext.Provider value={activeSection}>
            {children}
        </ActiveSectionContext.Provider>
    );
};
