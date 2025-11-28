"use client";
import Image from "next/image";
import styles from "../styles/HowNarayanBaliWorks.module.css";

export default function HowNarayanBaliWorks() {
  return (
    <section className={`${styles.section} py-5`}>
      <div className="container-fluid py-4"  >
        <div style={{width:"90%", margin:"0 auto"}}>
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <Image
              src="/images/narayanbali.png"
              alt="Narayan Bali Puja"
              width={600}
              height={400}
              className={`img-fluid rounded shadow ${styles.image}`}
            />
          </div>

          {/* RIGHT TEXT */}
       <div className="col-md-6">
  <h2 className={`${styles.heading} mb-3`}>
    Why People <span>Trust Us</span>
  </h2>

  <p className={`${styles.desc} mb-3`}>
    In today’s fast-paced world, finding regional Pandits for
    religious functions and ceremonies can be a real challenge. Our organization,
     Sri Vivekananda Sharma Purohith Srirangapatana, located in
    the holy town of Srirangapatna, Karnataka, was founded with
    the aim of offering personalized Pandit services for every
    spiritual and cultural occasion at a truly reasonable price.
  </p>

  <p className={`${styles.desc} mb-3`}>
    Our experienced and knowledgeable panel of Purohits helps
    devotees perform rituals with complete authenticity, guiding them through
    every step to ensure divine blessings and a peaceful life. We focus on making
    every ceremony smooth, sacred, and tension-free.
  </p>

  <p className={`${styles.desc} mb-4`}>
    Whether you need a Pandit, Purohit, Priest, or Poojari for
    your next Puja, simply give us a call. We provide tailored services based on
    your specific requirements, tradition, and budget — ensuring
    every customer receives individual attention and quality service.
  </p>

</div>
</div>
        </div>
      </div>
    </section>
  );
}
