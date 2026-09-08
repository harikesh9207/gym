"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { GYM_INFO } from "@/data/gymData";

interface FooterProps {
  onSuccessToast: (title: string, message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    onSuccessToast(
      "Subscribed to Weekly Shred! 📩",
      `Thanks for joining! We've sent your free 4-Week High-Intensity Blueprint to ${email.trim()}.`
    );
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Strip */}
      <div className={styles.newsletterStrip}>
        <div className={`container ${styles.newsletterContainer}`}>
          <div className={styles.newsletterText}>
            <span className={styles.newsletterTag}>🔥 THE FIT & FLEX DISPATCH</span>
            <h3 className={styles.newsletterTitle}>
              GET FREE WEEKLY WORKOUT BLUEPRINTS & NUTRITION PROTOCOLS
            </h3>
            <p className={styles.newsletterDesc}>
              No spam. Just hard science, workout routines from our master coaches, and VIP invite codes.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    fill="var(--accent-neon)"
                    stroke="var(--accent-neon)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span>FIT</span>
                <span style={{ color: "var(--accent-neon)" }}>&</span>
                <span>FLEX</span>
              </div>
            </a>

            <p className={styles.brandBio}>
              Metropolis's premier high-performance athletic training destination. Olympic lifting, heart-rate HIIT, championship boxing, and contrast recovery.
            </p>

            <div className={styles.socialRow}>
              {["Instagram", "YouTube", "TikTok", "Strava"].map((soc) => (
                <a key={soc} href="#" className={styles.socialLink}>
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Training Disciplines */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>PROGRAMS</h4>
            <ul className={styles.linkList}>
              <li><a href="#programs">Iron Hypertrophy</a></li>
              <li><a href="#programs">Velocity HIIT</a></li>
              <li><a href="#programs">Combat Boxing</a></li>
              <li><a href="#programs">Athletic Mobility</a></li>
              <li><a href="#programs">1-on-1 Master Coaching</a></li>
              <li><a href="#programs">InBody Biometrics</a></li>
            </ul>
          </div>

          {/* Hours & Club Access */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>CLUB HOURS</h4>
            <div className={styles.hoursBlock}>
              <div className={styles.hourItem}>
                <span className={styles.hourDay}>Gym Access:</span>
                <span className={styles.hourTime}>24 Hours / 7 Days a Week</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.hourDay}>Staffed Hours (Mon - Fri):</span>
                <span className={styles.hourTime}>05:30 AM – 11:00 PM</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.hourDay}>Staffed Hours (Sat - Sun):</span>
                <span className={styles.hourTime}>07:00 AM – 09:00 PM</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.hourDay}>Sauna & Cold Plunge:</span>
                <span className={styles.hourTime}>06:00 AM – 10:30 PM Daily</span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>LOCATION & CONTACT</h4>
            <div className={styles.contactBlock}>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{GYM_INFO.address}</span>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>{GYM_INFO.phone}</span>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>{GYM_INFO.email}</span>
              </p>
              <div className={styles.transitBadge}>
                🚇 3-min walk from Metro Central • Free Member Parking
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Fit & Flex Fitness Club LLC. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Safety & Hygiene Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
