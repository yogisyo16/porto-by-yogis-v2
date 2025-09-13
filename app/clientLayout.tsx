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
        <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
            <h1 className="text-2xl font-bold text-black dark:text-white">Loading...</h1>
        </main>
    );
  }

  // Once mounted, render the actual app content wrapped in providers
  return <Providers>{children}</Providers>;
}