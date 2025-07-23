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

        // Brute force initial home activation
        const homeSection = document.getElementById("home");
        if (homeSection) {
            const rect = homeSection.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInView) {
                setActiveSection("#home");
            }
        }

        return () => observer.disconnect();
    }, []);

    return (
        <ActiveSectionContext.Provider value={activeSection}>
            {children}
        </ActiveSectionContext.Provider>
    );
};
