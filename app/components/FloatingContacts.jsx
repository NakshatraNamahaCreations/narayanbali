"use client"
import React, { useState } from "react";
import styles from "../styles/FloatingContacts.module.css";
import Link from "next/link";

// Import your images

const contacts = [
 
  { id: "yt", href: "https://www.youtube.com/@VivekSharma-Purohit", label: "YouTube", img: "/images/icons/youtube (1).png" },
  { id: "ig", href: "https://www.instagram.com/srirangapatna_pooja_services?igsh=c3VsMml4djJueW1o", label: "Instagram", img: "/images/icons/instagram (1).png" },
  { id: "fb", href: "https://www.facebook.com/share/174XJvLPv2/?mibextid=wwXIfr", label: "Facebook", img: "/images/icons/facebook (1).png" },
 
 
];

export default function FloatingContacts({ position = "right" }) {
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
              <Link
                href={c.href}
                className={`${styles.item} ${styles[c.id]}`}
                aria-label={c.label}
                target={isPhone ? "_self" : "_blank"}
                rel={isPhone ? undefined : "noopener noreferrer"}
              >
                <img src={c.img} alt={c.label} width={28} height={28} loading="lazy" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
