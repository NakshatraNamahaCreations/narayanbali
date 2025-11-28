// app/components/HeroSlider.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./HeroSlider.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: "/images/background5.png",
      mobileImage: "/images/background5-mobile.png",
      alt: "NARAYAN BALI POOJA IN SRIRANGPATNA",
      title: "NARAYAN BALI POOJA IN SRIRANGPATNA",
      desc:
        "Perform the sacred Narayan Bali Pooja at the holy Goshiya Ghat in Srirangapatna to help restless souls attain peace and remove obstacles caused by unfulfilled ancestral rites.",
    },
    {
      image: "/images/background16.png",
      mobileImage: "/images/background16-mobile.png",
      alt: "PITRU DOSHA NIVARANA POOJA IN SRIRANGAPATNA",
      title: "PITRU DOSHA NIVARANA POOJA IN SRIRANGAPATNA",
      desc:
        "Resolve ancestral imbalances and remove the negative effects of Pitru Dosha. This pooja helps ensure spiritual peace for departed souls while bringing growth and wellbeing to the living generation.",
    },
    {
      image: "/images/background6.png",
      mobileImage: "/images/background6-mobile.png",
      alt: "PINDA PRADHANA, TILA TARPANA AND TILA HOMA IN SRIRANGAPATNA",
      title: "PINDA PRADHANA, TILA TARPANA AND TILA HOMA IN SRIRANGAPATNA",
      desc:
        "Perform sacred Pinda Pradhana, Tila Tarpana and Tila Homa rituals in Srirangapatna — the divine confluence of faith and tradition. Seek peace for departed souls, remove ancestral doshas, and invite spiritual harmony into your family lineage.",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000, // 10s
    speed: 500,
    fade: false,
    dots: false,
    arrows: true,
    infinite: true,
    swipe: true,
    draggable: true,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <div className={styles.heroCarouselWrapper}>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className={styles.carouselSlide}>
            <div className={styles.carouselBannerSlide}>
              {/* Desktop / Mobile Images: show/hide by CSS */}
              <div className={styles.desktopOnly} aria-hidden={false}>
                <Image
                  src={slide.image}
                  alt={slide.alt ?? `Slide ${i + 1}`}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={styles.carouselBannerImage}
                  quality={70}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.mobileOnly} aria-hidden={false}>
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt ?? `Slide ${i + 1} (mobile)`}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={styles.carouselBannerImage}
                  quality={70}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.blackOverlay} />
              <div className={styles.carouselCaptionLeft} style={{ color: "#fff" }}>
                {i === 0 ? (
                  <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#fff" }}>
                    {slide.title}
                  </h2>
                ) : (
                  <h2 style={{ color: "#fff" }} className="display-6 fw-bold">
                    {slide.title}
                  </h2>
                )}
                <p style={{ color: "#fff" }}>{slide.desc}</p>

                <div className={styles.carouselButtons}>
                  <a href="tel:+918970901034" className={styles.glowButton}>
                    <FaPhoneAlt className={styles.glowIcon} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Clickable indicators */}
      <div className={styles.customIndicators}>
        {slides.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={styles.indicatorDot}
              style={{ cursor: "pointer" }}
              aria-label={`Go to slide ${i + 1}`}
              role="button"
            >
              <div
                className={`${styles.progressBarFill} ${isActive ? styles.fill : ""}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
