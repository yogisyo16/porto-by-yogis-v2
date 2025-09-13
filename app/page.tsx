"use client";
import React, { useState, useEffect, useCallback } from "react";
import PtHeader from "@/components/PtHeader";
import PtBody from "@/components/MainPage/PtBody";

export default function Profile() {
    return(
        <main className="flex flex-col min-h-screen">
            <PtHeader
                title="PortGis"
                subtitle="Yogis"
                titleClick="/"
                linkAbout="/about"
                linkProject="#"
                linkContact="#"
            />
            <PtBody />
        </main>
    )
}