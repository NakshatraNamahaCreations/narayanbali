// app/components/DualNavbar.jsx
"use client";

import { useEffect, useMemo, useRef, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaSearch, FaMapMarkerAlt
} from "react-icons/fa";

/* ---------- EXTRACTED CHILD COMPONENT (static, outside) ---------- */
const NavInner = memo(function NavInner({ menu, pill = false }) {
  return (
    <div className={`d-flex align-items-center w-100 ${pill ? "px-3 py-3" : ""}`}>
      <Link href="/" className="me-3 me-lg-4 d-inline-flex align-items-center text-decoration-none">
        <Image src="/images/logo.png" alt="Logo" width={166} height={50} priority />
      </Link>

      <ul className="navbar-nav flex-row gap-3 gap-lg-4 mx-auto text-uppercase fw-semibold">
        {menu.map((m) => (
          <li key={m.href} className="nav-item">
            <Link href={m.href} className="nav-link nav-link-puja">
              {m.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="d-none d-md-flex align-items-center gap-2">
        <a className="btn btn-danger px-4 rounded-3" href="/user-registration">SIGN UP</a>
        <a className="btn btn-danger px-4 rounded-3" href="/login">SIGN IN</a>
      </div>
    </div>
  );
});
/* ----------------------------------------------------------------- */

export default function DualNavbar({ heroId = "hero-banner" }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [stuck, setStuck] = useState(false);
  const heroRef = useRef(null);

  const menu = useMemo(
    () => [
      { href: "/", label: "HOME" },
      { href: "/about-us", label: "ABOUT US" },
      { href: "/services", label: "SERVICES" },
      { href: "/gift-a-puja", label: "GIFT A PUJA" },
      { href: "/pujas", label: "PUJAS" },
      { href: "/temples", label: "TEMPLES" },
      { href: "/contact-us", label: "CONTACT US" },
    ],
    []
  );

  useEffect(() => {
    const el = document.getElementById(heroId);
    if (!el) return;
    heroRef.current = el;

    const obs = new IntersectionObserver(([entry]) => {
      setStuck(!entry.isIntersecting);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [heroId]);

  return (
    <>
      {/* Topbar */}
      <div className="puja-topbar text-white d-none d-lg-flex justify-content-between align-items-center px-4">
        <div className="d-flex align-items-center gap-2">
          <FaMapMarkerAlt />
          <span>Telangana | Andhra Pradesh | Bengaluru | USA</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="https://facebook.com" className="text-white"><FaFacebookF /></a>
          <a href="https://twitter.com" className="text-white"><FaTwitter /></a>
          <a href="https://instagram.com" className="text-white"><FaInstagram /></a>
          <a href="https://youtube.com" className="text-white"><FaYoutube /></a>
          <button
            className="btn btn-link p-0 text-white"
            onClick={() => setSearchVisible((s) => !s)}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Overlay nav (over banner) */}
      <div className={`puja-nav-overlay ${stuck ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <nav className="bg-white rounded-pill shadow-sm mx-auto puja-nav-shell">
          <NavInner menu={menu} pill />
        </nav>
      </div>

      {/* Sticky nav (after scroll) */}
      <div className={`puja-nav-sticky ${stuck ? "show" : ""}`}>
        <nav className="bg-white shadow-sm puja-nav-sticky-inner">
          <NavInner menu={menu} />
        </nav>
      </div>

      {searchVisible && (
        <div className="puja-search-overlay" onClick={() => setSearchVisible(false)}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <input type="text" className="form-control form-control-lg" placeholder="Search for..." />
            <button className="btn btn-danger px-4" onClick={() => setSearchVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
