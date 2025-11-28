"use client";

import Image from "next/image";
import styles from "../styles/FeaturedPujas.module.css";

const PUJAS = [
  {
    id: 1,
    title: "Narayan Bali Pooja",
    img: "/images/grid6.png",
    gradient: "orange",
  },
 
      {
    id: 8,
    title: "pithru dosha pooja",
      img: "/images/gallery3.png",
    gradient: "orange",
  },
       {
    id: 7,
    title: "Pinda Pradhana",
    img: "/images/grid1.png",
    gradient: "orange",
  },
  {
    id: 2,
    title: "Thila Homa",
    img: "/images/grid2.png",
    gradient: "orange",
  },
  {
    id: 3,
    title: "Kumbh Vivaha",
    img: "/images/grid3.png",
    gradient: "sun",
  },
  {
    id: 4,
    title: "Kadali Vivaha",
    img: "/images/grid4.png",
    gradient: "orange",
  },
    {
    id: 5,
    title: "Sarpa Sanskar",
    img: "/images/grid5.png",
    gradient: "orange",
  },
];

export default function FeaturedPujas1() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Major Pujas and Homas</h2>
          <p className={styles.subtitle}>
            We offer comprehensive spiritual and Vedic services for all kinds of religious occasions both auspicious and inauspicious performed by experienced and qualified priests.
          </p>
        </div>

        <div className={styles.grid}>
          {PUJAS.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${styles[item.gradient]}`}
            >
              {/* corner icons (optional) */}
              <span className={`${styles.corner} ${styles.tl}`}>卐</span>
              <span className={`${styles.corner} ${styles.tr}`}>ॐ</span>
              <span className={`${styles.corner} ${styles.bl}`}>卐</span>
              <span className={`${styles.corner} ${styles.br}`}>ॐ</span>

              {/* circular image with lotus ring */}
              <div className={styles.picWrap}>
                <div className={styles.lotusRing} aria-hidden="true" />
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.pic}
                  sizes="(max-width: 768px) 80vw, 360px"
                  priority={item.id === 1}
                />
              </div>

              {/* title band */}
              <div className={styles.caption}>
                <h3 className={styles.captionText}>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
