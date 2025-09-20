"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function PtThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors"
    >
      {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}