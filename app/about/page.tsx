"use client";
import React from "react";
import PtHeader from "@/components/PtHeader";
import PtAbout from "@/components/AboutPage/PtAbout";
import ThreeScene from "@/components/Three/ThreeScene";

export default function About() {
    return(
        <>
            <main className="flex flex-col min-h-screen">
                <PtHeader
                    title="PortGis"
                    subtitle="Yogis"
                    titleClick="/"
                    linkAbout="/about"
                    linkProject="#"
                    linkContact="#"
                />
                <ThreeScene/>
            </main>
        </>
    )
}