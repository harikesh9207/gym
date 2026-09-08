"use client";

import React from "react";
import Image from "next/image";
import styles from "./Trainers.module.css";
import { TRAINERS } from "@/data/gymData";

interface TrainersProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenBooking }) => {
  return (
    <section id="trainers" className="section" style={{ background: "rgba(8, 11, 17, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🏆 MASTER COACHES</span>
          </div>
          <h2 className="section-title">
            LEARN FROM <br />
            <span className="text-gradient">CHAMPION ATHLETES</span>
          </h2>
          <p className="section-subtitle">
            Our certified master trainers aren't just rep counters. They hold accredited sports science degrees, Olympic coaching certifications, and world championship accolades.
          </p>
        </div>

        <div className="grid-4">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className={`${styles.trainerCard} card-glass`}>
              <div className={styles.imageBox}>
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.trainerImg}
                />
                <div className={styles.imageGrad}></div>

                {/* Rating Badge */}
                <div className={styles.ratingBadge}>
                  <span style={{ color: "#ffb703" }}>★</span>
                  <span>{trainer.stats.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className={styles.expBadge}>
                  {trainer.experience}
                </div>
              </div>

              <div className={styles.trainerDetails}>
                <h3 className={styles.name}>{trainer.name}</h3>
                <div className={styles.role}>{trainer.role}</div>
                <div className={styles.cert}>{trainer.certification}</div>

                <p className={styles.bio}>{trainer.bio}</p>

                {/* Specialties Tags */}
                <div className={styles.specialtiesList}>
                  {trainer.specialties.map((spec, i) => (
                    <span key={i} className={styles.specTag}>
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Booking Button */}
                <div className={styles.cardFooter}>
                  <button
                    onClick={() => onOpenBooking(`1-on-1 Coaching with ${trainer.name}`)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: "100%" }}
                  >
                    <span>Book 1-on-1 Consultation</span>
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
export default Trainers;
