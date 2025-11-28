"use client";

import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import styles from "../styles/ContactInfoGrid.module.css";

const cards = [
  {
    id: 1,
    title: "Our Location",
    text: "Sri Vivekananda Sharma HR, Nimishambha Temple, Srirangapatna Fort, Mandya, Karnataka 571438",
    type: "text",
    icon: <FiMapPin />,
    bg: "",
  },
  {
    id: 2,
    title: "Phone Numbers",
    type: "phone",
    icon: <FiPhoneCall />,
    numbers: [
      { label: "", num: "+91 89709 01034" },
      { label: "", num: "+91 86601 71434" },
      { label: "", num: "+91 94484 67213" },
    ],
    bg: "",
  },
  {
    id: 3,
    title: "Email Address",
    text: "pooja.services.srirangapatna@gmail.com",
    type: "email",
    icon: <FiMail />,
    href: "mailto:pooja.services.srirangapatna@gmail.com",
    bg: "",
  },
];

export default function ContactInfoGrid() {
  return (
    <section id="contact-section" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={styles.card}
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.content}>
                <div className={styles.iconWrap}>{card.icon}</div>

                <h5 className={styles.title}>{card.title}</h5>

                {/* Phone numbers group */}
                {card.type === "phone" && card.numbers ? (
                  <div className={styles.phoneGroup}>
                    {card.numbers.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.num.replace(/\s+/g, "")}`}
                        className={styles.link}
                      >
                        <span className={styles.phoneLabel}></span>{" "}
                        {p.num}
                      </a>
                    ))}
                  </div>
                ) : card.type === "email" ? (
                  <a href={card.href} className={styles.link}>
                    {card.text}
                  </a>
                ) : (
                  <p className={styles.text}>{card.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
