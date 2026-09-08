"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Programs", href: "#programs" },
    { label: "Schedule", href: "#schedule" },
    { label: "BMI Calc", href: "#calculator" },
    { label: "Trainers", href: "#trainers" },
    { label: "Pricing", href: "#pricing" },
    { label: "Facility", href: "#facility" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="var(--accent-neon)"
                stroke="var(--accent-neon)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span>FIT</span>
            <span className={styles.logoAmp}>&</span>
            <span>FLEX</span>
          </div>
        </a>

        {/* Live Status Pill */}
        <div className={styles.liveStatus}>
          <span className="live-dot"></span>
          <span>Open 24/7</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className={styles.navActions}>
          <button
            onClick={() => onOpenBooking("7-Day Free Trial Pass")}
            className="btn btn-primary btn-sm"
          >
            Claim Free Pass
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barActiveTop : ""}`}></span>
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barActiveMid : ""}`}></span>
            <span className={`${styles.bar} ${mobileMenuOpen ? styles.barActiveBot : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking("7-Day Free Trial Pass");
            }}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "16px" }}
          >
            Claim Free 7-Day Pass
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
