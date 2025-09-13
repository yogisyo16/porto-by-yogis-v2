import React from "react";
import PtThemeToggleButton from "./Button/PtThemeToggleButton";
import { motion } from "framer-motion";

interface PtHeaderProps {
    title?: string;
    subtitle?: string;
    titleClick?: string;
    image?: string;
    linkAbout?: string;
    linkProject?: string;
    linkContact?: string;
}

export default function PtHeader(props: PtHeaderProps) {
    return (
        <>
            <nav className="flex justify-around items-center pt-[20px] pb-[20px] bg-secondary-yogis">
                <a href={ props.titleClick }>
                    <h1 className="text-2xl text-[#ffffff] hover:cursor-pointer">{props.title}</h1> {/* This is going to be Logo */}
                </a>
                <div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href={props.linkAbout} className="ml-4 border-0 p-[8px] rounded-[100px] text-base-yogis font-bold hover:text-black hover:cursor-pointer hover:bg-gray-200">About</a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href={props.linkProject} className="ml-4 border-0 p-[8px] rounded-[100px] text-base-yogis font-bold hover:text-black hover:cursor-pointer hover:bg-gray-200">Projects</a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href={props.linkContact} className="ml-4 border-0 p-[8px] rounded-[100px] text-base-yogis font-bold hover:text-black hover:cursor-pointer hover:bg-gray-200">Contact</a>
                    </motion.button>
                </div>
                <PtThemeToggleButton /> {/* Dark Mode and also image will be here */}
            </nav>
        </>
    )
}