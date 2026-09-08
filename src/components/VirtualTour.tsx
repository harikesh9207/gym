"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./VirtualTour.module.css";
import { FACILITY_ZONES } from "@/data/gymData";

export const VirtualTour: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>(FACILITY_ZONES[0].id);

  const activeZone = FACILITY_ZONES.find((z) => z.id === activeZoneId) || FACILITY_ZONES[0];

  return (
    <section id="facility" className="section" style={{ background: "rgba(10, 14, 22, 0.6)" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag cyan">
            <span>🏟️ WORLD-CLASS SPACES</span>
          </div>
          <h2 className="section-title">
            TOUR OUR 35,000 SQ FT <br />
            <span className="text-gradient-cyan">PERFORMANCE FACILITY</span>
          </h2>
          <p className="section-subtitle">
            Every millimeter engineered for peak focus. Acoustic zoning, surgical-grade air filtration (HEPA-13), and luxury contrast therapy.
          </p>
        </div>

        {/* Interactive Zone Navigation Tabs */}
        <div className={styles.zoneTabsWrapper}>
          <div className={styles.zoneTabs}>
            {FACILITY_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`${styles.zoneTab} ${
                  activeZoneId === zone.id ? styles.zoneTabActive : ""
                }`}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Zone Display Card */}
        <div className={`${styles.showcaseCard} card-glass`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={activeZone.image}
                alt={activeZone.name}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                className={styles.zoneImage}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.liveBadge}>
                <span className="live-dot"></span>
                <span>360° Facility Zone</span>
              </div>
            </div>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.zoneTagline}>{activeZone.tagline}</div>
            <h3 className={styles.zoneTitle}>{activeZone.name}</h3>
            <p className={styles.zoneDesc}>{activeZone.description}</p>

            <div className={styles.specsHeader}>ZONE SPECIFICATIONS</div>
            <div className={styles.specsGrid}>
              {activeZone.specs.map((spec, i) => (
                <div key={i} className={styles.specItem}>
                  <span className={styles.specDot}>✓</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className={styles.facilityPerks}>
              <div className={styles.perk}>
                <strong>24/7</strong>
                <span>Member Access</span>
              </div>
              <div className={styles.perk}>
                <strong>HEPA-13</strong>
                <span>Air Filtration</span>
              </div>
              <div className={styles.perk}>
                <strong>Acoustic</strong>
                <span>Bose Sound System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VirtualTour;
