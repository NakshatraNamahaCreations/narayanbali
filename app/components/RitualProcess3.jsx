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

export default function RitualProcess3() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Tila Homa – Powerful Ritual for ancestral Peace & Dosha Removal

            </h2>
            <p className={styles.aboutText}>
            When​‍​‌‍​‍‌​‍​‌‍​‍‌ ancestral energies are not settled or when life keeps on giving unexplained delays, obstacles, or emotional burdens, families decide to go for the sacred Vedic ritual called Tila Homa. Tila Homa is widely performed by devotees in Srirangapatna as it is considered a very effective act of releasing the karma of the ancestors with sesame seeds, ghee, and mantras. This potent homa is said to radiate the negative energies and thus bring spiritual progress to the lineage.
            </p>
             <p className={styles.aboutText}>
             The reason of performing Tila Homa in Srirangapatna is to renew the ancestral energies that might be causing the lack of prosperity, health, relationships, or emotional well-being of the living family. When the fire takes the tila offerings, the ancestors get subtle food and blessings, which help them move to higher lokas and give their grace back to the ​‍​‌‍​‍‌​‍​‌‍​‍‌descendants.
             </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/tilahoma1.png"
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
                src="/images/tilahoma2.png"
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
          What is Tila Homa?

            </h2>
            <p className={styles.aboutText}>
            Tila​‍​‌‍​‍‌​‍​‌‍​‍‌ Homa is a Vedic fire ritual from the ancient times that is performed with sesame seeds (tila), which are regarded as the most purifying of all the offerings in shraddha karma. Devotees come to Srirangapatna to perform Tila Homa when they want to be free from the dosha of their ancestors, the negative karmic influences, or the disturbance resulting from incomplete rites. The homa is accompanied by the chanting of potent mantras that call upon the divine energies to purify the spiritual path of the ancestors.
             </p>
             <p className={styles.aboutText}>
             as a matter of fact, the throwing of sesame seeds into the agni during the ritual is a symbol of nourishment, purification, and liberation. If Tila Homa in Srirangapatna is carried out with faith, then it is a win-win situation for the souls of the departed as well as for the living ones who thereby gain emotional stability, spiritual clarity, and ​‍​‌‍​‍‌​‍​‌‍​‍‌peace.
             </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
