"use client";

import Image from "next/image";
import styles from "../styles/FeaturedPujas2.module.css";

const PUJAS = [
  {
    id: 1,
    title: "Narayan Bali Pooja",
    img: "/images/grid6.png",
    gradient: "orange",
    desc: "Performed to relieve souls suffering due to untimely or unnatural deaths, helping them attain peace and liberation.",
  },
  {
    id: 8,
    title: "Pithru Dosha Pooja",
    img: "/images/gallery3.png",
    gradient: "orange",
    desc: "A ritual to remove ancestral curses and seek blessings from forefathers for family harmony and prosperity.",
  },
  {
    id: 7,
    title: "Pinda Pradhana",
    img: "/images/grid1.png",
    gradient: "orange",
    desc: "An offering of rice balls (pindas) to departed ancestors to help their souls find peace and move toward moksha.",
  },
  {
    id: 2,
    title: "Thila Homa",
    img: "/images/grid2.png",
    gradient: "orange",
    desc: "A sacred fire ritual performed to absolve sins of ancestors and grant peace to wandering or unsatisfied souls.",
  },
  {
    id: 3,
    title: "Kumbh Vivaha",
    img: "/images/grid3.png",
    gradient: "sun",
    desc: "A symbolic marriage ceremony conducted to remove the effects of Mangal Dosha or other astrological imbalances.",
  },
  {
    id: 4,
    title: "Kadali Vivaha",
    img: "/images/grid4.png",
    gradient: "orange",
    desc: "A special pooja where the person is married to a banana plant to nullify malefic planetary influences before real marriage.",
  },
  {
    id: 5,
    title: "Sarpa Sanskar",
    img: "/images/grid5.png",
    gradient: "orange",
    desc: "A powerful ritual performed to remove the effects of Naga Dosha and seek divine blessings from serpent deities.",
  },

];

export default function FeaturedPujas2() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Sacred Pujas We Perform</h2>
          <p className={styles.subtitle}>
            Our experienced Vedic priests perform each ritual with devotion,
            authenticity, and adherence to sacred scriptures.
          </p>
        </div>

        <div className={styles.grid}>
          {PUJAS.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${styles[item.gradient]}`}
            >
              {/* decorative corners */}
              <span className={`${styles.corner} ${styles.tl}`}>卐</span>
              <span className={`${styles.corner} ${styles.tr}`}>ॐ</span>

              {/* circular image */}
              <div className={styles.picWrap}>
                <div className={styles.lotusRing} aria-hidden="true" />
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={styles.pic}
                  sizes="(max-width: 768px) 80vw, 360px"
                />
              </div>

              {/* content */}
              <div className={styles.textBlock}>
                <h3 className={styles.captionText}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
