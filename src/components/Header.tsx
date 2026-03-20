"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="mark">BA</span> BOND AIR CARGO
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/#services" onClick={closeMenu}>Services</Link>
          <Link href="/#fleet" onClick={closeMenu}>Fleet</Link>
          <Link href="/#why-bond" onClick={closeMenu}>Why Bond</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
          <Link href="/#contact" className="nav-cta" onClick={closeMenu}>Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
