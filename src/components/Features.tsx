"use client";

import React from "react";
import styles from "./Features.module.css";

export const Features: React.FC = () => {
  const featuresList = [
    {
      id: "equipment",
      badge: "PRO ARSENAL",
      title: "Olympic Lifting & Heavy Iron",
      desc: "12 Eleiko competition platforms, calibrated competition discs, heavy dumbbell towers up to 70kg, and custom Hammer Strength plate-loaded machines.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
        </svg>
      ),
      highlight: "350+ Pro Machines",
      accent: "var(--accent-neon)",
    },
    {
      id: "coaching",
      badge: "ELITE MENTORSHIP",
      title: "Certified Master Coaches",
      desc: "Our CSCS and Olympic-certified trainers provide real-time form correction, personalized progressive overload tracking, and nutrition programming.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      ),
      highlight: "1-on-1 Personalized Guidance",
      accent: "var(--accent-cyan)",
    },
    {
      id: "studios",
      badge: "IMMERSIVE STATIONS",
      title: "High-Octane Group Arenas",
      desc: "Sweat in bespoke boutique environments: heart-rate monitored Velocity HIIT, high-wattage cycle studio, full regulation boxing ring, and Zen mobility lofts.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      highlight: "Live Heart-Rate Telemetry",
      accent: "var(--accent-flame)",
    },
    {
      id: "recovery",
      badge: "RESTORE & REBUILD",
      title: "Contrast Recovery & Sauna",
      desc: "Accelerate recovery with 88°C Finnish dry saunas, dual 4°C cold plunges, Hyperice compression boots, and infrared recovery pods for maximum longevity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      highlight: "4°C Cold Plunge & Cedar Sauna",
      accent: "var(--accent-mint)",
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>⚡ THE FIT & FLEX ADVANTAGE</span>
          </div>
          <h2 className="section-title">
            ENGINEERED FOR <br />
            <span className="text-gradient">PEAK PERFORMANCE</span>
          </h2>
          <p className="section-subtitle">
            Every square foot is obsessively designed to strip away excuses and optimize your strength, speed, conditioning, and recovery.
          </p>
        </div>

        <div className="grid-4">
          {featuresList.map((item) => (
            <div key={item.id} className={`${styles.featureCard} card-glass`}>
              <div className={styles.cardHeader}>
                <div
                  className={styles.featureIconBox}
                  style={{
                    color: item.accent,
                    background: `rgba(255,255,255,0.03)`,
                    borderColor: `rgba(255,255,255,0.08)`,
                  }}
                >
                  {item.icon}
                </div>
                <span className={styles.cardBadge} style={{ color: item.accent }}>
                  {item.badge}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>

              <div className={styles.cardFooter}>
                <span className={styles.highlightPill}>
                  <span className={styles.checkIcon}>✓</span>
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
