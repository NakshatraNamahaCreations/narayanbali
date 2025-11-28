"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/styles/NavbarPuja.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home", match: "/" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function NavbarPuja() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  // ✅ Scroll listener for top sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.18;
      setShowSticky(window.scrollY > triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ NAVBAR 1 (Hero Overlay Navigation) */}
      <header
        className={`${styles.heroNav} ${
          showSticky ? styles.heroNavHidden : ""
        }`}
      >
        <nav className={styles.heroNavInner}>
          <div className={styles.heroLeft}>
            <Link href="/" className={styles.logoLink}>
              <h4 className={styles.logoText}>Narayan Bali</h4>
            </Link>

            <button
              className={styles.mobileToggle}
              onClick={() => setOpen(!open)}
            >
              <span className={open ? styles.lineTopOpen : ""} />
              <span className={open ? styles.lineMidOpen : ""} />
              <span className={open ? styles.lineBotOpen : ""} />
            </button>
          </div>

          <ul className={`${styles.heroMenu} ${open ? styles.menuOpen : ""}`}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${styles.heroMenuLink} ${
                    pathname === l.match ? styles.active : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ✅ NAVBAR 2 (Sticky Navbar on Scroll) */}
      <div
        className={`${styles.scrollNav} ${
          showSticky ? styles.scrollNavVisible : ""
        }`}
      >
        <div className={styles.scrollNavInner}>

          {/* Logo */}
          <Link href="/" className={styles.scrollLogoLink}>
            <h4 className={styles.logoText}>Narayan Bali</h4>
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.scrollMenu}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${styles.scrollMenuLink} ${
                    pathname === l.match ? styles.scrollActive : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ✅ Backdrop for Mobile Menu */}
      <div
        className={`${styles.mobileBackdrop} ${
          open ? styles.mobileBackdropShow : ""
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
