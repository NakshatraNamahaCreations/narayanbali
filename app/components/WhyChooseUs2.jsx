"use client";
import React, { useState } from "react";
import styles from "../styles/WhyChooseUs.module.css";
import TestimonialsCarousel from "./Testimonials";

export default function WhyChooseUs2() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex((curr) => (curr === index ? null : index));
    };
const faqs = [
    {
       id: 1,
       question: "Who should perform this ritual?",
       answer:
         "People wishing peace for their ancestors often choose Pinda Pradhana in Srirangapatna to complete essential shraddha rites.",
     },
     {
       id: 2,
       question: "Can this be performed for ancestors who passed away long ago?",
       answer:
         "Yes, Pinda Pradhana ritual in Srirangapatna can be done even years after the death of the ancestor.",
     },
     {
       id: 3,
       question: "Is the ritual compulsory every year?",
       answer:
         "Yearly rituals are not compulsory, but many families perform Pinda Pradhana in Srirangapatna on death anniversaries or amavasya.",
     },
     {
       id: 4,
       question: "Can women participate?",
       answer:
         "Women may join Pind daan in Srirangapatna except during traditional restrictions.",
     },
     {
       id: 5,
       question: "What do we need to bring?",
       answer:
         "You only need the names of the ancestors while performing Pinda Pradhana in Srirangapatna; everything else is arranged.",
     },
     {
       id: 6,
       question: "How long is the ritual?",
       answer:
         "The full Shraddha karma Srirangapatna process usually takes 1.5 to 2 hours",
     },
       {
       id: 7,
       question: "Do priests follow Vedic procedures?",
       answer:
         "Yes, Pinda Pradhana in Srirangapatna is performed strictly according to Garuda Purana guidelines.",
     },
    {
        id: 8,
        question: "Is prasad included?",
        answer:
          "Many packages for ancestor rituals Srirangapatna include prasadam after the ceremony.",
      },
     {
        id: 9,
        question: "Can this ritual reduce Pitru Dosha?",
        answer:
          "Yes, performing Pinda Pradhana in Srirangapatna helps reduce Pitrudosh and clears ancestral imbalance.",
      },

     {
        id: 10,
        question: "Do you help with booking and guidance?",
        answer:
          "Our team supports devotees with all arrangements when choosing Pinda Pradhana in Srirangapatna. ",
      },
   ];

   
  return (
    <>
    <section className={styles.section}>
      <div className="container-xl">
        {/* <h2 className={styles.heading}>What is Narayan Bali Pooja?</h2> */}
   

        <div className={styles.subBlock}>
        
          
           
            <h2 className={styles.heading}> Why Perform Pinda Pradhana in Srirangapatna? </h2>  
              <p className={styles.subText}>
              Srirangapatna​‍​‌‍​‍‌​‍​‌‍​‍‌ is considered to be the most religious place for the performance of the ancestral rites because of the Sangama, which is the confluence of the rivers Cauvery, Lokapavani, and Hemavati. A large number of devotees opt for Pinda Pradhana at Srirangapatna as the execution of rites at this holy riverbank elevates the efficacy of shraddha and Pitru karma.
            </p>
            <p className={styles.subText}>
            The spiritual vibe around the Sri Ranganathaswamy Temple also makes the overall experience more divine. Folks who decide to do Pinda Pradhana at Srirangapatna usually report having an overwhelming feeling of purification, oneness, and tranquility which in turn makes the ritual a potent substitute for the likes of ​‍​‌‍​‍‌​‍​‌‍​‍‌Gokarna.
            </p>
            <h2 className={styles.heading}> Who Should Perform Pinda Pradhana? </h2>  
              <p className={styles.subText}>
              Usually,​‍​‌‍​‍‌​‍​‌‍​‍‌ families that have been struggling with problems or uncertainties for a long time take the Pinda Pradhana in Srirangapatna to get the support of the ancestors. Problems like financial delays, relationship issues, or continuous misfortunes can be signs of incompletely done ancestral rites.
            </p>
            <p className={styles.subText}>
            The sacrament becomes a matter of concern if the departed soul did not get the shraddha karma properly at the time of death. It is particularly advised to perform Pinda Pradhana in Srirangapatna after natural death anniversaries, Amavasya, or when astrologers detect ancestral imbalance or Pitru ​‍​‌‍​‍‌​‍​‌‍​‍‌Dosha.
            </p>
              <h3 className={styles.subHeading}>
              Benefits of Pinda Pradhana
          </h3>
      
           <p className={styles.subText}>
          • Carrying​‍​‌‍​‍‌​‍​‌‍​‍‌ out Pinda Pradhana in Srirangapatna is a powerful method to access the support of forefathers. a great number of devotees are emotionally moved by this reality because they feel an immense relief in their hearts.
           </p>
           <p className={styles.subText}>
          • When the ancestral Pinda Pradhana is performed in Srirangapatna, the ancestors’ hurdles are cleaned up and their blessings are retrieved. Therefore, the stages of life become changing to a smooth flow.
           </p>
           <p className={styles.subText}>
          • Giving Pinda Pradhana in Srirangapatna' is certainly a beautiful gift to the departing soul's voyage, as it brings the release and consolation to the departed.
           </p>
           <p className={styles.subText}>
          • a household suffering from the negative influence of Pitrudosh can only get a break after Pinda Pradhana in Srirangapatna is done, and the spiritual imbalance is healed.
           </p>
           <p className={styles.subText}>
          • among other things, health problems may be improved and family quarrels may be diminished as a result of the restoration of harmony through Pinda Pradhana in Srirangapatna.
           </p>
           <p className={styles.subText}>
          • Moreover, the ceremony is an excellent method to increase one’s financial status because Pinda Pradhana in Srirangapatna is the root of the spiritual heritage of the family that gets ​‍​‌‍​‍‌​‍​‌‍​‍‌strengthened.
           </p>
           <h2 className={styles.heading}>Signs That You Need Pinda Pradhana </h2>  
           <p className={styles.subText}>
           Such​‍​‌‍​‍‌​‍​‌‍​‍‌ families which are emotionally distressed due to delays and repeated negative incidents, usually put their hope on Pinda Pradhana in Srirangapatna as a means of returning the lost ancestral grace. These signals most of the time suggest that a dead relative is waiting for the performance of shraddha rites.
           </p>
           <p className={styles.subText}>
           If a family keeps seeing ancestors in dreams, is continuously affected by bad luck, or has horoscope signs pointing to Pitrudosh, then these are considered to be very powerful reasons for Pinda Pradhana in Srirangapatna. The performed rite is a way of making the departed one’s mind calm and thus the familiar getting equilibrium ​‍​‌‍​‍‌​‍​‌‍​‍‌again.
          </p>



          <h2 className={styles.heading}>Why Srirangapatna is a Holy Place for Pinda Pradhana </h2>  
           <p className={styles.subText}>
           The​‍​‌‍​‍‌​‍​‌‍​‍‌ Sangama in Srirangapatna is often likened to a door leading to the ultimate spiritual goal. Merging the water used for Pinda Pradhana in Srirangapatna with the holy rivers consecrates the act with heavenly energy which in turn elevates the soul to a higher level.
          </p>
          <p className={styles.subText}>
          Moreover, people opt for this place as a result of the Ranganatha Lord's serene and pure aura that He imparts to the area. There are numerous households that consider Pinda Pradhana in Srirangapatna as a profoundly spiritual event that brings them tranquility and is also easy to carry ​‍​‌‍​‍‌​‍​‌‍​‍‌out.
          </p>
          <h2 className={styles.heading}> How We Perform Pinda Pradhana</h2>  
           <p className={styles.subText}>
           Our​‍​‌‍​‍‌​‍​‌‍​‍‌ priests perform the rites very strictly as per Vedic procedures given in the Garuda Purana and Grhya Sutras. The Pinda Pradhana in Srirangapatna ceremony starts with sankalpa, where the family declares their wish for ancestral peace. after that, it is mantra chanting, offering pindas, tarpanam, and blessings.
          </p>
          <p className={styles.subText}>
          at the very last point of Pinda Pradhana in Srirangapatna, prayers are made for the well-being of the family, prosperity, and the calm and joyful elevation of the departed soul. The entire ritual is done with love, purity, and spiritual ​‍​‌‍​‍‌​‍​‌‍​‍‌firmness.
          </p>
          <h2 className={styles.heading}>Why Choose Us? </h2>  
           <p className={styles.subText}>
           • We​‍​‌‍​‍‌​‍​‌‍​‍‌ provide a serene and well-orchestrated setting for families doing Pinda Pradhana at Srirangapatna, thus making sure that every step is carried out by qualified Vedic priests. Our team is always ready to help the devotees with all the arrangements so that they can be engrossed only in the spiritual aspect of their ritual.
          </p>
          <p className={styles.subText}>
           • That is to say, the families are satisfied with commitment, correct explanations, and total openness when carrying out the Pinda Pradhana at Srirangapatna. Our priests have a wealth of experience, thus, they make the ritual very deep in its spiritual and authentic nature.
          </p>
          <p className={styles.subText}>
           • The performance of Pinda Pradhana in Srirangapatna is carried out by certified priests with accuracy and devotion.
          </p>
          <p className={styles.subText}>
           • The pooja items for the Pinda Pradhana in Srirangapatna are arranged by our team.
          </p>
          <p className={styles.subText}>
           • We have been a part of the completion of Pinda Pradhana in Srirangapatna by thousands of families.
          </p>
          <p className={styles.subText}>
           • The rite is performed in front of holy rivers for Pinda Pradhana in Srirangapatna.
          </p>
          <p className={styles.subText}>
           • During Pinda Pradhana at Srirangapatna, we are always there to ensure that the devotees experience clarity, guidance, and spiritual ​‍​‌‍​‍‌​‍​‌‍​‍‌comfort.
          </p>
         

        </div>
   
     
      

  
      </div>

    
    </section>
    <TestimonialsCarousel/>
      <section className={styles.faqSection}>
      <div className={styles.faqSection2}>
        <div className={styles.faqSection1}>
          <h4>FREQUENTLY ASKED QUESTIONS</h4>
        </div>

        <div className={styles.faqRight}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <div
                className={styles.faqHeader}
                onClick={() => toggleFAQ(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFAQ(i)}
              >
                <h3>
                  <span className={styles.number}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {faq.question}
                </h3>
                <span className={styles.icon}>{activeIndex === i ? "−" : "+"}</span>
              </div>

              {activeIndex === i && (
                <p className={styles .faqAnswer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}