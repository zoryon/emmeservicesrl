"use client";

import { motion } from "framer-motion";

const VerifyWarning = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-indigo-200 rounded-full w-64 h-64 opacity-50 blur-3xl"></div>
                    </div>
                    <div className="h-24 flex items-center justify-center">
                        <motion.div
                            animate={{
                                rotate: 360,
                                transition: {
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                            className="w-16 h-16 border-t-4 border-l-4 border-brand rounded-full"
                        />
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                >
                    Verifica in corso...
                </motion.h2>
            </div>
        </div>
    );
}

export default VerifyWarning;