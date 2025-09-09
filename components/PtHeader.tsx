import React from "react";
import PtThemeToggleButton from "./Button/PtThemeToggleButton";

interface PtHeaderProps {
    title?: string;
    subtitle?: string;
    image?: string;
    link?: string;
    children?: React.ReactNode;
}

export default function PtHeader(props: PtHeaderProps) {
    return (
        <>
            <div className="flex justify-around pt-[10px]">
                <h1 className="text-2xl text-[#ffffff]">{props.title}</h1>
                <h1 className="text-2xl text-[#ffffff]">{props.subtitle}</h1>
                <PtThemeToggleButton />
            </div>
        </>
    )
}