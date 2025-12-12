"use client";

import Image from "next/image";
import styles from "../styles/StatsGrid.module.css";

const STATS = [
  {
    id: 1,
    value: "5000+",
    label: "PUJAS AND HOMAS PERFORMED",
    icon: "/images/fire.png", // put your orange flame icon here
    alt: "Flame icon"
  },
  {
    id: 2,
    value: "20+",
    label: "CITIES SERVED ACROSS KARNATAKA",
    icon: "/images/skyscraper.png",
    alt: "Diya lamp icon"
  },
  {
    id: 3,
    value: "10+",
    label: "NARAYANA BALI & Pitru KARMAS DAILY",
    icon: "/images/kalasha (1).png",
    alt: "Om sacred symbol icon"
  },
];

export default function StatsGrid() {
  return (
    
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {STATS.map((item) => (
          <div key={item.id} className={styles.card}>
            {/* badge circle with icon */}
            <div className={styles.badge}>
              <Image
                src={item.icon}
                alt={item.alt}
                width={68}
                height={68}
                priority
              />
            </div>

            {/* content box */}
            <div className={styles.body}>
              <div className={styles.value}>{item.value}</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
