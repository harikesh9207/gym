"use client";

import React, { useState } from "react";
import styles from "./Schedule.module.css";
import {
  SCHEDULE_ITEMS,
  SCHEDULE_DAYS,
  ScheduleItem,
} from "@/data/gymData";

interface ScheduleProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState<typeof SCHEDULE_DAYS[number]>("Monday");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Classes" },
    { id: "strength", label: "Strength" },
    { id: "hiit", label: "HIIT" },
    { id: "combat", label: "Combat" },
    { id: "spin", label: "Spin" },
    { id: "mobility", label: "Mobility" },
  ];

  const currentClasses = SCHEDULE_ITEMS.filter((item) => {
    const dayMatches = item.day === selectedDay;
    const catMatches = selectedCategory === "all" || item.category === selectedCategory;
    return dayMatches && catMatches;
  });

  const getIntensityBadge = (intensity: ScheduleItem["intensity"]) => {
    switch (intensity) {
      case "Extreme":
        return <span className="badge badge-flame">Extreme</span>;
      case "High":
        return <span className="badge badge-neon">High</span>;
      case "Moderate":
        return <span className="badge badge-mint">Moderate</span>;
      default:
        return null;
    }
  };

  return (
    <section id="schedule" className="section" style={{ background: "rgba(10, 14, 22, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag cyan">
            <span>📅 LIVE TIMETABLE</span>
          </div>
          <h2 className="section-title">
            WEEKLY CLASS <br />
            <span className="text-gradient">SCHEDULE & BOOKING</span>
          </h2>
          <p className="section-subtitle">
            Reserve your spot in high-energy classes led by master instructors. Real-time capacity ensures optimal coach-to-athlete attention.
          </p>
        </div>

        {/* Days of Week Tab Switcher */}
        <div className={styles.daySelectorWrapper}>
          <div className={styles.daySelector}>
            {SCHEDULE_DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`${styles.dayTab} ${
                  selectedDay === day ? styles.dayTabActive : ""
                }`}
              >
                <span className={styles.dayAbbr}>{day.substring(0, 3)}</span>
                <span className={styles.dayFull}>{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Category Filter */}
        <div className={styles.categoryFilterRow}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`${styles.catButton} ${
                selectedCategory === c.id ? styles.catButtonActive : ""
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Schedule Grid / Table */}
        <div className={styles.scheduleList}>
          {currentClasses.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No classes scheduled for this category on {selectedDay}.</p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "12px" }}
              >
                View All {selectedDay} Classes
              </button>
            </div>
          ) : (
            currentClasses.map((item) => {
              const spotsPercentage = ((item.maxSpots - item.spotsLeft) / item.maxSpots) * 100;
              const isLowSpots = item.spotsLeft <= 3;

              return (
                <div key={item.id} className={`${styles.scheduleCard} card-glass`}>
                  {/* Time & Duration Column */}
                  <div className={styles.timeBlock}>
                    <div className={styles.classTime}>{item.time}</div>
                    <div className={styles.classDuration}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {item.duration}
                    </div>
                  </div>

                  {/* Class Info */}
                  <div className={styles.classInfo}>
                    <div className={styles.classMeta}>
                      <span className={styles.roomBadge}>{item.room}</span>
                      {getIntensityBadge(item.intensity)}
                    </div>
                    <h3 className={styles.className}>{item.title}</h3>
                    <div className={styles.coachName}>
                      Coach: <strong>{item.coach}</strong>
                    </div>
                  </div>

                  {/* Spots Indicator */}
                  <div className={styles.spotsBlock}>
                    <div className={styles.spotsText}>
                      <span className={isLowSpots ? styles.lowSpots : styles.normalSpots}>
                        {isLowSpots ? "🔥 Only " : ""}
                        {item.spotsLeft} spots remaining
                      </span>
                      <span className={styles.spotsTotal}>/ {item.maxSpots}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={`${styles.progressFill} ${isLowSpots ? styles.progressLow : ""}`}
                        style={{ width: `${spotsPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className={styles.actionBlock}>
                    <button
                      onClick={() =>
                        onOpenBooking(
                          `${item.title} (${selectedDay} at ${item.time})`
                        )
                      }
                      className="btn btn-primary btn-sm"
                    >
                      <span>Reserve Spot</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
export default Schedule;
