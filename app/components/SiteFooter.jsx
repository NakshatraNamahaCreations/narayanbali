"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/SiteFooter.module.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Latest News", href: "/news" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const news = [
  {
    date: "16 Oct, 2020",
    title: "We’re Providing the Quality Services",
    href: "/news/quality-services",
    thumb: "/images/construction4.jpg",
  },
  {
    date: "16 Oct, 2020",
    title: "We’re Providing the Quality Services",
    href: "/news/quality-services-2",
    thumb: "/images/Infrastructurejpg.jpg",
  },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* TOP */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand + blurb + hotline */}
          <div className="col-lg-4">
            <div className={styles.brandRow}>
            
              <span className={styles.brand}>SHREE GREEN</span>
            </div>

            <p className={styles.desc}>
              Shree Green delivers end-to-end EPCM solutions, from concept design to commissioning, with expertise in engineering, procurement, project, and construction management.
            </p>

            <hr className={styles.hr} />

            <div className={styles.hotline}>
              <span className={styles.hotIcon} aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.2c1.2 2.4 3 4.3 5.4 5.4l1.8-1.8c.2-.2.5-.3.8-.2 1 .3 2 .5 3.1.5.4 0 .7.3.7.7V19c0 .4-.3.7-.7.7C9.9 19.7 4.3 14.1 4.3 7.6c0-.4.3-.7.7-.7H8c.4 0 .7.3.7.7 0 1 .2 2.1.5 3.1.1.3 0 .6-.2.8l-1.4 1.4z" />
                </svg>
              </span>
              <div>
                <div className={styles.hotLabel}>CALL ANYTIME</div>
                <a className={styles.hotNumber} href="tel:92666888000">
                  92 666 888 0000
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6">
            <h6 className={styles.colTitle}>Explore</h6>
            <ul className={styles.linkList}>
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={styles.link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="col-lg-3 col-md-6">
            <h6 className={styles.colTitle}>Latest News</h6>
           <h5 className={styles.heading}>Address</h5>

  <address className={styles.addressBlock}>
    <ul className={styles.contactList}>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+918970901034" className={styles.contactLink}>89709 01034</a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+918660171434" className={styles.contactLink}>86601 71434</a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+919448467213" className={styles.contactLink}>94484 67213</a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          className={styles.icon}
        />
        <a
          href="mailto:pooja.services.srirangapatna@gmail.com"
          className={styles.contactLink}
        >
          pooja.services.srirangapatna@gmail.com
        </a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
          alt="Location"
          className={styles.icon}
        />
        <span>Sri Vivekananda Sharma HR,Nimishambha Temple, Srirangapatna Fort Mandya, Srirangapatna, Karnataka 571438</span>
      </li>
    </ul>
  </address>
          </div>

          {/* Contact card */}
          <div className="col-lg-3">
            <div className={styles.contactCard}>
              <h6 className="mb-3">Contact</h6>

              <div className="d-flex align-items-start gap-3 mb-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.2 10-6.2V6a2 2 0 00-2-2zm0 4.3l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V8.3z" />
                  </svg>
                </span>
                <div>shreegreen@company.com</div>
              </div>

              {/* <div className="d-flex align-items-start gap-3 mb-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM3 11h2a1 1 0 010 2H3a1 1 0 010-2zm16 0h2a1 1 0 010 2h-2a1 1 0 010-2z" />
                  </svg>
                </span>
                <div>Mon – Sat 8:00 AM – 6:00 PM</div>
              </div> */}

              <div className="d-flex align-items-start gap-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <div>
                 Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className={styles.copy}>© Copyright 2020 by Company.com</div>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.sbtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.3-3.6 3.4-3.6.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className={styles.sbtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.27 4.27 0 001.87-2.36 8.53 8.53 0 01-2.7 1.03 4.26 4.26 0 00-7.26 3.88A12.1 12.1 0 013 5.15a4.26 4.26 0 001.32 5.68 4.22 4.22 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.17 4.3 4.3 0 01-1.92.07 4.26 4.26 0 003.97 2.95A8.54 8.54 0 012 19.54a12.06 12.06 0 006.53 1.91c7.84 0 12.13-6.49 12.13-12.12 0-.18 0-.36-.01-.54A8.66 8.66 0 0022.46 6z"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className={styles.sbtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.3 2C7.1 2 4 5.4 4 9.1c0 2.2 1.2 4.9 3.1 5.8.3.1.5 0 .6-.3.1-.2.3-.9.4-1.1.1-.3 0-.4-.2-.7-.6-.7-1-1.7-1-2.8 0-2.7 2-5.1 5.4-5.1 2.9 0 4.6 1.7 4.6 4.1 0 3.2-1.4 5.9-3.4 5.9-1.1 0-2-1-1.7-2.2.3-1.4.9-2.8.9-3.8 0-.9-.5-1.6-1.5-1.6-1.2 0-2.1 1.2-2.1 2.8 0 1 .3 1.6.3 1.6s-1 4-1.2 4.8c-.4 1.5-.1 3.2 0 3.4.1.1.2.1.3 0 1.5-2 1.9-2.4 2.3-3.8.2-.7 1-3 .1-3.4.5 1 1.9 1.9 3.4 1.9 2.5 0 4.4-2.6 4.4-6.1C18.6 5.1 15.9 2 12.3 2z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.sbtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
