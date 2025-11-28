"use client";

import React from "react";
import styles from "../styles/MapHero.module.css";

export default function MapHero() {
  return (
  <div className={styles.mapWrapper}>
      <div className={styles.mapFrame}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.555319653426!2d76.69377987479216!3d12.423234828576783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70a8a2b9e3f3%3A0xa68f0666e885d5b5!2sGoshiya%20Ghat%2C%20Srirangapatna%2C%20Karnataka%20571477!5e0!3m2!1sen!2sin!4v1730972826453!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          title="Goshiya Ghat, Srirangapatna"
        ></iframe>
      </div>
    </div>
  );
}
