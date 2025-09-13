"use client";
import React from "react";
import PtHeader from "@/components/PtHeader";
import PyAbout from "@/components/AboutPage/PyAbout";

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
                <PyAbout />
            </main>
        </>
    )
}