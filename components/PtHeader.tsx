import React from "react";
import PtThemeToggleButton from "./Button/PtThemeToggleButton";

interface PtHeaderProps {
    title?: string;
    subtitle?: string;
    image?: string;
    linkAbout?: string;
    linkProject?: string;
    linkContact?: string;
}

export default function PtHeader(props: PtHeaderProps) {
    return (
        <>
            <nav className="flex justify-around items-center pt-[10px]">
                <h1 className="text-2xl text-[#ffffff] hover:cursor-pointer">{props.title}</h1> {/* This is going to be Logo */}
                <div>
                    <button>
                        <a href={props.linkAbout} className="ml-4 border-0 p-[8px] rounded-[100px] hover:text-black hover:cursor-pointer hover:bg-gray-200">About</a>
                        <a href={props.linkProject} className="ml-4 border-0 p-[8px] rounded-[100px] hover:text-black hover:cursor-pointer hover:bg-gray-200">Projects</a>
                        <a href={props.linkContact} className="ml-4 border-0 p-[8px] rounded-[100px] hover:text-black hover:cursor-pointer hover:bg-gray-200">Contact</a>
                    </button>
                </div>
                <PtThemeToggleButton />
            </nav>
        </>
    )
}