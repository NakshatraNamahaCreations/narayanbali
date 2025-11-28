"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/PrimaryServices.module.css";

/* ---------- keep your FEATURES data ---------- */
const FEATURES = [
  {
    id: 1,
    title: "Online Puja Booking",
    desc: "Book authentic Vedic Pujas performed by experienced Pandits from sacred locations like Srirangapatna and Kashi.",
    href: "/contact-us",
    bg: "/images/kalasha (1).png",
    icon: "/images/kalasha (2).png",
  },
  {
    id: 2,
    title: "Temple Offerings (Seva)",
    desc: "Send your prayers and make offerings directly to major temples with our temple connection and Seva services.",
    href: "/contact-us",
    bg: "/images/wat-phra-kae.png",
    icon: "/images/wat-phra-kaew.png",
  },
  {
    id: 3,
    title: "Astrology Consultation",
    desc: "Get personalized astrology readings and remedies for health, career, marriage, and dosha corrections from trusted astrologers.",
    href: "/contact-us",
    bg: "/images/astrolog.png",
    icon: "/images/astrology.png",
  },
];
/* --------------------------------------------- */

export default function PrimaryServices({ videoId = "VsPFuJGKvTE", heroImage = null }) {
  // modal state
  const [open, setOpen] = useState(false);
  const iframeRef = useRef(null);

  // thumbnail: prefer heroImage prop, else youtube thumbnail
  const thumb = heroImage || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // open modal — autofocus and optionally start playing by setting src with autoplay
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // remove iframe src to stop playback immediately
    if (iframeRef.current) iframeRef.current.src = "";
  };

  // When modal opens, set iframe src with autoplay=1
  useEffect(() => {
    if (open && iframeRef.current) {
      // add modestbranding=1 and rel=0 to avoid suggested videos; autoplay=1 to start
      iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
    }
  }, [open, videoId]);

  // keyboard close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* HERO with centered play */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroImageWrap} role="button" onClick={handleOpen} onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" ") handleOpen(); }} tabIndex={0} aria-label="Play intro video">
            <Image
              src={thumb}
              alt="Intro video"
              fill
              style={{ objectFit: "cover" }}
              unoptimized={true}
              onError={(e)=>{ e.currentTarget.src = `/images/background2.png`; }}
            />
            <div className={styles.overlay} />
            <button className={styles.centerPlay} aria-label="Play video" onClick={handleOpen}>
              <svg viewBox="0 0 68 48" width="46" height="46" aria-hidden="true">
                <path d="M66.52 7.06a8.17 8.17 0 0 0-5.75-5.78C56.83 0 34 0 34 0s-22.83 0-26.77 1.28A8.17 8.17 0 0 0 1.48 7.06 85.85 85.85 0 0 0 0 24a85.85 85.85 0 0 0 1.48 16.94 8.17 8.17 0 0 0 5.75 5.78C11.17 48 34 48 34 48s22.83 0 26.77-1.28a8.17 8.17 0 0 0 5.75-5.78A85.85 85.85 0 0 0 68 24a85.85 85.85 0 0 0-1.48-16.94z" fill="#fff"/>
                <path d="M45 24 27 14v20z" fill="#ff4040"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES grid (cards) */}
      <section className={styles.features}>
        <div className="container">
          <div className="row g-4">
            {FEATURES.map((f) => (
              <div key={f.id} className="col-lg-4">
                <article className={styles.card}>
                  <div className={styles.cardBg} style={{ backgroundImage: `url(${f.bg})` }} aria-hidden="true" />
                  <div className={styles.cardInner}>
                    {f.icon && (
                      <div className="mb-3">
                        <Image src={f.icon} alt="" width={66} height={66} />
                      </div>
                    )}
                    <h5 className="mb-2">{f.title}</h5>
                    <p className="mb-3">{f.desc}</p>
                    <a className={styles.link} href={f.href}>Know More</a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal: full screen centered video */}
      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Video player">
          <div className={styles.modalBox}>
            <button className={styles.modalClose} onClick={handleClose} aria-label="Close video">✕</button>
            <div className={styles.embedWrap}>
              <iframe
                ref={iframeRef}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                src="" // set by effect when open
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
