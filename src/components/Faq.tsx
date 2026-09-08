"use client";

import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FAQS } from "@/data/gymData";

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section" style={{ background: "rgba(8, 11, 17, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>❓ FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="section-title">
            EVERYTHING YOU NEED <br />
            <span className="text-gradient">TO KNOW BEFORE JOINING</span>
          </h2>
          <p className="section-subtitle">
            Got questions about access, guest privileges, personal coaching, or our 7-day trial? Here are quick answers.
          </p>
        </div>

        <div className={styles.faqWrapper}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={styles.faqQuestionBtn}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>

                <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faq;
