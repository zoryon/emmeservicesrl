"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { NAV_ITEMS } from "@/constants";
import NavLink from "@/components/global/Nav/NavLink";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
};

const backdropVariants = {
    hidden: { opacity: 0, pointerEvents: "none" },
    visible: { opacity: 1, pointerEvents: "auto" },
};

const Sidebar = ({ isOpen, onClose }: Props) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Sidebar panel */}
                    <motion.div
                        className="fixed top-0 left-0 bottom-0 w-[75%] max-w-sm bg-sidebar p-6 flex flex-col z-50 lg:hidden"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <button
                            onClick={onClose}
                            className="w-full mb-6 text-white flex justify-end items-center cursor-pointer"
                        >
                            <X size={30} className="text-brand" />
                        </button>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
                            <div className="flex flex-col gap-6 mt-4">
                                {NAV_ITEMS.map((item) => (
                                    <NavLink key={item} label={item} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                        onClick={onClose}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2, delay: 0.2 }}
                    />
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
