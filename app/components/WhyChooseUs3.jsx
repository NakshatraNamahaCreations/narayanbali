"use client";
import React, { useState } from "react";
import styles from "../styles/WhyChooseUs.module.css";
import TestimonialsCarousel from "./Testimonials";

export default function WhyChooseUs3() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex((curr) => (curr === index ? null : index));
    };
const faqs = [
    {
       id: 1,
       question: "Who should perform this ritual?",
       answer:
         "People seeking ancestral peace often choose Tila Homa in Srirangapatna to purify karmic blocks",
     },
     {
       id: 2,
       question: "Can this be performed annually?",
       answer:
         "Yes, Tila Homa ritual in Srirangapatna can be performed yearly during amavasya or special tithis.",
     },
     {
       id: 3,
       question: "Can women participate?",
       answer:
         "Women may attend Tila Homa in Srirangapatna unless restricted by traditional customs.",
     },
     {
       id: 4,
       question: "What do we need to bring?",
       answer:
         "Only basic ancestor details are needed while performing Tila Homa puja Srirangapatna.",
     },
     {
       id: 5,
       question: "How long does it take?",
       answer:
         "The complete Tila Homa in Srirangapatna process usually takes 1.5 to 2 hours. ",
     },
     {
       id: 6,
       question: "Is this ritual useful for Pitru Dosha?",
       answer:
         "Yes, Pitrudosh nivarana homa Srirangapatna helps remove ancestral imbalance.",
     },
       {
       id: 7,
       question: "Do priests follow Vedic rules?",
       answer:
         "absolutely, Tila Homa in Srirangapatna is performed as per Garuda Purana and Vedic guidelines.",
     },
    {
        id: 8,
        question: "Is food or prasadam included?",
        answer:
          "Some packages for ancestral homa Srirangapatna include prasadam distribution.",
      },
     {
        id: 9,
        question: "Can this be done for ancestors who died long ago?",
        answer:
          "Yes, Tila Homa in Srirangapatna is effective even if the ancestor passed away many years back.",
      },

     {
        id: 10,
        question: "Do you help with booking and arrangements?",
        answer:
          "Yes, our team supports devotees with every step during Tila Homa in Srirangapatna. ",
      },
   ];

   
  return (
    <>
    <section className={styles.section}>
      <div className="container-xl">
        {/* <h2 className={styles.heading}>What is Narayan Bali Pooja?</h2> */}
   

        <div className={styles.subBlock}>
        
          
           
            <h2 className={styles.heading}> Why Perform Tila Homa in Srirangapatna? </h2>  
              <p className={styles.subText}>
              Srirangapatna​‍​‌‍​‍‌​‍​‌‍​‍‌ is a holy land known as a kshetra that is blessed by Lord Sri Ranganathaswamy and the Sangama which is the confluence of three rivers. Such a divinely spiritual environment makes performing Tila Homa in Srirangapatna highly potent for the purification of the ancestors. The strong setting is very supportive of rituals related to pitra karma, shraddha, and dosha nivarana.
              </p>
              <p className={styles.subText}>
              Many families opt for Tila Homa in Srirangapatna as the locality is infused with Vedic energy for ages where priests chant with great discipline and adhere to the ordinances of the scripture. The riverfront setting is a calm and heavenly place perfect for calling upon the blessings of the ancestors and making the offering of sesame in the sacred ​‍​‌‍​‍‌​‍​‌‍​‍‌fire.
             </p>
             <h2 className={styles.heading}> Who Should Perform Tila Homa? </h2>  
              <p className={styles.subText}>
              Those​‍​‌‍​‍‌​‍​‌‍​‍‌ who have a hard time emotionally, find that troubles keep coming in their way, or that their personal or family life has suddenly stopped, often go to Tila Homa in Srirangapatna to get a release of their ancestral energy. It is advised in the case of continuous ancestor-related dreams or when the astrologers detect Pitru Dosha or ancestral imbalance in the birth chart.
              </p>
              <p className={styles.subText}>
              It is said that the Tila Homa in Srirangapatna will be considered a necessity by the family, especially when they think that their dead ancestors have not been given proper shraddha karma. This becoming the most important moment when the ancestral rites were late, not done fully, or were carried out without the right ​‍​‌‍​‍‌​‍​‌‍​‍‌guidance.
             </p>
              <h3 className={styles.subHeading}>
              Benefits of Tila Homa
          </h3>
      
           <p className={styles.subText}>
          • after​‍​‌‍​‍‌​‍​‌‍​‍‌ the ritual of Tila Homa in Srirangapatna, a lot of followers experience an emotional kind of clarity and, inner peace due to the fact that the ceremony is said to cleanse ancestral karma.
           </p>
           <p className={styles.subText}>
          • It is said that the events of life become better gradually when Tila Homa in Srirangapatna is performed to clear those obstacles which are linked to incomplete ancestral rites.
           </p> 
           <p className={styles.subText}>
          • as Tila Homa in Srirangapatna is performed using the sacred grain, the ritual not only takes care of spiritual liberation but also the offering of food to the departed souls, thus it becomes a nice circular gesture of nourishment and spiritual freedom.
           </p>
           <p className={styles.subText}>
          • Families who are going through the troube of the Pitru dosha, might get relief after the event of Tila Homa in Srirangapatna returns the lineage to a balanced state.
           </p> 
           <p className={styles.subText}>
          • among health problems, delays, and the recurring negativities that may be happening, these will lessen if Tila Homa in Srirangapatna is done to unblock energies and purify them.
           </p>
           <p className={styles.subText}>
          • after Tila Homa in Srirangapatna has been performed to strengthen ancestral blessings, it is said that prosperity and stability become ​‍​‌‍​‍‌​‍​‌‍​‍‌better.
           </p> 


           <h2 className={styles.heading}>Signs You Need Tila Homa </h2>  
           <p className={styles.subText}>
           If​‍​‌‍​‍‌​‍​‌‍​‍‌ you are emotionally stressed very often, if you find it hard to manage your finances from time to time, or if you feel that the important events of your life are delayed unexpectedly, then it is most probably time to perform a Tila Homa in Srirangapatna. These symptoms suggest that there are expectations from your ancestors or that you have some incomplete karmic duties and thus you need the support of the ritual.
           </p>
           <p className={styles.subText}>
           In case it is often that you dream of your ancestors or that you feel their presence, it might be a spiritual message that you need to perform Tila Homa in Srirangapatna. Quite a few astrologers advise this ceremony when the horoscope shows Pitrudosh or an ancestral imbalance which is hindering the family's ​‍​‌‍​‍‌​‍​‌‍​‍‌development.
           </p>
           <h2 className={styles.heading}>Why Srirangapatna Is a Holy Place for Tila Homa</h2>  
           <p className={styles.subText}>
           Srirangapatna’s​‍​‌‍​‍‌​‍​‌‍​‍‌ cosmic power, meeting of the holy rivers, and old temples are some of the features that make it a very potent place for any kind of ancestor rituals. Doing Tila Homa in Srirangapatna at the Sangama not only intensifies the spiritual experience of the ritual but also makes the offerings more accessible to the ancestral realm.
           </p>
           <p className={styles.subText}>
           The entire area is under the grace of Lord Ranganatha and hence it has a very serene and tranquil vibe. a number of devotees decide on Tila Homa in Srirangapatna because the location is like a natural purifier and it is also conducive for the upliftment of the ancestors and the emotional well-being of the ​‍​‌‍​‍‌​‍​‌‍​‍‌person.

           </p>
           <h2 className={styles.heading}>How We Perform Tila Homa </h2>  
           <p className={styles.subText}>
           Our​‍​‌‍​‍‌​‍​‌‍​‍‌ priests perform the rites in accordance with stringent Vedic rituals consuming sesame seeds, ghee, mantras, and fire offerings. The whole ceremonial process at the Tila Homa in Srirangapatna is marked with sankalpa, mantra chanting, tila offerings, tarpanam, and homa completion with blessings.
           </p>
           <p className={styles.subText}>
           at the end of the Tila Homa in Srirangapatna, the priests invoke the deities for the health, wealth, and harmonious nature of the family. The entire program is executed with dedication and faith which is believed to be a source of divine peace and ​‍​‌‍​‍‌​‍​‌‍​‍‌joy.
           </p>

          <h2 className={styles.heading}>Why Choose Us for Tila Homa </h2>  
           <p className={styles.subText}>
           Through​‍​‌‍​‍‌​‍​‌‍​‍‌ experienced priests and fully organized services, the families get Tila Homa at Srirangapatna not only easy and peaceful but also spiritually guided under our service. We are the ones who take care of every detail—from sankalpa to homa completion—with purity and authenticity.
          </p>
          <p className={styles.subText}>
          The regular Tila Homa in Srirangapatna conducted with proper explanations, smooth arrangements, and traditional discipline is what the devotees say. Our presence, experience, and expertise during the ritual enable us to provide guidance and solace.
          </p>


       
          <h3 className={styles.subHeading}>
          How We Help Families to Trust Us
          </h3>  
           <p className={styles.subText}>
           • Tila Homa in Srirangapatna by certified priests is a true Vedic ritual with authentic procedures.
          </p>
          <p className={styles.subText}>
           • We, the team, are providing all pooja items that are necessary for Tila Homa in Srirangapatna.
          </p>
          <p className={styles.subText}>
           • Under our guidance, a great number of people have done Tila Homa in Srirangapatna.
          </p>
          <p className={styles.subText}>
           • The riverbank places that are holy are set up for Tila Homa in Srirangapatna.
          </p>
          <p className={styles.subText}>
           • If the Tila Homa is happening in Srirangapatna, then there would be clear instructions and spiritual support for ​‍​‌‍​‍‌​‍​‌‍​‍‌sure.
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