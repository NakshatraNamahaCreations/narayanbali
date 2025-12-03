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

export default function RitualProcess() {
  return (
    <>

    <section className={styles.section}>
    <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left content */}
          <div className="col-lg-7">
            <h2 className={styles.aboutHeading}>
            Narayan Bali Pooja – A Sacred Remedy for Pitrudosha

            </h2>
            <p className={styles.aboutText}>
            The​‍​‌‍​‍‌​‍​‌‍​‍‌ Srirangapatna Narayan Bali Pooja is a highly significant Vedic ceremony that finds reference in the Garuda Purana. It is offered as a solace to the spirits of ancestors who are roaming and have died in an unnatural manner or untimely. By performing this divine ritual, not only does it make the atmosphere of the family unit congenial again, but it also liberates one from the Pitrudosh that has been causing the blockages.

             </p>
             <p className={styles.aboutText}>
             Neighbourhood families can consider the performance of the Srirangapatna Narayan Bali Pooja in case they have been experiencing constant obstacles, health issues that come up suddenly, marriage delays, financial problems or if negative happenings keep recurring and are caused by energies of their ancestors who have not been settled.
              
            </p>
          </div>
    
          {/* Right image */}
          <div className="col-lg-5">
            <div className={styles.aboutImageCard}>
              <Image
                src="/images/narayanbali12.png"
                alt="Narayana Bali Pooja "
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
                src="/images/narayana1.jpg"
                alt="Narayana Bali Pooja "
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
            Narayan Bali Pooja – A Sacred Remedy for Pitrudosha

            </h2>
            <p className={styles.aboutText}>
            The​‍​‌‍​‍‌​‍​‌‍​‍‌ Srirangapatna Narayan Bali Pooja is a highly significant Vedic ceremony that finds reference in the Garuda Purana. It is offered as a solace to the spirits of ancestors who are roaming and have died in an unnatural manner or untimely. By performing this divine ritual, not only does it make the atmosphere of the family unit congenial again, but it also liberates one from the Pitrudosh that has been causing the blockages.

             </p>
             <p className={styles.aboutText}>
             Neighbourhood families can consider the performance of the Srirangapatna Narayan Bali Pooja in case they have been experiencing constant obstacles, health issues that come up suddenly, marriage delays, financial problems or if negative happenings keep recurring and are caused by energies of their ancestors who have not been settled.
              
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
