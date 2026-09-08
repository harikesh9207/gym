"use client";

import React, { useState, useEffect } from "react";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillItem?: string;
  onSuccessToast: (title: string, message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillItem = "7-Day Free Trial Pass",
  onSuccessToast,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("Muscle Building & Hypertrophy");
  const [timeSlot, setTimeSlot] = useState("Morning (06:00 AM - 10:00 AM)");
  const [interest, setInterest] = useState(prefillItem);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (prefillItem) {
      setInterest(prefillItem);
    }
  }, [prefillItem]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    setError("");
    setIsSubmitted(true);
    onSuccessToast(
      "Pass Activated Successfully! 🎉",
      `Welcome ${fullName.trim()}! Your digital VIP access pass for Fit & Flex has been emailed to ${email.trim()}.`
    );
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Close Button */}
        <button
          onClick={handleResetAndClose}
          className={styles.closeBtn}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div className={styles.modalBody}>
            <div className={styles.headerBox}>
              <div className="section-tag" style={{ marginBottom: "8px" }}>
                <span>⚡ INSTANT ACCESS PASS</span>
              </div>
              <h2 className={styles.title}>
                UNLEASH YOUR <br />
                <span className="text-gradient">FULL POTENTIAL</span>
              </h2>
              <p className={styles.sub}>
                Zero obligations. Experience our Olympic Eleiko platforms, Velocity HIIT, and contrast sauna recovery suite with a complimentary pass.
              </p>
            </div>

            {error && <div className={styles.errorAlert}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Henderson"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className={styles.twoCol}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    placeholder="alex@fitness.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Program or Reservation</label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="form-input"
                  placeholder="e.g. 7-Day Free Trial Pass"
                />
              </div>

              <div className={styles.twoCol}>
                <div className="form-group">
                  <label className="form-label">Primary Fitness Goal</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="form-select"
                  >
                    <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                    <option value="Fat Loss & Calorie Burn">Fat Loss & Conditioning</option>
                    <option value="Athletic Strength & Power">Athletic Strength & Power</option>
                    <option value="Boxing & Combat Fitness">Boxing & Combat Fitness</option>
                    <option value="Mobility & Injury Rehab">Mobility & Longevity</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Training Time</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="form-select"
                  >
                    <option value="Early Bird (05:30 AM - 08:30 AM)">Early Bird (05:30 AM - 08:30 AM)</option>
                    <option value="Mid-Day / Lunch (11:30 AM - 02:00 PM)">Mid-Day / Lunch (11:30 AM - 02:00 PM)</option>
                    <option value="Evening Prime (05:00 PM - 09:00 PM)">Evening Prime (05:00 PM - 09:00 PM)</option>
                    <option value="Late Night (09:00 PM - 12:00 AM)">Late Night 24/7</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginTop: "10px" }}
              >
                <span>Activate My 7-Day Free Pass</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

              <div className={styles.privacyNote}>
                🔒 We respect your privacy. No spam, zero lock-in contracts, cancel anytime.
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.successView}>
            <div className={styles.successIconBox}>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className={styles.successTitle}>YOU'RE ON THE ROSTER!</h2>
            <div className={styles.passBadge}>
              <span className="live-dot"></span>
              <span>VIP DIGITAL PASS ACTIVE</span>
            </div>

            <p className={styles.successText}>
              Welcome to the pack, <strong>{fullName}</strong>! We've reserved your access for <strong>{interest}</strong>.
            </p>

            <div className={styles.detailsCard}>
              <div className={styles.detailRow}>
                <span>Location:</span>
                <strong>742 Evergreen Terrace (Downtown)</strong>
              </div>
              <div className={styles.detailRow}>
                <span>Access Window:</span>
                <strong>7 Days Unlimited (24/7 Access)</strong>
              </div>
              <div className={styles.detailRow}>
                <span>Confirmation Sent To:</span>
                <strong>{email}</strong>
              </div>
            </div>

            <p className={styles.instructionNote}>
              Show this confirmation or the QR code in your email upon arrival at the Fit & Flex front desk for your member RFID wristband.
            </p>

            <button
              onClick={handleResetAndClose}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookingModal;
