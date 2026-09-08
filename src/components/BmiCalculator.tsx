"use client";

import React, { useState, useMemo } from "react";
import styles from "./BmiCalculator.module.css";

interface BmiCalculatorProps {
  onOpenBooking: (prefill?: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenBooking }) => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [goal, setGoal] = useState<"shred" | "muscle" | "endurance" | "health">("muscle");
  const [activity, setActivity] = useState<number>(1.55); // moderate

  // Metric state
  const [heightCm, setHeightCm] = useState<number>(178);
  const [weightKg, setWeightKg] = useState<number>(75);

  // Imperial state
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(10);
  const [weightLbs, setWeightLbs] = useState<number>(165);

  const calculated = useMemo(() => {
    let heightMeters = 0;
    let weightInKg = 0;

    if (unit === "metric") {
      heightMeters = heightCm / 100;
      weightInKg = weightKg;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      heightMeters = totalInches * 0.0254;
      weightInKg = weightLbs * 0.453592;
    }

    if (heightMeters <= 0 || weightInKg <= 0) {
      return { bmi: 0, category: "N/A", color: "var(--text-muted)", calories: 2000, protein: 140, recProgram: "General Fitness" };
    }

    const bmiVal = weightInKg / (heightMeters * heightMeters);
    const roundedBmi = parseFloat(bmiVal.toFixed(1));

    let category = "Normal";
    let color = "var(--accent-mint)";

    if (roundedBmi < 18.5) {
      category = "Underweight";
      color = "var(--accent-cyan)";
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      category = "Healthy & Athletic";
      color = "var(--accent-neon)";
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      category = "Overweight";
      color = "var(--accent-flame)";
    } else {
      category = "High BMI";
      color = "#ff3366";
    }

    // Basal Metabolic Rate (Mifflin-St Jeor)
    const baseBmr =
      gender === "male"
        ? 10 * weightInKg + 6.25 * (heightMeters * 100) - 5 * 28 + 5
        : 10 * weightInKg + 6.25 * (heightMeters * 100) - 5 * 28 - 161;

    let tdee = baseBmr * activity;
    let recProgram = "Iron Hypertrophy & Strength";

    if (goal === "shred") {
      tdee -= 450;
      recProgram = "Velocity HIIT & Conditioning";
    } else if (goal === "muscle") {
      tdee += 300;
      recProgram = "Iron Hypertrophy & Strength";
    } else if (goal === "endurance") {
      recProgram = "Tactical Hybrid Fitness & Spin";
    } else {
      recProgram = "Athletic Yoga & Decompression Flow";
    }

    const targetCalories = Math.round(tdee);
    const targetProtein = Math.round(weightInKg * (goal === "muscle" ? 2.0 : 1.7));

    // Calculate gauge needle percentage (BMI range 15 to 35 mapped to 0% to 100%)
    const gaugePercent = Math.min(Math.max(((roundedBmi - 15) / (35 - 15)) * 100, 0), 100);

    return {
      bmi: roundedBmi,
      category,
      color,
      calories: targetCalories,
      protein: targetProtein,
      recProgram,
      gaugePercent,
    };
  }, [unit, gender, goal, activity, heightCm, weightKg, heightFeet, heightInches, weightLbs]);

  return (
    <section id="calculator" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>⚖️ INTERACTIVE PERFORMANCE CALCULATOR</span>
          </div>
          <h2 className="section-title">
            ANALYZE YOUR BODY & <br />
            <span className="text-gradient">CALCULATE TARGET FUEL</span>
          </h2>
          <p className="section-subtitle">
            Get your instant BMI breakdown, baseline caloric requirements, target daily protein intake, and recommended training discipline.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          {/* Inputs Section */}
          <div className={styles.inputsSection}>
            <div className={styles.topControlRow}>
              <div className={styles.toggleGroup}>
                <button
                  onClick={() => setUnit("metric")}
                  className={`${styles.toggleBtn} ${unit === "metric" ? styles.toggleActive : ""}`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  onClick={() => setUnit("imperial")}
                  className={`${styles.toggleBtn} ${unit === "imperial" ? styles.toggleActive : ""}`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>

              <div className={styles.genderGroup}>
                <button
                  onClick={() => setGender("male")}
                  className={`${styles.genderBtn} ${gender === "male" ? styles.genderActive : ""}`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`${styles.genderBtn} ${gender === "female" ? styles.genderActive : ""}`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Slider / Range Controls */}
            {unit === "metric" ? (
              <>
                <div className={styles.rangeControl}>
                  <div className={styles.rangeHeader}>
                    <label>Height</label>
                    <span className={styles.rangeValue}>{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className={styles.slider}
                  />
                </div>

                <div className={styles.rangeControl}>
                  <div className={styles.rangeHeader}>
                    <label>Weight</label>
                    <span className={styles.rangeValue}>{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="160"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className={styles.slider}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.imperialRow}>
                  <div className={styles.rangeControl} style={{ flex: 1 }}>
                    <div className={styles.rangeHeader}>
                      <label>Feet</label>
                      <span className={styles.rangeValue}>{heightFeet} ft</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="7"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(Number(e.target.value))}
                      className={styles.slider}
                    />
                  </div>

                  <div className={styles.rangeControl} style={{ flex: 1 }}>
                    <div className={styles.rangeHeader}>
                      <label>Inches</label>
                      <span className={styles.rangeValue}>{heightInches} in</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="11"
                      value={heightInches}
                      onChange={(e) => setHeightInches(Number(e.target.value))}
                      className={styles.slider}
                    />
                  </div>
                </div>

                <div className={styles.rangeControl}>
                  <div className={styles.rangeHeader}>
                    <label>Weight</label>
                    <span className={styles.rangeValue}>{weightLbs} lbs</span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="350"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className={styles.slider}
                  />
                </div>
              </>
            )}

            {/* Goal Selector */}
            <div className={styles.goalControl}>
              <label className={styles.controlLabel}>Fitness Objective</label>
              <div className={styles.goalGrid}>
                {[
                  { id: "shred", label: "Fat Loss & Shred" },
                  { id: "muscle", label: "Lean Muscle Hypertrophy" },
                  { id: "endurance", label: "Athletic Conditioning" },
                  { id: "health", label: "Mobility & Longevity" },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    className={`${styles.goalBtn} ${goal === g.id ? styles.goalActive : ""}`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div className={styles.activityControl}>
              <label className={styles.controlLabel}>Activity Multiplier</label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="form-select"
              >
                <option value={1.2}>Sedentary (Desk job, little exercise)</option>
                <option value={1.375}>Lightly Active (1-3 workouts / week)</option>
                <option value={1.55}>Moderately Active (3-5 intense workouts / week)</option>
                <option value={1.725}>Very Active (6-7 intense sessions / week)</option>
                <option value={1.9}>Elite Athlete (2x training per day)</option>
              </select>
            </div>
          </div>

          {/* Results Display Section */}
          <div className={styles.resultsSection}>
            <div className={styles.resultsHeader}>
              <span className="live-dot"></span>
              <span>YOUR METABOLIC PROFILE</span>
            </div>

            {/* BMI Dial Card */}
            <div className={styles.bmiDialBox}>
              <div className={styles.bmiNumber} style={{ color: calculated.color }}>
                {calculated.bmi}
              </div>
              <div className={styles.bmiClassification} style={{ color: calculated.color }}>
                {calculated.category}
              </div>

              {/* Gauge Bar */}
              <div className={styles.gaugeBar}>
                <div className={styles.gaugeUnderweight}></div>
                <div className={styles.gaugeNormal}></div>
                <div className={styles.gaugeOverweight}></div>
                <div className={styles.gaugeObese}></div>
                <div
                  className={styles.gaugeNeedle}
                  style={{ left: `${calculated.gaugePercent}%` }}
                ></div>
              </div>
              <div className={styles.gaugeLabels}>
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
            </div>

            {/* Target Output Metrics */}
            <div className={styles.targetGrid}>
              <div className={styles.targetBox}>
                <div className={styles.targetLabel}>Target Calories</div>
                <div className={styles.targetValue}>{calculated.calories} kcal</div>
                <div className={styles.targetHint}>Daily TDEE adjusted for your goal</div>
              </div>

              <div className={styles.targetBox}>
                <div className={styles.targetLabel}>Target Protein</div>
                <div className={styles.targetValue}>{calculated.protein}g / day</div>
                <div className={styles.targetHint}>Essential for repair & recovery</div>
              </div>
            </div>

            {/* Recommended Program Card */}
            <div className={styles.recommendationCard}>
              <div className={styles.recTag}>RECOMMENDED STARTING TRACK</div>
              <div className={styles.recTitle}>{calculated.recProgram}</div>
              <p className={styles.recDesc}>
                Scientifically optimal discipline for your current biometric profile and objective.
              </p>
              <button
                onClick={() =>
                  onOpenBooking(`Program: ${calculated.recProgram} (BMI: ${calculated.bmi})`)
                }
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "16px" }}
              >
                Claim Free Pass & Test This Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BmiCalculator;
