"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center">
                {/* 404 Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-indigo-200 rounded-full w-64 h-64 opacity-50 blur-3xl"></div>
                    </div>
                    <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-brand relative z-10">
                        404
                    </h1>
                </motion.div>

                {/* Main message */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                >
                    Pagina non trovata
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg text-gray-600 max-w-xl mx-auto mb-10"
                >
                    Sembra che la pagina che stai cercando non esista.
                    <br />
                    Potrebbe non essere mai esistita o essere stata spostata.
                </motion.p>

                {/* Pulsante di ritorno */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="/" passHref>
                        <Button
                            size="lg"
                            className="cursor-pointer group bg-gradient-to-r from-orange-600 to-brand text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Torna alla pagina iniziale
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;