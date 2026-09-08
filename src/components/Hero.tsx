"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { GYM_INFO } from "@/data/gymData";

interface HeroProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className={styles.heroSection}>
      {/* Dynamic ambient backdrops */}
      <div className={styles.glowSpotlightLeft}></div>
      <div className={styles.glowSpotlightRight}></div>

      <div className={`container ${styles.heroContainer}`}>
        {/* Left: Text & Content */}
        <div className={styles.heroContent}>
          <div className={styles.challengeBadge}>
            <span className="live-dot"></span>
            <span className={styles.badgeHighlight}>NEW YEAR RESET</span>
            <span className={styles.badgeDivider}>•</span>
            <span>30-Day Free Pass Available</span>
          </div>

          <h1 className={styles.heroTitle}>
            FORGE YOUR <br />
            <span className="text-gradient">STRONGEST</span> <br />
            VERSION.
          </h1>

          <p className={styles.heroDescription}>
            {GYM_INFO.subheadline} Precision strength zones, high-octane HIIT arenas, championship boxing, and state-of-the-art cold plunge contrast therapy.
          </p>

          <div className={styles.heroActions}>
            <button
              onClick={() => onOpenBooking("7-Day Free Trial Pass")}
              className="btn btn-primary btn-lg"
            >
              <span>Claim 7-Day Free Pass</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            <a href="#programs" className="btn btn-secondary btn-lg">
              <span>Explore Programs</span>
            </a>
          </div>

          {/* Social Proof Avatars & Rating */}
          <div className={styles.heroProof}>
            <div className={styles.avatarGroup}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Athlete" className={styles.proofAvatar} />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Athlete" className={styles.proofAvatar} />
              <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=100&q=80" alt="Athlete" className={styles.proofAvatar} />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Athlete" className={styles.proofAvatar} />
            </div>
            <div className={styles.proofText}>
              <div className={styles.stars}>
                {"★★★★★"}
              </div>
              <p>Rated <strong>4.9/5</strong> by 3,200+ dedicated athletes</p>
            </div>
          </div>
        </div>

        {/* Right: Visual Showcase with Floating Interactive Metric Badges */}
        <div className={styles.heroVisualWrapper}>
          <div className={styles.imageFrame}>
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
              alt="Athlete training at Fit & Flex Gym"
              width={650}
              height={750}
              priority
              className={styles.heroMainImage}
            />

            {/* Overlay Gradient */}
            <div className={styles.imageGradientOverlay}></div>

            {/* Floating Metric 1: Calorie Burn Badge */}
            <div className={`${styles.floatingCard} ${styles.floatTopRight}`}>
              <div className={styles.floatIcon} style={{ background: "rgba(255, 73, 37, 0.15)", color: "var(--accent-flame)" }}>
                🔥
              </div>
              <div>
                <div className={styles.floatLabel}>Caloric Burn</div>
                <div className={styles.floatValue}>780 kcal / 45m</div>
              </div>
            </div>

            {/* Floating Metric 2: Live Heart Rate */}
            <div className={`${styles.floatingCard} ${styles.floatBottomLeft}`}>
              <div className={styles.floatIcon} style={{ background: "rgba(0, 240, 255, 0.15)", color: "var(--accent-cyan)" }}>
                ⚡
              </div>
              <div>
                <div className={styles.floatLabel}>Peak Heart Rate</div>
                <div className={styles.floatValue}>168 BPM (Zone 4)</div>
              </div>
            </div>

            {/* Floating Metric 3: Weekly Goal Met */}
            <div className={`${styles.floatingCard} ${styles.floatBottomRight}`}>
              <div className={styles.floatIcon} style={{ background: "rgba(204, 255, 0, 0.15)", color: "var(--accent-neon)" }}>
                ✓
              </div>
              <div>
                <div className={styles.floatLabel}>Workout Goal</div>
                <div className={styles.floatValue}>Streak: 18 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className={styles.statsStripWrapper}>
        <div className={`container ${styles.statsContainer}`}>
          {GYM_INFO.stats.map((stat, idx) => (
            <div key={idx} className={styles.statBox}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSub}>{stat.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
