"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Programs.module.css";
import { PROGRAMS, Program } from "@/data/gymData";

interface ProgramsProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "strength", label: "Strength & Iron" },
    { id: "hiit", label: "Velocity HIIT" },
    { id: "combat", label: "Combat & Boxing" },
    { id: "mobility", label: "Mobility & Flow" },
    { id: "personal", label: "1-on-1 Coaching" },
  ];

  const filteredPrograms =
    activeCategory === "all"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  const getIntensityBadgeClass = (intensity: Program["intensity"]) => {
    switch (intensity) {
      case "Extreme":
        return "badge-flame";
      case "High":
        return "badge-neon";
      case "Moderate":
        return "badge-mint";
      default:
        return "badge-cyan";
    }
  };

  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🔥 TRAINING DISCIPLINES</span>
          </div>
          <h2 className="section-title">
            TRANSFORM YOUR BODY <br />
            <span className="text-gradient">WITH TARGETED TRACKS</span>
          </h2>
          <p className="section-subtitle">
            Whether your goal is explosive strength, shredded endurance, pugilistic agility, or restorative mobility, we have engineered science-backed programs for you.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className={styles.filterPillContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterPill} ${
                activeCategory === cat.id ? styles.filterPillActive : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid-3">
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className={`${styles.programCard} card-glass`}>
              {/* Card Image Banner */}
              <div className={styles.imageContainer}>
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.programImage}
                />
                <div className={styles.imageOverlay}></div>

                {prog.tag && (
                  <span className={styles.programTagBadge}>{prog.tag}</span>
                )}

                <div className={styles.categoryPillTop}>
                  <span className={`badge ${getIntensityBadgeClass(prog.intensity)}`}>
                    {prog.intensity} Intensity
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {prog.duration}
                  </span>
                  <span className={styles.metaItem}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    {prog.calories}
                  </span>
                </div>

                <h3 className={styles.programTitle}>{prog.title}</h3>
                <p className={styles.programDesc}>{prog.description}</p>

                {/* Features List */}
                <div className={styles.featureHighlights}>
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.featureBullet}>•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Trainer & Booking Action */}
                <div className={styles.cardActionRow}>
                  <div className={styles.trainerInfo}>
                    <span className={styles.trainerLabel}>Lead Coach</span>
                    <span className={styles.trainerName}>{prog.trainer}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Class: ${prog.title}`)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Book Session</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Programs;
