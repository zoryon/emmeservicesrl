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

        // DEBUG: Stampa tutte le sezioni trovate
        console.log("Sezioni trovate:", Array.from(sections).map(s => s.id));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        if (id) {
                            console.log("Sezione attiva:", id);
                            setActiveSection(`#${id}`);
                        }
                    }
                });
            },
            {
                rootMargin: "-30% 0px -30% 0px", // Area più ampia
                threshold: 0.2, // Soglia più bassa
            }
        );

        sections.forEach((section) => {
            console.log("Osservando sezione:", section.id);
            observer.observe(section);
        });

        // Forza l'attivazione iniziale della home
        const homeSection = document.getElementById("home");
        if (homeSection) {
            const rect = homeSection.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInView) {
                console.log("Home in view all'avvio");
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
