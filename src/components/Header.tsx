"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <Image src="/images/logo-color.png" alt="Bond Air Cargo" width={180} height={60} priority style={{ height: 'auto' }} />
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
          <Link href="/#contact" className="nav-cta" onClick={closeMenu}>Quote</Link>
        </nav>
      </div>
    </header>
  );
}
