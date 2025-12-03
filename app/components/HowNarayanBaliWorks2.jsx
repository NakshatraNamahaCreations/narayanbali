"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/VedicAshirvaadSection.module.css";

const HowNarayanBaliWorks2 = () => {
  return (
    <section className={`${styles.section} py-5`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <div className={styles.content}>
              {/* <p className={`${styles.highlightText} mb-2`}>
  FOR PEACE & LIBERATION OF ANCESTRAL SOULS
</p> */}
 <h1 className={`${styles.heading} mb-3`}>
  <span>Narayan Bali Pooja</span> – A Sacred Ritual for Ancestral Peace & Liberation
</h1>
<p className={styles.desc}>
  Narayan Bali Pooja is a sacred Vedic ritual performed to help departed souls 
  attain peace and liberation. As described in the Garuda Purana, it is conducted 
  when a soul has left the body unnaturally or remains bound by unfulfilled desires, 
  causing disturbances for its descendants. This pooja offers prayers to Lord Vishnu 
  (Narayan) to release these souls from suffering and guide them toward moksha.
  It also removes Pitru Dosha, brings harmony to family life, and restores 
  positive energy in one’s home and lineage. Performing Narayan Bali with 
  devotion helps bring peace, prosperity, and spiritual balance to the family.
</p>

              <Link href="/contact-us" className="btn btn-danger mt-3 px-4 py-2">
                Know More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center position-relative mt-5 mt-md-0">
            <div className={styles.imageWrapper}>
                <Image
              src="/images/narayana3.jpg"
              alt="Narayan Bali Puja"
              width={600}
              height={400}
              className={`img-fluid rounded shadow ${styles.image}`}
            />

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowNarayanBaliWorks2;
