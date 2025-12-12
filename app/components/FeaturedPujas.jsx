"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/FeaturedPujas.module.css";

const PUJAS = [

  {
    id: 1,
    title: "Narayan Bali Pooja",
    img: "/images/grid6.png",
    gradient: "orange",
    link: "/services/narayan-bali-pooja-in-srirangapatna"
  },
  {
    id: 8,
    title: "Pitru Dosha Pooja",
    img: "/images/gallery3.png",
    gradient: "orange",
    link: "/services/pitru-dosha-pooja-in-srirangapatna"
  },
  {
    id: 7,
    title: "Pinda Pradhana",
    img: "/images/grid1.png",
    gradient: "orange",
    link: "/services/pinda-pradhana-in-srirangapatna"
  },
  {
    id: 2,
    title: "Thila Homa",
    img: "/images/grid2.png",
    gradient: "orange",
    link: "/services/tila-homa-in-srirangapatna"
  },
  {
    id: 3,
    title: "Kumbh Vivaha",
    img: "/images/grid3.png",
    gradient: "sun",
    link: "/services/kumbha-vivaha-in-srirangapatna"
  },
  {
    id: 4,
    title: "Kadali Vivaha",
    img: "/images/grid4.png",
    gradient: "orange",
    link: "/services/kadali-vivaha-in-srirangapatna"
  },
  {
    id: 5,
    title: "Sarpa Sanskar",
    img: "/images/grid5.png",
    gradient: "orange",
    link: "/services/sarpa-dosha-nivarana-in-srirangapatna"
  },


];

export default function FeaturedPujas() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Pujas</h2>
          <p className={styles.subtitle}>
            Here are some of the most popular Pujas and Homas booked on our portal
          </p>
        </div>

        <div className={styles.grid}>
           {PUJAS.map((item) => (
    <Link key={item.id} href={item.link} className={styles.cardLink}>
      <article className={`${styles.card} ${styles[item.gradient]}`}>
        
        <span className={`${styles.corner} ${styles.tl}`}>卐</span>
        <span className={`${styles.corner} ${styles.tr}`}>ॐ</span>
        <span className={`${styles.corner} ${styles.bl}`}>卐</span>
        <span className={`${styles.corner} ${styles.br}`}>ॐ</span>

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

        <div className={styles.caption}>
          <h3 className={styles.captionText}>{item.title}</h3>
        </div>
      </article>
    </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
