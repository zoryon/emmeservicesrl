"use client";

import { motion } from "framer-motion";
import CurvedArrowTurnDown from "../icons/CurvedArrowTurnDown";

const HeroImageSection = () => {
    return (
        <div
            id="home"
            className="w-screen min-h-[500px] h-[45.5vw] relative bg-black bg-center bg-cover text-background"
            style={{
                backgroundImage: "url('/carousel/hero-1.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text contrast */}

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-6 md:left-18 transform -translate-y-1/2"
            >
                <h1 className="text-xl md:text-3xl 2xl:text-[2.9rem] uppercase max-w-[90vw] tracking-tighter drop-shadow-xl">
                    <span>Soccorso Stradale &</span><br />
                    <span className="text-brand font-bold">Autotrasporto per Conto Terzi</span>
                </h1>
            </motion.div>

            {/* Curved Scroll Arrow */}
                <motion.div
                    className="absolute bottom-20 left-6 md:left-16 text-brand text-sm text-bold flex items-center gap-2"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <CurvedArrowTurnDown />
                    <span className="text-xs">Scroll down</span>
                </motion.div>
        </div>
    );
};

export default HeroImageSection;
