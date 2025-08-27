"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../assets/logo.png";
import "../styles/components/Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Title */}
        <Link href="/" className="logo-group">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={54} // Explicit integer height
            className="logo"
            priority // Ensures loading="eager" for LCP
            unoptimized={process.env.NODE_ENV === "development"} // Avoid Turbopack optimization issues
          />
          <span className="logo-title">VÄLLINGBY KÖRAKADEMIN</span>
        </Link>

        {/* Navigation links */}
        <div className="nav-center">
          <ul className="nav-links">
            <li className={pathname === "/" ? "current-menu-item" : ""}>
              <Link href="/">HEM</Link>
            </li>
            <li className={pathname === "/priser" ? "current-menu-item" : ""}>
              <Link href="/priser">PRISER</Link>
            </li>
            <li className={pathname === "/om-oss" ? "current-menu-item" : ""}>
              <Link href="/om-oss">OM OSS</Link>
            </li>
            <li className={pathname === "/kontakta-oss" ? "current-menu-item" : ""}>
              <Link href="/kontakta-oss">KONTAKTA OSS</Link>
            </li>
          </ul>
        </div>

        {/* Right side: client-only stuff */}
        <NavbarClientExtras />
      </div>
    </nav>
  );
}

function NavbarClientExtras() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    // Sync theme to cookie for future server-side rendering
    if (theme && typeof window !== "undefined") {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1-year expiry
    }
    // Handle resize for mobile menu
    const handleResize = () => {
      if (window.innerWidth > 1400) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  if (!isMounted) return null; // Render nothing during SSR

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="nav-right">
        {/* Theme toggle */}
        <div className="theme-toggle desktop-toggle">
          <input
            type="checkbox"
            id="theme-switch-desktop"
            checked={resolvedTheme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <label htmlFor="theme-switch-desktop" className="switch-label">
            <span className="switch-left-icon">☀️</span>
            <span className="switch"></span>
            <span className="switch-right-icon">🌙</span>
          </label>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu active">
          <ul>
            <li><Link href="/" onClick={toggleMenu}>HEM</Link></li>
            <li><Link href="/priser" onClick={toggleMenu}>PRISER</Link></li>
            <li><Link href="/om-oss" onClick={toggleMenu}>OM OSS</Link></li>
            <li><Link href="/kontakta-oss" onClick={toggleMenu}>KONTAKTA OSS</Link></li>
          </ul>
          <div className="theme-toggle mobile-toggle">
            <input
              type="checkbox"
              id="theme-switch-mobile"
              checked={resolvedTheme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <label htmlFor="theme-switch-mobile" className="switch-label">
              <span className="switch-left-icon">☀️</span>
              <span className="switch"></span>
              <span className="switch-right-icon">🌙</span>
            </label>
          </div>
        </div>
      )}
    </>
  );
}