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

export default function RitualProcess5() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Kadali Vivaha in Srirangapatna – Powerful Ritual to Remove Manglik Dosha
            </h2>
            <p className={styles.aboutText}>
            Kadali​‍​‌‍​‍‌​‍​‌‍​‍‌ Vivaha is an astrological gift to the gods, which is done for those who have Mangal Dosha, a delay in marriage, or repeated problems in the relationship. a large number of devotees take the help of Kadali Vivaha at Srirangapatna because this sacrament contributes to the negation of adverse planetary effects and makes the person ready for a joyful married life. The invisible wedding with a banana tree (Kadali) is done as per Vedic rites to get rid of the karmic blockages which are the cause of no prospects of marriage.
            </p>
            <p className={styles.aboutText}>
            Quite a number of people, after the performance of Kadali Vivaha at Srirangapatna, report that they feel an emotional relief, get confidence, and notice an upswing of their stability in marriage-related matters. The rite is like a spiritual bath for the horoscope and it paves the way for the coming of a lucky ​‍​‌‍​‍‌​‍​‌‍​‍‌marriage.
            </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/kadhalivivaha.png"
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
                src="/images/kadhalivivaha2.png"
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
          What is Kadali Vivaha?
            </h2>
            <p className={styles.aboutText}>
            Kadali​‍​‌‍​‍‌​‍​‌‍​‍‌ Vivaha or Banana Tree Marriage is one of the most peculiar rituals in which a person is wed to a sacred Kadali (banana) plant. The reason of doing Kadali Vivaha in Srirangapatna is to get rid of the negative effect of Mangal Dosha or severe planetary positions that cause obstacles in the marriage.
           </p>
           <p className={styles.aboutText}>
           In the ceremony, the banana tree is a symbolic partner, which takes the dosha and thus the person can go to the real married life without astrological disturbances. The dosha is said to be removed after the Kadali Vivaha in Srirangapatna, thus giving the person’s marital journey a calm and harmonious ​‍​‌‍​‍‌​‍​‌‍​‍‌state.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
