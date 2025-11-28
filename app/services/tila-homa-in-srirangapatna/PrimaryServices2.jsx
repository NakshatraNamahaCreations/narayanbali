"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/PrimaryServices.module.css";

const FEATURES = [
  {
    id: 1,
    title: "Online Puja Booking",
    desc: "Book authentic Vedic Pujas performed by experienced Pandits from sacred locations like Srirangapatna and Kashi.",
    href: "/online-puja-booking",
   bg: "/images/kalasha (1).png",
    icon: "/images/kalasha (2).png",
  },
  {
    id: 2,
    title: "Temple Offerings (Seva)",
    desc: "Send your prayers and make offerings directly to major temples with our temple connection and Seva services.",
    href: "/temple-offerings",
    bg: "/images/wat-phra-kae.png",
    icon: "/images/wat-phra-kaew.png",
  },
  {
    id: 3,
    title: "Astrology Consultation",
    desc: "Get personalized astrology readings and remedies for health, career, marriage, and dosha corrections from trusted astrologers.",
    href: "/astrology-consultation",
    bg: "/images/astrolog.png",
    icon: "/images/astrology.png",
  }


];

export default function PrimaryServices2({
  videoId = "https://www.youtube.com/@VivekSharma-Purohit", // <-- just change this to update YouTube
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className={`${styles.hero} position-relative`} style={{ marginTop: 95 }}>
        <div className="container">
          <div className="row align-items-center">
            {/* text */}
            <div className="col-md-10">
              <p className={`${styles.kicker} text-uppercase mb-2`}>Our Primary Services</p>
              <h1 className={`${styles.heading} mb-0`}>
                Comprehensive Puja Services – Book Online, Connect with Temples,
                and Gift Divine Blessings!
              </h1>
            </div>

            {/* play button */}
            <div className="col-md-2 d-flex justify-content-md-end justify-content-start mt-4 mt-md-0">
              <button
                className={styles.playBtn}
                aria-label="Play introduction video"
                onClick={() => setOpen(true)}
              >
                <span className={styles.playPulse} />
                <span className={styles.playIcon}>▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* wave bottom (SVG) */}
        <div className={styles.wave}>
          {/* <svg viewBox="0 0 283.5 27.8" preserveAspectRatio="none">
            <path
              className={styles.waveFill}
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4
              c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7
              c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
            />
          </svg> */}
        </div>
      </section>

      {/* FEATURE CARDS (broken top look) */}
      <section className={`${styles.features} pt-0`}>
        <div className="container">
          <div className="row g-4">
            {FEATURES.map((f) => (
              <div key={f.id} className="col-lg-4">
                <article className={`${styles.card} text-center`}>
                  <div
                    className={styles.cardBg}
                    style={{ backgroundImage: `url(${f.bg})` }}
                    aria-hidden="true"
                  />
                  <div className={styles.cardInner}>
                    {f.icon && (
                      <div className="mb-3">
                        <Image src={f.icon} alt="" width={66} height={66} />
                      </div>
                    )}
                    <h5 className="mb-2">{f.title}</h5>
                    <p className="mb-3">{f.desc}</p>
                    <a className={`${styles.link} btn btn-link p-0`} href={f.href}>
                      Know More
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE MODAL */}
      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
       <div className={styles.embedWrap}>
  <iframe
    src="https://www.youtube-nocookie.com/embed/VsPFuJGKvTE?autoplay=1&rel=0"
    title="Intro video"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
    loading="lazy"
  />
</div>

          </div>
        </div>
      )}
    </>
  );
}
