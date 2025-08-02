"use client";

import { motion } from "framer-motion";

const CurvedArrowTurnDown = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 60 60"
            strokeWidth={2}
            className="size-12 md:size-20 -rotate-20"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            <path
                d="M55 5 C20 10, 10 40, 25 55"
                stroke="#f1ca48"
                strokeWidth={2}
                fill="none"
                markerEnd="url(#arrowhead)"
            />
            
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="0"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth"
                >
                    <path d="M0,0 L0,6 L6,3 Z" fill="#f1ca48" stroke="#f1ca48" />
                </marker>
            </defs>
        </motion.svg>
    );
}

export default CurvedArrowTurnDown;