"use client"
import React, { useState } from "react";
import styles from "../styles/FloatingContacts.module.css";

// Import your images
// import whatsappIcon from "./assets/social/whatsapp.png";
// import facebookIcon from "./assets/social/facebook.png";
// import instagramIcon from "./assets/social/instagram.png";
// import youtubeIcon from "./assets/social/youtube.png";
// import callIcon from "./assets/social/call.png";

const contacts = [
  { id: "call", href: "tel:+918970901034", label: "Call", img: "/images/icons/call.png" },
  { id: "wh", href: "https://wa.me/qr/76PO2SSITJBAC1", label: "WhatsApp", img: "/images/icons/whatsapp.png" },
 
 
];

export default function FloatingContacts2({ position = "left" }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${styles.floatingContacts} ${
        position === "left" ? styles.left : styles.right
      } ${open ? styles.open : styles.closed}`}
    >
      {/* <button
        aria-label="Contact options"
        className={styles.toggle}
        onClick={() => setOpen((prev) => !prev)}
        title="Contact Us"
      >
        <img src="/images/icons/whatsapp.png" alt="Toggle Contacts" width={24} height={24} />
      </button> */}

      <ul className={styles.list} aria-hidden={!open}>
        {contacts.map((c) => {
          const isPhone = c.href.startsWith("tel:");
          return (
            <li key={c.id}>
              <a
                href={c.href}
                className={`${styles.item} ${styles[c.id]}`}
                aria-label={c.label}
                target={isPhone ? "_self" : "_blank"}
                rel={isPhone ? undefined : "noopener noreferrer"}
              >
                <img src={c.img} alt={c.label} width={28} height={28} loading="lazy" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
