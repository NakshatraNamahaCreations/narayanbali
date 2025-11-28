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

export default function RitualProcess7() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Pithru Dosha Pooja – Powerful Ritual for Ancestral Liberation
            </h2>
            <p className={styles.aboutText}>
            Pithru​‍​‌‍​‍‌​‍​‌‍​‍‌ Dosha is an important ancestral imbalance, which is an area of studies in Vedic astrology, causing, among other things, the delayed situation of different life areas, and repeated emotional heaviness and obstacles. Pithru Dosha Pooja in Srirangapatna is widely chosen by the families to get relief from such discomfort and regain the lost equilibrium through the correct performance of the ancestor rituals. This holy pooja is a means of bringing tranquility to those who have passed away and freeing the living from the blockages that cause them to suffer.
            </p>
            <p className={styles.aboutText}>
            It is believed that Pithru Dosha Pooja in Srirangapatna, performed with devotion, cleanses the ancestral energy field of the family, thus making the blessings of the ancestors flow once again without any hindrances. Many devotees thus attain spiritual and emotional relief upon the completion of this powerful ​‍​‌‍​‍‌​‍​‌‍​‍‌ritual.
           </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/gallery3.png"
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
                src="/images/pitrudosha.png"
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
          What is Pithru Dosha Pooja??
            </h2>
            <p className={styles.aboutText}>
            Pithru​‍​‌‍​‍‌​‍​‌‍​‍‌ Dosha is a condition that arises when the ancestors are not comfortable due to lack of proper rites, deaths that happened abruptly, or shraddha karma that was missed. Pithru Dosha Pooja in Srirangapatna is the way to do the poojas that the soul needs for freedom. The ancestors are given food and help through the offerings, mantras, and pindas.
             </p>
           <p className={styles.aboutText}>
           The Pithru Dosha Pooja in Srirangapatna is mainly done to get rid of the ancestral disturbances that block the flow of good health, marriage, finances, and emotional stability. This is one of the strongest antidotes for a family's welfare to be back ​‍​‌‍​‍‌​‍​‌‍​‍‌again.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
