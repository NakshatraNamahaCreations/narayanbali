"use client";
import Image from "next/image";
import styles from "../styles/FooterSection.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      {/* --- TOP SECTION --- */}
      <div className="container py-5">
        <div className="row gy-4">
          {/* About */}
          <div className="col-md-6 col-lg-3">
            <h5 className={styles.heading}>About Narayan Bali</h5>
            <p className={styles.text}>
              Narayan Bali is the leading digital platform for all Hindu
              devotional needs and spiritual services.
            </p>
    <div className={styles.socials}>
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
  </a>
  <a href="https://www.instagram.com/srirangapatna_pooja_services/?igsh=c3VsMml4djJueW1o" target="_blank" rel="noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
  </a>

  <a href="https://www.youtube.com/@VivekSharma-Purohit" target="_blank" rel="noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className={styles.heading}>Quick Links</h5>
            <ul className={styles.links}>
              <li><a href="/services/narayan-bali-pooja-in-srirangapatna">Narayan Bali</a></li>
              <li><a href="/services/pinda-pradhana-in-srirangapatna">Pinda Pradhana</a></li>
              <li><a href="/services/tila-homa-in-srirangapatna">Tila Homa</a></li>
              <li><a href="/services/kumbha-vivaha-in-srirangapatna">Kumbha Vivaha</a></li>
              <li><a href="/services/kadali-vivaha-in-srirangapatna">Kadali Vivaha</a></li>
               <li><a href="/services/sarpa-dosha-nivarana-in-srirangapatna">Sarpa Dosha Nivarana</a></li>
               <li><a href="/services/pithru-dosha-pooja-in-srirangapatna">Pitru Dosha Nivarana</a></li>
            </ul>
          </div>

          {/* Pujas */}
        <div className="col-md-6 col-lg-3">
  <h5 className={styles.heading}>Phone Number</h5>

  <address className={styles.addressBlock}>
    <ul className={styles.contactList}>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+918970901034" className={styles.contactLink}>89709 01034</a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+918660171434" className={styles.contactLink}>86601 71434</a>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
          alt="Phone"
          className={styles.icon}
        />
        <a href="tel:+919448467213" className={styles.contactLink}>94484 67213</a>
      </li>
      <li>
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          className={styles.icon}
        />
        <a
          href="mailto:pooja.services.srirangapatna@gmail.com"
          className={styles.contactLink}
        >
          pooja.services.srirangapatna@gmail.com
        </a> */}
      </li>
     
     
    </ul>
  </address>
</div>


          {/* Subscribe */}
          <div className="col-md-6 col-lg-3">
            <h5 className={styles.heading}>Contact Us</h5>
            {/* <p className={styles.text}>
              Stay informed about upcoming pujas, spiritual insights, and
              special blessings. Join us and keep your devotion alive!
            </p> */}
                 <div className={styles.contactCard}>

              <div className="d-flex align-items-start gap-3 mb-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.2 10-6.2V6a2 2 0 00-2-2zm0 4.3l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V8.3z" />
                  </svg>
                </span>
                <div>  <a
          href="mailto:pooja.services.srirangapatna@gmail.com"
          className={styles.contactLink}
        >
          pooja.services.srirangapatna@gmail.com
        </a></div>
              </div>

              {/* <div className="d-flex align-items-start gap-3 mb-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM3 11h2a1 1 0 010 2H3a1 1 0 010-2zm16 0h2a1 1 0 010 2h-2a1 1 0 010-2z" />
                  </svg>
                </span>
                <div>Mon – Sat 8:00 AM – 6:00 PM</div>
              </div> */}

              <div className="d-flex align-items-start gap-3">
                <span className={styles.cIcon} aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <div>
                Goshiya ghat, Srirangapatna, Karnataka 571477
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div className={styles.copyright}>
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">
  <p className="mb-0" style={{ color: "#fff" }}>
    © 2025 Narayan Bali. All Rights Reserved.
  </p>
          {/* <ul className={styles.policyLinks}>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
