"use client";

import Link from "next/link";
import styles from "../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HERO / BREADCRUMB */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>About Us</span>
          </p>
          <h1 className={styles.heroTitle}>About Puja Services</h1>
          <p className={styles.heroSub}>
            Connecting devotees with trusted Pandits, temples, and Vedic rituals
            for every important milestone in life.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={styles.section}>
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <h2 className={styles.heading}>Who We Are</h2>
              <p className={styles.text}>
                In today’s fast-paced world, finding the right Pandit for
                traditional Pujas, Homas, and Samskaras can be a challenge. Puja
                Services was started with a simple vision – to make authentic
                Hindu rituals easily accessible to families, wherever they are.
              </p>
              <p className={styles.text}>
                Our trusted panel of experienced Purohits and Priests performs
                rituals with complete Vedic authenticity, guiding devotees
                through every mantra and step. Whether it is a simple Griha
                Pravesha or a special Narayana Bali Puja, we ensure that every
                ceremony is conducted with devotion, clarity, and care.
              </p>
            </div>

            <div className="col-md-6">
              <div className={styles.cardHighlight}>
                <h3>Serving Devotees with Faith & Transparency</h3>
                <p>
                  From selecting auspicious Muhurtham to arranging Puja
                  Samagri, our team supports you throughout the process, so you
                  can focus fully on your prayers and family.
                </p>
                <ul>
                  <li>Verified & experienced Pandits</li>
                  <li>Multiple languages & traditions supported</li>
                  <li>Clear pricing with no hidden charges</li>
                  <li>Support before, during, and after the Puja</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <h2 className={styles.heading}>Our Mission</h2>
              <p className={styles.text}>
                To make Vedic rituals simple, accessible, and authentic for
                every devotee – whether they are in a metro city or a remote
                town – while honoring their family traditions and customs.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className={styles.heading}>Our Vision</h2>
              <p className={styles.text}>
                To become the most trusted platform for Puja booking and
                spiritual services, connecting devotees with the right Pandits,
                temples, and rituals for every life event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE TRUST US */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={`${styles.heading} text-center mb-4`}>
            Why People <span>Trust Us</span>
          </h2>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className={styles.trustCard}>
                <h3>Authentic Rituals</h3>
                <p>
                  All Pujas and Homas are performed as per Vedic procedures,
                  Shastras, and your specific family traditions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.trustCard}>
                <h3>Experienced Purohits</h3>
                <p>
                  Our Purohits are well-trained, knowledgeable, and take time
                  to explain the significance of each ritual.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.trustCard}>
                <h3>End-to-End Support</h3>
                <p>
                  From Puja consultation and Muhurtham selection to Samagri
                  arrangement, we take care of every detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionAlt}>
        <div className="container text-center">
          <h2 className={styles.heading}>Plan Your Next Puja with Us</h2>
          <p className={styles.textCenter}>
            Whether it is Narayana Bali, Thila Homa, Kumbh Vivaha, or a simple
            Satyanarayana Puja, we are here to guide you with sincerity and
            devotion.
          </p>
          <Link href="/book" className={styles.ctaBtn}>
            Book a Puja Now
          </Link>
        </div>
      </section>
    </main>
  );
}
