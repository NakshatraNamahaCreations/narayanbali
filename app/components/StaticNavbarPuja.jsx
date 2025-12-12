"use client";
import { useRouter } from "next/navigation"; 
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/NavbarPuja.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },

  {
    href: "/services",
    label: "Services",
    submenu: [
      { href: "/services/narayan-bali-pooja-in-srirangapatna", label: "Narayan Bali" },
      { href: "/services/pinda-pradhana-in-srirangapatna", label: "Pinda Pradhana" },
      { href: "/services/tila-homa-in-srirangapatna", label: "Tila Homa" },
      { href: "/services/kumbha-vivaha-in-srirangapatna", label: "Kumbha Vivaha" },
      { href: "/services/kadali-vivaha-in-srirangapatna", label: "Kadali Vivaha" },
      { href: "/services/sarpa-dosha-nivarana-in-srirangapatna", label: "Sarpa Dosha Nivarana" },
      { href: "/services/pitru-dosha-pooja-in-srirangapatna", label: "Pitru Dosha Pooja" },
    ],
  },

  { href: "/contact-us", label: "Contact Us" },
];

export default function StaticNavbarPuja() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile main menu open
  const [mobileDropdown, setMobileDropdown] = useState(false); // mobile "Services" dropdown open
  const [desktopOpen, setDesktopOpen] = useState(false); // desktop "Services" dropdown open

  const timerRef = useRef(null);
  const HOVER_CLOSE_DELAY = 500; // 2500ms = 2.5 seconds (change to 2000 or 3000 as needed)

  const isActiveParent = pathname?.startsWith("/services");

  // open immediately and cancel any pending close timer
  const openDesktop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setDesktopOpen(true);
  };

  // start delayed close
  const startCloseTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDesktopOpen(false);
      timerRef.current = null;
    }, HOVER_CLOSE_DELAY);
  };

  // immediate close (used by cleanup or if you want instant close)
  const closeDesktopImmediate = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setDesktopOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* FIXED NAVBAR */}
      <header className={styles.fixedNavWrapper}>
        <nav className={styles.fixedNav}>
          <Link href="/" className={styles.logoLink}>
            <h4 className={styles.logoText}>Narayan Bali</h4>
          </Link>

          {/* DESKTOP MENU */}
          <ul className={styles.menu}>
            {NAV_LINKS.map((link) => {
              // Normal menu links
              if (!link.submenu) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.menuLink} ${
                        pathname === link.href ? styles.active : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              // Services dropdown (Desktop) — use JS state to show/hide
              return (
                <li
                  key={link.href}
                  className={`${styles.menuItem} ${styles.hasDropdown}`}
                  // listen on both parent and the dropdown to keep it open while cursor moves
                  onMouseEnter={openDesktop}
                  onMouseLeave={startCloseTimer}
                >
                <Link
  href={link.href}
  className={`${styles.menuLink} ${isActiveParent ? styles.active : ""}`}
  onFocus={openDesktop}
  onBlur={startCloseTimer}
  onMouseEnter={openDesktop}
  onMouseLeave={startCloseTimer}
  aria-haspopup="true"
  aria-expanded={desktopOpen}
>
  {link.label}
  <span className={styles.caret} />
</Link>

                  {/* Dropdown — also keep mouse handlers on the dropdown itself */}
                  <ul
                    className={`${styles.dropdown} ${desktopOpen ? styles.dropdownOpen : ""}`}
                    onMouseEnter={openDesktop}
                    onMouseLeave={startCloseTimer}
                    // allow keyboard users to tab into the list
                    role="menu"
                  >
                    {link.submenu.map((sub) => (
                      <li key={sub.href} role="none">
                        <Link
                          href={sub.href}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => {
                            // if mobile is open, close the mobile menu (safe no-op for desktop)
                            setOpen(false);
                            // also optionally close the desktop dropdown quickly after click
                            closeDesktopImmediate();
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          {/* MOBILE BURGER ICON */}
          <button
            className={styles.burger}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileMenuList}>
          {NAV_LINKS.map((link) => {
            // Normal menu links
            if (!link.submenu) {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.mobileMenuLink}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            // Services dropdown (Mobile)
            return (
              <li key={link.href}>
                <button
                  className={styles.mobileMenuLink}
                  onClick={() => setMobileDropdown((s) => !s)}
                  aria-expanded={mobileDropdown}
                >
                  {link.label} ▾
                </button>

                <ul
                  className={`${styles.mobileDropdown} ${
                    mobileDropdown ? styles.mobileDropdownOpen : ""
                  }`}
                >
                  {link.submenu.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={styles.mobileSubLink}
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
