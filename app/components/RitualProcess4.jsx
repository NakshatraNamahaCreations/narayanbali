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

export default function RitualProcess4() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Kumbha Vivaha  – Powerful Ritual to Remove Manglik Dosha & Marriage Obstacles
            </h2>
            <p className={styles.aboutText}>
            If​‍​‌‍​‍‌​‍​‌‍​‍‌ marriage situations become troublesome, and relationship issues keep repeating, and horoscope matters painfully affect your life, then you can still see many people who take their families for the sacred ceremony called Kumbha Vivaha. People carry out Kumbha Vivaha at Srirangapatna to get rid of Mangal Dosha and other astrological imbalances that hamper marital harmony. This tiny wedding event helps in the removal of negative planetary influences and in the preparation of the person for a joyful married life.
            </p>
             <p className={styles.aboutText}>
             People spiritually purify their birth charts by doing Kumbha Vivaha in Srirangapatna and thus, they can be sure that their forthcoming marriage will be filled with peace, positivity, and the blessings of God. The ceremony gets the emotional reservoir of the participants strong, stable, and harmonious which is ideal for a successful ​‍​‌‍​‍‌​‍​‌‍​‍‌union.
             </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/kumbhvivha.png"
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
                src="/images/kumbavivaha2.png"
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
          What is Kumbha Vivaha?
            </h2>
            <p className={styles.aboutText}>
            Kumbha​‍​‌‍​‍‌​‍​‌‍​‍‌ Vivaha is a symbolic marriage which is carried out literally when a person has a strong Mangal Dosha, Naga Dosha, or some astrological combinations that cause delay in marriage. The reason for having Kumbha Vivaha in Srirangapatna is to get rid of the negative karmic influence associated with Mars or other distressing grahas.
             </p>
             <p className={styles.aboutText}>
             as per this rite, the person is ceremonially wedded to a pot (kumbha), a banana tree, or a silver idol as per the priest's direction. after Kumbha Vivaha in Srirangapatna is over, the dosha on the planet is considered to be neutralized and hence the person is free to enter into marital ​‍​‌‍​‍‌​‍​‌‍​‍‌life.
              </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
