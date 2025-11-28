"use client";

import Image from "next/image";
import styles from "../styles/RitualProcess.module.css";

const STEPS = [
  {
    id: 1,
    img: "/images/yagna.png",
    title: "Consultation",
    desc: "Discuss your puja requirements and select the most auspicious date for performing the ritual as per Vedic astrology.",
  },
  {
    id: 2,
    img: "/images/pooja.png",
    title: "Preparation",
    desc: "Our team prepares all puja materials (samagri), organizes timings, and ensures everything is ready for the ceremony.",
  },
  {
    id: 3,
    img: "/images/ritual.png",
    title: "Performance",
    desc: "The ritual is conducted at your home, temple, or holy site by our certified and experienced Vedic Purohits.",
  },
  {
    id: 4,
    img: "/images/hands.png",
    title: "Blessings",
    desc: "Receive Prasadam and guidance from our priests after the puja, inviting divine peace and spiritual prosperity.",
  },
];

export default function RitualProcess2() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Pinda Pradhana – Complete Ritual for Ancestors

            </h2>
            <p className={styles.aboutText}>
            It​‍​‌‍​‍‌​‍​‌‍​‍‌ is the custom of our forefathers, after their death, to implore their descendants to carry out the indispensable rites which will guide their souls to a serene abode and their release from the earthly ties. It is common for families to opt for Pinda Pradhana in Srirangapatna as the ceremony is considered to complete the final samskaras that facilitate the ancestors' transition to Pitru Loka. Through the offering of pindas with faith, the ones on earth render aid to the ones that have left for nourishment, blessings and moksha.
             </p>
             <p className={styles.aboutText}>
             There are situations, wherein people, that through the remembrance of their ancestral rites, which have not been completed, get an emotional blow or encounter impediments within their families. The act of loading Pinda Pradhana in Srirangapatna is an instrument in solving problems among the characters, reprieving from the past family’s karma, and assuring abundant blessings for the forthcoming lineage. It is an impeccable rite which turns into a token of honor, love and familial obligation to the souls that have ​‍​‌‍​‍‌​‍​‌‍​‍‌left.  
            </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/pindapradhana.png"
                alt="Mobile app & website development illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      
      </div>

      <br/> <br/>
      
      <div className="container-xl">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Our <span>Ritual Process</span>
          </h2>
          <p className={styles.subheading}>
            Every ceremony follows a sacred process to ensure authenticity,
            devotion, and divine blessings.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={step.img}
                  alt={step.title}
                  width={120}
                  height={120}
                  className={styles.iconImg}
                />
              </div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
              {/* <span className={styles.stepNum}>{step.id}</span> */}
            </div>
          ))}
        </div>
       
        <div className="row align-items-center g-5 mt-5">
          {/* Left content */}
          <div className="col-lg-5">
          <div className={styles.aboutImageCard}>
              <Image
                src="/images/pindapradhana2.png"
                alt="Mobile app & website development illustration"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                priority
                className={styles.aboutImage}
              />
            </div>
           
          </div>
    
          {/* Right image */}
          <div className="col-lg-7">
          <h2 className={styles.aboutHeading}>
          What is Pinda Pradhana?

            </h2>
            <p className={styles.aboutText}>
            After​‍​‌‍​‍‌​‍​‌‍​‍‌ death, as per Vedic texts, the soul keeps moving through various lokas and needs the correct offerings made by its descendants to be able to go peacefully. When it comes to the family, they perform Pinda Pradhana in Srirangapatna, if they feel like completing the shraddha karma which is like a kind of nourishment and support to their ancestors in the subtle realm. The pindas that are given stand for the food, the energy, and the love that are sent to the departed soul.
             </p>
             <p className={styles.aboutText}>
             The ancestors get the necessary spiritual support to let go of their old attachments due to the performance of Pinda Pradhana in Srirangapatna. By giving the pindas that are prepared from rice, sesame, ghee, and accompanied by mantras, the devotees make the soul a happy and comfortable guest in the worlds ​‍​‌‍​‍‌​‍​‌‍​‍‌beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
