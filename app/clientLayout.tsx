"use client"; // This component is interactive and runs on the client

import React, { useState, useEffect } from "react";
import { Providers } from "./providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only on the client, after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Before the client-side app is ready, show a loading screen.
  // This prevents hydration mismatches and handles theme loading.
  if (!isMounted) {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen bg-secondary-yogis dark:bg-secondary-yogis/50">
            <div className="flex flex-col items-center justify-center h-[50vh] min-w-screen bg-accent-yogis dark:bg-accent-yogis/50">
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-black dark:text-white">Loading...</h1>
            </div>
        </main>
    );
  }

  // Once mounted, render the actual app content wrapped in providers
  return <Providers>{children}</Providers>;
}