"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeDebug() {
  const { theme, systemTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("Theme debug:", {
      theme,
      systemTheme,
      resolvedTheme,
      localStorage: localStorage.getItem("theme"),
      cookie: document.cookie.includes("theme=") ? document.cookie : "No theme cookie",
    });
  }, [theme, systemTheme, resolvedTheme]);

  return null;
}