"use client";
import Image from "next/image";
import styles from "../styles/HowNarayanBaliWorks.module.css";

export default function HowNarayanBaliWorks() {
  return (
    <section className={`${styles.section} py-5`}>
      <div className="container-fluid py-4">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <Image
              src="/images/narayanbali2.png"
              alt="Narayan Bali Puja"
              width={700}
              height={400}
              className={`img-fluid rounded shadow ${styles.image}`}
            />
          </div>

          {/* RIGHT TEXT */}
       <div className="col-md-6">
 <h2 className={`${styles.heading} mb-3`}>
  Who We <span>Are</span>
</h2>

<p className={`${styles.desc} mb-3`}>
  In a world that moves faster every day, staying rooted in faith and tradition is not always easy.
  Many devotees struggle to find the right Pandit or Purohit who can perform sacred rituals with true devotion and authenticity. That’s where we come in — bringing spiritual guidance closer to you.
</p>

<p className={`${styles.desc} mb-3`}>
  At Sri Vivekananda Sharma Purohith Srirangapatna, our mission is to preserve the sanctity of Vedic rituals while making them accessible to every devotee, regardless of location or background.
  We bridge the gap between tradition and convenience, helping families perform their spiritual duties with purity and peace of mind.
</p>

<p className={`${styles.desc} mb-3`}>
  Situated in the holy town of Srirangapatna, Karnataka, we are proud to serve as a trusted center for spiritual and religious services.
  Devotees can easily connect with our experienced Pandits, Purohits, and Poojaries for all types of ceremonies — from housewarmings and weddings to ancestral offerings and temple rituals.
</p>

<p className={`${styles.desc} mb-4`}>
  Our dedicated team of qualified and compassionate priests ensures that every ritual is performed with accuracy and devotion.
  From preparing sacred materials to explaining every mantra, we guide devotees through each step of the ceremony.
  Every service we conduct follows authentic Vedic principles to bring divine blessings, harmony, and fulfillment into your life.
</p>



</div>

        </div>
      </div>
    </section>
  );
}
