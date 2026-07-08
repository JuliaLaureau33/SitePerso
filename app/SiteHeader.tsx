"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <Link href="/" className="logo" style={{ textDecoration: "none" }} onClick={closeMenu}>
        <span className="first-name">Julia</span>
        <span className="last-name">Laureau</span>
      </Link>
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link href="/mon-histoire" onClick={closeMenu}>Mon histoire</Link></li>
        <li><Link href="/#offrandes" onClick={closeMenu}>Offrandes</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
