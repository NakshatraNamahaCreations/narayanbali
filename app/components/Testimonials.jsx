"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../styles/Testimonials.module.css";

const ITEMS = [
  {
    quote:
      "We were new to Srirangapatna and didn’t know how to find a Pandit for our Grahapravesha. Sri Vivekananda Sharma’s team arranged everything—from the Muhurtham to the Puja materials. The rituals were done with such devotion that our whole family felt blessed.",
    name: "Lakshmi Narayan",
    role: "Mysore",
    avatar: "/images/man (7).png",
  },
  {
    quote:
      "I contacted them just two days before our Satyanarayana Puja, and they quickly arranged a knowledgeable Purohit who guided us step by step. The ceremony felt divine and well organized.",
    name: "Shilpa & Raghavendra",
    role: "Bangalore",
    avatar: "/images/woman (6).png",
  },
  {
    quote:
      "For our ancestor rituals (Thila Homa and Narayana Bali), we were guided with clarity and patience. The Purohit explained each mantra and its meaning. It gave us peace of mind and a sense of fulfillment.",
    name: "Rajesh Hegde",
    role: "Srirangapatna",
    avatar: "/images/man (7).png",
  },
  {
    quote:
      "I have booked several Pujas online through their platform. It’s so easy and transparent. Every ritual—from Ganapathi Homa to Kumbh Vivaha—was performed traditionally with full Vedic procedure.",
    name: "Deepa Krishnan",
    role: "Mandya",
    avatar: "/images/woman (6).png",
  },
  {
    quote:
      "What makes them special is the personal attention and affordability. They listen carefully to your family’s traditions and perform according to your custom. I’ve recommended them to all my relatives.",
    name: "Anand Subramani",
    role: "Coorg",
    avatar: "/images/man (7).png",
  },
  {
    quote:
      "Our family priest couldn’t travel during a festival, and we reached out to Sri Vivekananda Sharma Purohith Srirangapatna. The Pandit arrived on time, brought all samagri, and conducted the Puja with sincerity. We’ll definitely book again.",
    name: "Meenakshi Iyer",
    role: "Bangalore",
    avatar: "/images/woman (6).png",
  },
  
];

// group into slides of 2 (desktop), 1 (mobile via CSS)
const perSlide = 2;
const SLIDES = [];
for (let i = 0; i < ITEMS.length; i += perSlide) SLIDES.push(ITEMS.slice(i, i + perSlide));

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const hover = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    const start = () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        if (!hover.current) setIdx((i) => (i + 1) % SLIDES.length);
      }, 4500);
    };
    start();
    return () => timer.current && clearInterval(timer.current);
  }, []);

  const go = (n) => setIdx((n + SLIDES.length) % SLIDES.length);

  return (
    <section className={s.section} aria-label="Client Testimonials">
      <div className={s.shell}>
<h2 className={`${s.heading} mb-5`} style={{ textAlign: "center" }}>
  Why People <span>Trust Us</span>
</h2>

        <div
          className={s.panel}
          onMouseEnter={() => (hover.current = true)}
          onMouseLeave={() => (hover.current = false)}
          aria-roledescription="carousel"
        >
          {/* chevrons inside panel */}
          <button className={`${s.chev} ${s.left}`} aria-label="Previous" onClick={() => go(idx - 1)} type="button">
            ‹
          </button>
          <button className={`${s.chev} ${s.right}`} aria-label="Next" onClick={() => go(idx + 1)} type="button">
            ›
          </button>

          <div className={s.viewport}>
            <div className={s.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
              {SLIDES.map((group, gi) => (
                <div className={s.slide} key={gi}>
                  {group.map((t, i) => (
                    <article className={s.card} key={i}>
                      <div className={s.avatarWrap}>
                        <Image src={t.avatar || "/avatars/placeholder.jpg"} alt="" width={60} height={60} className={s.avatar} />
                      </div>

                      <div className={s.qrow}>
                        <span className={s.qopen} aria-hidden="true">❝</span>
                        <blockquote className={s.quote}>
                          <em>{t.quote}</em>
                        </blockquote>
                        <span className={s.qclose} aria-hidden="true">❞</span>
                      </div>

                      <footer className={s.footer}>
                        <strong className={s.name}>{t.name}</strong>
                        {/* <span className={s.role}>{t.role}</span> */}
                      </footer>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.dots} role="tablist" aria-label="Testimonials pagination">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`${s.dot} ${idx === i ? s.active : ""}`}
              onClick={() => go(i)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
