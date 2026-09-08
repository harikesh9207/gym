export interface Program {
  id: string;
  title: string;
  category: "strength" | "hiit" | "combat" | "mobility" | "personal";
  categoryLabel: string;
  intensity: "Moderate" | "High" | "Extreme";
  duration: string;
  calories: string;
  trainer: string;
  description: string;
  features: string[];
  image: string;
  tag?: string;
}

export interface ScheduleItem {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  title: string;
  category: "strength" | "hiit" | "combat" | "mobility" | "spin";
  categoryLabel: string;
  coach: string;
  room: string;
  duration: string;
  spotsLeft: number;
  maxSpots: number;
  intensity: "Moderate" | "High" | "Extreme";
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  certification: string;
  bio: string;
  image: string;
  stats: {
    clients: string;
    rating: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  features: string[];
  perks: string[];
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  achievement: string;
  image: string;
  quote: string;
  timeframe: string;
  rating: number;
  program: string;
}

export interface FacilityZone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const GYM_INFO = {
  name: "Fit & Flex",
  tagline: "Forge Your Strongest Self",
  subheadline: "Unleash peak athletic performance with world-class equipment, elite master coaches, and dynamic high-energy training spaces.",
  address: "742 Evergreen Terrace, Downtown Metropolis, NY 10001",
  phone: "+1 (800) 555-FLEX",
  email: "hello@fitandflexgym.com",
  hours: {
    weekdays: "24/7 Access (Staffed: 05:30 AM - 11:00 PM)",
    weekends: "24/7 Access (Staffed: 07:00 AM - 09:00 PM)",
  },
  stats: [
    { value: "15K+", label: "Active Members", highlight: "Thriving Community" },
    { value: "45+", label: "Elite Coaches", highlight: "Certified Masters" },
    { value: "350+", label: "Pro Machines", highlight: "Eleiko & Hammer" },
    { value: "98%", label: "Goal Success", highlight: "Verified Results" },
  ],
};

export const PROGRAMS: Program[] = [
  {
    id: "strength-forge",
    title: "Iron Hypertrophy & Strength",
    category: "strength",
    categoryLabel: "Strength & Muscle",
    intensity: "High",
    duration: "60 Min",
    calories: "550 - 750 kcal",
    trainer: "Marcus Vance",
    description: "Progressive overload protocol focused on compound lifts, biomechanics, and pure muscular hypertrophy.",
    features: ["Olympic Eleiko platforms", "Personalized lifting log", "Targeted hypertrophy splits", "Form breakdown review"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    tag: "Most Popular",
  },
  {
    id: "hiit-burn",
    title: "Velocity HIIT & Conditioning",
    category: "hiit",
    categoryLabel: "HIIT & Cardio",
    intensity: "Extreme",
    duration: "45 Min",
    calories: "700 - 950 kcal",
    trainer: "Elena Rostova",
    description: "Heart-pounding interval circuit blending Keiser bikes, SkiErgs, plyometrics, and kettlebells for maximum metabolic burn.",
    features: ["Live heart rate telemetry", "Fast-twitch interval stations", "EPOC afterburn effect", "Custom pace zones"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    tag: "High Calorie Burn",
  },
  {
    id: "combat-boxing",
    title: "Championship Boxing & Striking",
    category: "combat",
    categoryLabel: "Combat & Boxing",
    intensity: "Extreme",
    duration: "50 Min",
    calories: "650 - 850 kcal",
    trainer: "Darius Drake",
    description: "Master authentic pugilistic footwork, heavy bag combinations, slip defense, and core conditioning in our boxing cage.",
    features: ["Heavy bags & speed teardrops", "Footwork agility ladders", "Mitt work combinations", "Core stamina circuits"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80",
    tag: "Pure Energy",
  },
  {
    id: "mobility-flow",
    title: "Athletic Yoga & Deep Recovery",
    category: "mobility",
    categoryLabel: "Mobility & Yoga",
    intensity: "Moderate",
    duration: "55 Min",
    calories: "300 - 450 kcal",
    trainer: "Aria Chen",
    description: "Dynamic vinyasa flows fused with myofascial release, joint decompression, and spinal mobility for injury prevention.",
    features: ["Theragun & foam recovery", "Joint decompression postures", "Controlled breathwork (pranayama)", "Postural correction"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    tag: "Recovery & Balance",
  },
  {
    id: "personal-elite",
    title: "1-on-1 Performance Mastery",
    category: "personal",
    categoryLabel: "1-on-1 Coaching",
    intensity: "High",
    duration: "60 Min",
    calories: "600 - 800 kcal",
    trainer: "Any Head Coach",
    description: "Dedicated bespoke training built strictly around your biometrics, schedule, and aesthetic or athletic goals.",
    features: ["InBody 770 composition scan", "Tailored macro & diet plan", "Biomechanics posture audit", "Weekly progress check-in"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    tag: "Bespoke Training",
  },
  {
    id: "functional-hybrid",
    title: "Tactical Hybrid Fitness",
    category: "strength",
    categoryLabel: "Functional Hybrid",
    intensity: "Extreme",
    duration: "55 Min",
    calories: "650 - 900 kcal",
    trainer: "Marcus Vance",
    description: "Functional fitness combining sled pushes, farmer carries, rope climbs, sandbags, and barbell thrusters.",
    features: ["50m indoor turf lane", "Sleds, sandbags, & rings", "Grip & work capacity focus", "Team energy dynamics"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
  },
];

export const SCHEDULE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  // Monday
  { id: "s1", day: "Monday", time: "06:00 AM", title: "Dawn Velocity HIIT", category: "hiit", categoryLabel: "HIIT", coach: "Elena Rostova", room: "Studio Alpha", duration: "45 min", spotsLeft: 3, maxSpots: 20, intensity: "Extreme" },
  { id: "s2", day: "Monday", time: "08:30 AM", title: "Power Barbell Club", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Iron Deck", duration: "60 min", spotsLeft: 5, maxSpots: 16, intensity: "High" },
  { id: "s3", day: "Monday", time: "12:00 PM", title: "Express Lunch Shred", category: "hiit", categoryLabel: "HIIT", coach: "Elena Rostova", room: "Studio Alpha", duration: "30 min", spotsLeft: 8, maxSpots: 22, intensity: "High" },
  { id: "s4", day: "Monday", time: "05:30 PM", title: "Championship Boxing", category: "combat", categoryLabel: "Combat", coach: "Darius Drake", room: "Combat Cage", duration: "50 min", spotsLeft: 2, maxSpots: 18, intensity: "Extreme" },
  { id: "s5", day: "Monday", time: "07:00 PM", title: "Decompression Yoga", category: "mobility", categoryLabel: "Mobility", coach: "Aria Chen", room: "Zen Loft", duration: "55 min", spotsLeft: 6, maxSpots: 25, intensity: "Moderate" },

  // Tuesday
  { id: "s6", day: "Tuesday", time: "06:30 AM", title: "Glutes & Core Sculpt", category: "strength", categoryLabel: "Strength", coach: "Elena Rostova", room: "Studio Beta", duration: "50 min", spotsLeft: 4, maxSpots: 20, intensity: "High" },
  { id: "s7", day: "Tuesday", time: "09:00 AM", title: "Rhythm Spin Cyclone", category: "spin", categoryLabel: "Spin", coach: "Kai Reynolds", room: "Cycle Arena", duration: "45 min", spotsLeft: 1, maxSpots: 24, intensity: "Extreme" },
  { id: "s8", day: "Tuesday", time: "05:00 PM", title: "Tactical Turf Hybrid", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Turf Zone", duration: "60 min", spotsLeft: 7, maxSpots: 18, intensity: "Extreme" },
  { id: "s9", day: "Tuesday", time: "06:30 PM", title: "Golden Gloves Sparring", category: "combat", categoryLabel: "Combat", coach: "Darius Drake", room: "Combat Cage", duration: "60 min", spotsLeft: 3, maxSpots: 14, intensity: "Extreme" },

  // Wednesday
  { id: "s10", day: "Wednesday", time: "06:00 AM", title: "Hypertrophy Chest & Back", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Iron Deck", duration: "60 min", spotsLeft: 5, maxSpots: 16, intensity: "High" },
  { id: "s11", day: "Wednesday", time: "10:00 AM", title: "Athletic Mobility & Hips", category: "mobility", categoryLabel: "Mobility", coach: "Aria Chen", room: "Zen Loft", duration: "50 min", spotsLeft: 10, maxSpots: 25, intensity: "Moderate" },
  { id: "s12", day: "Wednesday", time: "05:30 PM", title: "Metabolic Inferno HIIT", category: "hiit", categoryLabel: "HIIT", coach: "Elena Rostova", room: "Studio Alpha", duration: "45 min", spotsLeft: 2, maxSpots: 20, intensity: "Extreme" },
  { id: "s13", day: "Wednesday", time: "07:15 PM", title: "Heavy Bag Conditioning", category: "combat", categoryLabel: "Combat", coach: "Darius Drake", room: "Combat Cage", duration: "45 min", spotsLeft: 4, maxSpots: 18, intensity: "High" },

  // Thursday
  { id: "s14", day: "Thursday", time: "07:00 AM", title: "Olympic Lifting Tech", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Iron Deck", duration: "60 min", spotsLeft: 3, maxSpots: 12, intensity: "High" },
  { id: "s15", day: "Thursday", time: "12:00 PM", title: "Sprint & Climb Cardio", category: "spin", categoryLabel: "Spin", coach: "Kai Reynolds", room: "Cycle Arena", duration: "40 min", spotsLeft: 9, maxSpots: 24, intensity: "High" },
  { id: "s16", day: "Thursday", time: "06:00 PM", title: "Full Body Tabata Overdrive", category: "hiit", categoryLabel: "HIIT", coach: "Elena Rostova", room: "Studio Alpha", duration: "45 min", spotsLeft: 1, maxSpots: 20, intensity: "Extreme" },
  { id: "s17", day: "Thursday", time: "07:30 PM", title: "Restorative Sound Bath", category: "mobility", categoryLabel: "Mobility", coach: "Aria Chen", room: "Zen Loft", duration: "60 min", spotsLeft: 8, maxSpots: 25, intensity: "Moderate" },

  // Friday
  { id: "s18", day: "Friday", time: "06:00 AM", title: "Friday Beast Mode HIIT", category: "hiit", categoryLabel: "HIIT", coach: "Elena Rostova", room: "Studio Alpha", duration: "50 min", spotsLeft: 2, maxSpots: 22, intensity: "Extreme" },
  { id: "s19", day: "Friday", time: "09:30 AM", title: "Deadlift & Pull Dominance", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Iron Deck", duration: "60 min", spotsLeft: 6, maxSpots: 16, intensity: "High" },
  { id: "s20", day: "Friday", time: "05:00 PM", title: "Friday Night Fight Club", category: "combat", categoryLabel: "Combat", coach: "Darius Drake", room: "Combat Cage", duration: "60 min", spotsLeft: 4, maxSpots: 18, intensity: "Extreme" },

  // Saturday
  { id: "s21", day: "Saturday", time: "08:00 AM", title: "Weekend Warrior Boot Camp", category: "hiit", categoryLabel: "HIIT", coach: "Elena & Marcus", room: "Turf Zone", duration: "60 min", spotsLeft: 5, maxSpots: 30, intensity: "Extreme" },
  { id: "s22", day: "Saturday", time: "10:00 AM", title: "Vinyasa Flow & Release", category: "mobility", categoryLabel: "Mobility", coach: "Aria Chen", room: "Zen Loft", duration: "60 min", spotsLeft: 11, maxSpots: 25, intensity: "Moderate" },
  { id: "s23", day: "Saturday", time: "11:30 AM", title: "Endurance Spin Marathon", category: "spin", categoryLabel: "Spin", coach: "Kai Reynolds", room: "Cycle Arena", duration: "75 min", spotsLeft: 4, maxSpots: 24, intensity: "High" },

  // Sunday
  { id: "s24", day: "Sunday", time: "09:00 AM", title: "Functional Mobility & Spine", category: "mobility", categoryLabel: "Mobility", coach: "Aria Chen", room: "Zen Loft", duration: "55 min", spotsLeft: 9, maxSpots: 25, intensity: "Moderate" },
  { id: "s25", day: "Sunday", time: "11:00 AM", title: "Recovery Foam & Cold Therapy", category: "mobility", categoryLabel: "Mobility", coach: "Staff Physio", room: "Spa Deck", duration: "45 min", spotsLeft: 6, maxSpots: 15, intensity: "Moderate" },
  { id: "s26", day: "Sunday", time: "04:00 PM", title: "Sunday Power Hour", category: "strength", categoryLabel: "Strength", coach: "Marcus Vance", room: "Iron Deck", duration: "60 min", spotsLeft: 8, maxSpots: 20, intensity: "High" },
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head Strength Coach & CSCS",
    experience: "12+ Years Experience",
    specialties: ["Powerlifting", "Hypertrophy", "Biomechanics", "Athletic Prep"],
    certification: "CSCS, USAW Level 2, Precision Nutrition L1",
    bio: "Former collegiate decathlete turned master strength coach. Marcus specializes in bulletproofing joints while packing on dense muscle.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80",
    stats: { clients: "450+", rating: "4.98" },
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Director of Conditioning & HIIT",
    experience: "8+ Years Experience",
    specialties: ["Metabolic Conditioning", "Kettlebells", "Endurance", "Fat Loss"],
    certification: "NASM-CPT, StrongFirst Kettlebell, TRX Master",
    bio: "High-octane motivator known for crafting sweat-drenched sessions that elevate VO2 max and burn calories long after leaving the gym.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80",
    stats: { clients: "620+", rating: "4.99" },
  },
  {
    id: "darius-drake",
    name: "Darius Drake",
    role: "Head Boxing & Striking Coach",
    experience: "10+ Years Experience",
    specialties: ["Pugilism", "Heavy Bag Flow", "Agility Footwork", "Defense"],
    certification: "USA Boxing Certified, ACE Master Trainer",
    bio: "Golden Gloves champion who translates authentic boxing fundamentals into explosive conditioning for everyday athletes.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
    stats: { clients: "380+", rating: "4.97" },
  },
  {
    id: "aria-chen",
    name: "Aria Chen",
    role: "Lead Mobility & Recovery Specialist",
    experience: "7+ Years Experience",
    specialties: ["Athletic Yoga", "Myofascial Release", "Breathwork", "Spine Health"],
    certification: "E-RYT 500, FRC Mobility Specialist, Licensed LMT",
    bio: "Bridging the gap between hardcore lifting and longevity. Aria helps athletes stay supple, pain-free, and performing at their absolute ceiling.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    stats: { clients: "510+", rating: "5.0" },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Pass",
    tagline: "Essential access to build consistency and momentum.",
    monthlyPrice: 49,
    annualMonthlyPrice: 39,
    features: [
      "Full access to Heavy Iron Deck & Cardio Mezzanine",
      "Standard Locker Room & Luxury Rain Showers",
      "Fit & Flex Mobile Workout Tracker App",
      "1 Free InBody Composition Scan per quarter",
      "WiFi & Free Protein Shake on Sign-Up",
    ],
    perks: ["Open gym access 24/7", "Over 350+ machines"],
    highlight: "Standard 24/7 Access",
  },
  {
    id: "pro",
    name: "Pro Athlete",
    tagline: "Our flagship membership for serious athletic progress.",
    badge: "Most Popular",
    popular: true,
    monthlyPrice: 89,
    annualMonthlyPrice: 69,
    features: [
      "Everything in Starter Pass",
      "UNLIMITED Group Classes (HIIT, Boxing, Yoga, Spin)",
      "Monthly InBody Scan with Biometric Tracking",
      "Finnish Sauna & Contrast Cold Plunge (4°C)",
      "2 Free Guest Passes each month",
      "10% Discount at the Fuel & Juice Bar",
    ],
    perks: ["Unlimited group classes", "Sauna & Cold Plunge access", "Guest privileges"],
    highlight: "Best Balance of Classes & Access",
  },
  {
    id: "vip",
    name: "Elite VIP",
    tagline: "The ultimate concierge fitness experience with zero compromises.",
    badge: "All-Inclusive",
    monthlyPrice: 159,
    annualMonthlyPrice: 129,
    features: [
      "Everything in Pro Athlete tier",
      "2 Monthly 1-on-1 Sessions with a Master Coach",
      "Private VIP Locker with Laundry & Fresh Towel Service",
      "Hyperice & Theragun Recovery Lounge Access",
      "Custom Nutrition Macro & Meal Planning",
      "Priority Booking for all high-demand classes",
      "24/7 Multi-Club Global Passport Access",
    ],
    perks: ["Private coaching included", "Towel & laundry service", "VIP Recovery suite"],
    highlight: "Private Training + Recovery Suite",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "David Sterling",
    achievement: "-18 kg Fat & Doubled Deadlift",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "Fit & Flex isn't just a gym; it's a transformation machine. The coaches hold you accountable, the equipment is pristine, and the energy when you walk in at 6 AM is unreal.",
    timeframe: "6 Months Member",
    rating: 5,
    program: "Iron Hypertrophy + InBody",
  },
  {
    id: "t2",
    name: "Samantha Wright",
    achievement: "Completed 1st Half-Marathon",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "The Velocity HIIT classes transformed my cardiovascular endurance completely. I went from struggling with a 5K to running a half-marathon with zero joint pain thanks to Aria's mobility sessions!",
    timeframe: "9 Months Member",
    rating: 5,
    program: "Velocity HIIT & Mobility",
  },
  {
    id: "t3",
    name: "Jordan Michaels",
    achievement: "+6 kg Lean Muscle Mass",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "Top-tier Eleiko bars, calibrated plates, and coaches who actually coach form. Upgraded to Pro Athlete within my first week and never looked back. Best fitness decision I've ever made.",
    timeframe: "1 Year Member",
    rating: 5,
    program: "Pro Athlete Membership",
  },
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: "iron-deck",
    name: "Heavy Iron Arena",
    tagline: "Calibrated Plates, Racks & Dumbbells up to 70kg",
    description: "Built for true strength enthusiasts. Features 12 Eleiko Olympic lifting platforms, Hammer Strength plate-loaded stations, and custom dumbbells.",
    specs: ["12 Olympic Lifting Platforms", "Eleiko IWF-spec barbells", "Dumbbells from 2kg to 70kg", "Belt squat & Glute-Ham developers"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cardio-deck",
    name: "Cardio & Conditioning Mezzanine",
    tagline: "Smart Telemetry & Metabolic Machines",
    description: "Equipped with Woodway curve treadmills, Concept2 rowers and SkiErgs, Keiser magnetic resistance bikes, and continuous biometric monitors.",
    specs: ["Woodway curved treadmills", "Concept2 Rowers & SkiErgs", "Wattbikes & Keiser M3i bikes", "Polar heart rate live telemetry"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "combat-octagon",
    name: "Combat & Striking Cage",
    tagline: "Authentic Boxing Ring & Heavy Bag Lineup",
    description: "Step into our fight zone featuring Fairtex heavy bags, teardrop bags, speed balls, and an Olympic sized sparring canvas.",
    specs: ["14 Heavy leather bags", "Speedbags & slip ropes", "Full regulation sparring floor", "Shock-absorbing tatami flooring"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "recovery-spa",
    name: "Contrast Recovery Suite",
    tagline: "Finnish Cedar Sauna & 4°C Cold Plunges",
    description: "Accelerate athletic restoration. Contrast therapy triggers powerful circulation, flushes lactic acid, and decreases systemic inflammation.",
    specs: ["Finnish dry cedar sauna (88°C)", "Dual cold plunge baths (4°C)", "Theragun percussion lounge", "Infrared light therapy pods"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fuel-bar",
    name: "Fuel & Nutrition Bar",
    tagline: "Cold-Pressed Juices, Whey Shakes & Macros",
    description: "Recharge immediately after your workout with chef-curated whole food meals, organic smoothies, and customized post-workout protein shakes.",
    specs: ["Grass-fed whey & vegan proteins", "Organic cold-pressed greens", "Electrolyte & hydration taps", "High-protein meal prep grab & go"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Membership",
    question: "How does the 7-Day Free Trial pass work?",
    answer: "Your 7-day pass starts on your first visit. You receive unlimited access to all gym floors, standard locker amenities, and 2 complimentary group fitness classes. There are zero hidden fees and no automatic renewal required.",
  },
  {
    id: "faq-2",
    category: "Membership",
    question: "Can I freeze or cancel my membership anytime?",
    answer: "Yes! We believe in earning your loyalty every month. You can freeze your membership for up to 3 months per year at zero cost, or cancel with a simple 14-day notice directly from the Fit & Flex app or front desk.",
  },
  {
    id: "faq-3",
    category: "Coaching",
    question: "I am a beginner. Are classes suitable for me?",
    answer: "Absolutely. Every single Fit & Flex class offers three tiers of scaling (Beginner, Intermediate, and Advanced). Our coaches introduce the movements 10 minutes prior to every session to ensure safe, confident execution.",
  },
  {
    id: "faq-4",
    category: "Facilities",
    question: "What amenities are included in the locker rooms?",
    answer: "Our locker rooms feature keyless digital lockers, private rainfall showers, luxury Malin+Goetz grooming amenities, Dyson supersonic hairdryers, sauna access, and complimentary clean towel service for Pro and VIP members.",
  },
  {
    id: "faq-5",
    category: "Facilities",
    question: "Are there parking and transit options available?",
    answer: "Yes, we provide 2 hours of complimentary validated underground parking for all active members, as well as a dedicated indoor secure bike cage and proximity to Metro Central Station (3-minute walk).",
  },
  {
    id: "faq-6",
    category: "Coaching",
    question: "How do I book personal training or InBody scans?",
    answer: "You can book sessions directly through the Fit & Flex member portal, mobile app, or by speaking with our front desk team. Pro members receive a complimentary monthly scan, and VIP members receive 2 monthly coaching sessions included.",
  },
];
