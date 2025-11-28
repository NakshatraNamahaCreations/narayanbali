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

export default function RitualProcess6() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Sarpa Dosha Nivarana – Powerful Ritual for Naga Dosha Removal
            </h2>
            <p className={styles.aboutText}>
           
            Sarpa​‍​‌‍​‍‌​‍​‌‍​‍‌ Dosha is an influential astronomical flaw listed in the holy books that can confuse a person's life by causing slowdowns, obstacles, and emotional agitation. A lot of families go through Sarpa Dosha Nivarana in Srirangapatna to get rid of the bad effects of killing or hurting the naga devatas either in a previous or the current life. This holy sacrament re-establishes equilibrium in the horoscope and aids the return of serenity in the interpersonal, professional, and spiritual fields of life. </p>
            <p className={styles.aboutText}>
            After taking a Sarpa Dosha Nivarana in Srirangapatna, the devotees become calm, get more stable, and the karmic blockages which are the causes of marriage, health, and childbirth are removed. The ceremony is very powerful in releasing the plagued that have been there for a long time and cannot be solved by ordinary ​‍​‌‍​‍‌​‍​‌‍​‍‌methods.
           </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/sarpa1.jpg"
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
                src="/images/sarpa3.jpg"
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
          What is Sarpa Dosha Nivarana?
            </h2>
            <p className={styles.aboutText}>
            Sarpa​‍​‌‍​‍‌​‍​‌‍​‍‌ Dosha is an astrological condition that is related to the planetary positions or the karmas of the past-life that indicate the disturbance of energies of serpents or that of Naga Devatas. Neutralizing these energies and creating spiritual harmony through Sarpa Dosha Nivarana ritual in Srirangapatna is what the performance of this Dosha is all about. The ceremony consists of invoking Naga Devatas and offering them the things that are meant to bring back the divine equilibrium.
          </p>
           <p className={styles.aboutText}>
           The main reason for doing Sarpa Dosha Nivarana in Srirangapatna is to cleanse one's karmic field and lessen the astrological influences that cause marriage, childbirth, health, and emotional well-being problems. One of the most powerful methods given by Vedic astrology is ​‍​‌‍​‍‌​‍​‌‍​‍‌this.
           </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
