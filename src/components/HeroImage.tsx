"use client";

import { motion } from "framer-motion";

const HeroImage = () => {
    return (
        <div
            id="home"
            className="w-screen min-h-[500px] h-[44vw] relative bg-center bg-cover text-background"
            style={{
                backgroundImage: "url('/carousel/slide-1.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better text contrast */}

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-10 transform -translate-y-1/2"
            >
                <h1 className="text-xl md:text-4xl lg:text-[2.8rem] font-bold max-w-[90vw] leading-tight drop-shadow-xl">
                    Soccorso Stradale &<br />
                    Autotrasporto per Conto Terzi
                </h1>
            </motion.div>
        </div>
    );
};

export default HeroImage;
