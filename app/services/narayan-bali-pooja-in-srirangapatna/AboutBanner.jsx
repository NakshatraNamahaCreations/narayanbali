"use client";

import Link from "next/link";
import styles from "../../styles/AboutBanner.module.css";


export default function AboutBanner() {
  return (
    <section className={styles.banner} aria-label="About Narayan Bali">
      {/* DARK OVERLAY IS IN CSS */}

      <div className={`container ${styles.inner}`}>
        {/* Breadcrumbs */}
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.sep}>/</span>
          {/* <span>Our Services</span> */}
          <Link href="/services">Our Services</Link>
          <span className={styles.sep}>/</span>
          <span>Narayan Bali Pooja in Srirangapatna</span>
        </p>

        {/* Title + subtitle */}
        <h1 className={styles.title}>Narayan Bali Pooja in Srirangapatna – Complete Ritual for Pitrudosh Nivarana        </h1>

        <p className={styles.subtitle}>
          We bring sacred rituals closer to every devotee — performed with devotion, discipline, and the blessings of tradition.
        </p>
      </div>
    </section>
  );
}
