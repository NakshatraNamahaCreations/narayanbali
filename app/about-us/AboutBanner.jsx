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
          <span>About Us</span>
        </p>

        {/* Title + subtitle */}
        <h1 className={styles.title}>About Narayan Bali</h1>

        <p className={styles.subtitle}>
          Learn more about our mission to make authentic Vedic Pujas and Homas
          easily accessible for every devotee.
        </p>
      </div>
    </section>
  );
}
