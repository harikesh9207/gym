"use client";

import React from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { TESTIMONIALS } from "@/data/gymData";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🔥 VERIFIED OUTCOMES</span>
          </div>
          <h2 className="section-title">
            REAL MEMBERS. <br />
            <span className="text-gradient">MEASURABLE TRANSFORMATIONS.</span>
          </h2>
          <p className="section-subtitle">
            See how our athletes broke through plateaus, packed on dense muscle, shredded body fat, and unlocked bulletproof confidence.
          </p>
        </div>

        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={`${styles.testimonialCard} card-glass`}>
              <div className={styles.quoteIcon}>“</div>

              {/* Achievement Badge */}
              <div className={styles.achievementBadge}>
                <span className={styles.trophy}>🏆</span>
                <span>{t.achievement}</span>
              </div>

              {/* Quote Text */}
              <p className={styles.quoteText}>{t.quote}</p>

              {/* Stars Rating */}
              <div className={styles.ratingStars}>
                {"★".repeat(t.rating)}
              </div>

              {/* Member Profile */}
              <div className={styles.memberRow}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={52}
                    height={52}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.memberMeta}>
                  <div className={styles.memberName}>{t.name}</div>
                  <div className={styles.memberSub}>
                    {t.timeframe} • <span className={styles.progTag}>{t.program}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
