export interface Review {
  name: string;
  location: string;
  text: string;
  color: string;
}

export interface WhyCard {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  tier: string;
  priceINR: string;
  priceUSD: string;
  desc: string;
  features: { text: string; included: boolean }[];
  featured?: boolean;
  btnLabel: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Stat {
  prefix?: string;
  target: number;
  suffix: string;
  label: string;
  isFloat?: boolean;
}

export const REVIEWS: Review[] = [
  { name: "Sanjay Malhotra", location: "Franchise owner · Gurugram", text: "I was a marketing professional for 12 years before this. Roastoria's systems made the switch seamless. We crossed ₹1 Cr annual revenue in our second year.", color: "#c8922a" },
  { name: "Preethi Krishnan", location: "Owner · Koramangala, Bengaluru", text: "The location intelligence team found us our spot. The footfall projection was almost exactly right. Within 18 months we were profitable.", color: "#8b6030" },
  { name: "Rahul Verma", location: "Multi-outlet owner · Pune", text: "I started with one café. Now I run four Roastorias. The brand support never dropped — they treat outlet four like they treated outlet one.", color: "#6b4c2a" },
  { name: "Aisha Siddiqui", location: "Owner · Lucknow", text: "Being from a non-F&B background scared me. The 60-day training was so thorough I felt ready. Day one was exciting, not terrifying.", color: "#a07040" },
  { name: "Vikram Nair", location: "Drive-thru owner · NH48 Corridor", text: "The drive-thru format on the highway was Roastoria's idea. They saw the gap before I did. We serve 400+ customers on weekends now.", color: "#d4a843" },
  { name: "Meenakshi Iyer", location: "Kiosk owner · Phoenix Mall, Chennai", text: "Small investment, huge returns. My kiosk at the mall pays back every rupee within the first 20 days of the month.", color: "#b8741a" },
  { name: "Arjun Kapoor", location: "Café owner · Connaught Place, Delhi", text: "The marketing engine they run nationally brings customers in the door. I focus on experience and retention — they handle awareness.", color: "#9a6020" },
  { name: "Deepa Menon", location: "Owner · Kochi", text: "The supply chain is genuinely world-class. My beans come from Coorg and every batch is consistent. Customers comment on quality every single day.", color: "#c07828" },
];

export const WHY_CARDS: WhyCard[] = [
  { num: "01", icon: "🎓", title: "60-day onboarding", desc: "Hands-on training at our Bengaluru academy covering operations, barista craft, inventory, and customer experience. Ready before day one." },
  { num: "02", icon: "📦", title: "Supply chain mastery", desc: "Direct sourcing from Coorg, Chikmagalur & Araku estates. Centralized roasting ensures every cup is consistent across every outlet, always." },
  { num: "03", icon: "📊", title: "Real-time analytics", desc: "Your dashboard shows revenue, footfall, staff performance, and inventory — live. Make decisions on data, not gut feeling." },
  { num: "04", icon: "📍", title: "Location intelligence", desc: "Our team uses foot traffic data, competitor mapping, and demographic analysis to find the highest-potential location in your city." },
  { num: "05", icon: "📣", title: "National marketing engine", desc: "You benefit from our national campaigns, influencer tie-ups, and festive promotions — at zero additional cost to you." },
  { num: "06", icon: "🤝", title: "Dedicated franchise partner", desc: "Every franchisee gets a dedicated relationship manager — reachable 6 days a week — for operations, compliance, and growth support." },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: "Kiosk",
    priceINR: "12L",
    priceUSD: "$14K",
    desc: "A compact, high-traffic kiosk perfect for malls, airports, and corporate parks.",
    features: [
      { text: "100–200 sq ft format", included: true },
      { text: "Full equipment package", included: true },
      { text: "60-day training", included: true },
      { text: "Supply chain access", included: true },
      { text: "Brand & marketing support", included: true },
      { text: "Dine-in seating", included: false },
      { text: "Food menu expansion", included: false },
    ],
    btnLabel: "Apply for kiosk",
  },
  {
    tier: "Café",
    priceINR: "28L",
    priceUSD: "$34K",
    desc: "A full-format café with seating — the flagship Roastoria experience and our highest-revenue format.",
    features: [
      { text: "600–1200 sq ft format", included: true },
      { text: "Premium equipment package", included: true },
      { text: "60-day training program", included: true },
      { text: "Full food + beverage menu", included: true },
      { text: "National campaign inclusion", included: true },
      { text: "Dine-in + takeaway", included: true },
      { text: "Dedicated franchise partner", included: true },
    ],
    featured: true,
    btnLabel: "Apply for café",
  },
  {
    tier: "Drive-Thru / Express",
    priceINR: "45L",
    priceUSD: "$54K",
    desc: "High-volume drive-thru designed for highways, fuel stations, and suburban high streets.",
    features: [
      { text: "Custom site planning", included: true },
      { text: "Drive-thru infrastructure", included: true },
      { text: "90-day extended training", included: true },
      { text: "Multi-lane capability", included: true },
      { text: "Full food + beverage menu", included: true },
      { text: "Priority support SLA", included: true },
      { text: "Multi-outlet pricing available", included: true },
    ],
    btnLabel: "Talk to us",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "Apply online", desc: "Fill our 5-minute franchise inquiry form. Our team reviews every application within 48 hours." },
  { num: "02", title: "Discovery call", desc: "A senior franchise manager walks you through investment, location strategy, and expected returns." },
  { num: "03", title: "Sign & set up", desc: "Agreement, site finalization, and store buildout — our team is on-site for the entire setup phase." },
  { num: "04", title: "Grand opening", desc: "60-day training complete, your team is ready. We manage launch day marketing so you start with a crowd." },
];

export const STATS: Stat[] = [
  { target: 480, suffix: "+", label: "Outlets across India" },
  { prefix: "₹", target: 2, suffix: "Cr+", label: "Top franchisee annual revenue" },
  { target: 18, suffix: "mo", label: "Average ROI breakeven" },
  { target: 96, suffix: "%", label: "Franchisee renewal rate" },
];
