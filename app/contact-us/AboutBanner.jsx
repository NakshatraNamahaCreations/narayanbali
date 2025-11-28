"use client";

import Link from "next/link";
import styles from "../styles/AboutBanner.module.css";

export default function AboutBanner() {
  return (
    <section className={styles.banner} aria-label="About Narayan Bali">
      {/* DARK OVERLAY IS IN CSS */}

      <div className={`container ${styles.inner}`}>
        {/* Breadcrumbs */}
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.sep}>/</span>
          <span>Contact Us</span>
        </p>

        {/* Title + subtitle */}
        <h1 className={styles.title}>Get in Touch with Us</h1>

        <p className={styles.subtitle}>
          Whether you wish to book a puja, ask about rituals, or need guidance from our priests — we’re here to help you with devotion and care.
        </p>
      </div>
    </section>
  );
}
