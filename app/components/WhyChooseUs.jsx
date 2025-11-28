"use client";
import React, { useState } from "react";
import styles from "../styles/WhyChooseUs.module.css";
import TestimonialsCarousel from "./Testimonials";

export default function WhyChooseUs() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex((curr) => (curr === index ? null : index));
    };
const faqs = [
    {
       id: 1,
       question: "Who can perform this ritual?",
       answer:
         "Anyone wishing peace and liberation for their ancestors can perform Narayan Bali Pooja in Srirangapatna, regardless of caste or family background.",
     },
     {
       id: 2,
       question: "Is this pooja compulsory after an unnatural death?",
       answer:
         "Yes, Narayan Bali puja in Srirangapatna is strongly recommended when a family member has passed away due to accidents, suicide, drowning, or sudden death.",
    },
     {
       id: 3,
       question: "Can women attend this ritual?",
       answer:
         "Women are allowed to participate in Narayan Bali Pooja in Srirangapatna unless they are undergoing ritual or traditional restrictions.",
    },
     {
       id: 4,
       question: "What if the departed soul did not get proper kriya or shraddha?",
       answer:
         "In such cases, Srirangapatna Narayan Bali becomes essential to complete the missing rites and help the soul move peacefully to higher lokas.",
    },
     {
       id: 5,
       question: "How soon should we book the ritual?",
       answer:
         "It is best to schedule Narayan Bali Pooja in Srirangapatna at least one day in advance so the priest can prepare all the required items.",
    },
     {
       id: 6,
       question: "How long does the entire ritual take?",
       answer:
         "The complete Narayan Bali ritual in Srirangapatna usually takes about 2 to 2.5 hours, depending on the family’s requirements and the priest's guidance.",
    },
       {
       id: 7,
       question: "Do you provide all the pooja materials?",
       answer:
         "Yes, all items required for Narayan Bali Pooja in Srirangapatna are arranged by our team, so families do not need to bring anything except basic details.",
    },
    {
        id: 8,
        question: "Are there any dress code guidelines?",
        answer:
          "It is recommended to wear simple traditional clothes during Pitrudosh nivarana pooja Srirangapatna to maintain ritual purity and devotion.",
     },
     {
        id: 9,
        question: "Can the pooja be done for ancestors who passed away years ago?",
        answer:
          "Yes, the timing does not matter, and Narayan Bali Pooja in Srirangapatna can be performed for ancestors who passed away long ago without receiving proper rites.",
     },

     {
        id: 10,
        question: "Is food or prasadam provided after the ritual?",
        answer:
          "Depending on the package selected, ancestor moksha pooja Srirangapatna includes prasadam distribution for the family at the end of the ritual. ",
     },
   ];

   
  return (
    <>
    <section className={styles.section}>
      <div className="container-xl">
        {/* <h2 className={styles.heading}>What is Narayan Bali Pooja?</h2> */}
   

        <div className={styles.subBlock}>
        
          {/* <p className={styles.subText}>
          When​‍​‌‍​‍‌​‍​‌‍​‍‌ a family experiences the loss of a loved one due to an accident, suicide, drowning, pandemic, or any other kind of sudden death, the soul usually remains unsettled because of the lack of complete shraddha and pitra karma. Among other things, the Garuda Purana states that these souls can even be seen wandering until the performance of the proper rites. That is the primary reason why lots of people opt for Narayan Bali Pooja in Srirangapatna because it is the only ceremony that provides the missing samskaras and helps the departed soul to evolve to spiritual calmness and moksha.
          </p>
          <p className={styles.subText}>
          People who are going through the same recurrent problems, emotional heaviness, delays, or that their life is disturbed without any logical explanation and feel that they have to do family rituals. By doing Narayan Bali Pooja in Srirangapatna, people suffering from ancestral imbalance aim at removing the root cause of their problems, breaking karmic blockades, and giving the spiritual offerings that grant the departure to higher lokas. This holy Vedic ceremony is not only a solution to the soul's problems, but it also become a source of stability, positivity, and blessings for the living members of the ​‍​‌‍​‍‌​‍​‌‍​‍‌family.
            </p> */}
            <h2 className={styles.heading}> Why Perform Narayan Bali in Srirangapatna? </h2>  
            <p className={styles.subText}>
            Srirangapatna​‍​‌‍​‍‌​‍​‌‍​‍‌ is rated as one of the most holy places in the South India region, made even more special by the imposing Sri Ranganathaswamy Temple and the divine Sangama, the confluence of the three holy rivers. A lot of devotees opt for Narayan Bali Pooja in Srirangapatna because the spiritual energy of this place very much accords with rituals for the peace of the ancestors and Pitrudosh Nivarana. The calm riverfront is Vedic rites' perfect venue, thereby making the ritual deeply devotional and spiritually uplifting.
            </p>
            <p className={styles.subText}>
            Also, the presence of experienced priests strictly following the Garuda Purana rites convinces many families to perform Narayan Bali Pooja in Srirangapatna. The ceremonies carried out here deliver the same spiritual power as pilgrimages to Gokarna or Trimbakeshwar but, at the same time, you have the convenience of less travel and simpler arrangements. Therefore, Srirangapatna turns out to be a location that is both potent and handy for people who want to achieve complete ancestral liberation through the holy Vedic ​‍​‌‍​‍‌​‍​‌‍​‍‌rite.
              </p>
              <h2 className={styles.heading}> Who Should Perform Narayan Bali? </h2>  
            <p className={styles.subText}>
            Families​‍​‌‍​‍‌​‍​‌‍​‍‌ suffering from continuous problems such as delays in progress, financial struggles, relationship issues, or the occurrence of unexplained events, after a while, usually find out that these issues are due to lack of balance in the ancestral side. Astrologers marking Pitrudosh or indicating that ancestral blessings are blocked because of incomplete rituals or unsettled souls will surely require you to perform Narayan Bali Pooja in Srirangapatna.
            </p>
            <p className={styles.subText}>
            This is a sacred rite to a household that has experienced the loss of a loved one due to a sudden, accidental, and unnatural cause and was not able to complete the shraddha or kriya at the time of death. Narayan Bali Pooja in Srirangapatna in these instances offers the essential rites for the soul's going to be calm and thus, the departed will be receiving the spiritual support which they lacked, thereby, it will be comforting and satisfying to the living ​‍​‌‍​‍‌​‍​‌‍​‍‌ones.
              </p>
              <h3 className={styles.subHeading}>
              Benefits of Narayan Bali Pooja
          </h3>
          <p className={styles.subText}>
          • It​‍​‌‍​‍‌​‍​‌‍​‍‌ is just one of several major benefits of Narayan Bali Pooja in Srirangapatna that it assists such souls that are drifting or unsettled in the ancestral realm to obtain tranquility and proceed to the higher lokas.
           </p>
           <p className={styles.subText}>
          • After Narayan Bali Pooja in Srirangapatna, which is a quite common phenomenon among devotees, the life of such persons becomes more orderly as this ritual removes the spiritual disturbances resulting from incomplete karmas.
           </p>
           <p className={styles.subText}>
          • Pitrudosh affected families who have been through a deadlock in their life situation mostly give Narayan Bali Pooja in Srirangapatna the credit for their relief as this ritual clears energetic blockages causing marriage or personal growth to be stalled.
           </p>
           <p className={styles.subText}>
          • Health-related problems and a loop of unfortunate events become less when Narayan Bali Pooja in Srirangapatna brings back the equilibrium between the ancestral realm and the family's living members.
           </p>
           <p className={styles.subText}>
          • The persons experiencing repeated miscarriages or hard times in producing children are the most likely to gain spiritually when Narayan Bali Pooja in Srirangapatna cleanses the invisible ancestral imbalances that hinder them.
           </p>
           <p className={styles.subText}>
          • The feeling of emotional peace and an improvement in the family's atmosphere are the effects of Narayan Bali Pooja in Srirangapatna which comes as a natural consequence of this ritual, as it is this rite that re-establishes the home with the blessings and ​‍​‌‍​‍‌​‍​‌‍​‍‌stability.
           </p>
           <h2 className={styles.heading}>Signs That You Need Narayan Bali Pooja </h2>  
           <p className={styles.subText}>
           Usually,​‍​‌‍​‍‌​‍​‌‍​‍‌ families start to think about Narayan Bali Pooja in Srirangapatna when they feel that the blessings of their ancestors are not coming to them as they used to. Such things might be a series of delays, sudden setbacks, constant misunderstandings, or emotional heaviness in the home. Also, astrologers send this ritual when a horoscope has the indication of Pitrudosh which is the sign of the ancestor's soul waiting for the proper rites or liberation.
          </p>
          <p className={styles.subText}>
          Moreover, a long list of accidents, unnatural incidents, and unexpected difficulties without any apparent reason can be a clue that your family requires Narayan Bali Pooja in Srirangapatna. An abandoned ancestor who is restless because of lack of rituals can be the cause of such phenomena. Doing this pooja re-establishes harmony, eliminates those invisible spiritual barriers, and gives tranquility to the departed soul as well as the living family ​‍​‌‍​‍‌​‍​‌‍​‍‌members.
          </p>
          <h2 className={styles.heading}> Why Srirangapatna Is a Holy Place for Narayan Bali</h2>  
           <p className={styles.subText}>
           The​‍​‌‍​‍‌​‍​‌‍​‍‌ Sangama in Srirangapatna is considered a very holy place by the Pilgrims as it is the confluence of three rivers, Cauvery, Lokapavani, and Hemavati, which is said to generate an intense spiritual energy. It is said that the performance of Narayan Bali Pooja at Srirangapatna by the riverside helps the soul that has left the body to move towards liberation because the area is considered a door of ancestral peace and moksha.
          </p>
          <p className={styles.subText}>
          Another reason that devotees perform Narayan Bali Pooja in Srirangapatna is that the place is divinely blessed by the presence of Lord Ranganatha and therefore spiritually can be compared to such places as Gokarna and Trimbakeshwar. The tranquil atmosphere, the skillful priest, and the strong Vedic heritage of this holy town make it a place of pilgrimage for those families who want to perform ancestral rituals in a peaceful environment and which is not far away from Mysore or ​‍​‌‍​‍‌​‍​‌‍​‍‌Bangalore.
          </p>
          <h2 className={styles.heading}> How We Perform Narayan Bali Pooja</h2>  
           <p className={styles.subText}>
           Our​‍​‌‍​‍‌​‍​‌‍​‍‌ priests are very devotional and they do not miss even a single step of Garuda Purana ritual. They also ensure that it is done with purity and correctness. Narayan Bali Pooja in Srirangapatna starts with sankalpa, then comes pitru ahvana, where the ancestors are invoked to accept the offerings. Next, the pooja goes through Bali Karma and pind daan, which are the most important steps to help the soul to rest in peace and to get rid of any karmic bonds which are left unfinished.
          </p>
          <p className={styles.subText}>
          By the end of the pooja, the mantras and offerings are like helpers for the soul that has left the body to get the spiritual support they need. The very last part of Narayan Bali Pooja in Srirangapatna is preta shanti and arati which are the signs of the completion of the soul’s journey to liberation. After the ritual, blessings are given for the welfare, harmony, and general prosperity of the family which is a great way to end a powerful Vedic ​‍​‌‍​‍‌​‍​‌‍​‍‌ceremony.
          </p>
          <h2 className={styles.heading}> Why Choose Us for Narayan Bali Pooja?</h2>  
           <p className={styles.subText}>
           Choosing the right priests and the right place matters when performing a sacred ritual meant for ancestral peace. Families prefer working with experienced purohits who understand every detail of the Garuda Purana and perform each step with devotion and precision. With our dedicated team, performing Narayan Bali Pooja in Srirangapatna becomes a guided, peaceful, and spiritually fulfilling experience for the entire family.
          </p>
          <p className={styles.subText}>
          • Devotees appreciate that Narayan Bali Pooja in Srirangapatna is conducted by certified Vedic priests with deep expertise in ancestral rituals.
          </p>
          <p className={styles.subText}>
          • Families feel comfortable because Narayan Bali Pooja in Srirangapatna is performed with clear explanations, step-by-step guidance, and complete transparency.
          </p>
          <p className={styles.subText}>
          • Many people trust us as Narayan Bali Pooja in Srirangapatna has been performed by our team for thousands of families over the years.
          </p>
          <p className={styles.subText}>
          • All ritual materials needed during Narayan Bali Pooja in Srirangapatna are arranged by us, ensuring a smooth and worry-free experience.
          </p>
          <p className={styles.subText}>
          • Devotees choose our service because Narayan Bali Pooja in Srirangapatna is performed at spiritually powerful locations with proper arrangements and support.
          </p>
          <h3 className={styles.subHeading}>
          Our Purohits
          </h3>
          <p className={styles.subText}>
          • Our experienced priests have been performing the Srirangapatna Narayan Bali Pooja for decades.
          </p>
          <p className={styles.subText}>
          • Every purohit conducting the Srirangapatna Narayan Bali Pooja follows strict Vedic and Agama procedures
          </p>
          <p className={styles.subText}>
          • The Srirangapatna Narayan Bali Pooja is performed with discipline, purity, and complete devotion.
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