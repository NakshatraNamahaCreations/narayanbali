"use client";

import Image from "next/image";
import styles from "../styles/GallerySection.module.css";

const GALLERY_ITEMS = [
  {
    src: "/images/gallery1.png",
    alt: "Narayana Bali Puja at Gosaighat, Srirangapatna",
    label: "Puja Samagri Arrangement",
  },
  {
    src: "/images/gallery2.png",
    alt: "Thila Homa being performed by Purohits",
    label: "Blessings through Sacred Homa",
  },
  {
    src: "/images/gallery3.png",
    alt: "Kumbh Vivaha ritual setup",
    label: "Narayana Bali puja",
  },

  {
    src: "/images/gallery5.png",
    alt: "Group Photo",
    label: "Group Photo",
  },
  {
    src: "/images/gallery6.png",
    alt: "Sacred Homa ritual with devotees",
    label: "Thila Homa",
  },
    {
    src: "/images/gallery7.png",
    alt: "Group Photo",
    label: "Group Photo",
  },
  {
    src: "/images/gallery8.png",
    alt: "Sarpa Sanskar Puja at the Ghat",
    label: "Pinda pradhana",
  },
  {
    src: "/images/gallery9.png",
    alt: "Sacred Homa ritual with devotees",
    label: "Kadali vivaha",
  },
    {
    src: "/images/gallery10.png",
    alt: "Kadali Vivaha ceremony",
    label: "Kadali vivaha",
  },
  {
    src: "/images/gallery12.png",
    alt: "Sarpa Sanskar Puja at the Ghat",
    label: "kumbh vivah",
  },

];

export default function GallerySection() {
  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={`${styles.heading} mb-3`}>
          Our <span>Gallery</span>
        </h2>
        <p className={styles.intro}>
          A glimpse of the sacred rituals, Homas, and Pujas performed by our Purohits at Srirangapatna and Gosaighat.
        </p>

        <div className={styles.grid}>
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.src} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.img}
                />
              </div>
              <figcaption className={styles.caption}>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
