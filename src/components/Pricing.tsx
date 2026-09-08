"use client";

import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { PRICING_PLANS } from "@/data/gymData";

interface PricingProps {
  onOpenBooking: (prefill?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>💳 MEMBERSHIP TIERS</span>
          </div>
          <h2 className="section-title">
            INVEST IN YOUR <br />
            <span className="text-gradient">ULTIMATE PHYSIQUE</span>
          </h2>
          <p className="section-subtitle">
            Flexible memberships designed for pure athletic progression. No hidden sign-up fees, no lock-in contracts, cancel or freeze anytime.
          </p>

          {/* Billing Cycle Switcher */}
          <div className={styles.billingToggleWrapper}>
            <div className={styles.billingToggleBox}>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`${styles.toggleBtn} ${billingCycle === "monthly" ? styles.toggleBtnActive : ""}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`${styles.toggleBtn} ${billingCycle === "annual" ? styles.toggleBtnActive : ""}`}
              >
                Annual Membership
                <span className={styles.discountBadge}>Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-3">
          {PRICING_PLANS.map((plan) => {
            const price =
              billingCycle === "annual"
                ? plan.annualMonthlyPrice
                : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`${styles.pricingCard} card-glass ${
                  plan.popular ? styles.popularCard : ""
                }`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <span>★ MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div className={styles.cardTop}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planTagline}>{plan.tagline}</p>

                  <div className={styles.priceRow}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.priceNum}>{price}</span>
                    <span className={styles.period}>/ month</span>
                  </div>
                  {billingCycle === "annual" && (
                    <div className={styles.billedYearly}>
                      Billed annually (${price * 12}/yr)
                    </div>
                  )}
                </div>

                <div className={styles.divider}></div>

                {/* Features Checklist */}
                <div className={styles.featuresList}>
                  <div className={styles.featureGroupTitle}>INCLUDED PRIVILEGES</div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className={styles.featureItem}>
                      <div className={styles.checkIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className={styles.actionBox}>
                  <button
                    onClick={() =>
                      onOpenBooking(
                        `Membership: ${plan.name} (${billingCycle.toUpperCase()} - $${price}/mo)`
                      )
                    }
                    className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                    style={{ width: "100%" }}
                  >
                    <span>Choose {plan.name}</span>
                  </button>

                  <div className={styles.guaranteeText}>
                    ✓ 14-Day Money-Back Guarantee
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
