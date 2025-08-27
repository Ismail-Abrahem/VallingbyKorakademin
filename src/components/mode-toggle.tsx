"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sync theme to cookie for server-side rendering
    if (theme && typeof window !== "undefined") {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1-year expiry
    }
  }, [theme]);

  if (!mounted) {
    return (
      <div className="theme-toggle">
        <div style={{ width: "60px", height: "30px", background: "#ccc", borderRadius: "15px" }}></div>
      </div>
    );
  }

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label htmlFor="theme-switch" className="switch-label">
        <span className="switch-left-icon">☀️</span>
        <span className="switch"></span>
        <span className="switch-right-icon">🌙</span>
      </label>
    </div>
  );
}